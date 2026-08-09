import { Fragment } from 'react'
import {
  Users,
  ClipboardList,
  Target,
  TrendingUp,
  Layers,
  Hand,
  Building2,
  Stethoscope,
  Check,
} from 'lucide-react'

const ROWS = [
  {
    icon: Users,
    label: 'Performed by',
    spa: 'General spa therapist',
    r3boot: 'Certified sports therapy specialist',
  },
  {
    icon: ClipboardList,
    label: 'Starts with',
    spa: 'Preference form',
    r3boot: 'Movement & load assessment',
  },
  {
    icon: Target,
    label: 'Adjusted for',
    spa: 'Pressure preference',
    r3boot: 'Training phase (pre/post event)',
  },
  {
    icon: Layers,
    label: 'Includes',
    spa: 'Relaxation strokes',
    r3boot: 'Trigger point, MFR, cupping, activation',
  },
  {
    icon: Hand,
    label: 'Ends with',
    spa: 'Relaxation',
    r3boot: 'Mobility drills & recovery advice',
  },
  {
    icon: TrendingUp,
    label: 'Goal',
    spa: 'Temporary relaxation',
    r3boot: 'Performance continuity',
  },
]

const COL_FR = [1.25, 0.9, 1.25]
const TOTAL_FR = COL_FR.reduce((a, b) => a + b, 0)
const COLS = COL_FR.map((f) => `minmax(0,${f}fr)`).join(' ')
const COL1_2_BOUNDARY_PCT = (COL_FR[0] / TOTAL_FR) * 100

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
        <div className="hidden md:block text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
            COMPARISON //
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-5">
            Clinical sports massage is more than{' '}
            <span className="text-[#7B5FCA]">a spa deep tissue.</span>
          </h2>
          <div className="w-10 h-[2px] bg-[#7B5FCA] mx-auto mb-5" />
          <p className="text-gray-500 dark:text-white/45 text-base leading-relaxed">
            Spa massage follows pressure preference. Clinical sports massage starts with your training load, movement screen, and recovery goals — then treats what assessment finds.
          </p>
        </div>
        {/* MOBILE: compact comparison table */}
        <div className="md:hidden relative rounded-2xl border border-gray-100 dark:border-white/[0.08] bg-white dark:bg-[#0D0D13] overflow-hidden">
          <div className="grid grid-cols-[68px_minmax(0,1fr)_minmax(0,1.2fr)]">
            <div className="px-1 py-3 border-b border-gray-100 dark:border-white/[0.07]" />
            <div className="flex items-center justify-center px-1.5 py-3 border-b border-gray-100 dark:border-white/[0.07]">
              <span className="text-gray-500 dark:text-white/45 font-black text-[10px] tracking-wide uppercase text-center leading-tight">
                Spa
              </span>
            </div>
            <div className="flex items-center justify-center px-1.5 py-3 border-b border-[#7B5FCA]/30 bg-[rgba(123,95,202,0.06)]">
              <span className="text-[#513394] dark:text-[#A78BFA] font-black text-[10px] tracking-wide uppercase text-center leading-tight">
                R3BOOT
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
                      {row.spa}
                    </span>
                  </div>
                  <div className={`flex items-center justify-between gap-1 px-2 py-3 bg-[rgba(123,95,202,0.06)] ${!isLast ? 'border-b border-[#7B5FCA]/20' : ''}`}>
                    <span className="text-[#513394] dark:text-[#C4B5FD] font-bold text-[11px] leading-snug">
                      {row.r3boot}
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

        {/* DESKTOP */}
        <div className="hidden md:block relative max-w-6xl mx-auto rounded-3xl border border-gray-100 dark:border-white/[0.08] bg-white dark:bg-[#0D0D13] overflow-hidden">
          <div
            className="absolute top-0 bottom-0 w-px bg-gray-100 dark:bg-white/[0.07] pointer-events-none"
            style={{ left: `${COL1_2_BOUNDARY_PCT}%` }}
          />

          <div className="grid" style={{ gridTemplateColumns: COLS }}>
            <div
              className="m-2.5 rounded-2xl border border-[#7B5FCA]/40"
              style={{
                gridColumn: 3,
                gridRow: `1 / ${LAST_ROW + 1}`,
                background: 'rgba(123,95,202,0.06)',
                boxShadow: '0 0 44px rgba(123,95,202,0.13)',
              }}
            />

            <div style={{ gridColumn: 1, gridRow: HEADER_ROW }} className="flex items-center h-full px-5 sm:px-7 py-6 sm:py-7" />
            <div
              style={{ gridColumn: 2, gridRow: HEADER_ROW }}
              className="flex items-center justify-center gap-3 h-full px-3 sm:px-7 py-6 sm:py-7"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-gray-300 dark:border-white/30 bg-gray-100 dark:bg-white/[0.06] flex items-center justify-center shrink-0">
                <Building2 className="w-[18px] h-[18px] text-gray-500 dark:text-white/60" strokeWidth={2} />
              </div>
              <span className="text-gray-900 dark:text-white font-black text-[13px] sm:text-[15px] tracking-wide uppercase whitespace-nowrap">
                Spa Deep Tissue
              </span>
            </div>
            <div
              style={{ gridColumn: 3, gridRow: HEADER_ROW }}
              className="relative flex items-center justify-center gap-3 h-full px-4 sm:px-7 py-6 sm:py-7"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-[#A78BFA] bg-[rgba(167,139,250,0.10)] flex items-center justify-center shrink-0">
                <Stethoscope className="w-[18px] h-[18px] text-[#513394] dark:text-[#A78BFA]" strokeWidth={2} />
              </div>
              <span className="text-gray-900 dark:text-white font-black text-[13px] sm:text-[15px] tracking-wide uppercase whitespace-nowrap">
                R3BOOT Massage
              </span>
            </div>

            <Divider row={HEADER_DIVIDER_ROW} />

            {ROWS.map((row, i) => {
              const Icon = row.icon
              const r = dataRow(i)
              return (
                <Fragment key={i}>
                  <div
                    style={{ gridColumn: 1, gridRow: r }}
                    className="flex items-center gap-3.5 h-full px-5 sm:px-7 py-6 sm:py-7 min-w-0"
                  >
                    <div className="w-10 h-10 rounded-full border-[1.5px] border-[#513394] dark:border-[#A78BFA] flex items-center justify-center shrink-0">
                      <Icon className="w-[18px] h-[18px] text-[#513394] dark:text-[#A78BFA]" strokeWidth={2} />
                    </div>
                    <span className="text-gray-900 dark:text-white font-black text-[13px] sm:text-[14px] tracking-wide uppercase leading-tight">
                      {row.label}
                    </span>
                  </div>

                  <div
                    style={{ gridColumn: 2, gridRow: r }}
                    className="flex items-center justify-center h-full px-3 sm:px-7 py-6 sm:py-7 text-center"
                  >
                    <span className="text-gray-500 dark:text-white/45 text-[14px] sm:text-[16px] leading-snug">{row.spa}</span>
                  </div>

                  <div
                    style={{ gridColumn: 3, gridRow: r }}
                    className="flex items-center justify-between gap-3 h-full px-5 sm:px-7 py-6 sm:py-7"
                  >
                    <span className="text-[#513394] dark:text-[#C4B5FD] font-bold text-[14px] sm:text-[16px] leading-snug">{row.r3boot}</span>
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
