import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { services } from '@/lib/services'
import PhysiotherapyTeam from '@/components/PhysiotherapyTeam'
import PhysiotherapyFAQ from '@/components/PhysiotherapyFAQ'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { physiotherapyFaqs } from '@/lib/faqs/physiotherapy'

export const metadata: Metadata = {
  title: 'Physiotherapy Dadar Mumbai | Dr. Hiral Parikh | R3BOOT',
  description:
    'Clinical physiotherapy in Dadar by Dr. Hiral Parikh (15+ yrs). Back pain, knee pain, sports injuries & post-surgery rehab. No referral needed. 5.0 ★ Google. Call or WhatsApp.',
  alternates: { canonical: '/physiotherapy-dadar-mumbai' },
  keywords: [
    'physiotherapy dadar',
    'physiotherapy dadar mumbai',
    'physiotherapist dadar mumbai',
    'physiotherapy clinic dadar',
    'back pain physiotherapy dadar',
    'sports physiotherapy dadar',
    'knee pain treatment dadar',
    'physiotherapy near dadar station',
  ],
}

const otherServices = services.filter((s) => s.slug !== 'physiotherapy').slice(0, 4)

const whyItWorks = [
  {
    title: 'Assessment before treatment',
    description:
      'Every case starts with a full clinical assessment | movement, strength, load tolerance, and history. We do not skip to treatment before understanding what is actually failing and why.',
  },
  {
    title: 'Manual therapy + hands-on techniques',
    description:
      'Joint mobilisation, soft tissue techniques, dry needling, and trigger point release | applied to the structure that is limiting your function, not just the area that hurts.',
  },
  {
    title: 'Progressive exercise prescription',
    description:
      'Home exercises and progressive loading plans, built to your schedule and goals. Recovery does not happen only in the clinic | 80% of progress happens between sessions.',
  },
  {
    title: 'Integrated recovery environment',
    description:
      'Contrast therapy, sports massage, and clinical Pilates available in the same building. Your physiotherapist can coordinate a session that combines modalities for faster results.',
  },
]

const sessionSteps = [
  {
    title: 'Detailed intake assessment',
    body: 'Your physiotherapist takes a full history | onset, mechanism, aggravating factors, and your specific goals. We review any imaging or surgical notes you bring.',
  },
  {
    title: 'Movement and load testing',
    body: 'We assess your movement quality, strength, range of motion, and any compensatory patterns that may be driving the problem.',
  },
  {
    title: 'Hands-on treatment',
    body: 'Manual therapy, soft tissue work, dry needling, or joint mobilisation | applied to the structures identified in the assessment, not a generic protocol.',
  },
  {
    title: 'Your take-home plan',
    body: 'You leave with a specific exercise plan and clear milestones. We tell you what to expect in the next 48–72 hours and what your realistic recovery timeline looks like.',
  },
]

