import { useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  MapPin,
  Trophy,
  Maximize2,
  MessageCircle,
  Phone,
  Sparkles,
  ExternalLink,
  Instagram,
  Youtube,
  Play,
  Heart,
  Globe,
  Award,
  Image as ImageIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldFrame, OrnamentDivider } from "@/components/Decorations";
import SourceBadge from "@/components/SourceBadge";
import EnquiryForm from "@/components/EnquiryForm";
import { Lightbox } from "@/components/Lightbox";
import { events, kkkvEvents, eventPillars } from "@/data/events";
import { academy } from "@/data/academy";

export default function EventDetails() {
  const { slug } = useParams();
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const event = [...events, ...kkkvEvents].find((e) => e.slug === slug);

  // Reset pagination when navigating to a different event
  useEffect(() => {
    setVisibleCount(12);
  }, [slug]);

  const lightboxImages = useMemo(() => {
    if (!event) return [];
    if (event.gallery && event.gallery.length > 0) {
      return event.gallery.map((g) => ({
        src: g.src,
        alt: g.title || `${event.title} Stage Photograph`,
        title: g.title || event.title,
        category: event.title,
        year: String(event.year || ""),
        source: event.sourceLabel || "Suha Academy Official Archive",
        permissionRequired: false,
      }));
    }
    return [
      {
        src: event.poster,
        alt: `${event.title} Official Poster`,
        title: `${event.title} — ${event.subtitle}`,
        category: "Official Event Poster",
        year: String(event.year || ""),
        source: event.sourceLabel || "Suha Academy",
        permissionRequired: false,
      },
    ];
  }, [event]);

  if (!event) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen bg-cream-50">
        <h1 className="text-display-md font-display text-navy-900 mb-4">
          Event Not Found
        </h1>
        <p className="text-navy-700/60 mb-6 text-sm">
          The event or recital you are looking for does not exist in the archive.
        </p>
        <Link
          to="/events"
          className="inline-flex items-center gap-2 px-6 py-3 bg-navy-950 text-gold-300 rounded-sm hover:bg-gold-500 hover:text-navy-950 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Events
        </Link>
      </div>
    );
  }

  const isUpcoming = event.status === "upcoming";

  // Other signature event pillars to explore in sidebar
  const otherPillars = eventPillars.filter((p) => p.slug !== event.slug);

  return (
    <>
      {/* Theatrical Page Hero — styled like PageHero reference to show the complete image with object-top */}
      <section className="relative min-h-[64vh] sm:min-h-[72vh] lg:min-h-[78vh] xl:min-h-[82vh] flex items-center overflow-hidden bg-[#0A0507] text-left">
        {/* Background theatrical stage with event intro poster */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <img
            src={event.poster || "/suha_media/shared/shared_hero_theatre_banner.jpg"}
            alt={`${event.title} Banner`}
            className="w-full h-full object-cover object-top scale-100 transition-transform duration-1000"
            {...{ fetchpriority: "high" }}
          />

          {/* Desktop: Gentle left dark shadow for editorial copy, completely clear stage on right */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0A0507] via-[#0A0507]/85 via-50% to-transparent w-[68%]" />

          {/* Mobile / Tablet: Smooth top-to-bottom dark gradient */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#0A0507]/90 via-[#0A0507]/60 to-[#0A0507]/92" />

          {/* Subtle bottom edge blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0507]/90 via-transparent to-transparent pointer-events-none" />

          {/* Subtle navbar top protection */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#0A0507]/60 to-transparent pointer-events-none" />

          {/* Traditional hanging brass deepam chain on left with gentle float animation */}
          <div className="absolute top-0 left-6 lg:left-12 flex flex-col items-center opacity-40 pointer-events-none animate-float hidden md:flex">
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold-400 to-amber-300" />
            <div className="w-3.5 h-3.5 border border-gold-400 rotate-45" />
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1 animate-pulse shadow-sm shadow-amber-400/80" />
          </div>
        </div>

        {/* Editorial Content Container */}
        <div className="relative z-10 container-wide section-padding py-14 sm:py-18 lg:py-22 flex flex-col justify-center w-full">
          <div className="max-w-3xl text-left flex flex-col items-start">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-cream-100/75 hover:text-gold-300 transition-colors mb-4 font-semibold text-left self-start drop-shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to All Events Archive
            </Link>

            <Reveal className="text-left w-full">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-gold-400 shadow-sm shadow-gold-400/60 animate-pulse" />
                <span
                  className={`inline-block px-3.5 py-1 text-[11px] sm:text-xs uppercase tracking-wider font-semibold rounded-full text-left self-start shadow-sm ${isUpcoming
                      ? "bg-gold-500 text-navy-950 font-bold"
                      : "bg-navy-950/85 text-gold-300 backdrop-blur-md border border-gold-400/40"
                    }`}
                >
                  {isUpcoming ? "✦ Upcoming Signature Event" : `Artistic Milestone · ${event.year || "Academy Archive"}`}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="text-left w-full">
              <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.12] sm:leading-[1.08] mb-3 sm:mb-5 drop-shadow-xl text-left">
                {event.title}
              </h1>
              <p className="font-serif text-xl sm:text-2xl text-gold-300 italic text-left drop-shadow-sm">
                {event.subtitle}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Crisp Golden Architectural Divider line at bottom */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent z-20 pointer-events-none" />
      </section>

      {/* Details Section */}
      <section className="relative py-16 md:py-24 bg-cream-50">
        <div className="container-wide section-padding">
          {/* Top: Artistic Narrative & Core Content */}
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold-500/40" />
                <span className="eyebrow">Artistic Narrative</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-navy-900/90 leading-relaxed text-base md:text-lg mb-8 font-normal">
                {event.description}
              </p>
            </Reveal>

            {/* Thematic Choreography Highlights (e.g. Dasaavatharam, Geetham Paada) */}
            {event.thematicHighlights && (
              <Reveal delay={0.15}>
                <div className="mb-8 p-6 sm:p-7 bg-white border border-gold-500/40 rounded-sm shadow-xs">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-700 shrink-0 mt-0.5">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-navy-900 mb-1.5">
                        Thematic Dance Productions by Guru Smt. Ranjini Pradeep
                      </h3>
                      <p className="text-sm text-navy-800/80 leading-relaxed">
                        {event.thematicHighlights}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Celebrity Presence & KKKV Honours */}
            {event.celebrityPresence && (
              <Reveal delay={0.2}>
                <div className="mb-8 p-6 bg-gold-50/70 border border-gold-300/60 rounded-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-800 shrink-0 mt-0.5">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-navy-900 mb-1.5">
                        Celebrity Dignitaries & KKKV Prize Distribution
                      </h3>
                      <p className="text-sm text-navy-800/80 leading-relaxed">
                        {event.celebrityPresence}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}

           

            {/* Source Badge if present */}
            {event.source && (
              <Reveal delay={0.25}>
                <div className="pt-1">
                  <SourceBadge
                    source={event.source}
                    sourceLabel={event.sourceLabel || "Suha Academy Official Archive"}
                    url={event.source}
                    label="Official festival source"
                  />
                </div>
              </Reveal>
            )}
          </div>

          

          {/* Authentic Event Photo Gallery - Full Width */}
          {event.gallery && event.gallery.length > 0 && (
            <Reveal delay={0.22}>
              <div className="mt-14 pt-10 border-t border-ivory-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-ivory-200 gap-2">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-navy-950 flex items-center gap-2.5">
                      <ImageIcon className="w-5 h-5 text-gold-600" />
                      <span>Event Photography & Authentic Glimpses</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-navy-600/70 mt-1">
                      Showing {Math.min(visibleCount, event.gallery.length)} of {event.gallery.length} authentic stage photographs
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                  {event.gallery.slice(0, visibleCount).map((photo, pIdx) => {
                    const hasCaption = Boolean(
                      (photo.title && photo.title.trim()) ||
                      (photo.subtitle && photo.subtitle.trim())
                    );

                    return (
                      <div
                        key={pIdx}
                        onClick={() => setLightboxIdx(pIdx)}
                        className={`group relative bg-white border border-ivory-200 rounded-sm overflow-hidden cursor-pointer hover:border-gold-400 hover:shadow-lg transition-all duration-300 flex flex-col ${
                          hasCaption ? "justify-between" : ""
                        }`}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-navy-950">
                          <img
                            src={photo.src}
                            alt={photo.title || event.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-navy-950/30 transition-opacity flex items-center justify-center">
                            <span className="px-3 py-1.5 bg-navy-950/90 text-gold-300 text-xs font-medium rounded-sm border border-gold-400/40 flex items-center gap-1.5 shadow-md">
                              <Maximize2 className="w-3.5 h-3.5" /> View Photo
                            </span>
                          </div>
                        </div>
                        {hasCaption && (
                          <div className="p-3 bg-white">
                            {photo.title && photo.title.trim() && (
                              <h4 className="text-xs font-semibold text-navy-900 group-hover:text-gold-700 transition-colors line-clamp-1">
                                {photo.title}
                              </h4>
                            )}
                            {photo.subtitle && photo.subtitle.trim() && (
                              <p className="text-[11px] text-navy-600/70 line-clamp-1 mt-0.5">
                                {photo.subtitle}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Load More Pagination */}
                {event.gallery.length > 12 && (
                  <div className="mt-8 pt-6 border-t border-ivory-200">
                    {visibleCount < event.gallery.length ? (
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            setVisibleCount((prev) =>
                              Math.min(prev + 12, event.gallery!.length)
                            )
                          }
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-950 text-gold-300 text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-gold-500 hover:text-navy-950 border border-gold-400/40 transition-all duration-300 shadow-sm cursor-pointer"
                        >
                          <span>Load More Photos</span>
                          <span className="px-2 py-0.5 bg-gold-500/20 text-gold-300 rounded text-[10px] font-mono">
                            +{Math.min(12, event.gallery.length - visibleCount)}
                          </span>
                          <span className="text-[11px] opacity-75 font-normal lowercase">
                            ({event.gallery.length - visibleCount} remaining)
                          </span>
                        </button>
                        {event.gallery.length - visibleCount > 12 && (
                          <button
                            type="button"
                            onClick={() => setVisibleCount(event.gallery!.length)}
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-white text-navy-800 text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-gold-50 hover:text-gold-700 border border-ivory-300 transition-colors cursor-pointer"
                          >
                            Show All ({event.gallery.length})
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3 text-xs text-navy-600 font-medium">
                        <span>Showing all {event.gallery.length} photos</span>
                        <span className="text-navy-300">·</span>
                        <button
                          type="button"
                          onClick={() => setVisibleCount(12)}
                          className="text-gold-700 hover:underline hover:text-gold-800 font-semibold cursor-pointer"
                        >
                          Show less (12)
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          )}

          {/* Video & Social Media Highlights Grid - Full Width */}
          {event.mediaLinks && event.mediaLinks.length > 0 && (
            <Reveal delay={0.25}>
              <div className="mt-14 pt-10 border-t border-ivory-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-ivory-200 gap-2">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-navy-950 flex items-center gap-2.5">
                      <Play className="w-5 h-5 text-gold-600" />
                      <span>Glimpses & Media Highlights</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-navy-600/70 mt-1">
                      Authentic recordings and reels from official Suha Academy broadcasts ({event.mediaLinks.length} items)
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                  {event.mediaLinks.map((media, idx) => (
                    <a
                      key={idx}
                      href={media.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 bg-white border border-ivory-200 rounded-sm hover:border-gold-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-2.5">
                          <div className="flex items-center gap-2">
                            {media.type === "youtube" ? (
                              <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                                <Youtube className="w-4 h-4" />
                              </div>
                            ) : (
                              <div className="w-7 h-7 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 shrink-0">
                                <Instagram className="w-4 h-4" />
                              </div>
                            )}
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-navy-500">
                              {media.type === "youtube" ? "YouTube Video" : "Instagram Reel"}
                            </span>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-navy-400 group-hover:text-gold-600 transition-colors shrink-0" />
                        </div>

                        <h4 className="text-xs font-semibold text-navy-900 group-hover:text-gold-700 transition-colors leading-snug line-clamp-2 mb-3">
                          {media.title}
                        </h4>
                      </div>

                      <div className="pt-2.5 border-t border-ivory-100 flex items-center justify-between text-[11px] text-gold-700 font-medium">
                        <span>Watch recording</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.3}>
            <div className="mt-12 text-center">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy-950 text-gold-300 hover:bg-gold-500 hover:text-navy-950 text-xs uppercase tracking-wider font-semibold rounded-sm border border-gold-400/40 transition-all shadow-md group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Back to All Events</span>
              </Link>
            </div>
            <OrnamentDivider className="mt-12" />
          </Reveal>
        </div>
      </section>

      {/* Enquiry Form if upcoming */}
      {isUpcoming && (
        <section className="relative py-24 md:py-32 bg-paper">
          <div className="container-wide section-padding">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-display-md font-display text-navy-900 text-center mb-2">
                Interested in Participating?
              </h2>
              <p className="text-center text-navy-700/60 mb-10 text-sm">
                Send us an enquiry for {event.title} and our festival committee will share official guidelines.
              </p>
              <div className="bg-white border border-ivory-200 rounded-sm p-8 shadow-sm">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Full Photo Lightbox */}
      <Lightbox
        images={lightboxImages}
        index={lightboxIdx}
        onClose={() => setLightboxIdx(null)}
        onNavigate={(idx) => setLightboxIdx(idx)}
      />
    </>
  );
}
