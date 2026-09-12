import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { sportsInjuryPhysiotherapyFaqs } from '@/lib/faqs/sports-injury-physiotherapy-dadar-mumbai'

export const metadata: Metadata = {
  title: 'Sports Injury Physiotherapy Dadar Mumbai | Athlete Rehab | R3BOOT',
  description:
    'Sports injury physiotherapy in Dadar, Mumbai at R3BOOT. ACL rehab, hamstring tears, rotator cuff, ankle sprains & return-to-sport programmes. Near Shivaji Park. 5.0 ★ Google. WhatsApp to book.',
  alternates: { canonical: '/sports-injury-physiotherapy-dadar-mumbai' },
  keywords: [
    'sports injury physiotherapy dadar mumbai',
    'sports physiotherapy dadar',
    'sports injury physiotherapy mumbai',
    'sports physio near dadar',
    'ACL rehabilitation mumbai',
    'sports injury clinic dadar',
    'athlete physiotherapy mumbai',
    'hamstring injury physiotherapy mumbai',
    'return to sport physiotherapy mumbai',
    'sports injury treatment near shivaji park',
  ],
}

const sportsInjuries = [
  {
    title: 'ACL reconstruction rehab',
    body: 'Post-surgical ACL rehabilitation is a 9–12 month return-to-sport process. Progressive loading, neuromuscular retraining, single-leg strength, and reactive agility work | phased correctly from week 1 to full clearance.',
  },
  {
    title: 'Hamstring tears & strains',
    body: 'Grade I–III hamstring injuries managed with early loading protocols that preserve strength and prevent the excessive scar tissue that leads to reinjury. Timeline: 3–10 weeks depending on grade.',
  },
  {
    title: 'Rotator cuff injuries',
    body: 'Shoulder impingement, partial and full-thickness rotator cuff tears. Manual therapy, dry needling, and progressive strengthening | with return-to-throwing or overhead sport programmes for cricketers and swimmers.',
  },
  {
    title: 'Ankle sprains & instability',
    body: 'Graded loading to restore full strength and proprioception | not rest until it stops hurting. Chronic ankle instability from repeated sprains requires a neuromuscular retraining programme to prevent recurrence.',
  },
  {
    title: 'ITB syndrome & shin splints',
    body: 'Running-specific overuse injuries managed with load reduction, gait retraining, and progressive return-to-run programmes. Common in Shivaji Park runners ramping mileage too fast.',
  },
  {
    title: 'Tennis elbow & shoulder impingement',
    body: 'Tendon loading protocols, dry needling, and manual therapy for elbow and shoulder overuse injuries in gym athletes, cricket players, and racket sport players.',
  },
]

const sessionSteps = [
  {
    step: '01',
    label: 'Sports-specific assessment',
    body: 'Your physiotherapist takes a full injury history, mechanism, timeline, sport demands, and your return-to-sport goal. Movement testing, load tolerance, and sport-specific screening identify what structures are involved and what stage of healing you are in.',
  },
  {
    step: '02',
    label: 'Hands-on treatment + load plan',
    body: 'Manual therapy, dry needling, joint mobilisation, and soft tissue work applied to the injured structure. You also get a clear load management plan: what to train, what to modify, and what to avoid right now.',
  },
  {
    step: '03',
    label: 'Return-to-sport roadmap',
    body: 'You leave with a structured rehabilitation programme and specific milestones for returning to training and competition. Not a vague "rest and see", a real timeline based on your tissue, your sport, and your goals.',
  },
]

const whoWeHelp = [
  'Runners training at Shivaji Park',
  'Gym athletes with muscle or tendon injuries',
  'Cricketers with shoulder, hamstring & knee injuries',
  'Football & basketball players (ankle, ACL, groin)',
  'Post-surgery ACL and shoulder rehab',
  'Active adults returning to sport after time off',
]

export default function SportsInjuryPhysiotherapyDadarPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">

      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/service/Services_image/Physiotherapy_1.webp"
          alt="Sports injury physiotherapy Dadar Mumbai, athlete rehabilitation at R3BOOT"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">SPORTS INJURY // ATHLETE REHAB // DADAR MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Sports Injury Physiotherapy in Dadar, Mumbai
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              Injury assessment, load management, and return-to-sport rehabilitation, at R3BOOT, 5 minutes from Shivaji Park.
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
                Most clinics tell injured athletes to rest.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">We build a programme to keep you training.</span>
              </h2>
              <div className="prose prose-base sm:prose-lg md:prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Sports injury physiotherapy is not the same as general physiotherapy. Athletes need to understand
                  load management, what they can train through, what requires modification, and what must stop
                  temporarily. Complete rest is rarely the right answer. The goal is to keep you as active as
                  possible while the injured tissue heals, so you return to sport stronger, not deconditioned.
                </p>
                <p>
                  At R3BOOT in Dadar East, our physiotherapy team understands sport-specific demands. Dr. Hiral
                  Parikh (BPT, 15+ years) and Dr. Vaishali Vijay Rauniyar (BPT, 4+ years, certified in Dry Needling and Aquatic
                  Rehabilitation) have worked with runners, gym athletes, cricketers, and weekend warriors across
                  all injury types. Every case gets a clear return-to-sport timeline after the first session, not
                  a generic estimate.
                </p>
                <p>
                  Shivaji Park runners, Dadar gym athletes, and players from Worli, Lower Parel, and Bandra are
                  within 10–20 minutes. No referral needed. First session is 60 minutes.
                </p>
              </div>

              <div className="mt-10 sm:mt-14 md:mt-20">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 md:mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  SPORTS INJURIES WE TREAT
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {sportsInjuries.map((item, idx) => (
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
                <p className="text-white/30 text-xs text-center mt-4 font-medium">No referral needed. 5 min from Shivaji Park.</p>
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
                First session is 60 minutes. Wear clothing that allows movement assessment of the injured area.
                Bring any imaging (MRI, X-ray) or surgical notes if you have them. No referral required.
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

      {/* ─── SPORTS PHYSIO vs GENERIC REST ─── */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">

            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="/images/Services_image/Physiotherapy.webp"
                alt="Sports injury physiotherapy assessment at R3BOOT Dadar Mumbai"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  RETURN TO SPORT //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  We build a programme. Not just a rest plan.
                </p>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                THE DIFFERENCE //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Why sports injuries need{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">progressive loading, not just rest</span>
              </h2>
              <div className="prose prose-base sm:prose-lg text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-4 mb-8">
                <p>
                  Complete rest causes muscle atrophy, joint stiffness, and neuromuscular deconditioning, all of which make re-injury more likely when you return to sport. Tendons and ligaments
                  repair stronger when loaded progressively through the healing phase. This is well-established
                  sports science, not a preference.
                </p>
                <p>
                  Sports physiotherapy at R3BOOT starts with understanding your training load, your sport, and
                  your goals. We prescribe what you can do, and what to avoid, from day one. The result is
                  a faster, more complete recovery and a return to sport with better movement quality than before
                  the injury.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Load management from day 1', detail: 'Clear guidance on what to train, modify, and avoid, immediately after your first assessment' },
                  { label: 'Dry needling', detail: 'Available at R3BOOT, effective for muscular trigger points in hamstrings, glutes, and rotator cuff' },
                  { label: 'Sport-specific exercise progressions', detail: 'Not generic physio exercises, movements relevant to your sport and the demands of return to play' },
                  { label: 'Return-to-sport milestone testing', detail: 'Objective strength and movement benchmarks at each phase, so clearance is based on data, not guesswork' },
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
                How much does sports physiotherapy{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">cost in Mumbai?</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Sports physiotherapy at specialist clinics in Mumbai ranges from ₹800 to ₹3,000+ per session.
                What matters is how much of that session is actual clinical time with your injury versus
                passive machine therapy.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 dark:border-white/5">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#513394]">
                    <th className="px-4 sm:px-6 py-4 sm:py-5 text-white font-black text-xs sm:text-sm tracking-wider uppercase">Setting</th>
                    <th className="px-4 sm:px-6 py-4 sm:py-5 text-white font-black text-xs sm:text-sm tracking-wider uppercase">Session time</th>
                    <th className="px-4 sm:px-6 py-4 sm:py-5 text-white font-black text-xs sm:text-sm tracking-wider uppercase">Sports-specific capability</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Hospital OPD', '15–20 min', 'Basic treatment, no return-to-sport programming'],
                    ['General physio clinic', '30–45 min', 'Standard protocol, limited sport-specific expertise'],
                    ['Home physiotherapy', '30–45 min', 'Convenient but no load testing or sport assessment environment'],
                    ['R3BOOT Dadar', '45–60 min', 'Sports assessment + load plan + dry needling + return-to-sport milestones'],
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
              We will give you a clear number with no hidden charges.
            </p>
          </div>
        </div>
      </section>

      {/* ─── DADAR LOCAL + SHIVAJI PARK ─── */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                DADAR, MUMBAI //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Sports Injury Physiotherapy{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Near Shivaji Park</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-6">
                R3BOOT is in Dadar East, walking distance from Shivaji Park. Mumbai&apos;s highest concentration
                of distance runners, cricketers, and active athletes trains at and around Shivaji Park.
                If you train there and you&apos;re injured, you are 10 minutes from clinical sports physiotherapy.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
                Athletes from Worli, Lower Parel, Bandra, Sion, and Matunga reach us within 15–20 minutes
                by train (Dadar station, East exit, 5 minutes walk) or road. We are not a high-volume
                hospital OPD, your session is your session.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {['Shivaji Park', 'Dadar', 'Worli', 'Lower Parel', 'Bandra', 'Sion', 'Matunga', 'Parel', 'Wadala'].map((area, idx) => (
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
                  <span>5 min from Dadar railway station (East exit) · 10 min from Shivaji Park on foot</span>
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
                alt="R3BOOT sports injury physiotherapy clinic near Shivaji Park Dadar East Mumbai"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  DADAR EAST, MUMBAI //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  Near Shivaji Park. No referral. Book directly.
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
                Combine Sports Physiotherapy with{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Recovery Tools That Work</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                The fastest sports injury recoveries combine multiple modalities in a coordinated plan. At R3BOOT,
                your physiotherapist can integrate other recovery tools into the same visit.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  title: 'Sports Massage for Runners',
                  desc: 'Myofascial release, trigger point therapy, and cupping to address the soft tissue overload that causes overuse injuries, ITB syndrome, plantar fasciitis, calf tightness. Often combined with physiotherapy on the same visit.',
                  href: '/sports-massage-runners-mumbai',
                },
                {
                  title: 'Contrast Therapy',
                  desc: 'Ice bath and infrared sauna in a structured protocol. Reduces acute inflammation and accelerates tissue repair after sports injury and intensive physiotherapy sessions.',
                  href: '/contrast-therapy-mumbai',
                },
                {
                  title: 'Physiotherapy Dadar Hub',
                  desc: 'Full clinical physiotherapy for back pain, knee pain, neck pain, post-surgery, and neurological conditions, all at R3BOOT Dadar East.',
                  href: '/physiotherapy-dadar-mumbai',
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
              { label: 'Physiotherapy for Back Pain Mumbai', href: '/physiotherapy-for-back-pain-mumbai' },
              { label: 'Sports Massage for Runners', href: '/sports-massage-runners-mumbai' },
              { label: 'Contrast Therapy Mumbai', href: '/contrast-therapy-mumbai' },
              { label: 'Ice Bath Mumbai', href: '/ice-bath-mumbai' },
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
      <FAQSection faqs={sportsInjuryPhysiotherapyFaqs} />

      {/* ─── CTA BANNER ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tight leading-tight">
              Get back to sport faster.{' '}
              <span className="text-white/50">With a plan.</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 mb-4 leading-relaxed font-medium max-w-3xl mx-auto">
              Sports injury physiotherapy at R3BOOT, Dadar East. Near Shivaji Park. No referral needed.
              Dr. Hiral Parikh and Dr. Vaishali Rauniyar, sport-specific rehab from day one.
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
        serviceName="Sports Injury Physiotherapy in Dadar, Mumbai"
        description="Sports injury physiotherapy in Dadar, Mumbai at R3BOOT. ACL rehabilitation, hamstring tears, rotator cuff injuries, ankle sprains, ITB syndrome, and return-to-sport programmes. Led by Dr. Hiral Parikh (BPT, 15+ years) and Dr. Vaishali Vijay Rauniyar (4+ years). Near Shivaji Park."
        serviceUrl="https://www.r3boot.in/sports-injury-physiotherapy-dadar-mumbai"
      />
      <FAQSchema faqs={sportsInjuryPhysiotherapyFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Physiotherapy Dadar Mumbai', url: '/physiotherapy-dadar-mumbai' },
        { name: 'Sports Injury Physiotherapy Dadar Mumbai', url: '/sports-injury-physiotherapy-dadar-mumbai' },
      ]} />
    </main>
  )
}
