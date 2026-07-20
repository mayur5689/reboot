import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { contrastTherapyDadarFaqs } from '@/lib/faqs/contrast-therapy-dadar'
import ServiceNavbar from '@/components/ServiceNavbar'
import { HeroSlider } from '@/app/services-demo/contrast-therapy/HeroSlider'
import { HowItWorksSection } from '@/app/services-demo/contrast-therapy/HowItWorksSection'
import { ComparisonSection } from '@/app/services-demo/contrast-therapy/ComparisonSection'
import { HygieneSection } from '@/app/services-demo/contrast-therapy/HygieneSection'
import { TeamSectionDemo } from '@/app/services-demo/contrast-therapy/TeamSectionDemo'
import { TestimonialsCarousel } from '@/app/services-demo/contrast-therapy/TestimonialsCarousel'
import { LocationSection } from '@/app/services-demo/contrast-therapy/LocationSection'

export const metadata: Metadata = {
  title: 'Contrast Therapy Dadar | Ice Bath & Sauna | R3BOOT',
  description:
    'Contrast therapy in Dadar East at R3BOOT | physio-supervised infrared sauna and ice bath. Walk-in from Dadar station. 5.0 ★ Google. Book today.',
  alternates: { canonical: '/contrast-therapy-dadar' },
  keywords: [
    'contrast therapy dadar',
    'ice bath dadar',
    'sauna dadar mumbai',
    'cold plunge dadar',
    'contrast therapy near dadar station',
    'recovery centre dadar',
  ],
}

const heroSlides = [
  {
    src: '/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_Hero_section.webp',
    alt: 'Contrast therapy session at R3BOOT Dadar',
  },
  {
    src: '/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_ice_bath.webp',
    alt: 'Ice bath cold immersion at R3BOOT Dadar',
  },
  {
    src: '/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_sauna.webp',
    alt: 'Infrared sauna session at R3BOOT Dadar',
  },
]

const localPoints = [
  { title: 'Minutes from Dadar station', body: 'On Swami Gyan Jivandas Marg, a short walk or auto ride from both Central and Western lines.' },
  { title: 'Physio-supervised, always', body: 'Health intake and breathing guidance before every ice bath, not a self-serve cold dip.' },
  { title: 'Day or Night Cycle', body: 'Ends cold for energy, or ends hot for deep recovery and sleep, your physiotherapist decides.' },
  { title: 'Stack with other services', body: 'Combine with sports massage or physiotherapy in one visit, same building.' },
]

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

const testimonials = [
  {
    name: 'Chandrakant Chande',
    meta: 'Local Guide · 24 reviews',
    ago: '2 months ago',
    avatar: '/images/Customer_Review/Namrata Doshi.png',
    quote: 'Reboot team was wonderful. Navigated me through the entire contrast therapy experience with great insights. My body also feels lighter and better. Would definitely recommend this place for someone looking for good recovery.',
  },
  {
    name: 'Dharmesh Thakkar',
    meta: 'Google User · 8 reviews',
    ago: '3 months ago',
    avatar: '/images/Customer_Review/Sonal Malik.png',
    quote: 'The deep tissue massage, cupping therapy, and ice water treatment helped relieve my body stiffness tremendously, while the sauna session left me feeling completely rejuvenated. Professional and well-equipped.',
  },
  {
    name: 'Namrata Doshi',
    meta: 'Local Guide · 12 reviews',
    ago: '1 month ago',
    avatar: '/images/Customer_Review/Namrata Doshi.png',
    quote: 'The team is highly professional, knowledgeable, and genuinely caring. From the initial assessment to the recovery plan, everything was clearly explained and tailored to my needs. Highly recommend R3BOOT.',
  },
  {
    name: 'Sonal Malik',
    meta: 'Google User · 6 reviews',
    ago: '4 months ago',
    avatar: '/images/Customer_Review/Sonal Malik.png',
    quote: 'The Pilates sessions were highly personalized, with clear focus on alignment and core strength. I have already noticed better posture and reduced stiffness. Highly recommend for anyone serious about long-term physical wellness.',
  },
]

