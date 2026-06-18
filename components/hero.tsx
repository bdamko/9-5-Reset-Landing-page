import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            Let 9-5 Reset take care of your health
          </span>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Health that fits between meetings.
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            9–5 Body Reset gives you a desk recovery program for neck and back pain without changing your schedule. 
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
          <PhoneMockup />
          <div className="absolute -bottom-10 -right-6 w-[180px] sm:-bottom-[170px] sm:-left-[110px] sm:right-auto sm:w-[300px] md:-left-[140px]">
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

function PhoneMockup() {
  const items = [
    { time: "10:40", label: "3-min neck & shoulder stretch", tone: "bg-secondary" },
    { time: "12:30", label: "5-min posture reset", tone: "bg-accent" },
    { time: "15:15", label: "8-min light walk", tone: "bg-secondary" },
  ]
  return (
    <div className="w-[260px] rounded-[2.5rem] border-8 border-foreground/90 bg-card p-4 shadow-2xl sm:w-[280px]">
      <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-foreground/20" />
      <p className="px-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">Today&apos;s reset</p>
      <p className="mb-4 px-1 text-lg font-semibold text-foreground">Tuesday plan</p>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item.time} className={`flex items-center gap-3 rounded-2xl ${item.tone} px-3 py-2.5`}>
            <span className="text-xs font-bold text-secondary-foreground">{item.time}</span>
            <span className="text-sm font-medium leading-tight text-secondary-foreground">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
