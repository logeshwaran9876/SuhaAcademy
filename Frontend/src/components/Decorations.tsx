interface OrnamentProps {
  className?: string;
  light?: boolean;
}

/** Subtle decorative divider with a lotus-inspired central motif */
export function OrnamentDivider({ className = "", light = false }: OrnamentProps) {
  const lineColor = light ? "bg-gold-400/30" : "bg-gold-500/30";
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className={`h-px w-12 ${lineColor}`} />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={light ? "text-gold-400/60" : "text-gold-500/60"}
        aria-hidden="true"
      >
        <path
          d="M12 2C12 2 10 7 6 7C8 9 8 13 12 13C16 13 16 9 18 7C14 7 12 2 12 2Z"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M12 22C12 22 14 17 18 17C16 15 16 11 12 11C8 11 8 15 6 17C10 17 12 22 12 22Z"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
      <div className={`h-px w-12 ${lineColor}`} />
    </div>
  );
}

/** Decorative corner mark for premium card frames */
export function CornerMark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 2H10M2 2V10M2 2L8 8"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

/** Subtle mandala-inspired background watermark */
export function MandalaWatermark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="0.3" opacity="0.5">
        <circle cx="100" cy="100" r="90" />
        <circle cx="100" cy="100" r="70" />
        <circle cx="100" cy="100" r="50" />
        <circle cx="100" cy="100" r="30" />
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * Math.PI) / 8;
          const x1 = 100 + Math.cos(angle) * 30;
          const y1 = 100 + Math.sin(angle) * 30;
          const x2 = 100 + Math.cos(angle) * 90;
          const y2 = 100 + Math.sin(angle) * 90;
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
          );
        })}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI) / 4 + Math.PI / 8;
          const x = 100 + Math.cos(angle) * 50;
          const y = 100 + Math.sin(angle) * 50;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="8"
            />
          );
        })}
      </g>
    </svg>
  );
}

/** Thin decorative gold border frame for images */
export function GoldFrame({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 border border-gold-500/20 ${className}`}
      aria-hidden="true"
    />
  );
}
