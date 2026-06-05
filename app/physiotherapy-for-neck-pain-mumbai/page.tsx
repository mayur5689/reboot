import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { neckPainPhysiotherapyFaqs } from '@/lib/faqs/physiotherapy-neck-pain-mumbai'

export const metadata: Metadata = {
  title: 'Physiotherapy for Neck Pain Mumbai | Cervical Rehab | R3BOOT Dadar',
  description:
    'Clinical physiotherapy for neck pain in Mumbai at R3BOOT Dadar. Cervical disc, radiculopathy, spondylosis, desk pain & cervicogenic headaches. Dry needling available. 5.0 ★ Google. WhatsApp to book.',
  alternates: { canonical: '/physiotherapy-for-neck-pain-mumbai' },
  keywords: [
    'physiotherapy for neck pain mumbai',
    'neck pain physiotherapy mumbai',
    'cervical physiotherapy mumbai',
    'neck pain treatment dadar mumbai',
    'cervical disc physiotherapy mumbai',
    'cervical radiculopathy physiotherapy mumbai',
    'cervical spondylosis physiotherapy mumbai',
    'neck pain clinic dadar',
    'cervicogenic headache physiotherapy mumbai',
    'physiotherapy for neck pain near me',
  ],
}

const neckConditions = [
  {
    title: 'Cervical disc herniation',
    body: 'A bulging or herniated disc in the cervical spine compresses nerve roots | producing neck pain, shoulder pain, arm pain, tingling, or numbness. Manual therapy, cervical traction techniques, nerve mobilisation, and targeted exercise resolve this in most cases without surgery.',
  },
  {
    title: 'Cervical radiculopathy',
    body: 'Nerve root compression causing shooting pain, weakness, or numbness from the neck into the shoulder, arm, or hand. Physiotherapy addresses the mechanical cause of nerve irritation | producing better long-term outcomes than medication or injections alone.',
  },
  {
    title: 'Cervical spondylosis',
    body: 'Age-related disc narrowing, osteophyte formation, and joint degeneration in the cervical spine. Physiotherapy cannot reverse degeneration, but it significantly reduces pain and restores function by improving mobility and deep cervical muscle strength.',
  },
  {
    title: 'Postural and desk-related neck pain',
    body: 'Forward head posture, sustained screen use, and poor workstation setup load the cervical extensors and compress the lower cervical discs. The most common neck pain presentation in Mumbai | and the most consistently underestimated in severity.',
  },
  {
    title: 'Cervicogenic headaches',
    body: 'Headaches originating from the upper cervical joints (C1–C3) and suboccipital muscles, not the brain. Begin at the base of the skull, often radiating to the forehead or behind the eye. Respond extremely well to manual therapy and dry needling.',
  },
  {
    title: 'Whiplash and acute muscle spasm',
    body: 'Post-accident cervical strain, acute muscle spasm, and restricted range of motion. Early physiotherapy intervention, not rest and a collar, produces faster and more complete recovery. Most whiplash presentations resolve fully with the right treatment.',
  },
]

const sessionSteps = [
  {
    step: '01',
    label: 'Full cervical assessment',
    body: 'Movement range, joint mobility, neurological screening (nerve conduction to arm and hand), muscle strength, and posture analysis. Any imaging (MRI, X-ray) you bring is reviewed. The assessment identifies the specific structure driving your neck pain.',
  },
  {
    step: '02',
    label: 'Targeted hands-on treatment',
    body: 'Manual therapy to specific cervical and upper thoracic segments, soft tissue release, dry needling to trapezius and suboccipital trigger points, and nerve mobilisation techniques, applied to what the assessment found.',
  },
  {
    step: '03',
    label: 'Your rehabilitation plan',
    body: 'Specific exercises for deep cervical flexor strength and postural endurance, plus a workstation and posture brief if relevant. You leave with a clear programme and realistic timeline, not a generic neck exercise sheet.',
  },
]

const whoWeHelp = [
  'Desk workers and WFH professionals with chronic neck pain',
  'People with cervical disc herniation or arm nerve pain',
  'Patients with cervicogenic headaches',
  'Cervical spondylosis management',
  'Post-accident whiplash recovery',
  'Athletes with neck and upper trapezius injuries',
]

export default function PhysiotherapyNeckPainMumbaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">

      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/service/Services_image/Physiotherapy_1.webp"
          alt="Physiotherapy for neck pain Mumbai, clinical cervical treatment at R3BOOT Dadar"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">NECK PAIN // CERVICAL PHYSIOTHERAPY // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Physiotherapy for Neck Pain in Mumbai
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              Clinical assessment, manual therapy, dry needling, and cervical rehabilitation, at R3BOOT, Dadar East.
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
                Neck pain in Mumbai is an epidemic.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Most of it is completely fixable.</span>
              </h2>
              <div className="prose prose-base sm:prose-lg md:prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Nine-hour screen days, two-hour commutes on Western and Central lines, and WFH setups built
                  around a laptop on a dining table. Mumbai has the highest concentration of postural neck pain
                  drivers of any city in India, and most people manage it with a heat pad, a muscle relaxant,
                  and the assumption that this is just how their neck is now.
                </p>
                <p>
                  At R3BOOT in Dadar East, clinical physiotherapy for neck pain begins with identifying what is
                  actually failing. Postural neck pain, cervical disc herniation, radiculopathy, spondylosis,
                  and cervicogenic headaches all look similar to patients, they all &quot;feel like neck pain&quot;, but they have completely different causes, and completely different treatments. Getting this
                  right at the first session is what determines whether you recover in four sessions or drag
                  it out for four months.
                </p>
                <p>
                  Dr. Hiral Parikh (BPT, 15+ years) and Dr. Vaishali Vijay Rauniyar (certified in Dry Needling
                  and Aquatic Rehabilitation) lead the physiotherapy team. Dry needling is available at R3BOOT
                  and is particularly effective for the trapezius and suboccipital trigger points that maintain
                  chronic neck pain in desk workers. No referral needed. First session 60 minutes.
                </p>
              </div>

              <div className="mt-10 sm:mt-14 md:mt-20">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 md:mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  NECK CONDITIONS WE TREAT
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {neckConditions.map((item, idx) => (
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
                First session is 60 minutes. Bring any imaging (X-ray, MRI) or specialist reports if you
                have them. Wear a top that allows access to the neck and upper back. No referral required.
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

      {/* ─── DRY NEEDLING DIFFERENTIATOR ─── */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">

            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="/images/Services_image/Physiotherapy.webp"
                alt="Neck pain physiotherapy at R3BOOT Dadar Mumbai, dry needling and manual therapy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  DRY NEEDLING + MANUAL THERAPY //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  We treat the cause. Not just the tension.
                </p>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                THE DIFFERENCE //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Why heat pads and muscle relaxants{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">keep your neck pain coming back</span>
              </h2>
              <div className="prose prose-base sm:prose-lg text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-4 mb-8">
                <p>
                  A tight trapezius with active trigger points will remain tight and full of trigger points
                  after a heat pad and a muscle relaxant. The muscle is tight because it is compensating for
                  a stiff cervical joint above it, a weak deep neck flexor below it, and a forward head posture
                  that loads the posterior cervical chain with 3–4x its intended force. Remove the heat, stop
                  the medication, and within 48 hours the same muscle is in spasm again.
                </p>
                <p>
                  At R3BOOT, dry needling is used to release the specific trigger points maintaining your neck
                  pain, typically in the upper trapezius, levator scapulae, and suboccipital muscles. Combined
                  with manual therapy to the restricted cervical segments driving that compensation, and
                  strengthening of the deep cervical flexors that are failing to stabilise the spine, the
                  pattern breaks.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Cervical manual therapy', detail: 'Specific mobilisation of restricted C3–C7 segments, not a generic neck massage' },
                  { label: 'Dry needling', detail: 'Available at R3BOOT, trapezius, levator scapulae, suboccipital and scalene trigger point release' },
                  { label: 'Deep cervical flexor retraining', detail: 'The most underaddressed driver of chronic neck pain, restoring the muscle that holds your head correctly' },
                  { label: 'Nerve mobilisation', detail: 'For cervical radiculopathy and arm symptoms, decompresses the irritated nerve pathway from neck to fingertip' },
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
                <span className="text-[#513394] dark:text-[#8B5CF6]">neck pain cost in Mumbai?</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Neck pain physiotherapy in Mumbai ranges from ₹400 at hospital OPDs to ₹3,000+ at specialist
                clinics. What varies most is how much of each session is actual hands-on clinical treatment
                versus passive machine therapy.
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
                    ['Hospital OPD', '15–20 min', 'TENS/ultrasound machine, minimal hands-on, no dry needling'],
                    ['Home physiotherapy', '30–45 min', 'Convenient but limited assessment depth and equipment'],
                    ['Generic physio clinic', '30–45 min', 'Standard cervical protocol, rarely condition-specific'],
                    ['R3BOOT Dadar', '45–60 min', 'Full cervical assessment + manual therapy + dry needling + rehab plan'],
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
                Neck Pain Physiotherapy{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">in Central Mumbai</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-6">
                R3BOOT is in Dadar East, accessible from every major neighbourhood in central and south
                Mumbai. Desk workers from BKC, Lower Parel, and Worli commute past Dadar station daily.
                Adding a physiotherapy session before or after work is 10 minutes off your existing
                commute, not a separate trip across the city.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
                Bandra, Sion, Matunga, Parel, and Shivaji Park are all within 15 minutes. We see a limited
                number of patients per day, your 60-minute session has the clinical time your neck pain
                actually requires.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {['Dadar', 'BKC', 'Lower Parel', 'Worli', 'Bandra', 'Sion', 'Matunga', 'Parel', 'Shivaji Park', 'Wadala'].map((area, idx) => (
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
                alt="R3BOOT neck pain physiotherapy clinic Dadar East Mumbai"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  DADAR EAST, MUMBAI //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  No referral. Dry needling available. Book directly.
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
                Combine Neck Physiotherapy with{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Other Recovery Tools</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Neck pain with significant muscular component often responds faster when physiotherapy is
                combined with soft tissue work on the same visit. At R3BOOT, your physiotherapist can
                coordinate this in a single session.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  title: 'Neck & Shoulder Sports Massage',
                  desc: 'Deep tissue work on the upper trapezius, rhomboids, levator scapulae, and cervical muscles, addressing the soft tissue tension that drives chronic neck pain. Often combined with physiotherapy on the same visit.',
                  href: '/neck-shoulder-pain-sports-massage-mumbai',
                },
                {
                  title: 'Contrast Therapy',
                  desc: 'Ice bath and infrared sauna in a structured protocol. Reduces systemic inflammation and muscle tension, effective for desk workers with chronic upper body tension alongside physiotherapy.',
                  href: '/contrast-therapy-mumbai',
                },
                {
                  title: 'Physiotherapy for Back Pain',
                  desc: 'Neck pain rarely exists in isolation | thoracic stiffness and lumbar patterns frequently drive cervical compensations. Combined assessment and treatment for the full spine is often the most efficient approach.',
                  href: '/physiotherapy-for-back-pain-mumbai',
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
              { label: 'Neck & Shoulder Sports Massage', href: '/neck-shoulder-pain-sports-massage-mumbai' },
              { label: 'Sports Injury Physiotherapy Dadar', href: '/sports-injury-physiotherapy-dadar-mumbai' },
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
      <FAQSection faqs={neckPainPhysiotherapyFaqs} />

      {/* ─── CTA BANNER ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tight leading-tight">
              Stop living with neck pain.{' '}
              <span className="text-white/50">Fix what is causing it.</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 mb-4 leading-relaxed font-medium max-w-3xl mx-auto">
              Clinical physiotherapy for neck pain at R3BOOT, Dadar East. Dry needling available.
              No referral needed. Dr. Hiral Parikh and Dr. Vaishali Rauniyar.
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
        serviceName="Physiotherapy for Neck Pain in Mumbai"
        description="Clinical physiotherapy for neck pain in Mumbai at R3BOOT, Dadar East. Cervical disc herniation, radiculopathy, spondylosis, postural neck pain, cervicogenic headaches, and whiplash. Dry needling available. Led by Dr. Hiral Parikh (BPT, 15+ years) and Dr. Vaishali Vijay Rauniyar."
        serviceUrl="https://www.r3boot.in/physiotherapy-for-neck-pain-mumbai"
      />
      <FAQSchema faqs={neckPainPhysiotherapyFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Physiotherapy Dadar Mumbai', url: '/physiotherapy-dadar-mumbai' },
        { name: 'Physiotherapy for Neck Pain Mumbai', url: '/physiotherapy-for-neck-pain-mumbai' },
      ]} />
    </main>
  )
}
