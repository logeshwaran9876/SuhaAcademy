import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Volume2, ShieldCheck } from "lucide-react";
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
  const activeDancer = DANCER_STAGES[activeDancerIndex];

  return (
    <section className="relative min-h-[92svh] lg:min-h-screen flex items-center overflow-hidden bg-[#0A0507]">
      {/* Background theatrical stage with red velvet curtains & warm lighting */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Red curtain backdrop texture with slow-zoom animation */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65 lg:opacity-80 scale-100 animate-slow-zoom transition-all duration-1000"
          style={{
            backgroundImage: `url('/suha_media/suha_hero_theatre_banner.jpg')`,
          }}
        />

        {/* Cinematic stage vignette: deep shadows on left for text legibility, spotlight on center-right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0507]/95 via-[#0A0507]/75 to-transparent lg:w-[62%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0507] via-transparent to-[#0A0507]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0507]/80 via-transparent to-[#0A0507]" />

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
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-gold-300 font-medium font-sans">
                  Bharatanatyam &bull; Carnatic Music &bull; Mohiniyattam
                </p>
              </div>
            </Reveal>

            {/* Main Headline (Identical typography style to reference) */}
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
              <p className="text-base sm:text-lg text-cream-100/80 max-w-xl leading-relaxed mb-8 font-light font-sans">
                Learn Bharatanatyam and Carnatic music to experience the timeless beauty
                of Indian classical art. Nurturing discipline, expression, and cultural
                heritage for generations.
              </p>
            </Reveal>

            {/* Call to Action Buttons */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                {/* Terracotta/Copper-gold primary button matching the reference */}
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C2734C] via-[#C97A52] to-[#B3653E] hover:from-[#B86841] hover:to-[#A75932] text-white font-medium text-sm tracking-wide rounded-md shadow-lg shadow-[#C2734C]/25 transition-all duration-300 group hover:translate-y-[-1px] active:scale-[0.99]"
                >
                  <span>Explore Our Training</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* Secondary transparent button */}
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 px-6 py-4 border border-gold-400/30 hover:border-gold-300 text-cream-100 hover:text-white font-medium text-sm tracking-wide rounded-md transition-all duration-300 backdrop-blur-sm hover:bg-gold-500/10"
                >
                  <span>Watch Recitals</span>
                </Link>
              </div>
            </Reveal>

            {/* Credibility Chips / Highlights */}
            <Reveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-cream-100/60 font-sans pt-6 border-t border-cream-100/10 max-w-xl">
                <div className="flex items-center gap-2 text-gold-200">
                  <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                  <span className="font-medium">Under Guru Smt. Ranjini Pradeep</span>
                </div>
                <span className="text-gold-500/40 hidden sm:inline">&bull;</span>
                <div>Estd. {academy.established}</div>
                <span className="text-gold-500/40 hidden sm:inline">&bull;</span>
                <div>Medavakkam &bull; Perumbakkam &bull; Old Perungalathur</div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Authentic Classical Stage Presentation (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center">
            <Reveal delay={0.2} className="w-full max-w-md lg:max-w-none">
              {/* Dancer Stage Card with warm ambient lighting & wooden stage reflection */}
              <div className="relative rounded-sm overflow-hidden bg-gradient-to-b from-[#14080B] via-[#0E0608] to-[#0A0507] border border-gold-500/20 shadow-2xl shadow-black/80 group">
                {/* Stage top lighting beam */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent z-20" />

                {/* Dancer Image */}
                <div className="relative h-[480px] sm:h-[540px] lg:h-[580px] w-full overflow-hidden flex items-end justify-center">
                  <img
                    key={activeDancer.id}
                    src={activeDancer.image}
                    alt={activeDancer.alt}
                    className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-[1.02]"
                    fetchPriority="high"
                  />

                  {/* Stage dark vignettes: bottom wooden floor fade, left side theater feathering */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0507] via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A0507]/40 via-transparent to-transparent" />

                  {/* Stage Spotlight pool underneath feet */}
                  <div className="absolute bottom-4 inset-x-8 h-8 bg-amber-400/20 blur-xl rounded-full pointer-events-none" />

                  {/* Bottom overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3.5 rounded-sm bg-[#0A0507]/80 backdrop-blur-md border border-gold-400/25">
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
            </Reveal>
          </div>
        </div>
      </div>

      {/* Crisp bottom border separating the hero banner from the next section — NO CLOUDY EFFECT! */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent z-20 pointer-events-none" />
    </section>
  );
}
