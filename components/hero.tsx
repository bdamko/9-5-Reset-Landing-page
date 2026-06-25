import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            Let 9-5 Reset build the habit for you
          </span>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Movement breaks that fit between meetings.
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            9–5 Reset slips short movement breaks for your neck and back into the day without changing your schedule.
          </p>
          <div className="flex flex-col items-start gap-3">
            <Button
              render={<a href="https://chromewebstore.google.com/detail/egmmjbngijkjiabahmaaabbkcknjahcl?utm_source=item-share-cb" target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              size="lg"
              className="rounded-full px-7 text-base"
            >
              Download extension
            </Button>
            <p className="text-sm text-muted-foreground">
              Read-only access to Apple, Google & Outlook Calendar
            </p>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-secondary/50 blur-2xl" aria-hidden="true" />
          <DesktopMockup />
          <div className="absolute -bottom-16 -right-4 w-[140px] sm:-bottom-20 sm:-left-16 sm:right-auto sm:w-[200px]">
            <Image
              src="/normg.png"
              alt="Friendly giraffe mascot hunched over a laptop"
              width={200}
              height={200}
              className="h-auto w-full drop-shadow-lg sm:hidden"
              priority
            />
            <Image
              src="/norm.png"
              alt="Friendly giraffe mascot hunched over a laptop"
              width={200}
              height={200}
              className="hidden h-auto w-full drop-shadow-lg sm:block"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function DesktopMockup() {
  return (
    <div className="w-full max-w-[460px] overflow-hidden rounded-2xl border-8 border-foreground/90 bg-card shadow-2xl sm:max-w-[560px]">
      <div className="flex items-center gap-1.5 border-b border-foreground/10 bg-foreground/5 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
      </div>
      <video
        src="/extension-demo.mp4"
        className="block h-auto w-full"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  )
}
