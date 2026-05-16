import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import { clinicalPilatesDadarFaqs } from '@/lib/faqs/clinical-pilates-dadar'

export const metadata: Metadata = {
  title: 'Clinical Pilates in Dadar Mumbai | R3BOOT — Physiotherapist-Led',
  description:
    'Clinical Pilates in Dadar, Mumbai at R3BOOT. Physiotherapist-led programs for back pain, scoliosis, post-surgery, and sports performance. 5 minutes from Dadar station. ₹2,000/session.',
  alternates: { canonical: '/clinical-pilates-dadar' },
  keywords: [
    'clinical pilates dadar',
    'clinical pilates dadar east',
    'pilates dadar mumbai',
    'physiotherapy pilates dadar',
    'clinical pilates near dadar station',
    'reformer pilates dadar',
  ],
}

export default function ClinicalPilatesDadarPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793706/Clinical_Pillates_Image_2_jc05pa.png"
          alt="Clinical Pilates in Dadar Mumbai – R3BOOT"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">DADAR // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Clinical Pilates in Dadar, Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              R3BOOT — Dadar East's only physiotherapist-led clinical Pilates clinic. 5 minutes from Dadar station.
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
                Dadar Has Pilates Studios. <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT Has Clinical Pilates.</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Dadar and Shivaji Park have several Pilates studios — Moushu's Pilates has a studio near Five
                  Gardens Dadar East, and Radhika's Balanced Body recently opened in Dadar West. Both are
                  instructor-led fitness Pilates. Neither is the same as clinical Pilates supervised by a physiotherapist.
                </p>
                <p>
                  R3BOOT is at Palai Plaza, 203, Swami Gyan Jivandas Marg, Dadar East — five minutes walk from Dadar
                  Central Line station. Clinical Pilates here is delivered by Dr. Hiral Parikh (BPT, 15+ years) and
                  Dr. Vaishali Vijay Rauniyar (certified Dry Needling and Aquatic Rehabilitation). Every program starts
                  with a physiotherapy assessment. Reformer and mat-based sessions available. One-to-one — no classes.
                  Clients from Dadar, Matunga, Sion, Parel, and Shivaji Park walk here because no equivalent
                  physiotherapy-led Pilates exists in the same catchment area.
                </p>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  WHAT WE TREAT IN DADAR
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Lower Back Pain & Disc Problems', desc: 'L4-L5 disc, lumbar instability, facet joint pain — programs built from your MRI and physiotherapy assessment.', href: '/back-pain-clinical-pilates-mumbai' },
                    { title: 'Scoliosis Management', desc: 'Curve-specific exercises and rotational breathing for adolescent and adult scoliosis.', href: '/scoliosis-pilates-mumbai' },
                    { title: 'Post-Surgical Rehabilitation', desc: 'ACL, spinal surgery, hip/knee replacement — graded reformer loading from week 6.', href: '/post-surgery-pilates-mumbai' },
                    { title: 'Sports Performance', desc: 'Core stability and movement quality for runners, gym-goers, and athletes based in Dadar.', href: '/clinical-pilates-mumbai' },
                  ].map((item, idx) => (
                    <Link key={idx} href={item.href} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-[#513394]/20 group transition-all duration-300">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors">{item.title}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                      <span className="text-[#513394] dark:text-[#A78BFA] text-xs font-black uppercase tracking-wider">Learn more →</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#513394]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-xl font-black mb-3 tracking-wide flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#513394]" />
                  R3BOOT DADAR
                </h3>
                <div className="mb-6 space-y-2">
                  <p className="text-white/70 text-sm">Palai Plaza, 203</p>
                  <p className="text-white/70 text-sm">Swami Gyan Jivandas Marg</p>
                  <p className="text-white/70 text-sm">Dadar East, Mumbai – 400 014</p>
                  <p className="text-white/50 text-sm mt-3">Mon–Sat: 7:00 AM – 8:00 PM</p>
                  <p className="text-white/50 text-sm">Sunday: by appointment</p>
                </div>
                <a href="tel:+919702368612" className="block text-center bg-[#513394] text-white font-black px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-lg mb-3">Call to Book</a>
                <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer" className="block text-center bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-base">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DADAR CONTEXT ─── */}
      <section className="py-20 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="prose prose-lg text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-5">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight not-prose mb-6">
              Dadar's Clinical Pilates Landscape — <span className="text-[#513394] dark:text-[#8B5CF6]">And Where R3BOOT Sits</span>
            </h2>
            <p>
              Dadar is one of Mumbai's most accessible central hubs — directly on the Central and Western
              railway lines, connecting Thane, Andheri, Churchgate, and CST. This makes Dadar East a practical
              location for clinical pilates clients coming from Matunga, Sion, Parel, Worli, Bandra, and further.
              Shivaji Park, a five-minute walk from R3BOOT, is one of Mumbai's primary running grounds — the
              morning running community there generates a steady stream of hip, IT band, knee, and lower back
              presentations that benefit from the combination of clinical Pilates and sports massage available
              at the same facility.
            </p>
            <p>
              Moushu's Pilates has a Dadar studio near Five Gardens, Dadar East — approximately one kilometre
              from R3BOOT. Radhika's Balanced Body opened a Pilates studio in Dadar West in April 2026. Both
              are instructor-led fitness Pilates studios without physiotherapy capability. The clinical gap
              they leave is exactly what R3BOOT was built to fill: physiotherapy-led movement rehabilitation
              for people with diagnosed conditions, injuries, or post-surgical recovery needs.
            </p>
            <p>
              R3BOOT's integrated model means clinical Pilates clients can also access ice bath, contrast
              therapy, red light therapy, and sports massage in the same visit. For a Shivaji Park runner
              recovering from IT band syndrome while rebuilding hip stability through clinical Pilates, this
              matters. No other facility in Dadar offers this combination. Physiotherapy, sports massage,
              and clinical Pilates are all under one roof at Palai Plaza, 203, Swami Gyan Jivandas Marg,
              Dadar East, Mumbai — five minutes from Dadar Central Line station.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={clinicalPilatesDadarFaqs} />

      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Clinical Pilates <span className="text-white/50">in Dadar.</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              Physiotherapist-led. Assessment-first. Not a class. R3BOOT, Dadar East — 5 minutes from Dadar station.
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
        serviceName="Clinical Pilates in Dadar Mumbai"
        description="Clinical Pilates in Dadar, Mumbai at R3BOOT. Physiotherapist-led programs by Dr. Hiral Parikh and Dr. Vaishali Vijay Rauniyar. Reformer and mat-based. 5 minutes from Dadar station."
        serviceUrl="https://www.r3boot.in/clinical-pilates-dadar"
      />
      <FAQSchema faqs={clinicalPilatesDadarFaqs} />
    </main>
  )
}
