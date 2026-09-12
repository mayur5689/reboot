import Image from 'next/image'
import Link from 'next/link'
import { PersonStanding, Dumbbell, CircleDot, Briefcase, Waves, Building2, UserRound } from 'lucide-react'

const AUDIENCES = [
  { icon: PersonStanding, label: 'Athletes & Sport' },
  { icon: Dumbbell, label: 'Gym Goers' },
  { icon: Briefcase, label: 'Corporate Pros' },
  { icon: Building2, label: 'Desk Workers' },
  { icon: CircleDot, label: 'Cricket Players' },
  { icon: Waves, label: 'Runners & Swimmers' },
]

const HEAT_PATH = 'M20.5,24c-.042,0-.086-.005-.129-.017-.267-.071-.426-.345-.354-.612,.114-.428,.243-.826,.369-1.218,.315-.98,.614-1.906,.614-3.16,0-2.766-1.029-4.801-1.927-6.265-.965-1.576-2.073-3.771-2.073-6.788,0-1.884,.772-4.482,1.294-5.646,.113-.252,.409-.365,.661-.251,.252,.113,.364,.409,.251,.661-.421,.938-1.206,3.436-1.206,5.236,0,2.766,1.029,4.801,1.927,6.265,.965,1.576,2.073,3.771,2.073,6.788,0,1.411-.337,2.456-.663,3.467-.121,.375-.244,.758-.354,1.168-.06,.224-.262,.371-.483,.371Zm-7,0c-.042,0-.086-.005-.129-.017-.267-.071-.426-.345-.354-.612,.114-.428,.243-.826,.369-1.218,.315-.98,.614-1.906,.614-3.16,0-2.766-1.029-4.801-1.927-6.265-.965-1.576-2.073-3.771-2.073-6.788,0-1.884,.772-4.482,1.294-5.646,.112-.252,.409-.365,.661-.251,.252,.113,.364,.409,.251,.661-.421,.938-1.206,3.436-1.206,5.236,0,2.766,1.029,4.801,1.927,6.265,.965,1.576,2.073,3.771,2.073,6.788,0,1.411-.337,2.456-.663,3.467-.121,.375-.244,.758-.354,1.168-.06,.224-.262,.371-.483,.371Zm-7,0c-.042,0-.086-.005-.129-.017-.267-.071-.426-.345-.354-.612,.114-.428,.243-.826,.369-1.218,.315-.98,.614-1.906,.614-3.16,0-2.766-1.029-4.801-1.927-6.265-.965-1.576-2.073-3.771-2.073-6.788,0-1.884,.772-4.482,1.294-5.646,.112-.252,.41-.365,.661-.251,.252,.113,.364,.409,.251,.661-.421,.938-1.206,3.436-1.206,5.236,0,2.766,1.029,4.801,1.927,6.265,.965,1.576,2.073,3.771,2.073,6.788,0,1.411-.337,2.456-.663,3.467-.121,.375-.244,.758-.354,1.168-.06,.224-.262,.371-.483,.371Z'
const SNOWFLAKE_PATH = 'm23.397,14.118l-4.539,1.231-2.859-1.639v-3.421l2.798-1.604,4.6,1.247.262-.965-4.295-1.164,1.165-4.295-.965-.262-1.235,4.555-2.747,1.575-3.082-1.779v-3.391l3.354-3.354-.707-.707-3.146,3.146L8.854.146l-.707.707,3.354,3.354v3.391l-3.082,1.779-2.747-1.575-1.236-4.555-.965.262,1.165,4.295L.341,8.968l.262.965,4.6-1.247,2.798,1.604v3.37l-2.919,1.673-4.478-1.215-.262.965,4.295,1.165-1.165,4.295.965.262,1.268-4.676,2.795-1.602,3.001,1.732v3.535l-3.354,3.354.707.707,3.146-3.146,3.146,3.146.707-.707-3.354-3.354v-3.535l2.957-1.707,2.855,1.637,1.252,4.616.965-.262-1.165-4.295,4.295-1.165-.262-.965Zm-8.397-.458l-3,1.732-3-1.732v-3.464l3-1.732,3,1.732v3.464Z'
const CYCLE_PATH = 'm24,12h-1c0-6.065-4.935-11-11-11-3.712,0-7.169,1.91-9.193,5h4.193v1H2.5c-.827,0-1.5-.673-1.5-1.5V1h1v4.412C4.211,2.067,7.967,0,12,0c6.617,0,12,5.383,12,12Zm-2.5,5h-4.5v1h4.193c-2.024,3.09-5.481,5-9.193,5-6.065,0-11-4.935-11-11H0c0,6.617,5.383,12,12,12,4.033,0,7.789-2.067,10-5.412v4.412h1v-4.5c0-.827-.673-1.5-1.5-1.5Z'

