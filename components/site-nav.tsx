const CHROME_URL =
  "https://chromewebstore.google.com/detail/egmmjbngijkjiabahmaaabbkcknjahcl?utm_source=item-share-cb"

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="font-heading text-[22px] font-semibold tracking-tight text-foreground">
          9–5 Reset
        </a>
        <nav className="flex items-center gap-5 md:gap-6">
          <a
            href="#how"
            className="hidden text-[14.5px] font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            How it works
          </a>
          <a
            href="#features"
            className="hidden text-[14.5px] font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="hidden text-[14.5px] font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Pricing
          </a>
          <span className="flex size-[34px] items-center justify-center rounded-full border border-border bg-[#EDF3F7] text-[11px] font-bold text-[#5E86A8]">
            EN
          </span>
          <a
            href={CHROME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_-12px_rgba(224,169,55,0.5)] transition-opacity hover:opacity-90"
          >
            Add to Chrome — free
          </a>
        </nav>
      </div>
    </header>
  )
}
