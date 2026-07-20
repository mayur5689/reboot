'use client'

import { useState } from 'react'
import Image from 'next/image'

const POINTS = [
  {
    title: 'MRI says L4–L5 bulge, now what?',
    description: 'The report looks scary. Your doctor says try physiotherapy first. You want a clear plan — not more confusion.',
    image: '/images/service/Services_image/Physiotherapy_1.webp',
  },
  {
    title: 'Pain shooting down your leg',
    description: 'Lower back pain that travels into your buttock, thigh, or foot — classic sciatica from nerve irritation at L4–L5.',
    image: '/images/Services_image/Physiotherapy.webp',
  },
  {
    title: 'Cannot sit through a meeting or train ride',
    description: 'Mumbai commutes and desk jobs make sitting unbearable. You shift constantly and dread the journey home.',
    image: '/images/service/Services_image/Physiotherapy_1.webp',
  },
  {
    title: 'Morning stiffness that takes an hour to loosen',
    description: 'You wake up tight and cautious. Simple bending — tying shoes, picking something up — triggers sharp pain.',
    image: '/images/Services_image/Physiotherapy.webp',
  },
  {
    title: 'Scared of surgery, want another option',
    description: 'You have been told most cases improve without surgery. You want structured rehab — not just painkillers and rest.',
    image: '/images/Services_image/Hydrotherapy.webp',
  },
  {
    title: 'Gym and sport on hold indefinitely',
    description: 'Deadlifts, running, cricket — all paused because you are not sure what is safe. You need a phased return plan.',
    image: '/images/Services_image/Hydrotherapy_!.webp',
  },
]

export function PainPointsSection() {
  const [active, setActive] = useState(0)
  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <section id="symptoms" className="bg-[#080808] py-16 sm:py-20 lg:py-24">

      <div className="text-center mb-10 sm:mb-12 px-5">
        <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase mb-3 block">
          RECOGNITION //
        </span>
        <h2 className="text-5xl sm:text-6xl lg:text-[4rem] font-black text-white tracking-tight leading-[1.06]">
          Sound familiar<span className="text-[#7B5FCA]">?</span>
        </h2>
        <p className="text-white/40 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          L4–L5 disc bulge affects people differently. If any of these match your week, you are not alone — and most improve with the right rehab.
        </p>
      </div>

      {/* Desktop */}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center space-y-2">
              {POINTS.map((pt, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                    active === i
                      ? 'bg-white/[0.06] border-[#7B5FCA]/40'
                      : 'bg-transparent border-white/[0.06] hover:border-white/[0.12]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`text-[11px] font-black tracking-widest pt-1 shrink-0 ${active === i ? 'text-[#A78BFA]' : 'text-white/25'}`}>
                      {pad(i + 1)}
                    </span>
                    <div>
                      <h3 className={`font-black text-[15px] mb-1 leading-snug ${active === i ? 'text-white' : 'text-white/70'}`}>
                        {pt.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${active === i ? 'text-white/50' : 'text-white/30'}`}>
                        {pt.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Mobile accordion */}
      <div className="lg:hidden px-5 space-y-3">
        {POINTS.map((pt, i) => (
          <div key={i} className="rounded-2xl border border-white/[0.08] overflow-hidden bg-white/[0.03]">
            <button
              onClick={() => setActive(active === i ? -1 : i)}
              className="w-full text-left p-5 flex items-start gap-4"
            >
              <span className="text-[11px] font-black tracking-widest text-[#A78BFA] pt-1 shrink-0">{pad(i + 1)}</span>
              <div className="flex-1">
                <h3 className="font-black text-white text-[15px] leading-snug pr-6">{pt.title}</h3>
              </div>
              <svg
                className={`w-5 h-5 text-white/40 shrink-0 transition-transform duration-300 ${active === i ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {active === i && (
              <div className="px-5 pb-5">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4">
                  <Image src={pt.image} alt={pt.title} fill className="object-cover" />
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{pt.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  )
}
