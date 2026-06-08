import { Armchair, Clock, BellOff } from "lucide-react"

const pains = [
  {
    icon: Armchair,
    title: "Chronic stiffness",
    body: "Eight hours hunched over a screen leaves your body feeling like a question mark.",
  },
  {
    icon: Clock,
    title: "No time or energy for long workouts",
    body: "Between back-to-back meetings, a full gym session is never going to happen.",
  },
  {
    icon: BellOff,
    title: "Random reminders don't fit your actual schedule",
    body: "Generic \"time to move!\" pings always seem to fire in the middle of a call.",
  },
]

export function Problem() {
  return (
    <section className="bg-muted/40 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Your workday is hurting your body.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pains.map((pain) => (
            <div key={pain.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                <pain.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{pain.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pain.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
