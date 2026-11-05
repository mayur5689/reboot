import type { TeamMemberProfile } from '../types'

const MENTAL_TRAINING = {
  relatedServiceHref: '/services/mental-training',
  relatedServiceLabel: 'Sports Psychology & Counselling',
}

export const counsellingTeamMembers: TeamMemberProfile[] = [
  {
    slug: 'parinaaz-irani',
    name: 'Parinaaz Irani',
    title: 'Sport & Performance Psychologist',
    department: 'counselling',
    image: '/images/trainer2/Trainers/Parinaaz Irani.webp',
    headline: 'Guiding athletes and performers toward a growth mindset under real pressure.',
    summary:
      'Parinaaz is a sport and performance psychologist with experience across individual consultations, academy work, and group workshops. She uses solution-focused and performance psychology approaches tailored to the athlete, the sport, and the competition calendar — from preparation to return-from-injury.',
    yearsLabel: 'Founder, InnerPeak · Academy psychologist',
    qualifications: [
      'MSc Psychology of Sport and Exercise (Distinction) — Leeds Beckett University, UK (2020)',
      'MA Applied Psychology (Clinical focus) — University of Mumbai (2018)',
      'REBT Basic & Advanced Training — In Vivo Mumbai Center for RECBT (2019)',
    ],
    expertise: [
      'One-to-one athlete consultations',
      'Group workshops & team interventions',
      'Solution-focused performance psychology',
      'Goal setting, motivation & competition routines',
      'Academy & high-performance programme support',
    ],
    focusAreas: [
      'Performance anxiety & focus under pressure',
      'Confidence before competition',
      'Return-to-sport after injury',
      'Perfectionism & self-talk',
      'Cricket, golf, racket sports, swimming, shooting & more',
    ],
    experience: [
      {
        role: 'Founder & Sport Psychologist',
        organisation: 'InnerPeak Consulting',
        period: '2021 — Present',
        highlights: [
          '1:1 consultations and workshops with athletes across multiple sports.',
          'Academy sport psychologist for Achievers Academy, Mumbai and Bangalore Golf Club.',
        ],
      },
      {
        role: 'Sport Psychology Consultant',
        organisation: 'Nudge Sports, Mumbai',
        period: 'Oct 2021 — Present',
        highlights: ['Athlete consulting and sport-tech project work.'],
      },
      {
        role: 'Visiting Faculty',
        organisation: 'International Institute of Sport Management',
        period: 'Sept 2022 — Present',
      },
      {
        role: 'Peak Performance Psychology Intern',
        organisation: 'Athletes in the Zone, UK',
        period: 'Mar 2021 — May 2022',
      },
      {
        role: 'Postgraduate Intern',
        organisation: 'British Athletics & RIASA Football Team, UK',
        period: 'Dec 2019 — May 2020',
      },
    ],
    memberships: [
      'British Psychological Society — Graduate Member (UK)',
      'BASES — Professional Member (UK)',
      'Indian Sport Psychology Association — Core Member',
      'Applied Psychologists in Physical Activity Network (APPAN), UK',
    ],
    ...MENTAL_TRAINING,
    metaTitle: 'Parinaaz Irani | Sport Psychologist at R3BOOT Mumbai',
    metaDescription:
      'Meet Parinaaz Irani — sport & performance psychologist at R3BOOT Dadar. Workshops, 1:1 mental performance work, and athlete mindset training in Mumbai.',
  },
  {
    slug: 'anshita-shetty',
    name: 'Anshita Shetty',
    title: 'Sports Psychologist | Former Athlete and State-Level High Jumper',
    department: 'counselling',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1793856169/anshita_cbemrg.webp',
    headline: 'A space where athletes feel heard, and build the confidence to realise their potential.',
    summary:
      'As a former player, Anshita knows sport is about much more than performance. It brings expectations, setbacks and moments of self-doubt. She moved into sports psychology to understand these experiences and help athletes through them. She sees every athlete as an individual with their own story, and aims to create a space where they feel heard and understood while building the mental strength and confidence to realise their potential.',
    yearsLabel: 'Former state-level high jumper',
    qualifications: [
      'MSc Sports and Exercise Psychology — University of Essex, UK (2023–2024)',
      'BA (Hons) Applied Psychology (First Division) — Amity University Mumbai (2020–2023)',
      'Introductory Sports Psychology — Udemy',
    ],
    expertise: [
      'Athlete-centred programme support',
      'Research-backed content for performance education',
      'Workshop & presentation delivery',
      'Long-Term Athlete Development (LTAD) foundations',
      'Digital communication of mental-performance concepts',
    ],
    focusAreas: [
      'Building confidence and emotional regulation',
      'Supporting young and developing athletes',
      'Team communication & stakeholder coordination',
      'Performance education for parents and coaches',
      'Competition preparation routines',
    ],
    experience: [
      {
        role: 'Sports Psychology Consultant & Social Media Lead',
        organisation: 'InnerPeak',
        period: 'Jan 2025 — Present',
        highlights: [
          'Research on sport psychology theories for athlete-centred programmes.',
          'Simplifying psychological concepts for clients and wider audiences.',
        ],
      },
      {
        role: 'Sports Psychology Intern',
        organisation: 'Indian Sports Psychology Association',
        period: 'Jul 2023 — Sep 2023',
        highlights: ['Research, content, and event planning for athlete outreach.'],
      },
      {
        role: 'Brand Manager & Sponsorship Executive',
        organisation: 'Tennis Premier League',
        period: 'Feb 2025 — Present',
        highlights: [
          'League digital communication and athlete-focused content strategy.',
          'Partnership delivery with league sponsors and team stakeholders.',
        ],
      },
    ],
    languages: ['English', 'Hindi', 'Tulu'],
    ...MENTAL_TRAINING,
    metaTitle: 'Anshita Shetty | Sports Psychology Consultant at R3BOOT',
    metaDescription:
      'Meet Anshita Shetty — sports psychology consultant at R3BOOT Mumbai. MSc Sports & Exercise Psychology. Athlete-centred mental performance support in Dadar.',
  },
  {
    slug: 'sakshi-kadam',
    name: 'Sakshi Kadam',
    title: 'Sports Psychologist | International Kickboxing Player and State Boxer',
    department: 'counselling',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1793854986/Sakshi_n53zeq.webp',
    headline: 'An athlete\'s biggest game is often played in the mind.',
    summary:
      'Sakshi is a sports psychologist and international kickboxing player who understands the demands of sport through both academic knowledge and personal experience. She helps athletes build confidence, manage pressure, improve focus and develop mental resilience. Through psychological training and practical strategies, she helps them understand their thought patterns, handle performance challenges and prepare mentally for competition. Her field experience includes university cricket and hockey teams.',
    yearsLabel: 'International kickboxer · State boxer',
    qualifications: [
      'M.A. Sports Psychology — Guru Nanak Dev University',
      'B.A. Psychology — University of Mumbai (ranked 2nd in class)',
      'Research publication on competitive anxiety, self-efficacy & well-being (2025)',
    ],
    expertise: [
      'Team and camp-based sports psychology',
      'Competitive anxiety & self-efficacy',
      'Biofeedback, VTS & eye-tracker assisted assessment (introductory)',
      'Leadership and youth coaching backgrounds',
      'Research-informed athlete support',
    ],
    focusAreas: [
      'Pre-competition nerves & focus',
      'Confidence and self-belief under selection pressure',
      'Team dynamics and communication',
      'Mental well-being alongside performance',
      'Cricket, hockey & multi-sport camp environments',
    ],
    experience: [
      {
        role: 'Sports Psychologist',
        organisation: "Guru Nanak Dev University — Women's Cricket Camp",
        period: '2024 — 2025',
      },
      {
        role: 'Sports Psychologist',
        organisation: 'GNDU Hockey Team (All India Inter-University)',
        period: '2023 — 2024',
      },
      {
        role: 'Head Coach',
        organisation: 'Sachi Sports Academy',
        period: '2020',
        highlights: [
          'Virtual coaching during COVID; self-defence workshops for youth.',
        ],
      },
    ],
    memberships: [
      'Maharashtra Olympic Silver Medalist — Boxing (2023)',
      'Multiple national medals — kickboxing & wushu',
      'NCC C Certificate (2023)',
    ],
    ...MENTAL_TRAINING,
    metaTitle: 'Sakshi Kadam | Sports Psychologist at R3BOOT Mumbai',
    metaDescription:
      'Meet Sakshi Kadam — sports psychologist at R3BOOT Dadar. Team psychologist experience, MSc Sports Psychology, and competitive athlete background.',
  },
  {
    slug: 'dishita-chheda',
    name: 'Dishita Chheda',
    title: 'Sport Psychologist | Former National-Level Rhythmic Gymnast',
    department: 'counselling',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1793854978/Dishita_Chheda_avf9pd.webp',
    headline: 'Supporting the person behind the athlete, on and off the field.',
    summary:
      'Dishita holds an MSc in Psychology of Sport and Exercise from Leeds Beckett University, UK, and is a former national-level rhythmic gymnast with nearly 15 years of competitive experience. She takes a holistic approach to athlete development, recognising that supporting the person behind the athlete is as important as enhancing performance. She is passionate about mental well-being and personal growth, and about helping athletes reach their potential both on and off the field.',
    yearsLabel: 'Former national-level rhythmic gymnast',
    qualifications: [
      'MSc Psychology of Sport and Exercise - Leeds Beckett University, UK',
      'Bachelor of Arts in Psychology (Distinction, CGPA 9.94/10) - St. Xavier\'s College (Autonomous), University of Mumbai (2023)',
    ],
    expertise: [
      'Holistic athlete development',
      'Mental well-being and personal growth',
      'Athlete mindset and performance support',
    ],
    focusAreas: [
      'Supporting the person behind the athlete',
      'Mental well-being alongside performance',
      'Reaching potential on and off the field',
    ],
    experience: [],
    ...MENTAL_TRAINING,
    metaTitle: 'Dishita Chheda | Sport Psychologist at R3BOOT Mumbai',
    metaDescription:
      'Meet Dishita Chheda, sport psychologist at R3BOOT Mumbai. MSc Psychology of Sport and Exercise (Leeds Beckett) and former national-level rhythmic gymnast.',
  },
  {
    slug: 'alkesh-kubadia',
    name: 'Alkesh Kubadia',
    title: 'Co-Founder | Counsellor | Pilates Trainer',
    department: 'counselling',
    image: '/images/trainer2/Trainers/Alkesh Kubadia (Behavioral Therapist).webp',
    headline: 'Helping people break self-defeating patterns and build practical resilience.',
    summary:
      "Alkesh is a counsellor with a Master's degree in Psychology and 7 years of professional practice. He uses Rational Emotive Behaviour Therapy (REBT) to help individuals and groups identify irrational beliefs, manage overwhelming emotions, and build practical resilience. He has worked with hundreds of clients on personal and professional relationships, and on the relationship with oneself. He is also a Co-Founder and Pilates trainer at R3BOOT.",
    yearsLabel: '7 years of practice',
    qualifications: ["Master's in Psychology (June 2021)"],
    expertise: [
      'Rational Emotive Behaviour Therapy (REBT)',
      'Systematic Desensitization',
      'Group and corporate leadership programmes',
      'Counselling adolescents and students',
    ],
    focusAreas: [
      'Personal and professional relationships',
      'Relationship with oneself',
      'Self-defeating thought patterns',
      'Overwhelming emotions',
      'Self-esteem and self-efficacy in adolescents',
    ],
    experience: [
      {
        role: 'Co-Founder, Counsellor and Pilates Trainer',
        organisation: 'R3BOOT Integrated Recovery',
        period: 'Present',
        highlights: [
          'Counselling and leadership across Dadar and Lower Parel centres.',
          'Corporate leadership programmes delivered.',
        ],
      },
      {
        role: 'Counsellor (under psychiatrist Dr. Nirmala Rao)',
        organisation: 'Aavishkar Clinic, Dadar',
        period: '2018 - 2020',
      },
    ],
    memberships: [
      'Counselled student groups at the Young India Challenge Summit, Delhi',
      'Helped hundreds of adolescents build self-esteem and self-efficacy',
      'Helped clients sustain relationships by understanding their own role and responsibility',
    ],
    ...MENTAL_TRAINING,
    metaTitle: 'Alkesh Kubadia | Counsellor & Co-Founder at R3BOOT Mumbai',
    metaDescription:
      'Meet Alkesh Kubadia, counsellor and Co-Founder at R3BOOT Mumbai. REBT-based counselling for relationships, self-defeating patterns and emotional resilience.',
  },
]
