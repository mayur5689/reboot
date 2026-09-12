'use client'

import { useState } from 'react'
import Image from 'next/image'

const POINTS = [
  {
    title: 'Terrified to put weight on it again',
    description: 'Your surgeon cleared you, but every land exercise brings the same sharp pain back.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1781294269/POST-SURGICAL_REHABILITATION_bc9mdn.webp',
  },
  {
    title: 'Rehab has stalled for weeks',
    description: 'You are doing the exercises, but land training keeps re-loading the same injury before it is ready.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1781294289/SPORTS_INJURIES_RETURN_TO_SPORT_wlvjqr.webp',
  },
  {
    title: 'Arthritis pain arrives before the workout helps',
    description: 'Every land-based session hurts enough that you stop before you get the dose you actually need.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1781294628/a2997f88-f950-4783-956a-43885816055f_uztncr.webp',
  },
  {
    title: 'Chronic pain that land physio has not moved',
    description: 'Months of stretching and strengthening on land, and the pain is still where it started.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1781294394/EXTENDED_LONG-TERM_APPLICATIONS_sgyuig.webp',
  },
  {
    title: 'Progress has plateaued on land alone',
    description: 'You have hit a wall your physiotherapist says water could break through, if only there was a proper facility for it.',
    image: '/images/Services_image/Hydrotherapy.webp',
  },
]

export function PainPointsSection() {
  const [active, setActive] = useState(0)
  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <section id="services" className="bg-[#080808] py-16 sm:py-20 lg:py-24">

      {/* ── Header: 2 lines only ─────────────────────── */}
      <div className="text-center mb-10 sm:mb-12 px-5">
        <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase mb-3 block">
          RECOGNITION //
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
          Sound familiar<span className="text-[#7B5FCA]">?</span>
        </h2>
        <p className="text-white/40 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          If land-based rehab keeps hurting more than it helps, water is the variable you&apos;re missing.
        </p>
      </div>

      {/* ── Desktop: image pane + accordion ─────────── */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[42%_58%] gap-6 xl:gap-8">

            {/* LEFT: image pane */}
            <div className="relative rounded-2xl overflow-hidden min-h-[560px] xl:min-h-[600px]">

              {/* Stacked images — opacity crossfade */}
              {POINTS.map((pt, i) => (
                <div
                  key={i}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: active === i ? 1 : 0 }}
                >
                  <Image
                    src={pt.image}
                    alt={pt.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1280px) 42vw, 560px"
                    priority={i === 0}
                  />
                </div>
              ))}

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/35 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />

              {/* Counter badge */}
              <div className="absolute top-5 left-5 z-10 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm border border-white/[0.12] rounded-full px-3.5 py-1.5">
                <span className="text-[#A78BFA] font-black text-[14px] leading-none">{pad(active + 1)}</span>
                <span className="text-white/35 text-[13px] font-medium leading-none">/ {pad(POINTS.length)}</span>
              </div>

              {/* Bottom text overlay */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-8">
                <h3 className="text-white font-black text-[1.75rem] xl:text-[2rem] leading-tight mb-2.5">
                  {POINTS[active].title}
                </h3>
                <p className="text-white/55 text-[15px] leading-relaxed mb-7">
                  {POINTS[active].description}
                </p>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 shrink-0 text-[#A78BFA] mt-[1px]">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-[13px] leading-snug">Water isn&apos;t a fallback.</p>
                    <p className="text-white/40 text-[13px]">It&apos;s where rehab that stalled on land moves again.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: accordion */}
            <div className="flex flex-col justify-center gap-3">
              {POINTS.map((pt, i) => {
                const isActive = active === i
                return (
                  <div
                    key={i}
                    onClick={() => setActive(i)}
                    className={`cursor-pointer rounded-xl border transition-all duration-300 ${
                      isActive
                        ? 'border-[#513394]/50 bg-white/[0.05]'
                        : 'border-white/[0.07] bg-white/[0.025] hover:bg-white/[0.04] hover:border-white/[0.13]'
                    }`}
                  >
                    <div className="flex items-center gap-5 px-6 py-5">
                      {/* Number */}
                      <div
                        className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-black transition-all duration-300 ${
                          isActive ? 'bg-[#513394] text-white' : 'bg-white/[0.07] text-white/45'
                        }`}
                      >
                        {pad(i + 1)}
                      </div>

                      {/* Title */}
                      <span
                        className={`flex-1 font-bold text-[17px] leading-snug transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-white/55'
                        }`}
                      >
                        {pt.title}
                      </span>

                      {/* Toggle icon */}
                      <div
                        className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'border-[#513394]/60 text-[#A78BFA] bg-[#513394]/15'
                            : 'border-white/[0.15] text-white/35'
                        }`}
                      >
                        {isActive ? (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Expanded description */}
                    {isActive && (
                      <div className="px-6 pb-6 pt-0">
                        <div className="pl-[60px]">
                          <p className="text-white/50 text-[15px] leading-relaxed">{pt.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile: accordion with inline image ─────── */}
      <div className="lg:hidden px-5 flex flex-col gap-3">
        {POINTS.map((pt, i) => {
          const isActive = active === i
          return (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                isActive
                  ? 'border-[#513394]/45 bg-white/[0.05]'
                  : 'border-white/[0.07] bg-white/[0.02]'
              }`}
            >
              <div className="flex items-center gap-4 p-5">
                <div
                  className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-black transition-all duration-300 ${
                    isActive ? 'bg-[#513394] text-white' : 'bg-white/[0.07] text-white/45'
                  }`}
                >
                  {pad(i + 1)}
                </div>
                <span className={`flex-1 font-bold text-[16px] transition-colors ${isActive ? 'text-white' : 'text-white/55'}`}>
                  {pt.title}
                </span>
                <svg
                  className={`w-4 h-4 shrink-0 transition-colors ${isActive ? 'text-[#A78BFA]' : 'text-white/30'}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={isActive ? 'M18 12H6' : 'M12 6v12m6-6H6'} />
                </svg>
              </div>
              {isActive && (
                <div className="px-5 pb-5">
                  <div className="relative rounded-xl overflow-hidden mb-4" style={{ aspectRatio: '16/9' }}>
                    <Image src={pt.image} alt={pt.title} fill className="object-cover" sizes="90vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <p className="text-white/50 text-[14px] leading-relaxed">{pt.description}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>

    </section>
  )
}
