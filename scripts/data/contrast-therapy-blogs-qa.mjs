import { buildBody } from '../lib/portable-text.mjs'

function faq(question, answer) {
  return { _key: Math.random().toString(36).slice(2), question, answer }
}

/** Bullet TL;DR intro (legacy — prefer snippetIntro for new content). */
function intro(paragraphs, tldr) {
  return [
    { type: 'h2', text: 'Quick answer' },
    { type: 'ul', items: tldr },
    ...paragraphs.map((text) => ({ type: 'p', text })),
  ]
}

/** Semrush-style opening: one paragraph snippet (40–60 words), then context. */
function snippetIntro(contextParagraphs, snippetAnswer) {
  return [
    { type: 'h2', text: 'Quick answer' },
    { type: 'p', text: snippetAnswer },
    ...contextParagraphs.map((text) => ({ type: 'p', text })),
  ]
}

export const CONTRAST_BLOG_QA_UPDATES = [
  // ─── 1. Published: contrast bath therapy (2.4K keyword) ───
  {
    documentId: '4ddd05d9-5d5f-4743-92c7-146035ecd5fe',
    title:
      'Contrast Bath Therapy in Dadar, Mumbai: Day & Night Cycle Protocol (2026)',
    excerpt:
      'Day Cycle vs Night Cycle, Half vs Full protocol, and the exact 68°C sauna + 6–10°C ice bath contrast bath therapy we run at R3BOOT Dadar under physiotherapist supervision.',
    metaDescription:
      'Contrast bath therapy in Dadar: Day vs Night cycle, Half vs Full protocol, 68°C sauna + 6–10°C ice bath, benefits, and who should avoid it. R3BOOT.',
    faqs: [
      faq(
        'What is contrast bath therapy?',
        'Contrast bath therapy alternates heat and cold full-body immersion in a fixed sequence. Heat dilates blood vessels; cold constricts them. The repeated switch creates a vascular pump that clears metabolic waste from muscle faster than rest, ice alone, or heat alone.'
      ),
      faq(
        'What are the benefits of contrast bath therapy?',
        'Faster muscle recovery and less DOMS, reduced swelling in sub-acute injuries, improved circulation for desk workers, nervous-system regulation (alert or calm depending on cycle type), and measurable mood benefits from heat and cold neurotransmitter response.'
      ),
      faq(
        'How often should I do contrast bath therapy?',
        'For active training: 2–4 supervised sessions per week. During peak load or post-competition: a Full Cycle (60 min) once or twice that week. Post-surgery or injury protocols are set by your physiotherapist, not daily without clearance.'
      ),
      faq(
        'Who should avoid contrast bath therapy?',
        'Avoid without medical clearance if you have uncontrolled hypertension, active cardiovascular disease, Raynaud\'s disease, peripheral neuropathy, pregnancy without obstetric sign-off, or an acute injury in the first 48–72 hours. Open wounds and active skin infections are contraindications.'
      ),
      faq(
        'How long should contrast bath therapy last?',
        'At R3BOOT: Half Cycle is 30 minutes (one complete hot–cold sequence). Full Cycle is 60 minutes (the same Half Cycle repeated twice). Book 24–72 hours after heavy training for best results, not immediately post-session.'
      ),
      faq(
        'What is the water temperature for contrast bath therapy?',
        'At R3BOOT Dadar: Red Light Sauna at 68°C and Ice Bath at 6–10°C. General water-based contrast baths elsewhere often use 38–42°C warm and 10–15°C cold. Our wider temperature gap produces a stronger vascular pump per cycle.'
      ),
    ],
    body: buildBody([
      {
        type: 'p',
        text: 'If you train in Mumbai, you already know the extra load heat and humidity put on recovery. This guide explains contrast bath therapy in plain language: what it is, when it helps, and how we run it at R3BOOT Dadar under physiotherapist supervision.',
      },
      {
        type: 'p',
        text: 'Written by Dr Vaishali Vijay Rauniyar, physiotherapist at R3BOOT. Certified in Dry Needling and Aquatic Rehabilitation. Last updated July 2026.',
      },
      ...snippetIntro(
        [
          'At R3BOOT in Dadar East, contrast bath therapy is a clinical protocol: Red Light Sauna plus Ice Bath, health intake before every session, and a physiotherapist present throughout. It is not a spa cold tub or a DIY shower alternation.',
        ],
        'Contrast bath therapy is alternating full heat and full cold immersion in a set sequence. The heat phase opens blood vessels; the cold phase closes them. That repeated switch creates a vascular pump that clears fatigued muscle faster than rest or cold alone.'
      ),
      {
        type: 'snippet',
        question: 'What is contrast bath therapy?',
        snippet:
          'Contrast bath therapy alternates structured heat and cold full-body immersion. Heat causes vasodilation, which increases blood flow to muscle. Cold causes vasoconstriction, which supports waste clearance and swelling control. Repeating the cycle creates a vascular pump that speeds recovery beyond passive rest.',
        paragraphs: [
          'Most people confuse contrast bath therapy with alternating hot and cold showers at home. Showers can help circulation, but they do not match the temperature range or full immersion of a clinical setup. At R3BOOT, sessions use a Red Light Sauna at 68°C and an Ice Bath at 6–10°C, supervised and not self-guided.',
          'Research in the Journal of Strength and Conditioning Research found contrast therapy outperformed cold water immersion alone for perceived recovery and mobility in the 48-hour window after intense exercise. That is the window most Mumbai athletes actually need help with.',
        ],
      },
      {
        type: 'snippet',
        question: 'What are the benefits of contrast bath therapy?',
        snippet:
          'Contrast bath therapy speeds muscle recovery, reduces next-day soreness, improves circulation, and helps regulate alertness or sleep depending on whether you finish on cold or heat. It also supports swelling control in sub-acute injuries once the acute 48–72 hour window has passed.',
        paragraphs: [
          'For athletes, the most felt benefit is less DOMS 24–48 hours after a heavy session: legs that feel usable again, not locked up. For desk-bound professionals in Mumbai, the heat phase addresses vascular stagnation from long sitting; the cold phase reduces the heavy-leg feeling many people get by afternoon.',
          'Cold immersion triggers a norepinephrine response, which supports alertness and focus. Heat supports dopamine release, which helps mood and relaxation. That is why we separate Day Cycle (ends cold, for before training or work) from Night Cycle (ends hot, for recovery and sleep). The benefit is not just physical; it is nervous-system regulation done deliberately.',
        ],
      },
      {
        type: 'snippet',
        question: 'How does contrast bath therapy work?',
        snippet:
          'Contrast bath therapy works through alternating vasodilation and vasoconstriction. Heat dilates vessels, bringing blood, oxygen, and nutrients into muscle tissue. Cold constricts vessels, pushing metabolic waste and inflammatory fluid out. The repeated switch acts like a pump for faster clearance.',
        paragraphs: [
          'Think of it as flushing fatigued tissue rather than just numbing it. Sustained cold alone suppresses inflammation quickly but can blunt adaptation if overused after lifting. Contrast therapy uses shorter cold phases inside a heat cycle, enough to clear waste without shutting down the recovery signals your body still needs during a training block.',
          'At R3BOOT, the Red Light Sauna adds near-infrared photobiomodulation on top of heat-driven vasodilation, supporting mitochondrial function in muscle tissue. Combined with a 6–10°C ice bath (wider than typical 12–15°C gym tubs), each cycle produces a stronger thermal contrast than home setups can replicate.',
        ],
      },
      {
        type: 'snippet',
        question: 'Should contrast therapy end on hot or cold?',
        snippet:
          'Contrast therapy should end on cold for a Day Cycle (before training or work) to stay alert and activated. It should end on hot for a Night Cycle (after your day is done) to down-regulate the nervous system and support sleep. The wrong finish reverses the intended effect.',
        paragraphs: [
          'Day Cycle always finishes in the Ice Bath at 6–10°C. You leave switched on, not drowsy. Night Cycle always finishes in the Red Light Sauna at 68°C. You leave calm and recovery-ready. These are not interchangeable based on personal preference; they are selected at intake based on what your schedule demands next.',
          'Ending a Night Cycle on cold spikes sympathetic tone when you need the opposite. Ending a Day Cycle on heat reduces the pre-session activation athletes and professionals often book for. Your R3BOOT physiotherapist selects the cycle type at every intake.',
        ],
      },
      {
        type: 'table',
        caption: 'Day Cycle vs Night Cycle at R3BOOT',
        headers: ['', 'Day Cycle', 'Night Cycle'],
        rows: [
          ['Always ends on', 'Ice Bath (6–10°C)', 'Red Light Sauna (68°C)'],
          ['Best for', 'Before training, work, or competition', 'After your day; sleep and deep recovery'],
          ['Nervous-system effect', 'Alert and energised (sympathetic)', 'Calm and recovery-ready (parasympathetic)'],
          ['Example Half Cycle (30 min)', 'Cold 10 min → Sauna 10 min → Cold 10 min', 'Sauna 10 min → Cold 10 min → Sauna 10 min'],
          ['When to book', 'Morning or before an evening session', 'Evening, when physical work is done'],
        ],
      },
      {
        type: 'snippet',
        question: 'When should you use contrast bath therapy?',
        snippet:
          'Use contrast bath therapy 24–72 hours after heavy training, not in the first hours post-session. It suits athletes in regular training blocks, desk workers with poor circulation, and sub-acute soft-tissue recovery after medical clearance. Skip it in the first 48–72 hours of an acute injury.',
        paragraphs: [
          'Timing matters as much as the protocol. Immediately after a maximal endurance event, cold immersion within 1–2 hours can help soreness. After heavy squats or hypertrophy work, same-day full cold often blunts strength adaptation. Contrast therapy in the 24–72 hour window is the safer default during a training block.',
          'Contrast bath therapy supports recovery. It does not replace physiotherapy for structural injuries, post-surgical rehab plans, or undiagnosed joint pain. If you are unsure whether your injury is acute or sub-acute, get assessed first. We run a health intake before every session at R3BOOT for exactly this reason.',
        ],
      },
      {
        type: 'snippet',
        question: 'Who should avoid contrast bath therapy?',
        snippet:
          'Avoid contrast bath therapy without medical clearance if you have uncontrolled hypertension, active cardiovascular disease, Raynaud\'s disease, peripheral neuropathy, or pregnancy without obstetric approval. Do not use full immersion for acute injuries in the first 48–72 hours, open wounds, or active skin infections.',
        paragraphs: [
          'Cold and heat both stress the cardiovascular system briefly. That stress is manageable for healthy athletes under supervision, but dangerous for uncontrolled blood pressure or active heart conditions. Raynaud\'s and severe cold intolerance make ice bath phases unsafe without a tailored protocol.',
          'Every first-time R3BOOT client completes a health screen and blood pressure check before entering either phase. If a condition requires clearance, we say so at intake, not after you are already in the tub.',
        ],
      },
      {
        type: 'snippet',
        question: 'What is the contrast bath therapy protocol at R3BOOT Dadar?',
        snippet:
          'At R3BOOT Dadar, every contrast bath therapy session starts with health intake and a blood pressure check, then alternates Red Light Sauna (68°C) and Ice Bath (6–10°C) in a Day or Night Cycle. Half Cycle runs 30 minutes (₹2,500); Full Cycle runs 60 minutes (₹3,500).',
        paragraphs: [
          'Half Cycle is one complete hot–cold sequence, enough for most training-week recovery days. Full Cycle repeats the same Half Cycle twice at the same temperatures and same cycle type, recommended after competition weeks or when a single round feels insufficient. We do not mix Day and Night in one session.',
          'Before your first cold phase, a physiotherapist coaches breathing to manage cold shock in the opening 60 seconds. Staff stay present for the full protocol. Between phases, gentle mobility is encouraged because it improves transitions and reduces stiffness going into the next immersion.',
        ],
      },
      {
        type: 'table',
        caption: 'Half Cycle vs Full Cycle at R3BOOT',
        headers: ['', 'Half Cycle', 'Full Cycle'],
        rows: [
          ['Duration', '30 minutes', '60 minutes'],
          ['Price', '₹2,500', '₹3,500'],
          ['What you get', 'One complete Day or Night sequence', 'The same Half Cycle repeated twice'],
          ['Temperatures', 'Sauna 68°C · Ice Bath 6–10°C', 'Same as Half Cycle (no change mid-session)'],
          ['Best for', 'Regular training-week recovery; first-time clients', 'Post-competition weeks; heavy training blocks'],
          ['Cycle type', 'Day or Night (one only per session)', 'Same Day or Night type throughout; never mixed'],
        ],
      },
      {
        type: 'snippet',
        question: 'Where can you get contrast bath therapy in Mumbai?',
        snippet:
          'Contrast bath therapy in Mumbai is available at R3BOOT Recovery Centre, Palai Plaza, 203, Swami Gyan Jivandas Marg, Dadar East, Mumbai 400014, five minutes from Dadar Central Line station. Sessions are physiotherapist-supervised, not walk-in spa contrast showers.',
        paragraphs: [
          'First-time clients complete a health screen before entering either phase. Book via WhatsApp or call +91 97023 68612. If you are comparing options, look for supervised clinical contrast with precise temperatures, intake before immersion, and a qualified clinician present throughout, not a gym cold tub with no health check.',
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'Book contrast bath therapy in Dadar: ' },
          { t: 'WhatsApp +91 97023 68612', link: 'https://wa.me/919702368612' },
          { t: ' · ' },
          { t: 'contrast therapy Mumbai', link: 'https://www.r3boot.in/contrast-therapy-mumbai' },
        ],
      },
    ]),
  },

  // ─── 2. Published: ice bath vs contrast therapy Mumbai ───
  {
    documentId: '1a15518c-45a5-4508-975e-970be1e9b15b',
    metaDescription:
      'Ice bath vs contrast therapy in Mumbai: which is better for recovery, muscle gains, and soreness? Protocols, safety, and when to use each at R3BOOT Dadar.',
    faqs: [
      faq(
        'Is ice bath or contrast therapy better for muscle recovery?',
        'Ice bath wins for fast soreness control after a single maximal event (race, match). Contrast therapy wins during training blocks — it clears waste via vascular pumping while preserving more of the anabolic adaptation signal than sustained cold immersion.'
      ),
      faq(
        'Can ice baths reduce muscle gains?',
        'Yes, if used habitually after every resistance session. Regular post-lifting cold water immersion suppresses mTOR signalling and satellite cell activity. Reserve ice baths for competition recovery; use contrast therapy between training sessions.'
      ),
      faq(
        'How cold should an ice bath be?',
        'At R3BOOT: 6–10°C under physiotherapy supervision. For unsupervised home use: 10–15°C for 2–10 minutes. Colder is not better — it increases cold-shock risk without added recovery benefit.'
      ),
      faq(
        'Is contrast therapy safe to do at home?',
        'You can approximate with hot shower / cold shower alternation, but temperature control and first cold exposure safety are limited at home. New users and anyone with cardiovascular conditions should start with a supervised session in Mumbai.'
      ),
      faq(
        'How often can I use contrast therapy safely?',
        'Two to four sessions per week during heavy training blocks is common. Daily prolonged contrast sessions are rarely necessary. Frequency should match training load — a clinician can set this at intake.'
      ),
    ],
    body: buildBody([
      ...intro(
        [
          'Most Mumbai athletes know ice baths. At R3BOOT Dadar we use contrast therapy more often in-clinic — alternating heat and cold for a vascular pump that restores mobility without blunting adaptation the way daily ice baths can. This guide answers the comparison questions directly.',
        ],
        [
          'Ice bath = sustained cold → fastest short-term soreness relief; can blunt strength gains if overused.',
          'Contrast therapy = heat + cold cycles → better functional recovery during training blocks.',
          'For Mumbai heat and humidity: contrast therapy addresses both dehydration tightness (heat phase) and post-session inflammation (cold phase).',
          'Default for most active Mumbaikars in a training block: contrast therapy. Reserve ice baths for post-race or post-match days.',
        ]
      ),
      {
        type: 'qa',
        question: 'What does an ice bath do for recovery?',
        bullets: [
          'Vasoconstriction — narrows blood vessels, limits swelling.',
          'Reduced nerve conduction — dulls pain signals and perceived soreness.',
          'Local inflammation suppression — feel better in the 24–72 hour window after intense exercise.',
          'Limitation: the same inflammatory signal it suppresses partly drives muscle adaptation after lifting.',
        ],
        paragraphs: [
          'Cochrane reviews confirm cold water immersion outperforms passive rest for DOMS and perceived fatigue. The benefit is real but mostly short-term and perceptual — not faster structural adaptation.',
        ],
      },
      {
        type: 'qa',
        question: 'Can ice baths reduce muscle gains?',
        bullets: [
          'Yes — when used after every heavy resistance session over weeks to months.',
          'Cold suppresses mTOR pathway activation and satellite cell activity needed for hypertrophy.',
          'A Journal of Physiology trial found habitual post-lift CWI reduced strength and muscle mass gains over 12 weeks vs active recovery.',
          'Use ice baths selectively (post-race, between multi-day events) — not as a daily post-gym ritual if strength is your goal.',
        ],
      },
      {
        type: 'qa',
        question: 'What is contrast therapy and how does it work?',
        bullets: [
          'Alternating heat and cold immersion creates a vascular pumping effect.',
          'Heat dilates vessels; cold constricts them — repeated cycles drive metabolite clearance and restore mobility.',
          'Cold phases are shorter and interspersed with heat, so less complete suppression of adaptation signalling vs sustained ice bath.',
          'At R3BOOT: Red Light Sauna 68°C + Ice Bath 6–10°C, with Day Cycle (ends cold) or Night Cycle (ends hot).',
        ],
      },
      {
        type: 'qa',
        question: 'What is the best contrast therapy protocol?',
        bullets: [
          'Hot phase: 3–4 min at 38–40°C (home) or 68°C Red Light Sauna (R3BOOT).',
          'Cold phase: 30–60 sec to 1 min at 10–15°C (home) or 6–10°C ice bath (R3BOOT).',
          'Cycles: 3–5 rounds; Day Cycle ends cold; Night Cycle ends hot.',
          'Supervised Half Cycle at R3BOOT: 30 min intake + contrast sequence + mobility between phases.',
        ],
      },
      {
        type: 'qa',
        question: 'When should you use ice bath vs contrast therapy?',
        bullets: [
          'Back-to-back competition days → ice bath (fast soreness control).',
          'Active training block (strength or endurance) → contrast therapy.',
          'Post-resistance hypertrophy session → active recovery or contrast; skip same-day ice.',
          'First-time cold exposure → contrast therapy with shorter cold phases, supervised.',
          'Mumbai heat + dehydration after outdoor training → contrast therapy + electrolyte rehydration.',
          'Chronic pain or undiagnosed joint inflammation → physiotherapy assessment first.',
        ],
      },
      {
        type: 'qa',
        question: 'How cold should an ice bath be?',
        bullets: [
          'R3BOOT clinical standard: 6–10°C with breathing guidance and health intake.',
          'Home / unsupervised: 10–15°C for 2–10 minutes.',
          'Below 8°C at home adds cold-shock risk without meaningful extra benefit for most users.',
        ],
      },
      {
        type: 'qa',
        question: 'Is contrast therapy safe to do at home?',
        bullets: [
          'Approximation: alternate 2–3 min warm shower with 30–60 sec cold shower, 3–4 rounds.',
          'Limitations: imprecise temperature, no BP screen, no coached breathing for cold shock.',
          'Safer starting point for new users: supervised session at a Mumbai recovery centre.',
          'Stop if you feel chest pain, dizziness, numbness, or difficulty breathing.',
        ],
      },
      {
        type: 'qa',
        question: 'Why is contrast therapy especially relevant in Mumbai?',
        bullets: [
          'Heat and humidity add cardiovascular load on top of muscular fatigue.',
          'Heat phase helps unwind vascular stress from training in high ambient temperature.',
          'Cold phase controls inflammation and swelling after hard sessions in humid conditions.',
          'Pair with electrolyte rehydration — contrast therapy alone does not replace fluid replacement.',
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'Book a supervised session: ' },
          { t: '+91 97023 68612', link: 'https://wa.me/919702368612' },
          { t: ' · R3BOOT Dadar · ' },
          { t: 'contrast therapy Dadar', link: 'https://www.r3boot.in/contrast-therapy-dadar' },
        ],
      },
    ]),
  },

  // ─── 3. Draft: ice bath vs contrast therapy ───
  {
    documentId: 'drafts.155e7c78-4523-4795-959f-a0a634e00e9d',
    metaDescription:
      'Ice bath vs contrast therapy: which recovery protocol should you choose? When each works, how to do both correctly, and mistakes that blunt training gains. R3BOOT Dadar.',
    faqs: [
      faq(
        'Is ice bath or contrast therapy better for muscle soreness?',
        'Ice bath for immediate soreness after a one-off maximal effort. Contrast therapy during training blocks — it manages inflammation while preserving more adaptation signal than sustained cold immersion.'
      ),
      faq(
        'Can I do contrast therapy at home?',
        'Yes, with hot/cold shower alternation, but temperature precision and first cold exposure safety are limited. Athletes using contrast systematically get more reliable results in a supervised clinical setting.'
      ),
      faq(
        'Should I do ice bath or contrast therapy after every training session?',
        'Neither ice bath nor contrast after every lift session if hypertrophy is the goal. Contrast therapy suits most training-block recovery days. Reserve ice baths for post-competition or isolated high-effort events.'
      ),
      faq(
        'Is contrast therapy safe for everyone?',
        'No. Raynaud\'s, uncontrolled hypertension, peripheral vascular disease, and pregnancy require medical clearance. Acute injuries in the first 48 hours need local ice only — not full immersion.'
      ),
    ],
    body: buildBody([
      ...intro(
        [
          'Ice baths and contrast therapy both use cold water but are not interchangeable. The wrong protocol at the wrong time either blunts training gains or slows recovery from genuine tissue load. This guide maps each to your training cycle.',
        ],
        [
          'Ice bath: sustained cold → strongest soreness reduction; blunts adaptation if overused after lifting.',
          'Contrast therapy: heat + cold cycles → lymphatic clearance with less adaptation suppression.',
          'Neither is appropriate in the first 48 hours after an acute muscle strain — use local ice only.',
          'Choice depends on where you are in your training or competition calendar, not which feels more intense.',
        ]
      ),
      {
        type: 'qa',
        question: 'What is the difference between ice bath and contrast therapy?',
        bullets: [
          'Ice bath: continuous cold immersion → sustained vasoconstriction, strongest DOMS reduction.',
          'Contrast therapy: alternating heat and cold → vascular pump, faster waste clearance, less complete inflammation suppression.',
          'Functional difference: contrast preserves more anabolic signalling during active training blocks.',
          'At R3BOOT: ice bath 6–10°C; contrast pairs 68°C Red Light Sauna with the same ice bath in cycles.',
        ],
      },
      {
        type: 'qa',
        question: 'When should you use an ice bath?',
        bullets: [
          'After competition, marathon, match, or one-off maximal event when soreness control is the priority.',
          'Between multi-day tournament or race days when you need legs back quickly.',
          'Within 1–2 hours post-finish for endurance events (not immediately after heavy squats).',
          'For sleep: 10 min cold 1–2 hours before bed can support parasympathetic downshift.',
        ],
      },
      {
        type: 'qa',
        question: 'When should you use contrast therapy?',
        bullets: [
          'During an active training block when you need recovery between sessions without blunting gains.',
          '24–72 hours after heavy training (optimal recovery window).',
          'When stiffness and mobility loss matter more than maximal soreness suppression.',
          'First cold exposure: shorter cold phases with supervision — contrast is the safer entry point.',
        ],
      },
      {
        type: 'qa',
        question: 'Can you do contrast therapy at home?',
        bullets: [
          'Approximate protocol: 3–4 min warm (38–40°C shower) → 1 min cold (10–15°C) × 3–5 rounds.',
          'End Day-style sessions on cold; end Night-style sessions on hot if using contrast before sleep.',
          'Limitation: less thermal transfer than full immersion; no BP screen or coached breathing.',
          'First cold exposure should be guided — R3BOOT runs intake before any immersion.',
        ],
      },
      {
        type: 'qa',
        question: 'How do you do an ice bath correctly?',
        bullets: [
          'R3BOOT: 6–10°C, 10–15 min, lower limbs and torso to shoulder level where possible.',
          'Home: 10–15°C, 2–10 min; breathe slowly through the first 60 seconds (cold shock settles).',
          'Timing: within 2 hours post-endurance for soreness; wait 3–6 hr or skip after heavy lifting.',
          'Do not use full immersion for acute strains in the first 48 hours.',
        ],
      },
      {
        type: 'qa',
        question: 'How do you do contrast therapy correctly?',
        bullets: [
          'R3BOOT: Red Light Sauna 68°C + Ice Bath 6–10°C; physiotherapist selects Day or Night Cycle.',
          'Day Cycle always ends cold (energise). Night Cycle always ends hot (recovery and sleep).',
          'Half Cycle 30 min (₹2,500); Full Cycle 60 min — same protocol repeated (₹3,500).',
          'Home: 3–4 min hot → 1 min cold × 3–5; gentle mobility between cycles improves transitions.',
        ],
      },
      {
        type: 'qa',
        question: 'What are common mistakes with ice bath and contrast therapy?',
        bullets: [
          'Ice bath after every lift session — blunts long-term strength and hypertrophy gains.',
          'Water outside therapeutic range (below 8°C or above 42°C) — discomfort without extra benefit.',
          'Wrong finish: Day Cycle ending on heat, or Night Cycle ending on cold — reverses nervous-system intent.',
          'Full immersion in the first 48 hours of an acute injury — increases fluid at the injury site.',
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'Structured recovery in Dadar: ' },
          { t: 'R3BOOT contrast therapy', link: 'https://www.r3boot.in/contrast-therapy-mumbai' },
          { t: ' · WhatsApp ' },
          { t: '+91 97023 68612', link: 'https://wa.me/919702368612' },
        ],
      },
    ]),
  },

  // ─── 4. Draft: Day Cycle / Night Cycle protocol ───
  {
    documentId: 'drafts.contrast-therapy-3-1-protocol-explained',
    metaDescription:
      'What is the best way to do contrast therapy? R3BOOT Day Cycle vs Night Cycle, 68°C sauna + 6–10°C ice bath protocol, Half vs Full Cycle. Dadar, Mumbai.',
    faqs: [
      faq(
        'What is the best way to do contrast therapy?',
        'Match the ending modality to your schedule: Day Cycle ends cold (before training or work); Night Cycle ends hot (after your day, for sleep). At R3BOOT every session includes BP check, breathing coaching, and physiotherapist-selected cycle type.'
      ),
      faq(
        'Should contrast therapy end on hot or cold?',
        'End cold for Day Cycle — sympathetic activation, alert and energised. End hot for Night Cycle — parasympathetic activation, recovery and sleep. Wrong finish reverses the intended effect.'
      ),
      faq(
        'What is a Day Cycle in contrast therapy at R3BOOT?',
        'A 30- or 60-minute sequence that always finishes in the Ice Bath (6–10°C). Used when training, work, or activity follows the session. Half Cycle ₹2,500; Full Cycle ₹3,500.'
      ),
      faq(
        'What is a Night Cycle in contrast therapy at R3BOOT?',
        'A 30- or 60-minute sequence that always finishes in the Red Light Sauna (68°C). Used for deep recovery, stress relief, and sleep. Same pricing as Day Cycle.'
      ),
      faq(
        'What is the difference between Half Cycle and Full Cycle?',
        'Half Cycle (30 min): one complete contrast sequence. Full Cycle (60 min): the exact same Half Cycle repeated twice — same temperatures, same Day or Night type. Full Cycle suits post-competition or heavy training weeks.'
      ),
    ],
    body: buildBody([
      ...intro(
        [
          'Most contrast therapy content treats every session the same: hot, cold, feel better. At R3BOOT the protocol depends on what comes after your session — training and work need a different finish than sleep and deep recovery.',
        ],
        [
          'Day Cycle = ends on cold → energise and activate.',
          'Night Cycle = ends on hot → down-regulate and restore sleep.',
          'Equipment: Red Light Sauna 68°C + Ice Bath 6–10°C (not spa pools).',
          'Half Cycle 30 min · Full Cycle 60 min (same protocol repeated).',
        ]
      ),
      {
        type: 'qa',
        question: 'What is contrast therapy?',
        bullets: [
          'Alternating heat and cold immersion to create a vascular pumping effect in muscle tissue.',
          'Heat dilates vessels; cold constricts them — the switch drives waste clearance and reduces stiffness.',
          'At R3BOOT: clinical protocol with Red Light Sauna (68°C) and Ice Bath (6–10°C), not gym spa tubs.',
          'The last phase you finish on sets your nervous-system state walking out — Day vs Night Cycle.',
        ],
      },
      {
        type: 'qa',
        question: 'What is the best way to do contrast therapy?',
        bullets: [
          'Step 1: Health intake + blood pressure check (every session at R3BOOT).',
          'Step 2: Physiotherapist selects Day Cycle (ends cold) or Night Cycle (ends hot) from your schedule.',
          'Step 3: Breathing briefing before first cold phase — overrides cold shock in the first 60 seconds.',
          'Step 4: Complete alternating sauna and ice bath sequence; staff present throughout.',
          'Step 5: Rehydrate post-session; book 24–72 hr after heavy training for best recovery outcomes.',
        ],
      },
      {
        type: 'qa',
        question: 'Should contrast therapy end on hot or cold?',
        bullets: [
          'End cold → norepinephrine stays elevated → alert, focused, energised (Day Cycle).',
          'End hot → cortisol drops, muscle tension releases → calm, sleep-ready (Night Cycle).',
          'Booking Night Cycle but ending cold spikes sympathetic tone — opposite of sleep intent.',
          'Booking Day Cycle but ending hot reduces the pre-training / pre-work activation effect.',
        ],
      },
      {
        type: 'qa',
        question: 'What is a Day Cycle in contrast therapy?',
        bullets: [
          'Always ends with Ice Bath / Cold Plunge at 6–10°C.',
          'Use when: training, work, competition, or significant activity follows the session.',
          'Half Cycle options (30 min): e.g. Cold 10 → Sauna 10 → Cold 10, or Sauna 20 → Cold 10.',
          'Cold finish keeps norepinephrine active — you leave switched on, not drowsy.',
        ],
      },
      {
        type: 'qa',
        question: 'What is a Night Cycle in contrast therapy?',
        bullets: [
          'Always ends with Red Light Sauna at 68°C.',
          'Use when: physical work is done; pre-sleep recovery; managing training-related insomnia.',
          'Half Cycle options (30 min): e.g. Sauna 10 → Cold 10 → Sauna 10, or Cold 10 → Sauna 20.',
          'Hot finish promotes parasympathetic activation — ending on cold would prevent this.',
        ],
      },
      {
        type: 'qa',
        question: 'What temperature is the ice bath at R3BOOT?',
        bullets: [
          'Maintained at 6–10°C — R3BOOT clinical standard for therapeutic cold immersion.',
          'Colder than most gym cold tubs (typically 12–15°C) for more complete vasoconstriction.',
          'Temperature can only be reduced on client request — never increased above standard.',
          'First 60 seconds: coached breathing to manage cold shock response.',
        ],
      },
      {
        type: 'qa',
        question: 'What temperature is the Red Light Sauna at R3BOOT?',
        bullets: [
          'Operating temperature: 68°C.',
          'Delivers stronger vasodilation than warm water pools (38–42°C).',
          'Near-infrared light adds photobiomodulation — mitochondrial support alongside heat.',
          'Can only be reduced on client request — default is 68°C.',
        ],
      },
      {
        type: 'qa',
        question: 'What is the difference between Half Cycle and Full Cycle?',
        bullets: [
          'Half Cycle: 30 minutes, ₹2,500 — one complete Day or Night sequence.',
          'Full Cycle: 60 minutes, ₹3,500 — same Half Cycle repeated twice; no mixing Day and Night.',
          'Full Cycle recommended after competition, heavy training weeks, or when Half Cycle feels insufficient.',
          'First-time clients usually start Half Cycle to build cold tolerance.',
        ],
      },
      {
        type: 'qa',
        question: 'Who should not do contrast therapy without medical clearance?',
        bullets: [
          'Uncontrolled blood pressure, active cardiovascular conditions, Raynaud\'s disease.',
          'Peripheral neuropathy, severe cold intolerance, pregnancy without obstetric clearance.',
          'Acute injury in the first 72 hours — rest and local ice only.',
          'All first-time R3BOOT clients complete health intake + BP check before any immersion.',
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'Book Day or Night Cycle: ' },
          { t: 'WhatsApp +91 97023 68612', link: 'https://wa.me/919702368612' },
          { t: ' · Palai Plaza, Dadar East, Mumbai.' },
        ],
      },
    ]),
  },

  // ─── 5. Draft: when to ice bath after workout ───
  {
    documentId: 'drafts.when-to-ice-bath-after-workout',
    metaDescription:
      'When to ice bath after a workout — and when to skip it. Timing for lifting vs endurance, Mumbai heat, daily use, and ice bath vs contrast therapy. R3BOOT Dadar.',
    faqs: [
      faq(
        'When should you ice bath after a workout?',
        'Endurance or race effort: within 1–2 hours. Heavy lifting or hypertrophy: wait 3–6 hours or skip same-day ice — cold blunts mTOR signalling needed for muscle growth.'
      ),
      faq(
        'How long after a workout should you take an ice bath?',
        'Post-marathon or HYROX: 30 min – 2 hours. Post heavy squats or deadlifts: skip or wait until evening. Easy recovery run: ice bath usually unnecessary.'
      ),
      faq(
        'Should you ice bath before or after workout?',
        'After — not before heavy lifting or sport. Pre-session cold can reduce power output. Contrast Day Cycle (ends cold) before an evening session is different — supervised and schedule-specific.'
      ),
      faq(
        'Do ice baths stop muscle growth?',
        'Habitual post-lifting ice baths can — by suppressing inflammation that drives adaptation. Strategic use after races or endurance blocks is fine; daily post-gym ice is counterproductive for hypertrophy.'
      ),
      faq(
        'Can you ice bath every day?',
        'Daily ice after resistance training blunts strength gains. Daily post-endurance ice during a race block is more tolerable. Contrast therapy is the better default for most training-week recovery days.'
      ),
    ],
    body: buildBody([
      ...intro(
        [
          'Ice baths reduce soreness — that part is settled. The debate is timing. Too early after lifting sacrifices adaptation; too late after a marathon misses the anti-inflammatory window. Dr Vaishali Vijay Rauniyar, physiotherapist at R3BOOT Dadar, breaks it down by training type.',
        ],
        [
          'Endurance / race / HYROX → ice bath within 1–2 hours is reasonable.',
          'Heavy lifting / hypertrophy → wait 3–6 hours or skip same-day ice.',
          'R3BOOT ice bath: 6–10°C supervised; home use: 10–15°C.',
          'Contrast therapy often beats ice alone for training-block recovery — different timing rules apply.',
        ]
      ),
      {
        type: 'qa',
        question: 'When should you ice bath after a workout?',
        bullets: [
          'Endurance race, marathon, HYROX, or match day → within 30 min – 2 hours post-finish.',
          'Heavy leg day or hypertrophy session → skip same-day ice or wait 3–6 hours minimum.',
          'Easy recovery run or skill session → ice optional; sleep, food, and mobility matter more.',
          'Double session days → pick one recovery tool; do not stack ice, massage, and contrast same day.',
        ],
      },
      {
        type: 'qa',
        question: 'How long after a workout should you take an ice bath?',
        bullets: [
          'Maximum soreness-reduction window for endurance: 1–2 hours post-session.',
          'Strength training: delaying or skipping preserves mTOR and satellite cell activity.',
          'If legs are unusually trashed after lifting: wait until evening rather than immediate cold.',
          'Contrast therapy for training-block recovery: book 24–72 hours after heavy sessions, not same hour.',
        ],
      },
      {
        type: 'qa',
        question: 'Should you ice bath before or after workout?',
        bullets: [
          'Standard use: after the session, not before heavy lifting or sport.',
          'Pre-exercise cold can reduce power output and muscle temperature when you need it.',
          'Exception: supervised Day Cycle (ends cold) before an evening session — schedule-specific, not a DIY pre-gym ice dip.',
          'Post-workout timing should match training type — see scenarios above.',
        ],
      },
      {
        type: 'qa',
        question: 'Do ice baths stop muscle growth?',
        bullets: [
          'Habitual post-lifting ice baths can reduce long-term strength and hypertrophy gains.',
          'Mechanism: cold suppresses mTOR signalling and satellite cell activity after resistance training.',
          '2015 Journal of Physiology trial: regular post-strength CWI reduced muscle mass gains over 12 weeks.',
          'Strategic use after races or endurance blocks is fine — daily post-gym ice is the problem pattern.',
        ],
      },
      {
        type: 'qa',
        question: 'How long should you stay in an ice bath?',
        bullets: [
          'R3BOOT supervised: ice bath phases of 5–10 min within a 30-min Half Cycle sequence.',
          'Home unsupervised: 2–10 min at 10–15°C; 10–15 min max for general recovery.',
          'First exposure: 2–4 min; extend only with tolerance and breathing control.',
          'Beyond 15 minutes: no additional recovery benefit for most athletes.',
        ],
      },
      {
        type: 'qa',
        question: 'Can you ice bath every day?',
        bullets: [
          'Daily ice after every lift session → blunts adaptation; avoid during hypertrophy blocks.',
          'Daily post-endurance during a short race-camp → more acceptable; still monitor fatigue.',
          'Better training-week default: contrast therapy 2–4× per week instead of daily ice.',
          'Listen for flat performance, poor sleep, or rising illness — signs of over-recovery stress.',
        ],
      },
      {
        type: 'qa',
        question: 'Is it better to ice bath in the morning or evening?',
        bullets: [
          'Morning cold: alerting — useful before a demanding workday if you train early.',
          'Evening cold (1–2 hr before bed): supports parasympathetic shift and sleep onset.',
          'What matters more: matching the post-workout window to training type, not clock time.',
          'Mumbai late-evening trainers in heat often benefit from evening cold for wind-down.',
        ],
      },
      {
        type: 'qa',
        question: 'Is an ice bath good after training in Mumbai heat?',
        bullets: [
          'Yes for endurance — rehydrate with electrolytes first, then cold within 1–2 hours.',
          'Heat and humidity increase inflammation and fluid loss — cold helps endurance recovery.',
          'After strength sessions in heat: contrast therapy is the better default, not immediate ice.',
          'Cold does not replace hydration — drink before you plunge.',
        ],
      },
      {
        type: 'qa',
        question: 'What is the difference between an ice bath and contrast therapy?',
        bullets: [
          'Ice bath: sustained cold → strongest soreness suppression; can blunt adaptation if overused.',
          'Contrast therapy: heat + cold cycles → vascular pump clears waste; preserves more adaptation signal.',
          'Training block default: contrast therapy. Post-race soreness spike: ice bath.',
          'R3BOOT offers both under physiotherapy supervision in Dadar — intake and breathing guidance included.',
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'Supervised ice bath and contrast therapy in Mumbai: ' },
          { t: 'R3BOOT Dadar', link: 'https://www.r3boot.in/contrast-therapy-dadar' },
          { t: ' · ' },
          { t: '+91 97023 68612', link: 'https://wa.me/919702368612' },
        ],
      },
      {
        type: 'p',
        text: 'Dr Vaishali Vijay Rauniyar is a physiotherapist at R3BOOT, certified in dry needling and aquatic rehabilitation. Last updated July 2026.',
      },
    ]),
  },
]
