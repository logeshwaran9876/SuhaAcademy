import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  X,
  Award,
  BookOpen,
  MapPin,
  CheckCircle2,
  Quote,
  GraduationCap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { GoldFrame } from "./Decorations";

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  discipline: string;
  shortRole: string;
  roles: string[];
  image: string;
  experience: string;
  credentials: string;
  quote: string;
  shortBio: string;
  bio: string;
  teachingPhilosophy: string;
  specializations: string[];
  achievements: string[];
  centers: string[];
  courseSlug: string;
  courseLink: string;
  courseLabel: string;
}

interface FacultyModalProps {
  faculty: FacultyMember | null;
  onClose: () => void;
}

export default function FacultyModal({ faculty, onClose }: FacultyModalProps) {
  useEffect(() => {
    if (!faculty) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [faculty, onClose]);

  if (!faculty) return null;

  return (
    <div
      className="fixed inset-0 z-[120] bg-navy-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="faculty-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-gradient-to-b from-[#FDFBF7] via-[#FAF7F0] to-[#F5EFE4] rounded-sm border-2 border-gold-500/40 shadow-2xl flex flex-col my-auto overflow-hidden animate-modal-content text-navy-950"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Filigree Hairline */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-700 pointer-events-none z-20" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 bg-[#F4EDE0]/95 backdrop-blur-md border-b border-gold-400/30 shrink-0 z-10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-[11px] uppercase font-mono tracking-wider bg-gold-500 text-navy-950 font-bold rounded-full shadow-xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-navy-950" />
              {faculty.discipline}
            </span>
            <span className="text-xs text-navy-800 font-semibold hidden sm:inline">
              ✦ {faculty.shortRole}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-navy-950/5 hover:bg-navy-950/15 border border-navy-950/15 text-navy-800 hover:text-navy-950 transition-all duration-200 flex items-center justify-center cursor-pointer"
            aria-label="Close profile modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-7 custom-scrollbar">
          {/* Top Profile Header: Portrait & Introduction */}
          <div className="grid sm:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Left: Framed Portrait */}
            <div className="sm:col-span-5 md:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative w-full max-w-[240px] aspect-[4/5] rounded-sm overflow-hidden bg-navy-950 shadow-xl border-2 border-gold-500/50 mx-auto sm:mx-0 group">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />
                <GoldFrame />

                {/* Floating Experience Badge on Portrait */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold bg-navy-950/90 backdrop-blur-md text-gold-300 border border-gold-400/40 rounded-xs shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                    <span>{faculty.experience}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Titles, Quote, Credentials & Teaching Centers */}
            <div className="sm:col-span-7 md:col-span-8 flex flex-col space-y-4">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-gold-700 font-bold block mb-1">
                  {faculty.shortRole}
                </span>
                <h2
                  id="faculty-modal-title"
                  className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#15233F] font-bold leading-tight tracking-tight"
                >
                  {faculty.name}
                </h2>
                <p className="text-sm sm:text-base font-serif italic text-gold-800 font-medium mt-1">
                  {faculty.title}
                </p>

                {/* Role Chips */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {faculty.roles.map((role) => (
                    <span
                      key={role}
                      className="px-3 py-1 text-[11px] font-medium rounded-full bg-white text-navy-900 border border-gold-400/35 shadow-xs"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quote Banner */}
              <div className="relative p-4 sm:p-5 rounded-sm bg-gradient-to-r from-gold-100/90 via-gold-50/70 to-[#FAF5EB] border-l-4 border-gold-500 shadow-xs">
                <Quote className="w-6 h-6 text-gold-500/30 absolute top-3 right-3 pointer-events-none" />
                <p className="text-xs sm:text-sm font-serif italic text-navy-950 leading-relaxed pr-6 font-medium">
                  &ldquo;{faculty.quote}&rdquo;
                </p>
              </div>

              {/* Side-by-side Info Tiles: Credentials & Teaching Centers */}
              <div className="grid sm:grid-cols-2 gap-3 pt-1">
                {/* Credentials */}
                <div className="flex items-start gap-2.5 text-xs p-3 rounded-sm bg-white/90 border border-ivory-300 shadow-xs">
                  <GraduationCap className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gold-800 font-bold block mb-0.5">
                      Pedagogy & Lineage
                    </span>
                    <span className="text-navy-900 font-medium leading-snug block">{faculty.credentials}</span>
                  </div>
                </div>

                {/* Teaching Centers */}
                <div className="flex items-start gap-2.5 text-xs p-3 rounded-sm bg-white/90 border border-ivory-300 shadow-xs">
                  <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gold-800 font-bold block mb-0.5">
                      Teaching Centers
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {faculty.centers.map((c, i) => (
                        <span
                          key={i}
                          className="inline-block px-1.5 py-0.5 text-[10px] font-medium bg-gold-50 border border-gold-400/30 text-navy-900 rounded-xs"
                        >
                          {c.split("(")[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Biography Narrative */}
          <div className="space-y-4 pt-6 border-t border-gold-400/30">
            <div>
              <h3 className="text-xs uppercase tracking-[0.22em] text-gold-800 font-bold mb-2.5 flex items-center gap-2">
                <span>✦ Detailed Pedagogical Biography</span>
              </h3>
              <p className="text-xs sm:text-sm text-navy-900/90 leading-relaxed font-sans">
                {faculty.bio}
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-[#F5EFE3] to-[#FAF6EE] rounded-sm border border-gold-400/35 shadow-xs">
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold-800 font-bold mb-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>Pedagogical Approach & Ethos</span>
              </h4>
              <p className="text-xs sm:text-sm text-navy-900 leading-relaxed">
                {faculty.teachingPhilosophy}
              </p>
            </div>
          </div>

          {/* Two-Column Responsive Deep Dive: Specializations & Milestones */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 pt-6 border-t border-gold-400/30">
            {/* Left: Core Disciplines & Repertoire Taught */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-gold-800 font-bold mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-gold-600" />
                <span>Core Disciplines & Repertoire Taught</span>
              </h3>
              <div className="space-y-2">
                {faculty.specializations.map((spec, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-start gap-2.5 p-2.5 rounded-sm bg-white/90 border border-ivory-300/90 hover:border-gold-400 transition-colors shadow-xs"
                  >
                    <span className="text-gold-600 font-bold text-xs mt-0.5">✦</span>
                    <span className="text-xs text-navy-900 leading-snug font-medium">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Key Milestones */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-gold-800 font-bold mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-gold-600" />
                <span>Key Milestones & Recognitions</span>
              </h3>
              <ul className="space-y-2">
                {faculty.achievements.map((ach, aIdx) => (
                  <li
                    key={aIdx}
                    className="flex items-start gap-2.5 p-2.5 rounded-sm bg-white/90 border border-ivory-300/90 text-xs text-navy-900 leading-relaxed shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 sm:px-8 py-4 bg-[#F4EDE0]/95 backdrop-blur-md border-t border-gold-400/30 flex flex-wrap items-center justify-between gap-3 shrink-0 z-10">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to={faculty.courseLink}
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-950 text-gold-300 font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 shadow-md group"
            >
              <span>{faculty.courseLabel}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-navy-950/20 text-navy-950 hover:border-gold-500 hover:text-gold-700 font-semibold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 bg-white/60"
            >
              <span>Enquire for Batches</span>
            </Link>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-navy-700 hover:text-navy-950 transition-colors uppercase tracking-wider cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
