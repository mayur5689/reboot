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
      'HYROX Mumbai 2026 recovery plan for 17–20 Sep at Hall 6, NESCO. Race-week taper, hours 0–6, and days 1–4. Physio protocol from R3BOOT.',
    excerpt:
      'Masters’ Union HYROX Mumbai runs 17–20 September 2026 at Hall 6, NESCO Goregaon East. You are four weeks out. Here is the physio protocol for the final week, race day, and the four days after.',
    author: AUTHORS.hiral,
    categories: [CATS.sportsMassage, CATS.physio, CATS.contrast],
    publishedAt: '2026-08-21T10:00:00.000Z',
    faqs: [
      faq(
        'When is HYROX Mumbai 2026?',
        'Masters’ Union HYROX Mumbai runs 17–20 September 2026 at Hall 6, NESCO Centre, Goregaon East. Racing starts Thursday 17 September. Check hyrox.com for current ticket availability and your wave time.'
      ),
      faq(
        'How sore will I be after HYROX?',
        'Most first-timers feel peak soreness 48–72 hours post-race, especially quads and glutes from sled work and sandbag lunges, then lats from SkiErg and shoulders from wall balls. Expect 4–5 days of meaningful DOMS if you race hard.'
      ),
      faq(
        'Should I ice bath right after HYROX?',
        'No clinical Full Cycle on race day. If you finish in the morning or afternoon, a home contrast shower (2 minutes warm, 1 minute cold, three cycles) in the 2–6 hour window is a holding intervention. Book supervised contrast therapy for Day 2 or Day 3, when DOMS is highest. If you finish after 6pm, skip the shower and protect sleep.'
      ),
      faq(
        'Can I train the week before HYROX Mumbai?',
        'Yes, but taper. Last heavy sled or wall ball session is T-7 to T-5, with sets cut by 30 percent. No heavy station loading inside 5 days. T-4 to T-3 is easy run and mobility only. T-1 is rest. Your legs should feel springy at the start line, not trashed.'
      ),
      faq(
        'Where can HYROX athletes recover in Mumbai?',
        'R3BOOT runs physio-supervised contrast therapy and sports massage at Dadar East (Palai Plaza) and Lower Parel / Prabhadevi (Lodha Signet). Goregaon racers sit on the Western line, so Prabhadevi is often the simpler drop. Pre-book Day 2 sports massage and Day 2–3 Full Cycle now. WhatsApp +91 97023 68612.'
      ),
      faq(
        'When should I start my HYROX recovery protocol?',
        'Four weeks out. That window is now for Mumbai 2026. Schedule station-specific sports massage every 10–14 days, take a first cold exposure before race week, and book your post-race Day 2 and Day 3 slots before the weekend fills.'
      ),
      faq(
        'Is contrast therapy safe the day of HYROX?',
        'Not as a clinical Full Cycle. Race-day inflammation is still doing repair work. Use electrolytes, walking, and food on race day. A home contrast shower is optional if you finish early. Supervised contrast belongs on Day 2 or Day 3.'
      ),
      faq(
        'How long does HYROX recovery take?',
        'Most athletes feel functional by day 4–5. Full tissue recovery from sled work and sandbag lunges takes 7–10 days. Eccentric-exercise research shows DOMS typically peaks at 48–72 hours. Return to loaded training only when soreness is below 3 out of 10 at rest.'
      ),
      faq(
        'What should I eat immediately after HYROX?',
        'Within 30 minutes: carbohydrates and electrolytes. A banana plus an electrolyte drink is enough as the first hit. Within 2 hours: a meal with carbohydrate and 20–40 g protein, plus at least 1.5 litres of fluid with sodium, or 150 percent of any body-weight lost if you can weigh yourself.'
      ),
      faq(
        'Can I train the day after HYROX?',
        'No loaded training on Day 1. Walk 20–30 minutes and foam roll calves and quads gently. Day 2 is typically peak soreness. Easy spin, swim, or a short walk on Day 4. Doubles and Relay use the same tissues at lower volume, so you may feel ready a day earlier. Red flags still apply.'
      ),
    ],
    body: buildBody([
      {
        type: 'p',
        text: 'Masters’ Union HYROX Mumbai 2026 runs 17 to 20 September at Hall 6, NESCO Centre, Goregaon East. Racing starts Thursday 17 September. If you are on the start list, you are in the four-week window now. Recovery is not something you improvise after you cannot walk downstairs on Monday morning. It is something you schedule in this build, execute in the hours after you finish, and follow for four days after.',
      },
      {
        type: 'p',
        text: 'This is the protocol we use with HYROX athletes at R3BOOT. It is not generic rest advice. Written by Dr. Hiral Parikh, physiotherapist at R3BOOT. Last updated August 2026.',
      },
      { type: 'h2', text: 'What HYROX actually does to your body' },
      {
        type: 'p',
        text: 'HYROX is eight 1 km runs separated by eight functional stations, in a fixed order. The format creates a specific soreness profile that differs from a pure running event or a strength session.',
      },
      {
        type: 'rich',
        parts: [
          { t: 'SkiErg:', strong: true },
          {
            t: ' Lat, tricep, and core bracing fatigue. Grip fatigue starts here and compounds at every station. The lats rarely get worked this way in standard training, which is why upper-body soreness after HYROX often surprises first-timers. Scapular stability work during the build matters as much as the pull itself. See our ',
          },
          {
            t: 'HYROX injury-prevention guide',
            link: 'https://www.r3boot.in/blog/hyrox-training-injury-prevention',
          },
          { t: ' for the shoulder pattern.' },
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'Sled push and pull:', strong: true },
          {
            t: ' The sled push is the highest producer of quad and glute fatigue in the race. Eccentric load on the quads during the push, posterior chain demand during the pull. Most athletes underestimate how much this degrades running mechanics in the final three stations.',
          },
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'Burpee broad jumps:', strong: true },
          {
            t: ' Hip flexor and quad load with a heart-rate spike. The hip flexor contribution is often missed. Post-race hip flexor tightness and lower-back stiffness commonly trace back to this station.',
          },
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'Rowing:', strong: true },
          { t: ' Hamstring and mid-back loading, plus another hit to grip.' },
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'Farmers carry:', strong: true },
          {
            t: ' Traps, forearms, and obliques. Posture under fatigue matters more than people expect.',
          },
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'Sandbag lunges:', strong: true },
          {
            t: ' This is the station that causes the most post-race DOMS. Loaded eccentric quad and glute work, repeated under cumulative fatigue. Eccentric-exercise research shows delayed-onset muscle soreness typically peaks 48 to 72 hours after novel or high-volume eccentric loading. Sandbag lunges qualify for virtually every HYROX competitor.',
          },
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'Wall balls:', strong: true },
          {
            t: ' Shoulders and quads at cardiovascular peak, where races are often decided. The overhead volume loads an already-fatigued upper body and can leave significant deltoid and rotator cuff soreness if you are undertrained for it.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Doubles and Relay load the same tissues at lower volume. Use the same recovery timeline. You may feel ready to train a day earlier. The red flags in the physiotherapy section still apply.',
      },
      { type: 'h2', text: 'Four weeks out: build recovery into training' },
      {
        type: 'p',
        text: 'The biggest mistake HYROX athletes make is treating recovery as something that happens after training. In this four-week window, recovery needs to be scheduled like sessions. That includes booking the clinic days you will need after the race, before Goregaon weekend traffic fills the diary.',
      },
      {
        type: 'ul',
        items: [
          'One full simulation, or half-distance station practice, every 7 to 10 days at most',
          'One easy run day between hard station sessions. Mumbai humidity makes back-to-back hard days expensive in ways cooler-climate plans do not account for',
          'Sports massage every 10 to 14 days, targeting quads, calves, and lats, not a general full-body session',
          'If you plan contrast therapy or a supervised ice bath after the race, take your first cold exposure in this window. A first-time cold plunge the morning after HYROX is a bad experience for no clinical gain',
          'Pre-book sports massage for Day 2 after your race date, and a Full Cycle contrast session for Day 2 or Day 3',
        ],
      },
      {
        type: 'rich',
        parts: [
          {
            t: 'If you are carrying a niggle into this window, ramping station volume for the first time, or returning after a previous injury, book a ',
          },
          { t: 'physiotherapy assessment', link: 'https://www.r3boot.in/physiotherapy-mumbai' },
          {
            t: ' now. Correcting a weak point in training is cheaper than managing the injury it causes on race day.',
          },
        ],
      },
      { type: 'h2', text: 'Race week: the taper protocol' },
      {
        type: 'rich',
        parts: [
          { t: 'T minus 7 to T minus 5:', strong: true },
          {
            t: ' Last heavy sled or wall ball session. Cut sets by 30 percent. Keep intensity, reduce volume. No heavy sled or wall balls inside 5 days of your wave.',
          },
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'T minus 4 to T minus 3:', strong: true },
          { t: ' 20 to 30 minutes easy run and mobility only. No station loading.' },
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'T minus 2:', strong: true },
          {
            t: ' Walk, light spin, or complete rest. Hydrate aggressively. Training and commuting in Mumbai humidity cost more fluid than temperate-climate plans assume. Arrive at race day already hydrated.',
          },
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'T minus 1:', strong: true },
          {
            t: ' No training. Pack race kit, prepare race nutrition, sleep at least seven hours. This is a performance input, not optional rest.',
          },
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'Race morning:', strong: true },
          {
            t: ' Dynamic warm-up only. Leg swings, band work, 5 minutes on the SkiErg or rower. No static stretching. Static stretching before a high-intensity event that demands explosive output is counterproductive to performance.',
          },
        ],
      },
      { type: 'h2', text: 'Race day: hours 0 to 6' },
      {
        type: 'p',
        text: 'The decisions you make in the six hours after crossing the finish line determine most of your Day 2 and Day 3 soreness outcome. Check your wave time. Several Saturday and Sunday divisions finish after 18:00, including Doubles, Pro, and Relay waves through 20:10.',
      },
      {
        type: 'rich',
        parts: [
          { t: '0 to 30 minutes:', strong: true },
          {
            t: ' Walk for 10 minutes. Do not sit immediately. Blood is pooled in your legs from eight rounds of running and loading. Sitting stops venous return and speeds the fluid accumulation that leaves lower limbs swollen and heavy. Take electrolytes and carbohydrates within 30 minutes. A banana plus an electrolyte drink is enough as the first hit.',
          },
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: '30 to 120 minutes:', strong: true },
          {
            t: ' A meal with carbohydrate and 20 to 40 g protein. Compression socks help if your legs are visibly swollen. Elevate legs for 15 minutes if swelling is present. Target at least 1.5 litres of fluid with sodium in the first two hours, or about 150 percent of body-weight lost if you can weigh yourself before and after. One litre is a floor, not a finish line.',
          },
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: '2 to 6 hours, morning or afternoon finish:', strong: true },
          {
            t: ' If you are not coming to clinic on race day, a contrast shower at home: two minutes warm, one minute cold, three cycles. This is a holding intervention, not a Full Cycle. Avoid deep tissue massage on race day. The acute inflammatory response is doing repair work. Aggressive manual work into that response typically worsens Day 2 soreness. Skip high-dose ibuprofen or other NSAIDs while you are still dehydrated. They stress the kidneys and do not speed tissue repair.',
          },
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'Evening finish after 6pm:', strong: true },
          {
            t: ' Walk, electrolytes, and a proper meal still matter. Skip the contrast shower if it costs you sleep. Getting from Goregaon East to Dadar or Prabhadevi at 10pm, then sitting in a shower cycle, is a poor trade for a shortened night. Sleep is the higher-leverage input. Book Day 2 massage and Day 2–3 contrast instead.',
          },
        ],
      },
      { type: 'h2', text: 'Days 1 to 4 after HYROX' },
      {
        type: 'table',
        caption: 'Post-race recovery timeline at R3BOOT',
        headers: ['When', 'What to do', 'What to skip'],
        rows: [
          [
            'Race day',
            'Walk, electrolytes, carbs then protein, sleep',
            'Deep tissue, Full Cycle contrast, NSAIDs while dehydrated',
          ],
          [
            'Day 1',
            '20–30 min walk, gentle foam roll on calves and quads',
            'Loaded training',
          ],
          [
            'Day 2',
            'Sports massage if gait changes; peak DOMS window',
            'Pushing through a limp',
          ],
          [
            'Day 2–3',
            'Supervised contrast, Full Cycle (60 min) preferred',
            'First-ever ice bath',
          ],
          [
            'Day 4',
            'Easy spin, swim, or 20-min walk',
            'Sled, lunges, wall balls',
          ],
          [
            'Day 7–10',
            'Return to load when soreness is below 3/10 at rest',
            'Training through sharp or one-sided pain',
          ],
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'Day 1:', strong: true },
          {
            t: ' Easy walk 20 to 30 minutes. Gentle foam rolling on calves and quads only. No loaded training. Sleep is the main recovery tool on this day. The tissue is in an acute recovery state and does not benefit from a loading stimulus.',
          },
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'Day 2:', strong: true },
          {
            t: ' Peak soreness for most athletes. This is when the eccentric damage from sled and sandbag lunges fully shows. Book a ',
          },
          {
            t: 'sports massage',
            link: 'https://www.r3boot.in/sports-massage-mumbai',
          },
          {
            t: ' or physiotherapy assessment if you are visibly altering your gait. Station-specific leg work: quads, glutes, calves in that order. Forty-five minutes is enough. If you cannot get in on Day 2, Day 3 is still effective.',
          },
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'Day 2 to 3:', strong: true },
          {
            t: ' Contrast therapy or supervised ice bath. Prefer Day 3 if you are still very swollen on Day 2. The vascular pump from alternating heat and cold at clinical temperatures helps clear waste from fatigued muscle when DOMS is highest. At R3BOOT, Full Cycle (60 minutes) is the post-race recommendation. Do not use a clinical Full Cycle on race day itself. Detail on timing is on our ',
          },
          {
            t: 'contrast therapy page',
            link: 'https://www.r3boot.in/contrast-therapy-mumbai',
          },
          { t: '.' },
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'Day 4:', strong: true },
          {
            t: ' Easy spin, swim, or a 20-minute walk. Reintroduce movement before loaded training. Full tissue recovery from sled work and sandbag lunges takes 7 to 10 days.',
          },
        ],
      },
      { type: 'h2', text: 'Mumbai humidity, not a hot race floor' },
      {
        type: 'p',
        text: 'Hall 6 at NESCO is an indoor, air-conditioned exhibition hall. The race floor will not feel like outdoor September heat. That does not mean heat and humidity are irrelevant.',
      },
      {
        type: 'p',
        text: 'You still train in Mumbai humidity in these four weeks, queue and warm up around the venue, and commute on the Western Express Highway in late-monsoon weather. Those hours add fluid loss and delay how fast you get food, sleep, and a clinic slot. Rain can slow the Goregaon-to-Dadar or Goregaon-to-Prabhadevi trip, which is another reason to pre-book Day 2 and Day 3 rather than hoping for a walk-in.',
      },
      {
        type: 'p',
        text: 'Two practical consequences. First, rehydration takes more fluid and more sodium than temperate-climate race write-ups suggest. Be more aggressive in the first two hours than you think is necessary. Second, a humid training block plus a long indoor race still leaves a large eccentric load. Expect Day 2 and Day 3 soreness to be real. Build that into the timeline rather than treating it as a surprise.',
      },
      { type: 'h2', text: 'When to see a physiotherapist, before and after' },
      {
        type: 'rich',
        parts: [
          { t: 'Before the race:', strong: true },
          {
            t: ' Physiotherapy is a build-phase tool, not only a post-race one. The most useful contact is four to six weeks out. A single screen catches load-tolerance gaps, old niggles, and movement faults that sled, lunges, and wall balls will expose under fatigue. Book a pre-race assessment if you are carrying any niggle into this window, ramping station volume for the first time, or returning to HYROX after a previous injury.',
          },
        ],
      },
      {
        type: 'rich',
        parts: [
          { t: 'After the race:', strong: true },
          {
            t: ' Normal post-HYROX soreness is diffuse, bilateral, and gradually improving from Day 3 onward. Book an assessment if you have sharp single-joint pain that does not improve from Day 1 to Day 2, swelling in one joint that is clearly worse than the other side, numbness or tingling in a limb, pain that changes your gait beyond Day 4, or shoulder pain that does not follow the expected DOMS pattern.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Early intervention for post-race stress reactions or overuse injuries consistently beats training through them. One assessment on Day 2 or 3 is far less disruptive to the next training block than six weeks of managed injury. Return to loaded training only when soreness is below 3 out of 10 at rest.',
      },
      {
        type: 'related',
        title: 'Related reading',
        links: [
          {
            t: 'HYROX training injury prevention',
            link: 'https://www.r3boot.in/blog/hyrox-training-injury-prevention',
          },
          {
            t: 'When to ice bath after a workout',
            link: 'https://www.r3boot.in/blog/when-to-ice-bath-after-workout',
          },
          {
            t: 'Contrast therapy in Mumbai',
            link: 'https://www.r3boot.in/contrast-therapy-mumbai',
          },
        ],
      },
      { type: 'h2', text: 'Book recovery in Mumbai' },
      {
        type: 'p',
        text: 'Dadar East is the flagship: Palai Plaza, 203, Swami Gyan Jivandas Marg, Dadar East. Lower Parel / Prabhadevi is at Lodha Signet, A-303, Senapati Bapat Marg, on the Western line from Goregaon. Both sites run physiotherapy, sports massage, and contrast therapy. Aqua therapy is Dadar only.',
      },
      {
        type: 'rich',
        parts: [
          { t: 'WhatsApp ', },
          { t: '+91 97023 68612', link: 'https://wa.me/919702368612' },
          {
            t: ' to lock Day 2 sports massage and Day 2–3 Full Cycle against your wave date. Written by Dr. Hiral Parikh, physiotherapist at R3BOOT Recovery Centre. Last updated August 2026.',
          },
        ],
      },
    ]),
  },

  {
    baseId: 'when-to-ice-bath-after-workout',
    title: 'When to Ice Bath After a Workout (and When to Skip It)',
    metaDescription:
      'Ice bath timing after workouts, wait 3–6 hours after lifting if you want muscle growth, use sooner after endurance or race effort. Physio guide from R3BOOT Mumbai.',
    excerpt:
      'Ice baths help soreness, but timing matters. Here is when cold immersion helps, when it hurts your gains, and what Mumbai athletes should do after training in heat.',
    author: AUTHORS.vaishali,
    categories: [CATS.contrast, CATS.physio],
    publishedAt: '2026-05-19T11:00:00.000Z',
    faqs: [
      faq(
        'How long should I wait after lifting before an ice bath?',
        'If hypertrophy or strength is your goal, wait at least 3–6 hours after resistance training, or skip the ice bath that day. Cold immediately post-lift blunts the inflammatory signal muscles need to adapt.'
      ),
      faq(
        'Is it better to ice bath in the morning or evening?',
        'For sleep and nervous system downshift, evening works well, 1–2 hours before bed. For post-endurance recovery (long run, HYROX simulation), within 2 hours of finishing is fine. Avoid cold immersion right before heavy lifting.'
      ),
      faq(
        'How cold should an ice bath be?',
        'Therapeutic range is 10–15°C for 2–5 minutes. Colder is not better, it increases shock without extra benefit and raises risk for people with circulation issues.'
      ),
      faq(
        'Do ice baths stop muscle growth?',
        'Used after every lifting session, yes, habitually. A 2015 Journal of Physiology trial found regular post-strength CWI reduced long-term muscle and strength gains. Used strategically after races or high-volume endurance blocks, the trade-off is usually worth it.'
      ),
      faq(
        'Should I sauna before or after the ice bath?',
        'At R3BOOT, contrast therapy uses Day Cycle (always ends on ice bath) or Night Cycle (always ends on infrared sauna), selected from your schedule. See our contrast therapy service for supervised sessions in Dadar.',
      ),
    ],
    body: buildBody([
      {
        type: 'p',
        text: 'Ice baths reduce soreness. That part is settled. The argument on Reddit, and in most gym WhatsApp groups, is about when to get in. Too early after lifting and you may sacrifice muscle adaptation. Too late after a marathon effort and you miss the anti-inflammatory window. Here is the simple version.',
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
        text: 'Cold water immersion narrows blood vessels, dulls nerve signals, and drops muscle temperature. That trims DOMS and helps you feel ready for the next session. It also suppresses mTOR signalling and satellite cell activity, the repair machinery that builds muscle after resistance training.',
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
          'Ice bath usually unnecessary, mobility and hydration enough',
          'Exception: training block peak week when legs feel beat up',
        ],
      },
      { type: 'h2', text: 'Morning vs evening, what actually matters' },
      {
        type: 'p',
        text: 'Morning cold can feel alerting; many athletes use it before work. Evening cold 1–2 hours before bed supports parasympathetic shift, useful if you train late in Mumbai heat and struggle to wind down. Neither beats getting the post-workout window right for your training type.',
      },
      { type: 'h2', text: 'Ice bath alone vs contrast therapy' },
      {
        type: 'p',
        text: 'Ice alone controls soreness. Alternating heat and cold creates a pump effect, vessels dilate in heat, constrict in cold, which clears metabolic waste faster than cold alone for many athletes. We cover the full comparison in our existing contrast therapy article; this post is only about timing.',
      },
      {
        type: 'rich',
        parts: [
          { t: 'Supervised cold immersion in Mumbai: ' },
          { t: 'ice bath at R3BOOT Dadar', link: 'https://www.r3boot.in/ice-bath-mumbai' },
          { t: '. Always includes health intake and breathing guidance, not a solo plunge tank.' },
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
    title: 'Contrast Therapy Day Cycle vs Night Cycle: R3BOOT Protocol Explained (2026)',
    metaDescription:
      'Day Cycle ends cold for alertness; Night Cycle ends hot for recovery and sleep. Half vs Full Cycle, 70°C sauna + 6–8°C ice bath, and who needs medical clearance. R3BOOT Mumbai.',
    excerpt:
      'Day Cycle always ends on ice bath; Night Cycle always ends on infrared sauna. Here is how R3BOOT selects your cycle, runs a 30- or 60-minute session, and sets exact temperatures.',
    author: AUTHORS.hiral,
    categories: [CATS.contrast],
    publishedAt: '2026-05-19T12:00:00.000Z',
    faqs: [
      faq(
        'Should contrast therapy end on hot or cold?',
        'Day Cycle always ends on cold (ice bath) for alertness before training or work. Night Cycle always ends on hot (infrared sauna) for recovery and sleep. Your physiotherapist selects the cycle at intake.'
      ),
      faq(
        'What is the difference between Half Cycle and Full Cycle?',
        'Half Cycle (30 min) is one complete Day or Night sequence. Full Cycle (60 min) is a separate longer protocol with longer heat phases and an extra round, not Half run twice. Same Day or Night type throughout.'
      ),
      faq(
        'What is a Day Cycle in contrast therapy at R3BOOT?',
        'A 30- or 60-minute sequence that always finishes in the ice bath at 6–8°C. Used when training, work, or competition follows the session.'
      ),
      faq(
        'What is a Night Cycle in contrast therapy at R3BOOT?',
        'A 30- or 60-minute sequence that always finishes in the Red Light Sauna at 70°C. Used for deep recovery, stress relief, or sleep — often before sports massage when both are booked.'
      ),
      faq(
        'What temperatures does R3BOOT use for contrast therapy?',
        'Red Light Sauna at 70°C and ice bath at 6–8°C. Temperatures may only be reduced on client request after staff confirm comfort at intake.'
      ),
    ],
    body: buildBody([
      {
        type: 'p',
        text: 'At R3BOOT, contrast therapy is not one generic hot-cold loop. Day Cycle and Night Cycle use the same sauna and ice bath equipment but different sequences and finishes, matched to what your schedule demands next. This post explains how we select and run each cycle.',
      },
      { type: 'h2', text: 'Day Cycle vs Night Cycle' },
      {
        type: 'ul',
        items: [
          'Day Cycle → always ends on ice bath → stay energised for work or training',
          'Night Cycle → always ends on infrared sauna → down-regulate for recovery and sleep',
          'Half Cycle = 30 minutes (one complete sequence)',
          'Full Cycle = 60 minutes (a separate longer protocol, not Half run twice)',
        ],
      },
      { type: 'h2', text: 'Half Cycle structure (30 min)' },
      { type: 'h3', text: 'Day Cycle Half' },
      {
        type: 'ul',
        items: [
          'Infrared sauna 10 min → ice bath 3 min → rest & hydrate 3 min',
          'Sauna 10 min → ice bath 3 min → rest, hydrate & shower (ends cold)',
        ],
      },
      { type: 'h3', text: 'Night Cycle Half' },
      {
        type: 'ul',
        items: [
          'Sauna 8 min → ice bath 3 min → rest 3 min → sauna 8 min → ice bath 3 min',
          'Rest 1 min → sauna 4 min → hydrate and shower (ends heat)',
          'Often used before sports massage when both services are booked the same day',
        ],
      },
      { type: 'h2', text: 'Full Cycle structure (60 min)' },
      {
        type: 'p',
        text: 'Full Cycle is its own protocol: longer heat phases and an extra round. Day still ends cold; Night still ends heat.',
      },
      { type: 'h3', text: 'Day Cycle Full' },
      {
        type: 'ul',
        items: [
          'Sauna 15 min → ice bath 3 min → rest 3 min → sauna 15 min → ice bath 5 min → rest 3 min',
          'Sauna 12 min → ice bath 3 min → rest 1 min (ends cold)',
        ],
      },
      { type: 'h3', text: 'Night Cycle Full' },
      {
        type: 'ul',
        items: [
          'Sauna 12 min → ice bath 3 min → rest 3 min → sauna 12 min → ice bath 5 min → rest 3 min',
          'Sauna 10 min → ice bath 3 min → rest 3 min → sauna 6 min (ends heat)',
        ],
      },
      { type: 'h2', text: 'Temperature standards' },
      {
        type: 'p',
        text: 'Red Light Sauna at 70°C. Ice bath at 6–8°C. Staff may reduce temperatures only on your request. Shower before the session is required; hydrate with water and electrolytes (avoid caffeine beforehand).',
      },
      { type: 'h2', text: 'Who should not do contrast therapy without clearance' },
      {
        type: 'ul',
        items: [
          'Uncontrolled cardiac conditions or hypertension',
          'Raynaud\'s phenomenon or severe cold intolerance',
          'Open wounds, skin infections, fever, or acute illness',
          'Acute injury in the first 72 hours — rest and local ice only',
        ],
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
        text: 'Dr Hiral Parikh is a physiotherapist at R3BOOT Dadar. Last updated October 2026.',
      },
    ]),
  },

  {
    baseId: 'ipl-cricket-elbow-shoulder-pain-recovery',
    title: 'IPL Season Injuries: Cricket Elbow and Shoulder Pain | What Helps',
    metaDescription:
      'IPL season shoulder and elbow pain, thrower\'s elbow, rotator cuff load, when to rest vs treat. Physio guide for cricketers in Mumbai from R3BOOT Dadar.',
    excerpt:
      'IPL season pushes bowling and throwing volume fast. Here is how cricket elbow and shoulder pain differ, what a week of overload feels like, and when physio beats pushing through.',
    author: AUTHORS.diyan,
    categories: [CATS.physio, CATS.sportsMassage],
    publishedAt: '2026-05-19T13:00:00.000Z',
    faqs: [
      faq(
        'What is cricket elbow?',
        'Usually medial epicondylitis (thrower\'s elbow) or lateral epicondylitis from repetitive wrist flick and forearm load, common in bowlers and fielders. Pain on inside or outside of elbow, worse after throwing volume spikes.'
      ),
      faq(
        'Should I bowl through shoulder pain during club season?',
        'Not if pain is sharp, changes your action, or lingers past 48 hours. Dull muscle soreness differs from rotator cuff or labral irritation. Reduce throwing volume and get assessed, stress fractures and cuff tears worsen with repetition.'
      ),
      faq(
        'Does ice or heat help cricket elbow?',
        'Acute flare (first 48 hr): ice 10 min. Sub-acute tightness: heat before mobility work. Contrast therapy helps when you are past the acute phase and returning to training, not during active swelling.'
      ),
      faq(
        'Can dry needling help cricket shoulder pain?',
        'For chronic trigger points in rotator cuff and scapular stabilisers, dry needling plus graded loading often works faster than rest alone. Assessment first, needling into an acute tear is wrong.'
      ),
      faq(
        'Where can cricketers get physio in Mumbai during IPL season?',
        'R3BOOT Dadar runs sports injury physiotherapy with throwing and bowling load management. Co-founder Diyan Kubadia comes from competitive cricket, we understand season timing. Book: +91 97023 68612.',
      ),
    ],
    body: buildBody([
      {
        type: 'p',
        text: 'May means IPL noise, club nets filling up, and shoulder/elbow complaints rising in our Dadar clinic. Cricket elbow and shoulder pain are not the same problem, but they often show up together when throwing volume jumps faster than tissue adapts.',
      },
      { type: 'h2', text: 'Cricket elbow, what it actually is' },
      {
        type: 'ul',
        items: [
          'Medial (inside) elbow pain → thrower\'s elbow; common in bowlers with wrist-heavy actions',
          'Lateral (outside) elbow pain → back-hand fielding, tennis-elbow pattern from forearm overload',
          'Gradual onset over 1–2 weeks beats single-match trauma, overload, not one bad delivery',
          'Grip weakness and pain on wrist extension/flexion are typical signs',
        ],
      },
      { type: 'h2', text: 'Shoulder pain in cricketers, common patterns' },
      {
        type: 'ul',
        items: [
          'Rotator cuff tendinopathy, deep shoulder ache after throwing, worse overhead',
          'Scapular dyskinesis, shoulder blade does not move cleanly; often missed on rest-only plans',
          'AC joint irritation, top-of-shoulder pain from diving or direct impact',
          'Labral irritation, catching sensation with certain arm angles; needs physio + imaging if persistent',
        ],
      },
      { type: 'h2', text: 'IPL season load trap' },
      {
        type: 'p',
        text: 'Club players often add net sessions while watching pros on TV, volume doubles without a planned deload. Tissue adaptation lags about 2–3 weeks behind what you feel capable of doing. That gap is where elbow and shoulder niggles start.',
      },
      {
        type: 'ul',
        items: [
          'Track throws per week like you track overs, sudden 30% jumps are risky',
          'One full rest day between high-volume throwing days minimum in peak season',
          'Warm-up: band work for external rotation before first throw, not after pain starts',
        ],
      },
      { type: 'h2', text: 'What helps, technique-specific' },
      { type: 'h3', text: 'First 48 hours (acute flare)' },
      {
        type: 'ul',
        items: [
          'Stop throwing, complete rest from aggravating movement',
          'Ice 10 min × 2–3/day on painful site',
          'Compression sleeve if swollen; avoid deep massage on hot tissue',
        ],
      },
      { type: 'h3', text: 'Days 3–14 (sub-acute)' },
      {
        type: 'ul',
        items: [
          'Physio assessment: action video if bowler, scapular screen if fielder',
          'Eccentric wrist/forearm loading for elbow, graded, not maximal',
          'Rotator cuff isometrics → band external rotation progressions for shoulder',
          'Sports massage on forearm flexors/extensors and posterior shoulder, not bone-on-bone pressure',
          'Dry needling for stubborn trigger points when assessment clears it',
        ],
      },
      { type: 'h3', text: 'Return to throw protocol' },
      {
        type: 'ul',
        items: [
          'Pain-free daily tasks first, reach, lift cup, sleep without night pain',
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
        text: 'Diyan Kubadia is co-founder at R3BOOT and a competitive cricketer. Last updated May 2026 | IPL season.',
      },
    ]),
  },

  {
    baseId: 'shivaji-park-runners-recovery-guide',
    title: 'Shivaji Park Runners\' Recovery Guide: Post-Run Routine in Mumbai',
    metaDescription:
      'Recovery after Shivaji Park runs, what to do in the first hour, when to massage, contrast therapy for Mumbai runners. Local guide from R3BOOT Dadar (15 min away).',
    excerpt:
      'Shivaji Park is where Mumbai runs, 400 m loops, Bombay Running meetups, marathon build-ups. Here is a post-run recovery routine that works in heat, plus when to come to Dadar for legs that will not settle.',
    author: AUTHORS.akshay,
    categories: [CATS.sportsMassage],
    publishedAt: '2026-05-19T14:00:00.000Z',
    faqs: [
      faq(
        'What should I do immediately after running at Shivaji Park?',
        'Within 15 min: walk 5 min cool-down, electrolytes + water, light stretch (calves, hip flexors). Avoid sitting in the car immediately, blood pools in legs.'
      ),
      faq(
        'How often should Shivaji Park runners get sports massage?',
        'Maintenance: every 2–3 weeks during normal training. Peak marathon block: weekly or biweekly focused on calves, IT band, and glutes. Pre-race: light work 48–72 hr before, not deep tissue day before.'
      ),
      faq(
        'Is Shivaji Park hard on knees?',
        'Concrete loops are unforgiving compared to mud or track. Rotate surfaces when possible; watch weekly volume jumps on pure concrete. Knee niggles often start with calf and hip restriction, address upstream.'
      ),
      faq(
        'How far is R3BOOT from Shivaji Park?',
        'About 15 minutes by road from Shivaji Park to R3BOOT Dadar East, many runners come straight after Sunday long runs or Bombay Running sessions.'
      ),
      faq(
        'Contrast therapy or massage first for runners?',
        'Depends on goal. Massage addresses specific tight tissue; contrast therapy handles systemic fatigue and soreness after long efforts. After a 20+ km long run, contrast Full Cycle day 2 + massage day 3 is a common combo.'
      ),
    ],
    body: buildBody([
      {
        type: 'p',
        text: 'If you run in Mumbai, you have logged laps at Shivaji Park. Concrete loops, early-morning groups, marathon season chaos, the park trains more half-marathoners than most gyms. Recovery is where most local runners cut corners. This guide is the post-run routine we recommend before niggles become physio cases.',
      },
      { type: 'h2', text: 'Why Shivaji Park beats up legs differently' },
      {
        type: 'ul',
        items: [
          'Concrete surface, higher impact than tar or track; calves and shins absorb more',
          '400 m loops, same camber and turn stress repeated for 10–20 km',
          'Heat and humidity even at 6 am in summer, fluid loss underestimated',
          'Crowded sessions, pace surges when dodging groups add eccentric load',
        ],
      },
      { type: 'h2', text: 'First 60 minutes after your run' },
      {
        type: 'ul',
        items: [
          '0–5 min: slow walk; do not stop abruptly at your car',
          '5–15 min: calf stretch (straight + bent knee), hip flexor stretch 30 sec each',
          '15–30 min: electrolyte drink + banana or rice-based snack, not only protein shake',
          '30–60 min: contrast shower at home (2 min warm / 1 min cool × 3) or legs elevated 10 min',
        ],
      },
      { type: 'h2', text: 'Same day, what to skip' },
      {
        type: 'ul',
        items: [
          'Deep tissue massage right after long run, microtrauma needs 24 hr before aggressive work',
          'Static stretching cold muscles beyond light holds',
          'Another run “because mileage plan says so” when gait is already off',
        ],
      },
      { type: 'h2', text: 'Days 1–3 after a hard park session' },
      {
        type: 'ul',
        items: [
          'Day 1: easy walk or pool; foam roll calves and quads, slow',
          'Day 2: sports massage focused on calves, glutes, lateral hip, 45 min sufficient',
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
        text: 'R3BOOT is 15 minutes from Shivaji Park. Come in when soreness is predictable post-long-run, when one side hurts differently from the other, or when you have a race in 4–6 weeks and need recovery built into the plan, not when something is already broken.',
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
