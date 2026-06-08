const plan = [
  { time: "10:40", label: "3-min neck and shoulder reset" },
  { time: "12:30", label: "Lunch tip: protein + fiber + water before second coffee" },
  { time: "15:15", label: "8-min energy walk" },
  { time: "18:10", label: "12-min after-work back reset" },
]

export function DemoPlan() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-5">
        <div className="rounded-[2rem] border border-border bg-card p-7 shadow-md md:p-9">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-base">
              <span aria-hidden="true">🦐</span>
            </span>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">Today&apos;s 9–5 Reset</h2>
          </div>
          <ul className="mt-6 flex flex-col gap-3">
            {plan.map((item) => (
              <li
                key={item.time}
                className="flex items-start gap-4 rounded-2xl bg-muted/60 px-4 py-3.5"
              >
                <span className="mt-0.5 shrink-0 rounded-lg bg-primary/10 px-2.5 py-1 text-sm font-bold text-primary">
                  {item.time}
                </span>
                <span className="text-sm font-medium leading-relaxed text-foreground">{item.label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-center text-sm text-muted-foreground">Designed around your actual calendar.</p>
        </div>
      </div>
    </section>
  )
}
