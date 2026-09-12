import { ClipboardList, Ruler, Stethoscope, ShieldCheck } from 'lucide-react'

const RIGOR_POINTS = [
  {
    icon: ClipboardList,
    title: 'The same protocol, every time',
    body: 'Every screening follows the same standardised test battery, so your results mean something and can be compared session to session.',
  },
  {
    icon: Ruler,
    title: 'Measured, not eyeballed',
    body: 'Range of motion, balance, and strength are logged with the same tools and methods on every client, left versus right, every time.',
  },
  {
    icon: Stethoscope,
    title: 'Physiotherapist-led, always',
    body: 'A qualified physiotherapist runs your screening and reads your results. Not a form you fill in, a clinician who examines you.',
  },
  {
    icon: ShieldCheck,
    title: 'One report, clinical standard',
    body: 'Your risk summary and Recovery & Performance Plan are held to the same documentation standard as our physiotherapy clinic.',
  },
]

export function ClinicalRigorSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#09090E]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase mb-4 block">
            CLINICAL RIGOR //
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-5">
            Standardised protocol.{' '}
            <span className="text-[#7B5FCA]">Every session.</span>
          </h2>
          <div className="w-10 h-[2px] bg-[#7B5FCA] mx-auto mb-5" />
          <p className="text-white/45 text-base leading-relaxed">
            A screening is only useful if it&apos;s consistent. We run the same tests, the same way, every time, so your results actually mean something.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {RIGOR_POINTS.map((point, i) => {
            const Icon = point.icon
            return (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 lg:p-7"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-[#A78BFA] font-black text-lg leading-none pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-14 h-14 rounded-full border-[1.5px] border-[#A78BFA] bg-[rgba(167,139,250,0.08)] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#A78BFA]" strokeWidth={1.75} />
                  </div>
                </div>
                <div className="h-px bg-white/[0.08] mb-5" />
                <h3 className="text-white font-black text-[17px] mb-2.5 leading-snug">
                  {point.title}
                </h3>
                <p className="text-white/45 text-[14px] leading-relaxed">
                  {point.body}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
