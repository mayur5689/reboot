import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Hero from '@/components/Hero'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Therapy Clinic in Dadar, Mumbai | R3BOOT Recovery Centre',
  description: 'Expert therapy clinic in Dadar, Mumbai. Physiotherapy, contrast therapy, aqua therapy & sports massage. Certified specialists, 7-day availability. Book today.',
  keywords: ['therapy dadar', 'therapy clinic dadar', 'recovery clinic mumbai', 'physiotherapy dadar', 'sports recovery mumbai', 'R3BOOT'],
  alternates: { canonical: '/' },
}

import HowItWorks from '@/components/HowItWorks'
import MovingServiceRibbons from '@/components/MovingServiceRibbons'
import AboutJourney from '@/components/AboutJourney'
import OurServicesCarousel from '@/components/OurServicesCarousel'
import ReviewVideo from '@/components/ReviewVideo'
import { GoogleReviewsSection } from '@/app/services-demo/contrast-therapy/GoogleReviewsSection'
import TeamCarousel from '@/components/TeamCarousel'
import HomeBlog from '@/components/HomeBlog'
import { FAQSection } from '@/components/faq-section'

export default function Home() {
  return (
    <div className={plusJakarta.variable}>
      <style>{`
        main {
          font-family: var(--font-jakarta), system-ui, sans-serif;
        }
      `}</style>
      <main className="relative">
        <Hero />
        <MovingServiceRibbons />
        <AboutJourney />
        <HowItWorks />
        <OurServicesCarousel />
        <ReviewVideo />
        <GoogleReviewsSection />
        <TeamCarousel />
        <HomeBlog />
        <FAQSection showMap />
      </main>
    </div>
  )
}
