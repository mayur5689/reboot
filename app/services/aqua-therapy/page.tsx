import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import PhysiotherapyTeam from '@/components/PhysiotherapyTeam'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import AquaTherapyLocationInfo from '@/components/AquaTherapyLocationInfo'
import { aquaTherapyFaqs } from '@/lib/faqs/aqua-therapy'

export const metadata: Metadata = {
  title: 'Aqua Therapy Mumbai | Aqua Treadmill Rehabilitation at R3BOOT Dadar',
  description:
    'Physio-supervised aqua treadmill rehabilitation at R3BOOT Dadar. Post-surgery, sports injuries, arthritis, knee pain, and back pain. Adjustable water level, temperature, and speed. Book today.',
  alternates: { canonical: '/services/aqua-therapy' },
  keywords: [
    'aqua therapy mumbai',
    'aquatic therapy mumbai',
    'hydrotherapy mumbai',
    'aqua treadmill therapy',
    'underwater treadmill physiotherapy',
    'aqua therapy post surgery mumbai',
    'aqua therapy knee pain mumbai',
    'aqua therapy arthritis mumbai',
    'water therapy physiotherapy mumbai',
    'aqua therapy dadar',
  ],
}

const mechanisms = [
  {
    label: 'Buoyancy',
    title: 'Offloads Joints Up to 75%',
    body: 'In chest-deep water, your body bears only 25% of its normal weight. This removes compressive load from injured or arthritic joints, enabling pain-free movement and progressive strengthening weeks before equivalent land-based exercise is possible.',
    icon: '01',
  },
  {
    label: 'Hydrostatic Pressure',
    title: 'Reduces Swelling on All Surfaces',
    body: 'Water pressure acts uniformly on every submerged surface simultaneously. This reduces oedema, improves venous return, and manages joint swelling - effects that no compression garment or elevation can replicate with the same consistency.',
    icon: '02',
  },
  {
    label: 'Viscosity',
    title: 'Resistance Without Impact',
    body: 'Moving through water creates multidirectional resistance proportional to speed. This strengthens muscles without ground-reaction forces or impact stress. Muscle blood flow increases by up to 225% compared to land-based exercise, improving oxygen delivery to healing tissue.',
    icon: '03',
  },
  {
    label: 'Thermal Properties',
    title: 'Prepares Tissue for Movement',
    body: 'Warm water relaxes muscle spasm, improves circulation to healing tissue, and reduces pain perception before exercise begins. Temperature is adjusted to your condition - higher for muscle relaxation and pain management, cooler for post-exertional recovery.',
    icon: '04',
  },
]

const conditions = [
  {
    label: '01 // POST-SURGICAL',
    title: 'Post-Surgical Rehabilitation',
    body: 'After knee replacement, hip replacement, ACL repair, shoulder surgery, or spinal procedures, water removes the load that makes early movement painful. Once your surgeon clears you, we begin progressive loading and gait retraining on the aqua treadmill - often weeks earlier than land-based rehab alone allows.',
    tags: ['Knee replacement', 'Hip replacement', 'ACL repair', 'Shoulder surgery', 'Spinal procedures', 'Fracture rehab'],
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1781294269/POST-SURGICAL_REHABILITATION_bc9mdn.webp',
    alt: 'Post-surgical aqua treadmill rehabilitation at R3BOOT Dadar',
    caption: 'Progressive loading begins weeks earlier than land-based rehab alone.',
  },
  {
    label: '02 // SPORTS INJURIES',
    title: 'Sports Injuries & Return to Sport',
    body: 'Ligament and tendon injuries, muscle tears, IT band syndrome, patellar tendinopathy, and rotator cuff problems all need movement to heal - but movement reloads the injury on land. In water, the same movement happens with up to 75% less joint load and 225% more muscle blood flow, so training continues while the injury heals.',
    tags: ['Ligament & tendon injuries', 'Muscle tears', 'IT band syndrome', 'Patellar tendinopathy', 'Rotator cuff', 'Return-to-sport conditioning'],
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1781294289/SPORTS_INJURIES_RETURN_TO_SPORT_wlvjqr.webp',
    alt: 'Sports injury rehabilitation on aqua treadmill at R3BOOT Dadar',
    caption: '75% less joint load. 225% more muscle blood flow than land training.',
  },
  {
    label: '03 // JOINT & SPINE',
    title: 'Joint & Spine Conditions',
    body: 'Knee and hip osteoarthritis, rheumatoid arthritis, disc herniation, spondylosis, and lumbar spine conditions all cause pain that worsens under load. Aqua therapy reduces that load enough for pain-free movement and strengthening. Joint stiffness after immobilisation responds quickly too - warm water relaxes muscle before movement begins.',
    tags: ['Knee & hip osteoarthritis', 'Rheumatoid arthritis', 'Disc herniation', 'Spondylosis', 'Lumbar spine conditions', 'Post-immobilisation stiffness'],
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1781294628/a2997f88-f950-4783-956a-43885816055f_uztncr.webp',
    alt: 'Aqua therapy for joint and spine conditions at R3BOOT Dadar',
    caption: 'Pain-free movement and strengthening for arthritic and spinal conditions.',
  },
  {
    label: '04 // EXTENDED CARE',
    title: 'Extended & Long-Term Applications',
    body: 'Beyond injury and surgery, aqua therapy supports chronic pain management, gait retraining, and postural correction. For older adults, it builds balance and strength without joint stress. For pregnancy-related pain, it offers safe relief. Hydrostatic pressure also reduces swelling in edema and circulatory conditions.',
    tags: ['Chronic pain', 'Gait retraining', 'Geriatric balance', 'Postural dysfunction', 'Pregnancy-related pain', 'Edema & circulation'],
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1781294394/EXTENDED_LONG-TERM_APPLICATIONS_sgyuig.webp',
    alt: 'Extended aqua therapy applications for chronic and geriatric care at R3BOOT',
    caption: 'Long-term care for chronic pain, balance, and circulatory conditions.',
  },
]

