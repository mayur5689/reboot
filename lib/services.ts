import React from 'react';

export interface SubService {
    title: string;
    description: string;
    slug: string;
    image?: string;
}

export interface Service {
    title: string;
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
        image: "/images/service/Services_image/Physiotherapy_1.webp",
        slug: "physiotherapy",
        subServices: [
            {
                title: "Musculoskeletal (Orthopaedic)",
                description: "Expert treatment for bones, joints, muscles, and soft tissue injuries to restore full movement.",
                slug: "musculoskeletal-orthopaedic",
                image: "https://images.unsplash.com/photo-1576091160399-112f62779836?auto=format&fit=crop&q=80&w=800"
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
                image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800"
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
                image: "https://images.unsplash.com/photo-1536939459926-301728717817?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Women's Health",
                description: "Dedicated care for pelvic floor health, prenatal support, and postnatal recovery.",
                slug: "womens-health",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Ergonomic Advice & Management",
                description: "Workplace workstation optimization and posture guidance to eliminate occupational strain.",
                slug: "ergonomic-advice-management",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
            }
        ]
    },
    {
        title: "Clinical Pilates",
        category: "FITNESS",
        description: "Train with control, precision, and stability.",
        fullDescription: "Clinical Pilates combines the principles of traditional Pilates with physiotherapy expertise to create targeted exercise programs. Focus on core stability, postural alignment, and controlled movements to rehabilitate injuries, prevent future problems, and enhance overall body awareness.",
        benefits: [
            "Core strength development",
            "Improved posture",
            "Enhanced flexibility",
            "Better body control",
            "Injury prevention"
        ],
        process: [
            { title: "Foundation", description: "Learning the core principles of control and breathing." },
            { title: "Stability", description: "Building strength in the deep stabilizing muscles." },
            { title: "Mobility", description: "Integrating strength with functional movement patterns." },
            { title: "Integration", description: "Applying Pilates principles to daily activities." }
        ],
        image: "/images/service/Services_image/Clinical Pilates-2.webp",
        slug: "clinical-pilates"
    },
    {
        title: "Contrast Therapy",
        category: "THERAPY",
        description: "Alternating hot and cold exposure for optimal recovery.",
        fullDescription: "Contrast therapy alternates between hot and cold treatments to stimulate blood flow, reduce inflammation, and accelerate muscle recovery. This powerful technique is used by elite athletes worldwide to enhance performance and speed up the healing process.",
        benefits: [
            "Enhanced blood circulation",
            "Reduced muscle soreness",
            "Faster recovery",
            "Decreased inflammation",
            "Improved performance"
        ],
        process: [
            { title: "Preparation", description: "Preparing the body for rapid temperature changes." },
            { title: "Hot Phase", description: "Vasodilation phase to increase circulation and relax muscles." },
            { title: "Cold Phase", description: "Vasoconstriction phase to reduce inflammation and flush toxins." },
            { title: "Recovery", description: "Allowing the body to return to homeostatic balance." }
        ],
        image: "/images/service/Services_image/Contrast_Therepy.webp",
        slug: "contrast-therapy"
    },
    {
        title: "Counselling & Mental Training",
        category: "MENTAL",
        description: "Stronger mind, better you.",
        fullDescription: "Our counselling and mental training services provide comprehensive support for your psychological well-being. Whether you're dealing with stress, anxiety, or simply want to optimize your mental performance, our experienced counsellors offer personalized guidance and evidence-based techniques.",
        benefits: [
            "Stress management",
            "Emotional resilience",
            "Personal growth",
            "Work-life balance",
            "Mental wellness optimization"
        ],
        process: [
            { title: "Discovery", description: "Exploring the root causes of stress or mental fatigue." },
            { title: "Insight", description: "Gaining a deeper understanding of patterns and behaviors." },
            { title: "Action Plan", description: "Creating practical steps for positive change." },
            { title: "Sustainable Growth", description: "Ensuring long-term mental health and resilience." }
        ],
        image: "/images/service/Services_image/Counselling & Mental Training-1.webp",
        slug: "counselling-mental-training"
    },
    {
        title: "Hydrotherapy",
        category: "THERAPY",
        description: "Recovery through the therapeutic power of water.",
        fullDescription: "Hydrotherapy harnesses the healing properties of water to accelerate recovery and improve physical function. Our state-of-the-art hydrotherapy pool provides a low-impact environment perfect for rehabilitation, pain relief, and improving mobility without putting stress on your joints.",
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
        image: "/images/service/Services_image/Hydrotherapy_!.webp",
        slug: "hydrotherapy"
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
        image: "/images/service/Services_image/Sports Massage_1.webp",
        slug: "sports-massage"
    },
    {
        title: "Sports Psychology",
        category: "MENTAL",
        description: "Train your mind to achieve peak performance.",
        fullDescription: "Sports psychology focuses on the mental aspects of athletic performance. Our expert psychologists help you develop mental resilience, focus, and confidence to perform at your best when it matters most. Overcome performance anxiety, build winning habits, and unlock your full potential.",
        benefits: [
            "Enhanced mental focus",
            "Performance anxiety management",
            "Goal setting strategies",
            "Confidence building",
            "Mental resilience training"
        ],
        process: [
            { title: "Analysis", description: "Identifying mental blocks and performance triggers." },
            { title: "Strategy", description: "Developing mental tools like imagery and self-talk." },
            { title: "Practice", description: "Applying mental strategies during training sessions." },
            { title: "Competition", description: "Executing mental skills under high-pressure scenarios." }
        ],
        image: "/images/service/Services_image/Sports_Pyscology.webp",
        slug: "sports-psychology"
    },
];
