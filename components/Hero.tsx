"use client";

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { AnimatedCounter, easeOut, staggerContainer, fadeUp } from '@/components/motion/Reveal'

const stats = [
  { value: 1000, suffix: '+', label: 'Patients Treated' },
  { value: 15, suffix: '+', label: 'Years of Expertise' },
  { value: 10, suffix: '+', label: 'Certified Specialists' },
]

const GOOGLE_REVIEW_URL = 'https://g.page/r/CYyiDNqpXoE2EBE/review'

const reviewerAvatars = [
  { src: '/images/Customer_Review/Namrata Doshi.png', alt: 'Namrata Doshi' },
  { src: '/images/Customer_Review/Arjun.png', alt: 'Arjun' },
  { src: '/images/Customer_Review/JugalKishore Shah.png', alt: 'JugalKishore Shah' },
  { src: '/images/Customer_Review/Sonal Malik.png', alt: 'Sonal Malik' },
]

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
      <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.1 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.6 7.3 6.3 14.7z" />
      <path fill="#FBBC05" d="M24 46c5.6 0 10.5-1.9 14.4-5l-6.7-5.5C29.6 37 26.9 38 24 38c-5.9 0-10.9-4-12.7-9.5l-7 5.4C7.5 41.8 15.2 46 24 46z" />
      <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.8 2.4-2.3 4.4-4.3 5.8l6.7 5.5C42.1 36.4 45 30.7 45 24c0-1.3-.2-2.7-.5-4z" />
    </svg>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

const slides = [
  {
    src: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785290132/hero_image_lxzfvf.png',
    alt: 'R3BOOT Pilates studio, clients on reformer machines beneath the Rebuild. Recover. wall',
    position: 'object-[30%_center]',
  },
  {
    src: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785290109/Contrast_Therapy_qduuzc.png',
    alt: 'R3BOOT contrast therapy suite, infrared sauna beside the cold plunge tub',
    position: 'object-center',
  },
  {
    src: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785290140/Sports_Massage_chl8lo.png',
    alt: 'R3BOOT sports massage therapy session beneath the Restore. Rebuild. Recover. wall',
    position: 'object-center',
  },
  {
    src: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785290331/Physio_hero_w9sqkm.png',
    alt: 'R3BOOT physiotherapy session beside the Restore. Rebuild. Recover. wall',
    position: 'object-center',
  },
  {
    src: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785290155/Aqua_therpy_hero_kgkg0j.png',
    alt: 'R3BOOT aqua therapy underwater treadmill session beside the Restore. Rebuild. Recover. wall',
    position: 'object-center',
  },
  {
    src: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785290108/Councelling_hero_zql7pz.png',
    alt: 'R3BOOT counselling session beside the branded mental performance wall',
    position: 'object-center',
  },
]

const AUTOPLAY_MS = 5500

export default function Hero() {
  const reduced = useReducedMotion()
  const [slideIndex, setSlideIndex] = useState(0)
  const autoplayRef = useRef(true)

  useEffect(() => {
    if (reduced) return
    const timer = setInterval(() => {
      if (!autoplayRef.current) return
      setSlideIndex((prev) => (prev + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [reduced])

  const goTo = (direction: 'prev' | 'next') => {
    autoplayRef.current = false
    setSlideIndex((prev) =>
      direction === 'next'
        ? (prev + 1) % slides.length
        : (prev - 1 + slides.length) % slides.length
    )
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Framed photo — inset from the viewport edges like a print */}
      <div className="absolute inset-3 sm:inset-4 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <AnimatePresence mode="sync">
            <motion.div
              key={slides[slideIndex].src}
              className="absolute inset-0"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: easeOut }}
            >
              <Image
                src={slides[slideIndex].src}
                alt={slides[slideIndex].alt}
                fill
                priority
                className={`object-cover ${slides[slideIndex].position}`}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Legibility: room is bright, so scrim harder on the left (text) and bottom (CTAs/stats) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        {/* Arrows */}
        <button
          type="button"
          onClick={() => goTo('prev')}
          aria-label="Previous photo"
          className="absolute left-4 sm:left-6 top-[72%] -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/25 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.25}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => goTo('next')}
          aria-label="Next photo"
          className="absolute right-4 sm:right-6 top-[72%] -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/25 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.25}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((slide, idx) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => {
                autoplayRef.current = false
                setSlideIndex(idx)
              }}
              aria-label={`Go to photo ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === slideIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-between pt-32 sm:pt-36 lg:pt-40 pb-10 sm:pb-12">

        {/* Headline block */}
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center w-fit gap-2 mb-5"
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]"
              animate={reduced ? undefined : { scale: [1, 1.35, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="text-[13px] font-bold tracking-[0.3em] uppercase text-[#A78BFA]">
              India&apos;s First Integrated Recovery Centre
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-white mb-6"
          >
            Because Recovery{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-white">
              Deserves This Much Precision
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-lg"
          >
            Physiotherapy, contrast therapy, and performance coaching, delivered by clinicians who treat recovery as a science, not an afterthought.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="group inline-flex flex-wrap items-center gap-4 mt-6 bg-white/8 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/12 rounded-2xl pl-3 pr-5 py-3 transition-all duration-300"
          >
            <div className="flex items-center -space-x-3">
              {reviewerAvatars.map((avatar) => (
                <div
                  key={avatar.src}
                  className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#141019] shrink-0"
                >
                  <Image src={avatar.src} alt={avatar.alt} fill className="object-cover" />
                </div>
              ))}
            </div>

            <div className="w-px h-8 bg-white/15" />

            <GoogleLogo className="w-6 h-6 shrink-0" />

            <div className="flex flex-col leading-tight">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-3.5 h-3.5 fill-yellow-400" />
                ))}
                <span className="text-white font-bold text-sm ml-1">5.0</span>
              </div>
              <span className="text-white/60 text-xs font-medium mt-0.5 group-hover:text-white/80 transition-colors">
                150+ Google Reviews
              </span>
            </div>
          </motion.a>
        </motion.div>

        {/* Bottom row — CTAs and stats share one baseline, like the reference */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a href="tel:+919702368612">
              <button
                className="text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-[#513394]/30 text-base"
                style={{ backgroundColor: '#513394' }}
              >
                Call to Book
              </button>
            </a>
            <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer">
              <button className="bg-white/10 border border-white/40 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 text-base">
                WhatsApp Us
              </button>
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 sm:gap-10">
            {stats.map((stat, idx) => (
              <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
                <div>
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-3xl sm:text-4xl font-black text-white leading-none"
                    suffixClassName="text-[#A78BFA]"
                  />
                  <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-white/60 mt-2">
                    {stat.label}
                  </p>
                </div>
                {idx < stats.length - 1 && (
                  <div className="hidden sm:block w-px h-10 bg-white/20" />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
