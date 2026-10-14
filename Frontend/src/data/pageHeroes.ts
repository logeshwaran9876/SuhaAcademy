export interface PageHeroData {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imagePosition?: string;
  badges?: string[];
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

export type PageHeroKey =
  | "about"
  | "courses"
  | "events"
  | "faculty"
  | "faq"
  | "gallery"
  | "testimonials"
  | "contact";

/**
 * Standardized Hero Content for all Subpages
 * - Balanced word counts for uniform visual rhythm across all tabs
 * - Consistent typography hierarchy (Eyebrow: 3-4 words, Title: 4-5 words, Subtitle: 17-19 words)
 * - 3 badges per page for social proof & heritage markers
 */
export const pageHeroes: Record<PageHeroKey, PageHeroData> = {
  about: {
    eyebrow: "Heritage & Classical Lineage",
    title: "Suha Academy of Fine Arts",
    subtitle:
      "Preserving India’s sacred classical arts through authentic Bharatanatyam, Carnatic vocal music, and devoted guru-shishya mentorship across generations.",
    image: "/suha_media/Tabs/About.png",
    imagePosition: "object-right-top sm:object-right-top",
    badges: ["Estd. 2010", "160+ Disciples", "Chennai & Global"],
    primaryAction: { label: "Explore Our Journey", href: "#overview" },
    secondaryAction: { label: "Meet Our Gurus", href: "/faculty" },
  },
  courses: {
    eyebrow: "Disciplines & Structured Pedagogy",
    title: "Master the Classical Arts",
    subtitle:
      "Immerse in structured pedagogical training for Bharatanatyam, Mohiniyattam, and Carnatic music, tailored for beginners, graded learners, and performers.",
    image: "/suha_media/Tabs/Courses.png",
    imagePosition: "object-[75%_center] sm:object-[78%_center]",
    badges: ["Beginner to Advanced", "Graded Certification", "Flexible Batches"],
    primaryAction: { label: "Browse All Courses", href: "#disciplines" },
    secondaryAction: { label: "Inquire Admission", href: "/contact" },
  },
  events: {
    eyebrow: "Celebrations & Stage Recitals",
    title: "Milestones of Artistic Excellence",
    subtitle:
      "Experience prestigious annual festivals, divine Salangai Poojas, grand Arangetrams, and international classical showcases celebrating dedicated disciples and traditions.",
    image: "/suha_media/Tabs/Events.png",
    imagePosition: "object-[75%_center] sm:object-[78%_center]",
    badges: ["Annual Kalai Vizha", "Salangai Poojas", "Global Stages"],
    primaryAction: { label: "Upcoming Events", href: "#events-list" },
    secondaryAction: { label: "Festival Highlights", href: "/gallery" },
  },
  faculty: {
    eyebrow: "Revered Gurus & Mentors",
    title: "Masters of Classical Traditions",
    subtitle:
      "Learn under celebrated gurus and dedicated performing artists committed to imparting rigorous classical technique, spiritual depth, and artistic integrity.",
    image: "/suha_media/Tabs/Faculties.png",
    imagePosition: "object-[82%_25%] sm:object-[80%_25%]",
    badges: ["Guru Smt. Ranjini Pradeep", "Vocal & Natya Masters", "Personalized Guidance"],
    primaryAction: { label: "View All Faculty", href: "#faculty-grid" },
    secondaryAction: { label: "Enroll With Us", href: "/contact" },
  },
  faq: {
    eyebrow: "Inquiries & Academy Guidelines",
    title: "Frequently Asked Questions",
    subtitle:
      "Find clear answers regarding admissions, batch timings, curriculum levels, fee structures, examination criteria, dress etiquette, and stage recitals.",
    image: "/suha_media/Tabs/Faq.png",
    imagePosition: "object-[78%_center] sm:object-[76%_center]",
    badges: ["Admissions & Batches", "Curriculum Details", "Fee Guidelines"],
    primaryAction: { label: "Browse Questions", href: "#faq-search" },
    secondaryAction: { label: "Ask a Question", href: "/contact" },
  },
  gallery: {
    eyebrow: "Recitals & Visual Archives",
    title: "Moments of Divine Expression",
    subtitle:
      "Explore vibrant visual memories capturing grand stage recitals, traditional Arangetrams, devotional temple celebrations, and joyful studio learning sessions.",
    image: "/suha_media/Tabs/Gallery.png",
    imagePosition: "object-[78%_center] sm:object-[78%_center]",
    badges: ["Stage Performances", "Student Milestones", "Video Archives"],
    primaryAction: { label: "Explore Photos", href: "#gallery-grid" },
    secondaryAction: { label: "Watch Recitals", href: "/events" },
  },
  testimonials: {
    eyebrow: "Reflections & Heartfelt Gratitude",
    title: "Voices of Our Community",
    subtitle:
      "Discover genuine reflections and praise shared by dedicated parents, enthusiastic students, esteemed guest luminaries, and classical arts patrons.",
    image: "/suha_media/Tabs/Testimonials_.png",
    imagePosition: "object-[82%_center] sm:object-[80%_center]",
    badges: ["5.0 Star Rating", "Parent Testimonials", "Disciple Journeys"],
    primaryAction: { label: "Read Reviews", href: "#reviews" },
    secondaryAction: { label: "Submit Feedback", href: "/contact" },
  },
  contact: {
    eyebrow: "Admissions & Studio Locations",
    title: "Begin Your Artistic Journey",
    subtitle:
      "Connect with our team to inquire about admissions, studio locations in Perumbakkam and Medavakkam, or interactive worldwide online classes.",
    image: "/suha_media/Tabs/Contact.png",
    imagePosition: "object-[82%_25%] sm:object-[80%_25%]",
    badges: ["Perumbakkam & Medavakkam", "Global Online Batches", "WhatsApp Support"],
    primaryAction: { label: "Send Message", href: "#contact-form" },
    secondaryAction: { label: "Direct WhatsApp", href: "https://wa.me/919994883303" },
  },
};
