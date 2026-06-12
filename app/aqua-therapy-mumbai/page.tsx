import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { services } from '@/lib/services'
import { FAQSection } from '@/components/faq-section'
import PhysiotherapyTeam from '@/components/PhysiotherapyTeam'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import AquaTherapyLocationInfo from '@/components/AquaTherapyLocationInfo'
import { aquaTherapyMumbaiFaqs } from '@/lib/faqs/aqua-therapy-mumbai'

export const metadata: Metadata = {
  title: 'Aqua Therapy Mumbai | Pool-Based Physiotherapy at R3BOOT Dadar',
  description:
    'Aqua therapy in Mumbai at R3BOOT | physio-supervised pool rehabilitation for sports injuries, post-surgery recovery, knee pain, and arthritis. Dadar, Mumbai. Call to book.',
  alternates: { canonical: '/aqua-therapy-mumbai' },
  keywords: [
    'aqua therapy Mumbai',
    'aquatic therapy Mumbai',
    'hydrotherapy Mumbai',
    'water therapy Mumbai',
    'aqua physiotherapy Mumbai',
    'aqua therapy for sports injury Mumbai',
    'aqua therapy post surgery Mumbai',
    'aqua therapy knee pain Mumbai',
    'pool physiotherapy Mumbai',
    'aqua therapy Dadar',
  ],
}

const otherServices = services.filter((s) => s.slug !== 'aqua-therapy').slice(0, 4)

const whatItHelps = [
  {
    title: 'Post-surgical rehabilitation',
    description:
      'Knee replacement, hip replacement, ACL repair, and shoulder surgery all benefit from early pool-based movement. Water reduces joint load by up to 75%, allowing physiotherapy exercises weeks before land-based work is possible.',
  },
  {
    title: 'Sports injury recovery',
    description:
      'Runners, cricketers, gym athletes, and team sport players use aqua therapy to maintain fitness and rebuild strength during injury recovery without aggravating the injured tissue.',
  },
  {
    title: 'Knee pain and arthritis',
    description:
      'Osteoarthritis and rheumatoid arthritis respond well to warm water therapy. Buoyancy removes the compressive load that makes land-based movement painful. Hydrostatic pressure reduces joint swelling between sessions.',
  },
  {
    title: 'Lower back pain and spinal conditions',
    description:
      'In water, spinal load reduces dramatically. Aqua therapy allows progressive movement, core strengthening, and flexibility work that is too painful to perform at the same intensity on land.',
  },
]

const howItWorks = [
  {
    title: 'Buoyancy reduces joint load',
    body: 'In chest-deep water, your body bears only 25% of its normal weight. This reduces compression through injured or arthritic joints to a level where pain-free movement becomes possible earlier in the recovery cycle.',
  },
  {
    title: 'Hydrostatic pressure controls swelling',
    body: 'Water pressure acts on all submerged surfaces simultaneously, reducing oedema and improving venous return. This is particularly valuable for post-surgical swelling and acute sports injuries in the sub-acute phase.',
  },
  {
    title: 'Water resistance builds strength without impact',
    body: 'Moving through water creates multidirectional resistance that strengthens muscles without the ground-reaction forces of land exercise. Resistance increases with movement speed, allowing progressive loading under physiotherapist control.',
  },
  {
    title: 'Controlled temperature supports tissue recovery',
    body: 'Warm water relaxes muscle spasm, improves circulation to healing tissue, and reduces pain perception before exercise begins. Our pool temperature is maintained at therapeutic range for recovery-focused sessions.',
  },
]

const protocol = [
  {
    title: 'Initial assessment and clearance',
    body: 'Your physiotherapist reviews your injury, surgical history, current pain levels, and medical background. We confirm aqua therapy is appropriate for your stage of recovery before any pool work begins.',
  },
  {
    title: 'Pool acclimatisation',
    body: 'Your first entry into the pool is gradual. We ensure you are comfortable with the water depth, temperature, and environment before beginning therapeutic movement. No swimming ability is required.',
  },
  {
    title: 'Supervised therapeutic exercise',
    body: 'Your physiotherapist guides you through a structured sequence of movements designed for your specific condition - range of motion work, progressive strengthening, balance and proprioception, or functional movement patterns depending on your goals.',
  },
  {
    title: 'Post-session review and progression',
    body: 'We review how you responded to the session, adjust the next session\'s program, and give you a home exercise plan where appropriate. Sessions progress in intensity as your recovery advances.',
  },
]

