'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Brain, Briefcase, HeartHandshake } from 'lucide-react'

const approaches = [
  {
    number: '01',
    icon: Brain,
    title: 'Sports Psychology',
    label: 'Performance skills',
    light: '#513394',
    dark: '#A78BFA',
    soft: 'rgba(81,51,148,0.10)',
    softDark: 'rgba(167,139,250,0.20)',
    tagline: 'Build the mental tools that hold under pressure — focus, composure, and competition-day preparation.',
    fit: 'Best for competitive and youth athletes who need edge, not open-ended talk.',
    image: {
      src: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1786822444/METH_IMAGE_1_cnemen.webp',
      alt: 'Sports psychology session at R3BOOT Mumbai',
    },
    steps: [
      {
        title: 'Map the pressure',
        body: 'Performance anxiety and choke under pressure, trained for real competition load.',
      },
      {
        title: 'Build the tools',
        body: 'Focus routines, visualisation, and pre-competition prep you can use the same week.',
      },
      {
        title: 'Train it under load',
        body: 'Confidence and mental resilience that survive a bad session, not just a good one.',
      },
      {
        title: 'Lock the plan',
        body: 'Goal setting that still works when the week does not go to plan.',
      },
    ],
  },
  {
    number: '02',
    icon: HeartHandshake,
    title: 'Counselling & Mental Training',
    label: 'Emotional & rehab support',
    light: '#0369A1',
    dark: '#38BDF8',
    soft: 'rgba(3,105,161,0.10)',
    softDark: 'rgba(56,189,248,0.20)',
    tagline: 'Address the emotional load that training alone cannot fix — injury anxiety, burnout, and trust in the body again.',
    fit: 'Best if you are returning from injury, losing motivation, or carrying more than the physical load.',
    image: {
      src: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1786822445/METH_IMAGE_2_ulfjp3.webp',
      alt: 'Counselling and mental training at R3BOOT Dadar',
    },
    steps: [
      {
        title: 'Name the load',
        body: 'Injury psychology and return-to-sport trust while physical rehab continues.',
      },
      {
        title: 'Rebuild the base',
        body: 'Burnout, motivation loss, and rebuilding habits that actually stick.',
      },
      {
        title: 'Work with the body',
        body: 'Mind–body work coordinated with physiotherapy in the same centre.',
      },
      {
        title: 'Hold under load',
        body: 'Emotional regulation under sustained training or recovery load.',
      },
    ],
  },
  {
    number: '03',
    icon: Briefcase,
    title: 'Corporate & Working Professionals',
    label: 'Workplace performance',
    light: '#0D9488',
    dark: '#2DD4BF',
    soft: 'rgba(13,148,136,0.10)',
    softDark: 'rgba(45,212,191,0.20)',
    tagline: 'Deadline pressure and decision fatigue use the same mental skills as sport — applied to high-stakes work.',
    fit: 'Best for professionals, founders, and high-pressure roles who need composure that lasts.',
    image: {
      src: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1786822446/METH_IMAGE_3_vp0bfg.webp',
      alt: 'Mental training for working professionals at R3BOOT',
    },
    steps: [
      {
        title: 'Locate the stress',
        body: 'Burnout and chronic work stress, treated as a performance problem, not a perk.',
      },
      {
        title: 'Sharpen the decisions',
        body: 'Focus and decision-making when deadlines, reviews, and load stack up.',
      },
      {
        title: 'Show up under stakes',
        body: 'Confidence in high-stakes meetings, presentations, and leadership moments.',
      },
      {
        title: 'Keep the routine',
        body: 'Sustainable routines you can keep — not one-off stress relief.',
      },
    ],
  },
]

export function MethodologySection() {
  const [active, setActive] = useState(0)
  const selected = approaches[active]

  return (
    <section id="methodology" className="py-16 sm:py-20 lg:py-28 bg-[#F8F9FA] dark:bg-[#0D0D0D] border-y border-gray-100 dark:border-white/[0.06]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
            METHODOLOGY //
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Three approaches.{' '}
            <span className="text-[#513394] dark:text-[#8B5CF6]">One mental service</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
            Performance skills, counselling, or workplace pressure — pick the track that matches what you are carrying.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div
            role="tablist"
            aria-label="Mental training approaches"
            className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6"
          >
            {approaches.map((approach, i) => {
              const Icon = approach.icon
              const isActive = active === i
              return (
                <button
                  key={approach.number}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="methodology-panel"
                  onClick={() => setActive(i)}
                  style={{
                    '--accent': approach.light,
                    '--accent-dark': approach.dark,
                  } as React.CSSProperties}
                  className={`text-left rounded-2xl px-4 py-4 transition-all border ${
                    isActive
                      ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-lg'
                      : 'bg-white dark:bg-white/[0.04] text-gray-900 dark:text-white border-gray-100 dark:border-white/[0.08] hover:border-[var(--accent)]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-black tracking-[0.2em] ${isActive ? 'text-white/70' : 'text-[var(--accent)] dark:text-[var(--accent-dark)]'}`}>
                      {approach.number}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[var(--accent)] dark:text-[var(--accent-dark)]'}`} />
                  </div>
                  <p className="font-black text-base sm:text-lg leading-snug">{approach.title}</p>
                  <p className={`text-xs font-bold mt-1.5 ${isActive ? 'text-white/80' : 'text-[var(--accent)] dark:text-[var(--accent-dark)]'}`}>
                    {approach.label}
                  </p>
                </button>
              )
            })}
          </div>

          <div
            id="methodology-panel"
            role="tabpanel"
            style={{
              '--accent': selected.light,
              '--accent-dark': selected.dark,
              '--accent-soft': selected.soft,
              '--accent-soft-dark': selected.softDark,
            } as React.CSSProperties}
            className="rounded-[1.75rem] bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08] p-6 sm:p-8 lg:p-10"
          >
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-2">
                  {selected.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
                  {selected.tagline}
                </p>
              </div>
              <p className="text-xs font-bold uppercase tracking-wide text-[var(--accent)] dark:text-[var(--accent-dark)] sm:text-right max-w-xs">
                {selected.fit}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-stretch">
              <div className="relative rounded-[1.5rem] overflow-hidden w-full bg-[#111] aspect-[4/3] lg:aspect-auto lg:h-full min-h-[240px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selected.number}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={selected.image.src}
                      alt={selected.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div>
                <p className="text-[11px] font-black tracking-[0.22em] uppercase text-[var(--accent)] dark:text-[var(--accent-dark)] mb-6">
                  How we work
                </p>
                <ol className="space-y-7">
                  {selected.steps.map((step, j) => (
                    <li key={step.title} className="flex items-start gap-4">
                      <span className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] dark:bg-[var(--accent-soft-dark)] text-[var(--accent)] dark:text-[var(--accent-dark)] font-black text-sm flex items-center justify-center shrink-0">
                        {String(j + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <p className="text-gray-900 dark:text-white font-black text-lg sm:text-xl leading-snug mb-1.5">
                          {step.title}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-[17px] leading-relaxed">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
