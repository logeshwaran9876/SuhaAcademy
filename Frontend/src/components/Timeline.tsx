import { useState } from "react";
import { ZoomIn, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

export interface TimelineItemData {
  year: string;
  title: string;
  description: string;
  image?: string;
  isPoster?: boolean;
  badge?: string;
}

export function VerticalTimeline({ items }: { items: TimelineItemData[] }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % items.length);
  };

  const prevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative">
      {/* Central spine line for desktop */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-gold-500/40 via-gold-500/20 to-gold-500/5" />

      {/* Mobile left spine line */}
      <div className="md:hidden absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-gold-500/40 via-gold-500/20 to-gold-500/5" />

      <div className="flex flex-col gap-12 md:gap-20">
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;

          return (
            <div key={item.year + i} className="relative">
              {/* Desktop Center Node */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 z-20 items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-navy-950 border-2 border-gold-500 flex items-center justify-center shadow-lg shadow-gold-500/20">
                  <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                </div>
              </div>

              {/* Mobile Left Node */}
              <div className="md:hidden absolute left-4 -translate-x-1/2 top-3 z-20">
                <div className="w-4 h-4 rounded-full bg-navy-950 border-2 border-gold-500 flex items-center justify-center shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                </div>
              </div>

              {/* Two-column grid on desktop, single column with left padding on mobile */}
              <div className="pl-10 md:pl-0 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                {/* Column A (Left on desktop) */}
                <div className={`${isLeft ? "order-1 md:text-right" : "order-2 md:order-1"}`}>
                  {isLeft ? (
                    /* Left Content Block */
                    <TimelineContent item={item} align="right" onOpenPoster={() => openLightbox(i)} />
                  ) : (
                    /* Left Media Block */
                    <TimelineMedia item={item} onOpenPoster={() => openLightbox(i)} align="left" />
                  )}
                </div>

                {/* Column B (Right on desktop) */}
                <div className={`${isLeft ? "order-2" : "order-1 md:order-2 md:text-left"}`}>
                  {isLeft ? (
                    /* Right Media Block */
                    <TimelineMedia item={item} onOpenPoster={() => openLightbox(i)} align="right" />
                  ) : (
                    /* Right Content Block */
                    <TimelineContent item={item} align="left" onOpenPoster={() => openLightbox(i)} />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Poster / Photo Lightbox */}
      {selectedImageIndex !== null && items[selectedImageIndex]?.image && (
        <div
          className="fixed inset-0 z-[100] bg-navy-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-2 text-cream-100 hover:text-gold-400 transition-colors z-20 rounded-full bg-black/40 hover:bg-black/70"
            aria-label="Close poster view"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-cream-100 hover:text-gold-400 transition-colors z-20 rounded-full bg-black/40 hover:bg-black/70"
            aria-label="Previous milestone"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-cream-100 hover:text-gold-400 transition-colors z-20 rounded-full bg-black/40 hover:bg-black/70"
            aria-label="Next milestone"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] overflow-hidden rounded-sm border border-gold-500/30 shadow-2xl bg-black">
              <img
                src={items[selectedImageIndex].image}
                alt={items[selectedImageIndex].title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-medium font-sans">
                {items[selectedImageIndex].year} Milestone &bull; {items[selectedImageIndex].badge || "Archive"}
              </span>
              <h3 className="text-xl sm:text-2xl font-display text-white mt-1">
                {items[selectedImageIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-cream-100/70 max-w-xl mx-auto mt-1 line-clamp-2">
                {items[selectedImageIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TimelineContent({
  item,
  align,
  onOpenPoster,
}: {
  item: TimelineItemData;
  align: "left" | "right";
  onOpenPoster: () => void;
}) {
  return (
    <Reveal>
      <div className={`flex flex-col ${align === "right" ? "md:items-end" : "md:items-start"}`}>
        {/* Year Badge */}
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="font-display text-4xl sm:text-5xl font-semibold text-gold-600 tracking-tight">
            {item.year}
          </span>
          {item.badge && (
            <span className="px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold font-sans rounded-full bg-gold-500/10 text-gold-700 border border-gold-500/20">
              {item.badge}
            </span>
          )}
        </div>

        {/* Milestone Title */}
        <h3 className="text-xl sm:text-2xl font-display font-medium text-navy-900 mb-3">
          {item.title}
        </h3>

        {/* Milestone Description */}
        <p
          className={`text-sm text-navy-700/80 leading-relaxed font-sans max-w-md ${
            align === "right" ? "md:ml-auto" : "md:mr-auto"
          }`}
        >
          {item.description}
        </p>

        {/* Quick Action Button to Inspect Full Poster */}
        {item.image && (
          <button
            onClick={onOpenPoster}
            className={`mt-4 inline-flex items-center gap-2 text-xs font-semibold text-gold-600 hover:text-gold-700 uppercase tracking-wider transition-colors group ${
              align === "right" ? "md:ml-auto" : ""
            }`}
          >
            <span>{item.isPoster ? "View Official Poster" : "View Stage Photo"}</span>
            <ZoomIn className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-125" />
          </button>
        )}
      </div>
    </Reveal>
  );
}

function TimelineMedia({
  item,
  align,
  onOpenPoster,
}: {
  item: TimelineItemData;
  align: "left" | "right";
  onOpenPoster: () => void;
}) {
  if (!item.image) return null;

  return (
    <Reveal>
      <div
        className={`flex ${
          align === "left" ? "md:justify-end" : "md:justify-start"
        }`}
      >
        <div
          onClick={onOpenPoster}
          className={`relative rounded-sm overflow-hidden bg-navy-950 border border-gold-500/30 shadow-xl group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:border-gold-400 hover:scale-[1.01] ${
            item.isPoster
              ? "h-72 sm:h-80 md:h-[340px] w-full max-w-[280px] sm:max-w-[300px]"
              : "h-56 sm:h-64 md:h-[260px] w-full max-w-md"
          }`}
          title="Click to view full image"
        >
          {/* Blurred background ambiance to fill frame seamlessly */}
          <img
            src={item.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-125 pointer-events-none"
          />

          {/* Foreground poster or photo — NEVER CROPPED or CUT OFF */}
          <div className="relative z-10 w-full h-full flex items-center justify-center p-2">
            <img
              src={item.image}
              alt={`${item.title} — ${item.year}`}
              loading="lazy"
              className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                item.isPoster ? "object-contain" : "object-cover rounded-sm"
              }`}
            />
          </div>

          {/* Hover overlay hint */}
          <div className="absolute inset-0 z-20 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="px-3.5 py-1.5 rounded-full bg-navy-950/90 border border-gold-400/50 backdrop-blur-md text-gold-300 text-xs font-medium flex items-center gap-2 shadow-lg">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>{item.isPoster ? "View Full Poster" : "View Photo"}</span>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="absolute bottom-2 left-2 right-2 z-10 py-1 px-2.5 rounded bg-black/70 backdrop-blur-sm border border-white/10 flex items-center justify-between text-[10px] text-cream-100/90">
            <span className="font-sans font-medium truncate">{item.year} &bull; {item.badge || item.title}</span>
            <span className="text-gold-400 flex items-center gap-1 font-sans">
              <Sparkles className="w-2.5 h-2.5" />
              Archive
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function FeatureList({
  features,
  items,
  light = false,
}: {
  features?: Array<{ title: string; description: string; icon?: string }>;
  items?: Array<{ title: string; description: string; icon?: string }>;
  light?: boolean;
}) {
  const list = features || items || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.08} className="h-full">
          <div
            className={`p-6 rounded-sm h-full flex flex-col transition-all duration-300 ${
              light
                ? "bg-navy-900/60 border border-gold-500/20 text-cream-100 hover:border-gold-400/40"
                : "bg-white border border-ivory-200 text-navy-900 hover:border-gold-300"
            }`}
          >
            <h3
              className={`font-display text-lg mb-2 font-medium ${
                light ? "text-gold-300" : "text-navy-900"
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`text-xs leading-relaxed ${
                light ? "text-cream-100/70" : "text-navy-700/70"
              }`}
            >
              {item.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
