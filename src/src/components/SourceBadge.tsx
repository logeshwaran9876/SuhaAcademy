import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

interface SourceBadgeProps {
  source?: string;
  sourceLabel?: string;
  url?: string;
  label?: string;
}

export default function SourceBadge({
  source,
  sourceLabel,
  url,
  label = "Source",
}: SourceBadgeProps) {
  const displayLabel = sourceLabel || source;
  const href = url || source;

  if (!displayLabel) return null;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-navy-600/40 hover:text-gold-600 transition-colors"
      >
        {label}: {displayLabel}
        <ExternalLink className="w-3 h-3" />
      </a>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-navy-600/40">
      {label}: {displayLabel}
    </span>
  );
}
