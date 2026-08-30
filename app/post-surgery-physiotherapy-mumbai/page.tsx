import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { postSurgeryPhysiotherapyFaqs } from '@/lib/faqs/post-surgery-physiotherapy-mumbai'

export const metadata: Metadata = {
  title: 'Post-Surgery Physiotherapy Mumbai | Surgical Rehab | R3BOOT Dadar',
  description:
    'Post-surgery physiotherapy in Mumbai at R3BOOT Dadar. ACL reconstruction, knee & hip replacement, spinal surgery & shoulder rehab. Aquatic rehab available. 5.0 ★ Google. WhatsApp to book.',
  alternates: { canonical: '/post-surgery-physiotherapy-mumbai' },
  keywords: [
    'post surgery physiotherapy mumbai',
    'post operative physiotherapy mumbai',
    'post surgery rehab mumbai',
    'ACL reconstruction physiotherapy mumbai',
    'knee replacement physiotherapy mumbai',
    'hip replacement physiotherapy mumbai',
    'post surgery physiotherapy dadar',
    'surgical rehabilitation mumbai',
    'post operative rehab dadar mumbai',
    'spine surgery physiotherapy mumbai',
  ],
}

const surgeryTypes = [
  {
    title: 'ACL reconstruction',
    body: '9–12 month return-to-sport programme. Progressive phasing from early swelling and range-of-motion work through single-leg strength, neuromuscular control, and sport-specific clearance testing. Aquatic rehabilitation available for early-phase low-load work.',
  },
  {
    title: 'Knee replacement (TKR)',
    body: 'Rehabilitation starts the day after surgery. Focus on restoring full extension and flexion, reducing joint swelling, and rebuilding quadriceps strength. Most patients achieve functional independence in 6–12 weeks and full activity in 3–6 months.',
  },
  {
    title: 'Hip replacement (THR)',
    body: 'Early mobilisation is critical. Gait retraining, hip strengthening, and progressive weight-bearing, with careful attention to post-operative precautions specific to the surgical approach. Aquatic rehab used for patients with high pain or weight-bearing restrictions.',
  },
  {
    title: 'Spinal surgery (discectomy, fusion, decompression)',
    body: 'Staged rehabilitation with strict load restrictions in early phases. Manual therapy, breathing rehabilitation, progressive core and lumbar strengthening. Return-to-full-activity timelines depend on the level of surgery and post-operative protocol.',
  },
  {
    title: 'Shoulder surgery (SLAP, rotator cuff repair)',
    body: 'Passive range of motion through sling phase, active rehabilitation after clearance, and progressive strengthening towards sport or overhead function. Dry needling used for scar tissue management and rotator cuff activation.',
  },
  {
    title: 'Abdominal & thoracic surgery',
    body: 'Breathing physiotherapy, early mobilisation, scar tissue management, and core reactivation. Commonly needed after Caesarean delivery, open abdominal procedures, and thoracic surgery, an often-overlooked part of full post-surgical recovery.',
  },
]

const rehabPhases = [
  {
    phase: '01',
    label: 'Phase 1, Protection and healing',
    weeks: 'Weeks 1–6',
    body: 'Swelling management, range-of-motion restoration, scar tissue mobilisation, and early muscle activation within post-operative restrictions. Aquatic rehabilitation used where appropriate for low-load early movement.',
  },
  {
    phase: '02',
    label: 'Phase 2, Strength and function',
    weeks: 'Weeks 6–12',
    body: 'Progressive strengthening, proprioception training, and functional movement retraining. Load is increased systematically, not randomly. Objective strength testing guides phase progression.',
  },
  {
    phase: '03',
    label: 'Phase 3, Return to full activity',
    weeks: '3–12 months',
    body: 'Sport-specific or activity-specific conditioning. Return-to-sport milestone testing for athletes. Return-to-work and daily function benchmarks for others. Clearance is data-driven, not time-based alone.',
  },
]

