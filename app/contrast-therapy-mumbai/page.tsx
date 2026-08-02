import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { services } from '@/lib/services'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { contrastTherapyMumbaiFaqs } from '@/lib/faqs/contrast-therapy-mumbai'
import ServiceNavbar from '@/components/ServiceNavbar'
import { HeroSlider } from '@/app/services-demo/contrast-therapy/HeroSlider'
import { PainPointsSection } from '@/app/services-demo/contrast-therapy/PainPointsSection'
import { WhyMumbaiAthletesSection } from '@/app/services-demo/contrast-therapy/WhyMumbaiAthletesSection'
import { HowItWorksSection } from '@/app/services-demo/contrast-therapy/HowItWorksSection'
import { ComparisonSection } from '@/app/services-demo/contrast-therapy/ComparisonSection'
import { HygieneSection } from '@/app/services-demo/contrast-therapy/HygieneSection'
import { TeamSectionDemo } from '@/app/services-demo/contrast-therapy/TeamSectionDemo'
import { TestimonialsCarousel } from '@/app/services-demo/contrast-therapy/TestimonialsCarousel'
import { LocationSection } from '@/app/services-demo/contrast-therapy/LocationSection'
import { HeroTrustBadge, serviceTrustBadges } from '@/components/HeroTrustBadge'

export const metadata: Metadata = {
  title: 'Contrast Therapy Mumbai | Ice Bath & Infrared Sauna | R3BOOT',
  description:
    'Contrast therapy Mumbai at R3BOOT | ice bath + infrared sauna, physio-supervised. Day & Night Cycle protocols for athletes in Dadar. 5.0 ★ Google. Book via WhatsApp.',
  alternates: { canonical: '/contrast-therapy-mumbai' },
  keywords: [
    'contrast therapy Mumbai',
    'contrast bath therapy Mumbai',
    'ice bath recovery Mumbai',
    'hot cold therapy for muscle recovery',
    'contrast therapy for athletes Mumbai',
    'contrast therapy for muscle recovery Mumbai',
    'infrared sauna ice bath Mumbai',
  ],
}

const otherServices = services.filter((s) => s.slug !== 'contrast-therapy').slice(0, 4)

// ─── DATA ─────────────────────────────────────────────────────────────────────

const heroSlides = [
  {
    src: '/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_Hero_section.webp',
    alt: 'Contrast therapy session at R3BOOT Mumbai',
  },
  {
    src: '/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_ice_bath.webp',
    alt: 'Ice bath cold immersion at R3BOOT Mumbai',
  },
  {
    src: '/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_sauna.webp',
    alt: 'Infrared sauna session at R3BOOT Mumbai',
  },
]

const rebootReachPoints = [
  {
    step: '01',
    title: 'Health screening before every session',
    body: 'Contrast therapy is not appropriate for everyone. We run a brief intake before your first session and flag any conditions that need modification or deferral. You are not just buying a cold dip.',
  },
  {
    step: '02',
    title: 'Breathing guided before the cold phase',
    body: 'The first 60 seconds in ice-cold water is manageable when you know how to breathe through it. We teach you before you get in. No guessing, no hyperventilating.',
  },
  {
    step: '03',
    title: 'Day Cycle or Night Cycle - decided for you',
    body: 'Day Cycle ends cold to lock in the anti-inflammatory effect and keep you energised. Night Cycle ends hot to down-regulate your nervous system and support sleep. Your physiotherapist decides based on your training schedule.',
  },
  {
    step: '04',
    title: 'Temperatures held precisely, not approximately',
    body: 'Infrared sauna at 68°C. Ice bath at 6-10°C. These are the evidence-based ranges. We maintain them. Contrast therapy only works when temperatures are far enough apart to trigger vascular response.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Health Assessment',
    body: 'Short intake covering your training background, injury history, and any health conditions. Your physiotherapist confirms contrast therapy is right for you right now.',
  },
  {
    number: '02',
    title: 'Breathing Prep and Supervised Protocol',
    body: 'We walk you through controlled breathing before immersion. Then sauna (68°C) and ice bath (6-10°C) in structured sequence under team guidance.',
  },
  {
    number: '03',
    title: 'Post-Session Check-in',
    body: 'We review how your body responded. Most clients feel reduced soreness and improved clarity within 30-60 minutes. We advise light movement for the remainder of the day.',
  },
  {
    number: '04',
    title: 'Clinical Hygiene Standards',
    body: 'Sauna, ice bath, and changing areas are cleaned and sanitised between every session. Fresh towels, filtered water, and single-use disposables where needed — held to clinical standards throughout.',
  },
]

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
  {
    name: 'JugalKishore Shah',
    meta: 'Google User · 3 reviews',
    ago: '5 months ago',
    avatar: '/images/Customer_Review/JugalKishore Shah.png',
    quote: 'Excellent idea brought into reality. People will love to take benefit of it. Very professionally done. Keep it up and maintain high standard of services.',
  },
  {
    name: 'Arjun',
    meta: 'Google User · 5 reviews',
    ago: '1 month ago',
    avatar: '/images/Customer_Review/Arjun.png',
    quote: 'Wonderful experience. It is one of those places you actually wait to visit again because the first time was so amazing. Highly recommended!',
  },
]

