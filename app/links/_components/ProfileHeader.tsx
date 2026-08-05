'use client';

import Image from 'next/image';
import { Share } from 'lucide-react';
import { linksTokens as t } from './tokens';

interface ProfileHeaderProps {
  profile: {
    name: string;
    tagline: string;
    phone: string;
    logo?: string;
  };
  onShare?: () => void;
}

const chromeBtn =
  'inline-flex items-center justify-center rounded-full bg-white text-[#1A1A1A] transition-[transform,background-color] duration-150 ease-out hover:bg-[#FAFAFA] active:scale-[0.96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] motion-reduce:active:scale-100';

export default function ProfileHeader({ profile, onShare }: ProfileHeaderProps) {
  return (
    <header className="relative text-center">
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between">
        <span
          className={chromeBtn}
          style={{
            width: t.chromeButton,
            height: t.chromeButton,
            boxShadow: t.shadowChrome,
            fontSize: 16,
            fontWeight: 600,
            lineHeight: 1,
          }}
          aria-hidden
        >
          ∗
        </span>
        {onShare && (
          <button
            type="button"
            onClick={onShare}
            aria-label="Share profile"
            className={chromeBtn}
            style={{
              width: t.chromeButton,
              height: t.chromeButton,
              boxShadow: t.shadowChrome,
            }}
          >
            <Share size={16} strokeWidth={1.75} absoluteStrokeWidth />
          </button>
        )}
      </div>

      {/* Compact logo with generous surrounding air */}
      <div className="flex flex-col items-center" style={{ paddingTop: 44 }}>
        <div
          className="relative overflow-hidden rounded-full bg-[#1A1A1A]"
          style={{
            width: t.logoSize,
            height: t.logoSize,
            marginBottom: t.logoToTitle,
          }}
        >
          {profile.logo ? (
            <Image
              src={profile.logo}
              alt={`${profile.name} logo`}
              fill
              sizes={`${t.logoSize}px`}
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center px-2.5 text-center">
              <span className="text-[13px] font-semibold tracking-[0.1em] text-white">
                R3BOOT
              </span>
              <span
                className="mt-0.5 text-[6px] font-medium tracking-[0.14em]"
                style={{ color: t.accentLogo }}
              >
                RESTORE · RENEW · RELAX
              </span>
            </div>
          )}
        </div>

        <h1
          className="leading-none text-[#1A1A1A]"
          style={{
            fontSize: t.titleSize,
            fontWeight: t.titleWeight,
            letterSpacing: t.titleTracking,
          }}
        >
          {profile.name}
        </h1>

        <p
          className="max-w-[22rem]"
          style={{
            marginTop: t.titleToBio,
            fontSize: t.bioSize,
            fontWeight: t.bioWeight,
            lineHeight: 1.4,
            color: t.inkSecondary,
          }}
        >
          {profile.tagline}.{' '}
          <span className="whitespace-nowrap" style={{ color: t.inkMuted }}>
            <span aria-hidden>📞</span>
            {profile.phone}
          </span>
        </p>
      </div>
    </header>
  );
}
