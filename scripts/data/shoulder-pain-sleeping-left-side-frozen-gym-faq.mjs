import { buildBody } from '../lib/portable-text.mjs'

function key() {
  return Math.random().toString(36).slice(2, 14)
}

function catRef(id) {
  return { _type: 'reference', _ref: id, _key: key() }
}

const AUTHORS = {
  hiral: { _type: 'reference', _ref: '8a6bf0f1-64c7-4ce6-b5da-bef89b57d983' },
}

const CAT_IDS = {
  physio: '363aaf3d-a61c-4184-9c5b-40a4531eb7a7',
  sportsMassage: 'e6247743-ad0d-4c08-a2f0-1de463aec6f7',
}

const CATS = {
  get physio() {
    return catRef(CAT_IDS.physio)
  },
  get sportsMassage() {
    return catRef(CAT_IDS.sportsMassage)
  },
}

const LINKS = {
  dadar: 'https://www.r3boot.in/physiotherapy-dadar-mumbai',
  shoulder: 'https://www.r3boot.in/physiotherapy-for-shoulder-pain-mumbai',
  neck: 'https://www.r3boot.in/physiotherapy-for-neck-pain-mumbai',
  massage: 'https://www.r3boot.in/neck-shoulder-pain-sports-massage-mumbai',
  guide: 'https://www.r3boot.in/blog/physiotherapist-guide-shoulder-joint-pain-relief',
  cricket: 'https://www.r3boot.in/blog/ipl-cricket-elbow-shoulder-pain-recovery',
  contrast: 'https://www.r3boot.in/services/contrast-therapy',
  aqua: 'https://www.r3boot.in/services/aqua-therapy',
  pilates: 'https://www.r3boot.in/services/clinical-pilates',
  whatsapp: 'https://wa.me/919702368612',
}

function faq(question, answer) {
  return { _key: key(), question, answer }
}

