import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { services } from '@/lib/services'
import { FAQSection } from '@/components/faq-section'
import PhysiotherapyTeam from '@/components/PhysiotherapyTeam'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import { clinicalPilatesMumbaiFaqs } from '@/lib/faqs/clinical-pilates-mumbai'

export const metadata: Metadata = {
  title: 'Clinical Pilates in Mumbai | Physiotherapist-Led at R3BOOT Dadar',
  description:
    'Clinical Pilates in Mumbai at R3BOOT Dadar. Physiotherapist-led programs for back pain, scoliosis, post-surgery rehab, and sports performance. ₹2,000/session. Book today.',
  alternates: { canonical: '/clinical-pilates-mumbai' },
  keywords: [
    'clinical pilates mumbai',
    'clinical pilates dadar',
    'clinical pilates for back pain mumbai',
    'reformer pilates mumbai',
    'physiotherapy pilates mumbai',
    'pilates for back pain mumbai',
    'clinical pilates near me mumbai',
    'physiotherapist led pilates mumbai',
    'pilates rehabilitation mumbai',
    'clinical pilates cost mumbai',
  ],
}

const otherServices = services.filter((s) => s.slug !== 'clinical-pilates').slice(0, 4)

const conditions = [
  {
    title: 'Lower Back Pain',
    description:
      'The most common reason clients come to R3BOOT for clinical Pilates. Core stabilisation and segmental spinal control work targets the muscular deficits that drive recurring back pain — providing lasting relief rather than temporary symptom management.',
  },
  {
    title: 'Scoliosis Management',
    description:
      'Clinical Pilates is a first-line physiotherapy approach for managing scoliosis in adolescents and adults. Exercises target asymmetric weakness patterns and train postural awareness specific to your curve pattern.',
  },
  {
    title: 'Post-Surgery Rehabilitation',
    description:
      'Following spinal surgery, ACL reconstruction, hip or knee replacement, or abdominal surgery, clinical Pilates provides a graduated, physiotherapy-supervised return to movement and function.',
  },
  {
    title: 'Posture Correction',
    description:
      'For desk workers, athletes, and individuals with postural pain, clinical Pilates addresses the specific muscle imbalances causing your posture problem — not just the symptoms.',
  },
  {
    title: 'Prenatal & Postnatal Recovery',
    description:
      'Supervised clinical Pilates is safe and effective during pregnancy for managing pelvic girdle pain and maintaining core function. Postnatal programs address diastasis recti and pelvic floor recovery.',
  },
  {
    title: 'Sports Performance',
    description:
      'Used by professional and recreational athletes to build the foundational core stability and movement quality that reduces injury risk and improves athletic output. Integrated with physiotherapy and sports massage at R3BOOT.',
  },
]

const whatToExpect = [
  {
    title: 'Initial physiotherapy assessment',
    body: 'Your first appointment is an assessment — not a class. Your physiotherapist evaluates your posture, movement patterns, strength deficits, and pain triggers. This takes 30–45 minutes and forms the clinical basis for your program.',
  },
  {
    title: 'Prescribed exercise program',
    body: 'Based on your assessment, your physiotherapist prescribes a set of specific exercises — mat-based, reformer-based, or both. These are not generic class exercises. Every movement has a clinical reason.',
  },
  {
    title: 'Progressive loading',
    body: 'Your program advances as your strength, control, and function improve. Exercises become more demanding over time, matching your clinical progress — not a fixed weekly schedule.',
  },
  {
    title: 'Integration with other treatment',
    body: 'Where appropriate, clinical Pilates is combined with physiotherapy manual therapy, dry needling, or sports massage within the same R3BOOT session — reducing your appointment load while addressing multiple clinical goals.',
  },
]

export default function ClinicalPilatesMumbaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">

      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793706/Clinical_Pillates_Image_2_jc05pa.png"
          alt="Clinical Pilates Mumbai — Physiotherapist-Led at R3BOOT Dadar"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">REHABILITATION // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Clinical Pilates in Mumbai | Physiotherapist-Led at R3BOOT
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              Prescribed movement programs for back pain, scoliosis, post-surgery rehab, and sports performance. Not a fitness class — a clinical intervention.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OPENING SECTION ─── */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-24 items-start">

            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 tracking-tight">
                A Fitness Class Follows a Schedule.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Clinical Pilates Follows Your Diagnosis.</span>
              </h2>
              <div className="prose prose-base sm:prose-lg md:prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Mumbai has dozens of Pilates studios. YKBI, Namrata Purohit's studio, Moushu's, Activ8, Healthspace.
                  They are run by Pilates instructors, some excellent. But if you have a disc injury at L4-L5, are recovering
                  from ACL surgery, managing scoliosis, or have chronic lower back pain that hasn't responded to stretching —
                  a fitness class is not what you need. Clinical Pilates is physiotherapy applied through movement: every
                  exercise prescribed from your specific diagnosis, assessed and supervised by a physiotherapist, progressed
                  based on your clinical response.
                </p>
                <p>
                  At R3BOOT in Dadar East, Dr. Hiral Parikh (BPT, 15+ years) and Dr. Vaishali Vijay Rauniyar
                  (certified Dry Needling, Aquatic Rehabilitation) lead clinical Pilates programs that are built
                  from physiotherapy assessments — not adapted from class routines. Reformer and mat-based
                  sessions. Programs for back pain, scoliosis, post-surgical rehabilitation, posture, prenatal,
                  and sports performance. Sessions are 45–60 minutes at Palai Plaza, Swami Gyan Jivandas Marg,
                  Dadar East, Mumbai — 5 minutes from Dadar Central Line station.
                </p>
              </div>

              <div className="mt-10 sm:mt-14 md:mt-20">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 md:mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  CONDITIONS WE TREAT
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {conditions.map((item, idx) => (
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
                    'Chronic lower back pain sufferers',
                    'Post-surgical recovery patients',
                    'Athletes with recurring injuries',
                    'Desk workers with postural pain',
                    'Scoliosis management',
                    'Pre- and post-natal care',
                    'Anyone who failed generic Pilates',
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
                  href="tel:+919702368612"
                  className="block text-center bg-[#513394] text-white font-black px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-lg group-hover:bg-[#603eb0] mb-3"
                >
                  Call to Book
                </a>
                <a
                  href="https://wa.me/919702368612"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="block text-center bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-base"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLINICAL vs REGULAR PILATES COMPARISON (alt bg) ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                COMPARISON //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Clinical Pilates vs{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Regular Pilates</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Many Mumbai clients have tried regular Pilates studios before coming to R3BOOT. Here is why the clinical approach produces different results — and why it matters for injury, pain, and rehabilitation.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 dark:border-white/5">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#513394]">
                    <th className="px-6 py-5 text-white font-black text-sm tracking-wider uppercase">Factor</th>
                    <th className="px-6 py-5 text-white font-black text-sm tracking-wider uppercase">Regular Pilates</th>
                    <th className="px-6 py-5 text-white font-black text-sm tracking-wider uppercase">Clinical Pilates at R3BOOT</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Led by', 'Pilates instructor', 'Qualified physiotherapist'],
                    ['Starts with', 'Class schedule', 'Individual clinical assessment'],
                    ['Exercises', 'Standardised class routine', 'Individually prescribed to your diagnosis'],
                    ['Progression', 'Fixed class difficulty', 'Based on your clinical response'],
                    ['Conditions treated', 'General fitness and flexibility', 'Back pain, scoliosis, post-surgery, sports rehab'],
                    ['Equipment', 'Mat or reformer class', 'Mat + reformer, selected per clinical need'],
                    ['Can be combined with', 'Other fitness classes', 'Physio, dry needling, sports massage in same session'],
                    ['Best for', 'Healthy individuals seeking fitness', 'Anyone with pain, injury, or clinical rehabilitation needs'],
                  ].map(([factor, regular, clinical], idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0
                        ? 'bg-white dark:bg-white/5'
                        : 'bg-[#F8F9FA] dark:bg-white/[0.02]'
                      }
                    >
                      <td className="px-6 py-4 font-bold text-gray-900 dark:text-white text-sm">{factor}</td>
                      <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">{regular}</td>
                      <td className="px-6 py-4 text-[#513394] dark:text-[#A78BFA] font-medium text-sm">{clinical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-sm mt-8 leading-relaxed text-center">
              If you are managing a specific condition, recovering from surgery, or have been told by a physiotherapist to do Pilates — clinical Pilates is what they mean.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHAT TO EXPECT (two-col, image right) ─── */}
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
                Clinical Pilates at R3BOOT is not a drop-in class. It begins with a formal physiotherapy assessment and every session follows a clinically supervised structure. Sessions are 45–60 minutes.
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
                src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793697/Clinical_Pillates_Image_3_pil8g7.jpg"
                alt="Clinical Pilates session at R3BOOT Mumbai — physiotherapist-led"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  CLINICAL //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  Assessment first. Every exercise has a clinical reason.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING (alt bg) ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14 text-center">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                PRICING //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                Clinical Pilates Fees{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">in Mumbai</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
                Transparent pricing. No hidden costs. All sessions conducted by a qualified physiotherapist.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  label: 'Single Session',
                  price: '₹2,000',
                  per: 'per session',
                  savings: null,
                  highlight: false,
                  note: 'Includes assessment on first visit',
                },
                {
                  label: '5 Session Pack',
                  price: '₹9,000',
                  per: '₹1,800 per session',
                  savings: 'Save ₹1,000',
                  highlight: false,
                  note: '10% off — ideal for acute conditions',
                },
                {
                  label: '10 Session Pack',
                  price: '₹17,000',
                  per: '₹1,700 per session',
                  savings: 'Save ₹3,000',
                  highlight: true,
                  note: '15% off — most popular for rehab',
                },
                {
                  label: '6-Month / 1-Year',
                  price: '20% off',
                  per: 'Custom quote',
                  savings: 'Maximum savings',
                  highlight: false,
                  note: 'Best for chronic conditions & ongoing performance',
                },
              ].map((plan, idx) => (
                <div
                  key={idx}
                  className={`relative p-8 rounded-[2.5rem] border transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-[#513394] border-[#513394] shadow-2xl shadow-[#513394]/30 scale-[1.02]'
                      : 'bg-white dark:bg-white/5 border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#513394] text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}
                  {plan.savings && (
                    <div className={`text-[11px] font-black tracking-wider uppercase mb-3 ${plan.highlight ? 'text-white/70' : 'text-[#513394] dark:text-[#A78BFA]'}`}>
                      {plan.savings}
                    </div>
                  )}
                  <div className={`text-3xl font-black mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {plan.price}
                  </div>
                  <div className={`text-xs font-bold mb-4 ${plan.highlight ? 'text-white/60' : 'text-gray-400 dark:text-gray-500'}`}>
                    {plan.per}
                  </div>
                  <div className={`text-xl font-black mb-4 ${plan.highlight ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {plan.label}
                  </div>
                  <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'}`}>
                    {plan.note}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-gray-400 dark:text-gray-500 text-sm mt-10 text-center">
              All pricing includes physiotherapist-led sessions. Contact us for corporate packages or insurance billing queries.
            </p>
          </div>
        </div>
      </section>

      {/* ─── REFORMER + MAT (two-col, image left) ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793759/Clinical_Pillates_Image_4_rluyr1.png"
                alt="Reformer Pilates Mumbai at R3BOOT — clinical physiotherapy-led reformer sessions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  REFORMER + MAT //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  Equipment selected for your clinical needs — not your fitness level
                </p>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                EQUIPMENT //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                Reformer & Mat{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Clinical Pilates</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                R3BOOT offers both reformer-based and mat-based clinical Pilates. The decision is clinical, not preferential. Your physiotherapist will determine the appropriate format after assessment.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Reformer Pilates',
                    body: 'Spring resistance allows graduated loading — particularly useful in early post-surgical rehabilitation when bodyweight-only exercises are too demanding. Also used for sports performance and advanced movement retraining. R3BOOT is one of the few physiotherapy clinics in Mumbai offering reformer Pilates in a clinical setting.',
                  },
                  {
                    title: 'Mat-Based Clinical Pilates',
                    body: 'Bodyweight exercises prescribed for core stabilisation, spinal control, and functional movement retraining. Suitable for most conditions from the outset. Exercises can also be taught for home practice — extending clinical benefit between sessions.',
                  },
                  {
                    title: 'Combined Approach',
                    body: 'Many rehabilitation programs use both reformer and mat-based exercises within the same program, progressing between formats as your condition improves.',
                  },
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

      {/* ─── MUMBAI LOCAL RELEVANCE (alt bg) ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                MUMBAI //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Why Mumbai Clients Choose{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT for Clinical Pilates</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
                Mumbai has many Pilates studios. R3BOOT in Dadar is one of the few centres in the city where clinical Pilates is delivered exclusively by physiotherapists — not Pilates instructors who have completed a Pilates certification. Clients travel from Bandra, Andheri, Thane, Powai, and Navi Mumbai for this clinical distinction.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  'Dadar East',
                  'Bandra',
                  'Andheri',
                  'Thane',
                  'Powai',
                  'Navi Mumbai',
                  'Matunga',
                  'Parel',
                  'Worli',
                ].map((area, idx) => (
                  <span
                    key={idx}
                    className="bg-[#513394]/10 dark:bg-[#8B5CF6]/20 text-[#513394] dark:text-[#A78BFA] font-bold px-5 py-2.5 rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Clinical Pilates at R3BOOT integrates seamlessly with our{' '}
                <Link href="/services/physiotherapy" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline underline-offset-4">
                  physiotherapy
                </Link>
                ,{' '}
                <Link href="/services/sports-massage" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline underline-offset-4">
                  sports massage
                </Link>
                , and{' '}
                <Link href="/physiotherapy-dadar-mumbai" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline underline-offset-4">
                  physiotherapy
                </Link>{' '}
                services. Where your recovery requires more than one modality, you do not need to go to multiple clinics.
              </p>
            </div>

            {/* Right: 2-image stacked grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-xl">
                <Image
                  src="/images/service/Services_image/Clinical Pilates-2.webp"
                  alt="Clinical Pilates at R3BOOT Dadar Mumbai — physiotherapist led"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-xs font-black tracking-tight leading-tight">Physio-Led Pilates</p>
                </div>
              </div>
              <div className="grid grid-rows-2 gap-4">
                <div className="relative rounded-[2rem] overflow-hidden shadow-xl">
                  <Image
                    src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793706/Clinical_Pillates_Image_2_jc05pa.png"
                    alt="Clinical Pilates reformer session at R3BOOT Mumbai"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-xs font-black tracking-tight leading-tight">Reformer</p>
                  </div>
                </div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-xl">
                  <Image
                    src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793697/Clinical_Pillates_Image_3_pil8g7.jpg"
                    alt="Clinical Pilates mat session R3BOOT Dadar"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-xs font-black tracking-tight leading-tight">Mat Session</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR TEAM ─── */}
      <PhysiotherapyTeam />

      {/* ─── DR. HIRAL PARIKH CALLOUT ─── */}
      <section className="py-16 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="bg-gray-50 dark:bg-white/5 rounded-[2.5rem] border border-gray-100 dark:border-white/10 p-10 md:p-12">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              CLINICAL LEAD //
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
              Dr. Hiral Parikh — Lead Physiotherapist
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
              BPT graduate from Pad. Dr. D.Y. Patil College of Physiotherapy, Navi Mumbai, with over 15 years of clinical experience. At R3BOOT, Dr. Hiral leads physiotherapy services with focused expertise in sports rehabilitation and post-surgical recovery — helping athletes return to performance and patients rebuild function. Her clinical Pilates programs are designed around each patient&apos;s assessment findings, not adapted from a class structure.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              Clinical Pilates programs at R3BOOT are also designed by <strong className="text-gray-900 dark:text-white">Dr. Vaishali Vijay Rauniyar</strong>, certified in Dry Needling and Aquatic Rehabilitation with deep experience in sports, orthopedic, and neurological rehabilitation.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection faqs={clinicalPilatesMumbaiFaqs} />

      {/* ─── CTA BANNER ─── */}
      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Book Clinical Pilates in{' '}
              <span className="text-white/50">Mumbai</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              R3BOOT is located at Dadar East, Mumbai. Clinical Pilates sessions available by appointment. Your first session includes a full physiotherapy assessment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+919702368612"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-[#513394] font-black px-10 py-5 rounded-full transition-all hover:scale-105 shadow-2xl text-lg tracking-wide"
              >
                Call to Book
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
            <p className="text-white/40 mt-8 font-bold tracking-widest text-sm">DADAR EAST, MUMBAI — 400 014</p>
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
        serviceName="Clinical Pilates in Mumbai"
        description="Physiotherapist-led clinical Pilates in Mumbai at R3BOOT Dadar. Programs for back pain, scoliosis, post-surgery rehab, posture, and sports performance. Reformer and mat-based sessions available."
        serviceUrl="https://www.r3boot.in/clinical-pilates-mumbai"
      />
      <FAQSchema faqs={clinicalPilatesMumbaiFaqs} />
    </main>
  )
}
