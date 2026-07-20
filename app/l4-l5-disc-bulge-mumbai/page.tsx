import Image from 'next/image'
import type { Metadata } from 'next'
import { FAQSection } from '@/components/faq-section'
import { l4L5DiscBulgeFaqs } from '@/lib/faqs/l4-l5-disc-bulge-mumbai'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import ServiceNavbar from '@/components/ServiceNavbar'
import { HeroSlider } from '../services-demo/contrast-therapy/HeroSlider'
import { TeamSectionDemo } from '../services-demo/contrast-therapy/TeamSectionDemo'
import { TestimonialsCarousel } from '../services-demo/contrast-therapy/TestimonialsCarousel'
import { PainPointsSection } from './PainPointsSection'
import { RecoveryPhasesSection } from './RecoveryPhasesSection'

export const metadata: Metadata = {
  title: 'L4 L5 Disc Bulge Treatment Mumbai | Physio Rehab | R3BOOT',
  description:
    'L4–L5 disc bulge causing back or leg pain? Non-surgical rehab at R3BOOT Dadar — physiotherapy, aqua therapy and guided recovery. Most improve without surgery. WhatsApp to book.',
  alternates: { canonical: '/l4-l5-disc-bulge-mumbai' },
  keywords: [
    'l4 l5 disc bulge',
    'l4 l5 disc bulge treatment',
    'l4 l5 disc bulge treatment without surgery',
    'l4 l5 disc bulge physiotherapy mumbai',
    'slip disc l4 l5',
    'l4 l5 disc bulge exercises',
    'l4 l5 disc bulge recovery time',
    'l4 l5 disc bulge symptoms',
    'disc bulge treatment mumbai',
    'sciatica treatment mumbai',
  ],
}

const heroSlides = [
  {
    src: '/images/service/Services_image/Physiotherapy_1.webp',
    alt: 'Physiotherapy for L4 L5 disc bulge at R3BOOT Mumbai',
  },
  {
    src: '/images/Services_image/Hydrotherapy.webp',
    alt: 'Aqua therapy for lower back disc bulge at R3BOOT Dadar',
  },
  {
    src: '/images/Services_image/Physiotherapy.webp',
    alt: 'Clinical assessment for slip disc rehabilitation Mumbai',
  },
]

const rebootReachPoints = [
  {
    step: '01',
    title: 'We read your MRI — and your movement',
    body: 'Bring your MRI report if you have one. Your physiotherapist checks how you move, where pain goes, and whether nerves are involved. We treat you — not just the words on a scan. Many bulges on MRI cause no pain at all.',
  },
  {
    step: '02',
    title: 'Physiotherapy is the starting point',
    body: 'Manual therapy, nerve glides, dry needling where appropriate, and exercises matched to your pain pattern. This is the main non-surgical path for L4–L5 disc bulge. No generic printout — a plan built from your assessment.',
  },
  {
    step: '03',
    title: 'Aqua therapy when land hurts too much',
    body: 'Water holds you up so your spine carries less weight while you walk and move. Useful in early weeks when standing or walking on land triggers sharp leg pain. Dr. Vaishali is certified in aquatic rehabilitation.',
  },
  {
    step: '04',
    title: 'Clinical Pilates and return-to-activity',
    body: 'Once acute pain settles, deep core and spinal control work builds lasting support. Phased return to desk work, commute, gym, and sport — with a flare-up plan so you know what to do if pain returns.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Assessment & screening',
    body: 'Full history, movement testing, neurological screening, and MRI review if available. We confirm whether physiotherapy is right for you now — or if you need a doctor first.',
  },
  {
    number: '02',
    title: 'Pain relief & safe movement',
    body: 'Hands-on treatment, nerve glides, posture advice, and a home plan for the first 1–2 weeks. Goal: reduce pain enough to move without fear.',
  },
  {
    number: '03',
    title: 'Progressive rehab',
    body: 'Strengthening, aqua therapy if needed, clinical Pilates when ready. Sessions build on each other — not the same routine every visit.',
  },
  {
    number: '04',
    title: 'Return to your life',
    body: 'Work, commute, gym, sport — phased back with clear milestones. Most clients feel significantly better within 6–12 weeks. We tell you honestly if progress is slower than expected.',
  },
]


