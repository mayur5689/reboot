import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import { clinicalPilatesWorliFaqs } from '@/lib/faqs/clinical-pilates-worli'

export const metadata: Metadata = {
  title: 'Clinical Pilates Near Worli & Lower Parel Mumbai | R3BOOT',
  description:
    'Clinical Pilates near Worli and Lower Parel, Mumbai at R3BOOT in Dadar East. 10 min from Worli, 3 min train from Lower Parel. Physiotherapist-led programs for back pain and rehab.',
  alternates: { canonical: '/clinical-pilates-worli' },
  keywords: [
    'clinical pilates worli',
    'clinical pilates worli mumbai',
    'pilates lower parel mumbai',
    'clinical pilates near worli',
    'physiotherapy pilates worli',
    'clinical pilates parel mumbai',
  ],
}

export default function ClinicalPilatesWorliPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793697/Clinical_Pillates_Image_3_pil8g7.jpg"
          alt="Clinical Pilates near Worli Lower Parel Mumbai – R3BOOT"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 pb-20">
          <Link href="/clinical-pilates-mumbai" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all mb-8 group">
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#513394] transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="font-bold tracking-wider text-sm">CLINICAL PILATES MUMBAI</span>
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-white/70 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">WORLI & LOWER PAREL // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Clinical Pilates Near Worli & Lower Parel, Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              R3BOOT in Dadar East — 10 min from Worli, 3 min train from Lower Parel. Physiotherapist-led clinical Pilates.
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
                Worli Has Sheetal's Core Pilates. <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT Has Clinical Pilates.</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Sheetal's Core Pilates on Dr Annie Besant Road in Worli is a well-run instructor-led Pilates studio.
                  If you want fitness Pilates — core strength, flexibility, general conditioning — it is a reasonable
                  option. If you have a diagnosed condition (disc herniation, scoliosis, post-ACL surgery, chronic back
                  pain), you need a physiotherapist designing your program, not a Pilates instructor.
                </p>
                <p>
                  R3BOOT is at Palai Plaza, Dadar East — 10 minutes from Worli sea face by road, 3 minutes by train
                  from Lower Parel station to Dadar. The clinical Pilates here is led by Dr. Hiral Parikh (BPT, 15+
                  years sports and post-surgical rehab) and Dr. Vaishali Vijay Rauniyar (certified Dry Needling and
                  Aquatic Rehabilitation). Programs start with a physiotherapy assessment. Reformer and mat available.
                  Post-surgical clients from Breach Candy Hospital and Hinduja Hospital (both nearby) often continue
                  their rehabilitation at R3BOOT after discharge.
                </p>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  WHO COMES FROM WORLI AND LOWER PAREL
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { area: 'Worli Sea Face Runners', issue: 'Calf, IT band, plantar fasciitis from high-volume running. Clinical Pilates for hip stability and lower limb load management.' },
                    { area: 'Phoenix Mills / Kamala Mills Gym Community', issue: 'Post-heavy-training back pain, disc issues, and movement quality for lifters and CrossFit athletes.' },
                    { area: 'BKC Corporate Athletes', issue: 'Desk posture, neck and shoulder dysfunction, lumbar instability — clinical Pilates combined with physiotherapy.' },
                    { area: 'Post-Surgical from Hinduja / Breach Candy', issue: 'Continuing rehabilitation after hospital discharge. ACL, spinal, and joint replacement programs.' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-[#F8F9FA] dark:bg-white/5 p-6 rounded-[2rem] border border-gray-100 dark:border-white/5">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-base">{item.area}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.issue}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#513394]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-xl font-black mb-3 flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#513394]" />
                  FROM WORLI & LOWER PAREL
                </h3>
                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#513394]" /><span className="text-white/70 text-sm">Lower Parel → Dadar: 3 min train</span></div>
                  <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#513394]" /><span className="text-white/70 text-sm">Worli → Dadar East: ~10 min by road</span></div>
                  <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#513394]" /><span className="text-white/70 text-sm">Parel → Dadar East: ~8 min by road</span></div>
                </div>
                <div className="border-t border-white/10 pt-6 mb-4">
                  <p className="text-xs font-black tracking-[0.25em] text-white/40 uppercase mb-2">ADDRESS</p>
                  <p className="text-white/80 font-medium text-sm leading-relaxed">Palai Plaza, 203<br />Swami Gyan Jivandas Marg<br />Dadar East – 400 014</p>
                </div>
                <div className="border-t border-white/10 pt-4 mb-8">
                  <p className="text-xs font-black tracking-[0.25em] text-white/40 uppercase mb-2">PRICING</p>
                  <p className="text-white font-bold text-sm">₹2,000 / session</p>
                  <p className="text-white/50 text-xs mt-1">5 sessions: ₹9,000 | 10 sessions: ₹17,000</p>
                </div>
                <a href="tel:+919702368612" className="block text-center bg-[#513394] text-white font-black px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-lg mb-3">Call to Book</a>
                <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer" className="block text-center bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-base">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={clinicalPilatesWorliFaqs} />

      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              10 Minutes from Worli. <span className="text-white/50">Clinical Standard.</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              Clinical Pilates at R3BOOT, Dadar East. Physiotherapist-led. Assessment-first. Used by Worli and Lower Parel's active community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:+919702368612" className="w-full sm:w-auto bg-white text-[#513394] font-black px-10 py-5 rounded-full transition-all hover:scale-105 shadow-2xl text-lg tracking-wide">Call to Book</a>
              <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer" className="w-full sm:w-auto border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full transition-all hover:bg-white/10 text-lg tracking-wide">WhatsApp Us</a>
            </div>
            <p className="text-white/40 mt-8 font-bold tracking-widest text-sm">DADAR EAST, MUMBAI – 400 014</p>
          </div>
        </div>
      </section>

      <ServiceSchema
        serviceName="Clinical Pilates near Worli and Lower Parel Mumbai"
        description="Clinical Pilates near Worli and Lower Parel, Mumbai at R3BOOT in Dadar East. 10 minutes from Worli, 3 minutes by train from Lower Parel. Physiotherapist-led programs."
        serviceUrl="https://www.r3boot.in/clinical-pilates-worli"
      />
      <FAQSchema faqs={clinicalPilatesWorliFaqs} />
    </main>
  )
}
