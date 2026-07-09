import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { DemoPlan } from "@/components/demo-plan"
import { Pricing } from "@/components/pricing"
import { FinalCta, SiteFooter } from "@/components/final-cta"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <Problem />
      <HowItWorks />
      <DemoPlan />
      <Features />
      <Pricing />
      <FinalCta />
      <SiteFooter />
    </main>
  )
}
