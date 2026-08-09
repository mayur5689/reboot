'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  ShieldCheck,
  BookOpen,
  Phone,
  Package,
  ChevronDown,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal, Stagger, StaggerItem, fadeUp, fadeLeft } from '@/components/motion/Reveal';

const DEFAULT_ICONS = [FileText, ShieldCheck, BookOpen, Phone, Package] as const;
const MAP_EMBED_SRC = 'https://www.google.com/maps?q=19.0165473,72.8459274&z=16&output=embed';

export type FAQSectionItem = {
  question: string;
  answer: string;
};

interface FAQSectionProps {
  faqs?: FAQSectionItem[];
  showMap?: boolean;
  /** Centered heading + 2-column FAQ grid (service-page standard) */
  layout?: 'default' | 'grid';
}

export function FAQSection({
  faqs: faqsProp,
  showMap = false,
  layout = 'default',
}: FAQSectionProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqsWithIcons = (faqsProp ?? [
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
  ]).map((faq, index) => ({
    ...faq,
    icon: DEFAULT_ICONS[index % DEFAULT_ICONS.length],
  }));

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCard = (faq: (typeof faqsWithIcons)[number], index: number) => {
    const Icon = faq.icon;
    const isOpen = openIndex === index;

    return (
      <StaggerItem
        key={index}
        variants={fadeUp}
        className={`group rounded-2xl border transition-all duration-300 h-fit ${
          isOpen
            ? 'bg-[#F8F9FA] dark:bg-white/[0.05] border-[#513394]/35 dark:border-[#513394]/45 shadow-lg dark:shadow-none'
            : 'bg-white dark:bg-white/[0.025] border-gray-200 dark:border-white/[0.07] hover:border-[#513394]/30 dark:hover:border-white/[0.13]'
        }`}
      >
        <button
          onClick={() => toggleFAQ(index)}
          className="flex w-full items-center justify-between p-5 sm:p-6 text-left gap-3"
        >
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <div
              className={`flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                isOpen
                  ? 'bg-[#513394] text-white'
                  : 'bg-[#513394]/10 text-[#513394] dark:bg-[#8B5CF6]/20 dark:text-[#A78BFA] group-hover:bg-[#513394] group-hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <span
              className={`text-[15px] sm:text-base font-bold leading-snug transition-colors ${
                isOpen ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-white/80'
              }`}
            >
              {faq.question}
            </span>
          </div>

          <div
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
              isOpen
                ? 'border-[#513394]/60 text-[#513394] dark:text-[#A78BFA] bg-[#513394]/15 rotate-180'
                : 'border-gray-300 dark:border-white/[0.15] text-gray-400 dark:text-white/35'
            }`}
          >
            <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <div className="px-5 sm:px-6 pb-6 pt-0 sm:pl-[4.75rem]">
                <p className="text-sm sm:text-[15px] leading-relaxed text-gray-500 dark:text-white/50">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </StaggerItem>
    );
  };

  if (layout === 'grid') {
    return (
      <section
        className={`bg-white dark:bg-[#0A0A0A] py-16 sm:py-20 lg:py-28 transition-colors duration-500 ${
          showMap ? 'pb-8 sm:pb-10' : ''
        }`}
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <Reveal variants={fadeUp} className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              FAQ //
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-4">
              Frequently Asked{' '}
              <span className="text-[#513394] dark:text-[#8B5CF6]">Questions</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
              Still unsure? Call{' '}
              <a
                href="tel:+919702368612"
                className="font-bold text-[#513394] dark:text-[#A78BFA] hover:underline underline-offset-4"
              >
                +91 97023 68612
              </a>{' '}
              or{' '}
              <a
                href="https://wa.me/919702368612"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="font-bold text-[#513394] dark:text-[#A78BFA] hover:underline underline-offset-4"
              >
                WhatsApp us
              </a>
              .
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 items-start max-w-6xl mx-auto">
            {faqsWithIcons.map((faq, index) => faqCard(faq, index))}
          </Stagger>

          {showMap && (
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-white/[0.08] min-h-[240px] sm:min-h-[280px] w-full mt-10 max-w-6xl mx-auto">
              <iframe
                src={MAP_EMBED_SRC}
                className="absolute inset-0 w-full h-full grayscale-[0.3] contrast-[1.05]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="R3BOOT Dadar location map"
              />
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section
      className={`bg-white dark:bg-[#0A0A0A] pt-16 sm:pt-24 px-5 sm:px-6 lg:px-8 transition-colors duration-500 ${
        showMap ? 'pb-8 sm:pb-10' : 'pb-16 sm:pb-24'
      }`}
    >
      <div className="container mx-auto max-w-[1400px]">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 ${
            showMap ? 'items-start' : ''
          }`}
        >
          <Reveal variants={fadeLeft} className="lg:col-span-5">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              FAQ //
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-5 leading-[1.1]">
              Frequently Asked <br />
              <span className="text-[#513394] dark:text-[#8B5CF6]">Questions</span>
            </h2>
            <p className="text-base text-gray-500 dark:text-gray-400 mb-8 max-w-md leading-relaxed">
              Still unsure? Call{' '}
              <a
                href="tel:+919702368612"
                className="font-bold text-[#513394] dark:text-[#A78BFA] hover:underline underline-offset-4"
              >
                +91 97023 68612
              </a>{' '}
              or{' '}
              <Link
                href="/contact"
                className="font-bold text-[#513394] dark:text-[#A78BFA] hover:underline underline-offset-4"
              >
                contact us
              </Link>
              .
            </p>

            {showMap && (
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-white/[0.08] min-h-[240px] sm:min-h-[280px] w-full max-w-xl">
                <iframe
                  src={MAP_EMBED_SRC}
                  className="absolute inset-0 w-full h-full grayscale-[0.3] contrast-[1.05]"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="R3BOOT Dadar location map"
                />
              </div>
            )}
          </Reveal>

          <Stagger className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
            {faqsWithIcons.map((faq, index) => faqCard(faq, index))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
