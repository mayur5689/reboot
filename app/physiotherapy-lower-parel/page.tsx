import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { physiotherapyLowerParelFaqs } from '@/lib/faqs/physiotherapy-lower-parel'
import { HeroTrustBadge, serviceTrustBadges } from '@/components/HeroTrustBadge'
import { MobileHeroTrust } from '@/components/MobileHeroTrust'
import { HeroSlider } from '@/app/services-demo/contrast-therapy/HeroSlider'
import { TeamSectionDemo } from '@/app/services-demo/contrast-therapy/TeamSectionDemo'
import { TestimonialsCarousel } from '@/app/services/physiotherapy/TestimonialsCarousel'
import {
  ClipboardCheck,
  Hand,
  Target,
  MapPin,
  Clock,
  Navigation,
  Train,
  Building2,
  Bone,
  Dumbbell,
  Activity,
  Monitor,
  Crosshair,
  Layers,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Physiotherapy Lower Parel & Prabhadevi | R3BOOT Lodha Signet',
  description:
    'Clinical physiotherapy in Lower Parel / Prabhadevi at R3BOOT Lodha Signet. Desk, gym & sports rehab near Kamala Mills, Worli & BKC. Physio from 7:15 am. WhatsApp to book.',
  alternates: { canonical: '/physiotherapy-lower-parel' },
  keywords: [
    'physiotherapy lower parel',
    'physiotherapy prabhadevi',
    'physiotherapist lower parel',
    'physiotherapy clinic lower parel mumbai',
    'physiotherapy near kamala mills',
    'physiotherapy worli',
    'physiotherapy near bkc',
    'physiotherapy senapati bapat marg',
    'r3boot lower parel',
  ],
}

const heroSlides = [
  {
    src: '/images/service/Services_image/Physiotherapy_1.webp',
    alt: 'Physiotherapy at R3BOOT Lower Parel / Prabhadevi, Lodha Signet',
  },
  {
    src: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1771760500/Physiotherepy_Image_jz7ubj.webp',
    alt: 'Manual therapy physiotherapy at R3BOOT Lower Parel',
  },
  {
    src: '/images/hero/r3boot-physiotherapy.png',
    alt: 'Clinical physiotherapy care at R3BOOT',
  },
]

const testimonials = [
  {
    name: 'Deepali Chheda',
    meta: 'Google User · 6 reviews',
    ago: '2 weeks ago',
    avatar: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1790237107/Deepali_chedda_adzub2.png',
    quote:
      'As a runner, recovery is just as important as training. Physiotherapist Vaishali’s thorough assessment, along with Pooja’s guidance, built a plan around my schedule with sports massage and contrast every alternate week. Recovery isn’t only for when you’re hurting — it’s how you stay strong.',
  },
  {
    name: 'Bhavesh Chheda',
    meta: 'Local Guide · 66 reviews',
    ago: '3 weeks ago',
    avatar: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1790237107/Bhavesh_chedda_i4tzrw.png',
    quote:
      'With disc compression between L4-L5, I started rehab on my doctor’s advice. The physiotherapist explained which exercises relieve the muscle and how to build strength gradually. Contrast therapy and reformer Pilates have done wonders. The regime continues.',
  },
  {
    name: 'Ryan Shah',
    meta: 'Google User · 6 reviews',
    ago: '3 weeks ago',
    avatar: '/images/Customer_Review/Ryan Shah.svg',
    quote:
      'Post-football recovery session here — sports massage plus contrast therapy. Properly done, staff know what they’re doing, and I walked out feeling significantly looser than I went in. Good addition to Lower Parel.',
  },
  {
    name: 'Raghuram Sathyanarayanan',
    meta: 'Google User · 5 reviews',
    ago: '3 weeks ago',
    avatar: '/images/Customer_Review/Raghuram Sathyanarayanan.svg',
    quote:
      'Amazing contrast therapy. Feeling light after the session. The physiotherapist is very helpful too. Do try it.',
  },
  {
    name: 'Sony Patel',
    meta: 'Google User · 1 review',
    ago: 'Yesterday',
    avatar: '/images/Customer_Review/Sony Patel.svg',
    quote:
      'Highly recommend! Went in with intense post-workout muscle soreness and left feeling completely relaxed. The therapist was an absolute expert. Sports massage and cupping completely released all my tension. Will definitely be back!',
  },
  {
    name: 'Nikeey Shah',
    meta: 'Google User · 3 reviews',
    ago: '3 weeks ago',
    avatar: '/images/Customer_Review/Nikeey Shah.svg',
    quote:
      'Amazing experience! I got sports cupping massage for my shoulders after heavy weight lifting and felt an immediate release of tension and better mobility. Totally worth it for the relief.',
  },
]

