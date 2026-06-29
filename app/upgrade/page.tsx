import { Button } from "@/components/ui/button"

// Polar Checkout Links — create one "lifetime" (one-time) product and one
// "monthly" (recurring) product in the Polar dashboard, then paste their
// checkout links here (or set the env vars below).
const LIFETIME_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_POLAR_LIFETIME_CHECKOUT_URL || "https://buy.polar.sh/polar_cl_60vsmQfiAzgs5EdJgh1k2KBiVpSBcUMCMNk0l3fhyyE"
const MONTHLY_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_POLAR_MONTHLY_CHECKOUT_URL || "https://buy.polar.sh/polar_cl_XiXRNkZNwH8EgEMEdyIMyBgJmj5L2KjTRKCAe0IV4kA"

// Polar Checkout Links support pre-filling the customer email via
// ?customer_email= so the email used to sign in inside the extension is the
// same one tied to the payment.
function withEmail(url: string, email?: string) {
  if (!email) return url
  try {
    const withParam = new URL(url)
    withParam.searchParams.set("customer_email", email)
    return withParam.toString()
  } catch {
    return url
  }
}

export default async function UpgradePage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string; success?: string }>
}) {
  const { email, success } = await searchParams

  const tiers = [
    {
      name: "Lifetime",
      price: "$12",
      period: "one-time",
      blurb: "Pay once, Pro forever.",
      url: withEmail(LIFETIME_CHECKOUT_URL, email),
      cta: "Get lifetime access",
    },
    {
      name: "Monthly",
      price: "$5.99",
      period: "/month",
      blurb: "Cancel anytime.",
      url: withEmail(MONTHLY_CHECKOUT_URL, email),
      cta: "Subscribe monthly",
    },
  ]

  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <h1 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Unlock 9–5 Reset Pro
        </h1>
        <p className="mt-3 text-center text-lg text-muted-foreground">
          Calendar sync and every reset window for the day, unblurred.
        </p>

        {success ? (
          <div className="mx-auto mt-6 max-w-md rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-4 text-center">
            <p className="font-medium text-emerald-600 dark:text-emerald-400">
              Payment received — you&rsquo;re Pro now! 🎉
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              You may return to the extension to start using it.
            </p>
          </div>
        ) : null}

        {email ? (
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Paying with <span className="font-medium text-foreground">{email}</span> — the same email
            you signed in with in the extension.
          </p>
        ) : (
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Sign in inside the extension first, then come back here from the &ldquo;Unlock with
            Pro&rdquo; button so your payment links to the right account.
          </p>
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-foreground">{tier.name}</h2>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">{tier.price}</span>
                <span className="pb-1 text-sm text-muted-foreground">{tier.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{tier.blurb}</p>
              <Button
                render={<a href={tier.url} />}
                nativeButton={false}
                size="lg"
                variant="default"
                className="mt-7 rounded-full"
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
