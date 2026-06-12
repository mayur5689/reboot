import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { scoliosisPilatesFaqs } from '@/lib/faqs/scoliosis-pilates-mumbai'

export const metadata: Metadata = {
  title: 'Clinical Pilates Scoliosis Mumbai | Curve-Specific | R3BOOT Dadar',
  description:
    'Clinical Pilates for scoliosis in Mumbai at R3BOOT Dadar. Curve-specific exercises, rotational breathing & postural retraining, physio-led. 5.0 ★ Google. Book via WhatsApp.',
  alternates: { canonical: '/scoliosis-pilates-mumbai' },
  keywords: [
    'pilates for scoliosis mumbai',
    'clinical pilates scoliosis mumbai',
    'scoliosis physiotherapy mumbai',
    'scoliosis exercises mumbai',
    'pilates scoliosis dadar',
    'scoliosis rehabilitation mumbai',
  ],
}

const facts = [
  {
    title: 'Pilates does not correct structural scoliosis',
    body: 'No exercise corrects a structural spinal curve. Anyone claiming this is wrong. What clinical Pilates does: reduces scoliosis-related pain, improves functional posture, trains asymmetric weakness patterns, and slows progression in curves where muscle imbalance is a contributing factor.',
  },
  {
    title: 'The exercise program must match your curve pattern',
    body: 'A right thoracic curve (most common) has different muscle weakness patterns than a left lumbar curve or a double curve. Generic Pilates classes do not account for this. At R3BOOT, your physiotherapist maps your curve and prescribes accordingly.',
  },
  {
    title: 'Rotational breathing is specific to scoliosis',
    body: 'Breathing mechanics change with spinal curvature. Rotational breathing, expanding the compressed side of the thorax on inhalation | is a technique specific to scoliosis Pilates. It is not taught in general Pilates classes.',
  },
  {
    title: 'Adolescent scoliosis needs monitoring during growth',
    body: 'Curves in adolescents are dynamic | growth spurts can cause rapid progression. Clinical Pilates during adolescence is a supported intervention while curves are being monitored, often alongside orthopaedic review.',
  },
  {
    title: 'Adult scoliosis is about pain and function | not curve reduction',
    body: 'In adults, the structural curve is fixed. The goal is reducing the muscular asymmetry and pain that comes from years of uneven loading. Most adults see significant pain reduction and improved postural control within 8–12 sessions.',
  },
]

export default function ScoliosisPilatesMumbaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793697/Clinical_Pillates_Image_3_pil8g7.jpg"
          alt="Clinical Pilates for scoliosis Mumbai – R3BOOT Dadar"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">SCOLIOSIS // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Clinical Pilates for Scoliosis in Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              Curve-specific programs for adolescent and adult scoliosis, physiotherapist-led at R3BOOT, Dadar East.
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
                What Clinical Pilates <span className="text-[#513394] dark:text-[#8B5CF6]">Actually Does for Scoliosis</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Scoliosis is a lateral curvature of the spine, most commonly identified in adolescence, though adult
                  scoliosis is increasingly recognised as a source of back pain and postural dysfunction. Clinical Pilates
                  is a first-line physiotherapy approach for scoliosis management, recommended by physiotherapists,
                  orthopaedic surgeons, and the Scientific Exercise Approach to Scoliosis (SEAS) framework used globally.
                </p>
                <p>
                  At R3BOOT in Dadar East, Mumbai, Dr. Hiral Parikh and Dr. Vaishali Vijay Rauniyar design scoliosis
                  programs from a clinical assessment of your specific curve, not a generic back exercise routine.
                  The program uses curve-specific exercises, rotational breathing techniques, and progressive postural
                  awareness training that general Pilates classes do not offer. No group classes. One-to-one, assessment-led.
                </p>
              </div>

              <div className="mt-20">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  WHAT YOU NEED TO KNOW FIRST
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {facts.map((item, idx) => (
                    <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 flex gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black shrink-0 group-hover:bg-[#513394] group-hover:text-white transition-all text-sm">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#513394]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-black mb-8 tracking-wide flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#513394]" />
                  WHO WE HELP //
                </h3>
                <ul className="space-y-5 mb-10">
                  {[
                    'Adolescents with diagnosed scoliosis',
                    'Adults with idiopathic scoliosis pain',
                    'Postural scoliosis from muscle imbalance',
                    'Post-scoliosis surgery rehab',
                    'Anyone told to "just do Pilates" for their curve',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#513394] flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-white/80 font-medium leading-snug text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="tel:+919702368612" className="block text-center bg-[#513394] text-white font-black px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-lg mb-3">Call to Book</a>
                <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer" className="block text-center bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-base">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ROTATIONAL BREATHING EXPLAINED ─── */}
      <section className="py-20 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="prose prose-lg text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-5">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight not-prose mb-6">
              What Scoliosis-Specific Pilates <span className="text-[#513394] dark:text-[#8B5CF6]">Looks Like in Practice</span>
            </h2>
            <p>
              Scoliosis creates a predictable pattern of muscle asymmetry: on the convex side of the curve, muscles
              are chronically stretched and underactive. On the concave side, they are shortened and overloaded.
              A general Pilates class, which is built around symmetrical movement, does nothing to correct this
              asymmetry, and some exercises actively reinforce it by loading the already-dominant side.
            </p>
            <p>
              The most important scoliosis-specific technique is rotational breathing, expanding the compressed
              side of the thoracic cage on inhalation while allowing the overexpanded side to soften. For a
              right thoracic curve, this means consciously directing breath into the left side of the ribcage.
              This technique, drawn from the Schroth Method and SEAS framework, directly addresses the thoracic
              rib rotation that creates the visible hump in structural scoliosis. It is not taught in standard
              Pilates instructor training.
            </p>
            <p>
              At R3BOOT in Dadar East, Dr. Hiral Parikh (BPT, 15+ years) assesses each client's specific curve
              pattern before designing the exercise program. For a right thoracic curve, the most common pattern
              in adolescent idiopathic scoliosis, the program activates the left thoracic extensors, lengthens
              the right lateral trunk, and uses mirror feedback to train postural self-correction. For a lumbar
              curve or double curve, the approach differs. Clients bring their most recent X-ray with Cobb angle
              measurement to the first session. The program is updated as the clinical picture evolves, and
              physiotherapy manual therapy is combined where muscle pain accompanies the postural pattern.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ADDRESS ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
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

      <FAQSection faqs={scoliosisPilatesFaqs} />

      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Curve-Specific Pilates. <span className="text-white/50">Not a Class.</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              Clinical Pilates for scoliosis at R3BOOT, Dadar East. Physiotherapist-led. One-to-one. Designed for your curve.
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
        serviceName="Clinical Pilates for Scoliosis in Mumbai"
        description="Clinical Pilates for scoliosis in Mumbai at R3BOOT, Dadar East. Physiotherapist-designed, curve-specific programs for adolescent and adult scoliosis management."
        serviceUrl="https://www.r3boot.in/scoliosis-pilates-mumbai"
      />
      <FAQSchema faqs={scoliosisPilatesFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Clinical Pilates Mumbai', url: '/clinical-pilates-mumbai' },
        { name: 'Scoliosis', url: '/scoliosis-pilates-mumbai' },
      ]} />
    </main>
  )
}