const chamberSpecs = [
  {
    spec: '0 to 4 feet',
    label: 'Adjustable water level',
    detail: 'Lower water increases joint load for strengthening, higher water reduces it for early-stage pain relief - set per session.',
  },
  {
    spec: '0.1 to 15 km/h',
    label: 'Treadmill speed range',
    detail: 'Starts near zero for gait retraining after injury or surgery, then progresses toward running-speed conditioning as you recover.',
  },
  {
    spec: 'Adjustable',
    label: 'Water temperature',
    detail: 'Warm water eases muscle spasm and improves circulation for pain relief, cooler water supports post-exertion recovery.',
  },
  {
    spec: 'Targeted jets',
    label: 'Hydrotherapy jets',
    detail: 'Directional pressure aimed at specific muscles or joints, giving targeted relief alongside your treadmill work.',
  },
  {
    spec: 'Upright + seated',
    label: 'Exercise positions',
    detail: 'Switch between walking, standing balance work, and seated exercises in the same session without leaving the chamber.',
  },
  {
    spec: 'Private chamber',
    label: 'Single-patient session',
    detail: 'Every session is one-to-one with your physiotherapist in a private chamber - never a shared pool with other patients.',
  },
]

const locationPages = [
  { label: 'Aqua Therapy Mumbai', href: '/aqua-therapy-mumbai', sub: 'Hub page - all suburbs' },
  { label: 'Aqua Therapy Dadar', href: '/aqua-therapy-dadar', sub: 'On-site - walk from station' },
  { label: 'Near Bandra', href: '/aqua-therapy-bandra', sub: '8 min by train' },
  { label: 'Near Worli', href: '/aqua-therapy-worli', sub: '10 - 15 min by road' },
  { label: 'Near Lower Parel', href: '/aqua-therapy-lower-parel', sub: '5 - 10 min by car' },
  { label: 'Near Andheri', href: '/aqua-therapy-andheri', sub: '20 min by Western line' },
]

