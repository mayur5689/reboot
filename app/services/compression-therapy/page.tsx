import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { services } from '@/lib/services'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { compressionTherapyFaqs } from '@/lib/faqs/compression-therapy'
import { HeroTrustBadge, serviceTrustBadges } from '@/components/HeroTrustBadge'
import { MobileHeroTrust } from '@/components/MobileHeroTrust'
import { HeroSlider } from '@/app/services-demo/contrast-therapy/HeroSlider'
import { TeamSectionDemo } from '@/app/services-demo/contrast-therapy/TeamSectionDemo'
import { TestimonialsCarousel } from '@/app/services/aqua-therapy/TestimonialsCarousel'
import { LocationSection } from '@/app/services/aqua-therapy/LocationSection'

export const metadata: Metadata = {
  title: 'Compression Therapy Mumbai | Normatec 3 Full Body at R3BOOT Dadar',
  description:
    'Normatec 3 Full Body compression therapy in Mumbai at R3BOOT Dadar. Dynamic air compression for legs, hips, and arms. 7 levels, 40–110 mmHg. Book a session.',
  alternates: { canonical: '/services/compression-therapy' },
  keywords: [
    'compression therapy mumbai',
    'normatec mumbai',
    'normatec 3 full body',
    'pneumatic compression mumbai',
    'recovery boots mumbai',
    'air compression therapy dadar',
    'sports recovery compression mumbai',
    'lymphatic compression mumbai',
  ],
}

const otherServices = services.filter((s) => s.slug !== 'compression-therapy').slice(0, 4)

const heroSlides = [
  {
    src: '/images/hero/compression-therapy-training.jpg',
    alt: 'Compression therapy recovery session at R3BOOT Mumbai',
  },
]

