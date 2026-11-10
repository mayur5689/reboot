import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import {
    ClipboardCheck,
    Scan,
    Hand,
    Zap,
    Activity,
    Waves,
    Armchair,
    Target,
    Stethoscope,
    Dumbbell,
    TrendingUp,
    AlertTriangle,
    Pill,
    MapPin,
} from 'lucide-react'
import { FAQSection } from '@/components/faq-section'
import ConditionPageSchema from '@/components/schema/ConditionPageSchema'
import { PHYSIO_PRICE_LABEL } from '@/lib/physio/pricing'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { TeamSectionDemo } from '@/app/services-demo/contrast-therapy/TeamSectionDemo'
import { PHYSIO_CONDITIONS } from '@/components/physio/PhysioConditionGrid'
import { CallbackForm } from '@/components/physio/CallbackForm'
import { HeroReviewProof } from '@/components/physio/HeroReviewProof'
import { physioTestimonials } from '@/lib/physio/testimonials'
import { backPainFaqs } from '@/lib/faqs/back-pain-physiotherapy'
import { TestimonialsCarousel } from '../TestimonialsCarousel'
import { LocationSection } from '../LocationSection'
import { PainPointsSection, type PainPoint } from '../PainPointsSection'
import { ComparisonSection, type ComparisonRow } from '../ComparisonSection'

const PAGE_PATH = '/services/physiotherapy/back-pain'
const PHONE = '+919702368612'
const WA_HREF = `https://wa.me/919702368612?text=${encodeURIComponent(
    'Hi R3BOOT, I would like to book a physiotherapy assessment for back pain.',
)}`
// Title: primary keyword first ("physiotherapy for back pain", ~1,000/mo cluster), sciatica as the
// second-biggest intent on this page, Mumbai for local. 56 characters, fits without truncation.
const TITLE = 'Physiotherapy for Back Pain & Sciatica in Mumbai | R3BOOT'
// Description: the three main presentations, who assesses, what happens, price, both clinics. ~155 chars.
const DESCRIPTION =
    `Lower back pain, sciatica or a slipped disc? An experienced physiotherapist finds the cause and treats it the same session. ${PHYSIO_PRICE_LABEL}. Dadar & Lower Parel.`

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: PAGE_PATH },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: `https://www.r3boot.in${PAGE_PATH}`,
        images: ['/images/service/physiotherapy/back-pain-hero.webp'],
    },
}

const painPoints: PainPoint[] = [
    {
        title: 'Mechanical and posture-related pain',
        description:
            'The most common type. Long sitting and low activity overload the lower back muscles and joints. No structural damage, but very real pain that improves with load and habit changes.',
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1794348409/01_ache-after-desk-work_ectai2.webp',
    },
    {
        title: 'Disc bulge or herniation',
        description:
            'A disc irritates nearby tissue or a nerve root. Often worse sitting, bending or coughing. Directional exercises and graded loading settle most cases.',
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1794348410/03_disc-pain-worse-sitting-or-bending_fenmhh.webp',
    },
    {
        title: 'Sciatica and nerve irritation',
        description:
            'Burning, tingling or numbness into the leg. The nerve can be irritated at the spine or along its path. Nerve mobilisation and offloading positions calm it down.',
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1794348410/04_sciatica-pain-down-the-leg_jzbwrg.webp',
    },
    {
        title: 'Facet joint and age-related stiffness',
        description:
            'Stiff, local pain, worse leaning back or after rest. Includes spondylosis. Scans cannot be reversed, but pain and movement improve a lot with mobilisation and strength work.',
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1794348413/05_morning-stiffness_u05v9s.webp',
    },
    {
        title: 'Upper back and rib stiffness',
        description:
            'Pain between the shoulder blades from screen posture, driving or rotation sports. Usually linked to the neck and shoulder blades, so we assess all three.',
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1794348414/06_knot-between-the-shoulder-blades_stefk1.webp',
    },
    {
        title: 'Muscle strain and spasm',
        description:
            'Sudden pain from lifting, twisting or a training jump in volume. Very painful early, usually recovers well with hands-on care and early graded movement.',
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1794348409/02_back-caught-when-bending_erhkya.webp',
    },
]

