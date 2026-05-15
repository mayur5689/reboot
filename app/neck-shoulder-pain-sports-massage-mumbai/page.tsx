import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import { neckShoulderPainSportsMassageFaqs } from '@/lib/faqs/neck-shoulder-pain-sports-massage-mumbai'

export const metadata: Metadata = {
  title: 'Sports Massage for Neck & Shoulder Pain in Mumbai | R3BOOT',
  description:
    'Sports massage for neck and shoulder pain in Mumbai at R3BOOT, Dadar East. Trapezius, levator scapulae, scalenes — targeted relief for desk workers and athletes. Book now.',
  alternates: { canonical: '/neck-shoulder-pain-sports-massage-mumbai' },
  keywords: [
    'sports massage for neck pain mumbai',
    'shoulder pain massage mumbai',
    'neck pain massage mumbai',
    'trapezius massage mumbai',
    'desk neck pain massage mumbai',
    'sports massage neck shoulder mumbai',
  ],
}

const muscles = [
  {
    muscle: 'Upper Trapezius',
    role: 'Chronically overactivated by desk posture and overhead training. The most common source of neck tension in Mumbai professionals.',
    approach: 'Deep tissue release, cross-fiber friction, trigger point deactivation',
  },
  {
    muscle: 'Levator Scapulae',
    role: 'Runs from cervical vertebrae to shoulder blade. Tightens from forward head posture and laptop/phone use.',
    approach: 'Direct muscle belly release, cervical lateral flexion mobilisation',
  },
  {
    muscle: 'Scalenes',
    role: 'Neck flexors that become tight in desk-forward posture and shallow chest breathing. Can compress the brachial plexus causing arm symptoms.',
    approach: 'Gentle scalene release, breathing mechanics assessment',
  },
  {
    muscle: 'Suboccipitals',
    role: 'Small muscles at the base of the skull. Tension here causes "tension headaches" and restricted cervical rotation.',
    approach: 'Suboccipital release, atlas-axis area work',
  },
  {
    muscle: 'Pec Minor',
    role: 'Anterior shoulder restriction pulling the shoulder forward. Causes impingement-type pain in pressing movements.',
    approach: 'Pec minor stretch and release, anterior shoulder capsule work',
  },
  {
    muscle: 'Rhomboids & Mid-Trap',
    role: 'Chronically overstretched from forward shoulder posture, causing upper back aching and shoulder blade pain.',
    approach: 'Targeted activation cues, soft tissue work on overstretched fibers',
  },
]

