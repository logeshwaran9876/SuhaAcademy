import { useEffect } from "react";
import {
  X,
  Sparkles,
  BookOpen,
  CheckCircle2,
  MapPin,
  MessageCircle,
  ArrowRight,
  Award,
} from "lucide-react";
import { courses } from "@/data/courses";
import { academy } from "@/data/academy";

interface CourseModalProps {
  courseSlug: string | null;
  onClose: () => void;
  onOpenRoadmap: (slug: string) => void;
}

export default function CourseModal({
  courseSlug,
  onClose,
  onOpenRoadmap,
}: CourseModalProps) {
  const course = courses.find((c) => c.slug === courseSlug);

  useEffect(() => {
    if (!course) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [course, onClose]);

  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-[120] bg-navy-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-gradient-to-b from-[#FDFBF7] via-[#FAF7F0] to-[#F5EFE4] rounded-sm border-2 border-gold-500/40 shadow-2xl flex flex-col my-auto overflow-hidden animate-modal-content text-navy-950"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Filigree Hairline */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-700 pointer-events-none z-20" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 bg-[#F4EDE0]/95 backdrop-blur-md border-b border-gold-400/30 shrink-0 z-10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-[11px] uppercase font-mono tracking-wider bg-gold-500 text-navy-950 font-bold rounded-full shadow-xs flex items-center gap-1.5">
              ✦ Course Overview
            </span>
            <span className="text-xs text-navy-700 font-serif italic hidden sm:inline">
              {course.tradition}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-navy-950/5 hover:bg-navy-950/15 border border-navy-950/15 text-navy-800 hover:text-navy-950 transition-all duration-200 flex items-center justify-center cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 custom-scrollbar">
          {/* Header Block: Title & Tradition */}
          <div className="border-b border-ivory-300 pb-5">
            <div className="flex flex-wrap items-baseline gap-2 mb-1">
              <h2
                id="course-modal-title"
                className="text-2xl sm:text-3xl font-display font-bold text-navy-950"
              >
                {course.title}
              </h2>
              {course.tamilTitle && (
                <span className="text-lg sm:text-xl font-serif text-gold-700">
                  ({course.tamilTitle})
                </span>
              )}
            </div>
            <p className="text-xs uppercase tracking-wider text-gold-700 font-semibold mb-3">
              {course.tradition}
            </p>
            <p className="text-sm sm:text-[15px] text-navy-800 leading-relaxed">
              {course.shortDescription}
            </p>
          </div>

          {/* Lead Guru Spotlight */}
          {course.leadGuru && (
            <div className="p-4 rounded-sm bg-white/80 border border-gold-500/20 flex items-center gap-4">
              {course.guruImage && (
                <img
                  src={course.guruImage}
                  alt={course.leadGuru}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold-400/50 shrink-0"
                />
              )}
              <div>
                <p className="text-[11px] uppercase tracking-wider text-gold-700 font-bold">
                  Lead Guru &amp; Guidance
                </p>
                <h4 className="font-display text-base font-bold text-navy-950">
                  {course.leadGuru}
                </h4>
                {course.guruRole && (
                  <p className="text-xs text-navy-700/80 mt-0.5 line-clamp-1">
                    {course.guruRole}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Key Pedagogical Features */}
          {course.keyFeatures && course.keyFeatures.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gold-700 font-bold mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                Key Highlights &amp; Lineage
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.keyFeatures.map((feat: { title: string; desc: string }, idx: number) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-sm bg-white border border-ivory-200"
                  >
                    <h5 className="font-display text-xs font-bold text-navy-950 mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                      {feat.title}
                    </h5>
                    <p className="text-xs text-navy-700/80 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Core Curriculum Progression */}
          {course.curriculum && course.curriculum.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gold-700 font-bold mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-gold-600" />
                Curriculum Progression
              </h3>
              <div className="flex flex-wrap gap-2">
                {course.curriculum.map((item: string, idx: number) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-white text-navy-900 text-xs font-medium border border-gold-400/25 shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Studio Locations */}
          <div className="p-4 rounded-sm bg-[#FAF6EE] border border-gold-400/30 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-navy-900 font-medium">
              <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
              <span>
                <strong>Centers:</strong> Medavakkam Studio &amp; Perumbakkam Studio 
              </span>
            </div>
            <span className="text-[11px] font-mono text-gold-800 bg-gold-500/10 px-2.5 py-0.5 rounded-full">
              Flexible Weekday / Weekend Batches
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 bg-[#F4EDE0]/95 border-t border-gold-400/30 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenRoadmap(course.slug)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-950 text-gold-300 font-semibold text-xs rounded-sm hover:bg-navy-900 transition-all cursor-pointer shadow-sm group"
          >
            <Award className="w-4 h-4 text-gold-400" />
            <span>View 3-Level Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>

          <div className="flex items-center gap-3">

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 border border-ivory-300 text-navy-800 font-medium text-xs rounded-sm hover:bg-ivory-100 transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
