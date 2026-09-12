'use client';

import { X, Star } from 'lucide-react';
import type { Review } from '../../data';
import { linksTokens as t } from '../tokens';

interface ReviewsModalProps {
  reviews: Review[];
  onClose: () => void;
}

export default function ReviewsModal({ reviews, onClose }: ReviewsModalProps) {
  const avgRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[oklch(0.2_0.02_285/0.45)] p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reviews-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-sm overflow-y-auto bg-white shadow-[0_16px_48px_oklch(0_0_0/0.18)]"
        style={{ borderRadius: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white px-5 py-4" style={{ borderRadius: '28px 28px 0 0' }}>
          <div>
            <h2 id="reviews-modal-title" className="text-base font-bold" style={{ color: t.ink }}>
              Client Reviews
            </h2>
            <p className="text-xs" style={{ color: t.inkSecondary }}>
              Google Reviews
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

        <div className="border-b border-gray-100 px-6 py-4 text-center">
          <div className="mb-2 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.round(parseFloat(avgRating)) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <p className="text-xs" style={{ color: t.inkSecondary }}>
            <span className="font-bold" style={{ color: t.ink }}>
              {avgRating}
            </span>
            {' · '}
            {reviews.length} reviews
          </p>
        </div>

        <div className="divide-y divide-gray-100">
          {reviews.map((review) => (
            <div key={review.id} className="space-y-2 px-5 py-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold" style={{ color: t.ink }}>
                  {review.name}
                </h3>
                <span className="shrink-0 text-xs" style={{ color: t.inkMuted }}>
                  {review.timeAgo}
                </span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-xs leading-relaxed" style={{ color: t.inkSecondary }}>
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 border-t border-gray-100 bg-white px-5 py-4" style={{ borderRadius: '0 0 28px 28px' }}>
          <a
            href="https://www.google.com/search?q=r3boot+integrated+recovery+mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 text-center text-sm font-semibold text-white transition-colors hover:opacity-95"
            style={{
              borderRadius: t.radiusPill,
              background: t.ink,
            }}
          >
            View all reviews on Google
          </a>
        </div>
      </div>
    </div>
  );
}
