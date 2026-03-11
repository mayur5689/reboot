import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { services } from '@/lib/services'
import SportsMassageTeam from '@/components/SportsMassageTeam'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import { sportsMassageFaqs } from '@/lib/faqs/sports-massage'

export const metadata: Metadata = {
    title: 'Sports Massage in Mumbai | R3BOOT Dadar',
    description: 'Clinical sports massage in Mumbai by certified specialists. Serving athletes in Dadar, Andheri, Thane & Bandra. Book at R3BOOT Recovery Center.',
    keywords: ['sports massage mumbai', 'sports massage dadar', 'deep tissue sports massage mumbai', 'sports massage therapist mumbai', 'sports recovery massage', 'sports massage near me mumbai'],
}

const otherServices = services.filter(s => s.slug !== 'sports-massage').slice(0, 4)

export default function SportsMassagePage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">

            {/* ─── HERO (matches slug template exactly) ─── */}
            <section className="relative h-[70vh] flex items-end overflow-hidden">
                <Image
                    src="/images/service/Services_image/Sports Massage_1.webp"
                    alt="Sports Massage Mumbai – R3BOOT Recovery Center"
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
                            <span className="text-[11px] font-black tracking-[0.3em] uppercase">MASSAGE // EXCELLENCE</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-2 uppercase tracking-tighter leading-[0.9]">
                            Sports Massage
                        </h1>
                        <p className="text-2xl md:text-4xl font-black text-[#8B5CF6] mb-8 italic tracking-tight">
                            Clinical Recovery, Not Spa Relaxation
                        </p>
                        <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed font-medium">
                            Performance-driven massage by certified specialists at R3BOOT, Dadar – Mumbai.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── CORE DETAILS (matches slug template layout exactly) ─── */}
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                        {/* Left column: description + process */}
                        <div className="lg:col-span-7">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                                Complete Recovery <br />
                                <span className="text-[#513394] dark:text-[#8B5CF6]">Built Around You.</span>
                            </h2>
                            <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                                <p>
                                    Most sports massage in Mumbai is performed by spa therapists trained in general relaxation techniques.
                                    At R3BOOT, it is performed by a certified sports massage specialist with hands-on experience across 1,000+ athletes and active individuals.
                                    The difference is not subtle — it is the difference between feeling temporarily relaxed and actually recovering.
                                </p>
                                <p>
                                    Located in Dadar, central Mumbai, accessible from Andheri, Thane, Bandra, and Navi Mumbai, R3BOOT is an integrated performance recovery center.
                                    Sports massage here is one part of a structured recovery ecosystem that includes physiotherapy, ice bath therapy, red light therapy, and compression recovery.
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
                                        { title: "Pre-Session Assessment", description: "Therapist reviews training load, pain location, sleep, and hydration. A movement screen sets the session goal before any bodywork begins." },
                                        { title: "Warm-Up Phase", description: "Light effleurage and rhythmic strokes increase tissue temperature and prepare the nervous system for targeted work." },
                                        { title: "Targeted Treatment", description: "Deep tissue, trigger point therapy, and myofascial release based on your assessment — not a generic routine." },
                                        { title: "Sports Massage Cupping", description: "Cupping is applied where indicated to improve blood flow, reduce tension, and support recovery — integrated into your session when assessment calls for it." },
                                        { title: "Activation & Advice", description: "Assisted stretching, PNF, and muscle activation finish each session. Recovery protocol and home drills are given before you leave." },
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
                                <h3 className="text-2xl font-black mb-8 tracking-wide flex items-center gap-3">
                                    <div className="w-2 h-8 bg-[#513394]" />
                                    KEY BENEFITS //
                                </h3>
                                <ul className="space-y-6 mb-12">
                                    {[
                                        "Improved flexibility & range of motion",
                                        "Injury prevention & maintenance",
                                        "Enhanced athletic performance",
                                        "Muscle tension & adhesion relief",
                                        "Faster recovery between training sessions",
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
                                    href="https://www.practo.com/mumbai/clinic/r3-boot-spoorts-therapy-dadar-east/doctors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center bg-[#513394] text-white font-black px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-lg group-hover:bg-[#603eb0]"
                                >
                                    Book This Service
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── TECHNIQUES SECTION ─── */}
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

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
                                    Certified Level 1 & 2 — Akshay Anil Nalawde
                                </p>
                            </div>
                        </div>

                        {/* Right: Techniques list */}
                        <div>
                            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                                METHODOLOGY //
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                                Techniques Used in Sports Massage at <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT</span>
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
                                        body: "Addresses localised knots and referred pain patterns. A common example: calf trigger points that present as heel pain. Releasing the source — not just treating the symptom — is what produces lasting results."
                                    },
                                    {
                                        title: "Myofascial Release",
                                        body: "Targets the fascial system surrounding muscles. Restrictions here cause postural issues and limit range of motion in ways deep tissue work alone cannot resolve — especially relevant for desk workers and athletes with repetitive movement demands."
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

            {/* ─── COMPARISON TABLE ─── */}
            <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                                CLINICAL VS SPA //
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
                                What Makes R3BOOT <span className="text-[#513394] dark:text-[#8B5CF6]">Different?</span>
                            </h2>
                        </div>

                        <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-white/10">
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

            {/* ─── WOMEN'S SPORTS MASSAGE SECTION ─── */}
            <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

                        {/* Left: Content */}
                        <div>
                            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                                FOR FEMALE ATHLETES //
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                                Sports Massage for Women – <span className="text-[#513394] dark:text-[#8B5CF6]">With Vaishali Sonar</span>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-4">
                                Most sports massage in Mumbai is not adapted for female physiology. Pressure, technique selection, and recovery protocols built around male athletes do not automatically translate to women — especially those managing training load, hormonal cycles, or sport-specific injury patterns.
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
                                    Vaishali Sonar — Cupping Certified Level 1 & 2
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ─── WHO IS IT FOR ─── */}
            <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                            SPORT-SPECIFIC //
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
                            Built for Your <span className="text-[#513394] dark:text-[#8B5CF6]">Sport & Lifestyle</span>
                        </h2>
                    </div>

                    {/* 2x2 grid on desktop — image-background cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            {
                                sport: "Runners",
                                tag: "RUNNING //",
                                description: "Calf tightness, plantar fascia pain, hamstring overload, and hip flexor stiffness — especially common in Mumbai runners who sit at a desk all day before evening runs.",
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
                                {/* Background image */}
                                <Image
                                    src={item.image}
                                    alt={item.sport}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Base gradient — always visible */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                                {/* Hover tint */}
                                <div className="absolute inset-0 bg-[#513394]/0 group-hover:bg-[#513394]/30 transition-all duration-500" />

                                {/* Content */}
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
                                    {/* Bullet chips */}
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

            {/* ─── TEAM SECTION ─── */}
            <SportsMassageTeam />

            {/* ─── FAQ ─── */}
            <FAQSection faqs={sportsMassageFaqs} />

            {/* ─── FINAL CTA ─── */}
            <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                            Stop Training on a Body That Needs <span className="text-white/50">Maintenance</span>
                        </h2>
                        <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
                            Sports massage at R3BOOT is clinical, not cosmetic. Performed by specialists who understand training load, movement mechanics, and what your body actually needs.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a
                                href="https://www.practo.com/mumbai/clinic/r3-boot-spoorts-therapy-dadar-east/doctors"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-white text-[#513394] font-black px-10 py-5 rounded-full transition-all hover:scale-105 shadow-2xl text-lg tracking-wide"
                            >
                                Book Your Session
                            </a>
                            <a
                                href="https://wa.me/919702368612"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full transition-all hover:bg-white/10 text-lg tracking-wide"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                        <p className="text-white/40 mt-8 font-bold tracking-widest text-sm">
                            DADAR, MUMBAI
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── OTHER SERVICES (matches slug template exactly) ─── */}
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

            <ServiceSchema
                serviceName="Sports Massage in Mumbai"
                description="Clinical sports massage in Mumbai by certified specialists. Serving athletes in Dadar, Andheri, Thane & Bandra. Book at R3BOOT Recovery Center."
                serviceUrl="https://r3boot.in/services/sports-massage"
            />
            <FAQSchema faqs={sportsMassageFaqs} />
        </main>
    )
}
