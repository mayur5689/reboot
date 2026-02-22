"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
    {
        name: "Dr. Nirmal Solanki",
        role: "Physiotherapist & Manual Therapy Specialist",
        image: "/images/trainer2/Trainers/Dr. Nirmal Solanki.webp",
        bio: "Over two decades of clinical experience in sports physiotherapy and manual therapy. Internationally trained in advanced osteopathic techniques, his approach prioritises sustainable, long-term outcomes over short-term symptom suppression. His manual therapy expertise addresses complex musculoskeletal presentations that respond poorly to exercise-only approaches."
    },
    {
        name: "Dr. Vaishali Vijay Rauniyar",
        role: "Physiotherapist | Dry Needling & Aquatic Rehab Certified",
        image: "/images/trainer2/Trainers/Dr. Vaishali Vijay Rauniyar.webp",
        bio: "Clinical experience across sports, orthopedic, and neurological rehabilitation. Dual certification in Dry Needling and Aquatic Rehabilitation gives access to treatment approaches most physiotherapy clinics in Mumbai do not offer. Her neurological rehabilitation background makes her particularly well-suited for complex cases requiring multi-system assessment."
    },
];

export default function PhysiotherapyTeam() {
    return (
        <section className="py-24 lg:py-32 bg-white dark:bg-[#0A0A0A]">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#513394]/10 text-[#513394] dark:text-[#A78BFA] font-semibold text-xs tracking-widest uppercase mb-6">
                        Professional Team
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                        Meet the specialists behind{" "}
                        <span className="text-[#513394] dark:text-[#A78BFA]">your recovery.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-8 md:gap-y-16 max-w-3xl mx-auto">
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
