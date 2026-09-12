import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { infraredSaunaMumbaiFaqs } from '@/lib/faqs/infrared-sauna-mumbai'

export const metadata: Metadata = {
  title: 'Infrared Sauna Mumbai | Private Solo Sessions | R3BOOT Dadar',
  description:
    'Private infrared sauna sessions in Dadar Mumbai. Deep heat for muscle recovery, detox, and sleep. 30-min solo sessions. No shared space. Walk-in or book on WhatsApp.',
  alternates: { canonical: '/infrared-sauna-mumbai' },
  keywords: [
    'infrared sauna mumbai',
    'sauna mumbai',
    'sauna near me',
    'infrared sauna dadar',
    'sauna and cold plunge near me',
    'contrast therapy sauna mumbai',
    'recovery sauna mumbai',
  ],
}

const whyInfrared = [
  {
    title: 'Deep tissue warming',
    description:
      'Infrared light penetrates tissue directly, warming muscles without extreme ambient heat | effective vasodilation for the contrast protocol hot phase.',
  },
  {
    title: 'Vascular priming',
    description:
      'Heat dilates blood vessels before cold immersion. This priming step makes the subsequent ice bath phase more effective and more manageable.',
  },
  {
    title: 'Lower ambient temperature',
    description:
      'Infrared saunas operate at 45–60°C versus 80–100°C in traditional saunas | easier to tolerate for longer protocol rounds.',
  },
  {
    title: 'Supervised protocol',
    description:
      'Not a self-serve spa booth. Physiotherapy team sets duration, monitors response, and transitions you to the cold phase at the right time.',
  },
]

export default function InfraredSaunaMumbaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_sauna.webp"
          alt="Infrared sauna Mumbai, R3BOOT Dadar contrast therapy"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">INFRARED SAUNA // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Infrared Sauna in Mumbai | Clinical Heat Therapy at R3BOOT, Dadar
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              Physio-supervised infrared sauna as the hot phase of contrast therapy, paired with ice bath, not a standalone spa session.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                Sauna Near Me in Mumbai? <span className="text-[#513394] dark:text-[#8B5CF6]">This Is Clinical Recovery.</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Searching &quot;sauna near me&quot; in Mumbai usually surfaces spa wellness centres or gym add-ons with no medical oversight.
                  At R3BOOT in Dadar East, infrared sauna is one phase of a structured contrast therapy protocol, alternating heat and cold
                  under physiotherapist supervision.
                </p>
                <p>
                  The sauna phase dilates blood vessels and warms muscle tissue. The ice bath phase that follows creates a vascular pumping
                  effect that research links to faster recovery than heat or cold alone. That is why we do not offer standalone sauna sessions:
                  the cold phase completes the protocol.
                </p>
                <p>
                  Related:{' '}
                  <Link href="/contrast-therapy-mumbai" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline">
                    contrast therapy Mumbai
                  </Link>
                  ,{' '}
                  <Link href="/ice-bath-mumbai" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline">
                    ice bath Mumbai
                  </Link>
                  , and{' '}
                  <Link href="/cold-plunge-mumbai" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline">
                    cold plunge Mumbai
                  </Link>
                  .
                </p>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  WHY INFRARED AT R3BOOT
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {whyInfrared.map((item, idx) => (
                    <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{item.title}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl">
                <h3 className="text-xl font-black mb-6 tracking-wide flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#513394]" />
                  SESSION PRICING
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="border border-white/10 rounded-2xl p-5">
                    <p className="text-white/50 text-xs font-black tracking-widest uppercase mb-1">Half Cycle</p>
                    <p className="text-2xl font-black">₹2,500</p>
                    <p className="text-white/60 text-sm mt-1">30 min · 2 sauna + ice bath rounds</p>
                  </div>
                  <div className="border border-[#513394]/50 rounded-2xl p-5 bg-[#513394]/10">
                    <p className="text-[#A78BFA] text-xs font-black tracking-widest uppercase mb-1">Full Cycle</p>
                    <p className="text-2xl font-black">₹3,500</p>
                    <p className="text-white/60 text-sm mt-1">60 min · 3–4 sauna + ice bath rounds</p>
                  </div>
                </div>
                <a href="tel:+919702368612" className="block text-center bg-[#513394] text-white font-black px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-lg mb-3">
                  Call to Book
                </a>
                <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer" className="block text-center bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl transition-all hover:scale-[1.02] text-base">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#513394]">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Infrared Sauna + Ice Bath. One Protocol.
          </h2>
          <p className="text-white/70 mb-10 text-lg">
            Dadar East, Mumbai. Physio-supervised. Half Cycle from ₹2,500.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919702368612" className="bg-white text-[#513394] font-black px-10 py-5 rounded-full hover:scale-105 transition-all">
              Call to Book
            </a>
            <Link href="/contrast-therapy-mumbai" className="border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full hover:bg-white/10">
              Full Contrast Therapy Guide
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={infraredSaunaMumbaiFaqs} />

      <ServiceSchema
        serviceName="Infrared Sauna Mumbai, Contrast Therapy Heat Phase"
        description="Physiotherapy-supervised infrared sauna in Dadar East, Mumbai. Hot phase of clinical contrast therapy paired with ice bath at R3BOOT."
        serviceUrl="https://www.r3boot.in/infrared-sauna-mumbai"
      />
      <FAQSchema faqs={infraredSaunaMumbaiFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Contrast Therapy Mumbai', url: '/contrast-therapy-mumbai' },
        { name: 'Infrared Sauna Mumbai', url: '/infrared-sauna-mumbai' },
      ]} />
    </main>
  )
}
