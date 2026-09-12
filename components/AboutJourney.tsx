'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Reveal, fadeUp, easeOut } from '@/components/motion/Reveal'

const DEFAULT_VIDEO = 'https://youtu.be/p7BkvXKK-Wk'
const DEFAULT_POSTER = '/images/hero/r3boot-pilates-studio.png'

function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url)
    if (u.hostname.includes('youtu.be')) {
      return u.pathname.replace('/', '') || null
    }
    if (u.hostname.includes('youtube.com')) {
      return u.searchParams.get('v')
    }
  } catch {
    return null
  }
  return null
}

type AboutJourneyProps = {
  videoUrl?: string
  posterSrc?: string
}

export default function AboutJourney({
  videoUrl = DEFAULT_VIDEO,
  posterSrc = DEFAULT_POSTER,
}: AboutJourneyProps) {
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()
  const youtubeId = getYouTubeId(videoUrl)
  const canPlay = Boolean(videoUrl)
  const thumbSrc = youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
    : posterSrc

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-[#513394]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[280px] w-[280px] rounded-full bg-[#A78BFA]/8 blur-[100px]" />

      <div className="relative container mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal variants={fadeUp} className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[#A78BFA]" />
            <span className="text-[13px] font-bold uppercase tracking-[0.3em] text-[#A78BFA]">
              About Us
            </span>
          </div>

          <h2 className="mb-6 text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Your{' '}
            <span className="text-[#A78BFA]">Recovery</span>
            {' '}Journey Starts Here
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            At R3BOOT, we help you rebuild strength with clinical precision —
            physiotherapy, contrast therapy, and performance coaching under one roof in Dadar.
            Expert clinicians. Clear plans. Real progress.
          </p>
        </Reveal>

        <Reveal
          delay={0.12}
          className="relative mt-10 w-full overflow-hidden rounded-[1.5rem] sm:mt-12 sm:rounded-[2rem] lg:mt-14"
        >
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Play about video"
            className="group relative block aspect-[2/1] w-full overflow-hidden text-left"
          >
            <motion.div
              className="absolute inset-0"
              whileHover={reduced ? undefined : { scale: 1.03 }}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              <Image
                src={thumbSrc}
                alt="Inside R3BOOT recovery studio, Dadar"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
                unoptimized={Boolean(youtubeId)}
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
            <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />

            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white shadow-xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
              <Play className="ml-0.5 h-6 w-6 fill-current sm:h-7 sm:w-7" />
            </span>
          </button>
        </Reveal>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-3 sm:p-6"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close video"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
              {canPlay && youtubeId ? (
                <div className="aspect-video w-full bg-black">
                  <iframe
                    key={youtubeId}
                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                    title="R3BOOT About Us video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </div>
              ) : canPlay ? (
                <video
                  key={videoUrl}
                  src={videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="aspect-video w-full bg-black"
                />
              ) : (
                <div className="relative aspect-video w-full bg-black">
                  <Image
                    src={posterSrc}
                    alt=""
                    fill
                    className="object-cover opacity-40"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                    Video coming soon
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
