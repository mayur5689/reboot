import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { services } from '@/lib/services'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import { FAQSection } from '@/components/faq-section'
import { athleteScreeningFaqs } from '@/lib/faqs/athlete-screening'
import { HeroTrustBadge, serviceTrustBadges } from '@/components/HeroTrustBadge'

export const metadata: Metadata = {
    title: 'Athlete Screening in Mumbai | R3BOOT Dadar – Full Body & Performance Assessment',
    description: 'A structured, evidence-based athlete screening at R3BOOT: injury history, MSK exam, gait analysis, and a personalised Recovery & Performance Plan. Dadar, Mumbai.',
    keywords: ['athlete screening mumbai', 'gait analysis mumbai', 'sports assessment dadar', 'injury risk screening', 'performance assessment mumbai', 'movement screening near me'],
    alternates: { canonical: '/services/athlete-screening' },
}

const otherServices = services.filter(s => s.slug !== 'athlete-screening').slice(0, 4)

export default function AthleteScreeningPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">

            {/* ─── HERO ─── */}
            <section className="relative min-h-[85vh] md:min-h-[92vh] flex flex-col overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&q=80&w=1600"
                    alt="Athlete Screening Mumbai – R3BOOT Full Body Assessment Dadar"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 35%' }}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

                <div className="container mx-auto px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-end pb-6 pt-28">
                    <Link href="/services" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all mb-8 group">
                        <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#513394] transition-all">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                        <span className="font-bold tracking-wider text-sm">BACK TO SERVICES</span>
                    </Link>

                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 text-white/70 mb-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                            <span className="text-[11px] font-black tracking-[0.3em] uppercase">PERFORMANCE // PREVENTION</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-2 uppercase tracking-tighter leading-[0.9]">
                            Athlete Screening
                        </h1>
                        <p className="text-2xl md:text-4xl font-black text-[#8B5CF6] mb-6 italic tracking-tight">
                            Know Your Body. Own Your Game.
                        </p>
                        <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed font-medium">
                            A full-body, evidence-based assessment that finds your injury risk and your performance ceiling, before either one finds you first, at R3BOOT, Dadar – Mumbai.
                        </p>
                    </div>
                </div>

                <HeroTrustBadge items={serviceTrustBadges['athlete-screening']} className="px-6 lg:px-8" />
            </section>

            {/* ─── CORE DETAILS ─── */}
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                        {/* Left column: description + process */}
                        <div className="lg:col-span-7">
                            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                                EVIDENCE-BASED //
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                                Train Like You Already Know What&rsquo;s <span className="text-[#513394] dark:text-[#8B5CF6]">Coming</span>
                            </h2>
                            <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                                <p>
                                    Every athlete thinks they know their body, until the numbers say otherwise. Athlete Screening is where we stop guessing. We take your sport, your training history, every injury you&rsquo;ve carried, and put your body through a full musculoskeletal exam, a gait analysis, and a battery of special tests that expose exactly where you&rsquo;re strong, where you&rsquo;re compensating, and where you&rsquo;re one hard session away from a setback.
                                </p>
                                <p>
                                    This isn&rsquo;t a generic fitness test. We look at how you move for your sport, specifically. A hip that&rsquo;s fine for a runner can be a liability for a fighter. Every finding gets scored, ranked by risk, and turned into a plan you can actually train with, not a printout you file away.
                                </p>
                                <p>
                                    <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase block mb-2">SCOPE //</span>
                                    We start every screening with a PAR-Q clearance and full medical history intake. If anything needs a doctor&rsquo;s sign-off before we put you through a test, we&rsquo;ll tell you before we start, not after.
                                </p>
                            </div>

                            {/* Process Steps */}
                            <div className="mt-20">
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-4">
                                    <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                                    THE PROCESS
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { title: "History & Goals", description: "Sports background, training load, injury history, and where you want to be." },
                                        { title: "MSK & Movement Exam", description: "Range of motion, flexibility, and gait analysed joint by joint, left versus right." },
                                        { title: "Special Tests", description: "Balance, strength, and sport-specific tests that expose what you can't feel yet." },
                                        { title: "Risk Summary & Plan", description: "A clinician-built report on your risk factors, with a program to close the gaps." },
                                    ].map((step, idx) => (
                                        <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden">
                                            <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 dark:text-white/5 group-hover:text-[#513394]/5 dark:group-hover:text-[#8B5CF6]/5 transition-colors">
                                                {idx + 1}
                                            </div>
                                            <div className="relative z-10">
                                                <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-6 group-hover:bg-[#513394] dark:group-hover:bg-[#8B5CF6] group-hover:text-white transition-all">
                                                    0{idx + 1}
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h4>
                                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right column: sticky benefits card */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32">
                            <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#513394]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute top-6 right-6 bg-[#8B5CF6] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
                                    Full Body Report
                                </div>
                                <h3 className="text-2xl font-black mb-8 tracking-wide flex items-center gap-3">
                                    <div className="w-2 h-8 bg-[#513394]" />
                                    WHAT YOU GET //
                                </h3>
                                <ul className="space-y-6 mb-12">
                                    {[
                                        "Full injury risk profile before it becomes an injury",
                                        "Gait analysis, mobility, and stability mapped in one session",
                                        "Personalised Recovery & Performance Plan",
                                        "Sport-specific evaluation, not a generic checklist",
                                        "Baseline benchmarks to track progress over time",
                                        "Direct line into R3BOOT's recovery and training programs",
                                    ].map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-4 group/item">
                                            <div className="w-6 h-6 rounded-full bg-[#513394] flex items-center justify-center shrink-0 mt-1 group-hover/item:scale-110 transition-transform">
                                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-white/80 font-medium leading-snug group-hover/item:text-white transition-colors">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="tel:+919702368612"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center bg-[#513394] text-white font-black px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-lg group-hover:bg-[#603eb0]"
                                >
                                    Call to Book
                                </a>
                                <p className="text-center text-white/30 text-xs mt-6 font-bold tracking-widest">
                                    AVAILABLE 7 DAYS A WEEK
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── MSK & MOVEMENT ASSESSMENT SECTION ─── */}
            <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

                        {/* Left: Image */}
                        <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1200"
                                alt="Musculoskeletal exam and movement assessment – R3BOOT Athlete Screening"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                                    MSK & MOBILITY //
                                </span>
                                <p className="text-white text-xl font-black tracking-tight leading-tight">
                                    Hands-On Exam at R3BOOT Dadar
                                </p>
                            </div>
                        </div>

                        {/* Right: Benefits list */}
                        <div>
                            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                                MSK & MOBILITY //
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                                We Test Every Joint Like It&rsquo;s <span className="text-[#513394] dark:text-[#8B5CF6]">Game Day</span>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                                You can&rsquo;t fix what you don&rsquo;t measure. Before we talk about performance, we go joint by joint, side by side, and find out exactly where your body is winning and where it&rsquo;s quietly losing ground.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Joint-by-Joint Range of Motion",
                                        body: "Cervical, shoulder, elbow, wrist, hip, knee, ankle, we take every major joint through its full range and log it left versus right. Asymmetry is where injuries start, and it's the first thing most athletes never get checked."
                                    },
                                    {
                                        title: "Flexibility and Calf Length",
                                        body: "Tight hips or a short calf don't just limit your range, they change how force moves through your entire kinetic chain when you sprint, jump, or lift. We measure it, we don't guess it."
                                    },
                                    {
                                        title: "Ankle Dorsiflexion, Knee-to-Wall",
                                        body: "Limited ankle mobility is one of the most underrated causes of knee and lower back load. If your ankle can't bend, something upstream in the chain pays the price for it."
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

            {/* ─── GAIT & PERFORMANCE ANALYSIS SECTION ─── */}
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

                        {/* Left: Benefits list */}
                        <div className="order-2 lg:order-1">
                            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                                GAIT & PERFORMANCE //
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                                How You Move Is the <span className="text-[#513394] dark:text-[#8B5CF6]">Whole Story</span>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                                Strength numbers don&rsquo;t lie, but they don&rsquo;t tell the whole story either. We watch how you actually move, under load and on your own two feet, because that&rsquo;s where compensations hide from every other test.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Foot Strike, Step Width, Trunk Lean",
                                        body: "We watch how your foot lands, how wide your stride is, and how your trunk leans under load. Small faults here compound over thousands of strides into real injury risk."
                                    },
                                    {
                                        title: "Balance and Single-Leg Control",
                                        body: "Single leg balance, single leg hop, single leg sit-to-stand. If you can't control your body on one leg, you can't trust it in a game. We test both sides and compare."
                                    },
                                    {
                                        title: "Coordination Test Battery",
                                        body: "Wall throws, two-hand ball bounces, T-jump tests. Reaction and coordination are performance variables most screenings skip entirely. We don't."
                                    },
                                    {
                                        title: "Sport-Specific Special Tests",
                                        body: "From the Overhead Squat to the Star Excursion Balance Test, every special test we run is chosen because it predicts something real about your sport, not because it looks good on a form."
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

                        {/* Right: Image */}
                        <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl order-1 lg:order-2">
                            <Image
                                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=1200"
                                alt="Gait analysis and running assessment – R3BOOT Athlete Screening"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                                    GAIT & PERFORMANCE //
                                </span>
                                <p className="text-white text-xl font-black tracking-tight leading-tight">
                                    Gait Analysis at R3BOOT Dadar
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ─── PREVENTION + PERFORMANCE SECTION ─── */}
            <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                                PREVENTION AND PERFORMANCE //
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
                                One Screening, <span className="text-[#513394] dark:text-[#8B5CF6]">Two Wins</span>
                            </h2>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-center max-w-3xl mx-auto">
                            Most places will screen you for injury, or test you for performance. We built R3BOOT to do both under one roof, because the truth is they were never separate problems. The compensation costing you power is usually the same one putting you at risk.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "The Compensation That's Costing You Both Ways",
                                    body: "A movement fault doesn't just raise your injury risk, it leaks power. An athlete compensating through the hip is losing output on every stride and loading a joint that was never built to take it. Fix the pattern, and you're not choosing between staying healthy and performing better, you get both."
                                },
                                {
                                    title: "A Baseline You Can Actually Train Against",
                                    body: "You can't chase progress you never measured. Your screening becomes your baseline, strength, mobility, balance, coordination, so every training block afterward has a number to beat, not just a feeling to chase."
                                },
                                {
                                    title: "One Report, One Plan, One Team",
                                    body: "Your risk summary comes with real recommendations, not just red flags. If you need physiotherapy, clinical pilates, or recovery work to close a gap we found, it happens under the same roof, with the same team that ran your screening."
                                },
                                {
                                    title: "Built for Return-to-Sport, Not Just Return-to-Gym",
                                    body: "Coming back from an injury or a long layoff is a different job than general fitness. We set a reassessment date, track your program modifications, and make the call on when you're actually ready to load up again, not just when you feel ready."
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500">
                                    <div className="flex gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black shrink-0 text-base group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
                                            0{idx + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mt-12 leading-relaxed text-center">
                            You don&rsquo;t need to wait for pain to find out how your body moves. Get screened, get the report, get the plan, and go back to training with a clear read on exactly what you&rsquo;re working with.
                        </p>
                    </div>
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
                        {otherServices.map((service, index) => (
                            <Link
                                key={index}
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

            {/* Related Guide: internal link to athlete screening SEO landing page */}
            <section className="py-12 bg-white dark:bg-[#0A0A0A]">
                <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
                    <Link href="/athlete-screening-mumbai" className="group flex items-center justify-between p-6 bg-gray-50 dark:bg-white/5 rounded-[2rem] border border-gray-100 dark:border-white/10 hover:border-[#513394]/40 transition-all">
                        <div>
                            <p className="text-xs font-black tracking-widest text-[#513394] uppercase mb-1">Local Guide</p>
                            <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-[#513394] transition-colors">Athlete Screening in Mumbai, Full Guide</h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 inline-block">What to expect, the team, and how to book →</span>
                        </div>
                        <svg className="w-6 h-6 text-[#513394] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </Link>
                </div>
            </section>

            <FAQSection faqs={athleteScreeningFaqs} />
            <FAQSchema faqs={athleteScreeningFaqs} />
            <ServiceSchema
                serviceName="Athlete Screening"
                description="A structured, evidence-based athlete screening at R3BOOT Dadar, Mumbai: injury history, MSK exam, gait analysis, and a personalised Recovery & Performance Plan."
                serviceUrl="https://r3boot.in/services/athlete-screening"
            />
        </main>
    )
}
