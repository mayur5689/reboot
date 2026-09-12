'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { easeOut } from '@/components/motion/Reveal'

export function HomepageCopyCtaCard() {
  const reduced = useReducedMotion()

  return (
    <motion.section
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/contrast-therapy-mumbai_service_page/contrast-therapy-mumbai_Hero_section.webp"
          alt="Recovery session at R3BOOT Dadar"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-start justify-center gap-8 px-5 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[#A78BFA]" />
            <span className="text-[13px] font-bold uppercase tracking-[0.3em] text-[#A78BFA]">
              Book your session
            </span>
          </div>

          <h2 className="mb-5 text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to start your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-white">
              recovery journey?
            </span>
          </h2>

          <p className="max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
            Physiotherapy, contrast therapy, aqua rehab — clinically led at Dadar.
            One call. Clear plan. Real progress.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="tel:+919702368612">
            <button
              type="button"
              className="rounded-full px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#513394]/30 transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ backgroundColor: '#513394' }}
            >
              Call to Book
            </button>
          </a>
          <a href="https://wa.me/919702368612" target="_blank" rel="nofollow noopener noreferrer">
            <button
              type="button"
              className="rounded-full border border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white/20 active:scale-95"
            >
              WhatsApp Us
            </button>
          </a>
        </div>
      </div>
    </motion.section>
  )
}
