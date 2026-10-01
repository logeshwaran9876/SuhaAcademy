import { useState, useMemo } from "react";
import { ZoomIn } from "lucide-react";
import { Reveal } from "./Reveal";
import { Lightbox } from "./Lightbox";
import { galleryImages, galleryCategories } from "@/data/gallery";

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: string;
  year: string;
  source: string;
  permissionRequired: boolean;
}

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

  const filteredImages = useMemo(() => {
    let result =
      activeCategory === "All"
        ? images
        : images.filter((img) => img.category === activeCategory);
    if (limit) result = result.slice(0, limit);
    return result;
  }, [activeCategory, images, limit]);

  return (
    <>
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium rounded-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-navy-900 text-cream-100"
                  : "bg-white/60 text-navy-700/70 border border-ivory-200 hover:border-gold-300 hover:text-navy-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Masonry grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [&>*]:mb-3 md:[&>*]:mb-4">
        {filteredImages.map((img, i) => (
          <Reveal
            key={`${img.src}-${i}`}
            delay={(i % 6) * 0.05}
            className="break-inside-avoid"
          >
            <button
              onClick={() => setLightboxIndex(i)}
              className="group relative block w-full overflow-hidden rounded-sm"
              aria-label={`View ${img.title}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <p className="text-cream-50 text-sm font-medium text-left">
                  {img.title}
                </p>
                <p className="text-gold-300/80 text-[10px] uppercase tracking-wider text-left">
                  {img.category}
                </p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-navy-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ZoomIn className="w-4 h-4 text-cream-50" />
              </div>
            </button>
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

      <Lightbox
        images={filteredImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
