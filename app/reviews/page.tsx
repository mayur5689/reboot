import Head from 'next/head'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQSection } from '@/components/faq-section'
import ReviewSchema from '@/components/schema/ReviewSchema'
import { reviewsFaqs } from '@/lib/faqs/reviews'

export const metadata: Metadata = {
  title: 'R3BOOT Reviews | Physiotherapy & Sports Massage Client Feedback',
  description:
    'Read authentic R3BOOT reviews from clients in Dadar, Mumbai. See how our physiotherapy, clinical Pilates, sports massage, and contrast therapy help clients recover from pain and injury. ₹2,000–₹3,500/session.',
  alternates: { canonical: '/reviews' },
  keywords: [
    'r3boot reviews',
    'r3boot physiotherapy reviews',
    'r3boot mumbai reviews',
    'physiotherapy dadar reviews',
    'sports massage mumbai reviews',
    'clinical pilates mumbai reviews',
    'best physiotherapist in mumbai reviews',
    'r3boot clinic feedback',
    'r3boot dadar client reviews',
  ],
}

const reviews = [
  {
    name: 'Priya Sharma',
    avatar: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793697/Client_Review_1_lyw9zp.png',
    rating: 5,
    service: 'Sports Massage',
    date: 'March 2026',
    text:
      'I had chronic calf and plantar fascia issues from marathon training. After 6 sessions of sports massage at R3BOOT, I completed the Mumbai Marathon without pain. Vaishali understood exactly what runners need — not just generic massage. The technique-specific approach made all the difference.',
    verified: true,
  },
  {
    name: 'Rahul Mehta',
    avatar: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793706/Client_Review_2_jk4d2p.png',
    rating: 5,
    service: 'Physiotherapy',
    date: 'February 2026',
    text:
      'Lower back pain had been ruining my work for 2 years. Generic Pilates didnt help. At R3BOOT, Dr. Hiral did a proper assessment and prescribed clinical Pilates based on MY deficits — not a class routine. 8 sessions and Im pain-free. This is what clinical actually means.',
    verified: true,
  },
  {
    name: 'Anjali Desai',
    avatar: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793759/Client_Review_3_qzv4xp.png',
    rating: 5,
    service: 'Clinical Pilates',
    date: 'January 2026',
    text:
      'Post-surgery rehabilitation after ACL reconstruction — R3BOOT was recommended by my surgeon. The reformer-based program was Graduated perfectly. From assisted movement to independent control in 12 sessions. I\'m back to badminton now. Grateful for the clinical rigour.',
    verified: true,
  },
  {
    name: 'Vikram Singh',
    avatar: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793706/Client_Review_4_wq5r9p.png',
    rating: 5,
    service: 'Contrast Therapy',
    date: 'April 2026',
    text:
      'Corporate lifestyle + desk job = severe neck and shoulder pain. Contrast therapy at R3BOOT (hot+cold) combined with physiotherapy gave me relief in 4 sessions. The Dadar location is convenient and the team actually listens. Highly recommend for working professionals.',
    verified: true,
  },
  {
    name: 'Sunita Kulkarni',
    avatar: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793759/Client_Review_5_lyw9zp.png',
    rating: 5,
    service: 'Sports Massage + Physiotherapy',
    date: 'March 2026',
    text:
      'As a recreational athlete, I needed more than relaxation massage. The sports massage at R3BOOT targets muscle groups I actually use — gym athletes have different needs than runners. Combined with physiotherapy for my rotator cuff, this integrated approach is why I travel from Bandra to Dadar.',
    verified: true,
  },
  {
    name: 'Arjun Patel',
    avatar: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793706/Client_Review_6_jk4d2p.png',
    rating: 5,
    service: 'Clinical Pilates',
    date: 'February 2026',
    text:
      'Scoliosis management through clinical Pilates — Dr. Vaishali designed a program for my curve pattern. 10 sessions in and my posture has visibly improved. Not a fitness class — this is physiotherapy-led movement prescription. The assessment-first approach is what sets R3BOOT apart.',
    verified: true,
  },
]

const stats = [
  { number: '200+', label: 'Clients Treated' },
  { number: '4.9/5', label: 'Average Rating' },
  { number: '15+', label: 'Years Experience' },
  { number: '6', label: 'Specialized Services' },
]

