import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Youtube } from "lucide-react";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { OrnamentDivider } from "@/components/Decorations";
import { youtubeHighlights } from "@/data/gallery";
import { academy } from "@/data/academy";
import VideoModal from "@/components/VideoModal";

export default function GalleryPage() {
  const [activeVideo, setActiveVideo] = useState<{ id: string; title: string } | null>(null);

  return (
    <>
      <PageHero pageKey="gallery" />

      {/* Photo Gallery */}
      <section id="gallery-grid" className="relative py-20 md:py-28 bg-cream-50">
        <div className="container-wide section-padding">
          <Gallery />

          <Reveal delay={0.2}>
            <div className="mt-16 text-center">
              <div className="bg-cream-100/60 border border-gold-500/20 rounded-sm p-6 max-w-2xl mx-auto">
                <p className="text-sm text-navy-800/80">
                  Photographs and posters presented above represent authentic stage recitals, choral performances, studio shoots and festivals organised by Suha Academy of Fine Arts under Guru Smt. Ranjini Pradeep.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="relative py-24 md:py-32 bg-paper overflow-hidden">
        <div className="container-wide section-padding">
          <SectionHeader
            eyebrow="Live Recitals"
            title="Video Archive & YouTube Showcase"
            subtitle="Watch classical dance Margam items, Carnatic vocal choirs and Annual Day felicitations by Dr. Divyasena, Sri. Sai Vignesh and Sri. Amit Bhargav."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {youtubeHighlights.map((video, i) => (
              <Reveal key={video.id} delay={(i % 4) * 0.1}>
                <button
                  onClick={() => setActiveVideo({ id: video.id, title: video.title })}
                  className="group block w-full text-left bg-white border border-ivory-200 rounded-sm overflow-hidden hover:border-gold-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden bg-navy-950">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy-950/30 group-hover:bg-navy-950/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 text-[10px] bg-navy-950/80 text-gold-300 rounded font-medium">
                      {video.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-sm font-medium text-navy-900 line-clamp-2 mb-2 group-hover:text-gold-700 transition-colors">
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-navy-600/60 font-medium">
                      <Play className="w-3 h-3 text-red-500 fill-current" />
                      <span>Play Recital Video</span>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Reveal>
              <a
                href={academy.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-red-600 text-white font-medium text-sm rounded-sm hover:bg-red-700 transition-colors shadow-md"
              >
                <Youtube className="w-4 h-4" />
                Explore Entire Video Catalog on YouTube
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-navy-950 text-center">
        <div className="container-wide section-padding">
          <OrnamentDivider light className="mb-8" />
          <Reveal>
            <h2 className="text-display-md font-display text-cream-50 mb-4">
              Celebrating Classical Arts
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-cream-100/60 max-w-lg mx-auto mb-8">
              Experience the grace, discipline and devotion of Bharathanatyam and Carnatic vocal.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-7 sm:py-3.5 bg-gradient-to-r from-gold-500 via-gold-400 to-amber-400 hover:from-gold-400 hover:to-amber-300 text-navy-950 font-semibold text-xs sm:text-sm tracking-wide rounded-md shadow-lg shadow-gold-500/25 transition-all duration-300 group hover:translate-y-[-1px] active:scale-[0.99] whitespace-nowrap"
              >
                <span>Contact Academy</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1 text-navy-950" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Recital Video Modal Player */}
      <VideoModal
        videoId={activeVideo?.id || null}
        title={activeVideo?.title}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
}
