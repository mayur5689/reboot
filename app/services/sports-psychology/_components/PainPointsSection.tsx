'use client'

import { useState } from 'react'
import Image from 'next/image'

const POINTS = [
  {
    title: 'Choking when it matters most',
    description: 'Training feels sharp. Competition feels different. Pressure flips the switch.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba9471?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Pre-competition anxiety that will not settle',
    description: 'Nerves before every match or race. Sleep dips. Focus scatters. Body is ready — mind is not.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Fear of failure after a setback',
    description: 'One bad performance or injury lingers. You hesitate, overthink, and play safe.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Body healed, mind still guarded',
    description: 'Rehab cleared you. You still flinch, hold back, or do not fully trust the movement.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Motivation flatlined mid-season',
    description: 'Training feels empty. Drive is gone. You are showing up but not competing with yourself.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Burnout dressed as discipline',
    description: 'You keep pushing because that is who you are. Rest feels like weakness. Performance is sliding.',
    image: 'https://images.unsplash.com/photo-1573497019940-1cfe74955cdd?auto=format&fit=crop&w=1200&q=80',
  },
]

export function PainPointsSection() {
  const [active, setActive] = useState(0)
  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <section id="services" className="bg-[#080808] py-16 sm:py-20 lg:py-24">
      <div className="text-center mb-10 sm:mb-12 px-5">
        <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase mb-3 block">
          RECOGNITION //
        </span>
        <h2 className="text-5xl sm:text-6xl lg:text-[4rem] font-black text-white tracking-tight leading-[1.06]">
          Sound familiar<span className="text-[#7B5FCA]">?</span>
        </h2>
        <p className="text-white/40 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[#A78BFA] text-[11px] font-black tracking-[0.25em] uppercase">
                      {pad(i + 1)}
                    </span>
                    <p className="text-white font-black text-xl mt-2 leading-snug">{pt.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              {POINTS.map((pt, i) => {
                const isActive = active === i
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`text-left rounded-2xl border px-5 py-4 transition-all duration-300 ${
                      isActive
                        ? 'bg-white/[0.06] border-[#7B5FCA]/50'
                        : 'bg-transparent border-white/[0.06] hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`text-[11px] font-black tracking-widest pt-1 ${
                          isActive ? 'text-[#A78BFA]' : 'text-white/25'
                        }`}
                      >
                        {pad(i + 1)}
                      </span>
                      <div>
                        <h3
                          className={`font-black text-[15px] leading-snug mb-1 ${
                            isActive ? 'text-white' : 'text-white/70'
                          }`}
                        >
                          {pt.title}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed transition-all duration-300 ${
                            isActive ? 'text-white/45 max-h-24 opacity-100' : 'text-white/0 max-h-0 opacity-0 overflow-hidden'
                          }`}
                        >
                          {pt.description}
                        </p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile accordion */}
      <div className="lg:hidden px-5 space-y-3">
        {POINTS.map((pt, i) => {
          const isActive = active === i
          return (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`w-full text-left rounded-2xl border overflow-hidden transition-all ${
                isActive ? 'border-[#7B5FCA]/50 bg-white/[0.04]' : 'border-white/[0.08]'
              }`}
            >
              {isActive && (
                <div className="relative aspect-[16/9]">
                  <Image src={pt.image} alt={pt.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              )}
              <div className="px-4 py-4">
                <div className="flex items-start gap-3">
                  <span className={`text-[11px] font-black tracking-widest ${isActive ? 'text-[#A78BFA]' : 'text-white/30'}`}>
                    {pad(i + 1)}
                  </span>
                  <div>
                    <h3 className="font-black text-white text-[15px] leading-snug">{pt.title}</h3>
                    {isActive && (
                      <p className="text-white/45 text-sm mt-2 leading-relaxed">{pt.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
