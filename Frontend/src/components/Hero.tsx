import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Film,
  Camera,
  Music,
  Award,
} from "lucide-react";
import { academy } from "@/data/academy";
import { Reveal } from "./Reveal";

const DANCER_STAGES = [
  {
    id: "solo_standing",
    label: "Solo Abhinaya",
    subtitle: "Classical Stage Stance",
    image: "/suha_media/suha_fb_solo_standing_redcurtain_clean.jpg",
    alt: "Suha Academy Bharatanatyam dancer in classical standing posture on stage",
  },
  {
    id: "duet",
    label: "Classical Duet",
    subtitle: "Thematic Stage Ensemble",
    image: "/suha_media/suha_fb_duet_redcurtain_clean.jpg",
    alt: "Suha Academy Bharatanatyam duo performing on stage with red velvet curtains",
  },
  {
    id: "seated",
    label: "Araimandi & Bhava",
    subtitle: "Muzhumandi Seated Mudra",
    image: "/suha_media/suha_fb_solo_seated_redcurtain_clean.jpg",
    alt: "Suha Academy dancer seated in traditional Araimandi pose with mudras",
  },
  {
    id: "natya",
    label: "Natya Mudra",
    subtitle: "Classical Arm Postures",
    image: "/suha_media/suha_fb_solo_natya_redcurtain_clean.jpg",
    alt: "Suha Academy dancer with classical hand mudras and expressions",
  },
];

