"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import { IoChatbubbleEllipsesSharp, IoClose } from 'react-icons/io5';
import { MdMessage } from 'react-icons/md';

const NON_SERVICE_PAGES = ['/', '/about', '/contact', '/blog', '/reviews', '/privacy', '/terms', '/studio'];

const BRAND = '#513394';

const contacts = [
  // top → bottom; WhatsApp last = closest to trigger (thumb-reach)
  { label: 'Phone',    href: 'tel:+919702368612',          icon: FaPhone,    variant: 'brand' as const },
  { label: 'Message',  href: 'sms:+919702368612',           icon: MdMessage,  variant: 'brand' as const },
  { label: 'Email',    href: 'mailto:info.r3boot@gmail.com', icon: FaEnvelope, variant: 'brand' as const },
  { label: 'WhatsApp', href: 'https://wa.me/919702368612',  icon: FaWhatsapp,  variant: 'whatsapp' as const, external: true },
];

const pillStyles = {
  brand:     'bg-white text-gray-800 border border-[#513394]/12 shadow-[0_2px_12px_rgba(81,51,148,0.12)]',
  whatsapp:  'bg-[#25D366] text-white border border-[#1da851]/20 shadow-[0_2px_16px_rgba(37,211,102,0.30)]',
};

const iconStyles = {
  brand:    { bg: BRAND,      color: 'white' },
  whatsapp: { bg: 'white',    color: '#25D366' },
};

const FloatingActionButton = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (!NON_SERVICE_PAGES.includes(pathname)) return null;

  return (
    <div className="fixed bottom-20 right-5 sm:bottom-24 sm:right-8 z-50 flex flex-col items-end gap-2">

      {/* Contact options */}
      <AnimatePresence>
        {open && contacts.map((item, i) => {
          const Icon = item.icon;
          const delay = (contacts.length - 1 - i) * 0.06; // bottom-first stagger
          const { bg, color } = iconStyles[item.variant];

          return (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'nofollow noopener noreferrer' : undefined}
              initial={{ opacity: 0, x: 16, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 16, scale: 0.9, transition: { duration: 0.1 } }}
              transition={{ type: 'spring', stiffness: 400, damping: 30, delay }}
              whileTap={{ scale: 0.94 }}
              aria-label={item.label}
              className={`flex items-center gap-3 rounded-full pl-4 pr-2.5 h-12 cursor-pointer select-none ${pillStyles[item.variant]}`}
            >
              <span className="text-[13px] font-semibold tracking-tight">{item.label}</span>
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: bg, color }}
              >
                <Icon size={15} />
              </span>
            </motion.a>
          );
        })}
      </AnimatePresence>

      {/* Trigger: always visible */}
      <motion.button
        onClick={() => setOpen(prev => !prev)}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.91 }}
        aria-label={open ? 'Close' : 'Contact us'}
        className="relative w-14 h-14 rounded-full flex items-center justify-center text-white
                   shadow-[0_4px_20px_rgba(81,51,148,0.38)]"
        style={{ backgroundColor: BRAND }}
      >
        {/* pulse ring: collapsed only */}
        {!open && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-25"
            style={{ backgroundColor: BRAND }}
            aria-hidden="true"
          />
        )}

        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.16 }}
              className="flex items-center justify-center"
            >
              <IoClose size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.16 }}
              className="flex items-center justify-center"
            >
              <IoChatbubbleEllipsesSharp size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

    </div>
  );
};

export default FloatingActionButton;
