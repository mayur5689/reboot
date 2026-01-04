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

      {/* Bottom Cards Section */}
      <div className="relative z-20 container mx-auto px-6 lg:px-8 pb-10 grid grid-cols-1 md:grid-cols-3 gap-6 -mt-10 md:-mt-16">

        {/* Card 1: Community (White) */}
        <div className="bg-white text-black p-7 rounded-2xl flex flex-col justify-between shadow-2xl min-h-[210px]">
          <p className="text-base leading-snug">
            Join a growing community of over <span className="font-bold text-green-600">50,000 athletes, fitness enthusiasts, and sports lovers.</span>
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="flex -space-x-2">
              <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white"></div>
              <div className="w-9 h-9 rounded-full bg-gray-400 border-2 border-white"></div>
              <div className="w-9 h-9 rounded-full bg-gray-500 border-2 border-white"></div>
              <div className="w-9 h-9 rounded-full bg-gray-600 border-2 border-white flex items-center justify-center text-white text-[10px]">+</div>
            </div>
            <div>
              <p className="font-bold text-sm">2K+</p>
              <p className="text-[11px] text-gray-500">Training now</p>
            </div>
          </div>
        </div>

        {/* Card 2: Quote (Glass) */}
        <div className="bg-white/10 backdrop-blur-md border border-white/15 p-7 rounded-2xl flex flex-col justify-center items-center text-center shadow-2xl min-h-[210px]">
          <p className="text-xl font-semibold text-white mb-4">
            "Reboot keeps me motivated every day!"
          </p>
          <p className="text-sm text-gray-300">Alex Rodriguez</p>
          <div className="flex gap-2 mt-5">
            <span className="w-6 h-1 bg-white rounded-full"></span>
            <span className="w-2 h-1 bg-white/30 rounded-full"></span>
            <span className="w-2 h-1 bg-white/30 rounded-full"></span>
            <span className="w-2 h-1 bg-white/30 rounded-full"></span>
          </div>
        </div>

        {/* Card 3: Video (Custom Color) */}
        <div
          className="rounded-2xl p-7 flex text-white min-h-[210px] relative overflow-hidden group cursor-pointer shadow-2xl"
          style={{ backgroundColor: '#513394' }}
        >
          <div className="z-10 flex flex-col justify-between flex-1">
            <h3 className="text-xl font-bold leading-tight">Watch video<br />introduction.</h3>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#513394] group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>
          {/* Image on right side of card */}
          <div className="absolute right-4 bottom-4 top-4 w-[45%] overflow-hidden rounded-xl">
            <Image src="/images/5.jpg" alt="Video Thumb" fill className="object-cover opacity-80" />
          </div>
        </div>

      </div>
    </section>
  )
}