function GlyphIcon({ path, className }: { path: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d={path} />
    </svg>
  )
}

const IMAGE_CARDS = [
  {
    num: '01',
    label: 'ICE BATH',
    src: '/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_ice_bath.webp',
    alt: 'Athlete in ice bath cold immersion at R3BOOT Mumbai',
    caption: 'Reduces inflammation, controls swelling, lowers muscle temperature.',
    iconPath: SNOWFLAKE_PATH,
    iconColor: '#7DD8F8',
    accentColor: '#7DD8F8',
  },
  {
    num: '02',
    label: 'INFRARED SAUNA',
    src: '/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_sauna.webp',
    alt: 'Infrared sauna session at R3BOOT Mumbai',
    caption: 'Improves circulation, relaxes muscles, prepares body.',
    iconPath: HEAT_PATH,
    iconColor: '#FF7340',
    accentColor: '#FF7340',
  },
  {
    num: '03',
    label: 'RECOVERY SESSION',
    src: '/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_ice_bath_lady.webp',
    alt: 'Recovery session at R3BOOT Mumbai',
    caption: 'Promotes recovery, restores balance, enhances performance.',
    iconPath: CYCLE_PATH,
    iconColor: '#A78BFA',
    accentColor: '#A78BFA',
  },
]

export function WhyMumbaiAthletesSection() {
  const [iceBath, sauna, recovery] = IMAGE_CARDS

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#09090E]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[42%_1fr] gap-10 lg:gap-16 items-start">

          {/* ── LEFT: copy + audience pills ─────────────────── */}
          <div>
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              MUMBAI //
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-5">
              Why Mumbai Chooses<br />
              <span className="text-[#513394] dark:text-[#7B5FCA]">Contrast Therapy</span>
            </h2>
            <div className="w-10 h-[2px] bg-[#513394] dark:bg-[#7B5FCA] mb-5" />
            <p className="text-gray-500 dark:text-white/45 text-base leading-relaxed mb-8">
              Heat, humidity, long desk days, and heavy training all stack recovery debt. Contrast therapy helps athletes, gym goers, and corporate professionals reset circulation, reduce soreness, and feel sharper again.
            </p>

            {/* Audience pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {AUDIENCES.map((audience, i) => {
                const Icon = audience.icon
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 rounded-2xl border border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-white/[0.03] px-3.5 py-3"
                  >
                    <Icon className="w-4 h-4 text-[#513394] dark:text-[#A78BFA] shrink-0" strokeWidth={2} />
                    <span className="text-gray-700 dark:text-white/80 text-[13px] font-bold leading-tight">
                      {audience.label}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="h-px bg-gray-200 dark:bg-white/[0.08] mb-6" />

            {/* Multi-disciplinary note */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border-[1.5px] border-[#513394] dark:border-[#A78BFA] flex items-center justify-center shrink-0">
                <UserRound className="w-5 h-5 text-[#513394] dark:text-[#A78BFA]" strokeWidth={1.75} />
              </div>
              <p className="text-gray-500 dark:text-white/50 text-[15px] leading-relaxed pt-1.5">
                We combine contrast therapy with{' '}
                <Link href="/services/sports-massage" className="text-[#513394] dark:text-[#C4B5FD] font-bold hover:underline underline-offset-4">sports massage</Link>,{' '}
                <Link href="/services/physiotherapy" className="text-[#513394] dark:text-[#C4B5FD] font-bold hover:underline underline-offset-4">physiotherapy</Link> and{' '}
                <Link href="/services/mental-training" className="text-[#513394] dark:text-[#C4B5FD] font-bold hover:underline underline-offset-4">sports psychology</Link> for complete, stage-wise recovery.
              </p>
            </div>
          </div>

          {/* ── RIGHT: bento image grid — always-dark photo overlays, independent of page theme ─────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">

            {/* Card 01 — Ice bath: full-width row on mobile, spans both rows on desktop */}
            <div className="relative rounded-3xl overflow-hidden min-h-[420px] lg:min-h-[560px] lg:row-span-2">
              <Image src={iceBath.src} alt={iceBath.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/40" />
              <div className="absolute top-5 left-5">
                <span className="text-[#A78BFA] font-black text-lg leading-none block mb-1.5">{iceBath.num}</span>
                <div className="w-6 h-[2px] bg-[#A78BFA] mb-2.5" />
                <span className="text-white font-black text-[13px] tracking-widest uppercase">{iceBath.label}</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-start gap-3">
                <div
                  className="w-11 h-11 rounded-full border-[1.5px] flex items-center justify-center shrink-0 bg-black/40 backdrop-blur-sm"
                  style={{ borderColor: iceBath.accentColor, color: iceBath.iconColor }}
                >
                  <GlyphIcon path={iceBath.iconPath} className="w-[18px] h-[18px]" />
                </div>
                <p className="text-white/85 text-[14px] leading-snug pt-1">{iceBath.caption}</p>
              </div>
            </div>

            {/* Row 2 — sauna + recovery: side-by-side on mobile, stacked column on desktop */}
            <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-col">

              {/* Card 02 — Infrared sauna */}
              <div className="relative rounded-3xl overflow-hidden min-h-[200px] lg:min-h-[268px]">
                <Image src={sauna.src} alt={sauna.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/35" />
                <div className="absolute top-3 left-3 lg:top-4 lg:left-4">
                  <span className="text-[#A78BFA] font-black text-sm lg:text-base leading-none block mb-1">{sauna.num}</span>
                  <div className="w-5 h-[2px] bg-[#A78BFA] mb-2" />
                  <span className="text-white font-black text-[10px] tracking-wide lg:text-[12px] lg:tracking-widest uppercase">{sauna.label}</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex flex-col items-start gap-1.5 lg:bottom-4 lg:left-4 lg:right-4 lg:flex-row lg:items-start lg:gap-2.5">
                  <div
                    className="w-8 h-8 rounded-full border-[1.5px] flex items-center justify-center shrink-0 bg-black/40 backdrop-blur-sm lg:w-10 lg:h-10"
                    style={{ borderColor: sauna.accentColor, color: sauna.iconColor }}
                  >
                    <GlyphIcon path={sauna.iconPath} className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  </div>
                  <p className="text-white/85 text-[11px] leading-snug lg:text-[13px] lg:pt-1">{sauna.caption}</p>
                </div>
              </div>

              {/* Card 03 — Recovery session */}
              <div className="relative rounded-3xl overflow-hidden min-h-[200px] lg:min-h-[268px]">
                <Image src={recovery.src} alt={recovery.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/35" />
                <div className="absolute top-3 left-3 lg:top-4 lg:left-4">
                  <span className="text-[#A78BFA] font-black text-sm lg:text-base leading-none block mb-1">{recovery.num}</span>
                  <div className="w-5 h-[2px] bg-[#A78BFA] mb-2" />
                  <span className="text-white font-black text-[10px] tracking-wide lg:text-[12px] lg:tracking-widest uppercase">{recovery.label}</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex flex-col items-start gap-1.5 lg:bottom-4 lg:left-4 lg:right-4 lg:flex-row lg:items-start lg:gap-2.5">
                  <div
                    className="w-8 h-8 rounded-full border-[1.5px] flex items-center justify-center shrink-0 bg-black/40 backdrop-blur-sm lg:w-10 lg:h-10"
                    style={{ borderColor: recovery.accentColor, color: recovery.iconColor }}
                  >
                    <GlyphIcon path={recovery.iconPath} className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  </div>
                  <p className="text-white/85 text-[11px] leading-snug lg:text-[13px] lg:pt-1">{recovery.caption}</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
