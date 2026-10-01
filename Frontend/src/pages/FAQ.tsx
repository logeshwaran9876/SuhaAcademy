import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Search, MessageCircle, Phone, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { OrnamentDivider } from "@/components/Decorations";
import { academy } from "@/data/academy";

interface FAQItem {
  q: string;
  a: string;
  category: "admissions" | "dance" | "music" | "kkkv" | "exams";
}

const allFaqs: FAQItem[] = [
  {
    category: "admissions",
    q: "What age groups are accepted at Suha Academy?",
    a: "We welcome learners of all ages! Our Young Learners batch begins from age 4 onwards, introducing basic motor rhythms (tat-tai-ta-ha), hand mudras, and slokas. We have specialized Junior batches (7–12 yrs), Teen batches (13–18 yrs), and dedicated adult beginner batches for homemakers and working professionals who wish to pursue classical arts with supportive pacing.",
  },
  {
    category: "admissions",
    q: "Where are the academy centers located in Chennai?",
    a: "Classes are held across three convenient physical centers in Chennai: (1) Medavakkam at Navins Starwood Towers on Vengaivasal Main Road, (2) Perumbakkam at the Ixora BHS Recreational Club inside Bollineni Hillside, and (3) Old Perungalathur near the Railway Station (Main Academy Campus Estd. 2010). We also run dedicated live 1-on-1 digital classes for global NRI students in the US, UK, Singapore, and Middle East.",
  },
  {
    category: "admissions",
    q: "Are trial classes or consultations available before enrolling?",
    a: "Yes! We encourage prospective students and parents to attend an introductory consultation and trial session. This allows Guru Smt. Ranjini Pradeep to assess rhythm aptitude, recommend the best-fit batch, and answer your specific questions in person.",
  },
  {
    category: "dance",
    q: "What is the Bharatanatyam curriculum progression?",
    a: "Our Bharatanatyam training adheres strictly to classical Margam pedagogy. Students start with foundational Adavus (10 groups), Mudras (Asamyuta and Samyuta Hastas), Eye movements (Drishti Bhedas), and Head gestures (Shiro Bhedas). They progressively advance through Pushpanjali, Alaripu, Jathiswaram, Shabdam, the centerpiece Varnam, Padams, Keerthanams, Javalis, and high-energy Thillanas.",
  },
  {
    category: "dance",
    q: "When do students receive their Salangai (Bells)?",
    a: "Salangai is sacred in our tradition. Students undergo a formal Salangai Pooja only after mastering foundational adavus, acquiring steady Araimandi posture, and demonstrating rhythmic adherence across three speeds (Vilamba, Madhyama, Dhruta). Guru Smt. Ranjini Pradeep personally blesses and ties the bells in a traditional ceremony.",
  },
  {
    category: "dance",
    q: "What is the required practice uniform for dance classes?",
    a: "Students wear traditional cotton dance practice sarees or academy kurti-churidar uniforms that allow complete leg freedom for Araimandi and deep plie postures. Hair is neatly tied in a plait or bun with traditional flower adornments.",
  },
  {
    category: "music",
    q: "What classical musical forms are taught in Carnatic Vocal?",
    a: "Our vocal curriculum begins with voice culture, Shruti alignment, Sarali, Jantai, and Dhatu Varisais, progressing to Alankarams and Geethams in Malahari, Mohanam, and Kalyani. Advanced students learn Varnams in multiple talas, Keerthanams by the Carnatic Trinity (Thyagaraja, Muthuswami Dikshitar, Syama Sastri), Thiruppavai, Thiruppugazh, Pancharatna Krithis, and Manodharmam (Aalapana, Neraval, Kalpanaswaras).",
  },
  {
    category: "music",
    q: "Do vocal students get choral and solo stage concert opportunities?",
    a: "Yes. Suha Academy vocal students regularly perform in choral ensembles at our Annual Day Utsavams, Thyagaraja Aaradhana celebrations, and temple festivals. Disciples have been felicitated by legends including Kalaimamani Dr. Nithyasree Mahadevan, Sri Sai Vignesh, and Dr. Divyasena.",
  },
  {
    category: "kkkv",
    q: "What is KKKV (Kodai Kaala Kalai Vizha)?",
    a: "KKKV is Suha Academy's flagship classical arts competition and cultural festival. Established in 2019, it has grown over 7 editions into one of Chennai's premier platforms for young classical talents. The upcoming edition, 'The Classical Faceoff', will be held on 13–14 June 2026 at Bollineni Ixora, Perumbakkam.",
  },
  {
    category: "kkkv",
    q: "Can non-Suha Academy students compete in KKKV?",
    a: "Yes! KKKV is an open, pan-South-India cultural competition. Classical dance and music students from all recognized academies, schools, and private gurus are warmly welcome to participate across solo, duet, and group divisions.",
  },
  {
    category: "exams",
    q: "Are the examinations accredited by recognized music and dance boards?",
    a: "Yes. We prepare our students for annual graded certification exams conducted in collaboration with Bridge Academy and recognized State Music and Dance Universities. Students receive formal grade certificates from Grade 1 through Diploma (Visharad) and Post-Diploma (Vidwath).",
  },
  {
    category: "exams",
    q: "What guidance is provided for Arangetram (Solo Stage Debut)?",
    a: "Arangetram is a sacred milestone representing a dancer's graduation to a full solo concert artist. Smt. Ranjini Pradeep provides intensive 1-on-1 grooming over 12 to 18 months, custom choreographing a full 2.5-hour Margam repertoire, coordinating with live classical orchestra musicians (Nattuvangam, Mridangam, Violin, Flute, Vocal), and supervising stage presentation.",
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

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
        subtitle="Clear answers about admissions, batch timings, curriculum, dress code, exams, and KKKV participation."
        image="/suha_media/suha_img_3.jpg"
        height="sm"
      />

      {/* Search & Filter Bar */}
      <section className="bg-white border-b border-ivory-200 py-6 sticky top-[69px] z-30 shadow-xs">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-navy-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search queries (e.g. salangai, fees, adult, Medavakkam, KKKV, exams)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-cream-50 border border-ivory-300 rounded-sm text-sm text-navy-900 placeholder:text-navy-400 focus:border-gold-500 focus:bg-white outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-navy-400 hover:text-navy-800"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Tabs */}
            <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
              {[
                { id: "all", label: "All Questions" },
                { id: "admissions", label: "Admissions & Centers" },
                { id: "dance", label: "Bharatanatyam" },
                { id: "music", label: "Carnatic Vocal" },
                { id: "kkkv", label: "KKKV Competition" },
                { id: "exams", label: "Certifications & Exams" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-1.5 text-xs uppercase tracking-wider font-medium rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    activeCategory === tab.id
                      ? "bg-navy-950 text-gold-300 shadow-sm"
                      : "bg-cream-100 text-navy-700 hover:bg-gold-50 hover:text-gold-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Questions */}
      <section className="relative py-20 md:py-28 bg-cream-50">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16 bg-white border border-ivory-200 rounded-sm p-8">
                <p className="font-display text-lg text-navy-900 mb-2">No matching questions found</p>
                <p className="text-xs text-navy-600 mb-6">
                  Try searching with different keywords, or message our coordinator directly on WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent(`Hi Suha Academy, I had a question: ${searchQuery}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold-500 text-navy-950 font-medium text-xs rounded-sm hover:bg-gold-400"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> Ask on WhatsApp
                </a>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {filteredFaqs.map((faq, i) => (
                  <Reveal key={faq.q} delay={i * 0.04}>
                    <details className="group bg-white border border-ivory-200 rounded-sm overflow-hidden hover:border-gold-300 transition-colors">
                      <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none select-none">
                        <span className="font-display text-base md:text-lg text-navy-900 font-medium group-open:text-gold-700 transition-colors">
                          {faq.q}
                        </span>
                        <ChevronDown className="w-5 h-5 text-gold-500 shrink-0 transition-transform duration-300 group-open:rotate-180" />
                      </summary>
                      <div className="px-6 pb-6 -mt-1 text-sm text-navy-700/80 leading-relaxed border-t border-ivory-100 pt-4">
                        {faq.a}
                      </div>
                    </details>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Direct Contact Teaser */}
      <section className="relative py-24 bg-paper text-center">
        <div className="container-wide section-padding">
          <OrnamentDivider className="mb-8" />
          <Reveal>
            <h2 className="text-display-md font-display text-navy-900 mb-3">
              Still Have Questions?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-navy-700/70 max-w-lg mx-auto mb-8 text-sm">
              Our team is ready to assist you with batch timings, fee structures, or scheduling a visit to your nearest center.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-cream-100 font-medium text-sm rounded-sm hover:bg-navy-800 transition-all duration-300 group shadow-md"
              >
                <span>Contact Academy</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent("Hi Suha Academy, I have a few questions regarding admissions.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium text-sm rounded-sm hover:bg-[#1da851] transition-all duration-300 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
