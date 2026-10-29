import Image from 'next/image'
import { CONTRAST_ICE_BATH_TEMP_RANGE, CONTRAST_SAUNA_TEMP_LABEL } from '@/lib/contrast-therapy/protocol'

const COLD_BENEFITS = [
  {
    title: 'Less swelling after load',
    body: 'Cold constricts blood vessels. That drop in blood flow helps settle acute inflammation after training or a long desk day.',
  },
  {
    title: 'Waste moves out of muscle',
    body: 'The pressure shift pushes lactic acid and inflammatory by-products away from fatigued tissue faster than sitting still.',
  },
  {
    title: 'Soreness the next morning',
    body: 'Lower muscle temperature slows the inflammatory cascade from hard sessions. Most clients notice easier DOMS within 24 hours.',
  },
  {
    title: 'A sharper nervous-system reset',
    body: 'Guided immersion at ' + CONTRAST_ICE_BATH_TEMP_RANGE + ' is a controlled stressor. Breathing first, then cold, then you come out clearer.',
  },
]

const SAUNA_BENEFITS = [
  {
    title: 'Circulation opens up',
    body: 'Infrared heat at ' + CONTRAST_SAUNA_TEMP_LABEL + ' dilates vessels, so oxygen and nutrients reach tight, under-recovered muscle.',
  },
  {
    title: 'Tissue actually warms',
    body: 'Infrared warms muscle from within, not only the air around you. Soft tissue loosens before you step into cold.',
  },
  {
    title: 'Cold becomes more effective',
    body: 'Heat first primes the vascular pump. The ice bath that follows clears more waste than a plunge with no warm phase.',
  },
  {
    title: 'Night Cycle ends on heat',
    body: 'Finishing in sauna supports wind-down and sleep. We use this sequence when recovery, not another training block, is still ahead.',
  },
]

function BenefitCard({
  eyebrow,
  title,
  imageSrc,
  imageAlt,
  accent,
  items,
}: {
  eyebrow: string
  title: string
  imageSrc: string
  imageAlt: string
  accent: string
  items: { title: string; body: string }[]
}) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-[#0F0F16]">
      <div className="relative h-48 sm:h-56">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <div className="absolute bottom-4 left-5 right-5">
          <p className="text-[11px] font-black uppercase tracking-[0.25em] mb-1" style={{ color: accent }}>
            {eyebrow}
          </p>
          <h3 className="text-2xl sm:text-[1.65rem] font-black text-white tracking-tight leading-tight">
            {title}
          </h3>
        </div>
      </div>
      <ul className="p-5 sm:p-6 space-y-4">
        {items.map((item) => (
          <li key={item.title} className="flex gap-3">
            <span
              className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: accent }}
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white text-[15px] leading-snug mb-1">
                {item.title}
              </p>
              <p className="text-sm text-gray-500 dark:text-white/45 leading-relaxed">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}

export function HeatColdBenefitsSection() {
  return (
    <section id="benefits-heat-cold" className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FA] dark:bg-[#0D0D13]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
            PHASE BENEFITS //
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Benefit of Cold Plunge and{' '}
            <span className="text-[#513394] dark:text-[#7B5FCA]">Benefit of Sauna</span>
          </h2>
          <p className="text-gray-500 dark:text-white/45 text-base leading-relaxed">
            Every contrast session uses both. Cold and heat do different jobs. Together they create the vascular pump that rest cannot match.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 max-w-6xl mx-auto">
          <BenefitCard
            eyebrow="COLD PHASE"
            title="Benefit of Cold Plunge"
            imageSrc="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_ice_bath.webp"
            imageAlt="Supervised cold plunge ice bath at R3BOOT Mumbai"
            accent="#7DD8F8"
            items={COLD_BENEFITS}
          />
          <BenefitCard
            eyebrow="HEAT PHASE"
            title="Benefit of Sauna"
            imageSrc="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_sauna.webp"
            imageAlt="Infrared sauna session at R3BOOT Mumbai"
            accent="#FF7340"
            items={SAUNA_BENEFITS}
          />
        </div>
      </div>
    </section>
  )
}
