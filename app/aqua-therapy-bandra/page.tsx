import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import PhysiotherapyTeam from '@/components/PhysiotherapyTeam'
import AquaTherapyLocationInfo from '@/components/AquaTherapyLocationInfo'
import { aquaTherapyBandraFaqs } from '@/lib/faqs/aqua-therapy-bandra'

export const metadata: Metadata = {
  title: 'Aqua Therapy Near Bandra | Aqua Treadmill Physiotherapy at R3BOOT Dadar',
  description:
    'Physio-supervised aqua therapy near Bandra at R3BOOT Dadar - 15 min by road, 8 min by train. Post-surgery, knee injuries, runner rehab. No aqua treadmill in Bandra comes close.',
  alternates: { canonical: '/aqua-therapy-bandra' },
  keywords: [
    'aqua therapy bandra',
    'aquatic therapy near bandra',
    'hydrotherapy bandra mumbai',
    'pool physiotherapy bandra',
    'aqua therapy near bandra',
    'water therapy bandra',
  ],
}

export default function AquaTherapyBandraPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/Services_image/Hydrotherapy.webp"
          alt="Aqua therapy near Bandra Mumbai at R3BOOT Dadar"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">BANDRA // MUMBAI</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Aqua Therapy Near Bandra, Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              R3BOOT in Dadar East - 15 min by road, 8 min by train from Bandra. Physio-supervised aqua treadmill rehabilitation for Bandra athletes, runners, and post-surgery patients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                Bandra Has Gyms.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">None Have a Physio-Supervised Aqua Treadmill.</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Carter Road runners, Joggers Park half-marathoners, CrossFit athletes in Khar and Santacruz - Bandra
                  has one of Mumbai&apos;s most active fitness populations. It also has a high rate of the injuries
                  that come with that activity: IT band syndrome, patellar tendinopathy, ACL injuries, rotator cuff
                  damage. Bandra has physiotherapy clinics. None have an aqua treadmill.
                </p>
                <p>
                  R3BOOT in Dadar East is 8 minutes by train from Bandra station on the Western line, or 15 to 20
                  minutes by road. Post-surgical patients from Lilavati Hospital and Breach Candy Hospital use R3BOOT
                  because their surgeons refer them for aqua therapy - and R3BOOT is the closest physio-supervised
                  aqua treadmill facility to Bandra. Combine aqua therapy with{' '}
                  <Link href="/sports-massage-bandra" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline">
                    sports massage near Bandra
                  </Link>{' '}
                  in one trip to Dadar.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'For Bandra runners',
                    body: 'Knee and ankle rehab on the aqua treadmill before land-based running resumes. Maintain fitness without aggravating the injury.',
                  },
                  {
                    title: 'Post-surgical',
                    body: 'Post-op aqua therapy for Lilavati and Breach Candy patients. ACL repair, knee replacement, shoulder surgery.',
                  },
                  {
                    title: '8 min by train',
                    body: 'Bandra station to Dadar on the Western line. Short auto to R3BOOT. Faster than most cross-suburb drives.',
                  },
                  {
                    title: 'No swimming required',
                    body: 'All exercises performed upright on the aqua treadmill. Physiotherapist present throughout. No swim ability needed.',
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
                  BANDRA PATIENTS WHO COME TO R3BOOT
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Carter Road runners',
                    'Khar CrossFit athletes',
                    'Post-Lilavati surgery',
                    'Post-Breach Candy surgery',
                    'Knee ligament recovery',
                    'Santacruz gym crowd',
                    'BKC professionals',
                    'Bandra Fort trail runners',
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
                <h3 className="text-xl font-black mb-4">FROM BANDRA</h3>
                <div className="space-y-3 mb-8 text-white/70 text-sm">
                  <p>Bandra station to Dadar: 8 min train</p>
                  <p>Bandra to Dadar by road: 15 - 20 min</p>
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

      <FAQSection faqs={aquaTherapyBandraFaqs} />

      <section className="py-24 bg-[#513394]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            8 Min from Bandra. Worth the Trip.
          </h2>
          <p className="text-white/70 text-lg mb-10">The aqua treadmill that Bandra doesn't have. Our physiotherapists will assess your condition and tell you honestly whether aqua therapy is the right starting point.</p>
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
              { label: 'Lower Parel', href: '/aqua-therapy-lower-parel' },
              { label: 'Near Worli', href: '/aqua-therapy-worli' },
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
        serviceName="Aqua Therapy near Bandra Mumbai"
        description="Physio-supervised aqua therapy near Bandra at R3BOOT Dadar. 8 min by train from Bandra station. Aqua treadmill rehabilitation for runners, post-surgery patients, and sports injuries."
        serviceUrl="https://www.r3boot.in/aqua-therapy-bandra"
        areaServed="Bandra"
      />
      <FAQSchema faqs={aquaTherapyBandraFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Aqua Therapy Mumbai', url: '/aqua-therapy-mumbai' },
        { name: 'Near Bandra', url: '/aqua-therapy-bandra' },
      ]} />
    </main>
  )
}
