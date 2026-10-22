import { useState, useEffect } from "react";
import {
  X,
  Award,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { courses } from "@/data/courses";
import { academy } from "@/data/academy";

interface CourseRoadmapModalProps {
  courseSlug: string | null;
  onClose: () => void;
  onOpenCourseModal: (slug: string) => void;
}

export default function CourseRoadmapModal({
  courseSlug,
  onClose,
  onOpenCourseModal,
}: CourseRoadmapModalProps) {
  const [activeLevelIdx, setActiveLevelIdx] = useState<number>(0);
  const course = courses.find((c) => c.slug === courseSlug);

  // Reset to level 0 when course changes
  useEffect(() => {
    setActiveLevelIdx(0);
  }, [courseSlug]);

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

  const levels = course.levels || [];
  const currentLevel = levels[activeLevelIdx] || levels[0];

  return (
    <div
      className="fixed inset-0 z-[120] bg-navy-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="roadmap-modal-title"
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
              ✦ 3-Level Roadmap
            </span>
            <span className="text-sm font-display font-bold text-navy-950">
              {course.title}
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

        {/* Level Navigation Tabs */}
        {levels.length > 0 && (
          <div className="bg-[#ECE4D0]/60 border-b border-gold-400/25 px-4 sm:px-8 py-2.5 flex items-center gap-2 overflow-x-auto shrink-0">
            {levels.map((lvl: { id: string; name: string }, idx: number) => {
              const isActive = idx === activeLevelIdx;
              return (
                <button
                  key={lvl.id || idx}
                  type="button"
                  onClick={() => setActiveLevelIdx(idx)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xs transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${isActive
                    ? "bg-navy-950 text-gold-300 shadow-sm border border-gold-500/50"
                    : "bg-white/70 text-navy-800 hover:bg-white hover:text-navy-950 border border-ivory-200"
                    }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${isActive ? "bg-gold-500 text-navy-950" : "bg-navy-950/10 text-navy-800"
                      }`}
                  >
                    {idx + 1}
                  </span>
                  <span>{lvl.name}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 custom-scrollbar">
          {currentLevel ? (
            <>
              {/* Level Heading */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <h3
                    id="roadmap-modal-title"
                    className="text-xl sm:text-2xl font-display font-bold text-navy-950"
                  >
                    {currentLevel.name}
                  </h3>
                  {currentLevel.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-gold-500/20 text-gold-900 border border-gold-400/40">
                      {currentLevel.badge}
                    </span>
                  )}
                </div>
                {currentLevel.subtitle && (
                  <p className="text-xs sm:text-sm font-serif italic text-gold-800 mb-2">
                    {currentLevel.subtitle}
                  </p>
                )}
                {currentLevel.description && (
                  <p className="text-xs sm:text-sm text-navy-800/90 leading-relaxed">
                    {currentLevel.description}
                  </p>
                )}
              </div>

              {/* Milestone Box */}
              {currentLevel.milestone && (
                <div className="p-4 rounded-sm bg-gradient-to-r from-gold-500/15 via-gold-400/10 to-transparent border border-gold-500/35 flex items-start gap-3">
                  <Award className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gold-800 font-bold">
                      Key Pedagogical Milestone
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-navy-950 mt-0.5">
                      {currentLevel.milestone}
                    </p>
                  </div>
                </div>
              )}

              {/* Modules Breakdown */}
              {currentLevel.modules && currentLevel.modules.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gold-700 font-bold mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-gold-600" />
                    Structured Syllabus Modules ({currentLevel.modules.length})
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {currentLevel.modules.map(
                      (mod: { title: string; description: string }, mIdx: number) => (
                        <div
                          key={mIdx}
                          className="p-4 rounded-sm bg-white border border-gold-400/25 shadow-2xs hover:border-gold-400 transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="w-5 h-5 rounded-full bg-gold-500/15 text-gold-800 font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                                0{mIdx + 1}
                              </span>
                              <h5 className="font-display text-xs sm:text-sm font-bold text-navy-950">
                                {mod.title}
                              </h5>
                            </div>
                            <p className="text-xs text-navy-700/85 leading-relaxed pl-7">
                              {mod.description}
                            </p>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Inter-level stepping controls */}
              <div className="flex items-center justify-between pt-4 border-t border-ivory-300 text-xs">
                {activeLevelIdx > 0 ? (
                  <button
                    type="button"
                    onClick={() => setActiveLevelIdx((prev) => prev - 1)}
                    className="inline-flex items-center gap-1.5 text-navy-800 hover:text-gold-700 font-medium cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous: {levels[activeLevelIdx - 1]?.name}</span>
                  </button>
                ) : (
                  <span />
                )}

                {activeLevelIdx < levels.length - 1 && (
                  <button
                    type="button"
                    onClick={() => setActiveLevelIdx((prev) => prev + 1)}
                    className="inline-flex items-center gap-1.5 text-gold-800 hover:text-navy-950 font-bold cursor-pointer ml-auto"
                  >
                    <span>Next: {levels[activeLevelIdx + 1]?.name}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </>
          ) : (
            <p className="text-xs text-navy-700">No levels configured.</p>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 bg-[#F4EDE0]/95 border-t border-gold-400/30 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenCourseModal(course.slug)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-950 text-gold-300 font-semibold text-xs rounded-sm hover:bg-navy-900 transition-all cursor-pointer shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Course Overview</span>
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
