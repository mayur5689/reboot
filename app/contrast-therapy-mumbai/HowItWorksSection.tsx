import React from 'react'

const ICON_PATHS: Record<string, string> = {
  heat: 'M20.5,24c-.042,0-.086-.005-.129-.017-.267-.071-.426-.345-.354-.612,.114-.428,.243-.826,.369-1.218,.315-.98,.614-1.906,.614-3.16,0-2.766-1.029-4.801-1.927-6.265-.965-1.576-2.073-3.771-2.073-6.788,0-1.884,.772-4.482,1.294-5.646,.113-.252,.409-.365,.661-.251,.252,.113,.364,.409,.251,.661-.421,.938-1.206,3.436-1.206,5.236,0,2.766,1.029,4.801,1.927,6.265,.965,1.576,2.073,3.771,2.073,6.788,0,1.411-.337,2.456-.663,3.467-.121,.375-.244,.758-.354,1.168-.06,.224-.262,.371-.483,.371Zm-7,0c-.042,0-.086-.005-.129-.017-.267-.071-.426-.345-.354-.612,.114-.428,.243-.826,.369-1.218,.315-.98,.614-1.906,.614-3.16,0-2.766-1.029-4.801-1.927-6.265-.965-1.576-2.073-3.771-2.073-6.788,0-1.884,.772-4.482,1.294-5.646,.112-.252,.409-.365,.661-.251,.252,.113,.364,.409,.251,.661-.421,.938-1.206,3.436-1.206,5.236,0,2.766,1.029,4.801,1.927,6.265,.965,1.576,2.073,3.771,2.073,6.788,0,1.411-.337,2.456-.663,3.467-.121,.375-.244,.758-.354,1.168-.06,.224-.262,.371-.483,.371Zm-7,0c-.042,0-.086-.005-.129-.017-.267-.071-.426-.345-.354-.612,.114-.428,.243-.826,.369-1.218,.315-.98,.614-1.906,.614-3.16,0-2.766-1.029-4.801-1.927-6.265-.965-1.576-2.073-3.771-2.073-6.788,0-1.884,.772-4.482,1.294-5.646,.112-.252,.41-.365,.661-.251,.252,.113,.364,.409,.251,.661-.421,.938-1.206,3.436-1.206,5.236,0,2.766,1.029,4.801,1.927,6.265,.965,1.576,2.073,3.771,2.073,6.788,0,1.411-.337,2.456-.663,3.467-.121,.375-.244,.758-.354,1.168-.06,.224-.262,.371-.483,.371Z',
  snowflake: 'm23.397,14.118l-4.539,1.231-2.859-1.639v-3.421l2.798-1.604,4.6,1.247.262-.965-4.295-1.164,1.165-4.295-.965-.262-1.235,4.555-2.747,1.575-3.082-1.779v-3.391l3.354-3.354-.707-.707-3.146,3.146L8.854.146l-.707.707,3.354,3.354v3.391l-3.082,1.779-2.747-1.575-1.236-4.555-.965.262,1.165,4.295L.341,8.968l.262.965,4.6-1.247,2.798,1.604v3.37l-2.919,1.673-4.478-1.215-.262.965,4.295,1.165-1.165,4.295.965.262,1.268-4.676,2.795-1.602,3.001,1.732v3.535l-3.354,3.354.707.707,3.146-3.146,3.146,3.146.707-.707-3.354-3.354v-3.535l2.957-1.707,2.855,1.637,1.252,4.616.965-.262-1.165-4.295,4.295-1.165-.262-.965Zm-8.397-.458l-3,1.732-3-1.732v-3.464l3-1.732,3,1.732v3.464Z',
  cycle: 'm24,12h-1c0-6.065-4.935-11-11-11-3.712,0-7.169,1.91-9.193,5h4.193v1H2.5c-.827,0-1.5-.673-1.5-1.5V1h1v4.412C4.211,2.067,7.967,0,12,0c6.617,0,12,5.383,12,12Zm-2.5,5h-4.5v1h4.193c-2.024,3.09-5.481,5-9.193,5-6.065,0-11-4.935-11-11H0c0,6.617,5.383,12,12,12,4.033,0,7.789-2.067,10-5.412v4.412h1v-4.5c0-.827-.673-1.5-1.5-1.5Z',
}

