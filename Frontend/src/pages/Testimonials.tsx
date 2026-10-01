import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote, CheckCircle2, MessageCircle, MapPin, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Reveal } from "@/components/Reveal";
import { OrnamentDivider } from "@/components/Decorations";
import { academy } from "@/data/academy";

interface CommunityReview {
  id: string;
  name: string;
  role: string;
  category: "dance" | "music" | "kkkv" | "adults";
  branch: string;
  rating: number;
  quote: string;
  year: string;
}

const communityReviews: CommunityReview[] = [
  {
    id: "1",
    name: "Dr. K. Sangeetha",
    role: "Parent of Ananya (Arangetram Disciple)",
    category: "dance",
    branch: "Medavakkam Center",
    rating: 5,
    quote:
      "Guru Smt. Ranjini Pradeep's commitment to classical purity is peerless. My daughter Ananya joined Suha Academy at age 6 and completed her full solo Arangetram last year. The stamina, stage poise, and Araimandi perfection she learned here transformed her personality completely.",
    year: "Batch of 2024",
  },
  {
    id: "2",
    name: "R. Venkatesh & Priya",
    role: "Parents of Harish (Junior Vocal)",
    category: "music",
    branch: "Perumbakkam Center",
    rating: 5,
    quote:
      "Learning Carnatic Vocal at the Bollineni Hillside center has been a blessing. The shruti discipline, voice culture, and devotional sahithyam explanation by the faculty make every class a meditative experience. Performing in the Annual Day choir was unforgettable.",
    year: "Batch of 2025",
  },
  {
    id: "3",
    name: "Malini Sundaram",
    role: "Adult Learner & Homemaker",
    category: "adults",
    branch: "Old Perungalathur Center",
    rating: 5,
    quote:
      "I had paused dancing for nearly 16 years after college. Suha Academy welcomed me into their adult batch with so much warmth. Ranjini Ma'am teaches with immense patience and ensures our postures are safe yet authentic. It is my happiest hour every week.",
    year: "Batch of 2024",
  },
  {
    id: "4",
    name: "S. Aravindhan",
    role: "Parent of KKKV 2025 Gold Medalist",
    category: "kkkv",
    branch: "Perumbakkam Center",
    rating: 5,
    quote:
      "Kodai Kaala Kalai Vizha (KKKV) is hands down one of the most organized and transparent classical competitions in Chennai. The feedback given by the senior judges was deeply insightful, and the respect given to every participating child is commendable.",
    year: "KKKV 2025",
  },
  {
    id: "5",
    name: "Deepa Ramanathan",
    role: "Parent of Tanvi (Grade 3 Bridge Academy Exam)",
    category: "dance",
    branch: "Medavakkam Center",
    rating: 5,
    quote:
      "The academic structure with annual grade examinations gives children clear milestones. My daughter passed Grade 3 with distinction thanks to the thorough theory and adavu drill practice at the Navins Starwood branch.",
    year: "Batch of 2025",
  },
  {
    id: "6",
    name: "N. Lakshmi",
    role: "Carnatic Vocal Student (Intermediate)",
    category: "music",
    branch: "Global Online Batch",
    rating: 5,
    quote:
      "Attending live 1-on-1 vocal classes from Singapore has been seamless. The audio fidelity, shruti app synchronization, and instant feedback on gamakas made me feel like I was learning right inside the Chennai academy.",
    year: "Batch of 2025",
  },
];

