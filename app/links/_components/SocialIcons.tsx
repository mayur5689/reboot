'use client';

import { Instagram, Mail, Phone, MessageCircle, Globe } from 'lucide-react';
import { linksTokens as t } from './tokens';

interface Social {
  platform: string;
  url: string;
}

interface SocialIconsProps {
  socials: Social[];
}

const ICON = {
  size: t.socialGlyph,
  strokeWidth: 1.75,
  absoluteStrokeWidth: true as const,
};

const iconMap: Record<string, React.ReactNode> = {
  instagram: <Instagram {...ICON} />,
  email: <Mail {...ICON} />,
  phone: <Phone {...ICON} />,
  whatsapp: <MessageCircle {...ICON} />,
  website: <Globe {...ICON} />,
};

const labelMap: Record<string, string> = {
  instagram: 'Instagram',
  email: 'Email',
  phone: 'Call',
  whatsapp: 'WhatsApp',
  website: 'Website',
};

export default function SocialIcons({ socials }: SocialIconsProps) {
  return (
    <nav
      aria-label="Social links"
      className="flex items-center justify-center"
      style={{ gap: t.socialGap }}
    >
      {socials.map((social) => (
        <a
          key={social.platform}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={labelMap[social.platform] ?? social.platform}
          className="inline-flex items-center justify-center rounded-full text-[#1A1A1A] transition-colors duration-150 ease-out hover:bg-black/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6]"
          style={{ width: t.socialHit, height: t.socialHit }}
        >
          {iconMap[social.platform] ?? social.platform}
        </a>
      ))}
    </nav>
  );
}
