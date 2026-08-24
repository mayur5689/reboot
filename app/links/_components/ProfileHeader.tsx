'use client';

import Image from 'next/image';
import { Bell, Share, Phone } from 'lucide-react';
import { linksTokens as t } from './tokens';

interface ProfileHeaderProps {
  profile: {
    name: string;
    tagline: string;
    taglineLocation?: string;
    phone: string;
    phoneDisplay?: string;
  };
  onShare?: () => void;
}

const chromeBtn =
  'inline-flex items-center justify-center rounded-full bg-white text-[#1A1A2E] transition-[transform,background-color] duration-150 ease-out hover:bg-[#FAFAFA] active:scale-[0.96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7048C6] motion-reduce:active:scale-100';

export default function ProfileHeader({ profile, onShare }: ProfileHeaderProps) {
  const phoneDisplay = profile.phoneDisplay ?? profile.phone;

  return (
    <header className="relative text-center">
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between">
        <span
          className={chromeBtn}
          style={{
            width: t.chromeButton,
            height: t.chromeButton,
            boxShadow: t.shadowChrome,
            color: t.accent,
          }}
          aria-hidden
        >
          <Bell size={16} strokeWidth={1.75} absoluteStrokeWidth />
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

      <div className="flex flex-col items-center" style={{ paddingTop: 44 }}>
        <div
          className="relative overflow-hidden rounded-full"
          style={{
            width: t.logoSize,
            height: t.logoSize,
            marginBottom: t.logoToTitle,
            background: '#000',
            boxShadow: '0 8px 24px rgba(81, 51, 148, 0.18)',
          }}
        >
          <Image
            src="/images/REBOOT FINAL LOGO_1.png"
            alt="R3BOOT"
            fill
            sizes={`${t.logoSize}px`}
            className="object-contain p-[11px]"
            priority
          />
        </div>

        <h1
          className="leading-none"
          style={{
            fontSize: t.titleSize,
            fontWeight: t.titleWeight,
            letterSpacing: t.titleTracking,
            color: t.ink,
          }}
        >
          {profile.name}
        </h1>

        <p
          style={{
            marginTop: t.titleToBio,
            fontSize: t.bioSize,
            fontWeight: t.bioWeight,
            lineHeight: 1.4,
            color: t.inkSecondary,
          }}
        >
          {profile.tagline}
        </p>
        {profile.taglineLocation && (
          <p
            style={{
              marginTop: 2,
              fontSize: t.bioSize,
              fontWeight: t.bioWeight,
              lineHeight: 1.4,
              color: t.inkSecondary,
            }}
          >
            {profile.taglineLocation}
          </p>
        )}

        <a
          href={`tel:${profile.phone}`}
          className="inline-flex items-center gap-2 transition-transform duration-150 ease-out hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7048C6] motion-reduce:transform-none"
          style={{
            marginTop: t.bioToPhone,
            background: t.accentSoft,
            color: t.accentDeep,
            borderRadius: t.radiusPill,
            padding: '10px 18px',
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: '-0.01em',
          }}
        >
          <Phone size={14} strokeWidth={2} absoluteStrokeWidth />
          {phoneDisplay}
        </a>
      </div>
    </header>
  );
}
