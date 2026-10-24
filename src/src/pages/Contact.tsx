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
  Youtube,
  Instagram,
  Facebook,
  ArrowUpRight,
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
  "https://wa.me/919994883303?text=Hi%20Suha%20Academy%2C%20I%20would%20like%20to%20enroll%20%2F%20inquire%20about%20Bharathanatyam%20for%20Child%20(4%E2%80%9312%20yrs).%20Please%20share%20batch%20timings%20and%20admission%20details.";

export default function Contact() {
  return (
    <>
      <PageHero pageKey="contact" />



      {/* Reach Us Directly & Official Headquarters Section */}
      <section id="contact-form" className="relative py-20 md:py-28 bg-paper">
        <div className="container-wide section-padding">
          <SectionHeader
            number="02"
            eyebrow="Reach Us Directly"
            title="Talk to Our Admissions & Event Teams"
            
          />

          <div className="max-w-2xl mx-auto mt-12">
            {/* Direct Communication Channels */}
            <div className="flex flex-col justify-between space-y-6">
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
                      Event Enquiries
                    </p>
                    <p className="text-base text-navy-900 font-semibold">{academy.phoneAlt}</p>
                    
                  </div>
                </a>

                {/* Official Registered Address */}
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    "3rd Floor, Ixora Club House, BSCPL BOLLINENI HILLSIDE, Bollineni Hillside Road, Perumbakkam, Chennai, Tamil Nadu 600131"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 bg-white border border-ivory-200 rounded-sm hover:border-gold-400 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-navy-900/5 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors shrink-0">
                    <MapPin className="w-5 h-5 text-navy-900 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gold-600 font-semibold mb-0.5">
                      Official Registered Address:
                    </p>
                    <p className="text-xs text-navy-600/70 mt-0.5">
                      3rd Floor, Ixora Club House, BSCPL BOLLINENI HILLSIDE, Bollineni Hillside Road, Perumbakkam, Chennai, Tamil Nadu 600131
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
                
                  </div>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-5 border-t border-ivory-200">
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                    <p className="text-[11px] uppercase tracking-[0.2em] text-gold-700 font-bold">
                      Official Channels &amp; Media
                    </p>
                  </div>
                  <span className="text-[10px] text-navy-500 font-medium hidden sm:inline">Connect &amp; Follow</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {/* YouTube */}
                  <a
                    href={academy.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-white border border-ivory-200 rounded-sm hover:border-red-400/60 hover:bg-red-50/20 hover:shadow-xs transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                        <Youtube className="w-4 h-4 text-red-600 group-hover:text-white transition-colors" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-navy-950 truncate group-hover:text-red-700 transition-colors">
                          YouTube
                        </p>
                        <p className="text-[10px] text-navy-500 truncate">
                          Official Recitals
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-navy-400 group-hover:text-red-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
                  </a>

                  {/* Instagram */}
                  <a
                    href={academy.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-white border border-ivory-200 rounded-sm hover:border-pink-400/60 hover:bg-pink-50/20 hover:shadow-xs transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center shrink-0 border border-pink-100 group-hover:bg-gradient-to-tr group-hover:from-[#F58529] group-hover:via-[#DD2A7B] group-hover:to-[#8134AF] group-hover:text-white transition-colors duration-300">
                        <Instagram className="w-4 h-4 text-pink-600 group-hover:text-white transition-colors" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-navy-950 truncate group-hover:text-pink-700 transition-colors">
                          Instagram
                        </p>
                        <p className="text-[10px] text-navy-500 truncate">
                          @suha_academy
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-navy-400 group-hover:text-pink-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
                  </a>

                  {/* Facebook */}
                  <a
                    href={academy.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-white border border-ivory-200 rounded-sm hover:border-blue-400/60 hover:bg-blue-50/20 hover:shadow-xs transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-[#1877F2] group-hover:text-white transition-colors duration-300">
                        <Facebook className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-navy-950 truncate group-hover:text-blue-700 transition-colors">
                          Facebook
                        </p>
                        <p className="text-[10px] text-navy-500 truncate">
                          Suha Community
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-navy-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
                  </a>
                </div>
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
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-7 sm:py-3.5 bg-gradient-to-r from-gold-500 via-gold-400 to-amber-400 hover:from-gold-400 hover:to-amber-300 text-navy-950 font-semibold text-xs sm:text-sm tracking-wide rounded-md shadow-lg shadow-gold-500/25 transition-all duration-300 group hover:translate-y-[-1px] active:scale-[0.99] whitespace-nowrap"
              >
                <span>Explore All Courses</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1 text-navy-950" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
