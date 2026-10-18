/** Canonical contrast therapy facts from R3BOOT SOP (Day & Night Cycles). */

export const CONTRAST_SAUNA_TEMP_C = 70
export const CONTRAST_ICE_BATH_TEMP_RANGE = '6–8°C' as const
export const CONTRAST_SAUNA_TEMP_LABEL = `${CONTRAST_SAUNA_TEMP_C}°C` as const

export const contrastTemperaturesShort = `infrared sauna (${CONTRAST_SAUNA_TEMP_LABEL}) and ice bath (${CONTRAST_ICE_BATH_TEMP_RANGE})`

/** Day Cycle half (30 min): always ends on ice bath. */
export const DAY_HALF_CYCLE_SUMMARY =
  'Sauna 10 min → ice bath 3 min → rest & hydrate 3 min → sauna 10 min → ice bath 3 min → rest, hydrate & shower (ends cold)'

/** Night Cycle half (30 min): always ends on sauna; used before massage when booked that way. */
export const NIGHT_HALF_CYCLE_SUMMARY =
  'Sauna 8 min → ice bath 3 min → rest 3 min → sauna 8 min → ice bath 3 min → rest 1 min → sauna 4 min (ends heat)'

/** Day Cycle full (60 min): separate longer protocol (not Half × 2); always ends cold. */
export const DAY_FULL_CYCLE_SUMMARY =
  'Sauna 15 min → ice bath 3 min → rest 3 min → sauna 15 min → ice bath 5 min → rest 3 min → sauna 12 min → ice bath 3 min → rest 1 min (ends cold)'

/** Night Cycle full (60 min): separate longer protocol (not Half × 2); always ends heat. */
export const NIGHT_FULL_CYCLE_SUMMARY =
  'Sauna 12 min → ice bath 3 min → rest 3 min → sauna 12 min → ice bath 5 min → rest 3 min → sauna 10 min → ice bath 3 min → rest 3 min → sauna 6 min (ends heat)'

/** Short client-facing explanation: Full is its own 60-min protocol, not Half run twice. */
export const FULL_CYCLE_RULE =
  'Half Cycle is a 30-minute sequence. Full Cycle is a separate 60-minute protocol with longer heat phases and an extra round. Same Day or Night type throughout: Day still ends cold, Night still ends heat.'

export const HALF_CYCLE_DURATION_MIN = 30
export const FULL_CYCLE_DURATION_MIN = 60
