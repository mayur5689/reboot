import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Therapy Clinic in Dadar, Mumbai | R3BOOT Recovery Centre',
  description: 'Expert therapy clinic in Dadar, Mumbai. Physiotherapy, contrast therapy, aqua therapy & sports massage. Certified specialists, 7-day availability. Book today.',
  keywords: ['therapy dadar', 'therapy clinic dadar', 'recovery clinic mumbai', 'physiotherapy dadar', 'sports recovery mumbai', 'R3BOOT'],
  alternates: { canonical: '/' },
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

