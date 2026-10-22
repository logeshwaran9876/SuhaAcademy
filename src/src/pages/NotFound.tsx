import { Link } from "react-router-dom";
import { Home as HomeIcon } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/suha_media/shared/shared_media_asset_17.jpg"
          alt="Bharathanatyam dancer at night"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-navy-950/80" />
      </div>

      <div className="relative z-10 text-center px-6">
        <p className="font-display text-7xl md:text-9xl text-gold-500/30 mb-4">404</p>
        <h1 className="text-display-md font-display text-cream-50 mb-4">
          Page Not Found
        </h1>
        <p className="text-cream-100/60 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has moved. Let's guide you
          back to the academy.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-7 sm:py-3.5 bg-gradient-to-r from-gold-500 via-gold-400 to-amber-400 hover:from-gold-400 hover:to-amber-300 text-navy-950 font-semibold text-xs sm:text-sm tracking-wide rounded-md shadow-lg shadow-gold-500/25 transition-all duration-300"
          >
            <HomeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
