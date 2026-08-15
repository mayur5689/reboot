import React from 'react';

export interface SubService {
    title: string;
    description: string;
    slug: string;
    image?: string;
}

export interface Service {
    title: string;
    tagline?: string;
    category: string;
    description: string;
    fullDescription: string;
    benefits: string[];
    image: string;
    slug: string;
    process: {
        title: string;
        description: string;
    }[];
    subServices?: SubService[];
}

export const services: Service[] = [
    {
        title: "Physiotherapy",
        category: "RECOVERY",
        description: "Expert care to restore movement and function.",
        fullDescription: "Our physiotherapy services provide expert assessment and treatment for various physical conditions. We focus on restoring movement, reducing pain, and improving overall function through evidence-based techniques, personalized exercise programs, and manual therapy.",
        benefits: [
            "Pain management",
            "Restoration of movement",
            "Injury rehabilitation",
            "Improved function",
            "Personalized exercise plans"
        ],
        process: [
            { title: "Assessment", description: "Comprehensive evaluation of your condition and goals." },
            { title: "Diagnosis", description: "Identifying the root cause and explaining the treatment plan." },
            { title: "Treatment", description: "Applying targeted manual therapy and exercises." },
            { title: "Management", description: "Ongoing support and strategy for long-term health." }
        ],
        image: "https://res.cloudinary.com/dj7bot2uc/image/upload/v1785287448/physio_zx1oxi.webp",
        slug: "physiotherapy",
        subServices: [
            {
                title: "Musculoskeletal (Orthopaedic)",
                description: "Expert treatment for bones, joints, muscles, and soft tissue injuries to restore full movement.",
                slug: "musculoskeletal-orthopaedic",
                image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Sports Physiotherapy",
                description: "Specialized care for athletes of all levels, focusing on rapid recovery and performance gain.",
                slug: "sports-physiotherapy",
                image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Chronic Pain Management",
                description: "Scientific and holistic approaches to manage long-term pain and improve quality of life.",
                slug: "chronic-pain-management",
                image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Pre & Post-Surgery Rehabilitation",
                description: "Comprehensive recovery programs to prepare your body and ensure optimal surgical outcomes.",
                slug: "pre-post-surgery-rehabilitation",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Biomechanical Assessment",
                description: "Detailed analysis of your movement patterns to identify imbalances and prevent future injuries.",
                slug: "biomechanical-assessment",
                image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Women's Health",
                description: "Dedicated care for pelvic floor health, prenatal support, and postnatal recovery.",
                slug: "womens-health",
                image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Ergonomic Advice & Management",
                description: "Workplace workstation optimization and posture guidance to eliminate occupational strain.",
                slug: "ergonomic-advice-management",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
            }
        ]
    },
    {
        title: "Clinical Pilates",
        tagline: "From Pain to Performance",
        category: "FITNESS",
        description: "Clinical Pilates is a scientifically guided movement approach designed to support complete and long-term recovery, not just temporary pain relief.",
        fullDescription: "Unlike general fitness Pilates, Clinical Pilates combines the principles of traditional Pilates with physiotherapy expertise after a detailed assessment to create targeted exercise programs.",
        benefits: [
            "Strengthens the core",
            "Improves stability and posture",
            "Enhances flexibility and mobility",
            "Improves mind-body co-ordination",
            "Injury prevention"
        ],
        process: [
            { title: "Assessment & Goal setting", description: "Our physiotherapists assess your body type, deficiencies, and your profession or sport (e.g. if you're a batsman) to build a personalised plan that supports optimal growth and performance." },
            { title: "Education and Awareness", description: "Learning the fundamentals of movement and core engagement." },
            { title: "Integration phase on mat or reformer", description: "Applying principles through controlled exercises on specialized equipment." },
            { title: "Functional sport-specific training", description: "Tailoring movements to your specific athletic or daily needs." },
            { title: "Re-assessment and modification", description: "Continuously refining the program based on your progress." }
        ],
        image: "https://res.cloudinary.com/dj7bot2uc/image/upload/v1785287449/Pilates_hogzmt.webp",
        slug: "clinical-pilates"
    },
    {
        title: "Contrast Therapy",
        category: "THERAPY",
        description: "Alternating Infrared Sauna and Ice Bath for circulation, resilience, and faster recovery at R3BOOT Dadar.",
        fullDescription: "Welcome to R3BOOT. Our Contrast Therapy combines Infrared Sauna (hot phase) and Ice Bath (cold phase) to accelerate healing, improve mood, reduce anxiety, and build stress resilience. Alternating between heat and cold trains your autonomic nervous system and is used by elite athletes worldwide for recovery.",
        benefits: [
            "Boosted Immunity system",
            "Improved cardiovascular health (Increases HR)",
            "Promotes relaxation by releasing endorphins",
            "Causes Vasodilation – increases blood flow",
            "Detoxification through sweating",
            "Anti-aging (reduced wrinkles)"
        ],
        process: [
            { title: "Preparation", description: "Preparing the body for rapid temperature changes." },
            { title: "Hot Phase, Infrared Sauna", description: "Infrared sauna: vasodilation phase to increase circulation and relax muscles." },
            { title: "Cold Phase, Ice Bath", description: "Ice bath: vasoconstriction phase to reduce inflammation and flush toxins." },
            { title: "Recovery", description: "Allowing the body to return to homeostatic balance." }
        ],
        image: "https://res.cloudinary.com/dj7bot2uc/image/upload/v1785287448/Contrast_bton9w.webp",
        slug: "contrast-therapy"
    },
    {
        title: "Aqua Therapy",
        category: "THERAPY",
        description: "Recovery through the therapeutic power of water.",
        fullDescription: "Aqua Therapy harnesses the healing properties of water to accelerate recovery and improve physical function. Our state-of-the-art aqua therapy pool provides a low-impact environment perfect for rehabilitation, pain relief, and improving mobility without putting stress on your joints.",
        benefits: [
            "Low-impact rehabilitation",
            "Reduced joint stress",
            "Improved circulation",
            "Enhanced muscle relaxation",
            "Accelerated recovery"
        ],
        process: [
            { title: "Consultation", description: "Checking your suitability for water-based therapy." },
            { title: "Acclimatization", description: "Getting comfortable with the pool environment and water temperature." },
            { title: "Active Recovery", description: "Guided movements and exercises performed in the water." },
            { title: "Cool Down", description: "Gentle stretches and relaxation to finish the session." }
        ],
        image: "https://res.cloudinary.com/dj7bot2uc/image/upload/v1785287448/Aqua_twpd5v.webp",
        slug: "aqua-therapy"
    },
    {
        title: "Sports Massage",
        category: "MASSAGE",
        description: "Performance-driven relief for athletes.",
        fullDescription: "Our sports massage therapy is designed specifically for athletes and active individuals. Using specialized techniques, we help improve flexibility, prevent injuries, and enhance athletic performance while providing relief from muscle tension and fatigue.",
        benefits: [
            "Improved flexibility",
            "Injury prevention",
            "Enhanced performance",
            "Muscle tension relief",
            "Faster recovery between training"
        ],
        process: [
            { title: "Warm-up", description: "Preparing the tissues for deeper pressure." },
            { title: "Targeted Work", description: "Focusing on specific areas of tension or previous injury." },
            { title: "Release", description: "Techniques to break down adhesions and improve muscle fiber alignment." },
            { title: "Flush", description: "Effleurage to finish and promote lymphatic drainage." }
        ],
        image: "https://res.cloudinary.com/dj7bot2uc/image/upload/v1785287448/massage_r0f3jo.webp",
        slug: "sports-massage"
    },
    {
        title: "Mental Training",
        tagline: "Stronger Mind, Better Performance",
        category: "MENTAL",
        description: "Integrated sports psychology and counselling for pressure, focus, injury psychology, and mental training — one service for athletes and high performers.",
        fullDescription: "Sports performance is not physical alone. At R3BOOT, sports psychology and counselling run as one mental performance service. Build focus, composure, and competition routines while also addressing injury anxiety, burnout, motivation, and learning to trust your body again — coordinated with physiotherapy when rehab is involved.",
        benefits: [
            "Enhanced mental focus under pressure",
            "Performance anxiety management",
            "Injury psychology & return-to-sport trust",
            "Confidence and habit building",
            "Emotional resilience alongside physical rehab"
        ],
        process: [
            { title: "Assessment & goal setting", description: "Identifying mental blocks, emotional load, and performance triggers." },
            { title: "Skill building & practice", description: "Imagery, focus, self-talk, and emotional regulation practised for real scenarios." },
            { title: "Integration with training / rehab", description: "Carrying tools into practice, competition, or physiotherapy." },
            { title: "Review & refine", description: "Tracking composure and confidence as pressure or return-to-sport increases." }
        ],
        image: "/images/hero/r3boot-counselling.png",
        slug: "mental-training"
    },
    {
        title: "Athlete Screening",
        tagline: "Know Your Body. Own Your Game.",
        category: "ASSESSMENT",
        description: "A full-body, evidence-based screening that maps your injury risk and performance ceiling before either one catches you off guard.",
        fullDescription: "Athlete Screening at R3BOOT is a structured, evidence-based assessment that reads your body the way a coach reads game film. We take your sports history, injury history, and goals, then run you through a full musculoskeletal exam, gait analysis, special tests, and a coordination battery. You walk out with a clear performance report and a plan: what to fix before it becomes an injury, and what to load before it becomes a limiter.",
        benefits: [
            "Full injury risk profile before it becomes an injury",
            "Gait analysis, mobility, and stability mapped in one session",
            "Personalised Recovery & Performance Plan",
            "Sport-specific evaluation, not a generic checklist",
            "Baseline benchmarks to track progress over time",
            "Direct line into R3BOOT's recovery and training programs"
        ],
        process: [
            { title: "History & Goals", description: "Sports background, training load, injury history, and where you want to be." },
            { title: "MSK & Movement Exam", description: "Range of motion, flexibility, and gait analysed joint by joint." },
            { title: "Special Tests", description: "Balance, strength, and sport-specific tests that expose what you can't feel yet." },
            { title: "Risk Summary & Plan", description: "A clinician-built report on your risk factors, with a program to close the gaps." }
        ],
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
        slug: "athlete-screening"
    },
];
