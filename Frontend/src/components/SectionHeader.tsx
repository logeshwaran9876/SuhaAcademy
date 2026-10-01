import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  number?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  number,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col gap-4 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow && (
        <Reveal>
          <div
            className={`flex items-center gap-3 ${
              isCenter ? "justify-center" : ""
            }`}
          >
            {number && (
              <span
                className={`text-xs font-serif italic ${
                  light ? "text-gold-300/70" : "text-gold-500/60"
                }`}
              >
                {number}
              </span>
            )}
            <span
              className={`eyebrow ${light ? "text-gold-300" : "text-gold-600"}`}
            >
              {eyebrow}
            </span>
            <div
              className={`h-px w-8 ${
                light ? "bg-gold-400/40" : "bg-gold-500/40"
              }`}
            />
          </div>
        </Reveal>
      )}

      <Reveal delay={0.1}>
        <h2
          className={`text-display-md md:text-display-lg font-display font-medium max-w-3xl ${
            light ? "text-cream-50" : "text-navy-900"
          } ${isCenter ? "mx-auto" : ""}`}
        >
          {title}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal delay={0.2}>
          <p
            className={`text-base md:text-lg leading-relaxed max-w-2xl ${
              light ? "text-cream-100/70" : "text-navy-700/70"
            } ${isCenter ? "mx-auto" : ""}`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}

      <Reveal delay={0.3}>
        <div
          className={`gold-divider mt-2 ${isCenter ? "gold-divider-center" : ""}`}
        />
      </Reveal>
    </div>
  );
}
