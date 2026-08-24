"use client";

import { Reveal, scaleIn } from '@/components/motion/Reveal'

const services = [
  "Physiotherapy",
  "Contrast Therapy",
  "Aqua Therapy",
  "Sports Massage",
  "Mental Training",
  "Athlete Screening",
];

function RibbonTrack({
  direction,
  duration,
}: {
  direction: "left" | "right";
  duration: string;
}) {
  const repeatedItems = [...services, ...services, ...services];

  return (
    <div
      className={`flex w-max whitespace-nowrap ${
        direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
      }`}
      style={{ "--duration": duration } as React.CSSProperties}
    >
      {repeatedItems.map((item, index) => (
        <span
          key={`${item}-${index}`}
          className="inline-flex items-center gap-4 px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white sm:px-8 sm:text-base"
        >
          {item}
          <span className="text-white/90">✖</span>
        </span>
      ))}
    </div>
  );
}

export default function MovingServiceRibbons() {
  return (
    <section className="relative overflow-hidden bg-transparent py-3 sm:py-4">
      <Reveal variants={scaleIn} amount={0.35} className="relative mx-auto h-28 w-full max-w-[1800px] sm:h-32">
        <div className="absolute left-[-6%] right-[-6%] top-4 rotate-[-2.5deg] rounded-sm bg-[#513394] py-4 shadow-md sm:top-5 sm:py-[18px]">
          <RibbonTrack direction="left" duration="40s" />
        </div>

        <div className="absolute left-[-6%] right-[-6%] top-12 rotate-[2.2deg] rounded-sm bg-[#0A0A0A] py-4 shadow-md sm:top-14 sm:py-[18px]">
          <RibbonTrack direction="right" duration="40s" />
        </div>
      </Reveal>
    </section>
  );
}
