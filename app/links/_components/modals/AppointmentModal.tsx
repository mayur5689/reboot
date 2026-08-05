import { X } from 'lucide-react';

interface AppointmentModalProps {
  onClose: () => void;
}

export default function AppointmentModal({ onClose }: AppointmentModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[oklch(0.2_0.02_285/0.45)] p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-sm overflow-y-auto rounded-3xl bg-white shadow-[0_16px_48px_oklch(0_0_0/0.18)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between rounded-t-3xl border-b border-[oklch(0.92_0.01_285)] bg-white px-5 py-4">
          <h2 id="appointment-modal-title" className="text-base font-semibold text-[oklch(0.18_0.02_285)]">
            Book your Appointment
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

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            R3boot is a performance-driven recovery and rehabilitation brand built for people who take movement seriously. We blend clinical expertise with modern sports science to reduce pain, restore mobility, and improve performance. From injury rehab to deep recovery work, every session is structured, purposeful, and results-focused. This is not relaxation therapy, it is intelligent recovery.
          </p>

          {/* Call Button */}
          <a
            href="tel:+919702368612"
            className="block w-full bg-black text-white py-2.5 rounded-full font-medium text-center text-sm hover:bg-gray-900 active:bg-black transition-colors"
          >
            Call us: +919702368612
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919702368612"
            className="block w-full bg-green-500 text-white py-2.5 rounded-full font-medium text-center text-sm hover:bg-green-600 active:bg-green-500 transition-colors"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
