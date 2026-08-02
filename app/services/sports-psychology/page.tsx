import Image from 'next/image'
import type { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import { sportsPsychologyFaqs } from '@/lib/faqs/sports-psychology'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import { GoogleReviewsSection } from '@/app/services-demo/contrast-therapy/GoogleReviewsSection'
import { HeroSlider } from './_components/HeroSlider'
import { PainPointsSection } from './_components/PainPointsSection'
import { DualPillarsSection } from './_components/DualPillarsSection'
import { WhoForSection } from './_components/WhoForSection'
import { TeamSection } from './_components/TeamSection'
import { LocationSection } from './_components/LocationSection'
import { HeroTrustBadge, serviceTrustBadges } from '@/components/HeroTrustBadge'

export const metadata: Metadata = {
  title: 'Sports Psychology & Counselling in Mumbai | R3BOOT Dadar',
  description:
    'Integrated sports psychology and counselling in Mumbai. Performance skills, injury psychology, focus under pressure, and mental training at R3BOOT Dadar.',
  keywords: [
    'sports psychology mumbai',
    'sports counselling mumbai',
    'mental training athletes mumbai',
    'performance anxiety counselling',
    'sports psychologist dadar',
  ],
  alternates: { canonical: '/services/sports-psychology' },
}

const heroSlides = [
  {
    src: '/images/hero/r3boot-counselling.png',
    alt: 'Sports psychology and counselling session at R3BOOT Mumbai',
  },
  {
    src: '/images/service/Services_image/Sports_Pyscology.webp',
    alt: 'Sports psychology mental performance training',
  },
  {
    src: '/images/service/Services_image/Counselling & Mental Training-1.webp',
    alt: 'Counselling and mental training at R3BOOT',
  },
]

const rebootReachPoints = [
  {
    step: '01',
    title: 'One intake, clear direction',
    body: 'We start with what is actually getting in the way — pressure, fear after injury, flat motivation, or a need for sharper competition skills. You leave the first session knowing whether the work leans performance, counselling, or both.',
  },
  {
    step: '02',
    title: 'Skills you can use in training the same week',
    body: 'Visualisation, focus cues, self-talk, and pre-competition routines are practised — not only discussed. Mental work has to survive the warm-up, not just the consulting room.',
  },
  {
    step: '03',
    title: 'Coordinated with physical rehab when needed',
    body: 'If you are recovering from injury, mental sessions sit alongside physiotherapy so you rebuild trust in your body while tissue heals. Same centre. Same plan.',
  },
  {
    step: '04',
    title: 'Confidential, structured, time-bound',
    body: 'Sessions are 50 minutes, private, and built around measurable shifts in composure, consistency, and how you show up under load. Not open-ended talk without a performance goal.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Assessment & Goal Setting',
    body: 'Map the mental blocks, performance triggers, and emotional load. Align goals with your training calendar or rehab stage.',
  },
  {
    number: '02',
    title: 'Skill Building & Practice',
    body: 'Apply mental techniques — imagery, focus, self-talk, emotional regulation — and rehearse them in scenarios that match your sport.',
  },
  {
    number: '03',
    title: 'Integration with Training / Rehab',
    body: 'Carry tools into practice, competition, or physiotherapy. Where useful, the mental plan is coordinated with your physical recovery team.',
  },
  {
    number: '04',
    title: 'Review & Refine',
    body: 'Track composure, consistency, and confidence. Adjust the program as pressure increases or as you return to full performance.',
  },
]

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

export default function SportsPsychologyPage() {
  return (
    <main className="psych-page min-h-screen bg-white dark:bg-[#0A0A0A]">
      <ServiceSchema
        serviceName="Sports Psychology & Counselling"
        description="Integrated sports psychology and counselling for athletes and high performers in Mumbai. Performance skills, injury psychology, and mental training at R3BOOT Dadar."
        serviceUrl="https://www.r3boot.in/services/sports-psychology"
      />
      <FAQSchema faqs={sportsPsychologyFaqs} />

      {/* ─── DESKTOP HERO ─── */}
      <section className="hidden md:flex relative flex-col bg-black overflow-hidden" style={{ minHeight: '92vh' }}>
        <div className="absolute inset-0">
          <Image
            src="/images/hero/r3boot-counselling.png"
            alt="Sports Psychology and Counselling at R3BOOT Mumbai"
            fill
            className="object-cover"
            style={{ objectPosition: '45% center' }}
            priority
          />
        </div>

        {/* Left black vignette — keeps hero copy readable over the photo */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 18%, rgba(0,0,0,0.45) 38%, rgba(0,0,0,0.15) 55%, transparent 68%)',
          }}
        />
        {/* Soft radial vignette from left for deeper edge falloff */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 120% at 0% 50%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 45%, transparent 70%)',
          }}
        />
        {/* Bottom fade so glass bar reads cleanly over the photo */}
        <div
          className="absolute inset-x-0 bottom-0 h-[34%] pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.18) 50%, transparent 100%)' }}
        />

        {/* Copy + CTAs */}
        <div className="relative z-10 flex flex-1 flex-col justify-center px-12 lg:px-16 xl:px-20 pt-28 max-w-[54%]">
          <p className="text-[#A78BFA] text-[11px] font-black tracking-[0.25em] uppercase mb-4">
            Performance Skills&nbsp;&nbsp;•&nbsp;&nbsp;Counselling&nbsp;&nbsp;•&nbsp;&nbsp;Confidential
          </p>

          <h1 className="text-5xl lg:text-6xl xl:text-[4.25rem] font-black text-white tracking-tight leading-[1.04] mb-4">
            Sports Psychology<br />
            &amp; Counselling in <span className="text-[#A78BFA]">Mumbai</span>
          </h1>

          <p className="text-[16px] text-white/55 max-w-md leading-relaxed mb-7">
            Pressure, focus, injury psychology, and mental training — one integrated service for athletes and high performers at R3BOOT Dadar.
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

        <HeroTrustBadge items={serviceTrustBadges['sports-psychology']} />
      </section>

      {/* ─── MOBILE HERO ─── */}
      <section className="md:hidden pt-20 pb-0 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5">
          <HeroSlider slides={heroSlides} />

          <div className="inline-flex items-center gap-2 bg-[#513394]/10 dark:bg-[#513394]/20 rounded-full px-4 py-2 mt-5 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]" />
            <span className="text-[#513394] dark:text-[#A78BFA] text-[11px] font-black tracking-[0.3em] uppercase">
              Mental Performance
            </span>
          </div>

          <h1 className="text-[2rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-3">
            Sports Psychology &amp; Counselling in{' '}
            <span className="text-[#513394] dark:text-[#A78BFA]">Mumbai</span>
          </h1>

          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            Performance skills and counselling in one service. Manage pressure, rebuild trust after injury, and train the mental side at R3BOOT Dadar.
          </p>

          {/* Mobile trust grid — same hierarchy as desktop glass bar */}
          <div
            className="mt-5 mb-2 rounded-[24px] border border-white/[0.1] overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(28,24,40,0.95) 0%, rgba(16,14,24,0.98) 100%)',
              boxShadow: '0 16px 40px rgba(81,51,148,0.22)',
            }}
          >
            <div className="grid grid-cols-2">
              {[
                {
                  value: '5.0',
                  label: 'Google Reviews',
                  desc: '500+ Happy Clients',
                  stars: true,
                  icon: 'google' as const,
                },
                {
                  value: '50 Min',
                  label: 'Focused Sessions',
                  desc: 'Quality time. Real results.',
                  icon: 'clock' as const,
                },
                {
                  value: 'Specialist-Led',
                  label: 'Mental Performance',
                  desc: 'Expert care. Measurable impact.',
                  icon: 'user' as const,
                },
                {
                  value: 'Confidential',
                  label: 'Private Sessions',
                  desc: 'Your privacy. Our priority.',
                  icon: 'shield' as const,
                },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`relative flex flex-col items-center text-center px-3 py-5 ${
                    i % 2 === 1 ? 'border-l border-white/[0.1]' : ''
                  } ${i >= 2 ? 'border-t border-white/[0.1]' : ''}`}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-3 border border-white/[0.1] text-[#A78BFA]"
                    style={{
                      background: 'radial-gradient(circle at 50% 40%, rgba(167,139,250,0.16) 0%, rgba(0,0,0,0.4) 70%)',
                      boxShadow: '0 0 16px rgba(167,139,250,0.28)',
                    }}
                  >
                    {item.icon === 'google' ? (
                      <svg className="w-5 h-5" viewBox="0 0 48 48" aria-hidden>
                        <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.1 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.6 7.3 6.3 14.7z"/><path fill="#FBBC05" d="M24 46c5.6 0 10.5-1.9 14.4-5l-6.7-5.5C29.6 37 26.9 38 24 38c-5.9 0-10.9-4-12.7-9.5l-7 5.4C7.5 41.8 15.2 46 24 46z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.8 2.4-2.3 4.4-4.3 5.8l6.7 5.5C42.1 36.4 45 30.7 45 24c0-1.3-.2-2.7-.5-4z"/>
                      </svg>
                    ) : item.icon === 'clock' ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : item.icon === 'user' ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                  </div>
                  <p className="text-white text-[20px] font-black leading-none tracking-tight">{item.value}</p>
                  {'stars' in item && item.stars && (
                    <div className="flex items-center gap-0.5 mt-1.5 mb-1">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="w-3 h-3 fill-[#FACC15]" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  )}
                  <p className={`text-white text-[13px] font-bold leading-none mb-1 ${'stars' in item && item.stars ? '' : 'mt-2'}`}>
                    {item.label}
                  </p>
                  <p className="text-white/45 text-[11px] leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PainPointsSection />

      {/* ─── APPROACH ─── */}
      <section id="benefits" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Content — left on desktop; below heading on mobile */}
            <div className="lg:col-span-7 space-y-3 order-2 lg:order-1">
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

            {/* Heading — right on desktop; first on mobile */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 order-1 lg:order-2">
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
                Physical training alone does not fix choke, fear after injury, or a flat mid-season. Mental performance work has to be specific, practised, and — when rehab is involved — connected to the same team treating your body.
              </p>
              <div className="hidden lg:flex items-center gap-3 text-[#513394] dark:text-[#A78BFA]">
                <div className="w-8 h-[1.5px] bg-[#513394] dark:bg-[#A78BFA]" />
                <span className="text-xs font-black tracking-widest uppercase">Integrated mental performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DualPillarsSection />
      <WhoForSection />

      {/* ─── PROCESS ─── */}
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
              A typical session is 50 minutes. Most programs run 4–8 sessions; deeper return-to-sport or performance blocks often extend to 8–12.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 max-w-7xl mx-auto">
            {processSteps.map((step) => (
              <div
                key={step.number}
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

      <TeamSection />
      <GoogleReviewsSection />
      <LocationSection />
      <FAQSection faqs={sportsPsychologyFaqs} />

      {/* MOBILE CTA */}
      <section className="md:hidden bg-white dark:bg-[#0A0A0A] pt-10 pb-28">
        <div className="px-4">
          <div
            className="relative rounded-3xl overflow-hidden px-6 pt-7 pb-6"
            style={{ background: 'linear-gradient(135deg, #2a0d6e 0%, #1a0850 55%, #110638 100%)' }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px] opacity-30 pointer-events-none" style={{ background: '#7c3aed' }} />
            <div className="relative">
              <h2 className="text-[26px] font-black text-white leading-tight tracking-tight mb-2">
                Book a mental performance session in{' '}
                <span className="text-[#A78BFA]">Mumbai</span>
              </h2>
              <p className="text-white/55 text-[13px] leading-relaxed mb-5">
                R3BOOT, Dadar. Open Monday to Saturday. Tell us whether you need competition skills, counselling support, or both — we will guide the first step.
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
            R3BOOT, Dadar. Sports psychology and counselling as one service. Open Monday to Saturday.
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
    </main>
  )
}
