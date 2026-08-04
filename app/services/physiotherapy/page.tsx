import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { services } from '@/lib/services'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import { physiotherapyFaqs } from '@/lib/faqs/physiotherapy'
import { HeroTrustBadge, serviceTrustBadges } from '@/components/HeroTrustBadge'
import ServiceNavbar from '@/components/ServiceNavbar'
import { HeroSlider } from '@/app/services-demo/contrast-therapy/HeroSlider'
import { TeamSectionDemo } from '@/app/services-demo/contrast-therapy/TeamSectionDemo'
import { TestimonialsCarousel } from '@/app/services-demo/contrast-therapy/TestimonialsCarousel'
import { LocationSection } from '@/app/services-demo/contrast-therapy/LocationSection'
import { PainPointsSection } from './PainPointsSection'
import { ComparisonSection } from './ComparisonSection'
import {
    ClipboardCheck,
    Target,
    Hand,
    TrendingUp,
    Activity,
    Waves,
    Zap,
    Scan,
    Stethoscope,
} from 'lucide-react'

export const metadata: Metadata = {
    title: 'Physiotherapy in Mumbai | R3BOOT Dadar – Clinical Care',
    description:
        'Clinical physiotherapy in Mumbai by certified specialists. Back pain, knee pain, sports injuries, post-surgery rehab. Dadar location, accessible from Andheri, Thane & Bandra.',
    keywords: [
        'physiotherapy clinic in mumbai',
        'physiotherapy dadar',
        'sports physiotherapy mumbai',
        'physiotherapy for back pain mumbai',
        'physiotherapy for knee pain mumbai',
        'physiotherapy near me mumbai',
    ],
    alternates: { canonical: '/services/physiotherapy' },
}

const otherServices = services.filter((s) => s.slug !== 'physiotherapy').slice(0, 4)

const heroSlides = [
    {
        src: '/images/service/Services_image/Physiotherapy_1.webp',
        alt: 'Physiotherapy session at R3BOOT Dadar, Mumbai',
    },
    {
        src: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1771760500/Physiotherepy_Image_jz7ubj.webp',
        alt: 'Manual therapy physiotherapy at R3BOOT Mumbai',
    },
    {
        src: '/images/hero/r3boot-physiotherapy.png',
        alt: 'Clinical physiotherapy care at R3BOOT',
    },
]

const testimonials = [
    {
        name: 'Chandrakant Chande',
        meta: 'Local Guide · 24 reviews',
        ago: '2 months ago',
        avatar: '/images/Customer_Review/Namrata Doshi.png',
        quote: 'Dr. Hiral fixed my back pain after 2 years of trying other clinics. The assessment was thorough and the treatment actually addresses root causes, not just symptoms. Highly recommend.',
    },
    {
        name: 'Dharmesh Thakkar',
        meta: 'Google User · 8 reviews',
        ago: '3 months ago',
        avatar: '/images/Customer_Review/Sonal Malik.png',
        quote: 'My knee pain from running disappeared within 6 sessions. They gave me a clear plan and explained exactly what was wrong. Professional and results-driven.',
    },
    {
        name: 'Namrata Doshi',
        meta: 'Local Guide · 12 reviews',
        ago: '1 month ago',
        avatar: '/images/Customer_Review/Namrata Doshi.png',
        quote: 'After my ACL surgery, their rehab protocol was exactly what I needed. Structured, progressive, and they coordinated with my surgeon. Back to playing cricket in 4 months.',
    },
    {
        name: 'Sonal Malik',
        meta: 'Google User · 6 reviews',
        ago: '4 months ago',
        avatar: '/images/Customer_Review/Sonal Malik.png',
        quote: 'Dry needling sessions combined with exercises changed my shoulder problem completely. Dr. Vaishali is incredibly knowledgeable and caring.',
    },
    {
        name: 'JugalKishore Shah',
        meta: 'Google User · 3 reviews',
        ago: '5 months ago',
        avatar: '/images/Customer_Review/JugalKishore Shah.png',
        quote: 'Best physio clinic in Dadar. They treat the problem, not just the pain. Long-term results, not quick fixes.',
    },
    {
        name: 'Arjun',
        meta: 'Google User · 5 reviews',
        ago: '1 month ago',
        avatar: '/images/Customer_Review/Arjun.png',
        quote: 'Fantastic experience. The team is professional, the facility is clean, and the results speak for themselves. Worth every rupee.',
    },
]

