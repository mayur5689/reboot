import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { contrastTherapyDadarFaqs } from '@/lib/faqs/contrast-therapy-dadar'

export const metadata: Metadata = {
  title: 'Contrast Therapy Dadar | Ice Bath & Sauna — R3BOOT',
  description:
    'Contrast therapy in Dadar East at R3BOOT — physio-supervised infrared sauna and ice bath. Walk-in from Dadar station. Half Cycle ₹2,500. 5.0 ★ Google. Book today.',
  alternates: { canonical: '/contrast-therapy-dadar' },
  keywords: [
    'contrast therapy dadar',
    'ice bath dadar',
    'sauna dadar mumbai',
    'cold plunge dadar',
    'contrast therapy near dadar station',
    'recovery centre dadar',
  ],
}

export default function ContrastTherapyDadarPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_Hero_section.webp"
          alt="Contrast therapy Dadar Mumbai — R3BOOT"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 pb-20">
          <Link href="/contrast-therapy-mumbai" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all mb-8 group">
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#513394] transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="font-bold tracking-wider text-sm">CONTRAST THERAPY MUMBAI</span>
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-white/70 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">DADAR // MUMBAI</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Contrast Therapy in Dadar, Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              R3BOOT is in Dadar East — infrared sauna and supervised ice bath, physio-led recovery on your doorstep.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                Dadar&apos;s <span className="text-[#513394] dark:text-[#8B5CF6]">Clinical Recovery Centre.</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  R3BOOT sits on Swami Gyan Jivandas Marg in Dadar East — minutes from Dadar station on both Central and Western lines.
                  If you live or train in Dadar, Shivaji Park, Matunga, or Parel, contrast therapy is not a cross-city trip. It is local.
                </p>
                <p>
                  Sessions alternate infrared sauna and supervised ice bath in a 3:1 hot-to-cold protocol. Physiotherapists conduct health
                  intake, teach breathing before cold immersion, and stay present through the full session. Stack with{' '}
                  <Link href="/sports-massage-dadar" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline">
                    sports massage in Dadar
                  </Link>{' '}
                  or{' '}
                  <Link href="/physiotherapy-dadar-mumbai" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline">
                    physiotherapy
                  </Link>{' '}
                  in one visit.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Half Cycle — ₹2,500', body: '30 minutes. Two rounds of sauna + ice bath.' },
                  { title: 'Full Cycle — ₹3,500', body: '60 minutes. Three to four rounds for deeper recovery.' },
                  { title: 'Physio-supervised', body: 'Health intake and breathing guidance every session.' },
                  { title: 'Integrated recovery', body: 'Massage, physio, pilates under one roof.' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white dark:bg-white/5 p-6 rounded-[2rem] border border-gray-100 dark:border-white/5">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl">
                <h3 className="text-xl font-black mb-6">DADAR LOCATION</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Palai Plaza, 203<br />Swami Gyan Jivandas Marg<br />Dadar East – 400 014
                </p>
                <p className="text-white/50 text-sm mb-8">Near Dadar station · Parking available</p>
                <a href="tel:+919702368612" className="block text-center bg-[#513394] text-white font-black px-8 py-5 rounded-2xl mb-3">Call to Book</a>
                <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer" className="block text-center bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={contrastTherapyDadarFaqs} />

      <section className="py-24 bg-[#513394]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-black text-white mb-8">Contrast Therapy in Dadar. Book Today.</h2>
          <a href="tel:+919702368612" className="inline-block bg-white text-[#513394] font-black px-10 py-5 rounded-full hover:scale-105 transition-all">Call to Book</a>
        </div>
      </section>

      <ServiceSchema
        serviceName="Contrast Therapy Dadar Mumbai"
        description="Physio-supervised contrast therapy in Dadar East — infrared sauna and ice bath at R3BOOT, Palai Plaza."
        serviceUrl="https://www.r3boot.in/contrast-therapy-dadar"
      />
      <FAQSchema faqs={contrastTherapyDadarFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Contrast Therapy Mumbai', url: '/contrast-therapy-mumbai' },
        { name: 'Dadar', url: '/contrast-therapy-dadar' },
      ]} />
    </main>
  )
}
