import { MapPin, Clock, Navigation, Train } from 'lucide-react'

const HOURS = [
  { days: 'Mon, Tue, Thu–Sat', time: '7:15 AM – 9:00 PM' },
  { days: 'Wednesday', time: '7:15 AM – 3:30 PM' },
  { days: 'Sunday', time: '3:30 PM – 9:00 PM (appointment only)' },
]

const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.65!2d72.8267492!3d19.0031084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfd8a9695041%3A0xdbf9dddd1b76b6c!2sR3boot%20%7C%20Integrated%20Recovery%20Center!5e0!3m2!1sen!2sin!4v1736966800001'
const DIRECTIONS_URL = 'https://www.google.com/maps/search/?api=1&query=19.0031084,72.8267492'

type LowerParelLocationSectionProps = {
  /** Optional note under hours, e.g. Pilates booking nuance */
  hoursNote?: string
}

export function LowerParelLocationSection({
  hoursNote = 'Pilates and reformer by appointment. Say Lower Parel when you book so we hold the right studio.',
}: LowerParelLocationSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#F8F9FA] dark:bg-[#09090E]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[42%_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              LOCATION //
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-5">
              Visit us at <span className="text-[#7B5FCA]">R3BOOT Lower Parel</span>
            </h2>
            <div className="w-10 h-[2px] bg-[#7B5FCA] mb-6" />

            <div className="flex items-start gap-4 mb-6">
              <div className="w-11 h-11 rounded-full border-[1.5px] border-[#513394] dark:border-[#A78BFA] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#513394] dark:text-[#A78BFA]" strokeWidth={1.75} />
              </div>
              <div className="pt-1.5">
                <p className="text-gray-900 dark:text-white font-bold text-[15px] leading-snug">
                  Lodha Signet, A-303, Senapati Bapat Marg, West
                </p>
                <p className="text-gray-500 dark:text-white/45 text-[14px] leading-snug">
                  Prabhadevi / Lower Parel, Mumbai 400013
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-11 h-11 rounded-full border-[1.5px] border-[#513394] dark:border-[#A78BFA] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#513394] dark:text-[#A78BFA]" strokeWidth={1.75} />
              </div>
              <div className="pt-1.5 space-y-1.5">
                {HOURS.map((h, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-[14px]">
                    <span className="text-gray-700 dark:text-white/70 font-bold sm:w-[160px] shrink-0">{h.days}</span>
                    <span className="text-gray-500 dark:text-white/45">{h.time}</span>
                  </div>
                ))}
                <p className="text-xs text-gray-400 dark:text-white/35 pt-2 leading-relaxed">{hoursNote}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="w-11 h-11 rounded-full border-[1.5px] border-[#513394] dark:border-[#A78BFA] flex items-center justify-center shrink-0">
                <Train className="w-5 h-5 text-[#513394] dark:text-[#A78BFA]" strokeWidth={1.75} />
              </div>
              <div className="pt-1.5">
                <p className="text-gray-900 dark:text-white font-bold text-[15px] leading-snug mb-1">Getting here</p>
                <p className="text-gray-500 dark:text-white/45 text-[14px] leading-relaxed">
                  Western line via Prabhadevi. Road access on Senapati Bapat Marg for Worli, Kamala Mills, and BKC.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+919702368612"
                className="inline-flex items-center gap-2.5 bg-[#513394] hover:bg-[#603eb0] text-white font-black px-6 py-3.5 rounded-full transition-all hover:scale-[1.02] text-[14px] tracking-wide"
              >
                Call to Book
              </a>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/[0.07] font-bold px-6 py-3.5 rounded-full transition-all text-[14px] tracking-wide"
              >
                <Navigation className="w-4 h-4" strokeWidth={2} />
                Get Directions
              </a>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-white/[0.08] min-h-[320px] lg:min-h-[420px] w-full">
            <iframe
              src={MAP_EMBED}
              className="absolute inset-0 w-full h-full grayscale-[0.3] contrast-[1.05]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="R3BOOT Lower Parel - Lodha Signet"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
