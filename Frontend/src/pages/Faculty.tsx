import { useState } from "react";
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

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero pageKey="faculty" />

      {/* Quick In-Page Jump Anchor Bar */}
      <div className="bg-[#FAF7F0] border-b border-gold-400/30 sticky top-[69px] z-30 py-3 shadow-xs">
        <div className="container-wide section-padding flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar">
          <a
            href="#founder-spotlight"
            className="px-4 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-full bg-navy-950 text-gold-300 hover:bg-gold-500 hover:text-navy-950 transition-all duration-200 whitespace-nowrap shadow-2xs"
          >
            ✦ Guru Smt. Ranjini Pradeep
          </a>
          <a
            href="#classical-instructors"
            className="px-4 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-full bg-cream-100/80 text-navy-900 border border-gold-400/30 hover:bg-gold-50 hover:text-gold-800 transition-all duration-200 whitespace-nowrap"
          >
            ✦ Classical Instructors
          </a>
          <a
            href="#academy-coordinators"
            className="px-4 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-full bg-cream-100/80 text-navy-900 border border-gold-400/30 hover:bg-gold-50 hover:text-gold-800 transition-all duration-200 whitespace-nowrap"
          >
            ✦ Academy Co-ordinators
          </a>
          <a
            href="#pedagogy-ethos"
            className="px-4 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-full bg-cream-100/80 text-navy-900 border border-gold-400/30 hover:bg-gold-50 hover:text-gold-800 transition-all duration-200 whitespace-nowrap"
          >
            ✦ Pedagogical Ethos
          </a>
        </div>
      </div>

      {/* =========================================================================
          TIER 1: FOUNDER & ARTISTIC DIRECTOR — GURU SMT. RANJINI PRADEEP
          Separate & Big in Size with Grand Editorial Layout
      ========================================================================= */}
      <section
        id="founder-spotlight"
        className="relative py-20 md:py-28 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#F5EFE3] overflow-hidden border-b border-gold-400/30"
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

          {/* Grand Founder Editorial Card */}
          <Reveal>
            <div className="bg-white rounded-sm border-2 border-gold-500/40 shadow-2xl overflow-hidden relative">
              {/* Gold Filigree Header Trim */}
              <div className="h-1.5 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-700 w-full" />

              <div className="p-6 sm:p-10 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Big Framed Portrait with Accolades */}
                  <div className="lg:col-span-5 flex flex-col items-center">
                    <div className="relative w-full max-w-[360px] lg:max-w-none aspect-[4/5] rounded-sm overflow-hidden bg-navy-950 shadow-2xl border-2 border-gold-500/60 group">
                      <img
                        src={founderMember.image}
                        alt="Guru Smt. Ranjini Pradeep"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
                      <GoldFrame />
                      <CornerMark className="absolute top-2 left-2 text-gold-400/80 w-6 h-6 pointer-events-none" />
                      <CornerMark className="absolute bottom-2 right-2 text-gold-400/80 w-6 h-6 pointer-events-none rotate-180" />

                      {/* Floating Accolade Badge on Portrait */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-navy-950/90 backdrop-blur-md border border-gold-400/50 p-3 rounded-xs shadow-lg text-cream-100 space-y-1">
                          <div className="flex items-center gap-1.5 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                            <Award className="w-4 h-4 text-gold-400 shrink-0" />
                            <span>Title: Natya Thaaragai</span>
                          </div>
                          <p className="text-[11px] text-cream-200/90 leading-tight">
                            Lions Club Honour • Best Female Dancer RDC–NCC Parade New Delhi
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Highlights Under Portrait */}
                    <div className="w-full max-w-[360px] lg:max-w-none mt-5 space-y-2.5">
                      <div className="flex items-center justify-between text-xs p-3 rounded-sm bg-[#FAF6EE] border border-gold-400/30">
                        <span className="font-semibold text-navy-950">Teaching Pedagogy</span>
                        <span className="font-mono font-bold text-gold-800">16+ Years</span>
                      </div>
                      <div className="flex items-center justify-between text-xs p-3 rounded-sm bg-[#FAF6EE] border border-gold-400/30">
                        <span className="font-semibold text-navy-950">Artistic Journey</span>
                        <span className="font-mono font-bold text-gold-800">Began at Age 7</span>
                      </div>
                      <div className="flex items-center justify-between text-xs p-3 rounded-sm bg-[#FAF6EE] border border-gold-400/30">
                        <span className="font-semibold text-navy-950">Lineage Membership</span>
                        <span className="font-semibold text-gold-800">Life Member, ABHAI</span>
                      </div>
                    </div>

                    {/* Sacred Quote Card */}
                    <div className="w-full max-w-[360px] lg:max-w-none mt-4 p-4 rounded-sm bg-gradient-to-r from-gold-100/90 via-gold-50/70 to-[#FAF6EE] border-l-4 border-gold-500 shadow-xs">
                      <p className="text-xs font-serif italic text-navy-950 leading-relaxed font-medium">
                        &ldquo;Classical dance and music are not merely stage performances; they are a sacred sadhana that cultivates humility, character, discipline, and lifelong inner joy in every student.&rdquo;
                      </p>
                    </div>

                    {/* Core Classical Pillars & Accolades Box (Moved to Left Column to eliminate empty space) */}
                    <div className="w-full max-w-[360px] lg:max-w-none mt-4 pt-3 border-t border-gold-400/30">
                      <h4 className="text-xs uppercase tracking-wider font-bold text-gold-800 mb-2.5 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" />
                        <span>Core Classical Pillars & Repertoire</span>
                      </h4>
                      <div className="space-y-1.5">
                        {[
                          "Master’s Degree in Bharathanatyam",
                          "160+ Disciples Groomed Across Chennai",
                          "25+ Auspicious Salanga Poojas",
                          "6+ Solo Arangetrams Mentored",
                          "Founder, Kodai Kaala Kalai Vizha (KKKV)",
                          "International Recitals (Singapore & Malaysia)",
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 p-2 rounded-sm bg-[#FAF7F0] border border-gold-400/25 text-[11px] text-navy-950 font-medium"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-600 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Full Narrative & Lineage Profile */}
                  <div className="lg:col-span-7 flex flex-col space-y-5">
                    {/* Header Details */}
                    <div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="px-3 py-1 text-[11px] uppercase font-mono tracking-wider bg-gold-500 text-navy-950 font-bold rounded-full shadow-2xs">
                          Founder & Artistic Director
                        </span>
                        <span className="px-3 py-1 text-[11px] uppercase font-mono tracking-wider bg-navy-950 text-gold-300 font-medium rounded-full">
                          Master’s in Bharathanatyam
                        </span>
                      </div>

                      <h3 className="font-display text-3xl sm:text-4xl text-navy-950 font-bold tracking-tight">
                        SMT. RANJINI PRADEEP
                      </h3>
                      <p className="font-serif italic text-base sm:text-lg text-gold-800 font-medium mt-1">
                        Founder • Bharathanatyam Dancer • Carnatic Vocalist • Performing Artist
                      </p>
                    </div>

                    {/* Sacred Lineage & Guru-Shishya Box */}
                    <div className="p-4 sm:p-5 rounded-sm bg-gradient-to-r from-gold-100/90 via-gold-50/70 to-[#FAF6EE] border-l-4 border-gold-500 shadow-xs space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-800">
                        <GraduationCap className="w-4 h-4 text-gold-600" />
                        <span>Revered Gurus & Classical Pedigree</span>
                      </div>
                      <p className="text-xs sm:text-sm text-navy-950 leading-relaxed font-medium">
                        Senior disciple of <strong className="text-gold-900">Kalaimamani Sri Madurai R. Muralidaran</strong> and{" "}
                        <strong className="text-gold-900">Smt. Chithra Muralidaran</strong> in Bharathanatyam, and a disciple of{" "}
                        <strong className="text-gold-900">Padma Shri Dr. Nithyashree Mahadevan</strong> in Carnatic Music.
                      </p>
                    </div>

                    {/* User Provided Narrative Paragraphs */}
                    <div className="space-y-3.5 text-navy-900/90 text-sm sm:text-[15px] leading-relaxed font-sans">
                      <p>
                        A distinguished Bharathanatyam dancer, Carnatic vocalist and performing artist, Smt. Ranjini Pradeep is a passionate exponent of Indian classical arts whose journey began at the age of seven.
                      </p>
                      <p>
                        With a Master’s degree in Bharathanatyam and over 16 years of teaching experience, she has dedicated her artistic journey to deepening her own practice while inspiring and mentoring the next generation of artistes.
                      </p>
                      <p>
                        Her artistic excellence has earned her the prestigious <strong className="text-navy-950 font-semibold">“Natya Thaaragai”</strong> title from the Lions Club. In 2011, she was honoured as the <strong className="text-navy-950 font-semibold">Best Female Dancer</strong> representing Tamil Nadu, Puducherry and the Andaman & Nicobar Directorate at the <strong className="text-navy-950 font-semibold">RDC–NCC Parade, New Delhi</strong>, where she had the distinction of performing before the Chiefs of the Indian Army, Navy and Air Force.
                      </p>
                      <p>
                        Her artistic canvas extends beyond classical dance and music. Beginning her career as a child artist in the Tamil film industry, she has appeared in films, television serials and commercials. She has also been the lead female singer of the <strong className="text-navy-950 font-semibold">Saadhaga Paravaigal</strong> light music orchestra, reflecting her versatility as a performing artist.
                      </p>
                      <p>
                        A life member of <strong className="text-navy-950 font-semibold">ABHAI (Association of Bharatanatyam Artists of India)</strong>, she has graced prestigious platforms in India and abroad. Her performances with her students at SIFAS, Singapore, during the Shivratri festival and at Batu Caves Temple, Malaysia, during Thaipoosam reflect her commitment to taking Indian classical arts to diverse audiences.
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-gold-400/30 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedFaculty(founderMember as unknown as FacultyMember)}
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy-950 text-gold-300 font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 shadow-md cursor-pointer group"
                      >
                        <Sparkles className="w-4 h-4 text-gold-400 group-hover:text-navy-950" />
                        <span>View Full Margam & Repertoire</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                      <Link
                        to="/courses/bharatanatyam"
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-gold-400 transition-all duration-300 shadow-md"
                      >
                        <span>Explore Bharatanatyam</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-5 py-3.5 border border-navy-950/20 text-navy-950 hover:border-gold-500 hover:text-gold-700 font-semibold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 bg-white"
                      >
                        <span>Enquire for Batches</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          TIER 2: CLASSICAL INSTRUCTORS (2 PERSONS)
          Smt. Swarna Sahasra & Sri J. Thinagar Raja
      ========================================================================= */}
      <section
        id="classical-instructors"
        className="relative py-20 md:py-28 bg-paper overflow-hidden border-b border-ivory-300"
      >
        <div className="container-wide section-padding max-w-6xl mx-auto">
          <SectionHeader
            number="02"
            eyebrow="Classical Gurus & Mentors"
            title="Classical Instructors"
            subtitle="Distinguished performing artists and dedicated educators carrying forward unbroken lineages in Mohiniyattam, Bharatanatyam, and Carnatic music."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {instructors.map((instructor, idx) => (
              <Reveal key={instructor.id} delay={idx * 0.1} className="h-full">
                <article
                  onClick={() => setSelectedFaculty(instructor as unknown as FacultyMember)}
                  className="bg-white border-2 border-gold-400/30 rounded-sm overflow-hidden flex flex-col justify-between h-full hover:border-gold-500 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                >
                  <div>
                    {/* Top Section: Framed Portrait + Accents */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-navy-950">
                      <img
                        src={instructor.image}
                        alt={`${instructor.name} - ${instructor.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent pointer-events-none" />
                      <GoldFrame />

                      {/* Discipline Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-3 py-1 text-[10px] uppercase font-mono tracking-wider bg-gold-500 text-navy-950 font-bold rounded-xs shadow-md">
                          {instructor.discipline}
                        </span>
                      </div>

                      {/* Experience Pill */}
                      <div className="absolute bottom-3 left-3 right-3 text-left">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold bg-navy-950/90 text-gold-300 border border-gold-400/40 rounded-xs shadow-sm">
                          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                          <span>{instructor.experience}</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-gold-700 font-bold block mb-1">
                        {instructor.shortRole}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-950 group-hover:text-gold-700 transition-colors leading-snug">
                        {instructor.name}
                      </h3>
                      <p className="text-xs font-serif italic text-gold-800 font-medium mb-3">
                        {instructor.title}
                      </p>

                      {/* Credentials Box */}
                      <div className="p-3 mb-4 rounded-sm bg-[#FAF7F0] border border-gold-400/30 text-xs text-navy-900 leading-snug flex items-start gap-2 min-h-[72px]">
                        <GraduationCap className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-gold-900 block mb-0.5">Lineage & Credentials</span>
                          <span className="text-navy-900/90">{instructor.credentials}</span>
                        </div>
                      </div>

                      {/* Bio Narrative */}
                      <div className="space-y-3 text-xs sm:text-sm text-navy-800/90 leading-relaxed">
                        {instructor.paragraphs.map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}
                      </div>

                      {/* Centers */}
                      <div className="mt-5 pt-3 border-t border-ivory-200 flex items-center gap-1.5 text-xs text-navy-700">
                        <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <span className="truncate">
                          {instructor.centers.map((c) => c.split("(")[0]).join(" • ")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-6 sm:p-7 pt-0 flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedFaculty(instructor as unknown as FacultyMember);
                      }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-navy-950 text-gold-300 group-hover:bg-gold-500 group-hover:text-navy-950 font-semibold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 shadow-2xs cursor-pointer"
                    >
                      <span>View Full Profile</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    <Link
                      to={instructor.courseLink}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center px-4 py-2.5 border border-gold-500/40 text-navy-900 hover:border-gold-600 hover:text-gold-800 font-semibold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 bg-white"
                    >
                      <span>Curriculum</span>
                    </Link>
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
        className="relative py-20 md:py-28 bg-[#FAF6EE] overflow-hidden border-b border-gold-400/30"
      >
        <div className="container-wide section-padding max-w-6xl mx-auto">
          <SectionHeader
            number="03"
            eyebrow="Administration & Student Care"
            title="Academy Co-ordinators"
            subtitle="Professional coordinators providing dedicated support across student admissions, parent liaison, operations, and dynamic media communications."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {coordinators.map((coordinator, idx) => (
              <Reveal key={coordinator.id} delay={idx * 0.1} className="h-full">
                <article
                  onClick={() => setSelectedFaculty(coordinator as unknown as FacultyMember)}
                  className="bg-white border-2 border-gold-400/30 rounded-sm overflow-hidden flex flex-col justify-between h-full hover:border-gold-500 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                >
                  <div>
                    {/* Top Section: Framed Portrait */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-navy-950">
                      <img
                        src={coordinator.image}
                        alt={`${coordinator.name} - ${coordinator.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-[center_12%] transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent pointer-events-none" />
                      <GoldFrame />

                      {/* Discipline Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-3 py-1 text-[10px] uppercase font-mono tracking-wider bg-gold-500 text-navy-950 font-bold rounded-xs shadow-md">
                          {coordinator.shortRole}
                        </span>
                      </div>

                      {/* Experience / Tenure */}
                      <div className="absolute bottom-3 left-3 right-3 text-left">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold bg-navy-950/90 text-gold-300 border border-gold-400/40 rounded-xs shadow-sm">
                          <Building2 className="w-3.5 h-3.5 text-gold-400" />
                          <span>{coordinator.experience}</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-gold-700 font-bold block mb-1">
                        {coordinator.discipline}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-950 group-hover:text-gold-700 transition-colors leading-snug">
                        {coordinator.name}
                      </h3>
                      <p className="text-xs font-serif italic text-gold-800 font-medium mb-3">
                        {coordinator.title}
                      </p>

                      {/* Academic / Professional Credentials Box */}
                      <div className="p-3 mb-4 rounded-sm bg-[#FAF7F0] border border-gold-400/30 text-xs text-navy-900 leading-snug flex items-start gap-2 min-h-[72px]">
                        <GraduationCap className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-gold-900 block mb-0.5">Professional Background</span>
                          <span className="text-navy-900/90">{coordinator.credentials}</span>
                        </div>
                      </div>

                      {/* Bio Narrative */}
                      <div className="space-y-3 text-xs sm:text-sm text-navy-800/90 leading-relaxed">
                        {coordinator.paragraphs.map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}
                      </div>

                      {/* Responsibilities list */}
                      <div className="mt-5 pt-3 border-t border-ivory-200">
                        <span className="text-[11px] uppercase tracking-wider font-bold text-gold-800 block mb-2">
                          Key Operational Focus
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {coordinator.specializations.slice(0, 3).map((spec, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 rounded-xs bg-[#FAF7F0] border border-gold-400/25 text-[11px] font-medium text-navy-900"
                            >
                              ✦ {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-6 sm:p-7 pt-0 flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedFaculty(coordinator as unknown as FacultyMember);
                      }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-navy-950 text-gold-300 group-hover:bg-gold-500 group-hover:text-navy-950 font-semibold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 shadow-2xs cursor-pointer"
                    >
                      <span>View Profile Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    <Link
                      to="/contact"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center px-4 py-2.5 border border-gold-500/40 text-navy-900 hover:border-gold-600 hover:text-gold-800 font-semibold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 bg-white"
                    >
                      <span>Contact Desk</span>
                    </Link>
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
      <section id="pedagogy-ethos" className="relative py-20 md:py-28 bg-paper overflow-hidden">
        <div className="container-wide section-padding max-w-6xl mx-auto">
          <SectionHeader
            number="04"
            eyebrow="Our Educational Ethos"
            title="The Guru-Shishya Tradition"
            subtitle="At Suha Academy, classical arts are not taught as generic syllabi, but transmitted as a living tradition combining rigorous technique with personal character-building."
          />

          {/* Statistics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {facultyHighlights.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 bg-white border border-gold-400/30 rounded-sm shadow-xs text-center"
              >
                <span className="font-display text-3xl sm:text-4xl font-bold text-gold-700 block mb-1">
                  {stat.number}
                </span>
                <span className="text-xs uppercase tracking-wider font-bold text-navy-950 block mb-1">
                  {stat.label}
                </span>
                <p className="text-[11px] text-navy-700 leading-snug">{stat.desc}</p>
              </div>
            ))}
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pedagogicalPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-ivory-200 rounded-sm shadow-xs hover:border-gold-400 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="w-8 h-8 rounded-full bg-gold-100 border border-gold-400/40 flex items-center justify-center font-display font-bold text-gold-800 text-sm">
                    {idx + 1}
                  </span>
                  <h4 className="font-display text-lg font-bold text-navy-950">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-navy-700 leading-relaxed pl-11">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              authentic, patient, and personalized training across Medavakkam, Perumbakkam, and online.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-navy-950 font-bold text-sm tracking-wide rounded-sm transition-all duration-300 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/30 active:scale-[0.98]"
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
