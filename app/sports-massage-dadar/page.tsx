import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import { sportsMassageDadarFaqs } from '@/lib/faqs/sports-massage-dadar'

export const metadata: Metadata = {
  title: 'Sports Massage in Dadar | R3BOOT Recovery Clinic',
  description:
    'Sports massage in Dadar, Mumbai at R3BOOT. 5 minutes from Dadar railway station. Clinical sports massage for runners, gym-goers, and athletes. Dadar East, Mumbai – 400 014.',
  alternates: { canonical: '/sports-massage-dadar' },
  keywords: [
    'sports massage dadar',
    'sports massage dadar east',
    'sports massage dadar mumbai',
    'massage therapy dadar',
    'sports massage near dadar station',
    'recovery massage dadar',
  ],
}

const services = [
  { title: 'Pre-Event Massage', desc: '15–45 min before training. Activates muscles, improves circulation, reduces pre-session tightness.' },
  { title: 'Post-Event Recovery', desc: 'Within 48 hrs of training. Clears metabolic waste, reduces DOMS, supports muscle repair.' },
  { title: 'Maintenance Massage', desc: 'Weekly or fortnightly. Addresses restrictions before they become injuries — best for regular trainers.' },
  { title: 'Cupping Therapy', desc: 'Combined with sports massage for deeper fascia release. Often used for stubborn chronic restrictions.' },
  { title: 'Myofascial Release', desc: 'Sustained pressure on fascial restrictions. Effective for thoracolumbar fascia, IT band, and plantar fascia.' },
  { title: 'Trigger Point Therapy', desc: 'Targeted work on adhesion sites — the actual knots causing referred pain and reduced range of motion.' },
]

export default function SportsMassageDadarPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/service/Services_image/Sports Massage_1.webp"
          alt="Sports massage in Dadar – R3BOOT recovery clinic"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">DADAR // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Sports Massage in Dadar, Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              R3BOOT — Dadar East's dedicated sports recovery clinic. 5 minutes from Dadar station.
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
                Dadar's Only Dedicated <span className="text-[#513394] dark:text-[#8B5CF6]">Sports Recovery Clinic</span>
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  R3BOOT is located in Dadar East, at Palai Plaza, 203, Swami Gyan Jivandas Marg — a five-minute walk
                  from Dadar railway station on the Central Line. We serve Dadar's active community: runners doing
                  morning loops at Shivaji Park, gym-goers from Dadar East and West, CrossFit athletes, and working
                  professionals carrying desk tension.
                </p>
                <p>
                  Sports massage at R3BOOT is clinical — not a spa. Your therapist assesses your specific presentation
                  before treating. Sessions are structured around outcomes: reduced tension, improved range of motion,
                  faster recovery, and fewer overuse injuries.
                </p>
              </div>

              <div className="mt-20">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  WHAT WE OFFER IN DADAR
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {services.map((item, idx) => (
                    <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden">
                      <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 dark:text-white/5 group-hover:text-[#513394]/5 transition-colors">{idx + 1}</div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-6 group-hover:bg-[#513394] group-hover:text-white transition-all text-xs">
                          0{idx + 1}
                        </div>
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
                <h3 className="text-xl font-black mb-3 tracking-wide flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#513394]" />
                  R3BOOT DADAR
                </h3>
                <div className="mb-8 space-y-3">
                  <p className="text-white/70 text-sm font-medium">Palai Plaza, 203</p>
                  <p className="text-white/70 text-sm font-medium">Swami Gyan Jivandas Marg</p>
                  <p className="text-white/70 text-sm font-medium">Dadar East, Mumbai – 400 014</p>
                  <p className="text-white/60 text-sm mt-4">Mon–Sat: 7:00 AM – 8:00 PM</p>
                  <p className="text-white/60 text-sm">Sunday: by appointment</p>
                </div>
                <h4 className="text-lg font-black mb-6 text-white/80">CLIENT PROFILE //</h4>
                <ul className="space-y-5 mb-12">
                  {['Shivaji Park runners', 'Dadar East gym-goers', 'Local athletes & sports teams', 'Desk workers from Dadar & Parel', 'Weekend warriors & cyclists'].map((item, idx) => (
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

      {/* ─── INTEGRATED RECOVERY ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">INTEGRATED RECOVERY //</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6">
                Combine Sports Massage with <span className="text-[#513394] dark:text-[#8B5CF6]">Other Recovery Tools</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl mx-auto">
                R3BOOT in Dadar is an integrated recovery centre. Many clients combine sports massage with ice bath, contrast therapy, and red light therapy in a single visit.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: 'Ice Bath', desc: 'Cold immersion reduces systemic inflammation and accelerates recovery post-massage.', href: '/ice-bath-mumbai' },
                { title: 'Contrast Therapy', desc: 'Alternating hot/cold boosts circulation and recovery speed. Combines powerfully with soft tissue work.', href: '/contrast-therapy-mumbai' },
                { title: 'Physiotherapy', desc: 'For structural issues, nerve involvement, or when strength and movement rehab is needed alongside massage.', href: '/physiotherapy-dadar-mumbai' },
              ].map((item, idx) => (
                <Link key={idx} href={item.href} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-[#513394]/20 group transition-all duration-300">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors">{item.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                  <span className="text-[#513394] dark:text-[#A78BFA] text-sm font-black uppercase tracking-wider">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection faqs={sportsMassageDadarFaqs} />

      {/* ─── CTA ─── */}
      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Sports Massage <span className="text-white/50">in Dadar.</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              Clinical sports massage at R3BOOT, Dadar East. 5 minutes from Dadar station. Book today.
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
        serviceName="Sports Massage in Dadar Mumbai"
        description="Sports massage clinic in Dadar, Mumbai. R3BOOT is at Palai Plaza, Dadar East — 5 minutes from Dadar railway station. Clinical sports massage for runners, gym-goers, and athletes."
        serviceUrl="https://www.r3boot.in/sports-massage-dadar"
      />
      <FAQSchema faqs={sportsMassageDadarFaqs} />
    </main>
  )
}
