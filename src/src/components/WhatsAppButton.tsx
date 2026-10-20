import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { academy } from "@/data/academy";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = `https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent(
    academy.whatsappMessage
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/40 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
    </a>
  );
}