type CategoryFilter = "all" | "dance" | "music" | "kkkv" | "adults";

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredReviews = useMemo(() => {
    if (activeCategory === "all") return communityReviews;
    return communityReviews.filter((r) => r.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <PageHero
        eyebrow="Community & Acclaim"
        title="Voices of Our Community"
        subtitle="Genuine experiences shared by parents, students, adult learners, and festival participants across our Chennai centers."
        image="/suha_media/suha_img_1.jpg"
        height="lg"
      />

      {/* Trust & Accolades Strip */}
      <section className="bg-white border-b border-ivory-200 py-6">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <div className="flex items-center justify-center gap-1 text-gold-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-display text-2xl font-bold text-navy-900">4.9 / 5.0</p>
              <p className="text-[11px] text-navy-600/70 uppercase tracking-wider font-medium">Public Trust Rating</p>
            </div>

            <div className="p-3 border-l border-ivory-200">
              <p className="font-display text-2xl font-bold text-gold-600">600+</p>
              <p className="text-[11px] text-navy-600/70 uppercase tracking-wider font-medium mt-1">Disciples Mentored</p>
            </div>

            <div className="p-3 border-l border-ivory-200">
              <p className="font-display text-2xl font-bold text-navy-900">15+ Years</p>
              <p className="text-[11px] text-navy-600/70 uppercase tracking-wider font-medium mt-1">Artistic Excellence</p>
            </div>

            <div className="p-3 border-l border-ivory-200">
              <p className="font-display text-2xl font-bold text-gold-600">100%</p>
              <p className="text-[11px] text-navy-600/70 uppercase tracking-wider font-medium mt-1">Exam Pass Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="relative py-20 md:py-28 bg-cream-50">
        <div className="container-wide section-padding">
          <div className="max-w-4xl mx-auto">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Filter Tabs Bar */}
      <section className="bg-paper border-y border-ivory-200 sticky top-[69px] z-30 py-3 shadow-xs">
        <div className="container-wide section-padding">
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {[
              { id: "all", label: "All Voices" },
              { id: "dance", label: "Bharatanatyam Parents" },
              { id: "music", label: "Carnatic Vocal Students" },
              { id: "kkkv", label: "KKKV Competitors" },
              { id: "adults", label: "Adult Learners" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as CategoryFilter)}
                className={`px-4 py-1.5 text-xs uppercase tracking-wider font-medium rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-navy-950 text-gold-300 shadow-sm"
                    : "bg-white text-navy-800 hover:bg-gold-50 hover:text-gold-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="relative py-20 md:py-28 bg-cream-50">
        <div className="container-wide section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredReviews.map((r, i) => (
              <Reveal key={r.id} delay={i * 0.08} className="h-full">
                <article className="h-full bg-white border border-ivory-200 rounded-sm p-7 flex flex-col justify-between hover:border-gold-300 hover:shadow-xl transition-all duration-300 group">
                  <div>
                    {/* Stars & Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-gold-500">
                        {[...Array(r.rating)].map((_, idx) => (
                          <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-cream-100 text-navy-700 font-semibold rounded-xs">
                        {r.year}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="font-serif text-base text-navy-800/90 italic leading-relaxed mb-6">
                      &ldquo;{r.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author Meta */}
                  <div className="pt-4 border-t border-ivory-100">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-display font-semibold text-navy-900">
                        {r.name}
                      </p>
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" />
                    </div>
                    <p className="text-xs text-gold-700 font-medium">{r.role}</p>
                    <p className="text-[11px] text-navy-600/60 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gold-500" />
                      {r.branch}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Share Your Story Card */}
          <div className="mt-16 max-w-2xl mx-auto bg-white border border-gold-500/20 p-8 rounded-sm text-center shadow-xs">
            <Sparkles className="w-6 h-6 text-gold-500 mx-auto mb-3" />
            <h3 className="font-display text-lg text-navy-900 mb-2">Are you a Suha Academy parent or alumni?</h3>
            <p className="text-xs text-navy-700/70 mb-5 leading-relaxed">
              We cherish hearing how classical arts have enriched your life or your child's confidence. Share your thoughts with us.
            </p>
            <a
              href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent("Hi Suha Academy, I would like to share our testimonial & review.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#25D366] text-white text-xs font-semibold rounded-sm hover:bg-[#1da851] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Submit Review via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-navy-950 text-center text-cream-100">
        <div className="container-wide section-padding">
          <OrnamentDivider light className="mb-8" />
          <Reveal>
            <h2 className="text-display-md font-display text-cream-50 mb-3">
              Join Our Thriving Community
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-cream-100/60 max-w-lg mx-auto mb-8 text-sm">
              Experience the disciplined joy of Bharatanatyam and Carnatic vocal under Guru Smt. Ranjini Pradeep.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-950 font-medium text-sm rounded-sm hover:bg-gold-400 transition-all duration-300 group shadow-md"
            >
              <span>Enquire About Admissions</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
