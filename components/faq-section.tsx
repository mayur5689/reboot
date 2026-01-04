'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  ShieldCheck,
  BookOpen,
  Globe,
  Package,
  Zap,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ElementType;
}

const faqs: FAQItem[] = [
  {
    question: 'What should I wear for an Ice Bath session?',
    answer:
      'We recommend wearing comfortable swimwear or athletic shorts. We provide towels and a clean changing area for your convenience.',
    icon: FileText,
  },
  {
    question: 'How long does a typical compression therapy session last?',
    answer:
      'A standard session with NormaTec compression boots usually lasts between 30 to 45 minutes, depending on your recovery needs.',
    icon: ShieldCheck,
  },
  {
    question: 'Is entry-level recovery suitable for beginners?',
    answer:
      'Absolutely! Our coaches will guide you through every step, starting with manageable durations and intensities tailored to your comfort level.',
    icon: BookOpen,
  },
  {
    question: 'Do I need to book in advance?',
    answer:
      'While we do accept walk-ins based on availability, we strongly recommend booking via our website or WhatsApp to ensure your spot.',
    icon: Globe,
  },
  {
    question: 'Can recovery therapy help with chronic pain?',
    answer:
      'Yes, therapies like Red Light and Infrared Sauna are excellent for reducing inflammation and managing long-term muscle or joint discomfort.',
    icon: Package,
  },
  {
    question: 'How often should I use the recovery services?',
    answer:
      'For active athletes, 2-3 times a week is ideal. However, even a single session after an intense workout can significantly reduce soreness.',
    icon: Zap,
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-[#0A0A0A] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Left Column: Heading & Support */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 text-[#513394] dark:text-[#A78BFA] mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]"></div>
              <span className="text-[13px] font-bold tracking-[0.3em] uppercase">FAQ</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl lg:text-6xl mb-6">
              Frequently Asked <br />
              <span className="text-[#513394] dark:text-[#A78BFA]">Questions</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-md">
              Can&apos;t find what you&apos;re looking for? <br className="hidden sm:block" />
              Contact our{' '}
              <Link href="/contact" className="font-semibold text-[#513394] dark:text-[#A78BFA] hover:underline underline-offset-4">
                customer support team
              </Link>
            </p>
          </div>

          {/* Right Column: FAQ List */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`group rounded-[2rem] border transition-all duration-300 ${isOpen
                    ? 'bg-[#F8F9FA] dark:bg-[#1A1A1A] border-transparent shadow-xl'
                    : 'bg-transparent border-neutral-200 dark:border-white/5 hover:border-[#513394] dark:hover:border-[#A78BFA]'
                    }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${isOpen
                        ? 'bg-[#513394] text-white'
                        : 'bg-[#F8F9FA] text-neutral-500 dark:bg-white/5 dark:text-neutral-400 group-hover:bg-[#513394]/10 group-hover:text-[#513394]'
                        }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-neutral-900 dark:text-white' : 'text-neutral-700 dark:text-neutral-300'
                        }`}>
                        {faq.question}
                      </span>
                    </div>

                    <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-[#513394] text-white rotate-180' : 'bg-neutral-100 dark:bg-white/5 text-neutral-400'}`}>
                      <ChevronDown className="h-4 w-4" />
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
                        <div className="px-6 pb-6 pt-0 ml-[4rem]">
                          <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
