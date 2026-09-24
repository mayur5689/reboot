import { buildBody } from '../lib/portable-text.mjs'

function key() {
  return Math.random().toString(36).slice(2, 14)
}

function catRef(id) {
  return { _type: 'reference', _ref: id, _key: key() }
}

const AUTHORS = {
  hiral: { _type: 'reference', _ref: '8a6bf0f1-64c7-4ce6-b5da-bef89b57d983' },
  vaishali: { _type: 'reference', _ref: '39779954-05b8-4600-9f87-6ad1876429e7' },
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
  physioMumbai: 'https://www.r3boot.in/physiotherapy-mumbai',
  neck: 'https://www.r3boot.in/physiotherapy-for-neck-pain-mumbai',
  massage: 'https://www.r3boot.in/neck-shoulder-pain-sports-massage-mumbai',
  sportsMassage: 'https://www.r3boot.in/services/sports-massage',
  contrast: 'https://www.r3boot.in/services/contrast-therapy',
  aqua: 'https://www.r3boot.in/services/aqua-therapy',
  pilates: 'https://www.r3boot.in/services/clinical-pilates',
  cricket: 'https://www.r3boot.in/blog/ipl-cricket-elbow-shoulder-pain-recovery',
  postSurgery: 'https://www.r3boot.in/post-surgery-physiotherapy-mumbai',
  whatsapp: 'https://wa.me/919702368612',
}

function faq(question, answer) {
  return { _key: key(), question, answer }
}

