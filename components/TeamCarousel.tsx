"use client"

import React, { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

type Coach = {
  id: string
  name: string
  role: string
  specialty: string
  imageSrc: string
  description: string
}

const coaches: Coach[] = [
  {
    id: "alkesh",
    name: "Alkesh Kubadia",
    role: "Strategy & Psychology",
    specialty: "Behavioral Therapy",
    imageSrc: "https://res.cloudinary.com/dj7bot2uc/image/upload/v1785289076/Alkesh_V2_rdjes4.webp",
    description: "Master's in Psychology with decades of entrepreneurial experience. Oversees strategy and client experience."
  },
  {
    id: "hiral",
    name: "Dr. Hiral Parikh",
    role: "Lead Physiotherapist",
    specialty: "Sports Rehabilitation",
    imageSrc: "https://res.cloudinary.com/dj7bot2uc/image/upload/v1785289083/Hiral_V2_sibigb.webp",
    description: "BPT from D.Y. Patil College with 15+ years of clinical experience. Leads physiotherapy at R3BOOT with expertise in sports rehabilitation and post-surgical recovery."
  },
  {
    id: "vaishali",
    name: "Vaishali Vijay Rauniyar",
    role: "Physiotherapist",
    specialty: "Orthopedic & Aquatic Rehab",
    imageSrc: "https://res.cloudinary.com/dj7bot2uc/image/upload/v1785289088/Vaishali_V3_sntnoe.webp",
    description: "Clinical experience in sports and orthopedic rehabilitation. Certified in Dry Needling and Aquatic Rehabilitation, she designs personalized plans for efficient recovery."
  },
  {
    id: "diyan",
    name: "Diyan Kubadia",
    role: "Performance Lead",
    specialty: "Athletic Performance",
    imageSrc: "https://res.cloudinary.com/dj7bot2uc/image/upload/v1785289095/Diyan_V4_yktn79.webp",
    description: "Professional cricketer blending athlete insight with business thinking to lead r3boot's performance vision."
  }
]

function TeamCard({
  coach,
  isActive,
  onActivate,
}: {
  coach: Coach
  isActive: boolean
  onActivate: () => void
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      data-team-card
      onClick={onActivate}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex-none w-[250px] sm:w-[295px] lg:w-[340px] h-[340px] sm:h-[405px] lg:h-[470px] rounded-[1.75rem] overflow-hidden bg-white dark:bg-[#141218] shadow-[0_12px_32px_rgba(81,51,148,0.08)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.4)] cursor-pointer snap-center transition-shadow duration-500 hover:shadow-[0_24px_48px_rgba(81,51,148,0.16)]"
    >
      {/* Photo — full height normally, shrinks and frames like a print when active */}
      <div
        className="absolute inset-x-0 top-0 overflow-hidden transition-[height] duration-500 ease-out"
        style={{ height: isActive ? '56%' : '100%' }}
      >
        <div
          className="absolute overflow-hidden transition-[inset,border-radius] duration-500 ease-out"
          style={
            isActive
              ? { inset: '0.625rem', borderRadius: '1rem' }
              : { inset: '0px', borderRadius: '0px' }
          }
        >
          <Image
            src={coach.imageSrc}
            alt={coach.name}
            fill
            sizes="(max-width: 768px) 300px, (max-width: 1024px) 360px, 420px"
            className="object-cover object-top transition-transform duration-500 ease-out"
            style={{ transform: isHovered && !isActive ? 'scale(1.045)' : 'scale(1)' }}
            priority
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent transition-opacity duration-500 ease-out"
            style={{ opacity: isActive ? 0 : 1 }}
          />
        </div>
      </div>

      {/* Info panel — slides up into view from below when active */}
      <div
        className="absolute inset-x-0 bottom-0 flex flex-col justify-between p-3.5 sm:p-4 lg:p-5 transition-[top] duration-500 ease-out"
        style={{ top: isActive ? '56%' : '100%' }}
      >
        <div
          className="transition-opacity duration-300 ease-out"
          style={{ opacity: isActive ? 1 : 0, transitionDelay: isActive ? '150ms' : '0ms' }}
        >
          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#1A1A1A] dark:text-white tracking-tight leading-snug">
            {coach.name}
          </h3>
          <p className="mt-1 text-[11px] sm:text-xs text-[#6B6578] dark:text-white/50 leading-relaxed line-clamp-2">
            {coach.description}
          </p>
        </div>

        <div
          className="mt-2 flex items-center justify-between gap-2 transition-opacity duration-300 ease-out"
          style={{ opacity: isActive ? 1 : 0, transitionDelay: isActive ? '200ms' : '0ms' }}
        >
          <span className="inline-flex items-center rounded-full bg-[#F3F0FF] dark:bg-[#513394]/25 px-2.5 py-1 text-[9px] sm:text-[10px] font-semibold text-[#513394] dark:text-[#C4B5FD] tracking-wide">
            {coach.specialty}
          </span>
          <Link
            href="/about#team-section"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-[#1A1A1A] px-3 py-1.5 text-[9px] sm:text-[10px] font-bold hover:opacity-85 transition-opacity shrink-0"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

const TeamCarousel: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-team-card]')
    const gap = 24
    const amount = card ? card.offsetWidth + gap : 400
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" })
  }

  return (
    <section className="py-10 sm:py-14 lg:py-24 bg-[#F7F5FB] dark:bg-[#0A0A0A] transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-3 text-[#513394] dark:text-[#A78BFA] mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]" />
            <span className="text-[13px] font-bold tracking-[0.3em] uppercase">THE TEAM</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black text-[#1A1A1A] dark:text-white tracking-tight leading-[1.1]"
          >
            Meet Our <span className="text-[#513394] dark:text-[#A78BFA]">Expert Team</span>
          </motion.h2>
          <p className="mt-4 text-sm sm:text-base text-[#6B6578] dark:text-white/50 max-w-md mx-auto">
            Tap a card to read more about them.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mb-10 sm:mb-14 lg:mb-16">
          <div
            ref={scrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 py-2"
          >
            {coaches.map((coach) => (
              <TeamCard
                key={coach.id}
                coach={coach}
                isActive={activeId === coach.id}
                onActivate={() => setActiveId(coach.id)}
              />
            ))}
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous team member"
            className="hidden sm:flex absolute left-0 sm:-left-2 lg:-left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white dark:bg-[#1A1A1A] shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.5)] items-center justify-center text-[#1A1A1A] dark:text-white hover:scale-105 active:scale-95 transition-transform"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next team member"
            className="hidden sm:flex absolute right-0 sm:-right-2 lg:-right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white dark:bg-[#1A1A1A] shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.5)] items-center justify-center text-[#1A1A1A] dark:text-white hover:scale-105 active:scale-95 transition-transform"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
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

export default TeamCarousel
