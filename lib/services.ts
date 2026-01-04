import React from 'react';

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
}

export const services: Service[] = [
    {
        title: "Physiotherapy",
        category: "THERAPY",
        description: "Restoring movement and strength through personalized rehabilitation programs.",
        fullDescription: "Our physiotherapy services focus on restoring your body's natural movement patterns and building strength through evidence-based rehabilitation techniques. Our expert physiotherapists work with you to create personalized treatment plans that address your specific needs, whether you're recovering from an injury, managing a chronic condition, or looking to optimize your physical performance.",
        benefits: [
            "Personalized treatment plans",
            "Evidence-based rehabilitation",
            "Injury prevention strategies",
            "Movement optimization",
            "Pain management techniques"
        ],
        process: [
            { title: "Assessment", description: "Comprehensive evaluation of your current condition and movement patterns." },
            { title: "Planning", description: "Development of a personalized treatment road-map tailored to your goals." },
            { title: "Treatment", description: "Hands-on therapy and guided exercises to restore function." },
            { title: "Review", description: "Ongoing evaluation and adjustment of your plan for optimal results." }
        ],
        image: "/images/1.jpg",
        slug: "physiotherapy"
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
        image: "/images/2.jpg",
        slug: "hydrotherapy"
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
        image: "/images/3.jpg",
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
        image: "/images/4.jpg",
        slug: "contrast-therapy"
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
        image: "/images/5.jpg",
        slug: "sports-massage"
    },
    {
        title: "Deep Tissue Massage",
        category: "MASSAGE",
        description: "Release deep tension and move freely.",
        fullDescription: "Deep tissue massage targets the deeper layers of muscle and connective tissue to release chronic tension patterns. This intensive therapy helps break down scar tissue, improve range of motion, and provide lasting relief from persistent muscle pain.",
        benefits: [
            "Chronic pain relief",
            "Scar tissue breakdown",
            "Improved range of motion",
            "Stress reduction",
            "Better posture"
        ],
        process: [
            { title: "Initial Touch", description: "Assessing the layers of muscle tension." },
            { title: "Layered Pressure", description: "Gradually working into deeper tissues without causing guarding." },
            { title: "Focused Release", description: "Sustained pressure on specific trigger points." },
            { title: "Integration", description: "Broad strokes to integrate the work back into the whole body." }
        ],
        image: "/images/6.jpg",
        slug: "deep-tissue-massage"
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
        image: "/images/1.jpg",
        slug: "sports-psychology"
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
        image: "/images/2.jpg",
        slug: "counselling-&-mental-training"
    },
];
