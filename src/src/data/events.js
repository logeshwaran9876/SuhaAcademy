import manifest from './events_media_manifest.json';

export const eventsIntro =
  "At Suha Academy of Fine Arts, every event is a celebration of artistic excellence, cultural heritage and the evolving journey of our students. From grand annual celebrations and vibrant festivals to soulful musical offerings and prestigious national and international recitals, each occasion provides a platform to honour tradition, nurture talent and showcase the dedication of our gurus and disciples. Explore the memorable milestones and artistic experiences that define the spirit of Suha Academy.";

export const eventPillars = [
  {
    id: "annual-day",
    title: "Suha’s Annual Day",
    subtitle: "Celebration of Dedication, Growth & Thematic Excellence",
    description:
      "Suha’s Annual Day is a celebration of the dedication, growth and artistic achievements of our students. Beyond captivating performances in Indian classical arts, it nurtures meaningful senior-junior relationships, encourages mutual support and provides every student with a grand stage to explore their potential and gain valuable performance experience.\n\nA distinctive highlight of the celebrations is Suha’s thematic dance presentations, bringing stories, devotion and culture to life through the creative choreography of Guru Smt. Ranjini Pradeep. Recent productions, such as Dasaavatharam and Geetham Paada – Kingini Aada, reflect the Academy’s commitment to artistic innovation while remaining rooted in tradition.\n\nThe occasion is further enriched by the presence of eminent celebrity guests who grace the celebrations and honour the winners of Kodai Kaala Kalai Vizha (KKKV) by presenting their prizes. Through these enriching experiences, Suha’s Annual Day fosters camaraderie, celebrates excellence, preserves heritage and inspires the next generation of artists, making it a cherished milestone in every student’s artistic journey.",
    image: "/suha_media/events/events_intro/event_intro_annual_day.jpg",
    slug: "suha-annual-day",
  },
  {
    id: "kkkv",
    title: "Kodai Kaala Kalai Vizha (KKKV)",
    subtitle: "State-Level Classical Music & Dance Festival & Talent Competitions",
    description:
      "Kodai Kaala Kalai Vizha (KKKV) is Suha Academy’s prestigious annual state-level classical arts competition and festival. Founded to provide young artists with a vibrant stage for healthy competition and artistic growth, KKKV features solo classical vocal, Bharathanatyam Margam presentations, instrumentals and group recitals judged by distinguished vidwans and celebrity guests.",
    image: "/suha_media/events/events_intro/event_intro_kkkv.jpg",
    slug: "kkkv",
  },
  {
    id: "utsavam",
    title: "Suha’s Utsavams",
    subtitle: "Devotional Celebrations & Cultural Festivities",
    description:
      "Suha’s Utsavams celebrate the vibrant traditions of Indian classical arts through devotional performances, cultural festivities and artistic expression. The Academy has conducted several enriching celebrations, including Margazhi Maha Utsav, Thyagaraja Aradhana and Navratri Utsav among others. These occasions provide students with meaningful opportunities to showcase their talents in a devotional setting while deepening their connection with our cultural and spiritual heritage. By bringing together students, families and the community, Suha’s Utsavams uphold the timeless traditions of Indian classical arts and foster a shared spirit of devotion and celebration.",
    image: "/suha_media/events/events_intro/event_intro_utsavams.jpg",
    slug: "suha-utsavam",
  },
  {
    id: "vasantha-swaranjali",
    title: "Suha’s Vasantha Swaranjali",
    subtitle: "Art with Compassion — Intergenerational Bonding at Vasantham Homes",
    description:
      "Vasantha Swaranjali is a heartfelt initiative by Suha Academy of Fine Arts that brings the joy of Indian classical arts to the elderly residents of Vasantham homes. Providing young students with a meaningful platform to share their artistic talents, the initiative transforms performances into moments of happiness, warmth and connection. Through the beauty of music and dance, Suha seeks to offer the elderly a delightful artistic experience, bring smiles to their faces and receive their invaluable blessings. More than a cultural presentation, Vasantha Swaranjali is a celebration of compassion, tradition and the beautiful bond between generations.",
    image: "/suha_media/events/events_intro/event_intro_vasantha_swaranjali.jpg",
    slug: "vasantha-swaranjali",
  },
  {
    id: "national-recitals",
    title: "Suha’s National Recitals",
    subtitle: "Temple Offerings & Prestigious Cultural Venues",
    description:
      "Suha’s National Recitals provide senior disciples with valuable opportunities to explore diverse stages and showcase their artistic excellence across Chennai and various parts of Tamil Nadu. Through solo and group performances at renowned temples and cultural venues, students gain enriching stage experience, strengthen their individual artistry, develop ensemble coordination and deepen their connection with India’s rich spiritual and cultural heritage. These opportunities nurture confidence, artistic maturity and a deeper appreciation for the timeless traditions of Indian classical arts.",
    image: "/suha_media/events/events_intro/event_intro_national_recitals.jpg",
    slug: "national-recitals",
  },
  {
    id: "international-recitals",
    title: "Suha’s International Recitals",
    subtitle: "Global Stages in Singapore & Malaysia",
    description:
      "Suha’s International Recitals take Indian classical arts beyond borders, offering students opportunities to perform on global platforms and share India’s rich cultural heritage with diverse audiences. Beyond the performances, these international journeys create cherished memories, strengthen the bond between Guru and disciples and foster lasting friendships among students. Exploring new places, experiencing different cultures and travelling together enrich their artistic journey while nurturing a sense of unity, belonging and mutual respect. These experiences celebrate the universality of art while creating treasured moments that remain close to every student’s heart.",
    image: "/suha_media/events/events_intro/event_intro_international_recitals.jpg",
    slug: "international-recitals",
  },
  {
    id: "salangai-pooja-arangetram",
    title: "Suha's Salangai Pooja and Arangetram",
    subtitle: "Sacred Dancing Bells Consecration & Maiden Solo Stage Debuts",
    description:
      "The Salangai Pooja and Arangetram represent sacred milestones in a classical dancer’s spiritual and technical journey. During the Salangai Pooja, disciples receive their consecrated ankle bells (Salangai) after rigorous foundational sadhana, symbolizing initiation into professional performance. The Arangetram marks the disciple's maiden solo stage debut, presenting a full Margam with live musical orchestra under Guru Smt. Ranjini Pradeep’s watchful guidance.",
    image: "/suha_media/events/events_intro/event_intro_salangai_pooja.jpg",
    slug: "salangai-pooja-arangetram",
  },
  {
    id: "memorable-encounters",
    title: "Memorable Encounters",
    subtitle: "Blessings from Eminent Gurus, Maestros & Cultural Luminaries",
    description:
      "Cherished moments and sacred blessings shared with revered classical gurus, maestros, celebrity artists and cultural luminaries who have graced Suha Academy of Fine Arts. From stage felicitations, guest addresses and excellence award presentations to traditional ponnadai honours, these encounters inspire artistic devotion and mentorship across generations.",
    image: "/suha_media/events/events_intro/event_intro_memorable_encounters.jpg",
    slug: "memorable-encounters",
  },
];

