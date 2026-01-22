import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services } from '@/lib/services'

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
            {/* Immersive Hero Section */}
            <section className="relative h-[70vh] flex items-end overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                <div className="container mx-auto px-6 lg:px-8 relative z-10 pb-20">
                    <Link href="/services" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all mb-8 group">
                        <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#513394] transition-all">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                        <span className="font-bold tracking-wider text-sm">BACK TO SERVICES</span>
                    </Link>

                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 text-white/70 mb-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                            <span className="text-[11px] font-black tracking-[0.3em] uppercase">
                                {service.category} {"// EXCELLENCE"}
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed font-medium">
                            {service.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Details Section */}
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                        {/* Sticky Left Column: About */}
                        <div className="lg:col-span-7">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">
                                Complete Recovery <br />
                                <span className="text-[#513394]">Built Around You.</span>
                            </h2>
                            <div className="prose prose-xl text-gray-600 max-w-none leading-relaxed space-y-6">
                                <p>{service.fullDescription}</p>
                            </div>

                            {/* Process Steps */}
                            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {service.process.map((step, idx) => (
                                    <div key={idx} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 group hover:bg-[#513394] transition-all duration-500">
                                        <div className="text-4xl font-black text-gray-200 group-hover:text-white/20 mb-4 transition-colors">
                                            0{idx + 1}
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                                            {step.title}
                                        </h4>
                                        <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Key Benefits Card */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32">
                            <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#513394]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                                <h3 className="text-2xl font-black mb-8 tracking-wide">KEY BENEFITS //</h3>
                                <ul className="space-y-6 mb-12">
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <div className="w-6 h-6 rounded-full bg-[#513394] flex items-center justify-center shrink-0 mt-1">
                                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-white/80 font-medium leading-snug">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="https://www.practo.com/mumbai/clinic/r3-boot-spoorts-therapy-dadar-east/doctors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center bg-[#513394] text-white font-black px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-lg group-hover:bg-[#603eb0]"
                                >
                                    Book This Service
                                </a>
                                <p className="text-center text-white/30 text-xs mt-6 font-bold tracking-widest">
                                    AVAILABLE 7 DAYS A WEEK
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Other Services - Using the same premium cards */}
            <section className="py-24 lg:py-32 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] uppercase mb-4 block">
                            KEEP EXPLORING //
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
                            Other Ways to <span className="text-[#513394]">Recover</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.filter(s => s.slug !== slug).slice(0, 4).map((otherService, index) => (
                            <Link
                                key={index}
                                href={`/services/${otherService.slug}`}
                                className="group bg-white p-4 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                            >
                                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-[2rem] mb-6 shadow-sm">
                                    <Image
                                        src={otherService.image}
                                        alt={otherService.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <div className="px-2 pb-2 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#513394] transition-colors mb-3">
                                        {otherService.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-6">
                                        {otherService.description}
                                    </p>

                                    <div className="mt-auto">
                                        <div className="flex items-center justify-between w-full bg-[#513394]/10 group-hover:bg-[#513394] text-[#513394] group-hover:text-white rounded-full p-1 transition-all duration-300">
                                            <span className="text-[13px] font-black pl-5">
                                                EXPLORE
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path d="M9 18l6-6-6-6" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
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
