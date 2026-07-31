import Image from 'next/image'
import type { Metadata } from 'next'
import { aquaTherapyMumbaiFaqs } from '@/lib/faqs/aqua-therapy-mumbai'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { TeamSectionDemo } from './TeamSectionDemo'
import ServiceNavbar from '@/components/ServiceNavbar'
import { PainPointsSection } from './PainPointsSection'
import { ContactBookingSection } from './ContactBookingSection'

export const metadata: Metadata = {
  title: 'Aqua Therapy Mumbai | Aqua Treadmill Physiotherapy at R3BOOT Dadar',
  description:
    'Aqua therapy in Mumbai at R3BOOT | physio-supervised aqua treadmill rehabilitation for sports injuries, post-surgery recovery, knee pain, and arthritis. Dadar, Mumbai. Call to book.',
  alternates: { canonical: '/aqua-therapy-mumbai' },
  keywords: [
    'aqua therapy Mumbai',
    'aquatic therapy Mumbai',
    'hydrotherapy Mumbai',
    'water therapy Mumbai',
    'aqua physiotherapy Mumbai',
    'aqua therapy for sports injury Mumbai',
    'aqua therapy post surgery Mumbai',
    'aqua therapy knee pain Mumbai',
    'pool physiotherapy Mumbai',
    'aqua therapy Dadar',
  ],
}

const HERO_IMAGE = '/images/hero/r3boot-aqua-therapy-v2.png'

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

export default function AquaTherapyMumbaiPage() {
  return (
    <main className="demo-page min-h-screen bg-white dark:bg-[#0A0A0A] pb-24 md:pb-0">
      <ServiceNavbar showPromoRibbon />

      {/* ── 1. HERO ─────────────────────────────────── */}
      <section className="hidden md:flex relative bg-black overflow-hidden" style={{ minHeight: 'calc(100vh - 110px)' }}>
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Aqua treadmill chamber session at R3BOOT Mumbai"
            fill
            className="object-cover"
            style={{ objectPosition: '65% center' }}
            priority
          />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 20%, transparent 30%)' }}
        />
        <div className="relative z-10 flex flex-col justify-center px-12 lg:px-16 xl:px-20 py-24 max-w-[54%]">
          <p className="text-[#A78BFA] text-[11px] font-black tracking-[0.25em] uppercase mb-5">
            Physio-Supervised&nbsp;&nbsp;•&nbsp;&nbsp;Private Chamber&nbsp;&nbsp;•&nbsp;&nbsp;Not a Shared Pool
          </p>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.04] mb-5">
            Aqua Therapy<br />
            in <span className="text-[#A78BFA]">Mumbai</span>
          </h1>
          <p className="text-[17px] text-white/55 max-w-md leading-relaxed mb-8">
            Aqua treadmill rehabilitation that removes up to 75% of joint load. Recover earlier, move sooner, without the pain of land-based exercise.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-[#513394] hover:bg-[#603eb0] text-white font-black px-8 py-4 rounded-full transition-all hover:scale-[1.02] text-[15px] tracking-wide shadow-lg shadow-[#513394]/30"
            >
              Free Consultation
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

      {/* Mobile hero — same single image, no carousel */}
      <section className="md:hidden pt-8 pb-6 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={HERO_IMAGE}
              alt="Aqua treadmill chamber session at R3BOOT Mumbai"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
          <div className="inline-flex items-center gap-2 bg-[#513394]/10 dark:bg-[#513394]/20 rounded-full px-4 py-2 mt-5 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]" />
            <span className="text-[#513394] dark:text-[#A78BFA] text-[11px] font-black tracking-[0.3em] uppercase">
              Recovery Service
            </span>
          </div>
          <h1 className="text-[2rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-3">
            Aqua Therapy in{' '}
            <span className="text-[#513394] dark:text-[#A78BFA]">Mumbai</span>
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
            Private aqua treadmill chamber. Water level, speed and temperature set to your condition.
            Supervised by physiotherapists at R3BOOT Dadar.
          </p>
        </div>
      </section>

      {/* ── 2. FORM ─────────────────────────────────── */}
      <ContactBookingSection />

      {/* ── 3. TEAM ─────────────────────────────────── */}
      <TeamSectionDemo />

      {/* ── 4. PAIN POINTS ──────────────────────────── */}
      <PainPointsSection />

      {/* Sticky mobile CTA */}
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
        serviceName="Aqua Therapy in Mumbai"
        description="Aqua treadmill physiotherapy for sports injury rehabilitation, post-surgical recovery, knee pain, arthritis, and lower back pain. Supervised by physiotherapists at R3BOOT, Dadar, Mumbai."
        serviceUrl="https://www.r3boot.in/aqua-therapy-mumbai"
        areaServed="Mumbai"
      />
      <FAQSchema faqs={aquaTherapyMumbaiFaqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Aqua Therapy Mumbai', url: '/aqua-therapy-mumbai' },
        ]}
      />
    </main>
  )
}
