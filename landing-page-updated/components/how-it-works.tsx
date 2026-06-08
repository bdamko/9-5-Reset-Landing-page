import { CalendarPlus, Search, Sparkles } from "lucide-react"

const steps = [
  {
    icon: CalendarPlus,
    step: "1",
    title: "Connect your calendar",
    body: "Link Apple/Google/Outlook Calendar to the app. We only look for free time.",
  },
  {
    icon: Search,
    step: "2",
    title: "We find your free windows",
    body: "9–5 Reset spots the 5–15 minute gaps between your meetings, automatically.",
  },
  {
    icon: Sparkles,
    step: "3",
    title: "Get tiny resets",
    body: "Bite-sized moves for movement, posture, lunch, and after-work recovery.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          How it works
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.step} className="relative rounded-3xl border border-border bg-card p-7 text-center shadow-sm">
              <span className="absolute -top-4 left-1/2 flex size-9 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {step.step}
              </span>
              <div className="mx-auto mt-2 flex size-14 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                <step.icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
