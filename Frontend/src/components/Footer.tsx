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
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-500/50 shadow-md">
                <img
                  src={academy.logo}
                  alt="Suha Academy Seal"
                  className="w-full h-full object-cover"
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

          {/* Contact & Locations */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-400 mb-5 font-medium">
              Contact & Centers
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${academy.phoneRaw}`}
                  className="inline-flex items-start gap-3 text-sm text-cream-100/70 hover:text-gold-300 transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    {academy.phone}
                    <span className="block text-xs text-cream-100/40">Alt: {academy.phoneAlt}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${academy.email}`}
                  className="inline-flex items-start gap-3 text-sm text-cream-100/70 hover:text-gold-300 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {academy.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-3 text-sm text-cream-100/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  {academy.location}
                  <span className="block text-[11px] text-gold-400/70 mt-1">
                    Old Perungalathur &middot; Medavakkam &middot; Perumbakkam
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
