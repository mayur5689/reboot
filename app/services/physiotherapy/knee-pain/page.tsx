import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import {
    ClipboardCheck,
    Scan,
    Hand,
    Zap,
    Waves,
    Target,
    Stethoscope,
    Dumbbell,
    TrendingUp,
    AlertTriangle,
    Pill,
    MapPin,
    Footprints,
    CalendarCheck,
} from 'lucide-react'
import { FAQSection } from '@/components/faq-section'
import ConditionPageSchema from '@/components/schema/ConditionPageSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { TeamSectionDemo } from '@/app/services-demo/contrast-therapy/TeamSectionDemo'
import { PHYSIO_CONDITIONS } from '@/components/physio/PhysioConditionGrid'
import { CallbackForm } from '@/components/physio/CallbackForm'
import { HeroReviewProof } from '@/components/physio/HeroReviewProof'
import { physioTestimonials } from '@/lib/physio/testimonials'
import { PHYSIO_PRICE_LABEL, PHYSIO_SESSION_LABEL, PHYSIO_SESSION_MINUTES } from '@/lib/physio/pricing'
import { kneePainFaqs } from '@/lib/faqs/knee-pain-physiotherapy'
import { TestimonialsCarousel } from '../TestimonialsCarousel'
import { LocationSection } from '../LocationSection'
import { PainPointsSection, type PainPoint } from '../PainPointsSection'
import { ComparisonSection, type ComparisonRow } from '../ComparisonSection'

const PAGE_PATH = '/services/physiotherapy/knee-pain'
const PHONE = '+919702368612'
const WA_HREF = `https://wa.me/919702368612?text=${encodeURIComponent(
    'Hi R3BOOT, I would like to book a physiotherapy assessment for knee pain.',
)}`
// Real R3BOOT photo, 1672x941 (16:9). Subject sits on the right, so desktop crops to the right edge.
const HERO_IMAGE = 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1794344044/KNEE_PAIN_MOBILE_nem40t.webp'
const HERO_ALT =
    "R3BOOT physiotherapist bending a patient's knee and hip on the treatment table to test knee movement, with Pilates reformers in the clinic behind"
// Title: primary cluster ("knee pain physiotherapy" / "physio for knee pain", ~90/mo each) first, then the two
// biggest secondary intents (knee osteoarthritis ~40/mo, ACL ~70/mo). 59 characters.
const TITLE = 'Knee Pain Physiotherapy in Mumbai: Arthritis & ACL | R3BOOT'
// Description: main presentations, who assesses, same-session treatment, price, both clinics. 158 characters.
const DESCRIPTION =
    `Runner's knee, arthritis, ligament or meniscus pain? An experienced physio finds the cause and treats it the same session. ${PHYSIO_PRICE_LABEL}. Dadar & Lower Parel.`

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: PAGE_PATH },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: `https://www.r3boot.in${PAGE_PATH}`,
        images: [HERO_IMAGE],
    },
}

// Placeholder images are the generic physio photos from PainPointsSection. Each needs a knee-specific photo.
const painPoints: PainPoint[] = [
    {
        title: "Pain around the kneecap (runner's knee)",
        // CLINICAL REVIEW: patellofemoral pain aggravators (stairs down, squats, sitting with knees bent).
        description:
            'A dull ache at the front of the knee, worse going down stairs, squatting or after sitting with the knee bent. Usually a load problem, often linked to hip strength and a jump in running or training volume.',
        // TODO image: runner holding the front of the knee on a staircase or after a run.
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1794349659/01-runners-knee_mex5cu.webp',
    },
    {
        title: 'Stiff, aching knees with age (osteoarthritis)',
        description:
            'Stiff first thing in the morning or after sitting, achy on long walks and stairs. Common from the late 40s onward. The X-ray does not change, but pain and function often improve with strength and pacing.',
        // TODO image: adult over 50 doing a supported sit-to-stand or step-up with a physiotherapist.
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1794349664/02-knee-osteoarthritis_n9llr9.webp',
    },
    {
        title: 'Twisted knee or ligament sprain (MCL, ACL)',
        // CLINICAL REVIEW: grading/stability framing for MCL and ACL sprains managed without surgery.
        description:
            'A twist while landing, turning or tackling, followed by pain, swelling or a knee that feels loose. Stability tests show which ligament is involved and whether the knee can be rehabbed without surgery.',
        // TODO image: physiotherapist performing a ligament stability test on an athlete's knee.
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1794349666/03-knee-ligament-sprain-mcl-acl_o35knq.webp',
    },
    {
        title: 'Catching, clicking or swelling (meniscus)',
        // CLINICAL REVIEW: degenerative meniscus irritation often managed conservatively.
        description:
            'Pain on the inner or outer joint line, swelling after twisting or deep squats, sometimes a catch. Many meniscus problems, especially wear-related ones, settle with strength work and changes to deep bending.',
        // TODO image: close-up of a knee being assessed along the joint line.
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1794349667/04-meniscus-knee-pain_b70osz.webp',
    },
    {
        title: "Pain just below the kneecap (jumper's knee)",
        // CLINICAL REVIEW: patellar tendinopathy responds to progressive (heavy slow) loading over weeks to months.
        description:
            'Sharp pain at the tendon under the kneecap when jumping, sprinting or bowling, often stiff at the start of a session. Tendons respond to steady, heavier loading over weeks, not rest alone.',
        // TODO image: athlete doing a slow single-leg decline squat or leg press under supervision.
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1794349669/05-jumpers-knee-patellar-tendon_f4bmeh.webp',
    },
    {
        title: 'Outer knee pain on longer runs (ITB pain)',
        description:
            'Pain on the outside of the knee that starts at a predictable point in a run and builds until you stop. Usually managed with run load changes and hip strength, without stopping running completely.',
        // TODO image: runner on a treadmill with a physiotherapist watching their running pattern.
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1794349671/06-itb-outer-knee-pain_zpwaub.webp',
    },
]

