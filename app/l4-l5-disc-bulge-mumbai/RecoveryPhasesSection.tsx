import Image from 'next/image'

const PHASES = [
  {
    num: '01',
    title: 'Calm the nerve (weeks 1–2)',
    body: 'Pain control, gentle walking, posture fixes, and short rest bursts — not days in bed. Your physiotherapist checks for red flags and sets a safe starting plan. Aqua therapy may begin here if standing on land is too painful.',
    circleGradient: 'radial-gradient(circle at 38% 38%, #1560A8 0%, #0A3D78 60%, #061E45 100%)',
    glowRgba: '30,110,219',
    borderStop1: 'rgba(125,216,248,0.40)',
    borderStop2: 'rgba(30,110,219,0.12)',
    numColor: '#7DD8F8',
    numBg: 'rgba(125,216,248,0.10)',
    connectorTop: '',
    connectorBot: 'rgba(125,216,248,0.55)',
    iconSrc: '/images/blue-thermometer-and-cold-16548.svg',
    iconAlt: 'Recovery phase one',
  },
  {
    num: '02',
    title: 'Restore movement (weeks 2–6)',
    body: 'Mobility work, nerve glides, core activation, and commute-friendly advice. Pain should gradually shift from constant to occasional. Exercises are prescribed for your pattern — not copied from a generic list.',
    circleGradient: 'radial-gradient(circle at 38% 38%, #C4A8FF 0%, #7B4FE0 65%, #4A1FAD 100%)',
    glowRgba: '123,79,224',
    borderStop1: 'rgba(196,168,255,0.40)',
    borderStop2: 'rgba(123,79,224,0.12)',
    numColor: '#C4A8FF',
    numBg: 'rgba(196,168,255,0.10)',
    connectorTop: 'rgba(125,216,248,0.55)',
    connectorBot: 'rgba(167,139,250,0.55)',
    iconSrc: '/images/process-circular-arrows-15002.svg',
    iconAlt: 'Recovery phase two',
  },
  {
    num: '03',
    title: 'Rebuild strength (weeks 6–12+)',
    body: 'Hip and core strengthening, return-to-desk and return-to-gym progressions, and a flare-up plan for when pain returns. Clinical Pilates often joins here for deep spinal control. Most people feel significantly better — many return to full activity.',
    circleGradient: 'radial-gradient(circle at 38% 38%, #8B2510 0%, #5A1208 60%, #2E0804 100%)',
    glowRgba: '192, 39, 26',
    borderStop1: 'rgba(255,115,64,0.45)',
    borderStop2: 'rgba(192,39,26,0.15)',
    numColor: '#FF7340',
    numBg: 'rgba(255,115,64,0.12)',
    connectorTop: 'rgba(167,139,250,0.55)',
    connectorBot: '',
    iconSrc: '/images/blue-thermometer-and-heat-16549.svg',
    iconAlt: 'Recovery phase three',
  },
]

export function RecoveryPhasesSection() {
  return (
    <section id="recovery" className="bg-[#09090E] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-16 xl:gap-20 items-start">

          <div className="lg:sticky lg:top-28">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase mb-4 block">
              RECOVERY PATH //
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white tracking-tight leading-[1.06] mb-6">
              How L4–L5 disc bulge{' '}
              <span className="text-[#7B5FCA]">usually gets better</span>
            </h2>
            <p className="text-white/45 text-[16px] leading-relaxed max-w-md">
              Most people improve without surgery. Recovery happens in phases — each one builds on the last. Your timeline may differ; nerve pain often takes longer than back pain alone.
            </p>

            <div className="mt-8 p-5 rounded-2xl border border-red-500/20 bg-red-500/[0.06]">
              <p className="text-red-300/90 text-sm font-bold mb-2">Go to hospital urgently if you have:</p>
              <ul className="text-white/45 text-sm space-y-1.5 leading-relaxed">
                <li>• Numbness in groin or saddle area</li>
                <li>• Difficulty passing urine or stool</li>
                <li>• Rapidly worsening leg weakness or foot drop</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {PHASES.map((phase, i) => (
              <div key={i} className="relative flex gap-6 items-start">

                {phase.connectorTop && (
                  <div
                    className="absolute left-[39px] top-0 w-px h-6 -translate-y-full hidden sm:block"
                    style={{ background: `linear-gradient(to bottom, transparent, ${phase.connectorTop})` }}
                  />
                )}

                <div
                  className="relative shrink-0 w-[78px] h-[78px] rounded-full flex items-center justify-center"
                  style={{
                    background: phase.circleGradient,
                    boxShadow: `0 0 40px rgba(${phase.glowRgba}, 0.25)`,
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${phase.borderStop1}, ${phase.borderStop2})`,
                      padding: '1.5px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <Image src={phase.iconSrc} alt={phase.iconAlt} width={32} height={32} className="relative z-10" />
                </div>

                <div className="flex-1 pt-2 pb-4">
                  <div
                    className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-black mb-3"
                    style={{ color: phase.numColor, background: phase.numBg }}
                  >
                    {phase.num}
                  </div>
                  <h3 className="text-white font-black text-xl mb-2 leading-snug">{phase.title}</h3>
                  <p className="text-white/45 text-[15px] leading-relaxed">{phase.body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
