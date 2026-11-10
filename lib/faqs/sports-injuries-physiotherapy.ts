import { PHYSIO_PRICE_LABEL, PHYSIO_SESSION_MINUTES } from '@/lib/physio/pricing'

export const sportsInjuriesFaqs = [
  {
    question: 'How much does sports physiotherapy cost at R3BOOT?',
    answer: `A ${PHYSIO_SESSION_MINUTES}-minute physiotherapy session at R3BOOT is ${PHYSIO_PRICE_LABEL}. Your first session covers the full assessment and your first treatment. Call or WhatsApp +91 97023 68612 to book at Dadar East or Lower Parel.`,
  },
  {
    question: 'How many physiotherapy sessions does a sports injury need?',
    // CLINICAL REVIEW: session ranges for mild sprains/strains vs larger or recurring injuries.
    answer:
      'Usually 4 to 8 sessions for a mild sprain or strain, and more for a bigger tear, a tendon problem or an injury that keeps coming back. The number depends less on the label and more on how quickly you pass each stage of rehab. You get your own estimate after the first assessment, and we review it as you progress.',
  },
  {
    question: 'Can physiotherapy fix a pulled hamstring?',
    // CLINICAL REVIEW: early graded loading for hamstring strains; surgery only for rare tendon avulsions.
    answer:
      'Yes, most pulled hamstrings recover well with physiotherapy and do not need surgery. The key is early, graded loading rather than weeks of rest, then sprint and strength work before you play again. Hamstrings re-injure often when players go back as soon as walking stops hurting, so we test sprinting and strength before clearing you.',
  },
  {
    question: 'How do I know when it is safe to play again?',
    // CLINICAL REVIEW: return-to-sport criteria (strength symmetry, hop/sprint/change-of-direction, sport drills).
    answer:
      'When you pass sport-specific tests, not just when the pain is gone. Pain often settles before strength and control come back. Before you return we check strength side to side, hopping, sprinting, cutting or throwing as your sport needs, and how the injury responds the next day. Then you return in stages: training first, then full matches.',
  },
  {
    question: 'Can I keep training while I have a sports injury?',
    answer:
      'Often yes, with changes. Complete rest is rarely needed and usually leaves you weaker when you return. Your physiotherapist will tell you what to keep doing, what to reduce and what to stop for now, so you stay fit while the injured area recovers.',
  },
  {
    question: 'Do I need an MRI or a doctor referral for a sports injury?',
    // CLINICAL REVIEW: when imaging is indicated after acute sports injury (suspected fracture, complete tear, locking).
    answer:
      'No referral is needed, and most sprains and strains can be assessed without a scan. Bring any MRI, X-ray or reports you already have. If your assessment suggests a fracture, a complete tear or a joint that locks or gives way, we will tell you and refer you for imaging or a specialist opinion.',
  },
  {
    question: 'Why does my ankle keep rolling after an old sprain?',
    // CLINICAL REVIEW: chronic ankle instability after incomplete rehab of lateral ankle sprain.
    answer:
      'Usually because the first sprain healed without full rehab. Ligaments recover, but balance, reaction and calf and hip strength often do not come back on their own, so the ankle gives way again on uneven ground or when you land. Balance, hopping and landing work rebuilds that control and lowers the chance of the next sprain.',
  },
  {
    question: 'My child keeps getting injured playing sport. Should they see a physiotherapist?',
    // CLINICAL REVIEW: growth-related pain in young athletes, persistent low back pain in young fast bowlers.
    answer:
      'Yes, if the same pain keeps returning or makes them limp, change how they run or miss training. Young athletes go through growth spurts and sudden jumps in training load, and pain that keeps coming back is worth checking rather than playing through. Persistent lower back pain in a young fast bowler should always be assessed.',
  },
  {
    question: 'Where can I find sports physiotherapy near me in Dadar or Worli?',
    answer:
      'R3BOOT has two clinics. Dadar East is at 203, Palai Plaza, Swami Gyan Jivandas Marg, Mumbai 400014, about 5 minutes from Dadar station (East exit). Lower Parel is at A-303, Lodha Signet, Senapati Bapat Marg, Mumbai 400013, convenient for Worli and Prabhadevi. Book by calling or WhatsApping +91 97023 68612. No referral needed.',
  },
]
