import React from 'react'

const PILLARS = [
  {
    num: '01',
    label: 'Performance skills',
    title: 'Sports Psychology',
    body: 'Build the mental tools that hold under pressure: focus routines, visualisation, self-talk, composure, and competition-day preparation. Practical, future-oriented, and designed for sport.',
    light: '#513394',
    dark: '#A78BFA',
    bgLight: 'rgba(81,51,148,0.08)',
    bgDark: 'rgba(167,139,250,0.14)',
    borderLight: 'rgba(81,51,148,0.35)',
    borderDark: 'rgba(167,139,250,0.45)',
    points: [
      'Performance anxiety & choke under pressure',
      'Focus, routines, and pre-competition prep',
      'Confidence and mental resilience training',
      'Goal setting that survives a bad week',
    ],
  },
  {
    num: '02',
    label: 'Emotional & rehab support',
    title: 'Counselling & Mental Training',
    body: 'Address the emotional load that training alone cannot fix: injury anxiety, burnout, motivation loss, and learning to trust your body again while physical rehab continues.',
    light: '#0D9488',
    dark: '#2DD4BF',
    bgLight: 'rgba(13,148,136,0.08)',
    bgDark: 'rgba(45,212,191,0.14)',
    borderLight: 'rgba(13,148,136,0.35)',
    borderDark: 'rgba(45,212,191,0.45)',
    points: [
      'Injury psychology & return-to-sport trust',
      'Burnout, motivation, and habit rebuilding',
      'Mind-body connection alongside physio',
      'Emotional regulation under sustained load',
    ],
  },
  {
    num: '03',
    label: 'Workplace performance',
    title: 'Corporate & Working Professionals',
    body: 'Deadline pressure, decision fatigue, and burnout show up the same way stress shows up in sport, just with different triggers. The same two disciplines, applied to high-stakes work instead of competition.',
    light: '#0369A1',
    dark: '#38BDF8',
    bgLight: 'rgba(3,105,161,0.08)',
    bgDark: 'rgba(56,189,248,0.14)',
    borderLight: 'rgba(3,105,161,0.35)',
    borderDark: 'rgba(56,189,248,0.45)',
    points: [
      'Burnout and chronic work stress',
      'Focus & decision-making under deadline pressure',
      'Confidence in high-stakes meetings and reviews',
      'Sustainable routines, not one-off stress relief',
    ],
  },
]

export function WhoWeHelpSection() {
  return (
    <section id="who-we-help" className="bg-[#F8F9FA] dark:bg-[#0D0D0D] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-16 xl:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              HOW IT WORKS //
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.06] mb-6">
              Three domains.<br className="hidden sm:block" />{' '}
              <span className="text-[#513394] dark:text-[#8B5CF6]">One mental service.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-[16px] leading-relaxed max-w-md">
              Performance skills when you need edge. Emotional support when you need stability. Built for athletes, injury rehab, and working professionals.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#513394] dark:bg-[#A78BFA]" />
                <span className="text-gray-500 dark:text-white/35 text-[12px] font-bold tracking-wide">Performance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0D9488] dark:bg-[#2DD4BF]" />
                <span className="text-gray-500 dark:text-white/35 text-[12px] font-bold tracking-wide">Counselling</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0369A1] dark:bg-[#38BDF8]" />
                <span className="text-gray-500 dark:text-white/35 text-[12px] font-bold tracking-wide">Corporate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-white/30" />
                <span className="text-gray-500 dark:text-white/35 text-[12px] font-bold tracking-wide">50 min sessions</span>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {PILLARS.map((pillar) => {
              return (
                <div
                  key={pillar.num}
                  className="relative rounded-2xl border border-gray-100 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] p-6 sm:p-8 overflow-hidden"
                  style={{
                    boxShadow: `inset 0 0 0 1px ${pillar.bgLight}`,
                  }}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm shrink-0 text-[var(--pc)] dark:text-[var(--pcd)] bg-[var(--pbg)] dark:bg-[var(--pbgd)]"
                      style={{
                        '--pc': pillar.light,
                        '--pcd': pillar.dark,
                        '--pbg': pillar.bgLight,
                        '--pbgd': pillar.bgDark,
                      } as React.CSSProperties}
                    >
                      {pillar.num}
                    </div>
                    <div className="min-w-0">
                      <p
                        className="text-[11px] font-black tracking-[0.22em] uppercase mb-2"
                        style={{ color: pillar.light }}
                      >
                        {pillar.label}
                      </p>
                      <h3 className="text-gray-900 dark:text-white font-black text-2xl sm:text-[1.75rem] tracking-tight mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-500 dark:text-white/45 text-[15px] leading-relaxed mb-5 max-w-xl">
                        {pillar.body}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {pillar.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-white/70">
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: pillar.light }}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