// CLINICAL REVIEW: knee red flags (Ottawa-style weight-bearing rule, rapid haemarthrosis, septic joint, true locking, DVT).
const redFlags = [
    'You cannot take four steps on the leg after a fall, accident or impact',
    'The knee swelled up within a few hours of an injury, often after a pop',
    'A hot, red, swollen knee with fever or feeling unwell, with no clear injury',
    'The knee is locked and you cannot fully straighten it',
    'Calf pain, swelling or warmth, especially after surgery, a long flight or time in a plaster',
]

const visitSteps = [
    {
        icon: ClipboardCheck,
        number: '01',
        title: 'History and goals',
        body: 'Where on the knee it hurts, how it started (a twist, a pop or a slow build), what sets it off, and the run, match or lift you want back. Bring any MRI, X-ray or reports.',
    },
    {
        icon: Scan,
        number: '02',
        title: 'Knee testing',
        body: 'Ligament stability, meniscus and kneecap tests, plus squats, step-downs, hip and foot strength. This separates joint, tendon, ligament and meniscus pain, and screens for anything that needs a doctor.',
    },
    {
        icon: Hand,
        number: '03',
        title: 'First treatment',
        body: 'Hands-on work and the first exercises picked from what we found, in the same session, so you leave knowing which movements the knee tolerates today.',
    },
    {
        icon: Target,
        number: '04',
        title: 'Plan and training level',
        body: 'How many sessions to expect, what to do at home, and how much running, cricket or gym work to keep for now. Explained in plain language, with what to avoid until the next visit.',
    },
]

const methods: {
    icon: typeof Hand
    title: string
    short: string
    body: string
    light: string
    dark: string
    link?: { href: string; label: string }
}[] = [
    {
        icon: Dumbbell,
        title: 'Progressive strength for quads and hips',
        short: 'The base of almost every knee plan.',
        body: 'Thigh, hip and calf strength built from pain-free basics to heavier, slower loading. This is what usually takes load off the kneecap, the tendon and an arthritic joint.',
        light: '#513394',
        dark: '#A78BFA',
    },
    {
        icon: Hand,
        title: 'Manual therapy and soft tissue work',
        short: 'Eases pain and stiffness so you can train.',
        body: 'Hands-on work on a stiff knee, kneecap and the muscles around it to calm pain and restore bend and straightening, so the exercise part of the plan is possible.',
        light: '#B45309',
        dark: '#FBBF24',
    },
    {
        icon: Zap,
        title: 'Dry needling',
        short: 'For tight, sore thigh and calf muscles.',
        body: 'Trigger-point needling of the quads, hamstrings or calf by a certified physiotherapist, used alongside exercise when muscle tension is adding to the knee pain.',
        light: '#0369A1',
        dark: '#38BDF8',
    },
    {
        icon: Footprints,
        title: 'Running, squat and landing retraining',
        short: 'Changes how load reaches the knee.',
        body: 'We look at how you run, squat, lunge and land, then adjust technique, cadence or depth so the knee is not taking more than it can handle while it recovers.',
        light: '#7C3AED',
        dark: '#C4B5FD',
    },
    {
        icon: Waves,
        title: 'Aquatic rehabilitation',
        short: 'Lower-load walking for sore, arthritic knees.',
        body: 'When walking on land still hurts, the aqua treadmill lets you walk and strengthen with less weight through the knee, then you move back to land work.',
        light: '#0D9488',
        dark: '#2DD4BF',
        link: { href: '/aqua-therapy-for-knee-pain-mumbai', label: 'Aqua therapy for knee pain' },
    },
    {
        icon: CalendarCheck,
        title: 'Return to running and sport plan',
        short: 'Step-by-step back to full training.',
        body: 'Clear steps back to running distance, bowling spells, matches or heavy leg days, with simple checks before each step up so the pain does not come straight back.',
        light: '#BE185D',
        dark: '#F9A8D4',
    },
]

