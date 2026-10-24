import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCircle2,
  Sparkles,
  Award,
  GraduationCap,
  Music,
  MapPin,
  Calendar,
  Clock,
  MessageCircle,
  Phone,
  Layers,
  Compass,
  Users,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { GoldFrame, CornerMark } from "@/components/Decorations";
import { courses } from "@/data/courses";
import { academy } from "@/data/academy";

export default function CourseDetail({ slug }: { slug: string }) {
  const course = courses.find((c) => c.slug === slug);
  const [activeLevelIndex, setActiveLevelIndex] = useState(0);

  if (!course) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center bg-cream-50">
        <h2 className="text-2xl font-display font-bold text-navy-950 mb-3">
          Course Not Found
        </h2>
        <p className="text-sm text-navy-700/70 mb-6">
          The requested course does not exist or has been relocated.
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 px-6 py-3 bg-navy-950 text-gold-300 font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-gold-500 hover:text-navy-950 transition-all shadow-md"
        >
          <span>Browse All Courses</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const activeLevel = course.levels[activeLevelIndex] || course.levels[0];

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow={`${course.title} • ${course.tradition}`}
        title={course.title}
        subtitle={course.shortDescription}
        image={course.heroImage || course.image}
        imagePosition={course.heroImagePosition || "object-[84%_top] sm:object-[86%_top] lg:object-[88%_top]"}
        height="lg"
        badges={[course.tradition, "Beginner to Advanced", "Certified Curriculum"]}
      />



      {/* =========================================================================
          SECTION 1: COURSE OVERVIEW & TRADITION SPOTLIGHT
      ========================================================================= */}
      <section
        id="tradition-overview"
        className="relative py-20 md:py-28 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#F5EFE3] overflow-hidden border-b border-gold-400/30"
      >
        <div className="container-wide section-padding max-w-6xl mx-auto">
          <SectionHeader
            number="01"
            eyebrow={`${course.tradition} • Heritage`}
            title={`The Art & Heritage of ${course.title}`}
            subtitle={course.shortDescription}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-12">
            {/* Left: Framed High-Res Theatrical Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <Reveal className="w-full">
                <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-navy-950 shadow-2xl border-2 border-gold-500/50 group">
                  <img
                    src={course.secondaryImage || course.image}
                    alt={`${course.title} at Suha Academy`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent pointer-events-none" />
                  <GoldFrame />
                  <CornerMark className="absolute top-2 left-2 text-gold-400/80 w-6 h-6 pointer-events-none" />
                  <CornerMark className="absolute bottom-2 right-2 text-gold-400/80 w-6 h-6 pointer-events-none rotate-180" />

                  {/* Floating Tradition Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-navy-950/90 backdrop-blur-md border border-gold-400/50 p-3 rounded-xs shadow-lg text-cream-100">
                      <div className="flex items-center gap-1.5 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">
                        <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />
                        <span>{course.tradition}</span>
                      </div>
                      <p className="text-[11px] text-cream-200/90 leading-tight">
                        Authentic classical transmission upholding shastric geometry, bhava and tala precision.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Quick Metadata Chips */}
              <div className="w-full mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs p-3 rounded-sm bg-white border border-gold-400/30 shadow-xs">
                  <span className="font-semibold text-navy-950">Training Formats</span>
                </div>
                <div className="flex items-center justify-between text-xs p-3 rounded-sm bg-white border border-gold-400/30 shadow-xs">
                  <span className="font-semibold text-navy-950">Discipline Lead</span>
                  <span className="font-semibold text-gold-800">{course.leadGuru.split("&")[0]}</span>
                </div>
              </div>
            </div>

            {/* Right: Detailed Pedagogical Introduction */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <Reveal>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 text-[11px] uppercase font-mono tracking-wider bg-gold-500 text-navy-950 font-bold rounded-full shadow-2xs">
                    {course.tradition}
                  </span>
                  {course.tamilTitle && (
                    <span className="px-3 py-1 text-xs font-serif font-bold text-navy-900 bg-white border border-gold-400/30 rounded-full">
                      {course.tamilTitle}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-navy-950 font-bold tracking-tight">
                  Systematic Shastric Training Across Three Progressive Stages
                </h3>
              </Reveal>

              {/* Narrative Paragraphs from User */}
              <Reveal delay={0.1}>
                <div className="space-y-4 text-navy-900/90 text-sm sm:text-base leading-relaxed font-sans">
                  {course.intro.split("\n\n").map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>
              </Reveal>

              {/* 4 Core Highlights Grid */}
              <Reveal delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {course.keyFeatures.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-3.5 rounded-sm bg-white border border-gold-400/35 shadow-xs hover:border-gold-500 transition-colors"
                    >
                      <h4 className="text-xs uppercase tracking-wider font-bold text-gold-800 mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <span>{feat.title}</span>
                      </h4>
                      <p className="text-xs text-navy-800/85 leading-snug">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Action Buttons */}
              <Reveal delay={0.3}>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="#curriculum-stages"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy-950 text-gold-300 font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 shadow-md"
                  >
                    <span>Explore 3-Stage Curriculum</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: INTERACTIVE 3-STAGE CURRICULUM
          Beginner, Intermediate, Advanced with all modules, theory, & milestones
      ========================================================================= */}
      <section
        id="curriculum-stages"
        className="relative py-20 md:py-28 bg-paper overflow-hidden border-b border-ivory-300"
      >
        <div className="container-wide section-padding max-w-6xl mx-auto">
          <SectionHeader
            number="02"
            eyebrow="Structured Pedagogy"
            title="Three Progressive Stages of Mastery"
            subtitle="Each stage builds upon foundational mechanics and rhythm, nurturing technical command, expressive sophistication and independent performance readiness."
          />

          {/* Level Switcher Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10 max-w-4xl mx-auto">
            {course.levels.map((lvl, lIdx) => {
              const shortName = lvl.name.split("(")[0].trim();
              const subName = lvl.name.includes("(")
                ? lvl.name.split("(")[1].replace(")", "").trim()
                : lvl.badge || "";
              const isActive = activeLevelIndex === lIdx;

              return (
                <button
                  key={lvl.id || lIdx}
                  type="button"
                  onClick={() => setActiveLevelIndex(lIdx)}
                  className={`w-full py-3.5 px-4 rounded-sm sm:rounded-full text-xs font-bold transition-all duration-300 flex flex-col items-center justify-center gap-1 cursor-pointer shadow-xs text-center border ${isActive
                    ? "bg-navy-950 text-gold-300 border-gold-400 ring-2 ring-gold-400/40 shadow-md"
                    : "bg-white text-navy-800 border-gold-400/30 hover:border-gold-500 hover:bg-gold-50/60"
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${isActive ? "bg-gold-400" : "bg-gold-600/40"
                        }`}
                    />
                    <span className="uppercase tracking-wider font-bold">
                      {shortName}
                    </span>
                  </div>
                  {subName && (
                    <span
                      className={`text-[10px] sm:text-[11px] font-normal leading-tight ${isActive ? "text-gold-200/80" : "text-navy-600/75"
                        }`}
                    >
                      ({subName})
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Level Card */}
          <div className="mt-8 bg-white border-2 border-gold-400/40 rounded-sm shadow-xl overflow-hidden relative">
            {/* Top Gold Filigree Trim */}
            <div className="h-1.5 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-700 w-full" />

            <div className="p-6 sm:p-10 lg:p-12">
              {/* Level Header Banner */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gold-400/30">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 text-[11px] uppercase font-mono tracking-wider bg-gold-500 text-navy-950 font-bold rounded-xs shadow-2xs">
                      {activeLevel.badge}
                    </span>
                    <span className="text-xs font-semibold text-gold-800">
                      ✦ Level {activeLevelIndex + 1} of 3
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-navy-950 font-bold">
                    {activeLevel.name}: {activeLevel.subtitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-800/80 mt-1 max-w-2xl leading-relaxed">
                    {activeLevel.description}
                  </p>
                </div>

                {/* Milestone Badge Pill */}
                {activeLevel.milestone && (
                  <div className="shrink-0 p-3.5 rounded-sm bg-gradient-to-r from-gold-100/90 via-gold-50/80 to-[#FAF6EE] border border-gold-500/40 max-w-sm">
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
                      <span className="text-xs font-bold text-navy-950 leading-snug">
                        {activeLevel.milestone}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Modules Grid */}
              <div className="mt-8">
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gold-800 mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-gold-600" />
                  <span>Curriculum Modules & Shastric Practice</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeLevel.modules?.map((mod, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-4 sm:p-5 rounded-sm bg-[#FAF7F0] border border-gold-400/25 hover:border-gold-500 transition-all hover:shadow-md flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="w-5 h-5 rounded-full bg-gold-500 text-navy-950 text-[10px] font-bold flex items-center justify-center shrink-0">
                            {mIdx + 1}
                          </span>
                          <h5 className="font-display text-base font-bold text-navy-950">
                            {mod.title}
                          </h5>
                        </div>
                        <p className="text-xs sm:text-sm text-navy-800/85 leading-relaxed pl-7">
                          {mod.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage Transition Navigation Footer */}
              <div className="mt-10 pt-6 border-t border-gold-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-medium text-navy-800">
                  <GraduationCap className="w-4 h-4 text-gold-600" />
                  <span>
                    Progression: Continuous periodic assessment with personalized guru feedback.
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {activeLevelIndex > 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveLevelIndex(activeLevelIndex - 1)}
                      className="px-4 py-2 border border-navy-950/20 text-navy-950 font-semibold text-xs uppercase tracking-wider rounded-sm hover:border-gold-500 transition-colors cursor-pointer"
                    >
                      ← Previous Stage
                    </button>
                  )}
                  {activeLevelIndex < course.levels.length - 1 && (
                    <button
                      type="button"
                      onClick={() => setActiveLevelIndex(activeLevelIndex + 1)}
                      className="px-5 py-2 bg-navy-950 text-gold-300 font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-gold-500 hover:text-navy-950 transition-colors cursor-pointer"
                    >
                      Next Stage →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: REVERED GURU & PEDAGOGICAL LEAD
      ========================================================================= */}
      <section
        id="faculty-lead"
        className="relative py-20 md:py-28 bg-[#FAF6EE] overflow-hidden border-b border-gold-400/30"
      >
        <div className="container-wide section-padding max-w-6xl mx-auto">
          <SectionHeader
            number="03"
            eyebrow="Pedagogical Mentorship"
            title="Learn Under Revered Classical Gurus"
            subtitle="Training at Suha Academy is guided directly by accomplished exponents carrying forward revered traditional lineages."
          />

          <div className="mt-12 bg-white rounded-sm border-2 border-gold-400/35 shadow-xl p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Guru Framed Portrait */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-sm overflow-hidden bg-navy-950 shadow-xl border-2 border-gold-500/50 group">
                  <img
                    src={course.guruImage}
                    alt={course.leadGuru}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />
                  <GoldFrame />
                  <CornerMark className="absolute top-2 left-2 text-gold-400/80 w-5 h-5 pointer-events-none" />
                  <CornerMark className="absolute bottom-2 right-2 text-gold-400/80 w-5 h-5 pointer-events-none rotate-180" />
                </div>
              </div>

              {/* Guru Bio & Lineage */}
              <div className="lg:col-span-8 flex flex-col space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-gold-700 font-bold block mb-1">
                    Discipline Lead & Mentor
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-950">
                    {course.leadGuru}
                  </h3>
                  <p className="text-sm font-serif italic text-gold-800 font-medium mt-0.5">
                    {course.guruRole}
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-[#FAF7F0] border-l-4 border-gold-500 text-xs sm:text-sm text-navy-900 leading-relaxed font-serif italic">
                  &ldquo;Classical art is not merely stage performance; it is a sacred sadhana that cultivates humility, character, geometric discipline and lifelong inner joy in every student.&rdquo;
                </div>

                <p className="text-xs sm:text-sm text-navy-800/90 leading-relaxed">
                  Students at Suha Academy benefit from direct guru mentorship upholding authentic
                  postures, precise tala counting and genuine expressive depth. Whether preparing for
                  Salangai Poojas, sabha concerts, or full solo debut Arangetrams, every disciple
                  receives patient, personalized guidance.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to={course.guruLink || "/faculty"}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-950 text-gold-300 font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 shadow-xs group"
                  >
                    <span>View Full Guru Profile & Lineage</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/faculty"
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-gold-500/40 text-navy-900 font-semibold text-xs uppercase tracking-wider rounded-sm hover:border-gold-600 transition-colors bg-white"
                  >
                    <span>Meet All Faculty</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: DEDICATED VISUAL GALLERY & STAGE GLIMPSES
      ========================================================================= */}
      <section
        id="course-gallery"
        className="relative py-20 md:py-28 bg-paper overflow-hidden border-b border-ivory-300"
      >
        <div className="container-wide section-padding max-w-6xl mx-auto">
          <SectionHeader
            number="04"
            eyebrow="Visual Archives"
            title={`${course.title} Glimpses & Recitals`}
            subtitle="Authentic moments of dedicated studio practice, sacred ceremonies and vibrant stage presentations."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {course.galleryImages.map((img, gIdx) => (
              <Reveal key={gIdx} delay={gIdx * 0.08}>
                <div className="bg-white border-2 border-gold-400/30 rounded-sm overflow-hidden shadow-md group hover:border-gold-500 hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy-950">
                    <img
                      src={img.src}
                      alt={img.caption}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
                    <GoldFrame />
                  </div>
                  <div className="p-3.5 bg-white">
                    <p className="text-xs font-medium text-navy-900 leading-snug">
                      {img.caption}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy-950 text-navy-950 font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-navy-950 hover:text-gold-300 transition-all duration-300 bg-white"
            >
              <span>Explore Complete Academy Photo Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: LEARNING VENUES & BATCH SCHEDULES
      ========================================================================= */}
      <section
        id="venues-schedule"
        className="relative py-20 md:py-28 bg-[#FAF6EE] overflow-hidden border-b border-gold-400/30"
      >
        <div className="container-wide section-padding max-w-6xl mx-auto">
          <SectionHeader
            number="05"
            eyebrow="Centers & Formats"
            title="Studio Centers & Batch Formats"
            subtitle="Attend classes at our fully equipped Chennai dance and music studios or join interactive global live masterclasses."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {[
              {
                title: "Medavakkam Center",
                venue: "Navins Starwood Towers Clubhouse",
                address: "Vengaivasal Main Road, Medavakkam, Chennai - 600100",
                features: ["Air-conditioned Mirror Studio", "Acoustic Flooring", "Weekday & Weekend Batches"],
                tag: "Central Studio",
              },
              {
                title: "Perumbakkam Center",
                venue: "Ixora Clubhouse, Bollineni Hillside",
                address: "Oak 1406, Nookampalayam Link Rd, Chennai - 600126",
                features: ["Spacious Classical Dance Hall", "Parent Waiting Lounge", "Morning & Evening Batches"],
                tag: "Bollineni Center",
              },

            ].map((loc, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="p-6 sm:p-7 bg-white border-2 border-gold-400/30 rounded-sm shadow-xs hover:border-gold-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider bg-gold-500 text-navy-950 font-bold rounded-xs shadow-2xs">
                        {loc.tag}
                      </span>
                      <MapPin className="w-4 h-4 text-gold-600" />
                    </div>

                    <h4 className="font-display text-xl font-bold text-navy-950 mb-1">
                      {loc.title}
                    </h4>
                    <p className="text-xs font-semibold text-gold-800 mb-2">
                      {loc.venue}
                    </p>
                    <p className="text-xs text-navy-700/80 leading-relaxed mb-4">
                      {loc.address}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-ivory-200">
                      {loc.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-navy-900">
                          <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-ivory-200">
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#FAF6EE] text-navy-950 hover:bg-gold-500 font-semibold text-xs uppercase tracking-wider rounded-xs transition-colors"
                    >
                      <span>Inquire Batch Timings</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Direct Coordinator Desk Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-sm bg-white border-2 border-gold-400/30 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold-700 block">
                Admissions & Studio Inquiries
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-navy-950">
                Ready to Begin Your Classical Journey?
              </h4>
              <p className="text-xs sm:text-sm text-navy-700/80 max-w-xl">
                Speak directly with our academy desk to discuss age criteria, batch schedules, or book a trial class.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs text-navy-900 font-semibold">
                <a
                  href={`tel:${academy.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-navy-900 hover:text-gold-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-700" />
                  <span>{academy.phone}</span>
                </a>
                <span className="text-gold-400">•</span>
                <a
                  href="https://wa.me/919994883303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <Link
                to="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-gold-400/40 text-cream-100 hover:text-white hover:border-gold-300 font-semibold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 backdrop-blur-md bg-gold-500/5 hover:bg-gold-500/15 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1 text-gold-400" />
                <span>All Courses</span>
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy-950 text-gold-300 font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 shadow-md group"
              >
                <span>Contact Admissions Desk</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
