'use client'

import { useState, useEffect, useCallback, useRef, type TouchEvent } from 'react'
import Image from 'next/image'

interface Slide {
  src: string
  alt: string
}

export function HeroSlider({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchDeltaX = useRef(0)

  const goTo = useCallback(
    (index: number) => {
      const len = slides.length
      if (len === 0) return
      setCurrent(((index % len) + len) % len)
    },
    [slides.length]
  )

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // Autoplay
  useEffect(() => {
    if (slides.length < 2) return
    const id = window.setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 4000)
    return () => window.clearInterval(id)
  }, [slides.length])

  function onTouchStart(e: TouchEvent) {
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
  }

  function onTouchMove(e: TouchEvent) {
    if (touchStartX.current == null) return
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }

  function onTouchEnd() {
    if (Math.abs(touchDeltaX.current) > 40) {
      if (touchDeltaX.current < 0) next()
      else prev()
    }
    touchStartX.current = null
    touchDeltaX.current = 0
  }

  if (slides.length === 0) return null

  return (
    <div className="mt-2">
      <div
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-3">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 bg-[#513394]' : 'w-2 bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
