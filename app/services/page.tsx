import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/lib/services'

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - More Premium */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/1.jpg"
                    alt="Services Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

                <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <span className="text-[11px] font-black tracking-[0.4em] text-white uppercase mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">
                        OUR OFFERINGS //
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
                        Expert <span className="text-white/60">Services</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        Science-backed recovery and performance solutions tailored to your unique journey.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 lg:py-32 bg-[#FBFBFB]">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl mb-16">
                        <span className="text-[#513394] font-black tracking-[0.2em] text-[10px] uppercase mb-4 block">
                            EXPLORE OPTIONS //
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tighter">
                            Choose the perfect therapy <br />
                            for your <span className="text-[#513394]">recovery.</span>
                        </h2>
                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl">
                            Our integrated approach ensures every session moves you closer to your peak performance, combining science with personalized care.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                href={`/services/${service.slug}`}
                                className="group bg-white p-5 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col h-full"
                            >
                                {/* Image */}
                                <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-[2rem] mb-6">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                                        <span className="text-[10px] font-black tracking-wider text-[#513394]">
                                            {service.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="px-2 pb-4 flex flex-col flex-grow text-left">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#513394] transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-8 line-clamp-3 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="mt-auto">
                                        <div className="flex items-center justify-between w-full bg-[#513394] group-hover:bg-[#412975] text-white rounded-full p-2 transition-all duration-300 group/btn shadow-xl shadow-[#513394]/20">
                                            <span className="text-sm font-bold pl-6">
                                                View Details
                                            </span>
                                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover/btn:bg-white group-hover/btn:text-[#513394] transition-all duration-300">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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

            {/* CTA Section - More Professional */}
            <section className="py-24 bg-[#513394] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                            Ready to <span className="text-white/50">R3BOOT</span> your body?
                        </h2>
                        <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium">
                            Join over 50,000+ happy clients who have found their way back to peak performance through our specialized services.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto bg-white text-[#513394] font-black px-10 py-5 rounded-full transition-all hover:scale-105 shadow-2xl text-lg tracking-wide"
                            >
                                Book a Consultation
                            </Link>
                            <Link
                                href="https://wa.me/yournumber"
                                className="w-full sm:w-auto border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full transition-all hover:bg-white/10 text-lg tracking-wide"
                            >
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
