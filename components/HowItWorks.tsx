"use client";

import Image from 'next/image'

const steps = [
    {
        number: "01",
        title: "Book Your First Session",
        description: "Choose from our various services: Recovery Services, Physical Consultation, Mind Therapy, Pilates and more. Start your journey with a single session!",
        image: "/images/1.jpg"
    },
    {
        number: "02",
        title: "Assessment & Diagnosis",
        description: "First-time clients receive a comprehensive assessment. Our expert physios evaluate your condition, workload, or injury to create a personalized plan.",
        image: "/images/2.jpg"
    },
    {
        number: "03",
        title: "Customized Treatment Plan",
        description: "Based on your assessment, we recommend a rehab package or recovery protocol designed specifically for your goals and recovery needs.",
        image: "/images/3.jpg"
    },
    {
        number: "04",
        title: "Ongoing Progress Tracking",
        description: "Regular monitoring and adjustments ensure optimal results. We guide you from rehab & recovery to peak performance with precision and care.",
        image: "/images/4.jpg"
    }
]

export default function HowItWorks() {
    return (
        <section className="py-24 bg-[#F5F5F3] dark:bg-[#0A0A0A] transition-colors duration-500">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center justify-center gap-3 text-[#513394] dark:text-[#A78BFA] mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]"></div>
                        <span className="text-[13px] font-bold tracking-[0.3em] uppercase">HOW IT WORKS</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]"></div>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-bold text-[#1A1A1A] dark:text-white tracking-tight leading-[1.1]">
                        Your Journey to <br />
                        <span className="text-[#513394] dark:text-[#A78BFA]">Peak Performance</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto mt-4">
                        A structured, science-backed approach to recovery and performance optimization.
                    </p>
                </div>

                <div className="flex overflow-x-auto lg:grid lg:grid-cols-2 gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0 lg:overflow-visible">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-[#1A1A1A] border border-transparent dark:border-white/5 rounded-[2rem] p-6 flex flex-col sm:flex-row gap-6 items-center shadow-sm hover:shadow-xl transition-all duration-500 min-w-[85vw] sm:min-w-0 snap-center"
                        >
                            {/* Image Part */}
                            <div className="relative w-full sm:w-40 h-40 shrink-0 overflow-hidden rounded-2xl">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content Part */}
                            <div className="flex-grow">
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="text-[10px] font-bold tracking-widest text-[#513394] dark:text-[#A78BFA] bg-[#513394]/10 dark:bg-[#A78BFA]/10 px-3 py-1 rounded-full uppercase">
                                        Step {step.number}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
