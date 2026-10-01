import { useState } from "react";
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
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { OrnamentDivider, MandalaWatermark } from "@/components/Decorations";
import EnquiryForm from "@/components/EnquiryForm";
import { academy } from "@/data/academy";

const branches = [
  {
    name: "Medavakkam Center",
    tag: "South Chennai Center",
    address: "Navins Starwood Towers, Vengaivasal Main Road, Medavakkam, Chennai – 600100",
    timing: "Friday Evenings (5:00 – 7:30 PM) & Saturday Mornings (9:30 AM – 12:30 PM)",
    landmark: "Opp. Global Hospital road junction, Navins Starwood Club",
    mapQuery: "Navins Starwood Towers Medavakkam Chennai",
    phone: academy.phone,
    whatsappText: "Hi Suha Academy, I would like to inquire about classes at the Medavakkam branch.",
  },
  {
    name: "Perumbakkam Center",
    tag: "KKKV 2026 Host Venue",
    address: "Ixora BHS Recreational Club, Bollineni Hillside, Perumbakkam, Chennai – 600126",
    timing: "Saturday Evenings (4:00 – 7:00 PM) & Sunday Mornings (9:00 AM – 1:00 PM)",
    landmark: "Inside Bollineni Hillside Gated Township, Ixora Recreational Club",
    mapQuery: "Bollineni Hillside Ixora Club Perumbakkam Chennai",
    phone: academy.phoneAlt,
    whatsappText: "Hi Suha Academy, I would like to inquire about classes at the Perumbakkam (Bollineni Hillside) branch.",
  },
  {
    name: "Old Perungalathur Center",
    tag: "Main Academy Campus (Estd. 2010)",
    address: "Near Railway Station, Old Perungalathur, Chennai – 600063",
    timing: "Weekday Evenings (Tue & Thu, 5:30 – 7:30 PM) & Sunday Repertoire Batches",
    landmark: "Walking distance from Perungalathur Railway Station & GST Road",
    mapQuery: "Suha Academy of Fine Arts Old Perungalathur Chennai",
    phone: academy.phoneAlt2,
    whatsappText: "Hi Suha Academy, I would like to inquire about classes at the Old Perungalathur main center.",
  },
  {
    name: "Global Online Academy",
    tag: "Worldwide Interactive Batches",
    address: "Live 1-on-1 & Small Batches via High-Definition Video",
    timing: "Timezone-coordinated slots for USA, UK, Singapore, UAE & Europe",
    landmark: "Dedicated digital studio with acoustic shruti & tala correction",
    mapQuery: "",
    phone: academy.phone,
    whatsappText: "Hi Suha Academy, I would like to inquire about Global Online classes for Bharatanatyam / Carnatic Vocal.",
  },
];

const contactFaqs = [
  {
    q: "Can children join without prior dance or vocal experience?",
    a: "Absolutely! We welcome young children from age 4 onwards into our Young Learners batch, where they learn foundational postures, basic rhythm (adavus), and devotional slokas in a warm, encouraging environment.",
  },
  {
    q: "Do you offer adult beginner batches for homemakers & working professionals?",
    a: "Yes. Many of our students are adults who are reconnecting with classical arts after a gap or beginning fresh. We have tailored adult batches designed with flexible schedules and supportive pacing.",
  },
  {
    q: "How are trial classes scheduled?",
    a: "You can book a trial consultation by calling or messaging us on WhatsApp. Our coordinator will match your schedule with the nearest center (Medavakkam, Perumbakkam, or Perungalathur) for a trial session with Guru Smt. Ranjini Pradeep.",
  },
  {
    q: "Are students prepared for certified examinations?",
    a: "Yes. Students are trained for structured graded examinations conducted in collaboration with Bridge Academy and accredited Music & Dance Universities, progressing from Grade 1 through Diploma and Arangetram.",
  },
];

