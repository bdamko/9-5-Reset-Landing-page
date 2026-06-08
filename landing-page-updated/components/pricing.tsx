import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["Calendar sync", "3 resets per week", "Basic posture tips"],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$7.99",
    period: "/month",
    badge: "Early price",
    features: [
      "Unlimited resets",
      "Posture breaks",
      "Low/Normal/High Energy modes",
      "After-work recovery",
      "Weekly report",
    ],
    cta: "Join early access",
    highlighted: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Simple pricing
        </h2>
        <p className="mt-3 text-center text-lg text-muted-foreground">Start free. Go Pro when you&apos;re ready.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-3xl border p-7 shadow-sm ${
                tier.highlighted ? "border-primary bg-card ring-2 ring-primary/30" : "border-border bg-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                {tier.badge && (
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {tier.badge}
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">{tier.price}</span>
                <span className="pb-1 text-sm text-muted-foreground">{tier.period}</span>
              </div>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground">
                    <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                render={<a href="#early-access" />}
                nativeButton={false}
                size="lg"
                variant={tier.highlighted ? "default" : "outline"}
                className="mt-7 rounded-full"
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
