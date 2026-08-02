import Image from 'next/image'
import { HeroTrustBadge, serviceTrustBadges } from '@/components/HeroTrustBadge'
import Link from 'next/link'
import { Metadata } from 'next'
import { services } from '@/lib/services'
import { TeamSectionDemo, type TeamMember } from '@/app/services-demo/contrast-therapy/TeamSectionDemo'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { sportsMassageFaqs } from '@/lib/faqs/sports-massage'
import ServiceNavbar from '@/components/ServiceNavbar'
import { HeroSlider } from '@/app/services-demo/contrast-therapy/HeroSlider'
import { TestimonialsCarousel } from '@/app/services-demo/contrast-therapy/TestimonialsCarousel'
import { LocationSection } from '@/app/services-demo/contrast-therapy/LocationSection'

export const metadata: Metadata = {
    title: 'Sports Massage in Mumbai | R3BOOT Dadar',
    description: 'Clinical sports massage in Mumbai by certified specialists. Serving athletes in Dadar, Andheri, Thane & Bandra. Book at R3BOOT Recovery Center.',
    keywords: ['sports massage mumbai', 'sports massage dadar', 'deep tissue sports massage mumbai', 'sports massage therapist mumbai', 'sports recovery massage', 'sports massage near me mumbai'],
    alternates: { canonical: '/services/sports-massage' },
}

const otherServices = services.filter(s => s.slug !== 'sports-massage').slice(0, 4)

const sportsMassageTeam: TeamMember[] = [
  {
    name: 'Akshay Anil Nalawde',
    role: 'Sports Massage Therapist',
    credentials: 'Cupping Therapy Level 1 & 2 Certified',
    experience: '1000+ Athletes Treated',
    description:
      'Certified in Cupping Therapy (Level 1 & 2) and muscle recovery. He has worked with over 1,000 athletes to reduce muscle stiffness, improve circulation, and support faster recovery from training loads.',
    image: '/images/trainer2/Trainers/Akshay Anil Nalawde.webp',
    stats: { years: '1000+', yearsLabel: 'Athletes Treated', rating: '5.0 ★' },
  },
  {
    name: 'Ganesh S. Gadhave',
    role: 'Pain Management & Sports Rehabilitation',
    credentials: 'Injury Prevention & Prehabilitation',
    experience: 'Athlete Recovery Specialist',
    description:
      'Focuses on injury prevention, prehabilitation, and athlete recovery at R3BOOT. His approach emphasises long-term physical resilience rather than short-term relief, ensuring continuity between massage therapy and physiotherapy programming.',
    image: '/images/trainer2/Trainers/Dr. Ganesh S. Gadhave.webp',
    stats: { years: '10+', rating: '5.0 ★' },
  },
  {
    name: 'Vaishali Sonar',
    role: 'Sports Massage Therapist',
    credentials: 'Cupping Therapy Level 1 & 2 Certified',
    experience: 'Women\'s Sports Massage Specialist',
    description:
      'Certified in Cupping Therapy (Level 1 & 2). Specialises in sports massage for female athletes and the general population. Her sessions are built around injury-free performance, combining clinical technique with an understanding of female physiology and training load.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1771404920/aanya-rao-womens-sports-massage-specialist-mumbai_agreyq.avif',
    stats: { years: 'L1&2', yearsLabel: 'Cupping Certified', rating: '5.0 ★' },
  },
]

// ─── DATA ─────────────────────────────────────────────────────────────────────

