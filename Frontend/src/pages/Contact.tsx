import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  Clock,
  Navigation,
  Globe,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { OrnamentDivider } from "@/components/Decorations";
import { academy } from "@/data/academy";

const branches = [
  {
    name: "Perumbakkam Center",
    tag: "Main Campus & Academy Studios",
    address:
      "3rd Floor, Ixora Club House, BSCPL BOLLINENI HILLSIDE, Bollineni Hillside Road, Perumbakkam, Chennai, Tamil Nadu 600131",
    timing: "Weekday & Weekend Batches Available (Contact Admissions for Current Schedule)",
    landmark: "3rd Floor, Ixora Club House, BSCPL BOLLINENI HILLSIDE",
    mapQuery:
      "Ixora Club House BSCPL BOLLINENI HILLSIDE Bollineni Hillside Road Perumbakkam Chennai 600131",
    phone: academy.phone,
    whatsappText:
      "Hi Suha Academy, I would like to inquire about classes at the Perumbakkam (Bollineni Hillside) branch.",
  },
  {
    name: "Medavakkam Center",
    tag: "South Chennai Center",
    address: "Navins Starwood Towers, Vengaivasal Main Road, Medavakkam, Chennai – 600100",
    timing: "Weekday & Weekend Batches Available (Contact Admissions for Current Schedule)",
    landmark: "Opp. Global Hospital road junction, Navins Starwood Club",
    mapQuery: "Navins Starwood Towers Medavakkam Chennai",
    phone: academy.phone,
    whatsappText: "Hi Suha Academy, I would like to inquire about classes at the Medavakkam branch.",
  }
];



const directWhatsAppLink =
  "https://wa.me/919994883303?text=Hi%20Suha%20Academy%2C%20I%20would%20like%20to%20enroll%20%2F%20inquire%20about%20Bharatanatyam%20for%20Child%20(4%E2%80%9312%20yrs).%20Please%20share%20batch%20timings%20and%20admission%20details.";

