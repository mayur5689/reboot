import type { TeamMemberProfile } from '../types'

/**
 * Physiotherapy, sports massage and leadership profiles.
 * Only facts already published on /about are used here.
 * Empty arrays are hidden by the profile view. Fill them once the clinic
 * returns the "About Us" questionnaire (qualifications, experience, languages, etc.).
 */

const PHYSIO = {
  relatedServiceHref: '/services/physiotherapy',
  relatedServiceLabel: 'Physiotherapy',
}

const MASSAGE = {
  relatedServiceHref: '/services/sports-massage',
  relatedServiceLabel: 'Sports Massage',
}

export const clinicalTeamMembers: TeamMemberProfile[] = [
  {
    slug: 'hiral-parikh',
    name: 'Dr. Hiral Parikh',
    title: 'Lead Physiotherapist',
    department: 'physiotherapy',
    image: '/images/trainer2/Trainers/HIRAL.webp',
    headline: 'Sports rehabilitation and post-surgical recovery, done right the first time.',
    summary:
      'Dr. Hiral leads physiotherapy at R3BOOT with over 15 years of clinical experience. Her focus is sports rehabilitation and post-surgical recovery, using structured, evidence-based protocols so athletes return to performance and patients rebuild function. Her approach is precise, patient-centred, and built on the belief that recovery done right the first time saves years of recurring injury.',
    yearsLabel: '15+ years clinical experience',
    qualifications: ['Bachelor of Physiotherapy (BPT) - Pad. Dr. D.Y. Patil College of Physiotherapy, Navi Mumbai'],
    expertise: ['Sports rehabilitation', 'Post-surgical recovery', 'Evidence-based rehab protocols', 'Clinical Pilates'],
    focusAreas: ['Return to sport after injury', 'Post-surgery rehabilitation', 'Recurring injury prevention'],
    experience: [
      {
        role: 'Lead Physiotherapist',
        organisation: 'R3BOOT Integrated Recovery',
        period: 'Present',
      },
    ],
    ...PHYSIO,
    metaTitle: 'Dr. Hiral Parikh | Lead Physiotherapist at R3BOOT Mumbai',
    metaDescription:
      'Meet Dr. Hiral Parikh, Lead Physiotherapist at R3BOOT Dadar, Mumbai. 15+ years in sports rehabilitation and post-surgical recovery.',
  },
  {
    slug: 'vaishali-vijay-rauniyar',
    name: 'Dr. Vaishali Vijay Rauniyar',
    title: 'Physiotherapist | Sports & Orthopedic Rehabilitation',
    department: 'physiotherapy',
    image: '/images/trainer2/Trainers/Dr. Vaishali Vijay Rauniyar.webp',
    headline: 'Personalised plans for efficient sports and orthopedic recovery.',
    summary:
      'Dr. Vaishali has 4+ years of clinical experience in sports and orthopedic rehabilitation. She is certified in Dry Needling and Aquatic Rehabilitation and designs personalised plans for efficient recovery.',
    yearsLabel: '4+ years clinical experience',
    qualifications: ['Certified in Dry Needling', 'Certified in Aquatic Rehabilitation'],
    expertise: ['Sports rehabilitation', 'Orthopedic rehabilitation', 'Dry needling', 'Aquatic rehabilitation'],
    focusAreas: ['Sports injuries', 'Orthopedic conditions', 'Personalised recovery planning'],
    experience: [
      {
        role: 'Physiotherapist',
        organisation: 'R3BOOT Integrated Recovery',
        period: 'Present',
      },
    ],
    ...PHYSIO,
    metaTitle: 'Dr. Vaishali Vijay Rauniyar | Physiotherapist at R3BOOT Mumbai',
    metaDescription:
      'Meet Dr. Vaishali Vijay Rauniyar, physiotherapist at R3BOOT Dadar. Sports and orthopedic rehab, certified in Dry Needling and Aquatic Rehabilitation.',
  },
  {
    slug: 'ganesh-gadhave',
    name: 'Ganesh S. Gadhave',
    title: 'Pain Management & Sports Massage Therapist',
    department: 'sports-massage',
    image: '/images/trainer2/Trainers/Dr. Ganesh S. Gadhave.webp',
    headline: 'Long-term physical resilience, not short-term relief.',
    summary:
      'Ganesh focuses on injury prevention and athlete recovery. His approach emphasises long-term physical resilience rather than short-term relief, helping people train with confidence.',
    qualifications: [],
    expertise: ['Pain management', 'Sports massage', 'Injury prevention', 'Athlete recovery'],
    focusAreas: ['Injury prevention', 'Recovery between training loads'],
    experience: [],
    ...MASSAGE,
    metaTitle: 'Ganesh S. Gadhave | Sports Massage Therapist at R3BOOT Mumbai',
    metaDescription:
      'Meet Ganesh S. Gadhave, pain management and sports massage therapist at R3BOOT Dadar, Mumbai.',
  },
  {
    slug: 'akshay-nalawde',
    name: 'Akshay Anil Nalawde',
    title: 'Sports Massage Therapist',
    department: 'sports-massage',
    image: '/images/trainer2/Trainers/Akshay Anil Nalawde.webp',
    headline: 'Muscle recovery for athletes under heavy training load.',
    summary:
      'Akshay is certified in Cupping Therapy and muscle recovery. He has worked with over 1,000 athletes to reduce muscle stiffness and support faster recovery from training loads.',
    yearsLabel: '1,000+ athletes treated',
    qualifications: ['Certified in Cupping Therapy'],
    expertise: ['Sports massage', 'Cupping therapy', 'Muscle recovery'],
    focusAreas: ['Muscle stiffness', 'Recovery from training load'],
    experience: [],
    ...MASSAGE,
    metaTitle: 'Akshay Anil Nalawde | Sports Massage Therapist at R3BOOT Mumbai',
    metaDescription:
      'Meet Akshay Anil Nalawde, sports massage therapist at R3BOOT Dadar. Certified in Cupping Therapy, 1,000+ athletes treated.',
  },
  {
    slug: 'vaishali-sonar',
    name: 'Vaishali Sonar',
    title: 'Sports Massage Therapist',
    department: 'sports-massage',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1771404920/aanya-rao-womens-sports-massage-specialist-mumbai_agreyq.avif',
    headline: 'Sports massage built around female physiology and training load.',
    summary:
      'Vaishali is certified in Cupping Therapy (Level 1 and 2). She specialises in sports massage for female athletes and the general population, combining clinical technique with an understanding of female physiology and training load for injury-free performance.',
    qualifications: ['Certified in Cupping Therapy (Level 1 & 2)'],
    expertise: ['Sports massage', 'Cupping therapy', "Women's sports massage"],
    focusAreas: ['Female athletes', 'General population recovery', 'Injury-free performance'],
    experience: [],
    ...MASSAGE,
    metaTitle: 'Vaishali Sonar | Sports Massage Therapist at R3BOOT Mumbai',
    metaDescription:
      'Meet Vaishali Sonar, sports massage therapist at R3BOOT Dadar. Cupping Level 1 and 2, specialising in female athletes.',
  },
  {
    slug: 'diyan-kubadia',
    name: 'Diyan Kubadia',
    title: 'Co-Founder | Athlete | Performance Vision Lead',
    department: 'leadership',
    image: '/images/trainer2/Trainers/Diyan Kubadia.webp',
    headline: 'Athlete-first vision behind every R3BOOT recovery protocol.',
    summary:
      'Diyan is a professional cricketer with over a decade of experience. He leads the athlete and performance vision at R3BOOT, ensuring every protocol aligns with real athletic needs for smarter recovery.',
    yearsLabel: 'Professional cricketer, 10+ years',
    qualifications: [],
    expertise: ['Athlete and performance vision', 'Recovery protocol design from the athlete side'],
    focusAreas: ['Cricket and field-sport athletes', 'Smarter recovery for training loads'],
    experience: [
      {
        role: 'Co-Founder',
        organisation: 'R3BOOT Integrated Recovery',
        period: 'Present',
      },
    ],
    relatedServiceHref: '/services',
    relatedServiceLabel: 'a recovery session',
    metaTitle: 'Diyan Kubadia | Co-Founder & Athlete at R3BOOT Mumbai',
    metaDescription:
      'Meet Diyan Kubadia, Co-Founder of R3BOOT and professional cricketer. Leads athlete and performance vision.',
  },
]
