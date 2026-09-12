import Image from 'next/image'
import type { Metadata } from 'next'
import { aquaTherapyMumbaiFaqs } from '@/lib/faqs/aqua-therapy-mumbai'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { TeamSectionDemo } from './TeamSectionDemo'
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

      {/* ── DESKTOP HERO (md+) — match contrast-therapy-mumbai pattern ── */}
      <section className="hidden md:flex flex-col bg-black overflow-hidden pt-20 lg:pt-24" style={{ minHeight: '92vh' }}>
        <div className="relative flex flex-1 flex-col">
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
          <div className="relative z-10 flex flex-1 flex-col justify-center px-12 lg:px-16 xl:px-20 max-w-[54%]">
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
          <div className="flex items-center gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-[#513394] hover:bg-[#603eb0] text-white font-black px-8 py-4 rounded-full transition-all hover:scale-[1.02] text-[15px] tracking-wide shadow-lg shadow-[#513394]/30"
            >
              <PhoneIcon className="w-4 h-4" />
              Free Consultation
            </a>
            <a
              href="https://wa.me/919702368612"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-white/20 text-white hover:bg-white/[0.07] font-bold px-8 py-4 rounded-full transition-all text-[15px] tracking-wide"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.855L0 24l6.335-1.502A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.38l-.36-.214-3.732.885.916-3.629-.235-.373A9.818 9.818 0 1112 21.818z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          <div className="flex items-stretch gap-3">
            <div className="flex items-center gap-3 bg-[#16161e] border border-white/[0.08] rounded-2xl px-4 py-3.5">
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 48 48" aria-hidden>
                <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.1 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.6 7.3 6.3 14.7z" />
                <path fill="#FBBC05" d="M24 46c5.6 0 10.5-1.9 14.4-5l-6.7-5.5C29.6 37 26.9 38 24 38c-5.9 0-10.9-4-12.7-9.5l-7 5.4C7.5 41.8 15.2 46 24 46z" />
                <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.8 2.4-2.3 4.4-4.3 5.8l6.7 5.5C42.1 36.4 45 30.7 45 24c0-1.3-.2-2.7-.5-4z" />
              </svg>
              <div>
                <p className="text-white text-[14px] font-bold leading-none mb-1.5">Google Reviews</p>
                <div className="flex items-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20" aria-hidden>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-white font-bold text-[13px] ml-1">5.0</span>
                </div>
                <p className="text-white/40 text-[12px]">500+ Happy Clients</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#16161e] border border-white/[0.08] rounded-2xl px-4 py-3.5">
              <svg className="w-7 h-7 text-[#A78BFA] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="text-white text-[14px] font-bold leading-none mb-1">15+ Years</p>
                <p className="text-white/40 text-[12px]">Clinical Experience</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#16161e] border border-white/[0.08] rounded-2xl px-4 py-3.5">
              <svg className="w-7 h-7 text-[#A78BFA] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div>
                <p className="text-white text-[14px] font-bold leading-none mb-1">Physiotherapist</p>
                <p className="text-white/40 text-[12px]">Led &amp; Supervised</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#16161e] border border-white/[0.08] rounded-2xl px-4 py-3.5">
              <svg className="w-7 h-7 text-[#A78BFA] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-white text-[14px] font-bold leading-none mb-1">Private Chamber</p>
                <p className="text-white/40 text-[12px]">Not a Shared Pool</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE HERO — match contrast pattern ── */}
      <section className="md:hidden pt-20 pb-0 bg-white dark:bg-[#0A0A0A]">
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

          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            Private aqua treadmill chamber. Water level, speed and temperature set to your condition.
            Supervised by physiotherapists at R3BOOT Dadar.
          </p>

          <div className="mt-5 bg-[#1A1A1A] rounded-2xl p-4 flex items-center gap-0">
            <div className="flex items-center shrink-0 pr-4">
              {[
                { src: '/images/Customer_Review/Namrata Doshi.png', alt: 'Namrata' },
                { src: '/images/Customer_Review/Sonal Malik.png', alt: 'Sonal' },
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
            <div className="w-px self-stretch bg-white/10 shrink-0 mr-4" />
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
                    <svg key={j} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20" aria-hidden>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white font-bold text-sm">5.0</span>
              </div>
              <p className="text-white/40 text-xs">500+ Happy Clients</p>
            </div>
          </div>

          <div className="flex gap-3 mt-6 mb-8">
            <a
              href="#contact"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#513394] hover:bg-[#603eb0] text-white font-black px-5 py-3.5 rounded-full text-[14px] tracking-wide transition-colors"
            >
              Free Consultation
            </a>
            <a
              href="https://wa.me/919702368612"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold px-5 py-3.5 rounded-full text-[14px] tracking-wide"
            >
              WhatsApp
            </a>
          </div>
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