export default function Contact() {
  return (
    <>
      <PageHero pageKey="contact" />

      {/* Quick WhatsApp Inquiry Bar */}
      <section className="bg-white border-b border-ivory-200 py-6 md:py-8 shadow-xs">
        <div className="container-wide section-padding">
          <div className="bg-cream-50 p-6 md:p-8 rounded-sm border border-gold-500/25 max-w-4xl mx-auto shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-gold-600" />
                  <h3 className="font-display text-base md:text-lg font-semibold text-navy-900">
                    Quick WhatsApp Admission Inquiry
                  </h3>
                </div>
                <p className="text-xs text-navy-700/80 leading-relaxed max-w-xl">
                  Connect directly with our admissions coordinator on WhatsApp to inquire about batch timings, age eligibility, and enrollment details.
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-navy-600/70">
                  <span>
                    Direct phone: <strong className="text-navy-900">{academy.phone}</strong>
                  </span>
                </div>
              </div>
            </div>

            <a
              href={directWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#1da851] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3 Center Locations Grid */}
      <section className="relative py-20 md:py-28 bg-cream-50">
        <div className="container-wide section-padding">
          <SectionHeader
            number="01"
            eyebrow="Our Centers"
            title="Teaching Branches & Studios"
            subtitle="Choose the center most convenient for your family. All branches follow the disciplined curriculum of Guru Smt. Ranjini Pradeep."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 max-w-4xl mx-auto">
            {branches.map((b, i) => (
              <Reveal key={b.name} delay={i * 0.1} className="h-full">
                <div className="h-full bg-white border border-ivory-200 rounded-sm p-7 flex flex-col justify-between hover:border-gold-400 hover:shadow-xl transition-all duration-300 group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs uppercase tracking-wider font-semibold text-gold-600 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {b.tag}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                    </div>

                    <h3 className="font-display text-xl text-navy-900 mb-2 group-hover:text-gold-700 transition-colors">
                      {b.name}
                    </h3>

                    <p className="text-xs text-navy-700/80 mb-4 leading-relaxed font-sans">
                      {b.address}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-ivory-100 text-xs">
                      <div className="flex items-start gap-2 text-navy-800">
                        <Clock className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                        <span>
                          <strong>Batch Schedule:</strong> {b.timing}
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-navy-700/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                        <span>
                          <strong>{b.mapQuery ? "Landmark:" : "Platform:"}</strong> {b.landmark}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-ivory-200 flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent(b.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-gold-700 hover:text-gold-800 font-semibold"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>Chat for Batches &rarr;</span>
                    </a>

                    {b.mapQuery ? (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.mapQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-navy-600 hover:text-navy-900 font-medium"
                      >
                        <Navigation className="w-3.5 h-3.5 text-navy-500" />
                        <span>Get Directions</span>
                      </a>
                    ) : (
                      <span className="text-[11px] text-navy-500 font-medium flex items-center gap-1">
                        <Globe className="w-3.5 h-3.5 text-gold-600" />
                        Live Interactive Studio
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reach Us Directly & Official Headquarters Section */}
      <section id="contact-form" className="relative py-20 md:py-28 bg-paper">
        <div className="container-wide section-padding">
          <SectionHeader
            number="02"
            eyebrow="Reach Us Directly"
            title="Talk to Our Admissions & Event Teams"
            subtitle="Have questions regarding batch timings, fee structures, or age eligibility? Connect with our dedicated coordinators directly."
          />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mt-12">
            {/* Left Column: Direct Communication Channels */}
            <div className="flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                {/* Admission Phone */}
                <a
                  href={`tel:${academy.phoneRaw}`}
                  className="flex items-center gap-5 p-5 bg-white border border-ivory-200 rounded-sm hover:border-gold-400 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-navy-900/5 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors shrink-0">
                    <Phone className="w-5 h-5 text-navy-900 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gold-600 font-semibold mb-0.5">
                      Admission Enquiries
                    </p>
                    <p className="text-base text-navy-900 font-semibold">{academy.phone}</p>
                    <p className="text-xs text-navy-600/70 mt-0.5">
                      Mon–Sun 9:00 AM – 8:00 PM &middot; Guidance & Batch Placement
                    </p>
                  </div>
                </a>

                {/* Event Phone */}
                <a
                  href={`tel:${academy.eventPhoneRaw || "919566977389"}`}
                  className="flex items-center gap-5 p-5 bg-white border border-ivory-200 rounded-sm hover:border-gold-400 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-navy-900/5 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors shrink-0">
                    <Calendar className="w-5 h-5 text-navy-900 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gold-600 font-semibold mb-0.5">
                      Event & Festival Enquiries
                    </p>
                    <p className="text-base text-navy-900 font-semibold">{academy.phoneAlt}</p>
                    <p className="text-xs text-navy-600/70 mt-0.5">
                      KKKV 2026, Temple Recitals, Arangetram & Cultural Bookings
                    </p>
                  </div>
                </a>

                {/* WhatsApp Chat Card */}
                <a
                  href={directWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 bg-white border border-ivory-200 rounded-sm hover:border-[#25D366]/60 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#25D366] font-semibold mb-0.5">
                      WhatsApp Quick Inquiry
                    </p>
                    <p className="text-base text-navy-900 font-semibold">Instant Response on WhatsApp</p>
                    <p className="text-xs text-navy-600/70 mt-0.5">
                      Click to chat with coordinator for trial class booking & syllabus
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${academy.email}&su=${encodeURIComponent("Inquiry - Suha Academy of Fine Arts")}`}
                  className="flex items-center gap-5 p-5 bg-white border border-ivory-200 rounded-sm hover:border-gold-400 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-navy-900/5 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors shrink-0">
                    <Mail className="w-5 h-5 text-navy-900 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gold-600 font-semibold mb-0.5">
                      Official Academy Email
                    </p>
                    <p className="text-sm text-navy-900 font-medium break-all">{academy.email}</p>
                    <p className="text-xs text-navy-600/70 mt-0.5">
                      For formal correspondence, syllabus & certification queries
                    </p>
                  </div>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-ivory-200">
                <p className="text-xs uppercase tracking-wider text-gold-600 font-semibold mb-3">
                  Official Channels & Media
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={academy.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs border border-red-200 text-red-700 bg-red-50/50 rounded-sm hover:bg-red-100/60 font-medium transition-colors"
                  >
                    YouTube Channel
                  </a>
                  <a
                    href={academy.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs border border-pink-200 text-pink-700 bg-pink-50/50 rounded-sm hover:bg-pink-100/60 font-medium transition-colors"
                  >
                    Instagram Profile
                  </a>
                  <a
                    href={academy.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs border border-blue-200 text-blue-700 bg-blue-50/50 rounded-sm hover:bg-blue-100/60 font-medium transition-colors"
                  >
                    Facebook Page
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Academy Headquarters & Visiting Guidelines Card */}
            <div className="bg-white border border-ivory-200 rounded-sm p-7 md:p-8 flex flex-col justify-between shadow-sm hover:border-gold-400 transition-all">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-ivory-200">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold-600" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-gold-600">
                      Academy Headquarters & Studios
                    </span>
                  </div>
                  <span className="text-[11px] bg-gold-50 text-gold-800 border border-gold-200/60 px-2 py-0.5 rounded-xs font-medium">
                    Main Campus
                  </span>
                </div>

                <h3 className="font-display text-xl text-navy-900 mb-2">
                  Suha Academy of Fine Arts
                </h3>
                <p className="text-xs text-navy-600 font-medium mb-4">
                  Founder & Artistic Director: Guru Smt. Ranjini Pradeep
                </p>

                <div className="bg-cream-50 p-4 rounded-sm border border-ivory-200 mb-6">
                  <p className="text-xs font-semibold text-navy-900 mb-1">Official Registered Address:</p>
                  <p className="text-xs text-navy-700 leading-relaxed font-sans">
                    {academy.address}
                  </p>
                </div>

                <div className="space-y-3.5 text-xs mb-6">
                  <div className="flex items-start gap-2.5 text-navy-800">
                    <Clock className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-900">Batch Schedule:</strong>
                      <p className="text-navy-700/80">Weekday &amp; Weekend Batches Available (Contact Admissions for Current Schedule)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-navy-800">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-900">In-Person Consultation:</strong>
                      <p className="text-navy-700/80">
                        Prospective students and parents can schedule an observation session with our gurus during weekend studio batches.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-navy-800">
                    <Globe className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-900">Accreditations & Affiliations:</strong>
                      <p className="text-navy-700/80">
                        MSME Registered ({academy.msmeUdyam}) & Graded Examination Center for Bridge Academy and recognized universities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-ivory-200 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(academy.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-navy-900 text-cream-50 text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-navy-800 transition-colors shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-gold-400" />
                  <span>Get Directions on Maps</span>
                </a>

                <a
                  href={directWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#1da851] transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Final CTA */}
      <section className="relative py-24 bg-navy-950 text-center text-cream-100">
        <div className="container-wide section-padding">
          <OrnamentDivider light className="mb-8" />
          <Reveal>
            <h2 className="text-display-md font-display text-cream-50 mb-3">
              Learn. Practise. Perform.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-cream-100/60 max-w-lg mx-auto mb-8 text-sm">
              Discover why families across Chennai trust Suha Academy for classical dance and music training.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-950 font-medium text-sm rounded-sm hover:bg-gold-400 transition-all duration-300 group shadow-md"
            >
              <span>Explore All Courses</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
