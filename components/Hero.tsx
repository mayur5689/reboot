"use client";

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const testimonials = [
  {
    quote: "Excellent experience! The team is professional, knowledgeable, and genuinely caring.",
    author: "Namrata Doshi"
  },
  {
    quote: "Wonderful team. Navigated me through the therapy with great insights. Body feels lighter!",
    author: "Chandrakant Chande"
  },
  {
    quote: "Amazing experience. The facility is spotless and thoughtfully designed for total recovery.",
    author: "Dharmesh Thakkar"
  },
  {
    quote: "Personalized Pilates and posture correction. Fresh, well-designed, and thoughtfully run.",
    author: "Sonal Malik"
  }
]

export default function Hero() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const [isVideoOpen, setIsVideoOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex flex-col text-white overflow-x-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/images/5.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-[50%_38%]"
          priority
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 container mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32 flex-1 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-4 max-w-3xl">
          India&apos;s First Integrated Recovery Centre
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-white/90 mb-5">
          Your Recovery. Redefined.
        </h2>
        <p className="text-base md:text-lg text-gray-200/90 mb-8 max-w-2xl leading-relaxed">
          Science-driven recovery and performance systems for people who take their body and mind seriously.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="z-30">
            <button
              className="text-white font-semibold px-8 py-4 rounded-full transition-all hover:opacity-90 text-sm md:text-base shadow-lg hover:scale-105 active:scale-95"
              style={{ backgroundColor: '#513394' }}
            >
              Book a Session
            </button>
          </Link>
          <a
            href="https://wa.me/919702368612"
            target="_blank"
            rel="noopener noreferrer"
            className="z-30"
          >
            <button className="bg-white/15 backdrop-blur-sm border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/25 transition-all text-sm md:text-base hover:scale-105 active:scale-95">
              WhatsApp Our Team
            </button>
          </a>
        </div>
      </div>

      {/* Bottom Cards Section - Hidden on Mobile */}
      <div className="relative z-20 container mx-auto px-6 lg:px-8 pb-16 hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1: Services & Features (White) */}
        <div className="bg-white dark:bg-[#1A1A1A] text-black dark:text-white p-7 rounded-2xl flex flex-col justify-between shadow-2xl min-h-[210px] border border-transparent dark:border-white/5">
          <p className="text-[17px] font-semibold leading-snug">
            Experience <span className="text-[#513394] font-bold">world-class recovery protocols</span> tailored for your performance.
          </p>
          <div className="flex flex-col gap-2.5 mt-2">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#513394]/10 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-[#513394]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Physiotherapy & Rehab</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#513394]/10 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-[#513394]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Hydro & Contrast Therapy</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#513394]/10 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-[#513394]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Sports Massage</span>
            </div>
          </div>
        </div>

        {/* Card 2: Testimonial (Glassmorphism) - Auto Changing */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-7 rounded-2xl flex flex-col justify-center items-center text-center shadow-2xl min-h-[210px] text-white transition-all duration-500">
          <p key={currentTestimonial} className="text-lg font-medium italic mb-4 leading-relaxed tracking-tight animate-in fade-in slide-in-from-bottom-2 duration-500 min-h-[50px] flex items-center justify-center">
            &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
          </p>
          <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-70 animate-in fade-in duration-700">
            {testimonials[currentTestimonial].author}
          </p>
          <div className="flex gap-1.5 mt-4">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${idx === currentTestimonial ? 'w-4 bg-white' : 'w-1.5 bg-white/30'}`}
              />
            ))}
          </div>
        </div>

        {/* Card 3: Video Introduction (Purple) */}
        <div
          onClick={() => setIsVideoOpen(true)}
          className="bg-[#513394] p-7 rounded-2xl flex items-center gap-5 shadow-2xl min-h-[210px] text-white group cursor-pointer transition-transform hover:scale-[1.02]"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-black leading-tight mb-8">
              Watch video <br /> introduction.
            </h3>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#513394] shadow-xl group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
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

      {/* Video Popup Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300" onClick={() => setIsVideoOpen(false)}>
          <div className="relative w-full max-w-5xl max-h-[90vh] aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              src="https://ik.imagekit.io/5eaaluf7c/YTDown.com_YouTube_Physical-Therapists-Career-Video_Media_FOF71Lb5SkA_002_720p.mp4"
              className="w-full h-full object-cover"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </section>
  )
}