export default function NeckShoulderPainSportsMassageMumbaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/service/Services_image/Sports Massage_1.webp"
          alt="Sports massage for neck and shoulder pain – R3BOOT Mumbai"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 pb-20">
          <Link href="/sports-massage-mumbai" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all mb-8 group">
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#513394] transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="font-bold tracking-wider text-sm">SPORTS MASSAGE MUMBAI</span>
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-white/70 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">NECK & SHOULDER // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Sports Massage for Neck & Shoulder Pain in Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              Trapezius, levator scapulae, scalenes — targeted release for desk workers, athletes, and gym-goers.
            </p>
          </div>
        </div>
      </section>

      {/* ─── INTRO + SIDEBAR ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                Will Sports Massage Help <span className="text-[#513394] dark:text-[#8B5CF6]">Neck Pain?</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Yes — and it is often faster than stretching or rest for the type of neck pain most active
                  Mumbai professionals carry. The pattern is consistent: nine hours at a desk in BKC or Lower Parel,
                  followed by an overhead pressing session at the gym, followed by another morning with a stiff
                  neck. The upper trapezius, levator scapulae, and scalenes accumulate tension faster than passive
                  recovery can clear it. Sports massage directly deactivates these muscles. One well-targeted session
                  restores more cervical rotation than weeks of stretching.
                </p>
                <p>
                  At R3BOOT in Dadar East, therapist Akshay Nalawde identifies the exact muscles holding the
                  pattern — trapezius, suboccipitals, scalenes, pec minor — and treats them in sequence.
                  Sessions begin with assessment of cervical range of motion and scapular position.
                  Treatment is anatomy-specific, not a generic neck-and-shoulder rub.
                </p>
              </div>

              <div className="mt-20">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  MUSCLES WE TARGET
                </h3>
                <div className="space-y-0 border border-gray-100 dark:border-white/5 rounded-[2rem] overflow-hidden">
                  {muscles.map((item, idx) => (
                    <div key={idx} className={`p-6 lg:p-8 ${idx % 2 === 0 ? 'bg-white dark:bg-white/[0.02]' : 'bg-gray-50/70 dark:bg-white/[0.04]'} group hover:bg-[#513394]/5 dark:hover:bg-[#513394]/10 transition-colors`}>
                      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black shrink-0 text-sm">
                          {(idx + 1).toString().padStart(2, '0')}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-black text-gray-900 dark:text-white mb-2">{item.muscle}</h4>
                          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{item.role}</p>
                          <p className="text-[#513394] dark:text-[#A78BFA] text-sm font-medium"><span className="font-semibold">Approach: </span>{item.approach}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#513394]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-black mb-8 tracking-wide flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#513394]" />
                  WHO WE HELP //
                </h3>
                <ul className="space-y-5 mb-12">
                  {[
                    'Desk workers with chronic neck tension',
                    'Gym-goers with shoulder stiffness',
                    'Runners with upper back tightness',
                    'Overhead athletes (cricket, swimming)',
                    'Anyone with tension headaches',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#513394] flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/80 font-medium leading-snug text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="tel:+919702368612" className="block text-center bg-[#513394] text-white font-black px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-lg mb-3">
                  Call to Book
                </a>
                <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer" className="block text-center bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-base">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOCAL + ADDRESS ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">DADAR, MUMBAI //</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6">
                Central Mumbai's <span className="text-[#513394] dark:text-[#8B5CF6]">Recovery Clinic</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl mx-auto">
                R3BOOT is at Dadar East — 5 minutes from Dadar station on the Central Line. Professionals from BKC, Lower Parel, Worli, Parel, and Bandra use us as their midpoint recovery stop.
              </p>
            </div>
            <div className="bg-[#1A1A1A] rounded-[2rem] p-8 lg:p-10 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <p className="text-xs font-black tracking-[0.25em] text-white/40 uppercase mb-3">ADDRESS</p>
                  <p className="text-white font-bold leading-relaxed">Palai Plaza, 203<br />Swami Gyan Jivandas Marg<br />Dadar East, Mumbai – 400 014</p>
                </div>
                <div>
                  <p className="text-xs font-black tracking-[0.25em] text-white/40 uppercase mb-3">HOURS</p>
                  <p className="text-white font-bold leading-relaxed">Monday – Saturday<br />7:00 AM – 8:00 PM<br />Sunday by appointment</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-black tracking-[0.25em] text-white/40 uppercase mb-1">BOOK</p>
                  <a href="tel:+919702368612" className="block text-center bg-[#513394] text-white font-black px-6 py-4 rounded-xl hover:opacity-90 transition-all text-sm">Call +91 97023 68612</a>
                  <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer" className="block text-center bg-[#25D366] text-white font-black px-6 py-4 rounded-xl hover:opacity-90 transition-all text-sm">WhatsApp Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection faqs={neckShoulderPainSportsMassageFaqs} />

      {/* ─── CTA ─── */}
      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Neck and Shoulder Pain That <span className="text-white/50">Keeps Coming Back?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              Sports massage for neck and shoulder pain at R3BOOT, Dadar East. Treat the muscle causing it — not just the symptom.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:+919702368612" className="w-full sm:w-auto bg-white text-[#513394] font-black px-10 py-5 rounded-full transition-all hover:scale-105 shadow-2xl text-lg tracking-wide">
                Call to Book
              </a>
              <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer" className="w-full sm:w-auto border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full transition-all hover:bg-white/10 text-lg tracking-wide">
                WhatsApp Us
              </a>
            </div>
            <p className="text-white/40 mt-8 font-bold tracking-widest text-sm">DADAR EAST, MUMBAI</p>
          </div>
        </div>
      </section>

      <ServiceSchema
        serviceName="Sports Massage for Neck and Shoulder Pain in Mumbai"
        description="Sports massage for neck and shoulder pain in Mumbai at R3BOOT, Dadar East. Targeted release of trapezius, levator scapulae, scalenes, and shoulder muscles."
        serviceUrl="https://www.r3boot.in/neck-shoulder-pain-sports-massage-mumbai"
      />
      <FAQSchema faqs={neckShoulderPainSportsMassageFaqs} />
    </main>
  )
}
