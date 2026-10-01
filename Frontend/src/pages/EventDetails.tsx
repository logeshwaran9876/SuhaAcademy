import { useState } from "react";
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
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldFrame, OrnamentDivider } from "@/components/Decorations";
import SourceBadge from "@/components/SourceBadge";
import EnquiryForm from "@/components/EnquiryForm";
import { Lightbox } from "@/components/Lightbox";
import { events, annualDay2024 } from "@/data/events";
import { academy } from "@/data/academy";

export default function EventDetails() {
  const { slug } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen bg-cream-50">
        <h1 className="text-display-md font-display text-navy-900 mb-4">
          Event Not Found
        </h1>
        <p className="text-navy-700/60 mb-6">
          The event you're looking for doesn't exist.
        </p>
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Events
        </Link>
      </div>
    );
  }

  const isUpcoming = event.status === "upcoming";
  const is2024 = event.slug === "kkkv-2024";

  return (
    <>
      {/* Theatrical Page Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <img
            src="/suha_media/suha_hero_theatre_banner.jpg"
            alt="Suha Academy Theatrical Stage"
            className="w-full h-full object-cover object-center opacity-70"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/40" />
        </div>

        <div className="relative z-10 container-wide section-padding pb-16 pt-28">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm text-cream-100/70 hover:text-gold-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> All Events Archive
          </Link>

          <Reveal>
            <span
              className={`inline-block px-3 py-1 text-xs uppercase tracking-wider font-medium rounded-sm mb-4 ${
                isUpcoming
                  ? "bg-gold-500 text-navy-950 font-semibold"
                  : "bg-navy-950/80 text-gold-300 backdrop-blur-sm border border-gold-400/30"
              }`}
            >
              {isUpcoming ? "✦ Upcoming Signature Event" : `Festival Archive · ${event.year}`}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-display-lg font-display font-medium text-cream-50 mb-2">
              {event.title}
            </h1>
            <p className="font-serif text-2xl text-gold-300 italic">
              {event.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Details Section */}
      <section className="relative py-20 md:py-28 bg-cream-50">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content (7 cols) */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-gold-500/40" />
                  <span className="eyebrow">About the Festival</span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-navy-800/90 leading-relaxed text-base md:text-lg mb-8">
                  {event.description}
                </p>
              </Reveal>

              {/* Competition Categories */}
              {event.categories.length > 0 && (
                <Reveal delay={0.2}>
                  <div className="mb-10 p-6 bg-white border border-ivory-200 rounded-sm">
                    <h3 className="font-display text-xl text-navy-900 mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-gold-600" />
                      Competition & Performance Categories
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {event.categories.map((cat) => (
                        <div
                          key={cat}
                          className="flex items-center gap-2.5 p-3 bg-cream-50/70 border border-ivory-200 rounded-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                          <span className="text-xs text-navy-900 font-medium">{cat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Annual Day details for 2024 */}
              {is2024 && (
                <Reveal delay={0.25}>
                  <div className="bg-navy-950 rounded-sm p-8 text-cream-100 mb-8 border border-gold-500/20">
                    <h3 className="font-display text-xl text-gold-300 mb-4">
                      2024 Annual Day — Award Details
                    </h3>
                    <p className="text-sm text-cream-100/70 mb-4">
                      {annualDay2024.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {annualDay2024.awards.map((award) => (
                        <span
                          key={award}
                          className="px-3 py-1.5 text-xs bg-cream-100/10 text-cream-100/80 rounded-sm border border-cream-100/10"
                        >
                          {award}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Source Badge */}
              <Reveal delay={0.3}>
                <div className="pt-2">
                  <SourceBadge
                    source={event.source}
                    sourceLabel={event.sourceLabel}
                    url={event.source}
                    label="Official archive source"
                  />
                </div>
              </Reveal>
            </div>

            {/* Sidebar (5 cols): Uncropped Poster & Action Box */}
            <div className="lg:col-span-5 space-y-6">
              {/* Authentic Uncropped Poster Card */}
              <Reveal delay={0.15}>
                <div className="bg-white border border-ivory-200 rounded-sm p-4 shadow-sm group">
                  <p className="text-xs uppercase tracking-wider text-gold-600 font-semibold mb-3 text-center">
                    Official Event Poster
                  </p>
                  <div
                    className="relative overflow-hidden rounded-sm bg-navy-950 cursor-pointer shadow-md"
                    onClick={() => setLightboxOpen(true)}
                  >
                    <img
                      src={event.poster}
                      alt={`${event.title} Official Poster`}
                      className="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-500 group-hover:scale-102"
                    />
                    <div className="absolute inset-0 bg-navy-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-navy-950/90 text-gold-300 text-xs font-medium rounded-sm border border-gold-400/40 flex items-center gap-2 shadow-lg">
                        <Maximize2 className="w-3.5 h-3.5" /> Click to Enlarge
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

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
                        <p className="text-[11px] uppercase tracking-wider text-navy-600/60 font-semibold mb-0.5">Date & Time</p>
                        <p className="text-sm text-navy-900 font-medium">{event.date}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-navy-600/60 font-semibold mb-0.5">Venue Location</p>
                        <p className="text-sm text-navy-900 font-medium">{event.venue}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-ivory-200 space-y-3">
                    {isUpcoming ? (
                      <>
                        <a
                          href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent(`Hi Suha Academy, I would like to register for ${event.title} - ${event.subtitle}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-navy-950 font-medium text-sm rounded-sm hover:bg-gold-400 transition-colors shadow-sm"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Register on WhatsApp</span>
                        </a>
                        <a
                          href={`tel:${academy.phoneRaw}`}
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-ivory-300 text-navy-900 font-medium text-xs rounded-sm hover:border-gold-500 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call Coordinator: {academy.phone}</span>
                        </a>
                      </>
                    ) : (
                      <Link
                        to="/events"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold-500/50 text-navy-900 font-medium text-sm rounded-sm hover:border-gold-500 transition-colors"
                      >
                        Explore All Events
                      </Link>
                    )}
                  </div>
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
                Send us an enquiry for {event.title} and our festival committee will share the official guidelines and entry form.
              </p>
              <div className="bg-white border border-ivory-200 rounded-sm p-8 shadow-sm">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Full Poster Lightbox */}
      <Lightbox
        images={[
          {
            src: event.poster,
            alt: `${event.title} Full Poster`,
            title: `${event.title} — ${event.subtitle}`,
            category: "Official Event Poster",
            year: String(event.year),
            source: event.sourceLabel,
            permissionRequired: false,
          },
        ]}
        index={lightboxOpen ? 0 : null}
        onClose={() => setLightboxOpen(false)}
        onNavigate={() => {}}
      />
    </>
  );
}