// Helper to construct gallery items from manifest
function makeGallery(slug, defaultTitle, defaultSubtitle) {
  const item = manifest[slug];
  if (!item || !item.images) return [];
  return item.images.map((img, i) => ({
    src: img.src,
    title: `${defaultTitle} — Glimpse ${i + 1}`,
    subtitle: defaultSubtitle,
  }));
}

const memorableEncountersGallery = [
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_001.jpg", title: "Interaction with Renowned Classical Gurus", subtitle: "Eminent cultural stalwarts blessing academy disciples" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_002.jpg", title: "Memorable Encounter with Cultural Patrons", subtitle: "Traditional sabha felicitations and warm blessings" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_003.jpg", title: "Guest Felicitations & Warm Accolades", subtitle: "Honouring esteemed masters of music and dance" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_004.jpg", title: "Celebrated Cultural Encounters", subtitle: "Dignitaries sharing inspiring words of wisdom" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_005.jpg", title: "Honouring Masters of Music & Dance", subtitle: "Cultural stalwarts and gurus felicitated on stage" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_006.jpg", title: "Annual Day Souvenir Presentation by Guru Smt. Ranjini Pradeep", subtitle: "Unveiling academy publication with distinguished guests" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_007.jpg", title: "Honouring Cultural Patrons & Distinguished Guests #1", subtitle: "Stage honors and appreciation for classical art champions" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_008.jpg", title: "Honouring Cultural Patrons & Distinguished Guests #2", subtitle: "Warm felicitations during annual celebrations" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_009.jpg", title: "Eminent Dignitaries Felicitation on Stage #3", subtitle: "Preserving cultural heritage through shared celebration" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_010.jpg", title: "Stage Accolades with Renowned Cultural Guests", subtitle: "Celebrating student milestones with luminaries" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_011.jpg", title: "Actor Sri Amit Bhargav Felicitating Student Disciples", subtitle: "Presenting trophies and certificates of achievement" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_012.jpg", title: "Dr. Divyasena & Distinguished Guests Felicitation", subtitle: "Revered dance exponent gracing Suha Academy stage" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_013.jpg", title: "Felicitation Ceremony with Classical Gurus & Luminaries", subtitle: "Joyous recognition of artistic dedication" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_014.jpg", title: "Dignitary Blessings and Award Presentation", subtitle: "Honouring outstanding young classical performers" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_015.jpg", title: "Ceremonial Lamp Lighting & Guest Accolades #1", subtitle: "Auspicious inauguration of annual festivities" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_016.jpg", title: "Ceremonial Lamp Lighting & Guest Accolades #2", subtitle: "Traditional deepam invocation with revered dignitaries" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_017.jpg", title: "Cultural Dignitaries on Stage at Suha Academy", subtitle: "Distinguished guests honouring classical heritage" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_018.jpg", title: "Blessings from Classical Maestros to Academy Students", subtitle: "Inspiring words and encouragement for upcoming recitals" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_019.jpg", title: "Presentation of Mementos to Honoured Dignitaries", subtitle: "Traditional ponnadai and memento presentation" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_020.jpg", title: "Grand Sabha Stage Celebration Ceremony #1", subtitle: "Sharing joyous milestone celebrations on stage" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_021.jpg", title: "Special Accolades & Trophies Presentation", subtitle: "Recognizing outstanding dedication to Natyam and Sangeetham" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_022.jpg", title: "Grand Sabha Stage Celebration Ceremony #2", subtitle: "Guru, faculty, families and guests celebrating milestones" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_023.jpg", title: "Eminent Guests Blessing Student Performers", subtitle: "Encouraging young artistes to pursue classical excellence" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_024.jpg", title: "Distinguished Arts Patrons Stage Presentation", subtitle: "Fostering community support for traditional arts" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_025.jpg", title: "Souvenir & Award Presentation with Cultural Gurus", subtitle: "Commemorating cultural milestones and talent" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_026.jpg", title: "Celebration of Classical Art Milestones with Guests", subtitle: "Special tributes and felicitations on stage" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_027.jpg", title: "Grand Auditorium Stage Gathering with Faculty & Dignitaries", subtitle: "Distinguished gathering of gurus, artists and faculty" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_028.jpg", title: "Excellence Certificate Presentation with Eminent Maestros", subtitle: "Dancers receiving honours for outstanding stage Margam" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_029.jpg", title: "Honouring Guest of Honour with Traditional Accolades", subtitle: "Revering wisdom and mentorship in classical fine arts" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_030.jpg", title: "Cultural Exchange & Warm Interactions with Stalwarts", subtitle: "Sri Sai Vignesh and dignitaries with Guru Smt. Ranjini Pradeep" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_031.jpg", title: "Blessings and Stage Felicitations for Young Artistes", subtitle: "Fostering the next generation of classical performers" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_032.jpg", title: "Moments of Joy & Felicitations with Esteemed Guests", subtitle: "Warm bonding and celebrations across artistic lineages" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_033.jpg", title: "Annual Day Felicitations & Memento Presentation #1", subtitle: "Cherishing guidance and patronage from cultural leaders" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_034.jpg", title: "Annual Day Felicitations & Memento Presentation #2", subtitle: "Traditional honors and blessings for student growth" },
  { src: "/suha_media/gallery/memorable_encounters/gallery_encounter_035.jpg", title: "Sacred Temple Recital Felicitations with Guests", subtitle: "Honouring dignitaries at sacred temple sabhas" },
];

