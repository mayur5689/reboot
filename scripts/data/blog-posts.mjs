import { buildBody } from '../lib/portable-text.mjs'

const AUTHORS = {
  hiral: '8a6bf0f1-64c7-4ce6-b5da-bef89b57d983',
  vaishali: '39779954-05b8-4600-9f87-6ad1876429e7',
  diyan: '9e2dceac-e211-479e-a626-6ac189b0ec19',
  akshay: '1728681d-f5a1-47ab-803b-1ed85621a096',
}

const CATS = {
  sportsMassage: 'e6247743-ad0d-4c08-a2f0-1de463aec6f7',
  contrast: 'fdcd74bf-a430-4304-82d4-5d41ed9c5ee8',
  physio: '363aaf3d-a61c-4184-9c5b-40a4531eb7a7',
}

function ref(id) {
  return { _type: 'reference', _ref: id }
}

function faq(question, answer) {
  return { _key: Math.random().toString(36).slice(2), question, answer }
}

export const DRAFT_POSTS = [
  {
    baseId: 'hyrox-mumbai-2026-recovery-guide',
    title: 'HYROX Mumbai 2026 Recovery Guide: What to Do Before and After Race Day',
    metaDescription:
      'HYROX Mumbai 2026 recovery plan — station-by-station muscle load, race-week timing, and what actually helps sore legs in Mumbai heat. Physio-backed guide from R3BOOT.',
    excerpt:
      'HYROX Mumbai lands 18–20 September 2026 at NESCO Goregaon. Here is a practical recovery timeline — what to do in the final week, race day, and the four days after — without guessing.',
    author: AUTHORS.diyan,
    categories: [CATS.sportsMassage, CATS.physio],
    publishedAt: '2026-05-19T10:00:00.000Z',
    faqs: [
      faq(
        'When is HYROX Mumbai 2026?',
        'HYROX Mumbai 2026 runs 18–20 September at NESCO Centre, Goregaon. Registration opened May 2026. If you are racing, build recovery into your plan now — not the week after tickets sell out.'
      ),
      faq(
        'How sore will I be after HYROX?',
        'Most first-timers feel peak soreness 48–72 hours post-race — especially quads from sled work, lats from ski erg, and shoulders from wall balls. Expect 4–5 days of meaningful DOMS if you race hard.'
      ),
      faq(
        'Should I ice bath right after HYROX?',
        'A cold immersion within 2 hours can blunt acute soreness and swelling. If your goal is purely recovery (not muscle gain that week), contrast therapy or a supervised ice bath helps. Wait at least 3–4 hours if you also did heavy strength work in the same week.'
      ),
      faq(
        'Can I train the week before HYROX Mumbai?',
        'Yes — but taper. Cut volume by 40–50%, keep short movement sessions, and stop heavy sled or wall ball work 5 days out. Your legs should feel springy, not trashed, at the start line.'
      ),
      faq(
        'Where can HYROX athletes recover in Mumbai?',
        'R3BOOT in Dadar East runs physio-supervised contrast therapy and sports massage for athletes across Mumbai. Many Goregaon racers drive in post-event for a Full Cycle session or targeted leg work. Book via WhatsApp: +91 97023 68612.'
      ),
    ],
    body: buildBody([
      {
        type: 'p',
        text: 'HYROX Mumbai 2026 is set for 18–20 September at NESCO Centre, Goregaon. If you are training for it — or eyeing a Delhi or Pune race first — recovery is not something you figure out after you cannot walk downstairs. This guide maps what actually gets sore, when to pull back, and what helps in Mumbai heat and humidity.',
      },
      {
        type: 'p',
        text: 'We work with hybrid athletes at R3BOOT Dadar every week. This is the protocol we use when someone has a multi-station race on the calendar — not generic “rest and stretch” advice.',
      },
      { type: 'h2', text: 'What HYROX does to your body' },
      {
        type: 'p',
        text: 'HYROX is eight 1 km runs broken up by functional stations. The load is repetitive and full-body, but certain muscles take a disproportionate hit:',
      },
      {
        type: 'ul',
        items: [
          'Ski erg — lats, triceps, core bracing; grip fatigue shows up late in the race',
          'Sled push / pull — quads, glutes, calves; eccentric load on push, posterior chain on pull',
          'Burpee broad jumps — chest, hip flexors, quads; heart rate spikes here',
          'Rowing — hamstrings, mid-back, grip again',
          'Farmers carry — traps, forearms, obliques; posture matters more than people expect',
          'Sandbag lunges — quads and glutes under load; knee tracking breaks down when tired',
          'Wall balls — shoulders, quads, cardiovascular peak; where races are often won or lost',
        ],
      },
      {
        type: 'p',
        text: 'Research on mixed-modal racing shows DOMS peaks 48–72 hours after unfamiliar eccentric work — sled and lunges qualify for most people. Plan your week accordingly.',
      },
      { type: 'h2', text: '4 weeks out: build capacity, not fatigue' },
      {
        type: 'ul',
        items: [
          'Run one full simulation (or half-distance station practice) every 7–10 days max',
          'Keep one easy run day between hard station sessions — Mumbai humidity makes back-to-back hard days costly',
          'Add sports massage every 10–14 days focused on quads, calves, and lats — not a spa-style full body',
          'Practice nasal breathing and cold exposure if you plan contrast therapy post-race; first ice bath on race week is a bad idea',
        ],
      },
      { type: 'h2', text: 'Race week: taper rules' },
      {
        type: 'ul',
        items: [
          'T-7 to T-5: last heavy sled or wall ball session; cut sets by 30%',
          'T-4 to T-3: 20–30 min easy run + mobility only',
          'T-2: walk, light spin, or rest; hydrate aggressively — you lose more fluid in Mumbai than you feel',
          'T-1: no training. Pack race kit, prep nutrition, sleep 7+ hours',
          'Race morning: dynamic warm-up only — leg swings, band work, 5 min row; skip static stretching',
        ],
      },
      { type: 'h2', text: 'Race day recovery (hour 0–6)' },
      {
        type: 'ul',
        items: [
          '0–30 min: walk 10 min, do not sit immediately; electrolytes + carbs within 30 min',
          '30–120 min: light food, compression socks optional, elevate legs 15 min if swollen',
          '2–6 hours: contrast shower at home (2 min warm / 1 min cool × 3) if no clinic visit; avoid deep tissue massage same day',
        ],
      },
      { type: 'h2', text: 'Days 1–4 after HYROX' },
      {
        type: 'ul',
        items: [
          'Day 1: walk 20–30 min, foam roll calves and quads — gentle only',
          'Day 2: peak soreness for many athletes; sports massage or physio assessment if limping',
          'Day 3: contrast therapy or supervised ice bath — vascular flush helps when DOMS is highest',
          'Day 4: easy spin or swim; reintroduce movement before loading again',
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'For a supervised session in Mumbai, see our ' },
          { t: 'contrast therapy page', link: 'https://www.r3boot.in/contrast-therapy-mumbai' },
          { t: ' (Full Cycle recommended post-race) or ' },
          { t: 'sports massage for athletes', link: 'https://www.r3boot.in/sports-massage-mumbai' },
          { t: ' for station-specific leg work.' },
        ],
      },
      { type: 'h2', text: 'When to see a physiotherapist' },
      {
        type: 'p',
        text: 'Normal post-HYROX soreness is diffuse and bilateral. Book a physio assessment if you have sharp single-joint pain, swelling that does not settle in 48 hours, numbness, or pain that changes your gait after day 4. Early intervention beats training through a stress fracture or rotator cuff flare.',
      },
      {
        type: 'rich',
        parts: [
          { t: 'Last updated May 2026. Written with input from the R3BOOT physio team. ' },
          { t: 'Book recovery', link: 'https://wa.me/919702368612' },
          { t: ' or call +91 97023 68612.' },
        ],
      },
    ]),
  },

  {
    baseId: 'when-to-ice-bath-after-workout',
    title: 'When to Ice Bath After a Workout (and When to Skip It)',
    metaDescription:
      'Ice bath timing after workouts — wait 3–6 hours after lifting if you want muscle growth, use sooner after endurance or race effort. Physio guide from R3BOOT Mumbai.',
    excerpt:
      'Ice baths help soreness, but timing matters. Here is when cold immersion helps, when it hurts your gains, and what Mumbai athletes should do after training in heat.',
    author: AUTHORS.vaishali,
    categories: [CATS.contrast, CATS.physio],
    publishedAt: '2026-05-19T11:00:00.000Z',
    faqs: [
      faq(
        'How long should I wait after lifting before an ice bath?',
        'If hypertrophy or strength is your goal, wait at least 3–6 hours after resistance training — or skip the ice bath that day. Cold immediately post-lift blunts the inflammatory signal muscles need to adapt.'
      ),
      faq(
        'Is it better to ice bath in the morning or evening?',
        'For sleep and nervous system downshift, evening works well — 1–2 hours before bed. For post-endurance recovery (long run, HYROX simulation), within 2 hours of finishing is fine. Avoid cold immersion right before heavy lifting.'
      ),
      faq(
        'How cold should an ice bath be?',
        'Therapeutic range is 10–15°C for 2–5 minutes. Colder is not better — it increases shock without extra benefit and raises risk for people with circulation issues.'
      ),
      faq(
        'Do ice baths stop muscle growth?',
        'Used after every lifting session, yes — habitually. A 2015 Journal of Physiology trial found regular post-strength CWI reduced long-term muscle and strength gains. Used strategically after races or high-volume endurance blocks, the trade-off is usually worth it.'
      ),
      faq(
        'Should I sauna before or after the ice bath?',
        'Heat first, then cold — always end on cold. That is the basis of contrast therapy. At R3BOOT we use a 3:1 hot-to-cold time ratio. See our contrast therapy service for supervised sessions in Dadar.',
      ),
    ],
    body: buildBody([
      {
        type: 'p',
        text: 'Ice baths reduce soreness. That part is settled. The argument on Reddit — and in most gym WhatsApp groups — is about when to get in. Too early after lifting and you may sacrifice muscle adaptation. Too late after a marathon effort and you miss the anti-inflammatory window. Here is the simple version.',
      },
      { type: 'h2', text: 'The short answer' },
      {
        type: 'ul',
        items: [
          'Endurance race or long run → cold within 1–2 hours is reasonable',
          'Heavy leg day or hypertrophy training → wait 3–6 hours, or skip ice that day',
          'Skill or technique session → ice bath optional; sleep and food matter more',
          'Double session days (AM lift, PM run) → pick one recovery tool; do not stack everything',
        ],
      },
      { type: 'h2', text: 'Why timing changes the outcome' },
      {
        type: 'p',
        text: 'Cold water immersion narrows blood vessels, dulls nerve signals, and drops muscle temperature. That trims DOMS and helps you feel ready for the next session. It also suppresses mTOR signalling and satellite cell activity — the repair machinery that builds muscle after resistance training.',
      },
      {
        type: 'p',
        text: 'Cochrane reviews support CWI for reducing perceived fatigue after intense exercise. Separate trials show the same mechanism works against you if your primary goal is getting stronger.',
      },
      { type: 'h2', text: 'Scenario guide' },
      { type: 'h3', text: 'After HYROX, marathon, or match day' },
      {
        type: 'ul',
        items: [
          'Priority: reduce swelling, get legs back for work on Monday',
          'Window: 30 min – 2 hours post-finish',
          'Duration: 2–4 min at 10–15°C; breathe through the first 60 sec',
          'Better option for many: contrast therapy (heat then cold) for vascular pumping',
        ],
      },
      { type: 'h3', text: 'After squats, deadlifts, or leg press' },
      {
        type: 'ul',
        items: [
          'Priority: muscle adaptation and strength gain',
          'Window: skip same-day ice, or wait until evening if legs are unusually trashed',
          'Alternative: walk 10 min, protein within 90 min, sleep 7+ hours',
        ],
      },
      { type: 'h3', text: 'After an easy recovery run' },
      {
        type: 'ul',
        items: [
          'Ice bath usually unnecessary — mobility and hydration enough',
          'Exception: training block peak week when legs feel beat up',
        ],
      },
      { type: 'h2', text: 'Morning vs evening — what actually matters' },
      {
        type: 'p',
        text: 'Morning cold can feel alerting; many athletes use it before work. Evening cold 1–2 hours before bed supports parasympathetic shift — useful if you train late in Mumbai heat and struggle to wind down. Neither beats getting the post-workout window right for your training type.',
      },
      { type: 'h2', text: 'Ice bath alone vs contrast therapy' },
      {
        type: 'p',
        text: 'Ice alone controls soreness. Alternating heat and cold creates a pump effect — vessels dilate in heat, constrict in cold — which clears metabolic waste faster than cold alone for many athletes. We cover the full comparison in our existing contrast therapy article; this post is only about timing.',
      },
      {
        type: 'rich',
        parts: [
          { t: 'Supervised cold immersion in Mumbai: ' },
          { t: 'ice bath at R3BOOT Dadar', link: 'https://www.r3boot.in/ice-bath-mumbai' },
          { t: '. Always includes health intake and breathing guidance — not a solo plunge tank.' },
        ],
      },
      {
        type: 'p',
        text: 'Dr Vaishali Vijay Rauniyar is a physiotherapist at R3BOOT, certified in dry needling and aquatic rehabilitation. Last updated May 2026.',
      },
    ]),
  },

  {
    baseId: 'contrast-therapy-3-1-protocol-explained',
    title: 'Contrast Therapy Explained: The 3:1 Protocol We Use at R3BOOT',
    metaDescription:
      'What contrast therapy 3:1 means — 3 minutes infrared heat, 1 minute cold, always end on cold. How many rounds, who it suits, and how it differs from ice alone. R3BOOT Mumbai.',
    excerpt:
      '3:1 means three minutes of heat for every one minute of cold — and you always finish cold. Here is why that ratio works, how a full session is structured, and who should modify it.',
    author: AUTHORS.hiral,
    categories: [CATS.contrast],
    publishedAt: '2026-05-19T12:00:00.000Z',
    faqs: [
      faq(
        'What does 3:1 mean in contrast therapy?',
        'Three minutes in infrared heat for every one minute in cold immersion. Heat dilates vessels; cold constricts them. The alternation creates a pumping effect that moves fluid through muscle tissue faster than heat or cold alone.'
      ),
      faq(
        'Why always end on cold?',
        'Finishing cold leaves vessels constricted and inflammation suppressed — the state you want walking out of a recovery session. Ending on heat re-opens vessels and can bring swelling back.'
      ),
      faq(
        'How many rounds in a Half vs Full Cycle?',
        'Half Cycle (30 min): two full rounds of heat-cold alternation. Full Cycle (60 min): three to four rounds. First-timers usually start Half; post-competition or heavy training weeks suit Full.'
      ),
      faq(
        'Is 3:1 the same as a Finnish sauna protocol?',
        'No. Traditional sauna protocols often use longer heat blocks and shorter cold dips with different ratios. Our 3:1 uses infrared heat at lower air temperature with physiotherapist supervision — built for athletes, not spa relaxation.'
      ),
      faq(
        'Can I do 3:1 contrast therapy at home?',
        'You can approximate with hot shower / cold shower alternation, but temperature control and breathing supervision matter for the ice phase. First cold exposure should be guided — that is why we run intake before any immersion at R3BOOT.'
      ),
    ],
    body: buildBody([
      {
        type: 'p',
        text: 'Contrast therapy is alternating heat and cold to flush fatigued muscle. At R3BOOT we run a specific 3:1 protocol — three minutes of infrared heat for every one minute of supervised cold immersion. This post explains the ratio, the round structure, and who should tweak it. For ice bath vs contrast debates, see our separate comparison article.',
      },
      { type: 'h2', text: 'What happens in each phase' },
      { type: 'h3', text: 'Heat phase (infrared sauna)' },
      {
        type: 'ul',
        items: [
          'Vessels dilate; blood flow to skin and muscle increases',
          'Muscle tissue warms — makes the upcoming cold phase tolerable',
          'Parasympathetic tone rises; many athletes report mental calm here',
          'Typical duration in our protocol: ~3 minutes per round',
        ],
      },
      { type: 'h3', text: 'Cold phase (ice bath)' },
      {
        type: 'ul',
        items: [
          'Vessels constrict rapidly; inflammation markers drop locally',
          'Nerve conduction slows — soreness perception drops within hours',
          'Breathing control is coached in the first 60 seconds',
          'Typical duration: ~1 minute per round at 10–15°C',
        ],
      },
      { type: 'h2', text: 'Why 3:1 and not 1:1' },
      {
        type: 'p',
        text: 'Equal time heat and cold works for some spa traditions. For athletes arriving with already-fatigued muscle, longer heat primes tissue and makes cold manageable without shortening the cold enough to lose the constrictive benefit. Shorter cold bursts repeated across rounds beat one long miserable plunge.',
      },
      {
        type: 'p',
        text: 'Your physiotherapist may adjust toward 2:1 if you are new to cold or toward 4:1 during deload weeks — but the default at R3BOOT is 3:1, always ending on cold.',
      },
      { type: 'h2', text: 'Sample Full Cycle structure (60 min)' },
      {
        type: 'ul',
        items: [
          'Intake + health screen — 5 min',
          'Breathing briefing before first cold — 3 min',
          'Round 1: 3 min heat → 1 min cold',
          'Round 2: 3 min heat → 1 min cold',
          'Round 3: 3 min heat → 1 min cold',
          'Optional Round 4 for heavy training load — 3 min heat → 1 min cold',
          'Rewarm, hydrate, post-session check-in — 5 min',
        ],
      },
      { type: 'h2', text: 'Who should modify the protocol' },
      {
        type: 'ul',
        items: [
          'First cold exposure: shorter cold (30–45 sec) with team present',
          'Uncontrolled blood pressure or Raynaud\'s: medical clearance first',
          'Acute injury (first 72 hr): rest and ice only — not full contrast',
          'Pregnancy: not recommended without obstetric clearance',
        ],
      },
      { type: 'h2', text: 'How this differs from our service pages' },
      {
        type: 'p',
        text: 'Our Mumbai service pages cover booking, pricing, and location. This article is the protocol logic — so you know what you are walking into before you book.',
      },
      {
        type: 'rich',
        parts: [
          { t: 'Book a supervised session: ' },
          { t: 'contrast therapy Mumbai', link: 'https://www.r3boot.in/contrast-therapy-mumbai' },
          { t: ' · Dadar East · WhatsApp ' },
          { t: '+91 97023 68612', link: 'https://wa.me/919702368612' },
        ],
      },
      {
        type: 'p',
        text: 'Dr Hiral Parikh is a physiotherapist at R3BOOT Dadar. Last updated May 2026.',
      },
    ]),
  },

  {
    baseId: 'ipl-cricket-elbow-shoulder-pain-recovery',
    title: 'IPL Season Injuries: Cricket Elbow and Shoulder Pain — What Helps',
    metaDescription:
      'IPL season shoulder and elbow pain — thrower\'s elbow, rotator cuff load, when to rest vs treat. Physio guide for cricketers in Mumbai from R3BOOT Dadar.',
    excerpt:
      'IPL season pushes bowling and throwing volume fast. Here is how cricket elbow and shoulder pain differ, what a week of overload feels like, and when physio beats pushing through.',
    author: AUTHORS.diyan,
    categories: [CATS.physio, CATS.sportsMassage],
    publishedAt: '2026-05-19T13:00:00.000Z',
    faqs: [
      faq(
        'What is cricket elbow?',
        'Usually medial epicondylitis (thrower\'s elbow) or lateral epicondylitis from repetitive wrist flick and forearm load — common in bowlers and fielders. Pain on inside or outside of elbow, worse after throwing volume spikes.'
      ),
      faq(
        'Should I bowl through shoulder pain during club season?',
        'Not if pain is sharp, changes your action, or lingers past 48 hours. Dull muscle soreness differs from rotator cuff or labral irritation. Reduce throwing volume and get assessed — stress fractures and cuff tears worsen with repetition.'
      ),
      faq(
        'Does ice or heat help cricket elbow?',
        'Acute flare (first 48 hr): ice 10 min. Sub-acute tightness: heat before mobility work. Contrast therapy helps when you are past the acute phase and returning to training — not during active swelling.'
      ),
      faq(
        'Can dry needling help cricket shoulder pain?',
        'For chronic trigger points in rotator cuff and scapular stabilisers, dry needling plus graded loading often works faster than rest alone. Assessment first — needling into an acute tear is wrong.'
      ),
      faq(
        'Where can cricketers get physio in Mumbai during IPL season?',
        'R3BOOT Dadar runs sports injury physiotherapy with throwing and bowling load management. Co-founder Diyan Kubadia comes from competitive cricket — we understand season timing. Book: +91 97023 68612.',
      ),
    ],
    body: buildBody([
      {
        type: 'p',
        text: 'May means IPL noise, club nets filling up, and shoulder/elbow complaints rising in our Dadar clinic. Cricket elbow and shoulder pain are not the same problem — but they often show up together when throwing volume jumps faster than tissue adapts.',
      },
      { type: 'h2', text: 'Cricket elbow — what it actually is' },
      {
        type: 'ul',
        items: [
          'Medial (inside) elbow pain → thrower\'s elbow; common in bowlers with wrist-heavy actions',
          'Lateral (outside) elbow pain → back-hand fielding, tennis-elbow pattern from forearm overload',
          'Gradual onset over 1–2 weeks beats single-match trauma — overload, not one bad delivery',
          'Grip weakness and pain on wrist extension/flexion are typical signs',
        ],
      },
      { type: 'h2', text: 'Shoulder pain in cricketers — common patterns' },
      {
        type: 'ul',
        items: [
          'Rotator cuff tendinopathy — deep shoulder ache after throwing, worse overhead',
          'Scapular dyskinesis — shoulder blade does not move cleanly; often missed on rest-only plans',
          'AC joint irritation — top-of-shoulder pain from diving or direct impact',
          'Labral irritation — catching sensation with certain arm angles; needs physio + imaging if persistent',
        ],
      },
      { type: 'h2', text: 'IPL season load trap' },
      {
        type: 'p',
        text: 'Club players often add net sessions while watching pros on TV — volume doubles without a planned deload. Tissue adaptation lags about 2–3 weeks behind what you feel capable of doing. That gap is where elbow and shoulder niggles start.',
      },
      {
        type: 'ul',
        items: [
          'Track throws per week like you track overs — sudden 30% jumps are risky',
          'One full rest day between high-volume throwing days minimum in peak season',
          'Warm-up: band work for external rotation before first throw, not after pain starts',
        ],
      },
      { type: 'h2', text: 'What helps — technique-specific' },
      { type: 'h3', text: 'First 48 hours (acute flare)' },
      {
        type: 'ul',
        items: [
          'Stop throwing — complete rest from aggravating movement',
          'Ice 10 min × 2–3/day on painful site',
          'Compression sleeve if swollen; avoid deep massage on hot tissue',
        ],
      },
      { type: 'h3', text: 'Days 3–14 (sub-acute)' },
      {
        type: 'ul',
        items: [
          'Physio assessment: action video if bowler, scapular screen if fielder',
          'Eccentric wrist/forearm loading for elbow — graded, not maximal',
          'Rotator cuff isometrics → band external rotation progressions for shoulder',
          'Sports massage on forearm flexors/extensors and posterior shoulder — not bone-on-bone pressure',
          'Dry needling for stubborn trigger points when assessment clears it',
        ],
      },
      { type: 'h3', text: 'Return to throw protocol' },
      {
        type: 'ul',
        items: [
          'Pain-free daily tasks first — reach, lift cup, sleep without night pain',
          'Week 1 return: 50% throw distance, 30% volume',
          'Week 2: progress distance; monitor next-morning stiffness',
          'Full intensity only when 24 hr pain-free after previous session',
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'Sports injury physio in Dadar: ' },
          { t: 'sports injury physiotherapy', link: 'https://www.r3boot.in/sports-injury-physiotherapy-dadar-mumbai' },
          { t: '. Targeted soft tissue work: ' },
          { t: 'sports massage Mumbai', link: 'https://www.r3boot.in/sports-massage-mumbai' },
          { t: '.' },
        ],
      },
      {
        type: 'p',
        text: 'Diyan Kubadia is co-founder at R3BOOT and a competitive cricketer. Last updated May 2026 — IPL season.',
      },
    ]),
  },

  {
    baseId: 'shivaji-park-runners-recovery-guide',
    title: 'Shivaji Park Runners\' Recovery Guide: Post-Run Routine in Mumbai',
    metaDescription:
      'Recovery after Shivaji Park runs — what to do in the first hour, when to massage, contrast therapy for Mumbai runners. Local guide from R3BOOT Dadar (15 min away).',
    excerpt:
      'Shivaji Park is where Mumbai runs — 400 m loops, Bombay Running meetups, marathon build-ups. Here is a post-run recovery routine that works in heat, plus when to come to Dadar for legs that will not settle.',
    author: AUTHORS.akshay,
    categories: [CATS.sportsMassage],
    publishedAt: '2026-05-19T14:00:00.000Z',
    faqs: [
      faq(
        'What should I do immediately after running at Shivaji Park?',
        'Within 15 min: walk 5 min cool-down, electrolytes + water, light stretch (calves, hip flexors). Avoid sitting in the car immediately — blood pools in legs.'
      ),
      faq(
        'How often should Shivaji Park runners get sports massage?',
        'Maintenance: every 2–3 weeks during normal training. Peak marathon block: weekly or biweekly focused on calves, IT band, and glutes. Pre-race: light work 48–72 hr before, not deep tissue day before.'
      ),
      faq(
        'Is Shivaji Park hard on knees?',
        'Concrete loops are unforgiving compared to mud or track. Rotate surfaces when possible; watch weekly volume jumps on pure concrete. Knee niggles often start with calf and hip restriction — address upstream.'
      ),
      faq(
        'How far is R3BOOT from Shivaji Park?',
        'About 15 minutes by road from Shivaji Park to R3BOOT Dadar East — many runners come straight after Sunday long runs or Bombay Running sessions.'
      ),
      faq(
        'Contrast therapy or massage first for runners?',
        'Depends on goal. Massage addresses specific tight tissue; contrast therapy handles systemic fatigue and soreness after long efforts. After a 20+ km long run, contrast Full Cycle day 2 + massage day 3 is a common combo.'
      ),
    ],
    body: buildBody([
      {
        type: 'p',
        text: 'If you run in Mumbai, you have logged laps at Shivaji Park. Concrete loops, early-morning groups, marathon season chaos — the park trains more half-marathoners than most gyms. Recovery is where most local runners cut corners. This guide is the post-run routine we recommend before niggles become physio cases.',
      },
      { type: 'h2', text: 'Why Shivaji Park beats up legs differently' },
      {
        type: 'ul',
        items: [
          'Concrete surface — higher impact than tar or track; calves and shins absorb more',
          '400 m loops — same camber and turn stress repeated for 10–20 km',
          'Heat and humidity even at 6 am in summer — fluid loss underestimated',
          'Crowded sessions — pace surges when dodging groups add eccentric load',
        ],
      },
      { type: 'h2', text: 'First 60 minutes after your run' },
      {
        type: 'ul',
        items: [
          '0–5 min: slow walk; do not stop abruptly at your car',
          '5–15 min: calf stretch (straight + bent knee), hip flexor stretch 30 sec each',
          '15–30 min: electrolyte drink + banana or rice-based snack — not only protein shake',
          '30–60 min: contrast shower at home (2 min warm / 1 min cool × 3) or legs elevated 10 min',
        ],
      },
      { type: 'h2', text: 'Same day — what to skip' },
      {
        type: 'ul',
        items: [
          'Deep tissue massage right after long run — microtrauma needs 24 hr before aggressive work',
          'Static stretching cold muscles beyond light holds',
          'Another run “because mileage plan says so” when gait is already off',
        ],
      },
      { type: 'h2', text: 'Days 1–3 after a hard park session' },
      {
        type: 'ul',
        items: [
          'Day 1: easy walk or pool; foam roll calves and quads — slow',
          'Day 2: sports massage focused on calves, glutes, lateral hip — 45 min sufficient',
          'Day 3: easy run 20–30 min or rest; if DOMS still high, contrast therapy session',
        ],
      },
      { type: 'h2', text: 'Common Shivaji Park niggles' },
      {
        type: 'ul',
        items: [
          'Calf tightness → check weekly volume jump; massage + eccentric calf raises',
          'Lateral knee pain → often IT band + weak glute med; not just knee icing',
          'Plantar morning pain → calf and foot intrinsics; rolling pin on foot before bed',
          'Lower back stiffness → hip flexor and QL release; core endurance not just stretching',
        ],
      },
      { type: 'h2', text: 'When to come to Dadar' },
      {
        type: 'p',
        text: 'R3BOOT is 15 minutes from Shivaji Park. Come in when soreness is predictable post-long-run, when one side hurts differently from the other, or when you have a race in 4–6 weeks and need recovery built into the plan — not when something is already broken.',
      },
      {
        type: 'rich',
        parts: [
          { t: 'Runner-focused massage: ' },
          { t: 'sports massage for runners Mumbai', link: 'https://www.r3boot.in/sports-massage-runners-mumbai' },
          { t: '. Post-long-run contrast: ' },
          { t: 'contrast therapy Dadar', link: 'https://www.r3boot.in/contrast-therapy-dadar' },
          { t: '.' },
        ],
      },
      {
        type: 'p',
        text: 'Akshay Anil Nalawde works with runners at R3BOOT Dadar. Last updated May 2026.',
      },
    ]),
  },
]

export function toDraftDocument(post) {
  return {
    _id: `drafts.${post.baseId}`,
    _type: 'post',
    title: post.title,
    slug: { _type: 'slug', current: post.baseId },
    metaDescription: post.metaDescription,
    excerpt: post.excerpt,
    author: ref(post.author),
    categories: post.categories.map(ref),
    publishedAt: post.publishedAt,
    body: post.body,
    faqs: post.faqs,
  }
}
