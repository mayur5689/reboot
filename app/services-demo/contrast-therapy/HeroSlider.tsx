'use client'

import Image from 'next/image'

interface Slide {
  src: string
  alt: string
}

/** Single-image hero media for mobile service pages (no carousel UI). */
export function HeroSlider({ slides }: { slides: Slide[] }) {
  const slide = slides[0]
  if (!slide) return null

  return (
    <div className="mt-2">
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    </div>
  )
}