const whoWeHelp = [
  'Post-ACL reconstruction athletes',
  'Knee and hip replacement recovery',
  'Spinal surgery (discectomy, fusion, decompression)',
  'Shoulder surgery (rotator cuff, SLAP repair)',
  'Post-Caesarean core and pelvic rehab',
  'Patients with delayed or incomplete post-surgical recovery',
]

export default function PostSurgeryPhysiotherapyMumbaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">

      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/service/Services_image/Physiotherapy_1.webp"
          alt="Post-surgery physiotherapy Mumbai, surgical rehabilitation at R3BOOT Dadar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10 pb-20">
          <Link
            href="/physiotherapy-dadar-mumbai"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all mb-8 group"
          >
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#513394] transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="font-bold tracking-wider text-sm">PHYSIOTHERAPY DADAR</span>
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-white/70 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">POST-SURGERY // SURGICAL REHABILITATION // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Post-Surgery Physiotherapy in Mumbai
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              Phased surgical rehabilitation, ACL, knee replacement, hip replacement, spine, and shoulder surgery, at R3BOOT, Dadar East.
            </p>
          </div>
        </div>
      </section>

      {/* ─── INTRO + STICKY SIDEBAR ─── */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-24 items-start">

            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 tracking-tight">
                Surgery fixes the structure.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Physiotherapy restores how you use it.</span>
              </h2>
              <div className="prose prose-base sm:prose-lg md:prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Most patients leave surgery with a discharge summary and a list of exercises printed on a
                  sheet. A few weeks of hospital OPD physiotherapy, 15 minutes each session, mostly machine
                  therapy, and they are expected to be recovered. Many are not. Persistent stiffness, weakness,
                  pain with activity, and poor movement quality years after surgery are all signs that
                  rehabilitation was incomplete.
                </p>
                <p>
                  At R3BOOT in Dadar East, post-surgical physiotherapy is phased, progressive, and built around
                  your specific procedure, surgeon&apos;s protocol, and goals. We work with the operative notes
                  and imaging you bring, assess where you are in the healing timeline, and build a programme
                  from that exact point, whether you are one week post-surgery or one year.
                </p>
                <p>
                  Dr. Hiral Parikh (BPT, 15+ years) and Dr. Vaishali Vijay Rauniyar (BPT, 4+ years, certified in Dry Needling
                  and Aquatic Rehabilitation) lead the physiotherapy team. Aquatic rehabilitation, available
                  on-site at R3BOOT, is particularly effective for post-surgical patients who need low-load
                  early movement before full weight-bearing is safe. No referral needed. First session 60 minutes.
                </p>
              </div>

              <div className="mt-10 sm:mt-14 md:mt-20">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 md:mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  SURGERIES WE REHABILITATE
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {surgeryTypes.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-white/5 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden"
                    >
                      <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 dark:text-white/5 group-hover:text-[#513394]/5 transition-colors">
                        {idx + 1}
                      </div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-6 group-hover:bg-[#513394] dark:group-hover:bg-[#8B5CF6] group-hover:text-white transition-all text-sm">
                          0{idx + 1}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{item.title}</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-[#1A1A1A] p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#513394]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-black mb-8 tracking-wide flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#513394]" />
                  WHO WE HELP //
                </h3>
                <ul className="space-y-5 mb-10">
                  {whoWeHelp.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 group/item">
                      <div className="w-6 h-6 rounded-full bg-[#513394] flex items-center justify-center shrink-0 mt-1 group-hover/item:scale-110 transition-transform">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/80 font-medium leading-snug group-hover/item:text-white transition-colors text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/919702368612"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="block text-center bg-[#25D366] text-white font-black px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-lg mb-3"
                >
                  WhatsApp to Book
                </a>
                <a
                  href="tel:+919702368612"
                  className="block text-center bg-[#513394] text-white font-black px-8 py-4 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-base group-hover:bg-[#603eb0]"
                >
                  Call +91 97023 68612
                </a>
                <p className="text-white/30 text-xs text-center mt-4 font-medium">No referral needed. Bring your surgical notes.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 3-PHASE REHAB STRUCTURE ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 sm:mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                HOW IT WORKS //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 sm:mb-6 leading-tight">
                Post-Surgical Rehabilitation{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">in Three Phases</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Surgical recovery follows a biological timeline, tissue heals in phases, and rehabilitation
                must match that timeline. Doing too much too early risks re-injury. Doing too little leaves
                permanent deficits. The phasing below applies to most orthopaedic procedures with variation
                based on specific surgical protocols.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {rehabPhases.map((item) => (
                <div
                  key={item.phase}
                  className="bg-white dark:bg-white/5 p-6 sm:p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 dark:text-white/5 group-hover:text-[#513394]/5 transition-colors">
                    {item.phase}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-3 group-hover:bg-[#513394] group-hover:text-white transition-all text-sm">
                      {item.phase}
                    </div>
                    <span className="text-[10px] font-black tracking-[0.2em] text-[#513394] dark:text-[#A78BFA] uppercase mb-2 block">{item.weeks}</span>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{item.label}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── AQUATIC REHAB DIFFERENTIATOR ─── */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">

            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="/images/Services_image/Physiotherapy.webp"
                alt="Post-surgery physiotherapy assessment at R3BOOT Dadar Mumbai, aquatic rehabilitation available"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  PHASED REHABILITATION //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  Right load. Right time. Right outcome.
                </p>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                WHAT SETS US APART //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Why most post-surgical rehab{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">produces incomplete recovery</span>
              </h2>
              <div className="prose prose-base sm:prose-lg text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-4 mb-8">
                <p>
                  Hospital OPD physiotherapy after surgery is typically 15–20 minutes per session, two to three
                  times per week, for six weeks. That window is sufficient for basic wound healing and early range
                  of motion, it is not sufficient for full strength, movement quality, or sport or activity
                  readiness. Patients are discharged &quot;recovered&quot; with 60–70% of their pre-surgery function
                  and told to continue on their own.
                </p>
                <p>
                  At R3BOOT, post-surgical rehabilitation is 45–60 minutes per session, phased correctly, and
                  progressed based on objective testing, not a calendar. Aquatic rehabilitation is available
                  on-site for patients who need to move and load early but cannot tolerate full weight-bearing.
                  Water reduces joint compression by up to 75%, allowing full-range movement and early strength
                  work weeks before land-based loading is appropriate.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Aquatic rehabilitation on-site', detail: 'Early-phase post-surgical loading in water, available at R3BOOT Dadar, rare in Mumbai' },
                  { label: 'Dry needling for scar tissue', detail: 'Available at R3BOOT, effective for post-surgical scar adhesions and myofascial tightness around surgical sites' },
                  { label: 'Objective phase-progression testing', detail: 'Strength and movement benchmarks at each phase, clearance based on data, not weeks elapsed' },
                  { label: 'Coordination with surgical team', detail: 'We work within your surgeon\'s protocol and communicate with your specialist if clinical concerns arise' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black shrink-0 text-xs group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
                      ✓
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white text-sm">{item.label}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── PRICING TRANSPARENCY ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 sm:mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                WHAT TO EXPECT //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 sm:mb-6 leading-tight">
                How much does post-surgery physiotherapy{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">cost in Mumbai?</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Post-surgical physiotherapy in Mumbai ranges from ₹400 at hospital OPDs to ₹3,000+ at
                specialist clinics. The critical difference is session duration, hands-on clinical time,
                and whether the programme is genuinely phased and progressive.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 dark:border-white/5">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#513394]">
                    <th className="px-4 sm:px-6 py-4 sm:py-5 text-white font-black text-xs sm:text-sm tracking-wider uppercase">Setting</th>
                    <th className="px-4 sm:px-6 py-4 sm:py-5 text-white font-black text-xs sm:text-sm tracking-wider uppercase">Session time</th>
                    <th className="px-4 sm:px-6 py-4 sm:py-5 text-white font-black text-xs sm:text-sm tracking-wider uppercase">Post-surgical capability</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Hospital OPD', '15–20 min', 'Basic exercise sheet, machine therapy, limited phasing'],
                    ['Home physiotherapy', '30–45 min', 'Convenient but no aquatic rehab or objective load testing'],
                    ['Generic physio clinic', '30–45 min', 'Standard protocol, not always matched to surgical procedure'],
                    ['R3BOOT Dadar', '45–60 min', 'Phased rehab + aquatic rehab + dry needling + objective milestone testing'],
                  ].map(([setting, time, capability], idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white dark:bg-white/5' : 'bg-[#F8F9FA] dark:bg-white/[0.02]'}
                    >
                      <td className={`px-4 sm:px-6 py-3 sm:py-4 font-bold text-xs sm:text-sm ${idx === 3 ? 'text-[#513394] dark:text-[#A78BFA]' : 'text-gray-900 dark:text-white'}`}>{setting}</td>
                      <td className={`px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm ${idx === 3 ? 'text-[#513394] dark:text-[#A78BFA] font-medium' : 'text-gray-500 dark:text-gray-400'}`}>{time}</td>
                      <td className={`px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm ${idx === 3 ? 'text-[#513394] dark:text-[#A78BFA] font-medium' : 'text-gray-500 dark:text-gray-400'}`}>{capability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-sm mt-6 leading-relaxed">
              For current session fees at R3BOOT, call or WhatsApp{' '}
              <a href="tel:+919702368612" className="font-bold text-[#513394] dark:text-[#A78BFA]">+91 97023 68612</a>.
              Clear number, no hidden charges.
            </p>
          </div>
        </div>
      </section>

      {/* ─── DADAR LOCAL + ADDRESS ─── */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                DADAR, MUMBAI //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Post-Surgery Rehabilitation{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">in Central Mumbai</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-6">
                R3BOOT is in Dadar East, accessible from all of central and south Mumbai by train or road.
                Patients recovering from surgery travel from Lower Parel, Worli, Bandra, Sion, Matunga, and
                BKC. Most reach us within 15–20 minutes. We see a limited number of patients per day, your
                60-minute session is never rushed.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
                Aquatic rehabilitation is available at R3BOOT, rare in Mumbai outside hospital settings. For
                post-surgical patients who need low-load early movement, this can significantly accelerate the
                Phase 1 timeline without risking the surgical site.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {['Dadar', 'Lower Parel', 'Worli', 'Bandra', 'Sion', 'Matunga', 'Parel', 'BKC', 'Shivaji Park', 'Wadala'].map((area, idx) => (
                  <span
                    key={idx}
                    className="bg-[#513394]/10 dark:bg-[#8B5CF6]/20 text-[#513394] dark:text-[#A78BFA] font-bold px-4 py-2 rounded-full text-sm"
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
                  <span>5 min from Dadar railway station (East exit) · Near Shivaji Park</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#513394] dark:text-[#A78BFA] font-black shrink-0 mt-0.5">↗</span>
                  <span>Mon–Sat: 8:00 AM – 9:00 PM &nbsp;|&nbsp; Sun: 2:00 PM – 9:00 PM</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#513394] dark:text-[#A78BFA] font-black shrink-0 mt-0.5">↗</span>
                  <span>
                    Book:{' '}
                    <a href="tel:+919702368612" className="font-bold text-[#513394] dark:text-[#A78BFA]">+91 97023 68612</a>
                    {' '}(Call or WhatsApp)
                  </span>
                </div>
              </div>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="/images/service/Services_image/Physiotherapy_1.webp"
                alt="R3BOOT post-surgery physiotherapy clinic Dadar East Mumbai"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  DADAR EAST, MUMBAI //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  Aquatic rehab available. No referral needed.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── INTEGRATED RECOVERY ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 sm:mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                ONE ROOF //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 sm:mb-6 leading-tight">
                Combine Post-Surgical Physio with{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Recovery Tools on the Same Visit</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Post-surgical recovery accelerates when multiple modalities are coordinated. At R3BOOT, your
                physiotherapist can integrate other treatments into the same visit once you are in Phase 2 or 3.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  title: 'Contrast Therapy',
                  desc: 'Ice bath and infrared sauna protocol for reducing post-surgical joint swelling and accelerating tissue repair in Phase 2 and 3 recovery. Particularly effective for knee and hip replacements.',
                  href: '/contrast-therapy-mumbai',
                },
                {
                  title: 'Clinical Pilates',
                  desc: 'Supervised reformer Pilates designed specifically for post-surgical patients, not a generic class. Core stability, proprioception, and movement retraining. Appropriate from Phase 2 for spinal, hip, and knee surgery.',
                  href: '/post-surgery-pilates-mumbai',
                },
                {
                  title: 'Sports Injury Physiotherapy',
                  desc: 'ACL reconstruction and shoulder surgery rehabilitation that includes full return-to-sport programming, milestone testing, sport-specific loading, and clearance criteria for athletes.',
                  href: '/sports-injury-physiotherapy-dadar-mumbai',
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group bg-white dark:bg-white/5 p-6 sm:p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-5 sm:mb-6 group-hover:bg-[#513394] group-hover:text-white transition-all text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  <div className="mt-5 sm:mt-6 flex items-center gap-2 text-[#513394] dark:text-[#A78BFA] font-black text-xs tracking-widest uppercase">
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

      {/* ─── RELATED LINKS ─── */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <p className="text-xs font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-5 sm:mb-6">
            ALSO AT R3BOOT //
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {[
              { label: 'Physiotherapy Dadar Mumbai', href: '/physiotherapy-dadar-mumbai' },
              { label: 'Physiotherapy for Knee Pain', href: '/physiotherapy-for-knee-pain-mumbai' },
              { label: 'Sports Injury Physiotherapy Dadar', href: '/sports-injury-physiotherapy-dadar-mumbai' },
              { label: 'Post-Surgery Clinical Pilates', href: '/post-surgery-pilates-mumbai' },
              { label: 'Contrast Therapy Mumbai', href: '/contrast-therapy-mumbai' },
              { label: 'Physiotherapy for Back Pain', href: '/physiotherapy-for-back-pain-mumbai' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm hover:bg-[#513394] hover:text-white hover:border-transparent transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection faqs={postSurgeryPhysiotherapyFaqs} />

      {/* ─── CTA BANNER ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tight leading-tight">
              Surgery done.{' '}
              <span className="text-white/50">Now recover properly.</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 mb-4 leading-relaxed font-medium max-w-3xl mx-auto">
              Post-surgical physiotherapy at R3BOOT, Dadar East. Phased rehabilitation, aquatic rehab on-site,
              and dry needling. Dr. Hiral Parikh and Dr. Vaishali Rauniyar. No referral needed.
            </p>
            <p className="text-white/40 mb-8 sm:mb-12 text-sm font-bold tracking-widest">
              203, Palai Plaza, Dadar East, Mumbai 400014, 5 min from Dadar station
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="https://wa.me/919702368612"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] text-white font-black px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all hover:scale-105 shadow-2xl text-base sm:text-lg tracking-wide"
              >
                WhatsApp to Book
              </a>
              <a
                href="tel:+919702368612"
                className="w-full sm:w-auto bg-white text-[#513394] font-black px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all hover:scale-105 shadow-2xl text-base sm:text-lg tracking-wide"
              >
                Call +91 97023 68612
              </a>
            </div>
          </div>
        </div>
      </section>

      <ServiceSchema
        serviceName="Post-Surgery Physiotherapy in Mumbai"
        description="Post-surgery physiotherapy in Mumbai at R3BOOT, Dadar East. ACL reconstruction, knee replacement, hip replacement, spinal surgery, and shoulder surgery rehabilitation. Phased rehabilitation with aquatic rehab on-site. Led by Dr. Hiral Parikh (BPT, 15+ years) and Dr. Vaishali Vijay Rauniyar (4+ years)."
        serviceUrl="https://www.r3boot.in/post-surgery-physiotherapy-mumbai"
      />
      <FAQSchema faqs={postSurgeryPhysiotherapyFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Physiotherapy Dadar Mumbai', url: '/physiotherapy-dadar-mumbai' },
        { name: 'Post-Surgery Physiotherapy Mumbai', url: '/post-surgery-physiotherapy-mumbai' },
      ]} />
    </main>
  )
}
