import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Users,
  Award,
  GraduationCap,
  MapPin,
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
      // If unmuting and video was paused, resume playback
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

        {/* Cinematic stage vignette: deep shadows on left for text legibility, crystal clear spotlight on center-right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0507] via-[#0A0507]/85 to-transparent w-full lg:w-[58%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0507] via-transparent to-[#0A0507]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0507]/90 via-transparent to-[#0A0507]" />

        {/* Subtle amber stage warmth filter over video */}
        <div className="absolute inset-0 bg-amber-950/20 mix-blend-color-burn pointer-events-none" />

        {/* Traditional gold mandala line-art watermark in top left corner with slow rotation */}
        <div
          className="absolute -top-12 -left-12 w-80 h-80 opacity-[0.09] pointer-events-none text-gold-400"
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

        {/* Traditional hanging brass deepam chain motif on far left with float animation */}
        <div className="absolute top-0 left-6 lg:left-12 flex flex-col items-center opacity-40 pointer-events-none animate-float">
          <div className="w-px h-36 bg-gradient-to-b from-transparent via-gold-400 to-amber-300" />
          <div className="w-4 h-4 border border-gold-400 rotate-45" />
          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1 animate-pulse shadow-sm shadow-amber-400/80" />
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 container-wide section-padding pt-28 pb-14 lg:pt-32 lg:pb-16 flex flex-col justify-between min-h-[92svh] lg:min-h-screen">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
          {/* Left Column: Hero Typography & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left pt-4 lg:pt-0">
            {/* Eyebrow: Lotus ornament & Classical disciplines */}
            <Reveal>
              <div className="flex flex-col items-start gap-2 mb-5">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-gradient-to-r from-transparent via-gold-400 to-gold-400" />
                  {/* Traditional Lotus Flower Glyph */}
                  <svg
                    className="w-5 h-5 text-gold-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 3c-1.2 2.2-2.5 4.5-2.5 6.5 0 2.2 1.3 4 2.5 5 1.2-1 2.5-2.8 2.5-5 0-2-1.3-4.3-2.5-6.5zm-5 4c-1.3 1.8-2 3.6-2 5.5 0 2.8 2 4.8 4.5 5.5-1.2-1.5-1.8-3.2-1.8-5 0-2.2 1.3-4.2 2-6zm10 0c.7 1.8 2 3.8 2 6 0 1.8-.6 3.5-1.8 5 2.5-.7 4.5-2.7 4.5-5.5 0-1.9-.7-3.7-2-5.5zM12 16.5c-2.8 0-5.5 1-7.5 2.5 2.5 1.5 5 2 7.5 2s5-.5 7.5-2c-2-1.5-4.7-2.5-7.5-2.5z" />
                  </svg>
                  <div className="h-px w-10 bg-gradient-to-l from-transparent via-gold-400 to-gold-400" />
                </div>
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-gold-300 font-medium font-sans flex items-center gap-2">
                  <span>Bharatanatyam</span>
                  <span className="text-gold-500/50">&bull;</span>
                  <span>Carnatic Music</span>
                  <span className="text-gold-500/50">&bull;</span>
                  <span>Mohiniyattam</span>
                </p>
              </div>
            </Reveal>

            {/* Main Headline */}
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-medium text-white tracking-tight leading-[1.08] mb-5">
                Where Tradition
                <br />
                Finds Its{" "}
                <span className="font-serif italic font-normal text-gold-300 tracking-normal drop-shadow-md">
                  Rhythm
                </span>
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-cream-100/85 max-w-xl leading-relaxed mb-8 font-light font-sans">
                Learn Bharatanatyam and Carnatic music to experience the timeless beauty
                of Indian classical art. Nurturing discipline, expression, and cultural
                heritage for generations.
              </p>
            </Reveal>

            {/* Call to Action Buttons */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                {/* Terracotta/Copper-gold primary button */}
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C2734C] via-[#C97A52] to-[#B3653E] hover:from-[#B86841] hover:to-[#A75932] text-white font-medium text-sm tracking-wide rounded-md shadow-lg shadow-[#C2734C]/25 transition-all duration-300 group hover:translate-y-[-1px] active:scale-[0.99]"
                >
                  <span>Explore Our Training</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* Secondary transparent button */}
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 px-6 py-4 border border-gold-400/35 hover:border-gold-300 text-cream-100 hover:text-white font-medium text-sm tracking-wide rounded-md transition-all duration-300 backdrop-blur-sm hover:bg-gold-500/10"
                >
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  <span>Upcoming Events</span>
                </Link>
              </div>
            </Reveal>

            {/* Credibility Chips / Highlights */}
            <Reveal delay={0.35}>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-cream-100/70 font-sans pt-4 border-t border-cream-100/10 max-w-xl">
                <div className="flex items-center gap-2 text-gold-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <span className="font-medium">Under Guru Smt. Ranjini Pradeep</span>
                </div>
                <span className="text-gold-500/40 hidden sm:inline">&bull;</span>
                <div>Estd. {academy.established}</div>
                <span className="text-gold-500/40 hidden sm:inline">&bull;</span>
                <div>Affiliated with TN Music & Fine Arts University</div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Unobstructed Stage Performance with Floating Glass Accents (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-start lg:items-end justify-between min-h-[260px] sm:min-h-[320px] lg:min-h-[460px] pointer-events-none">
            {/* Top-Right Floating Live Stage Badge */}
            <Reveal delay={0.25}>
              <div className="pointer-events-auto flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-black/60 backdrop-blur-md border border-gold-400/30 shadow-xl">
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

            {/* Bottom-Right Floating Sound & Play Control Pill */}
            <Reveal delay={0.4}>
              <div className="pointer-events-auto mt-auto flex items-center gap-3 p-2 px-3.5 rounded-full bg-black/65 backdrop-blur-md border border-gold-400/35 shadow-2xl">
                {/* Play/Pause Button */}
                <button
                  type="button"
                  onClick={togglePlay}
                  className="w-8 h-8 rounded-full bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 flex items-center justify-center transition-all duration-200"
                  title={isPlaying ? "Pause ambient video" : "Play ambient video"}
                  aria-label={isPlaying ? "Pause ambient video" : "Play ambient video"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                </button>

                {/* Sound Toggle Button */}
                <button
                  type="button"
                  onClick={toggleMute}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-all duration-300 ${
                    !isMuted
                      ? "bg-gold-500 text-navy-950 font-semibold shadow-md shadow-gold-500/30"
                      : "bg-white/10 text-cream-100/90 hover:text-white hover:bg-white/20"
                  }`}
                  title={isMuted ? "Click to play recital music" : "Click to mute"}
                >
                  {!isMuted ? (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-navy-950 animate-bounce" />
                      <span>Audio Playing</span>
                      {/* Equalizer animation */}
                      <span className="flex items-end gap-0.5 h-3">
                        <span className="w-0.5 bg-navy-950 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-3" />
                        <span className="w-0.5 bg-navy-950 rounded-full animate-[pulse_0.4s_ease-in-out_infinite] h-2" />
                        <span className="w-0.5 bg-navy-950 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3" />
                      </span>
                    </>
                  ) : (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-gold-400" />
                      <span>Unmute Recital Sound</span>
                    </>
                  )}
                </button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Theatrical Stats Strip — Anchors the Hero & Prevents Emptiness */}
        <Reveal delay={0.45}>
          <div className="pt-8 lg:pt-10 border-t border-gold-500/20 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:scale-105 transition-transform shrink-0">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-display font-medium text-white tracking-tight">500+</p>
                <p className="text-[11px] sm:text-xs text-cream-100/70 font-sans">Disciples Trained</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:scale-105 transition-transform shrink-0">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-display font-medium text-white tracking-tight">15+ Years</p>
                <p className="text-[11px] sm:text-xs text-cream-100/70 font-sans">Living Cultural Legacy</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:scale-105 transition-transform shrink-0">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-display font-medium text-white tracking-tight">100%</p>
                <p className="text-[11px] sm:text-xs text-cream-100/70 font-sans">Arangetram Excellence</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:scale-105 transition-transform shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-display font-medium text-white tracking-tight">3 Centers</p>
                <p className="text-[11px] sm:text-xs text-cream-100/70 font-sans">Across Chennai</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Crisp bottom border separating the hero banner from the next section */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent z-20 pointer-events-none" />
    </section>
  );
}


