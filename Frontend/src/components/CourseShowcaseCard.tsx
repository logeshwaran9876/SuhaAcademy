import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Check,
  Calendar,
  Sparkles,
  Award,
  Users,
  MessageCircle,
} from "lucide-react";
import { GoldFrame } from "@/components/Decorations";
import { academy } from "@/data/academy";

export interface CourseSlidePhoto {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  objectPosition?: string;
}

export interface CourseShowcaseData {
  slug: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  longDescription?: string;
  curriculum: string[];
  cta: string;
  eventBadge: string;
  eventDesc: string;
  eventLink: string;
  features: string[];
  photos: CourseSlidePhoto[];
}

interface CourseShowcaseCardProps {
  course: CourseShowcaseData;
  index: number;
  onExploreCurriculum?: (slug: string) => void;
}

export default function CourseShowcaseCard({
  course,
  index,
  onExploreCurriculum,
}: CourseShowcaseCardProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const photos = course.photos;

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  // Dedicated auto-loop for this course slider
  useEffect(() => {
    // if (isPaused || photos.length <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3000 + index * 300); // slight stagger between sliders
    return () => clearInterval(interval);
  }, [isPaused, handleNext, photos.length, index]);

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

  const activePhoto = photos[currentSlide] || photos[0];
  const isReversed = index % 2 === 1;

  return (
    <div
      id={`course-section-${course.slug}`}
      className="bg-white border border-ivory-200 rounded-sm overflow-hidden shadow-lg hover:border-gold-400 transition-all duration-500"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 ${isReversed ? "lg:flex-row-reverse" : ""}`}>
        {/* Slider Column (5 cols on lg) */}
        <div
          className={`lg:col-span-5 relative bg-navy-950 flex flex-col overflow-hidden group select-none ${isReversed ? "lg:order-2" : "lg:order-1"
            }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Photo Container - Fixed 4:5 aspect ratio, rock-solid height */}
          <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] lg:aspect-auto lg:flex-1 lg:h-full lg:min-h-[540px] overflow-hidden bg-navy-950">
            <img
              key={activePhoto.src}
              src={activePhoto.src}
              alt={activePhoto.alt}
              width={1200}
              height={1500}
              style={{ objectPosition: activePhoto.objectPosition || "center center" }}
              className="w-full h-full object-cover transition-all duration-700 animate-fade-in group-hover:scale-103"
            />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent pointer-events-none" />
            <GoldFrame />

            {/* Top Badge: Course Title */}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
              <span className="px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-navy-950/85 text-gold-300 border border-gold-500/30 backdrop-blur-sm shadow-sm">
                {course.title}
              </span>
            </div>

            {/* Top Right: Counter
            <div className="absolute top-3 right-3 z-10">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-navy-950/85 text-gold-300 border border-gold-500/30 backdrop-blur-sm shadow-sm">
                0{currentSlide + 1} / 0{photos.length}
              </span>
            </div> */}

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 text-left bg-gradient-to-t from-navy-950 via-navy-950/90 to-transparent">
              <h4 className="text-sm sm:text-base font-display font-medium text-cream-50 leading-snug drop-shadow-sm">
                {activePhoto.title}
              </h4>
              {activePhoto.subtitle && (
                <p className="text-xs text-gold-300/85 font-serif italic mt-0.5 line-clamp-1">
                  {activePhoto.subtitle}
                </p>
              )}
            </div>

            {/* Side Navigation Arrows */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label={`Previous ${course.title} photo`}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold-500/50 bg-navy-950/80 text-gold-300 hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg active:scale-95 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label={`Next ${course.title} photo`}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold-500/50 bg-navy-950/80 text-gold-300 hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg active:scale-95 backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator Bar */}
          <div className="p-2.5 bg-navy-900/95 border-t border-gold-500/20 flex items-center justify-center gap-1.5">
            {photos.map((_, pIdx) => (
              <button
                key={pIdx}
                type="button"
                onClick={() => setCurrentSlide(pIdx)}
                aria-label={`View photo ${pIdx + 1} of ${course.title}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${currentSlide === pIdx
                    ? "w-6 h-2 bg-gold-400"
                    : "w-2 h-2 bg-cream-100/30 hover:bg-gold-400/60"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Content Column (7 cols on lg) */}
        <div
          className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${isReversed ? "lg:order-1" : "lg:order-2"
            }`}
        >
          <div>
            {/* Eyebrow and Discipline Title */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs uppercase tracking-[0.2em] text-gold-600 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                {course.eyebrow}
              </span>
              <span className="text-[11px] font-mono text-navy-500 bg-cream-100/80 px-2.5 py-0.5 rounded-full border border-ivory-200">
                Discipline 0{index + 1}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-medium text-navy-950 mb-3">
              {course.title}
            </h3>

            <p className="text-sm sm:text-[15px] text-navy-800/85 leading-relaxed mb-6 font-normal">
              {course.shortDescription}
            </p>

            {/* Stage Events & Recital Callout */}
            <div className="mb-6 p-4 rounded-sm bg-cream-50/80 border border-gold-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-gold-700">
                    Stage Recitals & Platform
                  </p>
                  <p className="text-xs sm:text-sm text-navy-900 font-medium">
                    {course.eventBadge}
                  </p>
                  <p className="text-xs text-navy-700/70 mt-0.5">
                    {course.eventDesc}
                  </p>
                </div>
              </div>
              <Link
                to={course.eventLink}
                className="inline-flex items-center gap-1 text-xs font-semibold text-gold-700 hover:text-gold-900 transition-colors whitespace-nowrap self-start sm:self-center"
              >
                <span>Event Archive</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Curriculum Highlights */}
            {course.curriculum.length > 0 && (
              <div className="mb-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold-700 font-semibold mb-2.5">
                  Core Curriculum Progression
                </p>
                <div className="flex flex-wrap gap-2">
                  {course.curriculum.slice(0, 8).map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xs bg-paper text-navy-800 text-xs font-medium border border-ivory-200"
                    >
                      <Check className="w-3 h-3 text-gold-600" />
                      {item}
                    </span>
                  ))}
                  {course.curriculum.length > 8 && (
                    <span className="px-2.5 py-1 text-xs text-navy-500 italic">
                      + {course.curriculum.length - 8} more items
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Key Features Pill Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-4 border-t border-ivory-100 text-xs text-navy-700">
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span>Grade Exams (Bridge Academy)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span>Beginner to Arangetram</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <Sparkles className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span>Medavakkam & Perumbakkam</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 pt-5 border-t border-ivory-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to={`/courses/${course.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy-950 text-gold-300 font-semibold text-xs sm:text-sm rounded-sm hover:bg-navy-900 transition-all duration-300 group shadow-sm"
              >
                <span>{course.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {onExploreCurriculum && (
                <button
                  type="button"
                  onClick={() => onExploreCurriculum(course.slug)}
                  className="inline-flex items-center gap-1.5 px-4 py-3 border border-ivory-300 text-navy-800 font-medium text-xs sm:text-sm rounded-sm hover:border-gold-500 hover:text-gold-700 transition-all cursor-pointer"
                >
                  <span>View 3-Level Roadmap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <a
              href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent(
                `Hi Suha Academy, I would like to enquire about admissions and batch timings for ${course.title}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#128C7E] hover:text-[#075E54] font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Enquire for {course.title} &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