const redFlags = [
    'Loss of bladder or bowel control, or new numbness around the groin or inner thighs',
    'Leg weakness that is getting worse, or a foot that starts to drag',
    'Back pain after a fall, accident or major impact',
    'Fever, unexplained weight loss or a history of cancer alongside the pain',
    'Constant pain at night that no position eases',
]

const visitSteps = [
    {
        icon: ClipboardCheck,
        number: '01',
        title: 'History and goals',
        body: 'When it started, what makes it worse or better, how it affects work, sleep and training, and what you need to get back to. Bring any MRI or X-ray reports.',
    },
    {
        icon: Scan,
        number: '02',
        title: 'Movement and nerve testing',
        body: 'Spine and hip movement, nerve tension tests, strength and reflexes. This is how we tell disc, joint, nerve and muscle pain apart, and screen for anything that needs a doctor.',
    },
    {
        icon: Hand,
        number: '03',
        title: 'First treatment',
        body: 'Hands-on work and specific exercises chosen from what we found, in the same session. The aim is to leave moving easier than you came in.',
    },
    {
        icon: Target,
        number: '04',
        title: 'Plan and timeline',
        body: 'How many sessions to expect, what to do at home, what to change at your desk, and which movements to avoid for now. Explained in plain language.',
    },
]

const methods = [
    {
        icon: Hand,
        title: 'Manual therapy and joint mobilisation',
        short: 'Hands-on work on stiff joints and tight muscles.',
        body: 'Hands-on work on stiff spinal segments, ribs and the muscles around them to reduce pain and restore movement quickly.',
        light: '#513394',
        dark: '#A78BFA',
    },
    {
        icon: Zap,
        title: 'Dry needling',
        short: 'Releases muscle-driven back and buttock pain.',
        body: 'Trigger-point needling for muscle-driven back and buttock pain, by a certified physiotherapist. Used as part of the plan, never on its own.',
        light: '#B45309',
        dark: '#FBBF24',
    },
    {
        icon: Activity,
        title: 'Nerve mobilisation for sciatica',
        short: 'Helps an irritated sciatic nerve move freely again.',
        body: 'Gentle movements that help an irritated nerve glide freely again, combined with positions that take pressure off it.',
        light: '#0369A1',
        dark: '#38BDF8',
    },
    {
        icon: TrendingUp,
        title: 'Progressive strength and loading',
        short: 'Core, hip and back strength, built step by step.',
        body: 'Core, hip and back strength built step by step, from pain-free basics to the lifting, running or sport you want to return to.',
        light: '#7C3AED',
        dark: '#C4B5FD',
    },
    {
        icon: Waves,
        title: 'Aquatic rehabilitation',
        short: 'Lower-load walking when land exercise still hurts.',
        body: 'When land exercise is still too painful, the aqua treadmill lets you walk and load with less stress on the spine.',
        light: '#0D9488',
        dark: '#2DD4BF',
    },
    {
        icon: Armchair,
        title: 'Desk, commute and sleep changes',
        short: 'Small fixes to how you sit, travel and sleep.',
        body: 'Small, specific changes to how you sit, travel and sleep, so the daily load stops undoing the work done in session.',
        light: '#BE185D',
        dark: '#F9A8D4',
    },
]

const timeline = [
    {
        label: 'Recent pain',
        range: 'Under 6 weeks',
        sessions: 'Often 4 to 8 sessions',
        body: 'Spasm, a strain or a new flare. Focus on calming pain, restoring movement and getting you active again quickly.',
    },
    {
        label: 'Long-standing pain',
        range: '3 months or more',
        sessions: 'Usually 8 to 12 sessions',
        body: 'Recurring or constant pain. More gradual loading, strength work and habit changes so it stops coming back.',
    },
    {
        label: 'Disc and nerve pain',
        range: 'Sciatica, disc bulge',
        sessions: 'Reviewed every session',
        body: 'Progress depends on how the nerve responds. We track your symptoms closely and refer you to a specialist if needed.',
    },
]

