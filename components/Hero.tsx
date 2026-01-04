import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/images/5.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 container mx-auto px-6 lg:px-8 pt-20 lg:pt-24 flex-1 flex flex-col justify-center translate-y-[-20px]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-3 max-w-2xl">
          India&apos;s First Integrated Recovery Centre
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-white/90 mb-4">
          Your Recovery. Redefined.
        </h2>
        <p className="text-base md:text-lg text-gray-200/90 mb-6 max-w-xl leading-relaxed">
          Science-driven recovery and performance systems for people who take their body and mind seriously.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            className="text-white font-semibold px-7 py-3 rounded-full transition-all hover:opacity-90 text-sm shadow-lg"
            style={{ backgroundColor: '#513394' }}
          >
            Book a Session
          </button>
          <button className="bg-white/15 backdrop-blur-sm border border-white/40 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/25 transition-colors text-sm">
            WhatsApp Our Team
          </button>
        </div>
      </div>

      {/* Bottom Cards Section - Hidden on Mobile */}
      <div className="relative z-20 container mx-auto px-6 lg:px-8 pb-10 hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 -mt-10 md:-mt-16">

        {/* Card 1: Community (White) */}
        <div className="bg-white dark:bg-[#1A1A1A] text-black dark:text-white p-7 rounded-2xl flex flex-col justify-between shadow-2xl min-h-[210px] border border-transparent dark:border-white/5">
          <p className="text-[17px] font-semibold leading-snug">
            Join a growing community of over <span className="text-green-600 font-bold">50,000 athletes, fitness enthusiasts, and sports lovers.</span>
          </p>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-[#1A1A1A] bg-gray-200 dark:bg-gray-800" />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#1A1A1A] bg-[#513394] flex items-center justify-center text-white text-[10px] font-bold">
                +
              </div>
            </div>
            <div>
              <p className="text-sm font-bold">2K+</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">Training now</p>
            </div>
          </div>
        </div>

        {/* Card 2: Testimonial (Glassmorphism) */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-7 rounded-2xl flex flex-col justify-center items-center text-center shadow-2xl min-h-[210px] text-white">
          <p className="text-lg font-medium italic mb-4 leading-relaxed tracking-tight">
            &ldquo;Reboot keeps me motivated every day!&rdquo;
          </p>
          <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-70">Alex Rodriguez</p>
          <div className="flex gap-1.5 mt-4">
            <div className="w-4 h-1 rounded-full bg-white"></div>
            <div className="w-1.5 h-1 rounded-full bg-white/30"></div>
            <div className="w-1.5 h-1 rounded-full bg-white/30"></div>
            <div className="w-1.5 h-1 rounded-full bg-white/30"></div>
          </div>
        </div>

        {/* Card 3: Video Introduction (Purple) */}
        <div className="bg-[#513394] p-7 rounded-2xl flex items-center gap-5 shadow-2xl min-h-[210px] text-white group cursor-pointer transition-transform hover:scale-[1.02]">
          <div className="flex-1">
            <h3 className="text-2xl font-black leading-tight mb-8">
              Watch video <br /> introduction.
            </h3>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#513394] shadow-xl group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="w-[140px] h-[160px] rounded-xl overflow-hidden shadow-inner relative">
            <Image
              src="/images/5.jpg"
              alt="Video thumbnail"
              fill
              className="object-cover grayscale-[0.2]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
