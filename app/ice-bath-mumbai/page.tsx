import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { services } from '@/lib/services'
import { FAQSection } from '@/components/faq-section'
import PhysiotherapyTeam from '@/components/PhysiotherapyTeam'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { iceBathMumbaiFaqs } from '@/lib/faqs/ice-bath-mumbai'

export const metadata: Metadata = {
  title: 'Ice Bath Mumbai | Physio-Supervised Cold Therapy — R3BOOT Dadar',
  description:
    'Ice bath Mumbai at R3BOOT Dadar — physio-supervised cold immersion with health intake & breathing guidance. Not a plunge tank. 5.0 ★ Google. Book via WhatsApp.',
  alternates: { canonical: '/ice-bath-mumbai' },
  keywords: [
    'ice bath mumbai',
    'ice bath near me',
    'cold immersion mumbai',
    'cold therapy mumbai',
    'ice bath dadar',
    'supervised ice bath mumbai',
    'cold plunge mumbai',
    'cold water therapy mumbai',
  ],
}

const otherServices = services.filter((s) => s.slug !== 'contrast-therapy').slice(0, 4)

const whyColdWorks = [
  {
    title: 'Vasoconstriction',
    description:
      'Cold causes blood vessels to constrict rapidly, pushing blood away from muscle tissue and reducing acute inflammation and swelling.',
  },
  {
    title: 'Metabolic waste clearance',
    description:
      'The pressure shift from vasoconstriction moves lactic acid and inflammatory cytokines out of fatigued muscles more efficiently than passive rest.',
  },
  {
    title: 'Nervous system reset',
    description:
      'Cold immersion activates the vagus nerve, shifting your body toward a parasympathetic state — reduced cortisol, improved mood, calmer recovery.',
  },
  {
    title: 'Temperature-gated inflammation',
    description:
      'Reducing muscle temperature slows the inflammatory cascade from training stress, producing measurable reductions in perceived soreness within 24 hours.',
  },
]

const whatToExpect = [
  {
    title: 'Health intake review',
    body: 'Complete a brief form covering training background, injury history, and health conditions. Our physiotherapist confirms cold therapy is appropriate for you before any immersion.',
  },
  {
    title: 'Breathing preparation',
    body: 'We teach you a controlled breathing technique before cold immersion. This is the single most important factor for getting through the first 60 seconds.',
  },
  {
    title: 'Infrared sauna phase first',
    body: 'Sessions begin with infrared sauna to dilate blood vessels and warm muscles. This makes the subsequent cold phase more effective and more manageable.',
  },
  {
    title: 'Supervised cold immersion',
    body: 'Our team guides you through the cold phase. Most first-time clients find it challenging for the first minute, then manageable. Duration is adjusted to your response.',
  },
]

