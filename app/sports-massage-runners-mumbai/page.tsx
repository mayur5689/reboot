import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { services } from '@/lib/services'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { sportsMassageRunnersMumbaiFaqs } from '@/lib/faqs/sports-massage-runners-mumbai'

export const metadata: Metadata = {
  title: 'Sports Massage for Runners Mumbai | IT Band, Calf & Knee Pain',
  description:
    'Sports massage for runners in Mumbai at R3BOOT Dadar. IT band, calf, hamstring & runner\'s knee — physio-trained therapists. 5.0 ★ Google. Open 7 days. Book via WhatsApp.',
  alternates: { canonical: '/sports-massage-runners-mumbai' },
  keywords: [
    'sports massage for runners Mumbai',
    'sports massage for calf tightness Mumbai',
    'sports massage for hamstring strain Mumbai',
    'IT band syndrome treatment Mumbai',
    "runner's knee treatment Mumbai",
    'running recovery massage Mumbai',
    'sports massage for runners',
  ],
}

const otherServices = services.filter((s) => s.slug !== 'sports-massage').slice(0, 4)

const conditions = [
  {
    condition: 'Calf tightness',
    happening: 'Chronic shortening of gastrocnemius and soleus from repetitive push-off',
    approach: 'Deep tissue release, fascial work, trigger point therapy',
  },
  {
    condition: 'Hamstring strain',
    happening: 'Micro-tears or adhesions in biceps femoris and semimembranosus',
    approach: 'Graded soft tissue mobilisation, eccentric loading guidance',
  },
  {
    condition: 'IT band syndrome',
    happening: 'Fascial restriction causing lateral knee pain',
    approach: 'Lateral thigh release, hip abductor work, movement assessment',
  },
  {
    condition: 'Plantar fasciitis',
    happening: 'Tension through the plantar fascia from overloaded calves',
    approach: 'Foot and calf integrated release, loading protocol',
  },
  {
    condition: 'Piriformis tightness',
    happening: 'Deep hip rotator restriction affecting stride length',
    approach: 'Deep gluteal release, hip mobility work',
  },
  {
    condition: "Runner's knee (PFPS)",
    happening: 'Quad and VMO imbalance causing patellofemoral compression',
    approach: 'Quad release, VMO activation, knee tracking assessment',
  },
  {
    condition: 'General DOMS',
    happening: 'Post-run muscle soreness affecting training continuity',
    approach: 'Flushing techniques, lymphatic drainage, circulation work',
  },
]

const sessionSteps = [
  {
    label: 'Assessment',
    duration: '5–10 min',
    body: 'Your therapist asks about your weekly mileage, recent race history, where you feel tightness, and any recurring niggles. This determines the focus areas. We do not default to a full-body template for every runner.',
  },
  {
    label: 'Treatment',
    duration: '40–50 min',
    body: 'Deep tissue massage on primary load-bearing muscle groups, myofascial release on restricted fascial lines, trigger point therapy on specific adhesion sites, cupping therapy where deeper tissue mobilisation is needed, and active release for stubborn chronic restrictions.',
  },
  {
    label: 'Post-session guidance',
    duration: '5 min',
    body: 'Your therapist tells you what they found, what changed, and what to watch in the next 48 hours. You leave knowing what to do, not just how you feel.',
  },
]

const techniques = [
  {
    title: 'Deep Tissue Massage',
    body: 'Sustained pressure applied to deeper muscle layers to break down adhesions and restore tissue mobility. Primary technique for chronically tight calves, hamstrings, and hip flexors.',
  },
  {
    title: 'Myofascial Release',
    body: 'Slow, sustained pressure on fascial restrictions. Particularly effective for IT band syndrome and runners with rigid movement patterns from high mileage.',
  },
  {
    title: 'Trigger Point Therapy',
    body: 'Targeted pressure on specific hyperirritable spots within muscle tissue. Used for runners with localised pain points that do not respond to general massage.',
  },
  {
    title: 'Cupping Therapy',
    body: 'Suction cups applied to the posterior leg and glutes to create decompression in the tissue, improving circulation and fascial mobility.',
  },
  {
    title: 'Sports Massage Flushing',
    body: 'Lighter effleurage strokes designed to accelerate lymphatic drainage and clear metabolic waste post-run. Used in recovery sessions rather than treatment sessions.',
  },
]

