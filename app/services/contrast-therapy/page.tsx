import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { services } from '@/lib/services'
import ServiceSchema from '@/components/schema/ServiceSchema'

export const metadata: Metadata = {
    title: 'Contrast Therapy in Mumbai | R3BOOT Dadar – Sauna & Ice Bath',
    description: 'Contrast therapy at R3BOOT: alternating Red Light Sauna and Ice Bath for recovery, circulation, and stress resilience. Dadar, Mumbai.',
    keywords: ['contrast therapy mumbai', 'ice bath mumbai', 'sauna mumbai', 'cold plunge mumbai', 'recovery therapy dadar', 'contrast therapy near me'],
}

const otherServices = services.filter(s => s.slug !== 'contrast-therapy').slice(0, 4)

export default function ContrastTherapyPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">

            {/* ─── HERO ─── */}
            <section className="relative h-[70vh] flex items-end overflow-hidden">
                <Image
                    src="/images/service/Services_image/Contrast_Therepy.webp"
                    alt="Contrast Therapy Mumbai – R3BOOT Sauna & Ice Bath Dadar"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

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
                            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                            <span className="text-[11px] font-black tracking-[0.3em] uppercase">THERAPY // EXCELLENCE</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-2 uppercase tracking-tighter leading-[0.9]">
                            Contrast Therapy
                        </h1>
                        <p className="text-2xl md:text-4xl font-black text-[#8B5CF6] mb-8 italic tracking-tight">
                            Heat. Cold. Recovery.
                        </p>
                        <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed font-medium">
                            Alternating Red Light Sauna and Ice Bath for circulation, resilience, and faster recovery at R3BOOT, Dadar – Mumbai.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── CORE DETAILS ─── */}
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                        {/* Left column: description + process */}
                        <div className="lg:col-span-7">
                            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                                SCIENCE-BACKED //
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
                                How Contrast Therapy Works on Your <span className="text-[#513394] dark:text-[#8B5CF6]">Mind</span>
                            </h2>
                            <div className="prose prose-xl text-gray-600 dark:text-gray-400 dark:prose-invert max-w-none leading-relaxed space-y-6">
                                <p>
                                    Contrast therapy works on neurotransmitters by creating a controlled stress response, triggering the release of feel-good chemicals like endorphins, and boosting alertness and focus-related ones like norepinephrine (up to 500% increase!) and dopamine (up to 250% increase), leading to improved mood, reduced anxiety, enhanced focus, and greater resilience through a &ldquo;stress inoculation&rdquo; effect on the nervous system.
                                </p>
                                <p>
                                    The rapid shifts between heat (vasodilation/relaxation) and cold (vasoconstriction/activation) train your autonomic nervous system to manage stress better. Heat causes vasodilation — widening of blood vessels — which increases blood flow in the limbs. Cold causes vasoconstriction — contraction of blood vessels — which helps numb pain and redirect blood to the core.
                                </p>
                                <p>
                                    <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase block mb-2">SAFETY FIRST //</span>
                                    <strong className="text-gray-900 dark:text-white">Contra-Indications.</strong> Contrast therapy may not be suitable if you have: uncontrolled cardiac conditions or hypertension; known cold intolerance / Raynaud&apos;s phenomenon; severe circulatory or neurological disorders; open wounds, skin infections, or fever; or acute illness.
                                </p>
                            </div>

                            {/* Process Steps */}
                            <div className="mt-20">
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-10 flex items-center gap-4">
                                    <span className="w-12 h-[2px] bg-[#513394] dark:bg-[#8B5CF6]" />
                                    THE PROCESS
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { title: "Preparation", description: "Preparing the body for rapid temperature changes." },
                                        { title: "Hot Phase — Red Light Sauna", description: "Vasodilation phase to increase circulation and relax muscles." },
                                        { title: "Cold Phase — Ice Bath", description: "Vasoconstriction phase to reduce inflammation and flush toxins." },
                                        { title: "Recovery", description: "Allowing the body to return to homeostatic balance." },
                                        { title: "Alternation", description: "The cycle trains your nervous system to switch between activation and recovery, building stress resilience." },
                                    ].map((step, idx) => (
                                        <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500 relative overflow-hidden">
                                            <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 dark:text-white/5 group-hover:text-[#513394]/5 dark:group-hover:text-[#8B5CF6]/5 transition-colors">
                                                {idx + 1}
                                            </div>
                                            <div className="relative z-10">
                                                <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black mb-6 group-hover:bg-[#513394] dark:group-hover:bg-[#8B5CF6] group-hover:text-white transition-all">
                                                    0{idx + 1}
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h4>
                                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right column: sticky benefits card */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32">
                            <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#513394]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute top-6 right-6 bg-[#8B5CF6] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
                                    Advanced Tech
                                </div>
                                <h3 className="text-2xl font-black mb-8 tracking-wide flex items-center gap-3">
                                    <div className="w-2 h-8 bg-[#513394]" />
                                    KEY BENEFITS //
                                </h3>
                                <ul className="space-y-6 mb-12">
                                    {[
                                        "Boosted immunity",
                                        "Improved cardiovascular health",
                                        "Relaxation & endorphin release",
                                        "Vasodilation – increased blood flow",
                                        "Detoxification through sweating",
                                        "Reduced inflammation & pain",
                                        "Better stress resilience",
                                        "Faster muscle recovery",
                                    ].map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-4 group/item">
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

            {/* ─── COLD EXPOSURE SECTION ─── */}
            <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

                        {/* Left: Image */}
                        <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl">
                            <Image
                                src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1773494258/Cold_plounge_ucyyru.webp"
                                alt="Ice bath and cold plunge – R3BOOT Contrast Therapy Mumbai"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                                    COLD EXPOSURE //
                                </span>
                                <p className="text-white text-xl font-black tracking-tight leading-tight">
                                    Ice Bath at R3BOOT Dadar
                                </p>
                            </div>
                        </div>

                        {/* Right: Benefits list */}
                        <div>
                            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                                COLD EXPOSURE //
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                                Benefits of Ice Cold <span className="text-[#513394] dark:text-[#8B5CF6]">Plunges</span>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                                While cold plunges may feel like a shock at first, the benefits are well worth it. Cold exposure has been shown to improve circulation, reduce inflammation, and boost mental and metabolic health.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Improved Circulation",
                                        body: "When you immerse your body in cold water, blood vessels constrict (vasoconstriction), forcing blood from the extremities back toward your core. When you step out, vessels dilate, flooding muscles and tissues with fresh, oxygen-rich blood. This promotes recovery and keeps your circulatory system in top shape."
                                    },
                                    {
                                        title: "Reduced Inflammation and Pain Relief",
                                        body: "Cold water lowers tissue temperature, slowing the inflammatory response and reducing swelling. Cold plunges are especially helpful for sore muscles, sprains, and chronic conditions like arthritis — similar to ice packs but more comprehensive."
                                    },
                                    {
                                        title: "Increased Metabolism",
                                        body: "Cold exposure forces your body to work harder to maintain its internal temperature (thermogenesis), increasing metabolism as you burn more calories to generate heat. Regular cold plunges can support a healthy metabolism when combined with exercise and proper nutrition."
                                    },
                                ].map((tech, idx) => (
                                    <div key={idx} className="flex gap-5 group">
                                        <div className="w-10 h-10 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black shrink-0 text-sm group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
                                            0{idx + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{tech.title}</h3>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{tech.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ─── HEAT THERAPY SECTION ─── */}
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

                        {/* Left: Benefits list */}
                        <div className="order-2 lg:order-1">
                            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                                HEAT THERAPY //
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                                Benefits of <span className="text-[#513394] dark:text-[#8B5CF6]">Red Light Sauna</span>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10">
                                Our red light sauna pairs gentle infrared warmth with red and near-infrared light—so you get more than generic “hot room” heat. The light reaches tissue in ways heat alone does not, while warmth still drives circulation, relaxation, and sweat. Together with cold plunges, it completes the contrast therapy loop.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Red & Near-Infrared Beyond Surface Heat",
                                        body: "Red light saunas add targeted wavelengths on top of infrared warmth. That light is chosen to reach skin and soft tissue—not just warm the air—so each session combines photonic exposure with the sauna heat you already expect from contrast therapy."
                                    },
                                    {
                                        title: "Dual Stimulus for Contrast Protocols",
                                        body: "In one visit you stack manageable heat stress with red and near-infrared light. Many people use that combination around training or cold plunges: warmth for vessels and muscle ease, plus light for tissue that rarely gets consistent daily exposure."
                                    },
                                    {
                                        title: "Muscle Relaxation and Pain Relief",
                                        body: "Heat still penetrates deep into muscles and joints, helping to relax tight muscles and soothe aches and pains, alleviating stiffness and soreness."
                                    },
                                    {
                                        title: "Improved Cardiovascular Health",
                                        body: "In the sauna, heart rate increases and blood vessels dilate, mimicking some effects of moderate exercise. This mild cardiovascular workout can improve heart health over time."
                                    },
                                ].map((tech, idx) => (
                                    <div key={idx} className="flex gap-5 group">
                                        <div className="w-10 h-10 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black shrink-0 text-sm group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
                                            0{idx + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{tech.title}</h3>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{tech.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl order-1 lg:order-2">
                            <Image
                                src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1773494254/Red_light_Sauna_dizanf.webp"
                                alt="Infrared sauna and heat therapy – R3BOOT Contrast Therapy Mumbai"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase block mb-2">
                                    HEAT THERAPY //
                                </span>
                                <p className="text-white text-xl font-black tracking-tight leading-tight">
                                    Red Light Sauna at R3BOOT Dadar
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ─── SYNERGY SECTION ─── */}
            <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                                CONTRAST THERAPY //
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
                                The Synergy of Cold and Heat – <span className="text-[#513394] dark:text-[#8B5CF6]">Why Alternating Matters</span>
                            </h2>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-center max-w-3xl mx-auto">
                            While both cold plunges and saunas provide benefits on their own, the real magic of contrast therapy lies in the alternation between hot and cold. This combination creates a powerful one-two punch for your body, enhancing recovery and promoting overall wellness in ways a single therapy cannot achieve alone.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Contrast Therapy as a Superior Recovery Tool",
                                    body: "When you alternate between sauna heat and cold plunge, your body recovers faster than with one method alone. Heat loosens tight muscles and increases blood flow; cold reduces inflammation and tightens vessels. The back-and-forth flushes out metabolic waste like lactic acid, leading to faster muscle recovery and less post-workout soreness."
                                },
                                {
                                    title: "Reduced Muscle Soreness",
                                    body: "Alternating between heat and cold minimizes delayed onset muscle soreness (DOMS). Cold reduces swelling and microtears; heat encourages blood flow to those areas, speeding healing. This cycle reduces the stiffness and soreness that follow a tough workout — especially useful for athletes and active individuals."
                                },
                                {
                                    title: "Vascular Workout for Better Circulation",
                                    body: "Switching from sauna heat to cold plunge forces your blood vessels to repeatedly expand and contract, improving overall circulation. This helps oxygenate muscles, flush toxins, and deliver nutrients more efficiently. Over time, this workout for your circulatory system can improve cardiovascular function and even help lower blood pressure."
                                },
                                {
                                    title: "Immune System Boost",
                                    body: "Alternating hot and cold temperatures can stimulate your immune system by promoting healthy blood flow and increasing white blood cell production. Regular contrast therapy may help keep your immune system in peak condition, potentially reducing the frequency of colds, flu, and other minor illnesses."
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl group transition-all duration-500">
                                    <div className="flex gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black shrink-0 text-base group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
                                            0{idx + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mt-12 leading-relaxed text-center">
                            In short, alternating between hot and cold provides enhanced benefits beyond what either therapy can offer alone. From faster muscle recovery to improved circulation and stress relief, contrast therapy is a comprehensive approach to wellness that helps your body and mind perform at their best.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── OTHER SERVICES ─── */}
            <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                            KEEP EXPLORING //
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
                            Other Ways to <span className="text-[#513394] dark:text-[#8B5CF6]">Recover</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {otherServices.map((service, index) => (
                            <Link
                                key={index}
                                href={`/services/${service.slug}`}
                                className="group bg-white dark:bg-white/5 p-4 rounded-[2.5rem] shadow-sm hover:shadow-xl border border-transparent dark:border-white/5 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                            >
                                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-[2rem] mb-6 shadow-sm">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                </div>
                                <div className="px-2 pb-2 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <div className="mt-auto">
                                        <div className="flex items-center justify-between w-full bg-[#513394]/10 group-hover:bg-[#513394] text-[#513394] group-hover:text-white rounded-full p-1 transition-all duration-300">
                                            <span className="text-[13px] font-black pl-5">EXPLORE</span>
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

            <ServiceSchema
                serviceName="Contrast Therapy"
                description="Alternating Red Light Sauna and Ice Bath for optimal recovery, circulation, and stress resilience at R3BOOT Dadar, Mumbai."
                serviceUrl="https://r3boot.in/services/contrast-therapy"
            />
        </main>
    )
}