export const events = [
  {
    slug: "suha-annual-day",
    year: 2026,
    title: "Suha’s Annual Day",
    subtitle: "Celebration of Student Artistry, Growth & Thematic Excellence",
    date: "Annual Academy Milestone",
    venue: "Karnataka Sangha Hall / Premier Auditoriums, Chennai",
    venueShort: "Chennai",
    status: "past",
    category: "annual-day",
    description:
      "Suha’s Annual Day is a celebration of the dedication, growth and artistic achievements of our students. Beyond captivating performances in Indian classical arts, it nurtures meaningful senior-junior relationships, encourages mutual support and provides every student with a grand stage to explore their potential and gain valuable performance experience.\n\nA distinctive highlight of the celebrations is Suha’s thematic dance presentations, bringing stories, devotion and culture to life through the creative choreography of Guru Smt. Ranjini Pradeep. Recent productions, such as Dasaavatharam and Geetham Paada – Kingini Aada, reflect the Academy’s commitment to artistic innovation while remaining rooted in tradition.\n\nThe occasion is further enriched by the presence of eminent celebrity guests who grace the celebrations and honour the winners of Kodai Kaala Kalai Vizha (KKKV) by presenting their prizes. Through these enriching experiences, Suha’s Annual Day fosters camaraderie, celebrates excellence, preserves heritage and inspires the next generation of artists, making it a cherished milestone in every student’s artistic journey.",
    categories: [
      "Thematic Productions: Dasaavatharam",
      "Geetham Paada – Kingini Aada",
      "Celebrity Guests & Felicitation",
      "KKKV Prize Distribution",
      "Ensemble Choreography by Smt. Ranjini Pradeep",
    ],
    poster: "/suha_media/events/events_intro/event_intro_annual_day.jpg",
    gallery: makeGallery(
      'suha-annual-day',
      "Suha's Annual Day Stage",
      "Thematic dance presentations & student choreography"
    ),
    mediaLinks: [
      {
        title: "Annual Day 2026 Recital & Felicitation",
        url: "https://youtu.be/y0wctSag458?si=aPMrHfVFMgqNcQ4V",
        type: "youtube",
      },
      {
        title: "Annual Day 2025 Stage Highlights",
        url: "https://youtu.be/PO1m11hqVO0?si=MUqKjQB7KmnvL8wW",
        type: "youtube",
      },
    ],
  },
  {
    slug: "suha-utsavam",
    year: 2026,
    title: "Suha’s Utsavams",
    subtitle: "Margazhi Maha Utsav, Thyagaraja Aradhana & Navratri Festivities",
    date: "Seasonal Sacred Festivals",
    venue: "Temples & Sabhas Across Chennai",
    venueShort: "Chennai",
    status: "past",
    category: "utsavam",
    description:
      "Suha’s Utsavams celebrate the vibrant traditions of Indian classical arts through devotional performances, cultural festivities and artistic expression. The Academy has conducted several enriching celebrations, including Margazhi Maha Utsav, Thyagaraja Aradhana and Navratri Utsav among others. These occasions provide students with meaningful opportunities to showcase their talents in a devotional setting while deepening their connection with our cultural and spiritual heritage. By bringing together students, families and the community, Suha’s Utsavams uphold the timeless traditions of Indian classical arts and foster a shared spirit of devotion and celebration.",
    categories: [
      "Margazhi Maha Utsav Recitals",
      "Thyagaraja Aradhana Pancharatna Homage",
      "Navratri Utsav Sangeetha Seva",
      "Community & Family Celebrations",
    ],
    poster: "/suha_media/events/events_intro/event_intro_utsavams.jpg",
    gallery: makeGallery(
      'suha-utsavam',
      "Suha's Utsavam Sacred Moments",
      "Temple offerings, Margazhi & Thyagaraja Aradhana"
    ),
    mediaLinks: [
      {
        title: "Thyagaraja Aaradhana Recital",
        url: "https://www.instagram.com/reel/DUxlMweCVFb/?obrf=aDA1bXNwM3E5OGR0",
        type: "instagram",
        category: "Thyagaraja Aradhana",
      },
      {
        title: "Margazhi Maha Utsav — Glimpses I",
        url: "https://www.instagram.com/p/DTF-dOMCVal/?cplk=MTJvMGhkOTVyb242Zg==",
        type: "instagram",
        category: "Margazhi Utsav",
      },
      {
        title: "Margazhi Maha Utsav — Glimpses II",
        url: "https://www.instagram.com/p/DTDnxSlk183/?rpxt=MTk2bTQxamNyZjExMQ==",
        type: "instagram",
        category: "Margazhi Utsav",
      },
      {
        title: "Margazhi Maha Utsav — Highlights",
        url: "https://www.instagram.com/p/DSyxoEACQVd/?rpxt=bDExbG5maXIwcTE5",
        type: "instagram",
        category: "Margazhi Utsav",
      },
    ],
  },
  {
    slug: "vasantha-swaranjali",
    year: 2025,
    title: "Suha’s Vasantha Swaranjali",
    subtitle: "Art with Compassion — Intergenerational Bonding at Vasantham Homes",
    date: "Ongoing Compassionate Seva",
    venue: "Vasantham Homes, Chennai",
    venueShort: "Vasantham Homes, Chennai",
    status: "past",
    category: "vasantha-swaranjali",
    description:
      "Vasantha Swaranjali is a heartfelt initiative by Suha Academy of Fine Arts that brings the joy of Indian classical arts to the elderly residents of Vasantham homes. Providing young students with a meaningful platform to share their artistic talents, the initiative transforms performances into moments of happiness, warmth and connection. Through the beauty of music and dance, Suha seeks to offer the elderly a delightful artistic experience, bring smiles to their faces and receive their invaluable blessings. More than a cultural presentation, Vasantha Swaranjali is a celebration of compassion, tradition and the beautiful bond between generations.",
    categories: [
      "Intergenerational Classical Art Seva",
      "Warmth & Blessings from Elders",
      "Compassionate Youth Platform",
      "Bharathanatyam & Vocal Offerings",
    ],
    poster: "/suha_media/events/events_intro/event_intro_vasantha_swaranjali.jpg",
    gallery: makeGallery(
      'vasantha-swaranjali',
      "Vasantha Swaranjali Seva",
      "Intergenerational bonding and compassionate classical arts at Vasantham Homes"
    ),
    mediaLinks: [
      {
        title: "Elderly Home Recital Glimpse I",
        url: "https://www.instagram.com/reel/DQ3Y47RidQX/?psln=eDN1bWVzaTVnZjJv",
        type: "instagram",
      },
      {
        title: "Elderly Home Recital Glimpse II",
        url: "https://www.instagram.com/reel/DSZbQ1uCYw0/?dlrf=MWR4bjJuM3ltbzdqeg==",
        type: "instagram",
      },
      {
        title: "Vasantham Smiles & Memories",
        url: "https://www.instagram.com/p/Dc80CKZn_k_/?cplk=aDZkamt1NDI4cmJp",
        type: "instagram",
      },
      {
        title: "Intergenerational Classical Music Seva",
        url: "https://www.instagram.com/reel/Dbi3jkRpVxQ/?xtok=djJwY3YwNnFuNzVm",
        type: "instagram",
      },
      {
        title: "Classical Dance Seva at Vasantham",
        url: "https://www.instagram.com/reel/DasqS_MpyZn/?mdxt=Mnc3N29zYXpkbHQ4",
        type: "instagram",
      },
      {
        title: "Blessings & Joy Moments",
        url: "https://www.instagram.com/reel/DZScHvKp_oa/?vrfl=MXV4aHhjczJ0MjFoMw==",
        type: "instagram",
      },
      {
        title: "Devotional Swaranjali Reel",
        url: "https://www.instagram.com/reel/DXDwV3bCUKn/?vrfl=MTEzbWhtZWpjZ2x6Zg==",
        type: "instagram",
      },
      {
        title: "Heartfelt Musical Warmth",
        url: "https://www.instagram.com/reel/DVoKPwyibNn/?vrfl=MTRnNWhseXExZXVvYw==",
        type: "instagram",
      },
      {
        title: "Elders Felicitation & Melodies",
        url: "https://www.instagram.com/reel/DUhZhIwie1U/?dlrf=MWF5MDh4aWp2Zml6dg==",
        type: "instagram",
      },
    ],
  },
  {
    slug: "national-recitals",
    year: 2026,
    title: "Suha’s National Recitals",
    subtitle: "Temple Offerings & Prestigious Cultural Venues",
    date: "Pan-Tamil Nadu Recital Series",
    venue: "Prominent Sabhas & Temples Across Chennai & Tamil Nadu",
    venueShort: "Chennai & Tamil Nadu",
    status: "past",
    category: "national-recitals",
    description:
      "Suha’s National Recitals provide senior disciples with valuable opportunities to explore diverse stages and showcase their artistic excellence across Chennai and various parts of Tamil Nadu. Through solo and group performances at renowned temples and cultural venues, students gain enriching stage experience, strengthen their individual artistry, develop ensemble coordination and deepen their connection with India’s rich spiritual and cultural heritage. These opportunities nurture confidence, artistic maturity and a deeper appreciation for the timeless traditions of Indian classical arts.",
    categories: [
      "Bhakthi Lahari Recitals Series",
      "Navratri Temple Concert Tour",
      "Maha Shivratri Natyanjali Offerings",
      "Official World Record Classical Event",
      "Kandasashti Utsav Presentations",
    ],
    poster: "/suha_media/events/events_intro/event_intro_national_recitals.jpg",
    gallery: makeGallery(
      'national-recitals',
      "National Temple & Stage Presentation",
      "Classical solo and ensemble offerings across Tamil Nadu"
    ),
    mediaLinks: [
      {
        title: "National Recital Glimpse I",
        url: "https://www.instagram.com/reel/Devleo0MiKt/?psln=MWFpZDd6OGcyNGUyeA==",
        type: "instagram",
        category: "National Recitals",
      },
      {
        title: "National Recital Glimpse II",
        url: "https://www.instagram.com/reel/DeoG9SSAbcZ/?xtok=NTVncnlmY2RldjJo",
        type: "instagram",
        category: "National Recitals",
      },
      {
        title: "National Recital Glimpse III",
        url: "https://www.instagram.com/reel/DegTy2Eg4nI/?psln=OTJtZmp2ZWRiamZl",
        type: "instagram",
        category: "National Recitals",
      },
      {
        title: "National Recital Glimpse IV",
        url: "https://www.instagram.com/reel/Def999fAJjh/?vrfl=MWdsYmk5ZDlzdjdhbw==",
        type: "instagram",
        category: "National Recitals",
      },
      {
        title: "Bhakthi Lahari — Part 1 (Temple Events)",
        url: "https://www.instagram.com/reel/DdRqtp8hSvS/?obrf=emlibms4YWFzanc5",
        type: "instagram",
        category: "Temple Events",
      },
      {
        title: "Bhakthi Lahari — Part 2 (Temple Events)",
        url: "https://www.instagram.com/reel/DdRrmpagpXz/?cplk=ZWhqOTFzcHR3NzUz",
        type: "instagram",
        category: "Temple Events",
      },
      {
        title: "Prestigious Stage Recital I",
        url: "https://www.instagram.com/reel/DO2RQbgiaOs/?mdxt=eHJnc3k5cG5lMnpr",
        type: "instagram",
        category: "Prestigious Stage Events",
      },
      {
        title: "Prestigious Stage Recital II",
        url: "https://www.instagram.com/reel/DVoOc8oiaEJ/?exln=MTJmcDgxc3I4OXpyeQ==",
        type: "instagram",
        category: "Prestigious Stage Events",
      },
      {
        title: "Navratri Temple Recital I",
        url: "https://www.instagram.com/reel/Dea4Tx9gY7P/?cplk=cWdmaXh5a2loYXk0",
        type: "instagram",
        category: "Navratri Recitals",
      },
      {
        title: "Navratri Temple Recital II",
        url: "https://www.instagram.com/reel/Dea3fQ6sMiU/?obrf=d2hzcGhrYzJmaGs3",
        type: "instagram",
        category: "Navratri Recitals",
      },
      {
        title: "Navratri Temple Recital III",
        url: "https://www.instagram.com/reel/DeYXp8_gKSw/?xtok=cno0ZGQ4aTNhN2Yz",
        type: "instagram",
        category: "Navratri Recitals",
      },
      {
        title: "Navratri Temple Recital IV",
        url: "https://www.instagram.com/reel/DeXL4DTAQOu/?mdxt=MTlteHd5Z2xvajF4eQ==",
        type: "instagram",
        category: "Navratri Recitals",
      },
      {
        title: "Navratri Temple Recital V",
        url: "https://www.instagram.com/reel/DUzqUJbibJe/?obrf=Z2JnOHg1dm1lZDA4",
        type: "instagram",
        category: "Navratri Recitals",
      },
      {
        title: "Navratri Temple Recital VI",
        url: "https://www.instagram.com/reel/DPRed-yjFyJ/?obrf=OGtoNW96aHJoeDc=",
        type: "instagram",
        category: "Navratri Recitals",
      },
      {
        title: "Navratri Temple Recital VII",
        url: "https://www.instagram.com/reel/DPIQ5gbCbA0/?cplk=MXhobW5mMHJqMzNhZg==",
        type: "instagram",
        category: "Navratri Recitals",
      },
      {
        title: "Navratri Temple Recital VIII",
        url: "https://www.instagram.com/reel/DPFsKooCeN5/?vrfl=bjF0anNyZ2x3OTZ4",
        type: "instagram",
        category: "Navratri Recitals",
      },
      {
        title: "Navratri Special YouTube Broadcast",
        url: "https://youtu.be/w7tLm8wLB90?si=dYBURo0AU2EbM8XP",
        type: "youtube",
        category: "Navratri Recitals",
      },
      {
        title: "Shivratri Maha Utsav Recital",
        url: "https://www.instagram.com/reel/DUhX-s8iVoL/?srtk=c2k1NXBreXBhYjg1",
        type: "instagram",
        category: "Shivratri Maha Utsav",
      },
      {
        title: "Official World Record Classical Event",
        url: "https://www.instagram.com/reel/DUOR4HOk-_l/?dlrf=MTRpanc2anJucmIwMw==",
        type: "instagram",
        category: "World Record Event",
      },
      {
        title: "Kandasashti Utsav Devotional Offering",
        url: "https://www.instagram.com/reel/DQI8lLJiYTC/?vrfl=NzQ5Yno3Z2p0ZHJt",
        type: "instagram",
        category: "Kandasashti Utsav",
      },
    ],
  },
  {
    slug: "international-recitals",
    year: 2026,
    title: "Suha’s International Recitals",
    subtitle: "Taking Classical Arts Beyond Borders — Singapore & Malaysia",
    date: "International Tours",
    venue: "SOTA Drama Theatre Singapore & Batu Caves Malaysia",
    venueShort: "Singapore & Malaysia",
    status: "past",
    category: "international-recitals",
    description:
      "Suha’s International Recitals take Indian classical arts beyond borders, offering students opportunities to perform on global platforms and share India’s rich cultural heritage with diverse audiences. Beyond the performances, these international journeys create cherished memories, strengthen the bond between Guru and disciples and foster lasting friendships among students. Exploring new places, experiencing different cultures and travelling together enrich their artistic journey while nurturing a sense of unity, belonging and mutual respect. These experiences celebrate the universality of art while creating treasured moments that remain close to every student’s heart.",
    categories: [
      "Sivānubhavam Production at Singapore",
      "Batu Caves Malaysia Programme",
      "Global Repertoire & Cultural Exchange",
      "International Disciples Travel Diaries",
    ],
    poster: "/suha_media/events/events_intro/event_intro_international_recitals.jpg",
    gallery: makeGallery(
      'international-recitals',
      "International Classical Recitals",
      "Global stage presentations in Singapore & Malaysia"
    ),
    mediaLinks: [
      {
        title: "Glimpse of Sivānubhavam at Singapore Trip",
        url: "https://youtu.be/uEiaPNQ7lfs?si=LL7fHS7yXKrEzR8b",
        type: "youtube",
      },
      {
        title: "Glimpse of Batu Caves — Malaysia Program",
        url: "https://youtu.be/D7oGUm0PiTs?si=zy6SfwhHBrcgpx69",
        type: "youtube",
      },
      {
        title: "International Travel & Repertoire Diaries",
        url: "https://youtu.be/pgthJfuUIHY?si=IZD9aBL1_lxnGHr6",
        type: "youtube",
      },
      {
        title: "International Recital Moments on Instagram",
        url: "https://www.instagram.com/p/DVBwmRsk0BE/?img_index=4&srtk=MTZhNmF2dWx4eDh6OQ==",
        type: "instagram",
      },
    ],
  },
  {
    slug: "salangai-pooja-arangetram",
    year: 2026,
    title: "Suha's Salangai Pooja and Arangetram",
    subtitle: "Sacred Dancing Bells Consecration & Maiden Solo Stage Debuts",
    date: "Sacred Classical Milestones",
    venue: "Premier Auditoriums & Sabhas, Chennai",
    venueShort: "Chennai",
    status: "past",
    category: "salangai-pooja",
    description:
      "The Salangai Pooja and Arangetram represent sacred milestones in a classical dancer’s spiritual and technical journey. During the Salangai Pooja, disciples receive their consecrated ankle bells (Salangai) after rigorous foundational sadhana, symbolizing initiation into professional performance. The Arangetram marks the disciple's maiden solo stage debut, presenting a full Margam with live musical orchestra under Guru Smt. Ranjini Pradeep’s watchful guidance.",
    categories: [
      "Consecrated Salangai Pooja Blessings",
      "Temple Rituals & Guru Anugraham",
      "Maiden Solo Arangetram Recitals",
      "Live Carnatic Orchestra Accompaniment",
      "Full Bharathanatyam Margam Presentation",
    ],
    poster: "/suha_media/events/events_intro/event_intro_salangai_pooja.jpg",
    gallery: makeGallery(
      'salangai-pooja-arangetram',
      "Salangai Pooja & Arangetram Moments",
      "Sacred bells initiation & solo stage debut"
    ),
    mediaLinks: [
      {
        title: "Arangetram Teaser of Kum. Rakshitha",
        url: "https://youtu.be/HQMUe4QTR44?si=kcA6Gfd2iG9WH19y",
        type: "youtube",
      },
      {
        title: "Salanga Poojai by Suha Academy Students",
        url: "https://youtu.be/0vI-agFD-II?si=_P8MPIxq0sxt-Pv9",
        type: "youtube",
      },
      {
        title: "Salangai Pooja Recital Moments",
        url: "https://www.instagram.com/p/DewrSoPDGac/?rpxt=enA2bnV4amIxcngx",
        type: "instagram",
      },
    ],
  },
  {
    slug: "memorable-encounters",
    year: 2026,
    title: "Memorable Encounters",
    subtitle: "Blessings from Eminent Classical Gurus & Cultural Luminaries",
    date: "Distinguished Guest Milestones & Felicitations",
    venue: "Premier Auditoriums, Sabhas & Academy Stages, Chennai",
    venueShort: "Chennai",
    status: "past",
    category: "memorable-encounters",
    description:
      "Cherished moments and sacred blessings shared with revered classical gurus, maestros, celebrity artists and cultural luminaries who have graced Suha Academy of Fine Arts. From stage felicitations, guest addresses and excellence award presentations to traditional ponnadai honours, these encounters inspire artistic devotion and mentorship across generations.",
    categories: [
      "Blessings from Eminent Classical Gurus & Vidwans",
      "Celebrity Guest Felicitations & Stage Accolades",
      "Student Excellence Certificates & Awards",
      "Ceremonial Lamp Lighting & Traditional Ponnadai",
      "Cultural Exchanges & Inspiring Mentorship",
    ],
    poster: "/suha_media/events/events_intro/event_intro_memorable_encounters.jpg",
    gallery: memorableEncountersGallery,
    mediaLinks: [
      {
        title: "Felicitation | Dr. Divyasena | Sri. Sai Vignesh | Sri. Amit Bhargav | Annual Day '26",
        url: "https://www.youtube.com/watch?v=kAhSLsi6SGM",
        type: "youtube",
      },
    ],
  },
  {
    slug: "kkkv",
    year: 2026,
    title: "Kodai Kaala Kalai Vizha (KKKV)",
    subtitle: "The Classical Faceoff — State-Level Classical Music & Dance Festival",
    date: "Annual State-Level Classical Festival & Competitions",
    venue: "Karnataka Sangha Hall / Premier Sabhas, Chennai",
    venueShort: "Chennai",
    status: "past",
    category: "kkkv",
    description:
      "Kodai Kaala Kalai Vizha (KKKV) is Suha Academy’s flagship state-level classical festival and competition platform. Bringing together hundreds of aspiring classical dancers and Carnatic vocalists across Tamil Nadu, KKKV provides an enriching stage to showcase dedication, receive constructive adjudication from veteran masters and celebrate artistic excellence.",
    categories: [
      "State-Level Classical Bharathanatyam Competitions",
      "Carnatic Vocal & Instrumental Music Showcases",
      "Constructive Feedback from Renowned Judges",
      "Celebrity Guest Felicitation & Grand Trophies",
      "Platform for Building Stage Confidence & Artistry",
    ],
    poster: "/suha_media/events/events_intro/event_intro_kkkv.jpg",
    gallery: makeGallery(
      'kkkv',
      "KKKV Stage Moments",
      "Kodai Kaala Kalai Vizha state-level performances & prize distribution"
    ),
    mediaLinks: [
      {
        title: "KODAI KAALA KALAI VIZHA 2026 | Guru Smt. Ranjini Pradeep",
        url: "https://youtu.be/BvlolDYekg4?si=jc-2gDahB6MSNZPP",
        type: "youtube",
      },
      {
        title: "KODAI KAALA KALAI VIZHA 2025 Highlights",
        url: "https://youtu.be/66Syv-PIdQA?si=uSRJS3ZTHQ9EuFsU",
        type: "youtube",
      },
      {
        title: "KKKV 2024 Classical Music Competition",
        url: "https://youtu.be/guB5T8BOJmg?si=L8A0cWvE3fXCK_iQ",
        type: "youtube",
      },
      {
        title: "KKKV 2024 Classical Faceoff @ Suha Academy",
        url: "https://youtu.be/yui_VFJ_mco?si=CZ4sAAumu1ODuBb5",
        type: "youtube",
      },
    ],
  },
];

