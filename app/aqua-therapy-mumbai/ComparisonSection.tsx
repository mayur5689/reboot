import { Fragment } from 'react'
import { Waves, Droplet, Dumbbell, Brain, TrendingUp, Smile, Target, Check, Activity } from 'lucide-react'

const ROWS = [
  {
    icon: Waves,
    label: 'Joint load',
    land: 'Full body weight through the joint',
    aqua: 'Up to 75% reduced in chest-deep water',
  },
  {
    icon: Brain,
    label: 'Pain during exercise',
    land: 'Often limits range of motion',
    aqua: 'Pain-free range becomes achievable',
  },
  {
    icon: Dumbbell,
    label: 'Muscle blood flow',
    land: 'Baseline',
    aqua: 'Up to 225% higher than land exercise',
  },
  {
    icon: TrendingUp,
    label: 'Post-surgery timeline',
    land: 'Delayed until tissue tolerates load',
    aqua: 'Progressive loading begins weeks earlier',
  },
  {
    icon: Droplet,
    label: 'Swelling management',
    land: 'Managed separately with ice and compression',
    aqua: 'Reduced during the session by hydrostatic pressure',
  },
  {
    icon: Smile,
    label: 'Session experience',
    land: 'Guarded, hesitant movement',
    aqua: 'Supported, confident movement',
  },
  {
    icon: Target,
    label: 'Best for',
    land: 'Later-stage strengthening',
    aqua: 'Post-surgical, arthritic, high-pain conditions',
  },
]

// Column fractions — shared by every row so boundaries line up pixel-for-pixel.
const COL_FR = [1.25, 0.9, 1.25]
const TOTAL_FR = COL_FR.reduce((a, b) => a + b, 0)
const COLS = COL_FR.map((f) => `minmax(0,${f}fr)`).join(' ')
const COL1_2_BOUNDARY_PCT = (COL_FR[0] / TOTAL_FR) * 100

// Explicit row map — every cell gets a real grid-row number so the
// column-3 highlight card (which spans every row) can't steal cells
// from CSS auto-placement and shove the rest of the table out of order.
const HEADER_ROW = 1
const HEADER_DIVIDER_ROW = 2
const dataRow = (i: number) => HEADER_DIVIDER_ROW + 1 + i * 2
const dividerRow = (i: number) => dataRow(i) + 1
const LAST_ROW = dataRow(ROWS.length - 1)

function Divider({ row }: { row: number }) {
  return <div className="h-px bg-white/[0.07]" style={{ gridColumn: '1 / -1', gridRow: row }} />
}

