import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { aquaTherapyDadarFaqs } from '@/lib/faqs/aqua-therapy-dadar'

export const metadata: Metadata = {
  title: 'Aqua Therapy Dadar | Pool Physiotherapy at R3BOOT Dadar East',
  description:
    'Aqua therapy in Dadar East at R3BOOT | physio-supervised pool rehabilitation on-site. Post-surgery, knee pain, sports injury. Walk from Dadar station. Book today.',
  alternates: { canonical: '/aqua-therapy-dadar' },
  keywords: [
    'aqua therapy dadar',
    'aquatic therapy dadar mumbai',
    'hydrotherapy dadar',
    'pool physiotherapy dadar',
    'aqua therapy near dadar station',
    'aqua therapy dadar east',
  ],
}

export default function AquaTherapyDadarPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/Services_image/Hydrotherapy.webp"
          alt="Aqua therapy pool at R3BOOT Dadar Mumbai"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">DADAR // MUMBAI</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Aqua Therapy in Dadar, Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              R3BOOT is in Dadar East. The pool is here - not nearby, not accessible from. Physio-supervised water rehabilitation at the clinic, minutes from Dadar station.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                The Pool Is Here.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Walk from Dadar Station.</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Most aqua therapy options in Mumbai require a cross-city trip. R3BOOT is at Palai Plaza, Dadar East -
                  a short auto ride from Dadar station on both Central and Western lines. For patients in Dadar,
                  Shivaji Park, Matunga, Parel, Sion, and Wadala, aqua therapy is local.
                </p>
                <p>
                  Every session is supervised by a qualified physiotherapist. Your program is built around your
                  specific condition - post-surgical timeline, injury stage, pain response - not a generic pool
                  class. Dadar athletes and post-op patients can stack aqua therapy with{' '}
                  <Link href="/physiotherapy-dadar-mumbai" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline">
                    physiotherapy
                  </Link>{' '}
                  or{' '}
                  <Link href="/sports-massage-dadar" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline">
                    sports massage
                  </Link>{' '}
                  in a single visit.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'On-site pool in Dadar East',
                    body: 'Temperature-controlled pool at R3BOOT. Not a hotel pool, not a gym pool - a physiotherapy pool.',
                  },
                  {
                    title: 'Physio-supervised every session',
                    body: 'Qualified physiotherapist present throughout. Program adjusted in real time based on your pain response.',
                  },
                  {
                    title: 'Post-surgery and sports injury',
                    body: 'Knee replacement, ACL repair, hip replacement, sports injuries. All treated with clinical aqua protocols.',
                  },
                  {
                    title: 'Stack services in one visit',
                    body: 'Aqua therapy plus physiotherapy or sports massage in one appointment. One trip to Dadar, multiple services.',
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
                  WHO COMES FROM DADAR
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Shivaji Park runners',
                    'Post-knee replacement',
                    'ACL recovery',
                    'Matunga athletes',
                    'Parel gym crowd',
                    'Post-hip replacement',
                    'Arthritis management',
                    'Lower back pain',
                    'Sion and Wadala residents',
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
                <h3 className="text-xl font-black mb-4">DADAR LOCATION</h3>
                <p className="text-white/70 text-sm mb-2 leading-relaxed">
                  Palai Plaza, 203<br />
                  Swami Gyan Jivandas Marg<br />
                  Dadar East - 400 014
                </p>
                <p className="text-white/50 text-xs mb-8">Minutes from Dadar station (Central + Western lines)</p>
                <div className="space-y-2 text-white/60 text-sm mb-8">
                  <p>Mon - Sat: by appointment</p>
                  <p>Sunday: 2:00 PM - 9:00 PM</p>
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

      <FAQSection faqs={aquaTherapyDadarFaqs} />

      <section className="py-24 bg-[#513394]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Aqua Therapy in Dadar. The Pool Is Here.
          </h2>
          <p className="text-white/70 text-lg mb-10">Call or WhatsApp to book. Our physiotherapists will assess whether aqua therapy is the right starting point for your recovery.</p>
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: 'Aqua Therapy Mumbai', href: '/aqua-therapy-mumbai' },
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
        serviceName="Aqua Therapy Dadar Mumbai"
        description="Physio-supervised aqua therapy in Dadar East at R3BOOT. Pool-based rehabilitation for post-surgery recovery, sports injuries, knee pain, and arthritis. Minutes from Dadar station."
        serviceUrl="https://www.r3boot.in/aqua-therapy-dadar"
      />
      <FAQSchema faqs={aquaTherapyDadarFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Aqua Therapy Mumbai', url: '/aqua-therapy-mumbai' },
        { name: 'Dadar', url: '/aqua-therapy-dadar' },
      ]} />
    </main>
  )
}
