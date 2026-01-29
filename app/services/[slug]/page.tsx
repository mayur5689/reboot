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
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-2 uppercase tracking-tighter leading-[0.9]">
                            {service.title}
                        </h1>
                        {service.tagline && (
                            <p className="text-2xl md:text-4xl font-black text-[#8B5CF6] mb-8 italic tracking-tight">
                                {service.tagline}
                            </p>
                        )}
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
                            <div className="mt-20">
                                <h3 className="text-2xl font-black text-gray-900 mb-10 flex items-center gap-4">
                                    <span className="w-12 h-[2px] bg-[#513394]"></span>
                                    THE PROCESS
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {service.process.map((step, idx) => (
                                        <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden">
                                            <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 group-hover:text-[#513394]/5 transition-colors">
                                                {idx + 1}
                                            </div>
                                            <div className="relative z-10">
                                                <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 flex items-center justify-center text-[#513394] font-black mb-6 group-hover:bg-[#513394] group-hover:text-white transition-all">
                                                    0{idx + 1}
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-3">
                                                    {step.title}
                                                </h4>
                                                <p className="text-gray-500 text-sm leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Key Benefits Card */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32">
                            <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#513394]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                                {service.slug === 'contrast-therapy' && (
                                    <div className="absolute top-6 right-6 bg-[#8B5CF6] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
                                        Advanced Tech
                                    </div>
                                )}

                                <h3 className="text-2xl font-black mb-8 tracking-wide flex items-center gap-3">
                                    <div className="w-2 h-8 bg-[#513394]"></div>
                                    KEY BENEFITS //
                                </h3>
                                <ul className="space-y-6 mb-12">
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-4 group/item">
                                            <div className="w-6 h-6 rounded-full bg-[#513394] flex items-center justify-center shrink-0 mt-1 group-hover/item:scale-110 transition-transform">
                                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-white/80 font-medium leading-snug group-hover/item:text-white transition-colors">{benefit}</span>
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

            {/* Sub-Services Section - Only shows for services with subServices */}
            {service.subServices && service.subServices.length > 0 && (
                <section className="py-24 lg:py-32 bg-white">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] uppercase mb-4 block">
                                SPECIALIZATIONS //
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
                                Our <span className="text-[#513394]">{service.title}</span> Services
                            </h2>
                            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
                                Explore our specialized treatments tailored to your specific needs.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {service.subServices.map((sub, index) => (
                                <div
                                    key={index}
                                    id={sub.slug}
                                    className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                                >
                                    <div className="relative h-48 w-full shrink-0 overflow-hidden bg-gray-100">
                                        {sub.image ? (
                                            <>
                                                <Image
                                                    src={sub.image}
                                                    alt={sub.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                                            </>
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <svg className="w-12 h-12 text-[#513394]/10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        )}
                                        <div className="absolute bottom-4 left-6 z-10">
                                            <span className={`${sub.image ? 'text-white/90' : 'text-[#513394]/40'} text-[10px] font-black tracking-[0.2em] uppercase`}>Specialization // 0{index + 1}</span>
                                        </div>
                                    </div>

                                    <div className="p-7 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#513394] transition-colors duration-300 leading-tight">
                                            {sub.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                            {sub.description}
                                        </p>

                                        <div className="pt-5 border-t border-gray-50 flex items-center justify-between">
                                            <div className="inline-flex items-center gap-2 text-[#513394] font-black text-[11px] tracking-widest uppercase">
                                                <span>READ MORE</span>
                                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path d="M9 18l6-6-6-6" />
                                                </svg>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-[#513394]/10 flex items-center justify-center group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <a
                                href="https://www.practo.com/mumbai/clinic/r3-boot-spoorts-therapy-dadar-east/doctors"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[#513394] text-white font-bold px-10 py-4 rounded-full hover:bg-[#412975] transition-all shadow-xl shadow-[#513394]/20 hover:scale-105"
                            >
                                Book a Consultation
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            )}

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
