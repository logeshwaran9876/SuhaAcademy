import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { GoldFrame } from "@/components/Decorations";

export interface SpotlightSlide {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
}

interface EventSpotlightSliderProps {
  slides: SpotlightSlide[];
  onOpenLightbox?: (index: number) => void;
}

export default function EventSpotlightSlider({
  slides,
  onOpenLightbox,
}: EventSpotlightSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Continuous auto loop (rotates every 4 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Touch handlers
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

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="relative max-w-lg mx-auto group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Outer decorative golden border frame */}
      <div className="absolute -inset-2.5 sm:-inset-3 border border-gold-400/30 rounded-sm pointer-events-none transition-all duration-300 group-hover:border-gold-400/60" />

      {/* Main Slide Card */}
      <div className="relative overflow-hidden rounded-sm bg-navy-950 shadow-2xl border border-gold-500/20">
        {/* Image Frame */}
        <div
          className="relative h-80 sm:h-96 md:h-[420px] bg-navy-950 flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={() => onOpenLightbox && onOpenLightbox(currentIndex)}
        >
          <img
            key={currentSlide.src}
            src={currentSlide.src}
            alt={currentSlide.alt}
            className="w-full h-full object-contain sm:object-cover transition-all duration-700 animate-fade-in group-hover:scale-102"
          />

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent pointer-events-none" />
          <GoldFrame />

          {/* Floating Top Badge: Counter */}
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-navy-950/85 text-gold-300 border border-gold-500/30 backdrop-blur-sm shadow-md">
              0{currentIndex + 1} / 0{slides.length}
            </span>
          </div>

          {/* Floating Top Left Badge: Category */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-gold-500/90 text-navy-950 shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Event Gallery
            </span>
          </div>

          {/* Hover Zoom Prompt */}
          <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="px-4 py-2 bg-navy-950/90 text-gold-300 text-xs font-medium rounded-sm border border-gold-400/40 flex items-center gap-2 shadow-xl backdrop-blur-xs">
              <Maximize2 className="w-4 h-4" /> Click to View Fullscreen
            </span>
          </div>

          {/* Bottom Title & Subtitle Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 text-left bg-gradient-to-t from-navy-950 via-navy-950/90 to-transparent">
            <h4 className="text-base sm:text-lg font-display font-medium text-cream-50 leading-snug drop-shadow-sm">
              {currentSlide.title}
            </h4>
            {currentSlide.subtitle && (
              <p className="text-xs text-gold-300/90 font-serif italic mt-0.5 line-clamp-1">
                {currentSlide.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Previous Photo"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold-500/50 bg-navy-950/80 text-gold-300 hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg active:scale-95 backdrop-blur-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Next Photo"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold-500/50 bg-navy-950/80 text-gold-300 hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg active:scale-95 backdrop-blur-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Thumbnail Dots Bar */}
        <div className="p-3 bg-navy-900/90 border-t border-gold-500/20 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to photo ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? "w-6 h-2 bg-gold-400"
                    : "w-2 h-2 bg-cream-100/30 hover:bg-gold-400/60"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => onOpenLightbox && onOpenLightbox(currentIndex)}
            className="text-[11px] font-medium text-gold-300 hover:text-gold-200 inline-flex items-center gap-1 whitespace-nowrap cursor-pointer"
          >
            <Maximize2 className="w-3 h-3" />
            <span>Expand</span>
          </button>
        </div>
      </div>

      <p className="text-center text-xs text-cream-100/50 mt-3 flex items-center justify-center gap-1.5">
        <span>✦</span> Swipe or click arrows to explore all event photos & brochures
      </p>
    </div>
  );
}
