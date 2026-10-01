import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "./Gallery";

interface LightboxProps {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null;

  const next = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  const prev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, next, prev]);

  if (!isOpen || index === null) return null;

  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-[70] bg-navy-950/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Close */}
      <button
        className="absolute top-5 right-5 text-cream-100 p-2 hover:text-gold-300 transition-colors z-10"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X className="w-7 h-7" />
      </button>

      {/* Prev */}
      <button
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-cream-100/70 hover:text-gold-300 p-2 transition-colors z-10"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Next */}
      <button
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-cream-100/70 hover:text-gold-300 p-2 transition-colors z-10"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next image"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Image */}
      <div
        className="max-w-5xl max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-w-full max-h-[78vh] object-contain rounded-sm"
        />
        <div className="text-center mt-4">
          <p className="text-cream-50 font-display text-lg">{img.title}</p>
          <p className="text-cream-100/50 text-xs mt-1">
            {img.category}
            {img.source ? ` \u00b7 ${img.source}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
