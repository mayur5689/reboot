import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { contrastTherapyAndheriFaqs } from '@/lib/faqs/contrast-therapy-andheri'

export const metadata: Metadata = {
  title: 'Contrast Therapy Near Andheri | Ice Bath & Sauna | R3BOOT Dadar',
  description:
    'Contrast therapy near Andheri at R3BOOT Dadar | physio-supervised sauna & ice bath. Clinical recovery, not gym cold plunge. Half Cycle ₹2,500. Book via WhatsApp.',
  alternates: { canonical: '/contrast-therapy-andheri' },
  keywords: [
    'contrast therapy andheri',
    'ice bath andheri mumbai',
    'cold plunge andheri',
    'sauna near andheri',
    'contrast therapy near andheri',
    'recovery andheri mumbai',
  ],
}

export default function ContrastTherapyAndheriPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_Hero_section.webp"
          alt="Contrast therapy near Andheri Mumbai, R3BOOT Dadar"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">ANDHERI // MUMBAI</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Contrast Therapy Near Andheri, Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              R3BOOT in Dadar East, clinical sauna and ice bath for Andheri athletes. Physio-supervised, not a gym tank.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                Andheri Has Cold Plunges. <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT Has a Protocol.</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Ice bath options in Andheri and Lokhandwala often mean gym add-ons or standalone wellness sessions with no clinical
                  screening. R3BOOT in Dadar East runs contrast therapy as a structured protocol: infrared sauna (68°C), then supervised cold
                  immersion (6–10°C), with a physiotherapist present from intake through exit.
                </p>
                <p>
                  Andheri gym members, weekend football players, and runners who want recovery that fits a training plan, not just a
                  social cold dip, make the trip to Dadar. Stack with{' '}
                  <Link href="/sports-massage-mumbai" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline">
                    sports massage
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
                  { title: 'From Andheri station', body: '~20–25 min train to Dadar, then short ride to clinic.' },
                  { title: 'By road', body: '30–40 min from Andheri depending on traffic.' },
                  { title: 'Half / Full Cycle', body: '₹2,500 Half · ₹3,500 Full | sauna + ice bath included.' },
                  { title: 'Health intake every time', body: 'Breathing coaching before your first cold phase.' },
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
                <h3 className="text-xl font-black mb-6">FROM ANDHERI</h3>
                <p className="text-white/70 text-sm mb-8 leading-relaxed">
                  Palai Plaza, 203<br />Swami Gyan Jivandas Marg<br />Dadar East – 400 014
                </p>
                <a href="tel:+919702368612" className="block text-center bg-[#513394] text-white font-black px-8 py-5 rounded-2xl mb-3">Call to Book</a>
                <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer" className="block text-center bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={contrastTherapyAndheriFaqs} />

      <section className="py-24 bg-[#513394]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-black text-white mb-8">Book Contrast Therapy from Andheri</h2>
          <a href="tel:+919702368612" className="inline-block bg-white text-[#513394] font-black px-10 py-5 rounded-full hover:scale-105 transition-all">Call to Book</a>
        </div>
      </section>

      <ServiceSchema
        serviceName="Contrast Therapy near Andheri Mumbai"
        description="Physio-supervised contrast therapy near Andheri at R3BOOT Dadar East. Infrared sauna (68°C) and ice bath (6–10°C) for Andheri athletes."
        serviceUrl="https://www.r3boot.in/contrast-therapy-andheri"
      />
      <FAQSchema faqs={contrastTherapyAndheriFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Contrast Therapy Mumbai', url: '/contrast-therapy-mumbai' },
        { name: 'Andheri', url: '/contrast-therapy-andheri' },
      ]} />
    </main>
  )
}
