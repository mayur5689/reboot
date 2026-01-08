"use client";

import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/lib/services'

export default function OurServices() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-[#0A0A0A] dark:to-[#0A0A0A] transition-colors duration-500">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center justify-center gap-3 text-[#513394] dark:text-[#A78BFA] mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]"></div>
                        <span className="text-[13px] font-bold tracking-[0.3em] uppercase">OUR SERVICES</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]"></div>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-bold text-[#1A1A1A] dark:text-white tracking-tight leading-[1.1]">
                        The Best Services We Offer <br />
                        <span className="text-[#513394] dark:text-[#A78BFA]">For Your Recovery</span>
                    </h2>
                </div>

                {/* Services Grid - Asymmetrical matching the reference image */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                    {services.map((service, index) => {
                        // Pattern: First 2 are wide (col-span-3), others are standard (col-span-2)
                        const isWide = index < 2;
                        return (
                            <Link
                                key={index}
                                href={`/services/${service.slug}`}
                                className={`group relative h-[450px] overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-700 hover:-translate-y-3 ${isWide ? 'md:col-span-3' : 'md:col-span-3 lg:col-span-2'
                                    }`}
                            >
                                {/* Background Image */}
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    priority={index < 3}
                                />

                                {/* Sophisticated Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 group-hover:from-black/50 group-hover:to-black/90 transition-colors duration-500" />

                                {/* Content Wrapper */}
                                <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                                    {/* Top Content: Service Name */}
                                    <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                                        <h3 className="text-3xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Bottom Content: Know More Button */}
                                    <div className="transform transition-all duration-500 group-hover:translate-y-[-4px]">
                                        <div className="inline-flex items-center gap-4">
                                            <div className="bg-white text-black px-6 py-2 rounded-xl text-[13px] font-bold shadow-xl transition-all duration-300 group-hover:bg-[#513394] group-hover:text-white">
                                                Know More
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-full transition-all hover:opacity-90 hover:scale-105 shadow-lg shadow-[#513394]/20"
                        style={{ backgroundColor: '#513394' }}
                    >
                        View All Services
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}