const whenToBook = [
  {
    title: 'Weekly maintenance (4+ runs per week)',
    description: 'Regular sports massage keeps cumulative tightness from building into injury. Most consistent runners book every 1–2 weeks during training cycles.',
  },
  {
    title: 'Before a race (5–7 days out)',
    description: 'A pre-event session reduces residual tightness and improves tissue pliability going into race day. We do not do deep tissue work within 48 hours of a race.',
  },
  {
    title: 'After a race or hard training block (48–72 hours post-event)',
    description: 'Once the acute phase has passed, sports massage accelerates clearance of metabolic waste, reduces soreness duration, and speeds return to training.',
  },
  {
    title: 'When a niggle appears',
    description: 'Do not wait. A small adhesion or compensation pattern caught early resolves in 1–3 sessions. Left untreated, the same issue can sideline you for weeks.',
  },
]

const therapists = [
  {
    name: 'Ganesh S. Gadhave',
    role: 'Pain Management & Sports Massage Therapist',
    image: '/images/trainer2/Trainers/Dr. Ganesh S. Gadhave.webp',
    bio: 'Specialist in injury prevention and long-term athletic resilience. Works with runners on the tension patterns that accumulate over training cycles, not just the immediate presentation.',
  },
  {
    name: 'Akshay Anil Nalawde',
    role: 'Sports Massage Therapist',
    image: '/images/trainer2/Trainers/Akshay Anil Nalawde.webp',
    bio: 'Certified in Cupping Therapy. Has worked with over 1,000 athletes across disciplines. Particularly effective with high-volume runners managing multiple sites of tightness.',
  },
  {
    name: 'Vaishali Sonar',
    role: 'Sports Massage Therapist',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1771404920/aanya-rao-womens-sports-massage-specialist-mumbai_agreyq.avif',
    bio: 'Certified in Cupping Therapy Level 1 and Level 2. Specialises in sports massage for female athletes, with specific expertise in the load patterns and recovery demands that differ between male and female runners.',
  },
]

const pairedServices = [
  {
    title: 'Contrast Therapy',
    href: '/contrast-therapy-mumbai',
    desc: 'Alternating infrared sauna and ice bath to accelerate vascular clearance post-run. Many runners use contrast therapy the day after a long run and sports massage mid-week.',
  },
  {
    title: 'Hydrotherapy',
    href: '/services/hydrotherapy',
    desc: 'Aquatic therapy for runners returning from injury who need low-impact loading before returning to road running.',
  },
  {
    title: 'Physiotherapy',
    href: '/services/physiotherapy',
    desc: 'If your niggle has progressed beyond soft tissue restriction into a structural or biomechanical issue, our physiotherapy team builds a return-to-run protocol.',
  },
  {
    title: 'Sports Psychology',
    href: '/services/sports-psychology',
    desc: 'For runners managing performance anxiety, fear of re-injury, or mental blocks that affect training consistency.',
  },
]

export default function SportsMassageRunnersMumbaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">

      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/service/Services_image/Sports Massage_1.webp"
          alt="Sports massage for runners Mumbai — R3BOOT"
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
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Sports Massage for Runners in Mumbai | R3BOOT
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              Runner-specific soft tissue therapy for calves, hamstrings, IT band, and plantar fascia. Not a relaxation massage — a clinical recovery tool.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OPENING (12-col grid) ─── */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-24 items-start">

            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 tracking-tight">
                It&apos;s the Morning After Your{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Long Run.</span>
              </h2>
              <div className="prose prose-base sm:prose-lg md:prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Your calves feel like concrete. Your hamstrings pull every time you take a step. You stretch, you foam roll, you wait.
                  By Wednesday it&apos;s manageable. But your next run is Thursday, and you know you&apos;ll be carrying it.
                </p>
                <p>
                  Persistent tightness, slow recovery, and recurring niggles are signs your muscles are not clearing properly between
                  sessions. Sports massage for runners targets exactly this: the specific muscle groups, movement patterns, and tissue
                  restrictions that running creates.
                </p>
                <p>
                  At R3BOOT in Mumbai, our sports massage therapists work with the physiology of repetitive athletic loading. This is
                  not a relaxation massage. It is a clinical recovery tool, built around how runners actually move.
                </p>
              </div>

              <div className="mt-10 sm:mt-14 md:mt-20">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 md:mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  WHY RUNNERS NEED THIS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { title: 'Cumulative fascial tightening', description: 'The same muscle groups — calves, hamstrings, IT band, hip flexors — loaded in the same pattern every session. Tissue becomes denser, range of motion narrows, injury risk climbs.' },
                    { title: 'Reduced circulation to loaded tissue', description: 'Muscles under repeated stress develop adhesions and micro-tears that restrict blood flow. General relaxation massage does not reach the depth these tissues need.' },
                    { title: 'Neuromuscular compensation', description: 'A tight left calf changes your gait. A restricted hip flexor shifts load to your lower back. The injury that appears is rarely at the original site of tension.' },
                    { title: 'Mumbai training environment', description: 'Heat, humidity, and hard road surfaces increase the inflammatory response per kilometre. Mumbai runners effectively need more recovery than the same effort in cooler conditions.' },
                  ].map((item, idx) => (
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
                  WE TREAT //
                </h3>
                <ul className="space-y-5 mb-12">
                  {[
                    'Calf tightness and Achilles issues',
                    'Hamstring strains and adhesions',
                    'IT band syndrome',
                    'Plantar fasciitis',
                    "Runner's knee (PFPS)",
                    'Piriformis and deep glute tightness',
                    'General DOMS and training fatigue',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 group/item">
                      <div className="w-6 h-6 rounded-full bg-[#513394] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/80 font-medium leading-snug text-sm group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+919702368612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#513394] text-white font-black px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-lg group-hover:bg-[#603eb0]"
                >
                  Call to Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE TREAT (alt bg, condition cards) ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                CONDITIONS //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                What We <span className="text-[#513394] dark:text-[#8B5CF6]">Treat</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Our sports massage therapists at R3BOOT work with runners dealing with these specific conditions. If yours is not listed,
                contact us — our team will tell you honestly whether sports massage is the right starting point or whether{' '}
                <Link href="/services/physiotherapy" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline underline-offset-4">
                  physiotherapy
                </Link>{' '}
                should come first.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conditions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-5 group-hover:bg-[#513394] dark:group-hover:bg-[#8B5CF6] group-hover:text-white transition-all text-sm">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{item.condition}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4 italic">{item.happening}</p>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#513394] dark:bg-[#A78BFA] mt-2 shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">{item.approach}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT A SESSION LOOKS LIKE (two-col: steps left, image right) ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                YOUR SESSION //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                What a Session{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Looks Like</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                No two runners come in with the same pattern. Before we start, we ask. Sessions run 60 minutes standard,
                90 minutes available for runners managing multiple sites or pre-event preparation.
              </p>
              <div className="space-y-8">
                {sessionSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black shrink-0 text-sm group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
                        0{idx + 1}
                      </div>
                      {idx < sessionSteps.length - 1 && (
                        <div className="w-[2px] flex-1 bg-gray-100 dark:bg-white/5 mt-3" />
                      )}
                    </div>
                    <div className="pb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-base font-bold text-gray-900 dark:text-white">{step.label}</h3>
                        <span className="text-[10px] font-black tracking-widest text-[#513394] dark:text-[#A78BFA] uppercase bg-[#513394]/10 dark:bg-[#8B5CF6]/20 px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
                alt="Sports massage session for runners at R3BOOT Mumbai"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  ASSESSMENT-FIRST //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  Shaped around your training history, not a template
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHEN TO BOOK (alt bg, step cards) ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                TIMING //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                When to <span className="text-[#513394] dark:text-[#8B5CF6]">Book</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whenToBook.map((step, idx) => (
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

      {/* ─── TECHNIQUES (two-col: image left, numbered list right) ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1771404921/cupping-therapy-sports-massage-mumbai_poqr2z.avif"
                alt="Sports massage techniques including cupping therapy for runners at R3BOOT Mumbai"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  TECHNIQUES //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  Deep tissue, myofascial release, cupping, trigger point
                </p>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                TECHNIQUES //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                Techniques We <span className="text-[#513394] dark:text-[#8B5CF6]">Use</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                Each technique is selected based on your assessment findings. No session follows the same script.
              </p>
              <div className="space-y-6">
                {techniques.map((item, idx) => (
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

      {/* ─── WHO WORKS WITH YOU (alt bg, therapist cards) ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              YOUR THERAPISTS //
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              Who Works <span className="text-[#513394] dark:text-[#8B5CF6]">With You</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mt-4">
              All sessions are conducted at R3BOOT&apos;s clinic in Mumbai. Our therapists are part of an integrated team including
              physiotherapists — if your presentation suggests an injury beyond soft tissue scope, you are referred internally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {therapists.map((member, idx) => (
              <div key={idx} className="group relative">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-gray-100 dark:bg-gray-800 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#513394]/90 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm p-8 flex flex-col justify-center text-white">
                    <p className="text-white/90 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    {member.role}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RUNNING IN MUMBAI (two-col: text left, image right) ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                MUMBAI //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Running in Mumbai: Why{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Recovery Is Harder Here</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
                Mumbai&apos;s training environment adds demands that most recovery advice does not account for. The city&apos;s heat and
                humidity elevate core body temperature during runs, increasing the inflammatory response in muscle tissue.
                Heat-stressed muscles experience greater micro-damage per session than the same effort in cooler conditions.
                Mumbai runners effectively need more recovery per kilometre.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                Most Mumbai runners train on hard surfaces: roads, promenades, concrete pavements. The impact forces on hard
                surfaces place greater eccentric demand on calves, quads, and IT bands. Add the Mumbai Marathon training cycle and
                the typical 5–6 day training week, and you have a body under cumulative stress that casual recovery tools do not clear.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Carter Road runners', 'Worli Sea Face', 'Mumbai Marathon', 'BKC cyclists', 'Trail runners'].map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-[#513394]/10 dark:bg-[#8B5CF6]/20 text-[#513394] dark:text-[#A78BFA] font-bold px-5 py-2.5 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80"
                alt="Mumbai runners sports massage recovery R3BOOT"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  MUMBAI RUNNERS //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  More recovery needed per kilometre in this city
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PAIR WITH OTHER SERVICES (alt bg) ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                INTEGRATE //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Pair With <span className="text-[#513394] dark:text-[#8B5CF6]">Other Services</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Sports massage works best as part of an integrated recovery approach.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pairedServices.map((service, idx) => (
                <Link
                  key={idx}
                  href={service.href}
                  className="group bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors">
                      {service.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[#513394]/10 flex items-center justify-center shrink-0 ml-4 group-hover:bg-[#513394] transition-colors">
                      <svg className="w-4 h-4 text-[#513394] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection faqs={sportsMassageRunnersMumbaiFaqs} />

      {/* ─── CTA BANNER ─── */}
      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Call to Book in{' '}
              <span className="text-white/50">Mumbai</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              Sports massage sessions at R3BOOT are available Monday to Saturday, by appointment.
              60-minute and 90-minute sessions available. First-time clients are welcome to ask questions before booking.
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
        serviceName="Sports Massage for Runners in Mumbai"
        description="Runner-specific sports massage treating calf tightness, hamstring strain, IT band syndrome, and plantar fasciitis. Delivered by certified sports massage therapists at R3BOOT, Mumbai."
        serviceUrl="https://www.r3boot.in/sports-massage-runners-mumbai"
      />
      <FAQSchema faqs={sportsMassageRunnersMumbaiFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Sports Massage Mumbai', url: '/sports-massage-mumbai' },
        { name: 'Runners Mumbai', url: '/sports-massage-runners-mumbai' },
      ]} />
    </main>
  )
}