export function ComparisonSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#09090E]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">

        {/* Centered heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase mb-4 block">
            COMPARISON //
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-5">
            Aqua Therapy does what{' '}
            <span className="text-[#7B5FCA]">land physio cannot.</span>
          </h2>
          <div className="w-10 h-[2px] bg-[#7B5FCA] mx-auto mb-5" />
          <p className="text-white/45 text-base leading-relaxed">
            Land-based physio has its place. But when a joint cannot yet bear full weight, water removes the load that makes rehab too painful to progress.
          </p>
        </div>

        {/* MOBILE: stacked cards — one per factor, Land then Aqua */}
        <div className="md:hidden flex flex-col gap-3">
          {ROWS.map((row, i) => {
            const Icon = row.icon
            return (
              <div key={i} className="rounded-2xl border border-white/[0.08] bg-[#0D0D13] overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]">
                  <div className="w-9 h-9 rounded-full border-[1.5px] border-[#A78BFA] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#A78BFA]" strokeWidth={2} />
                  </div>
                  <span className="text-white font-black text-[13px] tracking-wide uppercase">{row.label}</span>
                </div>

                <div className="px-5 py-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Activity className="w-3.5 h-3.5 text-white/40" />
                    <span className="text-white/35 text-[10px] font-black tracking-widest uppercase">Land-Based Physio</span>
                  </div>
                  <p className="text-white/45 text-[14px] leading-snug pl-[22px]">{row.land}</p>
                </div>

                <div className="px-5 py-4" style={{ background: 'rgba(123,95,202,0.08)' }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <Droplet className="w-3.5 h-3.5 text-[#A78BFA]" />
                      <span className="text-[#A78BFA] text-[10px] font-black tracking-widest uppercase">Aqua Therapy</span>
                    </div>
                    <div className="w-5 h-5 rounded-full bg-[#7B5FCA] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <p className="text-[#C4B5FD] font-bold text-[14px] leading-snug pl-[22px]">{row.aqua}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* DESKTOP: comparison table — fully explicit CSS grid (every cell has its own
            row + column) so nothing can be knocked out of place by auto-flow */}
        <div className="hidden md:block relative max-w-6xl mx-auto rounded-3xl border border-white/[0.08] bg-[#0D0D13] overflow-hidden">

          {/* Faint vertical rule between col 1 and col 2 */}
          <div
            className="absolute top-0 bottom-0 w-px bg-white/[0.07] pointer-events-none"
            style={{ left: `${COL1_2_BOUNDARY_PCT}%` }}
          />

          <div className="grid" style={{ gridTemplateColumns: COLS }}>

            {/* Highlight card for the Aqua Therapy column — spans every row */}
            <div
              className="m-2.5 rounded-2xl border border-[#7B5FCA]/40"
              style={{
                gridColumn: 3,
                gridRow: `1 / ${LAST_ROW + 1}`,
                background: 'rgba(123,95,202,0.06)',
                boxShadow: '0 0 44px rgba(123,95,202,0.13)',
              }}
            />

            {/* Header row */}
            <div style={{ gridColumn: 1, gridRow: HEADER_ROW }} className="flex items-center h-full px-5 sm:px-7 py-6 sm:py-7" />
            <div style={{ gridColumn: 2, gridRow: HEADER_ROW }} className="flex items-center justify-center gap-3 h-full px-3 sm:px-7 py-6 sm:py-7">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-white/25 bg-white/[0.05] flex items-center justify-center shrink-0">
                <Activity className="w-[18px] h-[18px] text-white/60" />
              </div>
              <span className="text-white font-black text-[13px] sm:text-[15px] tracking-wide uppercase whitespace-nowrap">
                Land-Based Physio
              </span>
            </div>
            <div style={{ gridColumn: 3, gridRow: HEADER_ROW }} className="relative flex items-center justify-center gap-3 h-full px-4 sm:px-7 py-6 sm:py-7">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-[#A78BFA] bg-[rgba(167,139,250,0.10)] flex items-center justify-center shrink-0">
                <Droplet className="w-[18px] h-[18px] text-[#A78BFA]" />
              </div>
              <span className="text-white font-black text-[13px] sm:text-[15px] tracking-wide uppercase whitespace-nowrap">
                Aqua Therapy
              </span>
            </div>

            <Divider row={HEADER_DIVIDER_ROW} />

            {/* Data rows */}
            {ROWS.map((row, i) => {
              const Icon = row.icon
              const r = dataRow(i)
              return (
                <Fragment key={i}>
                  <div style={{ gridColumn: 1, gridRow: r }} className="flex items-center gap-3.5 h-full px-5 sm:px-7 py-6 sm:py-7 min-w-0">
                    <div className="w-10 h-10 rounded-full border-[1.5px] border-[#A78BFA] flex items-center justify-center shrink-0">
                      <Icon className="w-[18px] h-[18px] text-[#A78BFA]" strokeWidth={2} />
                    </div>
                    <span className="text-white font-black text-[13px] sm:text-[14px] tracking-wide uppercase leading-tight">
                      {row.label}
                    </span>
                  </div>

                  <div style={{ gridColumn: 2, gridRow: r }} className="flex items-center justify-center h-full px-3 sm:px-7 py-6 sm:py-7 text-center">
                    <span className="text-white/45 text-[14px] sm:text-[16px] leading-snug">
                      {row.land}
                    </span>
                  </div>

                  <div style={{ gridColumn: 3, gridRow: r }} className="flex items-center justify-between gap-3 h-full px-5 sm:px-7 py-6 sm:py-7">
                    <span className="text-[#C4B5FD] font-bold text-[14px] sm:text-[16px] leading-snug">
                      {row.aqua}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#7B5FCA] flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                  </div>

                  {i < ROWS.length - 1 && <Divider row={dividerRow(i)} />}
                </Fragment>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
