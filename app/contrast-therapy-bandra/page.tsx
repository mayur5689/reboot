import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { contrastTherapyBandraFaqs } from '@/lib/faqs/contrast-therapy-bandra'

export const metadata: Metadata = {
  title: 'Contrast Therapy Near Bandra | Ice Bath & Sauna | R3BOOT Dadar',
  description:
    'Contrast therapy near Bandra at R3BOOT Dadar | 15 min away. Physio-supervised sauna & ice bath. Not a Khar wellness studio. 5.0 ★ Google. Book via WhatsApp.',
  alternates: { canonical: '/contrast-therapy-bandra' },
  keywords: [
    'contrast therapy bandra',
    'ice bath near bandra',
    'sauna near bandra',
    'cold plunge bandra mumbai',
    'contrast therapy near bandra',
    'recovery bandra mumbai',
  ],
}

export default function ContrastTherapyBandraPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_ice_bath.webp"
          alt="Contrast therapy near Bandra Mumbai, R3BOOT Dadar"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">BANDRA // MUMBAI</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Contrast Therapy Near Bandra, Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              R3BOOT in Dadar East, 15–20 min from Bandra. Physio-supervised sauna and ice bath for Bandra athletes and runners.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                Bandra Has Wellness Studios. <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT Is a Recovery Clinic.</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Contrast therapy options near Bandra and Khar often focus on the experience, social recovery, influencer-friendly setups,
                  standalone cold plunge without clinical oversight. R3BOOT in Dadar East is 15 minutes by road or 8 minutes by train from
                  Bandra station. Every session is physio-supervised with health intake before you enter the water.
                </p>
                <p>
                  Bandra runners from Carter Road and Bandra Fort trail, gym members from Khar and Santacruz, and BKC commuters use R3BOOT
                  because they can stack contrast therapy with{' '}
                  <Link href="/sports-massage-bandra" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline">
                    sports massage near Bandra
                  </Link>{' '}
                  in one trip to Dadar.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Clinical assessment first', body: 'Health intake confirms contrast therapy is safe for you.' },
                  { title: 'Breathing coaching', body: 'Controlled technique taught before cold immersion.' },
                  { title: 'Full contrast protocol', body: 'Infrared sauna (68°C) + ice bath (6–10°C). Day or Night Cycle based on your schedule.' },
                  { title: 'Integrated recovery', body: 'Massage, physio, pilates available same visit.' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{item.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl">
                <h3 className="text-xl font-black mb-3">FROM BANDRA</h3>
                <div className="space-y-2 mb-8 text-white/70 text-sm">
                  <p>Bandra → Dadar (road): 15–20 min</p>
                  <p>Bandra station → Dadar: 8 min train</p>
                  <p>Half Cycle: ₹2,500 · Full Cycle: ₹3,500</p>
                </div>
                <a href="tel:+919702368612" className="block text-center bg-[#513394] text-white font-black px-8 py-5 rounded-2xl mb-3">Call to Book</a>
                <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer" className="block text-center bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={contrastTherapyBandraFaqs} />

      <section className="py-24 bg-[#513394]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">15 Min from Bandra. Worth the Trip.</h2>
          <a href="tel:+919702368612" className="inline-block bg-white text-[#513394] font-black px-10 py-5 rounded-full hover:scale-105 transition-all">Call to Book</a>
        </div>
      </section>

      <ServiceSchema
        serviceName="Contrast Therapy near Bandra Mumbai"
        description="Physio-supervised contrast therapy near Bandra at R3BOOT Dadar East. Infrared sauna and ice bath for Bandra athletes."
        serviceUrl="https://www.r3boot.in/contrast-therapy-bandra"
      />
      <FAQSchema faqs={contrastTherapyBandraFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Contrast Therapy Mumbai', url: '/contrast-therapy-mumbai' },
        { name: 'Bandra', url: '/contrast-therapy-bandra' },
      ]} />
    </main>
  )
}
