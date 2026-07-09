import { ResetPopupMock } from "@/components/reset-popup-mock"

const beats = [
  {
    lead: "Get ready.",
    body: "A three-second cue so you’re never caught mid-sip.",
  },
  {
    lead: "Follow along.",
    body: "Neck, back and posture stretches, demonstrated by the giraffe.",
  },
  {
    lead: "Next up.",
    body: "A soft chime and preview flow you into the following move.",
  },
]

export function DemoPlan() {
  return (
    <section className="bg-white px-5 py-18 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
        <div className="relative flex justify-center">
          <div
            className="pointer-events-none absolute top-2.5 h-[420px] w-[360px] max-w-full rounded-full blur-[50px]"
            style={{
              background:
                "radial-gradient(closest-side, rgba(224,169,55,0.28), rgba(224,169,55,0))",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <ResetPopupMock
              stepLabel="EXERCISE 2 OF 3"
              exercise="Shoulder rolls"
              instruction="Roll your shoulders slowly backward. Big, smooth circles — let them drop."
              timeLabel="0:24"
              giraffeSrc="/norm.png"
              giraffeAlt="Giraffe mascot at a desk"
            />
          </div>
        </div>
        <div>
          <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-muted-foreground/80">
            A reset, start to finish
          </span>
          <h2 className="mb-6 mt-2.5 font-heading text-[32px] font-semibold tracking-tight text-foreground md:text-[38px]">
            Guided, gentle, and over before you miss it.
          </h2>
          <div className="flex flex-col gap-[18px]">
            {beats.map((beat) => (
              <div key={beat.lead} className="flex items-start gap-3.5">
                <span className="mt-[7px] size-[9px] shrink-0 rounded-full bg-primary" />
                <p className="text-[15px] leading-relaxed">
                  <strong className="font-semibold text-foreground">{beat.lead}</strong>{" "}
                  <span className="text-muted-foreground">{beat.body}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
