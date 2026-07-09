const steps = [
  {
    n: "1",
    tint: "bg-primary/15 text-primary",
    title: "Connect your calendar",
    body: "Read-only Google Calendar access. We only look at when you’re busy — never the details.",
  },
  {
    n: "2",
    tint: "bg-accent/15 text-[#9c5f2e]",
    title: "We find the real gaps",
    body: "The extension spots the open minutes between meetings and quietly schedules resets there.",
  },
  {
    n: "3",
    tint: "bg-primary/15 text-primary",
    title: "Reset in two minutes",
    body: "A gentle nudge, a “get ready” beat, then a personalized stretch matched to how you feel.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="bg-secondary px-5 py-18 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-muted-foreground/80">
          How it works
        </span>
        <h2 className="mb-11 mt-2.5 font-heading text-4xl font-semibold tracking-tight text-foreground">
          Three steps, then it runs itself.
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.n}
              className="rounded-[20px] border border-border bg-card p-7 shadow-[0_20px_40px_-34px_rgba(51,48,43,0.4)]"
            >
              <div
                className={`flex size-10 items-center justify-center rounded-xl text-lg font-bold ${step.tint}`}
              >
                {step.n}
              </div>
              <h3 className="mb-2 mt-5 text-[19px] font-semibold text-foreground">{step.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
