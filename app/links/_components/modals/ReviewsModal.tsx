import { X, Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  timeAgo: string;
  text: string;
}

interface ReviewsModalProps {
  reviews: Review[];
  onClose: () => void;
}

export default function ReviewsModal({ reviews, onClose }: ReviewsModalProps) {
  const avgRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl w-full max-w-sm max-h-[90vh] overflow-y-auto shadow-lg">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-3xl">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Client Reviews</h2>
            <p className="text-xs text-gray-600">Google Reviews</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Average Rating */}
        <div className="px-6 py-4 border-b border-gray-200 text-center">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.round(parseFloat(avgRating)) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <p className="text-xs text-gray-600">
            <span className="font-bold text-gray-900">{avgRating}</span> - {reviews.length} reviews
          </p>
        </div>

        {/* Reviews */}
        <div className="divide-y divide-gray-200">
          {reviews.map((review) => (
            <div key={review.id} className="px-6 py-4 space-y-2">
              {/* Reviewer Name & Time */}
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-sm text-gray-900">{review.name}</h3>
                <span className="text-xs text-gray-500">{review.timeAgo}</span>
              </div>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xs text-gray-700 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4">
          <a
            href="https://www.google.com/search?q=r3boot+dadar"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-black text-white py-3 rounded-full font-semibold text-center text-sm hover:bg-gray-900 transition"
          >
            View all reviews on Google
          </a>
        </div>
      </div>
    </div>
  );
}