const testimonials = [
  {
    name: 'Chandrakant Chande',
    meta: 'Local Guide · 24 reviews',
    ago: '2 months ago',
    avatar: '/images/Customer_Review/Namrata Doshi.png',
    quote: 'Reboot team was wonderful. Navigated me through the entire contrast therapy experience with great insights. My body also feels lighter and better. Would definitely recommend this place for someone looking for good recovery.',
  },
  {
    name: 'Namrata Doshi',
    meta: 'Local Guide · 12 reviews',
    ago: '1 month ago',
    avatar: '/images/Customer_Review/Namrata Doshi.png',
    quote: 'The team is highly professional, knowledgeable, and genuinely caring. From the initial assessment to the recovery plan, everything was clearly explained and tailored to my needs. Highly recommend R3BOOT.',
  },
  {
    name: 'Sonal Malik',
    meta: 'Google User · 6 reviews',
    ago: '4 months ago',
    avatar: '/images/Customer_Review/Sonal Malik.png',
    quote: 'The Pilates sessions were highly personalized, with clear focus on alignment and core strength. I have already noticed better posture and reduced stiffness. Highly recommend for anyone serious about long-term physical wellness.',
  },
  {
    name: 'Dharmesh Thakkar',
    meta: 'Google User · 8 reviews',
    ago: '3 months ago',
    avatar: '/images/Customer_Review/Sonal Malik.png',
    quote: 'The deep tissue massage, cupping therapy, and ice water treatment helped relieve my body stiffness tremendously, while the sauna session left me feeling completely rejuvenated. Professional and well-equipped.',
  },
  {
    name: 'JugalKishore Shah',
    meta: 'Google User · 3 reviews',
    ago: '5 months ago',
    avatar: '/images/Customer_Review/JugalKishore Shah.png',
    quote: 'Excellent idea brought into reality. People will love to take benefit of it. Very professionally done. Keep it up and maintain high standard of services.',
  },
  {
    name: 'Arjun',
    meta: 'Google User · 5 reviews',
    ago: '1 month ago',
    avatar: '/images/Customer_Review/Arjun.png',
    quote: 'Wonderful experience. It is one of those places you actually wait to visit again because the first time was so amazing. Highly recommended!',
  },
]

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