const patientSpecific = [
  {
    label: 'Desk Pros',
    tag: 'DESK //',
    description:
      'Neck, trap, and lower back pain from long office days. Early physio from 7:15 am so treatment fits before work.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1790225458/Desk_ak3rgp.webp',
    points: ['Tech neck', 'Desk back pain', 'Pre-work slots'],
  },
  {
    label: 'Gym & HYROX',
    tag: 'GYM //',
    description:
      'Pressing, squatting, and race-prep volume that outruns tissue capacity. Clinical loading plus contrast and massage in the same visit.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1790225459/Gym_cxocai.webp',
    points: ['Shoulder load', 'Knee pain', 'HYROX recovery'],
  },
  {
    label: 'Athletes & Rec Sport',
    tag: 'SPORT //',
    description:
      'Runners, cyclists, cricket and field-sport players who need assessment-led rehab close to home, not another rest week.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1790225467/Sport_gsxfwg.webp',
    points: ['Running injuries', 'Throwing load', 'Return to play'],
  },
  {
    label: 'Post-Surgery Return to Work',
    tag: 'REHAB //',
    description:
      'ACL, shoulder, and spine recovery for people who need progressive loading near home or office. Aqua sessions, when required, are booked at Dadar.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1790225458/Frozen_kra6cm.webp',
    points: ['ACL rehab', 'Shoulder surgery', 'Clear milestones'],
  },
]

const expertise = [
  {
    icon: Bone,
    title: 'Orthopedic & Musculoskeletal',
    body: 'Back, neck, shoulder, knee, and hip pain from desk load, gym volume, or everyday strain. Assessment first, then hands-on care.',
  },
  {
    icon: Dumbbell,
    title: 'Sports Physiotherapy',
    body: 'HYROX, gym, running, and field-sport injuries with load management built for how you train, not a generic protocol.',
  },
  {
    icon: Activity,
    title: 'Post-Surgical Rehab',
    body: 'Progressive land-based protocols after ACL, shoulder, and spine procedures. Aqua treadmill sessions scheduled at Dadar when needed.',
  },
  {
    icon: Monitor,
    title: 'Desk & Postural Pain',
    body: 'Cervical strain, thoracic stiffness, and lumbar flare from long office days. Practical plans that fit the workweek.',
  },
  {
    icon: Crosshair,
    title: 'Dry Needling & Manual Therapy',
    body: 'Trigger-point needling and soft tissue work when indicated, matched to the finding, not a default add-on.',
  },
  {
    icon: Layers,
    title: 'Integrated Recovery',
    body: 'Contrast therapy and sports massage available in the same visit when they accelerate the physio plan.',
  },
]

const conditionLinks = [
  { label: 'Back Pain', href: '/physiotherapy-for-back-pain-mumbai' },
  { label: 'Knee Pain', href: '/physiotherapy-for-knee-pain-mumbai' },
  { label: 'Neck Pain', href: '/physiotherapy-for-neck-pain-mumbai' },
  { label: 'Shoulder Pain', href: '/physiotherapy-for-shoulder-pain-mumbai' },
  { label: 'Sports Injuries', href: '/sports-injury-physiotherapy-dadar-mumbai' },
  { label: 'Post-Surgery Rehab', href: '/post-surgery-physiotherapy-mumbai' },
]

const HOURS = [
  { days: 'Mon, Tue, Thu–Sat', time: '7:15 AM – 9:00 PM' },
  { days: 'Wednesday', time: '7:15 AM – 3:30 PM' },
  { days: 'Sunday', time: '3:30 PM – 9:00 PM (appointment only)' },
]

const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.65!2d72.8267492!3d19.0031084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfd8a9695041%3A0xdbf9dddd1b76b6c!2sR3boot%20%7C%20Integrated%20Recovery%20Center!5e0!3m2!1sen!2sin!4v1736966800001'
const DIRECTIONS_URL = 'https://www.google.com/maps/search/?api=1&query=19.0031084,72.8267492'

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  )
}

