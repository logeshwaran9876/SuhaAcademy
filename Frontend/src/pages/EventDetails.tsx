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
  const [visibleCount, setVisibleCount] = useState<number>(10);
  const event = [...events, ...kkkvEvents].find((e) => e.slug === slug);

  // Reset pagination when navigating to a different event
  useEffect(() => {
    setVisibleCount(10);
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
      {/* Theatrical Page Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <img
            src={event.poster || "/suha_media/shared/shared_hero_theatre_banner.jpg"}
            alt={`${event.title} Banner`}
            className="w-full h-full object-cover object-center opacity-40 blur-xs scale-105"
            {...{ fetchpriority: "high" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/50" />
        </div>

        <div className="relative z-10 container-wide section-padding pb-16 pt-32">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-cream-100/70 hover:text-gold-300 transition-colors mb-6 font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Events Archive
          </Link>

          <Reveal>
            <span
              className={`inline-block px-3.5 py-1 text-xs uppercase tracking-wider font-semibold rounded-sm mb-4 ${isUpcoming
                  ? "bg-gold-500 text-navy-950"
                  : "bg-navy-950/90 text-gold-300 backdrop-blur-sm border border-gold-400/30"
                }`}
            >
              {isUpcoming ? "✦ Upcoming Signature Event" : `Artistic Milestone · ${event.year || "Academy Archive"}`}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-display-md sm:text-display-lg font-display font-medium text-cream-50 mb-2">
              {event.title}
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-gold-300 italic">
              {event.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Details Section */}
      <section className="relative py-16 md:py-24 bg-cream-50">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Main Content (7 cols) */}
            <div className="lg:col-span-7">
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

              {/* Categories & Repertoire */}
              {event.categories && event.categories.length > 0 && (
                <Reveal delay={0.2}>
                  <div className="mb-10 p-6 bg-white border border-ivory-200 rounded-sm">
                    <h3 className="font-display text-lg text-navy-900 mb-4 flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-gold-600" />
                      <span>Featured Segments & Categories</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {event.categories.map((cat) => (
                        <div
                          key={cat}
                          className="flex items-center gap-2.5 p-3 bg-paper border border-ivory-200 rounded-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                          <span className="text-xs text-navy-900 font-medium">{cat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Authentic Event Photo Gallery */}
              {event.gallery && event.gallery.length > 0 && (
                <Reveal delay={0.22}>
                  <div className="mb-10">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-ivory-200">
                      <div>
                        <h3 className="font-display text-xl text-navy-950 flex items-center gap-2">
                          <ImageIcon className="w-4 h-4 text-gold-600" />
                          <span>Event Photography & Authentic Glimpses</span>
                        </h3>
                        <p className="text-xs text-navy-600/70 mt-0.5">
                          Showing {Math.min(visibleCount, event.gallery.length)} of {event.gallery.length} authentic stage photographs
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {event.gallery.slice(0, visibleCount).map((photo, pIdx) => (
                        <div
                          key={pIdx}
                          onClick={() => setLightboxIdx(pIdx)}
                          className="group relative bg-white border border-ivory-200 rounded-sm overflow-hidden cursor-pointer hover:border-gold-400 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="relative h-44 overflow-hidden bg-navy-950">
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
                          <div className="p-3 bg-white">
                            <h4 className="text-xs font-semibold text-navy-900 group-hover:text-gold-700 transition-colors line-clamp-1">
                              {photo.title}
                            </h4>
                            {photo.subtitle && (
                              <p className="text-[11px] text-navy-600/70 line-clamp-1 mt-0.5">
                                {photo.subtitle}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Load More Pagination */}
                    {event.gallery.length > 10 && (
                      <div className="mt-6 pt-4 border-t border-ivory-200">
                        {visibleCount < event.gallery.length ? (
                          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <button
                              type="button"
                              onClick={() =>
                                setVisibleCount((prev) =>
                                  Math.min(prev + 10, event.gallery!.length)
                                )
                              }
                              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-950 text-gold-300 text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-gold-500 hover:text-navy-950 border border-gold-400/40 transition-all duration-300 shadow-sm cursor-pointer"
                            >
                              <span>Load More Photos</span>
                              <span className="px-2 py-0.5 bg-gold-500/20 text-gold-300 rounded text-[10px] font-mono">
                                +{Math.min(10, event.gallery.length - visibleCount)}
                              </span>
                              <span className="text-[11px] opacity-75 font-normal lowercase">
                                ({event.gallery.length - visibleCount} remaining)
                              </span>
                            </button>
                            {event.gallery.length - visibleCount > 10 && (
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
                              onClick={() => setVisibleCount(10)}
                              className="text-gold-700 hover:underline hover:text-gold-800 font-semibold cursor-pointer"
                            >
                              Show less (10)
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Reveal>
              )}

              {/* Video & Social Media Highlights Grid */}
              {event.mediaLinks && event.mediaLinks.length > 0 && (
                <Reveal delay={0.25}>
                  <div className="mb-10">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-ivory-200">
                      <div>
                        <h3 className="font-display text-xl text-navy-950 flex items-center gap-2">
                          <Play className="w-4 h-4 text-gold-600" />
                          <span>Glimpses & Media Highlights</span>
                        </h3>
                        <p className="text-xs text-navy-600/70 mt-0.5">
                          Authentic recordings and reels from official Suha Academy broadcasts ({event.mediaLinks.length} items)
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {event.mediaLinks.map((media, idx) => (
                        <a
                          key={idx}
                          href={media.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group p-4 bg-white border border-ivory-200 rounded-sm hover:border-gold-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="flex items-center gap-2">
                              {media.type === "youtube" ? (
                                <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                                  <Youtube className="w-4 h-4" />
                                </div>
                              ) : (
                                <div className="w-7 h-7 rounded-full bg-pink-50 flex items-center justify-center text-pink-600">
                                  <Instagram className="w-4 h-4" />
                                </div>
                              )}
                              <span className="text-[10px] font-semibold uppercase tracking-wider text-navy-500">
                                {media.type === "youtube" ? "YouTube Video" : "Instagram Reel"}
                              </span>
                            </div>
                            <ExternalLink className="w-3.5 h-3.5 text-navy-400 group-hover:text-gold-600 transition-colors" />
                          </div>

                          <h4 className="text-xs font-semibold text-navy-900 group-hover:text-gold-700 transition-colors leading-snug line-clamp-2 mb-3">
                            {media.title}
                          </h4>

                          <div className="pt-2 border-t border-ivory-100 flex items-center justify-between text-[11px] text-gold-700 font-medium">
                            <span>Watch recording</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}



              {/* Source Badge if present */}
              {event.source && (
                <Reveal delay={0.3}>
                  <div className="pt-2">
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

            {/* Sidebar (5 cols): Uncropped Poster & Action Box */}
            <div className="lg:col-span-5 space-y-6">
              {/* Authentic Poster Card */}
              {event.poster && (
                <Reveal delay={0.15}>
                  <div className="bg-white border border-ivory-200 rounded-sm p-4 shadow-sm group">
                    <p className="text-xs uppercase tracking-wider text-gold-600 font-semibold mb-3 text-center">
                      Official Archive Poster
                    </p>
                    <div
                      className="relative overflow-hidden rounded-sm bg-navy-950 cursor-pointer shadow-md"
                      onClick={() => setLightboxIdx(0)}
                    >
                      <img
                        src={event.poster}
                        alt={`${event.title} Official Poster`}
                        className="w-full h-auto max-h-[440px] object-contain mx-auto transition-transform duration-500 group-hover:scale-102"
                      />
                      <div className="absolute inset-0 bg-navy-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-4 py-2 bg-navy-950/90 text-gold-300 text-xs font-medium rounded-sm border border-gold-400/40 flex items-center gap-2 shadow-lg">
                          <Maximize2 className="w-3.5 h-3.5" /> Click to Enlarge
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Event Schedule & Venue Card */}
              <Reveal delay={0.2}>
                <div className="bg-white border border-ivory-200 rounded-sm p-6 sticky top-28">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-gold-600 font-semibold mb-5">
                    Schedule & Venue
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-navy-600/60 font-semibold mb-0.5">
                          Timing & Schedule
                        </p>
                        <p className="text-sm text-navy-900 font-medium">{event.date}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-navy-600/60 font-semibold mb-0.5">
                          Venue Location
                        </p>
                        <p className="text-sm text-navy-900 font-medium">{event.venue}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-ivory-200 space-y-3">
                    <a
                      href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent(`Hi Suha Academy, I would like to enquire about ${event.title} - ${event.subtitle}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-navy-950 font-medium text-sm rounded-sm hover:bg-gold-400 transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${academy.phoneRaw}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-ivory-300 text-navy-900 font-medium text-xs rounded-sm hover:border-gold-500 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Coordinator: {academy.phone}</span>
                    </a>
                    <Link
                      to="/events"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-gold-500/50 text-navy-900 font-medium text-sm rounded-sm hover:border-gold-500 transition-colors"
                    >
                      Explore All Events
                    </Link>
                  </div>

                  {/* Other signature pillars quick links */}
                  {otherPillars.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-ivory-100">
                      <p className="text-[11px] uppercase tracking-wider font-semibold text-navy-500 mb-3">
                        Other Signature Pillars:
                      </p>
                      <div className="space-y-2">
                        {otherPillars.slice(0, 4).map((p) => (
                          <Link
                            key={p.id}
                            to={`/events/${p.slug}`}
                            className="block text-xs font-medium text-navy-800 hover:text-gold-700 hover:translate-x-1 transition-all"
                          >
                            → {p.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.3}>
            <OrnamentDivider className="mt-16" />
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
