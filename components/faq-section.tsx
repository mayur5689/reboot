'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Minus,
  Plus,
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
    question: 'Does AuthPlat write books for me?',
    answer:
      'No. AuthPlat is designed to assist planning, structure, and clarity — not replace an author\'s thinking or voice.',
    icon: FileText,
  },
  {
    question: 'Who owns the content I create?',
    answer:
      'You do. Always. AuthPlat does not claim ownership or publishing rights.',
    icon: ShieldCheck,
  },
  {
    question: 'Is this meant for serious, long-form books?',
    answer:
      'Yes. AuthPlat is built for professional, non-fiction authors working on substantial manuscripts.',
    icon: BookOpen,
  },
  {
    question: 'Can I use AuthPlat alongside traditional publishing?',
    answer:
      'Yes. Many authors use AuthPlat to plan, draft, and manage manuscripts that later go through traditional or hybrid publishing paths.',
    icon: Globe,
  },
  {
    question: 'What happens if I stop using AuthPlat?',
    answer:
      'Your work remains yours. You can export your manuscript and assets at any time.',
    icon: Package,
  },
  {
    question: 'Is this just another AI writing tool?',
    answer:
      'No. AuthPlat is a publishing system. AI is used selectively to assist — not automate — the work.',
    icon: Zap,
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-neutral-950 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Left Column: Heading & Support */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
              Can&apos;t find what you&apos;re looking for? <br className="hidden sm:block" />
              Contact our{' '}
              <Link href="#" className="font-semibold text-neutral-900 dark:text-white hover:underline decoration-neutral-400 underline-offset-4">
                customer support team
              </Link>
            </p>
          </div>

          {/* Right Column: FAQ List */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`group rounded-xl border transition-all duration-200 ${isOpen
                      ? 'bg-neutral-50 dark:bg-neutral-900/50 border-neutral-300 dark:border-neutral-700 shadow-sm'
                      : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
                    }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between p-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen
                          ? 'bg-black text-white dark:bg-white dark:text-black'
                          : 'bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700'
                        }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className={`text-base font-medium transition-colors ${isOpen ? 'text-neutral-900 dark:text-white' : 'text-neutral-700 dark:text-neutral-300'
                        }`}>
                        {faq.question}
                      </span>
                    </div>

                    <ChevronDown className={`h-4 w-4 text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pt-0 ml-[3.25rem]">
                          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
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
