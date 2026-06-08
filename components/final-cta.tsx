import Image from "next/image"
import { Button } from "@/components/ui/button"

export function FinalCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-14 text-center md:px-12">
          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-5">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              Your body was not made for back-to-back meetings.
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-primary-foreground/90">
              Let 9–5 Reset find small ways to help you move, recover, and feel better during the workday.
            </p>
            <Button render={<a href="#early-access" />} nativeButton={false} size="lg" variant="secondary" className="rounded-full px-8 text-base">
              Join early access
            </Button>
          </div>
          <div className="absolute -bottom-4 right-2 w-28 opacity-90 md:right-8 md:w-36">
            <Image
              src="/shrimp-happy.png"
              alt="Happy shrimp mascot stretching with good posture"
              width={180}
              height={180}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span aria-hidden="true">🦐</span>
          <span className="font-semibold text-foreground">9–5 Reset</span>
        </div>
        <p>Health that fits between meetings. Unshrimp your posture, one tiny reset at a time.</p>
      </div>
    </footer>
  )
}
