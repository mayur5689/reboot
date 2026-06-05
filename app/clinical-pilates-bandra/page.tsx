import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { clinicalPilatesBandraFaqs } from '@/lib/faqs/clinical-pilates-bandra'

export const metadata: Metadata = {
  title: 'Clinical Pilates Near Bandra | Physio-Led Rehab — R3BOOT Dadar',
  description:
    'Clinical Pilates near Bandra at R3BOOT Dadar — 8 min by train. Physio-led programs for back pain, scoliosis & post-surgery. 5.0 ★ Google. Book via WhatsApp today.',
  alternates: { canonical: '/clinical-pilates-bandra' },
  keywords: [
    'clinical pilates bandra',
    'clinical pilates bandra mumbai',
    'pilates bandra mumbai',
    'physiotherapy pilates bandra',
    'clinical pilates near bandra',
    'pilates for back pain bandra',
  ],
}

export default function ClinicalPilatesBandraPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/service/Services_image/Clinical Pilates-2.webp"
          alt="Clinical Pilates near Bandra Mumbai – R3BOOT Dadar"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">BANDRA // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Clinical Pilates Near Bandra, Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              R3BOOT in Dadar East — 8 minutes from Bandra by train. Physiotherapist-led clinical Pilates for Bandra's active community.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                Bandra Has My Pain Clinic. <span className="text-[#513394] dark:text-[#8B5CF6]">How Does R3BOOT Compare?</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  My Pain Clinic Global in Bandra West offers clinical Pilates and is a well-regarded option.
                  R3BOOT in Dadar East adds an integrated recovery environment that has no parallel in Bandra:
                  clinical Pilates combined with sports massage, ice bath, contrast therapy, red light therapy,
                  and physiotherapy — all in one visit, all under one roof. For Bandra clients managing complex
                  presentations (post-surgical rehab combined with sports massage, or scoliosis with concurrent
                  physiotherapy), R3BOOT offers a breadth of clinical tools unavailable in a standalone Pilates clinic.
                </p>
                <p>
                  The clinical Pilates at R3BOOT is led by Dr. Hiral Parikh (BPT, 15+ years of sports and
                  post-surgical rehabilitation) and Dr. Vaishali Vijay Rauniyar (certified in Dry Needling and
                  Aquatic Rehabilitation). Runners from Carter Road and Bandra Fort, gym members from Khar
                  and Santacruz, and BKC office professionals with chronic back and neck pain make the
                  8-minute train journey specifically for the physiotherapy-first approach.
                </p>
              </div>

              {/* Comparison table */}
              <div className="mt-16">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  WHAT R3BOOT OFFERS BANDRA CLIENTS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Physiotherapist-led (not instructor)', desc: 'Dr. Hiral Parikh and Dr. Vaishali Vijay Rauniyar lead every clinical Pilates program. Not a certified Pilates instructor.' },
                    { title: 'Integrated recovery stack', desc: 'Clinical Pilates + sports massage + ice bath + contrast therapy in one visit. No comparable option in Bandra.' },
                    { title: '8 minutes from Bandra by train', desc: 'Bandra station to Dadar station (Western Line or Central Line interchange) — 8 minutes. Clinic is 5 min from Dadar station.' },
                    { title: 'Reformer + mat + physiotherapy in same session', desc: 'Manual therapy, dry needling, and clinical Pilates combined in one session where clinically appropriate.' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden">
                      <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 dark:text-white/5 group-hover:text-[#513394]/5 transition-colors">{idx + 1}</div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-6 group-hover:bg-[#513394] group-hover:text-white transition-all text-xs">0{idx + 1}</div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{item.title}</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
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
                  FROM BANDRA
                </h3>
                <div className="mb-6">
                  <p className="text-white/60 text-sm mb-4">8 min by train. 15 min by road.</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#513394]" /><span className="text-white/70 text-sm">Bandra → Dadar station: 8 min train</span></div>
                    <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#513394]" /><span className="text-white/70 text-sm">Dadar station → clinic: 5 min walk</span></div>
                    <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#513394]" /><span className="text-white/70 text-sm">Bandra → Dadar East by road: 15–20 min</span></div>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6 mb-6">
                  <p className="text-xs font-black tracking-[0.25em] text-white/40 uppercase mb-2">ADDRESS</p>
                  <p className="text-white/80 font-medium text-sm leading-relaxed">Palai Plaza, 203<br />Swami Gyan Jivandas Marg<br />Dadar East – 400 014</p>
                </div>
                <a href="tel:+919702368612" className="block text-center bg-[#513394] text-white font-black px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-lg mb-3">Call to Book</a>
                <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer" className="block text-center bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-base">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO BANDRA CLIENTS ARE ─── */}
      <section className="py-20 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="prose prose-lg text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-5">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight not-prose mb-6">
              Bandra's Active Community and What Clinical Pilates <span className="text-[#513394] dark:text-[#8B5CF6]">Does for Them</span>
            </h2>
            <p>
              Bandra has a concentrated fitness community. Carter Road and the Bandra Fort sea face are used
              daily by runners. The Khar and Santacruz corridor has a high density of gyms and CrossFit boxes.
              BKC — directly adjacent — generates a corporate professional cohort who sit for eight hours and
              then train hard, accumulating the predictable pattern of hip flexor tightness, upper trapezius
              overload, and lumbar instability that desk-plus-gym lifestyles produce.
            </p>
            <p>
              The clinical Pilates question for this population is typically one of three: an overuse running
              injury (IT band, plantar fasciitis, posterior knee) that has not resolved despite rest; a disc
              or lumbar issue that a sports medicine doctor has told them to "strengthen their core" for;
              or a post-surgical situation (ACL reconstruction, shoulder Bankart repair) where they need
              graduated loading that neither their physiotherapist nor a Pilates studio has been able to provide.
            </p>
            <p>
              R3BOOT in Dadar East is eight minutes by train from Bandra station — Bandra to Dadar on the
              Western or Central Line is a short commute. The facility at Palai Plaza, Swami Gyan Jivandas
              Marg, Dadar East offers the combination of physiotherapist-led clinical Pilates (Dr. Hiral Parikh,
              Dr. Vaishali Vijay Rauniyar), reformer and mat sessions, and an integrated recovery stack —
              sports massage, ice bath, contrast therapy — unavailable in a single Bandra location.
              Sessions are one-to-one, 45–60 minutes, assessment-led.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={clinicalPilatesBandraFaqs} />

      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              8 Minutes from Bandra. <span className="text-white/50">Worth It.</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              Clinical Pilates at R3BOOT, Dadar East. Physiotherapist-led. Integrated recovery. Assessment-first.
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
        serviceName="Clinical Pilates near Bandra Mumbai"
        description="Clinical Pilates near Bandra, Mumbai at R3BOOT in Dadar East. 8 minutes by train from Bandra station. Physiotherapist-led programs for back pain, scoliosis, and post-surgical rehab."
        serviceUrl="https://www.r3boot.in/clinical-pilates-bandra"
      />
      <FAQSchema faqs={clinicalPilatesBandraFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Clinical Pilates Mumbai', url: '/clinical-pilates-mumbai' },
        { name: 'Bandra', url: '/clinical-pilates-bandra' },
      ]} />
    </main>
  )
}
