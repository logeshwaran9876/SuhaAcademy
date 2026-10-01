import { Link } from "react-router-dom";
import { ArrowRight, Award, Music, Sparkles } from "lucide-react";
import { academy } from "@/data/academy";
import { Reveal } from "./Reveal";
import { GoldFrame, OrnamentDivider } from "./Decorations";

export default function FounderSection() {
  return (
    <section className="relative py-24 md:py-32 bg-paper overflow-hidden">
      {/* Subtle watermark */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 text-gold-500/[0.04] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" aria-hidden="true">
          <g stroke="currentColor" strokeWidth="0.5">
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="70" />
            <circle cx="100" cy="100" r="50" />
            <circle cx="100" cy="100" r="30" />
          </g>
        </svg>
      </div>

      <div className="container-wide section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait / Academy Presentation */}
          <Reveal className="relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-gold-500/20 rounded-sm pointer-events-none" />
              <div className="absolute -inset-4 border border-gold-500/10 rounded-sm translate-x-3 translate-y-3 pointer-events-none" />

              <div className="relative overflow-hidden rounded-sm bg-navy-950">
                <img
                  src="/suha_media/suha_img_4.jpg"
                  alt="Suha Academy of Fine Arts stage presentation under Founder Guru Smt. Ranjini Pradeep"
                  loading="lazy"
                  className="w-full h-[520px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                <GoldFrame />

                {/* Founder portrait badge with Saraswathi Veena */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2.5 px-3 py-1.5 bg-navy-950/90 backdrop-blur-md border border-gold-400/40 rounded-full shadow-lg">
                  <img
                    src={academy.founderVeenaImg}
                    alt={academy.founder}
                    className="w-9 h-9 rounded-full object-cover border border-gold-400"
                  />
                  <div className="pr-1 text-left">
                    <p className="text-[11px] font-display font-medium text-gold-200 leading-tight">
                      Guru Smt. Ranjini Pradeep
                    </p>
                    <p className="text-[9px] uppercase tracking-wider text-cream-200/60">
                      Artistic Director & Veena Artist
                    </p>
                  </div>
                </div>

                {/* Signature label */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="font-display text-cream-50 text-xl font-medium">
                      {academy.founder}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold-300">
                      {academy.founderTitle} &middot; Estd. {academy.established}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-gold-400/40 overflow-hidden bg-navy-950">
                    <img src={academy.logo} alt="Insignia" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold-500/40" />
                <span className="eyebrow">Artistic Leadership</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-display-md md:text-display-lg font-display font-medium text-navy-900 mb-3">
                Guru Smt. Ranjini Pradeep
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="font-serif text-xl text-gold-700 italic mb-2">
                Visionary Guru, Choreographer & Artistic Director
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-navy-600/70 mb-6 font-medium">
                Founder of Suha Academy of Fine Arts & Kodai Kaala Kalai Vizha (KKKV)
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-4 text-navy-800/85 leading-relaxed">
                <p>
                  Smt. Ranjini Pradeep established Suha Academy of Fine Arts in 2010 with a singular mission: to impart the timeless discipline, spiritual essence, and aesthetic purity of Bharatanatyam dance and Carnatic vocal music to aspiring students.
                </p>
                <p>
                  Over more than a decade and a half of dedicated artistic mentorship, Guru Smt. Ranjini Pradeep has trained students across Chennai, guiding them through rigorous traditional curricula and grooming disciples for their prestigious solo debut stage recitals (Arangetrams) with complex Margam repertoires.
                </p>
                <p>
                  As the architect of <em>Kodai Kaala Kalai Vizha (KKKV)</em>, she created a vital developmental and competitive platform where hundreds of young vocalists and dancers discover their stage confidence, celebrate classical heritage, and receive recognition from eminent maestros and cultural dignitaries.
                </p>
              </div>

              {/* Highlights cards */}
              <div className="grid grid-cols-2 gap-3 my-6">
                <div className="p-3.5 bg-cream-100/60 border border-gold-500/15 rounded-sm">
                  <div className="flex items-center gap-2 text-gold-700 font-medium text-xs mb-1">
                    <Award className="w-3.5 h-3.5 text-gold-600" />
                    <span>Arangetram Mentorship</span>
                  </div>
                  <p className="text-xs text-navy-800/70">
                    Solo Margam debut training for accomplished disciples.
                  </p>
                </div>
                <div className="p-3.5 bg-cream-100/60 border border-gold-500/15 rounded-sm">
                  <div className="flex items-center gap-2 text-gold-700 font-medium text-xs mb-1">
                    <Music className="w-3.5 h-3.5 text-gold-600" />
                    <span>Dual Mastery</span>
                  </div>
                  <p className="text-xs text-navy-800/70">
                    Holistic synergy of Bharatanatyam and Carnatic Vocal pedagogy.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <OrnamentDivider className="my-6 justify-start" />
            </Reveal>

            <Reveal delay={0.35}>
              <div className="flex items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-cream-100 text-sm font-medium rounded-sm hover:bg-navy-800 transition-all duration-300 group"
                >
                  Read Academy Story
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gold-700 hover:text-navy-900 transition-colors"
                >
                  Enquire About Batches
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
