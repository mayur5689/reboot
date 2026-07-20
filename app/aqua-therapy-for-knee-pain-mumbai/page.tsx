import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { aquaTherapyKneePainFaqs } from '@/lib/faqs/aqua-therapy-knee-pain-mumbai'

export const metadata: Metadata = {
  title: 'Aqua Therapy for Knee Pain & Arthritis Mumbai | R3BOOT Dadar',
  description:
    'Knee hurts on stairs or standing up? Aqua therapy at R3BOOT Dadar removes most of the weight from your knee so you can move without pain. Osteoarthritis, post-surgery & arthritis care. WhatsApp to book.',
  alternates: { canonical: '/aqua-therapy-for-knee-pain-mumbai' },
  keywords: [
    'aqua therapy for knee pain mumbai',
    'aqua therapy for arthritis mumbai',
    'hydrotherapy for knee pain mumbai',
    'water therapy for knee osteoarthritis mumbai',
    'aqua treadmill for knee pain',
    'aqua therapy after knee replacement mumbai',
    'aquatic physiotherapy for arthritis mumbai',
    'water based exercise for knee pain',
    'knee osteoarthritis treatment dadar',
    'aqua therapy dadar mumbai',
  ],
}

const kneeCauses = [
  {
    title: 'Worn-out knee (osteoarthritis)',
    body: 'The cushioning inside your knee has worn down over the years. Stairs, kneeling, and long walks hurt the most, and mornings feel stiff. In water, you can move and strengthen the knee without grinding the joint, so pain-free exercise becomes possible again.',
  },
  {
    title: 'After knee replacement surgery',
    body: 'Your new knee needs to relearn how to move, but putting full weight on it too soon is painful and risky. Water lets you start walking and bending again days or weeks earlier than land-based exercise alone, while the joint heals.',
  },
  {
    title: 'Swollen or stiff knee',
    body: 'Swelling makes the knee feel tight, hot, and hard to bend. The gentle pressure of water squeezes down swelling while you move, something land exercise cannot do.',
  },
  {
    title: 'Ligament or cartilage injury (meniscus, ACL)',
    body: 'Twisting, pivoting, or kneeling movements hurt. In water, you can practise the same movements with almost no load on the joint, so healing tissue is never overloaded.',
  },
  {
    title: 'Rheumatoid arthritis',
    body: 'Joints feel swollen, stiff, and painful, especially first thing in the morning. Warm water relaxes the joint and the muscles around it before you even begin moving.',
  },
]

const sessionSteps = [
  {
    step: '01',
    label: 'We check your knee',
    body: 'Your physiotherapist looks at how your knee moves, where it hurts, and what is causing it - a worn joint, swelling, stiffness, or recovery from surgery. If you have had surgery or any scans, bring those reports along.',
  },
  {
    step: '02',
    label: 'You get in the water',
    body: 'No swimming needed. You stand inside a private aqua treadmill chamber. Your physiotherapist sets the water level, walking speed, and temperature to take the right amount of weight off your knee.',
  },
  {
    step: '03',
    label: 'You move, without the pain',
    body: 'You walk, bend, and exercise the knee while your physiotherapist watches and adjusts everything in real time. Many clients move more freely in their first session than they have in months.',
  },
]

const whoWeHelp = [
  'Knee pain when walking, climbing stairs, or standing up',
  'Osteoarthritis (worn-out knee joint)',
  'Recovering from knee replacement surgery',
  'Swollen, stiff, or "locked" knees',
  'Rheumatoid arthritis flare-ups',
  'Knees too painful for gym or land exercise right now',
]

export default function AquaTherapyKneePainMumbaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">

      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1781294628/a2997f88-f950-4783-956a-43885816055f_uztncr.webp"
          alt="Aqua therapy for knee pain and arthritis in Mumbai, aqua treadmill rehabilitation at R3BOOT Dadar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10 pb-20">
          <Link
            href="/services/aqua-therapy"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all mb-8 group"
          >
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#513394] transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="font-bold tracking-wider text-sm">AQUA THERAPY</span>
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-white/70 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">KNEE PAIN // ARTHRITIS // AQUA THERAPY MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Aqua Therapy for Knee Pain and Arthritis in Mumbai
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              If walking, climbing stairs, or standing up hurts your knee, water-based therapy lets you move again, often with little or no pain, at R3BOOT, Dadar East.
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
                Does your knee hurt every time you move?{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Here is why water helps.</span>
              </h2>
              <div className="prose prose-base sm:prose-lg md:prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Maybe it is the stairs at the station. Maybe it is standing up after sitting for too
                  long. Maybe your knee feels stiff every morning and takes a few minutes to loosen up.
                  If any of this sounds familiar, you already know how knee pain changes your day - you
                  start avoiding stairs, cutting walks short, and skipping the gym.
                </p>
                <p>
                  Here is the real problem. On land, your knee has to carry your full body weight every
                  single time you move it. If your knee is already sore, swollen, or worn down, that
                  weight is exactly what is causing the pain. Water removes most of that weight. Stand in
                  chest-deep water and your body weighs about a quarter of what it does on land, so your
                  knee only carries about a quarter of the load. The same movements that hurt on land -
                  walking, bending, climbing - become possible again, often without pain, in water.
                </p>
                <p>
                  At R3BOOT in Dadar East, this happens on a private aqua treadmill, not a shared pool.
                  Your physiotherapist sets the water level, walking speed, and water temperature to suit
                  your knee, then stays with you for the entire session.
                </p>
              </div>

              <div className="mt-10 sm:mt-14 md:mt-20">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 md:mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  WHAT&apos;S CAUSING YOUR KNEE PAIN?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {kneeCauses.map((item, idx) => (
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
                  WHO THIS HELPS //
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
                <span className="text-[#513394] dark:text-[#8B5CF6]">First Aqua Therapy Session</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Wear or bring something you can move in - shorts and a t-shirt work well. You do not need to know
                how to swim. If you have had knee surgery or any scans done, bring those reports. No referral required.
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

      {/* ─── ON LAND VS IN WATER ─── */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">

            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="/images/Services_image/Hydrotherapy_!.webp"
                alt="Aqua treadmill chamber for knee pain rehabilitation at R3BOOT Dadar Mumbai"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  PRIVATE AQUA TREADMILL //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  Same movements. A quarter of the weight.
                </p>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                THE DIFFERENCE //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Why exercise that hurts on land{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">often does not hurt in water</span>
              </h2>
              <div className="prose prose-base sm:prose-lg text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-4 mb-8">
                <p>
                  Your physiotherapist may have told you to "strengthen the muscles around your knee".
                  That is good advice, but if every squat, lunge, or walk causes pain, you cannot do it
                  consistently enough for it to work. That is the gap aqua therapy fills.
                </p>
                <p>
                  Water holds you up. It takes the weight off a sore joint while you still get to move it,
                  strengthen it, and improve how it bends. As your knee gets stronger and less painful in
                  water, your physiotherapist gradually shifts you back to land-based exercise, so the
                  progress holds once you step out of the chamber.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Less weight on your knee', detail: 'Water buoyancy removes up to three-quarters of your body weight, so a worn or healing knee can move without grinding or pain.' },
                  { label: 'Less swelling', detail: 'Water pressure gently squeezes the leg, helping reduce swelling around the knee during and after each session.' },
                  { label: 'Free movement, fewer no-go zones', detail: 'Bending, walking, and turning movements that are too painful on land are often comfortable in water from day one.' },
                  { label: 'Gentle strengthening', detail: 'Water resistance lets you build strength in the muscles that support your knee, without the impact of land exercise.' },
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

      {/* ─── ON LAND VS IN WATER: SIDE BY SIDE ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 sm:mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                SIDE BY SIDE //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 sm:mb-6 leading-tight">
                On Land vs{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">In Water at R3BOOT</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Same knee. Same exercises. The water just removes the part that hurts.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 dark:border-white/5">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#513394]">
                    <th className="px-4 sm:px-6 py-4 sm:py-5 text-white font-black text-xs sm:text-sm tracking-wider uppercase">What happens</th>
                    <th className="px-4 sm:px-6 py-4 sm:py-5 text-white font-black text-xs sm:text-sm tracking-wider uppercase">On land</th>
                    <th className="px-4 sm:px-6 py-4 sm:py-5 text-white font-black text-xs sm:text-sm tracking-wider uppercase">In water at R3BOOT</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Weight on your knee', 'Full body weight, every step', 'About a quarter of your body weight'],
                    ['Pain while moving', 'Often sharp or aching', 'Usually mild or pain-free'],
                    ['Swelling', 'No change during exercise', 'Eases as water pressure works on the joint'],
                    ['How much you can move', 'Limited by pain', 'Full range, often for the first time in months'],
                  ].map(([what, land, water], idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white dark:bg-white/5' : 'bg-[#F8F9FA] dark:bg-white/[0.02]'}
                    >
                      <td className="px-4 sm:px-6 py-3 sm:py-4 font-bold text-xs sm:text-sm text-gray-900 dark:text-white">{what}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">{land}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-[#513394] dark:text-[#A78BFA] font-medium">{water}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-sm mt-6 leading-relaxed">
              For current aqua therapy session fees at R3BOOT, call or WhatsApp{' '}
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
                Aqua Therapy for Knee Pain{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">in Central Mumbai</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-6">
                R3BOOT is in Dadar East, easy to reach from across central and south Mumbai. Whether your
                knee pain is from years of wear, a recent surgery, or arthritis that flares up, you do not
                need to travel far for water-based rehab. Clients reach us from Lower Parel, Worli, Bandra,
                Sion, and Matunga in 15 to 20 minutes by train or road.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
                We see a limited number of clients per day on the aqua treadmill, so your session is never
                rushed. Your physiotherapist sets up the chamber for your knee, stays with you throughout,
                and adjusts the plan as your knee improves.
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
                  <span>Mon-Sat: 8:00 AM - 9:00 PM &nbsp;|&nbsp; Sun: 2:00 PM - 9:00 PM</span>
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
                src="/images/Services_image/Hydrotherapy.webp"
                alt="R3BOOT aqua therapy clinic for knee pain and arthritis, Dadar East Mumbai"
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
                Combine Aqua Therapy with{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Other Recovery Tools</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Aqua therapy is often just the start. As your knee gets stronger and less painful, your
                physiotherapist can move you onto other treatments, same visit, same building.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  title: 'Physiotherapy for Knee Pain',
                  desc: 'Once your knee feels stronger and moves more freely in water, your physiotherapist moves you onto land-based strengthening and movement retraining, so the improvement lasts outside the chamber too.',
                  href: '/physiotherapy-for-knee-pain-mumbai',
                },
                {
                  title: 'Aqua Therapy Service Hub',
                  desc: 'See the full aqua treadmill setup, chamber specs, and the wider range of conditions aqua therapy helps with at R3BOOT, beyond knee pain.',
                  href: '/services/aqua-therapy',
                },
                {
                  title: 'Contrast Therapy',
                  desc: 'Ice bath and infrared sauna sessions help calm a swollen, hot, or flared-up knee between aqua therapy sessions, especially useful for arthritis flare-ups.',
                  href: '/contrast-therapy-mumbai',
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
              { label: 'Aqua Therapy Mumbai', href: '/aqua-therapy-mumbai' },
              { label: 'Aqua Therapy Service Hub', href: '/services/aqua-therapy' },
              { label: 'Physiotherapy for Knee Pain', href: '/physiotherapy-for-knee-pain-mumbai' },
              { label: 'Knee Pain Sports Massage', href: '/knee-pain-sports-massage-mumbai' },
              { label: 'Contrast Therapy Mumbai', href: '/contrast-therapy-mumbai' },
              { label: 'Physiotherapy Dadar Mumbai', href: '/physiotherapy-dadar-mumbai' },
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
      <FAQSection faqs={aquaTherapyKneePainFaqs} />

      {/* ─── CTA BANNER ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tight leading-tight">
              Stop avoiding stairs because of your knee.{' '}
              <span className="text-white/50">Get back to moving.</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 mb-4 leading-relaxed font-medium max-w-3xl mx-auto">
              Aqua therapy for knee pain and arthritis at R3BOOT, Dadar East. Private aqua treadmill,
              physiotherapist with you the whole session. No referral needed.
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
        serviceName="Aqua Therapy for Knee Pain and Arthritis in Mumbai"
        description="Aqua therapy for knee pain, osteoarthritis, rheumatoid arthritis, and post-knee replacement recovery at R3BOOT, Dadar East. Private aqua treadmill with water level, speed, and temperature set by a physiotherapist who stays with you for the whole session."
        serviceUrl="https://www.r3boot.in/aqua-therapy-for-knee-pain-mumbai"
      />
      <FAQSchema faqs={aquaTherapyKneePainFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Aqua Therapy', url: '/services/aqua-therapy' },
        { name: 'Aqua Therapy for Knee Pain & Arthritis Mumbai', url: '/aqua-therapy-for-knee-pain-mumbai' },
      ]} />
    </main>
  )
}
