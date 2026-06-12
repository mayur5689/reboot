import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import PhysiotherapyTeam from '@/components/PhysiotherapyTeam'
import AquaTherapyLocationInfo from '@/components/AquaTherapyLocationInfo'
import { aquaTherapyWorliFaqs } from '@/lib/faqs/aqua-therapy-worli'

export const metadata: Metadata = {
  title: 'Aqua Therapy Near Worli | Aqua Treadmill Physiotherapy at R3BOOT Dadar',
  description:
    'Physio-supervised aqua therapy near Worli at R3BOOT Dadar - 10 to 15 min away. Post-surgery rehab, arthritis, sports injuries. Serving the Worli and BKC corridor.',
  alternates: { canonical: '/aqua-therapy-worli' },
  keywords: [
    'aqua therapy worli',
    'aquatic therapy worli mumbai',
    'hydrotherapy worli',
    'pool physiotherapy worli',
    'aqua therapy near worli',
    'water therapy worli mumbai',
  ],
}

export default function AquaTherapyWorliPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/Services_image/Hydrotherapy.webp"
          alt="Aqua therapy near Worli Mumbai at R3BOOT Dadar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 pb-20">
          <Link href="/aqua-therapy-mumbai" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all mb-8 group">
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#513394] transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="font-bold tracking-wider text-sm">AQUA THERAPY MUMBAI</span>
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-white/70 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">WORLI // MUMBAI</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Aqua Therapy Near Worli, Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              R3BOOT in Dadar East is 10 to 15 minutes from Worli. Physio-supervised aqua treadmill rehabilitation for post-surgery patients, arthritis, and the BKC corridor professional athlete.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                Worli to R3BOOT: 10 Minutes.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Your Post-Surgery Recovery Just Got Easier.</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Hinduja Hospital, Wockhardt, and Bombay Hospital are within the Worli and Lower Parel corridor.
                  Patients discharged after knee replacement, ACL repair, hip replacement, or spinal procedures
                  often receive referrals for aqua therapy as part of their rehabilitation plan. R3BOOT in Dadar
                  East is 10 to 15 minutes from Worli by road, or accessible via Mahalaxmi station on the Central line.
                </p>
                <p>
                  For BKC professionals and Worli residents managing sports injuries or arthritis alongside demanding
                  work schedules, aqua therapy at R3BOOT fits without a major time commitment. Sessions are 45 to 60
                  minutes. Your physiotherapist designs the program around your condition - not a fixed class timetable.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Post-surgical rehab',
                    body: 'Post-op aqua therapy for patients from Hinduja, Wockhardt, and Bombay Hospital. Knee replacement, hip replacement, spinal surgery.',
                  },
                  {
                    title: 'For arthritis',
                    body: 'Warm water reduces stiffness. Buoyancy removes compressive load. Worli and Mahalaxmi patients with knee and hip arthritis use the aqua treadmill when land-based exercise is too painful.',
                  },
                  {
                    title: '10 - 15 min from Worli',
                    body: 'Direct road connection via Annie Besant Road. Mahalaxmi to Dadar is 2 stops on the Central line.',
                  },
                  {
                    title: 'Professional schedule',
                    body: 'Structured appointment slots Mon - Sat. Sessions designed around work commitments. Not a class, not a fixed timetable.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white dark:bg-white/5 p-6 rounded-[2rem] border border-gray-100 dark:border-white/5">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  WORLI PATIENTS WHO COME TO R3BOOT
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Post-Hinduja surgery',
                    'Post-Wockhardt surgery',
                    'Knee arthritis',
                    'BKC professionals',
                    'Hip replacement recovery',
                    'Mahalaxmi residents',
                    'Spinal surgery rehab',
                    'Worli Sea Face runners',
                  ].map((tag, idx) => (
                    <span key={idx} className="bg-[#513394]/10 dark:bg-[#8B5CF6]/20 text-[#513394] dark:text-[#A78BFA] font-bold px-4 py-2 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl">
                <h3 className="text-xl font-black mb-4">FROM WORLI</h3>
                <div className="space-y-3 mb-8 text-white/70 text-sm">
                  <p>Worli to Dadar: 10 - 15 min by road</p>
                  <p>Mahalaxmi to Dadar: 2 stops, Central line</p>
                  <p className="text-white/40 text-xs pt-2">
                    Palai Plaza, 203<br />
                    Swami Gyan Jivandas Marg<br />
                    Dadar East - 400 014
                  </p>
                </div>
                <a
                  href="tel:+919702368612"
                  className="block text-center bg-[#513394] text-white font-black px-8 py-5 rounded-2xl mb-3 hover:bg-[#603eb0] transition-colors"
                >
                  Call to Book
                </a>
                <a
                  href="https://wa.me/919702368612"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="block text-center bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PhysiotherapyTeam />
      <AquaTherapyLocationInfo />

      <FAQSection faqs={aquaTherapyWorliFaqs} />

      <section className="py-24 bg-[#513394]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            10 Min from Worli. Book Today.
          </h2>
          <p className="text-white/70 text-lg mb-10">Post-surgery, arthritis, sports injury - our physiotherapists will tell you honestly whether aqua therapy is the right next step for your recovery.</p>
          <a
            href="tel:+919702368612"
            className="inline-block bg-white text-[#513394] font-black px-10 py-5 rounded-full hover:scale-105 transition-all shadow-2xl"
          >
            Call to Book
          </a>
        </div>
      </section>

      <section className="py-16 border-t border-gray-100 dark:border-white/5">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-center text-xs font-black tracking-[0.3em] text-gray-400 dark:text-gray-600 uppercase mb-8">
            AQUA THERAPY ACROSS MUMBAI //
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              { label: 'Aqua Therapy Mumbai', href: '/aqua-therapy-mumbai' },
              { label: 'Dadar (On-Site)', href: '/aqua-therapy-dadar' },
              { label: 'Near Andheri', href: '/aqua-therapy-andheri' },
              { label: 'Near Bandra', href: '/aqua-therapy-bandra' },
              { label: 'Lower Parel', href: '/aqua-therapy-lower-parel' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-center px-4 py-3 rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 text-sm font-bold text-gray-900 dark:text-white hover:border-[#513394]/40 hover:text-[#513394] dark:hover:text-[#A78BFA] transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceSchema
        serviceName="Aqua Therapy near Worli Mumbai"
        description="Physio-supervised aqua therapy near Worli at R3BOOT Dadar. 10-15 minutes from Worli. Aqua treadmill rehabilitation for post-surgery patients, arthritis, and BKC professionals."
        serviceUrl="https://www.r3boot.in/aqua-therapy-worli"
        areaServed="Worli"
      />
      <FAQSchema faqs={aquaTherapyWorliFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Aqua Therapy Mumbai', url: '/aqua-therapy-mumbai' },
        { name: 'Near Worli', url: '/aqua-therapy-worli' },
      ]} />
    </main>
  )
}
