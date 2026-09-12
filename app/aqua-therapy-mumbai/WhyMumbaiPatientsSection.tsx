import Image from 'next/image'
import Link from 'next/link'
import { Stethoscope, Dumbbell, Bone, HeartPulse, PersonStanding, Baby, UserRound, Droplet, Waves, Dumbbell as DumbbellGlyph } from 'lucide-react'

const PATIENTS = [
  { icon: Stethoscope, label: 'Post-Surgery Patients' },
  { icon: Dumbbell, label: 'Sports Injuries' },
  { icon: Bone, label: 'Arthritis & Joint Pain' },
  { icon: HeartPulse, label: 'Chronic Pain' },
  { icon: PersonStanding, label: 'Seniors & Balance' },
  { icon: Baby, label: 'Pregnancy-Related Pain' },
]

const IMAGE_CARDS = [
  {
    num: '01',
    label: 'POST-SURGICAL REHAB',
    src: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1781294269/POST-SURGICAL_REHABILITATION_bc9mdn.webp',
    alt: 'Post-surgical aqua treadmill rehabilitation at R3BOOT Dadar',
    caption: 'Progressive loading begins weeks earlier than land-based rehab alone.',
    Icon: Droplet,
    color: '#38BDF8',
  },
  {
    num: '02',
    label: 'SPORTS INJURIES',
    src: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1781294289/SPORTS_INJURIES_RETURN_TO_SPORT_wlvjqr.webp',
    alt: 'Sports injury rehabilitation on aqua treadmill at R3BOOT Dadar',
    caption: '75% less joint load. 225% more muscle blood flow than land training.',
    Icon: Waves,
    color: '#2DD4BF',
  },
  {
    num: '03',
    label: 'JOINT & SPINE CARE',
    src: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1781294628/a2997f88-f950-4783-956a-43885816055f_uztncr.webp',
    alt: 'Aqua therapy for joint and spine conditions at R3BOOT Dadar',
    caption: 'Pain-free strengthening for arthritic and spinal conditions.',
    Icon: DumbbellGlyph,
    color: '#A78BFA',
  },
]

export function WhyMumbaiPatientsSection() {
  const [postSurgical, sports, joint] = IMAGE_CARDS

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#09090E]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[42%_1fr] gap-10 lg:gap-16 items-start">

          {/* ── LEFT: copy + audience pills ─────────────────── */}
          <div>
            <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase mb-4 block">
              MUMBAI //
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-5">
              Why Mumbai Patients<br />
              Choose <span className="text-[#7B5FCA]">Aqua Therapy</span>
            </h2>
            <div className="w-10 h-[2px] bg-[#7B5FCA] mb-5" />
            <p className="text-white/45 text-base leading-relaxed mb-8">
              A private aqua treadmill chamber, not a shared pool. Water level, speed and temperature are set to your condition, and every session is supervised one-to-one by a physiotherapist.
            </p>

            {/* Audience pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {PATIENTS.map((p, i) => {
                const Icon = p.icon
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-3"
                  >
                    <Icon className="w-4 h-4 text-[#A78BFA] shrink-0" strokeWidth={2} />
                    <span className="text-white/80 text-[13px] font-bold leading-tight">
                      {p.label}
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
                We pair aqua therapy with{' '}
                <Link href="/services/physiotherapy" className="text-[#C4B5FD] font-bold hover:underline underline-offset-4">physiotherapy</Link>,{' '}
                <Link href="/services/contrast-therapy" className="text-[#C4B5FD] font-bold hover:underline underline-offset-4">contrast therapy</Link> and{' '}
                <Link href="/services/sports-massage" className="text-[#C4B5FD] font-bold hover:underline underline-offset-4">sports massage</Link> for complete, stage-wise recovery.
              </p>
            </div>
          </div>

          {/* ── RIGHT: bento image grid ─────────────────────── */}
          <div className="grid grid-cols-2 gap-4 w-full">

            {/* Card 01 — Post-surgical, spans both rows */}
            <div className="row-span-2 relative rounded-3xl overflow-hidden min-h-[420px] lg:min-h-[560px]">
              <Image src={postSurgical.src} alt={postSurgical.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/40" />
              <div className="absolute top-5 left-5">
                <span className="text-[#A78BFA] font-black text-lg leading-none block mb-1.5">{postSurgical.num}</span>
                <div className="w-6 h-[2px] bg-[#A78BFA] mb-2.5" />
                <span className="text-white font-black text-[13px] tracking-widest uppercase">{postSurgical.label}</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-start gap-3">
                <div
                  className="w-11 h-11 rounded-full border-[1.5px] flex items-center justify-center shrink-0 bg-black/40 backdrop-blur-sm"
                  style={{ borderColor: postSurgical.color, color: postSurgical.color }}
                >
                  <postSurgical.Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
                </div>
                <p className="text-white/85 text-[14px] leading-snug pt-1">{postSurgical.caption}</p>
              </div>
            </div>

            {/* Card 02 — Sports injuries */}
            <div className="relative rounded-3xl overflow-hidden min-h-[200px] lg:min-h-[268px]">
              <Image src={sports.src} alt={sports.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/35" />
              <div className="absolute top-4 left-4">
                <span className="text-[#A78BFA] font-black text-base leading-none block mb-1">{sports.num}</span>
                <div className="w-5 h-[2px] bg-[#A78BFA] mb-2" />
                <span className="text-white font-black text-[12px] tracking-widest uppercase">{sports.label}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-start gap-2.5">
                <div
                  className="w-10 h-10 rounded-full border-[1.5px] flex items-center justify-center shrink-0 bg-black/40 backdrop-blur-sm"
                  style={{ borderColor: sports.color, color: sports.color }}
                >
                  <sports.Icon className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <p className="text-white/85 text-[13px] leading-snug pt-1">{sports.caption}</p>
              </div>
            </div>

            {/* Card 03 — Joint & spine care */}
            <div className="relative rounded-3xl overflow-hidden min-h-[200px] lg:min-h-[268px]">
              <Image src={joint.src} alt={joint.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/35" />
              <div className="absolute top-4 left-4">
                <span className="text-[#A78BFA] font-black text-base leading-none block mb-1">{joint.num}</span>
                <div className="w-5 h-[2px] bg-[#A78BFA] mb-2" />
                <span className="text-white font-black text-[12px] tracking-widest uppercase">{joint.label}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-start gap-2.5">
                <div
                  className="w-10 h-10 rounded-full border-[1.5px] flex items-center justify-center shrink-0 bg-black/40 backdrop-blur-sm"
                  style={{ borderColor: joint.color, color: joint.color }}
                >
                  <joint.Icon className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <p className="text-white/85 text-[13px] leading-snug pt-1">{joint.caption}</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
