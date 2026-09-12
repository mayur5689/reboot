'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type FAQItem = {
  question: string
  answer: string
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    question: 'What should I wear for an Ice Bath session?',
    answer:
      'We recommend wearing comfortable swimwear or athletic shorts. We provide towels and a clean changing area for your convenience.',
  },
  {
    question: 'How long does a typical physiotherapy session last?',
    answer:
      'A standard physiotherapy session at R3BOOT lasts 45 to 60 minutes, including assessment, hands-on treatment, and guided exercise as needed for your condition.',
  },
  {
    question: 'Is entry-level recovery suitable for beginners?',
    answer:
      'Absolutely! Our coaches will guide you through every step, starting with manageable durations and intensities tailored to your comfort level.',
  },
  {
    question: 'Do I need to book in advance?',
    answer:
      'Yes, we accept walk-ins subject to availability. For a guaranteed spot we recommend booking via our website or WhatsApp.',
  },
  {
    question: 'Can recovery therapy help with chronic pain?',
    answer:
      'Yes, therapies like Infrared Sauna are excellent for reducing inflammation and managing long-term muscle or joint discomfort.',
  },
  {
    question: 'How often should I use the recovery services?',
    answer:
      'For active athletes, 2-3 times a week is ideal. However, even a single session after an intense workout can significantly reduce soreness.',
  },
]

interface HomepageCopyFaqProps {
  faqs?: FAQItem[]
}

export function HomepageCopyFaq({ faqs = DEFAULT_FAQS }: HomepageCopyFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 dark:bg-[#0A0A0A] transition-colors duration-500">
      <div className="container mx-auto max-w-[1200px]">
        {/* Centered header */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl">
            Have Questions? We&apos;ve Got Answers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
            Get clarity on common concerns about recovery therapy and our clinic.
          </p>
        </div>

        {/* Accordion left + image right */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="border-t border-neutral-200 dark:border-white/10">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index

                return (
                  <div
                    key={index}
                    className="border-b border-neutral-200 dark:border-white/10"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left sm:py-6"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-base font-semibold leading-snug transition-colors sm:text-lg ${
                          isOpen
                            ? 'text-neutral-900 dark:text-white'
                            : 'text-neutral-700 dark:text-neutral-300'
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center transition-colors ${
                          isOpen
                            ? 'text-[#513394] dark:text-[#A78BFA]'
                            : 'text-neutral-400 dark:text-neutral-500'
                        }`}
                        aria-hidden
                      >
                        {isOpen ? (
                          <Minus className="h-5 w-5" strokeWidth={2} />
                        ) : (
                          <Plus className="h-5 w-5" strokeWidth={2} />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-xl pb-6 pr-10 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

            {/* CTA under accordion only */}
            <div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-6">
              <p className="text-base font-medium text-neutral-700 dark:text-neutral-300 sm:text-lg">
                If you want to know more?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#513394] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#513394]/20 transition-all hover:bg-[#412975] hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-[1.75rem] aspect-[4/5] w-full sm:rounded-[2rem] lg:sticky lg:top-28">
              <Image
                src="/images/service/Services_image/Physiotherapy_1.webp"
                alt="Physiotherapy session at R3BOOT Recovery Centre"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
