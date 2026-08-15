'use client'

import { useState } from 'react'
import Image from 'next/image'

const POINTS = [
  {
    title: 'Choking when it matters most',
    description: 'Training feels sharp. Competition feels different. Pressure flips the switch.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785884556/image_1_fjuwbc.webp',
  },
  {
    title: 'Pre-competition anxiety that will not settle',
    description: 'Nerves before every match or race. Sleep dips. Focus scatters. Body is ready; mind is not.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785884557/image_2_ynmirp.webp',
  },
  {
    title: 'Fear of failure after a setback',
    description: 'One bad performance or injury lingers. You hesitate, overthink, and play safe.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785884557/image_3_qoemcd.webp',
  },
  {
    title: 'Body healed, mind still guarded',
    description: 'Rehab cleared you. You still flinch, hold back, or do not fully trust the movement.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785884557/image_4_nnz3y9.webp',
  },
  {
    title: 'Motivation flatlined mid-season',
    description: 'Training feels empty. Drive is gone. You are showing up but not competing with yourself.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785884558/image_5_iheszf.webp',
  },
  {
    title: 'Burnout dressed as discipline',
    description: 'You keep pushing because that is who you are. Rest feels like weakness. Performance is sliding.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785884558/image_6_g5og2l.webp',
  },
]

export function PainPointsSection() {
  const [active, setActive] = useState(0)
  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <section id="signs" className="bg-[#F8F9FA] dark:bg-[#080808] py-16 sm:py-20 lg:py-24">
      <div className="text-center mb-10 sm:mb-12 px-5">
        <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-3 block">
          RECOGNITION //
        </span>
        <h2 className="text-5xl sm:text-6xl lg:text-[4rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.06]">
          Sound familiar<span className="text-[#7B5FCA]">?</span>
        </h2>
        <p className="text-gray-500 dark:text-white/40 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          If any of these feel like your season, mental performance is the variable you are missing.
        </p>
      </div>

      <div className="hidden lg:block">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[42%_58%] gap-6 xl:gap-8">
            <div className="relative rounded-2xl overflow-hidden min-h-[560px] xl:min-h-[600px]">
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/35 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />

              <div className="absolute top-5 left-5 z-10 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm border border-white/[0.12] rounded-full px-3.5 py-1.5">
                <span className="text-[#A78BFA] font-black text-[14px] leading-none">{pad(active + 1)}</span>
                <span className="text-white/35 text-[13px] font-medium leading-none">/ {pad(POINTS.length)}</span>
              </div>

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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-[13px] leading-snug">Mental work has to survive the warm-up.</p>
                    <p className="text-white/40 text-[13px]">Not just the consulting room.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-3">
              {POINTS.map((pt, i) => {
                const isActive = active === i
                return (
                  <div
                    key={i}
                    onClick={() => setActive(i)}
                    className={`cursor-pointer rounded-xl border transition-all duration-300 ${
                      isActive
                        ? 'border-[#513394]/40 dark:border-[#513394]/50 bg-[#513394]/[0.04] dark:bg-white/[0.05]'
                        : 'border-gray-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.025] hover:bg-gray-50 dark:hover:bg-white/[0.04] hover:border-gray-300 dark:hover:border-white/[0.13]'
                    }`}
                  >
                    <div className="flex items-center gap-5 px-6 py-5">
                      <div
                        className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-black transition-all duration-300 ${
                          isActive ? 'bg-[#513394] text-white' : 'bg-gray-100 dark:bg-white/[0.07] text-gray-500 dark:text-white/45'
                        }`}
                      >
                        {pad(i + 1)}
                      </div>
                      <span
                        className={`flex-1 font-bold text-[17px] leading-snug transition-colors duration-300 ${
                          isActive ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-white/55'
                        }`}
                      >
                        {pt.title}
                      </span>
                      <div
                        className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'border-[#513394]/60 text-[#513394] dark:text-[#A78BFA] bg-[#513394]/15'
                            : 'border-gray-300 dark:border-white/[0.15] text-gray-400 dark:text-white/35'
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
                    {isActive && (
                      <div className="px-6 pb-6 pt-0">
                        <div className="pl-[60px]">
                          <p className="text-gray-500 dark:text-white/50 text-[15px] leading-relaxed">{pt.description}</p>
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

      <div className="lg:hidden px-5 flex flex-col gap-3">
        {POINTS.map((pt, i) => {
          const isActive = active === i
          return (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                isActive
                  ? 'border-[#513394]/35 dark:border-[#513394]/45 bg-[#513394]/[0.04] dark:bg-white/[0.05]'
                  : 'border-gray-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.02]'
              }`}
            >
              <div className="flex items-center gap-4 p-5">
                <div
                  className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-black transition-all duration-300 ${
                    isActive ? 'bg-[#513394] text-white' : 'bg-gray-100 dark:bg-white/[0.07] text-gray-500 dark:text-white/45'
                  }`}
                >
                  {pad(i + 1)}
                </div>
                <span className={`flex-1 font-bold text-[16px] transition-colors ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-white/55'}`}>
                  {pt.title}
                </span>
                <svg
                  className={`w-4 h-4 shrink-0 transition-colors ${isActive ? 'text-[#513394] dark:text-[#A78BFA]' : 'text-gray-400 dark:text-white/30'}`}
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
                  <p className="text-gray-500 dark:text-white/50 text-[14px] leading-relaxed">{pt.description}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