export default function AquaTherapyServicePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">

      {/* HERO */}
      <section className="relative h-[80vh] flex items-end overflow-hidden">
        <Image
          src="/images/Services_image/Hydrotherapy.webp"
          alt="Aqua treadmill therapy at R3BOOT Dadar Mumbai - physio-supervised rehabilitation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

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

          <div className="max-w-5xl">
            <div className="flex items-center gap-3 text-white/70 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">AQUA THERAPY // DADAR, MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tighter leading-[1.02]">
              Aqua Therapy in Mumbai
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium">
              Physio-supervised aqua treadmill rehabilitation at R3BOOT Dadar. Recover earlier. Load less. Move better.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Post-Surgery', 'Sports Injuries', 'Knee Pain', 'Arthritis', 'Back Pain', 'Return to Sport'].map((tag) => (
                <span key={tag} className="bg-white/10 border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + CTA CARD */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                WHAT IT IS //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                Rehabilitation That Land-Based Physio{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Cannot Do Alone.</span>
              </h2>
              <div className="prose prose-lg text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  When a joint is injured, inflamed, or post-surgical, land-based exercise loads it under full body weight.
                  That load creates pain, limits range of motion, and forces a slower rehabilitation timeline.
                  Aqua therapy removes the constraint. Water reduces compressive joint load by up to 75%, allowing
                  progressive strengthening and functional movement at a stage when equivalent land exercise is not yet safe.
                </p>
                <p>
                  At R3BOOT, aqua therapy is delivered on a private aqua treadmill chamber - not a shared pool.
                  Water level, speed, temperature, and jet settings are adjusted to your specific condition and
                  recovery stage. Every session is supervised one-to-one by a physiotherapist who designed your program.
                  The result: earlier functional rehabilitation, faster tissue recovery, and a controlled return to activity.
                </p>
              </div>

              {/* Stats row */}
              <div className="mt-12 grid grid-cols-3 gap-4">
                {[
                  { stat: '75%', label: 'joint load reduction in chest-deep water' },
                  { stat: '225%', label: 'increase in muscle blood flow vs land exercise' },
                  { stat: '4 ft', label: 'max water level - adjustable per session' },
                ].map((item) => (
                  <div key={item.stat} className="text-center bg-[#F8F9FA] dark:bg-white/5 rounded-2xl p-5">
                    <div className="text-3xl font-black text-[#513394] dark:text-[#8B5CF6] mb-2">{item.stat}</div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky CTA */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-[#1A1A1A] p-8 rounded-[2.5rem] text-white shadow-2xl">
                <div className="w-2 h-8 bg-[#513394] mb-6" />
                <h3 className="text-xl font-black mb-2 tracking-wide">BOOK A SESSION</h3>
                <p className="text-white/60 text-sm mb-8 leading-relaxed">
                  R3BOOT Dadar. Physio-supervised aqua treadmill sessions by appointment.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Post-surgery clearance assessment',
                    'Condition-specific session design',
                    '45 to 60 min per session',
                    'One-to-one with physiotherapist',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#513394] flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+919702368612"
                  className="block text-center bg-[#513394] text-white font-black px-8 py-4 rounded-2xl mb-3 hover:bg-[#603eb0] transition-colors"
                >
                  Call to Book
                </a>
                <a
                  href="https://wa.me/919702368612"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="block text-center bg-[#25D366] text-white font-black px-8 py-3 rounded-2xl text-sm"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WATER WORKS - 4 MECHANISMS */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              <div>
                <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                  THE SCIENCE //
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
                  Four Properties of Water.{' '}
                  <span className="text-[#513394] dark:text-[#8B5CF6]">One Environment No Land Session Can Match.</span>
                </h2>
              </div>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Aqua therapy is effective because four physical properties of water act simultaneously on your body.
                No land-based environment replicates this combination. Your physiotherapist adjusts each variable
                to match your recovery stage - water depth, treadmill speed, temperature, and jet pressure.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {mechanisms.map((m) => (
                <div key={m.icon} className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-lg group transition-all duration-300">
                  <div className="flex items-start gap-5 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black text-sm shrink-0 group-hover:bg-[#513394] group-hover:text-white transition-all">
                      {m.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-black tracking-[0.25em] text-[#513394] dark:text-[#A78BFA] uppercase">{m.label}</span>
                      <h3 className="text-lg font-black text-gray-900 dark:text-white mt-1">{m.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AQUA TREADMILL CHAMBER SPECS */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                  THE EQUIPMENT //
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                  Not a Pool.{' '}
                  <span className="text-[#513394] dark:text-[#8B5CF6]">A Precision Rehabilitation Chamber.</span>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                  Every variable below is adjustable in real time by your physiotherapist - the difference between a shared pool and clinical precision.
                </p>
                <div className="space-y-4">
                  {chamberSpecs.map((s) => (
                    <div key={s.spec} className="flex gap-4 group">
                      <div className="shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#513394] dark:bg-[#8B5CF6]" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-0.5">
                          <span className="font-black text-gray-900 dark:text-white text-base">{s.spec}</span>
                          <span className="text-[11px] font-black tracking-[0.15em] text-[#513394] dark:text-[#A78BFA] uppercase">{s.label}</span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{s.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[16/10] sm:aspect-[4/5] shadow-2xl order-first lg:order-none">
                <Image
                  src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1781292109/Aqua_Trademll_Chamber_image_xzyhbf.webp"
                  alt="Aqua treadmill chamber at R3BOOT Dadar - adjustable water level and speed controls"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                    PRECISION REHAB //
                  </span>
                  <p className="text-white text-lg font-black tracking-tight leading-tight">
                    Speed 0.1 to 15 km/h. Water level 0 to 4 feet. Temperature adjustable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS TREATED */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                CLINICAL APPLICATIONS //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                What Aqua Therapy{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Treats at R3BOOT</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-3xl leading-relaxed">
                Aqua therapy has broad clinical application from acute injury management to chronic disease care.
                Your physiotherapist will assess whether aqua therapy is the right starting point or where it fits
                in your overall rehabilitation programme.
              </p>
            </div>

            <div className="space-y-16 lg:space-y-24">
              {conditions.map((c, i) => {
                const reversed = i % 2 === 1
                return (
                  <div key={c.label} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className={reversed ? 'lg:order-2' : ''}>
                      <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-3 block">
                        {c.label}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                        {c.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                        {c.body}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {c.tags.map((tag) => (
                          <span key={tag} className="text-xs font-bold text-gray-600 dark:text-gray-300 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 px-3 py-1.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-xl ${reversed ? 'lg:order-1' : ''}`}>
                      <Image src={c.image} alt={c.alt} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-white text-base font-black tracking-tight leading-tight">{c.caption}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* DEEP vs SHALLOW WATER - BIOMECHANICAL ADVANTAGE */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                CLINICAL DEPTH //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
                Water Level Is Not a Setting.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">It Is a Clinical Decision.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#513394] text-white p-8 rounded-[2rem]">
                <div className="text-xs font-black tracking-[0.25em] uppercase text-white/60 mb-4">DEEP WATER</div>
                <h3 className="text-2xl font-black mb-4">Open Chain. Maximum Offload.</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  Higher water level means maximum buoyancy and minimum joint compression.
                  Used for: early post-surgical mobility, acute pain reduction, range-of-motion work,
                  and cases where even minimal weight-bearing on land is not safe.
                </p>
                <div className="bg-white/10 rounded-xl p-3">
                  <p className="text-white/70 text-xs font-bold">Environment: open chain - exercises focus on mobility and motor control without stability demands.</p>
                </div>
              </div>

              <div className="bg-gray-900 dark:bg-white/5 text-white p-8 rounded-[2rem]">
                <div className="text-xs font-black tracking-[0.25em] uppercase text-white/60 mb-4">SHALLOW WATER</div>
                <h3 className="text-2xl font-black mb-4">Closed Chain. Progressive Loading.</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  Lower water level allows more body weight through the joint, simulating land-based loading
                  in a controlled, protected environment. Used for: strength training, gait retraining,
                  balance work, and progressive return-to-sport conditioning.
                </p>
                <div className="bg-white/10 rounded-xl p-3">
                  <p className="text-white/70 text-xs font-bold">Environment: closed chain simulation - load is graduated by adjusting water depth, not by changing the exercise.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F9FA] dark:bg-white/5 rounded-[2rem] p-8 border border-gray-100 dark:border-white/5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Spinal Protection',
                    body: 'Reduced axial loading through the spine allows safe core strengthening and stabilisation exercises without the compressive load that aggravates disc and vertebral conditions on land.',
                  },
                  {
                    title: '225% Blood Flow',
                    body: 'Muscle blood flow increases by up to 225% during aqua treadmill exercise compared to land-based exercise, improving oxygen delivery to healing tissue and accelerating recovery.',
                  },
                  {
                    title: 'Earlier Rehab',
                    body: 'The primary clinical advantage of aqua therapy is not that it replaces land physio - it is that it allows functional rehabilitation to begin earlier in the recovery cycle, improving long-term outcomes.',
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h4 className="font-black text-gray-900 dark:text-white mb-2 text-base">{item.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT IS AND ISN'T FOR */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                SCREENING //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
                Who Aqua Therapy Is For.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">And Who It Is Not.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-white/5 rounded-[2rem] p-6 lg:p-8 border border-gray-100 dark:border-white/5 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#513394]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#513394]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-black text-gray-900 dark:text-white text-lg">GOOD CANDIDATES</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Post-surgical patients cleared for water-based rehab',
                    'Sports injuries in sub-acute or chronic phase',
                    'Osteoarthritis and rheumatoid arthritis',
                    'Lower back pain and disc conditions',
                    'Patients where land-based exercise causes pain',
                    'Athletes returning to sport after injury',
                    'Geriatric patients requiring low-impact exercise',
                    'Chronic pain or fatigue syndromes',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#8B5CF6] shrink-0 mt-2" />
                      <span className="text-gray-600 dark:text-gray-400 text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-white/5 rounded-[2rem] p-6 lg:p-8 border border-gray-100 dark:border-white/5 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="font-black text-gray-900 dark:text-white text-lg">CONTRAINDICATIONS</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Unstable cardiovascular conditions',
                    'Deep vein thrombosis (DVT)',
                    'Active infections or fever',
                    'Open wounds or active skin infections',
                    'Contagious diseases',
                    'Urinary tract infection',
                    'Recent chemotherapy',
                    'Severe epilepsy, labyrinthitis, or severe aquaphobia',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
                      <span className="text-gray-600 dark:text-gray-400 text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-400 dark:text-gray-500 text-xs mt-5 leading-relaxed">
                  Screened before your first session. If any condition applies, we&apos;ll advise on timing or alternatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROTOCOL - WHAT TO EXPECT */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                  YOUR SESSION //
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                  What Happens at{' '}
                  <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT</span>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
                  A session runs 45 to 60 minutes, one-to-one with your physiotherapist beside the aqua treadmill throughout.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      step: '01',
                      title: 'Assessment and clearance',
                      body: 'We review your injury, surgical history, and medical background, then screen for contraindications to confirm aqua therapy is right for you.',
                    },
                    {
                      step: '02',
                      title: 'Program design',
                      body: 'Water level, speed, temperature, and jets are prescribed for your condition - every variable set to match your recovery stage, not a generic protocol.',
                    },
                    {
                      step: '03',
                      title: 'Supervised session',
                      body: 'Your physiotherapist guides every movement and adjusts settings in real time as your body responds, for the full 45 to 60 minutes.',
                    },
                    {
                      step: '04',
                      title: 'Review and progression',
                      body: 'We review your response, adjust the next session, and provide home exercises where needed - so progress carries over between visits.',
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <div className="w-12 h-12 rounded-full bg-[#513394] dark:bg-[#8B5CF6] flex items-center justify-center text-white font-black shrink-0 text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[16/10] sm:aspect-[4/5] shadow-2xl order-first lg:order-none">
                <Image
                  src="/images/Services_image/Hydrotherapy.webp"
                  alt="Physiotherapist supervising aqua treadmill session at R3BOOT Dadar"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                    ONE-TO-ONE //
                  </span>
                  <p className="text-white text-lg font-black tracking-tight leading-tight">
                    Physiotherapist present through every session. Program adjusted in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <PhysiotherapyTeam />

      {/* LOCATION INFO */}
      <AquaTherapyLocationInfo />

      {/* LOCATION HUB - 6 SUBURB PAGES */}
      <section className="py-16 lg:py-20 border-t border-gray-100 dark:border-white/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                AQUA THERAPY ACROSS MUMBAI //
              </span>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                R3BOOT Serves All of Mumbai from Dadar East
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {locationPages.map((loc) => (
                <Link
                  key={loc.href}
                  href={loc.href}
                  className="group bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-5 hover:border-[#513394]/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-gray-900 dark:text-white text-sm group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors">
                      {loc.label}
                    </span>
                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                  <p className="text-gray-400 dark:text-gray-500 text-xs">{loc.sub}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={aquaTherapyFaqs} />

      {/* CTA BANNER */}
      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Book Aqua Therapy at R3BOOT Dadar
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Our physiotherapists will assess your condition and tell you honestly whether aqua therapy is the right
              starting point - and what your rehabilitation programme should look like.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919702368612"
                className="w-full sm:w-auto bg-white text-[#513394] font-black px-10 py-5 rounded-full hover:scale-105 transition-all shadow-2xl text-lg"
              >
                Call to Book
              </a>
              <a
                href="https://wa.me/919702368612"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-full sm:w-auto border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full hover:bg-white/10 transition-all text-lg"
              >
                WhatsApp Us
              </a>
            </div>
            <p className="text-white/40 mt-8 font-bold tracking-widest text-xs">PALAI PLAZA, DADAR EAST, MUMBAI 400 014</p>
          </div>
        </div>
      </section>

      <ServiceSchema
        serviceName="Aqua Therapy Mumbai"
        description="Physio-supervised aqua treadmill rehabilitation at R3BOOT Dadar. Post-surgery recovery, sports injuries, arthritis, knee pain, back pain. Adjustable water level, treadmill speed 0.1 to 15 km/h, targeted hydrotherapy jets."
        serviceUrl="https://www.r3boot.in/services/aqua-therapy"
        areaServed="Mumbai"
      />
      <FAQSchema faqs={aquaTherapyFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Aqua Therapy', url: '/services/aqua-therapy' },
      ]} />
    </main>
  )
}
