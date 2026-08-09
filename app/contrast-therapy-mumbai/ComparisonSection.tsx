import { Fragment } from 'react'
import { Waves, Droplet, Dumbbell, Brain, TrendingUp, Smile, Target, Check } from 'lucide-react'

const SNOWFLAKE_PATH = 'm23.397,14.118l-4.539,1.231-2.859-1.639v-3.421l2.798-1.604,4.6,1.247.262-.965-4.295-1.164,1.165-4.295-.965-.262-1.235,4.555-2.747,1.575-3.082-1.779v-3.391l3.354-3.354-.707-.707-3.146,3.146L8.854.146l-.707.707,3.354,3.354v3.391l-3.082,1.779-2.747-1.575-1.236-4.555-.965.262,1.165,4.295L.341,8.968l.262.965,4.6-1.247,2.798,1.604v3.37l-2.919,1.673-4.478-1.215-.262.965,4.295,1.165-1.165,4.295.965.262,1.268-4.676,2.795-1.602,3.001,1.732v3.535l-3.354,3.354.707.707,3.146-3.146,3.146,3.146.707-.707-3.354-3.354v-3.535l2.957-1.707,2.855,1.637,1.252,4.616.965-.262-1.165-4.295,4.295-1.165-.262-.965Zm-8.397-.458l-3,1.732-3-1.732v-3.464l3-1.732,3,1.732v3.464Z'
const CONTRAST_PATH = 'm11.5 21h1v3h-1zm1-21h-1v3h1zm8.5 11.5v1h3v-1zm-21 1h3v-1h-3zm3.161 7.632.707.707 2.122-2.121-.707-.707zm14.85-14.849.707.707 2.121-2.122-.707-.707zm0 13.435 2.121 2.121.707-.707-2.121-2.121zm-12.021-13.435-2.122-2.122-.707.707 2.122 2.122zm13.01 6.717c0 3.859-3.141 7-7 7s-7-3.141-7-7 3.14-7 7-7 7 3.14 7 7zm-1 0c0-3.309-2.691-6-6-6v12c3.309 0 6-2.691 6-6z'

function Snowflake({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d={SNOWFLAKE_PATH} />
    </svg>
  )
}

function ContrastIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d={CONTRAST_PATH} />
    </svg>
  )
}

