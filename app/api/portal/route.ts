import { Polar } from "@polar-sh/sdk"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!
const POLAR_ACCESS_TOKEN = process.env.POLAR_ACCESS_TOKEN!

export async function GET(req: NextRequest) {
  try {
    const email = req.nextUrl.searchParams.get("email")?.toLowerCase().trim()
    if (!email) {
      return NextResponse.json({ error: "missing_email" }, { status: 400 })
    }

    if (!SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json({ error: "SUPABASE_SERVICE_ROLE_KEY not configured" }, { status: 500 })
    }
    if (!POLAR_ACCESS_TOKEN) {
      return NextResponse.json({ error: "POLAR_ACCESS_TOKEN not configured" }, { status: 500 })
    }

    // Look up polar_customer_id in Supabase
    const params = new URLSearchParams({ select: "polar_customer_id", email: `eq.${email}` })
    const supabaseRes = await fetch(`${SUPABASE_URL}/rest/v1/subscribers?${params.toString()}`, {
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      },
    })

    if (!supabaseRes.ok) {
      const detail = await supabaseRes.text()
      console.error("[/api/portal] supabase error:", supabaseRes.status, detail)
      return NextResponse.json(
        { error: "supabase_lookup_failed", status: supabaseRes.status, detail },
        { status: 500 }
      )
    }

    const rows = await supabaseRes.json()
    const customerId = rows[0]?.polar_customer_id

    if (!customerId) {
      return NextResponse.json({ error: "no_polar_customer_for_email", email }, { status: 404 })
    }

    // Create Polar customer portal session
    const server = (process.env.POLAR_SERVER ?? "production") as "production" | "sandbox"
    const polar = new Polar({ accessToken: POLAR_ACCESS_TOKEN, server })

    const { customerPortalUrl } = await polar.customerSessions.create({ customerId })

    return NextResponse.redirect(customerPortalUrl)
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error("[/api/portal] unexpected error:", message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
