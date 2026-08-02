import Image from 'next/image'
import Link from 'next/link'

const AUDIENCES = [
  'Competitive athletes',
  'Youth athletes',
  'Return-from-injury',
  'High-pressure professionals',
  'Coaches & performers',
]

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba9471?auto=format&fit=crop&w=900&q=80',
    alt: 'Athlete competing under pressure',
    className: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1573497019940-1cfe74955cdd?auto=format&fit=crop&w=700&q=80',
    alt: 'One-to-one counselling conversation',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80',
    alt: 'Focused training mindset',
    className: 'col-span-1 row-span-1',
  },
]

export function WhoForSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              WHO IT IS FOR //
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-5">
              Built for people who{' '}
              <span className="text-[#513394] dark:text-[#8B5CF6]">perform under pressure.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-6">
              Whether you need sharper competition skills or space to work through the emotional side of sport and recovery, this page is the single entry point for mental performance at R3BOOT Dadar.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {AUDIENCES.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center px-3.5 py-2 rounded-full text-[12px] font-bold tracking-wide bg-[#513394]/10 text-[#513394] dark:bg-[#513394]/20 dark:text-[#C4B5FD]"
                >
                  {label}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Often paired with{' '}
              <Link href="/services/physiotherapy" className="text-[#513394] dark:text-[#C4B5FD] font-bold hover:underline underline-offset-4">
                physiotherapy
              </Link>{' '}
              and{' '}
              <Link href="/contrast-therapy-mumbai" className="text-[#513394] dark:text-[#C4B5FD] font-bold hover:underline underline-offset-4">
                contrast therapy
              </Link>{' '}
              for stage-wise return to performance.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 h-[340px] sm:h-[420px]">
              {IMAGES.map((img) => (
                <div key={img.src} className={`relative rounded-2xl overflow-hidden ${img.className}`}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 40vw" />
                  <div className="absolute inset-0 bg-black/15" />
                </div>
              ))}
            </div>
            <p className="text-[11px] text-gray-400 dark:text-white/30 mt-3 tracking-wide">
              Placeholder stock imagery — replace with R3BOOT session photography when ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
