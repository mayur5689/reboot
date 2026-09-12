'use client';

import { useState } from 'react';
import { X, MapPin, Phone, Navigation } from 'lucide-react';
import type { Location } from '../../data';
import { linksTokens as t } from '../tokens';

interface LocationModalProps {
  locations: Location[];
  onClose: () => void;
}

export default function LocationModal({ locations, onClose }: LocationModalProps) {
  const [activeId, setActiveId] = useState(locations[0]?.id);
  const active = locations.find((loc) => loc.id === activeId) ?? locations[0];

  if (!active) return null;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${active.lat},${active.lng}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[oklch(0.2_0.02_285/0.45)] p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="location-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-sm overflow-y-auto bg-white shadow-[0_16px_48px_oklch(0_0_0/0.18)]"
        style={{ borderRadius: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white px-5 py-4" style={{ borderRadius: '28px 28px 0 0' }}>
          <div>
            <h2 id="location-modal-title" className="text-base font-bold" style={{ color: t.ink }}>
              Find Us Here
            </h2>
            <p className="text-xs" style={{ color: t.inkSecondary }}>
              2 centres in Mumbai
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7048C6]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 p-5">
          <div className="grid grid-cols-2 gap-2">
            {locations.map((loc) => {
              const selected = loc.id === active.id;
              return (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => setActiveId(loc.id)}
                  className="rounded-2xl px-3 py-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7048C6]"
                  style={{
                    background: selected ? t.accentSoft : '#F8F9FE',
                    boxShadow: selected ? `inset 0 0 0 1.5px ${t.accent}` : 'inset 0 0 0 1px rgba(0,0,0,0.06)',
                  }}
                >
                  <span
                    className="block text-[10px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: t.accent }}
                  >
                    {loc.area}
                  </span>
                  <span className="mt-1 block text-sm font-bold" style={{ color: t.ink }}>
                    {loc.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2">
              <MapPin className="h-4 w-4" style={{ color: t.accent }} />
              <p className="text-xs font-semibold" style={{ color: t.ink }}>
                {active.name}
              </p>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: t.inkSecondary }}>
              {active.address}
            </p>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2">
              <Phone className="h-4 w-4" style={{ color: t.accent }} />
              <p className="text-xs font-semibold" style={{ color: t.ink }}>
                Contact
              </p>
            </div>
            <a
              href={`tel:${active.phone}`}
              className="text-xs font-medium hover:underline"
              style={{ color: t.accentDeep }}
            >
              {active.phone}
            </a>
          </div>

          <div className="h-52 overflow-hidden rounded-2xl border border-gray-100">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of R3BOOT ${active.name}`}
              src={active.mapsEmbedUrl}
            />
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 py-3 text-sm font-semibold text-white transition-colors hover:opacity-95"
            style={{
              borderRadius: t.radiusPill,
              background: t.ink,
            }}
          >
            <Navigation className="h-4 w-4" />
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}
