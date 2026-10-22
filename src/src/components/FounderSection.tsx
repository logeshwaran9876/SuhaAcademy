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
                  src="/suha_media/shared/shared_media_asset_02.jpg"
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
                    className="w-9 h-9 rounded-full object-cover object-top border border-gold-400"
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
                  <div className="w-10 h-10 rounded-full border border-gold-400/40 overflow-hidden bg-navy-950 flex items-center justify-center">
                    <img src={academy.logo} alt="Insignia" className="w-full h-full object-contain p-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
     
        </div>
      </div>
    </section>
  );
}
