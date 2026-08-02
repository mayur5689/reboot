import React from 'react'
import { Activity, Gauge, ClipboardCheck } from 'lucide-react'

const PHASES = [
  {
    num: '01',
    title: 'Baseline capture',
    body: 'Every major joint goes through range of motion, flexibility, and gait analysis. Left versus right, logged and scored, not eyeballed.',
    borderStop1: 'rgba(125,216,248,0.40)',
    borderStop2: 'rgba(30,110,219,0.12)',
    numColor: '#7DD8F8',
    numBg: 'rgba(125,216,248,0.10)',
    connectorTop: 'rgba(56,189,248,0.55)',
    connectorBot: 'rgba(255,115,64,0.55)',
    Icon: Activity,
  },
  {
    num: '02',
    title: 'Stress testing under load',
    body: 'Balance, strength, and coordination pushed the way your sport actually pushes you. This is where compensations that hide at rest show up.',
    borderStop1: 'rgba(255,115,64,0.45)',
    borderStop2: 'rgba(192,39,26,0.15)',
    numColor: '#FF7340',
    numBg: 'rgba(255,115,64,0.12)',
    connectorTop: 'rgba(255,115,64,0.55)',
    connectorBot: 'rgba(167,139,250,0.55)',
    Icon: Gauge,
  },
  {
    num: '03',
    title: 'Risk mapping and the plan',
    body: 'Every finding gets scored and ranked by risk. You leave with a clinician-built Recovery & Performance Plan, not a stack of numbers to interpret yourself.',
    borderStop1: 'rgba(196,168,255,0.40)',
    borderStop2: 'rgba(123,79,224,0.12)',
    numColor: '#C4A8FF',
    numBg: 'rgba(196,168,255,0.10)',
    connectorTop: '',
    connectorBot: '',
    Icon: ClipboardCheck,
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
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white tracking-tight leading-[1.06] mb-6">
              What athlete screening<br className="hidden sm:block" /> does{' '}
              <span className="text-[#7B5FCA]">to your risk profile</span>
            </h2>
            <p className="text-white/45 text-[16px] leading-relaxed max-w-md">
              We don&apos;t guess where you&apos;re vulnerable. We measure it, stress it under sport-specific load, and rank it, so the plan you leave with is built on data, not a hunch.
            </p>

            {/* Stage indicators */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7DD8F8]" />
                <span className="text-white/35 text-[12px] font-bold tracking-wide">BASELINE</span>
              </div>
              <div className="w-6 h-px bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF7340]" />
                <span className="text-white/35 text-[12px] font-bold tracking-wide">LOAD</span>
              </div>
              <div className="w-6 h-px bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C4A8FF]" />
                <span className="text-white/35 text-[12px] font-bold tracking-wide">RISK MAP</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: phase cards ─────────────────── */}
          <div className="flex flex-col">
            {PHASES.map((phase, i) => (
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
                        <phase.Icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: phase.numColor }} strokeWidth={1.75} />
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
                          background: `repeating-linear-gradient(to bottom, ${phase.connectorTop} 0px, ${phase.connectorTop} 3px, transparent 3px, transparent 8px)`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