export default function PhysioDadarLanding() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">

      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/service/Services_image/Physiotherapy_1.webp"
          alt="Physiotherapy Dadar Mumbai, Clinical Physiotherapy at R3BOOT"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">CLINICAL PHYSIOTHERAPY // DADAR, MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Physiotherapy in Dadar, Mumbai
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              Clinical physiotherapy by Dr. Hiral Parikh &amp; Dr. Vaishali Rauniyar. Focused on fixing the cause, not just managing the pain.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OPENING: 12-col grid with sticky sidebar ─── */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-24 items-start">

            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 tracking-tight">
                Most physiotherapy treats the symptom.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">We treat the system.</span>
              </h2>
              <div className="prose prose-base sm:prose-lg md:prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  R3BOOT is located in Dadar East, Mumbai, 5 minutes from Dadar railway station. Our physiotherapy
                  team is led by Dr. Hiral Parikh (BPT, D.Y. Patil College, 15+ years clinical experience) and
                  Dr. Vaishali Vijay Rauniyar (certified in Dry Needling and Aquatic Rehabilitation). Every session
                  begins with a full clinical assessment. We find the structure that is failing and build a progressive
                  plan to fix it.
                </p>
                <p>
                  Unlike high-volume hospital outpatient departments, at R3BOOT your session is structured around
                  your specific presentation, with the time and attention the case actually requires. No assembly line.
                  No generic protocol applied to everyone with the same diagnosis.
                </p>
              </div>

              <div className="mt-10 sm:mt-14 md:mt-20">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 md:mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  WHY OUR APPROACH WORKS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {whyItWorks.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-white/5 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden"
                    >
                      <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 dark:text-white/5 group-hover:text-[#513394]/5 transition-colors">
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
                    'Chronic back & neck pain',
                    'Knee pain & joint injuries',
                    'Sports injury rehabilitation',
                    'Post-surgery recovery (ACL, hip, spine)',
                    'Neurological rehab (stroke, Parkinson\'s)',
                    'Postural pain from desk work',
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
                  className="block text-center border border-white/20 text-white/80 font-bold px-8 py-4 rounded-2xl transition-all hover:bg-white/10 text-base"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CONDITIONS WE TREAT ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                WHAT WE TREAT //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Conditions We Treat at Our{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Dadar Physiotherapy Clinic</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Our team treats both acute injuries and long-standing chronic conditions. If you are unsure whether
                physiotherapy is right for your situation, call us, we will tell you honestly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  condition: 'Back & Neck Pain',
                  note: 'Disc herniations, facet joint pain, muscle spasm, postural strain, cervical radiculopathy',
                },
                {
                  condition: 'Knee & Joint Pain',
                  note: 'Meniscus tears, ligament sprains, patellofemoral syndrome, osteoarthritis, ITB syndrome',
                },
                {
                  condition: 'Sports Injuries',
                  note: 'Ankle sprains, hamstring & calf tears, rotator cuff, shoulder impingement, groin strain',
                },
                {
                  condition: 'Post-Surgery Rehab',
                  note: 'ACL reconstruction, hip & knee replacement, SLAP repair, spinal surgery recovery',
                },
                {
                  condition: 'Neurological Rehab',
                  note: 'Stroke recovery, Parkinson\'s disease, peripheral nerve injury, foot drop, MS management',
                },
                {
                  condition: 'Postural & Desk Pain',
                  note: 'Chronic neck pain, upper back stiffness, wrist & forearm pain, headaches from screen use',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-white/5 p-6 sm:p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 dark:text-white/5 group-hover:text-[#513394]/5 transition-colors">
                    {i + 1}
                  </div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-5 group-hover:bg-[#513394] group-hover:text-white transition-all">
                      0{i + 1}
                    </div>
                    <p className="font-black text-gray-900 dark:text-white mb-2 text-lg">{item.condition}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT TO EXPECT ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                YOUR FIRST VISIT //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                What Happens at Your{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">First Session</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                A first session at R3BOOT is 60 minutes. No referral required. Bring any imaging (X-ray, MRI) or
                surgical discharge summaries you have. Wear or bring clothing that allows movement assessment.
              </p>
              <div className="space-y-6">
                {sessionSteps.map((item, idx) => (
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
                src="/images/Services_image/Physiotherapy.webp"
                alt="Physiotherapy session at R3BOOT Dadar Mumbai, clinical assessment and hands-on treatment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  CLINICAL ASSESSMENT //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  We find what is failing, not just where it hurts.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── R3BOOT vs HOSPITAL COMPARISON ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                THE DIFFERENCE //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                R3BOOT vs{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Hospital Physiotherapy</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Hospital outpatient departments are built for volume. R3BOOT is built for results.
                Here is what the difference looks like in practice.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 dark:border-white/5">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#513394]">
                    <th className="px-6 py-5 text-white font-black text-sm tracking-wider uppercase">Factor</th>
                    <th className="px-6 py-5 text-white font-black text-sm tracking-wider uppercase">Hospital OPD</th>
                    <th className="px-6 py-5 text-white font-black text-sm tracking-wider uppercase">R3BOOT Dadar</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Session time', '15–20 minutes average', '45–60 minutes per session'],
                    ['Assessment depth', 'Diagnosis-driven, limited testing', 'Full movement, strength & load assessment'],
                    ['Treatment approach', 'High-volume, standardised protocol', 'Case-specific, built around your presentation'],
                    ['Hands-on time', 'Often machine-dependent (TENS, ultrasound)', 'Manual therapy, dry needling, mobilisation'],
                    ['Dry needling', 'Rarely available', 'Available, Dr. Vaishali certified'],
                    ['Aquatic rehab', 'Rarely available in Mumbai', 'Available on-site'],
                    ['Recovery integration', 'Physio only', 'Contrast therapy, massage & Pilates same visit'],
                    ['Referral needed', 'Usually yes', 'No, book directly by call or WhatsApp'],
                  ].map(([factor, hospital, r3boot], idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white dark:bg-white/5' : 'bg-[#F8F9FA] dark:bg-white/[0.02]'}
                    >
                      <td className="px-6 py-4 font-bold text-gray-900 dark:text-white text-sm">{factor}</td>
                      <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">{hospital}</td>
                      <td className="px-6 py-4 text-[#513394] dark:text-[#A78BFA] font-medium text-sm">{r3boot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MUMBAI LOCAL SECTION ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="/images/service/Services_image/Physiotherapy_1.webp"
                alt="R3BOOT physiotherapy clinic, Dadar East Mumbai near Shivaji Park"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  DADAR EAST, MUMBAI //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  5 minutes from Dadar station. No referral needed.
                </p>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                DADAR, MUMBAI //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Serving Patients from Dadar,{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Worli, Lower Parel & Beyond</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
                Patients travel from Matunga, Sion, Bandra, Lower Parel, and BKC for the clinical team and
                integrated recovery environment at R3BOOT. Our location in Dadar East puts us within 15–20
                minutes of most central and south Mumbai neighbourhoods by road or train.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {['Dadar', 'Matunga', 'Sion', 'Worli', 'Lower Parel', 'Bandra', 'Parel', 'Shivaji Park', 'Wadala'].map((area, idx) => (
                  <span
                    key={idx}
                    className="bg-[#513394]/10 dark:bg-[#8B5CF6]/20 text-[#513394] dark:text-[#A78BFA] font-bold px-5 py-2.5 rounded-full text-sm"
                  >
                    {area}
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
                  <span>5 min from Dadar railway station (East exit) · Walking distance from Shivaji Park</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#513394] dark:text-[#A78BFA] font-black shrink-0 mt-0.5">↗</span>
                  <span>Mon–Tue–Thu–Fri–Sat: 8:00 AM – 9:00 PM &nbsp;|&nbsp; Wed: 8:00 AM – 4:00 PM &nbsp;|&nbsp; Sun: 2:00 PM – 9:00 PM</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#513394] dark:text-[#A78BFA] font-black shrink-0 mt-0.5">↗</span>
                  <span>Book by call or WhatsApp: <a href="tel:+919702368612" className="font-bold text-[#513394] dark:text-[#A78BFA]">+91 97023 68612</a></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── INTEGRATED RECOVERY ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                ONE ROOF //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Physiotherapy Is Only{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">One Part of Recovery</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                The fastest recoveries combine multiple modalities in a coordinated plan. At R3BOOT, your
                physiotherapist can combine your treatment session with other recovery tools, on the same visit.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: 'Contrast Therapy',
                  desc: 'Ice bath and infrared sauna in a clinically structured 3:1 protocol | reduces inflammation and accelerates muscle recovery after your physio session.',
                  href: '/contrast-therapy-mumbai',
                },
                {
                  title: 'Sports Massage',
                  desc: 'Deep tissue and sports massage to address fascial restriction, myofascial trigger points, and muscle tension that limits your rehabilitation progress.',
                  href: '/services/sports-massage',
                },
                {
                  title: 'Clinical Pilates',
                  desc: 'Supervised Pilates designed around your injury and movement deficits, not a generic class. Ideal for spinal conditions, post-surgery, and chronic pain.',
                  href: '/services/clinical-pilates',
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-6 group-hover:bg-[#513394] group-hover:text-white transition-all">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-[#513394] dark:text-[#A78BFA] font-black text-xs tracking-widest uppercase">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <PhysiotherapyTeam />

      {/* ─── FAQ ─── */}
      <PhysiotherapyFAQ />

      {/* ─── CTA BANNER ─── */}
      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Book Physiotherapy in{' '}
              <span className="text-white/50">Dadar, Mumbai</span>
            </h2>
            <p className="text-xl text-white/70 mb-4 leading-relaxed font-medium max-w-3xl mx-auto">
              No referral required. Call or WhatsApp to book your initial assessment with Dr. Hiral Parikh
              or Dr. Vaishali Rauniyar. We will tell you honestly what your recovery looks like.
            </p>
            <p className="text-white/40 mb-12 text-sm font-bold tracking-widest">
              203, Palai Plaza, Dadar East, Mumbai 400014, 5 min from Dadar station
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+919702368612"
                className="w-full sm:w-auto bg-white text-[#513394] font-black px-10 py-5 rounded-full transition-all hover:scale-105 shadow-2xl text-lg tracking-wide"
              >
                Call +91 97023 68612
              </a>
              <a
                href="https://wa.me/919702368612"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-full sm:w-auto border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full transition-all hover:bg-white/10 text-lg tracking-wide"
              >
                WhatsApp Our Team
              </a>
            </div>
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
        serviceName="Physiotherapy in Dadar, Mumbai"
        description="Clinical physiotherapy in Dadar, Mumbai by Dr. Hiral Parikh (15+ years, BPT) and Dr. Vaishali Vijay Rauniyar. Back pain, knee pain, sports injuries, post-surgery rehab at R3BOOT Integrated Recovery Centre, Dadar East."
        serviceUrl="https://www.r3boot.in/physiotherapy-dadar-mumbai"
      />
      <FAQSchema faqs={physiotherapyFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Physiotherapy Dadar', url: '/physiotherapy-dadar-mumbai' },
      ]} />
    </main>
  )
}
