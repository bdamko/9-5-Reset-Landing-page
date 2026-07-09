import { ResetPopupMock } from "@/components/reset-popup-mock"

const CHROME_URL =
  "https://chromewebstore.google.com/detail/egmmjbngijkjiabahmaaabbkcknjahcl?utm_source=item-share-cb"

export function Hero() {
  return (
    <section id="top" className="px-5 pb-20 pt-14 text-center md:px-8 md:pt-16">
      <h1 className="mx-auto max-w-[820px] text-balance font-heading text-[44px] font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-[72px]">
        Your next break is already scheduled
      </h1>
      <p className="mx-auto mt-5 max-w-[610px] text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
        A Chrome extension that finds the free moments in your workday and turns them into
        personalized movement breaks.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={CHROME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-xl bg-primary px-8 py-4 text-[15.5px] font-semibold text-white shadow-[0_16px_34px_-14px_rgba(224,169,55,0.55)] transition-opacity hover:opacity-90 sm:w-auto"
        >
          Add to Chrome — free
        </a>
        <a
          href="#how"
          className="w-full rounded-xl border border-border bg-secondary px-7 py-4 text-[15.5px] font-semibold text-foreground transition-colors hover:bg-secondary/70 sm:w-auto"
        >
          See how it works →
        </a>
      </div>
      <p className="mt-5 text-[13.5px] text-muted-foreground/80">
        No account needed · 2 resets a day free
      </p>

      <div className="relative mt-14 flex justify-center">
        <div
          className="pointer-events-none absolute top-0 h-[470px] w-[560px] max-w-full rounded-full blur-[55px]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(224,169,55,0.5), rgba(224,169,55,0))",
          }}
          aria-hidden="true"
        />
        <div className="animate-floaty relative">
          <ResetPopupMock />
        </div>
      </div>
    </section>
  )
}
