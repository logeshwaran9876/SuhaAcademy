import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Courses from "@/pages/Courses";
import CourseDetail from "@/pages/CourseDetail";
import Journey from "@/pages/Journey";
import Events from "@/pages/Events";
import EventDetails from "@/pages/EventDetails";
import GalleryPage from "@/pages/GalleryPage";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import NotFound from "@/pages/NotFound";

interface MetaConfig {
  title: string;
  description: string;
  path: string;
}

const pageMetas: MetaConfig[] = [
  {
    path: "/",
    title: "Suha Academy of Fine Arts | Bharatanatyam & Carnatic Music, Chennai",
    description:
      "Suha Academy of Fine Arts is a Chennai-based classical arts academy offering Bharatanatyam dance and Carnatic music training. Established 2010 by Smt. Ranjini Pradeep.",
  },
  {
    path: "/about",
    title: "About | Suha Academy of Fine Arts",
    description:
      "Learn about Suha Academy of Fine Arts — a Chennai-based classical arts academy founded in 2010, dedicated to Bharatanatyam and Carnatic Music education.",
  },
  {
    path: "/courses",
    title: "Courses | Suha Academy of Fine Arts",
    description:
      "Explore Bharatanatyam and Carnatic Vocal courses at Suha Academy. Structured classical arts training for all ages in Chennai.",
  },
  {
    path: "/courses/bharatanatyam",
    title: "Bharatanatyam Classes in Chennai | Suha Academy",
    description:
      "Learn Bharatanatyam at Suha Academy — from Pushpanjali to Thillana. Traditional classical dance training in Chennai for all ages.",
  },
  {
    path: "/courses/carnatic-music",
    title: "Carnatic Music Classes in Chennai | Suha Academy",
    description:
      "Learn Carnatic Vocal at Suha Academy — Keerthanam, Varnam, Bhajans, Aalapanai and more. Classical music training in Chennai.",
  },
  {
    path: "/journey",
    title: "Our Journey | Suha Academy of Fine Arts",
    description:
      "From establishment in 2010 to KKKV 2026 — explore the milestones and history of Suha Academy of Fine Arts.",
  },
  {
    path: "/events",
    title: "Events & KKKV Archive | Suha Academy of Fine Arts",
    description:
      "Kodai Kaala Kalai Vizha and other academy events — from 2019 to 2026. Classical music and dance competitions in Chennai.",
  },
  {
    path: "/gallery",
    title: "Gallery | Suha Academy of Fine Arts",
    description:
      "Photos of Bharatanatyam performances, Carnatic music sessions, KKKV events and student achievements at Suha Academy.",
  },
  {
    path: "/testimonials",
    title: "Testimonials | Suha Academy of Fine Arts",
    description:
      "Read what parents, students and KKKV participants say about Suha Academy of Fine Arts.",
  },
  {
    path: "/contact",
    title: "Contact | Suha Academy of Fine Arts",
    description:
      "Contact Suha Academy of Fine Arts for Bharatanatyam and Carnatic Music classes in Old Perungalathur, Chennai. Call +91 98846 44298.",
  },
  {
    path: "/faq",
    title: "FAQ | Suha Academy of Fine Arts",
    description:
      "Frequently asked questions about Suha Academy courses, batches, events and enrolment.",
  },
];

function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta =
      pageMetas.find((m) => m.path === pathname) ||
      pageMetas.find((m) => pathname.startsWith(m.path + "/"));

    const title = meta?.title || "Suha Academy of Fine Arts";
    const description = meta?.description || pageMetas[0].description;

    document.title = title;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://suhaacademy.in${pathname}`);
  }, [pathname]);
}

// Inject structured data once
function useStructuredData() {
  useEffect(() => {
    const existing = document.getElementById("ld-json-schema");
    if (existing) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Suha Academy of Fine Arts",
      description:
        "Chennai-based classical arts academy offering Bharatanatyam dance and Carnatic music training. Established 2010.",
      foundingDate: "2010",
      founder: {
        "@type": "Person",
        name: "Smt. Ranjini Pradeep",
      },
      telephone: "+91 98846 44298",
      email: "suhaacademychennai@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Old Perungalathur, Chennai",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.instagram.com/suha_academy/",
        "https://www.facebook.com/suhaacademy/",
      ],
      knowsAbout: ["Bharatanatyam", "Carnatic Music", "Classical Indian Dance"],
    };

    const script = document.createElement("script");
    script.id = "ld-json-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }, []);
}

function App() {
  usePageMeta();
  useStructuredData();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route
            path="/courses/bharatanatyam"
            element={<CourseDetail slug="bharatanatyam" />}
          />
          <Route
            path="/courses/carnatic-music"
            element={<CourseDetail slug="carnatic-music" />}
          />
          <Route
            path="/courses/special-workshops"
            element={<CourseDetail slug="special-workshops" />}
          />
          <Route path="/journey" element={<Journey />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetails />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
