import Image from 'next/image'
import { Check, Droplets } from 'lucide-react'

const BULLETS = [
  'Physio-designed programs',
  'Private chamber, set to you',
  'Progressed every session',
]

export function AboutSection() {
  return (
    <section id="about" className="pt-6 sm:pt-8 lg:pt-10 pb-16 sm:pb-20 lg:pb-24 bg-[#F3F4F6] dark:bg-[#0A0A0A]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Badge — left */}
        <span className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.2em] text-[#A78BFA] uppercase bg-[#1A1028] dark:bg-[#1A1028] border border-white/[0.08] rounded-full px-4 py-2 mb-6 w-fit">
          <Droplets className="w-3.5 h-3.5" strokeWidth={2.5} />
          About Us
        </span>

        {/* Copy — shifted right */}
        <div className="max-w-3xl ml-auto mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-5">
            Water-supported rehab.{' '}
            <span className="text-[#513394] dark:text-[#8B5CF6]">Personalised recovery plans.</span>{' '}
            Results that last.
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
            When a joint is injured, inflamed or post-surgical, land exercise loads it under full body
            weight. Water removes that constraint — cutting compressive joint load by up to 75% — so
            rehabilitation can begin at a stage when equivalent land exercise is not yet safe.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-8 mb-8">
            {BULLETS.map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full border-2 border-[#513394] dark:border-[#A78BFA] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#513394] dark:text-[#A78BFA]" strokeWidth={3} />
                </div>
                <span className="text-gray-800 dark:text-gray-200 text-[15px] font-bold">{b}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-[#513394] hover:bg-[#603eb0] text-white font-black px-8 py-3.5 rounded-full transition-all hover:scale-[1.02] text-[14px] tracking-wide"
          >
            Schedule A Session
          </a>
        </div>

        {/* Images — same side-by-side placement */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          <div className="relative rounded-3xl overflow-hidden aspect-[16/11]">
            <Image
              src="/images/Services_image/Hydrotherapy.webp"
              alt="Aqua treadmill chamber session at R3BOOT Dadar"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[16/11]">
            <Image
              src="/images/hero/aqua-therapy-2.png"
              alt="Supervised gait retraining following aqua treadmill rehabilitation at R3BOOT"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