const comparisonRows: ComparisonRow[] = [
    { icon: Pill, label: 'First step', standard: 'Painkillers and rest', r3boot: 'Assessment to find the source' },
    { icon: Stethoscope, label: 'Diagnosis', standard: '"Back pain" or "disc problem"', r3boot: 'Disc, joint, nerve or muscle, explained to you' },
    { icon: Hand, label: 'Treatment', standard: 'Heat, TENS and ultrasound', r3boot: 'Manual therapy, dry needling, guided loading' },
    { icon: Dumbbell, label: 'Exercise', standard: 'A printed sheet of stretches', r3boot: 'Coached and progressed as you improve' },
    { icon: Armchair, label: 'Daily life', standard: 'Not addressed', r3boot: 'Desk, commute and sleep changes' },
    { icon: TrendingUp, label: 'Goal', standard: 'Calm this flare', r3boot: 'Prevent the next one' },
]

const relatedReads = [
    { href: '/blog/what-causes-back-pain-physio-guide', tag: 'Causes', title: 'What causes back pain? A physiotherapist explains' },
    { href: '/blog/sciatica-physiotherapy-nerve-vs-hamstring', tag: 'Sciatica', title: 'Sciatica or a tight hamstring? How to tell' },
    { href: '/blog/slipped-disc-solutions-symptoms-diagnosis-care', tag: 'Disc', title: 'Slipped disc: symptoms, diagnosis and care' },
    { href: '/blog/back-pain-from-sitting-all-day', tag: 'Desk work', title: 'Back pain from sitting all day' },
]

