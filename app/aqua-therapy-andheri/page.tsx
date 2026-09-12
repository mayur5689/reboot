import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import PhysiotherapyTeam from '@/components/PhysiotherapyTeam'
import AquaTherapyLocationInfo from '@/components/AquaTherapyLocationInfo'
import { aquaTherapyAndheriFaqs } from '@/lib/faqs/aqua-therapy-andheri'

export const metadata: Metadata = {
  title: 'Aqua Therapy Near Andheri West | Aqua Treadmill Physiotherapy at R3BOOT Dadar',
  description:
    'Physio-supervised aqua therapy near Andheri West at R3BOOT Dadar - 30 min by road or 20 min by train. No aqua treadmill in Andheri West. The closest clinical aqua therapy for Andheri patients.',
  alternates: { canonical: '/aqua-therapy-andheri' },
  keywords: [
    'aqua therapy andheri west',
    'aqua therapy near andheri west',
    'aqua therapy andheri',
    'aquatic therapy andheri mumbai',
    'hydrotherapy andheri west',
    'pool physiotherapy andheri',
    'aqua therapy near andheri',
    'water therapy andheri mumbai',
  ],
}

export default function AquaTherapyAndheriPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/Services_image/Hydrotherapy.webp"
          alt="Aqua therapy near Andheri Mumbai at R3BOOT Dadar"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">ANDHERI // MUMBAI</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Aqua Therapy Near Andheri West, Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              R3BOOT in Dadar East - 30 min by road, 20 min by Western line train. Andheri West has dozens of physio clinics. None have an aqua treadmill. R3BOOT does.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                Andheri West Has 40+ Physio Clinics.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">None Have an Aqua Treadmill. R3BOOT Does.</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Andheri is Mumbai&apos;s largest suburb by population. The Andheri Sports Complex, dozens of cricket
                  and football grounds, Western Express Highway runners, the gym culture across Andheri West and East -
                  all generate significant demand for aqua therapy. There is no physio-supervised aqua treadmill in Andheri.
                </p>
                <p>
                  R3BOOT in Dadar East is 30 to 35 minutes by road via the Western Express Highway, or approximately
                  20 to 25 minutes by Western line train from Andheri station to Dadar. For conditions where aqua
                  therapy produces meaningfully better outcomes than land-based physio - post-ACL surgery, knee
                  osteoarthritis, post-knee replacement, chronic lower back pain - Andheri patients make the trip
                  because no local alternative exists. Combine the session with{' '}
                  <Link href="/physiotherapy-mumbai" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline">
                    physiotherapy
                  </Link>{' '}
                  or{' '}
                  <Link href="/sports-massage-mumbai" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline">
                    sports massage
                  </Link>{' '}
                  in one trip to Dadar.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'For Andheri cricket and football players',
                    body: 'Ankle injuries, knee ligament damage, hamstring issues. Aqua therapy allows progressive loading and strength work without impact during recovery.',
                  },
                  {
                    title: 'Post-Kokilaben or Nanavati surgery',
                    body: 'Bring your surgical discharge summary. Our physiotherapists review the documentation and design your aqua therapy program around your specific procedure.',
                  },
                  {
                    title: '20 min by Western line',
                    body: 'Andheri station to Dadar on the Western line. Short auto to R3BOOT. Batch aqua therapy with other services in one trip.',
                  },
                  {
                    title: 'Worth the trip for the right conditions',
                    body: 'Your physiotherapist will tell you honestly if aqua therapy is necessary. For ACL recovery, knee replacement, or osteoarthritis - it often is.',
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
                  ANDHERI PATIENTS WHO COME TO R3BOOT
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Andheri Sports Complex athletes',
                    'Post-Kokilaben surgery',
                    'Post-Nanavati surgery',
                    'Cricket injuries',
                    'Football players',
                    'Western line commuters',
                    'Knee osteoarthritis',
                    'Post-ACL repair',
                    'Andheri West gym crowd',
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
                <h3 className="text-xl font-black mb-4">FROM ANDHERI</h3>
                <div className="space-y-3 mb-8 text-white/70 text-sm">
                  <p>Andheri to Dadar by road: 30 - 35 min</p>
                  <p>Western line: Andheri to Dadar ~20 min</p>
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

      <FAQSection faqs={aquaTherapyAndheriFaqs} />

      <section className="py-24 bg-[#513394]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            No Aqua Treadmill in Andheri. Ours Is in Dadar.
          </h2>
          <p className="text-white/70 text-lg mb-10">Our physiotherapists will assess your condition and tell you honestly if aqua therapy is the right step - and whether the journey from Andheri is worth it for your specific case.</p>
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
              { label: 'Near Bandra', href: '/aqua-therapy-bandra' },
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
        serviceName="Aqua Therapy near Andheri West Mumbai"
        description="Physio-supervised aqua therapy near Andheri West at R3BOOT Dadar. 20 min by Western line train from Andheri. The only clinical aqua treadmill rehabilitation option serving Andheri West patients."
        serviceUrl="https://www.r3boot.in/aqua-therapy-andheri"
        areaServed="Andheri"
      />
      <FAQSchema faqs={aquaTherapyAndheriFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Aqua Therapy Mumbai', url: '/aqua-therapy-mumbai' },
        { name: 'Near Andheri', url: '/aqua-therapy-andheri' },
      ]} />
    </main>
  )
}
