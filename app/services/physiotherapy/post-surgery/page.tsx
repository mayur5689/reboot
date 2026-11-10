import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import {
    FileText,
    Scan,
    Hand,
    Move,
    Waves,
    Footprints,
    Target,
    ClipboardCheck,
    Dumbbell,
    TrendingUp,
    AlertTriangle,
    MapPin,
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
import { postSurgeryFaqs } from '@/lib/faqs/post-surgery-physiotherapy'
import { TestimonialsCarousel } from '../TestimonialsCarousel'
import { LocationSection } from '../LocationSection'
import { PainPointsSection, type PainPoint } from '../PainPointsSection'
import { ComparisonSection, type ComparisonRow } from '../ComparisonSection'

const PAGE_PATH = '/services/physiotherapy/post-surgery'
const PHONE = '+919702368612'
const WA_HREF = `https://wa.me/919702368612?text=${encodeURIComponent(
    'Hi R3BOOT, I would like to book a physiotherapy assessment after surgery.',
)}`
// Title: primary keyword first ("post surgery physiotherapy"), "ACL rehab" as the most specific surgery-name search
// (also seen in GSC as "acl surgery rehabilitation"), Mumbai for local. 57 characters.
const TITLE = 'Post-Surgery Physiotherapy & ACL Rehab in Mumbai | R3BOOT'
// Description: the main operations, who assesses, same-session start, price, both clinics. 157 characters.
const DESCRIPTION =
    `After ACL, knee, hip or spine surgery? An experienced physio follows your surgeon's protocol and starts rehab that session. ${PHYSIO_PRICE_LABEL}. Dadar & Lower Parel.`

// Real R3BOOT photo, 1672x941 (16:9). Physio and patient sit centre, slightly right on desktop.
const HERO_IMAGE = 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1794346710/injury_surgery_xd1qkt.webp'
const HERO_ALT = "R3BOOT physiotherapist doing hands-on work on a patient's lower back on the treatment table in the rehab studio"

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

const CONCERNS = ['ACL reconstruction', 'Knee replacement', 'Hip replacement', 'Spine surgery', 'Shoulder surgery', 'Fracture or other surgery']

// "What is driving it" adapted for this page: the operations we rehab, one card each, with what recovery focuses on.
const painPoints: PainPoint[] = [
    {
        title: 'ACL reconstruction',
        // CLINICAL REVIEW: ACL rehab priorities (full extension, swelling, quadriceps activation early; hop and change-of-direction testing late).
        description:
            'Early on: a fully straight knee, less swelling and the thigh muscle switching back on. Later: single-leg strength, landing and change of direction, with strength checks before running and sport.',
        // TODO image: athlete doing a single-leg exercise with a physiotherapist, a few months after ACL reconstruction.
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785856299/imag_4_v2_hywdwp.webp',
    },
    {
        title: 'Total knee replacement',
        description:
            'Getting the new knee straight and bending again, settling swelling, rebuilding thigh strength, and walking without a walker or stick. Then stairs, getting up from a chair and longer walks.',
        // TODO image: patient in their 60s doing an assisted knee bend on the treatment table after knee replacement.
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785802981/CONDITION-SPECIFIC-POST-SURGERY_ytzaon.webp',
    },
    {
        title: 'Hip replacement',
        // CLINICAL REVIEW: hip precautions depend on surgical approach; wording kept general.
        description:
            'Walking pattern, hip and buttock strength and balance, all within the movement precautions your surgeon sets for your type of operation. Then stairs, getting in and out of a car, and confidence outdoors.',
        // TODO image: older patient practising walking or a step-up with a physiotherapist after hip replacement.
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1781294269/POST-SURGICAL_REHABILITATION_bc9mdn.webp',
    },
    {
        title: 'Spine surgery (discectomy, decompression, fusion)',
        description:
            'Regular walking and protected movement while the spine heals, then gradually rebuilding back, hip and core strength for sitting, lifting and work. Load limits come from your surgeon.',
        // TODO image: physiotherapist coaching a patient through a gentle core exercise after lower back surgery.
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785802981/CONDITION-SPECIFIC-SPINE_pp2m5e.webp',
    },
    {
        title: 'Rotator cuff repair and shoulder surgery',
        // CLINICAL REVIEW: sling phase with passive or assisted movement before active work, per surgeon protocol.
        description:
            'Protecting the repair through the sling phase with gentle assisted movement, then active movement and strength once your surgeon allows, building toward reaching overhead, lifting and sport.',
        // TODO image: physiotherapist moving a patient's arm through an assisted shoulder exercise after rotator cuff repair.
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785856298/image_3_v2_jx6jky.webp',
    },
    {
        title: 'Fracture fixation (plates, screws, nails)',
        description:
            'Stiff joints above and below the break, muscle lost in the cast or brace, and getting back to full weight on the limb at the pace the bone and your surgeon allow. Common after wrist, ankle and hip fractures.',
        // TODO image: patient working on wrist or ankle movement with a physiotherapist after a fracture operation.
        image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785856300/image-6_z4cmvp.webp',
    },
]

// CLINICAL REVIEW: post-operative warning signs list (infection, DVT/PE, fever, graft or fixation failure).
const redFlags = [
    'A wound that is getting redder, hotter or more swollen, or is leaking pus or fluid',
    'Calf pain, swelling or warmth in one leg, which can be a blood clot',
    'Sudden breathlessness, chest pain or coughing up blood',
    'Fever, chills or feeling generally unwell in the weeks after the operation',
    'Sudden loss of movement, a clunk, or a new giving way in the operated joint',
    'New numbness, weakness, or bladder or bowel changes after spine surgery',
]

const visitSteps = [
    {
        icon: FileText,
        number: '01',
        title: 'Your operation and protocol',
        body: "Which operation, when, and what your surgeon has allowed so far. Bring your discharge papers, the operation notes, your surgeon's rehab protocol or restrictions, and any X-rays.",
    },
    {
        icon: Scan,
        number: '02',
        title: 'Where you are today',
        body: 'Swelling, how far the joint bends and straightens, which muscles are switching on, and how you walk and balance. We also look at the scar and calf for anything your surgeon should see.',
    },
    {
        icon: Hand,
        number: '03',
        title: 'First treatment',
        body: "Gentle hands-on work for stiffness and swelling, and the first exercises for your stage, all inside your surgeon's limits. You and anyone helping you at home leave knowing the routine.",
    },
    {
        icon: Target,
        number: '04',
        title: 'Plan by phase',
        body: 'Which phase you are in, the next milestone (walking without support, stairs, running), how often to come, and what to avoid for now. Explained in plain language.',
    },
]

const methods = [
    {
        icon: Hand,
        title: 'Swelling control and scar mobilisation',
        short: 'Settles swelling and frees up a tight scar.',
        // CLINICAL REVIEW: scar mobilisation only once the wound has fully closed.
        body: 'Gentle hands-on techniques, positioning and movement to settle swelling. Once the wound has fully healed, work on the scar so it stops pulling and limiting movement.',
        light: '#513394',
        dark: '#A78BFA',
    },
    {
        icon: Move,
        title: 'Getting the joint moving again',
        short: 'Bend and straighten, as far as your protocol allows.',
        body: 'Guided exercises and joint mobilisation to get the joint bending and straightening again, progressed only as far and as fast as your protocol allows.',
        light: '#B45309',
        dark: '#FBBF24',
    },
    {
        icon: Dumbbell,
        title: 'Progressive strength work',
        short: 'From switching muscles on to full strength.',
        body: 'From waking up the thigh, hip or shoulder muscles after the operation to proper strength work with weights, step by step, so strong muscle supports the joint.',
        light: '#0369A1',
        dark: '#38BDF8',
    },
    {
        icon: Waves,
        title: 'Aquatic rehab on the aqua treadmill',
        short: 'Walking with less weight through the joint.',
        // CLINICAL REVIEW: water work only after wound closure and surgeon clearance.
        body: 'Once your wound has fully healed and your surgeon agrees, walking in water takes part of your body weight off the joint, so you can practise walking and loading earlier and with less pain.',
        light: '#0D9488',
        dark: '#2DD4BF',
    },
    {
        icon: Footprints,
        title: 'Walking, balance and daily tasks',
        short: 'Off the walker, up the stairs, in and out of the car.',
        body: 'Walking without a limp, coming off the walker or stick, stairs, getting up from a chair and in and out of a car. The things that decide how independent you are at home.',
        light: '#7C3AED',
        dark: '#C4B5FD',
    },
    {
        icon: TrendingUp,
        title: 'Return to sport, gym or work',
        short: 'Running, landing and sport drills, tested step by step.',
        body: 'For ACL, shoulder and active patients: running, jumping, landing and sport-specific drills, with strength and control checks before each step up.',
        light: '#BE185D',
        dark: '#F9A8D4',
    },
]

// CLINICAL REVIEW: phase week ranges and session frequency are typical for joint replacement; ACL runs longer.
const timeline = [
    {
        label: 'Protect and move',
        range: 'Roughly weeks 1 to 6',
        sessions: 'Often 2 to 3 sessions a week',
        body: "Swelling down, the joint moving again, muscles switched back on and walking safely, strictly within your surgeon's restrictions.",
    },
    {
        label: 'Build strength',
        range: 'Roughly weeks 6 to 12',
        sessions: 'Usually 1 to 2 sessions a week',
        body: 'Heavier strength work, balance, stairs and longer walks, with more of the work done at home or in the gym between sessions.',
    },
    {
        label: 'Return to activity',
        range: '3 months onward',
        sessions: 'Spaced out as you progress',
        body: 'Sport, running, gym or demanding work. After ACL surgery this phase usually lasts several more months, with strength checks before return to sport.',
    },
]

const comparisonRows: ComparisonRow[] = [
    { icon: ClipboardCheck, label: 'Starting point', standard: 'A printed exercise sheet at discharge', r3boot: "Assessment against your surgeon's protocol" },
    { icon: TrendingUp, label: 'Progression', standard: 'Same exercises for weeks', r3boot: 'Moved on at each milestone' },
    { icon: Hand, label: 'Stiffness and swelling', standard: 'Ice and wait', r3boot: 'Hands-on work and guided movement' },
    { icon: Waves, label: 'Early loading', standard: 'Land exercise only', r3boot: 'Aqua treadmill when land walking still hurts' },
    { icon: Footprints, label: 'Daily life', standard: 'Not addressed', r3boot: 'Stairs, chair, car and walking without support' },
    { icon: Target, label: 'Goal', standard: 'Signed off at a set date', r3boot: 'Working back to your own activities' },
]

const relatedReads = [
    { href: '/blog/aqua-therapy-after-knee-replacement-acl', tag: 'Aqua rehab', title: 'Aqua therapy after knee replacement or ACL surgery' },
    { href: '/blog/aqua-treadmill-physio-who-its-for', tag: 'Aqua treadmill', title: 'Who aqua treadmill physio is for' },
    { href: '/blog/psychology-of-sports-injury-return-to-sport', tag: 'Return to sport', title: 'The mental side of injury and returning to sport' },
    { href: '/blog/physiotherapist-or-orthopedic-doctor-mumbai', tag: 'Who to see', title: 'Physiotherapist or orthopaedic doctor: who to see' },
]

// Surgery and rehab reviews first, then the rest of the physio reviews.
const SURGERY_MATCH = /surgery|rehab/i
const testimonials = [
    ...physioTestimonials.filter((t) => SURGERY_MATCH.test(t.quote)),
    ...physioTestimonials.filter((t) => !SURGERY_MATCH.test(t.quote)),
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

export default function PostSurgeryPhysiotherapyPage() {
    return (
        <main className="physio-page min-h-screen bg-white dark:bg-[#0A0A0A]">

            {/* ─── DESKTOP HERO ─── */}
            <section className="hidden md:flex flex-col bg-black overflow-hidden pt-20 lg:pt-24" style={{ minHeight: '88vh' }}>
                <div className="relative flex flex-1 flex-col">
                    {/* Portrait photo sits on the right; text stays on solid black at left. */}
                    <div className="absolute inset-y-0 right-0 w-[58%] xl:w-[54%]">
                        <Image
                            src={HERO_IMAGE}
                            alt={HERO_ALT}
                            fill
                            className="object-cover"
                            style={{ objectPosition: '40% center' }}
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
                            <span className="text-white/80">Post-Surgery Rehab</span>
                        </nav>
                        <p className="text-[#A78BFA] text-[11px] font-black tracking-[0.25em] uppercase mb-4">
                            ACL&nbsp;&nbsp;•&nbsp;&nbsp;Knee replacement&nbsp;&nbsp;•&nbsp;&nbsp;Hip replacement&nbsp;&nbsp;•&nbsp;&nbsp;Spine
                        </p>
                        <h1 className="text-5xl lg:text-6xl xl:text-[4.25rem] font-black text-white tracking-tight leading-[1.04] mb-5">
                            <span className="text-[#A78BFA]">Post-Surgery</span> Physiotherapy in Mumbai
                        </h1>
                        <p className="text-[17px] text-white/65 max-w-md leading-relaxed mb-6">
                            Stiff, swollen or unsure what you are allowed to do after ACL, knee, hip or spine surgery?
                        </p>
                        <HeroReviewProof onDark className="mb-7" />
                        <CallbackForm source="post-surgery-hero" concernLabel="Which operation?" concerns={CONCERNS} whatsappHref={WA_HREF} />
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
                        <span className="text-gray-600 dark:text-white/70">Post-Surgery Rehab</span>
                    </nav>
                    <h2 className="text-[2rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-4">
                        <span className="text-[#513394] dark:text-[#A78BFA]">Post-Surgery</span> Physiotherapy in Mumbai
                    </h2>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-7">
                        Stiff, swollen or unsure what you are allowed to do after ACL, knee, hip or spine surgery?
                    </p>
                    {/* Form sits on a dark card so its white-on-dark fields stay readable in light mode. */}
                    <div className="rounded-2xl bg-[#120C22] [&>form]:max-w-none [&>form]:border-0 [&>div]:max-w-none">
                        <CallbackForm source="post-surgery-hero-mobile" concernLabel="Type of surgery" concerns={CONCERNS} whatsappHref={WA_HREF} />
                    </div>
                    <HeroReviewProof className="mt-7 mb-2" />
                </div>
            </section>

            {/* ─── WHAT IS DRIVING IT (accordion): here, the operations we rehab ─── */}
            <PainPointsSection
                points={painPoints}
                eyebrow="SURGERIES WE REHAB //"
                heading="Do I need physiotherapy after surgery"
                intro="For most orthopaedic operations, yes. Surgery repairs or replaces the joint, but it does not rebuild the movement, strength and confidence around it. What rehab focuses on depends on the operation, so here is what recovery looks like for the ones we see most."
            />

            {/* ─── RED FLAGS: post-operative warning signs ─── */}
            <section id="red-flags" className="pt-2 sm:pt-4 pb-12 sm:pb-20 bg-[#F8F9FA] dark:bg-[#080808]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl">
                    {/* Mobile: collapsed, emergency line always visible */}
                    <details className="md:hidden group rounded-2xl border border-amber-200 dark:border-amber-400/25 bg-amber-50 dark:bg-amber-400/[0.06]">
                        <summary className="flex items-start gap-3 p-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                            <AlertTriangle className="w-5 h-5 text-amber-700 dark:text-amber-300 shrink-0 mt-0.5" strokeWidth={2} />
                            <span className="min-w-0 flex-1">
                                <span className="block font-black text-gray-900 dark:text-white text-[15px] leading-snug">
                                    Call your surgeon first if you notice warning signs
                                </span>
                                <span className="block text-[14px] text-gray-600 dark:text-white/60 leading-snug mt-1">
                                    Sudden breathlessness or chest pain after surgery needs emergency care right away.
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
                                We look for these at your first assessment and as you progress, and send you back to your surgeon when
                                something is not right.
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
                                <h3 className="font-black text-gray-900 dark:text-white text-lg mb-2">
                                    Contact your surgeon or get emergency care if you notice any of these
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-4">
                                    {redFlags.map((f) => (
                                        <li key={f} className="flex gap-2.5 text-sm text-gray-700 dark:text-white/75 leading-relaxed">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" aria-hidden />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">
                                    Sudden breathlessness or chest pain after surgery needs emergency care right away, because it can mean a clot
                                    has reached the lungs. We look for every one of these at your first assessment and as you progress, and send you
                                    back to your surgeon when something is not right.
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
                            You leave knowing which phase of recovery you are in, what to do at home this week, and what the next milestone is.
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
                            How does physiotherapy help you <span className="text-[#513394] dark:text-[#8B5CF6]">recover after surgery?</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                            By moving the joint safely early, then rebuilding strength and confidence step by step, inside the limits your surgeon
                            sets. Each phase has a clear goal before the next one starts. The methods are chosen for your operation and stage, so
                            not every patient gets every one.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-10 lg:gap-24 items-start max-w-7xl mx-auto">
                        <div className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden aspect-video md:aspect-[4/5] w-full shadow-xl md:shadow-2xl mb-6 md:mb-0 lg:sticky lg:top-28">
                            {/* Real R3BOOT photo, 1122x1402 (4:5). Mobile crops to 16:9 around both faces and the guiding hand. */}
                            <Image
                                src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1794346678/surgery_2_ztvwjh.webp"
                                alt="R3BOOT physiotherapist guiding a patient through a prone press-up back extension exercise on a mat"
                                fill
                                className="object-cover"
                                style={{ objectPosition: 'center 30%' }}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/25" />
                            <div className="hidden md:block absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                                <p className="text-white text-lg sm:text-xl font-black tracking-tight leading-tight mb-3">
                                    Structured rehab after surgery at R3BOOT
                                </p>
                                <div className="flex flex-col gap-2">
                                    {['Team led by Dr. Hiral Parikh, 15+ years', 'Aqua treadmill in-house for early loading'].map((point) => (
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

            {/* ─── RECOVERY TIMELINE: phased ─── */}
            <section id="timeline" className="py-12 sm:py-20 lg:py-24 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-12">
                        <SectionEyebrow>RECOVERY //</SectionEyebrow>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
                            How many sessions <span className="text-[#513394] dark:text-[#8B5CF6]">will I need?</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                            It depends on the operation and how you heal, so these phases are typical, not a promise. Your surgeon&apos;s protocol
                            sets the pace: we follow it, progress you within it, and review your plan at each milestone.
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
                        Knee pain without an operation?{' '}
                        <Link href="/services/physiotherapy/knee-pain" className="font-bold text-[#513394] dark:text-[#A78BFA] hover:underline">
                            See knee pain physiotherapy →
                        </Link>
                        <span className="mx-2" aria-hidden>
                            ·
                        </span>
                        Curious about water-based rehab?{' '}
                        <Link href="/services/aqua-therapy" className="font-bold text-[#513394] dark:text-[#A78BFA] hover:underline">
                            See aqua therapy →
                        </Link>
                    </p>
                </div>
            </section>

            {/* ─── COMPARISON (desktop only: the 2-column table is too dense on a phone) ─── */}
            <div className="hidden md:block">
                <ComparisonSection
                    rows={comparisonRows}
                    headingLead="Rehab after surgery that"
                    headingAccent="does not stop at walking again."
                    intro="A home exercise sheet can get you started. It cannot tell when you are ready for the next step. This is the difference in how we work."
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
                                <p className="text-sm text-gray-500 dark:text-gray-400">Post-surgery rehab is also available at R3BOOT Lodha Signet.</p>
                            </div>
                        </div>
                        <span className="text-[#513394] dark:text-[#A78BFA] font-black shrink-0 transition-transform group-hover:translate-x-0.5">→</span>
                    </Link>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <FAQSection faqs={postSurgeryFaqs} layout="grid" />

            {/* ─── CTA ─── */}
            <section className="py-14 lg:py-20 px-4 bg-white dark:bg-[#0A0A0A]">
                <div
                    className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden px-6 py-10 sm:px-12 sm:py-14 text-center"
                    style={{ background: 'linear-gradient(135deg, #2a0d6e 0%, #1a0850 55%, #110638 100%)' }}
                >
                    <div className="absolute top-0 right-0 w-56 h-56 rounded-full blur-[70px] opacity-30 pointer-events-none" style={{ background: '#7c3aed' }} />
                    <div className="relative">
                        <h2 className="text-[26px] sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-3">
                            The operation is done. <span className="text-[#A78BFA]">Now rebuild the joint.</span>
                        </h2>
                        <p className="text-white/60 text-[14px] sm:text-lg leading-relaxed mb-7 max-w-xl mx-auto">
                            Book a {PHYSIO_SESSION_MINUTES}-minute assessment and first treatment. Bring your discharge papers and your
                            surgeon&apos;s protocol. No referral needed.
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

            {/* ─── RELATED: one block, two clear jobs. Guides go deeper on rehab; conditions cover pain elsewhere. ─── */}
            <section aria-labelledby="related-heading" className="py-12 sm:py-20 bg-white dark:bg-[#0A0A0A] border-t border-gray-100 dark:border-white/[0.06]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
                    <h2 id="related-heading" className="text-[24px] sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-7 sm:mb-10">
                        Keep reading
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                        <div>
                            <p className="text-[12px] font-black tracking-[0.2em] uppercase text-[#513394] dark:text-[#A78BFA] mb-3">
                                Rehab guides
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
                condition="Recovery after orthopaedic surgery"
                alternateNames={[
                    'Post-operative physiotherapy',
                    'Post-surgery rehabilitation',
                    'ACL reconstruction rehab',
                    'Total knee replacement rehabilitation',
                    'Hip replacement rehabilitation',
                    'Spine surgery rehabilitation',
                    'Rotator cuff repair rehabilitation',
                ]}
                image={HERO_IMAGE}
            />
            <FAQSchema faqs={postSurgeryFaqs} />
            <BreadcrumbSchema
                items={[
                    { name: 'Home', url: '/' },
                    { name: 'Physiotherapy', url: '/services/physiotherapy' },
                    { name: 'Post-Surgery Rehab', url: PAGE_PATH },
                ]}
            />
        </main>
    )
}
