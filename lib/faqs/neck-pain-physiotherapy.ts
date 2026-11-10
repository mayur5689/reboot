import { PHYSIO_PRICE_LABEL, PHYSIO_SESSION_LABEL } from '@/lib/physio/pricing'

export const neckPainFaqs = [
  {
    question: 'Can physiotherapy help cervical spondylosis?',
    // CLINICAL REVIEW: spondylosis framing (common on scans after 40, scan severity does not predict pain).
    answer:
      'Yes. Physiotherapy cannot undo the wear seen on an X-ray or MRI, but it usually eases the pain and stiffness of cervical spondylosis a great deal. Treatment loosens the stiffest neck and upper back joints, strengthens the deep neck muscles and gives you a short home routine. These changes show up on most scans after 40, often in people with no pain, so the scan alone does not decide how you will feel.',
  },
  {
    question: 'Can physiotherapy help pain or tingling down my arm from the neck?',
    // CLINICAL REVIEW: radiculopathy first-line conservative care, same-day referral for progressive weakness.
    answer:
      'Usually, yes. Pain, pins and needles or numbness running from the neck into the shoulder blade, arm or fingers most often comes from an irritated nerve root (cervical radiculopathy), commonly from a disc bulge or a narrowed joint space. Most cases settle without surgery using positions that take pressure off the nerve, nerve mobilisation and graded strength work. If testing shows arm weakness that is getting worse, we refer you to a spine specialist straight away.',
  },
  {
    question: 'Can physiotherapy help headaches that start in the neck?',
    // CLINICAL REVIEW: cervicogenic headache description and the migraine distinction.
    answer:
      'Yes, when the headache comes from the neck. A cervicogenic headache usually starts at the base of the skull, spreads over one side of the head or behind an eye, and gets worse after long screen days or fixed postures. Hands-on work for the upper neck joints, release of the small muscles under the skull and endurance exercise often help. Migraines and other headache types need a doctor, and your assessment will tell you which pattern yours fits.',
  },
  {
    question: 'How many physiotherapy sessions will I need for neck pain?',
    // CLINICAL REVIEW: session ranges per neck pain type.
    answer:
      'Often 4 to 6 sessions for neck pain from desk and screen work, and 2 to 4 for a simple crick. Long-standing stiffness from spondylosis often improves over 6 to 10 sessions. Arm pain from an irritated nerve usually takes longer, around 8 to 12, and is reviewed every visit. These are typical ranges, not a promise. Your own estimate comes at the end of the first session.',
  },
  {
    question: 'Do I need an X-ray, MRI or doctor referral for neck physiotherapy?',
    answer:
      'No referral is needed, and most neck pain can be assessed by clinical examination without a scan. If you already have an X-ray, MRI or specialist report, bring it and we will go through it with you. If your symptoms or test results suggest you need imaging or a doctor, we will tell you why and refer you.',
  },
  {
    question: 'Do you crack necks?',
    answer:
      'Not as a routine. Most neck pain responds well to gentle joint mobilisation, soft tissue work and exercise. If a specific manual technique suits your case, your physiotherapist explains it and asks before using it, and you can always say no.',
  },
  {
    question: 'Can you treat neck and back pain, or neck and shoulder pain, together?',
    answer:
      'Yes, and they are often linked. Long hours at a desk load the neck, upper back and shoulder blades as one unit, and stiffness in the mid back often feeds neck pain. Your assessment checks the neck, upper back and shoulder together, and the plan treats whichever areas are driving your symptoms within the same sessions.',
  },
  {
    question: 'How much does neck pain physiotherapy cost at R3BOOT?',
    answer: `Neck pain physiotherapy at R3BOOT is ${PHYSIO_SESSION_LABEL}. Your first ${PHYSIO_PRICE_LABEL} session covers the full neck assessment and your first treatment. Call or WhatsApp +91 97023 68612 to book.`,
  },
  {
    question: 'Where are your clinics for neck pain physiotherapy?',
    answer:
      'R3BOOT Dadar is at 203, Palai Plaza, Swami Gyan Jivandas Marg, Dadar East, Mumbai 400014, about 5 minutes from Dadar station (East exit). R3BOOT Lower Parel is at Lodha Signet, A-303, Senapati Bapat Marg, Mumbai 400013. Book by calling or WhatsApping +91 97023 68612. No referral needed.',
  },
]
