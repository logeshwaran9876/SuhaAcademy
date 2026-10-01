import { Link } from "react-router-dom";
import { Sparkles, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  height?: "sm" | "md" | "lg";
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  height = "md",
}: PageHeroProps) {
  const heightClass =
    height === "sm"
      ? "min-h-[42vh] py-20"
      : height === "lg"
      ? "min-h-[70vh] py-28"
      : "min-h-[52vh] py-24";

  return (
    <section
      className={`relative ${heightClass} flex items-center justify-center overflow-hidden bg-[#0A0507]`}
    >
      {/* Background theatrical stage with gentle slow-zoom motion */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Stage image with continuous subtle slow-zoom animation */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center scale-100 opacity-80 md:opacity-85 animate-slow-zoom transition-transform duration-1000"
          fetchPriority="high"
        />

        {/* Balanced theatrical vignette: keeps dancers visible while maintaining text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0507]/90 via-[#0A0507]/60 to-[#0A0507]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0507] via-transparent to-[#0A0507]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_#0A0507_95%)]" />

        {/* Ambient warm top spotlight shimmer */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[260px] bg-gradient-radial from-amber-500/20 via-orange-500/5 to-transparent blur-3xl rounded-full pointer-events-none animate-shimmer" />

        {/* Traditional slowly rotating gold mandala watermark in top-right */}
        <div
          className="absolute -top-16 -right-16 w-80 h-80 opacity-[0.09] text-gold-400 pointer-events-none hidden sm:block"
          style={{ animation: "spin 120s linear infinite" }}
        >
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full stroke-current" strokeWidth="0.75">
            <circle cx="100" cy="100" r="95" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="80" />
            <circle cx="100" cy="100" r="60" />
            <circle cx="100" cy="100" r="40" />
            <circle cx="100" cy="100" r="20" />
            {[...Array(16)].map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="10"
                x2="100"
                y2="190"
                transform={`rotate(${i * 11.25} 100 100)`}
              />
            ))}
          </svg>
        </div>

        {/* Traditional hanging brass deepam chain on left with gentle float animation */}
        <div className="absolute top-0 left-6 lg:left-12 flex flex-col items-center opacity-40 pointer-events-none animate-float hidden md:flex">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold-400 to-amber-300" />
          <div className="w-3.5 h-3.5 border border-gold-400 rotate-45" />
          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1 animate-pulse shadow-sm shadow-amber-400/80" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-wide section-padding pt-24 pb-12 text-center max-w-4xl mx-auto">
        {/* Eyebrow / Breadcrumb with Lotus glyph */}
        <Reveal>
          <div className="flex flex-col items-center gap-2.5 mb-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-950/70 border border-gold-400/30 backdrop-blur-md shadow-lg shadow-black/50">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <Link to="/" className="text-[11px] text-cream-100/70 hover:text-gold-300 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-gold-400/50" />
              <span className="text-[11px] text-gold-300 font-medium tracking-wider uppercase font-sans">
                {eyebrow || "Suha Academy"}
              </span>
            </div>

            {/* Lotus glyph ornament */}
            <div className="flex items-center justify-center gap-3 mt-1">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-gold-400/60 to-gold-400" />
              <svg
                className="w-4 h-4 text-gold-400 animate-pulse"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 3c-1.2 2.2-2.5 4.5-2.5 6.5 0 2.2 1.3 4 2.5 5 1.2-1 2.5-2.8 2.5-5 0-2-1.3-4.3-2.5-6.5zm-5 4c-1.3 1.8-2 3.6-2 5.5 0 2.8 2 4.8 4.5 5.5-1.2-1.5-1.8-3.2-1.8-5 0-2.2 1.3-4.2 2-6zm10 0c.7 1.8 2 3.8 2 6 0 1.8-.6 3.5-1.8 5 2.5-.7 4.5-2.7 4.5-5.5 0-1.9-.7-3.7-2-5.5zM12 16.5c-2.8 0-5.5 1-7.5 2.5 2.5 1.5 5 2 7.5 2s5-.5 7.5-2c-2-1.5-4.7-2.5-7.5-2.5z" />
              </svg>
              <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent via-gold-400/60 to-gold-400" />
            </div>
          </div>
        </Reveal>

        {/* Title */}
        <Reveal delay={0.1}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.12] mb-4 drop-shadow-lg">
            {title}
          </h1>
        </Reveal>

        {/* Subtitle */}
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-cream-100/85 max-w-2xl mx-auto leading-relaxed font-light font-sans drop-shadow-sm">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>

      {/* Crisp Golden Architectural Divider line at bottom — ZERO CLOUDY FOG */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent z-20 pointer-events-none" />
    </section>
  );
}
