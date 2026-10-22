import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin,
  Calendar,
  ArrowRight,
  ExternalLink,
  Instagram,
  Youtube,
  Globe,
  Award,
  Heart,
} from "lucide-react";
import { GoldFrame } from "@/components/Decorations";

export interface EventSlide {
  slug: string;
  title: string;
  subtitle: string;
  categoryBadge: string;
  categoryIcon: "sparkles" | "globe" | "heart" | "award" | "calendar";
  venue: string;
  date: string;
  description: string;
  image: string;
  imagePosition?: string;
  mediaCount?: number;
  highlightText?: string;
  hasReels?: boolean;
}

export const eventSlidesData: EventSlide[] = [
  {
    slug: "suha-annual-day",
    title: "Suha’s Annual Day",
    subtitle: "Thematic Productions: Dasaavatharam & Geetham Paada",
    categoryBadge: "Signature Production",
    categoryIcon: "sparkles",
    venue: "Premier Sabhas & Karnataka Sangha Hall, Chennai",
    date: "Annual Grand Milestone",
    description:
      "A grand celebration of student dedication and artistic excellence. Multi-dancer thematic productions choreographed by Guru Smt. Ranjini Pradeep with celebrity guests presenting KKKV awards.",
    image: "/suha_media/shared/shared_media_asset_03.jpg",
    imagePosition: "center 25%",
    mediaCount: 1,
    highlightText: "Thematic Choreography by Guru Smt. Ranjini Pradeep",
  },
  {
    slug: "international-recitals",
    title: "International Recitals",
    subtitle: "Singapore SOTA Drama Theatre & Batu Caves Malaysia",
    categoryBadge: "Global Stages Tour",
    categoryIcon: "globe",
    venue: "SOTA Theatre Singapore & Batu Caves Malaysia",
    date: "International Tours",
    description:
      "Taking classical arts beyond borders. Disciples perform on prestigious global stages including 'Sivānubhavam' at SOTA Singapore, fostering guru-shishya bonds and unforgettable cultural exchange.",
    image: "/suha_media/shared/shared_event_poster_shivanubhavam_singapore.jpg",
    imagePosition: "center center",
    mediaCount: 4,
    hasReels: true,
    highlightText: "Cross-border Repertoire & Cultural Exchange",
  },
  {
    slug: "suha-utsavam",
    title: "Suha’s Classical Utsavams",
    subtitle: "Margazhi Maha Utsav, Thyagaraja Aradhana & Navratri",
    categoryBadge: "Devotional Festivals",
    categoryIcon: "calendar",
    venue: "Temples & Sabhas Across Chennai",
    date: "Seasonal Sacred Festivals",
    description:
      "Rich devotional celebrations upholding timeless classical traditions. From Margazhi December Season concerts to group Pancharatna homage celebrating Saint Thyagaraja with senior vidwans.",
    image: "/suha_media/shared/shared_event_poster_nithyasree_aaradhana.jpg",
    imagePosition: "center center",
    mediaCount: 4,
    hasReels: true,
    highlightText: "Pancharatna Homage with Padmashri Nithyasree Mahadevan",
  },
  {
    slug: "national-recitals",
    title: "National Recitals Series",
    subtitle: "Bhakthi Lahari & Sacred Temple Natyanjali Tours",
    categoryBadge: "Pan-Tamil Nadu",
    categoryIcon: "award",
    venue: "Renowned Temples Across Chennai & Tamil Nadu",
    date: "State-wide Recital Series",
    description:
      "Solo and group recitals providing senior disciples enriching stage exposure at historic temples and cultural sabhas, including Shivratri Natyanjali and world-record classical showcases.",
    image: "/suha_media/events/event_navaratri_temple_schedule.jpg",
    imagePosition: "center 30%",
    mediaCount: 11,
    hasReels: true,
    highlightText: "Bhakthi Lahari & Navratri Concert Series",
  },
  {
    slug: "vasantha-swaranjali",
    title: "Vasantha Swaranjali",
    subtitle: "Art with Compassion at Vasantham Elderly Homes",
    categoryBadge: "Compassionate Seva",
    categoryIcon: "heart",
    venue: "Vasantham Homes, Chennai",
    date: "Ongoing Compassionate Outreach",
    description:
      "A heartfelt initiative bringing the joy of classical music and dance to senior residents. Disciples share their talent, spread smiles and receive cherished blessings from elderly generations.",
    image: "/suha_media/events/event_vasantha_swaranjali_flyer.jpg",
    imagePosition: "center center",
    mediaCount: 9,
    hasReels: true,
    highlightText: "Intergenerational Warmth, Music & Traditional Seva",
  },
  {
    slug: "kkkv-2026",
    title: "Kodai Kaala Kalai Vizha 2026",
    subtitle: "The Classical Faceoff — 400+ Aspiring Performers",
    categoryBadge: "State Competition",
    categoryIcon: "award",
    venue: "Ixora Club, Bollineni Hillside, Perumbakkam",
    date: "13–14 June 2026 (Sat & Sun)",
    description:
      "Suha Academy's signature festival bringing together over 400 classical dancers and vocalists from across South India before esteemed evaluation panels with merit trophies and honours.",
    image: "/suha_media/shared/shared_event_poster_kkkv_2026.jpg",
    imagePosition: "center top",
    mediaCount: 1,
    highlightText: "Solo & Group Bharatanatyam, Carnatic Krithis & Slokas",
  },
];

