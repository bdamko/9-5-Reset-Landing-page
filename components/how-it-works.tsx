import { CalendarPlus, Search, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Search,
    step: "1",
    title: "Pick your focus area",
    body: "Neck, back, or both. Your 4-week movement plan is built around your focus area.",
  },
  {
    icon: CalendarPlus,
    step: "2",
    title: "Set your schedule (or sync your calendar)",
    body: "Enter your work hours manually — free. Connect your calendar on Pro for automatic gap detection.",
  },
  {
    icon: Sparkles,
    step: "3",
    title: "Get your daily resets",
    body: "Short targeted sessions for 3 to 12 minutes. Built for desk workers, not athletes.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          How it works
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.step} className="relative rounded-3xl border border-border bg-card p-6 pt-8 text-center shadow-sm">
              <span className="absolute -top-4 left-1/2 flex size-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {step.step}
              </span>
              <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
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
