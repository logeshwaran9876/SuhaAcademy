import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  MapPin,
  Calendar,
  Sparkles,
  Award,
  Users,
  BookOpen,
  Maximize2,
  Play,
  Youtube,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import FounderSection from "@/components/FounderSection";
import CourseCard from "@/components/CourseCard";
import { Reveal } from "@/components/Reveal";
import { FeatureList, VerticalTimeline } from "@/components/Timeline";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Gallery from "@/components/Gallery";
import { OrnamentDivider, MandalaWatermark, GoldFrame } from "@/components/Decorations";
import { academy } from "@/data/academy";
import { courses, studentGroups, whySuha } from "@/data/courses";
import { timeline, achievements } from "@/data/timeline";
import { photoStory, youtubeHighlights } from "@/data/gallery";
import EnquiryForm from "@/components/EnquiryForm";
import VideoModal from "@/components/VideoModal";
import { Lightbox } from "@/components/Lightbox";

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<{ id: string; title: string } | null>(null);
  const [posterLightboxOpen, setPosterLightboxOpen] = useState(false);

  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 1.5 Heritage & Admissions Bar below Hero (Crisp professional boundary, zero cloudy fog) */}
      <div className="bg-[#0D0709] border-y border-gold-500/20 py-3.5 px-4 text-cream-100/90 text-xs font-sans relative z-20">
        <div className="container-wide section-padding flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="font-medium text-gold-300">Admissions Open 2026–2027</span>
            <span className="text-cream-100/30 hidden md:inline">|</span>
            <span className="text-cream-100/70 hidden md:inline">
              Classical Dance & Carnatic Vocal Batches
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-5 text-[11px] text-cream-100/70">
            <span className="flex items-center gap-1.5">
              <span className="text-gold-400">✦</span> Bharatanatyam
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-gold-400">✦</span> Carnatic Vocal
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-gold-400">✦</span> Mohiniyattam
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-gold-400">✦</span> Saraswathi Veena
            </span>
          </div>
          <div className="flex items-center gap-2 text-gold-300/80 text-[11px]">
            <span>Medavakkam &bull; Perumbakkam &bull; Old Perungalathur</span>
          </div>
        </div>
      </div>

      {/* 2. Academy Introduction */}
      <section className="relative py-24 md:py-32 bg-cream-50 overflow-hidden">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Image */}
            <Reveal className="relative order-2 lg:order-1">
              <div className="relative max-w-lg mx-auto lg:mx-0">
                <div className="absolute -inset-3 border border-gold-500/15 rounded-sm pointer-events-none" />
                <div className="relative overflow-hidden rounded-sm bg-navy-950 shadow-2xl">
                  <img
                    src="/suha_media/suha_img_3.jpg"
                    alt="Suha Academy dancers in classical attire displaying traditional mudras"
                    loading="lazy"
                    className="w-full h-[560px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
                  <GoldFrame />

                  {/* Floating Heritage Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-[#0B0609]/90 backdrop-blur-md border border-gold-400/30 text-cream-100 flex items-center gap-3 shadow-xl">
                    <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400 shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold">Estd. 2010 • 15+ Years</p>
                      <p className="text-xs text-cream-100/80">Nurturing classical excellence across Chennai</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <Reveal>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-serif italic text-gold-500/60">01</span>
                  <div className="h-px w-8 bg-gold-500/40" />
                  <span className="eyebrow">Introduction</span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="text-display-md md:text-display-lg font-display font-medium text-navy-900 mb-6">
                  Rooted in Tradition.
                  <br />
                  <span className="italic text-gold-700">Shaped for the Stage.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="space-y-4 text-navy-800/80 leading-relaxed">
                  <p>
                    Suha Academy of Fine Arts is a Chennai-based classical arts
                    academy dedicated to Bharatanatyam and Carnatic Music training.
                  </p>
                  <p>
                    Founded in {academy.established}, the academy provides students
                    with opportunities to learn, practise, perform and participate
                    in cultural events.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                {/* Impact Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-7 p-4 bg-white/80 border border-ivory-200 rounded-sm">
                  <div className="text-center p-2">
                    <p className="font-display text-2xl font-bold text-navy-900">15+</p>
                    <p className="text-[11px] text-navy-700/60 uppercase tracking-wider mt-0.5">Years Legacy</p>
                  </div>
                  <div className="text-center p-2 border-l border-ivory-200">
                    <p className="font-display text-2xl font-bold text-gold-600">600+</p>
                    <p className="text-[11px] text-navy-700/60 uppercase tracking-wider mt-0.5">Disciples</p>
                  </div>
                  <div className="text-center p-2 border-l border-ivory-200">
                    <p className="font-display text-2xl font-bold text-navy-900">4</p>
                    <p className="text-[11px] text-navy-700/60 uppercase tracking-wider mt-0.5">Centers</p>
                  </div>
                  <div className="text-center p-2 border-l border-ivory-200">
                    <p className="font-display text-2xl font-bold text-gold-600">8+</p>
                    <p className="text-[11px] text-navy-700/60 uppercase tracking-wider mt-0.5">KKKV Festivals</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "Disciplined Learning",
                    "Classical Foundations",
                    "Performance Exposure",
                    "Cultural Appreciation",
                    "Student Confidence",
                    "Stage Experience",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-navy-800"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-gold-600 transition-colors duration-300 group"
                >
                  Discover Suha Academy
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Courses */}
      <section className="relative py-24 md:py-32 bg-paper overflow-hidden">
        <div className="absolute right-0 top-1/4 w-72 h-72 text-gold-500/[0.04] pointer-events-none hidden md:block">
          <MandalaWatermark className="w-full h-full" />
        </div>

        <div className="container-wide section-padding relative z-10">
          <SectionHeader
            number="02"
            eyebrow="What We Teach"
            title="Learn the Classical Arts"
            subtitle="Structured training in Bharatanatyam and Carnatic Music, guided by tradition and designed for the stage."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto mt-14">
            {courses.map((course, i) => (
              <CourseCard key={course.slug} course={course} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Reveal>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold-500/50 text-navy-900 font-medium text-sm rounded-sm hover:border-gold-500 hover:bg-gold-50 transition-all duration-300 group"
              >
                View All Courses
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Founder */}
      <FounderSection />

      {/* 5. Why Suha Academy */}
      <section className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
        <div className="absolute left-0 bottom-0 w-80 h-80 text-gold-400/[0.05] pointer-events-none">
          <MandalaWatermark className="w-full h-full" />
        </div>

        <div className="container-wide section-padding relative z-10">
          <SectionHeader
            light
            number="04"
            eyebrow="Why Suha Academy"
            title="More Than a Class. A Cultural Journey."
            subtitle="A learning experience that goes beyond technique — building character, confidence and cultural connection."
          />

          <div className="mt-14">
            <FeatureList features={whySuha} light />
          </div>
        </div>
      </section>

      {/* 6. Student Journey / Class Groups */}
      <section className="relative py-24 md:py-32 bg-cream-50 overflow-hidden">
        <div className="container-wide section-padding">
          <SectionHeader
            number="05"
            eyebrow="Every Stage"
            title="A Place to Learn at Every Stage"
            subtitle="From young children to adults — programs tailored to age, level and learning goals."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-14">
            {studentGroups.map((group, i) => (
              <Reveal
                key={group.title}
                delay={i * 0.08}
                className="p-6 bg-white/70 border border-ivory-200 rounded-sm text-center transition-all duration-500 hover:border-gold-300 hover:shadow-lg hover:shadow-navy-900/5 group"
              >
                <div className="w-12 h-12 rounded-full bg-navy-900/5 flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-gold-500/10">
                  {group.icon === "Flower2" && <span className="text-xl">✿</span>}
                  {group.icon === "BookOpen" && <span className="text-xl">📖</span>}
                  {group.icon === "Star" && <span className="text-xl">★</span>}
                  {group.icon === "GraduationCap" && <span className="text-xl">🎓</span>}
                  {group.icon === "Users" && <span className="text-xl">👥</span>}
                </div>
                <h3 className="text-sm font-display font-medium text-navy-900 mb-2">
                  {group.title}
                </h3>
                <p className="text-xs text-navy-700/60 leading-relaxed">
                  {group.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p className="text-center text-sm text-navy-700/60 italic mt-10 max-w-lg mx-auto">
              Programs and batch structures can be tailored according to age,
              level and learning goals.
            </p>
          </Reveal>

          <div className="text-center mt-8">
            <Reveal delay={0.4}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy-900 text-cream-100 font-medium text-sm rounded-sm hover:bg-navy-800 transition-all duration-300 group"
              >
                Ask About Batches
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. KKKV Feature */}
      <section className="relative py-24 md:py-32 bg-navy-900 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/suha_media/suha_img_1.jpg"
            alt="Suha Academy classical Bharatanatyam stage performance"
            loading="lazy"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/60" />
        </div>

        <div className="container-wide section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-serif italic text-gold-400/60">06</span>
                  <div className="h-px w-8 bg-gold-400/40" />
                  <span className="eyebrow text-gold-300">Signature Event</span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="text-display-lg font-display font-medium text-cream-50 mb-2">
                  Kodai Kaala Kalai Vizha
                </h2>
                <p className="font-serif text-xl text-gold-300 italic mb-6">
                  KKKV — The Classical Faceoff
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-cream-100/70 leading-relaxed mb-8 max-w-lg">
                  Suha Academy's Kodai Kaala Kalai Vizha is a recurring classical
                  arts competition and cultural event centred on Bharatanatyam and
                  Carnatic Music.
                </p>
              </Reveal>

              {/* 2026 Feature */}
              <Reveal delay={0.3}>
                <div className="bg-navy-950/50 border border-gold-400/20 rounded-sm p-6 mb-8 max-w-lg">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold-300 mb-2">
                    KKKV 2026
                  </p>
                  <p className="font-display text-2xl text-cream-50 mb-3">
                    The Classical Faceoff
                  </p>
                  <p className="text-sm text-cream-100/60 mb-4">
                    Two days of music, movement and classical expression.
                  </p>
                  <div className="flex flex-col gap-2 text-sm text-cream-100/80">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gold-400" />
                      13–14 June 2026
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold-400" />
                      Bollineni Ixora, Perumbakkam, Chennai
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/events/kkkv-2026"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold-500 text-navy-950 font-medium text-sm rounded-sm hover:bg-gold-400 transition-all duration-300 group"
                  >
                    Explore KKKV
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/events"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-cream-100/30 text-cream-50 font-medium text-sm rounded-sm hover:border-gold-400 transition-all duration-300"
                  >
                    View Event Archive
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Poster image with Interactive Lightbox Zoom */}
            <Reveal delay={0.2} className="relative">
              <div className="relative max-w-sm mx-auto group">
                <div className="absolute -inset-3 border border-gold-400/25 rounded-sm pointer-events-none" />
                <div className="relative overflow-hidden rounded-sm bg-navy-950 shadow-2xl cursor-pointer" onClick={() => setPosterLightboxOpen(true)}>
                  <img
                    src="/suha_media/kodai-kalaai-vizha-2026.jpg"
                    alt="Official KKKV 2026 The Classical Faceoff Poster"
                    loading="lazy"
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-navy-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-navy-950/90 text-gold-300 text-xs font-medium rounded-sm border border-gold-400/40 flex items-center gap-2 shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" /> Click to Inspect Full Poster
                    </span>
                  </div>
                </div>
                <p className="text-center text-xs text-cream-100/50 mt-3 flex items-center justify-center gap-1.5">
                  <span>✦</span> Official Schedule: 13–14 June 2026 @ Bollineni Ixora
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. Event Timeline */}
      <section className="relative py-24 md:py-32 bg-cream-50 overflow-hidden">
        <div className="container-wide section-padding">
          <SectionHeader
            number="07"
            eyebrow="Through the Years"
            title="A Journey of Events"
            subtitle="From the first KKKV in 2019 to The Classical Faceoff in 2026."
          />

          <div className="max-w-4xl mx-auto mt-16">
            <VerticalTimeline items={timeline} />
          </div>
        </div>
      </section>

      {/* 9. Photo Story */}
      <section className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
        <div className="container-wide section-padding">
          <SectionHeader
            light
            number="08"
            eyebrow="Photo Story"
            title="Moments That Become Memories"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {photoStory.map((photo, i) => (
              <Reveal key={i} delay={i * 0.15} className="group">
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-display text-2xl text-gold-300 mb-2">
                      {photo.caption}
                    </p>
                    <p className="text-sm text-cream-100/60">
                      {photo.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Reveal>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-sm font-medium text-gold-300 hover:text-gold-200 transition-colors duration-300 group"
              >
                View All Photos
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Video Highlights Showcase */}
      <section className="relative py-24 md:py-32 bg-paper overflow-hidden">
        <div className="container-wide section-padding">
          <SectionHeader
            number="09"
            eyebrow="Stage & Arangetram Highlights"
            title="Performances in Motion"
            subtitle="Glimpses from Suha Academy's Annual Days, Arangetrams, and classical concerts on our official YouTube channel."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {youtubeHighlights.slice(0, 4).map((video, i) => (
              <Reveal key={video.id} delay={i * 0.1}>
                <button
                  type="button"
                  onClick={() => setActiveVideo({ id: video.id, title: video.title })}
                  className="group block w-full text-left bg-white border border-ivory-200 rounded-sm overflow-hidden hover:border-gold-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden bg-navy-950">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy-950/30 group-hover:bg-navy-950/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 text-[10px] bg-navy-950/80 text-gold-300 rounded font-medium">
                      {video.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-sm font-medium text-navy-900 line-clamp-2 mb-2 group-hover:text-gold-700 transition-colors">
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-navy-600/60 font-medium">
                      <Play className="w-3.5 h-3.5 text-red-500 fill-current" />
                      <span>Play Video Recital</span>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Reveal>
              <a
                href={academy.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-red-600 text-white font-medium text-sm rounded-sm hover:bg-red-700 transition-colors shadow-md"
              >
                <Youtube className="w-4 h-4" />
                Visit Official YouTube Channel
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 10. Testimonials */}
      <section className="relative py-24 md:py-32 bg-cream-50 overflow-hidden">
        <div className="container-wide section-padding">
          <SectionHeader
            number="09"
            eyebrow="Voices"
            title="What Families Say"
            subtitle="Experiences shared by parents, students and participants."
          />

          <div className="mt-14">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* 11. Gallery Preview */}
      <section className="relative py-24 md:py-32 bg-paper overflow-hidden">
        <div className="container-wide section-padding">
          <SectionHeader
            number="10"
            eyebrow="Gallery"
            title="Moments from the Journey"
            subtitle="A glimpse of performances, practice and celebration."
          />

          <div className="mt-14">
            <Gallery limit={8} showFilters={false} />
          </div>

          <div className="text-center mt-12">
            <Reveal>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold-500/50 text-navy-900 font-medium text-sm rounded-sm hover:border-gold-500 hover:bg-gold-50 transition-all duration-300 group"
              >
                View Gallery
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 12. Achievements */}
      <section className="relative py-24 md:py-32 bg-cream-50 overflow-hidden">
        <div className="container-wide section-padding">
          <SectionHeader
            number="11"
            eyebrow="Milestones"
            title="A Journey of Learning & Performance"
            subtitle="Evidence of commitment to classical arts education and performance."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 max-w-6xl mx-auto">
            {achievements.map((item, i) => (
              <Reveal
                key={item.label}
                delay={i * 0.1}
                className="h-full"
              >
                <div className="h-full p-8 bg-white border border-ivory-200 rounded-sm text-center flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:border-gold-400 hover:-translate-y-1">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-gold-700 font-semibold mb-2">
                      {item.label}
                    </p>
                    <p className="font-display text-lg sm:text-xl font-medium text-navy-950">
                      {item.value}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <OrnamentDivider className="mt-14" />
          </Reveal>
        </div>
      </section>

      {/* 13. Final CTA */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <img
            src="/suha_media/banner.jpg"
            alt="Suha Academy of Fine Arts Official Brand Banner"
            loading="lazy"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/75 to-navy-950/95" />
        </div>

        <div className="relative z-10 container-wide section-padding text-center">
          <Reveal>
            <p className="eyebrow text-gold-300 mb-5">Begin</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-display-lg md:text-display-xl font-display font-medium text-cream-50 mb-6 text-shadow-lg">
              Your Artistic Journey
              <br />
              <span className="italic text-gold-300">Starts Here.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base md:text-lg text-cream-100/70 max-w-xl mx-auto leading-relaxed mb-10">
              Discover Bharatanatyam and Carnatic Music through structured
              learning, practice and performance.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-navy-950 font-medium text-sm tracking-wide rounded-sm transition-all duration-300 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/30 active:scale-[0.98] group"
              >
                Join the Academy
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream-100/30 text-cream-50 font-medium text-sm tracking-wide rounded-sm transition-all duration-300 hover:border-gold-400 hover:text-gold-300"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 14. Contact */}
      <section id="contact" className="relative py-24 md:py-32 bg-cream-50 overflow-hidden">
        <div className="container-wide section-padding">
          <SectionHeader
            number="12"
            eyebrow="Get in Touch"
            title="Begin Your Artistic Journey"
            subtitle="Interested in Bharatanatyam or Carnatic Music? Connect with Suha Academy of Fine Arts to learn more about classes, batches and upcoming programmes."
          />

          <div className="grid lg:grid-cols-2 gap-12 mt-14">
            {/* Contact info */}
            <div className="flex flex-col gap-6">
              <Reveal>
                <a
                  href={`tel:${academy.phoneRaw}`}
                  className="flex items-center gap-4 p-6 bg-white border border-ivory-200 rounded-sm hover:border-gold-300 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-navy-900/5 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors">
                    <Phone className="w-5 h-5 text-navy-900 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gold-600 mb-1">Call</p>
                    <p className="text-navy-900 font-medium">{academy.phone}</p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex items-center gap-4 p-6 bg-white border border-ivory-200 rounded-sm">
                  <div className="w-12 h-12 rounded-full bg-navy-900/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-navy-900" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gold-600 mb-1">Location</p>
                    <p className="text-navy-900 font-medium">{academy.locationShort}</p>
                    <p className="text-xs text-navy-600/40 italic mt-1">{academy.locationNote}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent(academy.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-medium text-sm rounded-sm hover:bg-[#1da851] transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${academy.email}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy-900 text-cream-100 font-medium text-sm rounded-sm hover:bg-navy-800 transition-colors"
                  >
                    Email Us
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Enquiry form */}
            <Reveal delay={0.15}>
              <div className="bg-white border border-ivory-200 rounded-sm p-8">
                <h3 className="text-lg font-display font-medium text-navy-900 mb-1">
                  Send an Enquiry
                </h3>
                <p className="text-sm text-navy-700/60 mb-6">
                  Fill in the form and we'll get back to you.
                </p>
                <EnquiryForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      <VideoModal
        videoId={activeVideo?.id || null}
        title={activeVideo?.title}
        onClose={() => setActiveVideo(null)}
      />

      {/* Full Poster Lightbox */}
      <Lightbox
        images={[
          {
            src: "/suha_media/kodai-kalaai-vizha-2026.jpg",
            alt: "KKKV 2026 Official Poster",
            title: "KKKV 2026 — The Classical Faceoff",
            category: "Official Festival Poster",
            year: "2026",
            source: "Suha Academy Archive",
            permissionRequired: false,
          },
        ]}
        index={posterLightboxOpen ? 0 : null}
        onClose={() => setPosterLightboxOpen(false)}
        onNavigate={() => {}}
      />
    </>
  );
}

