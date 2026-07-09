import Image from "next/image"

const CHROME_URL =
  "https://chromewebstore.google.com/detail/egmmjbngijkjiabahmaaabbkcknjahcl?utm_source=item-share-cb"

export function FinalCta() {
  return (
    <section className="bg-secondary px-5 py-20 text-center md:px-8">
      <Image
        src="/happyg.png"
        alt="Happy giraffe mascot celebrating"
        width={158}
        height={158}
        className="relative z-10 mx-auto -mb-8 h-auto w-[140px] md:w-[158px]"
      />
      <div className="mx-auto max-w-[640px] rounded-[26px] border border-border bg-card px-8 py-12 shadow-[0_30px_60px_-40px_rgba(51,48,43,0.45)] md:px-10 md:py-14">
        <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-[42px]">
          Give your workday a reset.
        </h2>
        <p className="mt-3.5 text-[17px] text-muted-foreground">
          Free to add. Two resets a day, on the house.
        </p>
        <a
          href={CHROME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-[0_16px_34px_-14px_rgba(224,169,55,0.55)] transition-opacity hover:opacity-90"
        >
          Add to Chrome — free
        </a>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-[#33302b] px-5 py-7 md:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <span className="font-heading text-base text-[#f1ede4]">9–5 Reset</span>
        <div className="flex gap-6">
          <a href="/privacy" className="text-sm text-[#C7BEAE] transition-opacity hover:opacity-80">
            Privacy
          </a>
          <a
            href={CHROME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#C7BEAE] transition-opacity hover:opacity-80"
          >
            Chrome Web Store
          </a>
        </div>
      </div>
    </footer>
  )
}
