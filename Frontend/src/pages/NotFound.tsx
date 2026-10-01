import { Link } from "react-router-dom";
import { Home as HomeIcon } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/suha_media/suha_img_2.jpg"
          alt="Bharatanatyam dancer at night"
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
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-950 font-medium text-sm rounded-sm hover:bg-gold-400 transition-all duration-300"
        >
          <HomeIcon className="w-4 h-4" />
          Return Home
        </Link>
      </div>
    </section>
  );
}
