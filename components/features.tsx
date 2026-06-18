import Image from "next/image"
import { CalendarCheck, Timer, Dumbbell, Battery } from "lucide-react"

const features = [
  {
    icon: Timer,
    title: "Neck & back recovery program",
    body: "A structured recovery plan that progresses week by week, helping you build strength and mobility instead of repeating random exercises.",
  },
  {
    icon: CalendarCheck,
    title: "Sessions timed to your day",
    body: "A gentle break timer nudges you to sit up and move. Before it checks your calendar to never interrupt you mid-meeting.",
  },
  {
    icon: Dumbbell,
    title: "Built for your specific pain",
    body: "Neck-focused, back-focused, or both. Your program adjusts accordingly. ",
  },
  {
    icon: Battery,
    title: "One-tap energy check",
    body: "Choose your energy mode in the morning. Your sessions for the day adjust to match your well-being.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex justify-center sm:hidden">
          <Image
            src="/happyg.png"
            alt="Happy giraffe mascot celebrating at a desk"
            width={150}
            height={150}
            className="h-auto w-52"
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            Built for the 9-to-5 reality
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Tiny resets that work around your real workday
          </h2>
          <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
            No gym, no long workouts. 9–5 Reset slips small healthy moments into the gaps you already have.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <feature.icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
            </div>
          ))}
          <div className="hidden items-center justify-center lg:flex">
            <Image
              src="/happyg.png"
              alt="Happy giraffe mascot celebrating at a desk"
              width={300}
              height={300}
              className="h-auto w-full max-w-[260px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
