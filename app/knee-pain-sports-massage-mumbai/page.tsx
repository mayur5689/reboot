import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { kneePainSportsMassageFaqs } from '@/lib/faqs/knee-pain-sports-massage-mumbai'

export const metadata: Metadata = {
  title: 'Sports Massage Knee Pain Mumbai | IT Band & Runner\'s Knee | R3BOOT',
  description:
    'Sports massage for knee pain in Mumbai at R3BOOT Dadar. IT band, runner\'s knee, quad tightness & overuse — physio-trained therapists. 5.0 ★ Google. Book today.',
  alternates: { canonical: '/knee-pain-sports-massage-mumbai' },
  keywords: [
    'sports massage for knee pain mumbai',
    'knee pain massage mumbai',
    'IT band massage mumbai',
    "runner's knee treatment mumbai",
    'knee pain therapy mumbai',
    'sports massage knee mumbai',
  ],
}

const kneeConditions = [
  {
    condition: 'IT Band Syndrome',
    cause: 'Fascial restriction along the lateral thigh compresses the lateral knee during repetitive flexion',
    treatment: 'Lateral thigh deep tissue release, TFL trigger point work, hip abductor mobilisation',
  },
  {
    condition: "Runner's Knee (PFPS)",
    cause: 'Quad tightness and VMO weakness create poor patellar tracking and compressive pain at the kneecap',
    treatment: 'Quad release, VMO activation cues, knee tracking assessment, lateral retinaculum work',
  },
  {
    condition: 'Hamstring Tightness',
    cause: 'Tight biceps femoris and semimembranosus alter knee mechanics and increase posterior joint stress',
    treatment: 'Graded hamstring release, sciatic nerve glides, pelvic tilt assessment',
  },
  {
    condition: 'Calf & Achilles Pull',
    cause: 'Tight gastrocnemius attaches above the knee and contributes to posterior knee stiffness',
    treatment: 'Calf deep tissue, soleus release, Achilles load pattern guidance',
  },
  {
    condition: 'Post-Exercise Swelling',
    cause: 'Accumulated fluid and metabolic waste after high-volume training',
    treatment: 'Lymphatic drainage, flushing techniques, circulation-focused massage',
  },
  {
    condition: 'General Overuse',
    cause: 'Repetitive stress without adequate recovery degrades tissue quality around the knee',
    treatment: 'Maintenance massage targeting primary load-bearing groups, load management guidance',
  },
]

export default function KneePainSportsMassageMumbaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/service/Services_image/Sports Massage_1.webp"
          alt="Sports massage for knee pain – R3BOOT Mumbai Dadar"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">KNEE PAIN // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Sports Massage for Knee Pain in Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              IT band, runner's knee, quad tightness, overuse — treated at R3BOOT, Dadar East.
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
                Will Sports Massage Help <span className="text-[#513394] dark:text-[#8B5CF6]">Knee Pain?</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Yes — for most knee pain that active people in Mumbai experience, sports massage is effective and
                  often faster-acting than rest alone. IT band syndrome, runner's knee (PFPS), post-squat aching,
                  and calf-driven posterior knee stiffness all respond well to targeted soft tissue work. The reason:
                  most active-person knee pain is driven by muscle tension above and below the joint — not the joint itself.
                  The quad, IT band, hamstring, and calf all attach around the knee, and tightness in any of them
                  changes how the patella tracks and how load is distributed under movement.
                </p>
                <p>
                  Runners logging kilometres at Shivaji Park, cyclists on Marine Drive, and gym-goers coming off
                  heavy squat weeks in Dadar or Lower Parel are the most common presentations at R3BOOT. Therapist
                  Akshay Nalawde assesses the full lower limb kinetic chain — not just the knee — before treating.
                  Treatment goes to the actual restriction. Not a generic leg massage.
                </p>
              </div>

              <div className="mt-20">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  KNEE CONDITIONS WE ADDRESS
                </h3>
                <div className="space-y-0 border border-gray-100 dark:border-white/5 rounded-[2rem] overflow-hidden">
                  {kneeConditions.map((item, idx) => (
                    <div key={idx} className={`p-6 lg:p-8 ${idx % 2 === 0 ? 'bg-white dark:bg-white/[0.02]' : 'bg-gray-50/70 dark:bg-white/[0.04]'} group hover:bg-[#513394]/5 dark:hover:bg-[#513394]/10 transition-colors`}>
                      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black shrink-0 text-sm">
                          {(idx + 1).toString().padStart(2, '0')}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-black text-gray-900 dark:text-white mb-2">{item.condition}</h4>
                          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2"><span className="font-semibold text-gray-700 dark:text-gray-300">Cause: </span>{item.cause}</p>
                          <p className="text-[#513394] dark:text-[#A78BFA] text-sm font-medium"><span className="font-semibold">Treatment: </span>{item.treatment}</p>
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
                    'Runners with IT band or PFPS',
                    'Cyclists with lateral knee pain',
                    'Gym-goers post-squat knee ache',
                    'CrossFit athletes with overuse',
                    'Anyone avoiding stairs due to knee pain',
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
            <div className="text-center mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                DADAR, MUMBAI //
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6">
                Sports Massage for Knee Pain — <span className="text-[#513394] dark:text-[#8B5CF6]">Dadar East</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl mx-auto">
                R3BOOT is at Palai Plaza, Dadar East — 5 minutes from Dadar station on the Central Line. Most Shivaji Park
                runners with IT band or knee trouble arrive within 10 minutes. Cyclists from Worli sea face, gym-goers
                from Parel and Lower Parel, and corporate athletes from BKC all make this their sports recovery clinic.
                Knee pain treated here is clinical — assessment-led, technique-specific, outcome-measured. Not a spa session.
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

      {/* ─── RELATED ─── */}
      <section className="py-16 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <p className="text-xs font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-6">ALSO AT R3BOOT //</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'Sports Massage Mumbai', href: '/sports-massage-mumbai' },
              { label: 'Sports Massage for Runners', href: '/sports-massage-runners-mumbai' },
              { label: 'Physiotherapy Dadar', href: '/physiotherapy-dadar-mumbai' },
              { label: 'Contrast Therapy Mumbai', href: '/contrast-therapy-mumbai' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-bold px-6 py-3 rounded-full text-sm hover:bg-[#513394] hover:text-white hover:border-transparent transition-all">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection faqs={kneePainSportsMassageFaqs} />

      {/* ─── CTA ─── */}
      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Knee Pain Holding You Back From <span className="text-white/50">Training?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              Sports massage for knee pain at R3BOOT, Dadar East. Targeted treatment — not a generic sports massage.
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
        serviceName="Sports Massage for Knee Pain in Mumbai"
        description="Sports massage for knee pain in Mumbai at R3BOOT, Dadar East. Targeted soft tissue treatment for IT band syndrome, runner's knee, quad tightness, and overuse knee pain."
        serviceUrl="https://www.r3boot.in/knee-pain-sports-massage-mumbai"
      />
      <FAQSchema faqs={kneePainSportsMassageFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Sports Massage Mumbai', url: '/sports-massage-mumbai' },
        { name: 'Knee Pain', url: '/knee-pain-sports-massage-mumbai' },
      ]} />
    </main>
  )
}
