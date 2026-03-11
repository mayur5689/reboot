'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { physiotherapyFaqs } from '@/lib/faqs/physiotherapy';

export type PhysiotherapyFAQItem = {
    question: string;
    answer: string;
};

interface PhysiotherapyFAQProps {
    faqs?: PhysiotherapyFAQItem[];
}

export default function PhysiotherapyFAQ({ faqs = physiotherapyFaqs }: PhysiotherapyFAQProps = {}) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-white dark:bg-[#0A0A0A] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
            <div className="container mx-auto max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Left Column */}
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-3 text-[#513394] dark:text-[#A78BFA] mb-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]" />
                            <span className="text-[13px] font-bold tracking-[0.3em] uppercase">FAQ</span>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl lg:text-6xl mb-6">
                            Frequently Asked <br />
                            <span className="text-[#513394] dark:text-[#A78BFA]">Questions</span>
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-md">
                            Can&apos;t find what you&apos;re looking for?{' '}
                            <a
                                href="https://wa.me/919702368612"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-[#513394] dark:text-[#A78BFA] hover:underline underline-offset-4"
                            >
                                WhatsApp us directly
                            </a>
                        </p>
                    </div>

                    {/* Right Column: FAQ List */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        {faqs.map((faq, index) => {
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
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="flex w-full items-center justify-between p-6 text-left"
                                    >
                                        <span className={`text-lg font-bold transition-colors pr-4 ${isOpen ? 'text-neutral-900 dark:text-white' : 'text-neutral-700 dark:text-neutral-300'}`}>
                                            {faq.question}
                                        </span>
                                        <div className={`p-2 rounded-full shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#513394] text-white rotate-180' : 'bg-neutral-100 dark:bg-white/5 text-neutral-400'}`}>
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
                                                <div className="px-6 pb-6 pt-0">
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
