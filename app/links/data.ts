export type Social = {
  platform: string;
  url: string;
};

export type LinkItem = {
  id: string;
  title: string;
  description: string;
  action: 'modal';
  modalType: 'appointment' | 'reviews' | 'location';
};

export type Review = {
  id: number;
  name: string;
  rating: number;
  timeAgo: string;
  text: string;
};

export type Location = {
  id: string;
  name: string;
  area: string;
  address: string;
  lat: number;
  lng: number;
  phone: string;
  mapsEmbedUrl: string;
};

export const linktreeData = {
  profile: {
    name: 'R3BOOT',
    tagline: "India's First Integrated Recovery Centre",
    phone: '+919702368612',
    phoneDisplay: '+91 97023 68612',
    bio: 'R3boot is a performance-driven recovery and rehabilitation brand built for people who take movement seriously. We blend clinical expertise with modern sports science to reduce pain, restore mobility, and improve performance. From injury rehab to deep recovery work, every session is structured, purposeful, and results-focused. This is not relaxation therapy, it is intelligent recovery.',
  },
  links: [
    {
      id: 'appointment',
      title: 'Book your Appointment',
      description: 'Schedule your recovery session',
      action: 'modal',
      modalType: 'appointment',
    },
    {
      id: 'reviews',
      title: 'Client Reviews',
      description: '⭐  5.0 on Google Reviews',
      action: 'modal',
      modalType: 'reviews',
    },
    {
      id: 'location',
      title: 'Find Us Here',
      description: '📍  Dadar East · Prabhadevi',
      action: 'modal',
      modalType: 'location',
    },
  ] satisfies LinkItem[],
  socials: [
    { platform: 'instagram', url: 'https://www.instagram.com/r3boot.in' },
    { platform: 'email', url: 'mailto:info.r3boot@gmail.com' },
    { platform: 'phone', url: 'tel:+919702368612' },
    { platform: 'whatsapp', url: 'https://wa.me/919702368612' },
    { platform: 'website', url: 'https://r3boot.in' },
  ] satisfies Social[],
  reviews: [
    {
      id: 1,
      name: 'Vishal Kadam',
      rating: 5,
      timeAgo: '3 days ago',
      text: 'An outstanding recovery center with a compassionate and knowledgeable team. The staff genuinely cares about every individual, and the supportive environment makes a real difference. Highly recommend R3boot | Integrated Recovery Center to anyone looking for quality recovery services.',
    },
    {
      id: 2,
      name: 'Chirag Kenia',
      rating: 5,
      timeAgo: '5 days ago',
      text: 'R3boot, thank you so much the session was very good. Thanks for arranging staff with experience relevant to the requirement and not just a masseuse. Amazing facilities and good care for cleanliness and hygiene.',
    },
    {
      id: 3,
      name: 'Yogesh Bhatte',
      rating: 5,
      timeAgo: '1 week ago',
      text: 'R3boot offers an outstanding wellness experience. The Pilates sessions are expertly guided, and the contrast therapy is a fantastic addition for recovery and relaxation. The studio is clean, modern, and welcoming, with a team that genuinely cares about your wellbeing. I always leave feeling stronger, refreshed, and re-energized. Highly recommend!',
    },
    {
      id: 4,
      name: 'Sonia Chhoda',
      rating: 4,
      timeAgo: '1 week ago',
      text: 'Got the sports massage done .. very happy with the masseuse and with the overall experience - dry cupping and oil massage. The center is very clean and neat too. Looking forward to try the other therapies here.',
    },
    {
      id: 5,
      name: 'Hemant Kadam',
      rating: 5,
      timeAgo: '3 weeks ago',
      text: "I had an appointment at R3boot for a sports massage, and the experience exceeded my expectations. The therapist was extremely knowledgeable and skilled. Before starting, he took the time to assess my condition and understand where I was experiencing tightness and discomfort. Based on his assessment, he recommended adding cupping therapy to the session. It turned out to be one of the best decisions—I felt a noticeable difference in my muscle tightness, mobility, and overall recovery afterward. If you're looking for a place that genuinely focuses on recovery and has highly skilled therapists, I would 100% recommend R3boot.",
    },
    {
      id: 6,
      name: 'Namrata Doshi',
      rating: 5,
      timeAgo: '1 month ago',
      text: 'I had an excellent experience at this sports recovery centre. The team is highly professional, knowledgeable, and genuinely caring. From the initial assessment to the recovery plan, everything was clearly explained and tailored to my needs. Highly recommend R3BOOT.',
    },
    {
      id: 7,
      name: 'Kapil Jagtap',
      rating: 5,
      timeAgo: '5 months ago',
      text: 'Session was really helpful. Dr. Nirmal was fabulous.',
    },
    {
      id: 8,
      name: 'Om Bhimjiyani',
      rating: 5,
      timeAgo: '5 months ago',
      text: 'Absolutely Fantastic, I opted for a sports massage, I feel really good. A lot of facilities available here including hydrotherapy that has a treadmill with half your body under water for recovery. Definitely worth it for any rehabilitation and recovery post surgery/injury.',
    },
    {
      id: 9,
      name: 'Aarya Bhatte',
      rating: 5,
      timeAgo: '6 months ago',
      text: 'R3boot Active life is absolutely outstanding! The Pilates instructors are skilled, supportive, and inspiring, and the recovery center makes the experience complete. Every visit leaves me feeling stronger, refreshed, and truly cared for - a perfect place for wellness and balance.',
    },
    {
      id: 10,
      name: 'Sonal Malik',
      rating: 5,
      timeAgo: '6 months ago',
      text: 'Great facilities and posture correction at Reboot. The team is amazing and supportive during the session.',
    },
  ] satisfies Review[],
  locations: [
    {
      id: 'dadar',
      name: 'Dadar East',
      area: 'Flagship',
      address:
        'Palai Plaza, 203, Swami Gyan Jivandas Marg, Dadar East, Mumbai, Maharashtra 400014',
      lat: 19.0165524,
      lng: 72.8433525,
      phone: '+919702368612',
      mapsEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.333831776953!2d72.8433525!3d19.0165524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf87519edaa5%3A0x36815ea9da0ca28c!2sR3boot%20%7C%20Integrated%20Recovery%20Center!5e0!3m2!1sen!2sin!4v1736966800000',
    },
    {
      id: 'prabhadevi',
      name: 'Prabhadevi',
      area: 'New',
      address:
        'Lodha Signet, A-303, Senapati Bapat Marg, Prabhadevi, Mumbai, Maharashtra 400013',
      lat: 19.0031084,
      lng: 72.8267492,
      phone: '+919702368612',
      mapsEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.65!2d72.8267492!3d19.0031084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfd8a9695041%3A0xdbf9dddd1b76b6c!2sR3boot%20%7C%20Integrated%20Recovery%20Center!5e0!3m2!1sen!2sin!4v1736966800001',
    },
  ] satisfies Location[],
};
