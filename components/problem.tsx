import Image from "next/image"

const pains = [
  {
    bar: "bg-primary",
    title: "Hours without standing",
    body: "The calendar fills up and the body pays for it — stiff neck, tight back, low energy by 3pm.",
  },
  {
    bar: "bg-accent",
    title: "Reminders you ignore",
    body: "Generic “time to move” nudges fire mid-meeting and get dismissed. Timing is everything.",
  },
  {
    bar: "bg-primary",
    title: "No time to plan it",
    body: "Nobody schedules their own stretch breaks. So the breaks have to schedule themselves.",
  },
]

export function Problem() {
  return (
    <section className="border-t border-border/60 bg-white px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
          <h2 className="max-w-[560px] text-balance text-center font-heading text-3xl font-semibold tracking-tight text-foreground md:text-left md:text-[34px]">
            Back-to-back calls leave no room to move.
          </h2>
          <Image
            src="/sad.png"
            alt="Tired giraffe mascot slumped over a laptop"
            width={190}
            height={190}
            className="h-auto w-40 shrink-0 md:w-[190px]"
          />
        </div>
        <div className="mt-9 grid gap-7 md:grid-cols-3">
          {pains.map((pain) => (
            <div key={pain.title} className="flex flex-col gap-2">
              <div className={`h-1 w-[34px] rounded-full ${pain.bar}`} />
              <h3 className="mt-1 text-[17px] font-semibold text-foreground">{pain.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{pain.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