const ROWS = [
  {
    icon: Waves,
    label: 'Mechanism',
    iceBath: 'Cold vasoconstriction only',
    contrast: 'Vascular pumping (dilate + constrict)',
  },
  {
    icon: Droplet,
    label: 'Waste removal',
    iceBath: 'Moderate',
    contrast: 'Higher, pumping clears more metabolic waste',
  },
  {
    icon: Dumbbell,
    label: 'Muscle soreness',
    iceBath: 'Good',
    contrast: 'Stronger, especially for DOMS',
  },
  {
    icon: Brain,
    label: 'Mental effect',
    iceBath: 'High adrenaline response',
    contrast: 'Balanced: stimulating then calming',
  },
  {
    icon: TrendingUp,
    label: 'Next-day performance',
    iceBath: 'Moderate',
    contrast: 'Better recovery of muscle function',
  },
  {
    icon: Smile,
    label: 'Session experience',
    iceBath: 'Intense, no warm phase',
    contrast: 'More manageable with hot phases',
  },
  {
    icon: Target,
    label: 'Best for',
    iceBath: 'Acute inflammation, competition day',
    contrast: 'Sub-acute recovery, high training loads',
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
  return <div className="h-px bg-gray-100 dark:bg-white/[0.07]" style={{ gridColumn: '1 / -1', gridRow: row }} />
}

export function ComparisonSection() {
  return (
    <section className="py-10 md:py-16 lg:py-28 bg-[#F8F9FA] dark:bg-[#09090E]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">

        {/* Centered heading */}
        <div className="hidden md:block text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
            COMPARISON //
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-5">
            Contrast Therapy delivers more than{' '}
            <span className="text-[#7B5FCA]">cold alone.</span>
          </h2>
          <div className="w-10 h-[2px] bg-[#7B5FCA] mx-auto mb-5" />
          <p className="text-gray-500 dark:text-white/45 text-base leading-relaxed">
            Ice baths have their place. But alternating heat and cold creates a vascular pumping effect that clears more waste, reduces soreness and supports better performance.
          </p>
        </div>
        {/* MOBILE: compact comparison table */}
        <div className="md:hidden relative rounded-2xl border border-gray-100 dark:border-white/[0.08] bg-white dark:bg-[#0D0D13] overflow-hidden">
          <div className="grid grid-cols-[68px_minmax(0,1fr)_minmax(0,1.2fr)]">
            <div className="px-1 py-3 border-b border-gray-100 dark:border-white/[0.07]" />
            <div className="flex items-center justify-center px-1.5 py-3 border-b border-gray-100 dark:border-white/[0.07]">
              <span className="text-gray-500 dark:text-white/45 font-black text-[10px] tracking-wide uppercase text-center leading-tight">
                Ice Bath
              </span>
            </div>
            <div className="flex items-center justify-center px-1.5 py-3 border-b border-[#7B5FCA]/30 bg-[rgba(123,95,202,0.06)]">
              <span className="text-[#513394] dark:text-[#A78BFA] font-black text-[10px] tracking-wide uppercase text-center leading-tight">
                Contrast
              </span>
            </div>

            {ROWS.map((row, i) => {
              const Icon = row.icon
              const isLast = i === ROWS.length - 1
              return (
                <Fragment key={i}>
                  <div className={`flex flex-col items-center justify-center gap-1 px-1 py-3 ${!isLast ? 'border-b border-gray-100 dark:border-white/[0.07]' : ''}`}>
                    <div className="w-7 h-7 rounded-full border-[1.5px] border-[#513394] dark:border-[#A78BFA] flex items-center justify-center shrink-0">
                      <Icon className="w-3 h-3 text-[#513394] dark:text-[#A78BFA]" strokeWidth={2} />
                    </div>
                    <span className="text-gray-900 dark:text-white font-black text-[9px] tracking-wide uppercase text-center leading-tight">
                      {row.label}
                    </span>
                  </div>
                  <div className={`flex items-center justify-center px-2 py-3 text-center ${!isLast ? 'border-b border-gray-100 dark:border-white/[0.07]' : ''}`}>
                    <span className="text-gray-500 dark:text-white/45 text-[11px] leading-snug">
                      {row.iceBath}
                    </span>
                  </div>
                  <div className={`flex items-center justify-between gap-1 px-2 py-3 bg-[rgba(123,95,202,0.06)] ${!isLast ? 'border-b border-[#7B5FCA]/20' : ''}`}>
                    <span className="text-[#513394] dark:text-[#C4B5FD] font-bold text-[11px] leading-snug">
                      {row.contrast}
                    </span>
                    <div className="w-4 h-4 rounded-full bg-[#7B5FCA] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                    </div>
                  </div>
                </Fragment>
              )
            })}
          </div>
        </div>

{/* DESKTOP: comparison table — fully explicit CSS grid (every cell has its own
            row + column) so nothing can be knocked out of place by auto-flow */}
        <div className="hidden md:block relative max-w-6xl mx-auto rounded-3xl border border-gray-100 dark:border-white/[0.08] bg-white dark:bg-[#0D0D13] overflow-hidden">

          {/* Faint vertical rule between col 1 and col 2 */}
          <div
            className="absolute top-0 bottom-0 w-px bg-gray-100 dark:bg-white/[0.07] pointer-events-none"
            style={{ left: `${COL1_2_BOUNDARY_PCT}%` }}
          />

          <div className="grid" style={{ gridTemplateColumns: COLS }}>

            {/* Highlight card for the Contrast Therapy column — spans every row */}
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
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-gray-300 dark:border-[#7DD8F8] bg-gray-100 dark:bg-[rgba(125,216,248,0.10)] flex items-center justify-center shrink-0">
                <Snowflake className="w-[18px] h-[18px] text-gray-500 dark:text-[#7DD8F8]" />
              </div>
              <span className="text-gray-900 dark:text-white font-black text-[13px] sm:text-[15px] tracking-wide uppercase whitespace-nowrap">
                Ice Bath Only
              </span>
            </div>
            <div style={{ gridColumn: 3, gridRow: HEADER_ROW }} className="relative flex items-center justify-center gap-3 h-full px-4 sm:px-7 py-6 sm:py-7">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-[#A78BFA] bg-[rgba(167,139,250,0.10)] flex items-center justify-center shrink-0">
                <ContrastIcon className="w-[18px] h-[18px] text-[#513394] dark:text-[#A78BFA]" />
              </div>
              <span className="text-gray-900 dark:text-white font-black text-[13px] sm:text-[15px] tracking-wide uppercase whitespace-nowrap">
                Contrast Therapy
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
                    <div className="w-10 h-10 rounded-full border-[1.5px] border-[#513394] dark:border-[#A78BFA] flex items-center justify-center shrink-0">
                      <Icon className="w-[18px] h-[18px] text-[#513394] dark:text-[#A78BFA]" strokeWidth={2} />
                    </div>
                    <span className="text-gray-900 dark:text-white font-black text-[13px] sm:text-[14px] tracking-wide uppercase leading-tight">
                      {row.label}
                    </span>
                  </div>

                  <div style={{ gridColumn: 2, gridRow: r }} className="flex items-center justify-center h-full px-3 sm:px-7 py-6 sm:py-7 text-center">
                    <span className="text-gray-500 dark:text-white/45 text-[14px] sm:text-[16px] leading-snug">
                      {row.iceBath}
                    </span>
                  </div>

                  <div style={{ gridColumn: 3, gridRow: r }} className="flex items-center justify-between gap-3 h-full px-5 sm:px-7 py-6 sm:py-7">
                    <span className="text-[#513394] dark:text-[#C4B5FD] font-bold text-[14px] sm:text-[16px] leading-snug">
                      {row.contrast}
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
