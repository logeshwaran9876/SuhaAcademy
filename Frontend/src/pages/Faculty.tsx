import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  MapPin,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { GoldFrame } from "@/components/Decorations";
import { facultyMembers, facultyHighlights, pedagogicalPillars } from "@/data/faculty";
import FacultyModal, { FacultyMember } from "@/components/FacultyModal";

type FilterDiscipline = "all" | "bharatanatyam" | "carnatic-music" | "mohiniyattam";

export default function Faculty() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<FilterDiscipline>("all");
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  const filteredFaculty = useMemo(() => {
    if (selectedDiscipline === "all") return facultyMembers;
    return facultyMembers.filter((f) => f.courseSlug === selectedDiscipline);
  }, [selectedDiscipline]);

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="Pedagogical Leadership"
        title="Faculty of Classical Arts"
        subtitle="Meet our revered masters, nurturing talent and preserving tradition through authentic training and dedicated guidance."
        image="/suha_media/shared/shared_media_asset_03.jpg"
        imagePosition="object-center"
        height="lg"
      />



      {/* 3. The Guru-Shishya Ethos & Pedagogical Pillars */}
      <section className="relative py-20 md:py-28 bg-cream-50 overflow-hidden">
        <div className="container-wide section-padding">
          <SectionHeader
            number="01"
            eyebrow="Our Educational Ethos"
            title="The Guru-Shishya Tradition"
            subtitle="At Suha Academy, classical arts are not taught as generic syllabi, but transmitted as a living tradition combining rigorous technique with personal character-building."
          />

        </div>
      </section>

      {/* 4. Discipline Filter Bar */}
      <section className="bg-white border-b border-ivory-200 sticky top-[69px] z-30 py-3.5 shadow-xs">
        <div className="container-wide section-padding">
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {[
              { id: "all", label: "All Gurus & Faculty" },
              { id: "bharatanatyam", label: "Bharatanatyam" },
              { id: "carnatic-music", label: "Carnatic Music" },
              { id: "mohiniyattam", label: "Mohiniyattam" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedDiscipline(tab.id as FilterDiscipline)}
                className={`px-5 py-2 text-xs uppercase tracking-wider font-medium rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedDiscipline === tab.id
                    ? "bg-navy-950 text-gold-300 shadow-sm"
                    : "bg-cream-100/70 text-navy-800 hover:bg-gold-50 hover:text-gold-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Faculty Cards Grid (Balanced 3-Column Layout with ZERO EMPTY SPACE) */}
      <section className="relative py-16 md:py-24 bg-paper overflow-hidden">
        <div className="container-wide section-padding max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFaculty.map((member, idx) => (
              <Reveal key={member.id} delay={idx * 0.08} className="h-full">
                <article
                  onClick={() => setSelectedFaculty(member)}
                  className="bg-white border border-ivory-200 rounded-sm overflow-hidden flex flex-col justify-between h-full hover:border-gold-400 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div>
                    {/* Framed Portrait with Discipline Tag */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-navy-950">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent pointer-events-none" />
                      <GoldFrame />

                      {/* Discipline Badge Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 text-left">
                        <span className="inline-block px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider bg-gold-500 text-navy-950 font-bold rounded-xs shadow-md">
                          {member.discipline}
                        </span>
                      </div>
                    </div>

                    {/* Card Content with Concise Description */}
                    <div className="p-6">
                      <span className="text-[11px] uppercase tracking-[0.18em] text-gold-600 font-semibold block mb-1">
                        {member.shortRole}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-medium text-navy-900 group-hover:text-gold-700 transition-colors leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-xs font-serif italic text-gold-800 mb-3">
                        {member.title}
                      </p>

                      {/* Concise Description Preview */}
                      <p className="text-xs sm:text-sm text-navy-700/85 leading-relaxed mb-4">
                        {member.shortBio}
                      </p>

                      {/* Quick Metadata Chips */}
                      <div className="space-y-1.5 pt-3 border-t border-ivory-200 text-[11px] text-navy-800/80">
                        <div className="flex items-center gap-1.5 font-medium text-gold-800">
                          <Sparkles className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                          <span>{member.experience.split("&")[0]}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-navy-600">
                          <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                          <span className="truncate">
                            {member.centers.map((c) => c.split("(")[0].replace(" Center", "")).join(" • ")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="p-6 pt-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedFaculty(member);
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-navy-950 text-gold-300 group-hover:bg-gold-500 group-hover:text-navy-950 font-medium text-xs uppercase tracking-wider rounded-sm transition-all duration-300 shadow-2xs cursor-pointer"
                    >
                      <span>View Full Profile & Repertoire</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Modal for Full Faculty Details */}
      <FacultyModal
        faculty={selectedFaculty}
        onClose={() => setSelectedFaculty(null)}
      />

      {/* 6. Call To Action: Learn Under Masters */}
      <section className="relative py-24 md:py-32 bg-navy-950 overflow-hidden text-center text-cream-100">
        <div className="absolute inset-0">
          <img
            src="/suha_media/shared/shared_page_header_banner.jpg"
            alt="Suha Academy Stage Heritage"
            loading="lazy"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/95 via-navy-950/85 to-navy-950/95" />
        </div>

        <div className="container-wide section-padding relative z-10 max-w-3xl mx-auto">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold block mb-4">
              Begin Your Artistic Journey
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-display-md md:text-display-lg font-display font-medium text-cream-50 mb-6 text-shadow-lg">
              Learn Directly Under Revered Gurus
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-sm md:text-base text-cream-100/75 leading-relaxed mb-8">
              Whether you are a beginner stepping into classical arts for the first time or an advanced
              student seeking rigorous Margam or concert choir preparation, our faculty provides
              authentic, patient, and personalized training across Medavakkam, Perumbakkam, and online.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-navy-950 font-medium text-sm tracking-wide rounded-sm transition-all duration-300 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/30 active:scale-[0.98]"
              >
                <span>Book an Introductory Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream-100/30 text-cream-50 font-medium text-sm tracking-wide rounded-sm transition-all duration-300 hover:border-gold-400 hover:text-gold-300"
              >
                <span>Browse All Courses</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
