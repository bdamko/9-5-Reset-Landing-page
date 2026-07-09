import { Check } from "lucide-react"

const CHROME_URL =
  "https://chromewebstore.google.com/detail/egmmjbngijkjiabahmaaabbkcknjahcl?utm_source=item-share-cb"

const proFeatures = [
  "Weekly movement plan",
  "Unlimited daily sessions",
  "Calendar sync with Apple, Google & Outlook",
  "Low/Normal/High Energy modes",
  "Weekly progress report",
]

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["Manual schedule", "3 sessions per week", "Week 1 of the neck & back movement plan"],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Lifetime",
    price: "$12",
    period: "one-time",
    badge: "Best value",
    features: ["Pay once, Pro forever", ...proFeatures],
    cta: "Get lifetime access",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$5.99",
    period: "/month",
    badge: "Early price",
    features: proFeatures,
    cta: "Subscribe monthly",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-secondary px-5 py-18 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-balance text-center font-heading text-4xl font-semibold tracking-tight text-foreground">
          Simple pricing
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[17px] leading-relaxed text-muted-foreground">
          Start with a 1-week neck &amp; back reset. Then keep going — new routines, new focus areas,
          and calendar sync keep working every day.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-[22px] border bg-card p-7 shadow-[0_20px_45px_-38px_rgba(51,48,43,0.5)] ${
                tier.highlighted ? "border-primary ring-2 ring-primary/25" : "border-border"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[19px] font-semibold text-foreground">{tier.name}</h3>
                {tier.badge && (
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    {tier.badge}
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="font-heading text-[40px] font-semibold leading-none tracking-tight text-foreground">
                  {tier.price}
                </span>
                <span className="pb-1 text-sm text-muted-foreground">{tier.period}</span>
              </div>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[15px] text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={CHROME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 rounded-xl px-5 py-3.5 text-center text-[15px] font-semibold transition-opacity hover:opacity-90 ${
                  tier.highlighted
                    ? "bg-primary text-white shadow-[0_16px_34px_-14px_rgba(224,169,55,0.55)]"
                    : "border border-border bg-white text-foreground"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
