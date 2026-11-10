import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import {
    ClipboardCheck,
    Scan,
    Hand,
    Zap,
    Activity,
    Moon,
    Target,
    Stethoscope,
    Dumbbell,
    TrendingUp,
    AlertTriangle,
    Pill,
    MapPin,
    Snowflake,
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
import { shoulderPainFaqs } from '@/lib/faqs/shoulder-pain-physiotherapy'
import { TestimonialsCarousel } from '../TestimonialsCarousel'
import { LocationSection } from '../LocationSection'
import { PainPointsSection, type PainPoint } from '../PainPointsSection'
import { ComparisonSection, type ComparisonRow } from '../ComparisonSection'

const PAGE_PATH = '/services/physiotherapy/shoulder-pain'
const PHONE = '+919702368612'
const WA_HREF = `https://wa.me/919702368612?text=${encodeURIComponent(
    'Hi R3BOOT, I would like to book a physiotherapy assessment for shoulder pain.',
)}`
// Title: frozen shoulder leads (4 queries at ~720/mo each: "physiotherapy for frozen shoulder" and variants),
// then "shoulder pain physiotherapy" (~40/mo, already position 1.3 in GSC). The full word "Physiotherapy"
// matches the high-volume queries exactly; Mumbai is carried by the H1, description and schema. 54 characters.
const TITLE = 'Frozen Shoulder & Shoulder Pain Physio in Mumbai | R3BOOT'
// Description: the three main presentations, who assesses, same-session treatment, price, both clinics. 158 chars.
const DESCRIPTION =
    `Frozen shoulder, rotator cuff pain or impingement? An experienced physiotherapist finds the cause and treats it the same session. ${PHYSIO_PRICE_LABEL}. Dadar & Lower Parel.`
// Real R3BOOT photo, 1672x941 (16:9). Both people sit on the right, so desktop crops toward the right edge.
const HERO_IMAGE = 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1794345277/shoulder_pain_ksj9n3.webp'
const HERO_ALT = "R3BOOT physiotherapist moving a seated patient's arm behind his back to test shoulder rotation"

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

const heroConcerns = [
    'Frozen shoulder',
    'Rotator cuff pain or tear',
    'Pain lifting the arm',
    'Shoulder pain from the gym',
    'After shoulder surgery',
]

// TODO image (all six): the cards reuse the generic placeholder photos from PainPointsSection.
// Each should be replaced with a photo of the presentation named in its title.
const painPoints: PainPoint[] = [
    {
        // CLINICAL REVIEW: age range, diabetes/thyroid association, loss of outward rotation as the hallmark sign.
        title: 'Frozen shoulder (adhesive capsulitis)',
        description:
            'The shoulder slowly gets painful, then stiff, until you cannot reach behind your back or turn the arm outwards. Most common between 40 and 60 and in people with diabetes. Stretching harder is not the answer early on.',
        // TODO image: patient in their 50s trying to reach behind their back, physiotherapist guiding the arm.
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785856300/image-7_bpblht.webp',
    },
    {
        title: 'Rotator cuff tendon pain',
        description:
            'A deep ache on the outside of the upper arm, worse lifting, reaching or lying on that side. Often follows a jump in gym volume, swimming or bowling, or years of desk work with little upper-body strength.',
        // TODO image: physiotherapist testing rotator cuff strength with resistance at the forearm.
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785856299/image-4_q31xrd.webp',
    },
    {
        // CLINICAL REVIEW: painful arc and shoulder blade control as the usual driver rather than bone shape.
        title: 'Shoulder impingement',
        description:
            'A pinch or catch as the arm passes shoulder height, often easing once it is fully up. Usually a strength and shoulder blade control problem rather than a bone that needs removing.',
        // TODO image: athlete raising the arm overhead while the physiotherapist watches shoulder blade movement.
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785856300/image-6_z4cmvp.webp',
    },
    {
        // CLINICAL REVIEW: degenerative vs traumatic tear presentation and when to refer.
        title: 'Rotator cuff tear',
        description:
            'Weakness lifting the arm, sometimes after a fall or a heavy pull, sometimes with no clear injury after 50. Many partial and wear-related tears do well with rehab. A sudden large tear needs a surgeon to see it early.',
        // TODO image: physiotherapist reviewing a shoulder MRI or ultrasound report with a patient.
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785856298/image_3_v2_jx6jky.webp',
    },
    {
        title: 'AC joint pain',
        description:
            'Pinpoint pain on top of the shoulder, worse reaching across your body, doing push-ups or dips, or carrying a bag on that side. Common in lifters and after a fall onto the shoulder.',
        // TODO image: close-up of the top of the shoulder during a cross-body reach test.
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785856298/image_2_V2_idovyw.webp',
    },
    {
        title: 'Pain coming from the neck',
        description:
            'Shoulder blade or upper arm pain that changes when you move your neck, sometimes with tingling into the hand. The shoulder itself tests normal, so treating only the shoulder does not help.',
        // TODO image: physiotherapist assessing neck movement with a patient seated.
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785856299/imag_4_v2_hywdwp.webp',
    },
]

// CLINICAL REVIEW: shoulder-specific red flags (cardiac referral, dislocation/fracture, septic joint, malignancy, neuro).
const redFlags = [
    'Left shoulder or arm pain with chest tightness, breathlessness, sweating or nausea',
    'A fall or injury followed by a deformed-looking shoulder or being unable to lift the arm at all',
    'A hot, red, swollen shoulder with fever, especially if you have diabetes',
    'Unexplained weight loss or a history of cancer alongside the pain',
    'Constant night pain that no position eases, or weakness and numbness spreading down the arm',
]

const visitSteps = [
    {
        icon: ClipboardCheck,
        number: '01',
        title: 'History and goals',
        body: 'When it started, whether it is slowly getting stiffer, how it affects sleep, dressing, work and training, and any diabetes or thyroid history. Bring any X-ray, ultrasound or MRI reports.',
    },
    {
        icon: Scan,
        number: '02',
        title: 'Movement and strength testing',
        // CLINICAL REVIEW: active vs passive range as the key test separating frozen shoulder from cuff problems.
        body: 'We compare how far you can lift the arm with how far it moves when we lift it. That one test separates frozen shoulder from cuff and impingement problems. Then strength, shoulder blade control and a neck screen.',
    },
    {
        icon: Hand,
        number: '03',
        title: 'First treatment',
        body: 'Hands-on work and exercises chosen for your diagnosis and how irritable the shoulder is today, in the same session. Gentle if it is very painful, more direct if it is mainly stiff.',
    },
    {
        icon: Target,
        number: '04',
        title: 'Plan and timeline',
        body: 'What is causing it, which phase you are in if it is frozen shoulder, a short daily home routine, how to sleep and train for now, and a realistic timeline. Explained in plain language.',
    },
]

const methods = [
    {
        icon: Snowflake,
        title: 'Phase-matched care for frozen shoulder',
        short: 'Gentle when it is painful, firmer when it is stiff.',
        // CLINICAL REVIEW: phase-dependent mobilisation intensity for adhesive capsulitis.
        body: 'In the painful phase we calm pain and protect the movement you have. Once stiffness takes over, joint mobilisation and stretching get firmer to win back reach. Pushing too hard too early tends to flare it.',
        light: '#0369A1',
        dark: '#38BDF8',
    },
    {
        icon: Hand,
        title: 'Joint mobilisation and manual therapy',
        short: 'Hands-on work on a stiff shoulder, neck and upper back.',
        body: 'Hands-on work on the shoulder joint, the shoulder blade and the upper back, which often has to move better before the arm can reach fully overhead.',
        light: '#513394',
        dark: '#A78BFA',
    },
    {
        icon: Zap,
        title: 'Dry needling',
        short: 'Releases tight, guarding muscles around the shoulder.',
        body: 'Trigger-point needling for the muscles that tighten and guard around a painful shoulder, by a certified physiotherapist. Used alongside exercise, never on its own.',
        light: '#B45309',
        dark: '#FBBF24',
    },
    {
        icon: TrendingUp,
        title: 'Rotator cuff and shoulder blade strength',
        short: 'Progressive loading for cuff pain, impingement and tears.',
        body: 'The main treatment for cuff pain, impingement and many tears. Built from pain-free basics to loaded work, and progressed as the shoulder tolerates more.',
        light: '#7C3AED',
        dark: '#C4B5FD',
    },
    {
        icon: Dumbbell,
        title: 'Return to gym and overhead sport',
        short: 'Graded return to pressing, swimming, bowling or racquet sports.',
        body: 'A staged return to pressing, pull-ups, swimming, bowling or racquet sports, with clear markers for when to add load and which lifts to swap for now.',
        light: '#0D9488',
        dark: '#2DD4BF',
    },
    {
        icon: Moon,
        title: 'Sleep, desk and daily routine',
        short: 'Sleeping positions and a short home routine that fits your day.',
        body: 'Night pain is often the worst part. We set up sleeping positions, desk and reaching habits, and a short daily routine, which matters most for frozen shoulder.',
        light: '#BE185D',
        dark: '#F9A8D4',
    },
]

// CLINICAL REVIEW: all three ranges, especially the frozen shoulder duration and visit frequency.
const timeline = [
    {
        label: 'Frozen shoulder',
        range: 'Months, not weeks',
        sessions: 'Weekly at first, then spaced out',
        body: 'It usually moves from a painful phase to a stiff phase, then slowly thaws, often over a year or more. Physio cannot skip a phase. It eases pain and helps you regain reach sooner.',
    },
    {
        label: 'Rotator cuff and impingement',
        range: 'Gym, overhead, desk',
        sessions: 'Often 6 to 10 sessions',
        body: 'Over roughly 6 to 12 weeks. Pain settles first, then strength is rebuilt so lifting, sleeping on that side and training stop hurting.',
    },
    {
        label: 'Rotator cuff tear',
        range: 'Partial or wear-related',
        sessions: 'Reviewed every session',
        body: 'Progress depends on the size of the tear and how your strength responds. We track it closely and refer you to an orthopaedic surgeon if rehab is not enough.',
    },
]

const comparisonRows: ComparisonRow[] = [
    { icon: Pill, label: 'First step', standard: 'Painkillers and resting the arm', r3boot: 'Assessment: capsule, cuff or neck' },
    { icon: Stethoscope, label: 'Diagnosis', standard: '"Frozen shoulder" for any stiff shoulder', r3boot: 'Which structure and which phase, explained' },
    { icon: Hand, label: 'Treatment', standard: 'Hot packs and ultrasound', r3boot: 'Mobilisation, dry needling, guided loading' },
    { icon: Activity, label: 'Stretching', standard: 'Push through the pain', r3boot: 'Matched to how irritable the shoulder is' },
    { icon: Dumbbell, label: 'Exercise', standard: 'Wall climbing and a pulley at home', r3boot: 'Cuff and shoulder blade work, progressed' },
    { icon: TrendingUp, label: 'Goal', standard: 'Less pain today', r3boot: 'Full reach, sleep and training back' },
]

// All verified 200 with real article content on the dev server.
const relatedReads = [
    { href: '/blog/frozen-shoulder-stages-dry-needling', tag: 'Frozen shoulder', title: 'Frozen shoulder stages: what helps at each phase' },
    { href: '/blog/shoulder-pain-sleeping-left-side-frozen-gym-faq', tag: 'FAQ', title: 'Shoulder pain FAQ: sleeping, left-side pain and the gym' },
    { href: '/blog/physiotherapist-guide-shoulder-joint-pain-relief', tag: 'Guide', title: 'A physiotherapist guide to shoulder joint pain relief' },
]

// Shoulder review first, then the rest of the physio reviews.
const testimonials = [
    ...physioTestimonials.filter((t) => /shoulder/i.test(t.quote)),
    ...physioTestimonials.filter((t) => !/shoulder/i.test(t.quote)),
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

export default function ShoulderPainPhysiotherapyPage() {
    return (
        <main className="physio-page min-h-screen bg-white dark:bg-[#0A0A0A]">

            {/* ─── DESKTOP HERO ─── */}
            <section className="hidden md:flex flex-col bg-black overflow-hidden pt-20 lg:pt-24" style={{ minHeight: '88vh' }}>
                <div className="relative flex flex-1 flex-col">
                    {/* Photo sits on the right; text stays on solid black at left. */}
                    <div className="absolute inset-y-0 right-0 w-[58%] xl:w-[54%]">
                        <Image
                            src={HERO_IMAGE}
                            alt={HERO_ALT}
                            fill
                            className="object-cover"
                            style={{ objectPosition: '85% center' }}
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
                            <span className="text-white/80">Shoulder Pain</span>
                        </nav>
                        <p className="text-[#A78BFA] text-[11px] font-black tracking-[0.25em] uppercase mb-4">
                            Frozen shoulder&nbsp;&nbsp;•&nbsp;&nbsp;Rotator cuff&nbsp;&nbsp;•&nbsp;&nbsp;Impingement&nbsp;&nbsp;•&nbsp;&nbsp;Gym shoulder
                        </p>
                        <h1 className="text-5xl lg:text-6xl xl:text-[4.25rem] font-black text-white tracking-tight leading-[1.04] mb-5">
                            Physiotherapy for <span className="text-[#A78BFA]">Frozen Shoulder</span>{' & '}Shoulder Pain in Mumbai
                        </h1>
                        <p className="text-[17px] text-white/65 max-w-md leading-relaxed mb-6">
                            A shoulder too stiff to reach behind your back, night pain, or a pinch when you lift overhead?
                        </p>
                        <HeroReviewProof onDark className="mb-7" />
                        <CallbackForm source="shoulder-pain-hero" concerns={heroConcerns} whatsappHref={WA_HREF} />
                    </div>
                </div>
            </section>

            {/* ─── MOBILE HERO ─── */}
            <section className="md:hidden pt-20 pb-0 bg-white dark:bg-[#0A0A0A]">
                <div className="container mx-auto px-5">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src={HERO_IMAGE}
                            alt={HERO_ALT}
                            fill
                            className="object-cover"
                            style={{ objectPosition: 'center center' }}
                            sizes="(max-width: 768px) 100vw, 0px"
                            priority
                        />
                    </div>
                    <nav aria-label="Breadcrumb" className="mt-6 mb-3 text-[12px] font-bold text-gray-400 dark:text-white/40">
                        <Link href="/services/physiotherapy" className="hover:text-[#513394] dark:hover:text-[#A78BFA]">
                            Physiotherapy
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-600 dark:text-white/70">Shoulder Pain</span>
                    </nav>
                    <h2 className="text-[2rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-4">
                        Physiotherapy for <span className="text-[#513394] dark:text-[#A78BFA]">Frozen Shoulder</span>{' & '}Shoulder Pain in Mumbai
                    </h2>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-7">
                        A shoulder too stiff to reach behind your back, night pain, or a pinch when you lift overhead?
                    </p>
                    {/* Form sits on a dark card so its white-on-dark fields stay readable in light mode. */}
                    <div className="rounded-2xl bg-[#120C22] [&>form]:max-w-none [&>form]:border-0 [&>div]:max-w-none">
                        <CallbackForm
                            source="shoulder-pain-hero-mobile"
                            concernLabel="Type of pain"
                            concerns={heroConcerns}
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
                heading="Can physiotherapy fix frozen shoulder and shoulder pain"
                // CLINICAL REVIEW: "most shoulder pain improves without surgery".
                intro="In most cases, yes, and most shoulder pain improves without surgery. Frozen shoulder takes months rather than weeks, but physiotherapy eases the pain and helps the movement come back. A stiff capsule, an irritated cuff tendon and pain from the neck each need a different plan, so every first session starts with an assessment."
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
                                    Shoulder pain with chest tightness, breathlessness or sweating needs emergency care now.
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
                                    Left shoulder pain with chest tightness, breathlessness or sweating can be the heart and needs emergency care
                                    straight away. We screen for every one of these in your first assessment and refer you to the right doctor
                                    when needed.
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
                            You leave knowing whether it is frozen shoulder, the cuff or something else, what to do about it, and how long it
                            is likely to take.
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
                            How does physiotherapy <span className="text-[#513394] dark:text-[#8B5CF6]">treat frozen shoulder and shoulder pain?</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                            By matching the treatment to what is wrong and how irritable the shoulder is. Frozen shoulder gets gentle care while
                            it is painful and firmer mobilisation once it is stiff. Cuff and impingement problems are mainly rebuilt with
                            strength work. Not every patient gets every method below.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-10 lg:gap-24 items-start max-w-7xl mx-auto">
                        <div className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden aspect-video md:aspect-[4/5] w-full shadow-xl md:shadow-2xl mb-6 md:mb-0 lg:sticky lg:top-28">
                            {/* Real R3BOOT photo, 1122x1402 (4:5). Mobile crops to 16:9 around the raised arms and the physio's hands. */}
                            <Image
                                src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1794345156/shoulder_image__2_y0ckqb.webp"
                                alt="R3BOOT physiotherapist supporting a patient's upper back as she raises both arms overhead in a shoulder mobility exercise"
                                fill
                                className="object-cover"
                                style={{ objectPosition: 'center 40%' }}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/25" />
                            <div className="hidden md:block absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                                <p className="text-white text-lg sm:text-xl font-black tracking-tight leading-tight mb-3">
                                    Shoulder care matched to your phase
                                </p>
                                <div className="flex flex-col gap-2">
                                    {['Team led by Dr. Hiral Parikh, 15+ years', 'Dry needling in-house with Dr. Vaishali Rauniyar'].map((point) => (
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
                            It depends on the cause. Cuff and impingement pain often settle within a few months, while frozen shoulder is a
                            longer road. These are typical ranges, not a promise. Your own estimate comes after the first assessment.
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
                        Had a rotator cuff repair or other shoulder surgery?{' '}
                        <Link href="/services/physiotherapy/post-surgery" className="font-bold text-[#513394] dark:text-[#A78BFA] hover:underline">
                            See post-surgery rehab →
                        </Link>
                        <span className="hidden sm:inline">&nbsp;&nbsp;·&nbsp;&nbsp;</span>
                        <br className="sm:hidden" />
                        Pain starts in the neck?{' '}
                        <Link href="/services/physiotherapy/neck-pain" className="font-bold text-[#513394] dark:text-[#A78BFA] hover:underline">
                            See neck pain physiotherapy →
                        </Link>
                    </p>
                </div>
            </section>

            {/* ─── COMPARISON (desktop only: the 2-column table is too dense on a phone) ─── */}
            <div className="hidden md:block">
                <ComparisonSection
                    rows={comparisonRows}
                    headingLead="Shoulder care that"
                    headingAccent="gets your reach back."
                    intro="Rest and painkillers can take the edge off. They do not loosen a stiff capsule or rebuild a weak cuff. This is the difference in how we work."
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
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Frozen shoulder and shoulder pain physiotherapy is also available at R3BOOT Lodha Signet.
                                </p>
                            </div>
                        </div>
                        <span className="text-[#513394] dark:text-[#A78BFA] font-black shrink-0 transition-transform group-hover:translate-x-0.5">→</span>
                    </Link>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <FAQSection faqs={shoulderPainFaqs} layout="grid" />

            {/* ─── CTA ─── */}
            <section className="py-14 lg:py-20 px-4 bg-white dark:bg-[#0A0A0A]">
                <div
                    className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden px-6 py-10 sm:px-12 sm:py-14 text-center"
                    style={{ background: 'linear-gradient(135deg, #2a0d6e 0%, #1a0850 55%, #110638 100%)' }}
                >
                    <div className="absolute top-0 right-0 w-56 h-56 rounded-full blur-[70px] opacity-30 pointer-events-none" style={{ background: '#7c3aed' }} />
                    <div className="relative">
                        <h2 className="text-[26px] sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-3">
                            Stiff, sore or stuck? <span className="text-[#A78BFA]">Find out which phase you are in.</span>
                        </h2>
                        <p className="text-white/60 text-[14px] sm:text-lg leading-relaxed mb-7 max-w-xl mx-auto">
                            Book a {PHYSIO_SESSION_MINUTES}-minute assessment and first treatment. Bring any X-ray or MRI reports. No referral
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

            {/* ─── RELATED: one block, two clear jobs. Guides go deeper on shoulder pain; conditions cover pain elsewhere. ─── */}
            <section aria-labelledby="related-heading" className="py-12 sm:py-20 bg-white dark:bg-[#0A0A0A] border-t border-gray-100 dark:border-white/[0.06]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
                    <h2 id="related-heading" className="text-[24px] sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-7 sm:mb-10">
                        Keep reading
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                        <div>
                            <p className="text-[12px] font-black tracking-[0.2em] uppercase text-[#513394] dark:text-[#A78BFA] mb-3">
                                Shoulder pain guides
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
                condition="Shoulder pain"
                alternateNames={[
                    'Frozen shoulder',
                    'Adhesive capsulitis',
                    'Rotator cuff tear',
                    'Rotator cuff tendinopathy',
                    'Shoulder impingement',
                    'AC joint pain',
                ]}
                anatomy="Shoulder joint"
                image={HERO_IMAGE}
            />
            <FAQSchema faqs={shoulderPainFaqs} />
            <BreadcrumbSchema
                items={[
                    { name: 'Home', url: '/' },
                    { name: 'Physiotherapy', url: '/services/physiotherapy' },
                    { name: 'Shoulder Pain', url: PAGE_PATH },
                ]}
            />
        </main>
    )
}
