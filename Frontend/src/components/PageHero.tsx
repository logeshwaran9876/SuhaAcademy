import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { pageHeroes, type PageHeroKey, type PageHeroData } from "@/data/pageHeroes";

interface PageHeroProps {
  pageKey?: PageHeroKey;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  image?: string;
  height?: "sm" | "md" | "lg";
  imagePosition?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  badges?: string[];
}

export default function PageHero({
  pageKey,
  eyebrow: propEyebrow,
  title: propTitle,
  subtitle: propSubtitle,
  image: propImage,
  height = "lg",
  imagePosition: propImagePosition,
  primaryAction: propPrimaryAction,
  secondaryAction: propSecondaryAction,
  badges: propBadges,
}: PageHeroProps) {
  const data: Partial<PageHeroData> = pageKey ? pageHeroes[pageKey] || {} : {};

  const eyebrow = propEyebrow ?? data.eyebrow ?? "Suha Academy";
  const title = propTitle ?? data.title ?? "Suha Academy of Fine Arts";
  const subtitle = propSubtitle ?? data.subtitle;
  const image = propImage ?? data.image ?? "/suha_media/Tabs/About.png";
  const imagePosition =
    propImagePosition ??
    data.imagePosition ??
    "object-[75%_center] sm:object-[78%_center]";
  const primaryAction = propPrimaryAction ?? data.primaryAction;
  const secondaryAction = propSecondaryAction ?? data.secondaryAction;
  const badges = propBadges ?? data.badges;

  const heightClass =
    height === "sm"
      ? "min-h-[44vh] sm:min-h-[50vh] py-10 sm:py-14"
      : height === "lg"
        ? "min-h-[72vh] sm:min-h-[82vh] lg:min-h-[88vh] py-16 sm:py-24 lg:py-28"
        : "min-h-[56vh] sm:min-h-[66vh] py-14 sm:py-18 lg:py-22";

  return (
    <section
      className={`relative ${heightClass} flex items-center overflow-hidden bg-[#0A0507]`}
    >
      {/* Background theatrical stage with high-res photo and gentle slow zoom */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Stage photo */}
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover ${imagePosition} scale-100 transition-transform duration-1000`}
          {...{ fetchpriority: "high" }}
        />

        {/* Balanced Theatrical Vignette: Keeps background lamps/stage visible while providing crisp text contrast */}
        {/* Desktop: Gentle left dark shadow for editorial copy, completely clear stage on right */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0A0507] via-[#0A0507]/80 via-45% to-transparent w-[65%]" />

        {/* Mobile / Tablet: Smooth top-to-bottom dark gradient */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#0A0507]/92 via-[#0A0507]/55 to-[#0A0507]/95" />

        {/* Subtle top & bottom edges blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0507] via-transparent to-[#0A0507]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0507]/80 via-transparent to-transparent" />

        {/* Ambient warm top spotlight shimmer */}
        <div className="absolute -top-20 left-1/3 w-[600px] h-[220px] bg-gradient-radial from-amber-500/15 via-orange-500/5 to-transparent blur-3xl rounded-full pointer-events-none animate-shimmer" />

        {/* Traditional slowly rotating gold mandala watermark in top-right */}
        <div
          className="absolute -top-16 -right-16 w-80 h-80 opacity-[0.08] text-gold-400 pointer-events-none hidden sm:block"
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

      {/* Main Container - Left Content Layout (Identical to Home Hero) */}
      <div className="relative z-10 container-wide section-padding py-12 sm:py-16 lg:py-20 flex flex-col justify-center w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col items-start justify-center text-left max-w-xl xl:max-w-2xl">
            {/* Eyebrow / Breadcrumb with Lotus glyph */}
            <Reveal>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-gold-400 shadow-sm shadow-gold-400/60 animate-pulse" />
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1 rounded-full bg-navy-950/80 border border-gold-400/35 backdrop-blur-md shadow-lg shadow-black/50">
                  <Link to="/" className="text-[11px] sm:text-xs text-cream-100/75 hover:text-gold-300 transition-colors">
                    Home
                  </Link>
                  <ChevronRight className="w-3 h-3 text-gold-400/50 shrink-0" />
                  <span className="text-[11px] sm:text-xs text-gold-300 font-medium tracking-wider uppercase font-sans truncate max-w-[220px] sm:max-w-none">
                    {eyebrow || "Suha Academy"}
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Title */}
            <Reveal delay={0.1}>
              <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.12] sm:leading-[1.08] mb-3 sm:mb-5 drop-shadow-xl text-left">
                {title}
              </h1>
            </Reveal>

            {/* Subtitle */}
            {subtitle && (
              <Reveal delay={0.2}>
                <p className="text-xs sm:text-base lg:text-lg text-cream-100/90 font-light font-sans leading-relaxed max-w-sm sm:max-w-xl text-left mb-6 sm:mb-7 drop-shadow-sm">
                  {subtitle}
                </p>
              </Reveal>
            )}

            {/* Actions: Primary CTA & Secondary Action
            {(primaryAction || secondaryAction) && (
              <Reveal delay={0.25}>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  {primaryAction &&
                    (primaryAction.href.startsWith("#") || primaryAction.href.startsWith("http") ? (
                      <a
                        href={primaryAction.href}
                        {...(primaryAction.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#C2734C] via-[#C97A52] to-[#B3653E] hover:from-[#B86841] hover:to-[#A75932] text-white font-medium text-xs sm:text-sm tracking-wide rounded-md shadow-lg shadow-[#C2734C]/25 transition-all group hover:-translate-y-0.5 active:scale-[0.99]"
                      >
                        <span>{primaryAction.label}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    ) : (
                      <Link
                        to={primaryAction.href}
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#C2734C] via-[#C97A52] to-[#B3653E] hover:from-[#B86841] hover:to-[#A75932] text-white font-medium text-xs sm:text-sm tracking-wide rounded-md shadow-lg shadow-[#C2734C]/25 transition-all group hover:-translate-y-0.5 active:scale-[0.99]"
                      >
                        <span>{primaryAction.label}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    ))}
                  {secondaryAction &&
                    (secondaryAction.href.startsWith("#") || secondaryAction.href.startsWith("http") ? (
                      <a
                        href={secondaryAction.href}
                        {...(secondaryAction.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="inline-flex items-center gap-2 px-5 py-3.5 border border-gold-400/40 hover:border-gold-300 text-cream-100 hover:text-white font-medium text-xs sm:text-sm tracking-wide rounded-md transition-all backdrop-blur-md hover:bg-gold-500/10 shadow-lg shadow-black/20 hover:-translate-y-0.5 active:scale-[0.99]"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                        <span>{secondaryAction.label}</span>
                      </a>
                    ) : (
                      <Link
                        to={secondaryAction.href}
                        className="inline-flex items-center gap-2 px-5 py-3.5 border border-gold-400/40 hover:border-gold-300 text-cream-100 hover:text-white font-medium text-xs sm:text-sm tracking-wide rounded-md transition-all backdrop-blur-md hover:bg-gold-500/10 shadow-lg shadow-black/20 hover:-translate-y-0.5 active:scale-[0.99]"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                        <span>{secondaryAction.label}</span>
                      </Link>
                    ))}
                </div>
              </Reveal>
            )} */}

            {/* Lineage / Trust Chips */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {(badges && badges.length > 0
                  ? badges
                  : ["Estd. 2010", "160+ Disciples", "Chennai & Global Batches"]
                ).map((b, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-950/75 border border-gold-400/25 backdrop-blur-md text-[11px] sm:text-xs text-cream-100/80 font-sans shadow-sm"
                  >
                    <span className="text-gold-400 text-[10px]">✦</span>
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Crisp Golden Architectural Divider line at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent z-20 pointer-events-none" />
    </section>
  );
}
