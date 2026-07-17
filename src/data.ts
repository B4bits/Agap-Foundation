import { Program, Testimonial, GalleryItem } from "./types";

export const PROGRAMS_DATA: Program[] = [
  {
    id: "addiction-recovery",
    title: "Addiction Recovery & Freedom",
    description: "A structured, Christ-centered transformation pathway designed to break the cycles of drug and alcohol dependency.",
    longDescription: "Our primary mission as a restoration center is guiding individuals out of the trap of substance abuse. We believe drugs and alcohol offer only an empty escape, while a personal relationship with Jesus Christ brings deep, lasting freedom. Our residential recovery curriculum combines peer accountability, disciplined schedules, physical health care, and daily spiritual study.",
    iconName: "ShieldAlert",
    benefits: [
      "Disciplined residential routine",
      "One-on-one recovery mentoring",
      "Detox support and physical wellness",
      "Daily group reflection & support circles"
    ]
  },
  {
    id: "spiritual-mentorship",
    title: "Spiritual Counseling",
    description: "Personalized biblical counseling to heal inner wounds, rebuild self-worth, and discover God's custom purpose.",
    longDescription: "Many who face addiction also carry heavy burdens of guilt, shame, and trauma. Our compassionate mentors provide individual pastoral counseling focused on scriptural truths, grace, and redemption. We walk alongside each brother and sister to help them find their ultimate identity in Christ rather than their past mistakes.",
    iconName: "HeartHandshake",
    benefits: [
      "Private scriptural counseling",
      "Guilt & shame deliverance guidance",
      "Family reconciliation mentoring",
      "Purpose and goal-setting workshops"
    ]
  },
  {
    id: "fellowship-worship",
    title: "Worship & Word Fellowship",
    description: "Vibrant community gatherings to seek the Lord, hear the Word of God, and strengthen faith together.",
    longDescription: "We gather regularly to lift up the name of Jesus and ground ourselves in His teaching. These services are the heartbeat of Agape Foundation, where the wider community, recovery participants, and families come together as one body to sing praises, share testimonies of grace, and study God's Word.",
    iconName: "Flame",
    benefits: [
      "Weekly community worship services",
      "Intercessory prayer and altar ministry",
      "Small-group Bible study modules",
      "Supportive, non-judgmental family atmosphere"
    ]
  },
  {
    id: "outreach-skills",
    title: "Community Outreach",
    description: "Equipping individuals with life skills, vocational coaching, and social support for smooth reintegration.",
    longDescription: "Re-entering society after recovery requires preparation. Agape Foundation supports participants through career planning, basic skills workshops, and peer-to-peer outreach efforts. We also conduct street awareness programs in Lalitpur and Kathmandu to offer immediate assistance to those still struggling with addiction.",
    iconName: "Sparkles",
    benefits: [
      "Vocational goal alignment",
      "Basic computer and hands-on skill courses",
      "Street hope and rescue outreaches",
      "Alumni fellowship for continuous sobriety"
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    name: "Ramesh Shrestha",
    role: "Restored Brother & Mentor",
    story: "I spent seven years trapped in severe heroin addiction, wandering the streets of Lalitpur. Everyone had given up on me. When I came to Agape Foundation, I didn't just find a treatment center—I found a family that prayed for me night and day. Through faith and intensive prayer, Jesus set me completely free. Today, I work as a recovery coordinator helping other young boys find their way back.",
    quote: "Drugs offered me a slow death, but Jesus gave me a brand new life. Agape is where my restoration began.",
    year: "Restored in 2024",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "2",
    name: "Sunita Tamang",
    role: "Mother of Graduate",
    story: "My son's alcohol abuse had torn our home apart. We tried multiple clinics, but he always relapsed. The team at Agape Foundation welcomed us with open arms. They restored my son's health and, more importantly, they restored his soul. Seeing him kneel in prayer and lead our family Bible study now is a true miracle. Our home is full of peace again.",
    quote: "Agape didn't just save my son's life; they put our broken family back together. God is truly at work here.",
    year: "Reconciled in 2025",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "3",
    name: "Prabhat Thapa",
    role: "Recovery Graduate",
    story: "I used to think my dependency on substances was my destiny. At Agape, the mentors showed me that God's plan for me is greater than any short-lived escape. The daily structure, prayer vigils, and deep scripture studies broke the spiritual chains of my addiction. I have been sober for over a year now, back in college, and living with authentic purpose.",
    quote: "I learned that I am indeed more than a conqueror through Christ who loves me. My life has a beautiful future.",
    year: "Sober since 2024",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    imageUrl: "https://images.unsplash.com/photo-1510563800743-aed236490d08?auto=format&fit=crop&q=80&w=800",
    caption: "Lifting our hands in united worship during our weekly fellowship gathering.",
    category: "Worship"
  },
  {
    id: "g2",
    imageUrl: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80&w=800",
    caption: "A supportive prayer circle where we bear one another's burdens in faith.",
    category: "Fellowship"
  },
  {
    id: "g3",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    caption: "Lighting candles during our evening prayer vigil, celebrating a brother's milestone of sobriety.",
    category: "Rehab"
  },
  {
    id: "g4",
    imageUrl: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=800",
    caption: "Community outreach program in Hattiban area, sharing the message of hope and freedom.",
    category: "Outreach"
  }
];

export const CORE_VALUES = [
  {
    title: "Christ-Centered Restoration",
    description: "We hold that true, lasting deliverance from dependency comes from the redeeming work of Jesus Christ."
  },
  {
    title: "Unconditional Love (Agape)",
    description: "Every person who enters our doors, regardless of how broken they feel, is treated with absolute dignity and grace."
  },
  {
    title: "Discipline & Integrity",
    description: "We build healthy, structure-oriented habits that support lifelong physical, mental, and spiritual resilience."
  },
  {
    title: "Community & Reconciliation",
    description: "We aim to restore not just individuals, but also their broken marriages, families, and neighborhood bonds."
  }
];

export const FREQUENTLY_ASKED_QUESTIONS = [
  {
    question: "Is Agape Foundation Nepal only for Christians?",
    answer: "No, absolutely not. We open our doors to anyone suffering from drug or alcohol addiction, regardless of their background, culture, or faith. Our healing environment is built on Christ's unconditional love for all humanity."
  },
  {
    question: "What are the admission requirements for the recovery program?",
    answer: "An individual must have a genuine desire to seek help and agree to participate in our structured residential guidelines. Since we are a faith-focused program, participants are expected to take part in our spiritual exercises, prayer sessions, and group teachings."
  },
  {
    question: "How long does the restoration/rehab curriculum take?",
    answer: "Our core residential program typically spans 6 months. This allows ample time for physical detoxification, deep mental and spiritual reflection, development of clean lifestyle disciplines, and preparation for a solid reintegration into society."
  },
  {
    question: "How can we support or partner with Agape Foundation Nepal?",
    answer: "You can support us through prayer, volunteering your skills, donating basic supplies for our recovery home, or financial contributions to sponsor a brother who cannot afford the program. Contact Abhishek Oza at 981-0043570 for direct coordination."
  }
];
