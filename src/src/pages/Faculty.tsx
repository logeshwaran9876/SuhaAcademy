import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  Award,
  GraduationCap,
  Music,
  CheckCircle2,
  Users,
  Compass,
  HeartHandshake,
  Share2,
  CalendarCheck,
  Building2,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { GoldFrame, CornerMark } from "@/components/Decorations";
import {
  founderMember,
  instructors,
  coordinators,
  facultyHighlights,
  pedagogicalPillars,
} from "@/data/faculty";
import FacultyModal, { FacultyMember } from "@/components/FacultyModal";

export default function Faculty() {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);
  const [activeSection, setActiveSection] = useState<string>("founder-spotlight");

  useEffect(() => {
    const sectionIds = ["founder-spotlight", "classical-instructors", "academy-coordinators"];

    const handleScroll = () => {
      // Offset for fixed navbar (~69px) + sticky jump bar (~52px) + buffer (~60px)
      const scrollPosition = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          if (scrollPosition >= el.offsetTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    if (window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      if (sectionIds.includes(hashId)) {
        setActiveSection(hashId);
      }
    } else {
      handleScroll();
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 69;
      const stickyBarHeight = 52;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - (navbarHeight + stickyBarHeight + 10);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero pageKey="faculty" />

      {/* Quick In-Page Jump Anchor Bar */}
      <div className="bg-[#FAF7F0] border-b border-gold-400/30 sticky top-[69px] z-30 py-3 shadow-xs">
        <div className="container-wide section-padding flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar">
          {[
            { id: "founder-spotlight", label: "Guru Smt. Ranjini Pradeep" },
            { id: "classical-instructors", label: "Classical Instructors" },
            { id: "academy-coordinators", label: "Academy Co-ordinators" },
          ].map((tab) => {
            const isActive = activeSection === tab.id;
            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={(e) => scrollToSection(e, tab.id)}
                className={`px-4 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer border ${isActive
                  ? "bg-navy-950 text-gold-300 border-navy-950 shadow-sm"
                  : "bg-cream-100/80 text-navy-900 border-gold-400/30 hover:bg-gold-50 hover:text-gold-800"
                  }`}
              >
                {tab.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          TIER 1: FOUNDER & ARTISTIC DIRECTOR — GURU SMT. RANJINI PRADEEP
          Separate & Big in Size with Grand Editorial Layout
      ========================================================================= */}
      <section
        id="founder-spotlight"
        className="relative py-20 md:py-28 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#F5EFE3] overflow-hidden border-b border-gold-400/30 scroll-mt-32"
      >
        {/* Subtle Background Mandala / Glow Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial from-gold-500/10 via-transparent to-transparent pointer-events-none blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-radial from-maroon-500/5 via-transparent to-transparent pointer-events-none blur-3xl" />

        <div className="container-wide section-padding max-w-6xl mx-auto relative z-10">
          <SectionHeader
            number="01"
            eyebrow="Founder & Artistic Director"
            title="Guru Smt. Ranjini Pradeep"
            subtitle="Founder • Bharathanatyam Dancer • Carnatic Vocalist • Performing Artist"
          />

          {/* Founder Profile Card */}
          <Reveal>
            <article
              onClick={() => setSelectedFaculty(founderMember as unknown as FacultyMember)}
              className="max-w-md mx-auto mt-10 bg-white border-2 border-gold-400/40 rounded-sm overflow-hidden shadow-xl hover:border-gold-500 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              {/* Gold Filigree Header Trim */}
              <div className="h-1.5 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-700 w-full" />

              {/* Framed Portrait */}
              <div className="relative aspect-[4/5] overflow-hidden bg-navy-950">
                <img
                  src={founderMember.image}
                  alt="Guru Smt. Ranjini Pradeep - Founder & Artistic Director"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Award Pill */}

              </div>

              {/* Name & Designation */}
              <div className="p-6 text-center">
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold-700 font-bold block mb-1">
                  Founder & Artistic Director
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
                  Guru Smt. Ranjini Pradeep
                </h3>
                <p className="text-xs font-serif italic text-gold-800 font-medium mt-1 mb-4">
                Dedicated to preserving and nurturing the timeless traditions of Indian classical arts
                </p>

                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-navy-950 text-gold-300 group-hover:bg-gold-500 group-hover:text-navy-950 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm">

                  <span>View Full Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          TIER 2: CLASSICAL INSTRUCTORS (2 PERSONS)
          Smt. Swarna Sahasra & Sri J. Thinagar Raja
      ========================================================================= */}
      <section
        id="classical-instructors"
        className="relative py-20 md:py-28 bg-paper overflow-hidden border-b border-ivory-300 scroll-mt-32"
      >
        <div className="container-wide section-padding max-w-6xl mx-auto">
          <SectionHeader
            number="02"
            eyebrow="Classical Gurus & Mentors"
            title="Classical Instructors"
            subtitle="Distinguished performing artists and dedicated educators carrying forward unbroken lineages in Mohiniyattam, Bharathanatyam and Carnatic music."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-10">
            {instructors.map((instructor, idx) => (
              <Reveal key={instructor.id} delay={idx * 0.1} className="h-full">
                <article
                  onClick={() => setSelectedFaculty(instructor as unknown as FacultyMember)}
                  className="bg-white border-2 border-gold-400/40 rounded-sm overflow-hidden flex flex-col justify-between h-full hover:border-gold-500 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                >
                  {/* Top Section: Framed Portrait */}
                  <div className="relative aspect-[4/5] sm:aspect-[4/3] overflow-hidden bg-navy-950">
                    <img
                      src={instructor.image}
                      alt={`${instructor.name} - ${instructor.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
                    <GoldFrame />




                  </div>

                  {/* Name & Designation */}
                  <div className="p-6 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-gold-700 font-bold block mb-1">
                        {instructor.shortRole}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
                        {instructor.name}
                      </h3>
                      <p className="text-xs font-serif italic text-gold-800 font-medium mt-1 mb-4">

                      </p>
                    </div>

                    <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-navy-950 text-gold-300 group-hover:bg-gold-500 group-hover:text-navy-950 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm mx-auto">

                      <span>View Full Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TIER 3: ACADEMY CO-ORDINATORS
          Ranjani Dinesh (Media Co-ordinator) & Mahalakshmi Dinakaran (Student Co-ordinator)
      ========================================================================= */}
      <section
        id="academy-coordinators"
        className="relative py-20 md:py-28 bg-[#FAF6EE] overflow-hidden border-b border-gold-400/30 scroll-mt-32"
      >
        <div className="container-wide section-padding max-w-6xl mx-auto">
          <SectionHeader
            number="03"
            eyebrow="Administration & Student Care"
            title="Academy Co-ordinators"
            subtitle="Professional coordinators providing dedicated support across student admissions, parent liaison, operations and dynamic media communications."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-10">
            {coordinators.map((coordinator, idx) => (
              <Reveal key={coordinator.id} delay={idx * 0.1} className="h-full">
                <article
                  onClick={() => setSelectedFaculty(coordinator as unknown as FacultyMember)}
                  className="bg-white border-2 border-gold-400/40 rounded-sm overflow-hidden flex flex-col justify-between h-full hover:border-gold-500 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                >
                  {/* Top Section: Framed Portrait */}
                  <div className="relative aspect-[4/5] sm:aspect-[4/3] overflow-hidden bg-navy-950">
                    <img
                      src={coordinator.image}
                      alt={`${coordinator.name} - ${coordinator.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-[center_12%] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
                    <GoldFrame />


                    {/* Experience / Tenure */}

                  </div>

                  {/* Name & Designation */}
                  <div className="p-6 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-gold-700 font-bold block mb-1">
                        {coordinator.discipline}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
                        {coordinator.name}
                      </h3>
                      <p className="text-xs font-serif italic text-gold-800 font-medium mt-1 mb-4">
                        {coordinator.title}
                      </p>
                    </div>

                    <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-navy-950 text-gold-300 group-hover:bg-gold-500 group-hover:text-navy-950 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm mx-auto">

                      <span>View Full Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PEDAGOGICAL PILLARS & ACADEMY HERITAGE
      ========================================================================= */}

      {/* =========================================================================
          MODAL FOR COMPLETE PROFILES
      ========================================================================= */}
      <FacultyModal
        faculty={selectedFaculty}
        onClose={() => setSelectedFaculty(null)}
      />

      {/* =========================================================================
          CALL TO ACTION: LEARN DIRECTLY UNDER REVERED GURUS
      ========================================================================= */}
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
              authentic, patient and personalized training across Medavakkam, Perumbakkam.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-7 sm:py-3.5 bg-gradient-to-r from-gold-500 via-gold-400 to-amber-400 hover:from-gold-400 hover:to-amber-300 text-navy-950 font-semibold text-xs sm:text-sm tracking-wide rounded-md shadow-lg shadow-gold-500/25 transition-all duration-300 group hover:translate-y-[-1px] active:scale-[0.99] whitespace-nowrap"
              >
                <span>Book an Introductory Session</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1 text-navy-950" />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-7 sm:py-3.5 border border-gold-400/40 hover:border-gold-300 text-cream-100 hover:text-white font-medium text-xs sm:text-sm tracking-wide rounded-md transition-all duration-300 backdrop-blur-md bg-gold-500/5 hover:bg-gold-500/15 shadow-lg shadow-black/20 group hover:translate-y-[-1px] active:scale-[0.99] whitespace-nowrap"
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
