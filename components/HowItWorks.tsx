"use client";

import Image from 'next/image'

const steps = [
    {
        number: "01",
        title: "Discovery call",
        description: "We'll explore your goals, challenges, and lifestyle to create the right approach for your recovery and performance."
    },
    {
        number: "02",
        title: "Personalized Plan",
        description: "Rehab and performance programs tailored to your body — realistic, flexible, and sustainable."
    },
    {
        number: "03",
        title: "Session Coaching",
        description: "Expert guidance during every session, ensuring precision in movement and optimal recovery techniques."
    },
    {
        number: "04",
        title: "Lifestyle Integration",
        description: "We adapt your plan as your schedule, workload, and recovery needs shift over time."
    },
    {
        number: "05",
        title: "Long-Term Balance",
        description: "Progress doesn't end here — we'll refine, celebrate, and keep building your peak performance together."
    }
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-16 bg-white dark:bg-[#0A0A0A] transition-colors duration-500">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Heading & Large Image */}
                    <div className="lg:sticky lg:top-32">
                        <div className="text-left mb-8">
                            <span className="text-[#513394] dark:text-[#A78BFA] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
                                How it works
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] dark:text-white tracking-tight leading-[1] mb-6">
                                Your path to <br />
                                <span className="text-[#513394] dark:text-[#A78BFA]">lasting results</span>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mb-8">
                                Every transformation starts with structure. Here&apos;s how we turn recovery goals into real progress — one step at a time.
                            </p>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-4 bg-[#513394] text-white px-8 py-3.5 rounded-xl font-bold group hover:bg-[#412975] transition-all shadow-lg shadow-[#513394]/20"
                            >
                                Book Your Free Call
                                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </a>
                        </div>

                        {/* Large High-End Image */}
                        <div className="relative h-[380px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/3.jpg"
                                alt="Athlete Recovery"
                                fill
                                className="object-cover"
                            />
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    </div>

                    {/* Right Column: Steps */}
                    <div className="space-y-8 lg:pt-4">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="group flex flex-col gap-1 border-l-2 border-gray-100 dark:border-white/5 pl-6 hover:border-[#513394] dark:hover:border-[#A78BFA] transition-colors duration-500"
                            >
                                <span className="text-gray-400 dark:text-gray-600 text-base font-bold">
                                    {step.number}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
