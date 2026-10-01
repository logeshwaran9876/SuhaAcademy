import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Reveal } from "./Reveal";

const DANCER_STAGES = [
  {
    id: "solo_standing",
    label: "Solo Abhinaya",
    shortLabel: "Solo",
    subtitle: "Classical Stage Stance",
    image: "/suha_media/suha_fb_solo_standing_redcurtain_clean.jpg",
    alt: "Suha Academy Bharatanatyam dancer in classical standing posture on stage",
  },
  {
    id: "duet",
    label: "Classical Duet",
    shortLabel: "Duet",
    subtitle: "Thematic Stage Ensemble",
    image: "/suha_media/suha_fb_duet_redcurtain_clean.jpg",
    alt: "Suha Academy Bharatanatyam duo performing on stage with red velvet curtains",
  },
  {
    id: "seated",
    label: "Araimandi & Bhava",
    shortLabel: "Araimandi",
    subtitle: "Muzhumandi Seated Mudra",
    image: "/suha_media/suha_fb_solo_seated_redcurtain_clean.jpg",
    alt: "Suha Academy dancer seated in traditional Araimandi pose with mudras",
  },
  {
    id: "natya",
    label: "Natya Mudra",
    shortLabel: "Natya",
    subtitle: "Classical Arm Postures",
    image: "/suha_media/suha_fb_solo_natya_redcurtain_clean.jpg",
    alt: "Suha Academy dancer with classical hand mudras and expressions",
  },
];

