"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

type Coach = {
  id: string
  name: string
  role: string
  imageSrc: string
  description: string
}

const coaches: Coach[] = [
  {
    id: "alkesh",
    name: "Alkesh Kubadia",
    role: "Co-Founder | Strategy & Psychology",
    imageSrc: "/images/trainer2/Trainers/Alkesh Kubadia (Behavioral Therapist).webp",
    description: "Master’s in Psychology with decades of entrepreneurial experience. Oversees strategy and client experience."
  },
  {
    id: "nirmal",
    name: "Nirmal Solanki",
    role: "Physiotherapist",
    imageSrc: "/images/trainer2/Trainers/Dr. Nirmal Solanki.webp",
    description: "20+ years of experience. Internationally trained in manual therapy and osteopathy-based rehabilitation."
  },
  {
    id: "vaishali",
    name: "Vaishali Vijay Rauniyar",
    role: "Physiotherapist | Sports & Orthopedic Rehabilitation",
    imageSrc: "/images/trainer2/Trainers/Dr. Vaishali Vijay Rauniyar.webp",
    description: "Clinical experience in sports, orthopedic, and neurological rehabilitation. Certified in Dry Needling and Aquatic Rehabilitation, she designs personalized plans for efficient recovery."
  },
  {
    id: "diyan",
    name: "Diyan Kubadia",
    role: "Co-Founder | Performance Lead",
    imageSrc: "/images/trainer2/Trainers/Diyan Kubadia.webp",
    description: "Professional cricketer blending athlete insight with business thinking to lead r3boot's performance vision."
  }
]

const CoachesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#0A0A0A] transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-3 text-[#513394] dark:text-[#A78BFA] mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]"></div>
            <span className="text-[13px] font-bold tracking-[0.3em] uppercase">THE TEAM</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-[#1A1A1A] dark:text-white tracking-tight leading-[1.1]"
          >
            Meet Our <br />
            <span className="text-[#513394] dark:text-[#A78BFA]">Expert Team</span>
          </motion.h2>
        </div>

        {/* Coaches Grid - Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16 pb-8 md:pb-0 scrollbar-hide snap-x snap-mandatory px-0">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex-none w-[280px] md:w-auto flex flex-col items-center snap-center"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-8 shadow-lg bg-gray-100 dark:bg-[#1A1A1A]">
                <Image
                  src={coach.imageSrc}
                  alt={coach.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                />
                {/* Glassmorphism Bio Overlay */}
                <div className="absolute inset-0 bg-[#513394]/90 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm p-8 flex flex-col justify-center text-white">
                  <p className="text-white/90 text-sm leading-relaxed line-clamp-[8]">
                    {coach.description}
                  </p>
                </div>
              </div>

              {/* Info Below Image (Always Visible) */}
              <div className="text-center px-4">
                <p className="text-gray-900 dark:text-white font-black text-[10px] uppercase tracking-[0.2em] mb-2 opacity-80">
                  {coach.role.split('|')[0]}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  {coach.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <Link
            href="/about#team-section"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#513394] text-white font-bold hover:bg-[#412975] transition-all transform hover:scale-105 shadow-xl shadow-[#513394]/20 group"
          >
            Meet All Experts
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CoachesSection