export default function Hero() {
  const [activeDancerIndex, setActiveDancerIndex] = useState(0);
  const [rightViewMode, setRightViewMode] = useState<"video_spotlight" | "postures">("video_spotlight");
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeDancer = DANCER_STAGES[activeDancerIndex];

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
        // Autoplay may be blocked until user interaction
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
            videoLoaded ? "opacity-30" : "opacity-75"
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
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.08] transition-opacity duration-1000"
        >
          <source src="/suha_media/hero_bg_recital.mp4" type="video/mp4" />
        </video>

        {/* Cinematic stage vignette: deep shadows on left for text legibility, clear stage on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0507]/95 via-[#0A0507]/80 to-[#0A0507]/40 lg:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0507] via-transparent to-[#0A0507]/70" />
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
      <div className="relative z-10 container-wide section-padding pt-28 pb-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[70vh]">
          {/* Left Column: Hero Typography & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left pt-6 lg:pt-0">
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
              <div className="flex flex-wrap items-center gap-4 mb-8">
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

            {/* Ambient Background Video Controls Bar */}
            <Reveal delay={0.35}>
              <div className="flex items-center gap-3 p-2 px-3 rounded-full bg-black/60 backdrop-blur-md border border-gold-500/20 max-w-fit mb-6 shadow-inner">
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
                      ? "bg-gold-500 text-navy-950 shadow-md shadow-gold-500/30"
                      : "bg-white/10 text-cream-100/80 hover:text-white hover:bg-white/15"
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

                <div className="h-3 w-px bg-white/15" />

                {/* Status indicator */}
                <div className="flex items-center gap-2 pr-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] text-cream-100/70 font-sans hidden sm:inline">
                    Live Stage Video
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Credibility Chips / Highlights */}
            <Reveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-cream-100/70 font-sans pt-5 border-t border-cream-100/10 max-w-xl">
                <div className="flex items-center gap-2 text-gold-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <span className="font-medium">Under Guru Smt. Ranjini Pradeep</span>
                </div>
                <span className="text-gold-500/40 hidden sm:inline">&bull;</span>
                <div>Estd. {academy.established}</div>
                <span className="text-gold-500/40 hidden sm:inline">&bull;</span>
                <div>Medavakkam &bull; Perumbakkam &bull; Old Perungalathur</div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Stage Showcase & Mudras Mode Switcher (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center">
            <Reveal delay={0.2} className="w-full max-w-md lg:max-w-none">
              <div className="relative rounded-sm overflow-hidden bg-gradient-to-b from-[#14080B]/90 via-[#0E0608]/85 to-[#0A0507]/90 backdrop-blur-xl border border-gold-500/30 shadow-2xl shadow-black/90 group">
                {/* Top Lighting Beam */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-400/80 to-transparent z-20" />

                {/* Mode Selector Header */}
                <div className="p-3 bg-black/40 border-b border-gold-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setRightViewMode("video_spotlight")}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-sans font-medium transition-all ${
                        rightViewMode === "video_spotlight"
                          ? "bg-gold-500/25 text-gold-300 border border-gold-400/40 shadow-sm"
                          : "text-cream-100/60 hover:text-white"
                      }`}
                    >
                      <Film className="w-3.5 h-3.5 text-gold-400" />
                      <span>Stage Spotlight</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setRightViewMode("postures")}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-sans font-medium transition-all ${
                        rightViewMode === "postures"
                          ? "bg-gold-500/25 text-gold-300 border border-gold-400/40 shadow-sm"
                          : "text-cream-100/60 hover:text-white"
                      }`}
                    >
                      <Camera className="w-3.5 h-3.5 text-gold-400" />
                      <span>Postures Archive</span>
                    </button>
                  </div>

                  <span className="text-[10px] uppercase tracking-wider text-gold-400/80 font-sans font-medium">
                    HD Recital
                  </span>
                </div>

                {/* MODE 1: STAGE SPOTLIGHT CARD */}
                {rightViewMode === "video_spotlight" ? (
                  <div className="relative p-6 sm:p-7 flex flex-col justify-between min-h-[460px] sm:min-h-[500px]">
                    {/* Theatrical Curtain Texture Backdrop */}
                    <div
                      className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none mix-blend-screen"
                      style={{
                        backgroundImage: `url('/suha_media/suha_hero_theatre_banner.jpg')`,
                      }}
                    />

                    {/* Spotlight Glow */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

                    {/* Header Info */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="px-2.5 py-1 rounded bg-gold-500/15 border border-gold-400/30 text-gold-300 text-[10px] uppercase tracking-widest font-semibold flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-gold-400" />
                          <span>Live Recital Showcase</span>
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block mr-1" />
                          1080p 60FPS
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-display font-medium text-white mb-2 leading-tight">
                        Bharatanatyam Stage Arangetram
                      </h3>
                      <p className="text-xs sm:text-sm text-cream-100/75 font-sans leading-relaxed">
                        Watch authentic live performance by disciples of Suha Academy, featuring intricate Jathi footwork, Bhavam, and Carnatic nattuvangam rhythm.
                      </p>
                    </div>

                    {/* Performance Highlights Widget */}
                    <div className="relative z-10 space-y-2.5 my-4">
                      <div className="p-3 rounded bg-black/40 border border-gold-500/15 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-300">
                            <Music className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-white">Nattuvangam & Mridangam</p>
                            <p className="text-[10px] text-cream-100/60 font-sans">Traditional Tala & Solkattu</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={toggleMute}
                          className="px-2.5 py-1 rounded text-[11px] font-sans bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 border border-gold-400/30 transition-colors"
                        >
                          {isMuted ? "Listen Now" : "Mute"}
                        </button>
                      </div>

                      <div className="p-3 rounded bg-black/40 border border-gold-500/15 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-300">
                            <Award className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-white">Kalaimamani & University Affiliated</p>
                            <p className="text-[10px] text-cream-100/60 font-sans">15+ Years Cultural Legacy</p>
                          </div>
                        </div>
                        <span className="text-[10px] text-gold-400 font-semibold px-2 py-0.5 rounded bg-gold-400/10">
                          Accredited
                        </span>
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="relative z-10 pt-3 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={toggleMute}
                        className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-gradient-to-r from-gold-500 to-amber-600 text-navy-950 font-medium text-xs tracking-wider uppercase shadow-md shadow-gold-500/20 hover:brightness-110 transition-all"
                      >
                        {isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                        <span>{isMuted ? "Experience Audio" : "Mute Sound"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setRightViewMode("postures")}
                        className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded bg-white/10 hover:bg-white/15 text-cream-100 text-xs font-sans transition-colors"
                      >
                        <Camera className="w-3.5 h-3.5 text-gold-300" />
                        <span>View Mudras</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* MODE 2: CLASSICAL POSTURES ARCHIVE */
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

                      {/* Bottom overlay badge */}
                      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3.5 rounded-sm bg-[#0A0507]/85 backdrop-blur-md border border-gold-400/25">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-gold-300 font-medium">
                            {activeDancer.label}
                          </p>
                          <p className="text-[11px] text-cream-100/70 font-sans">
                            {activeDancer.subtitle} &bull; Suha Academy Disciples
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span className="text-[10px] uppercase tracking-wider text-emerald-300 font-medium">
                            Stage Archive
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Pose Switcher Tabs */}
                    <div className="p-2.5 bg-[#0C0608] border-t border-gold-500/15 flex items-center justify-between gap-1 overflow-x-auto">
                      {DANCER_STAGES.map((stage, idx) => (
                        <button
                          key={stage.id}
                          onClick={() => setActiveDancerIndex(idx)}
                          className={`flex-1 py-1.5 px-2 text-[10px] font-sans font-medium rounded-sm transition-all duration-300 whitespace-nowrap text-center ${
                            activeDancerIndex === idx
                              ? "bg-gold-500/20 text-gold-200 border border-gold-400/40 shadow-sm"
                              : "text-cream-100/50 hover:text-cream-100 hover:bg-white/5"
                          }`}
                        >
                          {stage.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Crisp bottom border separating the hero banner from the next section */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent z-20 pointer-events-none" />
    </section>
  );
}

