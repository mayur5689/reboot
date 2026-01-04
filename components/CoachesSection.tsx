"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"

type Coach = {
  id: string
  name: string
  role: string
  imageSrc: string
  description: string
  socials?: { icon: React.ReactNode; href: string }[]
}

const coaches: Coach[] = [
  {
    id: "coach-1",
    name: "Alex Rivera",
    role: "Recovery Specialist",
    imageSrc: "/images/trainer/670b4da73e164165fc8bcd69_trainer-5.png",
    description: "Expert in cryotherapy and ice bath protocols with over 8 years of experience in athletic recovery.",
    socials: [
      { icon: <FaLinkedin />, href: "#" },
      { icon: <FaInstagram />, href: "#" },
      { icon: <FaTwitter />, href: "#" },
    ]
  },
  {
    id: "coach-2",
    name: "Sarah Chen",
    role: "Lead Physiotherapist",
    imageSrc: "/images/trainer/670b4e197253a1dc8a4326ae_trainer-6.png",
    description: "Specializes in biomechanics and injury prevention through advanced performance therapy techniques.",
    socials: [
      { icon: <FaLinkedin />, href: "#" },
      { icon: <FaInstagram />, href: "#" },
      { icon: <FaTwitter />, href: "#" },
    ]
  },
  {
    id: "coach-3",
    name: "Marcus Thorne",
    role: "Performance Coach",
    imageSrc: "/images/trainer/670b4e020f6a6cfc3aed91ea_trainer-7.png",
    description: "Dedicated to helping elite athletes reach their peak through holistic recovery and nutrition planning.",
    socials: [
      { icon: <FaLinkedin />, href: "#" },
      { icon: <FaInstagram />, href: "#" },
      { icon: <FaTwitter />, href: "#" },
    ]
  },
  {
    id: "coach-4",
    name: "Elena Rodriguez",
    role: "Wellness Expert",
    imageSrc: "/images/trainer/670b4e3be0143bf29fbb0cae_trainer-8.png",
    description: "Focuses on the mental aspect of recovery, integrating mindfulness with physical therapy.",
    socials: [
      { icon: <FaLinkedin />, href: "#" },
      { icon: <FaInstagram />, href: "#" },
      { icon: <FaTwitter />, href: "#" },
    ]
  },
]

const CoachesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#0A0A0A] transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-3 text-[#513394] dark:text-[#A78BFA] mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]"></div>
            <span className="text-[13px] font-bold tracking-[0.3em] uppercase">OUR COACHES</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]"></div>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold text-[#1A1A1A] dark:text-white tracking-tight leading-[1.1]">
            Meet Our Expert <br />
            <span className="text-[#513394] dark:text-[#A78BFA]">Recovery Coaches</span>
          </h2>
        </div>

        {/* Coaches Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-8 lg:grid lg:grid-cols-4 lg:gap-8 lg:mx-0 lg:px-0 lg:pb-0 gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {coaches.map((coach) => (
            <div key={coach.id} className="group relative flex flex-col items-center min-w-[85vw] sm:min-w-[340px] lg:min-w-0 snap-center">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-6 shadow-lg bg-gray-100 dark:bg-[#1A1A1A]">
                <Image
                  src={coach.imageSrc}
                  alt={coach.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                />

                {/* Overlay with Socials on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#513394]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {coach.socials?.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        className="w-10 h-10 rounded-full bg-white text-[#513394] flex items-center justify-center hover:bg-[#A78BFA] hover:text-white transition-all shadow-xl"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Name and Role */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors">
                  {coach.name}
                </h3>
                <p className="text-[#513394] dark:text-[#A78BFA] font-bold text-sm uppercase tracking-wider mb-2">
                  {coach.role}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[240px] leading-relaxed">
                  {coach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoachesSection
