import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { services } from '@/lib/services'
import PhysiotherapyTeam from '@/components/PhysiotherapyTeam'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import { clinicalPilatesMumbaiFaqs } from '@/lib/faqs/clinical-pilates-mumbai'

export const metadata: Metadata = {
    title: 'Clinical Pilates in Mumbai | Spine & Core Rehab at R3BOOT Dadar',
    description:
        'Clinical Pilates by certified physiotherapists at R3BOOT Dadar, Mumbai. Reformer and mat-based programs for back pain, scoliosis, post-surgery rehab, and athletic performance.',
    keywords: [
        'clinical pilates mumbai',
        'clinical pilates dadar',
        'physiotherapy pilates mumbai',
        'reformer pilates mumbai',
        'pilates for back pain mumbai',
        'clinical pilates rehabilitation',
    ],
    alternates: { canonical: '/clinical-pilates-mumbai' },
}

const otherServices = services.filter(s => s.slug !== 'clinical-pilates').slice(0, 4)

export default function ClinicalPilatesPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">

            {/* ─── HERO ─── */}
            <section className="relative h-[70vh] flex items-end overflow-hidden">
                <Image
                    src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793706/Clinical_Pillates_Image_2_jc05pa.png"
                    alt="Clinical Pilates Mumbai – R3BOOT Physiotherapist-Led Pilates Dadar"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="container mx-auto px-6 lg:px-8 relative z-10 pb-20">
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
                            <span className="text-[11px] font-black tracking-[0.3em] uppercase">FITNESS // REHABILITATION</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-2 uppercase tracking-tighter leading-[0.9]">
                            Clinical Pilates
                        </h1>
                        <p className="text-2xl md:text-4xl font-black text-[#8B5CF6] mb-8 italic tracking-tight">
                            Movement Prescribed. Not Performed.
                        </p>
                        <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed font-medium">
                            Physiotherapist-led movement programs for back pain, scoliosis, post-surgery rehab, and sports performance at R3BOOT, Dadar – Mumbai.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── CORE DETAILS ─── */}
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                        {/* Left column */}
                        <div className="lg:col-span-7">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                                A Fitness Class Follows a Schedule. <br />
                                <span className="text-[#513394] dark:text-[#8B5CF6]">Clinical Pilates Follows Your Diagnosis.</span>
                            </h2>
                            <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                                <p>
                                    Most Pilates in Mumbai is taught in group classes by instructors trained in fitness methodology. Clinical Pilates at R3BOOT is delivered exclusively by qualified physiotherapists, starting with a formal assessment and building a program around your individual diagnosis — not a class schedule.
                                </p>
                                <p>
                                    The distinction matters most when you are managing a condition: lower back pain that has not responded to general classes, post-surgical rehabilitation that requires graduated loading, scoliosis that needs asymmetry-specific exercise prescription, or athletic performance that demands movement quality above and beyond general fitness.
                                </p>
                            </div>

                            {/* Process */}
                            <div className="mt-20">
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-4">
                                    <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                                    THE PROCESS
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: 'Assessment & Goal Setting',
                                            description: 'Your physiotherapist evaluates posture, movement patterns, strength deficits, and pain triggers. Your training background, sport, or profession shapes the clinical goals before a single exercise is prescribed.',
                                        },
                                        {
                                            title: 'Program Prescription',
                                            description: 'Exercises are prescribed — not adapted from a class. Every movement targets a specific clinical deficit identified in your assessment: a weak deep stabiliser, a restricted segment, a loaded compensation pattern.',
                                        },
                                        {
                                            title: 'Reformer or Mat Selection',
                                            description: 'Equipment is chosen for clinical reasons. Reformer spring resistance is used for graduated loading in post-surgical rehab or when bodyweight exercises are not yet appropriate. Mat is used for core stabilisation and functional movement retraining.',
                                        },
                                        {
                                            title: 'Integration with Physiotherapy',
                                            description: 'Where needed, clinical Pilates is combined with manual therapy, dry needling, or sports massage in the same session — addressing the root cause structurally and the movement pattern clinically at the same time.',
                                        },
                                        {
                                            title: 'Re-Assessment and Progression',
                                            description: 'Your program advances based on objective clinical markers — not how you feel on the day. Regular re-assessment ensures exercises match your current capacity and continue driving progress.',
                                        },
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

                        {/* Right sticky card */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32">
                            <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#513394]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <h3 className="text-2xl font-black mb-8 tracking-wide flex items-center gap-3">
                                    <div className="w-2 h-8 bg-[#513394]" />
                                    KEY BENEFITS //
                                </h3>
                                <ul className="space-y-6 mb-12">
                                    {[
                                        'Strengthens deep spinal stabilisers',
                                        'Restores movement quality after injury',
                                        'Reduces chronic and recurring back pain',
                                        'Improves postural control and alignment',
                                        'Prevents injury in athletes and active individuals',
                                        'Supports return-to-sport after surgery',
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── METHODOLOGY (image left, techniques right) ─── */}
            <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

                        <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
                            <Image
                                src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793759/Clinical_Pillates_Image_4_rluyr1.png"
                                alt="Reformer Clinical Pilates – R3BOOT Mumbai physiotherapist-led"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                                    REFORMER + MAT //
                                </span>
                                <p className="text-white text-xl font-black tracking-tight leading-tight">
                                    Dr. Vaishali Vijay Rauniyar — Dry Needling & Aquatic Rehab Certified
                                </p>
                            </div>
                        </div>

                        <div>
                            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                                METHODOLOGY //
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                                How We Deliver <span className="text-[#513394] dark:text-[#8B5CF6]">Clinical Pilates at R3BOOT</span>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                                Clinical Pilates methodology at R3BOOT is built on physiotherapy principles, not fitness instruction. Equipment and exercise selection are clinical decisions made per individual — not class preferences.
                            </p>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: 'Reformer-Based Clinical Pilates',
                                        body: 'Spring resistance on the reformer allows precise loading graduated to your clinical tolerance. Used widely in post-surgical rehab where bodyweight is too heavy, in early-stage back pain programs, and for sports performance work requiring resistance-based core loading.',
                                    },
                                    {
                                        title: 'Mat-Based Clinical Pilates',
                                        body: 'Bodyweight precision work targeting deep stabilisers of the spine and pelvis. Core to the management of lower back pain, scoliosis, and posture correction programs. Exercises are taught for home practice to extend clinical benefit between sessions.',
                                    },
                                    {
                                        title: 'Dry Needling Integration',
                                        body: 'Where muscle inhibition or trigger points are preventing correct activation, dry needling is used within the same session to restore normal neuromuscular function before Pilates exercise. Dr. Vaishali Vijay Rauniyar is certified in dry needling.',
                                    },
                                    {
                                        title: 'Sport-Specific Movement Retraining',
                                        body: 'For athletes, clinical Pilates goes beyond core stability — it trains the movement patterns specific to your sport. Batsmen with lower back asymmetry, runners with hip drop, swimmers with shoulder instability. The program is built around your movement demands.',
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

            {/* ─── WHO IS IT FOR ─── */}
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                            CONDITION-SPECIFIC //
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
                            Built for Your <span className="text-[#513394] dark:text-[#8B5CF6]">Condition & Goals</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            {
                                label: 'Back Pain & Spinal Conditions',
                                tag: 'SPINE //',
                                description: 'Chronic lower back pain, disc problems, facet joint irritation, and scoliosis. Clinical Pilates is the most evidence-supported conservative intervention for spinal pain — when it is correctly prescribed by a physiotherapist.',
                                image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793697/Clinical_Pillates_Image_3_pil8g7.jpg',
                                points: ['Lower back pain', 'Scoliosis management', 'Disc rehabilitation'],
                            },
                            {
                                label: 'Post-Surgical Rehabilitation',
                                tag: 'POST-SURGERY //',
                                description: 'Following spinal surgery, ACL reconstruction, hip or knee replacement, or abdominal procedures. Graduated reformer loading allows safe return to movement before bodyweight exercise is appropriate.',
                                image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793759/Clinical_Pillates_Image_4_rluyr1.png',
                                points: ['Spinal surgery recovery', 'ACL & knee rehab', 'Hip & shoulder replacement'],
                            },
                            {
                                label: 'Athletes & Sports Performance',
                                tag: 'SPORTS //',
                                description: 'Runners with hip drop, cricketers with lower back asymmetry, swimmers with shoulder instability. Clinical Pilates builds the foundational movement quality that reduces injury risk and improves athletic output.',
                                image: '/images/service/Services_image/Clinical Pilates-2.webp',
                                points: ['Core stability for sport', 'Movement retraining', 'Injury prevention'],
                            },
                            {
                                label: 'Posture, Pregnancy & Women\'s Health',
                                tag: 'WOMEN\'S HEALTH //',
                                description: 'Desk workers with postural pain, pregnant women managing pelvic girdle discomfort, and postnatal recovery including diastasis recti and pelvic floor rehabilitation.',
                                image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793706/Clinical_Pillates_Image_2_jc05pa.png',
                                points: ['Posture correction', 'Prenatal / postnatal', 'Pelvic floor rehab'],
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="group relative rounded-[2.5rem] overflow-hidden aspect-[16/10] shadow-xl hover:shadow-2xl transition-all duration-500"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.label}
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
                                        {item.label}
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

            {/* ─── TEAM ─── */}
            <PhysiotherapyTeam />

            {/* ─── FAQ ─── */}
            <FAQSection faqs={clinicalPilatesMumbaiFaqs} />

            {/* ─── CTA ─── */}
            <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                            Move Better. <span className="text-white/50">Pain Less.</span>
                        </h2>
                        <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
                            Clinical Pilates at R3BOOT starts with an assessment — not a class signup. Your first session tells us what you need. Everything after is built around that.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a
                                href="tel:+919702368612"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-white text-[#513394] font-black px-10 py-5 rounded-full transition-all hover:scale-105 shadow-2xl text-lg tracking-wide"
                            >
                                Call to Book
                            </a>
                            <a
                                href="https://wa.me/919702368612"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="w-full sm:w-auto border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full transition-all hover:bg-white/10 text-lg tracking-wide"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                        <p className="text-white/40 mt-8 font-bold tracking-widest text-sm">DADAR, MUMBAI</p>
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

            {/* ─── LOCAL GUIDE LINK ─── */}
            <section className="py-16 bg-white dark:bg-[#0A0A0A]">
                <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
                    <Link href="/clinical-pilates-mumbai" className="group flex items-center justify-between p-6 bg-gray-50 dark:bg-white/5 rounded-[2rem] border border-gray-100 dark:border-white/10 hover:border-[#513394]/40 transition-all">
                        <div>
                            <p className="text-xs font-black tracking-widest text-[#513394] uppercase mb-1">Mumbai Guide</p>
                            <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-[#513394] transition-colors">Clinical Pilates in Mumbai — Pricing, Reformer & What to Expect</h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 inline-block">Full local guide with session fees →</span>
                        </div>
                        <svg className="w-6 h-6 text-[#513394] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </Link>
                </div>
            </section>

            <ServiceSchema
                serviceName="Clinical Pilates in Mumbai"
                description="Physiotherapist-led clinical Pilates at R3BOOT Dadar, Mumbai. Reformer and mat-based programs for back pain, scoliosis, post-surgery rehab, and sports performance."
                serviceUrl="https://r3boot.in/services/clinical-pilates"
            />
            <FAQSchema faqs={clinicalPilatesMumbaiFaqs} />
        </main>
    )
}
