import { PHYSIO_PRICE_LABEL, PHYSIO_SESSION_MINUTES } from '@/lib/physio/pricing'

export const shoulderPainFaqs = [
  {
    question: 'How much does physiotherapy for shoulder pain or frozen shoulder cost at R3BOOT?',
    answer: `A ${PHYSIO_SESSION_MINUTES}-minute physiotherapy session at R3BOOT is ${PHYSIO_PRICE_LABEL}. Your first session covers the full shoulder assessment and your first treatment. Call or WhatsApp +91 97023 68612 to book.`,
  },
  {
    // CLINICAL REVIEW: physiotherapy as first-line care for frozen shoulder, phase-matched stretching intensity.
    question: 'Does physiotherapy work for frozen shoulder?',
    answer:
      'Yes. Physiotherapy is one of the main treatments for frozen shoulder (adhesive capsulitis), alongside any medication or injection your doctor recommends. It cannot switch the condition off overnight, but it helps control pain, keeps the movement you still have, and gets reach back sooner once the stiff phase sets in. The key is matching treatment to the phase: forcing hard stretches while the shoulder is still very painful often makes night pain worse.',
  },
  {
    // CLINICAL REVIEW: natural history of the three phases and overall duration of a year or more.
    question: 'How long does frozen shoulder take to heal?',
    answer:
      'Usually months, not weeks, and often a year or more from the first ache to full movement. It tends to move through three phases: a painful "freezing" phase, a stiff "frozen" phase where pain eases but reach is limited, and a "thawing" phase where movement slowly returns. Physiotherapy cannot skip a phase, but it can make each one easier to live with and help you regain more movement.',
  },
  {
    // CLINICAL REVIEW: diabetes and thyroid disease as risk factors; slower recovery in diabetics.
    question: 'I have diabetes. Why did I get frozen shoulder, and will it take longer?',
    answer:
      'Frozen shoulder is noticeably more common in people with diabetes, and also linked to thyroid problems. It often affects people between 40 and 60. In diabetics it can be more stubborn and sometimes affects the other shoulder later. Physiotherapy still helps, but plan for a longer course with a daily home routine, and keep your sugar control in check with your doctor, as it affects how the tissue settles.',
  },
  {
    // CLINICAL REVIEW: session ranges for cuff tendinopathy and impingement; frozen shoulder session frequency.
    question: 'How many physiotherapy sessions will I need for shoulder pain?',
    answer:
      'For rotator cuff pain or impingement, often 6 to 10 sessions over 6 to 12 weeks, with exercises at home between visits. Frozen shoulder is different: usually weekly sessions at first, then spaced further apart as you take over the home programme, across several months. You get your own estimate after the first assessment, and we review it as you progress.',
  },
  {
    // CLINICAL REVIEW: conservative management of partial and degenerative cuff tears; referral criteria for acute full-thickness tears.
    question: 'Can a rotator cuff tear heal without surgery?',
    answer:
      'Many can be managed without surgery. Partial tears and the wear-related tears common after 50 often settle well with strengthening of the remaining cuff and shoulder blade muscles. A large tear after a fall or injury, especially with sudden loss of strength in a younger or active person, should be seen by an orthopaedic surgeon early. Your assessment tells you which group you are in, and we refer you when needed.',
  },
  {
    // CLINICAL REVIEW: training modification advice for impingement and cuff overload.
    question: 'Can I keep going to the gym with shoulder impingement?',
    answer:
      'Usually yes, with changes. Impingement pain (a pinch when lifting the arm out to the side or overhead) is mostly a load and control problem. Overhead pressing, dips and wide-grip bench often need to be paused or modified for a few weeks, while rows, cuff work and pain-free ranges continue. Stopping everything tends to leave the shoulder weaker when you return.',
  },
  {
    question: 'Do I need an MRI, X-ray or doctor referral before booking?',
    answer:
      'No referral is needed. Most shoulder problems, including frozen shoulder, can be assessed by testing how the shoulder moves, so a scan is not always required first. If you already have an MRI, X-ray or ultrasound report, bring it. If your assessment points to a tear or anything that needs a scan or a doctor, we will tell you.',
  },
  {
    question: 'Where are your clinics and how do I book?',
    answer:
      'R3BOOT Dadar is at 203, Palai Plaza, Swami Gyan Jivandas Marg, Dadar East, Mumbai 400014, about 5 minutes from Dadar station (East exit). R3BOOT Lower Parel is at A-303, Lodha Signet, Senapati Bapat Marg, Lower Parel, Mumbai 400013. Book by calling or WhatsApping +91 97023 68612. No referral needed.',
  },
]
