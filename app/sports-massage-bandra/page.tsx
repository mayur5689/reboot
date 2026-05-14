import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import { sportsMassageBandraFaqs } from '@/lib/faqs/sports-massage-bandra'

export const metadata: Metadata = {
  title: 'Sports Massage Near Bandra, Mumbai | R3BOOT Dadar',
  description:
    'Sports massage near Bandra, Mumbai at R3BOOT in Dadar East. 15–20 min from Bandra by road. Clinical sports massage for Bandra athletes, runners, and gym-goers.',
  alternates: { canonical: '/sports-massage-bandra' },
  keywords: [
    'sports massage bandra',
    'sports massage bandra mumbai',
    'sports massage near bandra',
    'massage therapy bandra mumbai',
    'sports massage khar santacruz',
    'recovery massage bandra',
  ],
}

export default function SportsMassageBandraPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/service/Services_image/Sports Massage_1.webp"
          alt="Sports massage near Bandra Mumbai – R3BOOT Dadar"
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
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">BANDRA // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              Sports Massage Near Bandra, Mumbai
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              R3BOOT in Dadar East — 15–20 min from Bandra. Clinical sports massage for Bandra athletes, runners, and gym-goers.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT + SIDEBAR ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                Why Bandra Athletes Come to <span className="text-[#513394] dark:text-[#8B5CF6]">Dadar</span> for Sports Massage
              </h2>
              <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Bandra has a large fitness community — runners from the Bandra Fort trail and Carter Road, gym
                  members from Khar and Santa Cruz, and BKC professionals who train early and work late. But Bandra
                  has limited options for clinical sports massage that goes beyond relaxation.
                </p>
                <p>
                  R3BOOT in Dadar East is 15–20 minutes from Bandra by road and accessible by train on both the
                  Western Line (Dadar) and the Central Line. Our sports massage is clinical and specific — therapists
                  trained in soft tissue work for active bodies, not generic spa techniques.
                </p>
                <p>
                  Most Bandra clients come for recurring running injuries (IT band, calf tightness), desk-driven
                  neck and shoulder tension, gym recovery after heavy training weeks, and pre-event preparation
                  before races and competitions.
                </p>
              </div>

              {/* What sets R3BOOT apart */}
              <div className="mt-20">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  WHY R3BOOT IS WORTH THE TRIP
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Clinical assessment first', body: 'Not a template massage. Your therapist assesses your specific restrictions before every session.' },
                    { title: 'Integrated recovery under one roof', body: 'Sports massage, ice bath, contrast therapy, and physiotherapy — all available in one visit.' },
                    { title: 'Trained sports massage therapists', body: 'Not spa relaxation. Therapists trained in soft tissue work, trigger point therapy, and cupping.' },
                    { title: 'Outcome-focused sessions', body: 'You leave knowing what was found, what changed, and what to do next. Not just how relaxed you feel.' },
                  ].map((item, idx) => (
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
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#513394]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-xl font-black mb-3 tracking-wide flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#513394]" />
                  FROM BANDRA
                </h3>
                <div className="mb-8">
                  <p className="text-white/60 text-sm mb-4">15–20 min by road. Accessible from Bandra station (Western & Central Lines) via Dadar.</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#513394]" />
                      <span className="text-white/70 text-sm">Bandra → Dadar (road): 15–20 min</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#513394]" />
                      <span className="text-white/70 text-sm">Bandra station → Dadar station: 8 min train</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#513394]" />
                      <span className="text-white/70 text-sm">Parking available near clinic</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6 mb-8">
                  <p className="text-xs font-black tracking-[0.25em] text-white/40 uppercase mb-3">ADDRESS</p>
                  <p className="text-white/80 font-medium text-sm leading-relaxed">Palai Plaza, 203<br />Swami Gyan Jivandas Marg<br />Dadar East – 400 014</p>
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
      <FAQSection faqs={sportsMassageBandraFaqs} />

      {/* ─── CTA ─── */}
      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              15 Minutes from Bandra. <span className="text-white/50">Worth the Trip.</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              Sports massage at R3BOOT in Dadar East. Clinical, specific, outcome-focused. Used by Bandra athletes, runners, and gym-goers.
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
        serviceName="Sports Massage near Bandra Mumbai"
        description="Sports massage near Bandra, Mumbai at R3BOOT in Dadar East. 15–20 minutes from Bandra by road. Clinical sports massage for runners, gym-goers, and athletes."
        serviceUrl="https://www.r3boot.in/sports-massage-bandra"
      />
      <FAQSchema faqs={sportsMassageBandraFaqs} />
    </main>
  )
}