export const SHOULDER_PAIN_FAQ_BLOG = {
  documentId: 'shoulder-pain-sleeping-left-side-frozen-gym-faq',
  slug: 'shoulder-pain-sleeping-left-side-frozen-gym-faq',
  title: 'Shoulder Pain FAQ: Sleeping, Left-Side Pain, Frozen Shoulder, and Gym',
  metaDescription:
    'Shoulder pain after sleeping, left vs right side and heart red flags, neck and shoulder pain, pain lifting the arm, frozen shoulder, bench press pain, ice vs massage. R3BOOT Dadar physio FAQ.',
  excerpt:
    'India search data keeps asking the same shoulder questions: sleep positions, left-side pain and heart attack fear, neck plus shoulder ache, pain lifting the arm, frozen shoulder, and gym bench press pain. Straight physiotherapist answers from R3BOOT Dadar.',
  author: AUTHORS.hiral,
  categories: [CATS.physio, CATS.sportsMassage],
  publishedAt: '2026-09-18T14:00:00.000Z',
  faqs: [
    faq(
      'Why does my shoulder hurt after sleeping?',
      'Side-sleeping on the painful shoulder, a soft pillow that drops the neck, or a stiff cuff that hates compression overnight are the usual drivers. Change side, support the arm with a pillow, and avoid sleeping face-down. If night pain keeps waking you for weeks, get assessed.'
    ),
    faq(
      'Is left shoulder pain a sign of a heart attack?',
      'Sometimes left shoulder or arm pain can be cardiac, especially with chest pressure, shortness of breath, sweating, nausea, or pain that is not mechanical. That needs emergency care. Most isolated shoulder pain that changes with movement is musculoskeletal, but do not self-diagnose chest-related symptoms.'
    ),
    faq(
      'Why do I have neck and shoulder pain together?',
      'The neck and shoulder share load and nerve pathways. Desk posture, upper-trap spasm, and cervical referral commonly produce both. Treat the neck and scapula together, not only the deltoid.'
    ),
    faq(
      'Why does it hurt to lift my arm?',
      'Pain lifting the arm often means rotator cuff overload, subacromial irritation, or stiffness from a frozen-shoulder pattern. Note which part of the arc hurts. Sharp mid-arc pain differs from global stiffness.'
    ),
    faq(
      'What helps frozen shoulder pain?',
      'Frozen shoulder needs staged care: calm pain, restore external rotation and elevation gradually, and avoid forcing end-range stretches into a highly irritable capsule. Physiotherapy guides the stage. Early forcing often prolongs the flare.'
    ),
    faq(
      'Why does my shoulder hurt during bench press?',
      'Bench press pain usually comes from too much volume, a flared elbow path, poor scapular set, or an already irritated cuff. Reduce load, narrow the painful range, and rebuild cuff and scapular control before heavy pressing returns.'
    ),
    faq(
      'Should I use ice, heat, or massage for shoulder pain?',
      'Ice suits hot, acute flares. Heat suits stiff, spasm-dominant tightness. Massage helps soft tissue once sharp joint pain settles. None replace assessment if you cannot lift the arm or night pain persists.'
    ),
  ],
  body: buildBody([
    {
      type: 'p',
      text: 'Search data for shoulder pain in India clusters around a few real fears: pain after sleeping, left-side pain and heart attack worry, neck pain that travels into the shoulder, not being able to lift the arm, frozen shoulder, and gym bench press pain.',
    },
    {
      type: 'rich',
      parts: [
        {
          t: 'This FAQ answers those questions the way we sort them in physiotherapy clinic at R3BOOT Dadar. It sits next to our fuller ',
        },
        { t: 'expert guide to relieving shoulder joint pain', link: LINKS.guide },
        {
          t: '. Education only, not personal medical advice. Written by Dr. Hiral Parikh, physiotherapist at R3BOOT. Last updated September 2026.',
        },
      ],
    },
    { type: 'h2', text: 'Quick answer' },
    {
      type: 'p',
      text: 'Most shoulder pain that changes with movement, sleep position, or gym load is musculoskeletal. Change the aggravating habit first, keep gentle range, then rebuild cuff and scapular control. Left shoulder pain with chest pressure, breathlessness, or sweating is not a stretch problem. That is emergency care.',
    },

    // 1 Sleep
    {
      type: 'snippet',
      question: 'Why does my shoulder hurt after sleeping?',
      snippet:
        'Shoulder pain after sleeping is usually from lying on the painful side, a pillow that drops the neck, or an irritated cuff that hates overnight compression. Change position and support the arm before you add hard stretches.',
      paragraphs: [
        'High-volume searches like “shoulder pain after sleeping” and “best sleeping position for shoulder pain” are asking for a position fix, not another random YouTube mobility flow.',
      ],
    },
    {
      type: 'ul',
      items: [
        'Prefer the non-painful side, with a pillow hugging the painful arm so it does not hang forward',
        'On your back, a small pillow under the forearm can unload the cuff',
        'Avoid stomach sleeping that forces the neck to twist',
        'If the pillow is too high or too flat, neck and upper-trap pain often wakes with the shoulder',
      ],
    },
    {
      type: 'p',
      text: 'Night pain that repeatedly wakes you for weeks, or pain that is worse at night than by day, needs assessment. That pattern shows up in frozen shoulder and irritable cuff problems, not only “bad sleep posture.”',
    },

    // 2 Left side / heart
    {
      type: 'snippet',
      question: 'Is left shoulder pain a heart attack?',
      snippet:
        'Left shoulder or arm pain can be cardiac when it comes with chest pressure, shortness of breath, sweating, nausea, or pain that does not change with shoulder movement. Call emergency services. Isolated shoulder pain that worsens when you lift or sleep on that side is more often a musculoskeletal problem.',
      paragraphs: [
        '“Shoulder pain and heart attack,” “left side shoulder pain reasons,” and “left shoulder pain woman” are among the highest-volume shoulder searches in India. Fear is rational. Panic without a pattern is not useful.',
      ],
    },
    { type: 'h3', text: 'Treat as urgent until proven otherwise if you have' },
    {
      type: 'ul',
      items: [
        'Chest pressure, tightness, or heaviness with shoulder or arm pain',
        'Shortness of breath, cold sweat, nausea, dizziness, or a sense of doom',
        'Pain that spreads to jaw, both arms, or upper back and does not change with arm movement',
        'Sudden unexplained left-sided pain in someone with cardiac risk factors',
      ],
    },
    {
      type: 'p',
      text: 'Right-sided shoulder pain can also be referred from the neck, gallbladder, or other sources, but the classic public fear is left-sided cardiac pain. Physiotherapy does not diagnose heart attacks. If you are unsure, seek emergency care first. Once cardiac causes are cleared, mechanical left or right shoulder pain can be assessed at clinic.',
    },

    // 3 Neck and shoulder
    {
      type: 'snippet',
      question: 'Why do I have neck and shoulder pain together?',
      snippet:
        'Neck and shoulder pain often travel together because desk posture loads the cervical spine and upper traps while the shoulder blade stops moving well. Treat both. Stretching only the deltoid rarely fixes the pair.',
      paragraphs: [
        'Searches for “back of neck and shoulder pain” and “relief of neck and shoulder pain” are describing a posture and motor-control problem as often as a pure shoulder joint injury.',
      ],
    },
    {
      type: 'rich',
      parts: [
        {
          t: 'In clinic we check cervical range, nerve symptoms into the arm, and scapular upward rotation. If neck movement reproduces the shoulder ache, start with ',
        },
        { t: 'physiotherapy for neck pain', link: LINKS.neck },
        { t: ' and support soft tissue through ' },
        { t: 'neck and shoulder sports massage', link: LINKS.massage },
        { t: ' once sharp nerve signs are settled.' },
      ],
    },
    {
      type: 'ul',
      items: [
        'Screen height and chair setup so you are not shrugging for hours',
        'Break every 30 to 40 minutes',
        'Scapular setting and gentle cervical mobility beat aggressive cracking videos',
      ],
    },

    // 4 Hurt to lift arm
    {
      type: 'snippet',
      question: 'Why does it hurt to lift my arm?',
      snippet:
        'Pain lifting the arm usually points to rotator cuff overload, subacromial irritation, or stiffness from a frozen-shoulder pattern. Note whether pain is mid-arc, end-range, or global. That detail changes the plan.',
      paragraphs: [
        '“Shoulder pain hurts to lift arm” is a high-intent search because it blocks dressing, commuting, and gym work.',
      ],
    },
    {
      type: 'ul',
      items: [
        'Painful mid-arc with catching: often cuff or subacromial irritation',
        'Global stiffness, especially lost external rotation: think frozen shoulder pattern',
        'Pain only at end-range stretch: more soft tissue or capsule tightness',
        'Pain plus neck symptoms or arm numbness: include the cervical spine in the exam',
      ],
    },
    {
      type: 'rich',
      parts: [
        {
          t: 'Do not force overhead stretches into a sharp arc. Pendulum swings and short-range control are safer early moves. Details and starter exercises are in the ',
        },
        { t: 'shoulder joint pain relief guide', link: LINKS.guide },
        { t: '.' },
      ],
    },

    // 5 Frozen shoulder
    {
      type: 'snippet',
      question: 'What helps frozen shoulder pain?',
      snippet:
        'Frozen shoulder improves with staged physiotherapy: calm irritability, then restore rotation and elevation gradually. Forcing painful end-range yoga stretches often prolongs the flare. Night pain and true stiffness are the clues.',
      paragraphs: [
        '“Cure for frozen shoulder pain” searches want a quick fix. The capsule does not unlock in one session. It responds to consistent, stage-matched loading.',
      ],
    },
    {
      type: 'ul',
      items: [
        'Early irritable stage: pain control, sleep setup, gentle pendulum and short-range rotation',
        'Stiff stage: progressive external rotation and elevation under guidance',
        'Thawing stage: rebuild strength and return to overhead function',
      ],
    },
    {
      type: 'rich',
      parts: [
        {
          t: 'If land movement is still too irritable, ',
        },
        { t: 'aqua therapy', link: LINKS.aqua },
        {
          t: ' can restore range with less compressive load. ',
        },
        { t: 'Clinical Pilates', link: LINKS.pilates },
        {
          t: ' helps later when control under load matters more than stretching.',
        },
      ],
    },

    // 6 Gym / bench
    {
      type: 'snippet',
      question: 'Why does my shoulder hurt during bench press?',
      snippet:
        'Bench press and push-up pain usually come from load that outruns cuff and scapular capacity, elbows flaring hard, or pressing through an already irritated arc. Deload, fix setup, then rebuild before returning to heavy sets.',
      paragraphs: [
        '“Shoulder pain during bench press,” “after push ups,” and “after gym” are training-error searches as much as injury searches.',
      ],
    },
    {
      type: 'ul',
      items: [
        'Cut painful pressing volume for 1 to 2 weeks',
        'Keep scapulae set on the bench. Do not shrug into the bar',
        'Avoid a painful deep stretch at the bottom if that is the spike',
        'Add external rotation isometrics and rowing or face-pull patterns once calm',
        'Return to press only when daily reach and sleep are settling',
      ],
    },
    {
      type: 'rich',
      parts: [
        {
          t: 'Throwers and overhead athletes have a different load story. Cricketers can start with our ',
        },
        { t: 'cricket elbow and shoulder guide', link: LINKS.cricket },
        { t: '.' },
      ],
    },

    // 7 Ice heat massage
    {
      type: 'snippet',
      question: 'Should I use ice, heat, or massage for shoulder pain?',
      snippet:
        'Use ice for hot, acute flares. Use heat for stiff, spasm-heavy tightness. Use massage when soft tissue is the limiter and the joint is safe to load. Searches for ice packs and shoulder massage are high for a reason, but tools are not a diagnosis.',
      paragraphs: [
        'India search volume is strong for “ice pack shoulder pain,” “shoulder pain massage,” and “how to relieve shoulder pain.” Pick the tool that matches the tissue state.',
      ],
    },
    {
      type: 'ul',
      items: [
        'Ice 10 to 15 minutes with a cloth barrier after a new flare or gym spike',
        'Heat for morning stiffness and upper-trap spasm once acute heat has settled',
        'Massage for pec, trap, and rear-cuff tightness after sharp joint pain drops',
        'Skip aggressive deep work into a suspected tear, dislocation, or highly irritable frozen shoulder',
      ],
    },
    {
      type: 'rich',
      parts: [
        { t: 'Book ' },
        { t: 'neck and shoulder sports massage', link: LINKS.massage },
        {
          t: ' when that fits. For systemic recovery after training once the joint is calm, ',
        },
        { t: 'contrast therapy', link: LINKS.contrast },
        { t: ' can sit alongside the plan.' },
      ],
    },

    // CTA
    { type: 'h2', text: 'When to book physiotherapy for shoulder pain in Mumbai' },
    {
      type: 'p',
      text: 'Book if night pain persists, you cannot lift the arm, neck and arm symptoms travel together, gym pain keeps resetting, or two weeks of sensible load change and gentle movement have not helped. Cardiac-type symptoms need emergency care first, not a clinic stretch session.',
    },
    {
      type: 'rich',
      parts: [
        { t: 'Start with ' },
        { t: 'physiotherapy for shoulder pain in Mumbai', link: LINKS.shoulder },
        { t: ' at R3BOOT Dadar for assessment, or ' },
        { t: 'physiotherapy in Dadar', link: LINKS.dadar },
        { t: ' if you also need a broader MSK plan.' },
      ],
    },
    {
      type: 'related',
      title: 'Related reading',
      links: [
        { t: 'Physiotherapy for shoulder pain Mumbai', link: LINKS.shoulder },
        { t: 'Shoulder joint pain relief guide', link: LINKS.guide },
        { t: 'Physiotherapy Dadar', link: LINKS.dadar },
        { t: 'Neck pain physiotherapy', link: LINKS.neck },
        { t: 'Neck and shoulder massage', link: LINKS.massage },
        { t: 'Cricket shoulder guide', link: LINKS.cricket },
      ],
    },
    {
      type: 'rich',
      parts: [
        { t: 'WhatsApp ' },
        { t: '+91 97023 68612', link: LINKS.whatsapp },
        {
          t: ' with which side hurts, whether sleep or lifting is worst, and how long it has been.',
        },
      ],
    },
    {
      type: 'p',
      text: 'General education only. New, severe, or worsening symptoms should be assessed in person. Emergency cardiac or neurological red flags need emergency care.',
    },
  ]),
}
