"use client";

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/lib/services'

export default function OurServices() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Check on mount
        checkMobile();

        // Add resize listener
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Limit to 4 cards on mobile, show all on desktop
    const displayedServices = isMobile ? services.slice(0, 4) : services;

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

                {/* Services Grid - Shows 4 cards on Mobile, all on Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8">
                    {displayedServices.map((service, index) => {
                        const isWide = index < 2;
                        // For a clean grid with 7 items:
                        // Row 1: 0, 1 (3+3 = 6)
                        // Row 2: 2, 3, 4 (2+2+2 = 6)
                        // Row 3: 5, 6 (3+3 = 6)
                        const isLastHalf = index >= 5;

                        return (
                            <Link
                                key={index}
                                href={`/services/${service.slug}`}
                                className={`group relative h-[280px] md:h-[450px] overflow-hidden rounded-[1.75rem] md:rounded-[2.5rem] shadow-xl md:shadow-2xl transition-all duration-700 hover:-translate-y-2 md:hover:-translate-y-3 
                                    ${(isWide || isLastHalf) ? 'col-span-1 md:col-span-3' : 'col-span-1 md:col-span-3 lg:col-span-2'}`}
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent md:bg-gradient-to-b md:from-black/40 md:to-black/80 group-hover:from-black/95 group-hover:via-black/40 transition-colors duration-500" />

                                {/* Content Wrapper - Mobile: Bottom aligned with glassmorphism card */}
                                <div className="absolute inset-0 p-4 md:p-10 flex flex-col justify-end md:justify-between z-10">
                                    {/* Desktop Top Content */}
                                    <div className="hidden md:block transform transition-transform duration-500 group-hover:-translate-y-1">
                                        <h3 className="text-3xl font-bold text-white tracking-tight leading-tight">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Mobile: Glassmorphism Card at Bottom */}
                                    <div className="md:hidden bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 space-y-3">
                                        <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                                            {service.title}
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <span className="text-white/70 text-xs font-medium">Explore Service</span>
                                            <div className="bg-[#513394] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-[#513394]/30 flex items-center gap-2 group-active:scale-95 transition-transform">
                                                Know More
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Desktop Bottom Content */}
                                    <div className="hidden md:block transform transition-all duration-500">
                                        <div className="inline-flex items-center gap-4">
                                            <div className="bg-white/90 backdrop-blur-sm text-black px-6 py-2 rounded-xl text-[13px] font-bold shadow-xl transition-all duration-300 group-hover:bg-[#513394] group-hover:text-white">
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
                        Explore All Solutions
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}
