import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";

interface VideoModalProps {
  videoId: string | null;
  title?: string;
  onClose: () => void;
}

export default function VideoModal({ videoId, title, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!videoId) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [videoId, onClose]);

  if (!videoId) return null;

  return (
    <div
      className="fixed inset-0 z-[120] bg-navy-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Classical Video Player"
    >
      <div
        className="relative w-full max-w-4xl bg-black rounded-sm border border-gold-500/40 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between p-3.5 bg-[#0C0608] border-b border-gold-500/20 text-cream-100">
          <p className="text-xs sm:text-sm font-display text-gold-300 font-medium truncate pr-4">
            {title || "Suha Academy Classical Performance"}
          </p>
          <div className="flex items-center gap-3">
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cream-100/70 hover:text-gold-300 flex items-center gap-1 transition-colors"
              title="Open directly on YouTube"
            >
              <span>YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-cream-100/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title || "YouTube classical video player"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Bottom bar */}
        <div className="p-3 bg-[#0A0507] border-t border-gold-500/10 flex items-center justify-between text-[11px] text-cream-100/60 font-sans">
          <span>Official Channel: @suhaacademyoffinearts2445</span>
          <span className="text-gold-400">Guru Smt. Ranjini Pradeep &bull; Disciples</span>
        </div>
      </div>
    </div>
  );
}
