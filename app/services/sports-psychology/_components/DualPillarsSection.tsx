const PILLARS = [
  {
    num: '01',
    label: 'Performance skills',
    title: 'Sports Psychology',
    body: 'Build the mental tools that hold under pressure — focus routines, visualisation, self-talk, composure, and competition-day preparation. Practical, future-oriented, and designed for sport.',
    points: [
      'Performance anxiety & choke under pressure',
      'Focus, routines, and pre-competition prep',
      'Confidence and mental resilience training',
      'Goal setting that survives a bad week',
    ],
    accent: '#A78BFA',
    accentSoft: 'rgba(167,139,250,0.12)',
  },
  {
    num: '02',
    label: 'Emotional & rehab support',
    title: 'Counselling & Mental Training',
    body: 'Address the emotional load that training alone cannot fix — injury anxiety, burnout, motivation loss, and learning to trust your body again while physical rehab continues.',
    points: [
      'Injury psychology & return-to-sport trust',
      'Burnout, motivation, and habit rebuilding',
      'Mind–body connection alongside physio',
      'Emotional regulation under sustained load',
    ],
    accent: '#7DD8F8',
    accentSoft: 'rgba(125,216,248,0.10)',
  },
]

export function DualPillarsSection() {
  return (
    <section id="protocol" className="bg-[#09090E] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-16 xl:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase mb-4 block">
              HOW IT WORKS //
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white tracking-tight leading-[1.06] mb-6">
              Two disciplines.<br className="hidden sm:block" />{' '}
              <span className="text-[#7B5FCA]">One mental service.</span>
            </h2>
            <p className="text-white/45 text-[16px] leading-relaxed max-w-md">
              Sports psychology and counselling used to sit on separate pages. At R3BOOT they run as one integrated offering — performance skills when you need edge, emotional support when you need stability, often in the same care plan.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#A78BFA]" />
                <span className="text-white/35 text-[12px] font-bold tracking-wide">Performance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7DD8F8]" />
                <span className="text-white/35 text-[12px] font-bold tracking-wide">Counselling</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/30" />
                <span className="text-white/35 text-[12px] font-bold tracking-wide">50 min sessions</span>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.num}
                className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 sm:p-8 overflow-hidden"
                style={{
                  boxShadow: `inset 0 0 0 1px ${pillar.accentSoft}`,
                }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm shrink-0"
                    style={{ background: pillar.accentSoft, color: pillar.accent }}
                  >
                    {pillar.num}
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-[11px] font-black tracking-[0.22em] uppercase mb-2"
                      style={{ color: pillar.accent }}
                    >
                      {pillar.label}
                    </p>
                    <h3 className="text-white font-black text-2xl sm:text-[1.75rem] tracking-tight mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-white/45 text-[15px] leading-relaxed mb-5 max-w-xl">
                      {pillar.body}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {pillar.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-white/70">
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: pillar.accent }}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
