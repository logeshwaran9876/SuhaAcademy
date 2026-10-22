import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ZoomIn, ArrowUpRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { Lightbox } from "./Lightbox";
import { galleryImages, galleryCategories } from "@/data/gallery";

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: string;
  folder?: string;
  year: string;
  source: string;
  permissionRequired: boolean;
  eventUrl?: string;
  eventTitle?: string;
}

const PAGE_SIZE = 28;

export default function Gallery({
  images = galleryImages,
  categories = galleryCategories,
  showFilters = true,
  limit,
}: {
  images?: GalleryImage[];
  categories?: string[];
  showFilters?: boolean;
  limit?: number;
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState<number>(PAGE_SIZE);
  const navigate = useNavigate();

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: images.length };
    images.forEach((img) => {
      counts[img.category] = (counts[img.category] || 0) + 1;
    });
    return counts;
  }, [images]);

  // Filtered images by active category
  const filteredImages = useMemo(() => {
    let result =
      activeCategory === "All"
        ? images
        : images.filter((img) => img.category === activeCategory);
    if (limit) result = result.slice(0, limit);
    return result;
  }, [activeCategory, images, limit]);

  // Sliced images for display pagination
  const visibleImages = useMemo(() => {
    if (limit) return filteredImages;
    return filteredImages.slice(0, displayCount);
  }, [filteredImages, displayCount, limit]);

  const handleCardClick = (img: GalleryImage, index: number) => {
    if (img.eventUrl) {
      navigate(img.eventUrl);
    } else {
      const fullIndex = filteredImages.findIndex((item) => item.src === img.src);
      setLightboxIndex(fullIndex >= 0 ? fullIndex : index);
    }
  };

  return (
    <>
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10">
          {categories.map((cat) => {
            const count = categoryCounts[cat] ?? 0;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setDisplayCount(PAGE_SIZE);
                }}
                className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium rounded-sm transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === cat
                    ? "bg-navy-900 text-cream-100 shadow-sm"
                    : "bg-white/70 text-navy-700/70 border border-ivory-200 hover:border-gold-300 hover:text-navy-900"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    activeCategory === cat
                      ? "bg-gold-500/20 text-gold-300"
                      : "bg-navy-900/5 text-navy-600/60"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Masonry-style Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [&>*]:mb-3 md:[&>*]:mb-4">
        {visibleImages.map((img, i) => (
          <Reveal
            key={`${img.src}-${i}`}
            delay={(i % 6) * 0.04}
            className="break-inside-avoid"
          >
            <div
              onClick={() => handleCardClick(img, i)}
              className="group relative block w-full overflow-hidden rounded-sm cursor-pointer bg-navy-950 border border-ivory-200 hover:border-gold-400 hover:shadow-xl transition-all duration-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(img, i);
                }
              }}
              aria-label={`View ${img.title}${img.eventUrl ? " — Redirects to event" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Backdrop on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Redirect Chip on Hover (Top-Left) - only if event has a dedicated page */}
              {img.eventUrl && (
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-gold-500 text-navy-950 shadow-md">
                    <span>Go to Event</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              )}

              {/* Fullscreen Lightbox Zoom Icon (Top-Right) */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  const fullIndex = filteredImages.findIndex((item) => item.src === img.src);
                  setLightboxIndex(fullIndex >= 0 ? fullIndex : i);
                }}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-navy-950/70 border border-gold-400/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-cream-50 hover:bg-gold-500 hover:text-navy-950 cursor-pointer"
                title="Preview Image Fullscreen"
                aria-label="Preview Image Fullscreen"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              {/* Title & Event Info on Hover (Bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-left">
                <p className="text-cream-50 text-sm font-display font-medium leading-snug drop-shadow-sm">
                  {img.title}
                </p>
                <p className="text-gold-300 text-[10px] uppercase tracking-wider mt-0.5">
                  {img.category}
                </p>
                {img.eventTitle && (
                  <p className="text-cream-100/70 text-[11px] mt-1 flex items-center gap-1 font-medium line-clamp-1">
                    <Sparkles className="w-3 h-3 text-gold-400 shrink-0" />
                    <span>{img.eventTitle}</span>
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-20">
          <p className="text-navy-700/50 italic">
            No images in this category yet.
          </p>
        </div>
      )}

      {/* Load More Button if remaining */}
      {!limit && visibleImages.length < filteredImages.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => setDisplayCount((prev) => prev + PAGE_SIZE)}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-900 text-cream-50 text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 shadow-md cursor-pointer"
          >
            <span>Load More Photos</span>
            <span className="text-gold-300 hover:text-navy-950 font-mono text-[11px]">
              ({visibleImages.length} of {filteredImages.length})
            </span>
          </button>
        </div>
      )}

      <Lightbox
        images={filteredImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
