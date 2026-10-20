import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Check,
  Calendar,
  Sparkles,
} from "lucide-react";
import { GoldFrame } from "@/components/Decorations";
import { courses } from "@/data/courses";

interface CourseSliderProps {
  activeSlug?: string;
  onSelectCourse?: (slug: string) => void;
}

// Stage event highlights associated with each course
const eventHighlights: Record<string, { eventBadge: string; eventDesc: string; eventLink: string }> = {
  bharatanatyam: {
    eventBadge: "Annual Day, Singapore Tour & Arangetram",
    eventDesc: "Students perform in grand thematic productions (Dasaavatharam), SOTA Singapore, and solo Arangetrams.",
    eventLink: "/events/suha-annual-day",
  },
  mohiniyattam: {
    eventBadge: "Margazhi Maha Utsav & Sabha Recitals",
    eventDesc: "Festive temple presentations, Sopana classical ensembles, and prestigious sabha showcases.",
    eventLink: "/events/suha-utsavam",
  },
  "carnatic-music": {
    eventBadge: "Thyagaraja Aradhana & Vasantha Swaranjali",
    eventDesc: "Pancharatna homage alongside vidwans, Margazhi concert series, and elders seva recitals.",
    eventLink: "/events/vasantha-swaranjali",
  },
};

// Precise image framing per course to prevent cut-off heads/faces
const courseImageConfig: Record<string, { objectPosition: string }> = {
  bharatanatyam: {
    objectPosition: "center 22%",
  },
  mohiniyattam: {
    // Smt. Swarna Sahasra is a tall vertical portrait; anchor near top so face, eyes & mudra are fully framed
    objectPosition: "center 5%",
  },
  "carnatic-music": {
    objectPosition: "center center",
  },
};

export default function CourseSlider({ activeSlug, onSelectCourse }: CourseSliderProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Sync with external activeSlug if filter tabs are clicked
  useEffect(() => {
    if (activeSlug && activeSlug !== "all") {
      const idx = courses.findIndex((c) => c.slug === activeSlug);
      if (idx !== -1 && idx !== currentIndex) {
        setCurrentIndex(idx);
      }
    }
  }, [activeSlug, currentIndex]);

  const currentCourse = courses[currentIndex] || courses[0];
  const eventInfo = eventHighlights[currentCourse.slug] || eventHighlights["bharatanatyam"];
  const imageConfig = courseImageConfig[currentCourse.slug] || { objectPosition: "center center" };

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % courses.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
  }, []);

  // Continuous auto loop (rotates every 4.5 seconds, pauses on hover/touch)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    if (onSelectCourse) {
      onSelectCourse(courses[idx].slug);
    }
  };

  // Keyboard navigation (Left / Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    setTouchStartX(null);
  };

  return (
    <div
      className="max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Header */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            Course & Stage Showcase
          </span>
          <h2 className="text-xl sm:text-2xl font-display font-medium text-navy-950 mt-0.5">
            Slide to Explore Disciplines
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] uppercase tracking-wider text-gold-700/80 font-mono hidden sm:inline">
            {isPaused ? "Paused" : "Auto-playing"}
          </span>
          <span className="text-xs font-mono font-semibold text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
            0{currentIndex + 1} / 0{courses.length}
          </span>
        </div>
      </div>

      {/* Slide Card Container with Left & Right Arrows on the sides */}
      <div className="relative">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Course"
          className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold-500/40 bg-white/95 text-navy-950 hover:bg-navy-950 hover:text-gold-300 hover:border-navy-950 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-xl active:scale-95 backdrop-blur-xs"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Course"
          className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold-500/40 bg-white/95 text-navy-950 hover:bg-navy-950 hover:text-gold-300 hover:border-navy-950 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-xl active:scale-95 backdrop-blur-xs"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Card */}
        <div className="bg-white border border-ivory-200 rounded-sm overflow-hidden shadow-xl hover:border-gold-400 transition-all duration-500">
          {/* Top Image Banner */}
          <div className="relative h-80 sm:h-96 md:h-[420px] overflow-hidden bg-navy-950">
            <img
              key={currentCourse.slug}
              src={currentCourse.image}
              alt={currentCourse.title}
              style={{ objectPosition: imageConfig.objectPosition }}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105 animate-fade-in"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/25 to-transparent pointer-events-none" />
            <GoldFrame />

            {/* Floating Category Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs uppercase tracking-wider font-semibold bg-navy-950/85 text-gold-300 border border-gold-500/30 backdrop-blur-md">
                {currentCourse.title}
              </span>
            </div>

            {/* Bottom Title on Image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-cream-50 drop-shadow-sm">
                {currentCourse.title}
              </h3>
            </div>
          </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {/* Prominent Stage Events Callout */}
          <div className="mb-6 p-4 rounded-sm bg-cream-50 border border-gold-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-gold-700">
                  Stage Events & Performances
                </p>
                <p className="text-xs sm:text-sm text-navy-900 font-medium">
                  {eventInfo.eventBadge}
                </p>
                <p className="text-xs text-navy-700/70 mt-0.5">
                  {eventInfo.eventDesc}
                </p>
              </div>
            </div>
            <Link
              to={eventInfo.eventLink}
              className="inline-flex items-center gap-1 text-xs font-semibold text-gold-700 hover:text-gold-900 transition-colors whitespace-nowrap self-start sm:self-center"
            >
              <span>View Events</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <p className="text-sm sm:text-[15px] text-navy-800/85 leading-relaxed mb-6">
            {currentCourse.shortDescription}
          </p>

          {/* Curriculum Checklist */}
          {currentCourse.curriculum.length > 0 && (
            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold-700 font-semibold mb-3">
                Curriculum Progression & Repertoire
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentCourse.curriculum.slice(0, 6).map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs sm:text-sm text-navy-900 font-medium"
                  >
                    <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {currentCourse.curriculum.length > 6 && (
                <p className="text-xs text-navy-600/60 italic mt-2">
                  + {currentCourse.curriculum.length - 6} additional repertoire items
                </p>
              )}
            </div>
          )}

          {/* Action Links */}
          <div className="pt-4 border-t border-ivory-100 flex flex-wrap items-center justify-between gap-4">
            <Link
              to={`/courses/${currentCourse.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-950 text-gold-300 font-semibold text-xs sm:text-sm rounded-sm hover:bg-navy-900 transition-all duration-300 group shadow-sm"
            >
              <span>{currentCourse.cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/events"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-navy-700 hover:text-gold-700 font-medium transition-colors"
            >
              <span>Explore All Academy Events</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
      </div>

      {/* Slider Indicator Dots */}
      <div className="flex items-center justify-center gap-2.5 mt-6">
        {courses.map((c, idx) => {
          const isActive = currentIndex === idx;
          return (
            <button
              key={c.slug}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}: ${c.title}`}
              className={`transition-all duration-300 cursor-pointer rounded-full ${
                isActive
                  ? "w-8 h-2.5 bg-gold-600"
                  : "w-2.5 h-2.5 bg-ivory-300 hover:bg-gold-400"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
