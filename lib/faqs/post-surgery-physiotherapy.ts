import { PHYSIO_PRICE_LABEL, PHYSIO_SESSION_MINUTES } from '@/lib/physio/pricing'

export const postSurgeryFaqs = [
  {
    question: 'How much does post-surgery physiotherapy cost at R3BOOT?',
    answer: `A ${PHYSIO_SESSION_MINUTES}-minute physiotherapy session at R3BOOT is ${PHYSIO_PRICE_LABEL}. Your first session covers the full assessment and your first treatment. Call or WhatsApp +91 97023 68612 to book.`,
  },
  {
    question: 'Do I really need physiotherapy after knee replacement or ACL surgery?',
    answer:
      'Yes, for most people. The operation replaces or repairs the joint, but it does not bring back the bend, the thigh strength or the walking pattern you lost before and after surgery. Without guided rehab, many people are left with a stiff knee, a limp or a joint they do not trust. Physiotherapy is how the result of the surgery turns into a knee that works.',
  },
  {
    question: 'Will you follow my surgeon\'s rehab protocol?',
    answer:
      'Yes. Your surgeon\'s protocol leads, and we work inside it. It sets what is allowed and when, for example how much weight you can put through the leg, how far the joint may bend, or how long the sling stays on. Our job is to get you to each of those milestones safely, and to tell you clearly when something is not progressing as expected so you can take it back to your surgeon. Bring the protocol or your discharge papers to the first visit.',
  },
  {
    question: 'When can I start outpatient physiotherapy after surgery?',
    // CLINICAL REVIEW: timing of outpatient start after common orthopaedic surgeries.
    answer:
      'Usually within the first one to two weeks, once you are home and your surgeon is happy for you to start. Many people begin exercises in hospital and then continue with outpatient rehab. If you are unsure, check your discharge summary or call us and we will tell you what to ask your surgeon.',
  },
  {
    question: 'How many sessions will I need after surgery?',
    // CLINICAL REVIEW: typical rehab durations by operation (joint replacement 6 to 12 weeks; ACL 9 months or more to cutting and pivoting sport).
    answer:
      'It depends on the operation. After a knee or hip replacement, most people need regular sessions over roughly 6 to 12 weeks, with more done at home as they improve. ACL reconstruction takes longer: rehab usually runs for several months, and most guidelines advise at least 9 months before returning to sports that involve twisting and landing, with your surgeon making the final call. You get your own estimate after the first assessment, and we review it at each phase.',
  },
  {
    question: 'What should I bring to my first post-surgery physiotherapy session?',
    answer:
      'Bring your discharge summary, the operation notes if you have them, your surgeon\'s rehab protocol or list of restrictions, and any X-rays or scans. No referral is needed to book. Wear loose clothing that lets us see the operated joint, and bring your walker, stick or brace if you are using one.',
  },
  {
    question: 'What does total knee replacement physiotherapy focus on?',
    // CLINICAL REVIEW: TKR rehab priorities (extension first, then flexion, quadriceps, gait).
    answer:
      'Mainly four things: getting the knee fully straight, getting it to bend enough for stairs and getting up from a chair, rebuilding thigh (quadriceps) strength, and walking without a walker or stick. Early sessions also work on settling swelling. Getting the knee straight early matters, because a knee that stays slightly bent tends to cause a limp later.',
  },
  {
    question: 'Are there movements I should avoid after a hip replacement?',
    // CLINICAL REVIEW: hip precautions vary by surgical approach and surgeon.
    answer:
      'Possibly, and your surgeon decides which. Some hip replacements come with movement precautions for the first weeks, such as limits on bending the hip deeply or crossing the legs, while others have few or none. It depends on how the operation was done. We go through your surgeon\'s instructions with you, then build walking, hip strength and balance within them.',
  },
  {
    question: 'I had surgery months ago and still have not recovered. Can physiotherapy still help?',
    answer:
      'Often, yes. Stiffness, weakness and a limp that remain months after surgery are common when rehab stopped early or never progressed beyond the first exercises. We assess where you are now, check with you about anything your surgeon has said since, and build a plan from that point. If something looks like it needs your surgeon to review it, we tell you.',
  },
]
