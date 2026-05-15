import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import { postSurgeryPilatesFaqs } from '@/lib/faqs/post-surgery-pilates-mumbai'

export const metadata: Metadata = {
  title: 'Clinical Pilates After Surgery in Mumbai | R3BOOT Dadar',
  description:
    'Clinical Pilates for post-surgical rehabilitation in Mumbai at R3BOOT, Dadar East. ACL, spinal surgery, hip and knee replacement — physiotherapist-led Pilates rehab programs.',
  alternates: { canonical: '/post-surgery-pilates-mumbai' },
  keywords: [
    'pilates after surgery mumbai',
    'post surgical pilates mumbai',
    'ACL surgery pilates mumbai',
    'pilates after spinal surgery mumbai',
    'hip knee replacement pilates mumbai',
    'post surgery rehabilitation pilates dadar',
  ],
}

const surgeries = [
  { type: 'ACL Reconstruction', timing: 'From week 6–8 post-op (surgeon-cleared)', approach: 'Reformer-based closed-chain work, quad and glute recruitment, neuromuscular control — without exceeding graft load tolerance' },
  { type: 'Spinal Surgery (Discectomy / Fusion)', timing: 'From week 6–12 post-op', approach: 'Diaphragmatic breathing, gentle spinal stabilisation, progressive lumbar loading starting below bodyweight on the reformer' },
  { type: 'Hip Replacement', timing: 'From week 6–8 post-op, within hip precautions', approach: 'Glute medius and hip abductor activation within precaution limits, gait retraining, reformer footwork for lower limb strength' },
  { type: 'Knee Replacement', timing: 'From week 6–8 post-op', approach: 'Quad and VMO activation, reformer footwork progression, knee extension loading sequence specific to implant type' },
  { type: 'Abdominal Surgery / C-Section', timing: 'From 6–12 weeks post-op', approach: 'Pelvic floor reconnection, transverse abdominis activation, progressive abdominal loading — essential before returning to exercise' },
  { type: 'Shoulder Surgery (Bankart / Rotator Cuff)', timing: 'Physiotherapy-guided, typically from week 8–12', approach: 'Scapular stabilisation, rotator cuff recruitment under low load, progressive shoulder complex reloading on the reformer' },
]

export default function PostSurgeryPilatesMumbaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793759/Clinical_Pillates_Image_4_rluyr1.png"
          alt="Clinical Pilates after surgery Mumbai – R3BOOT Dadar"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">POST-SURGERY // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Clinical Pilates After Surgery in Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              ACL, spine, hip, knee, abdominal — physiotherapist-led Pilates rehab from week 6 at R3BOOT, Dadar East.
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
                Why Clinical Pilates Belongs in <span className="text-[#513394] dark:text-[#8B5CF6]">Post-Surgical Rehab</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Standard physiotherapy after surgery focuses on pain management, swelling control, and basic range
                  of motion. It stops short of addressing the motor control deficits that cause re-injury and poor
                  long-term outcomes. After an ACL reconstruction, the quad inhibition and altered neuromuscular
                  patterns remain long after the graft heals — and they are the reason so many people re-injure.
                  After spinal surgery, fear of movement and core inhibition persist. After hip replacement, the
                  glute medius weakness doesn't fix itself with walking alone.
                </p>
                <p>
                  Clinical Pilates addresses the layer that standard physiotherapy leaves. At R3BOOT in Dadar East,
                  Dr. Hiral Parikh (BPT, 15+ years sports and post-surgical rehabilitation) and Dr. Vaishali Vijay
                  Rauniyar design your post-surgical Pilates program from your surgical procedure, post-op protocol,
                  and current functional assessment. The reformer allows graduated loading below bodyweight — critical
                  in early post-surgical phases where full load is not yet appropriate.
                </p>
              </div>

              <div className="mt-20">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  SURGERIES WE REHABILITATE WITH CLINICAL PILATES
                </h3>
                <div className="space-y-0 border border-gray-100 dark:border-white/5 rounded-[2rem] overflow-hidden">
                  {surgeries.map((item, idx) => (
                    <div key={idx} className={`p-6 lg:p-8 ${idx % 2 === 0 ? 'bg-white dark:bg-white/[0.02]' : 'bg-gray-50/70 dark:bg-white/[0.04]'} hover:bg-[#513394]/5 dark:hover:bg-[#513394]/10 transition-colors`}>
                      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black shrink-0 text-xs">
                          {(idx + 1).toString().padStart(2, '0')}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-center gap-2 mb-2">
                            <h4 className="font-black text-gray-900 dark:text-white">{item.type}</h4>
                            <span className="text-xs bg-[#513394]/10 dark:bg-[#8B5CF6]/20 text-[#513394] dark:text-[#A78BFA] font-bold px-3 py-1 rounded-full">{item.timing}</span>
                          </div>
                          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.approach}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#513394]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-black mb-6 tracking-wide flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#513394]" />
                  BRING TO FIRST SESSION
                </h3>
                <ul className="space-y-4 mb-10">
                  {[
                    'Surgical discharge summary',
                    'Post-op rehabilitation protocol',
                    'Surgeon\'s clearance for physiotherapy',
                    'Any recent imaging (MRI, X-ray)',
                    'List of current restrictions / precautions',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#513394] flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-white/70 text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/10 pt-6 mb-6">
                  <p className="text-xs font-black tracking-[0.25em] text-white/40 uppercase mb-2">PRICING</p>
                  <p className="text-white font-bold text-sm">₹2,000 / session</p>
                  <p className="text-white/50 text-xs mt-1">10-session pack: ₹17,000 (15% off)</p>
                </div>
                <a href="tel:+919702368612" className="block text-center bg-[#513394] text-white font-black px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-lg mb-3">Call to Book</a>
                <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer" className="block text-center bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-base">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ADDRESS ─── */}
      <section className="py-20 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
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
      </section>

      <FAQSection faqs={postSurgeryPilatesFaqs} />

      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Surgery Done. <span className="text-white/50">Now Rebuild Properly.</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              Post-surgical clinical Pilates at R3BOOT, Dadar East. Physiotherapist-led. Graded loading. Reformer and mat.
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
        serviceName="Clinical Pilates After Surgery in Mumbai"
        description="Clinical Pilates for post-surgical rehabilitation in Mumbai at R3BOOT, Dadar East. ACL, spinal surgery, hip and knee replacement — physiotherapist-led Pilates rehab on reformer and mat."
        serviceUrl="https://www.r3boot.in/post-surgery-pilates-mumbai"
      />
      <FAQSchema faqs={postSurgeryPilatesFaqs} />
    </main>
  )
}
