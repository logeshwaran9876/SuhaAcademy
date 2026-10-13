import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { academy, navLinks } from "@/data/academy";
import { OrnamentDivider } from "./Decorations";

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 text-cream-100 overflow-hidden">
      {/* Subtle watermark */}
      <div className="absolute -right-20 top-0 w-80 h-80 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-gold-400" aria-hidden="true">
          <g stroke="currentColor" strokeWidth="0.5">
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="70" />
            <circle cx="100" cy="100" r="50" />
            <circle cx="100" cy="100" r="30" />
          </g>
        </svg>
      </div>

      <div className="container-wide section-padding pt-20 pb-10 relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative shrink-0">
                <img
                  src={academy.logo}
                  alt="Suha Academy Seal"
                  className="w-12 h-12 object-contain drop-shadow-md"
                />
              </div>
              <div>
                <div className="font-display text-lg text-cream-50">
                  Suha Academy
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold-300">
                  Fine Arts
                </div>
              </div>
            </div>
            <p className="text-sm text-cream-100/60 leading-relaxed mb-2">
              {academy.tagline}
            </p>
            <p className="text-sm text-gold-300/80 font-serif italic mb-3">
              Preserving tradition. Inspiring expression.
            </p>
            <p className="text-xs text-cream-100/40">
              Founder & Artistic Director: <span className="text-cream-100/80">{academy.founder}</span>
            </p>

            {/* MSME Govt Recognition Badge */}
            <div className="mt-5 pt-4 border-t border-cream-100/10 flex items-center gap-3">
              <img
                src={academy.msmeLogo}
                alt="Government of India MSME"
                className="h-12 w-12 object-contain shrink-0"
              />
              <div className="text-[11px] text-cream-100/70 leading-tight min-w-0">
                <span className="text-gold-300 font-medium block whitespace-nowrap">
                  Govt. of India MSME Regd.
                </span>
                <span className="text-[10px] text-cream-100/60 block mt-1.5 whitespace-nowrap tracking-tight">
                  UDYAM Reg. No.: {academy.msmeUdyam}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-400 mb-5 font-medium">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-cream-100/70 hover:text-gold-300 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-400 mb-5 font-medium">
              Connect & Media
            </h4>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href={academy.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-cream-100/70 hover:text-gold-300 transition-colors duration-300 group"
              >
                <span className="w-9 h-9 rounded-full border border-cream-100/15 flex items-center justify-center group-hover:border-gold-400/40 transition-colors">
                  <Youtube className="w-4 h-4 text-red-500" />
                </span>
                YouTube Channel
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={academy.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-cream-100/70 hover:text-gold-300 transition-colors duration-300 group"
              >
                <span className="w-9 h-9 rounded-full border border-cream-100/15 flex items-center justify-center group-hover:border-gold-400/40 transition-colors">
                  <Instagram className="w-4 h-4 text-pink-400" />
                </span>
                Instagram
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={academy.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-cream-100/70 hover:text-gold-300 transition-colors duration-300 group"
              >
                <span className="w-9 h-9 rounded-full border border-cream-100/15 flex items-center justify-center group-hover:border-gold-400/40 transition-colors">
                  <Facebook className="w-4 h-4 text-blue-400" />
                </span>
                Facebook
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Contact & Centers */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-400 mb-5 font-medium">
              Contact & Centers
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href={`tel:${academy.phoneRaw}`}
                  className="inline-flex items-start gap-3 text-sm text-cream-100/80 hover:text-gold-300 transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-400" />
                  <span>
                    <span className="block text-cream-50 font-medium">{academy.phone}</span>
                    <span className="block text-[11px] text-cream-100/50">Admission Enquiries</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${academy.phoneAltRaw}`}
                  className="inline-flex items-start gap-3 text-sm text-cream-100/80 hover:text-gold-300 transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-400/80" />
                  <span>
                    <span className="block text-cream-50 font-medium">{academy.phoneAlt}</span>
                    <span className="block text-[11px] text-cream-100/50">Event Enquiries</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(academy.email)}&su=${encodeURIComponent("Inquiry - Suha Academy of Fine Arts")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] text-cream-100/70 hover:text-gold-300 transition-colors whitespace-nowrap"
                  title="Open in Gmail"
                >
                  <Mail className="w-4 h-4 shrink-0 text-gold-400" />
                  <span className="whitespace-nowrap tracking-tight">{academy.email}</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-3 text-xs text-cream-100/70 leading-relaxed pt-1 border-t border-cream-100/10">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-400" />
                <span>
                  <strong className="block text-cream-50 font-medium text-xs mb-0.5">
                    3rd Floor, Ixora Club House
                  </strong>
                  BSCPL BOLLINENI HILLSIDE, Bollineni Hillside Road, Perumbakkam, Chennai, Tamil Nadu 600131
                  <span className="block text-[11px] text-gold-400/80 mt-1">
                    Centers: Perumbakkam &middot; Medavakkam
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 mb-6">
          <OrnamentDivider light />
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream-100/40">
          <p>
            &copy; 2026 Suha Academy of Fine Arts. All rights reserved.
          </p>
          <p className="text-cream-100/30">
            Established {academy.established} &middot; Chennai, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}
