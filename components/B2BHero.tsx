import type { ReactNode } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

type TrustItem = {
  value: string
  label: string
}

type Props = {
  eyebrow: string
  title: ReactNode
  body: string
  image: {
    src: string
    alt: string
    position?: string
  }
  primary: { href: string; label: string }
  secondary: { href: string; label: string }
  trustLabel: string
  trustItems: TrustItem[]
  pillars?: string[]
}

const DEFAULT_PILLARS = ['RECOVER', 'RESTORE', 'REBUILD', 'PERFORM']

export function B2BHero({
  eyebrow,
  title,
  body,
  image,
  primary,
  secondary,
  trustLabel,
  trustItems,
  pillars = DEFAULT_PILLARS,
}: Props) {
  return (
    <section className="relative min-h-[100svh] flex flex-col bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className={`object-cover ${image.position ?? 'object-center'}`}
          sizes="100vw"
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none sm:hidden"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.28) 28%, rgba(0,0,0,0.06) 48%, rgba(0,0,0,0.45) 78%, rgba(0,0,0,0.88) 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none hidden sm:block"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 28%, rgba(0,0,0,0.38) 52%, rgba(0,0,0,0.12) 72%, transparent 88%)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[42%] pointer-events-none hidden sm:block"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.28) 45%, transparent 100%)' }}
      />
      <div
        className="absolute inset-x-0 top-0 h-28 sm:h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)' }}
      />

      {/* Copy: a bit above centre on mobile, not under the logo */}
      <div className="relative z-10 px-5 sm:px-8 lg:px-16 xl:px-20 pt-[30vh] sm:pt-28 lg:pt-32 pb-4 sm:pb-10 max-w-3xl sm:flex-1 sm:flex sm:flex-col sm:justify-center">
        <p className="text-[#A78BFA] text-[10px] sm:text-[12px] font-black tracking-[0.22em] sm:tracking-[0.28em] uppercase mb-3 sm:mb-5">
          {eyebrow}
        </p>
        <h1 className="text-[1.85rem] sm:text-5xl lg:text-6xl xl:text-[4.35rem] font-black text-white tracking-tight leading-[1.12] sm:leading-[1.05] mb-3 sm:mb-5">
          {title}
        </h1>
        <p className="text-[13px] sm:text-base text-white/70 max-w-lg leading-snug sm:leading-relaxed sm:mb-8">
          {body}
        </p>
        <div className="hidden sm:flex items-center gap-3 mt-8">
          <a
            href={primary.href}
            className="inline-flex items-center justify-center gap-2 bg-[#513394] hover:bg-[#603eb0] text-white font-black px-7 py-3.5 rounded-full transition-all text-[14px] tracking-[0.08em] uppercase shadow-lg shadow-[#513394]/35"
          >
            {primary.label}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondary.href}
            className="inline-flex items-center justify-center gap-2 border border-white/35 bg-black/40 hover:bg-white/[0.08] text-white font-bold px-7 py-3.5 rounded-full transition-all text-[14px] tracking-[0.08em] uppercase"
          >
            {secondary.label}
          </a>
        </div>
      </div>

      <div className="hidden xl:flex flex-col items-end gap-2.5 absolute right-10 top-[42%] -translate-y-1/2 z-10 pointer-events-none">
        {pillars.map((word) => (
          <span key={word} className="text-white/20 text-[1.65rem] font-light tracking-[0.32em] leading-none">
            {word}
          </span>
        ))}
        <div className="w-14 h-px bg-[#A78BFA] mt-3" />
      </div>

      <div className="relative z-10 mt-auto">
        <div className="border-t border-white/10 bg-black/70 backdrop-blur-md">
          <div className="px-4 sm:px-8 lg:px-16 xl:px-20 py-3 sm:py-5 flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-10">
            <p className="text-[9px] sm:text-[11px] font-black tracking-[0.18em] sm:tracking-[0.22em] uppercase text-white/55 shrink-0">
              {trustLabel}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:gap-x-6 lg:gap-x-10">
              {trustItems.map((item) => (
                <div key={`${item.value}-${item.label}`} className="flex items-baseline gap-1.5">
                  <span className="text-white font-black text-[13px] sm:text-base leading-none">{item.value}</span>
                  <span className="text-white/45 text-[10px] sm:text-xs font-bold uppercase tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile only: small CTAs stuck to the bottom of the screen */}
      <div className="sticky bottom-0 z-30 sm:hidden border-t border-white/10 bg-black/85 backdrop-blur-md px-4 pt-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-2">
          <a
            href={primary.href}
            className="inline-flex flex-1 items-center justify-center gap-1.5 bg-[#513394] text-white font-bold px-3 py-2.5 rounded-xl text-[11px] tracking-[0.06em] uppercase"
          >
            {primary.label}
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={secondary.href}
            className="inline-flex flex-1 items-center justify-center gap-1.5 border border-white/30 bg-black/40 text-white font-bold px-3 py-2.5 rounded-xl text-[11px] tracking-[0.06em] uppercase"
          >
            {secondary.label}
          </a>
        </div>
      </div>
    </section>
  )
}
