import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Volume2,
  VolumeX,
  Play,
  Pause,
  BookOpen,
  Award,
  GraduationCap,
} from "lucide-react";
import { academy } from "@/data/academy";
import { Reveal } from "./Reveal";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sync mute state with video ref
  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      // If unmuting and video was paused, resume
      if (!nextMuted && videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  // Sync play/pause state with video ref
  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Attempt autoplay on mount
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  return (
    <section className="relative min-h-[92svh] lg:min-h-screen flex items-center overflow-hidden bg-[#0A0507]">
      {/* Background theatrical stage with Live HD Video & red curtain lighting */}
      <div className="absolute inset-0 select-none overflow-hidden">
        {/* Fallback Theater Poster Texture */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            videoLoaded ? "opacity-25" : "opacity-75"
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
          muted={isMuted}
          playsInline
          poster="/suha_media/suha_hero_theatre_banner.jpg"
          onLoadedData={() => setVideoLoaded(true)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="absolute inset-0 w-full h-full object-cover object-[70%_center] lg:object-[68%_center] filter brightness-[0.88] contrast-[1.06] transition-opacity duration-1000"
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

      {/* Main Container - Left-Anchored (Flush to left padding, NOT centered with mx-auto) */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 pt-28 pb-12 lg:pt-32 lg:pb-16 flex flex-col justify-between min-h-[92svh] lg:min-h-screen">
        {/* Main Grid: Left Content (Left Start) & Open Stage Right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto w-full">
          {/* Left Column: Strictly Left-Start Editorial Content */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start justify-center text-left max-w-2xl xl:max-w-3xl">
            {/* Eyebrow: Traditional Lineage & Academy Tagline */}
            <Reveal>
              <div className="flex flex-col items-start gap-2 mb-5">
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/30 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-sans font-medium uppercase tracking-[0.22em] text-gold-300">
                    Guru-Shishya Tradition &bull; Estd. 2010
                  </span>
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-cream-100/60 font-sans font-medium pl-1">
                  Bharatanatyam &bull; Carnatic Vocal &bull; Mohiniyattam
                </p>
              </div>
            </Reveal>

            {/* Meaningful Main Headline */}
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-medium text-white tracking-tight leading-[1.08] mb-6">
                Rooted in Tradition.
                <br />
                Elevated by Grace.
                <br />
                <span className="font-serif italic font-normal text-gold-300 drop-shadow-md">
                  Mastered on Stage.
                </span>
              </h1>
            </Reveal>

            {/* Meaningful Subtitle - Deeply authentic for Suha Academy */}
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-cream-100/85 leading-relaxed mb-8 font-light font-sans max-w-xl">
                Under the direct mentorship of <span className="text-gold-200 font-medium">Smt. Ranjini Pradeep</span>, Suha Academy of Fine Arts nurtures aspiring artists in classical dance and music. From foundational adavus and sacred ragas to complete Margam repertoire and solo Arangetrams, we instill lifelong discipline, spiritual devotion, and stage excellence.
              </p>
            </Reveal>

            {/* Call to Action Buttons & Ambient Sound Pill - All Left Start */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center justify-start gap-4 mb-8">
                {/* Terracotta primary button */}
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C2734C] via-[#C97A52] to-[#B3653E] hover:from-[#B86841] hover:to-[#A75932] text-white font-medium text-sm tracking-wide rounded-md shadow-lg shadow-[#C2734C]/25 transition-all duration-300 group hover:translate-y-[-1px] active:scale-[0.99]"
                >
                  <span>Explore Classical Courses</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* Secondary transparent button */}
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 px-6 py-4 border border-gold-400/35 hover:border-gold-300 text-cream-100 hover:text-white font-medium text-sm tracking-wide rounded-md transition-all duration-300 backdrop-blur-sm hover:bg-gold-500/10"
                >
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  <span>Upcoming Stage Recitals</span>
                </Link>

                {/* Ambient Sound & Video Controls */}
                <div className="flex items-center gap-2 p-1.5 px-3 rounded-md bg-black/60 backdrop-blur-md border border-gold-400/30 shadow-lg">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="w-7 h-7 rounded-full bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 flex items-center justify-center transition-all duration-200"
                    title={isPlaying ? "Pause ambient video" : "Play ambient video"}
                    aria-label={isPlaying ? "Pause ambient video" : "Play ambient video"}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-all duration-300 ${
                      !isMuted
                        ? "bg-gold-500 text-navy-950 font-semibold shadow-md shadow-gold-500/30"
                        : "bg-white/10 text-cream-100 hover:text-white hover:bg-white/20"
                    }`}
                    title={isMuted ? "Click to play recital music" : "Click to mute"}
                  >
                    {!isMuted ? (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-navy-950 animate-bounce" />
                        <span>Audio Playing</span>
                        <span className="flex items-end gap-0.5 h-3">
                          <span className="w-0.5 bg-navy-950 rounded-full animate-pulse h-3" />
                          <span className="w-0.5 bg-navy-950 rounded-full animate-pulse h-2" />
                          <span className="w-0.5 bg-navy-950 rounded-full animate-pulse h-3" />
                        </span>
                      </>
                    ) : (
                      <>
                        <VolumeX className="w-3.5 h-3.5 text-gold-400" />
                        <span>Unmute Recital</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Credibility Chips / Highlights - Strictly Left Start */}
            <Reveal delay={0.35}>
              <div className="flex flex-wrap items-center justify-start gap-y-2 gap-x-5 text-xs text-cream-100/70 font-sans pt-5 border-t border-cream-100/10 w-full max-w-xl">
                <div className="flex items-center gap-2 text-gold-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <span className="font-medium">Artistic Director Smt. Ranjini Pradeep</span>
                </div>
                <span className="text-gold-500/40 hidden sm:inline">&bull;</span>
                <div>14+ Years Legacy (Estd. {academy.established})</div>
                <span className="text-gold-500/40 hidden sm:inline">&bull;</span>
                <div>Perungalathur &bull; Medavakkam &bull; Perumbakkam</div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Open Live Stage with Floating Accents (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-start lg:items-end justify-between min-h-[160px] sm:min-h-[220px] pointer-events-none">
            {/* Top-Right Floating Live Stage Badge */}
            <Reveal delay={0.25}>
              <div className="pointer-events-auto flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-gold-400/30 shadow-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-gold-300">
                  Live Stage Recital
                </span>
                <span className="text-white/20">&bull;</span>
                <span className="text-[11px] font-mono text-emerald-400 font-medium">1080p 60FPS</span>
              </div>
            </Reveal>

            {/* Bottom-Right Floating Stage Citation Pill */}
            <Reveal delay={0.4}>
              <div className="pointer-events-auto mt-auto flex items-center gap-3 p-3 px-4 rounded-sm bg-black/60 backdrop-blur-md border border-gold-500/20 shadow-xl">
                <div className="w-8 h-8 rounded-full bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-300 shrink-0">
                  <Sparkles className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <p className="text-xs font-display font-medium text-white">Stage Arangetram Recital</p>
                  <p className="text-[10px] text-cream-100/70 font-sans">Jathi & Varnam &bull; Live Orchestra</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom 3 Left-Aligned Feature Cards */}
        <Reveal delay={0.45}>
          <div className="mt-8 pt-6 border-t border-gold-500/25 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 w-full">
            {/* Card 1: Classical Foundation */}
            <div className="p-5 rounded-sm bg-gradient-to-b from-[#14080B]/85 to-[#0A0507]/90 backdrop-blur-xl border border-gold-500/25 hover:border-gold-400/50 shadow-xl transition-all duration-300 group hover:-translate-y-0.5 text-left">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-full bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-300 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-gold-400/90 font-medium px-2 py-0.5 rounded bg-gold-400/10">
                  Authentic Pedagogy
                </span>
              </div>
              <h3 className="text-lg font-display font-medium text-white mb-1.5 group-hover:text-gold-200 transition-colors">
                Classical Foundations
              </h3>
              <p className="text-xs text-cream-100/75 font-sans leading-relaxed">
                Step-by-step training in Adavus, Hastas (mudras), Tala rhythm, and Bhava, cultivating divine posture and discipline.
              </p>
            </div>

            {/* Card 2: Arangetram Stage Training */}
            <div className="p-5 rounded-sm bg-gradient-to-b from-[#14080B]/85 to-[#0A0507]/90 backdrop-blur-xl border border-gold-500/25 hover:border-gold-400/50 shadow-xl transition-all duration-300 group hover:-translate-y-0.5 text-left">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-full bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-300 group-hover:scale-110 transition-transform">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-medium px-2 py-0.5 rounded bg-emerald-400/10">
                  500+ Disciples
                </span>
              </div>
              <h3 className="text-lg font-display font-medium text-white mb-1.5 group-hover:text-gold-200 transition-colors">
                Arangetram Excellence
              </h3>
              <p className="text-xs text-cream-100/75 font-sans leading-relaxed">
                Rigorous solo debut preparation with full live orchestra: Nattuvangam, Mridangam, Violin, and Flute ensemble.
              </p>
            </div>

            {/* Card 3: Certified University Diplomas */}
            <div className="p-5 rounded-sm bg-gradient-to-b from-[#14080B]/85 to-[#0A0507]/90 backdrop-blur-xl border border-gold-500/25 hover:border-gold-400/50 shadow-xl transition-all duration-300 group hover:-translate-y-0.5 text-left">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-full bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-300 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-gold-400/90 font-medium px-2 py-0.5 rounded bg-gold-400/10">
                  Recognized Lineage
                </span>
              </div>
              <h3 className="text-lg font-display font-medium text-white mb-1.5 group-hover:text-gold-200 transition-colors">
                Grade & Diploma Exams
              </h3>
              <p className="text-xs text-cream-100/75 font-sans leading-relaxed">
                Structured certification and affiliated university grade examinations recognized across cultural councils in India.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Crisp bottom border separating the hero banner from the next section */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent z-20 pointer-events-none" />
    </section>
  );
}


