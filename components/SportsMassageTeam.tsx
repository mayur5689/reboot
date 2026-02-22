"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
    {
        name: "Akshay Anil Nalawde",
        role: "Sports Massage Therapist",
        image: "/images/trainer2/Trainers/Akshay Anil Nalawde.webp",
        bio: "Certified in Cupping Therapy (Level 1 & 2) and muscle recovery. He has worked with over 1,000 athletes to reduce muscle stiffness, improve circulation, and support faster recovery from training loads."
    },
    {
        name: "Ganesh S. Gadhave",
        role: "Pain Management & Sports Rehabilitation",
        image: "/images/trainer2/Trainers/Dr. Ganesh S. Gadhave.webp",
        bio: "Focuses on injury prevention, prehabilitation, and athlete recovery at R3BOOT. His approach emphasises long-term physical resilience rather than short-term relief, ensuring continuity between massage therapy and physiotherapy programming."
    },
    {
        name: "Vaishali Sonar",
        role: "Sports Massage Therapist",
        image: "https://res.cloudinary.com/dj7bot2uc/image/upload/v1771404920/aanya-rao-womens-sports-massage-specialist-mumbai_agreyq.avif",
        bio: "Certified in Cupping Therapy (Level 1 & 2). Specialises in sports massage for female athletes and the general population. Her sessions are built around injury-free performance, combining clinical technique with an understanding of female physiology and training load."
    }
];

export default function SportsMassageTeam() {
    return (
        <section className="py-24 lg:py-32 bg-white dark:bg-[#0A0A0A]">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#513394]/10 text-[#513394] dark:text-[#A78BFA] font-semibold text-xs tracking-widest uppercase mb-6">
                        Professional Team
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                        Meet the experts driving your{" "}
                        <span className="text-[#513394] dark:text-[#A78BFA]">performance.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-8 md:gap-y-16">
                    {teamMembers.map((member, index) => (
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
                                    <p className="text-white/90 text-sm leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-gray-900 dark:text-white text-[10px] font-bold uppercase tracking-widest opacity-80">
                                    {member.role}
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
    );
}