export default function PhysiotherapyLowerParelPage() {
  return (
    <main className="physio-page min-h-screen bg-white dark:bg-[#0A0A0A]">

      {/* ─── DESKTOP HERO ─── */}
      <section
        className="hidden md:flex flex-col bg-black overflow-hidden pt-20 lg:pt-24"
        style={{ minHeight: '92vh' }}
      >
        <div className="relative flex flex-1 flex-col">
          <div className="absolute inset-0">
            <Image
              src="/images/service/Services_image/Physiotherapy_1.webp"
              alt="Physiotherapy Lower Parel Mumbai at R3BOOT Lodha Signet"
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
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.18) 50%, transparent 100%)',
            }}
          />

          <div className="relative z-10 flex flex-1 flex-col justify-center px-12 lg:px-16 xl:px-20 max-w-[56%]">
            <Link
              href="/physiotherapy-mumbai"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-all mb-5 group w-fit"
            >
              <div className="w-7 h-7 rounded-full border border-white/25 flex items-center justify-center group-hover:bg-white group-hover:text-[#513394] transition-all">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <span className="font-bold tracking-wider text-[11px] uppercase">Physiotherapy Mumbai</span>
            </Link>

            <p className="text-[#A78BFA] text-[11px] font-black tracking-[0.25em] uppercase mb-4">
              Lodha Signet&nbsp;&nbsp;•&nbsp;&nbsp;Prabhadevi&nbsp;&nbsp;•&nbsp;&nbsp;Clinical Care
            </p>

            <h1 className="text-5xl lg:text-6xl xl:text-[4.1rem] font-black text-white tracking-tight leading-[1.04] mb-4">
              Physiotherapy in
              <br />
              Lower Parel, <span className="text-[#A78BFA]">Mumbai</span>
            </h1>

            <p className="text-[16px] text-white/55 max-w-md leading-relaxed mb-7">
              Assessment-led physio at Lodha Signet for desk, gym, and sports pain. Close to Kamala Mills, Worli, and BKC.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="tel:+919702368612"
                className="inline-flex items-center gap-2.5 bg-[#513394] hover:bg-[#603eb0] text-white font-black px-7 py-3.5 rounded-full transition-all hover:scale-[1.02] text-[14px] tracking-wide shadow-lg shadow-[#513394]/30"
              >
                <PhoneIcon className="w-4 h-4" />
                Book Lower Parel
              </a>
              <a
                href="https://wa.me/919702368612?text=Hi%2C%20I%20want%20to%20book%20physiotherapy%20at%20Lower%20Parel"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2.5 border border-white/20 text-white hover:bg-white/[0.07] font-bold px-7 py-3.5 rounded-full transition-all text-[14px] tracking-wide"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <HeroTrustBadge items={serviceTrustBadges.physiotherapy} />
        </div>
      </section>

      {/* ─── MOBILE HERO ─── */}
      <section className="md:hidden pt-20 pb-0 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5">
          <HeroSlider slides={heroSlides} />

          <div className="inline-flex items-center gap-2 bg-[#513394]/10 dark:bg-[#513394]/20 rounded-full px-4 py-2 mt-5 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]" />
            <span className="text-[#513394] dark:text-[#A78BFA] text-[11px] font-black tracking-[0.3em] uppercase">
              Lower Parel // Clinical Care
            </span>
          </div>

          <h1 className="text-[2rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-3">
            Physiotherapy in Lower Parel,{' '}
            <span className="text-[#513394] dark:text-[#A78BFA]">Mumbai</span>
          </h1>

          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            Lodha Signet, Prabhadevi. Clinical physio for desk, gym, and sports pain near Kamala Mills, Worli, and BKC.
          </p>

          <MobileHeroTrust items={serviceTrustBadges.physiotherapy} />
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              SECOND STUDIO //
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-5 leading-tight">
              Same clinical standard.{' '}
              <span className="text-[#513394] dark:text-[#8B5CF6]">Closer to your commute.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
              R3BOOT Lower Parel sits at Lodha Signet on Senapati Bapat Marg for people who train or work in the
              Phoenix Mills corridor and do not want a cross-city trip for every session. Assessment first. Progressive
              plan after. Dadar remains the flagship for aqua therapy.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SESSION ─── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              YOUR SESSION //
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
              What to expect at{' '}
              <span className="text-[#513394] dark:text-[#8B5CF6]">Lower Parel</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
              First physio session is 45 to 60 minutes. Physio hours run 7:15 am to 3:30 pm so early and lunch slots stay practical for office days.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: ClipboardCheck,
                number: '01',
                title: 'Clinical assessment',
                body: 'History, movement testing, and load review before treatment. You leave knowing what structure is driving the pain.',
              },
              {
                icon: Hand,
                number: '02',
                title: 'Hands-on treatment',
                body: 'Manual therapy, soft tissue work, and dry needling when indicated. Matched to the finding, not a generic protocol.',
              },
              {
                icon: Target,
                number: '03',
                title: 'Clear next steps',
                body: 'Home plan, load rules, and milestones. Contrast or sports massage can be booked in the same visit when it helps.',
              },
            ].map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={i}
                  className="relative flex flex-col p-5 sm:p-6 lg:p-7 rounded-2xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08] group hover:border-[#513394]/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute -top-4 -right-2 text-[5.5rem] font-black text-gray-100 dark:text-white/[0.035] leading-none select-none pointer-events-none">
                    {step.number}
                  </div>
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] mb-5 group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-black text-gray-900 dark:text-white text-base lg:text-[17px] mb-3 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── EXPERTISE ─── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                EXPERTISE //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-5 leading-tight">
                Clinical skills at{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Lodha Signet</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
                Same R3BOOT team as Dadar. Focused on the orthopedic, sports, and desk problems we see most from this corridor.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {expertise.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="relative p-5 sm:p-6 lg:p-7 rounded-2xl bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08] group hover:border-[#513394]/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute -top-3 -right-1 text-[4.5rem] font-black text-gray-100 dark:text-white/[0.035] leading-none select-none pointer-events-none">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="relative z-10">
                      <div className="w-11 h-11 rounded-xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] mb-5 group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" strokeWidth={1.75} />
                      </div>
                      <h3 className="font-black text-gray-900 dark:text-white text-base mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONDITIONS ─── */}
      <section className="py-14 sm:py-20 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              CONDITIONS //
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
              Book Lower Parel for these{' '}
              <span className="text-[#513394] dark:text-[#8B5CF6]">clinical problems</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base max-w-2xl mx-auto">
              Location page first. Condition detail lives on the dedicated money pages. Start there if you already know the body part.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {conditionLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-[#F8F9FA] dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200 font-bold px-5 py-3 rounded-full text-sm hover:bg-[#513394] hover:text-white hover:border-transparent transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DADAR VS LOWER PAREL ─── */}
      <section className="py-14 sm:py-20 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              TWO STUDIOS //
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              Lower Parel or{' '}
              <span className="text-[#513394] dark:text-[#8B5CF6]">Dadar?</span>
            </h2>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#513394]">
                  <th className="px-4 sm:px-6 py-4 text-white font-black text-xs sm:text-sm tracking-wider uppercase"> </th>
                  <th className="px-4 sm:px-6 py-4 text-white font-black text-xs sm:text-sm tracking-wider uppercase">Lower Parel</th>
                  <th className="px-4 sm:px-6 py-4 text-white font-black text-xs sm:text-sm tracking-wider uppercase">Dadar East</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Address', 'Lodha Signet, Senapati Bapat Marg', 'Palai Plaza, Dadar East'],
                  ['Best for', 'Worli, BKC, Kamala Mills commute', 'Central Mumbai / station access'],
                  ['Physiotherapy', 'Yes (7:15 am – 3:30 pm)', 'Yes (full day slots)'],
                  ['Contrast + massage', 'Yes', 'Yes'],
                  ['Aqua therapy', 'At Dadar when needed', 'On-site'],
                ].map(([label, lp, dadar], idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white dark:bg-white/5' : 'bg-[#F8F9FA] dark:bg-white/[0.02]'}
                  >
                    <td className="px-4 sm:px-6 py-3 sm:py-4 font-bold text-xs sm:text-sm text-gray-900 dark:text-white">{label}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-[#513394] dark:text-[#A78BFA] font-medium">{lp}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">{dadar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
            Prefer Dadar?{' '}
            <Link href="/physiotherapy-dadar-mumbai" className="font-bold text-[#513394] dark:text-[#A78BFA] hover:underline">
              Physiotherapy Dadar Mumbai →
            </Link>
          </p>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <TeamSectionDemo />

      {/* ─── PATIENT-SPECIFIC ─── */}
      <section className="py-12 sm:py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              PATIENT-SPECIFIC //
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
              Built for Your{' '}
              <span className="text-[#513394] dark:text-[#8B5CF6]">Lower Parel Life</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              Desk days, gym evenings, race blocks, and post-op return to work. Care shaped around how this neighbourhood actually moves.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
            {patientSpecific.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden aspect-square sm:aspect-[16/10] shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={item.image}
                  alt={`${item.label} physiotherapy Lower Parel`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 sm:from-black/90 sm:via-black/40" />
                <div className="absolute inset-0 bg-[#513394]/0 group-hover:bg-[#513394]/30 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8 md:p-10">
                  <span className="hidden sm:block text-[10px] font-black tracking-[0.3em] text-white/50 uppercase mb-2">
                    {item.tag}
                  </span>
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-1.5 sm:mb-3 tracking-tight leading-tight">
                    {item.label}
                  </h3>
                  <p className="text-white/70 text-[13px] sm:text-sm leading-relaxed mb-3 sm:mb-5 max-w-lg line-clamp-2 sm:line-clamp-none">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {item.points.map((pt, i) => (
                      <span
                        key={i}
                        className="bg-white/15 backdrop-blur-sm text-white text-[11px] sm:text-xs font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/20"
                      >
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="hidden md:block py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 mb-10 text-center">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase block mb-3">
            PATIENT STORIES //
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            What clients say
          </h2>
        </div>
        <TestimonialsCarousel testimonials={testimonials} />
      </section>

      <section className="md:hidden py-10 bg-white dark:bg-[#0A0A0A]">
        <div className="px-5 mb-6">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase block mb-2">
            Patient Stories
          </span>
          <h2 className="text-[26px] font-extrabold text-gray-900 dark:text-white leading-tight">What clients say</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto px-5 pb-2 snap-x snap-mandatory scrollbar-hide">
          {testimonials.slice(0, 4).map((r, i) => (
            <figure
              key={i}
              className="flex-shrink-0 w-[85vw] snap-start bg-white dark:bg-[#161616] border border-gray-100 dark:border-white/[0.07] rounded-3xl p-5 flex flex-col"
            >
              <blockquote className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed mb-5 flex-1">
                “{r.quote}”
              </blockquote>
              <div className="flex items-center gap-3 mt-auto">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <Image src={r.avatar} alt={r.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-bold text-sm leading-tight">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.meta}</p>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* ─── LOCATION ─── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#F8F9FA] dark:bg-[#09090E]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[42%_1fr] gap-10 lg:gap-16 items-start">
            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                LOCATION //
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-5">
                Visit us at{' '}
                <span className="text-[#7B5FCA]">R3BOOT Lower Parel</span>
              </h2>
              <div className="w-10 h-[2px] bg-[#7B5FCA] mb-6" />

              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-full border-[1.5px] border-[#513394] dark:border-[#A78BFA] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#513394] dark:text-[#A78BFA]" strokeWidth={1.75} />
                </div>
                <div className="pt-1.5">
                  <p className="text-gray-900 dark:text-white font-bold text-[15px] leading-snug">
                    Lodha Signet, A-303, Senapati Bapat Marg, West
                  </p>
                  <p className="text-gray-500 dark:text-white/45 text-[14px] leading-snug">
                    Prabhadevi / Lower Parel, Mumbai 400013
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-full border-[1.5px] border-[#513394] dark:border-[#A78BFA] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#513394] dark:text-[#A78BFA]" strokeWidth={1.75} />
                </div>
                <div className="pt-1.5 space-y-1.5">
                  {HOURS.map((h, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-[14px]">
                      <span className="text-gray-700 dark:text-white/70 font-bold sm:w-[160px] shrink-0">{h.days}</span>
                      <span className="text-gray-500 dark:text-white/45">{h.time}</span>
                    </div>
                  ))}
                  <p className="text-xs text-gray-400 dark:text-white/35 pt-2 leading-relaxed">
                    Physio: 7:15 am – 3:30 pm. Contrast, massage, counselling &amp; Pilates by appointment into the evening (except Wed early close).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="w-11 h-11 rounded-full border-[1.5px] border-[#513394] dark:border-[#A78BFA] flex items-center justify-center shrink-0">
                  <Train className="w-5 h-5 text-[#513394] dark:text-[#A78BFA]" strokeWidth={1.75} />
                </div>
                <div className="pt-1.5">
                  <p className="text-gray-900 dark:text-white font-bold text-[15px] leading-snug mb-1">Getting here</p>
                  <p className="text-gray-500 dark:text-white/45 text-[14px] leading-relaxed">
                    Western line via Prabhadevi. Road access on Senapati Bapat Marg for Worli, Kamala Mills, and BKC.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+919702368612"
                  className="inline-flex items-center gap-2 bg-[#513394] hover:bg-[#603eb0] text-white font-black px-6 py-3.5 rounded-full text-sm transition-all"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Call to Book
                </a>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#513394]/30 dark:border-[#A78BFA]/40 text-[#513394] dark:text-[#A78BFA] font-bold px-6 py-3.5 rounded-full text-sm hover:bg-[#513394]/5 transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-[#1A1A1A] h-[360px] sm:h-[450px] relative bg-gray-100 dark:bg-[#111]">
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="R3BOOT Lower Parel - Lodha Signet"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── RELATED ─── */}
      <section className="py-10 sm:py-14 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
          <p className="text-xs font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-5 sm:mb-6">
            ALSO AT R3BOOT //
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {[
              { label: 'Physiotherapy Dadar Mumbai', href: '/physiotherapy-dadar-mumbai' },
              { label: 'Physiotherapy Mumbai', href: '/physiotherapy-mumbai' },
              { label: 'Sports Massage Lower Parel', href: '/sports-massage-lower-parel' },
              { label: 'Contrast Therapy Lower Parel', href: '/contrast-therapy-lower-parel' },
              { label: 'Shoulder Pain Physiotherapy', href: '/physiotherapy-for-shoulder-pain-mumbai' },
              { label: 'Contact & Hours', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-[#F8F9FA] dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm hover:bg-[#513394] hover:text-white hover:border-transparent transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={physiotherapyLowerParelFaqs} />

      {/* ─── CTA ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-white/50 mb-6">
              <Building2 className="w-4 h-4" />
              <span className="text-[11px] font-black tracking-[0.25em] uppercase">Lodha Signet · Prabhadevi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tight leading-tight">
              Book physiotherapy in{' '}
              <span className="text-white/50">Lower Parel.</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 mb-4 leading-relaxed font-medium max-w-3xl mx-auto">
              Clinical assessment at R3BOOT Lodha Signet. Say Lower Parel when you message so we hold the right studio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
              <a
                href="tel:+919702368612"
                className="w-full sm:w-auto bg-white text-[#513394] font-black px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all hover:scale-105 shadow-2xl text-base sm:text-lg tracking-wide inline-flex items-center justify-center gap-2"
              >
                <PhoneIcon className="w-4 h-4" />
                Call to Book
              </a>
              <a
                href="https://wa.me/919702368612?text=Hi%2C%20I%20want%20to%20book%20physiotherapy%20at%20Lower%20Parel"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-full sm:w-auto border-2 border-white/30 text-white font-black px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all hover:bg-white/10 text-base sm:text-lg tracking-wide"
              >
                WhatsApp Lower Parel
              </a>
            </div>
          </div>
        </div>
      </section>

      <ServiceSchema
        serviceName="Physiotherapy in Lower Parel Mumbai"
        description="Clinical physiotherapy at R3BOOT Lower Parel / Prabhadevi, Lodha Signet, Senapati Bapat Marg. Assessment-led care for desk, gym, sports, and post-surgery patients near Kamala Mills, Worli, and BKC."
        serviceUrl="https://www.r3boot.in/physiotherapy-lower-parel"
      />
      <FAQSchema faqs={physiotherapyLowerParelFaqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Physiotherapy Mumbai', url: '/physiotherapy-mumbai' },
          { name: 'Physiotherapy Lower Parel', url: '/physiotherapy-lower-parel' },
        ]}
      />
    </main>
  )
}
