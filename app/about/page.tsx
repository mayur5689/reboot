"use client";

import Image from "next/image";
import { Check, ArrowRight, Activity, Beaker, BriefcaseMedical } from "lucide-react";
import { motion } from "framer-motion";
import HomeBlog from "@/components/HomeBlog";

import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
            {/* Section 1: Hero / Introduction */}
            <section className="min-h-[90vh] flex items-center pt-24 pb-12 lg:pt-32 lg:pb-16">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#513394]/10 text-[#513394] font-semibold text-sm">
                                <span className="w-2 h-2 rounded-full bg-[#513394] animate-pulse" />
                                Recovery, Rehabilitation & Performance
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[1.05]">
                                Rebuild. Restore. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#513394] to-[#8B5CF6]">R3BOOT.</span>
                            </h1>

                            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                                At R3BOOT, we specialize in high-end recovery, physiotherapy, and performance wellness. Our mission is to bridge the gap between clinical rehabilitation and elite performance.
                            </p>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Clinical Physiotherapy & Hydrotherapy",
                                    "Advanced Recovery Modalities",
                                    "Personalized Performance Programs",
                                    "Mental Training & Counselling"
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-[#513394]/10 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-4 h-4 text-[#513394]" strokeWidth={3} />
                                        </div>
                                        <span className="font-medium text-gray-700 dark:text-gray-300">
                                            {item}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#513394] text-white font-bold hover:bg-[#41297a] transition-all transform hover:scale-[1.02] shadow-xl shadow-[#513394]/20 group"
                                >
                                    Start Your Journey
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="#modalities"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="relative aspect-square lg:aspect-[4/5] max-w-lg ml-auto rounded-[3rem] overflow-hidden shadow-2xl group">
                                <Image
                                    src="/images/trainer/R3boot_Website_Images/Alkesh Kubadia (Behavioral Therapist).webp"
                                    alt="R3BOOT Professional Support"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8 p-6 glass-morphism rounded-2xl border border-white/10">
                                    <p className="text-white text-lg font-medium">"Our integrated approach ensures you don't just recover, you evolve."</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: Our Core Pillars */}
            <section className="py-24 lg:py-32 bg-gray-50 dark:bg-[#0D0D0D] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#513394]/20 to-transparent" />
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#513394]/10 text-[#513394] font-bold text-xs tracking-widest uppercase">
                            The R3BOOT Ecosystem
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                            Science-Based Recovery for <span className="text-[#513394]">Modern Athletes.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {[
                            {
                                label: "RECOVERY & REHAB",
                                year: "Step 1",
                                title: "Clinical Excellence",
                                image: "/images/2.jpg",
                                description: "Expert physiotherapy and manual therapy focused on long-term outcomes and pain management.",
                                icon: <BriefcaseMedical className="w-8 h-8 text-[#513394]/40" />
                            },
                            {
                                label: "MODALITIES",
                                year: "Step 2",
                                title: "High-Performance",
                                image: "/images/3.jpg",
                                description: "State-of-the-art modalities including Ice Baths and infrared saunas to accelerate recovery cycles.",
                                icon: <Activity className="w-8 h-8 text-[#513394]/40" />
                            },
                            {
                                label: "MINDSET",
                                year: "Step 3",
                                title: "Mental Resilience",
                                image: "/images/4.jpg",
                                description: "Dedicated sports mindset training to help athletes develop focus and emotional regulation.",
                                icon: <Beaker className="w-8 h-8 text-[#513394]/40" />
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group"
                            >
                                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#513394]/40 to-transparent" />
                                </div>

                                <div className="space-y-4">
                                    <p className="text-[#513394] font-bold text-xs tracking-widest uppercase">
                                        {item.label}
                                    </p>
                                    <div className="flex items-baseline justify-between">
                                        <h3 className="text-4xl font-black text-[#513394]">
                                            {item.title}
                                        </h3>
                                        <div className="transform group-hover:rotate-12 transition-transform duration-500">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-800" />
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Advanced Modalities Detail */}
            <section id="modalities" className="py-24 lg:py-32 dark:bg-[#0A0A0A]">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="relative aspect-[4/5] max-w-lg rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-white/5">
                                <Image
                                    src="/images/trainer/R3boot_Website_Images/Dr. Nirmal Solanki.webp"
                                    alt="Professional Care"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#513394]/40 to-transparent" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-10 order-1 lg:order-2"
                        >
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight italic">
                                    "Recovery is not an option. It's a <span className="text-[#513394]">discipline.</span>"
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                                    We provide an integrated suite of modalities designed to optimize your central nervous system, reduce inflammation, and restore structural integrity.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { title: "Hydrotherapy & Contrast Bathing", desc: "Regulate blood flow and reduce muscle soreness." },
                                    { title: "Infrared Sauna & Heat Exposure", desc: "Cellular repair and detoxification for deeper recovery." },
                                    { title: "Pneumatic Compression", desc: "Dynamic compression to flush out metabolic waste." }
                                ].map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 10 }}
                                        className="flex gap-4 p-5 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all group"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 flex items-center justify-center shadow-inner flex-shrink-0 group-hover:bg-[#513394] transition-colors duration-500">
                                            <div className="w-2 h-2 rounded-full bg-[#513394] group-hover:bg-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-gray-900 dark:text-white">{feature.title}</h4>
                                            <p className="text-gray-500 dark:text-gray-400">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 4: Professional Standards */}
            <section className="py-24 lg:py-40 relative overflow-hidden bg-[#0A0A0A]">
                {/* Rich Background Elements */}
                <div className="absolute inset-0 bg-[#513394]/10 mix-blend-overlay" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#513394]/20 rounded-full blur-[120px] -mr-64 -mt-64" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8B5CF6]/10 rounded-full blur-[120px] -ml-64 -mb-64" />

                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-5xl mx-auto text-center space-y-20">
                        <div className="space-y-6">
                            <motion.h2
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="text-4xl md:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter"
                            >
                                Professional <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]">Standards.</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl md:text-2xl text-white/50 leading-relaxed font-light max-w-3xl mx-auto"
                            >
                                Your safety is our benchmark. Every R3BOOT program is designed based on professional clinical assessments, evidence-based judgment, and individual physiology.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "100%", sub: "Safe Environment", icon: <Check className="w-6 h-6" /> },
                                { title: "Expert", sub: "Clinical Supervision", icon: <Activity className="w-6 h-6" /> },
                                { title: "Custom", sub: "Individualized Plans", icon: <BriefcaseMedical className="w-6 h-6" /> }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.05)" }}
                                    className="p-12 rounded-[3.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-[#513394]/50 transition-all duration-500 text-white group"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-[#513394]/20 flex items-center justify-center mb-8 group-hover:bg-[#513394]/40 transition-colors">
                                        {stat.icon}
                                    </div>
                                    <h4 className="font-black text-5xl mb-3 italic tracking-tighter">{stat.title}</h4>
                                    <p className="text-xs uppercase tracking-[0.3em] opacity-40 font-bold">{stat.sub}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Professional Team / Doctors */}
            <section id="team-section" className="py-24 lg:py-32 bg-white dark:bg-[#0A0A0A]">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-20 max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#513394]/10 text-[#513394] font-semibold text-xs tracking-widest uppercase mb-6">
                            Professional Team
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                            Meet the experts driving your <span className="text-[#513394] dark:text-[#A78BFA]">performance.</span>
                        </h2>
                    </div>

                    <div className="flex overflow-x-auto pb-12 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-8 md:gap-y-16 scrollbar-hide snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0">
                        {[
                            {
                                name: "Alkesh Kubadia",
                                role: "Co-Founder | Strategy, Psychology & Business Lead",
                                image: "/images/trainer/R3boot_Website_Images/Alkesh Kubadia (Behavioral Therapist).webp",
                                bio: "Alkesh Kubadia holds a Master’s degree in Psychology and brings decades of entrepreneurial experience. At r3boot, he oversees strategy, operations, and client experience, ensuring systems-driven execution and ethical practices."
                            },
                            {
                                name: "Nirmal Solanki",
                                role: "Senior Physiotherapist & Manual Therapy Specialist",
                                image: "/images/trainer/R3boot_Website_Images/Dr. Nirmal Solanki.webp",
                                bio: "Senior physiotherapist with over 20 years of experience in sports physiotherapy and manual therapy. Internationally trained in advanced osteopathic techniques with a focus on sustainable, long-term outcomes."
                            },
                            {
                                name: "Parinaaz Irani",
                                role: "Head – Sports Counselling & Mental Performance",
                                image: "/images/trainer/R3boot_Website_Images/Parinaaz Irani.webp",
                                bio: "Sport and performance psychologist specializing in athlete mental health and mindset training. Her work helps athletes develop mental resilience, emotional regulation, and focus under pressure."
                            },
                            {
                                name: "Diyan Kubadia",
                                role: "Co-Founder | Athlete | Performance Vision Lead",
                                image: "/images/trainer/R3boot_Website_Images/Diyan Kubadia.webp",
                                bio: "Professional cricketer with over a decade of experience. Diyan leads the athlete and performance vision, ensuring every protocol aligns with real athletic needs for smarter recovery."
                            },
                            {
                                name: "Vaishali Vijay Rauniyar",
                                role: "Physiotherapist | Sports & Orthopedic Rehabilitation",
                                image: "/images/trainer/R3boot_Website_Images/Dr. Vaishali Vijay Rauniyar.webp",
                                bio: "Clinical experience in sports, orthopedic, and neurological rehabilitation. Certified in Dry Needling and Aquatic Rehabilitation, she designs personalized plans for efficient recovery."
                            },
                            {
                                name: "Ganesh S. Gadhave",
                                role: "Pain Management & Sports Rehabilitation Specialist",
                                image: "/images/trainer/R3boot_Website_Images/Dr. Ganesh S. Gadhave.webp",
                                bio: "Focuses on injury prevention and athlete recovery. His approach emphasizes long-term physical resilience rather than short-term relief, helping individuals train with confidence."
                            },
                            {
                                name: "Akshay Anil Nalawde",
                                role: "Sports Massage Therapist",
                                image: "/images/trainer/R3boot_Website_Images/Akshay Anil Nalawde.webp",
                                bio: "Certified in Cupping Therapy and muscle recovery. He has worked with over 1,000 athletes to reduce muscle stiffness and support faster recovery from training loads."
                            }
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative min-w-[85vw] md:min-w-0 snap-center"
                            >
                                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-gray-100 dark:bg-gray-800 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Glassmorphism Bio Overlay */}
                                    <div className="absolute inset-0 bg-[#513394]/90 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm p-8 flex flex-col justify-center text-white">
                                        <p className="text-white/90 text-sm leading-relaxed line-clamp-[8]">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-900 dark:text-white text-[10px] font-bold uppercase tracking-widest opacity-80">
                                        {member.role.split('|')[0]}
                                    </p>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
                                        {member.name}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Medical Disclaimer Footer */}
            <section className="py-12 bg-gray-50 dark:bg-white/5 border-t border-gray-100 dark:border-white/10">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center space-y-4">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 dark:text-gray-500">Medical Disclaimer</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed italic">
                            R3BOOT services are not a substitute for medical diagnosis, emergency treatment, or hospital care.
                            Participating in physical and recovery-based services involves inherent risks.
                            Consult with our professionals for personalized assessments.
                        </p>
                    </div>
                </div>
            </section>
            <HomeBlog />
        </main>
    );
}
