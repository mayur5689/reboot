'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

type TeamMember = {
  name: string
  role: string
  credentials: string
  experience: string
  description: string
  image: string
  stats: {
    years: string
    rating: string
  }
}

const members: TeamMember[] = [
  {
    name: 'Parinaaz Irani',
    role: 'Sports Counselling & Mental Performance',
    credentials: 'Sport & Performance Psychologist',
    experience: 'Athlete Mental Health Specialist',
    description:
      'Specialises in athlete mental health and mindset training. Helps athletes build mental resilience, emotional regulation, and focus under pressure — across competition prep and return-from-injury work.',
    image: '/images/trainer2/Trainers/Parinaaz Irani.webp',
    stats: { years: 'Mental', rating: '5.0 ★' },
  },
  {
    name: 'Alkesh Kubadia',
    role: 'Co-Founder | Psychology & Strategy',
    credentials: "Master's in Psychology",
    experience: 'Systems & Client Experience Lead',
    description:
      'Brings psychology training and decades of entrepreneurial experience to R3BOOT. Oversees strategy, operations, and ethical client experience across mental and physical recovery services.',
    image: '/images/trainer2/Trainers/Alkesh Kubadia (Behavioral Therapist).webp',
    stats: { years: 'Psych', rating: '5.0 ★' },
  },
]

const AUTOPLAY_MS = 5500

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="flex items-center gap-3 border border-white/[0.12] rounded-xl px-4 py-3.5 flex-1 min-w-0">
      <div className="w-9 h-9 rounded-lg bg-[#513394]/25 flex items-center justify-center text-[#A78BFA] flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[#A78BFA] font-bold text-xl lg:text-2xl leading-none">{value}</p>
        <p className="text-white/45 text-[11px] lg:text-xs mt-1 truncate">{label}</p>
      </div>
    </div>
  )
}

function TeamSlide({ member }: { member: TeamMember }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[38%_62%] items-stretch min-h-[400px] lg:min-h-[460px]">
      <div className="relative overflow-hidden min-h-[280px] md:min-h-0">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="(min-width: 768px) 38vw, 100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-[#0D0D0D] hidden md:block" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
      </div>

      <div className="flex flex-col justify-center pl-6 lg:pl-10 xl:pl-14 pr-6 lg:pr-10 xl:pr-16 py-10">
        <p className="text-[#A78BFA] text-[11px] font-black tracking-[0.22em] uppercase mb-4">
          {member.role}
        </p>
        <h3 className="text-white font-extrabold text-3xl lg:text-[40px] xl:text-[44px] leading-[1.08] tracking-tight mb-4">
          {member.name}
        </h3>
        <p className="text-white/50 text-[15px] lg:text-base leading-snug mb-6">
          {member.credentials}
          <span className="text-white/30 mx-2">|</span>
          {member.experience}
        </p>
        <p className="text-white/50 text-[15px] lg:text-base leading-relaxed max-w-lg mb-8">
          {member.description}
        </p>

        <div className="flex gap-3">
          <StatCard
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
            }
            value={member.stats.years}
            label="Focus"
          />
          <StatCard
            icon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            }
            value={member.stats.rating}
            label="Client rating"
          />
        </div>
      </div>
    </div>
  )
}

export function TeamSection() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % members.length)
  }, [])

  useEffect(() => {
    const id = window.setInterval(next, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [next])

  return (
    <section className="bg-[#0D0D0D] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase mb-3 block">
              YOUR TEAM //
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Mental performance{' '}
              <span className="text-[#7B5FCA]">specialists</span>
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            {members.map((m, i) => (
              <button
                key={m.name}
                type="button"
                onClick={() => setIndex(i)}
                className={`px-4 py-2 rounded-full text-[12px] font-bold tracking-wide transition-all ${
                  index === i
                    ? 'bg-[#513394] text-white'
                    : 'bg-white/[0.06] text-white/50 hover:text-white'
                }`}
              >
                {m.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden border border-white/[0.08] bg-[#111111]">
          <TeamSlide member={members[index]} />
        </div>

        <div className="flex sm:hidden justify-center gap-2 mt-5">
          {members.map((m, i) => (
            <button
              key={m.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${m.name}`}
              className={`h-2 rounded-full transition-all ${
                index === i ? 'w-6 bg-[#513394]' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
