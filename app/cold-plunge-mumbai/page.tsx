import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { coldPlungeMumbaiFaqs } from '@/lib/faqs/cold-plunge-mumbai'

export const metadata: Metadata = {
  title: 'Cold Plunge Mumbai | Supervised Ice Bath | R3BOOT Dadar',
  description:
    'Cold plunge Mumbai at R3BOOT Dadar | physio-supervised, not gym tank. Cold plunge near me for Dadar, Bandra & Lower Parel. Paired with infrared sauna. 5.0 ★ Google.',
  alternates: { canonical: '/cold-plunge-mumbai' },
  keywords: [
    'cold plunge mumbai',
    'cold plunge near me',
    'cold plunge dadar',
    'ice plunge mumbai',
    'cold water plunge mumbai',
    'sauna and cold plunge near me',
    'supervised cold plunge mumbai',
  ],
}

const gymVsR3boot = [
  { factor: 'Health screening', gym: 'None', r3boot: 'Physio intake before every session' },
  { factor: 'Supervision', gym: 'Unsupervised tank', r3boot: 'Physiotherapist present throughout' },
  { factor: 'Breathing guidance', gym: 'Self-managed', r3boot: 'Taught before first immersion' },
  { factor: 'Protocol', gym: 'Cold only', r3boot: 'Infrared sauna + cold plunge (3:1 contrast)' },
  { factor: 'Integration', gym: 'Standalone', r3boot: 'Sports massage + physio under one roof' },
]

export default function ColdPlungeMumbaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_ice_bath_lady.webp"
          alt="Cold plunge Mumbai, supervised at R3BOOT Dadar"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">COLD PLUNGE // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Cold Plunge in Mumbai | Supervised Recovery at R3BOOT, Dadar
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              Physio-supervised cold plunge, part of clinical contrast therapy. Not an unsupervised gym tank.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
            Cold Plunge Near Me, <span className="text-[#513394] dark:text-[#8B5CF6]">With Supervision.</span>
          </h2>
          <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6 mb-16">
            <p>
              &quot;Cold plunge near me&quot; in Mumbai often means a gym add-on with no intake, no breathing coaching, and no one watching
              your response. At R3BOOT, cold plunge is the cold phase of contrast therapy, water maintained at 10–15°C, supervised by
              physiotherapists from health review through immersion.
            </p>
            <p>
              Cold plunge and ice bath describe the same method. If you searched ice bath instead, see our{' '}
              <Link href="/ice-bath-mumbai" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline">
                ice bath Mumbai
              </Link>{' '}
              page. Both target the same supervised cold immersion at R3BOOT.
            </p>
          </div>

          <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8">Gym Cold Plunge vs R3BOOT</h3>
          <div className="overflow-x-auto rounded-[2rem] border border-gray-100 dark:border-white/10 mb-16">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#513394] text-white">
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-wider">Factor</th>
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-wider">Typical gym tank</th>
                  <th className="px-6 py-4 text-sm font-black uppercase tracking-wider">R3BOOT</th>
                </tr>
              </thead>
              <tbody>
                {gymVsR3boot.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-white/5' : 'bg-[#F8F9FA] dark:bg-white/[0.02]'}>
                    <td className="px-6 py-4 font-bold text-gray-900 dark:text-white text-sm">{row.factor}</td>
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">{row.gym}</td>
                    <td className="px-6 py-4 text-[#513394] dark:text-[#A78BFA] font-medium text-sm">{row.r3boot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Half Cycle', price: '₹2,500', detail: '30 min · 2 rounds' },
              { label: 'Full Cycle', price: '₹3,500', detail: '60 min · 3–4 rounds' },
              { label: 'Location', price: 'Dadar East', detail: 'Palai Plaza, 203' },
            ].map((item) => (
              <div key={item.label} className="bg-[#F8F9FA] dark:bg-white/5 p-8 rounded-[2rem] text-center">
                <p className="text-xs font-black tracking-widest text-[#513394] dark:text-[#A78BFA] uppercase mb-2">{item.label}</p>
                <p className="text-2xl font-black text-gray-900 dark:text-white">{item.price}</p>
                <p className="text-gray-500 text-sm mt-2">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#513394]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Book Cold Plunge in Mumbai</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919702368612" className="bg-white text-[#513394] font-black px-10 py-5 rounded-full hover:scale-105 transition-all">
              Call +91 97023 68612
            </a>
            <Link href="/infrared-sauna-mumbai" className="border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full hover:bg-white/10">
              Infrared Sauna Phase
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={coldPlungeMumbaiFaqs} />

      <ServiceSchema
        serviceName="Cold Plunge Mumbai | Supervised Cold Water Immersion"
        description="Physiotherapist-supervised cold plunge in Dadar East, Mumbai. Part of clinical contrast therapy with infrared sauna at R3BOOT."
        serviceUrl="https://www.r3boot.in/cold-plunge-mumbai"
      />
      <FAQSchema faqs={coldPlungeMumbaiFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Contrast Therapy Mumbai', url: '/contrast-therapy-mumbai' },
        { name: 'Cold Plunge Mumbai', url: '/cold-plunge-mumbai' },
      ]} />
    </main>
  )
}
