'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { services } from '@/lib/services'
import { Reveal, easeOut } from '@/components/motion/Reveal'

function NavArrow({
  direction,
  disabled,
  onClick,
}: {
  direction: 'left' | 'right'
  disabled: boolean
  onClick: () => void
}) {
  const isActive = direction === 'right' && !disabled

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'left' ? 'Scroll left' : 'Scroll right'}
      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
        isActive
          ? 'bg-[#513394] hover:bg-[#603eb0] text-white'
          : 'bg-white/[0.08] hover:bg-white/[0.12] text-white border border-white/10'
      }`}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        {direction === 'left' ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  )
}

export default function OurServicesCarousel() {
  const scrollContainer = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const card = scrollContainer.current.querySelector<HTMLElement>('[data-service-card]')
      const gap = 24
      const scrollAmount = card ? card.offsetWidth + gap : 420
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#0D0B12]">
      <style>{`
        .service-card {
          width: 18rem;
          height: 18rem;
          flex-shrink: 0;
          transition:
            width 0.45s cubic-bezier(0.34, 1.15, 0.64, 1),
            box-shadow 0.45s ease,
            transform 0.45s cubic-bezier(0.34, 1.15, 0.64, 1);
        }

        @media (min-width: 640px) {
          .service-card {
            width: 21rem;
            height: 21rem;
          }
        }

        @media (min-width: 1024px) {
          .service-card {
            width: 24rem;
            height: 24rem;
          }
        }

        @media (hover: hover) {
          .service-card:hover {
            width: 22rem;
            transform: translateY(-4px);
            box-shadow: 0 24px 48px rgba(81, 51, 148, 0.22);
            z-index: 10;
          }

          @media (min-width: 640px) {
            .service-card:hover {
              width: 26rem;
            }
          }

          @media (min-width: 1024px) {
            .service-card:hover {
              width: 29rem;
            }
          }
        }

        .service-card .card-image {
          transition: transform 0.6s cubic-bezier(0.34, 1.15, 0.64, 1);
        }

        @media (hover: hover) {
          .service-card:hover .card-image {
            transform: scale(1.08);
          }

          .service-card:hover .card-overlay {
            background: linear-gradient(to top, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.35) 45%, transparent 100%);
          }

          .service-card:hover .card-arrow {
            transform: scale(1.08);
            background-color: #603eb0;
            box-shadow: 0 8px 24px rgba(81, 51, 148, 0.45);
          }
        }

        .card-arrow {
          transition:
            transform 0.45s cubic-bezier(0.34, 1.15, 0.64, 1),
            background-color 0.3s ease,
            box-shadow 0.45s ease;
        }

        .card-overlay {
          transition: background 0.45s ease;
        }
      `}</style>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section header — matches homepage typography pattern */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-12">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-[#513394] dark:text-[#A78BFA] mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]" />
              <span className="text-[13px] font-bold tracking-[0.3em] uppercase">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              The Services We Offer{' '}
              <span className="text-[#513394] dark:text-[#A78BFA]">For Your Recovery</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-lg leading-relaxed max-w-xl mt-4">
              Physiotherapy, contrast therapy, aqua rehab, and sports massage — clinically led at R3BOOT Dadar.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="flex items-center gap-3 shrink-0">
            <NavArrow direction="left" disabled={!canScrollLeft} onClick={() => scroll('left')} />
            <NavArrow direction="right" disabled={!canScrollRight} onClick={() => scroll('right')} />
          </Reveal>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-16 bg-gradient-to-r from-[#0D0B12] to-transparent sm:block lg:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 bg-gradient-to-l from-[#0D0B12] to-transparent sm:block lg:w-24" />
          <div
            ref={scrollContainer}
            className="flex items-center gap-5 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-hide -mx-5 px-5 sm:mx-0 sm:px-0 py-2"
            onScroll={checkScroll}
          >
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              data-service-card
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: Math.min(index, 4) * 0.08, duration: 0.55, ease: easeOut }}
              className="service-card group relative overflow-hidden rounded-2xl sm:rounded-3xl"
            >
              <Link
                href={`/services/${service.slug}`}
                className="absolute inset-0 block"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 336px, 384px"
                  className="card-image object-cover"
                  priority={index < 3}
                />

                <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                    {service.title}
                  </h3>
                  <span
                    aria-hidden
                    className="card-arrow w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#513394] text-white flex items-center justify-center shrink-0"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9M17 7V15" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
