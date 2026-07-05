import { MapPin, Clock, Navigation } from 'lucide-react'

const HOURS = [
  { days: 'Monday - Tuesday', time: '8:00 AM - 9:00 PM' },
  { days: 'Wednesday', time: '8:00 AM - 4:00 PM' },
  { days: 'Thursday - Saturday', time: '8:00 AM - 9:00 PM' },
  { days: 'Sunday', time: '2:00 PM - 9:00 PM' },
]

const MAP_EMBED_SRC = 'https://www.google.com/maps?q=19.0165473,72.8459274&z=16&output=embed'
const DIRECTIONS_URL = 'https://maps.google.com/?cid=3927524433644528268'

export function LocationSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#09090E]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[42%_1fr] gap-10 lg:gap-16 items-start">

          {/* ── LEFT: address, hours, CTAs ────────────────── */}
          <div>
            <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase mb-4 block">
              LOCATION //
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-white tracking-tight leading-[1.1] mb-5">
              Visit us at{' '}
              <span className="text-[#7B5FCA]">R3BOOT Dadar</span>
            </h2>
            <div className="w-10 h-[2px] bg-[#7B5FCA] mb-6" />

            {/* Address */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-11 h-11 rounded-full border-[1.5px] border-[#A78BFA] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#A78BFA]" strokeWidth={1.75} />
              </div>
              <div className="pt-1.5">
                <p className="text-white font-bold text-[15px] leading-snug">
                  Palai Plaza, 203, Swami Gyan Jivandas Marg
                </p>
                <p className="text-white/45 text-[14px] leading-snug">
                  Dadar East, Mumbai, Maharashtra 400014
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-11 h-11 rounded-full border-[1.5px] border-[#A78BFA] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#A78BFA]" strokeWidth={1.75} />
              </div>
              <div className="pt-1.5 space-y-1.5">
                {HOURS.map((h, i) => (
                  <div key={i} className="flex items-baseline gap-3 text-[14px]">
                    <span className="text-white/70 font-bold w-[150px] shrink-0">{h.days}</span>
                    <span className="text-white/45">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
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
                className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/[0.07] font-bold px-6 py-3.5 rounded-full transition-all text-[14px] tracking-wide"
              >
                <Navigation className="w-4 h-4" strokeWidth={2} />
                Get Directions
              </a>
            </div>
          </div>

          {/* ── RIGHT: map embed ──────────────────────────── */}
          <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] min-h-[320px] lg:min-h-[420px] w-full">
            <iframe
              src={MAP_EMBED_SRC}
              className="absolute inset-0 w-full h-full grayscale-[0.3] contrast-[1.05]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="R3BOOT Dadar location map"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
