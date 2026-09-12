'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

export type TeamMember = {
  name: string
  role: string
  credentials: string
  experience: string
  description: string
  image: string
  stats: {
    years: string
    rating: string
    yearsLabel?: string
    ratingLabel?: string
  }
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    name: 'Dr. Hiral Parikh',
    role: 'Lead Physiotherapist',
    credentials: 'BPT, Padmashree Dr. D.Y. Patil College of Physiotherapy',
    experience: '15+ Years Experience',
    description:
      'Every protocol is supervised by a qualified physiotherapist. Your safety, comfort and recovery are in expert hands.',
    image: '/images/trainer2/Trainers/Hiral_parikh.webp',
    stats: { years: '15+', rating: '5.0 ★' },
  },
  {
    name: 'Dr. Vaishali Rauniyar',
    role: 'Dry Needling & Aquatic Rehab',
    credentials: 'Dry Needling & Aquatic Rehabilitation Certified',
    experience: '4+ Years Experience',
    description:
      'Specialised in dry needling and aquatic rehabilitation, treatment approaches most clinics in Mumbai do not offer.',
    image: '/images/trainer2/Trainers/Vaishali_rawat.webp',
    stats: { years: '4+', rating: '5.0 ★' },
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
    <div className="grid grid-cols-[38%_62%] items-stretch min-h-[400px] lg:min-h-[460px]">
      {/* Portrait — left */}
      <div className="relative overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="(min-width: 768px) 38vw, 0px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-[#0D0D0D]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
      </div>

      {/* Content — right */}
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            value={member.stats.years}
            label={member.stats.yearsLabel ?? 'Years Experience'}
          />
          <StatCard
            icon={
              <svg className="w-4 h-4" viewBox="0 0 48 48">
                <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.1 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.6 7.3 6.3 14.7z" />
                <path fill="#FBBC05" d="M24 46c5.6 0 10.5-1.9 14.4-5l-6.7-5.5C29.6 37 26.9 38 24 38c-5.9 0-10.9-4-12.7-9.5l-7 5.4C7.5 41.8 15.2 46 24 46z" />
                <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.8 2.4-2.3 4.4-4.3 5.8l6.7 5.5C42.1 36.4 45 30.7 45 24c0-1.3-.2-2.7-.5-4z" />
              </svg>
            }
            value={member.stats.rating}
            label={member.stats.ratingLabel ?? 'Google Rating'}
          />
        </div>
      </div>
    </div>
  )
}

function TeamDesktopCarousel({ members }: { members: TeamMember[] }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setActive((i) => (i + 1) % members.length)
  }, [members.length])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, next])

  useEffect(() => {
    setActive(0)
  }, [members])

  return (
    <section className="hidden md:block py-20 lg:py-28 bg-[#0D0D0D]">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 lg:mb-14 text-center">
          <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-3.5 py-1.5 mb-5">
            <svg className="w-3.5 h-3.5 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-white/60 text-[11px] font-bold tracking-[0.18em] uppercase">Our Team</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            The team behind{' '}
            <span className="text-[#A78BFA]">your recovery.</span>
          </h2>
          <p className="text-white/40 text-base mt-3">Dedicated professionals. Real care.</p>
        </div>

        {/* Carousel — full-width slide, one member at a time */}
        <div
          className="relative overflow-hidden bg-[#0D0D0D]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {members.map((member, i) => (
            <div
              key={member.name}
              className={`transition-opacity duration-700 ${
                i === active
                  ? 'opacity-100 relative'
                  : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
              aria-hidden={i !== active}
            >
              <TeamSlide member={member} />
            </div>
          ))}
        </div>

        {/* Indicators + CTA row */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-3">
            {members.map((m, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`View ${m.name}`}
                className={`relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 transition-all duration-300 ${
                  i === active
                    ? 'ring-2 ring-[#A78BFA] ring-offset-2 ring-offset-[#0D0D0D]'
                    : 'opacity-40 hover:opacity-70'
                }`}
              >
                <Image src={m.image} alt={m.name} fill className="object-cover object-top" sizes="48px" />
              </button>
            ))}
            {/* Progress dots */}
            <div className="flex items-center gap-2 ml-2">
              {members.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === active ? 'w-8 bg-[#A78BFA]' : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          <a
            href="/team"
            className="inline-flex items-center gap-3 rounded-2xl px-6 py-3.5 transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(90deg, #513394 0%, #2a1060 100%)' }}
          >
            <span className="text-white font-bold text-[15px]">Meet the Team</span>
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function TeamMobileSection({ members }: { members: TeamMember[] }) {
  const [active, setActive] = useState(0)
  const member = members[active] ?? members[0]

  useEffect(() => {
    setActive(0)
  }, [members])

  if (!member) return null

  return (
    <section className="md:hidden py-12 bg-[#0D0D0D]">
      <div className="px-5">

        {/* Header */}
        <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-3.5 py-1.5 mb-5">
          <svg className="w-3.5 h-3.5 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-white/60 text-[11px] font-bold tracking-[0.18em] uppercase">Our Team</span>
        </div>

        <h2 className="text-[28px] font-extrabold text-white leading-tight tracking-tight mb-2">
          The team behind<br />
          your <span className="text-[#A78BFA]">recovery.</span>
        </h2>
        <p className="text-white/40 text-[14px] leading-snug mb-6">
          Dedicated professionals.<br />Real care.
        </p>

        {/* Featured card - bordered container matching reference */}
        <div className="rounded-3xl overflow-hidden border border-white/[0.07] bg-[#161616]" style={{ aspectRatio: '3/3.8' }}>
          <div className="relative w-full h-full">
            {/* Purple ambient bg */}
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 55% 25%, #3d1a8a 0%, #1a0a40 55%, #0d0820 100%)' }} />

            {/* Member images - fade swap */}
            {members.map((m, i) => (
              <div key={i} className={`absolute inset-0 transition-opacity duration-500 ${i === active ? 'opacity-100' : 'opacity-0'}`}>
                <Image src={m.image} alt={m.name} fill className="object-cover object-top" priority={i === 0} />
              </div>
            ))}

            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

            {/* Name + info */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-white font-extrabold text-[22px] leading-tight mb-2">{member.name}</h3>
              <div className="flex items-center gap-1.5 mb-1">
                <svg className="w-3.5 h-3.5 text-[#A78BFA] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-white/70 text-[13px]">{member.role}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#A78BFA] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-white/70 text-[13px]">{member.experience}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Avatar tabs */}
        <div className="flex items-center gap-3 mt-4">
          {members.map((m, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View ${m.name}`}
              className={`relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 transition-all duration-300 ${
                i === active
                  ? 'ring-2 ring-[#A78BFA] ring-offset-2 ring-offset-[#0D0D0D]'
                  : 'opacity-40 hover:opacity-70'
              }`}
            >
              <Image src={m.image} alt={m.name} fill className="object-cover object-top" />
            </button>
          ))}
        </div>

        {/* CTA - purple gradient matching reference */}
        <a
          href="/team"
          className="mt-5 flex items-center justify-between rounded-2xl px-5 py-4"
          style={{ background: 'linear-gradient(90deg, #513394 0%, #2a1060 100%)' }}
        >
          <span className="text-white font-bold text-[15px]">Meet the Team</span>
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

      </div>
    </section>
  )
}

export function TeamSectionDemo({ members = DEFAULT_MEMBERS }: { members?: TeamMember[] }) {
  const list = members.length > 0 ? members : DEFAULT_MEMBERS
  return (
    <>
      <TeamMobileSection members={list} />
      <TeamDesktopCarousel members={list} />
    </>
  )
}
