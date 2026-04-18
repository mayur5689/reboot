import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'R3BOOT | Recovery & Performance Clinic Dadar Mumbai',
  description: "Mumbai's integrated recovery and performance clinic in Dadar. Physiotherapy, contrast therapy, hydrotherapy, sports massage, sports psychology & counselling. Book today.",
  keywords: ['recovery clinic mumbai', 'performance clinic dadar', 'physiotherapy dadar', 'sports recovery mumbai', 'R3BOOT'],
}

import TrustedByBusiness from '@/components/TrustedByBusiness'
import HowItWorks from '@/components/HowItWorks'
import OurServices from '@/components/OurServices'
import ReviewVideo from '@/components/ReviewVideo'
import Testimonials from '@/components/Testimonials'
import CoachesSection from '@/components/CoachesSection'
import HomeBlog from '@/components/HomeBlog'
import { FAQSection } from '@/components/faq-section'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <TrustedByBusiness />
      <HowItWorks />
      <OurServices />
      <ReviewVideo />
      <Testimonials />
      <CoachesSection />
      <HomeBlog />
      <FAQSection />
    </main>
  )
}