export default function AquaTherapyMumbaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">

      {/* HERO */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/Services_image/Hydrotherapy.webp"
          alt="Aqua therapy pool at R3BOOT Mumbai, physio-supervised water-based rehabilitation"
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
              Aqua Therapy in Mumbai | Pool-Based Physiotherapy at R3BOOT
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              Water-based rehabilitation supervised by physiotherapists. Post-surgery, sports injury, knee pain, and arthritis recovery - in a temperature-controlled pool at R3BOOT, Dadar.
            </p>
          </div>
        </div>
      </section>

      {/* OPENING SECTION */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-24 items-start">

            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 tracking-tight">
                Land-Based Physio Has Limits.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Water Removes Them.</span>
              </h2>
              <div className="prose prose-base sm:prose-lg md:prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Research published in clinical rehabilitation journals consistently shows that aquatic physiotherapy
                  produces faster functional recovery in the early post-surgical and sub-acute injury phases than
                  land-based therapy alone. The mechanism is biomechanical: water reduces compressive joint load by
                  up to 75% in chest-deep immersion, allowing therapeutic movement and progressive strengthening
                  at a stage where equivalent land-based exercise would be too painful or risky.
                </p>
                <p>
                  At R3BOOT, aqua therapy is prescribed and supervised by our physiotherapy team. Sessions are
                  built around your specific injury or surgical history, not a generic pool class. We use the
                  properties of water - buoyancy, hydrostatic pressure, resistance, and temperature - as clinical
                  tools, adjusting each variable to match your recovery stage.
                </p>
              </div>

              <div className="mt-10 sm:mt-14 md:mt-20">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 md:mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  WHAT IT HELPS WITH
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {whatItHelps.map((item, idx) => (
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

            {/* Sticky CTA card */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-[#1A1A1A] p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#513394]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-black mb-8 tracking-wide flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#513394]" />
                  IDEAL FOR //
                </h3>
                <ul className="space-y-6 mb-12">
                  {[
                    'Post-knee or hip replacement',
                    'ACL and ligament repair recovery',
                    'Sports injury rehabilitation',
                    'Osteoarthritis and joint pain',
                    'Lower back pain management',
                    'Return-to-sport conditioning',
                    'Shoulder injury rehabilitation',
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

      {/* HOW WATER WORKS */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="/images/Services_image/Hydrotherapy.webp"
                alt="Aqua therapy pool session at R3BOOT Mumbai physiotherapy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  WATER MECHANICS //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  25% body weight in chest-deep water. Move earlier. Recover faster.
                </p>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                WHY WATER WORKS //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                What Water Does{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">to Your Recovery</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                The therapeutic value of aqua therapy comes from four simultaneous properties of water that no land-based
                environment can replicate at the same time. Your physiotherapist adjusts each of these to match your
                recovery stage.
              </p>
              <div className="space-y-6">
                {howItWorks.map((item, idx) => (
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

      {/* COMPARISON TABLE */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                COMPARISON //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Aqua Therapy vs{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Land-Based Physiotherapy</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Aqua therapy and land-based physiotherapy are not competing approaches. They serve different stages of
                recovery. Here is how to understand which is right for your current situation.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 dark:border-white/5">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#513394]">
                    <th className="px-6 py-5 text-white font-black text-sm tracking-wider uppercase">Factor</th>
                    <th className="px-6 py-5 text-white font-black text-sm tracking-wider uppercase">Land Physio</th>
                    <th className="px-6 py-5 text-white font-black text-sm tracking-wider uppercase">Aqua Therapy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Joint load', 'Full body weight', 'Up to 75% reduction in chest-deep water'],
                    ['Pain during exercise', 'Higher at early recovery stage', 'Lower - buoyancy removes compressive load'],
                    ['Swelling management', 'Compression garments, elevation', 'Hydrostatic pressure acts on all surfaces simultaneously'],
                    ['Strength building', 'Gravity-based resistance', 'Multidirectional water resistance - no impact forces'],
                    ['When to use', 'All recovery stages, especially mid to late', 'Early rehabilitation - allows earlier movement after injury or surgery'],
                    ['Balance and proprioception', 'Full weight-bearing challenge', 'Progressive - start with water support, progress to challenge'],
                    ['Best for', 'Functional movement, strength, return to sport', 'Post-surgical, acute sub-acute, high-load joint conditions'],
                  ].map(([factor, land, aqua], idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white dark:bg-white/5' : 'bg-[#F8F9FA] dark:bg-white/[0.02]'}
                    >
                      <td className="px-6 py-4 font-bold text-gray-900 dark:text-white text-sm">{factor}</td>
                      <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">{land}</td>
                      <td className="px-6 py-4 text-[#513394] dark:text-[#A78BFA] font-medium text-sm">{aqua}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-sm mt-8 leading-relaxed text-center">
              Our physiotherapists will tell you which is the right starting point. Most rehabilitation programs combine both:
              aqua therapy first, progressing to{' '}
              <Link href="/physiotherapy-mumbai" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline underline-offset-4">
                land-based physiotherapy
              </Link>{' '}
              as strength and range of motion improve.
            </p>
          </div>
        </div>
      </section>

      {/* PROTOCOL */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                YOUR SESSION //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                What to Expect at{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                A standard aqua therapy session is 45 to 60 minutes. Your physiotherapist is with you throughout - in
                or beside the pool - adjusting the program in real time based on your pain response and movement quality.
                No swimming ability is required.
              </p>
              <div className="space-y-6">
                {protocol.map((item, idx) => (
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
                src="/images/Services_image/Hydrotherapy_!.webp"
                alt="Physiotherapist supervising aqua therapy session R3BOOT Mumbai"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  SUPERVISED //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  Physiotherapist present through every session
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MUMBAI RELEVANCE */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                MUMBAI //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Why Mumbai Athletes and Patients Choose{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Aqua Therapy</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl mb-8">
                Mumbai&apos;s heat and humidity add joint stress that patients in cooler climates do not contend with.
                For post-surgical patients, the early weeks of recovery in Mumbai summer are particularly challenging.
                Aqua therapy&apos;s temperature-controlled environment and reduced joint load address this directly,
                giving you a controlled recovery space regardless of the season.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  'Post-knee replacement',
                  'ACL recovery',
                  'Hip replacement rehab',
                  'Cricket injuries',
                  'Marathon runners',
                  'Gym athletes',
                  'Arthritis management',
                  'Back pain recovery',
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
                R3BOOT is located in Dadar, central Mumbai, accessible from Bandra, Worli, Lower Parel, and Andheri.
                Our integrated approach means aqua therapy sits alongside{' '}
                <Link href="/physiotherapy-mumbai" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline underline-offset-4">
                  physiotherapy
                </Link>
                ,{' '}
                <Link href="/services/sports-massage" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline underline-offset-4">
                  sports massage
                </Link>
                , and{' '}
                <Link href="/contrast-therapy-mumbai" className="text-[#513394] dark:text-[#A78BFA] font-bold hover:underline underline-offset-4">
                  contrast therapy
                </Link>{' '}
                - all under one roof, coordinated by the same physiotherapy team.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  stat: '75%',
                  label: 'reduction in joint load in chest-deep water',
                },
                {
                  stat: '4 - 12',
                  label: 'sessions for most post-surgical and sports injury cases',
                },
                {
                  stat: 'Dadar',
                  label: 'central Mumbai location, accessible from across the city',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm text-center"
                >
                  <div className="text-4xl font-black text-[#513394] dark:text-[#8B5CF6] mb-3">{item.stat}</div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <PhysiotherapyTeam />

      {/* LOCATION & HOURS */}
      <AquaTherapyLocationInfo />

      {/* FAQ */}
      <FAQSection faqs={aquaTherapyMumbaiFaqs} />

      {/* CTA BANNER */}
      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Book Aqua Therapy in{' '}
              <span className="text-white/50">Mumbai</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              R3BOOT is in Dadar, central Mumbai. Our physiotherapists will assess whether aqua therapy is the right
              starting point for your recovery and build a program around your specific condition.
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
            <p className="text-white/40 mt-8 font-bold tracking-widest text-sm">DADAR, MUMBAI</p>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-24 lg:py-32 border-t border-gray-100 dark:border-white/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              RECOVERY SERVICES //
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              Complete Recovery at <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { label: 'Physiotherapy Mumbai', href: '/physiotherapy-mumbai' },
              { label: 'Sports Massage', href: '/sports-massage-mumbai' },
              { label: 'Contrast Therapy', href: '/contrast-therapy-mumbai' },
              { label: 'Clinical Pilates', href: '/clinical-pilates-mumbai' },
              { label: 'Ice Bath Mumbai', href: '/ice-bath-mumbai' },
              { label: 'Post-Surgery Physio', href: '/post-surgery-physiotherapy-mumbai' },
              { label: 'Knee Pain Physio', href: '/physiotherapy-for-knee-pain-mumbai' },
              { label: 'Back Pain Physio', href: '/physiotherapy-for-back-pain-mumbai' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-center px-4 py-4 rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 text-sm font-bold text-gray-900 dark:text-white hover:border-[#513394]/40 hover:text-[#513394] dark:hover:text-[#A78BFA] transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
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
        serviceName="Aqua Therapy in Mumbai"
        description="Pool-based aquatic physiotherapy for sports injury rehabilitation, post-surgical recovery, knee pain, arthritis, and lower back pain. Supervised by physiotherapists at R3BOOT, Dadar, Mumbai."
        serviceUrl="https://www.r3boot.in/aqua-therapy-mumbai"
        areaServed="Mumbai"
      />
      <FAQSchema faqs={aquaTherapyMumbaiFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Aqua Therapy Mumbai', url: '/aqua-therapy-mumbai' },
      ]} />
    </main>
  )
}
