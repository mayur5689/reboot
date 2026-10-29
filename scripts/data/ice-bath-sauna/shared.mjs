export function key() {
  return Math.random().toString(36).slice(2, 14)
}

export function faq(question, answer) {
  return { _key: key(), question, answer }
}

/** Existing published Sanity documents used by the current ice bath and sauna posts. */
export const AUTHORS = {
  vaishali: { _type: 'reference', _ref: '39779954-05b8-4600-9f87-6ad1876429e7' },
}

export const CATS = {
  get contrastTherapy() {
    return { _type: 'reference', _ref: 'fdcd74bf-a430-4304-82d4-5d41ed9c5ee8', _key: key() }
  },
}

export const BYLINE =
  'Written by Dr Vaishali Vijay Rauniyar (BPT), physiotherapist at R3BOOT, Dadar, certified in dry needling and aquatic rehabilitation, who supervises contrast therapy sessions at the centre. Last updated September 2026.'

const SITE = 'https://www.r3boot.in'

export const LINKS = {
  contrast: `${SITE}/contrast-therapy-mumbai`,
  iceBath: `${SITE}/ice-bath-mumbai`,
  coldPlunge: `${SITE}/cold-plunge-mumbai`,
  sauna: `${SITE}/infrared-sauna-mumbai`,
  mentalTraining: `${SITE}/services/mental-training`,
  physio: `${SITE}/physiotherapy-mumbai`,
  sportsMassage: `${SITE}/services/sports-massage`,
  whatsapp: 'https://wa.me/919702368612',

  whenToIceBath: `${SITE}/blog/when-to-ice-bath-after-workout`,
  iceVsContrast: `${SITE}/blog/ice-bath-vs-contrast-therapy`,
  saunaVsSteam: `${SITE}/blog/sauna-vs-steam-room-contrast-therapy`,
  redLightSauna: `${SITE}/blog/red-light-sauna-benefits-mumbai`,
  contrastProtocol: `${SITE}/blog/contrast-therapy-3-1-protocol-explained`,

  iceBenefits: `${SITE}/blog/ice-bath-benefits-risks-blood-pressure`,
  iceMental: `${SITE}/blog/ice-bath-mental-health-mood-stress`,
  iceTub: `${SITE}/blog/ice-bath-tub-home-vs-supervised-session`,
  saunaWorkout: `${SITE}/blog/sauna-after-workout-sore-muscles`,
  saunaBenefits: `${SITE}/blog/sauna-benefits-heart-muscles-sleep`,

  machado: 'https://link.springer.com/article/10.1007/s40279-015-0431-7',
  cwiNetworkMeta: 'https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2025.1525726/full',
  roberts: 'https://pubmed.ncbi.nlm.nih.gov/26174323/',
  tipton: 'https://physoc.onlinelibrary.wiley.com/doi/10.1113/EP086283',
  sramek: 'https://pubmed.ncbi.nlm.nih.gov/10751106/',
  esperland: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9518606/',
  cain: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0317615',
  yankouskaya: 'https://pubmed.ncbi.nlm.nih.gov/36829490/',
  laukkanen2015: 'https://pubmed.ncbi.nlm.nih.gov/25705824/',
  laukkanenDementia: 'https://europepmc.org/article/MED/27932366',
  zaccardi: 'https://europepmc.org/article/MED/28633297',
  hussainCohen: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5941775/',
  mayoSaunaReview: 'https://www.mayoclinicproceedings.org/article/s0025-6196(18)30275-1/fulltext',
  mero: 'https://link.springer.com/article/10.1186/s40064-015-1093-5',
  scoon: 'https://www.sciencedirect.com/science/article/abs/pii/S1440244006001393',
  garolla: 'https://pubmed.ncbi.nlm.nih.gov/23411620/',
}

export const HELPLINES =
  'If you are struggling with low mood, anxiety or thoughts of self-harm, please speak to a professional. In India, Tele MANAS is free and available 24x7 on 14416, and iCALL (TISS) is on 9152987821, Monday to Saturday, 8 AM to 9 PM. In an emergency, go to the nearest hospital.'

export const BOOKING_ROWS = [
  ['What you book', 'Contrast therapy: Red Light Sauna at 70°C alternated with ice bath at 6 to 8°C in a Day or Night Cycle'],
  ['Half Cycle', '30 minutes, one complete Day or Night sequence, ₹2,500'],
  ['Full Cycle', '60 minutes, separate longer Day or Night protocol (not Half × 2), ₹3,500'],
  ['Supervision', 'Physiotherapy team present, health review at the start of every session, breathing guidance before the cold'],
  ['Hygiene', 'Filtered ice bath water; sauna and ice bath cleaned after every session'],
  ['Hours', 'Mon, Tue, Thu to Sat 8 AM to 9 PM; Wed 8 AM to 4 PM; Sun 2 PM to 9 PM'],
  ['Location', 'R3BOOT, 203 Palai Plaza, Dadar East, Mumbai'],
  ['Booking', 'Call or WhatsApp +91 97023 68612'],
]