export default function L4L5DiscBulgeMumbaiPage() {
  return (
    <main className="disc-bulge-page min-h-screen bg-white dark:bg-[#0A0A0A]">

      <ServiceNavbar />

      {/* DESKTOP HERO */}
      <section className="hidden md:flex relative bg-black overflow-hidden" style={{ minHeight: '92vh' }}>
        <div className="absolute inset-0">
          <Image
            src="/images/service/Services_image/Physiotherapy_1.webp"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: '50% center' }}
            priority
          />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 20%, transparent 30%)' }}
        />
        <div className="relative z-10 flex flex-col justify-center px-12 lg:px-16 xl:px-20 py-24 max-w-[54%]">
          <p className="text-[#A78BFA] text-[11px] font-black tracking-[0.25em] uppercase mb-5">
            Non-Surgical&nbsp;&nbsp;•&nbsp;&nbsp;Physio-Led&nbsp;&nbsp;•&nbsp;&nbsp;Most Improve Without Surgery
          </p>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.04] mb-5">
            L4–L5 Disc Bulge<br />
            Recovery in <span className="text-[#A78BFA]">Mumbai</span>
          </h1>
          <p className="text-[17px] text-white/55 max-w-md leading-relaxed mb-8">
            Back pain, leg pain, or sciatica from an L4–L5 disc bulge? Structured physiotherapy and guided rehab at R3BOOT Dadar — without jumping to surgery.
          </p>
          <div className="flex items-center gap-4 mb-10">
            <a
              href="tel:+919702368612"
              className="inline-flex items-center gap-2.5 bg-[#513394] hover:bg-[#603eb0] text-white font-black px-8 py-4 rounded-full transition-all hover:scale-[1.02] text-[15px] tracking-wide shadow-lg shadow-[#513394]/30"
            >
              <PhoneIcon className="w-4 h-4" />
              Book Assessment
            </a>
            <a
              href="https://wa.me/919702368612"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-white/20 text-white hover:bg-white/[0.07] font-bold px-8 py-4 rounded-full transition-all text-[15px] tracking-wide"
            >
              WhatsApp Us
            </a>
          </div>
          <div className="flex items-stretch gap-3">
            <div className="flex items-center gap-3 bg-[#16161e] border border-white/[0.08] rounded-2xl px-4 py-3.5">
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 48 48">
                <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.1 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.6 7.3 6.3 14.7z"/><path fill="#FBBC05" d="M24 46c5.6 0 10.5-1.9 14.4-5l-6.7-5.5C29.6 37 26.9 38 24 38c-5.9 0-10.9-4-12.7-9.5l-7 5.4C7.5 41.8 15.2 46 24 46z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.8 2.4-2.3 4.4-4.3 5.8l6.7 5.5C42.1 36.4 45 30.7 45 24c0-1.3-.2-2.7-.5-4z"/>
              </svg>
              <div>
                <p className="text-white text-[14px] font-bold leading-none mb-1.5">Google Reviews</p>
                <div className="flex items-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  <span className="text-white font-bold text-[13px] ml-1">5.0</span>
                </div>
                <p className="text-white/40 text-[12px]">500+ Happy Clients</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#16161e] border border-white/[0.08] rounded-2xl px-4 py-3.5">
              <svg className="w-7 h-7 text-[#A78BFA] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="text-white text-[14px] font-bold leading-none mb-1">15+ Years</p>
                <p className="text-white/40 text-[12px]">Clinical Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#16161e] border border-white/[0.08] rounded-2xl px-4 py-3.5">
              <svg className="w-7 h-7 text-[#A78BFA] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div>
                <p className="text-white text-[14px] font-bold leading-none mb-1">Physiotherapist</p>
                <p className="text-white/40 text-[12px]">Led &amp; Supervised</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#16161e] border border-white/[0.08] rounded-2xl px-4 py-3.5">
              <svg className="w-7 h-7 text-[#A78BFA] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
              </svg>
              <div>
                <p className="text-white text-[14px] font-bold leading-none mb-1">Aqua + Pilates</p>
                <p className="text-white/40 text-[12px]">Integrated Rehab</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE HERO */}
      <section className="md:hidden pt-20 pb-0 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5">
          <HeroSlider slides={heroSlides} />
          <div className="inline-flex items-center gap-2 bg-[#513394]/10 dark:bg-[#513394]/20 rounded-full px-4 py-2 mt-5 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]" />
            <span className="text-[#513394] dark:text-[#A78BFA] text-[11px] font-black tracking-[0.3em] uppercase">Disc Bulge Recovery</span>
          </div>
          <h1 className="text-[2rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-3">
            L4–L5 Disc Bulge Recovery in{' '}
            <span className="text-[#513394] dark:text-[#A78BFA]">Mumbai</span>
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            Back pain, leg pain, or sciatica from a disc bulge at L4–L5? Physiotherapy-led rehab at R3BOOT Dadar. Most people improve without surgery.
          </p>

          <div className="mt-5 bg-[#1A1A1A] rounded-2xl p-4 flex items-center gap-0">
            <div className="flex items-center shrink-0 pr-4">
              {[
                { src: '/images/Customer_Review/Namrata Doshi.png', alt: 'Namrata' },
                { src: '/images/Customer_Review/Sonal Malik.png', alt: 'Sonal' },
                { src: '/images/Customer_Review/JugalKishore Shah.png', alt: 'Jugal' },
              ].map((av, i) => (
                <div key={i} className={`relative w-12 h-12 rounded-full border-2 border-[#1A1A1A] overflow-hidden shrink-0 ${i > 0 ? '-ml-3' : ''}`} style={{ zIndex: 3 - i }}>
                  <Image src={av.src} alt={av.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="w-px self-stretch bg-white/10 shrink-0 mr-4" />
            <div className="flex flex-col gap-1 min-w-0">
              <div className="flex items-center gap-2">
                <div className="relative w-5 h-5 shrink-0">
                  <Image src="/images/GOOGLE_LOGO.webp" alt="Google" fill className="object-contain" />
                </div>
                <span className="text-white font-bold text-sm">Google Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white font-black text-xl">5.0</span>
              </div>
              <span className="text-gray-500 text-xs font-medium">500+ happy clients</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-3 mb-2">
            {[
              { value: '15+', label: 'YEARS EXPERIENCE', desc: 'Clinical spine and sports rehab expertise.' },
              { value: 'Physio', label: 'SUPERVISED', desc: 'Every session guided by qualified physiotherapists.' },
            ].map((card, i) => (
              <div key={i} className="bg-[#1A1A1A] rounded-2xl p-4 flex flex-col gap-3">
                <div>
                  <div className="text-xl font-black text-white leading-none">{card.value}</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">{card.label}</div>
                </div>
                <div className="w-8 h-[2px] bg-[#513394] rounded-full" />
                <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS L4-L5 — educational intro */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                UNDERSTANDING //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
                What is an L4–L5 disc bulge —{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">in plain English?</span>
              </h2>
              <div className="space-y-5 text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                <p>
                  Your lower back has five main bones (vertebrae) numbered L1 to L5. Between each bone sits a soft cushion called a disc. At L4–L5 — the level just above your tailbone — that cushion can push outward. Doctors call this a <strong className="text-gray-700 dark:text-gray-300">disc bulge</strong> or <strong className="text-gray-700 dark:text-gray-300">protrusion</strong>. Many Indians know it as <strong className="text-gray-700 dark:text-gray-300">slip disc</strong>.
                </p>
                <p>
                  A bulge does not always mean surgery. It does not always mean permanent damage. The disc may press on a nearby nerve — often the L5 nerve — causing pain in your lower back, buttock, leg, or foot. Or it may cause only mild back stiffness. <strong className="text-gray-700 dark:text-gray-300">Your MRI report and your symptoms do not always match.</strong> Many people have bulges on scan with zero pain.
                </p>
                <p>
                  About 9 in 10 people with lumbar disc problems improve without surgery when they follow structured conservative care — physiotherapy, safe movement, and time. That is where R3BOOT fits: we support your recovery, not replace your doctor.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-4">
              {[
                { q: 'What causes it?', a: 'Age-related wear, heavy lifting, repeated bending, sudden strain, long sitting, and genetics. Mumbai commutes and desk jobs often make it worse — they do not cause it alone.' },
                { q: 'How is it diagnosed?', a: 'Your doctor examines you and may order an MRI. The scan shows disc shape. Your physiotherapist assesses how you move, where pain travels, and whether nerves are involved.' },
                { q: 'Do I need surgery?', a: 'Usually no. Surgery is for severe, persistent cases or progressive nerve weakness — not for every bulge on an MRI report.' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.06]">
                  <h3 className="font-black text-gray-900 dark:text-white text-[15px] mb-2">{item.q}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PainPointsSection />

      {/* R3BOOT APPROACH */}
      <section id="approach" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                OUR APPROACH //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-5">
                How R3BOOT helps{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">
                  L4–L5 disc bulge recovery
                </span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-6">
                We are a recovery clinic — not a hospital or surgery centre. Physiotherapy is the foundation. Aqua therapy, clinical Pilates, and sports massage support your plan when your physiotherapist says they are safe and useful.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed border-l-2 border-[#513394]/40 pl-4">
                We do not prescribe medication, give injections, or perform surgery. If you need those, we will tell you to see the right specialist.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-3">
              {rebootReachPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-6 rounded-2xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.06] hover:border-[#513394]/30 transition-all duration-300 group"
                >
                  <div className="text-[#513394] dark:text-[#A78BFA] font-black text-xs shrink-0 w-7 pt-1 opacity-50 group-hover:opacity-100 transition-opacity">
                    {point.step}
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 dark:text-white text-[15px] mb-2 leading-snug">{point.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{point.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RecoveryPhasesSection />

      {/* PROCESS STEPS */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              YOUR VISIT //
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
              What to expect at{' '}
              <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
              First visit is an assessment — not a random exercise session. Bring your MRI report if you have one.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 max-w-7xl mx-auto">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="relative flex flex-col aspect-square p-6 lg:p-7 rounded-2xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08] group hover:border-[#513394]/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -top-4 -right-2 text-[5.5rem] lg:text-[6rem] font-black text-gray-100 dark:text-white/[0.035] leading-none select-none pointer-events-none">
                  {step.number}
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black text-sm mb-5">
                    {step.number}
                  </div>
                  <h3 className="font-black text-gray-900 dark:text-white text-base lg:text-[17px] mb-3 leading-snug">{step.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSectionDemo />

      {/* MOBILE TESTIMONIALS */}
      <section className="md:hidden py-10 bg-[#0A0A0A]">
        <div className="px-5 mb-6">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase block mb-2">Patient Stories</span>
          <h2 className="text-[26px] font-extrabold text-white leading-tight">What clients say</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto px-5 pb-2 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((r, i) => (
            <figure key={i} className="flex-shrink-0 w-[85vw] snap-start bg-[#161616] border border-white/[0.07] rounded-3xl p-5 flex flex-col">
              <blockquote className="text-white/80 text-[15px] leading-relaxed italic flex-grow mb-5">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={r.avatar} alt={r.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-white font-bold text-[15px] leading-tight">{r.name}</p>
                  <p className="text-white/40 text-[12px]">{r.meta}</p>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* DESKTOP TESTIMONIALS */}
      <section className="hidden md:block py-20 lg:py-28 bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">PATIENT STORIES //</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">What clients say</h2>
          </div>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      <FAQSection faqs={l4L5DiscBulgeFaqs} />

      {/* MOBILE CTA */}
      <section className="md:hidden bg-white dark:bg-[#0A0A0A] pt-10 pb-28">
        <div className="px-4">
          <div
            className="relative rounded-3xl overflow-hidden px-6 pt-7 pb-6"
            style={{ background: 'linear-gradient(135deg, #2a0d6e 0%, #1a0850 55%, #110638 100%)' }}
          >
            <div className="relative">
              <h2 className="text-[26px] font-black text-white leading-tight tracking-tight mb-2">
                Book a physio assessment{' '}
                <span className="text-[#A78BFA]">in Mumbai</span>
              </h2>
              <p className="text-white/55 text-[13px] leading-relaxed mb-5">
                R3BOOT, Dadar. Bring your MRI if you have one. Our physiotherapists will tell you honestly if this is the right starting point — or if you need a doctor first.
              </p>
              <div className="flex flex-col gap-3">
                <a href="tel:+919702368612" className="flex items-center justify-center gap-2 bg-white text-[#513394] font-black rounded-full py-3.5 text-[15px]">
                  <PhoneIcon className="w-4 h-4" />
                  Call to Book
                </a>
                <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center justify-center gap-2 border border-white/25 text-white font-bold rounded-full py-3.5 text-[15px]">
                  WhatsApp
                </a>
              </div>
              <p className="text-center text-white/30 text-[10px] tracking-[0.2em] uppercase mt-4">Dadar, Mumbai</p>
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP CTA */}
      <section className="hidden md:block py-16 lg:py-20 bg-[#513394] relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 max-w-3xl mx-auto leading-tight">
            Book a physio assessment in{' '}
            <span className="text-white/45">Mumbai</span>
          </h2>
          <p className="text-lg text-white/65 mb-10 max-w-xl mx-auto leading-relaxed">
            R3BOOT, Dadar. Most L4–L5 disc bulge cases improve without surgery. Start with an assessment — we will guide you from there.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <a href="tel:+919702368612" className="inline-flex items-center justify-center gap-2.5 bg-white text-[#513394] font-black px-10 py-5 rounded-full hover:scale-105 transition-all text-base">
              <PhoneIcon className="w-4 h-4" />
              Call to Book
            </a>
            <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full hover:bg-white/10 transition-all text-base">
              WhatsApp
            </a>
          </div>
          <p className="text-white/35 mt-8 font-bold tracking-widest text-xs uppercase">Dadar, Mumbai</p>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/[0.09] px-4 pt-3 pb-5">
          <div className="flex gap-3">
            <a href="tel:+919702368612" className="flex-1 flex items-center justify-center gap-2 bg-[#513394] text-white font-black rounded-xl py-3.5 text-[14px]">
              <PhoneIcon className="w-4 h-4" />
              Call
            </a>
            <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 border border-white/20 text-white font-bold rounded-xl py-3.5 text-[14px]">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <ServiceSchema
        serviceName="L4 L5 Disc Bulge Rehabilitation in Mumbai"
        description="Non-surgical physiotherapy-led rehabilitation for L4–L5 disc bulge, sciatica, and lower back pain at R3BOOT Dadar, Mumbai. Assessment, manual therapy, aqua therapy, and clinical Pilates under one team."
        serviceUrl="https://www.r3boot.in/l4-l5-disc-bulge-mumbai"
      />
      <FAQSchema faqs={l4L5DiscBulgeFaqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Physiotherapy for Back Pain Mumbai', url: '/physiotherapy-for-back-pain-mumbai' },
          { name: 'L4 L5 Disc Bulge Mumbai', url: '/l4-l5-disc-bulge-mumbai' },
        ]}
      />
    </main>
  )
}
