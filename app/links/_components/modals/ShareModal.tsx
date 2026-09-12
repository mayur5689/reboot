'use client';

import { useState } from 'react';
import { X, Link2, Facebook, MessageCircle, Linkedin, Share2, Copy, Check } from 'lucide-react';

interface ShareModalProps {
  onClose: () => void;
}

export default function ShareModal({ onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOptions = [
    {
      name: 'Copy Link',
      icon: <Copy className="h-5 w-5" strokeWidth={1.75} />,
      action: handleCopyLink,
    },
    {
      name: 'X',
      icon: <Share2 className="h-5 w-5" strokeWidth={1.75} />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=Check%20out%20R3boot!`,
    },
    {
      name: 'Facebook',
      icon: <Facebook className="h-5 w-5" strokeWidth={1.75} />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="h-5 w-5" strokeWidth={1.75} />,
      url: `https://wa.me/?text=${encodeURIComponent(`Check out R3boot: ${pageUrl}`)}`,
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" strokeWidth={1.75} />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[oklch(0.2_0.02_285/0.45)] p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-3xl bg-white shadow-[0_16px_48px_oklch(0_0_0/0.18)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[oklch(0.92_0.01_285)] px-5 py-4">
          <h2 id="share-modal-title" className="text-base font-semibold text-[oklch(0.18_0.02_285)]">
            Share Link
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[oklch(0.45_0.02_285)] transition-colors hover:bg-[oklch(0.96_0.01_285)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[oklch(0.55_0.14_300)]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mx-5 my-5 rounded-2xl bg-[oklch(0.18_0.02_285)] px-4 py-5 text-center text-white">
          <div className="mb-2 flex justify-center">
            <Link2 className="h-7 w-7 opacity-90" strokeWidth={1.5} />
          </div>
          <h3 className="text-base font-semibold tracking-[-0.01em]">R3BOOT</h3>
          <p className="mt-1 text-xs text-[oklch(0.78_0.02_285)]">
            India&apos;s First Integrated Recovery Centre
          </p>
        </div>

        <div className="grid grid-cols-3 gap-1 px-4 pb-5">
          {shareOptions.map((option) => (
            <button
              key={option.name}
              type="button"
              onClick={() => {
                if ('action' in option && option.action) {
                  option.action();
                } else if ('url' in option && option.url) {
                  window.open(option.url, '_blank');
                }
              }}
              className="flex flex-col items-center gap-2 rounded-xl px-2 py-3 transition-colors hover:bg-[oklch(0.96_0.01_285)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[oklch(0.55_0.14_300)]"
            >
              <span className="text-[oklch(0.28_0.02_285)]">{option.icon}</span>
              <span className="text-center text-[11px] font-medium text-[oklch(0.38_0.02_285)]">
                {option.name}
              </span>
            </button>
          ))}
        </div>

        {copied && (
          <div className="mx-5 mb-5 flex items-center gap-2 rounded-xl border border-[oklch(0.88_0.05_150)] bg-[oklch(0.97_0.03_150)] px-3 py-2 text-xs text-[oklch(0.35_0.08_150)]">
            <Check className="h-4 w-4" />
            Link copied to clipboard
          </div>
        )}
      </div>
    </div>
  );
}
