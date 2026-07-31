import React from 'react'
import { Droplet, Activity, Dumbbell } from 'lucide-react'

const PHASES = [
  {
    num: '01',
    title: 'Buoyancy removes up to 75% of joint load',
    body: 'In chest-deep water your body carries only a quarter of its weight. Compressive load drops off the injured or arthritic joint, so movement that is painful on land becomes possible again.',
    borderStop1: 'rgba(56,189,248,0.45)',
    borderStop2: 'rgba(14,116,144,0.15)',
    numColor: '#38BDF8',
    numBg: 'rgba(56,189,248,0.12)',
    connectorColor: 'rgba(56,189,248,0.55)',
    Icon: Droplet,
  },
  {
    num: '02',
    title: 'Hydrostatic pressure controls swelling',
    body: 'Water pressure acts evenly across every submerged surface at once, reducing oedema and improving circulation. Warm water relaxes muscle spasm before movement even begins.',
    borderStop1: 'rgba(45,212,191,0.40)',
    borderStop2: 'rgba(13,148,136,0.12)',
    numColor: '#2DD4BF',
    numBg: 'rgba(45,212,191,0.10)',
    connectorColor: 'rgba(45,212,191,0.55)',
    Icon: Activity,
  },
  {
    num: '03',
    title: 'Resistance rebuilds strength without impact',
    body: 'Water resists movement in every direction, proportional to speed. Muscle blood flow rises up to 225% versus land exercise, so strengthening happens with zero ground-reaction force on the joint.',
    borderStop1: 'rgba(196,168,255,0.40)',
    borderStop2: 'rgba(123,79,224,0.12)',
    numColor: '#C4A8FF',
    numBg: 'rgba(196,168,255,0.10)',
    connectorColor: '',
    Icon: Dumbbell,
  },
]

export function HowItWorksSection() {
  return (
    <section id="protocol" className="bg-[#09090E] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-16 xl:gap-20 items-start">

          {/* ── LEFT: heading block ────────────────── */}
          <div className="lg:sticky lg:top-28">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase mb-4 block">
              HOW IT WORKS //
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-6">
              What water<br className="hidden sm:block" /> does{' '}
              <span className="text-[#7B5FCA]">to your recovery</span>
            </h2>
            <p className="text-white/45 text-[16px] leading-relaxed max-w-md">
              Aqua therapy is not a gentler version of land physio. Buoyancy, pressure and resistance each do a distinct clinical job, and your physiotherapist adjusts water level, temperature and speed to control all three.
            </p>

            {/* Property indicators */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                <span className="text-white/35 text-[12px] font-bold tracking-wide">BUOYANCY</span>
              </div>
              <div className="w-6 h-px bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2DD4BF]" />
                <span className="text-white/35 text-[12px] font-bold tracking-wide">PRESSURE</span>
              </div>
              <div className="w-6 h-px bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C4A8FF]" />
                <span className="text-white/35 text-[12px] font-bold tracking-wide">RESISTANCE</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: phase cards ─────────────────── */}
          <div className="flex flex-col">
            {PHASES.map((phase, i) => {
              const { Icon } = phase
              return (
                <React.Fragment key={i}>
                  {/* Gradient-border card */}
                  <div
                    style={{
                      background: `linear-gradient(135deg, ${phase.borderStop1} 0%, ${phase.borderStop2} 40%, ${phase.borderStop1} 100%)`,
                      padding: '1px',
                      borderRadius: '20px',
                    }}
                  >
                    <div
                      className="flex items-start gap-3.5 sm:gap-5 p-4 sm:p-6 lg:p-7"
                      style={{ background: '#0F0F16', borderRadius: '19px' }}
                    >
                      {/* Left col: badge + circle */}
                      <div className="flex flex-col items-center gap-2 sm:gap-2.5 shrink-0 w-14 sm:w-20">
                        {/* Number badge */}
                        <span
                          className="text-[10px] sm:text-[11px] font-black tracking-widest rounded-full px-2 sm:px-2.5 py-1 leading-none"
                          style={{ color: phase.numColor, background: phase.numBg }}
                        >
                          {phase.num}
                        </span>

                        {/* Outline ring circle */}
                        <div
                          className="w-14 h-14 sm:w-20 sm:h-20"
                          style={{
                            borderRadius: '50%',
                            border: `1.5px solid ${phase.numColor}`,
                            background: phase.numBg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: phase.numColor }} strokeWidth={1.75} />
                        </div>
                      </div>

                      {/* Right: text — vertically centered with circle */}
                      <div className="flex-1 min-w-0 pt-1">
                        <h3 className="text-white font-black text-[15px] sm:text-[18px] lg:text-[19px] leading-snug mb-1.5 sm:mb-2.5">
                          {phase.title}
                        </h3>
                        <p className="text-white/45 text-[13px] sm:text-[15px] leading-relaxed">
                          {phase.body}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dashed connector — between cards, centered under circles */}
                  {i < PHASES.length - 1 && (
                    <div className="flex" style={{ height: '28px' }}>
                      <div className="ml-[36px] sm:ml-16 w-14 sm:w-20 flex justify-center">
                        <div
                          style={{
                            width: '1.5px',
                            height: '100%',
                            background: `repeating-linear-gradient(to bottom, ${phase.connectorColor} 0px, ${phase.connectorColor} 3px, transparent 3px, transparent 8px)`,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
