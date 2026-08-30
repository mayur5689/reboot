import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { physiotherapyMumbaiFaqs } from '@/lib/faqs/physiotherapy-mumbai'

export const metadata: Metadata = {
  title: 'Physiotherapy Mumbai | Clinical Physiotherapist | R3BOOT Dadar',
  description:
    'Clinical physiotherapy in Mumbai at R3BOOT Dadar East. Back pain, knee pain, neck pain, sports injuries & post-surgery rehab. Dr. Hiral Parikh, 15+ yrs. 5.0 ★ Google. WhatsApp to book.',
  alternates: { canonical: '/physiotherapy-mumbai' },
  keywords: [
    'physiotherapy mumbai',
    'physiotherapist mumbai',
    'best physiotherapy mumbai',
    'physiotherapy clinic mumbai',
    'clinical physiotherapy mumbai',
    'physiotherapy near me mumbai',
    'best physiotherapist in mumbai',
    'physiotherapy dadar mumbai',
    'sports physiotherapy mumbai',
    'physiotherapy for back pain mumbai',
  ],
}

const conditionPages = [
  {
    title: 'Back Pain',
    desc: 'Disc herniation, sciatica, facet joint pain, postural and desk-related back pain, spondylosis, and lumbar muscle strain.',
    href: '/physiotherapy-for-back-pain-mumbai',
    label: 'Back Pain Physiotherapy →',
  },
  {
    title: 'Knee Pain',
    desc: 'Runner\'s knee, osteoarthritis, meniscus tears, patellar tendinopathy, ITB syndrome, and post-ACL rehabilitation.',
    href: '/physiotherapy-for-knee-pain-mumbai',
    label: 'Knee Pain Physiotherapy →',
  },
  {
    title: 'Neck Pain',
    desc: 'Cervical disc herniation, radiculopathy, spondylosis, postural neck pain, cervicogenic headaches, and whiplash.',
    href: '/physiotherapy-for-neck-pain-mumbai',
    label: 'Neck Pain Physiotherapy →',
  },
  {
    title: 'Sports Injuries',
    desc: 'ACL tears, hamstring injuries, rotator cuff, ankle sprains, shin splints, ITB syndrome, and return-to-sport programmes.',
    href: '/sports-injury-physiotherapy-dadar-mumbai',
    label: 'Sports Injury Physiotherapy →',
  },
  {
    title: 'Post-Surgery Rehab',
    desc: 'ACL reconstruction, knee and hip replacement, spinal surgery, shoulder surgery, and Caesarean recovery.',
    href: '/post-surgery-physiotherapy-mumbai',
    label: 'Post-Surgery Physiotherapy →',
  },
  {
    title: 'Neurological Rehab',
    desc: 'Stroke recovery, Parkinson\'s disease, peripheral nerve injury, foot drop, and multiple sclerosis management.',
    href: '/physiotherapy-dadar-mumbai',
    label: 'Physiotherapy Dadar →',
  },
]

const differentiators = [
  {
    title: 'Full clinical assessment | every session',
    body: 'Not a generic protocol applied to everyone with the same diagnosis. Every case begins with movement testing, load assessment, and a clinical history that informs exactly what is treated and how.',
  },
  {
    title: 'Dry needling available',
    body: 'Dr. Vaishali Vijay Rauniyar is certified in dry needling | effective for trigger points in the neck, back, hamstrings, glutes, and rotator cuff. Available on-site at R3BOOT, not offered at most Mumbai clinics.',
  },
  {
    title: 'Aquatic rehabilitation on-site',
    body: 'Available at R3BOOT | rare outside hospital settings in Mumbai. Essential for post-surgical patients who need early movement before full weight-bearing is safe. Water reduces joint compression by up to 75%.',
  },
  {
    title: 'Integrated recovery environment',
    body: 'Contrast therapy, sports massage, and clinical Pilates available on the same visit. Your physiotherapist coordinates the session, one roof, one visit, faster recovery.',
  },
]

