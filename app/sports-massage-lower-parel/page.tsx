import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import { sportsMassageLowerParelFaqs } from '@/lib/faqs/sports-massage-lower-parel'

export const metadata: Metadata = {
  title: 'Sports Massage Near Lower Parel, Mumbai | R3BOOT Dadar',
  description:
    'Sports massage near Lower Parel, Mumbai at R3BOOT in Dadar East. 10–15 min from Lower Parel and Worli. Clinical sports massage for gym-goers, athletes, and BKC professionals.',
  alternates: { canonical: '/sports-massage-lower-parel' },
  keywords: [
    'sports massage lower parel',
    'sports massage lower parel mumbai',
    'sports massage near lower parel',
    'massage therapy lower parel',
    'sports massage worli mumbai',
    'recovery massage lower parel',
  ],
}

const profile = [
  {
    title: 'Gym-goers from Lower Parel',
    body: 'The Phoenix Mills and Kamala Mills corridor has Mumbai\'s highest density of premium gyms. Members who train hard and recover poorly use R3BOOT to close that gap.',
  },
  {
    title: 'BKC professionals',
    body: 'Long desk hours in BKC create chronic neck, shoulder, and lower back tension. Sports massage at R3BOOT is 10 min from BKC and treats the specific muscle patterns desk workers accumulate.',
  },
  {
    title: 'Worli runners & cyclists',
    body: 'Worli sea face is a popular running and cycling route. Lower limb overuse — calf tightness, IT band, plantar fasciitis — is common in this community.',
  },
  {
    title: 'Parel & Sewri athletes',
    body: 'Weekend football, cricket, and recreational sports generate muscle soreness and minor soft tissue injuries that sports massage addresses before they become chronic.',
  },
]

export default function SportsMassageLowerParelPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/service/Services_image/Sports Massage_1.webp"
          alt="Sports massage near Lower Parel Mumbai – R3BOOT Dadar"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">LOWER PAREL // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Sports Massage Near Lower Parel, Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              R3BOOT in Dadar East — 10–15 min from Lower Parel. Clinical recovery for gym-goers, desk workers, and athletes.
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
                Lower Parel Trains Hard. <span className="text-[#513394] dark:text-[#8B5CF6]">The Spas Nearby Don't Recover It.</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Lower Parel's sports massage options sit inside the Raghuvanshi Mills and Todi Mills compounds —
                  Oceanic Spa, Nature Wellness, Madisyn. Good for relaxation after a stressful week. Not what
                  you need if you train at the Phoenix Mills gym, run the Worli sea face, or carry chronic IT band
                  tightness from your heavy squat programming at a Kamala Mills CrossFit box. A spa session gives
                  you 60 minutes of Swedish strokes. It doesn't assess why your hamstring keeps straining at the
                  same spot on your runs, or why your lower back tightens up two days after every deadlift session.
                </p>
                <p>
                  R3BOOT is 3 minutes by train from Lower Parel station to Dadar — or 10–12 minutes by road.
                  Therapist Akshay Nalawde runs an assessment-first session: your training load, the specific
                  restriction, the muscle group driving the problem. Treatment uses deep tissue, myofascial
                  release, trigger point therapy, and cupping where needed. After the session, you know what
                  was found, what changed, and what to do between visits. That is the difference between
                  sports massage and a relaxation massage.
                </p>
              </div>

              <div className="mt-20">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  WHO COMES FROM LOWER PAREL
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {profile.map((item, idx) => (
                    <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden">
                      <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 dark:text-white/5 group-hover:text-[#513394]/5 transition-colors">{idx + 1}</div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-6 group-hover:bg-[#513394] group-hover:text-white transition-all text-xs">0{idx + 1}</div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{item.title}</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integrated recovery section */}
              <div className="mt-16 bg-[#F8F9FA] dark:bg-white/5 rounded-[2rem] p-8">
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6">Combine Sports Massage with Recovery Tools</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  R3BOOT is not just sports massage. Many Lower Parel clients combine their session with ice bath,
                  contrast therapy, or red light therapy in the same visit — a recovery stack unavailable anywhere
                  else in central Mumbai.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: 'Ice Bath', href: '/ice-bath-mumbai' },
                    { label: 'Contrast Therapy', href: '/contrast-therapy-mumbai' },
                    { label: 'Physiotherapy', href: '/physiotherapy-dadar-mumbai' },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-bold px-5 py-2.5 rounded-full text-sm hover:bg-[#513394] hover:text-white hover:border-transparent transition-all">
                      {item.label} →
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
                  FROM LOWER PAREL
                </h3>
                <div className="mb-8">
                  <p className="text-white/60 text-sm mb-4">10–15 min from Lower Parel, Worli, Parel, and BKC.</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#513394]" />
                      <span className="text-white/70 text-sm">Lower Parel → Dadar East: ~10 min by road</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#513394]" />
                      <span className="text-white/70 text-sm">Lower Parel station → Dadar station: 3 min train</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#513394]" />
                      <span className="text-white/70 text-sm">Worli → Dadar East: ~12 min by road</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6 mb-8">
                  <p className="text-xs font-black tracking-[0.25em] text-white/40 uppercase mb-3">ADDRESS</p>
                  <p className="text-white/80 font-medium text-sm leading-relaxed">Palai Plaza, 203<br />Swami Gyan Jivandas Marg<br />Dadar East – 400 014</p>
                  <p className="text-white/50 text-xs mt-3">Mon–Sat: 7:00 AM – 8:00 PM</p>
                </div>
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

      {/* ─── FAQ ─── */}
      <FAQSection faqs={sportsMassageLowerParelFaqs} />

      {/* ─── CTA ─── */}
      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              10 Minutes from Lower Parel. <span className="text-white/50">Book Today.</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              Clinical sports massage at R3BOOT, Dadar East. Used by gym-goers, runners, and professionals from Lower Parel and Worli.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:+919702368612" className="w-full sm:w-auto bg-white text-[#513394] font-black px-10 py-5 rounded-full transition-all hover:scale-105 shadow-2xl text-lg tracking-wide">
                Call to Book
              </a>
              <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer" className="w-full sm:w-auto border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full transition-all hover:bg-white/10 text-lg tracking-wide">
                WhatsApp Us
              </a>
            </div>
            <p className="text-white/40 mt-8 font-bold tracking-widest text-sm">DADAR EAST, MUMBAI – 400 014</p>
          </div>
        </div>
      </section>

      <ServiceSchema
        serviceName="Sports Massage near Lower Parel Mumbai"
        description="Sports massage near Lower Parel, Mumbai at R3BOOT in Dadar East. 10–15 minutes from Lower Parel, Worli, and BKC. Clinical sports massage for gym-goers, athletes, and professionals."
        serviceUrl="https://www.r3boot.in/sports-massage-lower-parel"
      />
      <FAQSchema faqs={sportsMassageLowerParelFaqs} />
    </main>
  )
}