// CLINICAL REVIEW: session ranges per group.
const timeline = [
    {
        label: "Runner's knee and tendon pain",
        range: 'Overuse, slow build',
        sessions: 'Often 6 to 10 sessions',
        body: 'Spread over several weeks, because tendons and the kneecap joint adapt slowly. Training usually continues at a lower level.',
    },
    {
        label: 'Knee arthritis',
        range: 'Stiff, achy, age-related',
        sessions: 'Usually 8 to 12 sessions',
        body: 'Strength, movement and pacing, then a home routine you keep up so walking and stairs stay easier.',
    },
    {
        label: 'Ligament and meniscus',
        range: 'After a twist or sprain',
        sessions: 'Reviewed every session',
        body: 'Depends on how stable the knee is. If it keeps giving way or locking, we refer you for a scan and specialist opinion.',
    },
]

const comparisonRows: ComparisonRow[] = [
    { icon: Pill, label: 'First step', standard: 'Rest, a knee cap and painkillers', r3boot: 'Tests to find the structure that hurts' },
    { icon: Stethoscope, label: 'Diagnosis', standard: '"Wear and tear" or "ligament issue"', r3boot: 'Kneecap, tendon, ligament or meniscus, explained' },
    { icon: Hand, label: 'Treatment', standard: 'Heat, IFT and ultrasound', r3boot: 'Strength work, manual therapy, dry needling' },
    { icon: Dumbbell, label: 'Exercise', standard: 'Straight leg raises on a sheet', r3boot: 'Loaded and progressed up to your sport' },
    { icon: Footprints, label: 'Activity', standard: 'Stop running, avoid stairs', r3boot: 'A level you can keep training at' },
    { icon: TrendingUp, label: 'Goal', standard: 'Settle the pain', r3boot: 'A knee that handles stairs, runs and matches' },
]

// All four verified to return 200 on the dev server.
const relatedReads = [
    { href: '/blog/knee-pain-treatment-without-surgery', title: 'Knee pain treatment without surgery' },
    { href: '/blog/aqua-therapy-knee-arthritis-joint-load', title: 'Aqua therapy for knee arthritis and joint load' },
    { href: '/blog/shivaji-park-runners-recovery-guide', title: "Shivaji Park runners' recovery guide" },
    { href: '/blog/aqua-therapy-after-knee-replacement-acl', title: 'Aqua therapy after knee replacement or ACL surgery' },
]

// Knee and ACL reviews first, then the rest of the physio reviews.
const KNEE_RE = /knee|acl/i
const testimonials = [
    ...physioTestimonials.filter((t) => KNEE_RE.test(t.quote)),
    ...physioTestimonials.filter((t) => !KNEE_RE.test(t.quote)),
]

const CONCERNS = ["Runner's knee or kneecap pain", 'Knee arthritis', 'Ligament sprain or ACL', 'Meniscus or locking', 'After knee surgery']

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

