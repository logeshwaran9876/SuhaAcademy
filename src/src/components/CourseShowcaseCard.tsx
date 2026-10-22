import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Award,
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
  curriculum?: string[];
  cta?: string;
  eventBadge?: string;
  eventDesc?: string;
  eventLink?: string;
  features?: string[];
  photos: CourseSlidePhoto[];
}

interface CourseShowcaseCardProps {
  course: CourseShowcaseData;
  index: number;
  onExplore: (slug: string) => void;
  onRoadmap: (slug: string) => void;
}

export default function CourseShowcaseCard({
  course,
  index,
  onExplore,
  onRoadmap,
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

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3200 + index * 300);
    return () => clearInterval(interval);
  }, [handleNext, photos.length, index]);

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

  return (
    <div
      id={`course-section-${course.slug}`}
      className="bg-white border-2 border-gold-400/40 rounded-sm overflow-hidden shadow-xl hover:border-gold-500 transition-all duration-500 max-w-lg mx-auto"
    >
      {/* Top Gold Filigree Hairline */}
      <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-700 w-full" />

      {/* Main Slider Section (Preserved Original 4:5 Portrait Size) */}
      <div
        className="relative bg-navy-950 flex flex-col overflow-hidden group select-none cursor-pointer"
        onClick={() => onExplore(course.slug)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-navy-950">
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
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-gold-500/50 bg-navy-950/80 text-gold-300 hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg active:scale-95 backdrop-blur-sm"
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
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-gold-500/50 bg-navy-950/80 text-gold-300 hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg active:scale-95 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator Bar */}
        <div
          className="p-2.5 bg-navy-900/95 border-t border-gold-500/20 flex items-center justify-center gap-1.5"
          onClick={(e) => e.stopPropagation()}
        >
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

      {/* Slider Bottom: Minimal Content (Title, Short Lines & Modal Triggers) */}
      <div className="p-6 sm:p-7 bg-[#FDFBF7] border-t border-gold-400/30">
        <div>


          <h3 className="text-2xl sm:text-3xl font-display font-bold text-navy-950">
            {course.title}
          </h3>

          <p className="text-xs sm:text-sm text-navy-800/85 leading-relaxed font-normal mt-2">
            {course.shortDescription}
          </p>
        </div>

        {/* Action Triggers */}
        <div className="mt-5 pt-4 border-t border-ivory-200/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          <button
            type="button"
            onClick={() => onExplore(course.slug)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-navy-950 text-gold-300 font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 shadow-sm cursor-pointer group"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400 group-hover:text-navy-950" />
            <span>Explore Course</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={() => onRoadmap(course.slug)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gold-500/50 bg-white text-navy-950 hover:bg-gold-500/10 hover:border-gold-600 font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 shadow-2xs cursor-pointer group"
          >
            <Award className="w-3.5 h-3.5 text-gold-600" />
            <span>3-Level Roadmap</span>
          </button>
        </div>

        {/* WhatsApp Sub-bar */}

      </div>
    </div>
  );
}
