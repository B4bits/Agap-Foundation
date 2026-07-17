export interface ProgramTranslation {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  benefits: string[];
}

export interface TestimonialTranslation {
  id: string;
  name: string;
  role: string;
  story: string;
  quote: string;
  year: string;
  avatarUrl: string;
}

export interface GalleryItemTranslation {
  id: string;
  imageUrl: string;
  caption: string;
  category: "Worship" | "Rehab" | "Fellowship" | "Outreach";
}

export interface CoreValueTranslation {
  title: string;
  description: string;
}

export interface FAQTranslation {
  question: string;
  answer: string;
}

export const PROGRAMS_TRANSLATED: Record<"en" | "ne", ProgramTranslation[]> = {
  en: [
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
  ],
  ne: [
    {
      id: "addiction-recovery",
      title: "दुर्व्यसनीबाट मुक्ति र स्वतन्त्रता",
      description: "लागुऔषध र मदिराको कुलत तोड्नका लागि तयार पारिएको ख्रीष्ट-केन्द्रित रूपान्तरण मार्ग।",
      longDescription: "हाम्रो मुख्य उद्देश्य भनेको व्यक्तिहरूलाई पदार्थको दुर्व्यसनीको जालबाट बाहिर निकाल्नु हो। हामी विश्वास गर्छौं कि लागुऔषध र रक्सीले केवल क्षणिक र खाली छुटकारा दिन्छ, जबकि येशू ख्रीष्टसँगको व्यक्तिगत सम्बन्धले गहिरो र दिगो स्वतन्त्रता ल्याउँछ। हाम्रो आवासीय पुनर्स्थापना पाठ्यक्रममा अनुशासन, नियमित तालिका, शारीरिक स्वास्थ्य सेवा, र दैनिक आध्यात्मिक अध्ययन समावेश छ।",
      iconName: "ShieldAlert",
      benefits: [
        "अनुशासित आवासीय दैनिक जीवन",
        "व्यक्तिगत पुनर्स्थापना मार्गदर्शन",
        "डिटक्स समर्थन र शारीरिक कल्याण",
        "दैनिक सामूहिक चिन्तन र सहायता समूह"
      ]
    },
    {
      id: "spiritual-mentorship",
      title: "आध्यात्मिक परामर्श",
      description: "भित्री चोटहरू निको पार्न, आत्म-सम्मान पुनर्निर्माण गर्न र परमेश्वरको उद्देश्य पत्ता लगाउन व्यक्तिगत बाइबल परामर्श।",
      longDescription: "दुर्व्यसनीको सामना गर्ने धेरै व्यक्तिहरूले अपराधबोध, लाज र मानसिक चोटको भारी बोकेका हुन्छन्। हाम्रा दयालु सल्लाहकारहरूले धर्मशास्त्रीय सत्य, अनुग्रह र मुक्तिमा ध्यान केन्द्रित गर्दै व्यक्तिगत गोठालो परामर्श प्रदान गर्छन्। हामी प्रत्येक दाजुभाइ र दिदीबहिनीलाई उनीहरूको विगतका गल्तीहरूको सट्टा ख्रीष्टमा आफ्नो वास्तविक पहिचान पाउन मद्दत गर्छौं।",
      iconName: "HeartHandshake",
      benefits: [
        "व्यक्तिगत धर्मशास्त्रीय परामर्श",
        "अपराधबोध र लाजबाट मुक्तिको मार्गदर्शन",
        "पारिवारिक मेलमिलाप परामर्श",
        "उद्देश्य र लक्ष्य निर्धारण कार्यशालाहरू"
      ]
    },
    {
      id: "fellowship-worship",
      title: "आराधना र संगति",
      description: "प्रभुको खोजी गर्न, परमेश्वरको जीवित वचन सुन्न र सँगै विश्वास बलियो बनाउन जीवन्त सामुदायिक जमघट।",
      longDescription: "हामी येशूको नाम उच्च पार्न र उहाँको शिक्षामा आफूलाई स्थापित गर्न नियमित रूपमा भेला हुन्छौं। यी सेवाहरू अगापे फाउन्डेसनको मुटुको धड्कन हुन्, जहाँ व्यापक समुदाय, पुनर्स्थापनाका सहभागीहरू, र परिवारहरू प्रशंसा गाउन, अनुग्रहको गवाही बाँड्न, र परमेश्वरको वचन अध्ययन गर्न एकै शरीरको रूपमा भेला हुन्छन्।",
      iconName: "Flame",
      benefits: [
        "साप्ताहिक सामुदायिक आराधना सेवाहरू",
        "मध्यस्थता प्रार्थना र वेदी सेवकाई",
        "साना-समूह बाइबल अध्ययन मोड्युलहरू",
        "सहयोगी, पूर्वाग्रह-रहित पारिवारिक वातावरण"
      ]
    },
    {
      id: "outreach-skills",
      title: "सामुदायिक सेवा तथा आउटरिच",
      description: "समाजमा सहज पुनर्मिलनका लागि जीवन उपयोगी सीप, व्यावसायिक कोचिङ, र सामाजिक सहयोग।",
      longDescription: "पुनर्स्थापना पछि समाजमा पुन: प्रवेश गर्न तयारी आवश्यक पर्छ। अगापे फाउन्डेसनले सहभागीहरूलाई करियर योजना, आधारभूत सीप कार्यशालाहरू, र आउटरिच प्रयासहरू मार्फत सहयोग गर्दछ। हामी ललितपुर र काठमाडौंका सडकहरूमा अझै पनि कुलतसँग संघर्ष गरिरहेकाहरूलाई तुरुन्त सहयोग प्रस्ताव गर्न सचेतना कार्यक्रमहरू पनि सञ्चालन गर्छौं।",
      iconName: "Sparkles",
      benefits: [
        "व्यावसायिक लक्ष्य निर्धारण",
        "आधारभूत कम्प्युटर र व्यावहारिक सीप कक्षाहरू",
        "सडक चेतना र उद्धार सेवा",
        "दिगो sobriety का लागि पूर्व-सहभागी संगति"
      ]
    }
  ]
};

