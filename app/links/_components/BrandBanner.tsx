'use client';

import { linksTokens as t } from './tokens';

interface BrandBannerProps {
  onClick: () => void;
}

function RunnerIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden
      className="text-white"
    >
      <circle cx="22.5" cy="6.5" r="2.6" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M20.5 11.2c1.4.3 2.6 1.2 3.3 2.4l2.2 3.6M14.2 16.4l4.2-3.4 3.1 2.6-1.4 4.6 4.8 3.2M12.4 22.2l3.6-2.1 1.8 6.2 4.2 4.4M8.8 28.4l4.8-2.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BrandBanner({ onClick }: BrandBannerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-4 text-left transition-transform duration-150 ease-out hover:scale-[1.01] active:scale-[0.995] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transform-none"
      style={{
        borderRadius: t.radiusCard,
        padding: '18px 20px',
        background: `linear-gradient(135deg, #8B5CF6 0%, ${t.accent} 42%, ${t.accentDeep} 100%)`,
        boxShadow: '0 10px 28px rgba(81, 51, 148, 0.32)',
      }}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15">
        <RunnerIcon />
      </span>
      <span>
        <span className="block text-[16px] font-extrabold leading-tight tracking-[-0.02em] text-white">
          Recover. Rebuild. Rise.
        </span>
        <span className="mt-0.5 block text-[13px] font-medium text-white/80">
          Your comeback starts here.
        </span>
      </span>
    </button>
  );
}
