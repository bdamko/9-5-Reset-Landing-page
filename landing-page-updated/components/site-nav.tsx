import { Button } from "@/components/ui/button"

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-base">
            <span aria-hidden="true">🦐</span>
            <span className="sr-only">9–5 Reset logo</span>
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground">9–5 Reset</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#how" className="transition-colors hover:text-foreground">
            How it works
          </a>
          <a href="#pricing" className="transition-colors hover:text-foreground">
            Pricing
          </a>
        </nav>
        <Button render={<a href="#early-access" />} nativeButton={false} className="rounded-full">
          Join early access
        </Button>
      </div>
    </header>
  )
}
