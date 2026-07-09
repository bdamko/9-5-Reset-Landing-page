const features = [
  {
    bar: "bg-primary",
    title: "Calendar-aware",
    body: "Never nudges during a meeting — only in the genuine gaps.",
  },
  {
    bar: "bg-accent",
    title: "Guided sessions",
    body: "Neck, back and posture stretches, timed and demonstrated.",
  },
  {
    bar: "bg-primary",
    title: "Personalized to you",
    body: "A quick energy check tailors each day’s breaks to how you actually feel.",
  },
  {
    bar: "bg-accent",
    title: "Free, no account",
    body: "Runs fully signed-out with two resets a day. Sign in only for Pro.",
  },
  {
    bar: "bg-primary",
    title: "English & Русский",
    body: "Every prompt and exercise, fully translated.",
  },
  {
    bar: "bg-accent",
    title: "Private by design",
    body: "Read-only calendar access. We see when you’re busy, nothing more.",
  },
]

export function Features() {
  return (
    <section id="features" className="px-5 py-18 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-11 font-heading text-4xl font-semibold tracking-tight text-foreground">
          Small extension, thoughtful details.
        </h2>
        <div className="grid gap-x-7 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title}>
              <div className={`h-1 w-[30px] rounded-full ${feature.bar}`} />
              <h3 className="mb-1.5 mt-3.5 text-[17px] font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-muted-foreground">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
