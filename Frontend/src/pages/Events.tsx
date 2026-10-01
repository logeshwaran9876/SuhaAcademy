import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  Maximize2,
  CheckCircle2,
  Phone,
  MessageCircle,
  FileText,
  Clock,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import EventCard from "@/components/EventCard";
import { Reveal } from "@/components/Reveal";
import { OrnamentDivider, MandalaWatermark, GoldFrame } from "@/components/Decorations";
import { Lightbox } from "@/components/Lightbox";
import { events } from "@/data/events";
import { academy } from "@/data/academy";
import type { GalleryImage } from "@/components/Gallery";

type EventFilter = "all" | "kkkv" | "annual-days" | "international";

export default function Events() {
  const [activeFilter, setActiveFilter] = useState<EventFilter>("all");
  const [posterLightboxOpen, setPosterLightboxOpen] = useState(false);
  const [activePosterImage, setActivePosterImage] = useState<GalleryImage | null>(null);

  const kkkv2026 = events.find((e) => e.slug === "kkkv-2026");

  const filteredEvents = useMemo(() => {
    if (activeFilter === "all") return events;
    if (activeFilter === "kkkv") return events.filter((e) => e.slug.includes("kkkv"));
    if (activeFilter === "annual-days")
      return events.filter(
        (e) => e.slug.includes("annual-day") || e.slug.includes("vasantha") || e.slug.includes("thyagaraja")
      );
    if (activeFilter === "international")
      return events.filter((e) => e.slug.includes("singapore"));
    return events;
  }, [activeFilter]);

  return (
    <>
      <PageHero
        eyebrow="Cultural Festivals & Stage Recitals"
        title="Event Archive & KKKV"
        subtitle="Celebrating classical dance and Carnatic music through Kodai Kaala Kalai Vizha (KKKV), Annual Day Utsavams, and international stage productions."
        image="/suha_media/suha_hero_theatre_banner.jpg"
        height="lg"
      />

      {/* Signature Spotlight: KKKV 2026 */}
      {kkkv2026 && (
        <section className="relative py-20 bg-[#0C0609] text-cream-100 overflow-hidden border-b border-gold-500/20">
          <div className="absolute right-0 top-0 w-96 h-96 text-gold-400/[0.04] pointer-events-none hidden lg:block">
            <MandalaWatermark className="w-full h-full" />
          </div>

          <div className="container-wide section-padding relative z-10">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Festival Highlights */}
              <div className="lg:col-span-7">
                <Reveal>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-400/40 rounded-full text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Flagship Classical Festival &middot; Successfully Concluded</span>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <h2 className="text-display-md font-display font-medium text-cream-50 mb-2">
                    Kodai Kaala Kalai Vizha 2026
                  </h2>
                  <p className="font-serif text-2xl text-gold-300 italic mb-6">
                    KKKV — The Classical Faceoff
                  </p>
                </Reveal>

                <Reveal delay={0.2}>
                  <p className="text-cream-100/80 leading-relaxed mb-6 text-sm">
                    Two exhilarating days of traditional rhythm, expression, and music. Suha Academy’s signature festival brought together over 400 aspiring classical dancers and vocalists from across South India to perform before esteemed judging panels.
                  </p>
                </Reveal>

                {/* Key Event Badges */}
                <Reveal delay={0.25}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-sm bg-[#160D12] border border-gold-500/25 mb-6 text-xs">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gold-300 font-semibold uppercase tracking-wider text-[11px]">Concluded Edition</p>
                        <p className="text-cream-50 font-medium">13–14 June 2026 (Sat & Sun)</p>
                        <p className="text-cream-100/60 text-[11px]">8:00 AM to 5:00 PM &bull; Registrations Closed</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gold-300 font-semibold uppercase tracking-wider text-[11px]">Venue</p>
                        <p className="text-cream-50 font-medium">Ixora BHS Recreational Club</p>
                        <p className="text-cream-100/60 text-[11px]">Bollineni Hillside, Perumbakkam</p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Categories Preview */}
                <Reveal delay={0.3}>
                  <div className="mb-8">
                    <p className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold mb-2.5">
                      Competition Categories (Solo, Duet & Group):
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {kkkv2026.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-2.5 py-1 text-xs bg-cream-100/10 text-cream-100/90 rounded-sm border border-gold-500/20"
                        >
                          ✦ {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>

                {/* CTA Buttons */}
                <Reveal delay={0.35}>
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent("Hi Suha Academy, I would like to enquire about the upcoming edition of Kodai Kaala Kalai Vizha (KKKV).")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 text-navy-950 font-medium text-sm rounded-sm hover:bg-gold-400 transition-all duration-300 group shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Enquire for Next Edition</span>
                    </a>
                    <Link
                      to="/events/kkkv-2026"
                      className="inline-flex items-center gap-2 px-7 py-3.5 border border-cream-100/30 text-cream-50 font-medium text-sm rounded-sm hover:border-gold-400 hover:text-gold-300 transition-all duration-300"
                    >
                      <span>Full Schedule & Archive</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Full Official Poster with Lightbox Trigger */}
              <div className="lg:col-span-5">
                <Reveal delay={0.2} className="relative">
                  <div className="relative max-w-md mx-auto group">
                    <div className="absolute -inset-3 border border-gold-400/30 rounded-sm pointer-events-none" />
                    <div
                      className="relative overflow-hidden rounded-sm bg-navy-950 shadow-2xl cursor-pointer"
                      onClick={() => setPosterLightboxOpen(true)}
                    >
                      <img
                        src="/suha_media/kodai-kalaai-vizha-2026.jpg"
                        alt="KKKV 2026 The Classical Faceoff Official Poster"
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-102"
                      />
                      <div className="absolute inset-0 bg-navy-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-4 py-2 bg-navy-950/90 text-gold-300 text-xs font-medium rounded-sm border border-gold-400/40 flex items-center gap-2 shadow-xl">
                          <Maximize2 className="w-4 h-4" /> Click to View Poster Fullscreen
                        </span>
                      </div>
                    </div>
                    <p className="text-center text-xs text-cream-100/50 mt-3 flex items-center justify-center gap-1.5">
                      <span>✦</span> Official Brochure &middot; Contact: 9884644298 / 9566977389
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Festival Impact Metrics */}
      <section className="bg-white border-b border-ivory-200 py-6">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <p className="font-display text-3xl font-bold text-navy-900">7+</p>
              <p className="text-xs uppercase tracking-wider text-navy-600/70 mt-1 font-medium">KKKV Editions Conducted</p>
            </div>
            <div className="p-3 border-l border-ivory-200">
              <p className="font-display text-3xl font-bold text-gold-600">1,200+</p>
              <p className="text-xs uppercase tracking-wider text-navy-600/70 mt-1 font-medium">Participants Felicitated</p>
            </div>
            <div className="p-3 border-l border-ivory-200">
              <p className="font-display text-3xl font-bold text-navy-900">50+</p>
              <p className="text-xs uppercase tracking-wider text-navy-600/70 mt-1 font-medium">Competition Categories</p>
            </div>
            <div className="p-3 border-l border-ivory-200">
              <p className="font-display text-3xl font-bold text-gold-600">100%</p>
              <p className="text-xs uppercase tracking-wider text-navy-600/70 mt-1 font-medium">Merit Recognition & Trophies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs Bar */}
      <section className="bg-paper border-b border-ivory-200 sticky top-[69px] z-30 py-3 shadow-xs">
        <div className="container-wide section-padding">
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {[
              { id: "all", label: "All Events" },
              { id: "kkkv", label: "KKKV Festivals" },
              { id: "annual-days", label: "Annual Days & Utsavams" },
              { id: "international", label: "International Recitals" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as EventFilter)}
                className={`px-5 py-2 text-xs uppercase tracking-wider font-medium rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-navy-950 text-gold-300 shadow-sm"
                    : "bg-white text-navy-800 hover:bg-gold-50 hover:text-gold-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Event Cards Grid */}
      <section className="relative py-20 md:py-28 bg-cream-50">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, i) => (
              <EventCard key={event.slug} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Competition Rules & Participant Guide */}
      <section className="relative py-24 md:py-32 bg-paper overflow-hidden">
        <div className="container-wide section-padding">
          <SectionHeader
            number="02"
            eyebrow="Guidelines"
            title="Participation & Judging Standards"
            subtitle="Suha Academy's Kodai Kaala Kalai Vizha adheres to strict classical parameters ensuring fair evaluation and maximum artistic encouragement."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <Reveal delay={0.1}>
              <div className="p-7 bg-white border border-ivory-200 rounded-sm hover:border-gold-300 transition-all">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-700 font-semibold mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base text-navy-900 mb-2">Age Group Divisions</h3>
                <p className="text-xs text-navy-700/70 leading-relaxed">
                  Competitors are categorized into Sub-Juniors (below 7 yrs), Juniors (8–11 yrs), Seniors (12–16 yrs), and Super Seniors (17+ yrs). Time limits and repertoire difficulty are strictly calibrated per division.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-7 bg-white border border-ivory-200 rounded-sm hover:border-gold-300 transition-all">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-700 font-semibold mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base text-navy-900 mb-2">Judging Criteria</h3>
                <p className="text-xs text-navy-700/70 leading-relaxed">
                  Evaluated on Angashuddhi (clean postures), Talam (rhythmic accuracy), Abhinaya (facial expression and bhava), Costume & Aharya, and Shruthi Shuddham for vocalists by independent senior gurus.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-7 bg-white border border-ivory-200 rounded-sm hover:border-gold-300 transition-all">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-700 font-semibold mb-4">
                  <Trophy className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base text-navy-900 mb-2">Trophies & Merit Honours</h3>
                <p className="text-xs text-navy-700/70 leading-relaxed">
                  Top 3 rankers in every category receive grand trophies and cash awards. Every single registered participant receives a personalized participation medal and official certificate of merit.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 bg-navy-950 text-center">
        <div className="container-wide section-padding">
          <Reveal>
            <OrnamentDivider light className="mb-8" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display-md font-display text-cream-50 mb-4">
              Step Onto the Classical Stage
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-cream-100/60 max-w-lg mx-auto mb-8 text-sm">
              Whether you are an academy student or an external classical school participant, we warmly invite you to share your artistry at our upcoming events.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent("Hi Suha Academy, I would like to enquire about upcoming event participation & registrations.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-950 font-medium text-sm rounded-sm hover:bg-gold-400 transition-all duration-300 group shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Event Coordinator</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cream-100/30 text-cream-50 font-medium text-sm rounded-sm hover:border-gold-400 hover:text-gold-300 transition-all duration-300"
              >
                <span>General Academy Contact</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox for KKKV Poster */}
      <Lightbox
        images={[
          {
            src: "/suha_media/kodai-kalaai-vizha-2026.jpg",
            alt: "Official KKKV 2026 The Classical Faceoff Poster",
            title: "KKKV 2026 — The Classical Faceoff Official Poster",
            category: "Flagship Festival Poster",
            year: "2026",
            source: "Suha Academy Archive",
            permissionRequired: false,
          },
        ]}
        index={posterLightboxOpen ? 0 : null}
        onClose={() => setPosterLightboxOpen(false)}
        onNavigate={() => {}}
      />
    </>
  );
}