export default function IceBathMumbaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">

      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_ice_bath.webp"
          alt="Ice Bath Mumbai — Supervised Cold Immersion at R3BOOT Dadar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10 pb-20">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all mb-8 group"
          >
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#513394] transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="font-bold tracking-wider text-sm">BACK TO SERVICES</span>
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-white/70 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">COLD THERAPY // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Ice Bath in Mumbai | Supervised Cold Therapy at R3BOOT, Dadar
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              Physiotherapist-supervised cold immersion. Part of a clinical contrast therapy protocol — not a gym cold plunge.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OPENING — honest positioning ─── */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-24 items-start">

            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 tracking-tight">
                Mumbai&apos;s Only{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Physiotherapist-Supervised</span>{' '}
                Ice Bath
              </h2>
              <div className="prose prose-base sm:prose-lg md:prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Most ice baths in Mumbai are cold plunge tanks at gyms — no supervision, no health screening,
                  no protocol. You get in cold, stay as long as you can, and get out. That is cold exposure,
                  not cold therapy.
                </p>
                <p>
                  At R3BOOT in Dadar, cold immersion is a clinical intervention. Every session begins with a
                  health intake review. Our physiotherapy team teaches you controlled breathing before the cold
                  phase, supervises your immersion, and monitors your response. The cold is paired with an
                  infrared sauna in a structured 3:1 hot-to-cold protocol — producing a vascular pumping action
                  that research shows clears metabolic waste faster than cold alone.
                </p>
                <p>
                  If you are looking for an ice bath in Mumbai that actually produces clinical results, this is
                  what that looks like.
                </p>
              </div>

              <div className="mt-10 sm:mt-14 md:mt-20">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 md:mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  WHY COLD WORKS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {whyColdWorks.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-white/5 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden"
                    >
                      <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 dark:text-white/5 group-hover:text-[#513394]/5 dark:group-hover:text-[#8B5CF6]/5 transition-colors">
                        {idx + 1}
                      </div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-6 group-hover:bg-[#513394] dark:group-hover:bg-[#8B5CF6] group-hover:text-white transition-all">
                          0{idx + 1}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right sticky card */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-[#1A1A1A] p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#513394]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-black mb-8 tracking-wide flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#513394]" />
                  IDEAL FOR //
                </h3>
                <ul className="space-y-6 mb-12">
                  {[
                    'Athletes in heavy training blocks',
                    'Runners and marathon prep',
                    'Gym-goers managing DOMS',
                    'Cricket and football players',
                    'CrossFit and functional fitness',
                    'Anyone managing chronic inflammation',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 group/item">
                      <div className="w-6 h-6 rounded-full bg-[#513394] flex items-center justify-center shrink-0 mt-1 group-hover/item:scale-110 transition-transform">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/80 font-medium leading-snug group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/919702368612"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="block text-center bg-[#513394] text-white font-black px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-lg group-hover:bg-[#603eb0] mb-3"
                >
                  Book on WhatsApp
                </a>
                <a
                  href="tel:+919702368612"
                  className="block text-center border border-white/20 text-white/80 font-bold px-8 py-4 rounded-2xl transition-all hover:bg-white/10 text-base"
                >
                  Call +91 97023 68612
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE SCIENCE — citeable GEO block ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_ice_bath_lady.webp"
                alt="Supervised ice bath cold immersion therapy Mumbai R3BOOT Dadar"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  COLD IMMERSION //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  Evidence-based cold therapy. Physiotherapy-supervised.
                </p>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                THE SCIENCE //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                What Cold Immersion{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Actually Does</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
                Cold water immersion at 10–15°C triggers immediate vasoconstriction — blood vessels narrow,
                blood pressure in peripheral tissue drops, and inflammatory mediators are displaced from
                fatigued muscle. Research in the European Journal of Applied Physiology confirms that
                cold water immersion reduces perceived muscle soreness and restores muscle force production
                faster than passive recovery. The effect is dose-dependent: water temperature, immersion
                duration, and the athlete&apos;s training load all determine outcome. This is why
                protocol matters — and why supervision by a physiotherapy team is not optional.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Water temperature', value: '10–15°C (evidence-based range)' },
                  { label: 'Session duration', value: '3–10 minutes cold immersion per cycle' },
                  { label: 'Protocol ratio', value: '3:1 hot-to-cold when combined with sauna' },
                  { label: 'Frequency', value: '1–2 times per week for active athletes' },
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-5 p-4 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5">
                    <div className="w-2 h-10 bg-[#513394] rounded-full shrink-0" />
                    <div>
                      <span className="text-[11px] font-black tracking-widest text-[#513394] dark:text-[#A78BFA] uppercase block">{stat.label}</span>
                      <span className="text-gray-900 dark:text-white font-bold text-sm">{stat.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY SUPERVISED > UNSUPERVISED ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                SUPERVISION //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Supervised Ice Bath vs{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Gym Cold Plunge</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Mumbai has cold plunge tanks at gyms. Here is what makes R3BOOT&apos;s cold therapy different.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 dark:border-white/5">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#513394]">
                    <th className="px-6 py-5 text-white font-black text-sm tracking-wider uppercase">Factor</th>
                    <th className="px-6 py-5 text-white font-black text-sm tracking-wider uppercase">Gym Cold Plunge</th>
                    <th className="px-6 py-5 text-white font-black text-sm tracking-wider uppercase">R3BOOT Ice Bath</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Health screening', 'None', 'Full physiotherapy intake before every session'],
                    ['Supervision', 'None', 'Physiotherapy team present throughout'],
                    ['Breathing guidance', 'None', 'Controlled breathing taught before cold immersion'],
                    ['Protocol', 'Get in, survive, get out', 'Structured temperature, timing, and cycling'],
                    ['Warm phase', 'None', 'Infrared sauna → creates contrast effect'],
                    ['Recovery outcome', 'Cold exposure only', 'Clinical contrast therapy + cold physiology'],
                    ['Safety for injuries', 'No assessment', 'Cleared by physiotherapist before each session'],
                  ].map(([factor, gym, r3boot], idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white dark:bg-white/5' : 'bg-[#F8F9FA] dark:bg-white/[0.02]'}
                    >
                      <td className="px-6 py-4 font-bold text-gray-900 dark:text-white text-sm">{factor}</td>
                      <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">{gym}</td>
                      <td className="px-6 py-4 text-[#513394] dark:text-[#A78BFA] font-medium text-sm">{r3boot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT TO EXPECT ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                YOUR SESSION //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                What to Expect{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">at R3BOOT</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                A full session takes 30–60 minutes including intake, the contrast protocol, and post-session
                check-in. Our physiotherapy team is with you through every phase.
              </p>
              <div className="space-y-6">
                {whatToExpect.map((item, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="w-10 h-10 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black shrink-0 text-sm group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_sauna.webp"
                alt="Infrared sauna before ice bath — contrast therapy protocol at R3BOOT Mumbai"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  THE PROTOCOL //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  Sauna first. Then cold. Always end on cold.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTRAST THERAPY UPSELL ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                WHY CONTRAST //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Ice Bath Alone vs{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Contrast Therapy</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Cold immersion works. Contrast therapy works more. Here is why we pair the ice bath with
                infrared sauna in every session.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 dark:border-white/5">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#513394]">
                    <th className="px-6 py-5 text-white font-black text-sm tracking-wider uppercase">Factor</th>
                    <th className="px-6 py-5 text-white font-black text-sm tracking-wider uppercase">Ice Bath Only</th>
                    <th className="px-6 py-5 text-white font-black text-sm tracking-wider uppercase">Contrast Therapy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Mechanism', 'Cold vasoconstriction only', 'Vascular pumping (dilate + constrict cycle)'],
                    ['Waste removal', 'Moderate', 'Higher — cycling clears more metabolic waste'],
                    ['Muscle soreness', 'Good reduction', 'Greater reduction, especially for DOMS'],
                    ['Session experience', 'Intense, no warm phase', 'More manageable — sauna eases cold entry'],
                    ['Nervous system', 'High adrenaline spike', 'Balanced: stimulating then calming'],
                    ['Best for', 'Acute inflammation, comp day', 'Sub-acute recovery, high training loads'],
                  ].map(([factor, cold, contrast], idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white dark:bg-white/5' : 'bg-[#F8F9FA] dark:bg-white/[0.02]'}
                    >
                      <td className="px-6 py-4 font-bold text-gray-900 dark:text-white text-sm">{factor}</td>
                      <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">{cold}</td>
                      <td className="px-6 py-4 text-[#513394] dark:text-[#A78BFA] font-medium text-sm">{contrast}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-sm mt-8 leading-relaxed text-center">
              At R3BOOT, we offer ice bath as part of our{' '}
              <Link href="/contrast-therapy-mumbai" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline underline-offset-4">
                contrast therapy protocol
              </Link>
              {' '}— never a standalone cold plunge without the warm phase. Also see{' '}
              <Link href="/cold-plunge-mumbai" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline underline-offset-4">
                cold plunge Mumbai
              </Link>
              {' '}and{' '}
              <Link href="/infrared-sauna-mumbai" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline underline-offset-4">
                infrared sauna Mumbai
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ─── MUMBAI SECTION ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_R3BOOT_PROTOCOL.webp"
                alt="R3BOOT contrast therapy ice bath protocol Dadar Mumbai"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  DADAR, MUMBAI //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  Clinical cold therapy. Not a gym feature.
                </p>
              </div>
            </div>
            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                MUMBAI //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Ice Bath Therapy in{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Dadar, Mumbai</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
                R3BOOT is located in Dadar East — accessible from Bandra, Andheri, Thane, and central Mumbai.
                We are 5 minutes from Dadar railway station. Cold therapy sessions are available by appointment,
                Monday to Sunday.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  'Mumbai Marathon runners',
                  'CrossFit athletes',
                  'Cricket players',
                  'Gym-goers',
                  'Cyclists',
                  'Swimmers',
                  'Footballers',
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-[#513394]/10 dark:bg-[#8B5CF6]/20 text-[#513394] dark:text-[#A78BFA] font-bold px-5 py-2.5 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="text-[#513394] dark:text-[#A78BFA] font-black shrink-0 mt-0.5">↗</span>
                  <span>203, Palai Plaza, Swami Gyan Jivandas Marg, Dadar East, Mumbai 400014</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#513394] dark:text-[#A78BFA] font-black shrink-0 mt-0.5">↗</span>
                  <span>Mon–Tue–Thu–Fri–Sat: 8:00 AM – 9:00 PM &nbsp;|&nbsp; Wed: 8:00 AM – 4:00 PM &nbsp;|&nbsp; Sun: 2:00 PM – 9:00 PM</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#513394] dark:text-[#A78BFA] font-black shrink-0 mt-0.5">↗</span>
                  <span>Sessions by appointment — call or WhatsApp +91 97023 68612</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <PhysiotherapyTeam />

      {/* ─── FAQ ─── */}
      <FAQSection faqs={iceBathMumbaiFaqs} />

      {/* ─── CTA ─── */}
      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Book Your Ice Bath Session{' '}
              <span className="text-white/50">in Mumbai</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              R3BOOT is in Dadar East, Mumbai. Contrast therapy sessions including supervised cold immersion
              are available by appointment. Our physiotherapists will confirm cold therapy is right for
              your training load and recovery goals before your first session.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://wa.me/919702368612"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-full sm:w-auto bg-white text-[#513394] font-black px-10 py-5 rounded-full transition-all hover:scale-105 shadow-2xl text-lg tracking-wide"
              >
                Book on WhatsApp
              </a>
              <a
                href="tel:+919702368612"
                className="w-full sm:w-auto border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full transition-all hover:bg-white/10 text-lg tracking-wide"
              >
                Call +91 97023 68612
              </a>
            </div>
            <p className="text-white/40 mt-8 font-bold tracking-widest text-sm">DADAR EAST, MUMBAI 400014</p>
          </div>
        </div>
      </section>

      {/* ─── OTHER SERVICES ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              KEEP EXPLORING //
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
              Other Ways to <span className="text-[#513394] dark:text-[#8B5CF6]">Recover</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherServices.map((service, idx) => (
              <Link
                key={idx}
                href={`/services/${service.slug}`}
                className="group bg-white dark:bg-white/5 p-4 rounded-[2.5rem] shadow-sm hover:shadow-xl border border-transparent dark:border-white/5 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-[2rem] mb-6 shadow-sm">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="px-2 pb-2 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between w-full bg-[#513394]/10 group-hover:bg-[#513394] text-[#513394] group-hover:text-white rounded-full p-1 transition-all duration-300">
                      <span className="text-[13px] font-black pl-5">EXPLORE</span>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceSchema
        serviceName="Ice Bath in Mumbai — Supervised Cold Therapy"
        description="Physiotherapist-supervised cold immersion as part of a clinical contrast therapy protocol at R3BOOT, Dadar East, Mumbai. Infrared sauna and ice bath in a structured 3:1 hot-to-cold sequence."
        serviceUrl="https://www.r3boot.in/ice-bath-mumbai"
      />
      <FAQSchema faqs={iceBathMumbaiFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Ice Bath Mumbai', url: '/ice-bath-mumbai' },
      ]} />
    </main>
  )
}