export default function KneePainPhysiotherapyPage() {
    return (
        <main className="physio-page min-h-screen bg-white dark:bg-[#0A0A0A]">

            {/* ─── DESKTOP HERO ─── */}
            <section className="hidden md:flex flex-col bg-black overflow-hidden pt-20 lg:pt-24" style={{ minHeight: '88vh' }}>
                <div className="relative flex flex-1 flex-col">
                    {/* Portrait photo sits on the right; text stays on solid black at left. */}
                    <div className="absolute inset-y-0 right-0 w-[58%] xl:w-[54%]">
                        {/* TODO image: see HERO_IMAGE. */}
                        <Image
                            src={HERO_IMAGE}
                            alt={HERO_ALT}
                            fill
                            className="object-cover"
                            style={{ objectPosition: '100% center' }}
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
                            <span className="text-white/80">Knee Pain</span>
                        </nav>
                        <p className="text-[#A78BFA] text-[11px] font-black tracking-[0.25em] uppercase mb-4">
                            Runner&apos;s knee&nbsp;&nbsp;•&nbsp;&nbsp;Arthritis&nbsp;&nbsp;•&nbsp;&nbsp;Ligament&nbsp;&nbsp;•&nbsp;&nbsp;Meniscus
                        </p>
                        <h1 className="text-5xl lg:text-6xl xl:text-[4.25rem] font-black text-white tracking-tight leading-[1.04] mb-5">
                            Physiotherapy for <span className="text-[#A78BFA]">Knee Pain</span> in Mumbai
                        </h1>
                        <p className="text-[17px] text-white/65 max-w-md leading-relaxed mb-6">
                            Kneecap pain on the stairs, a knee that aches after a run, or stiff arthritic knees?
                        </p>
                        <HeroReviewProof onDark className="mb-7" />
                        <CallbackForm source="knee-pain-hero" concerns={CONCERNS} whatsappHref={WA_HREF} />
                    </div>
                </div>
            </section>

            {/* ─── MOBILE HERO ─── */}
            <section className="md:hidden pt-20 pb-0 bg-white dark:bg-[#0A0A0A]">
                <div className="container mx-auto px-5">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
                        {/* TODO image: see HERO_IMAGE (16:9 crop, knee centred). */}
                        <Image
                            src={HERO_IMAGE}
                            alt={HERO_ALT}
                            fill
                            className="object-cover"
                            style={{ objectPosition: '70% center' }}
                            sizes="(max-width: 768px) 100vw, 0px"
                            priority
                        />
                    </div>
                    <nav aria-label="Breadcrumb" className="mt-6 mb-3 text-[12px] font-bold text-gray-400 dark:text-white/40">
                        <Link href="/services/physiotherapy" className="hover:text-[#513394] dark:hover:text-[#A78BFA]">
                            Physiotherapy
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-600 dark:text-white/70">Knee Pain</span>
                    </nav>
                    <h2 className="text-[2rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-4">
                        Physiotherapy for <span className="text-[#513394] dark:text-[#A78BFA]">Knee Pain</span> in Mumbai
                    </h2>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-7">
                        Kneecap pain on the stairs, a knee that aches after a run, or stiff arthritic knees?
                    </p>
                    {/* Form sits on a dark card so its white-on-dark fields stay readable in light mode. */}
                    <div className="rounded-2xl bg-[#120C22] [&>form]:max-w-none [&>form]:border-0 [&>div]:max-w-none">
                        <CallbackForm source="knee-pain-hero-mobile" concernLabel="Type of pain" concerns={CONCERNS} whatsappHref={WA_HREF} />
                    </div>
                    <HeroReviewProof className="mt-7 mb-2" />
                </div>
            </section>

            {/* ─── WHAT IS DRIVING IT (accordion) ─── */}
            <PainPointsSection
                points={painPoints}
                eyebrow="WHAT IS DRIVING IT //"
                heading="Can physiotherapy fix knee pain"
                intro="Usually, yes. Most knee pain that did not start with a major injury improves with physiotherapy and does not need surgery. The catch is that the kneecap, a tendon, a ligament, the meniscus and an arthritic joint each need a different plan, so we test the knee before treating it."
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
                                    A hot, red, swollen knee with fever needs a doctor the same day.
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
                                We check for all of these in your first assessment and refer you when needed.
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
                                    A hot, red, swollen knee with fever, or calf swelling after surgery or a long flight, needs a doctor the same
                                    day. We check for every one of these in your first assessment and refer you to the right specialist when
                                    needed.
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
                            Wear shorts or bring a pair so we can see both knees. You leave knowing which part of the knee hurts, what to do
                            about it, and how much training to keep.
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
                            How does physiotherapy <span className="text-[#513394] dark:text-[#8B5CF6]">treat knee pain?</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                            Mostly by making the muscles around the knee stronger and changing how much load the knee takes, with hands-on
                            treatment to ease pain along the way. The mix depends on your assessment, so a runner and someone with arthritis
                            get very different plans.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-10 lg:gap-24 items-start max-w-7xl mx-auto">
                        <div className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden aspect-video md:aspect-[4/5] w-full shadow-xl md:shadow-2xl mb-6 md:mb-0 lg:sticky lg:top-28">
                            {/* Real R3BOOT photo, 1122x1402 (4:5). Mobile crops to 16:9 around the bent knee and the physio. */}
                            <Image
                                src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1794344384/KNEE_PAIN_2_azmots.webp"
                                alt="Patient doing a single-leg balance test for knee control while an R3BOOT physiotherapist records the result"
                                fill
                                className="object-cover"
                                style={{ objectPosition: 'center 45%' }}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/25" />
                            <div className="hidden md:block absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                                <p className="text-white text-lg sm:text-xl font-black tracking-tight leading-tight mb-3">
                                    Knee rehab, coached in person
                                </p>
                                <div className="flex flex-col gap-2">
                                    {['Team led by Dr. Hiral Parikh, 15+ years', 'Dry needling and aqua treadmill in-house'].map((point) => (
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
                                                {m.link && (
                                                    <Link
                                                        href={m.link.href}
                                                        className="inline-block mt-1.5 sm:mt-2 text-[14px] sm:text-sm font-bold text-[var(--pc)] dark:text-[var(--pcd)] hover:underline"
                                                    >
                                                        {m.link.label} →
                                                    </Link>
                                                )}
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
                            Most knee plans run 6 to 12 sessions, depending on what is irritated and how long it has been going on. These are
                            typical ranges, not a promise. Your own estimate comes after the first assessment and is reviewed as you improve.
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
                        Recovering from ACL reconstruction or a knee replacement?{' '}
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
                    headingLead="Knee care that"
                    headingAccent="gets you back to your sport."
                    intro="A knee cap and a few weeks off can quiet the pain. The knee is usually no stronger when you go back. This is the difference in how we work."
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
                                <p className="font-black text-gray-900 dark:text-white">Training in Worli, Lower Parel or Prabhadevi?</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Knee physiotherapy is also available at R3BOOT Lodha Signet, Lower Parel.</p>
                            </div>
                        </div>
                        <span className="text-[#513394] dark:text-[#A78BFA] font-black shrink-0 transition-transform group-hover:translate-x-0.5">→</span>
                    </Link>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <FAQSection faqs={kneePainFaqs} layout="grid" />

            {/* ─── CTA ─── */}
            <section className="py-14 lg:py-20 px-4 bg-white dark:bg-[#0A0A0A]">
                <div
                    className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden px-6 py-10 sm:px-12 sm:py-14 text-center"
                    style={{ background: 'linear-gradient(135deg, #2a0d6e 0%, #1a0850 55%, #110638 100%)' }}
                >
                    <div className="absolute top-0 right-0 w-56 h-56 rounded-full blur-[70px] opacity-30 pointer-events-none" style={{ background: '#7c3aed' }} />
                    <div className="relative">
                        <h2 className="text-[26px] sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-3">
                            Stop resting it and hoping. <span className="text-[#A78BFA]">Find out what it needs.</span>
                        </h2>
                        <p className="text-white/60 text-[14px] sm:text-lg leading-relaxed mb-7 max-w-xl mx-auto">
                            Book a {PHYSIO_SESSION_MINUTES}-minute knee assessment and first treatment. Bring shorts and any scans. No referral
                            needed.
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

            {/* ─── RELATED: one block, two clear jobs. Guides go deeper on knee pain; conditions cover pain elsewhere. ─── */}
            <section aria-labelledby="related-heading" className="py-12 sm:py-20 bg-white dark:bg-[#0A0A0A] border-t border-gray-100 dark:border-white/[0.06]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
                    <h2 id="related-heading" className="text-[24px] sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-7 sm:mb-10">
                        Keep reading
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                        <div>
                            <p className="text-[12px] font-black tracking-[0.2em] uppercase text-[#513394] dark:text-[#A78BFA] mb-3">
                                Knee pain guides
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
                condition="Knee pain"
                alternateNames={[
                    "Runner's knee",
                    'Patellofemoral pain syndrome',
                    'Knee osteoarthritis',
                    'Knee ligament sprain',
                    'ACL injury',
                    'Meniscus injury',
                    'Patellar tendinopathy',
                    'IT band syndrome',
                ]}
                anatomy="Knee joint"
                image={HERO_IMAGE}
            />
            <FAQSchema faqs={kneePainFaqs} />
            <BreadcrumbSchema
                items={[
                    { name: 'Home', url: '/' },
                    { name: 'Physiotherapy', url: '/services/physiotherapy' },
                    { name: 'Knee Pain', url: PAGE_PATH },
                ]}
            />
        </main>
    )
}