export default function EventSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive items count calculation: 1 on mobile (<640px), 2 on tablet (<1024px), 3 on desktop
  useEffect(() => {
    const updateVisibleCount = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setVisibleCount(1);
      } else if (w < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, eventSlidesData.length - visibleCount);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-loop: rotates every 4.5 seconds, pauses on hover/touch
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    setTouchStartX(null);
  };

  return (
    <section className="relative py-20 md:py-28 bg-white border-b border-ivory-200 overflow-hidden">
      <div className="container-wide section-padding">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Multi-Stage Event Carousel</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-navy-950">
              Explore Our Signature Stages & Festivals
            </h2>
            <p className="text-sm sm:text-base text-navy-700/75 mt-2 max-w-2xl font-light">
              Slide through our flagship annual productions, international concert tours, sacred temple recitals and classical music competitions.
            </p>
          </div>

          {/* Top Status & Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="text-[11px] uppercase tracking-wider text-gold-700 font-mono hidden sm:inline">
              {isPaused ? "Paused" : "Auto-looping"}
            </span>
            <span className="text-xs font-mono font-semibold text-navy-900 bg-cream-100 px-3 py-1 rounded-full border border-ivory-300">
              Showing {currentIndex + 1}–{Math.min(currentIndex + visibleCount, eventSlidesData.length)} of {eventSlidesData.length}
            </span>
          </div>
        </div>

        {/* Carousel Container with Flanking Side Arrows */}
        <div
          ref={containerRef}
          className="relative px-2 sm:px-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Events"
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gold-500/40 bg-white/95 text-navy-950 hover:bg-navy-950 hover:text-gold-300 hover:border-navy-950 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-xl active:scale-95 backdrop-blur-xs"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Events"
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gold-500/40 bg-white/95 text-navy-950 hover:bg-navy-950 hover:text-gold-300 hover:border-navy-950 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-xl active:scale-95 backdrop-blur-xs"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Carousel Viewport Track */}
          <div className="overflow-hidden py-2">
            <div
              className="flex transition-transform duration-600 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {eventSlidesData.map((event, idx) => (
                <div
                  key={event.slug}
                  className="px-3 shrink-0"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <article className="group h-full flex flex-col bg-white border border-ivory-200 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-gold-400 hover:-translate-y-1">
                    {/* Event Banner Image */}
                    <div className="relative h-60 sm:h-64 overflow-hidden bg-navy-950">
                      <img
                        src={event.image}
                        alt={event.title}
                        loading="lazy"
                        style={{ objectPosition: event.imagePosition || "center center" }}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent pointer-events-none" />
                      <GoldFrame />

                      {/* Top Category Badge */}
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                        <span className="px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-navy-950/85 text-gold-300 border border-gold-500/30 backdrop-blur-md shadow-xs flex items-center gap-1.5">
                          {event.categoryIcon === "sparkles" && <Sparkles className="w-3 h-3 text-gold-400" />}
                          {event.categoryIcon === "globe" && <Globe className="w-3 h-3 text-gold-400" />}
                          {event.categoryIcon === "heart" && <Heart className="w-3 h-3 text-gold-400" />}
                          {event.categoryIcon === "award" && <Award className="w-3 h-3 text-gold-400" />}
                          {event.categoryIcon === "calendar" && <Calendar className="w-3 h-3 text-gold-400" />}
                          <span>{event.categoryBadge}</span>
                        </span>
                      </div>

                      {/* Media Link Indicator if available */}
                      {event.hasReels && (
                        <div className="absolute top-3 right-3 z-10">
                          <span className="px-2 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-pink-950/80 text-pink-200 border border-pink-500/30 flex items-center gap-1 shadow-xs">
                            <Instagram className="w-3 h-3 text-pink-400" />
                            <span>Video Reels</span>
                          </span>
                        </div>
                      )}

                      {/* Bottom Title on Image */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
                        <h3 className="text-xl sm:text-2xl font-display font-medium text-cream-50 drop-shadow-sm group-hover:text-gold-200 transition-colors">
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col flex-1 p-5 sm:p-6 bg-white">
                      {/* Subtitle & Date / Venue Meta */}
                      <div className="mb-3">
                        <p className="text-xs font-serif italic text-gold-700 font-medium mb-2 line-clamp-1">
                          {event.subtitle}
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-navy-600/80">
                          <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                          <span className="line-clamp-1">{event.venue}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-navy-800/80 leading-relaxed line-clamp-3 mb-4">
                        {event.description}
                      </p>

                      {/* Highlight Tag */}
                      {event.highlightText && (
                        <div className="mb-5 p-2.5 rounded-xs bg-cream-50 border border-gold-500/15 text-[11px] text-navy-900 font-medium flex items-center gap-2">
                          <span className="text-gold-600 font-bold">✦</span>
                          <span className="line-clamp-1">{event.highlightText}</span>
                        </div>
                      )}

                      {/* Bottom Action CTA */}
                      <div className="mt-auto pt-4 border-t border-ivory-100 flex items-center justify-between">
                        <Link
                          to={`/events/${event.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-navy-950 hover:text-gold-700 transition-colors group/link"
                        >
                          <span>Explore Event Page</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                        </Link>

                        <span className="text-[11px] font-mono text-gold-700/80">
                          0{idx + 1}
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide group ${idx + 1}`}
                className={`transition-all duration-300 cursor-pointer rounded-full ${isActive
                    ? "w-8 h-2.5 bg-gold-600 shadow-xs"
                    : "w-2.5 h-2.5 bg-ivory-300 hover:bg-gold-400"
                  }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
