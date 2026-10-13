import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Search,
  MessageCircle,
  Phone,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  Calendar,
  Award,
  Music,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { OrnamentDivider } from "@/components/Decorations";
import { academy } from "@/data/academy";

interface FAQItem {
  q: string;
  a: string;
  category: "admissions" | "dance" | "music" | "kkkv" | "exams";
  categoryLabel: string;
}

const allFaqs: FAQItem[] = [
  {
    category: "admissions",
    categoryLabel: "Admissions & Centers",
    q: "What age groups are accepted at Suha Academy?",
    a: "We welcome learners of all ages! Our Young Learners batch begins from age 4 onwards, introducing basic motor rhythms (tat-tai-ta-ha), hand mudras, and slokas. We have specialized Junior batches (7–12 yrs), Teen batches (13–18 yrs), and dedicated adult beginner batches for homemakers and working professionals who wish to pursue classical arts with supportive pacing.",
  },
  {
    category: "admissions",
    categoryLabel: "Admissions & Centers",
    q: "Where are the academy centers located in Chennai?",
    a: "Classes are held across our physical centers in Chennai: (1) Perumbakkam Center (Main Campus) at 3rd Floor, Ixora Club House, BSCPL BOLLINENI HILLSIDE, Bollineni Hillside Road, Perumbakkam, Chennai – 600131, and (2) Medavakkam Center at Navins Starwood Towers on Vengaivasal Main Road. We also conduct dedicated live interactive 1-on-1 digital classes for global NRI students in the USA, UK, Singapore, Malaysia, and the Middle East.",
  },
  {
    category: "admissions",
    categoryLabel: "Admissions & Centers",
    q: "Are trial classes or consultations available before enrolling?",
    a: "Yes! We encourage prospective students and parents to attend an introductory consultation and trial session. This allows Founder & Artistic Director Guru Smt. Ranjini Pradeep to assess rhythm aptitude, recommend the best-fit batch, and answer your specific questions in person.",
  },
  {
    category: "admissions",
    categoryLabel: "Admissions & Centers",
    q: "Can a student learn both Bharatanatyam and Carnatic Music simultaneously?",
    a: "Absolutely! In fact, we strongly recommend dual art training. Learning Carnatic Vocal alongside Bharatanatyam provides disciples with a profound understanding of Tala (rhythmic cycles), Raga bhava, and sahitya pronunciation. Coordinated scheduling is provided so students can attend both sessions conveniently on weekends.",
  },
  {
    category: "dance",
    categoryLabel: "Bharatanatyam",
    q: "What is the Bharatanatyam curriculum progression?",
    a: "Our Bharatanatyam training adheres strictly to classical Margam pedagogy. Students start with foundational Adavus (10 groups), Mudras (Asamyuta and Samyuta Hastas), Eye movements (Drishti Bhedas), and Head gestures (Shiro Bhedas). They progressively advance through Pushpanjali, Alaripu, Jathiswaram, Shabdam, the centerpiece Varnam, Padams, Keerthanams, Javalis, and high-energy Thillanas.",
  },
  {
    category: "dance",
    categoryLabel: "Bharatanatyam",
    q: "When do students receive their Salangai (Brass Bells)?",
    a: "Salangai is sacred in our tradition. Students undergo a formal Salangai Pooja only after mastering foundational adavus, acquiring steady Araimandi posture, and demonstrating rhythmic adherence across three speeds (Vilamba, Madhyama, Dhruta). Guru Smt. Ranjini Pradeep personally blesses and ties the bells in a traditional ceremony.",
  },
  {
    category: "dance",
    categoryLabel: "Bharatanatyam",
    q: "What is the required practice uniform for dance classes?",
    a: "Students wear traditional cotton dance practice sarees or academy kurti-churidar uniforms that allow complete leg freedom for Araimandi and deep plie postures. Hair is neatly tied in a plait or bun with traditional flower adornments.",
  },
  {
    category: "music",
    categoryLabel: "Carnatic Vocal",
    q: "What classical musical forms are taught in Carnatic Vocal?",
    a: "Our vocal curriculum begins with voice culture, Shruti alignment, Sarali, Jantai, and Dhatu Varisais, progressing to Alankarams and Geethams in Malahari, Mohanam, and Kalyani. Advanced students learn Varnams in multiple talas, Keerthanams by the Carnatic Trinity (Thyagaraja, Muthuswami Dikshitar, Syama Sastri), Thiruppavai, Thiruppugazh, Pancharatna Krithis, and Manodharmam (Aalapana, Neraval, Kalpanaswaras).",
  },
  {
    category: "music",
    categoryLabel: "Carnatic Vocal",
    q: "Do vocal students get choral and solo stage concert opportunities?",
    a: "Yes. Suha Academy vocal students regularly perform in choral ensembles at our Annual Day Utsavams, Thyagaraja Aaradhana celebrations, and temple festivals. Disciples have been felicitated by legends including Kalaimamani Dr. Nithyasree Mahadevan, Sri Sai Vignesh, and Dr. Divyasena.",
  },
  {
    category: "kkkv",
    categoryLabel: "KKKV Competition",
    q: "What is KKKV (Kodai Kaala Kalai Vizha)?",
    a: "KKKV is Suha Academy's flagship classical arts competition and cultural festival. Established in 2019, it has grown over 7 editions into one of Chennai's premier platforms for young classical talents. The upcoming edition, 'The Classical Faceoff', will be held on 13–14 June 2026 at Bollineni Ixora, Perumbakkam.",
  },
  {
    category: "kkkv",
    categoryLabel: "KKKV Competition",
    q: "Can non-Suha Academy students compete in KKKV?",
    a: "Yes! KKKV is an open, pan-South-India cultural competition. Classical dance and music students from all recognized academies, schools, and private gurus are warmly welcome to participate across solo, duet, and group divisions.",
  },
  {
    category: "exams",
    categoryLabel: "Certifications & Exams",
    q: "Are the examinations accredited by recognized music and dance boards?",
    a: "Yes. We prepare our students for annual graded certification exams conducted in collaboration with Bridge Academy and recognized State Music and Dance Universities. Students receive formal grade certificates from Grade 1 through Diploma (Visharad) and Post-Diploma (Vidwath).",
  },
  {
    category: "exams",
    categoryLabel: "Certifications & Exams",
    q: "What guidance is provided for Arangetram (Solo Stage Debut)?",
    a: "Arangetram is a sacred milestone representing a dancer's graduation to a full solo concert artist. Smt. Ranjini Pradeep provides intensive 1-on-1 grooming over 12 to 18 months, custom choreographing a full 2.5-hour Margam repertoire, coordinating with live classical orchestra musicians (Nattuvangam, Mridangam, Violin, Flute, Vocal), and supervising stage presentation.",
  },
];