export const TESTIMONIALS_TRANSLATED: Record<"en" | "ne", TestimonialTranslation[]> = {
  en: [
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
  ],
  ne: [
    {
      id: "1",
      name: "रमेश श्रेष्ठ",
      role: "पुनर्स्थापित भाइ र सल्लाहकार",
      story: "मैले सात वर्ष गम्भीर हेरोइनको दुर्व्यसनीमा फसेर ललितपुरको सडकमा बिताएँ। सबैले मलाई आश मारिसकेका थिए। जब म अगापे फाउन्डेसनमा आएँ, मैले उपचार केन्द्र मात्र पाइनँ—मैले एउटा परिवार पाएँ जसले मेरो लागि दिनरात प्रार्थना गर्यो। विश्वास र अथक प्रार्थनाद्वारा, येशूले मलाई पूर्ण रूपमा स्वतन्त्र पार्नुभयो। आज, म अन्य युवाहरूलाई कुलतबाट फर्काउन मद्दत गर्दै पुनर्स्थापना संयोजकको रूपमा काम गर्छु।",
      quote: "लागुऔषधले मलाई ढिलो मृत्यु दिइरहेको थियो, तर येशूले मलाई नयाँ जीवन दिनुभयो। अगापे नै मेरो पुनर्स्थापना सुरु भएको ठाउँ हो।",
      year: "२०२४ मा पुनर्स्थापित",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: "2",
      name: "सुनिता तामाङ",
      role: "ग्रेजुएटको आमा",
      story: "मेरो छोराको अत्यधिक मदिरा सेवनले हाम्रो घर बर्बाद बनाएको थियो। हामीले धेरै क्लिनिकहरू प्रयास गर्यौं, तर उनी सधैं पुरानै बानीमा फर्कन्थे। अगापे फाउन्डेसनको टोलीले हामीलाई न्यानो स्वागत गर्यो। उनीहरूले मेरो छोराको स्वास्थ्य र अझ महत्त्वपूर्ण कुरा, उसको आत्मालाई पुनर्स्थापित गरे। आज उसलाई घुँडा टेकेर प्रार्थना गरेको र हाम्रो पारिवारिक बाइबल अध्ययनको नेतृत्व गरेको देख्नु एउटा साँचो चमत्कार हो। हाम्रो घर फेरि शान्तिले भरिएको छ।",
      quote: "अगापेले मेरो छोराको ज्यान मात्र बचाएन; उनीहरूले हाम्रो टुटेको परिवारलाई फेरि जोडिदिए। परमेश्वर साँच्चै यहाँ कार्यरत हुनुहुन्छ।",
      year: "२०२५ मा पुनर्मिलन",
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: "3",
      name: "प्रभाथ थापा",
      role: "पुनर्स्थापना ग्रेजुएट",
      story: "म सोच्ने गर्थेँ कि पदार्थहरूमा मेरो निर्भरता नै मेरो भाग्य हो। अगापेमा, सल्लाहकारहरूले मलाई देखाए कि मेरो लागि परमेश्वरको योजना कुनै पनि क्षणिक आनन्द वा नशाभन्दा महान् छ। दैनिक संरचना, प्रार्थना सभा र गहिरो धर्मशास्त्र अध्ययनले मेरो कुलतको आध्यात्मिक साङ्लोलाई तोडिदियो। म अहिले एक वर्षभन्दा बढी समयदेखि कुलतमुक्त छु, कलेज फर्किएको छु र साँचो उद्देश्यका साथ बाँचिरहेको छु।",
      quote: "मैले सिकें कि मलाई प्रेम गर्नुहुने ख्रीष्टद्वारा म साँच्चै नै विजयीहरूभन्दा पनि महान् छु। मेरो जीवनको सुन्दर भविष्य छ।",
      year: "२०२४ देखि कुलतमुक्त",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    }
  ]
};

