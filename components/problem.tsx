import { Armchair, Clock, BellOff } from "lucide-react"

const pains = [
  {
    icon: Armchair,
    title: "Chronic neck and back pain",
    body: "Sitting for 8 hours compresses your spine and locks up your neck. It can't be fixed with a few gym sessions each week.",
  },
  {
    icon: Clock,
    title: "No program built for your schedule",
    body: "You don't have 45 minutes. The gap between your 2pm and 3pm is enough.",
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