const topicCards = [
  {
    id: "admissions",
    title: "Admissions & Centers",
    desc: "Ages, batches, scheduling & locations in Chennai",
    icon: MapPin,
  },
  {
    id: "dance",
    title: "Bharatanatyam Margam",
    desc: "Adavus, Mudras, Salangai pooja & practice saree",
    icon: Sparkles,
  },
  {
    id: "music",
    title: "Carnatic Vocal & Shruti",
    desc: "Voice culture, Varisais, Trinity krithis & choral concerts",
    icon: Music,
  },
  {
    id: "kkkv",
    title: "KKKV Cultural Festival",
    desc: "Annual competition, eligibility & trophy honours",
    icon: Calendar,
  },
  {
    id: "exams",
    title: "Exams & Arangetram",
    desc: "Bridge Academy grades & solo stage debut mentorship",
    icon: Award,
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = useMemo(() => {
    return allFaqs.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesQuery =
        searchQuery.trim() === "" ||
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <PageHero
        eyebrow="Help & Knowledge Base"
        title="Frequently Asked Questions"
        subtitle="Clear answers about admissions, batch timings, curriculum, dress code, exams, and stage performance opportunities."
        image="/suha_media/shared/shared_hero_theatre_banner.jpg"
        height="lg"
      />

      {/* Main Knowledge Hub Section */}
      <section className="relative py-14 md:py-20 bg-cream-50">
        <div className="container-wide section-padding">
          {/* Top Quick Topic Cards Strip */}
          <div className="mb-10">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold">
                Explore by Topic
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-navy-950 mt-1">
                Frequently Asked Topics
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 max-w-6xl mx-auto">
              {topicCards.map((topic) => {
                const Icon = topic.icon;
                const isSelected = activeCategory === topic.id;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(isSelected ? "all" : topic.id);
                      setSearchQuery("");
                    }}
                    className={`p-4 rounded-sm border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-navy-950 text-cream-50 border-navy-950 shadow-md scale-[1.02]"
                        : "bg-white text-navy-900 border-ivory-200 hover:border-gold-400 hover:shadow-xs"
                    }`}
                  >
                    <div>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 ${
                          isSelected
                            ? "bg-gold-500/20 text-gold-300"
                            : "bg-gold-500/10 text-gold-700"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-display font-medium text-sm leading-tight mb-1">
                        {topic.title}
                      </h3>
                      <p
                        className={`text-[11px] leading-relaxed line-clamp-2 ${
                          isSelected ? "text-cream-100/70" : "text-navy-700/60"
                        }`}
                      >
                        {topic.desc}
                      </p>
                    </div>
                    <span
                      className={`text-[10px] font-mono mt-3 uppercase tracking-wider font-semibold ${
                        isSelected ? "text-gold-300" : "text-gold-700"
                      }`}
                    >
                      {isSelected ? "Active Filter •" : "View Questions →"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Bar & Filter Strip */}
          <div className="bg-white border border-gold-500/20 rounded-sm p-5 sm:p-6 mb-10 max-w-6xl mx-auto shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-gold-600 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search questions (e.g. salangai, trial, fees, adult, Medavakkam, KKKV, exams)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-16 py-3 bg-cream-50/70 border border-ivory-300 rounded-sm text-sm text-navy-950 placeholder:text-navy-400 focus:border-gold-500 focus:bg-white outline-none transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-navy-500 hover:text-gold-700 cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
                {[
                  { id: "all", label: "All Questions" },
                  { id: "admissions", label: "Admissions" },
                  { id: "dance", label: "Bharatanatyam" },
                  { id: "music", label: "Carnatic Vocal" },
                  { id: "kkkv", label: "KKKV" },
                  { id: "exams", label: "Certifications" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      activeCategory === tab.id
                        ? "bg-navy-950 text-gold-300 shadow-xs"
                        : "bg-cream-100 text-navy-800 hover:bg-gold-50 hover:text-gold-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Counter Bar */}
            <div className="flex items-center justify-between text-xs text-navy-600/70 pt-3 mt-3 border-t border-ivory-100">
              <span>
                Showing <strong className="text-navy-900">{filteredFaqs.length}</strong> of{" "}
                {allFaqs.length} questions
              </span>
              {activeCategory !== "all" && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                  className="text-gold-700 hover:text-gold-900 font-medium underline cursor-pointer"
                >
                  Reset all filters
                </button>
              )}
            </div>
          </div>

          {/* 2-Column Layout: Questions Accordion + Quick Help Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
            {/* Main Accordion Column (8 Cols) */}
            <div className="lg:col-span-8 space-y-4">
              {filteredFaqs.length === 0 ? (
                <div className="text-center py-16 bg-white border border-ivory-200 rounded-sm p-8 shadow-xs">
                  <HelpCircle className="w-10 h-10 text-gold-500 mx-auto mb-3" />
                  <p className="font-display text-xl text-navy-950 mb-2">No matching questions found</p>
                  <p className="text-xs sm:text-sm text-navy-700/70 max-w-md mx-auto mb-6">
                    We could not find answers matching &ldquo;{searchQuery}&rdquo;. Message Guru Smt. Ranjini Pradeep directly on WhatsApp to get immediate clarification.
                  </p>
                  <a
                    href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent(
                      `Hi Suha Academy, I have a query: ${searchQuery}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-navy-950 text-gold-300 font-semibold text-xs rounded-sm hover:bg-navy-900 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Ask Question on WhatsApp</span>
                  </a>
                </div>
              ) : (
                filteredFaqs.map((faq, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <Reveal key={faq.q} delay={i * 0.03}>
                      <div className="bg-white border border-ivory-200 rounded-sm overflow-hidden hover:border-gold-400/60 transition-all duration-300 shadow-xs">
                        <button
                          type="button"
                          onClick={() => setOpenIndex(isOpen ? null : i)}
                          className="w-full flex items-start justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer list-none select-none"
                        >
                          <div className="flex items-start gap-3.5">
                            <span className="w-7 h-7 rounded-full bg-cream-100 text-gold-800 text-xs font-mono font-bold flex items-center justify-center shrink-0 border border-ivory-200 mt-0.5">
                              0{i + 1}
                            </span>
                            <div>
                              <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 rounded bg-gold-50 text-gold-800 border border-gold-200 font-semibold inline-block mb-1.5">
                                {faq.categoryLabel}
                              </span>
                              <h3
                                className={`font-display text-base sm:text-lg font-medium transition-colors ${
                                  isOpen ? "text-gold-700" : "text-navy-950"
                                }`}
                              >
                                {faq.q}
                              </h3>
                            </div>
                          </div>
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                              isOpen
                                ? "bg-gold-500/15 text-gold-700 rotate-180"
                                : "bg-cream-100 text-navy-600"
                            }`}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-ivory-100 animate-fade-in">
                            <p className="text-xs sm:text-sm text-navy-800/85 leading-relaxed pl-10 border-l-2 border-gold-500/30 font-sans">
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    </Reveal>
                  );
                })
              )}
            </div>

            {/* Sidebar Support Column (4 Cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-[90px]">
              {/* WhatsApp Coordinator Card */}
              <div className="bg-navy-950 text-cream-100 p-6 rounded-sm border border-gold-500/30 shadow-md">
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-mono font-semibold block mb-1">
                  Direct Assistance
                </span>
                <h3 className="font-display text-xl text-cream-50 mb-2">
                  Have an Unlisted Question?
                </h3>
                <p className="text-xs text-cream-100/75 leading-relaxed mb-5">
                  Speak directly with Guru Smt. Ranjini Pradeep or our academy coordinators for custom timings, level assessments, or fee details.
                </p>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent(
                      "Hi Suha Academy, I have a few specific questions regarding classical dance / music batches."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 text-white font-semibold text-xs rounded-sm hover:bg-emerald-500 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${academy.phoneRaw}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 border border-gold-500/30 text-gold-300 font-semibold text-xs rounded-sm hover:bg-gold-500/10 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call: {academy.phone}</span>
                  </a>
                </div>
              </div>

              {/* Center Schedules Preview */}
              <div className="bg-white p-6 rounded-sm border border-ivory-200 shadow-xs">
                <div className="flex items-center gap-2 text-gold-700 text-xs uppercase tracking-wider font-bold mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>Chennai Centers</span>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="pb-3 border-b border-ivory-100">
                    <p className="font-semibold text-navy-950 text-sm">Perumbakkam Center (Main Campus)</p>
                    <p className="text-navy-700/70 mt-0.5">3rd Floor, Ixora Club House, BSCPL Bollineni Hillside</p>
                    <p className="text-gold-700 font-medium mt-1">Saturday Evenings & Sunday Mornings</p>
                  </div>

                  <div>
                    <p className="font-semibold text-navy-950 text-sm">Medavakkam Center</p>
                    <p className="text-navy-700/70 mt-0.5">Navins Starwood Towers, Vengaivasal Main Rd</p>
                    <p className="text-gold-700 font-medium mt-1">Friday Evenings & Saturday Mornings</p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-ivory-100">
                  <Link
                    to="/courses"
                    className="inline-flex items-center gap-1.5 text-xs text-navy-900 hover:text-gold-700 font-semibold transition-colors"
                  >
                    <span>View All Batch Timings &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="relative py-20 bg-paper text-center border-t border-ivory-200">
        <div className="container-wide section-padding">
          <OrnamentDivider className="mb-6" />
          <Reveal>
            <h2 className="text-display-sm font-display text-navy-950 mb-3">
              Begin Your Artistic Journey at Suha Academy
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-navy-700/75 max-w-lg mx-auto mb-8 text-xs sm:text-sm">
              Admissions open for 2026–2027 batches across Perumbakkam, Medavakkam, and Global Online. Schedule a trial session today.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-950 text-gold-300 font-semibold text-xs sm:text-sm rounded-sm hover:bg-navy-900 transition-all duration-300 shadow-md group"
              >
                <span>Contact Admissions Desk</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold-500/40 text-navy-950 font-semibold text-xs sm:text-sm rounded-sm hover:bg-gold-50 transition-colors"
              >
                <span>Explore All Courses</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
