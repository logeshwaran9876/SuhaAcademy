import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { GoldFrame } from "./Decorations";
import SourceBadge from "./SourceBadge";
import type { GalleryImage } from "./Gallery";

export interface EventData {
  slug: string;
  year: number;
  title: string;
  subtitle: string;
  date: string;
  venue: string;
  venueShort: string;
  status: string;
  description: string;
  categories: string[];
  poster: string;
  source: string;
  sourceLabel: string;
}

export default function EventCard({
  event,
  index = 0,
}: {
  event: EventData;
  index?: number;
}) {
  const isUpcoming = event.status === "upcoming";

  return (
    <Reveal delay={index * 0.1} className="h-full">
      <article className="group h-full flex flex-col bg-white border border-ivory-200 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-navy-900/10 hover:border-gold-300">
        {/* Poster */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={event.poster}
            alt={`${event.title} — ${event.year}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
          <GoldFrame />

          {/* Year badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 text-xs uppercase tracking-wider font-medium rounded-sm ${
                isUpcoming
                  ? "bg-gold-500 text-navy-950"
                  : "bg-navy-950/60 text-cream-100 backdrop-blur-sm"
              }`}
            >
              {isUpcoming ? "Upcoming" : event.year}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-xl font-display text-cream-50 mb-0.5">
              {event.title}
            </h3>
            <p className="text-xs text-gold-300 uppercase tracking-wider">
              {event.subtitle}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          {/* Meta */}
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-2 text-xs text-navy-700/70">
              <Calendar className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
              {event.date}
            </div>
            <div className="flex items-start gap-2 text-xs text-navy-700/70">
              <MapPin className="w-3.5 h-3.5 text-gold-500 flex-shrink-0 mt-0.5" />
              {event.venueShort}
            </div>
          </div>

          <p className="text-sm text-navy-700/70 leading-relaxed mb-4 line-clamp-3">
            {event.description}
          </p>

          {/* Categories preview */}
          {event.categories.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {event.categories.slice(0, 4).map((cat) => (
                <span
                  key={cat}
                  className="px-2.5 py-1 text-[10px] uppercase tracking-wider bg-cream-100/70 text-navy-700/60 rounded-sm border border-ivory-200"
                >
                  {cat}
                </span>
              ))}
              {event.categories.length > 4 && (
                <span className="px-2.5 py-1 text-[10px] text-navy-600/40">
                  +{event.categories.length - 4} more
                </span>
              )}
            </div>
          )}

          <div className="mt-auto flex items-center justify-between pt-2">
            <Link
              to={`/events/${event.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-gold-600 transition-colors duration-300 group/link"
            >
              View Details
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
            <SourceBadge
              source={event.source}
              sourceLabel={event.sourceLabel}
              url={event.source}
            />
          </div>
        </div>
      </article>
    </Reveal>
  );
}
