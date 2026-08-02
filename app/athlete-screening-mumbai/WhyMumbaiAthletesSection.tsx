import Image from 'next/image'
import Link from 'next/link'
import { PersonStanding, Dumbbell, CircleDot, Activity, Waves, Bike, UserRound, Footprints, Crosshair } from 'lucide-react'

const SPORTS = [
  { icon: PersonStanding, label: 'Marathon Runners' },
  { icon: Dumbbell, label: 'CrossFit Athletes' },
  { icon: CircleDot, label: 'Cricket Players' },
  { icon: Activity, label: 'Gym Athletes' },
  { icon: Waves, label: 'Swimmers' },
  { icon: Bike, label: 'Cyclists' },
]

const IMAGE_CARDS = [
  {
    num: '01',
    label: 'MSK EXAM',
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1200',
    alt: 'Musculoskeletal exam at R3BOOT Mumbai',
    caption: 'Every joint tested left versus right, range of motion and flexibility logged.',
    Icon: Activity,
    accentColor: '#7DD8F8',
  },
  {
    num: '02',
    label: 'GAIT ANALYSIS',
    src: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=1200',
    alt: 'Gait analysis and running assessment at R3BOOT Mumbai',
    caption: 'Foot strike, stride, and trunk lean, watched under real load.',
    Icon: Footprints,
    accentColor: '#FF7340',
  },
  {
    num: '03',
    label: 'SPECIAL TESTS',
    src: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&q=80&w=1200',
    alt: 'Balance and special test assessment at R3BOOT Mumbai',
    caption: 'Balance, coordination, and sport-specific tests that expose the gaps.',
    Icon: Crosshair,
    accentColor: '#A78BFA',
  },
]

export function WhyMumbaiAthletesSection() {
  const [mskExam, gait, specialTests] = IMAGE_CARDS

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#09090E]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[42%_1fr] gap-10 lg:gap-16 items-start">

          {/* ── LEFT: copy + audience pills ─────────────────── */}
          <div>
            <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase mb-4 block">
              MUMBAI //
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-white tracking-tight leading-[1.1] mb-5">
              Why Mumbai Athletes<br />
              Get <span className="text-[#7B5FCA]">Screened</span>
            </h2>
            <div className="w-10 h-[2px] bg-[#7B5FCA] mb-5" />
            <p className="text-white/45 text-base leading-relaxed mb-8">
              High training volumes, packed competition calendars, and limited recovery time make Mumbai athletes more likely to train through the exact compensations a screening is built to catch.
            </p>

            {/* Audience pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {SPORTS.map((sport, i) => {
                const Icon = sport.icon
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-3"
                  >
                    <Icon className="w-4 h-4 text-[#A78BFA] shrink-0" strokeWidth={2} />
                    <span className="text-white/80 text-[13px] font-bold leading-tight">
                      {sport.label}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="h-px bg-white/[0.08] mb-6" />

            {/* Multi-disciplinary note */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border-[1.5px] border-[#A78BFA] flex items-center justify-center shrink-0">
                <UserRound className="w-5 h-5 text-[#A78BFA]" strokeWidth={1.75} />
              </div>
              <p className="text-white/50 text-[15px] leading-relaxed pt-1.5">
                Findings from your screening feed straight into{' '}
                <Link href="/services/physiotherapy" className="text-[#C4B5FD] font-bold hover:underline underline-offset-4">physiotherapy</Link>,{' '}
                <Link href="/services/clinical-pilates" className="text-[#C4B5FD] font-bold hover:underline underline-offset-4">clinical pilates</Link> or{' '}
                <Link href="/services/sports-massage" className="text-[#C4B5FD] font-bold hover:underline underline-offset-4">sports massage</Link>, whichever your risk profile actually calls for.
              </p>
            </div>
          </div>

          {/* ── RIGHT: bento image grid ─────────────────────── */}
          <div className="grid grid-cols-2 gap-4 w-full">

            {/* Card 01 — MSK exam, spans both rows */}
            <div className="row-span-2 relative rounded-3xl overflow-hidden min-h-[420px] lg:min-h-[560px]">
              <Image src={mskExam.src} alt={mskExam.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/40" />
              <div className="absolute top-5 left-5">
                <span className="text-[#A78BFA] font-black text-lg leading-none block mb-1.5">{mskExam.num}</span>
                <div className="w-6 h-[2px] bg-[#A78BFA] mb-2.5" />
                <span className="text-white font-black text-[13px] tracking-widest uppercase">{mskExam.label}</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-start gap-3">
                <div
                  className="w-11 h-11 rounded-full border-[1.5px] flex items-center justify-center shrink-0 bg-black/40 backdrop-blur-sm"
                  style={{ borderColor: mskExam.accentColor, color: mskExam.accentColor }}
                >
                  <mskExam.Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
                </div>
                <p className="text-white/85 text-[14px] leading-snug pt-1">{mskExam.caption}</p>
              </div>
            </div>

            {/* Card 02 — Gait analysis */}
            <div className="relative rounded-3xl overflow-hidden min-h-[200px] lg:min-h-[268px]">
              <Image src={gait.src} alt={gait.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/35" />
              <div className="absolute top-4 left-4">
                <span className="text-[#A78BFA] font-black text-base leading-none block mb-1">{gait.num}</span>
                <div className="w-5 h-[2px] bg-[#A78BFA] mb-2" />
                <span className="text-white font-black text-[12px] tracking-widest uppercase">{gait.label}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-start gap-2.5">
                <div
                  className="w-10 h-10 rounded-full border-[1.5px] flex items-center justify-center shrink-0 bg-black/40 backdrop-blur-sm"
                  style={{ borderColor: gait.accentColor, color: gait.accentColor }}
                >
                  <gait.Icon className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <p className="text-white/85 text-[13px] leading-snug pt-1">{gait.caption}</p>
              </div>
            </div>

            {/* Card 03 — Special tests */}
            <div className="relative rounded-3xl overflow-hidden min-h-[200px] lg:min-h-[268px]">
              <Image src={specialTests.src} alt={specialTests.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/35" />
              <div className="absolute top-4 left-4">
                <span className="text-[#A78BFA] font-black text-base leading-none block mb-1">{specialTests.num}</span>
                <div className="w-5 h-[2px] bg-[#A78BFA] mb-2" />
                <span className="text-white font-black text-[12px] tracking-widest uppercase">{specialTests.label}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-start gap-2.5">
                <div
                  className="w-10 h-10 rounded-full border-[1.5px] flex items-center justify-center shrink-0 bg-black/40 backdrop-blur-sm"
                  style={{ borderColor: specialTests.accentColor, color: specialTests.accentColor }}
                >
                  <specialTests.Icon className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <p className="text-white/85 text-[13px] leading-snug pt-1">{specialTests.caption}</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