export const kkkvEvents = [
  {
    slug: "kkkv-2026",
    year: 2026,
    title: "KKKV 2026 — The Classical Faceoff",
    subtitle: "State-Level Classical Music & Dance Competition & Festival",
    date: "State-Level Classical Faceoff Edition",
    venue: "Premier Auditoriums & Sabhas, Chennai",
    venueShort: "Chennai",
    status: "past",
    category: "kkkv",
    description:
      "Kodai Kaala Kalai Vizha (KKKV) 2026 brings together hundreds of classical dancers and Carnatic vocalists competing across junior, sub-junior and senior categories with grand trophies and felicitation by cultural stalwarts.",
    categories: [
      "State-Level Classical Bharathanatyam Faceoff",
      "Carnatic Vocal & Classical Instrumental Competitions",
      "Constructive Adjudication by Senior Gurus",
      "Grand Trophies & Excellence Certificates",
    ],
    poster: "/suha_media/events/events_intro/event_intro_kkkv.jpg",
    gallery: makeGallery(
      'kkkv',
      "KKKV 2026 Highlights",
      "The Classical Faceoff stage recitals & awards"
    ),
    mediaLinks: [
      {
        title: "KODAI KAALA KALAI VIZHA 2026 | Guru Smt. Ranjini Pradeep",
        url: "https://youtu.be/BvlolDYekg4?si=jc-2gDahB6MSNZPP",
        type: "youtube",
      },
      {
        title: "KODAI KAALA KALAI VIZHA 2025 Highlights",
        url: "https://youtu.be/66Syv-PIdQA?si=uSRJS3ZTHQ9EuFsU",
        type: "youtube",
      },
      {
        title: "KKKV 2024 Classical Music Competition",
        url: "https://youtu.be/guB5T8BOJmg?si=L8A0cWvE3fXCK_iQ",
        type: "youtube",
      },
      {
        title: "KKKV 2024 Classical Faceoff @ Suha Academy",
        url: "https://youtu.be/yui_VFJ_mco?si=CZ4sAAumu1ODuBb5",
        type: "youtube",
      },
    ],
  },
];

export const annualDay2024 = null;

export const workshopArchive = {
  title: "Mandala Art Workshop",
  date: "3 October 2021",
  format: "Online via Zoom",
  ageGroup: "7+",
  conductor: "Mrs. Vallikkannu Krishnan",
  description:
    "A creative online workshop introducing students to the art of Mandala design, fundamentals, symmetry and practical illustrations, organised by Suha Academy of Fine Arts.",
  status: "Past Workshop",
  source: "https://kidscontests.in/2021/09/mandala-art-workshop-organised-by-suha-academy/",
  sourceLabel: "KidsContests / Suha Academy Official",
  image: "/suha_media/mandala-workshop.jpg",
};
