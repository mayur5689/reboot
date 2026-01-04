import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Service data
const services = [
    {
        title: "Physiotherapy",
        description: "Restoring movement and strength through personalized rehabilitation programs.",
        fullDescription: "Our physiotherapy services focus on restoring your body's natural movement patterns and building strength through evidence-based rehabilitation techniques. Our expert physiotherapists work with you to create personalized treatment plans that address your specific needs, whether you're recovering from an injury, managing a chronic condition, or looking to optimize your physical performance.",
        benefits: [
            "Personalized treatment plans",
            "Evidence-based rehabilitation",
            "Injury prevention strategies",
            "Movement optimization",
            "Pain management techniques"
        ],
        image: "/images/1.jpg",
        slug: "physiotherapy"
    },
    {
        title: "Hydrotherapy",
        description: "Recovery through the therapeutic power of water.",
        fullDescription: "Hydrotherapy harnesses the healing properties of water to accelerate recovery and improve physical function. Our state-of-the-art hydrotherapy pool provides a low-impact environment perfect for rehabilitation, pain relief, and improving mobility without putting stress on your joints.",
        benefits: [
            "Low-impact rehabilitation",
            "Reduced joint stress",
            "Improved circulation",
            "Enhanced muscle relaxation",
            "Accelerated recovery"
        ],
        image: "/images/2.jpg",
        slug: "hydrotherapy"
    },
    {
        title: "Clinical Pilates",
        description: "Train with control, precision, and stability.",
        fullDescription: "Clinical Pilates combines the principles of traditional Pilates with physiotherapy expertise to create targeted exercise programs. Focus on core stability, postural alignment, and controlled movements to rehabilitate injuries, prevent future problems, and enhance overall body awareness.",
        benefits: [
            "Core strength development",
            "Improved posture",
            "Enhanced flexibility",
            "Better body control",
            "Injury prevention"
        ],
        image: "/images/3.jpg",
        slug: "clinical-pilates"
    },
    {
        title: "Contrast Therapy",
        description: "Alternating hot and cold exposure for optimal recovery.",
        fullDescription: "Contrast therapy alternates between hot and cold treatments to stimulate blood flow, reduce inflammation, and accelerate muscle recovery. This powerful technique is used by elite athletes worldwide to enhance performance and speed up the healing process.",
        benefits: [
            "Enhanced blood circulation",
            "Reduced muscle soreness",
            "Faster recovery",
            "Decreased inflammation",
            "Improved performance"
        ],
        image: "/images/4.jpg",
        slug: "contrast-therapy"
    },
    {
        title: "Sports Massage",
        description: "Performance-driven relief for athletes.",
        fullDescription: "Our sports massage therapy is designed specifically for athletes and active individuals. Using specialized techniques, we help improve flexibility, prevent injuries, and enhance athletic performance while providing relief from muscle tension and fatigue.",
        benefits: [
            "Improved flexibility",
            "Injury prevention",
            "Enhanced performance",
            "Muscle tension relief",
            "Faster recovery between training"
        ],
        image: "/images/5.jpg",
        slug: "sports-massage"
    },
    {
        title: "Deep Tissue Massage",
        description: "Release deep tension and move freely.",
        fullDescription: "Deep tissue massage targets the deeper layers of muscle and connective tissue to release chronic tension patterns. This intensive therapy helps break down scar tissue, improve range of motion, and provide lasting relief from persistent muscle pain.",
        benefits: [
            "Chronic pain relief",
            "Scar tissue breakdown",
            "Improved range of motion",
            "Stress reduction",
            "Better posture"
        ],
        image: "/images/6.jpg",
        slug: "deep-tissue-massage"
    },
    {
        title: "Sports Psychology",
        description: "Train your mind to achieve peak performance.",
        fullDescription: "Sports psychology focuses on the mental aspects of athletic performance. Our expert psychologists help you develop mental resilience, focus, and confidence to perform at your best when it matters most. Overcome performance anxiety, build winning habits, and unlock your full potential.",
        benefits: [
            "Enhanced mental focus",
            "Performance anxiety management",
            "Goal setting strategies",
            "Confidence building",
            "Mental resilience training"
        ],
        image: "/images/1.jpg",
        slug: "sports-psychology"
    },
    {
        title: "Counselling & Mental Training",
        description: "Stronger mind, better you.",
        fullDescription: "Our counselling and mental training services provide comprehensive support for your psychological well-being. Whether you're dealing with stress, anxiety, or simply want to optimize your mental performance, our experienced counsellors offer personalized guidance and evidence-based techniques.",
        benefits: [
            "Stress management",
            "Emotional resilience",
            "Personal growth",
            "Work-life balance",
            "Mental wellness optimization"
        ],
        image: "/images/2.jpg",
        slug: "counselling-&-mental-training"
    },
]

interface ServicePageProps {
    params: Promise<{ slug: string }>
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params
    const service = services.find(s => s.slug === slug)

    if (!service) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-32 bg-gradient-to-br from-[#513394] to-[#7c4dbd] text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <Link href="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Services
                    </Link>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        {service.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                        {service.description}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                About This Service
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {service.fullDescription}
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                            <ul className="space-y-3 mb-8">
                                {service.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <span
                                            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm"
                                            style={{ backgroundColor: '#513394' }}
                                        >
                                            ✓
                                        </span>
                                        <span className="text-gray-700">{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-full transition-all hover:opacity-90 hover:scale-105 shadow-lg"
                                style={{ backgroundColor: '#513394' }}
                            >
                                Book This Service
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Services */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
                        Explore Other Services
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.filter(s => s.slug !== slug).slice(0, 4).map((otherService, index) => (
                            <Link
                                key={index}
                                href={`/services/${otherService.slug}`}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="relative h-40 overflow-hidden">
                                    <Image
                                        src={otherService.image}
                                        alt={otherService.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#513394] transition-colors">
                                        {otherService.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                        {otherService.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }))
}