// ─── PHONE SVG ────────────────────────────────────────────────────────────────

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ContrastTherapyMumbaiPage() {
  return (
    <main className="ct-page min-h-screen bg-white dark:bg-[#0A0A0A]">

      <ServiceNavbar />

      {/* ─────────────────────────────────────────────
          DESKTOP HERO (md+): full-bleed bg images, text overlaid left
      ───────────────────────────────────────────── */}
      <section className="hidden md:flex relative flex-col bg-black overflow-hidden" style={{ minHeight: '92vh' }}>
        <div className="absolute inset-0">
          <Image
            src="/images/R3BOOT_CONTRAST_THERAPY_IMAGE (2).webp"
            alt="Contrast Therapy Mumbai, Ice Bath and Infrared Sauna at R3BOOT"
            fill
            className="object-cover"
            style={{ objectPosition: '40% center' }}
            priority
          />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 18%, rgba(0,0,0,0.45) 38%, rgba(0,0,0,0.15) 55%, transparent 68%)',
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[34%] pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.18) 50%, transparent 100%)' }}
        />

        <div className="relative z-10 flex flex-1 flex-col justify-center px-12 lg:px-16 xl:px-20 pt-28 max-w-[54%]">
          <p className="text-[#A78BFA] text-[11px] font-black tracking-[0.25em] uppercase mb-4">
            Clinically Structured&nbsp;&nbsp;•&nbsp;&nbsp;Safe&nbsp;&nbsp;•&nbsp;&nbsp;Supervised
          </p>

          <h1 className="text-5xl lg:text-6xl xl:text-[4.25rem] font-black text-white tracking-tight leading-[1.04] mb-4">
            Contrast Therapy<br />
            in <span className="text-[#A78BFA]">Mumbai</span>
          </h1>

          <p className="text-[16px] text-white/55 max-w-md leading-relaxed mb-7">
            Ice bath and infrared sauna using advanced protocols to help you recover, reset and perform at your best.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="tel:+919702368612"
              className="inline-flex items-center gap-2.5 bg-[#513394] hover:bg-[#603eb0] text-white font-black px-7 py-3.5 rounded-full transition-all hover:scale-[1.02] text-[14px] tracking-wide shadow-lg shadow-[#513394]/30"
            >
              <PhoneIcon className="w-4 h-4" />
              Book Your Session
            </a>
            <a
              href="https://wa.me/919702368612"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-white/20 text-white hover:bg-white/[0.07] font-bold px-7 py-3.5 rounded-full transition-all text-[14px] tracking-wide"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.855L0 24l6.335-1.502A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.38l-.36-.214-3.732.885.916-3.629-.235-.373A9.818 9.818 0 1112 21.818z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        <HeroTrustBadge items={serviceTrustBadges['contrast-therapy']} />
      </section>

      {/* ─────────────────────────────────────────────
          MOBILE HERO (<md): text-first layout
          H1 → subtext → CTAs → image slider → 3 pointers
      ───────────────────────────────────────────── */}
      <section className="md:hidden pt-20 pb-0 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5">

          {/* Image slider - FIRST */}
          <HeroSlider slides={heroSlides} />

          {/* Label chip */}
          <div className="inline-flex items-center gap-2 bg-[#513394]/10 dark:bg-[#513394]/20 rounded-full px-4 py-2 mt-5 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]" />
            <span className="text-[#513394] dark:text-[#A78BFA] text-[11px] font-black tracking-[0.3em] uppercase">Recovery Service</span>
          </div>

          {/* H1 */}
          <h1 className="text-[2rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-3">
            Contrast Therapy in{' '}
            <span className="text-[#513394] dark:text-[#A78BFA]">Mumbai</span>
          </h1>

          {/* Subtext */}
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            Ice bath and infrared sauna in a clinically structured protocol. Day and Night Cycle. Supervised by physiotherapists at R3BOOT Dadar.
          </p>

          {/* Row 1: Google Reviews card */}
          <div className="mt-5 bg-[#1A1A1A] dark:bg-[#1A1A1A] rounded-2xl p-4 flex items-center gap-0">
            {/* Avatars */}
            <div className="flex items-center shrink-0 pr-4">
              {[
                { src: '/images/Customer_Review/Namrata Doshi.png',     alt: 'Namrata' },
                { src: '/images/Customer_Review/Sonal Malik.png',       alt: 'Sonal' },
                { src: '/images/Customer_Review/JugalKishore Shah.png', alt: 'Jugal' },
              ].map((av, i) => (
                <div
                  key={i}
                  className={`relative w-12 h-12 rounded-full border-2 border-[#1A1A1A] overflow-hidden shrink-0 ${i > 0 ? '-ml-3' : ''}`}
                  style={{ zIndex: 3 - i }}
                >
                  <Image src={av.src} alt={av.alt} fill className="object-cover" />
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px self-stretch bg-white/10 shrink-0 mr-4" />

            {/* Google + stars */}
            <div className="flex flex-col gap-1 min-w-0">
              <div className="flex items-center gap-2">
                <div className="relative w-5 h-5 shrink-0">
                  <Image src="/images/GOOGLE_LOGO.webp" alt="Google" fill className="object-contain" />
                </div>
                <span className="text-white font-bold text-sm">Google Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white font-black text-xl">5.0</span>
              </div>
              <span className="text-gray-500 text-xs font-medium">500+ happy clients</span>
            </div>
          </div>

          {/* Row 2: 2 stat cards */}
          <div className="grid grid-cols-2 gap-3 mt-3 mb-2">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                value: '15+',
                label: 'YEARS EXPERIENCE',
                desc: 'Delivering expert care you can trust.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
                value: 'Physio',
                label: 'SUPERVISED',
                desc: 'Every session is guided by qualified physiotherapists.',
              },
            ].map((card, i) => (
              <div key={i} className="bg-[#1A1A1A] dark:bg-[#1A1A1A] rounded-2xl p-4 flex flex-col gap-3">
                {/* Row 1: icon + value/label */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#513394]/20 flex items-center justify-center text-[#A78BFA] shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <div className="text-xl font-black text-white leading-none">{card.value}</div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">{card.label}</div>
                  </div>
                </div>
                {/* Divider */}
                <div className="w-8 h-[2px] bg-[#513394] rounded-full" />
                {/* Row 2: description */}
                <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 3: PAIN POINTS — accordion + image crossfade
      ───────────────────────────────────────────── */}
      <PainPointsSection />

      {/* ─────────────────────────────────────────────
          SECTION 4: OUR APPROACH
          Left: heading + context | Right: 4 numbered points
      ───────────────────────────────────────────── */}
      <section id="benefits" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Left: heading */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                OUR APPROACH //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-5">
                How R3BOOT{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">
                  reaches that pain.
                </span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-6">
                Contrast therapy only works when it is done right. Temperatures must be precise, the protocol must be structured, and you need to know how to breathe through the cold phase. This is what separates a clinical protocol from a cold dip.
              </p>
              <div className="hidden lg:flex items-center gap-3 text-[#513394] dark:text-[#A78BFA]">
                <div className="w-8 h-[1.5px] bg-[#513394] dark:bg-[#A78BFA]" />
                <span className="text-xs font-black tracking-widest uppercase">Physio-supervised, always</span>
              </div>
            </div>

            {/* Right: 4 points */}
            <div className="lg:col-span-7 space-y-3">
              {rebootReachPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-6 rounded-2xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.06] hover:border-[#513394]/30 dark:hover:border-[#513394]/40 transition-all duration-300 group"
                >
                  <div className="text-[#513394] dark:text-[#A78BFA] font-black text-xs shrink-0 w-7 pt-1 opacity-50 group-hover:opacity-100 transition-opacity">
                    {point.step}
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 dark:text-white text-[15px] mb-2 leading-snug">{point.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{point.body}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 5: HOW IT WORKS — color-coded phase cards
      ───────────────────────────────────────────── */}
      <HowItWorksSection />

      {/* ─────────────────────────────────────────────
          SECTION 5B: COMPARISON — ice bath vs contrast therapy
      ───────────────────────────────────────────── */}
      <ComparisonSection />

      {/* ─────────────────────────────────────────────
          SECTION 5C: HYGIENE — filtered water, sanitised setup
      ───────────────────────────────────────────── */}
      <HygieneSection />

      {/* ─────────────────────────────────────────────
          SECTION 5D: WHY MUMBAI ATHLETES CHOOSE CONTRAST THERAPY
      ───────────────────────────────────────────── */}
      <WhyMumbaiAthletesSection />

      {/* ─────────────────────────────────────────────
          SECTION 6: PROCESS (4 STEPS)
      ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              YOUR SESSION //
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
              What to expect at{' '}
              <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
              A full session takes 45–60 minutes including intake, supervised protocol, and post-session check-in.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 max-w-7xl mx-auto">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="relative flex flex-col aspect-square p-6 lg:p-7 rounded-2xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08] group hover:border-[#513394]/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -top-4 -right-2 text-[5.5rem] lg:text-[6rem] font-black text-gray-100 dark:text-white/[0.035] leading-none select-none pointer-events-none">
                  {step.number}
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black text-sm mb-5 group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
                    {step.number}
                  </div>
                  <h3 className="font-black text-gray-900 dark:text-white text-base lg:text-[17px] mb-3 leading-snug">{step.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: TEAM */}
      <TeamSectionDemo />

      {/* MOBILE: Google Review cards */}
      <section className="md:hidden py-10 bg-[#0A0A0A]">
        <div className="px-5 mb-6">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase block mb-2">Patient Stories</span>
          <h2 className="text-[26px] font-extrabold text-white leading-tight">What clients say</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto px-5 pb-2 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((r, i) => (
            <figure key={i} className="flex-shrink-0 w-[85vw] snap-start bg-[#161616] border border-white/[0.07] rounded-3xl p-5 flex flex-col">
              {/* Top row: Google logo + rating pill */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 48 48">
                    <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
                    <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.1 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.6 7.3 6.3 14.7z"/>
                    <path fill="#FBBC05" d="M24 46c5.6 0 10.5-1.9 14.4-5l-6.7-5.5C29.6 37 26.9 38 24 38c-5.9 0-10.9-4-12.7-9.5l-7 5.4C7.5 41.8 15.2 46 24 46z"/>
                    <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.8 2.4-2.3 4.4-4.3 5.8l6.7 5.5C42.1 36.4 45 30.7 45 24c0-1.3-.2-2.7-.5-4z"/>
                  </svg>
                  <span className="text-white font-bold text-[15px]">Google Review</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#222] rounded-full px-3 py-1.5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-white font-bold text-[13px] ml-0.5">5.0</span>
                </div>
              </div>

              <div className="h-px bg-white/[0.07] mb-4" />

              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={r.avatar} alt={r.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-white font-bold text-[15px] leading-tight">{r.name}</p>
                  <p className="text-white/40 text-[12px]">{r.meta}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 mb-4">
                <svg className="w-3.5 h-3.5 text-white/30 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-white/35 text-[12px]">{r.ago}</span>
              </div>

              <blockquote className="text-white/80 text-[15px] leading-relaxed italic flex-grow mb-5">
                &ldquo;{r.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-2 pt-4 border-t border-white/[0.06]">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-white/35 text-[12px]">Verified Google Review</span>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* DESKTOP: continuously moving testimonials marquee */}
      <section className="hidden md:block py-20 lg:py-28 bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">PATIENT STORIES //</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">What clients say</h2>
          </div>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 8B: LOCATION — address, hours, map embed
      ───────────────────────────────────────────── */}
      <LocationSection />

      {/* ─────────────────────────────────────────────
          SECTION 9: FAQ
      ───────────────────────────────────────────── */}
      <FAQSection faqs={contrastTherapyMumbaiFaqs} />

      {/* ─────────────────────────────────────────────
          SECTION 10: CTA BANNER
      ───────────────────────────────────────────── */}
      {/* MOBILE CTA CARD */}
      <section className="md:hidden bg-white dark:bg-[#0A0A0A] pt-10 pb-28">
        <div className="px-4">
          <div
            className="relative rounded-3xl overflow-hidden px-6 pt-7 pb-6"
            style={{ background: 'linear-gradient(135deg, #2a0d6e 0%, #1a0850 55%, #110638 100%)' }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px] opacity-30 pointer-events-none" style={{ background: '#7c3aed' }} />
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-[50px] opacity-20 pointer-events-none" style={{ background: '#1e0a5e' }} />
            <div className="relative">
              <h2 className="text-[26px] font-black text-white leading-tight tracking-tight mb-2">
                Book a session{' '}
                <span className="text-[#A78BFA]">in Mumbai</span>
              </h2>
              <p className="text-white/55 text-[13px] leading-relaxed mb-5">
                R3BOOT, Dadar. Open Monday to Saturday. Our physiotherapists will tell you honestly if this is the right starting point for your recovery.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+919702368612"
                  className="flex items-center justify-center gap-2 bg-white text-[#513394] font-black rounded-full py-3.5 text-[15px] tracking-wide"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Call to Book
                </a>
                <a
                  href="https://wa.me/919702368612"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-white/25 text-white font-bold rounded-full py-3.5 text-[15px] tracking-wide"
                >
                  <PhoneIcon className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
              <p className="text-center text-white/30 text-[10px] tracking-[0.2em] uppercase mt-4">
                Dadar, Mumbai
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP CTA */}
      <section className="hidden md:block py-16 lg:py-20 bg-[#513394] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.07] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 max-w-3xl mx-auto leading-tight">
            Book a session in{' '}
            <span className="text-white/45">Mumbai</span>
          </h2>
          <p className="text-lg text-white/65 mb-10 max-w-xl mx-auto leading-relaxed">
            R3BOOT, Dadar. Open Monday to Saturday. Our physiotherapists will tell you honestly if this is the right starting point for your recovery.
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
          <p className="text-white/35 mt-8 font-bold tracking-widest text-xs uppercase">Dadar, Mumbai</p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 11: CONTRAST THERAPY CLUSTER — internal links
      ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#0D0D0D] border-t border-white/[0.06]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase mb-4 block">
              RECOVERY SERVICES //
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Ice Bath, Sauna &amp; <span className="text-[#7B5FCA]">Locations</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { label: 'Ice Bath Mumbai', href: '/ice-bath-mumbai' },
              { label: 'Cold Plunge Mumbai', href: '/cold-plunge-mumbai' },
              { label: 'Infrared Sauna', href: '/infrared-sauna-mumbai' },
              { label: 'Near Bandra', href: '/contrast-therapy-bandra' },
              { label: 'Dadar', href: '/contrast-therapy-dadar' },
              { label: 'Lower Parel', href: '/contrast-therapy-lower-parel' },
              { label: 'Andheri', href: '/contrast-therapy-andheri' },
              { label: 'Worli', href: '/contrast-therapy-worli' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-center px-4 py-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] text-sm font-bold text-white hover:border-[#A78BFA]/40 hover:text-[#A78BFA] transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 12: OTHER SERVICES
      ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase mb-4 block">
              KEEP EXPLORING //
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              Other Ways to <span className="text-[#7B5FCA]">Recover</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherServices.map((service, idx) => (
              <Link
                key={idx}
                href={`/services/${service.slug}`}
                className="group bg-white/[0.03] p-4 rounded-[2.5rem] border border-white/[0.08] hover:border-[#A78BFA]/30 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-[2rem] mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="px-2 pb-2 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#A78BFA] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/45 line-clamp-2 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between w-full bg-[#513394]/15 group-hover:bg-[#513394] text-[#A78BFA] group-hover:text-white rounded-full p-1 transition-all duration-300">
                      <span className="text-[13px] font-black pl-5">EXPLORE</span>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          STICKY MOBILE CTA
      ───────────────────────────────────────────── */}
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
        serviceName="Contrast Therapy in Mumbai"
        description="Clinically structured hot-cold recovery protocol using infrared sauna (68°C) and ice bath (6–10°C). Day &amp; Night Cycle protocols supervised by physiotherapists at R3BOOT, Mumbai."
        serviceUrl="https://www.r3boot.in/contrast-therapy-mumbai"
      />
      <FAQSchema faqs={contrastTherapyMumbaiFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Contrast Therapy Mumbai', url: '/contrast-therapy-mumbai' },
      ]} />
    </main>
  )
}