export const GALLERY_TRANSLATED: Record<"en" | "ne", GalleryItemTranslation[]> = {
  en: [
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
  ],
  ne: [
    {
      id: "g1",
      imageUrl: "https://images.unsplash.com/photo-1510563800743-aed236490d08?auto=format&fit=crop&q=80&w=800",
      caption: "हाम्रो साप्ताहिक संगतिको समयमा संयुक्त आरधनामा हातहरू उठाउँदै।",
      category: "Worship"
    },
    {
      id: "g2",
      imageUrl: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80&w=800",
      caption: "एउटा सहयोगी प्रार्थना घेरा जहाँ हामी विश्वासमा एकअर्काको भारी बोक्छौं।",
      category: "Fellowship"
    },
    {
      id: "g3",
      imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
      caption: "साँझको प्रार्थना सभामा मैनबत्ती बाल्दै, एक भाइको कुलतमुक्ति सफलता उत्सव मनाउँदै।",
      category: "Rehab"
    },
    {
      id: "g4",
      imageUrl: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=800",
      caption: "हात्तीवन क्षेत्रमा सामुदायिक आउटरिच कार्यक्रम, आशा र स्वतन्त्रताको सन्देश बाँड्दै।",
      category: "Outreach"
    }
  ]
};

export const CORE_VALUES_TRANSLATED: Record<"en" | "ne", CoreValueTranslation[]> = {
  en: [
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
  ],
  ne: [
    {
      title: "ख्रीष्ट-केन्द्रित पुनर्स्थापना",
      description: "हामी विश्वास गर्छौं कि कुलतबाट वास्तविक र दिगो मुक्ति येशू ख्रीष्टको उद्धार कार्यबाट मात्र आउँछ।"
    },
    {
      title: "बिनाशर्त प्रेम (अगापे)",
      description: "हाम्रो ढोकामा प्रवेश गर्ने प्रत्येक व्यक्तिलाई, उनीहरू जतिसुकै टुटेको महसुस गरे तापनि, पूर्ण सम्मान र अनुग्रहका साथ व्यवहार गरिन्छ।"
    },
    {
      title: "अनुशासन र इमानदारिता",
      description: "हामी स्वस्थ, संरचना-उन्मुख बानीहरू निर्माण गर्छौं जसले आजीवन शारीरिक, मानसिक र आध्यात्मिक सहनशीलतालाई समर्थन गर्दछ।"
    },
    {
      title: "समुदाय र मेलमिलाप",
      description: "हाम्रो उद्देश्य केवल व्यक्तिहरूलाई मात्र होइन, तर तिनीहरूका टुटेका वैवाहिक सम्बन्ध, परिवार र छरछिमेकीहरूलाई पनि पुनर्स्थापित गर्नु हो।"
    }
  ]
};

export const FAQ_TRANSLATED: Record<"en" | "ne", FAQTranslation[]> = {
  en: [
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
  ],
  ne: [
    {
      question: "के अगापे फाउन्डेसन नेपाल केवल इसाईहरूका लागि मात्र हो?",
      answer: "होइन, बिल्कुल होइन। हामी लागुऔषध वा मदिराको दुर्व्यसनीबाट पीडित जो कोहीलाई पनि स्वागत गर्दछौं, चाहे उनीहरूको पृष्ठभूमि, संस्कृति वा धर्म जुनसुकै होस्। हाम्रो निको पार्ने वातावरण सम्पूर्ण मानवजातिका लागि ख्रीष्टको बिनाशर्त प्रेममा आधारित छ।"
    },
    {
      question: "पुनर्स्थापना कार्यक्रममा भर्ना हुनका लागि के-कस्ता आवश्यकताहरू छन्?",
      answer: "व्यक्तिमा मद्दत खोज्ने वास्तविक इच्छा हुनुपर्छ र हाम्रो अनुशासित आवासीय निर्देशनहरू पालना गर्न सहमत हुनुपर्छ। हामी विश्वासमा आधारित कार्यक्रम भएकाले सहभागीहरूले आध्यात्मिक अभ्यास, प्रार्थना सभा र समूह शिक्षाहरूमा भाग लिनुपर्नेछ।"
    },
    {
      question: "पुनर्स्थापना/सुधार पाठ्यक्रम पूरा हुन कति समय लाग्छ?",
      answer: "हाम्रो मुख्य आवासीय कार्यक्रम सामान्यतया ६ महिनाको हुन्छ। यसले शारीरिक डिटक्सिफिकेशन, गहिरो मानसिक र आध्यात्मिक चिन्तन, सफा जीवनशैलीको विकास, र समाजमा पुनर्मिलनको लागि पर्याप्त समय प्रदान गर्दछ।"
    },
    {
      question: "हामीले अगापे फाउन्डेसन नेपाललाई कसरी सहयोग वा साझेदारी गर्न सक्छौं?",
      answer: "तपाईंले हामीलाई प्रार्थना, आफ्नो सीप प्रयोग गरी स्वयंसेवा गरेर, हाम्रो पुन:स्थापना गृहको लागि आधारभूत सामग्रीहरू दान गरेर वा विपन्न दाजुभाइको उपचार प्रायोजनका लागि आर्थिक सहयोग गरेर मद्दत गर्न सक्नुहुन्छ। प्रत्यक्ष समन्वयका लागि अभिषेक ओझालाई ९८१-००४३५७० मा सम्पर्क गर्नुहोस्।"
    }
  ]
};

