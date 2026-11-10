import { PHYSIO_PRICE_LABEL, PHYSIO_SESSION_MINUTES } from '@/lib/physio/pricing'

export const kneePainFaqs = [
  {
    question: 'How much does physiotherapy for knee pain cost at R3BOOT?',
    answer: `A ${PHYSIO_SESSION_MINUTES}-minute physiotherapy session at R3BOOT is ${PHYSIO_PRICE_LABEL}. The first session includes the full knee assessment and your first treatment, so you do not pay separately for the assessment. Call or WhatsApp +91 97023 68612 to book.`,
  },
  {
    // CLINICAL REVIEW: "most non-surgical knee pain improves with physiotherapy" framing.
    question: 'Can physiotherapy fix knee pain without surgery?',
    answer:
      'For most knee pain, yes. Runner\'s knee, tendon pain, knee arthritis, mild to moderate ligament sprains and many meniscus problems usually improve with strength work, hands-on treatment and a change in training load. Surgery is more likely to be discussed when the knee keeps giving way, locks so you cannot straighten it, or does not improve after a proper course of rehab. We tell you honestly which group you are in.',
  },
  {
    // CLINICAL REVIEW: session ranges for patellofemoral/tendon (6 to 10) and arthritis (8 to 12).
    question: 'How many physiotherapy sessions will I need for knee pain?',
    answer:
      'Usually 6 to 10 sessions for runner\'s knee or tendon pain, spread over several weeks because tendons adapt slowly. Knee arthritis often needs 8 to 12 sessions, then a home strength routine you keep going. Ligament and meniscus injuries depend on how stable the knee is, so we review the plan every session. You get your own estimate after the first assessment.',
  },
  {
    question: 'Do I need an MRI or a doctor referral for knee physiotherapy?',
    answer:
      'No referral is needed, and most knee pain can be assessed without a scan first. Ligament, meniscus and kneecap tests in the clinic tell us a lot. If you already have an MRI or X-ray, bring it. If the knee swelled up fast after an injury, keeps giving way, or is not improving as expected, we will tell you and suggest the right scan or specialist.',
  },
  {
    // CLINICAL REVIEW: physiotherapy does not reverse cartilage change but reduces pain and improves function in knee OA.
    question: 'Can physiotherapy help knee osteoarthritis (arthritis in the knee)?',
    answer:
      'Yes. Physiotherapy does not reverse the changes on your X-ray, but strengthening the thigh and hip muscles, keeping the joint moving and pacing your activity usually reduce pain and make walking, stairs and getting up from a chair easier. When walking on land still hurts, lower-load exercise on the aqua treadmill is an option. Arthritis on a scan does not always match how much a knee hurts.',
  },
  {
    // CLINICAL REVIEW: ACL non-operative management suitability (lower pivoting demand, no repeated giving way).
    question: 'Do I need surgery for an ACL tear, or can physio be enough?',
    answer:
      'Not always. Some people with an ACL tear do well with rehab alone, especially if they do not play pivoting sports and the knee is not giving way. Cricketers, footballers and others who cut and twist, or whose knee keeps buckling, often go on to reconstruction. Either way, physiotherapy before a decision helps settle swelling and rebuild strength. If you have already had ACL surgery, see our post-surgery rehab page.',
  },
  {
    question: 'Can I keep running, playing cricket or going to the gym with knee pain?',
    answer:
      'Usually yes, with changes. Complete rest is rarely needed and often leaves the knee weaker when you go back. Your physiotherapist sets a level you can train at for now, such as shorter runs, fewer overs, or swapping deep squats and lunges for a range that does not flare the knee, and builds it back up as the pain settles.',
  },
  {
    // CLINICAL REVIEW: painless clicking is usually benign; true locking or catching with swelling warrants assessment.
    question: 'My knee clicks or catches. Is that a meniscus tear?',
    answer:
      'Not necessarily. Painless clicking is common and usually harmless. Catching with pain on the inner or outer joint line, swelling after twisting, or a knee that locks and will not fully straighten can point to the meniscus. Clinic tests narrow it down, and a knee that truly locks is referred for a scan and specialist opinion.',
  },
  {
    question: 'Where are your knee physiotherapy clinics, and is there one near Worli?',
    answer:
      'R3BOOT Dadar is at 203, Palai Plaza, Swami Gyan Jivandas Marg, Dadar East, Mumbai 400014, about 5 minutes from Dadar station (East exit). R3BOOT Lower Parel is at A-303, Lodha Signet, Senapati Bapat Marg, Lower Parel, Mumbai 400013, the closer option from Worli and Prabhadevi. Book by calling or WhatsApping +91 97023 68612.',
  },
]
