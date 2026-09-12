import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { kneePainPhysiotherapyFaqs } from '@/lib/faqs/physiotherapy-knee-pain-mumbai'

export const metadata: Metadata = {
  title: 'Physiotherapy for Knee Pain Mumbai | Clinical Knee Rehab | R3BOOT',
  description:
    'Clinical physiotherapy for knee pain in Mumbai at R3BOOT Dadar. Runner\'s knee, osteoarthritis, meniscus, ACL rehab & post-surgery recovery. 5.0 ★ Google. WhatsApp to book.',
  alternates: { canonical: '/physiotherapy-for-knee-pain-mumbai' },
  keywords: [
    'physiotherapy for knee pain mumbai',
    'knee pain physiotherapy mumbai',
    'knee physiotherapy dadar',
    'knee pain treatment mumbai',
    'runner\'s knee physiotherapy mumbai',
    'knee osteoarthritis physiotherapy mumbai',
    'ACL rehab mumbai',
    'meniscus physiotherapy mumbai',
    'patellofemoral syndrome physiotherapy mumbai',
    'knee pain clinic dadar mumbai',
  ],
}

const kneePainCauses = [
  {
    title: 'Patellofemoral syndrome (runner\'s knee)',
    body: 'Pain behind or around the kneecap | common in runners, cyclists, and gym athletes. Caused by patellar tracking issues, weak VMO, or tight ITB. Responds well to physiotherapy without surgery in the majority of cases.',
  },
  {
    title: 'Meniscus tears',
    body: 'Acute tears from rotational injuries and degenerative tears in adults over 35. Clinical physiotherapy produces equivalent outcomes to surgery for many meniscus presentations | particularly in older, less active patients.',
  },
  {
    title: 'Knee osteoarthritis',
    body: 'Age-related cartilage breakdown causing pain, stiffness, and reduced function. Progressive strengthening, manual therapy, and movement retraining significantly reduce pain and delay or avoid surgical intervention.',
  },
  {
    title: 'ITB syndrome',
    body: 'Lateral knee pain in runners from iliotibial band friction over the lateral femoral condyle. Load management, hip strengthening, and gait retraining resolve this without stopping running in most cases.',
  },
  {
    title: 'Patellar tendinopathy',
    body: 'Pain at the patellar tendon below the kneecap | common in jumpers, basketball players, and high-load gym athletes. Heavy slow resistance loading protocols are the most effective evidence-based treatment.',
  },
  {
    title: 'Post-surgery knee rehab',
    body: 'ACL reconstruction, knee replacement, meniscectomy, or MPFL repair. Progressive phased rehabilitation from week 1, strength, range of motion, proprioception, and sport-specific return-to-activity milestones.',
  },
]

const sessionSteps = [
  {
    step: '01',
    label: 'Full knee assessment',
    body: 'Your physiotherapist assesses joint range of motion, strength, patellar tracking, ligament stability, and load tolerance. We review any imaging (MRI, X-ray) or surgical reports you bring. The assessment identifies the exact structure driving your pain.',
  },
  {
    step: '02',
    label: 'Targeted hands-on treatment',
    body: 'Manual therapy, joint mobilisation, soft tissue release, and dry needling, applied to the specific structure identified. Not a standard knee protocol applied to everyone with the same diagnosis.',
  },
  {
    step: '03',
    label: 'Your rehabilitation plan',
    body: 'You leave with a progressive exercise programme, clear load guidelines, and specific milestones. Your physiotherapist will tell you what your realistic recovery timeline looks like, not a vague estimate.',
  },
]

const whoWeHelp = [
  'Runners with runner\'s knee or ITB syndrome',
  'Gym athletes with patellar tendinopathy',
  'Adults with knee osteoarthritis',
  'Post-ACL reconstruction rehabilitation',
  'Post-knee replacement recovery',
  'Cricket and football players with ligament injuries',
]

export default function PhysiotherapyKneePainMumbaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">

      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/service/Services_image/Physiotherapy_1.webp"
          alt="Physiotherapy for knee pain Mumbai, clinical knee rehabilitation at R3BOOT Dadar"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">KNEE PAIN // CLINICAL PHYSIOTHERAPY // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Physiotherapy for Knee Pain in Mumbai
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              Clinical assessment, manual therapy, and progressive rehabilitation for knee pain, at R3BOOT, Dadar East.
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
                Knee pain is not a diagnosis.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">It is a symptom with a cause we can find.</span>
              </h2>
              <div className="prose prose-base sm:prose-lg md:prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  The knee is one of the most commonly injured joints in Mumbai, among runners at Shivaji
                  Park, gym athletes in Lower Parel, and desk workers whose hips have stopped working and whose
                  knees are carrying the load. Most people who come to us have already tried rest, a brace, or
                  a cortisone injection. The pain came back because the cause was never addressed.
                </p>
                <p>
                  At R3BOOT in Dadar East, clinical physiotherapy for knee pain starts with a full structural
                  assessment, joint range of motion, patella tracking, ligament stability testing, muscle
                  strength, and movement quality under load. We identify whether the pain is coming from the
                  joint, the tendon, the meniscus, or a movement pattern overloading the knee from above or
                  below. Then we treat it directly.
                </p>
                <p>
                  Dr. Hiral Parikh (BPT, 15+ years) and Dr. Vaishali Vijay Rauniyar (BPT, 4+ years, certified in Dry Needling
                  and Aquatic Rehabilitation) lead the physiotherapy team. No referral needed. First session
                  is 60 minutes.
                </p>
              </div>

              <div className="mt-10 sm:mt-14 md:mt-20">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 md:mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  KNEE CONDITIONS WE TREAT
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {kneePainCauses.map((item, idx) => (
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
                <p className="text-white/30 text-xs text-center mt-4 font-medium">No referral needed. 5 min from Dadar station.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── WHAT TO EXPECT ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 sm:mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                YOUR SESSION //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 sm:mb-6 leading-tight">
                What Happens at Your{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">First Appointment</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                First session is 60 minutes. Wear or bring clothing that allows knee movement assessment, shorts work best. Bring any imaging (X-ray, MRI) or specialist reports if you have them.
                No referral required.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {sessionSteps.map((item) => (
                <div
                  key={item.step}
                  className="bg-white dark:bg-white/5 p-6 sm:p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 dark:text-white/5 group-hover:text-[#513394]/5 transition-colors">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-6 group-hover:bg-[#513394] group-hover:text-white transition-all text-sm">
                      {item.step}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.label}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHYSIO vs INJECTION / SURGERY ─── */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">

            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="/images/Services_image/Physiotherapy.webp"
                alt="Clinical knee physiotherapy assessment at R3BOOT Dadar Mumbai"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  CLINICAL ASSESSMENT //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  We assess the knee. We find the cause.
                </p>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                THE DIFFERENCE //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Why injections and braces{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">keep knee pain coming back</span>
              </h2>
              <div className="prose prose-base sm:prose-lg text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-4 mb-8">
                <p>
                  Cortisone injections reduce inflammation, they do not change the movement pattern loading the
                  knee, strengthen the muscles stabilising it, or address the patellar tracking issue causing
                  pain under the kneecap. Six weeks later, the same forces are acting on the same structure, and
                  the pain returns. A knee brace does not fix a weak VMO. It compensates for it.
                </p>
                <p>
                  Clinical physiotherapy targets the cause: hip abductors that have stopped firing and are
                  pushing the patella laterally, a tight ITB pulling the knee into valgus, or a quad that lost
                  40% of its strength after meniscus surgery and is still being asked to do the same job it
                  used to. Fix the cause, and the pain resolves durably.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Manual therapy & mobilisation', detail: 'Patellofemoral mobilisation, tibiofemoral joint work, and soft tissue release for restricted knee movement' },
                  { label: 'Dry needling', detail: 'Available at R3BOOT, effective for quadriceps, hamstring, and IT band trigger points contributing to knee pain' },
                  { label: 'Heavy slow resistance loading', detail: 'Evidence-based loading protocols for patellar and quadriceps tendinopathy, the most effective non-surgical treatment' },
                  { label: 'Aquatic rehabilitation', detail: 'Low-load movement training in water for post-surgical knees and osteoarthritis, available on-site at R3BOOT' },
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
                How much does physiotherapy for{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">knee pain cost in Mumbai?</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Knee physiotherapy in Mumbai ranges from ₹400 at hospital OPDs to ₹3,000+ at specialist
                clinics. Session length and hands-on clinical time are what determine outcomes, not the
                number of sessions booked.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 dark:border-white/5">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#513394]">
                    <th className="px-4 sm:px-6 py-4 sm:py-5 text-white font-black text-xs sm:text-sm tracking-wider uppercase">Setting</th>
                    <th className="px-4 sm:px-6 py-4 sm:py-5 text-white font-black text-xs sm:text-sm tracking-wider uppercase">Session time</th>
                    <th className="px-4 sm:px-6 py-4 sm:py-5 text-white font-black text-xs sm:text-sm tracking-wider uppercase">What you get</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Hospital OPD', '15–20 min', 'Ultrasound/TENS machine, minimal hands-on, no load assessment'],
                    ['Home physiotherapy', '30–45 min', 'Convenient but limited assessment and equipment'],
                    ['Generic physio clinic', '30–45 min', 'Standard protocol, rarely condition- or sport-specific'],
                    ['R3BOOT Dadar', '45–60 min', 'Full assessment + manual therapy + dry needling + progressive rehab plan'],
                  ].map(([setting, time, whatYouGet], idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white dark:bg-white/5' : 'bg-[#F8F9FA] dark:bg-white/[0.02]'}
                    >
                      <td className={`px-4 sm:px-6 py-3 sm:py-4 font-bold text-xs sm:text-sm ${idx === 3 ? 'text-[#513394] dark:text-[#A78BFA]' : 'text-gray-900 dark:text-white'}`}>{setting}</td>
                      <td className={`px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm ${idx === 3 ? 'text-[#513394] dark:text-[#A78BFA] font-medium' : 'text-gray-500 dark:text-gray-400'}`}>{time}</td>
                      <td className={`px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm ${idx === 3 ? 'text-[#513394] dark:text-[#A78BFA] font-medium' : 'text-gray-500 dark:text-gray-400'}`}>{whatYouGet}</td>
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
                Knee Pain Physiotherapy{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">in Central Mumbai</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-6">
                R3BOOT is in Dadar East, accessible from all of central and south Mumbai. Runners from Shivaji
                Park are 10 minutes on foot. Patients with knee pain travel from Lower Parel, Worli, Bandra,
                Sion, and Matunga, most reaching us in 15–20 minutes by train or road.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
                We see a limited number of patients per day. Your 60-minute session is your session, a full
                clinical assessment and treatment, not a 15-minute machine appointment at a high-volume OPD.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {['Dadar', 'Shivaji Park', 'Lower Parel', 'Worli', 'Bandra', 'Sion', 'Matunga', 'Parel', 'Wadala', 'BKC'].map((area, idx) => (
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
                alt="R3BOOT knee pain physiotherapy clinic Dadar East Mumbai"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  DADAR EAST, MUMBAI //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  No referral. No waitlist. Book directly.
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
                Combine Knee Physiotherapy with{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Other Recovery Tools</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Knee recovery accelerates when multiple modalities are coordinated. At R3BOOT, your
                physiotherapist can combine your session with other treatments, same visit, same building.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  title: 'Sports Massage',
                  desc: 'Deep tissue work on the quadriceps, ITB, hamstrings, and calves | the muscle chains directly contributing to knee load. Particularly effective for runner\'s knee and ITB syndrome alongside physiotherapy.',
                  href: '/knee-pain-sports-massage-mumbai',
                },
                {
                  title: 'Contrast Therapy',
                  desc: 'Ice bath and infrared sauna protocol reduces knee joint inflammation and accelerates recovery after intensive physiotherapy sessions. Especially useful post-surgery and during acute flare-ups.',
                  href: '/contrast-therapy-mumbai',
                },
                {
                  title: 'Sports Injury Physiotherapy',
                  desc: 'ACL reconstruction, meniscus tears, and ligament injuries require sport-specific return-to-play rehabilitation, not just pain management. See our dedicated sports injury programme.',
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
              { label: 'Physiotherapy for Back Pain', href: '/physiotherapy-for-back-pain-mumbai' },
              { label: 'Sports Injury Physiotherapy Dadar', href: '/sports-injury-physiotherapy-dadar-mumbai' },
              { label: 'Knee Pain Sports Massage', href: '/knee-pain-sports-massage-mumbai' },
              { label: 'Aqua Therapy for Knee Pain', href: '/aqua-therapy-for-knee-pain-mumbai' },
              { label: 'Contrast Therapy Mumbai', href: '/contrast-therapy-mumbai' },
              { label: 'Clinical Pilates Mumbai', href: '/clinical-pilates-mumbai' },
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
      <FAQSection faqs={kneePainPhysiotherapyFaqs} />

      {/* ─── CTA BANNER ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tight leading-tight">
              Stop living around your knee pain.{' '}
              <span className="text-white/50">Fix it.</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 mb-4 leading-relaxed font-medium max-w-3xl mx-auto">
              Clinical physiotherapy for knee pain at R3BOOT, Dadar East. No referral needed.
              Dr. Hiral Parikh and Dr. Vaishali Rauniyar, clinical expertise from day one.
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
        serviceName="Physiotherapy for Knee Pain in Mumbai"
        description="Clinical physiotherapy for knee pain in Mumbai at R3BOOT, Dadar East. Runner's knee, osteoarthritis, meniscus tears, ACL rehabilitation, patellar tendinopathy, and post-surgery knee recovery. Led by Dr. Hiral Parikh (BPT, 15+ years) and Dr. Vaishali Vijay Rauniyar (4+ years)."
        serviceUrl="https://www.r3boot.in/physiotherapy-for-knee-pain-mumbai"
      />
      <FAQSchema faqs={kneePainPhysiotherapyFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Physiotherapy Dadar Mumbai', url: '/physiotherapy-dadar-mumbai' },
        { name: 'Physiotherapy for Knee Pain Mumbai', url: '/physiotherapy-for-knee-pain-mumbai' },
      ]} />
    </main>
  )
}