export const UI_TRANSLATIONS = {
  // Navigation & Branding
  brand_name: {
    en: "AGAPE FOUNDATION",
    ne: "अगापे फाउन्डेसन"
  },
  brand_sub: {
    en: "Nepal • Estd. 2024",
    ne: "नेपाल • स्थापित २०२४"
  },
  nav_home: {
    en: "Home",
    ne: "गृहपृष्ठ"
  },
  nav_mission: {
    en: "Our Mission",
    ne: "हाम्रो लक्ष्य"
  },
  nav_programs: {
    en: "Restoration Programs",
    ne: "पुनर्स्थापना कार्यक्रमहरू"
  },
  nav_testimonials: {
    en: "Stories of Faith",
    ne: "आस्थाका कथाहरू"
  },
  nav_gallery: {
    en: "Gallery",
    ne: "ग्यालेरी"
  },
  nav_faq: {
    en: "FAQ",
    ne: "प्रश्नोत्तर"
  },
  nav_contact: {
    en: "Submit Prayer",
    ne: "प्रार्थना बुझाउनुहोस्"
  },
  lead_mentor_label: {
    en: "Abhishek Oza, Lead Mentor",
    ne: "अभिषेक ओझा, मुख्य सल्लाहकार"
  },

  // Hero Section
  hero_est: {
    en: "ESTABLISHED 2024 • LALITPUR, NEPAL",
    ne: "स्थापित २०२४ • ललितपुर, नेपाल"
  },
  hero_title_1: {
    en: "We are more than",
    ne: "हामी विजयीहरूभन्दा पनि"
  },
  hero_title_2: {
    en: "conquerors...",
    ne: "महान् छौँ..."
  },
  hero_citation: {
    en: "— ROMANS 8:37",
    ne: "— रोमी ८:३७"
  },
  hero_slogan: {
    en: '"Find Redemption in Faith, Restoration in Prayer and Renewal in CHRIST."',
    ne: '"विश्वासमा मुक्ति, प्रार्थनामा पुनर्स्थापना र ख्रीष्टमा नयाँ जीवन पाउनुहोस्।"'
  },
  hero_description: {
    en: "Drugs and alcohol offer empty escape, but only Jesus gives true freedom. You were made for more. God's purpose is greater than any high.",
    ne: "लागुऔषध र रक्सीले केवल खाली छुटकारा दिन्छ, तर येशूले मात्र साँचो स्वतन्त्रता दिनुहुन्छ। तपाईंको सृष्टि महान् उद्देश्यका लागि भएको हो। परमेश्वरको उद्देश्य कुनै पनि नशाभन्दा ठूलो छ।"
  },
  hero_btn_explore: {
    en: "Explore Programs",
    ne: "कार्यक्रमहरू हेर्नुहोस्"
  },
  hero_btn_prayer: {
    en: "Request Prayer",
    ne: "प्रार्थना अनुरोध गर्नुहोस्"
  },
  hero_scroll: {
    en: "Scroll to Enter",
    ne: "प्रवेश गर्न तल जानुहोस्"
  },

  // About Section
  about_tag: {
    en: "OUR IDENTITY",
    ne: "हाम्रो पहिचान"
  },
  about_title: {
    en: "About Agape Foundation Nepal",
    ne: "अगापे फाउन्डेसन नेपालको बारेमा"
  },
  about_desc_1_parts: {
    en_established: "Established in",
    ne_established: "सन्",
    en_restoration: "in the peaceful neighborhood of Sitapakha, Hattiban (Lalitpur), the Agape Foundation is a dedicated faith-based community ministry and drug/alcohol restoration program. We are founded on the eternal truth that no one is beyond hope, and no chain is too strong for the saving grace of Jesus Christ.",
    ne_restoration: "मा ललितपुरको हात्तीवन, सितापखाको शान्त वातावरणमा स्थापित अगापे फाउन्डेसन एक समर्पित विश्वासमा आधारित सामुदायिक मन्त्रालय र लागुऔषध/मदिरा पुनर्स्थापना कार्यक्रम हो। हामी यो अनन्त सत्यमा स्थापित छौं कि कोही पनि आशाभन्दा बाहिर छैन, र येशू ख्रीष्टको अनुग्रहका लागि कुनै पनि साङ्लो बलियो छैन।"
  },
  about_quote: {
    en: '"Our name, Agape, refers to the highest form of love—God\'s unconditional, self-giving love. It is this same love that drives us to stand by those facing drug dependency, offering them a sanctuary of prayer, brotherhood, and dynamic rehabilitation."',
    ne: '"हाम्रो नाम, अगापेले प्रेमको सर्वोच्च रूपलाई बुझाउँछ—परमेश्वरको बिनाशर्त र निःस्वार्थ प्रेम। यही प्रेमले नै हामीलाई लागुऔषधको दुर्व्यसनीमा परेकाहरूका लागि प्रार्थना, भ्रातृत्व र सक्रिय पुनर्स्थापनाको आश्रयस्थल प्रदान गर्न उत्प्रेरित गर्छ।"'
  },
  about_quote_author: {
    en: "— Abhishek Oza, Lead Servant",
    ne: "— अभिषेक ओझा, मुख्य सेवक"
  },
  about_desc_2: {
    en: "Many treatment centers focus strictly on chemical cleansing. While physical sobriety is vital, we address the complete human being—body, mind, and spirit. By substituting empty escapes with divine purpose, our graduates don't just stay clean; they walk out as restored husbands, sons, and pillars of their communities.",
    ne: "धेरै उपचार केन्द्रहरूले शारीरिक सफाइमा मात्र ध्यान केन्द्रित गर्छन्। शारीरिक शुद्धि महत्त्वपूर्ण भए तापनि हामी पूर्ण मानवको शरीर, मन र आत्माको उपचार गर्छौं। कुलतको क्षणिक आनन्दलाई ईश्वरीय उद्देश्यसँग बदलेर हाम्रा स्नातकहरू केवल कुलतमुक्त मात्र हुँदैनन्; तिनीहरू पुन:स्थापित पति, छोरा र आफ्नो समुदायको खम्बा बनेर निस्कन्छन्।"
  },
  about_check_1: {
    en: "Always Open Door Policy",
    ne: "सधैं खुला ढोका नीति"
  },
  about_check_2: {
    en: "Lalitpur & Kathmandu Services",
    ne: "ललितपुर र काठमाडौं सेवाहरू"
  },
  about_check_3: {
    en: "Christ-Centered Healing",
    ne: "ख्रीष्ट-केन्द्रित उपचार"
  },
  about_side_tag: {
    en: "LALITPUR SANCTUARY",
    ne: "ललितपुर आश्रम"
  },
  about_side_title: {
    en: '"We are here to serve you."',
    ne: '"हामी यहाँ तपाईंको सेवाको लागि छौं।"'
  },
  about_side_p1_title: {
    en: "The Ultimate Purpose",
    ne: "परम उद्देश्य"
  },
  about_side_p1_desc: {
    en: "Finding Christ breaks the spiritual hold of addiction, providing permanent freedom.",
    ne: "ख्रीष्टलाई पाउँदा दुर्व्यसनीको आध्यात्मिक पकड तोडिन्छ र स्थायी स्वतन्त्रता प्राप्त हुन्छ।"
  },
  about_side_p2_title: {
    en: "24/7 Lifeline Support",
    ne: "२४/७ जीवन रेखा सहायता"
  },
  about_side_p2_desc: {
    en: "Our ministry team and crisis responders are available always. No matter when you reach out, we listen.",
    ne: "हाम्रो मन्त्रालय टोली र संकट प्रतिक्रियाकर्ताहरू सधैं उपलब्ध छन्। तपाईंले जुनसुकै बेला सम्पर्क गरे पनि, हामी सुन्छौं।"
  },
  about_side_p3_title: {
    en: "Dedicated Chapel & Home",
    ne: "समर्पित प्रार्थनालय र गृह"
  },
  about_side_p3_desc: {
    en: "A serene, clean setting in Hattiban featuring prayer rooms, comfortable quarters, and shared meals.",
    ne: "हात्तीवनको शान्त र स्वच्छ वातावरणमा प्रार्थना कोठाहरू, आरामदायी कोठाहरू र सामूहिक भोजनको व्यवस्था छ।"
  },
  about_side_call_lead: {
    en: "Call Lead Officer Abhishek:",
    ne: "मुख्य संयोजक अभिषेकलाई कल गर्नुहोस्:"
  },

  // Core Values Section Title
  values_tag: {
    en: "OUR FOUNDATION",
    ne: "हाम्रो जग"
  },
  values_title: {
    en: "The Four Pillars of Our Ministry",
    ne: "हाम्रो सेवकाईका चार खम्बाहरू"
  },
  values_desc: {
    en: "At Agape Foundation Nepal, every teaching and recovery milestone is supported by these core values.",
    ne: "अगापे फाउन्डेसन नेपालमा, प्रत्येक सिकाई र सुधारका कोसेढुङ्गाहरू यी मुख्य मूल्यहरूद्वारा समर्थित छन्।"
  },

  // Programs Section
  programs_tag: {
    en: "HOW WE MINISTER & RESTORE",
    ne: "हामी कसरी सेवा र पुनर्स्थापना गर्छौं"
  },
  programs_title: {
    en: "Restoration & Support Services",
    ne: "पुनर्स्थापना र सहयोग सेवाहरू"
  },
  programs_desc: {
    en: "We offer holistic programs targeting substance dependency, spiritual depletion, and social isolation. Select any pathway below to see details.",
    ne: "हामी लागुऔषधको निर्भरता, आध्यात्मिक कमी र सामाजिक अलगावलाई लक्षित गरी समग्र कार्यक्रमहरू प्रस्ताव गर्दछौं। विवरणहरू हेर्न तल कुनै पनि मार्ग चयन गर्नुहोस्।"
  },
  programs_core_badge: {
    en: "Core Ministry",
    ne: "मुख्य मन्त्रालय"
  },
  programs_includes: {
    en: "What This Program Includes:",
    ne: "यस कार्यक्रममा समावेश कुराहरू:"
  },
  programs_show_less: {
    en: "Show Less",
    ne: "कम देखाउनुहोस्"
  },
  programs_learn_more: {
    en: "Learn Details",
    ne: "विवरणहरू सिक्नुहोस्"
  },
  programs_inquire: {
    en: "Inquire →",
    ne: "सोधपुछ गर्नुहोस् →"
  },
  programs_urgent_title: {
    en: "Do you or a loved one need urgent help?",
    ne: "के तपाईं वा तपाईंको प्रियजनलाई तुरुन्तै मद्दत चाहिन्छ?"
  },
  programs_urgent_desc: {
    en: "Do not suffer in silence. Drugs and alcohol offer false comfort, but Jesus offers a path of true restoration. Reach out immediately.",
    ne: "मौनतामा कष्ट नभोग्नुहोस्। लागुऔषध र रक्सीले झूटो सान्त्वना दिन्छन्, तर येशूले साँचो पुनर्स्थापनाको बाटो दिनुहुन्छ। तुरुन्तै सम्पर्क गर्नुहोस्।"
  },
  programs_urgent_call: {
    en: "Call +977 9810043570",
    ne: "कल गर्नुहोस् +९७७ ९८१००४३५७०"
  },
  programs_urgent_write: {
    en: "Write To Us",
    ne: "हामीलाई लेख्नुहोस्"
  },

  // Testimonials Section
  test_tag: {
    en: "MIRACLES OF RENEWAL",
    ne: "पुनर्जीवनको चमत्कार"
  },
  test_title: {
    en: "Stories of Divine Freedom",
    ne: "ईश्वरीय स्वतन्त्रताका कथाहरू"
  },
  test_desc: {
    en: "These are real experiences of brothers and families in Nepal who walked out of chemical chains into Christ's grace.",
    ne: "यी नेपालका ती दाजुभाइ र परिवारका वास्तविक अनुभवहरू हुन् जो रसायनको साङ्लोबाट बाहिर निस्केर ख्रीष्टको अनुग्रहमा प्रवेश गरे।"
  },

  // Gallery Section
  gallery_tag: {
    en: "OUR SANCTUARY IN PICTURES",
    ne: "तस्वीरहरूमा हाम्रो आश्रम"
  },
  gallery_title: {
    en: "Sanctuary Gallery",
    ne: "आश्रम ग्यालरी"
  },
  gallery_desc: {
    en: "Glimpses of our activities, support circles, and combined worship inside the Hattiban chapel.",
    ne: "हात्तीवन प्रार्थनालय भित्र हाम्रा गतिविधिहरू, समर्थन समूहहरू, र संयुक्त आराधनाका झलकहरू।"
  },
  gallery_zoom: {
    en: "Zoom Image",
    ne: "तस्वीर ठूलो पार्नुहोस्"
  },
  gallery_location_label: {
    en: "Agape Foundation Nepal Sanctuary",
    ne: "अगापे फाउन्डेसन नेपाल आश्रम"
  },

  // FAQ Section
  faq_tag: {
    en: "FAQ",
    ne: "प्रायः सोधिने प्रश्नहरू"
  },
  faq_title: {
    en: "Frequently Asked Questions",
    ne: "बारम्बार सोधिने प्रश्नहरू"
  },
  faq_desc: {
    en: "Find answers to common questions regarding admissions, faith background, and supportive roles.",
    ne: "भर्ना, धार्मिक पृष्ठभूमि, र सहयोगी भूमिकाहरू सम्बन्धी सामान्य प्रश्नहरूको जवाफ यहाँ पाउनुहोस्।"
  },
  faq_footer_text: {
    en: "Have another question not answered here? Speak directly with us. We are available 24/7.",
    ne: "यहाँ जवाफ नआएका अन्य प्रश्नहरू छन्? हामीसँग सिधै कुरा गर्नुहोस्। हामी २४/७ उपलब्ध छौं।"
  },

  // Prayer Wall Section
  prayer_tag: {
    en: "AGAPE PRAYER WALL",
    ne: "अगापे प्रार्थना भित्ता"
  },
  prayer_title: {
    en: "Communal Prayer Wall",
    ne: "सामूहिक प्रार्थना भित्ता"
  },
  prayer_desc: {
    en: '"Bear one another\'s burdens, and so fulfill the law of Christ." Our Lalitpur team gathers daily to pray over every request on this wall.',
    ne: '"एउटाले अर्कोको भारी बोक, र यसरी ख्रीष्टको व्यवस्था पूरा गर।" हाम्रो ललितपुर टोली यस भित्तामा गरिएका प्रत्येक अनुरोधहरूमा दैनिक प्रार्थना गर्न भेला हुन्छ।'
  },
  prayer_tab_wall: {
    en: "Communal Wall",
    ne: "सामूहिक भित्ता"
  },
  prayer_tab_submit: {
    en: "Place Prayer Request",
    ne: "प्रार्थना अनुरोध राख्नुहोस्"
  },
  prayer_joined_banner: {
    en: "You have joined in prayer for this request",
    ne: "तपाईंले यस अनुरोधको लागि प्रार्थनामा भाग लिनुभएको छ"
  },
  prayer_btn_join: {
    en: "Join in Prayer",
    ne: "प्रार्थनामा सामेल हुनुहोस्"
  },
  prayer_success_title: {
    en: "Prayer Placed On Wall",
    ne: "प्रार्थना भित्तामा राखियो"
  },
  prayer_success_desc: {
    en: "Your request has been added to our local virtual wall. Our Lalitpur staff team has received your spiritual burden. May God supply your renewal.",
    ne: "तपाईंको अनुरोध हाम्रो स्थानीय भित्तामा थपिएको छ। हाम्रो ललितपुरको कर्मचारी टोलीले तपाईंको आध्यात्मिक भारी प्राप्त गरेको छ। परमेश्वरले तपाईंको नयाँ जीवन आपूर्ति गरून्।"
  },
  prayer_label_name: {
    en: "Your Name (Optional)",
    ne: "तपाईंको नाम (वैकल्पिक)"
  },
  prayer_label_cat: {
    en: "Request Category",
    ne: "अनुरोध कोटी"
  },
  prayer_anon_post: {
    en: "Post anonymously on the communal wall",
    ne: "सामूहिक भित्तामा अज्ञात रूपमा पोष्ट गर्नुहोस्"
  },
  prayer_label_burden: {
    en: "What can we pray over with you?",
    ne: "हामी तपाईंसँग केका लागि प्रार्थना गर्न सक्छौं?"
  },
  prayer_placeholder_burden: {
    en: "Share your spiritual burden, struggles with dependency, or family recovery requests...",
    ne: "आफ्नो आध्यात्मिक भार, दुर्व्यसनीसँगको संघर्ष, वा पारिवारिक सुधारका अनुरोधहरू साझा गर्नुहोस्..."
  },
  prayer_btn_submit: {
    en: "Place Request on the Wall",
    ne: "प्रार्थना भित्तामा अनुरोध राख्नुहोस्"
  },

  // Contact Info & Map Form
  contact_tag: {
    en: "GET IN TOUCH",
    ne: "सम्पर्कमा रहनुहोस्"
  },
  contact_title: {
    en: "Contact & Location Details",
    ne: "सम्पर्क र स्थान विवरणहरू"
  },
  contact_desc: {
    en: "Reach out for counseling sessions, admissions into our residential recovery home, or community gatherings.",
    ne: "परामर्श सत्र, हाम्रो आवासीय पुन:स्थापना गृहमा भर्ना, वा सामुदायिक जमघटका लागि सम्पर्क गर्नुहोस्।"
  },
  contact_card_call: {
    en: "Call Coordinator",
    ne: "संयोजकलाई कल गर्नुहोस्"
  },
  contact_card_email: {
    en: "Email Office",
    ne: "कार्यालय इमेल"
  },
  contact_card_email_sub: {
    en: "Official Inquiry Desk",
    ne: "आधिकारिक सोधपुछ डेस्क"
  },
  contact_card_loc: {
    en: "Our Location",
    ne: "हाम्रो स्थान"
  },
  contact_card_loc_sub: {
    en: "Sitapakha, Hattiban",
    ne: "सितापखा, हात्तीवन"
  },
  contact_card_hours: {
    en: "Opening Hours",
    ne: "खुल्ने समय"
  },
  contact_card_hours_val: {
    en: "Always Open (24/7)",
    ne: "सधैं खुला (२४/७)"
  },
  contact_card_hours_sub: {
    en: "Continuous Crisis Support",
    ne: "निरन्तर संकट सहायता"
  },
  contact_map_schematic: {
    en: "Local Landmark Schematic Map",
    ne: "स्थानीय स्थलचिह्न योजनाबद्ध नक्सा"
  },
  contact_map_sitapakha: {
    en: "Sitapakha Crest Sanctuary",
    ne: "सितापखा थुम्को आश्रम"
  },
  contact_map_directions_title: {
    en: "Directions:",
    ne: "दिशा निर्देश:"
  },
  contact_map_directions_desc: {
    en: "Drive from Gwarko towards Harisiddhi/Godawari. Turn left at GEMS school road towards Hattiban. Follow the local path in Sitapakha towards the sanctuary crest. Look for the Agape signboards.",
    ne: "ग्वार्कोबाट हरिसिद्धि/गोदावरीतर्फ ड्राइभ गर्नुहोस्। जेम्स (GEMS) स्कूलको बाटोमा हात्तीवनतर्फ बायाँ मोडिनुहोस्। सितापखाको स्थानीय बाटो हुँदै आश्रमको थुम्कोतर्फ जानुहोस्। अगापेको साङ्केतिक बोर्डहरू हेर्नुहोस्।"
  },
  contact_map_open_btn: {
    en: "Open Directions",
    ne: "नक्सा खोल्नुहोस्"
  },
  contact_youtube_title: {
    en: "Watch Our Teachings & Sermons",
    ne: "हाम्रा शिक्षाहरू र प्रवचनहरू हेर्नुहोस्"
  },
  contact_youtube_desc: {
    en: "Subscribe to hear life-giving stories and sermons by our ministers.",
    ne: "हाम्रा सेवकहरूका जीवनदायिनी कथाहरू र प्रवचनहरू सुन्नका लागि सबस्क्राइब गर्नुहोस्।"
  },
  contact_youtube_btn: {
    en: "Agape Channel",
    ne: "अगापे च्यानल"
  },
  contact_form_title: {
    en: "Send an Inquiry",
    ne: "सोधपुछ पठाउनुहोस्"
  },
  contact_form_desc: {
    en: "Fill out this form. Our Lalitpur support coordinate responds typically in less than 2 hours.",
    ne: "यो फारम भर्नुहोस्। हाम्रो ललितपुरको सहायता टोलीले सामान्यतया २ घण्टाभन्दा कम समयमा जवाफ दिन्छ।"
  },
  contact_form_success_title: {
    en: "Message Sent Successfully",
    ne: "सन्देश सफलतापूर्वक पठाइयो"
  },
  contact_form_success_desc_html: {
    en: "Thank you. Your message has been stored in local records. Lead servant <strong>Abhishek Oza</strong> has been alerted.",
    ne: "धन्यवाद। तपाईंको सन्देश स्थानीय रेकर्डमा सुरक्षित गरिएको छ। मुख्य सेवक <strong>अभिषेक ओझा</strong>लाई जानकारी दिइएको छ।"
  },
  contact_form_label_name: {
    en: "Your Full Name",
    ne: "तपाईंको पूरा नाम"
  },
  contact_form_label_phone: {
    en: "Phone Number",
    ne: "फोन नम्बर"
  },
  contact_form_label_email: {
    en: "Email Address (Optional)",
    ne: "इमेल ठेगाना (वैकल्पिक)"
  },
  contact_form_label_subject: {
    en: "Inquiry Subject",
    ne: "सोधपुछको विषय"
  },
  contact_form_subj_opt1: {
    en: "Admission into Recovery Program",
    ne: "पुनर्स्थापना कार्यक्रममा भर्ना"
  },
  contact_form_subj_opt2: {
    en: "Spiritual Counseling Request",
    ne: "आध्यात्मिक परामर्श अनुरोध"
  },
  contact_form_subj_opt3: {
    en: "General Inquiry / Partner with Us",
    ne: "सामान्य सोधपुछ / हामीसँग साझेदारी"
  },
  contact_form_label_detail: {
    en: "Explain Your Situation / Request",
    ne: "तपाईंको स्थिति / अनुरोध व्याख्या गर्नुहोस्"
  },
  contact_form_placeholder_detail: {
    en: "Please let us know how we can best support you or your family member...",
    ne: "कृपया हामीले तपाईंलाई वा तपाईंको परिवारको सदस्यलाई कसरी उत्तम सहयोग गर्न सक्छौं भनी हामीलाई थाहा दिनुहोस्..."
  },
  contact_form_btn_send: {
    en: "Send Secure Message",
    ne: "सुरक्षित सन्देश पठाउनुहोस्"
  },

  // Footer Section
  footer_slogan: {
    en: "We are a faith-focused church and rehabilitation center situated in Sitapakha, Hattiban (Lalitpur). Our mission is delivering hope and complete restoration from substance dependency through the saving power of Jesus Christ.",
    ne: "हामी सितापखा, हात्तीवन (ललितपुर) मा अवस्थित विश्वास-केन्द्रित मण्डली र पुनर्स्थापना केन्द्र हौं। हाम्रो मिशन येशू ख्रीष्टको मुक्ति शक्ति मार्फत पदार्थको दुर्व्यसनीबाट आशा र पूर्ण पुनर्स्थापना प्रदान गर्नु हो।"
  },
  footer_citation_quote: {
    en: '"In all these things we are more than conquerors through him who loved us."',
    ne: '"हामीलाई प्रेम गर्नुहुनेद्वारा यी सबै कुरामा हामी विजयीहरूभन्दा पनि महान् छौँ।"'
  },
  footer_citation_ref: {
    en: "— ROMANS 8:37",
    ne: "— रोमी ८:३७"
  },
  footer_nav_header: {
    en: "Navigation",
    ne: "नेभिगेसन"
  },
  footer_contact_header: {
    en: "Contact & Hours",
    ne: "सम्पर्क र समय"
  },
  footer_rights: {
    en: "All Rights Reserved.",
    ne: "सर्वाधिकार सुरक्षित।"
  }
};
