import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  MapPin,
} from "lucide-react";
import { Reveal } from "./Reveal";



export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Attempt autoplay on mount (muted ambient background)
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => { });
    }
  }, []);

  return (
    <section className="relative min-h-screen min-h-[100svh] flex items-center overflow-hidden bg-[#0A0507]">
      {/* Background theatrical stage with Live HD Video & red curtain lighting */}
      <div className="absolute inset-0 select-none overflow-hidden">
        {/* Fallback Theater Poster Texture */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${videoLoaded ? "opacity-25" : "opacity-75"
            }`}

        />

        {/* Ambient HD Background Video (Universal H.264 1080p FastStart) */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover object-[55%_top] lg:object-[48%_top] filter brightness-[1.14] contrast-[1.04] saturate-[1.10] transition-opacity duration-1000"
        >
          <source src="/suha_media/shared/shared_hero_bg_recital.mp4" type="video/mp4" />
        </video>

        {/* Theatrical Vignette & Stage Atmosphere Gradients */}
        {/* Desktop: Left dark shadow for editorial copy legibility, radiant clear stage on right */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0A0507] via-[#0A0507]/85 via-50% to-transparent w-[58%]" />
        {/* Mobile: Soft dark vignette behind text so stage dancers remain clearly visible */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#0A0507]/85 via-[#0A0507]/45 to-[#0A0507]/90" />
        {/* Soft bottom edge blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0507] via-transparent to-transparent pointer-events-none" />
        {/* Soft top navbar protection */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0A0507]/40 to-transparent pointer-events-none" />

        {/* Traditional gold mandala line-art watermark in top left corner with slow rotation */}
        <div
          className="absolute -top-8 -left-8 w-56 h-56 md:-top-12 md:-left-12 md:w-80 md:h-80 opacity-[0.08] pointer-events-none text-gold-400"
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

        {/* Traditional hanging brass deepam chain motifs on left & right with float animation */}
        <div className="absolute top-0 left-6 lg:left-14 flex flex-col items-center opacity-40 pointer-events-none animate-float">
          <div className="w-px h-36 bg-gradient-to-b from-transparent via-gold-400 to-amber-300" />
          <div className="w-4 h-4 border border-gold-400 rotate-45" />
          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1 animate-pulse shadow-sm shadow-amber-400/80" />
        </div>
      </div>

      {/* Main Container - Left Content */}
      <div className="relative z-10 w-full px-5 sm:px-10 md:px-14 lg:px-16 xl:px-20 pt-20 sm:pt-28 pb-10 sm:pb-16 lg:pt-32 lg:pb-16 flex flex-col justify-center min-h-screen min-h-[100svh]">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center w-full my-auto">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start justify-center text-left max-w-xl xl:max-w-2xl">
            {/* Eyebrow: Minimal Lineage */}
            <Reveal>
              <div className="flex items-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-4">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold-400 shadow-sm shadow-gold-400/50" />
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-300 font-sans font-medium">
                  Suha Academy of Fine Arts &bull; Estd. 2010
                </p>
              </div>
            </Reveal>

            {/* Headline: Clean, Poetic & Meaningful */}
            <Reveal delay={0.1}>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-medium text-white tracking-tight leading-[1.14] sm:leading-[1.08] mb-3 sm:mb-5">
                Rooted in Tradition.
                <br />
                Elevated by Grace.
                <br />

              </h1>
            </Reveal>

            {/* Subtitle: Minimal, Clear & Authentic */}
            <Reveal delay={0.2}>
              <p className="text-xs sm:text-base lg:text-lg text-cream-100/85 font-light font-sans leading-relaxed mb-5 sm:mb-8 max-w-sm sm:max-w-xl">
                Traditional Carnatic Music, Bharatanatyam and Mohiniyattam - refined through excellence under the guidance of Founder &amp; Artistic Director Smt. Ranjini Pradeep.
              </p>
            </Reveal>

            {/* Actions: Primary CTA & Secondary Action */}
            <Reveal delay={0.25}>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
                {/* Primary button */}
                <Link
                  to="/courses"
                  className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 sm:gap-2.5 px-5 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#C2734C] via-[#C97A52] to-[#B3653E] hover:from-[#B86841] hover:to-[#A75932] text-white font-medium text-xs sm:text-sm tracking-wide rounded-md shadow-lg shadow-[#C2734C]/25 transition-all duration-300 group hover:translate-y-[-1px] active:scale-[0.99] whitespace-nowrap"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* Secondary Action button */}
                <Link
                  to="/events"
                  className="flex-1 sm:flex-none inline-flex justify-center items-center gap-2 sm:gap-2.5 px-5 sm:px-7 py-3.5 sm:py-4 border border-gold-400/40 hover:border-gold-300 text-cream-100 hover:text-white font-medium text-xs sm:text-sm tracking-wide rounded-md transition-all duration-300 backdrop-blur-md hover:bg-gold-500/10 shadow-lg shadow-black/20 group hover:translate-y-[-1px] active:scale-[0.99] whitespace-nowrap"
                >
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 group-hover:scale-110 transition-transform shrink-0" />
                  <span>Events</span>
                </Link>
              </div>
            </Reveal>

            {/* Minimal Footnote: Locations */}
            <Reveal delay={0.3}>
              <p className="mt-5 sm:mt-8 text-[11px] sm:text-xs text-cream-100/60 font-sans tracking-wide flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-gold-400/80 shrink-0" />
                <span>Medavakkam &bull; Perumbakkam</span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient transition */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#0A0507] to-transparent z-20 pointer-events-none" />
    </section>
  );
}


