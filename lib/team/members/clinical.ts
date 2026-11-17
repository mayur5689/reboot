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
    title: 'Senior Physiotherapist',
    department: 'physiotherapy',
    image: '/images/trainer2/Trainers/HIRAL.webp',
    headline: 'Detailed assessment, root-cause treatment and patients who know how to manage their own recovery.',
    summary:
      'Dr. Hiral Parikh is a Senior Physiotherapist at R3BOOT Lower Parel with 17 years of practice, including 11 years as a licensed, registered physiotherapist in Canada. She treats musculoskeletal and sports injuries, post-surgical rehab, spinal nerve pain, multiple trauma and chronic pain, and is qualified in vestibular rehabilitation and concussion management. Her approach starts with a detailed assessment to find the root cause, followed by one-on-one, evidence-based treatment. She works towards each client\'s goals and teaches them how to manage symptoms outside the clinic, so they take an active role in their own recovery.',
    yearsLabel: '17 years of practice, 11 in Canada',
    qualifications: [
      'Bachelor of Physiotherapy (B.P.Th) - D.Y. Patil College of Physiotherapy, Navi Mumbai, 2009',
      'Postgraduate manual therapy courses',
      'Certified dry needling practitioner',
      'Qualified in vestibular rehabilitation and concussion management',
    ],
    expertise: [
      'Injury-specific exercise therapy',
      'Manual therapy',
      'Soft tissue release',
      'Dry needling',
      'Clinical Pilates',
      'Vestibular rehabilitation (vertigo)',
      'Sports concussion and post-concussion syndrome management',
    ],
    focusAreas: [
      'Sports and musculoskeletal injuries',
      'Shoulder, elbow and wrist',
      'Hip, knee and ankle',
      'Neck and back pain',
      'Spinal nerve-related pain',
      'Post-surgical rehabilitation',
      'Multiple trauma and chronic pain',
      'Vertigo and concussion',
    ],
    experience: [
      {
        role: 'Senior Physiotherapist',
        organisation: 'R3BOOT Integrated Recovery, Lower Parel',
        period: 'Present',
      },
      {
        role: 'Licensed / Registered Physiotherapist',
        organisation: 'Canada',
        period: '11 years',
      },
    ],
    ...PHYSIO,
    metaTitle: 'Dr. Hiral Parikh | Senior Physiotherapist at R3BOOT Mumbai',
    metaDescription:
      'Dr. Hiral Parikh, Senior Physiotherapist at R3BOOT Lower Parel. 17 years of practice, 11 in Canada. Sports injuries, manual therapy, vertigo and concussion.',
  },
  {
    slug: 'vaishali-vijay-rauniyar',
    name: 'Dr. Vaishali Vijay Rauniyar',
    title: 'Senior Physiotherapist',
    department: 'physiotherapy',
    image: '/images/trainer2/Trainers/Dr. Vaishali Vijay Rauniyar.webp',
    headline: 'Detailed examination, a proper diagnosis and treatment matched to what the assessment finds.',
    summary:
      'Dr. Vaishali Vijay Rauniyar is a Senior Physiotherapist at R3BOOT Dadar with 4 years of practice, focused on sports and musculoskeletal rehabilitation. She is a certified manual therapist and is also certified in dry needling, neural mobilisation, taping, aquatic therapy and Pilates. Every plan starts with a detailed examination and a proper diagnosis, followed by treatment specific to those findings and counselling on the patient\'s overall well-being and recovery. She has supported athletes at an international pickleball tournament and the Navi Mumbai Women\'s Marathon, and works with young gymnasts, marathon runners, and district and state level footballers and hockey players.',
    yearsLabel: '4 years of practice',
    qualifications: [
      'Bachelor of Physiotherapy (BPTh) - MGM College of Physiotherapy (MUHS), 2022',
      'Certified in Neurodynamics (neural mobilisation), 2022',
      'Certified in Comprehensive Taping, 2023',
      'Certified in Dry Needling, 2024',
      'Certified Manual Therapist, 2025',
      'Certified Aquatherapist, 2026',
      'Certified Pilates Trainer, 2026',
    ],
    expertise: [
      'Sports rehabilitation',
      'Musculoskeletal physiotherapy',
      'Post-operative rehabilitation',
      'Manual therapy',
      'Dry needling',
      'Sports taping',
      'Pilates',
      'Hydrotherapy',
      'Neural mobilisation',
      'Geriatric rehabilitation',
      'Neuro physiotherapy',
    ],
    focusAreas: [
      'Frozen shoulder',
      'Rotator cuff repair rehab',
      'ACL reconstruction and meniscus repair',
      'Total and partial knee replacement',
      'Total hip replacement',
      'Low back pain, stenosis, spondylosis and spondylolisthesis',
      'Neck pain',
      'Fractures',
    ],
    experience: [
      {
        role: 'Senior Physiotherapist',
        organisation: 'R3BOOT Integrated Recovery, Dadar',
        period: 'Present',
        highlights: [
          'Physiotherapy support at an international pickleball tournament',
          "Physiotherapy support at the Navi Mumbai Women's Marathon",
          'Works with young gymnasts, marathon runners, and district and state level footballers and hockey players',
        ],
      },
      {
        role: 'Consultant Physiotherapist',
        organisation: 'Replay Physio LLP',
        period: 'Previous',
      },
    ],
    ...PHYSIO,
    metaTitle: 'Dr. Vaishali Vijay Rauniyar | Senior Physiotherapist at R3BOOT Mumbai',
    metaDescription:
      'Dr. Vaishali Vijay Rauniyar, Senior Physiotherapist at R3BOOT Dadar. Sports and musculoskeletal rehab, certified manual therapist, dry needling and aquatherapy.',
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
