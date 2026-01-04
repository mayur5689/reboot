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
        <section className="py-24 bg-[#F5F5F3]">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center justify-center gap-3 text-[#513394] mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#513394]"></div>
                        <span className="text-[13px] font-black tracking-[0.3em] uppercase">HOW IT WORKS</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#513394]"></div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] tracking-tight leading-[1.1]">
                        Your Journey to <br />
                        <span className="text-[#513394]">Peak Performance</span>
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6">
                        A structured, science-backed approach to recovery and performance optimization.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[2rem] p-6 flex flex-col sm:flex-row gap-8 items-center shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            {/* Image Part */}
                            <div className="relative w-full sm:w-48 h-48 shrink-0 overflow-hidden rounded-2xl">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content Part */}
                            <div className="flex-grow">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-[11px] font-black tracking-widest text-[#513394] bg-[#513394]/10 px-3 py-1 rounded-full uppercase">
                                        Step {step.number}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 lg:line-clamp-none">
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
