import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { aquaTherapyLowerParelFaqs } from '@/lib/faqs/aqua-therapy-lower-parel'

export const metadata: Metadata = {
  title: 'Aqua Therapy Lower Parel | Pool Physiotherapy at R3BOOT Dadar',
  description:
    'Aqua therapy near Lower Parel at R3BOOT Dadar - 5 to 10 min away. Physio-supervised pool rehabilitation for gym injuries, post-surgery recovery, and sports rehab.',
  alternates: { canonical: '/aqua-therapy-lower-parel' },
  keywords: [
    'aqua therapy lower parel',
    'aquatic therapy lower parel mumbai',
    'hydrotherapy lower parel',
    'pool physiotherapy lower parel',
    'aqua therapy near lower parel',
    'water therapy lower parel',
  ],
}

export default function AquaTherapyLowerParelPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/Services_image/Hydrotherapy.webp"
          alt="Aqua therapy near Lower Parel Mumbai at R3BOOT Dadar"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">LOWER PAREL // MUMBAI</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Aqua Therapy Near Lower Parel, Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              R3BOOT in Dadar East is 5 to 10 minutes from Lower Parel. Physio-supervised pool rehabilitation for gym injuries, corporate athletes, and post-surgery recovery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                5 Minutes from Lower Parel.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">The Pool Your Gym Does Not Have.</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Lower Parel has some of Mumbai&apos;s highest gym density - Gold&apos;s Gym, multiple CrossFit boxes,
                  corporate fitness centres in every major building. High training load plus desk work equals
                  predictable injuries: lower back pain from deadlifts, knee overuse from squatting and running,
                  shoulder impingement from pressing. None of those gyms have a physiotherapy pool.
                </p>
                <p>
                  R3BOOT is 5 to 10 minutes from Lower Parel by car, or one station from Lower Parel on the
                  Central line to Dadar. For post-surgical patients, the short distance makes twice-weekly aqua
                  therapy sessions practical during a 6-to-12-week recovery programme. Combine pool rehabilitation
                  with{' '}
                  <Link href="/sports-massage-lower-parel" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline">
                    sports massage near Lower Parel
                  </Link>{' '}
                  in a single visit to Dadar.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'For gym injuries',
                    body: 'Back pain, knee overuse, shoulder impingement - aqua therapy allows progressive rehab without the impact stress that keeps land-based exercise painful.',
                  },
                  {
                    title: 'Corporate athlete schedule',
                    body: 'Sessions Mon - Sat with early and evening slots. 5-10 min from Lower Parel means a pre-work or post-work session is realistic.',
                  },
                  {
                    title: 'Post-surgical recovery',
                    body: 'Knee replacement, ACL repair, hip replacement. Aqua therapy starts where land-based physio cannot, then hands over as strength returns.',
                  },
                  {
                    title: 'One station on Central line',
                    body: 'Lower Parel to Dadar is one stop. Short auto to R3BOOT from Dadar station. No cab required.',
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
                  LOWER PAREL PATIENTS WHO COME TO R3BOOT
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Gym athletes with back pain',
                    'Post-knee replacement',
                    'CrossFit injuries',
                    'Corporate professionals',
                    'Knee overuse from running',
                    'Post-ACL repair',
                    'Shoulder impingement',
                    'Phoenix Mills area residents',
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
                <h3 className="text-xl font-black mb-4">FROM LOWER PAREL</h3>
                <div className="space-y-3 mb-8 text-white/70 text-sm">
                  <p>Lower Parel to Dadar: 5 - 10 min by car</p>
                  <p>Central line: 1 stop to Dadar station</p>
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

      <FAQSection faqs={aquaTherapyLowerParelFaqs} />

      <section className="py-24 bg-[#513394]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            5 Min from Lower Parel. Book Today.
          </h2>
          <p className="text-white/70 text-lg mb-10">Our physiotherapists will assess whether aqua therapy is the right starting point for your injury or post-surgical recovery.</p>
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
              { label: 'Dadar (On-Site)', href: '/aqua-therapy-dadar' },
              { label: 'Near Bandra', href: '/aqua-therapy-bandra' },
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
        serviceName="Aqua Therapy near Lower Parel Mumbai"
        description="Physio-supervised aqua therapy near Lower Parel at R3BOOT Dadar. 5-10 minutes away. Pool rehabilitation for gym injuries, post-surgery recovery, and sports rehab."
        serviceUrl="https://www.r3boot.in/aqua-therapy-lower-parel"
      />
      <FAQSchema faqs={aquaTherapyLowerParelFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Aqua Therapy Mumbai', url: '/aqua-therapy-mumbai' },
        { name: 'Lower Parel', url: '/aqua-therapy-lower-parel' },
      ]} />
    </main>
  )
}
