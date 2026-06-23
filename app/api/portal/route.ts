import { CustomerPortal } from "@polar-sh/nextjs"
import type { NextRequest } from "next/server"

// Resolves ?email= (set by the extension's "Manage subscription" button) to
// the Polar customer ID stored on their subscribers row, then redirects into
// Polar's hosted Customer Portal — where a monthly subscriber can cancel.
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!

async function getCustomerId(req: NextRequest): Promise<string> {
  const email = req.nextUrl.searchParams.get("email")?.toLowerCase().trim()
  if (!email) throw new Error("missing_email")

  const params = new URLSearchParams({ select: "polar_customer_id", email: `eq.${email}` })
  const response = await fetch(`${SUPABASE_URL}/rest/v1/subscribers?${params.toString()}`, {
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    },
  })
  if (!response.ok) throw new Error(`subscribers lookup failed (${response.status})`)

  const rows = await response.json()
  const customerId = rows[0]?.polar_customer_id
  if (!customerId) throw new Error("no_polar_customer_for_email")
  return customerId
}

export const GET = CustomerPortal({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
  server: "production",
  getCustomerId,
})
