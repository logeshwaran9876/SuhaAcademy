import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Award,
} from "lucide-react";
import { GoldFrame } from "@/components/Decorations";

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
  introHeading?: string;
  introParagraphs: string[];
  photos: CourseSlidePhoto[];
}

interface CourseShowcaseCardProps {
  course: CourseShowcaseData;
  index: number;
  onRoadmap: (slug: string) => void;
}

export default function CourseShowcaseCard({
  course,
  index,
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
      className="bg-white border-2 border-gold-400/40 rounded-sm overflow-hidden shadow-xl hover:border-gold-500 transition-all duration-500 max-w-xl mx-auto"
    >
      {/* Top Gold Filigree Hairline */}
      <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-700 w-full" />

      {/* Main Slider Section (Preserved Original 4:5 Portrait Size) */}
      <div
        className="relative bg-navy-950 flex flex-col overflow-hidden group select-none"
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

      {/* Slider Bottom: Content (Title, Intro Header, Paragraphs & Roadmap Trigger) */}
      <div className="p-6 sm:p-8 bg-[#FDFBF7] border-t border-gold-400/30 text-left">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-gold-700 font-bold block mb-1">
            {course.eyebrow}
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-navy-950">
            {course.title}
          </h3>

          <div className="mt-5 pt-4 border-t border-gold-400/25">
            

            <div className="space-y-3.5 text-xs sm:text-sm text-navy-800/90 leading-relaxed font-normal">
              {course.introParagraphs.map((para, pIdx) => (
                <p key={pIdx}>
                  {para.includes("**") ? (
                    para.split(/(\*\*.*?\*\*)/g).map((chunk, cIdx) =>
                      chunk.startsWith("**") && chunk.endsWith("**") ? (
                        <strong key={cIdx} className="font-semibold text-navy-950">
                          {chunk.slice(2, -2)}
                        </strong>
                      ) : (
                        chunk
                      )
                    )
                  ) : (
                    para
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Action Trigger - 3-Level Roadmap */}
        <div className="mt-6 pt-5 border-t border-ivory-200/80">
          <button
            type="button"
            onClick={() => onRoadmap(course.slug)}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-gold-300 hover:from-gold-500 hover:to-gold-600 hover:text-navy-950 font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 shadow-md hover:shadow-gold-500/20 cursor-pointer group border border-gold-500/40"
          >
            <Award className="w-4 h-4 text-gold-400 group-hover:text-navy-950 transition-colors" />
            <span>View 3-Level Learning Roadmap</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
