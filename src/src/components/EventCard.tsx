import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { GoldFrame } from "./Decorations";

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
  gallery?: Array<{
    src: string;
    title?: string;
    subtitle?: string;
  }>;
  source?: string;
  sourceLabel?: string;
  category?: string;
  thematicHighlights?: string;
  celebrityPresence?: string;
  mediaLinks?: Array<{
    title: string;
    url: string;
    type: string;
    category?: string;
  }>;
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
      <Link
        to={`/events/${event.slug}`}
        className="group h-full flex flex-col bg-white border border-ivory-200 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-navy-900/10 hover:border-gold-300 block cursor-pointer"
      >
        {/* Poster — 16:9 aspect ratio matching event intro banners */}
        <div className="relative aspect-[16/9] overflow-hidden bg-navy-950">
          <img
            src={event.poster}
            alt={`${event.title} — ${event.year}`}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gentle hover tint to preserve 100% artwork visibility */}
          <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/10 transition-colors duration-300" />
          <GoldFrame />

          {/* Badges */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
            <span
              className={`px-3 py-1 text-xs uppercase tracking-wider font-semibold rounded-sm shadow-xs ${
                isUpcoming
                  ? "bg-gold-500 text-navy-950"
                  : "bg-navy-950/80 text-cream-100 backdrop-blur-md border border-gold-400/20"
              }`}
            >
              {isUpcoming ? "Upcoming" : event.year}
            </span>

            {event.gallery && event.gallery.length > 0 && (
              <span className="px-2.5 py-1 text-[11px] font-semibold rounded-sm bg-navy-950/85 text-gold-300 backdrop-blur-md border border-gold-400/20 shadow-xs">
                ✦ {event.gallery.length} Photos
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6 text-left">
          <div className="mb-3">
            <p className="text-xs font-semibold text-gold-700 uppercase tracking-wider mb-1 line-clamp-1">
              {event.subtitle}
            </p>
            <h3 className="text-xl font-display font-medium text-navy-950 group-hover:text-gold-600 transition-colors duration-300 line-clamp-2">
              {event.title}
            </h3>
          </div>

          

          <p className="text-sm text-navy-700/70 leading-relaxed mb-4 line-clamp-3">
            {event.description}
          </p>

          <div className="mt-auto pt-4 border-t border-ivory-100 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy-950 group-hover:text-gold-600 transition-colors duration-300 whitespace-nowrap">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 text-gold-500 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
