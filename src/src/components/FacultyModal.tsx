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

function renderFormattedBio(bio: string) {
  if (!bio) return null;

  const paragraphs = bio.split(/\n\n+/);

  return (
    <div className="space-y-4 text-xs sm:text-sm text-navy-900/90 leading-relaxed font-sans">
      {paragraphs.map((para, pIdx) => {
        const lines = para.split(/\n/);
        return (
          <p key={pIdx}>
            {lines.map((line, lIdx) => {
              const regex = /(?:[<>]b[>](.*?)<\s*\/\s*b[>])|(?:<strong>(.*?)<\/strong>)|(?:\*\*(.*?)\*\*)/gi;
              const hasTags = /(?:[<>]b[>])|(?:<strong>)|(?:\*\*)/i.test(line);

              if (!hasTags) {
                return (
                  <span key={lIdx}>
                    {lIdx > 0 && <br />}
                    {line}
                  </span>
                );
              }

              const parts: React.ReactNode[] = [];
              let lastIndex = 0;
              let match: RegExpExecArray | null;
              regex.lastIndex = 0;

              while ((match = regex.exec(line)) !== null) {
                if (match.index > lastIndex) {
                  parts.push(line.slice(lastIndex, match.index));
                }
                const boldContent = match[1] || match[2] || match[3] || "";
                const isHeading = /^(ARTISTRY & LEGACY|CINEMA & BEYOND)/i.test(boldContent.trim());

                parts.push(
                  <strong
                    key={match.index}
                    className={
                      isHeading
                        ? "font-bold text-navy-950 font-display text-sm sm:text-base tracking-wider uppercase block "
                        : "font-bold text-navy-950"
                    }
                  >
                    {boldContent}
                  </strong>
                );
                lastIndex = regex.lastIndex;
              }

              if (lastIndex < line.length) {
                parts.push(line.slice(lastIndex));
              }

              return (
                <span key={lIdx}>
                  {lIdx > 0 && <br />}
                  {parts}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
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
          {/* Top Profile Header: Centered Portrait & Details in Single Column */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            {/* Centered Framed Portrait */}
            <div className="relative w-full max-w-[220px] sm:max-w-[240px] aspect-[4/5] rounded-sm overflow-hidden bg-navy-950 shadow-xl border-2 border-gold-500/50 group">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />
              <GoldFrame />
            </div>

            {/* Centered Titles & Designation underneath */}
            <div className="mt-5 text-center max-w-xl mx-auto">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-700 font-bold block mb-1">
                {faculty.shortRole}
              </span>
              <h2
                id="faculty-modal-title"
                className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#15233F] font-bold leading-tight tracking-tight"
              >
                {faculty.name}
              </h2>
             
            </div>
          </div>

          {/* Full Biography Narrative */}
          <div className="space-y-4 pt-6 border-t border-gold-400/30">
            <div>
              <h3 className="text-xs uppercase tracking-[0.22em] text-gold-800 font-bold mb-3 flex items-center gap-2">
                <span>✦ Detailed Pedagogical Biography</span>
              </h3>
              {renderFormattedBio(faculty.bio)}
            </div>
          </div>

      
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 sm:px-8 py-4 bg-[#F4EDE0]/95 backdrop-blur-md border-t border-gold-400/30 flex flex-wrap items-center justify-between gap-3 shrink-0 z-10">
          <div className="flex flex-wrap items-center gap-3">
           

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
