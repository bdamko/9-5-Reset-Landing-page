import { Webhooks } from "@polar-sh/nextjs"

// Reuses the same Supabase project as the waitlist form. The URL is already
// public (NEXT_PUBLIC_*); the service role key is server-only and must never
// be shipped to the extension or any client bundle.
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!

async function upsertSubscriber(row: {
  email: string
  is_pro: boolean
  polar_customer_id?: string | null
  plan?: string | null
}) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      Prefer: "resolution=merge-duplicates",
    },
    body: JSON.stringify([row]),
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Supabase upsert failed (${response.status}): ${body}`)
  }
}

// Polar's webhook payloads nest customer/product info under `data`, but the
// exact field names have shifted across SDK versions in their own docs —
// these fall back across the shapes we've seen documented. Before going
// live, send one real test event from the Polar dashboard and confirm
// `data.customer.email` (or whichever fallback fires) actually has the
// buyer's email.
// Normalized to lowercase: `email` is the subscribers table's primary key,
// and Polar passes through whatever case the customer typed at checkout —
// without this, the same person paying with "User@x.com" one month and
// "user@x.com" the next would create two separate rows for the same email.
function getEmail(data: any): string | undefined {
  const email = data?.customer?.email ?? data?.customer_email
  return email?.toLowerCase().trim()
}

function getCustomerId(data: any): string | undefined {
  return data?.customer_id ?? data?.customer?.id
}

export const POST = Webhooks({
  webhookSecret: process.env.POLAR_WEBHOOK_SECRET!,

  // One-time purchase — the "$12 lifetime" checkout link.
  // order.paid also fires for a subscription's first invoice; skip those
  // here since onSubscriptionActive already grants Pro for the monthly plan,
  // and we don't want to mislabel a monthly subscriber's plan as "lifetime".
  onOrderPaid: async (payload) => {
    const data: any = payload.data
    if (data?.subscription_id) return

    const email = getEmail(data)
    if (!email) return

    await upsertSubscriber({
      email,
      is_pro: true,
      polar_customer_id: getCustomerId(data) ?? null,
      plan: "lifetime",
    })
  },

  // Recurring subscription — the "$5.99/month" checkout link — becomes active.
  onSubscriptionActive: async (payload) => {
    const data: any = payload.data
    const email = getEmail(data)
    if (!email) return

    await upsertSubscriber({
      email,
      is_pro: true,
      polar_customer_id: getCustomerId(data) ?? null,
      plan: "monthly",
    })
  },

  // Cancellation (which may just mean "won't renew at period end") and
  // outright revocation both turn Pro off immediately, per spec. Only
  // is_pro is sent so plan/polar_customer_id are preserved for reference.
  onSubscriptionCanceled: async (payload) => {
    const email = getEmail(payload.data as any)
    if (!email) return
    await upsertSubscriber({ email, is_pro: false })
  },

  onSubscriptionRevoked: async (payload) => {
    const email = getEmail(payload.data as any)
    if (!email) return
    await upsertSubscriber({ email, is_pro: false })
  },
})
