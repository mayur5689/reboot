'use client'

import { useEffect, useRef, useState } from 'react'
import { Icon, type TrustBadgeItem } from './HeroTrustBadge'

/** Mobile-only horizontal scroll-snap carousel version of the trust badge cards. */
export function HeroTrustCarousel({ items }: { items: TrustBadgeItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return
        const closest = visible.reduce((a, b) =>
          Math.abs(a.intersectionRatio - 1) < Math.abs(b.intersectionRatio - 1) ? a : b
        )
        const index = cardRefs.current.findIndex((el) => el === closest.target)
        if (index !== -1) setActive(index)
      },
      { root: track, threshold: [0.6, 0.9, 1] }
    )

    cardRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [items.length])

  const scrollToCard = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  return (
    <div className="mt-3">
      <div
        ref={trackRef}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-5 px-5 pb-1"
      >
        {items.map((item, i) => (
          <div
            key={`${item.label}-${item.value}`}
            ref={(el) => { cardRefs.current[i] = el }}
            className={`shrink-0 w-[58%] snap-start rounded-xl border p-3 transition-colors duration-200 ${
              i === active ? 'border-[#513394] bg-[#1A1A1A]' : 'border-white/[0.08] bg-[#141414]'
            }`}
          >
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#513394]/20 flex items-center justify-center text-[#A78BFA] shrink-0">
                <Icon type={item.icon} className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <p className="text-white font-black text-[15px] leading-none mb-1">{item.value}</p>
                <p className="text-[#A78BFA] text-[9px] font-black uppercase tracking-wide leading-none">{item.label}</p>
              </div>
            </div>
            <div className="w-6 h-[2px] bg-[#513394] mb-2" />
            <p className="text-gray-500 text-[11px] leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-3">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              aria-label={`Go to card ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? 'w-6 bg-[#513394]' : 'w-2 bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
