'use client';

import { useState } from 'react';
import { linktreeData } from './data';
import ProfileHeader from './_components/ProfileHeader';
import LinkCard from './_components/LinkCard';
import SocialIcons from './_components/SocialIcons';
import AppointmentModal from './_components/modals/AppointmentModal';
import ReviewsModal from './_components/modals/ReviewsModal';
import LocationModal from './_components/modals/LocationModal';
import ShareModal from './_components/modals/ShareModal';
import { linksTokens as t } from './_components/tokens';

export default function LinksPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);

  return (
    <div className="min-h-dvh md:bg-[#C8C8C8]" style={{ backgroundColor: t.bg }}>
      {/* Top-anchored on all sizes — not vertically centered */}
      <div
        className="mx-auto flex min-h-dvh w-full flex-col md:px-4 md:pt-10 md:pb-8"
        style={{ maxWidth: t.containerMax }}
      >
        <div
          className="links-shell-panel flex w-full flex-1 flex-col bg-white md:flex-none md:rounded-[32px]"
          style={{
            paddingLeft: t.padX,
            paddingRight: t.padX,
            paddingTop: t.padTop,
            paddingBottom: t.padBottom,
          }}
        >
          <ProfileHeader
            profile={linktreeData.profile}
            onShare={() => setShowShareModal(true)}
          />

          <div style={{ marginTop: t.bioToSocial }}>
            <SocialIcons socials={linktreeData.socials} />
          </div>

          <div
            className="flex flex-col"
            style={{ marginTop: t.socialToLinks, gap: t.linkGap }}
          >
            {linktreeData.links.map((link, index) => (
              <div
                key={link.id}
                className="opacity-0 motion-reduce:opacity-100"
                style={{
                  animation:
                    'links-rise 380ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  animationDelay: `${60 + index * 50}ms`,
                }}
              >
                <LinkCard
                  link={link}
                  onClick={() => setActiveModal(link.modalType)}
                />
              </div>
            ))}
          </div>

          {/* Luxury: empty space, then CTA */}
          <div style={{ marginTop: t.linksToCta }}>
            <button
              type="button"
              onClick={() => setShowShareModal(true)}
              className="w-full bg-white text-[#1A1A1A] transition-[transform,background-color] duration-150 ease-out hover:bg-[#FAFAFA] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] motion-reduce:active:scale-100"
              style={{
                borderRadius: t.radiusPill,
                border: '1px solid rgba(0,0,0,0.1)',
                paddingBlock: 12,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '-0.01em',
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
              }}
            >
              Share Link
            </button>
          </div>
        </div>

        <p
          className="text-center leading-relaxed"
          style={{
            marginTop: 20,
            paddingInline: 20,
            paddingBottom: 28,
            fontSize: 11,
            color: t.inkMuted,
          }}
        >
          <a
            href="https://r3boot.in"
            className="underline-offset-2 transition-colors hover:text-[#1A1A1A] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6]"
          >
            r3boot.in
          </a>
          <span aria-hidden> · </span>
          India&apos;s First Integrated Recovery Centre
        </p>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .links-shell-panel {
            box-shadow: ${t.shadowContainer};
          }
        }
        @keyframes links-rise {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes links-rise {
            from, to { opacity: 1; transform: none; }
          }
        }
      `}</style>

      {activeModal === 'appointment' && (
        <AppointmentModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === 'reviews' && (
        <ReviewsModal
          reviews={linktreeData.reviews}
          onClose={() => setActiveModal(null)}
        />
      )}
      {activeModal === 'location' && (
        <LocationModal
          location={linktreeData.location}
          onClose={() => setActiveModal(null)}
        />
      )}
      {showShareModal && (
        <ShareModal onClose={() => setShowShareModal(false)} />
      )}
    </div>
  );
}
