import { Droplets, SprayCan, Shirt, ShieldCheck } from 'lucide-react'

const HYGIENE_POINTS = [
  {
    icon: Droplets,
    title: 'Filtered ice bath water',
    body: 'Ice bath water is filtered and screened after every single session, not just at the end of the day.',
  },
  {
    icon: SprayCan,
    title: 'Sanitised between sessions',
    body: 'Sauna, tub, and changing areas are cleaned and sanitised before every client, not on a daily schedule.',
  },
  {
    icon: Shirt,
    title: 'Fresh towels, every time',
    body: 'Every client is given a fresh, laundered towel. Nothing is reused between sessions.',
  },
  {
    icon: ShieldCheck,
    title: 'Clinical hygiene standard',
    body: 'Single-use disposables where needed, held to the same hygiene standard as our physiotherapy clinic.',
  },
]

export function HygieneSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#09090E]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
            HYGIENE //
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-5">
            Clean water. Clean setup.{' '}
            <span className="text-[#7B5FCA]">Every session.</span>
          </h2>
          <div className="w-10 h-[2px] bg-[#7B5FCA] mx-auto mb-5" />
          <p className="text-gray-500 dark:text-white/45 text-base leading-relaxed">
            Cold and heat therapy only works when it is administered safely. Our ice bath and sauna are cleaned and screened between every client, not at the end of the day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {HYGIENE_POINTS.map((point, i) => {
            const Icon = point.icon
            return (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 dark:border-white/[0.08] bg-[#F8F9FA] dark:bg-white/[0.03] p-6 lg:p-7"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-[#513394] dark:text-[#A78BFA] font-black text-lg leading-none pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-14 h-14 rounded-full border-[1.5px] border-[#513394] dark:border-[#A78BFA] bg-[#513394]/[0.08] dark:bg-[rgba(167,139,250,0.08)] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#513394] dark:text-[#A78BFA]" strokeWidth={1.75} />
                  </div>
                </div>
                <div className="h-px bg-gray-200 dark:bg-white/[0.08] mb-5" />
                <h3 className="text-gray-900 dark:text-white font-black text-[17px] mb-2.5 leading-snug">
                  {point.title}
                </h3>
                <p className="text-gray-500 dark:text-white/45 text-[14px] leading-relaxed">
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