const navLinks = [
    { label: 'Signs', href: '#signs', isScroll: true },
    { label: 'Methodology', href: '#methodology', isScroll: true },
    { label: 'Your Session', href: '#session', isScroll: true },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
]

function PhoneIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
        </svg>
    )
}

export default function PhysiotherapyPage() {
    return (
        <main className="physio-page min-h-screen bg-white dark:bg-[#0A0A0A]">

            <ServiceNavbar navLinks={navLinks} />

            {/* ─── DESKTOP HERO ─── */}
            <section className="hidden md:flex relative flex-col bg-black overflow-hidden" style={{ minHeight: '92vh' }}>
                <div className="absolute inset-0">
                    <Image
                        src="/images/service/Services_image/Physiotherapy_1.webp"
                        alt="Physiotherapy Mumbai, Clinical Care at R3BOOT"
                        fill
                        className="object-cover"
                        style={{ objectPosition: '40% center' }}
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
                        Clinically Structured&nbsp;&nbsp;•&nbsp;&nbsp;Evidence-Based&nbsp;&nbsp;•&nbsp;&nbsp;Results-Focused
                    </p>

                    <h1 className="text-5xl lg:text-6xl xl:text-[4.25rem] font-black text-white tracking-tight leading-[1.04] mb-4">
                        Physiotherapy<br />
                        in <span className="text-[#A78BFA]">Mumbai</span>
                    </h1>

                    <p className="text-[16px] text-white/55 max-w-md leading-relaxed mb-7">
                        Clinical care by certified specialists. Root cause treatment, not symptom management. Structured progression to lasting results.
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
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.855L0 24l6.335-1.502A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.38l-.36-.214-3.732.885.916-3.629-.235-.373A9.818 9.818 0 1112 21.818z" />
                            </svg>
                            WhatsApp Us
                        </a>
                    </div>
                </div>

                <HeroTrustBadge items={serviceTrustBadges.physiotherapy} />
            </section>

            {/* ─── MOBILE HERO ─── */}
            <section className="md:hidden pt-20 pb-0 bg-white dark:bg-[#0A0A0A]">
                <div className="container mx-auto px-5">
                    <HeroSlider slides={heroSlides} />

                    <div className="inline-flex items-center gap-2 bg-[#513394]/10 dark:bg-[#513394]/20 rounded-full px-4 py-2 mt-5 mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]" />
                        <span className="text-[#513394] dark:text-[#A78BFA] text-[11px] font-black tracking-[0.3em] uppercase">
                            Clinical // Rehabilitation
                        </span>
                    </div>

                    <h1 className="text-[2rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-3">
                        Physiotherapy in{' '}
                        <span className="text-[#513394] dark:text-[#A78BFA]">Mumbai</span>
                    </h1>

                    <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                        Clinical care by certified specialists. Root cause treatment, not symptom management — at R3BOOT Dadar.
                    </p>

                    <HeroTrustBadge items={serviceTrustBadges.physiotherapy} className="px-0" />
                </div>
            </section>

            {/* ─── SIGNS ─── */}
            <PainPointsSection />

            {/* ─── WHAT TO EXPECT ─── */}
            <section id="session" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
                        <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                            YOUR SESSION //
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
                            What to expect at{' '}
                            <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                            A full session takes 45–60 minutes including assessment, hands-on treatment, and a clear next-step plan.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 max-w-7xl mx-auto">
                        {[
                            {
                                icon: ClipboardCheck,
                                number: '01',
                                title: 'Initial Assessment',
                                body: 'History, movement patterns, strength, and flexibility reviewed before any treatment is applied. You leave knowing what is driving the problem.',
                            },
                            {
                                icon: Target,
                                number: '02',
                                title: 'Treatment Plan',
                                body: 'Clear goals, expected timelines, and session frequency. Built around your diagnosis — not a one-size-fits-all protocol.',
                            },
                            {
                                icon: Hand,
                                number: '03',
                                title: 'Treatment Sessions',
                                body: 'Hands-on care plus progressive exercise. Methods adjust as you respond — sessions evolve with your condition.',
                            },
                            {
                                icon: TrendingUp,
                                number: '04',
                                title: 'Progress & Independence',
                                body: 'Re-assessment keeps the plan matched to your capacity. The goal is lasting function — not ongoing dependency on sessions.',
                            },
                        ].map((step, i) => {
                            const Icon = step.icon
                            return (
                                <div
                                    key={i}
                                    className="relative flex flex-col aspect-square p-6 lg:p-7 rounded-2xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08] group hover:border-[#513394]/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute -top-4 -right-2 text-[5.5rem] lg:text-[6rem] font-black text-gray-100 dark:text-white/[0.035] leading-none select-none pointer-events-none">
                                        {step.number}
                                    </div>
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="w-11 h-11 rounded-xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] mb-5 group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
                                            <Icon className="w-5 h-5" strokeWidth={1.75} />
                                        </div>
                                        <h3 className="font-black text-gray-900 dark:text-white text-base lg:text-[17px] mb-3 leading-snug">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.body}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ─── METHODOLOGY ─── */}
            <section id="methodology" className="py-16 sm:py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <span className="w-8 h-px bg-[#513394]/40 dark:bg-[#A78BFA]/40" />
                            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase">
                                METHODOLOGY
                            </span>
                            <span className="w-8 h-px bg-[#513394]/40 dark:bg-[#A78BFA]/40" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                            Treatment Methods at{' '}
                            <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                            Techniques are selected from your assessment findings — not a default protocol for every patient.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start max-w-7xl mx-auto">
                        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl lg:sticky lg:top-28">
                            <Image
                                src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1785857717/Physio_Studio_V1_zw15cj.png"
                                alt="Manual Therapy Physiotherapy – R3BOOT Dadar Mumbai"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/25" />

                            <div className="absolute top-5 left-5 sm:top-6 sm:left-6 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-2xl pl-3 pr-4 py-2.5 shadow-lg">
                                <div className="w-9 h-9 rounded-xl bg-[#513394]/10 flex items-center justify-center text-[#513394] shrink-0">
                                    <Stethoscope className="w-4 h-4" strokeWidth={2} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black tracking-[0.2em] text-[#513394] uppercase leading-none mb-1">
                                        Clinical Care
                                    </p>
                                    <p className="text-gray-900 font-bold text-[13px] leading-none">Physio Studio</p>
                                </div>
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                                <p className="text-white text-lg sm:text-xl font-black tracking-tight leading-tight mb-3">
                                    Dr. Hiral Parikh · Lead Physiotherapist
                                </p>
                                <div className="flex flex-col gap-2">
                                    {['15+ Years Clinical Experience', 'Root-Cause Assessment First'].map((point, i) => (
                                        <div key={i} className="flex items-center gap-2.5">
                                            <div className="w-5 h-5 rounded-full bg-[#513394]/30 border border-[#A78BFA]/50 flex items-center justify-center shrink-0">
                                                <svg className="w-3 h-3 text-[#C4B5FD]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-white font-bold text-[15px] sm:text-base">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col">
                                {[
                                    {
                                        icon: Hand,
                                        title: 'Manual Therapy',
                                        body: 'Joint mobilisation, manipulation, and soft tissue work for back pain, neck stiffness, joint restrictions, and post-surgical recovery — applied within structured protocols.',
                                        light: '#513394',
                                        dark: '#A78BFA',
                                        bgLight: 'rgba(81,51,148,0.08)',
                                        bgDark: 'rgba(167,139,250,0.14)',
                                        borderLight: 'rgba(81,51,148,0.35)',
                                        borderDark: 'rgba(167,139,250,0.45)',
                                    },
                                    {
                                        icon: Zap,
                                        title: 'Dry Needling',
                                        body: 'Trigger-point needling to release tension, reduce referred pain, and restore neuromuscular function — used as part of a broader plan, not alone.',
                                        light: '#B45309',
                                        dark: '#FBBF24',
                                        bgLight: 'rgba(180,83,9,0.08)',
                                        bgDark: 'rgba(251,191,36,0.14)',
                                        borderLight: 'rgba(180,83,9,0.35)',
                                        borderDark: 'rgba(251,191,36,0.45)',
                                    },
                                    {
                                        icon: Waves,
                                        title: 'Aquatic Rehabilitation',
                                        body: 'Water-based rehab for post-surgical patients and those who cannot tolerate land loading — progressive functional retraining with lower joint stress.',
                                        light: '#0D9488',
                                        dark: '#2DD4BF',
                                        bgLight: 'rgba(13,148,136,0.08)',
                                        bgDark: 'rgba(45,212,191,0.14)',
                                        borderLight: 'rgba(13,148,136,0.35)',
                                        borderDark: 'rgba(45,212,191,0.45)',
                                    },
                                    {
                                        icon: Activity,
                                        title: 'Exercise Therapy & Progressive Rehab',
                                        body: 'Structured programs built around your diagnosis and goals. Monitored and adjusted across sessions — not generic home exercise sheets.',
                                        light: '#0369A1',
                                        dark: '#38BDF8',
                                        bgLight: 'rgba(3,105,161,0.08)',
                                        bgDark: 'rgba(56,189,248,0.14)',
                                        borderLight: 'rgba(3,105,161,0.35)',
                                        borderDark: 'rgba(56,189,248,0.45)',
                                    },
                                    {
                                        icon: Scan,
                                        title: 'Postural & Movement Assessment',
                                        body: 'Analysis of movement patterns, load distribution, and compensations. Understanding why a problem exists is how we resolve it structurally.',
                                        light: '#7C3AED',
                                        dark: '#C4B5FD',
                                        bgLight: 'rgba(124,58,237,0.08)',
                                        bgDark: 'rgba(196,181,253,0.14)',
                                        borderLight: 'rgba(124,58,237,0.35)',
                                        borderDark: 'rgba(196,181,253,0.45)',
                                    },
                                ].map((phase, idx, arr) => {
                                    const Icon = phase.icon
                                    const isLast = idx === arr.length - 1
                                    return (
                                        <div
                                            key={idx}
                                            className="flex gap-4 sm:gap-6"
                                            style={
                                                {
                                                    '--pc': phase.light,
                                                    '--pcd': phase.dark,
                                                    '--pbg': phase.bgLight,
                                                    '--pbgd': phase.bgDark,
                                                    '--pbd': phase.borderLight,
                                                    '--pbdd': phase.borderDark,
                                                } as React.CSSProperties
                                            }
                                        >
                                            <div className="flex flex-col items-center shrink-0 w-12 sm:w-16">
                                                <span className="text-[10px] font-black tracking-widest rounded-full px-2 sm:px-2.5 py-1 leading-none mb-2 sm:mb-2.5 bg-[var(--pbg)] dark:bg-[var(--pbgd)] text-[var(--pc)] dark:text-[var(--pcd)]">
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-[1.5px] flex items-center justify-center shrink-0 border-[var(--pbd)] dark:border-[var(--pbdd)] bg-[var(--pbg)] dark:bg-[var(--pbgd)]">
                                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--pc)] dark:text-[var(--pcd)]" strokeWidth={1.75} />
                                                </div>
                                                {!isLast && (
                                                    <div className="w-[1.5px] flex-1 min-h-[20px] my-1 [background:repeating-linear-gradient(to_bottom,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_3px,transparent_3px,transparent_8px)] dark:[background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.18)_0px,rgba(255,255,255,0.18)_3px,transparent_3px,transparent_8px)]" />
                                                )}
                                            </div>

                                            <div className={`flex-1 min-w-0 ${isLast ? 'pb-0' : 'pb-5 sm:pb-6'}`}>
                                                <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.06] hover:border-[var(--pbd)] dark:hover:border-[var(--pbdd)] transition-all duration-300">
                                                    <h3 className="text-[15px] sm:text-base font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">
                                                        {phase.title}
                                                    </h3>
                                                    <p className="text-gray-500 dark:text-gray-400 text-[13px] sm:text-sm leading-relaxed">
                                                        {phase.body}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── COMPARISON ─── */}
            <ComparisonSection />

            {/* ─── WHO IS IT FOR ─── */}
            <section className="py-12 sm:py-24 lg:py-32">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-16">
                        <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                            PATIENT-SPECIFIC //
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
                            Built for Your <span className="text-[#513394] dark:text-[#8B5CF6]">Sport & Lifestyle</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                        {[
                            {
                                label: 'Runners',
                                tag: 'RUNNING //',
                                description:
                                    'Hip flexor tightness, patellofemoral pain, IT band syndrome, Achilles tendinopathy, and plantar fasciitis from desk work plus evening training.',
                                image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
                                points: ['IT band syndrome', 'Achilles tendinopathy', 'Plantar fasciitis'],
                            },
                            {
                                label: 'Gym Athletes',
                                tag: 'GYM //',
                                description:
                                    'Shoulder impingement, lower back pain from heavy loading, knee pain from volume, and hip mobility restrictions.',
                                image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
                                points: ['Shoulder impingement', 'Lower back pain', 'Knee pain'],
                            },
                            {
                                label: 'Cricketers & Field Sports',
                                tag: 'SPORT //',
                                description:
                                    'Rotator cuff injuries, lumbar asymmetry from bowling, elbow overuse, and hamstring strain risk — sport-specific rehab.',
                                image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
                                points: ['Rotator cuff', 'Lumbar asymmetry', 'Hamstring risk'],
                            },
                            {
                                label: 'Post-Surgery & Desk Pros',
                                tag: 'REHAB //',
                                description:
                                    'ACL, joint replacement, and spinal recovery — plus thoracic stiffness and neck pain from prolonged sitting.',
                                image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
                                points: ['ACL rehab', 'Posture pain', 'Joint replacement'],
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="group relative rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden aspect-square sm:aspect-[16/10] shadow-xl hover:shadow-2xl transition-all duration-500"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.label}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 sm:from-black/90 sm:via-black/40" />
                                <div className="absolute inset-0 bg-[#513394]/0 group-hover:bg-[#513394]/30 transition-all duration-500" />
                                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8 md:p-10">
                                    <span className="hidden sm:block text-[10px] font-black tracking-[0.3em] text-white/50 uppercase mb-2">
                                        {item.tag}
                                    </span>
                                    <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-1.5 sm:mb-3 tracking-tight leading-tight">
                                        {item.label}
                                    </h3>
                                    <p className="text-white/70 text-[13px] sm:text-sm leading-relaxed mb-3 sm:mb-5 max-w-lg line-clamp-2 sm:line-clamp-none block sm:hidden sm:group-hover:block transition-all">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {item.points.map((pt, i) => (
                                            <span
                                                key={i}
                                                className="bg-white/15 backdrop-blur-sm text-white text-[11px] sm:text-xs font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/20"
                                            >
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

            {/* ─── TEAM ─── */}
            <TeamSectionDemo />

            {/* MOBILE reviews */}
            <section className="md:hidden py-10 bg-[#0A0A0A]">
                <div className="px-5 mb-6">
                    <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase block mb-2">
                        Patient Stories
                    </span>
                    <h2 className="text-[26px] font-extrabold text-white leading-tight">What clients say</h2>
                </div>
                <div className="flex gap-4 overflow-x-auto px-5 pb-2 snap-x snap-mandatory scrollbar-hide">
                    {testimonials.map((r, i) => (
                        <figure
                            key={i}
                            className="flex-shrink-0 w-[85vw] snap-start bg-[#161616] border border-white/[0.07] rounded-3xl p-5 flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2.5">
                                    <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 48 48">
                                        <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                                        <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.1 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.6 7.3 6.3 14.7z" />
                                        <path fill="#FBBC05" d="M24 46c5.6 0 10.5-1.9 14.4-5l-6.7-5.5C29.6 37 26.9 38 24 38c-5.9 0-10.9-4-12.7-9.5l-7 5.4C7.5 41.8 15.2 46 24 46z" />
                                        <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.8 2.4-2.3 4.4-4.3 5.8l6.7 5.5C42.1 36.4 45 30.7 45 24c0-1.3-.2-2.7-.5-4z" />
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

            {/* DESKTOP reviews */}
            <section className="hidden md:block py-20 lg:py-28 bg-[#0A0A0A]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
                        <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                            PATIENT STORIES //
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">What clients say</h2>
                    </div>
                    <TestimonialsCarousel testimonials={testimonials} />
                </div>
            </section>

            <LocationSection />

            <FAQSection faqs={physiotherapyFaqs} />

            {/* ─── CTA MOBILE ─── */}
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
                                Move better.{' '}
                                <span className="text-[#A78BFA]">Recover properly.</span>
                            </h2>
                            <p className="text-white/55 text-[13px] leading-relaxed mb-5">
                                If pain, injury, or a recurring niggle has not resolved with rest alone, structured clinical physiotherapy is the next step.
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

            {/* ─── CTA DESKTOP ─── */}
            <section className="hidden md:block py-16 lg:py-20 bg-[#513394] relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.07] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />
                </div>
                <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 max-w-3xl mx-auto leading-tight">
                        Move Better.{' '}
                        <span className="text-white/45">Recover Properly.</span>
                    </h2>
                    <p className="text-lg text-white/65 mb-10 max-w-xl mx-auto leading-relaxed">
                        Structured clinical physiotherapy by specialists who treat the root cause — not just the flare. Your first session starts with an assessment.
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

            {/* ─── OTHER SERVICES ─── */}
            <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                            KEEP EXPLORING //
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
                            Other Ways to <span className="text-[#513394] dark:text-[#8B5CF6]">Recover</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {otherServices.map((service, idx) => (
                            <Link
                                key={idx}
                                href={`/services/${service.slug}`}
                                className="group bg-white dark:bg-white/5 p-4 rounded-[2.5rem] shadow-sm hover:shadow-xl border border-transparent dark:border-white/5 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                            >
                                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-[2rem] mb-6 shadow-sm">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                </div>
                                <div className="px-2 pb-2 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <div className="mt-auto">
                                        <div className="flex items-center justify-between w-full bg-[#513394]/10 group-hover:bg-[#513394] text-[#513394] group-hover:text-white rounded-full p-1 transition-all duration-300">
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

            {/* ─── LOCAL GUIDE + BLOG ─── */}
            <section className="py-16 bg-white dark:bg-[#0A0A0A]">
                <div className="container mx-auto px-6 lg:px-8 max-w-4xl space-y-6">
                    <Link
                        href="/physiotherapy-mumbai"
                        className="group flex items-center justify-between p-6 bg-gray-50 dark:bg-white/5 rounded-[2rem] border border-gray-100 dark:border-white/10 hover:border-[#513394]/40 transition-all"
                    >
                        <div>
                            <p className="text-xs font-black tracking-widest text-[#513394] uppercase mb-1">Mumbai Guide</p>
                            <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-[#513394] transition-colors">
                                Physiotherapy in Mumbai — What to Expect & How to Choose
                            </h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 inline-block">Full local guide →</span>
                        </div>
                        <svg className="w-6 h-6 text-[#513394] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </Link>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Link
                            href="/blog/posture-workout-better-alignment"
                            className="group p-6 bg-gray-50 dark:bg-white/5 rounded-[2rem] border border-gray-100 dark:border-white/10 hover:border-[#513394]/40 transition-all"
                        >
                            <p className="text-xs font-black tracking-widest text-[#513394] uppercase mb-2">Physiotherapy</p>
                            <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-[#513394] transition-colors">
                                Posture Workout for Better Alignment
                            </h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 inline-block">Read article →</span>
                        </Link>
                        <Link
                            href="/blog/cat-cow-stretch-back-pain-relief"
                            className="group p-6 bg-gray-50 dark:bg-white/5 rounded-[2rem] border border-gray-100 dark:border-white/10 hover:border-[#513394]/40 transition-all"
                        >
                            <p className="text-xs font-black tracking-widest text-[#513394] uppercase mb-2">Back Pain</p>
                            <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-[#513394] transition-colors">
                                Cat-Cow Stretch for Back Pain Relief
                            </h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 inline-block">Read article →</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sticky mobile CTA */}
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
                serviceName="Physiotherapy in Mumbai"
                description="Clinical physiotherapy in Mumbai by certified specialists. Back pain, knee pain, sports injuries, post-surgery rehab. Dadar location, accessible from Andheri, Thane & Bandra."
                serviceUrl="https://r3boot.in/services/physiotherapy"
            />
            <FAQSchema faqs={physiotherapyFaqs} />
        </main>
    )
}
