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

                {/* Services Grid - 4 columns */}
                <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0 lg:overflow-visible">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-[#F8F9FA] dark:bg-[#1A1A1A] p-4 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full min-w-[85vw] sm:min-w-[280px] snap-center lg:min-w-0 border border-transparent dark:border-white/5"
                        >
                            {/* Image Container */}
                            <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-[2rem] mb-6">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="px-2 pb-2 flex flex-col flex-grow">
                                <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 dark:text-gray-500 uppercase mb-2 block">
                                    {service.category}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Read More Button - Pushed to bottom */}
                                <div className="mt-auto">
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="flex items-center justify-between w-full bg-[#513394] dark:bg-[#513394] hover:bg-[#412975] dark:hover:bg-[#412975] text-white rounded-full p-1.5 transition-all group/btn shadow-lg shadow-[#513394]/20"
                                    >
                                        <span className="text-sm font-bold pl-6">
                                            Read More
                                        </span>
                                        <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover/btn:bg-white group-hover/btn:text-[#513394] transition-all">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
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
