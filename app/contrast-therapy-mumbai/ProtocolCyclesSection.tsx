import {
  CONTRAST_ICE_BATH_TEMP_RANGE,
  CONTRAST_SAUNA_TEMP_LABEL,
  DAY_FULL_CYCLE_SUMMARY,
  DAY_HALF_CYCLE_SUMMARY,
  FULL_CYCLE_PRICE_LABEL,
  FULL_CYCLE_RULE,
  HALF_CYCLE_PRICE_LABEL,
  NIGHT_FULL_CYCLE_SUMMARY,
  NIGHT_HALF_CYCLE_SUMMARY,
} from '@/lib/contrast-therapy/protocol'

const CYCLES = [
  {
    name: 'Day Cycle',
    tagline: 'End cold · stay energised',
    when: 'Training, work, or activity still ahead in your day',
    finish: `Ice bath (${CONTRAST_ICE_BATH_TEMP_RANGE})`,
    half: DAY_HALF_CYCLE_SUMMARY,
    full: DAY_FULL_CYCLE_SUMMARY,
    accent: '#7DD8F8',
  },
  {
    name: 'Night Cycle',
    tagline: 'End heat · deep recovery',
    when: 'Recovery, stress relief, sleep. Often before sports massage when booked together',
    finish: `Infrared sauna (${CONTRAST_SAUNA_TEMP_LABEL})`,
    half: NIGHT_HALF_CYCLE_SUMMARY,
    full: NIGHT_FULL_CYCLE_SUMMARY,
    accent: '#FF7340',
  },
]

export function ProtocolCyclesSection() {
  return (
    <section id="day-night-protocol" className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FA] dark:bg-[#0D0D13]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
            R3BOOT PROTOCOL //
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Day &amp; Night <span className="text-[#513394] dark:text-[#7B5FCA]">Cycles</span>
          </h2>
          <p className="text-gray-500 dark:text-white/45 text-base leading-relaxed">
            {FULL_CYCLE_RULE} Your physiotherapist picks Day or Night at intake based on your schedule; we do not mix them in one session.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {CYCLES.map((cycle) => (
            <div
              key={cycle.name}
              className="rounded-2xl border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-[#0F0F16] p-6 sm:p-7"
            >
              <p className="text-[11px] font-black tracking-[0.25em] uppercase mb-2" style={{ color: cycle.accent }}>
                {cycle.tagline}
              </p>
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">{cycle.name}</h3>
              <p className="text-sm text-gray-500 dark:text-white/45 mb-4 leading-relaxed">{cycle.when}</p>
              <p className="text-sm text-gray-900 dark:text-white/90 mb-4">
                <span className="font-bold">Always finishes on:</span> {cycle.finish}
              </p>
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                <div className="rounded-xl border border-gray-200 dark:border-white/[0.08] bg-[#F8F9FA] dark:bg-white/[0.04] px-3 py-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-gray-500 dark:text-white/40 mb-1">
                    30 min
                  </p>
                  <p className="text-lg font-black text-gray-900 dark:text-white leading-none">
                    {HALF_CYCLE_PRICE_LABEL}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-white/40 mt-1">Half Cycle</p>
                </div>
                <div className="rounded-xl border border-[#513394]/25 dark:border-[#A78BFA]/30 bg-[#513394]/8 dark:bg-[#513394]/15 px-3 py-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#513394] dark:text-[#A78BFA] mb-1">
                    60 min
                  </p>
                  <p className="text-lg font-black text-gray-900 dark:text-white leading-none">
                    {FULL_CYCLE_PRICE_LABEL}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-white/40 mt-1">Full Cycle</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-white/40 leading-relaxed mb-3">
                <span className="font-bold text-gray-600 dark:text-white/55">Half Cycle (30 min):</span> {cycle.half}
              </p>
              <p className="text-xs text-gray-500 dark:text-white/40 leading-relaxed">
                <span className="font-bold text-gray-600 dark:text-white/55">Full Cycle (60 min):</span> {cycle.full}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-white/40 max-w-3xl mx-auto leading-relaxed">
          Sauna at {CONTRAST_SAUNA_TEMP_LABEL}, ice bath at {CONTRAST_ICE_BATH_TEMP_RANGE}. Temperatures may only be reduced on your request. Shower before the session is required; hydrate with water and electrolytes (no caffeine beforehand).
        </p>
      </div>
    </section>
  )
}
