import Image from "next/image"

type ResetPopupMockProps = {
  stepLabel?: string
  exercise?: string
  instruction?: string
  timeLabel?: string
  giraffeSrc?: string
  giraffeAlt?: string
}

export function ResetPopupMock({
  stepLabel = "EXERCISE 1 OF 3",
  exercise = "Seated cat-cow",
  instruction = "Hands on knees. Inhale and arch your back, chest forward, shoulders back. Exhale and round your spine, chin to chest. 10 slow cycles.",
  timeLabel = "0:48",
  giraffeSrc = "/seated-cat-cow.gif",
  giraffeAlt = "Giraffe mascot demonstrating a seated cat-cow stretch",
}: ResetPopupMockProps) {
  return (
    <div className="w-[322px] rounded-[22px] border border-border bg-[#faf8f3] p-4 shadow-[0_30px_70px_-34px_rgba(42,38,32,0.4)]">
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 py-6 text-center">
        <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/80">
          {stepLabel}
        </div>
        <h2 className="font-heading text-[21px] font-semibold text-foreground">{exercise}</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">{instruction}</p>

        <div className="flex size-[150px] items-center justify-center">
          <Image
            src={giraffeSrc}
            alt={giraffeAlt}
            width={150}
            height={150}
            unoptimized
            className="h-full w-full object-contain"
          />
        </div>

        {/* Timer ring */}
        <div className="relative flex size-[120px] items-center justify-center">
          <div className="size-[120px] rounded-full border-8 border-secondary" />
          <div
            className="absolute inset-0 rounded-full border-8 border-primary"
            style={{
              clipPath:
                "polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 30%)",
              transform: "rotate(8deg)",
            }}
          />
          <span className="absolute text-[22px] font-bold tabular-nums text-foreground">
            {timeLabel}
          </span>
        </div>

        <div className="flex w-full gap-2">
          <button
            type="button"
            className="flex-1 rounded-xl border border-border bg-secondary px-0 py-3 text-sm font-semibold text-foreground"
          >
            ‹ Back
          </button>
          <button
            type="button"
            className="flex-1 rounded-xl bg-primary px-0 py-3 text-sm font-semibold text-white"
          >
            Next ›
          </button>
        </div>
      </div>
    </div>
  )
}
