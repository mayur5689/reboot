import { X, MapPin, Phone } from 'lucide-react';

interface LocationModalProps {
  location: {
    address: string;
    lat: number;
    lng: number;
    phone: string;
  };
  onClose: () => void;
}

export default function LocationModal({ location, onClose }: LocationModalProps) {
  const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7477892123!2d${location.lng}!3d${location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb4c73b4e3b4e3%3A0x0!2sR3boot!5e0!3m2!1sen!2sin!4v1234567890`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl w-full max-w-sm max-h-[90vh] overflow-y-auto shadow-lg">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-3xl">
          <h2 className="text-lg font-bold text-gray-900">Find Us Here</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Address */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-gray-600" />
              <p className="text-xs font-semibold text-gray-900">Address</p>
            </div>
            <p className="text-xs text-gray-700">{location.address}</p>
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-4 h-4 text-gray-600" />
              <p className="text-xs font-semibold text-gray-900">Contact</p>
            </div>
            <a
              href={`tel:${location.phone}`}
              className="text-xs text-blue-600 hover:underline"
            >
              {location.phone}
            </a>
          </div>

          {/* Embedded Map */}
          <div className="rounded-lg overflow-hidden border border-gray-200 h-64">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={mapsEmbedUrl}
            ></iframe>
          </div>

          {/* Get Directions Button */}
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-black text-white py-3 rounded-full font-semibold text-center text-sm hover:bg-gray-900 transition"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}