function PhaseIcon({ icon, color, className }: { icon: string; color: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={color}>
      <path d={ICON_PATHS[icon]} />
    </svg>
  )
}

const PHASES = [
  {
    num: '01',
    title: 'Heat phase at 68°C',
    body: 'Blood vessels dilate. Blood flow to muscles increases. Oxygen and nutrients reach damaged tissue. Muscle tension decreases.',
    borderStop1: 'rgba(255,115,64,0.45)',
    borderStop2: 'rgba(192,39,26,0.15)',
    numColor: '#FF7340',
    numBg: 'rgba(255,115,64,0.12)',
    connectorTop: 'rgba(255,115,64,0.55)',
    connectorBot: 'rgba(56,189,248,0.55)',
    icon: 'heat',
  },
  {
    num: '02',
    title: 'Cold phase at 6–10°C',
    body: 'Blood vessels constrict. Blood and metabolic waste - lactic acid, inflammatory cytokines - are forced away from muscles. Swelling reduces.',
    borderStop1: 'rgba(125,216,248,0.40)',
    borderStop2: 'rgba(30,110,219,0.12)',
    numColor: '#7DD8F8',
    numBg: 'rgba(125,216,248,0.10)',
    connectorTop: 'rgba(56,189,248,0.55)',
    connectorBot: 'rgba(167,139,250,0.55)',
    icon: 'snowflake',
  },
  {
    num: '03',
    title: 'The alternation effect',
    body: 'Repeating the cycle creates a vascular pumping action. Research shows contrast therapy reduces perceived muscle soreness significantly more than cold immersion alone.',
    borderStop1: 'rgba(196,168,255,0.40)',
    borderStop2: 'rgba(123,79,224,0.12)',
    numColor: '#C4A8FF',
    numBg: 'rgba(196,168,255,0.10)',
    connectorTop: '',
    connectorBot: '',
    icon: 'cycle',
  },
]

export function HowItWorksSection() {
  return (
    <section id="protocol" className="bg-white dark:bg-[#09090E] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-16 xl:gap-20 items-start">

          {/* ── LEFT: heading block ────────────────── */}
          <div className="lg:sticky lg:top-28">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              HOW IT WORKS //
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.06] mb-6">
              What contrast<br className="hidden sm:block" /> therapy does{' '}
              <span className="text-[#513394] dark:text-[#7B5FCA]">to your body</span>
            </h2>
            <p className="text-gray-500 dark:text-white/45 text-[16px] leading-relaxed max-w-md">
              When you alternate between heat and cold, your body responds at a vascular level. Repeating the cycle two to three times creates a pumping action that clears metabolic waste at a rate passive rest cannot match.
            </p>

            {/* Temp indicators */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF7340]" />
                <span className="text-gray-400 dark:text-white/35 text-[12px] font-bold tracking-wide">68°C</span>
              </div>
              <div className="w-6 h-px bg-gray-200 dark:bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7DD8F8]" />
                <span className="text-gray-400 dark:text-white/35 text-[12px] font-bold tracking-wide">6–10°C</span>
              </div>
              <div className="w-6 h-px bg-gray-200 dark:bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C4A8FF]" />
                <span className="text-gray-400 dark:text-white/35 text-[12px] font-bold tracking-wide">CYCLE</span>
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
                    className="flex items-start gap-3.5 sm:gap-5 p-4 sm:p-6 lg:p-7 bg-[#F8F9FA] dark:bg-[#0F0F16]"
                    style={{ borderRadius: '19px' }}
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
                        <PhaseIcon icon={phase.icon} color={phase.numColor} className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                    </div>

                    {/* Right: text — vertically centered with circle */}
                    <div className="flex-1 min-w-0 pt-1">
                      <h3 className="text-gray-900 dark:text-white font-black text-[15px] sm:text-[18px] lg:text-[19px] leading-snug mb-1.5 sm:mb-2.5">
                        {phase.title}
                      </h3>
                      <p className="text-gray-500 dark:text-white/45 text-[13px] sm:text-[15px] leading-relaxed">
                        {phase.body}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dashed connector — between cards, centered under circles */}
                {i < PHASES.length - 1 && (
                  <div className="flex" style={{ height: '28px' }}>
                    {/* Left col = w-14/w-20, card left padding = p-4/p-6 — offset = padding + half col width */}
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