export default function Hero() {
  const [activeDancerIndex, setActiveDancerIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeDancer = DANCER_STAGES[activeDancerIndex];

  // Attempt autoplay on mount (muted ambient background)
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => { });
    }
  }, []);

  return (
    <section className="relative min-h-[92svh] lg:min-h-screen flex items-center overflow-hidden bg-[#0A0507]">
      {/* Background theatrical stage with Live HD Video & red curtain lighting */}
      <div className="absolute inset-0 select-none overflow-hidden">
        {/* Fallback Theater Poster Texture */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${videoLoaded ? "opacity-25" : "opacity-75"
            }`}
          style={{
            backgroundImage: `url('/suha_media/suha_hero_theatre_banner.jpg')`,
          }}
        />

        {/* Ambient HD Background Video (Universal H.264 1080p FastStart) */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/suha_media/suha_hero_theatre_banner.jpg"
          onLoadedData={() => setVideoLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover object-[52%_center] lg:object-[46%_center] filter brightness-[0.88] contrast-[1.06] transition-opacity duration-1000"
        >
          <source src="/suha_media/hero_bg_recital.mp4" type="video/mp4" />
        </video>

        {/* Theatrical Vignette & Stage Atmosphere Gradients: Deep left shadow for text legibility, clear stage on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0507] via-[#0A0507]/90 to-transparent w-full lg:w-[62%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0507] via-transparent to-[#0A0507]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0507]/90 via-transparent to-[#0A0507]" />

        {/* Subtle amber stage warmth filter over video */}
        <div className="absolute inset-0 bg-amber-950/20 mix-blend-color-burn pointer-events-none" />

        {/* Traditional gold mandala line-art watermark in top left corner with slow rotation */}
        <div
          className="absolute -top-12 -left-12 w-80 h-80 opacity-[0.08] pointer-events-none text-gold-400"
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

      {/* Main Container - Left Content & Right Corner Card */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 pt-28 pb-12 lg:pt-32 lg:pb-16 flex flex-col justify-center min-h-[92svh] lg:min-h-screen">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full my-auto">
          {/* Left Column: Minimal & Left-Start Editorial Content */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start justify-center text-left max-w-xl xl:max-w-2xl">
            {/* Eyebrow: Minimal Lineage */}
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-gold-400" />
                <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-300 font-sans font-medium">
                  Suha Academy of Fine Arts &bull; Estd. 2010
                </p>
              </div>
            </Reveal>

            {/* Headline: Clean, Poetic & Meaningful */}
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-medium text-white tracking-tight leading-[1.08] mb-5">
                Rooted in Tradition.
                <br />
                Elevated by Grace.
                <br />
                <span className="font-serif italic font-normal text-gold-300 drop-shadow-md">
                  Mastered on Stage.
                </span>
              </h1>
            </Reveal>

            {/* Subtitle: Minimal, Clear & Authentic */}
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-cream-100/80 font-light font-sans leading-relaxed mb-8 max-w-lg">
                Authentic Bharatanatyam, Carnatic Vocal, and Mohiniyattam guided by Founder &amp; Artistic Director Smt. Ranjini Pradeep.
              </p>
            </Reveal>

            {/* Actions: Primary CTA & Audio Control */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-4">
                {/* Primary button */}
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C2734C] via-[#C97A52] to-[#B3653E] hover:from-[#B86841] hover:to-[#A75932] text-white font-medium text-sm tracking-wide rounded-md shadow-lg shadow-[#C2734C]/25 transition-all duration-300 group hover:translate-y-[-1px] active:scale-[0.99]"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* Secondary Action button */}
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2.5 px-7 py-4 border border-gold-400/40 hover:border-gold-300 text-cream-100 hover:text-white font-medium text-sm tracking-wide rounded-md transition-all duration-300 backdrop-blur-md hover:bg-gold-500/10 shadow-lg shadow-black/20 group hover:translate-y-[-1px] active:scale-[0.99]"
                >
                  <Sparkles className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
                  <span>Upcoming Events</span>
                </Link>
              </div>
            </Reveal>

            {/* Minimal Footnote: Locations */}
            <Reveal delay={0.35}>
              <p className="mt-8 text-xs text-cream-100/50 font-sans tracking-wide">
                Old Perungalathur &bull; Medavakkam &bull; Perumbakkam
              </p>
            </Reveal>
          </div>

          {/* Right Corner: Smooth Rounded DANCER_STAGES Card */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end items-end w-full pt-6 lg:pt-0">
            <Reveal delay={0.3}>
              <div className="w-full max-w-[420px] sm:max-w-[440px] xl:max-w-[460px] relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#180A0E]/90 to-[#0C0608]/95 backdrop-blur-xl border border-gold-500/30 shadow-2xl shadow-black/80 transition-all duration-500 group">
                <div>
                  {/* Dancer Image */}
                  <div className="relative h-[420px] sm:h-[460px] w-full overflow-hidden flex items-end justify-center">
                    <img
                      key={activeDancer.id}
                      src={activeDancer.image}
                      alt={activeDancer.alt}
                      className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-[1.02]"
                      fetchPriority="high"
                    />

                    {/* Stage dark vignettes */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0507] via-transparent to-transparent opacity-85" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0507]/40 via-transparent to-transparent" />

                    {/* Stage Spotlight pool underneath feet */}
                    <div className="absolute bottom-4 inset-x-8 h-8 bg-amber-400/20 blur-xl rounded-full pointer-events-none" />

                    {/* Bottom overlay badge - Smooth rounded corners */}
                    <div className="absolute bottom-4 left-3 right-3 sm:left-4 sm:right-4 z-20 flex items-center justify-between gap-3 p-3 px-3.5 rounded-xl bg-[#0A0507]/90 backdrop-blur-md border border-gold-400/25">
                      <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase tracking-widest text-gold-300 font-medium whitespace-nowrap truncate">
                          {activeDancer.label}
                        </p>
                        <p className="text-[11px] text-cream-100/80 font-sans whitespace-nowrap truncate">
                          {activeDancer.subtitle} &bull; Suha Disciples
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="text-[10px] uppercase tracking-wider text-emerald-300 font-medium whitespace-nowrap">
                          Stage Archive
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Pose Switcher Tabs - Smooth rounded buttons */}
                  <div className="p-2.5 bg-[#0C0608] border-t border-gold-500/25 flex items-center justify-between gap-1.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    {DANCER_STAGES.map((stage, idx) => (
                      <button
                        key={stage.id}
                        type="button"
                        onClick={() => setActiveDancerIndex(idx)}
                        className={`flex-1 py-1.5 px-2 text-[10px] sm:text-[11px] font-sans font-medium rounded-lg transition-all duration-300 whitespace-nowrap text-center ${activeDancerIndex === idx
                            ? "bg-gold-500/30 text-gold-100 border-2 border-gold-400 shadow-lg shadow-gold-500/25 font-semibold ring-1 ring-gold-400/40"
                            : "border border-gold-500/20 bg-black/40 text-cream-100/60 hover:text-white hover:border-gold-400/60 hover:bg-gold-500/10"
                          }`}
                      >
                        {stage.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient transition */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#0A0507] to-transparent z-20 pointer-events-none" />
    </section>
  );
}