export const SHOULDER_JOINT_PAIN_BLOG = {
  documentId: 'physiotherapist-guide-shoulder-joint-pain-relief',
  slug: 'physiotherapist-guide-shoulder-joint-pain-relief',
  title: 'Expert Physiotherapist Guide to Relieving Shoulder Joint Pain',
  metaDescription:
    'How to relieve shoulder joint pain: main causes, extreme pain rules, muscle vs joint, and the best exercises to start. Physiotherapy guide from R3BOOT Dadar.',
  excerpt:
    'Shoulder joint pain is rarely one problem. Desk posture, gym pressing, and throwing sports overload different structures. Here is how physiotherapists sort muscle vs joint pain, calm a bad flare, and pick the first exercises that actually help.',
  author: AUTHORS.hiral,
  categories: [CATS.physio, CATS.sportsMassage],
  publishedAt: '2026-09-18T13:00:00.000Z',
  faqs: [
    faq(
      'How can I relieve pain in my shoulder joint?',
      'Reduce the aggravating load, keep gentle pain-free movement, use ice or heat for comfort, and start simple mobility and scapular control exercises. If pain is sharp, night-waking, or not improving in 1 to 2 weeks, book physiotherapy assessment rather than stretching harder.'
    ),
    faq(
      'How to make shoulder joint pain go away?',
      'Match treatment to the driver: posture and scapular control for desk tightness, load management for rotator cuff or impingement patterns, and graded strengthening once pain settles. Random deep stretching into a painful arc often keeps the problem alive.'
    ),
    faq(
      'What is the main reason for shoulder pain?',
      'The most common drivers are rotator cuff overload, subacromial irritation, frozen shoulder patterns, AC joint stress, referred neck pain, and muscle spasm from desk or training load. The main reason in your case is the one that matches your aggravating positions and exam findings.'
    ),
    faq(
      'How to reduce extreme shoulder pain?',
      'Stop overhead and heavy pressing, support the arm in a comfortable position, use ice for hot flares or heat for stiff spasm, and seek assessment the same week if you cannot lift the arm, have night pain, or notice numbness and weakness.'
    ),
    faq(
      'How do you know if shoulder pain is muscle or joint?',
      'Muscle pain is often local, tender to press, and linked to a clear overload. Joint or cuff problems hurt more in specific arcs (especially overhead or behind the back), with catch, stiffness, or night pain. Neck-referred pain can sit in the shoulder without true joint findings.'
    ),
    faq(
      'What is the best exercise for shoulder pain?',
      'There is no single best exercise. For many stiff desk shoulders, scapular setting plus gentle pendulum or doorway work helps. For cuff irritation, isometric external rotation and short-range control beat aggressive yoga stretches. Stop any move that reproduces sharp joint pain.'
    ),
    faq(
      'Where can I get physiotherapy for shoulder pain in Mumbai?',
      'Book clinical physiotherapy for shoulder pain at R3BOOT Dadar East (Palai Plaza) or Lower Parel / Prabhadevi. WhatsApp +91 97023 68612 with where it hurts, what you cannot do (reach, press, sleep), and how long it has been.'
    ),
  ],
  body: buildBody([
    {
      type: 'p',
      text: 'Shoulder joint pain shows up in Mumbai for the same three reasons we see in clinic every week: long desk days with a rounded upper back, gym pressing that outruns scapular control, and throwing or overhead sport that spikes volume too fast.',
    },
    {
      type: 'p',
      text: 'This is an expert physiotherapist guide to relieving shoulder joint pain. It is not a generic “top 10 yoga poses” list. Stretching can help when tissue is stiff and safe to lengthen. It can also flare a irritated cuff, frozen shoulder, or neck-referred pattern if you push into the wrong range.',
    },
    {
      type: 'p',
      text: 'Written by Dr. Hiral Parikh, physiotherapist at R3BOOT. Last updated September 2026. Education only, not personal medical advice.',
    },
    { type: 'h2', text: 'Quick answer' },
    {
      type: 'p',
      text: 'To relieve shoulder joint pain, first cut the load that keeps restarting it, keep gentle movement inside a calm range, then rebuild scapular and rotator cuff control. Ice or heat can calm a flare. Book physiotherapy if you cannot raise the arm, pain wakes you at night, or two weeks of sensible home care changes nothing.',
    },
    {
      type: 'rich',
      parts: [
        { t: 'Book assessment via ' },
        { t: 'physiotherapy for shoulder pain in Mumbai', link: LINKS.shoulder },
        { t: ' or ' },
        { t: 'physiotherapy in Dadar', link: LINKS.dadar },
        { t: '. Desk and gym shoulders often sit next to ' },
        { t: 'neck physiotherapy', link: LINKS.neck },
        { t: ' and ' },
        { t: 'neck and shoulder sports massage', link: LINKS.massage },
        { t: ' once the joint is safe to load.' },
      ],
    },

    // ─── 1 Make it go away ───
    {
      type: 'snippet',
      question: 'How to make shoulder joint pain go away?',
      snippet:
        'Make shoulder joint pain go away by removing the aggravating load, restoring calm movement, then strengthening the cuff and shoulder blade. Pain that is only stretched harder into a sharp arc usually returns the next day.',
      paragraphs: [
        '“Make it go away” is the search. The clinic answer is less magical and more reliable.',
      ],
    },
    {
      type: 'rich',
      parts: [
        { t: '1. Stop feeding the flare. ', strong: true },
        {
          t: 'Pause painful overhead presses, kipping, heavy bags on that shoulder, and long laptop hours without breaks. Relative rest is not a sling for weeks. It is removing the specific load that spikes pain.',
        },
      ],
    },
    {
      type: 'rich',
      parts: [
        { t: '2. Keep the joint moving gently. ', strong: true },
        {
          t: 'Complete stillness stiffens capsules and scapular muscles. Pendulum swings, supported elevation in a pain-free range, and easy shoulder circles keep tissue fed without grinding the joint.',
        },
      ],
    },
    {
      type: 'rich',
      parts: [
        { t: '3. Fix the upstream drivers. ', strong: true },
        {
          t: 'Desk shoulders need thoracic extension and scapular upward rotation. Gym shoulders need cuff capacity that matches pressing volume. Throwers need load management. Cricket patterns are covered in our ',
        },
        { t: 'IPL elbow and shoulder guide', link: LINKS.cricket },
        { t: '.' },
      ],
    },
    {
      type: 'rich',
      parts: [
        { t: '4. Add hands-on care when soft tissue is the limiter. ', strong: true },
        {
          t: 'Once sharp joint pain settles, ',
        },
        { t: 'sports massage for neck and shoulder', link: LINKS.massage },
        {
          t: ' can free traps, pec minor, and posterior cuff without replacing diagnosis.',
        },
      ],
    },
    {
      type: 'p',
      text: 'If pain is not clearly better in 7 to 14 days of this approach, stop guessing and get assessed. Frozen shoulder, AC joint injury, labral irritation, and cervical referral all need different plans.',
    },

    // ─── 2 Main reason ───
    {
      type: 'snippet',
      question: 'What is the main reason for shoulder pain?',
      snippet:
        'There is no single main reason. The most common clinic drivers are rotator cuff overload, subacromial irritation, postural muscle spasm, frozen shoulder stiffness, AC joint stress, and pain referred from the neck. Your main reason is the one that matches how the pain behaves.',
      paragraphs: [
        'Shoulder discomfort is common worldwide. In our Dadar caseload it clusters around desk work, gym pressing, and overhead sport rather than random bad luck.',
      ],
    },
    { type: 'h3', text: 'Common drivers we assess for' },
    {
      type: 'ul',
      items: [
        'Rotator cuff tendinopathy or overload: pain with lifting, reaching, or lying on that side',
        'Subacromial / impingement-type irritation: painful mid-arc when raising the arm',
        'Desk and scapular dysfunction: tight pecs and upper traps, weak lower traps and serratus, rounded posture',
        'Frozen shoulder (adhesive capsulitis): progressive global stiffness, often night pain, limited external rotation',
        'AC joint irritation: pinpoint pain on top of the shoulder, worse with cross-body reach or press-ups',
        'Cervical referral: neck stiffness with shoulder pain, arm symptoms that follow a nerve pattern',
        'Post-injury or post-surgery recovery: after dislocation, cuff repair, or Bankart procedures',
      ],
    },
    {
      type: 'rich',
      parts: [
        {
          t: 'The “main reason” is not the scariest MRI word. It is the structure and load pattern that reproduce your symptoms on exam. That is why ',
        },
        { t: 'physiotherapy assessment', link: LINKS.dadar },
        { t: ' beats a random stretch list.' },
      ],
    },

    // ─── 3 Extreme pain ───
    {
      type: 'snippet',
      question: 'How to reduce extreme shoulder pain?',
      snippet:
        'For extreme shoulder pain, unload the arm, avoid overhead and heavy pressing, use ice for hot flares or heat for stiff spasm, and get assessed the same week if you cannot move the arm, have fever, or have numbness and weakness.',
      paragraphs: [
        'Extreme pain is not the time for Downward Dog or aggressive doorway stretching.',
      ],
    },
    {
      type: 'ul',
      items: [
        'Support the arm on a pillow when sitting or sleeping on the opposite side',
        'Ice 10 to 15 minutes for hot, swollen, acute flares (cloth between ice and skin)',
        'Heat for stiff, spasm-dominant tightness once acute heat has settled',
        'Simple analgesics only as advised by your doctor or pharmacist',
        'Skip CrossFit-style overhead volume, heavy bags, and throwing until screened',
      ],
    },
    {
      type: 'p',
      text: 'Same-week physiotherapy or medical review if: you cannot raise the arm, night pain keeps waking you, the joint looks deformed after a fall, you have fever or feel systemically unwell, or both shoulders and thighs hurt together with fever (needs prompt medical care, not home yoga).',
    },
    {
      type: 'rich',
      parts: [
        {
          t: 'When land movement is still too irritable, supervised ',
        },
        { t: 'aqua therapy', link: LINKS.aqua },
        {
          t: ' can restore range with less joint compression. ',
        },
        { t: 'Contrast therapy', link: LINKS.contrast },
        {
          t: ' is for systemic recovery once the acute joint flare is under control, not day-one first aid for a suspected tear.',
        },
      ],
    },

    // ─── 4 Muscle vs joint ───
    {
      type: 'snippet',
      question: 'How do you know if shoulder pain is muscle or joint?',
      snippet:
        'Muscle pain is usually local, tender to press, and linked to overload or posture. Joint or cuff pain often hurts in a specific movement arc, with catch, night pain, or true stiffness. Neck-referred pain can sit in the shoulder blade without a tender joint line.',
      paragraphs: [
        'You cannot be 100% sure from a blog. You can sort the pattern well enough to know what to stop doing.',
      ],
    },
    { type: 'h3', text: 'More likely muscle / soft tissue' },
    {
      type: 'ul',
      items: [
        'You can point to a tender muscle belly (upper trap, pec, rear cuff)',
        'Pain after a clear volume jump or long desk day',
        'Eases with gentle movement and soft-tissue work',
        'Strength feels limited by tightness more than by a sharp catch',
      ],
    },
    { type: 'h3', text: 'More likely joint / cuff / capsule' },
    {
      type: 'ul',
      items: [
        'Pain in a predictable arc when raising or rotating the arm',
        'Night pain when lying on that side',
        'True loss of external rotation or reach behind the back',
        'Click, catch, or giving-way feel under load',
        'History of fall, dislocation, or sudden wrench',
      ],
    },
    {
      type: 'rich',
      parts: [
        {
          t: 'If neck movement reproduces the shoulder symptom, start with ',
        },
        { t: 'neck pain physiotherapy', link: LINKS.neck },
        {
          t: ' in the same visit. Treating only the shoulder misses the driver.',
        },
      ],
    },

    // ─── 5 Best exercises ───
    {
      type: 'snippet',
      question: 'What is the best exercise for shoulder pain?',
      snippet:
        'The best first exercises for most non-traumatic shoulder pain are pendulum swings, gentle scapular setting, and short-range external rotation isometrics. Aggressive end-range yoga stretches are not best when the joint is irritable.',
      paragraphs: [
        'Do these 3 to 5 days a week inside a comfortable range. Stop for sharp joint pain, pins and needles down the arm, or dizziness. Start with 8 to 10 minutes. Increase only if symptoms stay calm during and the next morning.',
      ],
    },
    { type: 'h3', text: '1. Pendulum (Codman’s) swings' },
    {
      type: 'p',
      text: 'Lean on a chair with the non-painful hand. Let the painful arm hang. Make small circles and forward-back swings for 30 to 60 seconds. This is joint-friendly motion for irritable shoulders. If hanging itself hurts sharply, skip and get assessed.',
    },
    { type: 'h3', text: '2. Scapular setting (shoulder blade slides)' },
    {
      type: 'p',
      text: 'Sit tall. Gently draw the shoulder blades down and slightly together without shrugging. Hold 5 seconds, relax. Repeat 8 to 10 times. Desk shoulders often need this more than another pec stretch.',
    },
    { type: 'h3', text: '3. Across-the-chest stretch (gentle)' },
    {
      type: 'p',
      text: 'Bring one arm across the chest, support at the elbow, hold up to 30 seconds if comfortable. Lower the arm if the top of the shoulder or AC joint spikes. Useful for soft-tissue tightness, not for every cuff flare.',
    },
    { type: 'h3', text: '4. Doorway stretch (short range)' },
    {
      type: 'p',
      text: 'Forearms on a doorframe at about 90 degrees if that range is calm. Soft step forward until you feel a chest opening, not a shoulder grind. Hold up to 20 to 30 seconds. Skip if overhead or cross-body positions are the main pain triggers.',
    },
    { type: 'h3', text: '5. External rotation isometrics' },
    {
      type: 'p',
      text: 'Elbow at your side, bent 90 degrees. Press the back of the hand outward into a wall or doorway without moving the arm. Hold 5 to 10 seconds, 5 to 8 reps. Builds cuff capacity without forcing range. Often safer early than heavy bands.',
    },
    { type: 'h3', text: '6. Shoulder circles (supported)' },
    {
      type: 'p',
      text: 'Hand on a chair, other arm hangs, small circles both ways. Warm-up only. Not a substitute for strength work once pain settles.',
    },
    {
      type: 'p',
      text: 'Yoga options like Child’s Pose or Thread the Needle can help upper-back stiffness for some people. Downward Dog and aggressive end-range loading are poor choices during an extreme flare or suspected cuff tear. Technique and your pain response matter more than collecting ten poses.',
    },
    {
      type: 'rich',
      parts: [
        {
          t: 'After pain settles, ',
        },
        { t: 'clinical Pilates', link: LINKS.pilates },
        {
          t: ' can rebuild scapular control under guided load. Post-repair shoulders follow a surgeon-cleared timeline via ',
        },
        { t: 'post-surgery physiotherapy', link: LINKS.postSurgery },
        { t: '.' },
      ],
    },

    // ─── Prevention + when to book ───
    { type: 'h2', text: 'How to prevent shoulder pain from coming back' },
    {
      type: 'ul',
      items: [
        'Break desk time every 30 to 40 minutes. Screen at eye level, shoulders down',
        'Progress overhead pressing and throwing volume slowly',
        'Strengthen cuff and scapular muscles as much as you stretch the chest',
        'Use proper technique for overhead sport and gym work',
        'Keep doing a short maintenance routine after the pain settles',
      ],
    },
    { type: 'h2', text: 'When to see a physiotherapist for shoulder joint pain' },
    {
      type: 'p',
      text: 'Book if you cannot move the shoulder normally, pain is worsening, night pain persists, symptoms travel into the arm with numbness or weakness, or home care has not helped after about two weeks. After a fall or dislocation, get assessed sooner.',
    },
    {
      type: 'related',
      title: 'Related reading',
      links: [
        { t: 'Physiotherapy Dadar', link: LINKS.dadar },
        { t: 'Physiotherapy Mumbai', link: LINKS.physioMumbai },
        { t: 'Neck pain physiotherapy', link: LINKS.neck },
        { t: 'Neck and shoulder sports massage', link: LINKS.massage },
        { t: 'Cricket elbow and shoulder', link: LINKS.cricket },
        { t: 'Post-surgery physiotherapy', link: LINKS.postSurgery },
      ],
    },
    {
      type: 'rich',
      parts: [
        { t: 'WhatsApp ' },
        { t: '+91 97023 68612', link: LINKS.whatsapp },
        {
          t: ' with which movements hurt (reach, press, sleep on that side) and how long it has been.',
        },
      ],
    },
    {
      type: 'p',
      text: 'General education only. New, severe, or worsening symptoms should be assessed in person.',
    },
  ]),
}