export default function Contact() {
  const [selectedCenter, setSelectedCenter] = useState("Medavakkam");
  const [selectedCourse, setSelectedCourse] = useState("Bharatanatyam");
  const [studentAge, setStudentAge] = useState("Child (4–12 yrs)");

  const generateWhatsAppLink = () => {
    const text = `Hi Suha Academy, I would like to enroll / inquire about ${selectedCourse} at your ${selectedCenter} center for ${studentAge}. Please share batch timings and admission details.`;
    return `https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <PageHero
        eyebrow="Admissions & Locations"
        title="Begin Your Artistic Journey"
        subtitle="Connect with Suha Academy of Fine Arts to learn more about Bharatanatyam, Carnatic Vocal, Mohiniyattam, and KKKV registrations across our Chennai centers."
        image="/suha_media/suha_img_1.jpg"
        height="lg"
      />

      {/* Quick WhatsApp Inquiry Bar */}
      <section className="bg-white border-b border-ivory-200 py-6 shadow-xs">
        <div className="container-wide section-padding">
          <div className="bg-cream-50 p-6 md:p-8 rounded-sm border border-gold-500/25 max-w-4xl mx-auto shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-gold-600" />
              <h3 className="font-display text-base font-semibold text-navy-900">
                Quick WhatsApp Admission Inquiry Generator
              </h3>
            </div>
            <p className="text-xs text-navy-700/70 mb-5">
              Select your preferences below to launch a customized inquiry directly with our coordinator on WhatsApp:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-navy-600 font-semibold mb-1">
                  Nearest Center
                </label>
                <select
                  value={selectedCenter}
                  onChange={(e) => setSelectedCenter(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-ivory-300 rounded-sm text-navy-900 focus:border-gold-500 outline-none"
                >
                  <option value="Medavakkam (Navins Starwood)">Medavakkam (Navins Starwood)</option>
                  <option value="Perumbakkam (Bollineni Hillside)">Perumbakkam (Bollineni Hillside)</option>
                  <option value="Old Perungalathur (Main Campus)">Old Perungalathur (Main Campus)</option>
                  <option value="Global Online Academy">Global Online Academy</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-navy-600 font-semibold mb-1">
                  Classical Discipline
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-ivory-300 rounded-sm text-navy-900 focus:border-gold-500 outline-none"
                >
                  <option value="Bharatanatyam">Bharatanatyam</option>
                  <option value="Carnatic Vocal">Carnatic Vocal</option>
                  <option value="Mohiniyattam">Mohiniyattam</option>
                  <option value="Dual (Dance + Vocal)">Dual (Dance + Vocal)</option>
                  <option value="KKKV 2026 Participation">KKKV 2026 Participation</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-navy-600 font-semibold mb-1">
                  Student Category
                </label>
                <select
                  value={studentAge}
                  onChange={(e) => setStudentAge(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-ivory-300 rounded-sm text-navy-900 focus:border-gold-500 outline-none"
                >
                  <option value="Child Beginner (4–6 yrs)">Child Beginner (4–6 yrs)</option>
                  <option value="Junior Student (7–12 yrs)">Junior Student (7–12 yrs)</option>
                  <option value="Teenager (13–18 yrs)">Teenager (13–18 yrs)</option>
                  <option value="Adult Learner / Homemaker">Adult Learner / Homemaker</option>
                  <option value="Advanced / Arangetram Track">Advanced / Arangetram Track</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gold-500/20">
              <span className="text-xs text-navy-600/70">
                Direct phone: <strong className="text-navy-900">{academy.phone}</strong> &middot; Mon–Sun 9 AM – 8 PM
              </span>
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#1da851] transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Center Locations Grid */}
      <section className="relative py-20 md:py-28 bg-cream-50">
        <div className="container-wide section-padding">
          <SectionHeader
            number="01"
            eyebrow="Our Centers"
            title="Teaching Branches Across Chennai"
            subtitle="Choose the center most convenient for your family. All branches follow the disciplined curriculum of Guru Smt. Ranjini Pradeep."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
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
                        <span><strong>Batch Schedule:</strong> {b.timing}</span>
                      </div>
                      <div className="flex items-start gap-2 text-navy-700/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                        <span><strong>Landmark:</strong> {b.landmark}</span>
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

                    {b.mapQuery && (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.mapQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-navy-600 hover:text-navy-900 font-medium"
                      >
                        <Navigation className="w-3.5 h-3.5 text-navy-500" />
                        <span>Get Directions</span>
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reach Us & Send Enquiry Form */}
      <section className="relative py-24 md:py-32 bg-paper">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Info & Channels */}
            <div>
              <SectionHeader
                align="left"
                number="02"
                eyebrow="Reach Us Directly"
                title="Talk to Our Admissions Team"
                subtitle="Have questions regarding batch timings, fee structures, or age eligibility? We are here to guide you."
              />

              <div className="flex flex-col gap-4 mt-8">
                <a
                  href={`tel:${academy.phoneRaw}`}
                  className="flex items-center gap-5 p-5 bg-white border border-ivory-200 rounded-sm hover:border-gold-300 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-navy-900/5 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors">
                    <Phone className="w-5 h-5 text-navy-900 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gold-600 font-semibold mb-0.5">Primary Helpline</p>
                    <p className="text-base text-navy-900 font-medium">{academy.phone}</p>
                    <p className="text-xs text-navy-600/60 mt-0.5">
                      Alt numbers: {academy.phoneAlt} &middot; {academy.phoneAlt2}
                    </p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent(academy.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 bg-white border border-ivory-200 rounded-sm hover:border-gold-300 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gold-600 font-semibold mb-0.5">WhatsApp Inquiry</p>
                    <p className="text-base text-navy-900 font-medium">Instant Response</p>
                    <p className="text-xs text-navy-600/60 mt-0.5">Share student age and nearest branch for quick details</p>
                  </div>
                </a>

                <a
                  href={`mailto:${academy.email}`}
                  className="flex items-center gap-5 p-5 bg-white border border-ivory-200 rounded-sm hover:border-gold-300 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-navy-900/5 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors">
                    <Mail className="w-5 h-5 text-navy-900 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gold-600 font-semibold mb-0.5">Official Email</p>
                    <p className="text-sm text-navy-900 font-medium break-all">{academy.email}</p>
                  </div>
                </a>
              </div>

              {/* Official Social Channels */}
              <div className="mt-8 pt-6 border-t border-ivory-200">
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

            {/* Right: Enquiry Form Card */}
            <div>
              <SectionHeader
                align="left"
                number="03"
                eyebrow="Online Inquiry"
                title="Send an Enquiry"
                subtitle="Fill in the form below and our coordinator will connect with you within 24 hours."
              />

              <div className="mt-8 bg-white border border-ivory-200 rounded-sm p-8 shadow-sm">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions FAQ Accordion */}
      <section className="relative py-20 bg-cream-50 border-t border-ivory-200">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold">Common Queries</span>
              <h2 className="text-display-sm font-display text-navy-900 mt-1">Admissions Frequently Asked Questions</h2>
            </div>

            <div className="flex flex-col gap-4">
              {contactFaqs.map((faq, i) => (
                <details key={i} className="group bg-white border border-ivory-200 rounded-sm overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none select-none">
                    <span className="font-display text-base text-navy-900 font-medium">
                      {faq.q}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gold-500 shrink-0 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5 -mt-1 text-xs text-navy-700/80 leading-relaxed border-t border-ivory-100 pt-3">
                    {faq.a}
                  </div>
                </details>
              ))}
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
