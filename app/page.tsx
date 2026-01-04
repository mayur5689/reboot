import Hero from '@/components/Hero'
import TrustedByBusiness from '@/components/TrustedByBusiness'
import HowItWorks from '@/components/HowItWorks'
import OurServices from '@/components/OurServices'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <TrustedByBusiness />
      <HowItWorks />
      <OurServices />
    </main>
  )
}