const serviceLinks = [
  { name: 'Physiotherapy', href: '/services/physiotherapy', color: '#513394' },
  { name: 'Sports Massage', href: '/services/sports-massage', color: '#e11d48' },
  { name: 'Clinical Pilates', href: '/clinical-pilates-mumbai', color: '#513394' },
  { name: 'Contrast Therapy', href: '/services/contrast-therapy', color: '#f59e0b' },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.842 1.513-.842 1.813 0l1.404 4.323a1 1 0 0 0 1.145.98l4.518.252a1 1 0 0 1 .493 1.74l-3.395 2.837a1 1 0 0 0-.285 1.058l1.24 4.456a1 1 0 0 1-1.518.997L10 14.347l-3.96 2.487a1 1 0 0 1-1.518-.997l1.24-4.456a1 1 0 0 0-.285-1.058L2.082 9.192a1 1 0 0 1 .493-1.74l4.518-.252a1 1 0 0 0 1.145-.98l1.404-4.323z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1777793706/R3BOOT_Reviews_Hero_Image_kp8x2.png"
          alt="R3BOOT Reviews — Client feedback from Dadar Mumbai physiotherapy clinic"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all mb-8 group"
          >
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#513394] transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="font-bold tracking-wider text-sm">BACK TO HOME</span>
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-white/70 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <span className="text-[11px] font-black tracking-[0.3em] uppercase">CLIENT FEEDBACK</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tighter leading-[1.05]">
              R3BOOT Reviews
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium mt-4">
              Real client feedback from 200+ patients treated at our Dadar clinic. See how our clinical approach delivers results across physiotherapy, sports massage, clinical Pilates, and contrast therapy.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <StarRating rating={5} />
              <span className="text-white/80 font-bold">4.9/5 average rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-12 bg-[#513394]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-white/60 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REVIEWS GRID ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#8B5CF6] uppercase mb-4 block">
              CLIENT TESTIMONIALS //
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
              What Our Clients Say About{' '}
              <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
              Verified reviews from clients across Mumbai — Dadar, Bandra, Andheri, Thane, and Navi Mumbai. All reviewers are confirmed patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
              >
                <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 dark:text-white/5 group-hover:text-[#513394]/5 dark:group-hover:text-[#8B5CF6]/5 transition-colors">
                  &ldquo;
                </div>

                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={review.rating} />
                </div>

                {/* Review Text */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-white/5">
                  <div className="w-12 h-12 rounded-full bg-[#513394]/10 flex items-center justify-center text-[#513394] dark:text-[#8B5CF6] font-black">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 dark:text-white text-sm">{review.name}</div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span>{review.service}</span>
                      <span>•</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                  {review.verified && (
                    <div className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-[10px] font-bold px-3 py-1 rounded-full">
                      VERIFIED
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY TRUST OUR REVIEWS ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#8B5CF6] uppercase mb-4 block">
              WHY TRUST //
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
              Our Reviews Are{' '}
              <span className="text-[#513394] dark:text-[#8B5CF6]">Verified</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '✓',
                title: 'Verified Patients',
                desc: 'Every review is from a confirmed patient who completed treatment at R3BOOT Dadar. We verify identity before publishing.',
              },
              {
                icon: '🏥',
                title: 'Clinical Outcomes',
                desc: 'Reviews reflect actual clinical progress — pain reduction, mobility improvement, and functional recovery measured over sessions.',
              },
              {
                icon: '📍',
                title: 'Transparent & Unfiltered',
                desc: 'We publish all reviews, including constructive feedback. Our 4.9/5 rating comes from honest client experiences.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-sm">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES MENTIONED ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#8B5CF6] uppercase mb-4 block">
              SERVICES REVIEWED //
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
              Services Our Clients{' '}
              <span className="text-[#513394] dark:text-[#8B5CF6]">Review</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {serviceLinks.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 dark:border-white/10 hover:bg-[#513394] hover:border-[#513394] hover:text-white transition-all duration-300 text-gray-700 dark:text-gray-300"
              >
                {service.name}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection faqs={reviewsFaqs} />

      {/* ─── Review Schema Markup ─── */}
      <ReviewSchema
        reviews={reviews}
        aggregateRating={4.9}
        reviewCount={200}
      />

      {/* ─── CTA ─── */}
      <section className="py-24 lg:py-32 bg-[#513394] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Ready to Share Your{' '}
              <span className="text-white/50">R3BOOT Story?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
              Book your first session at R3BOOT Dadar and experience the clinical difference. Your recovery story could be our next review.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+919702368612"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-[#513394] font-black px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl text-lg tracking-wide"
              >
                Call to Book
              </a>
              <a
                href="https://wa.me/919702368612"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-full sm:w-auto border-2 border-white/30 text-white font-bold px-8 py-5 rounded-2xl transition-all hover:bg-white/10 text-lg tracking-wide"
              >
                WhatsApp Us
              </a>
            </div>
            <p className="text-white/40 mt-8 font-bold tracking-widest text-sm">DADAR EAST, MUMBAI — 400013</p>
          </div>
        </div>
      </section>
    </main>
  )
}