const heroSlides = [
  {
    src: '/images/hero/sports-massage-hero.png',
    alt: 'Sports Massage Mumbai – R3BOOT Recovery Center',
  },
  {
    src: '/images/hero/r3boot-sports-massage.png',
    alt: 'Clinical Sports Massage at R3BOOT Dadar',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Pre-Session Assessment',
    body: 'Therapist reviews training load, pain location, sleep, and hydration. A movement screen sets the session goal before any bodywork begins.',
  },
  {
    number: '02',
    title: 'Warm-Up Phase',
    body: 'Light effleurage and rhythmic strokes increase tissue temperature and prepare the nervous system for targeted work.',
  },
  {
    number: '03',
    title: 'Targeted Treatment',
    body: 'Deep tissue, trigger point therapy, and myofascial release based on your assessment | not a generic routine.',
  },
  {
    number: '04',
    title: 'Sports Massage Cupping',
    body: 'Cupping is applied where indicated to improve blood flow, reduce tension, and support recovery | integrated into your session when assessment calls for it.',
  },
  {
    number: '05',
    title: 'Activation & Advice',
    body: 'Assisted stretching, PNF, and muscle activation finish each session. Recovery protocol and home drills are given before you leave.',
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
    name: 'Dharmesh Thakkar',
    meta: 'Google User · 8 reviews',
    ago: '3 months ago',
    avatar: '/images/Customer_Review/Sonal Malik.png',
    quote: 'The deep tissue massage, cupping therapy, and ice water treatment helped relieve my body stiffness tremendously, while the sauna session left me feeling completely rejuvenated. Professional and well-equipped.',
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

// ─── PHONE SVG ────────────────────────────────────────────────────────────────

function PhoneIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
    )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function SportsMassagePage() {
    return (
        <main className="ct-page min-h-screen bg-white dark:bg-[#0A0A0A] pb-24 md:pb-0">

            <ServiceNavbar />

            {/* ─────────────────────────────────────────────
                DESKTOP HERO (md+): full-bleed bg images, text overlaid left
            ───────────────────────────────────────────── */}
            <section className="hidden md:flex relative flex-col bg-black overflow-hidden" style={{ minHeight: '92vh' }}>
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero/sports-massage-hero.png"
                        alt="Sports Massage Mumbai – R3BOOT Recovery Center"
                        fill
                        className="object-cover"
                        style={{ objectPosition: '68% center' }}
                        priority
                    />
                </div>

                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            'linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 18%, rgba(0,0,0,0.45) 38%, rgba(0,0,0,0.15) 55%, transparent 68%)',
                    }}
                />
                <div
                    className="absolute inset-x-0 bottom-0 h-[34%] pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.18) 50%, transparent 100%)' }}
                />

                <div className="relative z-10 flex flex-1 flex-col justify-center px-12 lg:px-16 xl:px-20 pt-28 max-w-[54%]">
                    <p className="text-[#A78BFA] text-[11px] font-black tracking-[0.25em] uppercase mb-4">
                        Clinical Recovery&nbsp;&nbsp;•&nbsp;&nbsp;Certified Specialists&nbsp;&nbsp;•&nbsp;&nbsp;Performance-Driven
                    </p>

                    <h1 className="text-5xl lg:text-6xl xl:text-[4.25rem] font-black text-white tracking-tight leading-[1.04] mb-4">
                        Sports Massage<br />
                        in <span className="text-[#A78BFA]">Mumbai</span>
                    </h1>

                    <p className="text-[16px] text-white/55 max-w-md leading-relaxed mb-7">
                        Performance-driven massage by certified specialists at R3BOOT Dadar. Clinical recovery, not spa relaxation.
                    </p>

                    <div className="flex items-center gap-4">
                        <a
                            href="tel:+919702368612"
                            className="inline-flex items-center gap-2.5 bg-[#513394] hover:bg-[#603eb0] text-white font-black px-7 py-3.5 rounded-full transition-all hover:scale-[1.02] text-[14px] tracking-wide shadow-lg shadow-[#513394]/30"
                        >
                            <PhoneIcon className="w-4 h-4" />
                            Book Your Session
                        </a>
                        <a
                            href="https://wa.me/919702368612"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className="inline-flex items-center gap-2.5 border border-white/20 text-white hover:bg-white/[0.07] font-bold px-7 py-3.5 rounded-full transition-all text-[14px] tracking-wide"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.855L0 24l6.335-1.502A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.38l-.36-.214-3.732.885.916-3.629-.235-.373A9.818 9.818 0 1112 21.818z"/>
                            </svg>
                            WhatsApp Us
                        </a>
                    </div>
                </div>

                <HeroTrustBadge items={serviceTrustBadges['sports-massage']} />
            </section>

            {/* ─────────────────────────────────────────────
                MOBILE HERO (<md): text-first layout
                H1 → subtext → CTAs → image slider → 3 pointers
            ───────────────────────────────────────────── */}
            <section className="md:hidden pt-20 pb-0 bg-white dark:bg-[#0A0A0A]">
                <div className="container mx-auto px-5">

                    {/* Image slider - FIRST */}
                    <HeroSlider slides={heroSlides} />

                    {/* Label chip */}
                    <div className="inline-flex items-center gap-2 bg-[#513394]/10 dark:bg-[#513394]/20 rounded-full px-4 py-2 mt-5 mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]" />
                        <span className="text-[#513394] dark:text-[#A78BFA] text-[11px] font-black tracking-[0.3em] uppercase">Clinical Recovery</span>
                    </div>

                    {/* H1 */}
                    <h1 className="text-[2rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-3">
                        Sports Massage in{' '}
                        <span className="text-[#513394] dark:text-[#A78BFA]">Mumbai</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                        Performance-driven massage by certified specialists at R3BOOT, Dadar. Clinical recovery, not spa relaxation.
                    </p>

                    {/* Row 1: Google Reviews card */}
                    <div className="mt-5 bg-[#1A1A1A] dark:bg-[#1A1A1A] rounded-2xl p-4 flex items-center gap-0">
                        {/* Avatars */}
                        <div className="flex items-center shrink-0 pr-4">
                            {[
                                { src: '/images/Customer_Review/Namrata Doshi.png', alt: 'Namrata' },
                                { src: '/images/Customer_Review/Sonal Malik.png', alt: 'Sonal' },
                                { src: '/images/Customer_Review/JugalKishore Shah.png', alt: 'Jugal' },
                            ].map((av, i) => (
                                <div
                                    key={i}
                                    className={`relative w-12 h-12 rounded-full border-2 border-[#1A1A1A] overflow-hidden shrink-0 ${i > 0 ? '-ml-3' : ''}`}
                                    style={{ zIndex: 3 - i }}
                                >
                                    <Image src={av.src} alt={av.alt} fill className="object-cover" />
                                </div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="w-px self-stretch bg-white/10 shrink-0 mr-4" />

                        {/* Google + stars */}
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

                    {/* Row 2: 2 stat cards */}
                    <div className="grid grid-cols-2 gap-3 mt-3 mb-2">
                        {[
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
                                ),
                                value: '1000+',
                                label: 'ATHLETES',
                                desc: 'Trusted by competitive and recreational athletes.',
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                    </svg>
                                ),
                                value: 'Certified',
                                label: 'SPECIALISTS',
                                desc: 'Cupping Level 1 & 2, clinical training.',
                            },
                        ].map((card, i) => (
                            <div key={i} className="bg-[#1A1A1A] dark:bg-[#1A1A1A] rounded-2xl p-4 flex flex-col gap-3">
                                {/* Row 1: icon + value/label */}
                                <div className="flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-full bg-[#513394]/20 flex items-center justify-center text-[#A78BFA] shrink-0">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <div className="text-xl font-black text-white leading-none">{card.value}</div>
                                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">{card.label}</div>
                                    </div>
                                </div>
                                {/* Divider */}
                                <div className="w-8 h-[2px] bg-[#513394] rounded-full" />
                                {/* Row 2: description */}
                                <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ─────────────────────────────────────────────
                SECTION: INTRO — spa vs clinical
            ───────────────────────────────────────────── */}
            <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                            CLINICAL //
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
                            Complete Recovery{' '}
                            <span className="text-[#513394] dark:text-[#8B5CF6]">Built Around You.</span>
                        </h2>
                        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-5">
                            <p>
                                Most sports massage in Mumbai is performed by spa therapists trained in general relaxation techniques.
                                At R3BOOT, it is performed by a certified sports massage specialist with hands-on experience across 1,000+ athletes and active individuals.
                                The difference is not subtle, it is the difference between feeling temporarily relaxed and actually recovering.
                            </p>
                            <p>
                                Located in Dadar, central Mumbai, accessible from Andheri, Thane, Bandra, and Navi Mumbai, R3BOOT is an integrated performance recovery center.
                                Sports massage here is one part of a structured recovery ecosystem that includes physiotherapy, ice bath therapy, infrared sauna, and compression recovery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─────────────────────────────────────────────
                SECTION: PROCESS (5 STEPS) — square cards
            ───────────────────────────────────────────── */}
            <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">

                    <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
                        <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                            THE PROCESS //
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
                            What to expect at{' '}
                            <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                            Each session is structured around your training phase, movement assessment, and recovery goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-7xl mx-auto">
                        {processSteps.map((step, i) => (
                            <div
                                key={i}
                                className="relative flex flex-col aspect-square p-6 lg:p-7 rounded-2xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08] group hover:border-[#513394]/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute -top-4 -right-2 text-[5.5rem] lg:text-[6rem] font-black text-gray-100 dark:text-white/[0.035] leading-none select-none pointer-events-none">
                                    {step.number}
                                </div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-11 h-11 rounded-xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black text-sm mb-5 group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
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

            {/* ─────────────────────────────────────────────
                SECTION: TECHNIQUES — cupping image + list
            ───────────────────────────────────────────── */}
            <section className="py-16 sm:py-20 lg:py-28 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

                        {/* Left: Image */}
                        <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
                            <Image
                                src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1771404921/cupping-therapy-sports-massage-mumbai_poqr2z.avif"
                                alt="Cupping Therapy – Sports Massage Mumbai R3BOOT"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                                    CUPPING THERAPY //
                                </span>
                                <p className="text-white text-xl font-black tracking-tight leading-tight">
                                    Certified Level 1 & 2, Akshay Anil Nalawde
                                </p>
                            </div>
                        </div>

                        {/* Right: Techniques list */}
                        <div>
                            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                                METHODOLOGY //
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                                Techniques Used at <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT</span>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                                Sports massage is not one technique applied to everyone. Akshay selects and combines methods based on what your assessment reveals, your training load, and where your body is in its recovery cycle.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Deep Tissue Massage",
                                        body: "Used for chronic tightness and adhesions that build up over long training blocks. Targets specific layers of muscle tissue where restriction is limiting movement or causing compensatory patterns elsewhere."
                                    },
                                    {
                                        title: "Trigger Point Therapy",
                                        body: "Addresses localised knots and referred pain patterns. A common example: calf trigger points that present as heel pain. Releasing the source, not just treating the symptom, is what produces lasting results."
                                    },
                                    {
                                        title: "Myofascial Release",
                                        body: "Targets the fascial system surrounding muscles. Restrictions here cause postural issues and limit range of motion in ways deep tissue work alone cannot resolve, especially relevant for desk workers and athletes with repetitive movement demands."
                                    },
                                    {
                                        title: "Cupping Therapy (Level 1 & 2 Certified)",
                                        body: "Used for fascia decompression, stubborn tight areas like the IT band and upper back, and improving blood flow to chronically compressed tissue. Cupping reaches layers that hands cannot effectively access."
                                    },
                                ].map((tech, idx) => (
                                    <div key={idx} className="flex gap-5 group">
                                        <div className="w-10 h-10 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black shrink-0 text-sm group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
                                            0{idx + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{tech.title}</h3>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{tech.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ─────────────────────────────────────────────
                SECTION: COMPARISON TABLE — R3BOOT vs Spa
            ───────────────────────────────────────────── */}
            <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12 sm:mb-14">
                            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                                CLINICAL VS SPA //
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
                                What Makes R3BOOT <span className="text-[#513394] dark:text-[#8B5CF6]">Different?</span>
                            </h2>
                        </div>

                        <div className="overflow-x-auto rounded-[2.5rem] border border-gray-200 dark:border-white/10 shadow-sm">
                            <table className="w-full">
                                <thead className="bg-[#513394] text-white">
                                    <tr>
                                        <th className="px-6 py-5 text-left font-black text-sm tracking-wide">Criteria</th>
                                        <th className="px-6 py-5 text-left font-black text-sm tracking-wide">R3BOOT Sports Massage</th>
                                        <th className="px-6 py-5 text-left font-black text-sm tracking-wide">Spa Deep Tissue</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-[#1A1A1A] divide-y divide-gray-100 dark:divide-white/5">
                                    {[
                                        ["Performed by", "Certified sports therapy specialist", "General spa therapist"],
                                        ["Starts with", "Movement & load assessment", "Preference form"],
                                        ["Adjusted for", "Training phase (pre/post event)", "Pressure preference"],
                                        ["Includes", "Trigger point, MFR, cupping, activation", "Relaxation strokes"],
                                        ["Ends with", "Mobility drills, recovery advice", "Relaxation"],
                                        ["Goal", "Performance continuity", "Temporary relaxation"],
                                    ].map(([label, r3, spa], idx) => (
                                        <tr key={idx}>
                                            <td className="px-6 py-4 font-bold text-gray-900 dark:text-white text-sm">{label}</td>
                                            <td className={`px-6 py-4 text-sm ${idx === 5 ? 'text-[#513394] dark:text-[#8B5CF6] font-bold' : 'text-gray-700 dark:text-gray-300'}`}>{r3}</td>
                                            <td className="px-6 py-4 text-gray-400 text-sm">{spa}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─────────────────────────────────────────────
                SECTION: WOMEN'S SPORTS MASSAGE — Vaishali
            ───────────────────────────────────────────── */}
            <section className="py-16 sm:py-20 lg:py-28 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

                        {/* Left: Content */}
                        <div>
                            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                                FOR FEMALE ATHLETES //
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                                Sports Massage for Women – <span className="text-[#513394] dark:text-[#8B5CF6]">With Vaishali Sonar</span>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-4">
                                Most sports massage in Mumbai is not adapted for female physiology. Pressure, technique selection, and recovery protocols built around male athletes do not automatically translate to women, especially those managing training load, hormonal cycles, or sport-specific injury patterns.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                                At R3BOOT, female clients are treated by Vaishali Sonar, a certified sports massage therapist with cupping therapy certification at Level 1 and 2, and hands-on experience working with both competitive players and the general population.
                            </p>

                            <div className="space-y-5">
                                {[
                                    {
                                        label: "Competitive Female Athletes",
                                        body: "Runners, cricketers, and gym athletes dealing with training load accumulation, muscle imbalances, and recovery between events. Sessions are structured around your sport and training phase, not a generic template."
                                    },
                                    {
                                        label: "Women Who Train Seriously",
                                        body: "Lifting 4 days a week, doing functional fitness, or training for your first half marathon puts the same load on your body as competitive sport. Tight hip flexors, shoulder impingement, and lower back overload are as common here as anywhere. You do not need to be competing to need clinical recovery."
                                    },
                                    {
                                        label: "Corporate Women Who Train After Work",
                                        body: "Eight to ten hours at a desk followed by an evening training session creates predictable problems: thoracic stiffness, neck and upper trap spasm, hip flexor compression. Vaishali addresses both the desk load and the training load in a single session."
                                    },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-5 group">
                                        <div className="w-10 h-10 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black shrink-0 text-sm group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
                                            0{idx + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{item.label}</h3>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl order-first lg:order-last">
                            <Image
                                src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1771404921/womens-sports-massage-session-r3boot-mumbai_pgzvnr.avif"
                                alt="Women's Sports Massage Session – R3BOOT Mumbai"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                                    WOMEN&apos;S SPORTS MASSAGE //
                                </span>
                                <p className="text-white text-xl font-black tracking-tight leading-tight">
                                    Vaishali Sonar, Cupping Certified Level 1 & 2
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ─────────────────────────────────────────────
                SECTION: WHO IS IT FOR — 4 sport cards
            ───────────────────────────────────────────── */}
            <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-14">
                        <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                            SPORT-SPECIFIC //
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
                            Built for Your <span className="text-[#513394] dark:text-[#8B5CF6]">Sport & Lifestyle</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            {
                                sport: "Runners",
                                tag: "RUNNING //",
                                description: "Calf tightness, plantar fascia pain, hamstring overload, and hip flexor stiffness | especially common in Mumbai runners who sit at a desk all day before evening runs.",
                                image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
                                points: ["Calf & plantar fascia", "Hamstring overload", "Hip flexor release"],
                            },
                            {
                                sport: "Gym Athletes",
                                tag: "GYM //",
                                description: "Shoulder impingement, lower back tightness, rounded shoulders from tight pecs, and quad or hip flexor stiffness. Address compensation patterns before they become injuries.",
                                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
                                points: ["Shoulder impingement", "Lower back tightness", "Hip flexor & quad stiffness"],
                            },
                            {
                                sport: "Cricketers",
                                tag: "CRICKET //",
                                description: "Rotator cuff tightness from bowling and throwing, forearm and wrist overuse in batsmen, lower back asymmetry from one-sided movement demands.",
                                image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80",
                                points: ["Rotator cuff tightness", "Forearm & wrist overuse", "Lower back asymmetry"],
                            },
                            {
                                sport: "Corporate Professionals",
                                tag: "DESK + TRAINING //",
                                description: "Neck and upper trap spasm, thoracic stiffness, piriformis syndrome, and hip flexor tightness from prolonged desk work combined with hard training.",
                                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
                                points: ["Neck & upper trap spasm", "Thoracic stiffness", "Piriformis syndrome"],
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="group relative rounded-[2.5rem] overflow-hidden aspect-[16/10] shadow-xl hover:shadow-2xl transition-all duration-500"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.sport}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                                <div className="absolute inset-0 bg-[#513394]/0 group-hover:bg-[#513394]/30 transition-all duration-500" />
                                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                                    <span className="text-[10px] font-black tracking-[0.3em] text-white/50 uppercase mb-2 block">
                                        {item.tag}
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
                                        {item.sport}
                                    </h3>
                                    <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-lg hidden group-hover:block transition-all">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.points.map((pt, i) => (
                                            <span key={i} className="bg-white/15 backdrop-blur-sm text-white text-xs font-bold px-4 py-1.5 rounded-full border border-white/20">
                                                {pt}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION: TEAM — same UI as contrast-therapy-mumbai */}
            <TeamSectionDemo members={sportsMassageTeam} />

            {/* MOBILE: Google Review cards */}
            <section className="md:hidden py-10 bg-[#0A0A0A]">
                <div className="px-5 mb-6">
                    <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase block mb-2">Client Stories</span>
                    <h2 className="text-[26px] font-extrabold text-white leading-tight">What clients say</h2>
                </div>
                <div className="flex gap-4 overflow-x-auto px-5 pb-2 snap-x snap-mandatory scrollbar-hide">
                    {testimonials.map((r, i) => (
                        <figure key={i} className="flex-shrink-0 w-[85vw] snap-start bg-[#161616] border border-white/[0.07] rounded-3xl p-5 flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2.5">
                                    <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 48 48">
                                        <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
                                        <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.1 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.6 7.3 6.3 14.7z"/>
                                        <path fill="#FBBC05" d="M24 46c5.6 0 10.5-1.9 14.4-5l-6.7-5.5C29.6 37 26.9 38 24 38c-5.9 0-10.9-4-12.7-9.5l-7 5.4C7.5 41.8 15.2 46 24 46z"/>
                                        <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.8 2.4-2.3 4.4-4.3 5.8l6.7 5.5C42.1 36.4 45 30.7 45 24c0-1.3-.2-2.7-.5-4z"/>
                                    </svg>
                                    <span className="text-white font-bold text-[15px]">Google Review</span>
                                </div>
                                <div className="flex items-center gap-1.5 bg-[#222] rounded-full px-3 py-1.5">
                                    {[...Array(5)].map((_, j) => (
                                        <svg key={j} className="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                    <span className="text-white font-bold text-[13px] ml-0.5">5.0</span>
                                </div>
                            </div>

                            <div className="h-px bg-white/[0.07] mb-4" />

                            <div className="flex items-center gap-3 mb-3">
                                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                                    <Image src={r.avatar} alt={r.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-[15px] leading-tight">{r.name}</p>
                                    <p className="text-white/40 text-[12px]">{r.meta}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1.5 mb-4">
                                <svg className="w-3.5 h-3.5 text-white/30 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-white/35 text-[12px]">{r.ago}</span>
                            </div>

                            <blockquote className="text-white/80 text-[15px] leading-relaxed italic flex-grow mb-5">
                                &ldquo;{r.quote}&rdquo;
                            </blockquote>

                            <div className="flex items-center gap-2 pt-4 border-t border-white/[0.06]">
                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span className="text-white/35 text-[12px]">Verified Google Review</span>
                            </div>
                        </figure>
                    ))}
                </div>
            </section>

            {/* DESKTOP: continuously moving testimonials marquee */}
            <section className="hidden md:block py-20 lg:py-28 bg-[#0A0A0A]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
                        <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">CLIENT STORIES //</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">What clients say</h2>
                    </div>
                    <TestimonialsCarousel testimonials={testimonials} />
                </div>
            </section>

            {/* ─────────────────────────────────────────────
                SECTION: LOCATION — address, hours, map embed
            ───────────────────────────────────────────── */}
            <LocationSection />

            {/* ─────────────────────────────────────────────
                SECTION: FAQ
            ───────────────────────────────────────────── */}
            <FAQSection faqs={sportsMassageFaqs} />

            {/* ─────────────────────────────────────────────
                SECTION: CTA BANNER
            ───────────────────────────────────────────── */}
            {/* MOBILE CTA CARD */}
            <section className="md:hidden bg-white dark:bg-[#0A0A0A] pt-10 pb-28">
                <div className="px-4">
                    <div
                        className="relative rounded-3xl overflow-hidden px-6 pt-7 pb-6"
                        style={{ background: 'linear-gradient(135deg, #2a0d6e 0%, #1a0850 55%, #110638 100%)' }}
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px] opacity-30 pointer-events-none" style={{ background: '#7c3aed' }} />
                        <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-[50px] opacity-20 pointer-events-none" style={{ background: '#1e0a5e' }} />
                        <div className="relative">
                            <h2 className="text-[26px] font-black text-white leading-tight tracking-tight mb-2">
                                Stop Training on a Body{' '}
                                <span className="text-[#A78BFA]">That Needs Maintenance</span>
                            </h2>
                            <p className="text-white/55 text-[13px] leading-relaxed mb-5">
                                Sports massage at R3BOOT is clinical, not cosmetic. Performed by specialists who understand training load, movement mechanics, and what your body actually needs.
                            </p>
                            <div className="flex flex-col gap-3">
                                <a
                                    href="tel:+919702368612"
                                    className="flex items-center justify-center gap-2 bg-white text-[#513394] font-black rounded-full py-3.5 text-[15px] tracking-wide"
                                >
                                    <PhoneIcon className="w-4 h-4" />
                                    Call to Book
                                </a>
                                <a
                                    href="https://wa.me/919702368612"
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    className="flex items-center justify-center gap-2 border border-white/25 text-white font-bold rounded-full py-3.5 text-[15px] tracking-wide"
                                >
                                    <PhoneIcon className="w-4 h-4" />
                                    WhatsApp
                                </a>
                            </div>
                            <p className="text-center text-white/30 text-[10px] tracking-[0.2em] uppercase mt-4">
                                Dadar, Mumbai
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DESKTOP CTA */}
            <section className="hidden md:block py-16 lg:py-20 bg-[#513394] relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.07] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />
                </div>
                <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 max-w-3xl mx-auto leading-tight">
                        Stop Training on a Body That Needs{' '}
                        <span className="text-white/45">Maintenance</span>
                    </h2>
                    <p className="text-lg text-white/65 mb-10 max-w-xl mx-auto leading-relaxed">
                        Sports massage at R3BOOT is clinical, not cosmetic. Performed by specialists who understand training load, movement mechanics, and what your body actually needs.
                    </p>
                    <div className="flex flex-row gap-4 justify-center">
                        <a
                            href="tel:+919702368612"
                            className="inline-flex items-center justify-center gap-2.5 bg-white text-[#513394] font-black px-10 py-5 rounded-full hover:scale-105 transition-all shadow-2xl text-base tracking-wide"
                        >
                            <PhoneIcon className="w-4 h-4" />
                            Call to Book
                        </a>
                        <a
                            href="https://wa.me/919702368612"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2.5 border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full hover:bg-white/10 transition-all text-base tracking-wide"
                        >
                            WhatsApp
                        </a>
                    </div>
                    <p className="text-white/35 mt-8 font-bold tracking-widest text-xs uppercase">Dadar, Mumbai</p>
                </div>
            </section>

            {/* ─────────────────────────────────────────────
                SECTION: OTHER SERVICES
            ───────────────────────────────────────────── */}
            <section className="py-16 sm:py-20 lg:py-28 bg-[#0A0A0A]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase mb-4 block">
                            KEEP EXPLORING //
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                            Other Ways to <span className="text-[#7B5FCA]">Recover</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {otherServices.map((service, idx) => (
                            <Link
                                key={idx}
                                href={`/services/${service.slug}`}
                                className="group bg-white/[0.03] p-4 rounded-[2.5rem] border border-white/[0.08] hover:border-[#A78BFA]/30 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                            >
                                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-[2rem] mb-6">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                </div>
                                <div className="px-2 pb-2 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-white group-hover:text-[#A78BFA] transition-colors mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-white/45 line-clamp-2 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <div className="mt-auto">
                                        <div className="flex items-center justify-between w-full bg-[#513394]/15 group-hover:bg-[#513394] text-[#A78BFA] group-hover:text-white rounded-full p-1 transition-all duration-300">
                                            <span className="text-[13px] font-black pl-5">EXPLORE</span>
                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path d="M9 18l6-6-6-6" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* From Our Blog + Related Guides */}
            <section className="py-16 bg-[#0D0D0D] border-t border-white/[0.06]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl">
                    <h2 className="text-2xl font-black text-white mb-8">From Our Blog</h2>
                    <div className="flex flex-wrap gap-6">
                        <Link href="/blog/sports-massage-before-after-marathon" className="group p-6 bg-white/[0.03] rounded-[2rem] border border-white/[0.08] hover:border-[#A78BFA]/40 transition-all flex-1 min-w-[240px] max-w-md">
                            <p className="text-xs font-black tracking-widest text-[#A78BFA] uppercase mb-2">Sports Massage</p>
                            <h3 className="font-bold text-white group-hover:text-[#A78BFA] transition-colors">Sports Massage Before & After a Marathon</h3>
                            <span className="text-sm text-gray-400 mt-2 inline-block">Read article →</span>
                        </Link>
                        <Link href="/sports-massage-runners-mumbai" className="group p-6 bg-white/[0.03] rounded-[2rem] border border-white/[0.08] hover:border-[#A78BFA]/40 transition-all flex-1 min-w-[240px] max-w-md">
                            <p className="text-xs font-black tracking-widest text-[#A78BFA] uppercase mb-2">Runner's Guide</p>
                            <h3 className="font-bold text-white group-hover:text-[#A78BFA] transition-colors">Sports Massage for Runners in Mumbai</h3>
                            <span className="text-sm text-gray-400 mt-2 inline-block">See specialist page →</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─────────────────────────────────────────────
                STICKY MOBILE CTA
            ───────────────────────────────────────────── */}
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
                <div className="bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/[0.09] px-4 pt-3 pb-5">
                    <div className="flex gap-3">
                        <a
                            href="tel:+919702368612"
                            className="flex-1 flex items-center justify-center gap-2 bg-[#513394] hover:bg-[#603eb0] text-white font-black rounded-xl py-3.5 text-[14px] tracking-wide transition-colors"
                        >
                            <PhoneIcon className="w-4 h-4" />
                            Call
                        </a>
                        <a
                            href="https://wa.me/919702368612"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 border border-white/20 text-white font-bold rounded-xl py-3.5 text-[14px] tracking-wide hover:bg-white/[0.07] transition-colors"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            <ServiceSchema
                serviceName="Sports Massage in Mumbai"
                description="Clinical sports massage in Mumbai by certified specialists. Serving athletes in Dadar, Andheri, Thane & Bandra. Book at R3BOOT Recovery Center."
                serviceUrl="https://r3boot.in/services/sports-massage"
            />
            <FAQSchema faqs={sportsMassageFaqs} />
            <BreadcrumbSchema items={[
                { name: 'Home', url: '/' },
                { name: 'Services', url: '/services' },
                { name: 'Sports Massage', url: '/services/sports-massage' },
            ]} />
        </main>
    )
}
