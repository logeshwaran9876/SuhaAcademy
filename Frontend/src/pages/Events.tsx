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
  Phone,
  MessageCircle,
  ExternalLink,
  Instagram,
  Youtube,
  Heart,
  Globe,
  Compass,
  Music,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import EventCard from "@/components/EventCard";
import { Reveal } from "@/components/Reveal";
import { OrnamentDivider, MandalaWatermark } from "@/components/Decorations";
import { events } from "@/data/events";
import { academy } from "@/data/academy";

type EventFilter =
  | "all"
  | "annual-day"
  | "utsavam"
  | "vasantha-swaranjali"
  | "national-recitals"
  | "international-recitals"
  | "salangai-pooja";

export default function Events() {
  const [activeFilter, setActiveFilter] = useState<EventFilter>("all");

  const filteredEvents = useMemo(() => {
    if (activeFilter === "all") return events;
    if (activeFilter === "annual-day")
      return events.filter((e) => e.slug === "suha-annual-day");
    if (activeFilter === "utsavam")
      return events.filter((e) => e.slug === "suha-utsavam");
    if (activeFilter === "vasantha-swaranjali")
      return events.filter((e) => e.slug === "vasantha-swaranjali");
    if (activeFilter === "national-recitals")
      return events.filter((e) => e.slug === "national-recitals");
    if (activeFilter === "international-recitals")
      return events.filter((e) => e.slug === "international-recitals");
    if (activeFilter === "salangai-pooja")
      return events.filter((e) => e.slug === "salangai-pooja-arangetram");
    return events;
  }, [activeFilter]);

  return (
    <>
      <PageHero
        eyebrow="Milestones of Artistic Excellence"
        title="Events & Classical Recitals"
        subtitle="At Suha Academy of Fine Arts, every event celebrates artistic excellence, cultural heritage, and our students’ journey — from annual celebrations to national and international recitals."
        image="/suha_media/shared/shared_hero_theatre_banner.jpg"
        height="lg"
      />

      {/* 01. Artistic Journey & Stage Ethos */}
      <section className="relative py-20 md:py-28 bg-cream-50 border-b border-ivory-200 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 text-gold-500/[0.04] pointer-events-none hidden md:block">
          <MandalaWatermark className="w-full h-full" />
        </div>
        <div className="absolute left-0 bottom-0 w-72 h-72 text-gold-500/[0.03] pointer-events-none hidden md:block">
          <MandalaWatermark className="w-full h-full" />
        </div>

        <div className="container-wide section-padding relative z-10">
          <SectionHeader
            number="01"
            eyebrow="Tradition · Stage Excellence · Cultural Heritage"
            title="Artistic Journey & Stage Ethos"
            subtitle="At Suha Academy of Fine Arts, every event is a celebration of artistic excellence, cultural heritage, and the evolving journey of our students. From grand annual celebrations and vibrant festivals to soulful musical offerings and prestigious national and international recitals, each occasion provides a platform to honour tradition, nurture talent, and showcase the dedication of our gurus and disciples."
          />

          {/* Concluding Milestone Accent */}
          <Reveal delay={0.2}>
            <div className="text-center mt-10 pt-8 border-t border-ivory-200/80 max-w-3xl mx-auto">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gold-700 font-semibold">
                Explore the memorable milestones and artistic experiences that define the spirit of Suha Academy
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filter Tabs Bar for Signature Events */}
      <section className="bg-paper border-b border-ivory-200 sticky top-[69px] z-30 py-3.5 shadow-xs">
        <div className="container-wide section-padding">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 py-1">
            {[
              { id: "all", label: "All Events" },
              { id: "annual-day", label: "Annual Day" },
              { id: "utsavam", label: "Suha's Utsavams" },
              { id: "vasantha-swaranjali", label: "Vasantha Swaranjali" },
              { id: "national-recitals", label: "National Recitals" },
              { id: "international-recitals", label: "International Recitals" },
              { id: "salangai-pooja", label: "Salangai Pooja & Arangetram" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as EventFilter)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-300 cursor-pointer border ${activeFilter === tab.id
                    ? "bg-navy-950 text-gold-300 border-navy-950 shadow-sm"
                    : "bg-white text-navy-800 border-ivory-200 hover:bg-gold-50 hover:text-gold-700 hover:border-gold-300"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Event Cards Grid (Only the 5 Signature Events) */}
      <section className="relative py-20 md:py-28 bg-cream-50">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, i) => (
              <EventCard key={event.slug} event={event} index={i} />
            ))}
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
                href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent("Hi Suha Academy, I would like to enquire about upcoming event participation & recitals.")}`}
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
    </>
  );
}
