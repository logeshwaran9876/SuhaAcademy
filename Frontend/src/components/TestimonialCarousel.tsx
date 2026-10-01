import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { testimonials, testimonialSource } from "@/data/testimonials";

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const t = testimonials[current];

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Reveal>
        <div className="relative bg-white/60 border border-ivory-200 rounded-sm p-8 md:p-14 text-center overflow-hidden">
          {/* Quote mark */}
          <Quote className="absolute top-6 left-6 w-12 h-12 text-gold-500/15" />

          {/* Content */}
          <div key={current} className="animate-fade-in">
            <p className="font-serif text-xl md:text-2xl text-navy-800 leading-relaxed italic mb-6">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex flex-col items-center gap-1">
              <div className="h-px w-10 bg-gold-500/40 mb-3" />
              <p className="text-sm font-medium text-navy-900">
                {t.name || "Anonymous"}
              </p>
              <p className="text-xs uppercase tracking-[0.15em] text-gold-600">
                {t.role}
              </p>
              <p className="text-[10px] text-navy-600/40 mt-1">{t.source}</p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-ivory-300 flex items-center justify-center text-navy-700 hover:border-gold-500 hover:text-gold-600 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-gold-500"
                  : "w-1.5 bg-navy-300/40 hover:bg-navy-400/60"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-ivory-300 flex items-center justify-center text-navy-700 hover:border-gold-500 hover:text-gold-600 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <p className="text-center text-[10px] text-navy-600/30 mt-4">
        Testimonials are placeholders pending academy verification. Public review
        source:{" "}
        <a
          href={testimonialSource}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gold-600"
        >
          Wanderlog
        </a>
      </p>
    </div>
  );
}
