import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { services } from '@/lib/services'
import { FAQSection } from '@/components/faq-section'
import PhysiotherapyTeam from '@/components/PhysiotherapyTeam'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import { contrastTherapyMumbaiFaqs } from '@/lib/faqs/contrast-therapy-mumbai'

export const metadata: Metadata = {
  title: 'Contrast Therapy in Mumbai | Ice Bath & Sauna at R3BOOT',
  description:
    'Contrast therapy in Mumbai at R3BOOT. Clinically structured ice bath and infrared sauna protocol for athletes. Supervised by physiotherapists. Book today.',
  keywords: [
    'contrast therapy Mumbai',
    'contrast bath therapy Mumbai',
    'ice bath recovery Mumbai',
    'hot cold therapy for muscle recovery',
    'contrast therapy for athletes Mumbai',
    'contrast therapy for muscle recovery Mumbai',
    'infrared sauna ice bath Mumbai',
  ],
}

const otherServices = services.filter((s) => s.slug !== 'contrast-therapy').slice(0, 4)


const whatItHelps = [
  {
    title: 'Post-training muscle recovery',
    description:
      'Athletes who train 4+ times a week use contrast therapy to reduce DOMS and maintain training volume. Applicable to runners, gym-goers, CrossFit athletes, cricketers, and swimmers.',
  },
  {
    title: 'Muscle soreness between sessions',
    description:
      'If you have training or competition within 24–48 hours, contrast therapy helps you recover faster than passive rest alone.',
  },
  {
    title: 'Sub-acute soft tissue injuries',
    description:
      'Once the acute phase has passed, contrast therapy supports tissue recovery by improving circulation to the injured area.',
  },
  {
    title: 'Chronic inflammation management',
    description:
      'The cold phase directly reduces inflammatory markers in muscle tissue from repeated training stress.',
  },
]

const whatToExpect = [
  {
    title: 'Intake and health review',
    body: 'Complete a brief form covering your training background, injury history, and health conditions. Our physiotherapist confirms contrast therapy is appropriate for you.',
  },
  {
    title: 'Breathing guidance before cold',
    body: 'We teach you a controlled breathing technique before your first ice bath immersion — this makes the cold phase manageable for most first-time clients.',
  },
  {
    title: 'Supervised protocol',
    body: 'You move between infrared sauna and ice bath under team guidance. Most first-time clients find the cold phase challenging for the first 60 seconds, then manageable.',
  },
  {
    title: 'Post-session check-in',
    body: 'Most clients feel improved muscle looseness and mental clarity within 30–60 minutes. We advise light movement (walking, gentle stretching) for the remainder of the day.',
  },
]

