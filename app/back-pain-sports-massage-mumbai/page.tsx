import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { backPainSportsMassageFaqs } from '@/lib/faqs/back-pain-sports-massage-mumbai'

export const metadata: Metadata = {
  title: 'Sports Massage for Back Pain Mumbai | Physio-Led | R3BOOT',
  description:
    'Sports massage for back pain at R3BOOT Mumbai. Soft tissue release for lower back, thoracic & lumbar pain. Physio-trained, not a spa. 5.0 ★ Google. Book via WhatsApp.',
  alternates: { canonical: '/back-pain-sports-massage-mumbai' },
  keywords: [
    'sports massage for back pain mumbai',
    'back pain massage mumbai',
    'lower back pain massage mumbai',
    'massage for back pain dadar',
    'back pain therapy mumbai',
    'sports massage lower back pain',
  ],
}

const causes = [
  {
    title: 'Tight hip flexors',
    body: 'Sitting compresses hip flexors. Shortened psoas pulls the lumbar spine into anterior tilt | a primary driver of chronic lower back pain in Mumbai desk workers who also train.',
  },
  {
    title: 'Overactive erectors',
    body: 'Deadlifts, squats, and poor lifting mechanics create erector spinae hypertonicity. The muscle stays contracted long after training ends and drives ongoing lumbar stiffness.',
  },
  {
    title: 'Restricted thoracolumbar fascia',
    body: 'Dense connective tissue wrapping the lower back becomes stiff from sedentary patterns and repeated load. Myofascial release and cupping therapy address this directly.',
  },
  {
    title: 'Glute inhibition',
    body: 'Sitting switches off glutes. Underactive glutes force the lower back to compensate for hip extension. This imbalance is extremely common in active professionals.',
  },
  {
    title: 'Lateral hip tightness',
    body: 'TFL and piriformis tightness pulls on the ilium and lumbar spine from below. Releasing the lateral hip chain often eliminates lower back pain that was falsely attributed to the spine.',
  },
  {
    title: 'Upper back compensation',
    body: 'Thoracic stiffness from desk posture forces the lumbar spine to rotate. Sports massage addressing the thoracic spine and rhomboids can resolve pain felt in the lower back.',
  },
]

export default function BackPainSportsMassageMumbaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/service/Services_image/Sports Massage_1.webp"
          alt="Sports massage for back pain – R3BOOT Mumbai Dadar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 pb-20">
          <Link
            href="/sports-massage-mumbai"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all mb-8 group"
          >
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">BACK PAIN // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Sports Massage for Back Pain in Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              Clinical soft tissue therapy for lower back, thoracic, and lumbar pain, at R3BOOT, Dadar East.
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
                Back Pain Is Rarely About <span className="text-[#513394] dark:text-[#8B5CF6]">the Back</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Lower back pain is Mumbai's most common musculoskeletal complaint, and it almost never starts
                  in the back. A professional commuting to Nariman Point sits for nine hours, then deadlifts
                  heavy at his Dadar gym. A runner logging 50km a week at Shivaji Park develops hip flexors so
                  short they pull the lumbar spine into constant compression. A CrossFit athlete in Parel trains
                  hard six days a week but never addresses the thoracolumbar fascia holding everything rigid.
                  In each case, the location of pain and the source of pain are different things.
                </p>
                <p>
                  Sports massage at R3BOOT addresses the structures actually driving the problem. Therapist Akshay
                  Nalawde, certified in sports soft tissue therapy, assesses the full lower kinetic chain before
                  touching the lumbar spine: hip flexor length, glute activation, lateral hip chain, thoracic
                  rotation. Treatment goes to the root. You leave with both relief and a clear understanding of
                  what caused it.
                </p>
              </div>

              <div className="mt-20">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  WHAT'S ACTUALLY DRIVING YOUR BACK PAIN
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {causes.map((item, idx) => (
                    <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden">
                      <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 dark:text-white/5 group-hover:text-[#513394]/5 transition-colors">
                        {idx + 1}
                      </div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-6 group-hover:bg-[#513394] dark:group-hover:bg-[#8B5CF6] group-hover:text-white transition-all text-sm">
                          0{idx + 1}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{item.title}</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.body}</p>
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
                    'Office professionals with desk back pain',
                    'Gym-goers with post-deadlift soreness',
                    'Runners with lumbar tightness',
                    'CrossFit athletes with overuse',
                    'Anyone with recurring lower back tension',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 group/item">
                      <div className="w-6 h-6 rounded-full bg-[#513394] flex items-center justify-center shrink-0 mt-1 group-hover/item:scale-110 transition-transform">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/80 font-medium leading-snug group-hover/item:text-white transition-colors text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="tel:+919702368612" className="block text-center bg-[#513394] text-white font-black px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-lg group-hover:bg-[#603eb0] mb-3">
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

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                THE SESSION //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                What Happens in a Back Pain <span className="text-[#513394] dark:text-[#8B5CF6]">Sports Massage Session</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  label: 'Assessment',
                  body: 'Your therapist asks about your training, sitting habits, how long the pain has been present, what makes it better or worse. They assess hip mobility, lumbar range of motion, and palpate key muscle groups to find the actual restrictions.',
                },
                {
                  step: '02',
                  label: 'Treatment',
                  body: 'Deep tissue work on the primary drivers (hip flexors, erectors, glutes, lateral chain). Myofascial release on the thoracolumbar fascia. Cupping therapy where deeper tissue mobilisation is needed. Trigger point work on specific adhesions.',
                },
                {
                  step: '03',
                  label: 'Post-session guidance',
                  body: 'Your therapist explains what they found and what changed. You leave with specific awareness of what muscles to stretch or activate. Referral to physiotherapy recommended if structural assessment is needed.',
                },
              ].map((item) => (
                <div key={item.step} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 dark:text-white/5 group-hover:text-[#513394]/5 transition-colors">{item.step}</div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-6 group-hover:bg-[#513394] group-hover:text-white transition-all text-sm">
                      {item.step}
                    </div>
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
            <div className="text-center mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                DADAR, MUMBAI //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6">
                Not a Spa. A <span className="text-[#513394] dark:text-[#8B5CF6]">Clinical Sports Clinic</span> in Dadar East.
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl mx-auto">
                R3BOOT is at Palai Plaza, Swami Gyan Jivandas Marg, Dadar East, 5 minutes from Dadar Central Line station.
                Unlike relaxation spas in Mumbai, every session begins with assessment: what muscle group is tight, what movement
                pattern is loading the spine wrong, what needs to change. Clients come from Parel, Matunga, Lower Parel, Worli,
                Sion, and Bandra for clinical sports massage done right.
              </p>
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

      {/* ─── RELATED SERVICES ─── */}
      <section className="py-16 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <p className="text-xs font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-6">ALSO AT R3BOOT //</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'Sports Massage Mumbai', href: '/sports-massage-mumbai' },
              { label: 'Physiotherapy Dadar', href: '/physiotherapy-dadar-mumbai' },
              { label: 'Ice Bath Mumbai', href: '/ice-bath-mumbai' },
              { label: 'Contrast Therapy Mumbai', href: '/contrast-therapy-mumbai' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-bold px-6 py-3 rounded-full text-sm hover:bg-[#513394] hover:text-white hover:border-transparent transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection faqs={backPainSportsMassageFaqs} />

      {/* ─── CTA ─── */}
      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Stop Managing Back Pain. <span className="text-white/50">Resolve It.</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              Sports massage for back pain at R3BOOT in Dadar. Clinical assessment, specific treatment, clear post-session guidance.
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
        serviceName="Sports Massage for Back Pain in Mumbai"
        description="Sports massage for back pain in Mumbai at R3BOOT, Dadar East. Clinical soft tissue therapy targeting the muscle groups driving lower back, thoracic, and lumbar pain."
        serviceUrl="https://www.r3boot.in/back-pain-sports-massage-mumbai"
      />
      <FAQSchema faqs={backPainSportsMassageFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Sports Massage Mumbai', url: '/sports-massage-mumbai' },
        { name: 'Back Pain', url: '/back-pain-sports-massage-mumbai' },
      ]} />
    </main>
  )
}