const whoWeHelp = [
  { label: 'Desk workers with chronic back and neck pain', icon: '💻' },
  { label: 'Runners and athletes at Shivaji Park', icon: '🏃' },
  { label: 'Post-surgical ACL, knee and hip rehab', icon: '🦵' },
  { label: 'Cervical disc and sciatica patients', icon: '⚡' },
  { label: 'Seniors with osteoarthritis and spondylosis', icon: '🧓' },
  { label: 'Gym athletes with tendon and muscle injuries', icon: '🏋️' },
]

export default function PhysiotherapyMumbaiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">

      {/* ─── HERO ─── */}
      <section className="relative h-[80vh] flex items-end overflow-hidden">
        <Image
          src="/images/service/Services_image/Physiotherapy_1.webp"
          alt="Physiotherapy Mumbai, clinical physiotherapy at R3BOOT Dadar East"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10 pb-20">
          <Link
            href="/services/physiotherapy"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all mb-8 group"
          >
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#513394] transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="font-bold tracking-wider text-sm">PHYSIOTHERAPY SERVICES</span>
          </Link>

          <div className="max-w-5xl">
            <div className="flex items-center gap-3 text-white/70 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">CLINICAL PHYSIOTHERAPY // DADAR EAST // MUMBAI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tighter leading-[1.0]">
              Physiotherapy in Mumbai
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium">
              Clinical physiotherapy by Dr. Hiral Parikh and Dr. Vaishali Rauniyar, Dadar East. Back pain, knee pain, neck pain, sports injuries, and post-surgery rehab.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="https://wa.me/919702368612"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-black px-8 py-4 rounded-full text-base shadow-2xl hover:scale-105 transition-all"
              >
                WhatsApp to Book
              </a>
              <a
                href="tel:+919702368612"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur border border-white/30 text-white font-black px-8 py-4 rounded-full text-base hover:bg-white/20 transition-all"
              >
                Call +91 97023 68612
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-[#513394] py-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-white">
            {[
              { stat: '5.0 ★', label: 'Google Rating' },
              { stat: '15+', label: 'Years Clinical Experience' },
              { stat: '60 min', label: 'First Session' },
              { stat: 'No Referral', label: 'Book Directly' },
              { stat: '5 mins', label: 'From Dadar Station' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xl sm:text-2xl font-black text-white">{item.stat}</div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTRO + SIDEBAR ─── */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-24 items-start">

            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 tracking-tight">
                Physiotherapy that identifies the cause.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Not just the location of pain.</span>
              </h2>
              <div className="prose prose-base sm:prose-lg md:prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                <p>
                  Most physiotherapy in Mumbai is reactive, a patient presents with a complaint, receives a
                  standard protocol, and returns when the pain comes back. That cycle repeats because the
                  underlying cause was never actually assessed. A tight hamstring is not just a tight hamstring.
                  It is a tight hamstring compensating for a hip that stopped extending, a lower back that
                  took over the load, and a movement pattern reinforced by years of sitting. Treat the muscle.
                  The tightness returns in six weeks.
                </p>
                <p>
                  At R3BOOT in Dadar East, clinical physiotherapy begins with a full structural assessment, movement quality, load tolerance, strength deficits, joint mobility, neurological screening,
                  and a detailed history. We identify what is actually failing and why. Then we treat it
                  directly, with manual therapy, dry needling, joint mobilisation, nerve mobilisation, and a
                  specific progressive exercise plan built around your life and goals.
                </p>
                <p>
                  Dr. Hiral Parikh (BPT, D.Y. Patil College, 15+ years clinical experience) and Dr. Vaishali
                  Vijay Rauniyar (BPT, 4+ years, certified in Dry Needling and Aquatic Rehabilitation) see a limited number
                  of patients per day. Your 60-minute session is not a 15-minute window between twenty others.
                </p>
              </div>

              {/* Differentiators */}
              <div className="mt-10 sm:mt-14 md:mt-20">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-6 sm:mb-10 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                  WHY R3BOOT IS DIFFERENT
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {differentiators.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-white/5 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden"
                    >
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

            {/* Sticky sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-[#1A1A1A] p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#513394]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-black mb-8 tracking-wide flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#513394]" />
                  WHO WE HELP //
                </h3>
                <ul className="space-y-4 mb-10">
                  {whoWeHelp.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 group/item">
                      <div className="w-6 h-6 rounded-full bg-[#513394] flex items-center justify-center shrink-0 mt-1 group-hover/item:scale-110 transition-transform">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/80 font-medium leading-snug group-hover/item:text-white transition-colors text-sm">{item.label}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/919702368612"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="block text-center bg-[#25D366] text-white font-black px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-lg mb-3"
                >
                  WhatsApp to Book
                </a>
                <a
                  href="tel:+919702368612"
                  className="block text-center bg-[#513394] text-white font-black px-8 py-4 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-base"
                >
                  Call +91 97023 68612
                </a>
                <p className="text-white/30 text-xs text-center mt-4 font-medium">No referral needed. 5 min from Dadar station.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CONDITIONS HUB: internal link cluster ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 sm:mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                WHAT WE TREAT //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 sm:mb-6 leading-tight">
                Conditions Treated at{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT Physiotherapy Mumbai</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Each condition has its own dedicated clinical programme, not a generic physiotherapy protocol.
                Select your condition for specific treatment information, recovery timelines, and session structure.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {conditionPages.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group bg-white dark:bg-white/5 p-6 sm:p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col"
                >
                  <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 dark:text-white/5 group-hover:text-[#513394]/5 transition-colors">
                    {idx + 1}
                  </div>
                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-5 group-hover:bg-[#513394] group-hover:text-white transition-all text-sm">
                      0{idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1">{item.desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-[#513394] dark:text-[#A78BFA] font-black text-xs tracking-widest uppercase">
                      <span>{item.label}</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── R3BOOT vs HOSPITAL COMPARISON ─── */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 sm:mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                THE DIFFERENCE //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 sm:mb-6 leading-tight">
                How much does physiotherapy{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">cost in Mumbai?</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                Price varies from ₹400 at hospital OPDs to ₹3,000+ at specialist clinics. What you pay
                for is session time and hands-on clinical attention, the factors that determine outcome.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 dark:border-white/5 mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#513394]">
                    <th className="px-4 sm:px-6 py-4 sm:py-5 text-white font-black text-xs sm:text-sm tracking-wider uppercase">Setting</th>
                    <th className="px-4 sm:px-6 py-4 sm:py-5 text-white font-black text-xs sm:text-sm tracking-wider uppercase">Session time</th>
                    <th className="px-4 sm:px-6 py-4 sm:py-5 text-white font-black text-xs sm:text-sm tracking-wider uppercase hidden sm:table-cell">Dry needling</th>
                    <th className="px-4 sm:px-6 py-4 sm:py-5 text-white font-black text-xs sm:text-sm tracking-wider uppercase">What you get</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Hospital OPD', '15–20 min', '✗', 'TENS/ultrasound, high volume, minimal assessment'],
                    ['Home physio', '30–45 min', '✗', 'Convenient, limited equipment and assessment space'],
                    ['Generic clinic', '30–45 min', 'Rarely', 'Standard protocol, limited condition expertise'],
                    ['R3BOOT Dadar', '45–60 min', '✓ Available', 'Full assessment + hands-on + progressive rehab plan'],
                  ].map(([setting, time, needling, whatYouGet], idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white dark:bg-white/5' : 'bg-[#F8F9FA] dark:bg-white/[0.02]'}
                    >
                      <td className={`px-4 sm:px-6 py-3 sm:py-4 font-bold text-xs sm:text-sm ${idx === 3 ? 'text-[#513394] dark:text-[#A78BFA]' : 'text-gray-900 dark:text-white'}`}>{setting}</td>
                      <td className={`px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm ${idx === 3 ? 'text-[#513394] dark:text-[#A78BFA] font-medium' : 'text-gray-500 dark:text-gray-400'}`}>{time}</td>
                      <td className={`px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm hidden sm:table-cell ${idx === 3 ? 'text-[#513394] dark:text-[#A78BFA] font-bold' : 'text-gray-500 dark:text-gray-400'}`}>{needling}</td>
                      <td className={`px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm ${idx === 3 ? 'text-[#513394] dark:text-[#A78BFA] font-medium' : 'text-gray-500 dark:text-gray-400'}`}>{whatYouGet}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              For current session fees, call or WhatsApp{' '}
              <a href="tel:+919702368612" className="font-bold text-[#513394] dark:text-[#A78BFA]">+91 97023 68612</a>.
              Clear number, no hidden charges.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CLINICAL TEAM ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 sm:mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                THE TEAM //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 sm:mb-6 leading-tight">
                Mumbai&apos;s Physiotherapy{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Clinical Team</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  name: 'Dr. Hiral Parikh',
                  credentials: 'BPT, D.Y. Patil College of Physiotherapy',
                  experience: '15+ years clinical experience',
                  specialties: ['Musculoskeletal physiotherapy', 'Chronic pain rehabilitation', 'Neurological rehab', 'Post-surgical recovery'],
                },
                {
                  name: 'Dr. Vaishali Vijay Rauniyar',
                  credentials: 'BPT, Certified in Dry Needling & Aquatic Rehabilitation',
                  experience: '4+ years clinical experience',
                  specialties: ['Dry needling', 'Aquatic rehabilitation', 'Sports injury rehab', 'Women\'s health physiotherapy'],
                },
              ].map((doc, idx) => (
                <div key={idx} className="bg-white dark:bg-white/5 p-6 sm:p-8 md:p-10 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-6 group-hover:bg-[#513394] group-hover:text-white transition-all text-xl">
                    {idx === 0 ? 'HP' : 'VR'}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-1">{doc.name}</h3>
                  <p className="text-[#513394] dark:text-[#A78BFA] font-bold text-sm mb-1">{doc.credentials}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-5">{doc.experience}</p>
                  <ul className="space-y-2">
                    {doc.specialties.map((s, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA] shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTEGRATED RECOVERY ─── */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 sm:mb-14">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                ONE ROOF //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 sm:mb-6 leading-tight">
                Physiotherapy Is One Part of{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Full Recovery</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-3xl">
                R3BOOT is an integrated recovery centre, not a standalone physio clinic. Physiotherapy,
                sports massage, contrast therapy, and clinical Pilates are available on the same visit,
                coordinated by your clinical team.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: 'Sports Massage',
                  desc: 'Deep tissue, trigger point, cupping, and myofascial release | often combined with physio on the same visit.',
                  href: '/sports-massage-mumbai',
                },
                {
                  title: 'Contrast Therapy',
                  desc: 'Ice bath and infrared sauna in a structured recovery protocol | reduces inflammation and accelerates tissue repair.',
                  href: '/contrast-therapy-mumbai',
                },
                {
                  title: 'Clinical Pilates',
                  desc: 'Supervised reformer Pilates built around your specific injury or condition, not a generic fitness class.',
                  href: '/clinical-pilates-mumbai',
                },
                {
                  title: 'Physiotherapy Dadar',
                  desc: 'Full condition-specific physiotherapy at R3BOOT Dadar East | the most central physiotherapy location in Mumbai.',
                  href: '/physiotherapy-dadar-mumbai',
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group bg-white dark:bg-white/5 p-6 rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-4 group-hover:bg-[#513394] group-hover:text-white transition-all text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DADAR LOCATION ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">

            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                DADAR EAST, MUMBAI //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                Central Mumbai&apos;s{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Integrated Physiotherapy Clinic</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-6">
                Dadar East is the geographic centre of Mumbai, on the Central Line and Western Line
                interchange, equidistant from Bandra, Lower Parel, BKC, Sion, and Worli. Five minutes
                from Dadar station on foot. Shivaji Park is 10 minutes. Most of central Mumbai is within
                15–20 minutes.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
                Unlike high-volume hospital OPDs or chain clinics, R3BOOT limits daily patient numbers.
                Every session gets the clinical time it requires. No waiting room queues. No 15-minute
                machine appointments dressed up as physiotherapy.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {['Dadar', 'Shivaji Park', 'Lower Parel', 'Worli', 'BKC', 'Bandra', 'Sion', 'Matunga', 'Parel', 'Wadala'].map((area, idx) => (
                  <span
                    key={idx}
                    className="bg-[#513394]/10 dark:bg-[#8B5CF6]/20 text-[#513394] dark:text-[#A78BFA] font-bold px-4 py-2 rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="text-[#513394] dark:text-[#A78BFA] font-black shrink-0 mt-0.5">↗</span>
                  <span>203, Palai Plaza, Swami Gyan Jivandas Marg, Dadar East, Mumbai 400014</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#513394] dark:text-[#A78BFA] font-black shrink-0 mt-0.5">↗</span>
                  <span>5 min from Dadar railway station (East exit) · Near Shivaji Park</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#513394] dark:text-[#A78BFA] font-black shrink-0 mt-0.5">↗</span>
                  <span>Mon–Sat: 8:00 AM – 9:00 PM &nbsp;|&nbsp; Sun: 2:00 PM – 9:00 PM</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#513394] dark:text-[#A78BFA] font-black shrink-0 mt-0.5">↗</span>
                  <span>
                    Book:{' '}
                    <a href="tel:+919702368612" className="font-bold text-[#513394] dark:text-[#A78BFA]">+91 97023 68612</a>
                    {' '}(Call or WhatsApp)
                  </span>
                </div>
              </div>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
              <Image
                src="/images/service/Services_image/Physiotherapy_1.webp"
                alt="R3BOOT physiotherapy clinic Dadar East Mumbai, central Mumbai location"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                  DADAR EAST, MUMBAI //
                </span>
                <p className="text-white text-xl font-black tracking-tight leading-tight">
                  Central Mumbai. No referral. Book directly.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── RELATED LINKS ─── */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <p className="text-xs font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-5 sm:mb-6">
            ALL PHYSIOTHERAPY PAGES //
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {[
              { label: 'Physiotherapy Dadar Mumbai', href: '/physiotherapy-dadar-mumbai' },
              { label: 'Physiotherapy for Back Pain', href: '/physiotherapy-for-back-pain-mumbai' },
              { label: 'Physiotherapy for Knee Pain', href: '/physiotherapy-for-knee-pain-mumbai' },
              { label: 'Physiotherapy for Neck Pain', href: '/physiotherapy-for-neck-pain-mumbai' },
              { label: 'Sports Injury Physiotherapy', href: '/sports-injury-physiotherapy-dadar-mumbai' },
              { label: 'Post-Surgery Physiotherapy', href: '/post-surgery-physiotherapy-mumbai' },
              { label: 'Sports Massage Mumbai', href: '/sports-massage-mumbai' },
              { label: 'Contrast Therapy Mumbai', href: '/contrast-therapy-mumbai' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm hover:bg-[#513394] hover:text-white hover:border-transparent transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection faqs={physiotherapyMumbaiFaqs} />

      {/* ─── CTA BANNER ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tight leading-tight">
              Book physiotherapy in Mumbai.{' '}
              <span className="text-white/50">No referral needed.</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 mb-4 leading-relaxed font-medium max-w-3xl mx-auto">
              Clinical physiotherapy at R3BOOT, Dadar East. Dr. Hiral Parikh and Dr. Vaishali Rauniyar.
              Assessment, treatment, and a plan that actually fixes the problem.
            </p>
            <p className="text-white/40 mb-8 sm:mb-12 text-sm font-bold tracking-widest">
              203, Palai Plaza, Dadar East, Mumbai 400014, 5 min from Dadar station
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="https://wa.me/919702368612"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] text-white font-black px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all hover:scale-105 shadow-2xl text-base sm:text-lg tracking-wide"
              >
                WhatsApp to Book
              </a>
              <a
                href="tel:+919702368612"
                className="w-full sm:w-auto bg-white text-[#513394] font-black px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all hover:scale-105 shadow-2xl text-base sm:text-lg tracking-wide"
              >
                Call +91 97023 68612
              </a>
            </div>
          </div>
        </div>
      </section>

      <ServiceSchema
        serviceName="Physiotherapy in Mumbai"
        description="Clinical physiotherapy in Mumbai at R3BOOT, Dadar East. Back pain, knee pain, neck pain, sports injuries, and post-surgery rehabilitation. Dr. Hiral Parikh (BPT, 15+ years) and Dr. Vaishali Vijay Rauniyar (4+ years). Dry needling and aquatic rehabilitation available."
        serviceUrl="https://www.r3boot.in/physiotherapy-mumbai"
      />
      <FAQSchema faqs={physiotherapyMumbaiFaqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Physiotherapy Mumbai', url: '/physiotherapy-mumbai' },
      ]} />
    </main>
  )
}