export default function ContrastTherapyMumbaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">

      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_Hero_section.webp"
          alt="Contrast Therapy Mumbai — Ice Bath and Infrared Sauna at R3BOOT"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">RECOVERY // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Contrast Therapy in Mumbai | R3BOOT Ice Bath & Infrared Sauna
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              Clinically structured hot-cold recovery protocol for athletes and active adults. Supervised by physiotherapists.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OPENING SECTION (12-col grid) ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                Your Muscles Don&apos;t Recover During Rest.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">They Recover During Circulation.</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Research published in the International Journal of Sports Physiology and Performance found that contrast
                  therapy — alternating heat and cold in a structured sequence — reduces perceived muscle soreness and
                  restores muscle function significantly faster than passive recovery alone. The mechanism is vascular:
                  heat dilates blood vessels, cold constricts them, and the alternation creates a pumping action that
                  clears inflammatory waste from muscle tissue.
                </p>
                <p>
                  At R3BOOT, our contrast therapy protocol combines an infrared sauna and ice bath in a clinically
                  structured hot-cold sequence. Sessions are supervised by our physiotherapy team. The protocol,
                  temperatures, and timing are set to evidence-based standards.
                </p>
              </div>

              <div className="mt-20">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  WHAT IT HELPS WITH
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {whatItHelps.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden"
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
              <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#513394]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-black mb-8 tracking-wide flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#513394]" />
                  IDEAL FOR //
                </h3>
                <ul className="space-y-6 mb-12">
                  {[
                    'Competitive and recreational athletes',
                    'Runners, cyclists, CrossFit athletes',
                    'Cricket and football players',
                    'Gym-goers managing training load',
                    'Sub-acute injury recovery',
                    'High-performance professionals',
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
                  href="https://www.practo.com/mumbai/clinic/r3-boot-spoorts-therapy-dadar-east/doctors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#513394] text-white font-black px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-lg group-hover:bg-[#603eb0]"
                >
                  Book This Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW CONTRAST THERAPY WORKS (alt bg, two-col) ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_ice_bath.webp"
                alt="Ice bath cold immersion contrast therapy Mumbai R3BOOT"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  VASCULAR SCIENCE //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  Heat dilates. Cold constricts. The alternation does the work.
                </p>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                HOW IT WORKS //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                What Contrast Therapy Does{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">to Your Body</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                When you alternate between heat and cold, your body responds at a vascular level. Repeating this cycle two to three
                times in a single session creates a pumping action that clears metabolic waste at a rate passive rest cannot match.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'During the heat phase', body: 'Blood vessels dilate. Blood flow to muscles increases. Oxygen and nutrients reach damaged tissue. Muscle tension decreases.' },
                  { title: 'During the cold phase', body: 'Blood vessels constrict rapidly. Blood and metabolic waste (lactic acid, inflammatory cytokines) are forced away from muscles. Swelling reduces.' },
                  { title: 'The alternation effect', body: 'Repeating the cycle creates a vascular pumping action. Research shows contrast therapy significantly reduces perceived muscle soreness compared to cold-water immersion alone.' },
                  { title: 'Always end on cold', body: 'Finishing on cold locks in the anti-inflammatory effect and leaves your nervous system in a calm, recovered state.' },
                ].map((item, idx) => (
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
          </div>
        </div>
      </section>

      {/* ─── PROTOCOL (image only, full-width) ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto mb-14 text-center">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              THE PROTOCOL //
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
              The R3BOOT Contrast Therapy{' '}
              <span className="text-[#513394] dark:text-[#8B5CF6]">Protocol</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
              Built on established temperature ratios and timing guidelines used in professional sports recovery.
              Hot-to-cold time ratio of 3:1. Adjusted by your physiotherapist based on training load and recovery goals.
            </p>
          </div>

          <div className="relative rounded-[2.5rem] overflow-hidden w-full shadow-2xl max-w-6xl mx-auto aspect-[16/9]">
            <Image
              src="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_R3BOOT_PROTOCOL.webp"
              alt="R3BOOT contrast therapy protocol — ice bath and infrared sauna Mumbai"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  R3BOOT PROTOCOL //
                </span>
                <p className="text-white text-2xl font-black tracking-tight leading-tight">
                  Hot-to-cold ratio 3:1 — always end on cold
                </p>
              </div>
              <span className="hidden sm:block text-white/40 font-black tracking-widest text-xs uppercase">
                Evidence-based
              </span>
            </div>
          </div>

          <p className="text-gray-400 dark:text-gray-500 text-sm mt-6 italic text-center">
            The final cold phase locks in the anti-inflammatory effect and leaves your nervous system in a calm, recovered state.
          </p>
        </div>
      </section>

      {/* ─── ICE BATH vs CONTRAST THERAPY COMPARISON (alt bg) ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                COMPARISON //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Contrast Therapy vs{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Ice Bath Alone</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Many athletes in Mumbai are already using ice baths. Here is why contrast therapy produces different results — and
                when each approach is the right choice.
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
                    ['Mechanism', 'Cold vasoconstriction only', 'Vascular pumping (dilate + constrict)'],
                    ['Waste removal', 'Moderate', 'Higher — pumping clears more metabolic waste'],
                    ['Muscle soreness', 'Good', 'Stronger, especially for DOMS'],
                    ['Mental effect', 'High adrenaline response', 'Balanced: stimulating then calming'],
                    ['Next-day performance', 'Moderate', 'Better recovery of muscle function'],
                    ['Session experience', 'Intense, no warm phase', 'More manageable with hot phases'],
                    ['Best for', 'Acute inflammation, competition day', 'Sub-acute recovery, high training loads'],
                  ].map(([factor, iceBath, contrast], idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0
                        ? 'bg-white dark:bg-white/5'
                        : 'bg-[#F8F9FA] dark:bg-white/[0.02]'
                      }
                    >
                      <td className="px-6 py-4 font-bold text-gray-900 dark:text-white text-sm">{factor}</td>
                      <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">{iceBath}</td>
                      <td className="px-6 py-4 text-[#513394] dark:text-[#A78BFA] font-medium text-sm">{contrast}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-sm mt-8 leading-relaxed text-center">
              Our physiotherapists will tell you which is right for your situation. We also offer{' '}
              <Link href="/services/hydrotherapy" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline underline-offset-4">
                hydrotherapy
              </Link>{' '}
              and can combine treatment approaches based on your recovery stage.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHAT TO EXPECT AT R3BOOT (two-col, sauna image right) ─── */}
      <section className="py-24 lg:py-32">
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
                A full contrast therapy session takes approximately 45–60 minutes including intake, the protocol, and a post-session
                check-in. Our physiotherapy team is with you through the session — guiding your breathing, monitoring your response,
                and adjusting the protocol if needed.
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
                alt="Infrared sauna contrast therapy session R3BOOT Mumbai"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  SUPERVISED //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  Physiotherapy team present through every phase
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW OFTEN (alt bg, step cards) ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                FREQUENCY //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                How Often Should You Do{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Contrast Therapy?</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Training 4–6 days per week', description: 'One to two sessions per week is effective for ongoing recovery management.' },
                { title: 'Competition preparation', description: 'A session 2–3 days before a major competition supports performance. Avoid within 24 hours of competing.' },
                { title: 'General recovery', description: 'Even one session per week produces measurable improvements in soreness reduction and mobility over time.' },
                { title: 'After an intense training block', description: 'A session within 48–72 hours of the event (once the acute phase has passed) accelerates return to training.' },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 dark:text-white/5 group-hover:text-[#513394]/5 dark:group-hover:text-[#8B5CF6]/5 transition-colors">
                    {idx + 1}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-6 group-hover:bg-[#513394] dark:group-hover:bg-[#8B5CF6] group-hover:text-white transition-all">
                      0{idx + 1}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MUMBAI LOCAL RELEVANCE (two-col: text left, images right) ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

            {/* Left: text content */}
            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                MUMBAI //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Why Mumbai Athletes Are Choosing{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Contrast Therapy</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
                Mumbai&apos;s heat and humidity make post-training recovery harder. Your body is already under thermal stress before you
                add training load. Contrast therapy addresses this directly by resetting your vascular system and reducing the
                inflammation that Mumbai&apos;s climate accelerates.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  'Mumbai Marathon runners',
                  'CrossFit athletes',
                  'Cricket players',
                  'Gym athletes',
                  'Swimmers',
                  'Cyclists',
                  'Weekend warriors',
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-[#513394]/10 dark:bg-[#8B5CF6]/20 text-[#513394] dark:text-[#A78BFA] font-bold px-5 py-2.5 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Our integrated approach means contrast therapy does not exist in isolation. We combine it with{' '}
                <Link href="/services/sports-massage" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline underline-offset-4">
                  sports massage
                </Link>{' '}
                for deeper muscle recovery,{' '}
                <Link href="/services/physiotherapy" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline underline-offset-4">
                  physiotherapy
                </Link>{' '}
                for injury management, and{' '}
                <Link href="/services/sports-psychology" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline underline-offset-4">
                  sports psychology
                </Link>{' '}
                when your recovery needs require more than one modality.
              </p>
            </div>

            {/* Right: 2-image stacked grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-xl">
                <Image
                  src="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_ice_bath.webp"
                  alt="Ice bath recovery for Mumbai athletes at R3BOOT"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-xs font-black tracking-tight leading-tight">Ice Bath</p>
                </div>
              </div>
              <div className="grid grid-rows-2 gap-4">
                <div className="relative rounded-[2rem] overflow-hidden shadow-xl">
                  <Image
                    src="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_sauna.webp"
                    alt="Infrared sauna for Mumbai athletes at R3BOOT"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-xs font-black tracking-tight leading-tight">Infrared Sauna</p>
                  </div>
                </div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-xl">
                  <Image
                    src="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_ice_bath_lady.webp"
                    alt="Contrast therapy session R3BOOT Mumbai"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-xs font-black tracking-tight leading-tight">Recovery Session</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ICE BATH LADY two-col (image left, text right) ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_ice_bath_lady.webp"
                alt="Contrast therapy ice bath session R3BOOT Mumbai athlete recovery"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  FIRST SESSION //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  Cold enough to work. Guided enough to complete.
                </p>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                GETTING STARTED //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                Your First Session at{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                When clients come to us for contrast therapy, the first question they ask is: how cold is the ice bath really?
                The honest answer: cold enough to work, managed enough that you can complete the full protocol.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'What to bring', body: 'Swimwear or athletic shorts comfortable in both sauna and ice bath. A towel. Arrive hydrated. Avoid a heavy meal within 90 minutes.' },
                  { title: 'The first 60 seconds', body: 'Most first-time clients find the cold phase challenging for the first minute. After that, controlled breathing makes it entirely manageable.' },
                  { title: 'After your session', body: 'Most clients feel a notable improvement in muscle looseness and mental clarity within 30–60 minutes of finishing.' },
                ].map((item, idx) => (
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
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <PhysiotherapyTeam />

      {/* ─── FAQ ─── */}
      <FAQSection faqs={contrastTherapyMumbaiFaqs} />

      {/* ─── CTA BANNER ─── */}
      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Book a Contrast Therapy Session in{' '}
              <span className="text-white/50">Mumbai</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              R3BOOT is located in Mumbai. Sessions available Monday to Saturday by appointment.
              Our physiotherapists will tell you honestly whether contrast therapy is the right starting point for your recovery goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://www.practo.com/mumbai/clinic/r3-boot-spoorts-therapy-dadar-east/doctors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-[#513394] font-black px-10 py-5 rounded-full transition-all hover:scale-105 shadow-2xl text-lg tracking-wide"
              >
                Book Your Session
              </a>
              <a
                href="https://wa.me/919702368612"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-full sm:w-auto border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full transition-all hover:bg-white/10 text-lg tracking-wide"
              >
                WhatsApp Us
              </a>
            </div>
            <p className="text-white/40 mt-8 font-bold tracking-widest text-sm">MUMBAI</p>
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
        serviceName="Contrast Therapy in Mumbai"
        description="Clinically structured hot-cold recovery protocol using infrared sauna and ice bath. Supervised by physiotherapists at R3BOOT, Mumbai."
        serviceUrl="https://www.r3boot.in/contrast-therapy-mumbai"
      />
      <FAQSchema faqs={contrastTherapyMumbaiFaqs} />
    </main>
  )
}
