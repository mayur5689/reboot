'use client';

import { useState } from 'react';
import { linktreeData } from './data';
import ProfileHeader from './_components/ProfileHeader';
import LinkCard from './_components/LinkCard';
import SocialIcons from './_components/SocialIcons';
import BrandBanner from './_components/BrandBanner';
import AppointmentModal from './_components/modals/AppointmentModal';
import ReviewsModal from './_components/modals/ReviewsModal';
import LocationModal from './_components/modals/LocationModal';
import ShareModal from './_components/modals/ShareModal';
import { linksTokens as t } from './_components/tokens';
import { Heart } from 'lucide-react';

export default function LinksPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);

  return (
    <div className="relative min-h-dvh overflow-hidden" style={{ backgroundColor: t.bg }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 55% at 50% -8%, rgba(112, 72, 198, 0.16), transparent 55%),
            radial-gradient(ellipse 70% 40% at 100% 80%, rgba(167, 139, 250, 0.18), transparent 50%),
            radial-gradient(ellipse 50% 35% at 0% 100%, rgba(112, 72, 198, 0.1), transparent 45%)
          `,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[42%] h-40 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(196, 181, 253, 0.35), transparent 70%)',
        }}
      />

      <div
        className="relative mx-auto flex min-h-dvh w-full flex-col"
        style={{ maxWidth: t.containerMax }}
      >
        <div
          className="flex w-full flex-1 flex-col"
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

          <div style={{ marginTop: t.phoneToSocial }}>
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

          <div
            className="opacity-0 motion-reduce:opacity-100"
            style={{
              marginTop: t.linksToBanner,
              animation: 'links-rise 380ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
              animationDelay: '220ms',
            }}
          >
            <BrandBanner onClick={() => setActiveModal('appointment')} />
          </div>

          <div className="mt-8 flex flex-col items-center">
            <div className="flex w-full items-center gap-3" aria-hidden>
              <span className="h-px flex-1 bg-black/10" />
              <Heart
                size={14}
                strokeWidth={1.75}
                className="shrink-0"
                style={{ color: t.accent }}
                fill="currentColor"
              />
              <span className="h-px flex-1 bg-black/10" />
            </div>
            <p
              className="mt-4 text-center leading-relaxed"
              style={{ fontSize: 11, color: t.inkMuted }}
            >
              © R3BOOT · India&apos;s First Integrated Recovery Centre
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes links-rise {
          from { opacity: 0; transform: translateY(8px); }
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
          locations={linktreeData.locations}
          onClose={() => setActiveModal(null)}
        />
      )}
      {showShareModal && (
        <ShareModal onClose={() => setShowShareModal(false)} />
      )}
    </div>
  );
}
