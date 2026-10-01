import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { academy, navLinks } from "@/data/academy";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FAF7F2]/95 backdrop-blur-md border-b ${
          scrolled
            ? "border-gold-500/25 shadow-md shadow-navy-950/5 py-3"
            : "border-[#E7DECB]/80 py-3.5"
        }`}
      >
        {/* Subtle Top Gold Hairline Accent */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent pointer-events-none" />

        <nav className="container-wide section-padding flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link
            to="/"
            className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.01]"
            aria-label="Suha Academy Home"
          >
            <div className="relative p-[1.5px] rounded-full bg-gradient-to-tr from-gold-600 via-gold-300 to-gold-700 shadow-sm shrink-0">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-navy-950">
                <img
                  src={academy.logo}
                  alt="Suha Academy Official Emblem"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-[17px] font-semibold tracking-tight text-navy-950 group-hover:text-gold-700 transition-colors">
                Suha Academy
              </span>
              <span className="text-[9.5px] font-sans uppercase tracking-[0.28em] text-gold-700 font-semibold">
                Fine Arts
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`relative text-[13.5px] tracking-wide font-medium transition-all duration-200 py-1 flex flex-col items-center ${
                      active
                        ? "text-gold-700 font-semibold"
                        : "text-navy-900/80 hover:text-gold-700"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`h-[2px] bg-gradient-to-r from-gold-500 to-gold-600 rounded-full transition-all duration-300 mt-0.5 ${
                        active ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA (Clean Luxury 'Join Academy' without WhatsApp pill) */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-navy-950 to-navy-900 text-gold-300 text-xs uppercase tracking-wider font-semibold rounded-sm border border-gold-500/35 hover:bg-gold-500 hover:text-navy-950 hover:border-gold-500 hover:shadow-md transition-all duration-300 group"
            >
              <span>Join Academy</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 text-navy-900 hover:text-gold-700 transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Full-Screen Drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-navy-950/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`relative h-full flex flex-col items-center justify-center gap-3 transition-all duration-500 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <button
            className="absolute top-6 right-6 text-cream-100 p-2 hover:text-gold-300 transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Emblem & Academy Title */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-full overflow-hidden border border-gold-400/60 shadow-lg p-0.5 bg-navy-900">
              <img
                src={academy.logo}
                alt="Suha Academy Seal"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-left">
              <div className="font-serif text-cream-50 text-xl font-semibold">Suha Academy</div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-gold-300">
                Fine Arts
              </div>
            </div>
          </div>

          {/* Links */}
          <ul className="flex flex-col items-center gap-4 my-2">
            {navLinks.map((link, i) => (
              <li
                key={link.path}
                style={{
                  transitionDelay: menuOpen ? `${i * 50 + 150}ms` : "0ms",
                }}
                className={`transition-all duration-500 ${
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <Link
                  to={link.path}
                  className={`text-xl font-serif transition-colors ${
                    location.pathname === link.path
                      ? "text-gold-400 font-semibold"
                      : "text-cream-100/90 hover:text-gold-300"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Actions */}
          <div className="mt-6 flex flex-col gap-3 w-64">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-navy-950 font-medium text-xs uppercase tracking-wider rounded-sm hover:bg-gold-400 transition-colors shadow-md font-semibold"
            >
              <span>Join the Academy</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${academy.phoneRaw}`}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-cream-100/10 border border-cream-100/20 text-cream-100 text-xs font-medium rounded-sm hover:bg-cream-100/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Call Helpline: {academy.phone}</span>
            </a>
          </div>

          <div className="mt-4 text-center text-[11px] text-cream-100/50">
            <p>Medavakkam &middot; Perumbakkam &middot; Old Perungalathur</p>
          </div>
        </div>
      </div>
    </>
  );
}
