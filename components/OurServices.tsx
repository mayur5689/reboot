"use client";

import Image from 'next/image'
import Link from 'next/link'

const services = [
    {
        category: "THERAPY",
        title: "Physiotherapy",
        description: "Restoring movement and strength",
        image: "/images/1.jpg",
        slug: "physiotherapy"
    },
    {
        category: "THERAPY",
        title: "Hydrotherapy",
        description: "Recovery through the power of water",
        image: "/images/2.jpg",
        slug: "hydrotherapy"
    },
    {
        category: "FITNESS",
        title: "Clinical Pilates",
        description: "Train with control and stability",
        image: "/images/3.jpg",
        slug: "clinical-pilates"
    },
    {
        category: "THERAPY",
        title: "Contrast Therapy",
        description: "Alternating hot and cold exposure",
        image: "/images/4.jpg",
        slug: "contrast-therapy"
    },
    {
        category: "MASSAGE",
        title: "Sports Massage",
        description: "Performance-driven relief",
        image: "/images/5.jpg",
        slug: "sports-massage"
    },
    {
        category: "MASSAGE",
        title: "Deep Tissue Massage",
        description: "Release tension, move freely",
        image: "/images/6.jpg",
        slug: "deep-tissue-massage"
    },
    {
        category: "MENTAL",
        title: "Sports Psychology",
        description: "Train the mind to win",
        image: "/images/1.jpg",
        slug: "sports-psychology"
    },
    {
        category: "MENTAL",
        title: "Counselling & Mental Training",
        description: "Stronger Mind, Better you",
        image: "/images/2.jpg",
        slug: "counselling-&-mental-training"
    },
]

export default function OurServices() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-[#513394] uppercase mb-4">
                        <span className="w-2 h-2 bg-[#513394] rounded-full"></span>
                        Our Services
                        <span className="w-2 h-2 bg-[#513394] rounded-full"></span>
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        The Best Services We Offer<br />
                        <span className="text-[#513394]">For Your Recovery</span>
                    </h2>
                </div>

                {/* Services Grid - 4 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative h-52 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <span className="text-xs font-semibold tracking-wider text-[#513394]/70 uppercase">
                                    {service.category}
                                </span>
                                <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2 group-hover:text-[#513394] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                                    {service.description}
                                </p>

                                {/* Read More Button */}
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="inline-flex items-center justify-between w-full"
                                >
                                    <span
                                        className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:opacity-90"
                                        style={{ backgroundColor: '#513394' }}
                                    >
                                        Read More
                                    </span>
                                    <span
                                        className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
                                        style={{ backgroundColor: '#513394' }}
                                    >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-full transition-all hover:opacity-90 hover:scale-105 shadow-lg"
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