export default function ContrastTherapyDadarPage() {
  return (
    <main className="ct-page min-h-screen bg-white dark:bg-[#0A0A0A]">

      <ServiceNavbar />

      {/* ─── DESKTOP HERO ─── */}
      <section className="hidden md:flex relative bg-black overflow-hidden" style={{ minHeight: '80vh' }}>
        <div className="absolute inset-0">
          <Image
            src="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_Hero_section.webp"
            alt="Contrast therapy Dadar Mumbai, R3BOOT"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 20%, transparent 30%)' }}
        />
        <div className="relative z-10 flex flex-col justify-center px-12 lg:px-16 xl:px-20 py-24 max-w-[58%]">
          <Link
            href="/contrast-therapy-mumbai"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-all mb-6 group w-fit"
          >
            <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#513394] transition-all">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="font-bold tracking-wider text-xs uppercase">Contrast Therapy Mumbai</span>
          </Link>

          <p className="text-[#A78BFA] text-[11px] font-black tracking-[0.25em] uppercase mb-5">
            Dadar East&nbsp;&nbsp;•&nbsp;&nbsp;Near Dadar Station
          </p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.06] mb-5">
            Contrast Therapy<br />in <span className="text-[#A78BFA]">Dadar, Mumbai</span>
          </h1>
          <p className="text-[17px] text-white/55 max-w-lg leading-relaxed mb-8">
            R3BOOT sits on Swami Gyan Jivandas Marg, minutes from Dadar station. Infrared sauna, supervised ice bath, physio-led recovery on your doorstep.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="tel:+919702368612"
              className="inline-flex items-center gap-2.5 bg-[#513394] hover:bg-[#603eb0] text-white font-black px-8 py-4 rounded-full transition-all hover:scale-[1.02] text-[15px] tracking-wide shadow-lg shadow-[#513394]/30"
            >
              <PhoneIcon className="w-4 h-4" />
              Call to Book
            </a>
            <a
              href="https://wa.me/919702368612"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-white/20 text-white hover:bg-white/[0.07] font-bold px-8 py-4 rounded-full transition-all text-[15px] tracking-wide"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ─── MOBILE HERO ─── */}
      <section className="md:hidden pt-20 pb-0 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5">
          <HeroSlider slides={heroSlides} />
          <div className="inline-flex items-center gap-2 bg-[#513394]/10 dark:bg-[#513394]/20 rounded-full px-4 py-2 mt-5 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]" />
            <span className="text-[#513394] dark:text-[#A78BFA] text-[11px] font-black tracking-[0.3em] uppercase">Dadar East</span>
          </div>
          <h1 className="text-[2rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-3">
            Contrast Therapy in{' '}
            <span className="text-[#513394] dark:text-[#A78BFA]">Dadar</span>
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            R3BOOT sits on Swami Gyan Jivandas Marg, minutes from Dadar station. Infrared sauna, supervised ice bath, physio-led recovery on your doorstep.
          </p>
        </div>
      </section>

      {/* ─── LOCAL CONTEXT: intro + quick facts, no pricing ─── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#09090E]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[58%_1fr] gap-10 lg:gap-16 items-start">

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase mb-4 block">
                DADAR //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-5">
                Dadar&apos;s clinical{' '}
                <span className="text-[#7B5FCA]">recovery centre.</span>
              </h2>
              <p className="text-white/45 text-base leading-relaxed mb-4">
                R3BOOT sits on Swami Gyan Jivandas Marg in Dadar East, minutes from Dadar station on both Central and Western lines. If you live or train in Dadar, Shivaji Park, Matunga, or Parel, contrast therapy is not a cross-city trip. It is local.
              </p>
              <p className="text-white/45 text-base leading-relaxed">
                Sessions alternate infrared sauna and supervised ice bath. Your physiotherapist selects a Day Cycle (ends cold, energises) or Night Cycle (ends hot, deep recovery and sleep) based on your schedule, runs a health intake, and teaches breathing before cold immersion.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {localPoints.map((point, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5"
                  >
                    <h3 className="text-white font-black text-[15px] mb-1.5 leading-snug">{point.title}</h3>
                    <p className="text-white/45 text-[13px] leading-relaxed">{point.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick location card */}
            <div className="lg:sticky lg:top-32">
              <div className="rounded-3xl border border-white/[0.08] bg-[#16161e] p-8">
                <h3 className="text-white font-black text-lg mb-6 tracking-wide">DADAR LOCATION</h3>
                <p className="text-white/70 text-sm mb-2 leading-relaxed">
                  Palai Plaza, 203<br />Swami Gyan Jivandas Marg<br />Dadar East, Mumbai 400014
                </p>
                <p className="text-white/40 text-sm mb-8">Near Dadar station · Parking available</p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+919702368612"
                    className="flex items-center justify-center gap-2 bg-[#513394] hover:bg-[#603eb0] text-white font-black rounded-2xl py-4 text-[15px] tracking-wide transition-colors"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    Call to Book
                  </a>
                  <a
                    href="https://wa.me/919702368612"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-white/20 text-white font-bold rounded-2xl py-4 text-[15px] tracking-wide hover:bg-white/[0.07] transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <HowItWorksSection />

      {/* ─── COMPARISON ─── */}
      <ComparisonSection />

      {/* ─── HYGIENE ─── */}
      <HygieneSection />

      {/* ─── TEAM ─── */}
      <TeamSectionDemo />

      {/* ─── TESTIMONIALS (desktop marquee) ─── */}
      <section className="hidden md:block py-20 lg:py-28 bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase mb-4 block">PATIENT STORIES //</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">What clients say</h2>
          </div>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ─── LOCATION: address, hours, map ─── */}
      <LocationSection />

      {/* ─── FAQ ─── */}
      <FAQSection faqs={contrastTherapyDadarFaqs} />

      {/* ─── CTA BANNER ─── */}
      <section className="py-16 lg:py-20 bg-[#513394] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.07] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-tight whitespace-nowrap">
            Contrast Therapy in{' '}
            <span className="text-white/45">Dadar</span>
          </h2>
          <p className="text-lg text-white/65 mb-10 max-w-xl mx-auto leading-relaxed">
            Palai Plaza, Swami Gyan Jivandas Marg. Open Monday to Saturday. A short walk from Dadar station.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <a
              href="tel:+919702368612"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-[#513394] font-black px-10 py-5 rounded-full hover:scale-105 transition-all shadow-2xl text-base tracking-wide"
            >
              <PhoneIcon className="w-4 h-4" />
              Call to Book
            </a>
            <a
              href="https://wa.me/919702368612"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full hover:bg-white/10 transition-all text-base tracking-wide"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ─── STICKY MOBILE CTA ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/[0.09] px-4 pt-3 pb-5">
          <div className="flex gap-3">
            <a
              href="tel:+919702368612"
              className="flex-1 flex items-center justify-center gap-2 bg-[#513394] hover:bg-[#603eb0] text-white font-black rounded-xl py-3.5 text-[14px] tracking-wide transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              Call
            </a>
            <a
              href="https://wa.me/919702368612"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 border border-white/20 text-white font-bold rounded-xl py-3.5 text-[14px] tracking-wide hover:bg-white/[0.07] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <ServiceSchema
        serviceName="Contrast Therapy Dadar Mumbai"
        description="Physio-supervised contrast therapy in Dadar East, infrared sauna (68°C) and ice bath (6–10°C) at R3BOOT, Palai Plaza."
        serviceUrl="https://www.r3boot.in/contrast-therapy-dadar"
      />
      <FAQSchema faqs={contrastTherapyDadarFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Contrast Therapy Mumbai', url: '/contrast-therapy-mumbai' },
        { name: 'Dadar', url: '/contrast-therapy-dadar' },
      ]} />
    </main>
  )
}
