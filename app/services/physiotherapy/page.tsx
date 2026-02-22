import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { services } from '@/lib/services'
import PhysiotherapyTeam from '@/components/PhysiotherapyTeam'
import PhysiotherapyFAQ from '@/components/PhysiotherapyFAQ'

export const metadata: Metadata = {
    title: 'Physiotherapy in Mumbai | R3BOOT Dadar – Clinical Care',
    description: 'Clinical physiotherapy in Mumbai by certified specialists. Back pain, knee pain, sports injuries, post-surgery rehab. Dadar location, accessible from Andheri, Thane & Bandra.',
    keywords: ['physiotherapy clinic in mumbai', 'physiotherapy dadar', 'sports physiotherapy mumbai', 'physiotherapy for back pain mumbai', 'physiotherapy for knee pain mumbai', 'physiotherapy near me mumbai'],
}

const otherServices = services.filter(s => s.slug !== 'physiotherapy').slice(0, 4)

export default function PhysiotherapyPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">

            {/* ─── HERO ─── */}
            <section className="relative h-[70vh] flex items-end overflow-hidden">
                <Image
                    src="/images/service/Services_image/Physiotherapy_1.webp"
                    alt="Physiotherapy Mumbai – R3BOOT Recovery Center Dadar"
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
                            <span className="text-[11px] font-black tracking-[0.3em] uppercase">RECOVERY // EXCELLENCE</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-2 uppercase tracking-tighter leading-[0.9]">
                            Physiotherapy
                        </h1>
                        <p className="text-2xl md:text-4xl font-black text-[#8B5CF6] mb-8 italic tracking-tight">
                            Evidence-Based. Results-Focused.
                        </p>
                        <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed font-medium">
                            Clinical physiotherapy by certified specialists at R3BOOT, Dadar – Mumbai.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── CORE DETAILS ─── */}
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                        {/* Left column: description + process */}
                        <div className="lg:col-span-7">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                                Root Cause Treatment. <br />
                                <span className="text-[#513394] dark:text-[#8B5CF6]">Not Symptom Management.</span>
                            </h2>
                            <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                                <p>
                                    Most physiotherapy in Mumbai is reactive. You arrive in pain, get treated for the symptom, and return when it comes back.
                                    At R3BOOT, physiotherapy is built around a different philosophy. Every session begins with understanding why the problem exists — not just where it hurts. Treatment is structured, progressive, and connected to your actual goals.
                                </p>
                                <p>
                                    Located in Dadar, central Mumbai, R3BOOT is an integrated performance recovery center. Our physiotherapy team works directly alongside sports massage therapists, recovery specialists, and rehabilitation equipment to deliver outcomes that a standalone clinic cannot replicate.
                                </p>
                            </div>

                            {/* Process Steps */}
                            <div className="mt-20">
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-4">
                                    <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                                    HOW SESSIONS WORK
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { title: "Initial Assessment", description: "30–45 minutes. Comprehensive review of your history, movement patterns, strength, flexibility, and the specific mechanisms contributing to your symptoms. No treatment is applied until the assessment is complete." },
                                        { title: "Treatment Plan", description: "Based on the assessment, a structured plan is built with clear goals, expected timelines, and session frequency. You leave the first session knowing exactly what the problem is and what the path forward looks like." },
                                        { title: "Treatment Sessions", description: "Each session combines hands-on treatment with progressive exercise work. Techniques are selected and adjusted based on how you are responding — sessions evolve as your condition improves." },
                                        { title: "Integration with Recovery", description: "For athletes and high-load patients, physiotherapy sessions can be combined with sports massage, ice bath, and red light therapy within the same visit — not available at a standalone clinic." },
                                        { title: "Discharge & Maintenance", description: "When clinical goals are met, you leave with a clear maintenance program and an understanding of what patterns to monitor. The goal is independence from treatment, not ongoing dependency on sessions." },
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
                                        "Resolve Pain That Won't Go Away",
                                        "Return to Sport Faster",
                                        "Recover Right After Surgery",
                                        "Move Freely Again",
                                        "Stop Recurring Injuries",
                                        "Stay Functional Through Heavy Training",
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
            <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

                        {/* Left: Image */}
                        <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
                            <Image
                                src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1771760500/Physiotherepy_Image_jz7ubj.webp"
                                alt="Manual Therapy Physiotherapy – R3BOOT Dadar Mumbai"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                                    MANUAL THERAPY //
                                </span>
                                <p className="text-white text-xl font-black tracking-tight leading-tight">
                                    Dr. Nirmal Solanki — 20+ Years Clinical Experience
                                </p>
                            </div>
                        </div>

                        {/* Right: Techniques list */}
                        <div>
                            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                                METHODOLOGY //
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                                Treatment Methods at <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT</span>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                                Techniques are selected based on your assessment findings — not a default protocol applied to every patient.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Manual Therapy",
                                        body: "Joint mobilisation, manipulation, and soft tissue work. Nirmal's advanced osteopathic training allows application at a clinical level beyond standard physiotherapy practice — effective for back pain, neck stiffness, joint restrictions, and post-surgical recovery."
                                    },
                                    {
                                        title: "Dry Needling",
                                        body: "Thin needles inserted into trigger points and dysfunctional muscle tissue to release tension, reduce referred pain, and restore normal neuromuscular function. Vaishali is certified and applies it as part of a broader plan, not as a standalone intervention."
                                    },
                                    {
                                        title: "Aquatic Rehabilitation",
                                        body: "Exercise-based rehabilitation in water. Ideal for post-surgical patients, individuals with joint pain who cannot tolerate land-based exercise, and those requiring progressive functional movement retraining. Vaishali holds certification in aquatic rehabilitation."
                                    },
                                    {
                                        title: "Exercise Therapy & Progressive Rehab",
                                        body: "Structured, progressive programs built around your specific diagnosis and functional goals. Not generic home exercise sheets. Programs are monitored and adjusted across sessions based on your assessment findings and treatment response."
                                    },
                                    {
                                        title: "Postural & Movement Assessment",
                                        body: "Comprehensive analysis of movement patterns, load distribution, and compensatory habits. The foundation of all treatment at R3BOOT — understanding why a problem exists is the only way to resolve it structurally."
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
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                                CLINICAL VS STANDARD //
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
                                        <th className="px-6 py-5 text-left font-black text-sm tracking-wide">R3BOOT Physiotherapy</th>
                                        <th className="px-6 py-5 text-left font-black text-sm tracking-wide">Standard Physio Clinic</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-[#1A1A1A] divide-y divide-gray-100 dark:divide-white/5">
                                    {[
                                        ["Approach", "Root cause, progressive programming", "Session-by-session symptom relief"],
                                        ["Team", "Specialists with advanced certifications", "General physiotherapists"],
                                        ["Integration", "Physio + massage + recovery modalities", "Physio only"],
                                        ["Techniques", "Manual therapy, dry needling, aquatic rehab, electrotherapy", "Standard exercise and manual"],
                                        ["Setting", "Integrated recovery center", "Standalone clinic"],
                                        ["Goal", "Sustainable long-term outcomes", "Short-term pain relief"],
                                    ].map(([label, r3, std], idx) => (
                                        <tr key={idx}>
                                            <td className="px-6 py-4 font-bold text-gray-900 dark:text-white text-sm">{label}</td>
                                            <td className={`px-6 py-4 text-sm ${idx === 5 ? 'text-[#513394] dark:text-[#8B5CF6] font-bold' : 'text-gray-700 dark:text-gray-300'}`}>{r3}</td>
                                            <td className="px-6 py-4 text-gray-400 text-sm">{std}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CONDITIONS WE TREAT ─── */}
            <section className="py-24 lg:py-32 bg-white dark:bg-[#0A0A0A]">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                            SPECIALIZATIONS //
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
                            Conditions We <span className="text-[#513394] dark:text-[#8B5CF6]">Treat</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
                            Explore our specialised treatments tailored to your specific needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Back & Neck Pain",
                                description: "Chronic lower back pain, disc-related issues, cervical stiffness, postural pain from desk work, and thoracic restrictions. Addressed through manual therapy, targeted exercise programming, and postural correction.",
                                image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "Knee & Joint Pain",
                                description: "Knee osteoarthritis, patellofemoral pain syndrome, ligament injuries, and post-surgical knee rehabilitation. Treatment structured around restoring functional movement, not just reducing pain scores.",
                                image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "Sports Injuries",
                                description: "Muscle strains, ligament sprains, rotator cuff injuries, IT band syndrome, plantar fasciitis, and overuse injuries. Assessed and treated with the clinical depth they require.",
                                image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "Post-Surgery Rehabilitation",
                                description: "Structured recovery following ACL reconstruction, knee replacement, shoulder surgery, spinal procedures, and hip replacement. Coordinated with your surgical team and progressed on clinical milestones.",
                                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "Neurological Rehabilitation",
                                description: "Vaishali specialises in neurological rehabilitation alongside orthopedic cases. Relevant for stroke recovery, Parkinson's disease management, and nerve-related pain and movement dysfunction.",
                                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
                            },
                            {
                                title: "Postural Correction",
                                description: "Rounded shoulders, forward head posture, thoracic kyphosis, and pelvic imbalances from prolonged sitting and asymmetrical training. Corrective programming addresses both the structural pattern and the habits driving it.",
                                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
                            },
                        ].map((condition, idx) => (
                            <div
                                key={idx}
                                className="group bg-white dark:bg-white/5 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                            >
                                <div className="relative h-48 w-full shrink-0 overflow-hidden bg-gray-100">
                                    <Image
                                        src={condition.image}
                                        alt={condition.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                    <div className="absolute bottom-4 left-6 z-10">
                                        <span className="text-white/90 text-[10px] font-black tracking-[0.2em] uppercase">
                                            Specialization // 0{idx + 1}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-7 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors duration-300 leading-tight">
                                        {condition.title}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                        {condition.description}
                                    </p>
                                    <div className="pt-5 border-t border-gray-50 dark:border-white/5 flex items-center justify-between">
                                        <div className="inline-flex items-center gap-2 text-[#513394] dark:text-[#A78BFA] font-black text-[11px] tracking-widest uppercase">
                                            <span>READ MORE</span>
                                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path d="M9 18l6-6-6-6" />
                                            </svg>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-[#513394]/10 dark:bg-white/10 flex items-center justify-center group-hover:bg-[#513394] dark:group-hover:bg-[#8B5CF6] group-hover:text-white transition-all duration-300">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="https://www.practo.com/mumbai/clinic/r3-boot-spoorts-therapy-dadar-east/doctors"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#513394] text-white font-bold px-10 py-4 rounded-full hover:bg-[#412975] transition-all shadow-xl shadow-[#513394]/20 hover:scale-105"
                        >
                            Book a Consultation
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* ─── BUILT FOR YOUR LIFESTYLE ─── */}
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                            PATIENT-SPECIFIC //
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
                            Built for Your <span className="text-[#513394] dark:text-[#8B5CF6]">Sport & Lifestyle</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                sport: "Runners",
                                tag: "RUNNING //",
                                description: "Hip flexor tightness, patellofemoral pain, IT band syndrome, Achilles tendinopathy, and plantar fasciitis. Mumbai runners who combine desk work with evening training are particularly susceptible.",
                                image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
                                points: ["IT band syndrome", "Achilles tendinopathy", "Plantar fasciitis"],
                            },
                            {
                                sport: "Gym Athletes",
                                tag: "GYM //",
                                description: "Shoulder impingement, lower back pain from heavy loading, knee pain from volume accumulation, and hip mobility restrictions. If you train consistently and get injured, the pattern is in how you move.",
                                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
                                points: ["Shoulder impingement", "Lower back pain", "Knee pain"],
                            },
                            {
                                sport: "Cricketers",
                                tag: "CRICKET //",
                                description: "Rotator cuff injuries, lumbar asymmetry from bowling mechanics, forearm and elbow overuse, and hamstring strain risk — sports-specific rehabilitation aligned with your sport's demands.",
                                image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80",
                                points: ["Rotator cuff injuries", "Lumbar asymmetry", "Elbow overuse"],
                            },
                            {
                                sport: "Corporate Professionals",
                                tag: "DESK + TRAINING //",
                                description: "Thoracic stiffness, neck pain, lumbar compression, and piriformis syndrome that accumulates quietly over months — physiotherapy addresses the desk load and training load as a single connected problem.",
                                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
                                points: ["Neck & thoracic stiffness", "Lumbar compression", "Piriformis syndrome"],
                            },
                            {
                                sport: "Post-Surgery Patients",
                                tag: "SURGICAL REHAB //",
                                description: "ACL, knee replacement, rotator cuff repair, spinal surgery, and hip procedures. Programs coordinated with your surgical timeline and progressed based on clinical findings at each stage.",
                                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
                                points: ["ACL reconstruction", "Knee replacement", "Rotator cuff repair"],
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

            {/* ─── TEAM SECTION ─── */}
            <PhysiotherapyTeam />

            {/* ─── FAQ ─── */}
            <PhysiotherapyFAQ />

            {/* ─── FINAL CTA ─── */}
            <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                            Move Better. Recover Properly. <span className="text-white/50">Stay in the Game.</span>
                        </h2>
                        <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
                            If you are managing pain, recovering from injury, or dealing with a recurring problem that rest alone has not resolved, structured clinical physiotherapy is the answer. Performed by specialists with the training to address the root cause.
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

            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalBusiness",
                        "name": "R3BOOT Recovery Center",
                        "description": "Clinical physiotherapy and integrated performance recovery center in Dadar, Mumbai. Sports injuries, back pain, knee pain, post-surgery rehabilitation, neurological rehab.",
                        "url": "https://www.r3boot.in/services/physiotherapy/",
                        "telephone": "+919702368612",
                        "email": "info.r3boot@gmail.com",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Palai Plaza, 203, Swami Gyan Jivandas Marg",
                            "addressLocality": "Dadar East",
                            "addressRegion": "Mumbai",
                            "postalCode": "400014",
                            "addressCountry": "IN"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "19.0176",
                            "longitude": "72.8441"
                        },
                        "priceRange": "₹₹",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Physiotherapy Services",
                            "itemListElement": [{
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Clinical Physiotherapy",
                                    "description": "Evidence-based physiotherapy for sports injuries, back pain, knee pain, post-surgery rehabilitation, neurological rehab, and postural correction.",
                                    "provider": [
                                        { "@type": "Person", "name": "Nirmal Solanki", "jobTitle": "Physiotherapist & Manual Therapy Specialist" },
                                        { "@type": "Person", "name": "Vaishali Vijay Rauniyar", "jobTitle": "Physiotherapist" }
                                    ]
                                }
                            }]
                        }
                    })
                }}
            />
        </main>
    )
}