const rebootReachPoints = [
  {
    step: '01',
    title: 'Sequential Pulse — Distal to Proximal Flush',
    body: 'Normatec inflates overlapping chambers in sequence, starting at the feet, hands, or hips and moving toward the core. That milking pattern is designed to temporarily increase circulation and move fluid out of fatigued tissue, rather than squeezing the whole limb at once.',
  },
  {
    step: '02',
    title: 'Gapless Zones — Coverage Without Pressure Gaps',
    body: 'Legs and arms use 5 overlapping compression zones. Hips use 2. Overlap means the pulse does not skip a band of tissue between chambers, which is the difference between a clinical sequential system and a single-chamber squeeze.',
  },
  {
    step: '03',
    title: 'ZoneBoost — Extra Pressure Where It Is Stuck',
    body: 'If calves, quads, or a hip pocket are holding more load, ZoneBoost adds extra time and pressure to that zone without turning the entire session up to maximum. Useful after races, long runs, or heavy lower-body days.',
  },
  {
    step: '04',
    title: 'Full Body — Legs, Hips, and Arms on One System',
    body: 'Most recovery boots stop at the legs. The Normatec 3 Full Body system at R3BOOT includes arm and hip attachments as well, so upper-body training days and hip-dominant sports get the same sequential flush.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Screening and fit',
    body: 'We review training load, swelling, and medical history, then screen for contraindications. Attachments are sized so compression is even, not loose or pinching. Worn over comfortable clothing — empty pockets and no bunched fabric under the boots.',
  },
  {
    number: '02',
    title: 'Protocol',
    body: 'Time, pressure level (1–7), and body region are set for that visit: shorter medium-intensity work before training, or a longer recovery block after.',
  },
  {
    number: '03',
    title: 'Pulse session',
    body: 'You sit or lie down while sequential compression runs. Most people read, breathe, or simply rest. Typical duration is 20 to 30 minutes; up to 60 when the load calls for it. Boots deflate for 5–10 seconds at the end before unzipping — normal, not a fault.',
  },
  {
    number: '04',
    title: 'Check-in',
    body: 'We confirm how the tissue feels, note what pressure worked, and plan whether the next visit stacks with physiotherapy, massage, or contrast therapy.',
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

const equipmentSpecs = [
  {
    title: '7 levels — 40 to 110 mmHg',
    body: 'Pressure is set to the session, not a default. Lower levels for warm-up and first visits. Higher levels after heavy training once you tolerate the pulse.',
  },
  {
    title: '5 overlapping zones — legs and arms',
    body: 'Each limb attachment uses five gapless chambers so the pulse travels in sequence instead of leaving uncompressed bands between inflations.',
  },
  {
    title: '2 overlapping zones — hips',
    body: 'The hip attachment covers the glutes and hip complex. Useful after squats, running, Hyrox, and field sports that load the posterior chain.',
  },
  {
    title: 'ZoneBoost™ — extra pressure on one zone',
    body: 'Adds time and pressure to a chosen chamber when calves, quads, or a hip pocket need more work than the rest of the limb.',
  },
  {
    title: 'Bluetooth control — Hyperice App',
    body: 'Time, intensity, and zone settings can be run from the control unit or the app, so the protocol stays consistent from visit to visit.',
  },
  {
    title: 'Compact control unit — 3.2 lb',
    body: 'The pump is small, quiet enough for a recovery room, and runs on battery or wall power. You stay on the table or chair for the full session.',
  },
]

const goodCandidates = [
  'Athletes after heavy training, matches, or race day',
  'Runners, Hyrox, CrossFit, and gym-goers with DOMS',
  'People with heavy legs after long sitting or travel',
  'Desk professionals who train hard in the evening',
  'Pre-session warm-up when tissue feels stiff',
  'Recovery days stacked with physio or sports massage',
  'Upper-body training days that need arm compression',
  'Anyone cleared for pneumatic compression who wants a faster flush of training load',
]

const contraindications = [
  'Known or suspected deep vein thrombosis (DVT)',
  'Pulmonary embolism',
  'Decompensated or congestive heart failure',
  'Acute infection, cellulitis, or fever',
  'Open wounds or untreated skin conditions in the treatment area',
  'Severe peripheral arterial disease',
  'Active thrombophlebitis',
  'Recent fracture or surgery in the treatment area until cleared',
]

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

export default function CompressionTherapyPage() {
  return (
    <main className="ct-page min-h-screen bg-white dark:bg-[#0A0A0A] pb-24 md:pb-0">

      {/* ─────────────────────────────────────────────
          DESKTOP HERO (md+): full-bleed bg images, text overlaid left
      ───────────────────────────────────────────── */}
      <section className="hidden md:flex flex-col bg-black overflow-hidden pt-20 lg:pt-24" style={{ minHeight: '92vh' }}>
        <div className="relative flex flex-1 flex-col">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/compression-therapy-training.jpg"
            alt="Compression Therapy Mumbai – Normatec 3 Full Body at R3BOOT Dadar"
            fill
            className="object-cover"
            style={{ objectPosition: '60% center' }}
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

        <div className="relative z-10 flex flex-1 flex-col justify-center px-12 lg:px-16 xl:px-20 max-w-[54%]">
          <p className="text-[#A78BFA] text-[11px] font-black tracking-[0.25em] uppercase mb-4">
            Normatec 3 Full Body&nbsp;&nbsp;•&nbsp;&nbsp;Legs, Hips, Arms&nbsp;&nbsp;•&nbsp;&nbsp;Dadar
          </p>

          <h1 className="text-5xl lg:text-6xl xl:text-[4.25rem] font-black text-white tracking-tight leading-[1.04] mb-4">
            Compression Therapy<br />
            in <span className="text-[#A78BFA]">Mumbai</span>
          </h1>

          <p className="text-[16px] text-white/55 max-w-md leading-relaxed mb-7">
            Dynamic air compression that pulses fatigue out of tissue. 7 levels, 40–110 mmHg. Book at R3BOOT Dadar.
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

        <HeroTrustBadge items={serviceTrustBadges['compression-therapy']} />
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          MOBILE HERO (<md)
      ───────────────────────────────────────────── */}
      <section className="md:hidden pt-20 pb-0 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5">
          <HeroSlider slides={heroSlides} />

          <div className="inline-flex items-center gap-2 bg-[#513394]/10 dark:bg-[#513394]/20 rounded-full px-4 py-2 mt-5 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]" />
            <span className="text-[#513394] dark:text-[#A78BFA] text-[11px] font-black tracking-[0.3em] uppercase">Normatec 3 Full Body</span>
          </div>

          <h1 className="text-[2rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-3">
            Compression Therapy in{' '}
            <span className="text-[#513394] dark:text-[#A78BFA]">Mumbai</span>
          </h1>

          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            Dynamic air compression for legs, hips, and arms. Pulse fatigue out of tissue after training. R3BOOT Dadar.
          </p>

          <MobileHeroTrust items={serviceTrustBadges['compression-therapy']} />
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SCREENING
      ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                SCREENING //
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
                Who Compression Therapy Is For.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">And Who It Is Not.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F8F9FA] dark:bg-white/5 rounded-[2.5rem] p-8 border border-gray-100 dark:border-white/5 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#513394]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#513394]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-black text-gray-900 dark:text-white text-lg">GOOD CANDIDATES</h3>
                </div>
                <ul className="space-y-4">
                  {goodCandidates.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#513394] flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F8F9FA] dark:bg-white/5 rounded-[2.5rem] p-8 border border-gray-100 dark:border-white/5 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="font-black text-gray-900 dark:text-white text-lg">CONTRAINDICATIONS</h3>
                </div>
                <ul className="space-y-4">
                  {contraindications.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-red-500/90 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-400 dark:text-gray-500 text-xs mt-6 leading-relaxed">
                  Screened before your first session. If any condition applies, we will advise on timing or another recovery option.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          YOUR SESSION
      ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
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
              A typical block is 20–30 minutes of sequential compression. First visits include fit, screening, and a pressure check.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 max-w-7xl mx-auto">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col sm:aspect-square p-5 sm:p-6 lg:p-7 rounded-2xl bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08] group hover:border-[#513394]/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 overflow-hidden"
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

      {/* ─────────────────────────────────────────────
          HOW IT WORKS
      ───────────────────────────────────────────── */}
      <section id="benefits" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                OUR APPROACH //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-5">
                How Normatec{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">
                  moves fluid, not just squeezes it.
                </span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-6">
                Dynamic air compression is a sequential pulse, not a static squeeze. Pressure, time, and body region are set for that day: warm-up before you train, or a longer flush after.
              </p>
              <div className="hidden lg:flex items-center gap-3 text-[#513394] dark:text-[#A78BFA]">
                <div className="w-8 h-[1.5px] bg-[#513394] dark:bg-[#A78BFA]" />
                <span className="text-xs font-black tracking-widest uppercase">Screened on site, every first visit</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {rebootReachPoints.map((point) => (
                <div
                  key={point.step}
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
          EQUIPMENT SPECS
      ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                THE EQUIPMENT //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                Normatec 3 Full Body.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Not a pair of generic boots.</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                Legs, hips, and arms on one system. Pressure, zones, and session time are adjustable so the protocol matches the training day.
              </p>

              <div className="space-y-6">
                {equipmentSpecs.map((spec, idx) => (
                  <div key={spec.title} className="flex gap-5 group">
                    <div className="w-10 h-10 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black shrink-0 text-sm group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{spec.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{spec.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl order-1 lg:order-2">
              <Image
                src="/images/hero/compression-therapy-legs.jpg"
                alt="Lower-body training load that compression therapy at R3BOOT is built to recover from"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  FULL BODY //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  7 levels. 40–110 mmHg. Legs, hips, and arms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          PRE VS POST
      ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                TIMING //
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
                Same System.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Different Job Before and After Training.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#513394] text-white p-8 rounded-[2.5rem]">
                <div className="text-xs font-black tracking-[0.25em] uppercase text-white/60 mb-4">BEFORE TRAINING</div>
                <h3 className="text-2xl font-black mb-4">15–20 minutes. Medium intensity.</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  A shorter pulse to increase circulation and take stiffness out of tissue before you load it.
                  Useful on days when calves, hips, or arms feel heavy before a session.
                </p>
                <div className="bg-white/10 rounded-xl p-3">
                  <p className="text-white/70 text-xs font-bold">Goal: warm-up and range, not a full recovery dump immediately before hard work.</p>
                </div>
              </div>

              <div className="bg-[#1A1A1A] text-white p-8 rounded-[2.5rem]">
                <div className="text-xs font-black tracking-[0.25em] uppercase text-white/60 mb-4">AFTER TRAINING</div>
                <h3 className="text-2xl font-black mb-4">20–60 minutes. Medium to high intensity.</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  A longer flush after racing, heavy lifting, or a high-volume week. Helps circulation, eases aches,
                  and reduces the swollen, heavy-leg feeling that follows hard sessions.
                </p>
                <div className="bg-white/10 rounded-xl p-3">
                  <p className="text-white/70 text-xs font-bold">Goal: recover between sessions. Pair with massage or contrast therapy when the plan calls for it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamSectionDemo />

      {/* MOBILE: Google Review cards */}
      <section className="md:hidden py-10 bg-white dark:bg-[#0A0A0A]">
        <div className="px-5 mb-6">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase block mb-2">Patient Stories</span>
          <h2 className="text-[26px] font-extrabold text-gray-900 dark:text-white leading-tight">What clients say</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto px-5 pb-2 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((r, i) => (
            <figure key={i} className="flex-shrink-0 w-[85vw] snap-start bg-white dark:bg-[#161616] border border-gray-100 dark:border-white/[0.07] shadow-sm dark:shadow-none rounded-3xl p-5 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 48 48">
                    <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
                    <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.1 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.6 7.3 6.3 14.7z"/>
                    <path fill="#FBBC05" d="M24 46c5.6 0 10.5-1.9 14.4-5l-6.7-5.5C29.6 37 26.9 38 24 38c-5.9 0-10.9-4-12.7-9.5l-7 5.4C7.5 41.8 15.2 46 24 46z"/>
                    <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.8 2.4-2.3 4.4-4.3 5.8l6.7 5.5C42.1 36.4 45 30.7 45 24c0-1.3-.2-2.7-.5-4z"/>
                  </svg>
                  <span className="text-gray-900 dark:text-white font-bold text-[15px]">Google Review</span>
                </div>
                <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-[#222] rounded-full px-3 py-1.5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-gray-900 dark:text-white font-bold text-[13px] ml-0.5">5.0</span>
                </div>
              </div>

              <div className="h-px bg-gray-100 dark:bg-white/[0.07] mb-4" />

              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={r.avatar} alt={r.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-bold text-[15px] leading-tight">{r.name}</p>
                  <p className="text-gray-400 dark:text-white/40 text-[12px]">{r.meta}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 mb-4">
                <svg className="w-3.5 h-3.5 text-gray-400 dark:text-white/30 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2.25 2.25 0 002.25-2.25V7a2.25 2.25 0 00-2.25-2H5a2.25 2.25 0 00-2.25 2v12A2.25 2.25 0 005 21z" />
                </svg>
                <span className="text-gray-400 dark:text-white/35 text-[12px]">{r.ago}</span>
              </div>

              <blockquote className="text-gray-600 dark:text-white/80 text-[15px] leading-relaxed italic flex-grow mb-5">
                &ldquo;{r.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-2 pt-4 border-t border-gray-100 dark:border-white/[0.06]">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-gray-400 dark:text-white/35 text-[12px]">Verified Google Review</span>
              </div>
            </figure>
          ))}
        </div>
      </section>

      <section className="hidden md:block py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">PATIENT STORIES //</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight">What clients say</h2>
          </div>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      <LocationSection />

      <FAQSection faqs={compressionTherapyFaqs} layout="grid" />

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
                Book compression therapy{' '}
                <span className="text-[#A78BFA]">in Mumbai</span>
              </h2>
              <p className="text-white/55 text-[13px] leading-relaxed mb-5">
                R3BOOT, Dadar. Open seven days. We will tell you honestly if Normatec is the right next session, or if physio or massage should come first.
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
            Book compression therapy in{' '}
            <span className="text-white/45">Mumbai</span>
          </h2>
          <p className="text-lg text-white/65 mb-10 max-w-xl mx-auto leading-relaxed">
            R3BOOT, Dadar. Open seven days. We will tell you honestly if Normatec is the right next session, or if physio or massage should come first.
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

      {/* OTHER SERVICES */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              KEEP EXPLORING //
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
              Other Ways to <span className="text-[#7B5FCA]">Recover</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherServices.map((service, idx) => (
              <Link
                key={idx}
                href={`/services/${service.slug}`}
                className="group bg-gray-50 dark:bg-white/[0.03] p-4 rounded-[2.5rem] border border-gray-100 dark:border-white/[0.08] hover:border-[#513394]/30 dark:hover:border-[#A78BFA]/30 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-white/45 line-clamp-2 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between w-full bg-[#513394]/10 dark:bg-[#513394]/15 group-hover:bg-[#513394] text-[#513394] dark:text-[#A78BFA] group-hover:text-white rounded-full p-1 transition-all duration-300">
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

      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md border-t border-gray-200 dark:border-white/[0.09] px-4 pt-3 pb-5">
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
              className="flex-1 flex items-center justify-center gap-2 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold rounded-xl py-3.5 text-[14px] tracking-wide hover:bg-gray-100 dark:hover:bg-white/[0.07] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <ServiceSchema
        serviceName="Compression Therapy Mumbai"
        description="Normatec 3 Full Body dynamic air compression at R3BOOT Dadar. Legs, hips, and arms. 7 compression levels (40–110 mmHg), ZoneBoost, and sequential pulse technology for circulation, swelling, and post-training recovery."
        serviceUrl="https://www.r3boot.in/services/compression-therapy"
        areaServed="Mumbai"
      />
      <FAQSchema faqs={compressionTherapyFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Compression Therapy', url: '/services/compression-therapy' },
      ]} />
    </main>
  )
}
