'use client';

import { CalendarClock, Star, MapPin, MoreVertical } from 'lucide-react';
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
  strokeWidth: 1.5,
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
      className="group relative flex w-full items-center justify-center bg-white text-center transition-[transform,box-shadow,background-color] duration-150 ease-out hover:shadow-[0_1px_3px_rgba(0,0,0,0.05),0_4px_12px_rgba(0,0,0,0.06)] active:scale-[0.995] active:bg-[#FAFAFA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] motion-reduce:transition-none motion-reduce:active:scale-100"
      style={{
        height: t.cardHeight,
        borderRadius: t.radiusCard,
        /* Extra left padding so title sits farther from the badge */
        paddingLeft: 76,
        paddingRight: 48,
        boxShadow: t.shadowCard,
      }}
    >
      {/* Badge — soft gradient + rings (not flat purple) */}
      <span
        className="absolute left-3.5 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full"
        style={{
          width: t.iconCircle,
          height: t.iconCircle,
          background: `linear-gradient(145deg, #B8A0CE 0%, ${t.accent} 45%, ${t.accentDeep} 100%)`,
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.35),
            inset 0 -1px 0 rgba(0,0,0,0.12),
            0 0 0 1px rgba(255,255,255,0.4),
            0 0 0 2px rgba(155,123,184,0.25)
          `,
        }}
      >
        <span className="flex items-center justify-center text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.15)]">
          {iconMap[iconKey]}
        </span>
      </span>

      <span className="min-w-0 max-w-full">
        <span
          className="block leading-tight text-[#1A1A1A]"
          style={{
            fontSize: t.cardTitleSize,
            fontWeight: t.cardTitleWeight,
            letterSpacing: '-0.005em',
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
              color: t.inkMuted,
            }}
          >
            {link.description}
          </span>
        ) : null}
      </span>

      <span
        className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center"
        style={{ width: 28, height: 28, color: t.inkMuted }}
      >
        <MoreVertical
          size={t.moreSize}
          strokeWidth={1.75}
          absoluteStrokeWidth
          aria-hidden
        />
        <span className="sr-only">Open</span>
      </span>
    </button>
  );
}
