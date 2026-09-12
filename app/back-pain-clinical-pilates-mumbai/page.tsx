import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { backPainClinicalPilatesFaqs } from '@/lib/faqs/back-pain-clinical-pilates-mumbai'

export const metadata: Metadata = {
  title: 'Clinical Pilates for Back Pain Mumbai | Physio-Led | R3BOOT',
  description:
    'Clinical Pilates for back pain at R3BOOT Mumbai. Physio-led programs for L4-L5 disc & lumbar instability, assessment-first, not a class. 5.0 ★ Google. Book via WhatsApp.',
  alternates: { canonical: '/back-pain-clinical-pilates-mumbai' },
  keywords: [
    'clinical pilates for back pain mumbai',
    'pilates for back pain mumbai',
    'pilates for L4 L5 disc mumbai',
    'pilates lower back pain dadar',
    'physiotherapy pilates back pain mumbai',
    'clinical pilates lumbar pain mumbai',
  ],
}

const spineConditions = [
  {
    condition: 'L4-L5 Disc Bulge / Herniation',
    what: 'Disc material compresses the nerve root at L4-L5, causing pain, numbness, or weakness in the leg',
    pilatesRole: 'Segmental stabilisation at L4-L5, lumbar multifidus activation, load-free spinal decompression exercises',
  },
  {
    condition: 'L5-S1 Disc Degeneration',
    what: 'Loss of disc height and instability at the lumbosacral junction, common in desk workers and heavy lifters',
    pilatesRole: 'Deep core recruitment, segmental control, hip mobility work to reduce lumbosacral compression',
  },
  {
    condition: 'Lumbar Facet Joint Pain',
    what: 'Extension-based pain aggravated by standing, walking, or backward bending',
    pilatesRole: 'Flexion-biased stabilisation, hip flexor lengthening, movement pattern retraining to offload facets',
  },
  {
    condition: 'Muscular Chronic Lower Back Pain',
    what: 'Persistent lumbar tension from glute inhibition, hip flexor tightness, and erector hypertonicity',
    pilatesRole: 'Glute activation sequencing, hip flexor lengthening under load, erector decompression through movement',
  },
  {
    condition: 'Post-Discectomy / Post-Fusion Rehab',
    what: 'Muscle inhibition and movement fear after spinal surgery, common barrier to full recovery',
    pilatesRole: 'Graded movement exposure, scar tissue mobilisation support, progressive spinal loading',
  },
  {
    condition: 'Sacroiliac Joint Dysfunction',
    what: 'SIJ instability or hypermobility causing low back and gluteal pain, often worse on one side',
    pilatesRole: 'SIJ stabilisation, glute medius activation, pelvic floor coordination exercises',
  },
]

export default function BackPainClinicalPilatesMumbaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793706/Clinical_Pillates_Image_2_jc05pa.png"
          alt="Clinical Pilates for back pain Mumbai – R3BOOT Dadar"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">BACK PAIN // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Clinical Pilates for Back Pain in Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              L4-L5 disc, lumbar instability, chronic back pain, physiotherapist-led programs at R3BOOT, Dadar East.
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
                Is Clinical Pilates Good for <span className="text-[#513394] dark:text-[#8B5CF6]">Back Pain?</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Yes, and it is one of the most evidence-supported interventions for chronic lower back pain available.
                  Research shows clinical Pilates outperforms standard physiotherapy for back pain outcomes when continued
                  beyond the acute phase. The reason: most lower back pain is a motor control problem. The deep stabilisers, lumbar multifidus, transversus abdominis, pelvic floor, stop functioning correctly after injury or
                  chronic pain, and no amount of stretching or passive treatment rebuilds them. Clinical Pilates does.
                </p>
                <p>
                  At R3BOOT in Dadar East, Dr. Hiral Parikh (BPT, 15+ years) and Dr. Vaishali Vijay Rauniyar (BPT, 4+ years, certified
                  Dry Needling, Aquatic Rehabilitation) design your program from a physiotherapy assessment of your
                  specific spine pathology. L4-L5 disc, L5-S1 instability, facet joint pain, muscular back pain,
                  post-fusion, each requires a different exercise selection. Generic Pilates classes use the same routine
                  for all backs. Clinical Pilates is different for every spine.
                </p>
              </div>

              <div className="mt-20">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  SPINE CONDITIONS WE TREAT WITH CLINICAL PILATES
                </h3>
                <div className="space-y-0 border border-gray-100 dark:border-white/5 rounded-[2rem] overflow-hidden">
                  {spineConditions.map((item, idx) => (
                    <div key={idx} className={`p-6 lg:p-8 ${idx % 2 === 0 ? 'bg-white dark:bg-white/[0.02]' : 'bg-gray-50/70 dark:bg-white/[0.04]'} group hover:bg-[#513394]/5 dark:hover:bg-[#513394]/10 transition-colors`}>
                      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black shrink-0 text-sm">
                          {(idx + 1).toString().padStart(2, '0')}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-black text-gray-900 dark:text-white mb-2">{item.condition}</h4>
                          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{item.what}</p>
                          <p className="text-[#513394] dark:text-[#A78BFA] text-sm font-medium"><span className="font-semibold">Pilates approach: </span>{item.pilatesRole}</p>
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
                    'L4-L5 or L5-S1 disc pathology',
                    'Chronic lower back pain (3+ months)',
                    'Post-spinal surgery rehab',
                    'Facet joint and SIJ pain',
                    'Desk workers with lumbar stiffness',
                    'Athletes with recurring back injuries',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#513394] flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" /></svg>
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

      {/* ─── WHY GENERIC PILATES FAILS BACK PAIN ─── */}
      <section className="py-20 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="prose prose-lg text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-5">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight not-prose mb-6">
              Why Group Pilates Classes Often Make <span className="text-[#513394] dark:text-[#8B5CF6]">Back Pain Worse</span>
            </h2>
            <p>
              Standard Pilates classes in Mumbai, whether instructor-led group sessions or general reformer classes
              at fitness studios, are built on the assumption that all participants have healthy spines. The roll-up,
              the hundred, double leg stretch, and similar exercises are fundamental to most Pilates class structures.
              For someone with an active L4-L5 disc herniation, these movements increase intradiscal pressure and
              can provoke or worsen nerve symptoms. A group instructor, regardless of their certification level,
              is not equipped to screen for this.
            </p>
            <p>
              The deeper issue is that lower back pain driven by disc pathology, facet joint irritation, or
              sacroiliac dysfunction each has a different pain mechanism and a different exercise tolerance.
              Flexion-based movements aggravate disc herniations. Extension-based movements aggravate facet pain.
              Rotational loading without stability aggravates SIJ dysfunction. A class that mixes these presentations, which every general Pilates class does, cannot account for all of them simultaneously.
            </p>
            <p>
              At R3BOOT in Dadar East, Mumbai, Dr. Hiral Parikh screens every client for their specific pain
              mechanism at the first session. Exercises that load the pain generator are excluded. The program
              starts in the pain-free range and expands as stability improves. Most clients with acute or
              sub-acute back pain notice meaningful reduction in symptoms within 4–6 sessions. Chronic presentations
              require more time, but the trajectory is consistently positive when the program is built from
              accurate physiotherapy assessment rather than a generic back pain template.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHAT HAPPENS IN A SESSION ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">THE SESSION //</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6">
                What Happens in a <span className="text-[#513394] dark:text-[#8B5CF6]">Back Pain Pilates Session</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: '01', label: 'Physiotherapy Assessment', body: 'Your physiotherapist identifies your specific spine pathology, pain pattern, and motor control deficits. Imaging reports (MRI, X-ray) reviewed. Exercise contraindications established. This is what separates clinical Pilates from a class.' },
                { step: '02', label: 'Prescribed Program', body: 'Exercises selected for your specific diagnosis, not a back pain template. L4-L5 disc herniation requires different exercise selection than facet joint pain or SIJ dysfunction. Every movement has a clinical reason for your particular spine.' },
                { step: '03', label: 'Progressive Loading', body: 'Program advances based on your clinical response, not a weekly class schedule. Home exercise program taught in parallel. Physiotherapy manual therapy or dry needling added in the same session where appropriate.' },
              ].map((item) => (
                <div key={item.step} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 dark:text-white/5 group-hover:text-[#513394]/5 transition-colors">{item.step}</div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-6 group-hover:bg-[#513394] group-hover:text-white transition-all text-sm">{item.step}</div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.label}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOCAL + ADDRESS ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">DADAR, MUMBAI //</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6">
                Clinical Pilates for Back Pain, <span className="text-[#513394] dark:text-[#8B5CF6]">Dadar East Clinic</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl mx-auto">
                R3BOOT is at Palai Plaza, Swami Gyan Jivandas Marg, Dadar East, 5 minutes from Dadar Central Line station.
                Mumbai's only integrated recovery centre combining physiotherapist-led clinical Pilates with sports massage,
                ice bath, contrast therapy, and physiotherapy in one location. Clients come from Parel, Matunga, Sion,
                Worli, Lower Parel, and Bandra for the clinical standard unavailable in general fitness studios.
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

      {/* ─── RELATED ─── */}
      <section className="py-16 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <p className="text-xs font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-6">ALSO AT R3BOOT //</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'Clinical Pilates Mumbai', href: '/clinical-pilates-mumbai' },
              { label: 'Physiotherapy Dadar', href: '/physiotherapy-dadar-mumbai' },
              { label: 'Sports Massage for Back Pain', href: '/back-pain-sports-massage-mumbai' },
              { label: 'Scoliosis Pilates Mumbai', href: '/scoliosis-pilates-mumbai' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-bold px-6 py-3 rounded-full text-sm hover:bg-[#513394] hover:text-white hover:border-transparent transition-all">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={backPainClinicalPilatesFaqs} />

      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Stop Managing Back Pain. <span className="text-white/50">Rehabilitate It.</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              Clinical Pilates for back pain at R3BOOT, Dadar East. Assessment-first. Diagnosis-specific. Physiotherapist-led.
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
        serviceName="Clinical Pilates for Back Pain in Mumbai"
        description="Clinical Pilates for back pain in Mumbai at R3BOOT, Dadar East. Physiotherapist-led programs for L4-L5 disc, lumbar instability, facet joint pain, and post-surgical spinal rehabilitation."
        serviceUrl="https://www.r3boot.in/back-pain-clinical-pilates-mumbai"
      />
      <FAQSchema faqs={backPainClinicalPilatesFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Clinical Pilates Mumbai', url: '/clinical-pilates-mumbai' },
        { name: 'Back Pain', url: '/back-pain-clinical-pilates-mumbai' },
      ]} />
    </main>
  )
}
