import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { services } from '@/lib/services'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { sportsMassageMumbaiFaqs } from '@/lib/faqs/sports-massage-mumbai'

export const metadata: Metadata = {
  title: 'Sports Massage Mumbai | Physio-Led Recovery | R3BOOT Dadar',
  description:
    'Sports massage Mumbai at R3BOOT Dadar | physio-led, not a spa. Cupping, mobility work & soft tissue release for athletes & gym-goers. 5.0 ★ on Google. Book via WhatsApp.',
  alternates: { canonical: '/sports-massage-mumbai' },
  keywords: [
    'sports massage mumbai',
    'gym recovery massage mumbai',
    'sports massage for athletes mumbai',
    'massage for gym soreness',
    'massage after workout mumbai',
    'muscle recovery therapy mumbai',
  ],
}

const otherServices = services.filter((s) => s.slug !== 'sports-massage').slice(0, 4)

export default function SportsMassageMumbaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/service/Services_image/Sports Massage_1.webp"
          alt="Sports Massage Mumbai – R3boot Recovery Center Dadar"
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Sports Massage in Mumbai for Gym Recovery, Athletes & Active Lifestyles
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              Specialized recovery therapy for athletes, gym-goers, and anyone who trains regularly.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OPENING SECTION (matches service page 12-col layout) ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                Recovery Built for <span className="text-[#513394] dark:text-[#8B5CF6]">People Who Train</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Sports massage is a specialized recovery therapy designed for athletes, gym enthusiasts, and
                  physically active individuals. At R3boot in Mumbai, sports massage helps reduce muscle soreness,
                  improve mobility, and accelerate recovery after workouts, sports training, or intense physical
                  activity.
                </p>
                <p>
                  Many people who train regularly experience tight muscles, reduced flexibility, or lingering
                  soreness. Sports massage helps restore muscle balance so the body can perform and recover better.
                </p>
              </div>

              {/* What sports massage helps with, step cards like service pages */}
              <div className="mt-20">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  WHAT IT SUPPORTS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Reduces post-workout soreness', description: 'Helps muscles recover faster after heavy training and intense sessions.' },
                    { title: 'Improves mobility & flexibility', description: 'Releases tight fascia and restores range of motion for better performance.' },
                    { title: 'Supports injury prevention', description: 'Regular sessions help maintain muscle balance and reduce injury risk.' },
                    { title: 'Faster recovery between sessions', description: 'Better circulation and waste removal so you can train consistently.' },
                  ].map((step, idx) => (
                    <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden">
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

            {/* Right column: sticky benefits card (matches service pages) */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#513394]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-black mb-8 tracking-wide flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#513394]" />
                  IDEAL FOR //
                </h3>
                <ul className="space-y-6 mb-12">
                  {[
                    'Gym-goers & weightlifters',
                    'Runners & endurance athletes',
                    'Team sport players',
                    'CrossFit & functional fitness',
                    'Anyone with regular training load',
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-4 group/item">
                      <div className="w-6 h-6 rounded-full bg-[#513394] flex items-center justify-center shrink-0 mt-1 group-hover/item:scale-110 transition-transform">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/80 font-medium leading-snug group-hover/item:text-white transition-colors">{benefit}</span>
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

      {/* ─── GYM RECOVERY SECTION (max-w-7xl two-col like TECHNIQUES) ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="/images/service/Services_image/Sports Massage_1.webp"
                alt="Gym recovery and sports massage Mumbai – R3BOOT Dadar"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  GYM RECOVERY //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  Sports massage for lifters & gym-goers
                </p>
              </div>
            </div>
            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                GYM & TRAINING //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                Sports Massage for <span className="text-[#513394] dark:text-[#8B5CF6]">Gym Recovery</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                People who train in gyms often experience muscle soreness after heavy workouts. Exercises like
                squats, deadlifts, bench presses, and high-intensity training place significant stress on muscles
                and connective tissue. Sports massage helps gym-goers by:
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Reducing post-workout soreness', body: 'Eases muscle tension and discomfort after heavy training.' },
                  { title: 'Improving muscle recovery', body: 'Supports faster recovery after heavy training blocks.' },
                  { title: 'Releasing tight fascia', body: 'Improves tissue mobility around muscles for better movement.' },
                  { title: 'Improving range of motion', body: 'Better mobility supports safer lifts and better form.' },
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
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-8 italic">
                Many regular gym members in Mumbai use sports massage as part of their weekly or monthly recovery routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ATHLETES & RUNNERS SECTION (max-w-7xl two-col) ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                ATHLETES & RUNNERS //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                Sports Massage for <span className="text-[#513394] dark:text-[#8B5CF6]">Athletes and Runners</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                Athletes and runners place repetitive stress on their muscles and joints. Over time this can lead to
                tight hamstrings, calf strains, knee pain, or shoulder stiffness. Sports massage is commonly used by:
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['runners', 'cyclists', 'football players', 'cricket players', 'CrossFit athletes', 'endurance athletes'].map(
                  (sport, idx) => (
                    <span
                      key={idx}
                      className="bg-[#513394]/10 dark:bg-[#8B5CF6]/20 text-[#513394] dark:text-[#A78BFA] font-bold px-5 py-2.5 rounded-full text-sm"
                    >
                      {sport}
                    </span>
                  )
                )}
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                Regular sports massage sessions help improve circulation and maintain muscle flexibility, which reduces
                the risk of injuries.
              </p>
            </div>
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="/images/service/Services_image/Physiotherapy_1.webp"
                alt="Sports massage for athletes and runners – R3BOOT Mumbai"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  ATHLETES //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  Runners, cyclists, team sports & more
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY SPORTS MASSAGE AFTER WORKOUTS (step cards like THE PROCESS) ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                POST-WORKOUT RECOVERY //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Why Sports Massage Helps <span className="text-[#513394] dark:text-[#8B5CF6]">After Intense Workouts</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                During intense workouts, muscles develop microscopic tears and inflammation. This is part of the normal
                muscle-building process but it can lead to soreness and stiffness. Sports massage improves recovery by:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Increasing blood circulation', description: 'More blood flow to muscles supports repair and nutrient delivery.' },
                { title: 'Removing metabolic waste', description: 'Helps clear lactic acid and other by-products from tissues.' },
                { title: 'Relaxing tight muscle fibers', description: 'Reduces tension and restores normal muscle function.' },
                { title: 'Restoring mobility', description: 'Better range of motion supports performance and injury prevention.' },
              ].map((step, idx) => (
                <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden">
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
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mt-10">
              For people who train frequently, proper recovery can improve both performance and injury prevention.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CUPPING SECTION (max-w-7xl, numbered list style) ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl order-2 lg:order-1">
              <Image
                src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1771404921/cupping-therapy-sports-massage-mumbai_poqr2z.avif"
                alt="Sports massage and cupping therapy – R3boot Mumbai"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  CUPPING THERAPY //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  Combined with sports massage for deeper recovery
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                FASTER RECOVERY //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                Sports Massage and <span className="text-[#513394] dark:text-[#8B5CF6]">Cupping Therapy</span> for Faster Recovery
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                At R3boot, sports massage sessions may include cupping therapy when deeper muscle recovery is needed.
                Cupping therapy uses suction cups placed on the skin to improve blood circulation and release tight fascia.
                When combined with sports massage:
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Sports massage', body: 'Works on deep muscle tissue with targeted pressure and release.' },
                  { title: 'Cupping therapy', body: 'Improves circulation and fascia mobility in areas that need deeper release.' },
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
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-8 italic">
                This combination is often used by athletes and gym-goers to recover faster after intense training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                KNOW THE DIFFERENCE //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Sports Massage vs Deep Tissue vs <span className="text-[#513394] dark:text-[#8B5CF6]">Regular Massage</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl mx-auto">
                Not all massage is the same. Here is how sports massage differs from other types, and why that matters if you train.
              </p>
            </div>
            <div className="overflow-x-auto rounded-[2rem] border border-gray-200 dark:border-white/10 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#513394] text-white">
                    <th className="text-left px-6 py-5 font-black tracking-wider text-xs uppercase w-[28%]">Feature</th>
                    <th className="text-left px-6 py-5 font-black tracking-wider text-xs uppercase">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white/60 inline-block" />
                        Sports Massage
                      </span>
                    </th>
                    <th className="text-left px-6 py-5 font-black tracking-wider text-xs uppercase">Deep Tissue</th>
                    <th className="text-left px-6 py-5 font-black tracking-wider text-xs uppercase">Regular / Relaxation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                  {[
                    ['Primary goal', 'Performance & recovery for active bodies', 'Release chronic muscle tension & knots', 'Relaxation & stress relief'],
                    ['Pressure level', 'Moderate–firm, varies by sport + timing', 'Deep, sustained on specific areas', 'Light–moderate, uniform'],
                    ['Techniques used', 'Soft tissue release, MFR, cupping, compressions', 'Slow deep strokes, cross-fiber friction', 'Swedish strokes, effleurage, petrissage'],
                    ['Best timing', 'Pre-event, post-event, maintenance, recovery', 'Chronic injury & desk posture correction', 'Stress, general relaxation'],
                    ['Who it\'s for', 'Athletes, gym-goers, active professionals', 'Chronic pain, postural issues', 'Anyone seeking relaxation'],
                    ['At R3BOOT', 'Yes, primary offering', 'Available as needed', 'Not the focus here'],
                  ].map(([feature, sports, deep, regular], idx) => (
                    <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white dark:bg-white/3' : 'bg-gray-50 dark:bg-white/[0.02]'} hover:bg-[#513394]/5 dark:hover:bg-[#513394]/10 transition-colors`}>
                      <td className="px-6 py-5 font-bold text-gray-900 dark:text-white text-sm">{feature}</td>
                      <td className="px-6 py-5 text-gray-700 dark:text-gray-300 font-medium">{sports}</td>
                      <td className="px-6 py-5 text-gray-500 dark:text-gray-400">{deep}</td>
                      <td className="px-6 py-5 text-gray-500 dark:text-gray-400">{regular}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4 TYPES OF SPORTS MASSAGE ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                TYPES OF SPORTS MASSAGE //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                The 4 Types of <span className="text-[#513394] dark:text-[#8B5CF6]">Sports Massage</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Sports massage is not one thing. The right approach depends on when you train, where you are in your season, and what your body needs right now.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  type: 'Pre-Event',
                  timing: '15–45 min before training or competition',
                  goal: 'Activate muscles, increase circulation, reduce pre-event tightness. Shorter, lighter strokes that prepare the body, not deep tissue work that creates soreness.',
                  color: '#513394',
                },
                {
                  type: 'Post-Event',
                  timing: 'Within 24–48 hours after competition or heavy session',
                  goal: 'Clear metabolic waste, reduce acute inflammation, ease DOMS. Focuses on muscle groups under the highest load during the event.',
                  color: '#513394',
                },
                {
                  type: 'Maintenance',
                  timing: 'Weekly or fortnightly during active training',
                  goal: 'Address small restrictions before they become injuries. Improves tissue quality and flexibility over time, the most impactful use for regular gym-goers.',
                  color: '#513394',
                },
                {
                  type: 'Rehabilitation',
                  timing: 'During injury recovery',
                  goal: 'Supports healing in muscles, tendons, and soft tissue. Works alongside physiotherapy to restore function, reduce scar tissue adhesion, and rebuild load tolerance.',
                  color: '#513394',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 dark:text-white/5 group-hover:text-[#513394]/5 transition-colors">
                    {idx + 1}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-4 group-hover:bg-[#513394] dark:group-hover:bg-[#8B5CF6] group-hover:text-white transition-all text-sm">
                      0{idx + 1}
                    </div>
                    <h4 className="text-xl font-black text-gray-900 dark:text-white mb-1">{item.type} Massage</h4>
                    <p className="text-xs font-bold text-[#513394] dark:text-[#A78BFA] mb-4 tracking-wide uppercase">{item.timing}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.goal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MUMBAI LOCAL RELEVANCE ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                DADAR, MUMBAI //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Sports Massage Clinic in <span className="text-[#513394] dark:text-[#8B5CF6]">Central Mumbai</span>
              </h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed text-center mb-8">
              R3BOOT is located in Dadar East, central Mumbai, 5 minutes from Dadar railway station and close to Shivaji Park. Runners doing morning loops at Shivaji Park, gym-goers from Dadar, Matunga, Parel, and Worli, and athletes training at Oval Maidan or BKC all reach us in under 20 minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['Dadar East', 'Dadar West', 'Matunga', 'Sion', 'Parel', 'Lower Parel', 'Worli', 'Shivaji Park', 'Bandra', 'Wadala'].map(
                (area, idx) => (
                  <span
                    key={idx}
                    className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-bold px-5 py-3 rounded-2xl text-sm"
                  >
                    {area}
                  </span>
                )
              )}
            </div>
            <div className="bg-[#1A1A1A] rounded-[2rem] p-8 lg:p-10 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <p className="text-xs font-black tracking-[0.25em] text-white/40 uppercase mb-3">ADDRESS</p>
                  <p className="text-white font-bold leading-relaxed">
                    Palai Plaza, 203<br />
                    Swami Gyan Jivandas Marg<br />
                    Dadar East, Mumbai – 400 014
                  </p>
                </div>
                <div>
                  <p className="text-xs font-black tracking-[0.25em] text-white/40 uppercase mb-3">HOURS</p>
                  <p className="text-white font-bold leading-relaxed">
                    Monday – Saturday<br />
                    7:00 AM – 8:00 PM<br />
                    Sunday by appointment
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-black tracking-[0.25em] text-white/40 uppercase mb-1">BOOK</p>
                  <a href="tel:+919702368612" className="block text-center bg-[#513394] text-white font-black px-6 py-4 rounded-xl hover:opacity-90 transition-all text-sm">
                    Call +91 97023 68612
                  </a>
                  <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer" className="block text-center bg-[#25D366] text-white font-black px-6 py-4 rounded-xl hover:opacity-90 transition-all text-sm">
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection faqs={sportsMassageMumbaiFaqs} />

      {/* ─── CTA (matches service page CTA sizing) ─── */}
      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Recovery for Everyone Who <span className="text-white/50">Trains</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              Book sports massage at R3boot in Dadar, combined with cupping and mobility work for faster recovery.
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

      {/* ─── OTHER SERVICES (matches service page layout) ─── */}
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
        serviceName="Sports Massage in Mumbai"
        description="Sports massage in Mumbai at R3boot helps reduce muscle tension, improve recovery, and prevent sports injuries. Located in Dadar, we combine sports massage with cupping therapy and mobility work for faster recovery."
        serviceUrl="https://www.r3boot.in/sports-massage-mumbai"
      />
      <FAQSchema faqs={sportsMassageMumbaiFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Sports Massage Mumbai', url: '/sports-massage-mumbai' },
      ]} />
    </main>
  )
}