// Back-pain review first, then the rest of the physio reviews.
const testimonials = [
    ...physioTestimonials.filter((t) => /back/i.test(t.quote)),
    ...physioTestimonials.filter((t) => !/back/i.test(t.quote)),
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

function SectionEyebrow({ children }: { children: React.ReactNode }) {
    return (
        <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
            {children}
        </span>
    )
}

export default function BackPainPhysiotherapyPage() {
    return (
        <main className="physio-page min-h-screen bg-white dark:bg-[#0A0A0A]">

            {/* ─── DESKTOP HERO ─── */}
            <section className="hidden md:flex flex-col bg-black overflow-hidden pt-20 lg:pt-24" style={{ minHeight: '88vh' }}>
                <div className="relative flex flex-1 flex-col">
                    {/* Portrait photo sits on the right; text stays on solid black at left. */}
                    <div className="absolute inset-y-0 right-0 w-[58%] xl:w-[54%]">
                        <Image
                            src="/images/service/physiotherapy/back-pain-hero.webp"
                            alt="Physiotherapist treating a patient's back pain at R3BOOT Dadar, Mumbai"
                            fill
                            className="object-cover"
                            style={{ objectPosition: 'center 85%' }}
                            sizes="(min-width: 1280px) 54vw, 58vw"
                            priority
                        />
                    </div>
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                'linear-gradient(to right, #000 0%, #000 47%, rgba(0,0,0,0.6) 54%, rgba(0,0,0,0.2) 64%, transparent 74%)',
                        }}
                    />
                    <div
                        className="absolute inset-x-0 bottom-0 h-[34%] pointer-events-none"
                        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 50%, transparent 100%)' }}
                    />

                    <div className="relative z-10 flex flex-1 flex-col justify-center px-12 lg:px-16 xl:px-20 max-w-[52%]">
                        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] font-bold text-white/50">
                            <Link href="/services/physiotherapy" className="hover:text-white transition-colors">
                                Physiotherapy
                            </Link>
                            <span className="mx-2">/</span>
                            <span className="text-white/80">Back Pain</span>
                        </nav>
                        <p className="text-[#A78BFA] text-[11px] font-black tracking-[0.25em] uppercase mb-4">
                            Lower back&nbsp;&nbsp;•&nbsp;&nbsp;Upper back&nbsp;&nbsp;•&nbsp;&nbsp;Sciatica&nbsp;&nbsp;•&nbsp;&nbsp;Disc
                        </p>
                        <h1 className="text-5xl lg:text-6xl xl:text-[4.25rem] font-black text-white tracking-tight leading-[1.04] mb-5">
                            Physiotherapy for <span className="text-[#A78BFA]">Back Pain</span> in Mumbai
                        </h1>
                        <p className="text-[17px] text-white/65 max-w-md leading-relaxed mb-6">
                            Lower back pain from the desk, sciatica down your leg, or a back that locks when you bend?
                        </p>
                        <HeroReviewProof onDark className="mb-7" />
                        <CallbackForm
                            source="back-pain-hero"
                            concerns={['Lower back pain', 'Upper back pain', 'Sciatica or leg pain', 'Disc bulge', 'After spine surgery']}
                            whatsappHref={WA_HREF}
                        />
                    </div>
                </div>
            </section>

            {/* ─── MOBILE HERO ─── */}
            <section className="md:hidden pt-20 pb-0 bg-white dark:bg-[#0A0A0A]">
                <div className="container mx-auto px-5">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/service/physiotherapy/back-pain-hero.webp"
                            alt="Physiotherapist treating a patient's back pain at R3BOOT Dadar, Mumbai"
                            fill
                            className="object-cover"
                            style={{ objectPosition: 'center 66%' }}
                            sizes="(max-width: 768px) 100vw, 0px"
                            priority
                        />
                    </div>
                    <nav aria-label="Breadcrumb" className="mt-6 mb-3 text-[12px] font-bold text-gray-400 dark:text-white/40">
                        <Link href="/services/physiotherapy" className="hover:text-[#513394] dark:hover:text-[#A78BFA]">
                            Physiotherapy
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-600 dark:text-white/70">Back Pain</span>
                    </nav>
                    <h2 className="text-[2rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-4">
                        Physiotherapy for <span className="text-[#513394] dark:text-[#A78BFA]">Back Pain</span> in Mumbai
                    </h2>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-7">
                        Lower back pain from the desk, sciatica down your leg, or a back that locks when you bend?
                    </p>
                    {/* Form sits on a dark card so its white-on-dark fields stay readable in light mode. */}
                    <div className="rounded-2xl bg-[#120C22] [&>form]:max-w-none [&>form]:border-0 [&>div]:max-w-none">
                        <CallbackForm
                            source="back-pain-hero-mobile"
                            concernLabel="Type of pain"
                            concerns={['Lower back pain', 'Upper back pain', 'Sciatica or leg pain', 'Disc bulge', 'After spine surgery']}
                            whatsappHref={WA_HREF}
                        />
                    </div>
                    <HeroReviewProof className="mt-7 mb-2" />
                </div>
            </section>

            {/* ─── WHAT IS DRIVING IT (accordion) ─── */}
            <PainPointsSection
                points={painPoints}
                eyebrow="WHAT IS DRIVING IT //"
                heading="Can physiotherapy fix back pain"
                intro="For most people, yes, and most cases do not need surgery. But back pain is a symptom, not a diagnosis. A disc, a joint, a nerve and a strained muscle each need a different plan, so every first session starts with an assessment."
            />

            {/* ─── RED FLAGS ─── */}
            <section id="red-flags" className="pt-2 sm:pt-4 pb-12 sm:pb-20 bg-[#F8F9FA] dark:bg-[#080808]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl">
                    {/* Mobile: collapsed, emergency line always visible */}
                    <details className="md:hidden group rounded-2xl border border-amber-200 dark:border-amber-400/25 bg-amber-50 dark:bg-amber-400/[0.06]">
                        <summary className="flex items-start gap-3 p-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                            <AlertTriangle className="w-5 h-5 text-amber-700 dark:text-amber-300 shrink-0 mt-0.5" strokeWidth={2} />
                            <span className="min-w-0 flex-1">
                                <span className="block font-black text-gray-900 dark:text-white text-[15px] leading-snug">
                                    See a doctor first if you have warning signs
                                </span>
                                <span className="block text-[14px] text-gray-600 dark:text-white/60 leading-snug mt-1">
                                    Loss of bladder or bowel control needs emergency care the same day.
                                </span>
                            </span>
                            <span className="text-[12px] font-bold text-amber-700 dark:text-amber-300 shrink-0 mt-0.5 group-open:hidden">See all</span>
                            <span className="text-[12px] font-bold text-amber-700 dark:text-amber-300 shrink-0 mt-0.5 hidden group-open:inline">Hide</span>
                        </summary>
                        <ul className="px-4 pb-4 pl-12 space-y-2">
                            {redFlags.map((f) => (
                                <li key={f} className="flex gap-2.5 text-[14px] text-gray-700 dark:text-white/75 leading-relaxed">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" aria-hidden />
                                    {f}
                                </li>
                            ))}
                            <li className="text-[14px] text-gray-500 dark:text-white/50 leading-relaxed pt-1">
                                We screen for all of these in your first assessment and refer you when needed.
                            </li>
                        </ul>
                    </details>

                    {/* Desktop: always open */}
                    <div className="hidden md:block rounded-2xl border border-amber-200 dark:border-amber-400/25 bg-amber-50 dark:bg-amber-400/[0.06] p-5 sm:p-8">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-400/15 flex items-center justify-center text-amber-700 dark:text-amber-300 shrink-0">
                                <AlertTriangle className="w-5 h-5" strokeWidth={2} />
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-black text-gray-900 dark:text-white text-lg mb-2">See a doctor first if you have any of these</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-4">
                                    {redFlags.map((f) => (
                                        <li key={f} className="flex gap-2.5 text-sm text-gray-700 dark:text-white/75 leading-relaxed">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" aria-hidden />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">
                                    Loss of bladder or bowel control needs emergency care the same day. We screen for every one of these in your
                                    first assessment and refer you to the right specialist when needed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── FIRST VISIT ─── */}
            <section id="first-visit" className="py-12 sm:py-20 lg:py-28 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-14">
                        <SectionEyebrow>YOUR FIRST VISIT //</SectionEyebrow>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
                            What happens in your <span className="text-[#513394] dark:text-[#8B5CF6]">first session</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                            You leave knowing what is causing your pain, what to do about it, and roughly how long it will take.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 max-w-7xl mx-auto">
                        {visitSteps.map((step) => {
                            const Icon = step.icon
                            return (
                                <div
                                    key={step.number}
                                    className="relative flex flex-col p-4 sm:p-6 lg:p-7 rounded-2xl bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08] group hover:border-[#513394]/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 overflow-hidden"
                                >
                                    <div className="hidden sm:block absolute -top-4 -right-2 text-[5.5rem] lg:text-[6rem] font-black text-gray-100 dark:text-white/[0.035] leading-none select-none pointer-events-none">
                                        {step.number}
                                    </div>
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="hidden sm:flex w-11 h-11 rounded-xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 items-center justify-center text-[#513394] dark:text-[#A78BFA] mb-5 group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
                                            <Icon className="w-5 h-5" strokeWidth={1.75} />
                                        </div>
                                        <h3 className="flex items-center gap-2.5 font-black text-gray-900 dark:text-white text-base lg:text-[17px] mb-1.5 sm:mb-3 leading-snug">
                                            <span className="sm:hidden text-[11px] font-black tabular-nums rounded-full px-2 py-1 leading-none bg-[#513394]/10 dark:bg-[#8B5CF6]/20 text-[#513394] dark:text-[#A78BFA]">
                                                {step.number}
                                            </span>
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-[15px] sm:text-sm leading-relaxed">{step.body}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>

            {/* ─── METHODS ─── */}
            <section id="treatment" className="py-12 sm:py-24 lg:py-32 bg-white dark:bg-[#0A0A0A]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-16">
                        <SectionEyebrow>TREATMENT //</SectionEyebrow>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                            How does physiotherapy <span className="text-[#513394] dark:text-[#8B5CF6]">treat back pain?</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                            By combining hands-on treatment with exercise that is progressed as you improve, plus changes to how you sit and
                            move. The methods are chosen from your assessment, so not every patient gets every one.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-10 lg:gap-24 items-start max-w-7xl mx-auto">
                        <div className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden aspect-video md:aspect-[4/5] w-full shadow-xl md:shadow-2xl mb-6 md:mb-0 lg:sticky lg:top-28">
                            <Image
                                src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1785857717/Physio_Studio_V1_zw15cj.png"
                                alt="Back pain physiotherapy treatment room at R3BOOT Dadar, Mumbai"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/25" />
                            <div className="hidden md:block absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                                <p className="text-white text-lg sm:text-xl font-black tracking-tight leading-tight mb-3">
                                    Hands-on back pain care at R3BOOT
                                </p>
                                <div className="flex flex-col gap-2">
                                    {['Team led by Dr. Hiral Parikh, 15+ years', 'Dry needling and aquatic rehab in-house'].map((point) => (
                                        <div key={point} className="flex items-center gap-2.5">
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

                        <div className="flex flex-col">
                            {methods.map((m, idx) => {
                                const Icon = m.icon
                                const isLast = idx === methods.length - 1
                                return (
                                    <div
                                        key={m.title}
                                        className="flex gap-4 sm:gap-6"
                                        style={{ '--pc': m.light, '--pcd': m.dark } as React.CSSProperties}
                                    >
                                        <div className="flex flex-col items-center shrink-0 w-12 sm:w-16">
                                            <span className="hidden sm:inline-block text-[10px] font-black tracking-widest rounded-full px-2 sm:px-2.5 py-1 leading-none mb-2 sm:mb-2.5 bg-[color-mix(in_srgb,var(--pc)_10%,transparent)] dark:bg-[color-mix(in_srgb,var(--pcd)_15%,transparent)] text-[var(--pc)] dark:text-[var(--pcd)]">
                                                {String(idx + 1).padStart(2, '0')}
                                            </span>
                                            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-[1.5px] flex items-center justify-center shrink-0 border-[color-mix(in_srgb,var(--pc)_35%,transparent)] dark:border-[color-mix(in_srgb,var(--pcd)_45%,transparent)] bg-[color-mix(in_srgb,var(--pc)_8%,transparent)] dark:bg-[color-mix(in_srgb,var(--pcd)_14%,transparent)]">
                                                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--pc)] dark:text-[var(--pcd)]" strokeWidth={1.75} />
                                            </div>
                                            {!isLast && (
                                                <div className="w-[1.5px] flex-1 min-h-[20px] my-1 [background:repeating-linear-gradient(to_bottom,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_3px,transparent_3px,transparent_8px)] dark:[background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.18)_0px,rgba(255,255,255,0.18)_3px,transparent_3px,transparent_8px)]" />
                                            )}
                                        </div>
                                        <div className={`flex-1 min-w-0 ${isLast ? 'pb-0' : 'pb-3 sm:pb-6'}`}>
                                            <div className="px-4 py-3 sm:p-6 rounded-2xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.06]">
                                                <h3 className="text-[15px] sm:text-base font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-2">{m.title}</h3>
                                                <p className="sm:hidden text-gray-600 dark:text-gray-400 text-[14px] leading-snug">{m.short}</p>
                                                <p className="hidden sm:block text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{m.body}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── RECOVERY TIMELINE ─── */}
            <section id="timeline" className="py-12 sm:py-20 lg:py-24 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-12">
                        <SectionEyebrow>RECOVERY //</SectionEyebrow>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
                            How many sessions <span className="text-[#513394] dark:text-[#8B5CF6]">will I need?</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                            Typical ranges, not a promise. Your own estimate comes after the first assessment, and we review it as you improve.
                        </p>
                    </div>
                    <div className="flex md:grid md:grid-cols-3 gap-3 sm:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0 pb-1">
                        {timeline.map((t) => (
                            <div
                                key={t.label}
                                className="w-[78%] shrink-0 snap-start md:w-auto p-5 sm:p-6 rounded-2xl bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08]"
                            >
                                <p className="text-[11px] font-black tracking-[0.2em] text-gray-400 dark:text-white/40 uppercase mb-2">{t.range}</p>
                                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-1">{t.label}</h3>
                                <p className="text-[15px] font-bold text-[#513394] dark:text-[#A78BFA] mb-3">{t.sessions}</p>
                                <p className="text-[15px] sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{t.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
                        Recovering from spine surgery?{' '}
                        <Link href="/services/physiotherapy/post-surgery" className="font-bold text-[#513394] dark:text-[#A78BFA] hover:underline">
                            See post-surgery rehab →
                        </Link>
                    </p>
                </div>
            </section>

            {/* ─── COMPARISON (desktop only: the 2-column table is too dense on a phone) ─── */}
            <div className="hidden md:block">
                <ComparisonSection
                    rows={comparisonRows}
                    headingLead="Back pain care that"
                    headingAccent="does not stop at the flare."
                    intro="Rest and painkillers can calm a flare. They do not change why it happened. This is the difference in how we work."
                />
            </div>

            {/* ─── TEAM ─── */}
            <TeamSectionDemo />

            {/* ─── REVIEWS ─── */}
            <section className="py-12 md:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="text-center max-w-xl mx-auto mb-8 sm:mb-14">
                        <SectionEyebrow>PATIENT STORIES //</SectionEyebrow>
                        <h2 className="text-[26px] sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight">What patients say</h2>
                    </div>
                    <TestimonialsCarousel testimonials={testimonials} />
                </div>
            </section>

            {/* ─── LOCATIONS ─── */}
            <LocationSection />
            <section className="bg-[#F8F9FA] dark:bg-[#09090E] pb-16 sm:pb-20 -mt-6">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                    <Link
                        href="/physiotherapy-lower-parel"
                        className="group flex items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08] hover:border-[#513394]/40 transition-colors"
                    >
                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-[#513394] dark:text-[#A78BFA] shrink-0 mt-0.5" />
                            <div>
                                <p className="font-black text-gray-900 dark:text-white">Closer to Lower Parel, Worli or Prabhadevi?</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Back pain physiotherapy is also available at R3BOOT Lodha Signet.</p>
                            </div>
                        </div>
                        <span className="text-[#513394] dark:text-[#A78BFA] font-black shrink-0 transition-transform group-hover:translate-x-0.5">→</span>
                    </Link>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <FAQSection faqs={backPainFaqs} layout="grid" />

            {/* ─── CTA ─── */}
            <section className="py-14 lg:py-20 px-4 bg-white dark:bg-[#0A0A0A]">
                <div
                    className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden px-6 py-10 sm:px-12 sm:py-14 text-center"
                    style={{ background: 'linear-gradient(135deg, #2a0d6e 0%, #1a0850 55%, #110638 100%)' }}
                >
                    <div className="absolute top-0 right-0 w-56 h-56 rounded-full blur-[70px] opacity-30 pointer-events-none" style={{ background: '#7c3aed' }} />
                    <div className="relative">
                        <h2 className="text-[26px] sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-3">
                            Stop managing it. <span className="text-[#A78BFA]">Find out what it is.</span>
                        </h2>
                        <p className="text-white/60 text-[14px] sm:text-lg leading-relaxed mb-7 max-w-xl mx-auto">
                            Book a 45-minute assessment and first treatment. Bring any scans you have. No referral needed.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href={`tel:${PHONE}`}
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#513394] font-black rounded-full px-8 py-3.5 text-[15px] tracking-wide hover:scale-[1.02] transition-transform"
                            >
                                <PhoneIcon className="w-4 h-4" />
                                Call to Book
                            </a>
                            <a
                                href={WA_HREF}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-bold rounded-full px-8 py-3.5 text-[15px] tracking-wide hover:bg-white/10 transition-colors"
                            >
                                WhatsApp
                            </a>
                        </div>
                        <p className="text-white/35 text-[10px] tracking-[0.2em] uppercase mt-5">Dadar East · Lower Parel</p>
                    </div>
                </div>
            </section>

            {/* ─── RELATED: one block, two clear jobs. Guides go deeper on back pain; conditions cover pain elsewhere. ─── */}
            <section aria-labelledby="related-heading" className="py-12 sm:py-20 bg-white dark:bg-[#0A0A0A] border-t border-gray-100 dark:border-white/[0.06]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
                    <h2 id="related-heading" className="text-[24px] sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-7 sm:mb-10">
                        Keep reading
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                        <div>
                            <p className="text-[12px] font-black tracking-[0.2em] uppercase text-[#513394] dark:text-[#A78BFA] mb-3">
                                Back pain guides
                            </p>
                            <ul className="divide-y divide-gray-100 dark:divide-white/[0.08] border-y border-gray-100 dark:border-white/[0.08]">
                                {relatedReads.map((r) => (
                                    <li key={r.href}>
                                        <Link href={r.href} className="group flex items-center justify-between gap-4 py-4">
                                            <span className="text-[15px] sm:text-base font-bold text-gray-900 dark:text-white group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors">
                                                {r.title}
                                            </span>
                                            <span className="text-[#513394] dark:text-[#A78BFA] shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden>
                                                →
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-[12px] font-black tracking-[0.2em] uppercase text-[#513394] dark:text-[#A78BFA] mb-3">
                                Pain somewhere else?
                            </p>
                            <ul className="flex flex-wrap gap-2 lg:grid lg:grid-cols-1 lg:gap-0 lg:divide-y lg:divide-gray-100 lg:dark:divide-white/[0.08] lg:border-y lg:border-gray-100 lg:dark:border-white/[0.08]">
                                {PHYSIO_CONDITIONS.filter((c) => c.href !== PAGE_PATH).map((c) => (
                                    <li key={c.href}>
                                        <Link
                                            href={c.href}
                                            className="group inline-flex lg:flex items-center justify-between gap-4 h-11 px-4 lg:h-auto lg:px-0 lg:py-4 rounded-full lg:rounded-none border border-gray-200 dark:border-white/[0.12] lg:border-0 text-[14px] lg:text-base font-bold text-gray-900 dark:text-white hover:border-[#513394] lg:hover:text-[#513394] dark:lg:hover:text-[#A78BFA] transition-colors"
                                        >
                                            <span>
                                                {c.label}
                                                <span className="hidden lg:block text-[14px] font-normal text-gray-500 dark:text-white/50 mt-0.5">{c.detail}</span>
                                            </span>
                                            <span className="hidden lg:inline text-[#513394] dark:text-[#A78BFA] transition-transform group-hover:translate-x-0.5" aria-hidden>
                                                →
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ConditionPageSchema
                path={PAGE_PATH}
                title={TITLE}
                description={DESCRIPTION}
                condition="Back pain"
                alternateNames={['Lower back pain', 'Upper back pain', 'Sciatica', 'Slipped disc', 'Disc bulge', 'Lumbar pain']}
                anatomy="Spine"
                image="/images/service/physiotherapy/back-pain-hero.webp"
            />
            <FAQSchema faqs={backPainFaqs} />
            <BreadcrumbSchema
                items={[
                    { name: 'Home', url: '/' },
                    { name: 'Physiotherapy', url: '/services/physiotherapy' },
                    { name: 'Back Pain', url: PAGE_PATH },
                ]}
            />
        </main>
    )
}
