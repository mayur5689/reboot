"use client";

import Image from "next/image";
import { Check, ArrowRight, Activity, Beaker, BriefcaseMedical } from "lucide-react";
import { motion } from "framer-motion";
import HomeBlog from "@/components/HomeBlog";

import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
            {/* Hero / Header Spacer if needed */}
            {/* Section 1: Why Choose Us */}
            <section className="min-h-[90vh] flex items-center pt-24 pb-12 lg:pt-32 lg:pb-16 px-6 lg:px-8">
                <div className="container mx-auto">
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
                                Why Choose Us
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1]">
                                Collaborating with leading hospitals and medi-center.
                            </h1>

                            <ul className="space-y-4">
                                {[
                                    "Global telemedicine & virtual care services",
                                    "Joint medical research and clinical trials",
                                    "Sharing best practices in healthcare delivery"
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="mt-1 w-5 h-5 rounded-full bg-[#513394]/10 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-[#513394]" strokeWidth={3} />
                                        </div>
                                        <span className="text-lg text-gray-600 dark:text-gray-400">
                                            {item}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#513394] text-white font-bold hover:bg-[#41297a] transition-all transform hover:scale-[1.02] shadow-xl shadow-[#513394]/20 group"
                            >
                                Contact Us
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="relative aspect-square lg:aspect-[1.2/1] max-w-lg ml-auto rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/1.jpg"
                                    alt="Medical Professionals"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>


                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: Global Partnerships */}
            <section className="py-16 lg:py-24 bg-gray-50 dark:bg-[#111111]">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#513394]/10 text-[#513394] font-semibold text-xs tracking-widest uppercase">
                            Global Partnerships Since 1990
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                            Advancing healthcare through global collaboration.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {[
                            {
                                year: "1990",
                                label: "JOURNEY WAS STARTED",
                                image: "/images/2.jpg",
                                description: "Our foundation was built on the vision of integrating physiotherapy with modern recovery protocols for elite athletes and everyday patients.",
                                icon: <Activity className="w-8 h-8 text-[#513394]/40" />
                            },
                            {
                                year: "2014",
                                label: "GET SOLUTION TO 100M+",
                                image: "/images/3.jpg",
                                description: "Expanding our reach globally, we've impacted millions by setting new standards in clinical recovery and rehabilitation care.",
                                icon: <Beaker className="w-8 h-8 text-[#513394]/40" />
                            },
                            {
                                year: "2022",
                                label: "JOURNEY WAS STARTED",
                                image: "/images/4.jpg",
                                description: "Today, we stand as India's first integrated recovery center, bridging the gap between medical science and performance optimization.",
                                icon: <BriefcaseMedical className="w-8 h-8 text-[#513394]/40" />
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
                                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-8 shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                                    <Image
                                        src={item.image}
                                        alt={item.year}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>

                                <div className="space-y-4">
                                    <p className="text-[#513394] font-bold text-xs tracking-wider uppercase">
                                        {item.label}
                                    </p>
                                    <div className="flex items-baseline justify-between">
                                        <h3 className="text-5xl font-black text-[#513394]">
                                            {item.year}
                                        </h3>
                                        <div className="transform group-hover:scale-110 transition-transform duration-500">
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

            {/* Section 3: Professional Team / Doctors */}
            <section id="team-section" className="py-24 lg:py-32 px-6 lg:px-8 bg-white dark:bg-[#0A0A0A]">
                <div className="container mx-auto">
                    <div className="text-center mb-20 max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#513394]/10 text-[#513394] font-semibold text-xs tracking-widest uppercase mb-6">
                            Professional Team
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                            Meet the experts driving your <span className="text-[#513394] dark:text-[#A78BFA]">performance.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {[
                            {
                                name: "Alkesh Kubadia",
                                role: "Co-Founder | Strategy, Psychology & Business Lead",
                                image: "/images/trainer/R3boot_Website_Images/Alkesh Kubadia (Behavioral Therapist).webp",
                                bio: "Alkesh Kubadia holds a Master’s degree in Psychology and brings decades of entrepreneurial experience. At r3boot, he oversees strategy, operations, and client experience, ensuring systems-driven execution and ethical practices."
                            },
                            {
                                name: "Dr. Nirmal Solanki",
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
                                name: "Dr. Vaishali Vijay Rauniyar",
                                role: "Physiotherapist | Sports & Orthopedic Rehabilitation",
                                image: "/images/trainer/R3boot_Website_Images/Dr. Vaishali Vijay Rauniyar.webp",
                                bio: "Clinical experience in sports, orthopedic, and neurological rehabilitation. Certified in Dry Needling and Aquatic Rehabilitation, she designs personalized plans for efficient recovery."
                            },
                            {
                                name: "Dr. Ganesh S. Gadhave",
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
                                className="group relative"
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
                                    <p className="text-[#513394] dark:text-[#A78BFA] text-[10px] font-bold uppercase tracking-widest">
                                        {member.role.split('|')[0]}
                                    </p>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-[#513394]">
                                        {member.name}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <HomeBlog />
        </main>
    );
}
