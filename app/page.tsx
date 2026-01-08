import Hero from '@/components/Hero'
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

