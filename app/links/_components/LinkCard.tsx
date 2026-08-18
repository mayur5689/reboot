'use client';

import { CalendarClock, Star, MapPin, ChevronRight } from 'lucide-react';
import { linksTokens as t } from './tokens';

interface LinkCardProps {
  link: {
    id: string;
    title: string;
    description: string;
  };
  onClick: () => void;
}

const GLYPH = {
  size: t.iconGlyph,
  strokeWidth: 1.75,
  absoluteStrokeWidth: true as const,
};

const iconMap: Record<string, React.ReactNode> = {
  appointment: <CalendarClock {...GLYPH} />,
  reviews: <Star {...GLYPH} />,
  location: <MapPin {...GLYPH} />,
};

export default function LinkCard({ link, onClick }: LinkCardProps) {
  const iconKey = link.id as keyof typeof iconMap;

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex w-full items-center bg-white text-left transition-[transform,box-shadow] duration-150 ease-out hover:shadow-[0_8px_24px_rgba(81,51,148,0.12),0_2px_6px_rgba(0,0,0,0.05)] active:scale-[0.995] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7048C6] motion-reduce:transition-none motion-reduce:active:scale-100"
      style={{
        minHeight: t.cardHeight,
        borderRadius: t.radiusCard,
        paddingLeft: 16,
        paddingRight: 14,
        paddingTop: 12,
        paddingBottom: 12,
        boxShadow: t.shadowCard,
      }}
    >
      <span
        className="flex shrink-0 items-center justify-center rounded-full text-white"
        style={{
          width: t.iconCircle,
          height: t.iconCircle,
          background: `linear-gradient(160deg, #8B6AD4 0%, ${t.accent} 55%, ${t.accentDeep} 100%)`,
          boxShadow: '0 4px 10px rgba(81, 51, 148, 0.28)',
        }}
      >
        {iconMap[iconKey]}
      </span>

      <span className="min-w-0 flex-1 px-3.5">
        <span
          className="block leading-tight"
          style={{
            fontSize: t.cardTitleSize,
            fontWeight: t.cardTitleWeight,
            letterSpacing: '-0.02em',
            color: t.ink,
          }}
        >
          {link.title}
        </span>
        {link.description ? (
          <span
            className="mt-0.5 block truncate leading-snug"
            style={{
              fontSize: t.cardSubSize,
              fontWeight: t.cardSubWeight,
              color: t.inkSecondary,
            }}
          >
            {link.description}
          </span>
        ) : null}
      </span>

      <span
        className="flex shrink-0 items-center justify-center transition-transform duration-150 group-hover:translate-x-0.5"
        style={{ width: 28, height: 28, color: t.inkMuted }}
      >
        <ChevronRight size={20} strokeWidth={1.75} absoluteStrokeWidth aria-hidden />
        <span className="sr-only">Open</span>
      </span>
    </button>
  );
}
