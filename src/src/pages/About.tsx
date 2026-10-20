import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Award,
  Users,
  MapPin,
  Calendar,
  Globe,
  Heart,
  Music,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import FounderSection from "@/components/FounderSection";
import { Reveal } from "@/components/Reveal";
import { OrnamentDivider, MandalaWatermark, GoldFrame } from "@/components/Decorations";
import { academy, faculty } from "@/data/academy";

export default function About() {
  const distinguishedGuests = [
    { name: "Dr. Nithyashree Mahadevan", role: "Eminent Carnatic Vocalist" },
    { name: "Smt. Mahathi", role: "Carnatic Vocalist & Playback Singer" },
    { name: "Anand Aravindakshan", role: "Playback Singer & Title Winner" },
    { name: "Sriram & Roshini", role: "Playback Singers" },
    { name: "Smt. Divyasena", role: "Bharatanatyam Exponent & Guru" },
    { name: "Smt. Srekala Bharath", role: "Kalaimamani Bharatanatyam Guru" },
    { name: "Sri Narendra Kumar", role: "Classical Dancer & Choreographer" },
    { name: "Sri Shivakumar", role: "Classical Dancer" },
    { name: "Dr. Udaykumar", role: "Cultural Scholar & Dignitary" },
    { name: "Amit Bhargav", role: "Prominent Actor & Media Personality" },
    { name: "MGR Latha", role: "Veteran Actress & Classical Patron" },
    { name: "Sadhagaparavaigal Sankar & Bharanidaran", role: "Renowned Music Ensembles" },
  ];

  const milestones = [
    {
      year: "2010",
      title: "The Humble Inception",
      desc: "Founded in Chennai by Smt. Ranjini Pradeep with just two neighbourhood students, named in honour of her parents Subhashini & Hariharan.",
      badge: "Foundation",
    },
    {
      year: "2012",
      title: "First Disciples Arangetram",
      desc: "Two disciples presented their Bharatanatyam Arangetram in the esteemed presence of Ranjini’s Paramaguru, Smt. Chithra Muralidharan.",
      badge: "Debut Milestone",
    },
    {
      year: "2012–2014",
      title: "Hyderabad Chapter & Salanga Poojas",
      desc: "Ranjini served as Dance Teacher at Silver Oaks International School, Bachupally, sustaining online/offline learning and guiding 4 disciples through Salanga Pooja.",
      badge: "Expansion",
    },
    {
      year: "2014–2019",
      title: "Chennai Growth & KKKV Launch",
      desc: "Resumed full-scale training in Chennai with Anna Nagar & Tambaram centres (~100 students). Inauguration of Kodai Kaala Kalai Vizha (KKKV) state-level competition.",
      badge: "Signature Festival",
    },
    {
      year: "2020–2025",
      title: "Post-Pandemic Thriving Community",
      desc: "Consolidated premier centres in Vengaivasal–Medavakkam and Bollineni Hills–Perumbakkam, expanding to 160+ active disciples, 25 Salanga Poojas, and 6 Arangetrams.",
      badge: "160+ Disciples",
    },
    {
      year: "2026",
      title: "International Artistic Footprint",
      desc: "Artistic outreach extended beyond Indian shores, with Suha Academy students and cultural programmes reaching stages in Singapore and Malaysia.",
      badge: "Global Stages",
    },
  ];

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero pageKey="about" />

      {/* 2. Overview / Mission */}
      <section id="overview" className="relative py-24 md:py-32 bg-cream-50 overflow-hidden">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Visual Column - Always visible immediately on load */}
            <div className="relative">
              <div className="relative max-w-lg mx-auto lg:mx-0">
                <div className="absolute -inset-3 border border-gold-500/15 rounded-sm pointer-events-none" />
                <div className="relative overflow-hidden rounded-sm bg-navy-950 shadow-2xl">
                  <img
                    src="/suha_media/about/about_heritage_gurukulam_01.jpg"
                    alt="Classical Bharatanatyam discipline at Suha Academy of Fine Arts"
                    {...{ fetchpriority: "high" }}
                    className="w-full h-[540px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />
                  <GoldFrame />

                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-[#0B0609]/90 backdrop-blur-md border border-gold-400/30 text-cream-100 flex items-center gap-3 shadow-xl">
                    <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400 shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold">
                        Estd. 2010 • 160+ Students
                      </p>
                      <p className="text-xs text-cream-100/80">
                        Medavakkam & Perumbakkam, Chennai
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold-500/40" />
                <span className="eyebrow">About the Academy</span>
              </div>

              <h2 className="text-display-md font-display font-medium text-navy-900 mb-6">
                Preserving Heritage.
                <br />
                <span className="italic text-gold-700">Cultivating Artistry.</span>
              </h2>

              <div className="space-y-4 text-navy-800/85 leading-relaxed text-sm md:text-base">
                  <p>
                    Established in 2010, <strong>Suha Academy of Fine Arts</strong> is a vibrant centre
                    dedicated to the learning, preservation and propagation of India’s rich classical arts.
                  </p>
                  <p>
                    Rooted in tradition and guided by artistic excellence, the Academy offers systematic
                    training in <strong>Bharatanatyam</strong>, <strong>Mohiniyattam</strong> and{" "}
                    <strong>Carnatic Music</strong>, nurturing students to discover their artistic voice
                    while developing a deep appreciation for India’s cultural heritage.
                  </p>
                  <p>
                    Our approach extends beyond technique. Through dedicated training, disciplined practice,
                    devotion and meaningful stage exposure, students develop confidence, grace, musicality
                    and a strong artistic foundation.
                  </p>
                  <p>
                    With a thriving community of over <strong>160 students</strong> across our centres in{" "}
                    <strong>Medavakkam</strong> and <strong>Perumbakkam</strong>, Chennai, Suha Academy
                    remains committed to making classical arts accessible while upholding the authenticity
                    and values of traditional learning.
                  </p>

                  <div className="p-4 rounded-sm bg-gold-50/80 border-l-2 border-gold-500 mt-5">
                    <p className="text-xs font-serif italic text-navy-950 leading-relaxed font-medium">
                      &ldquo;Preserving heritage. Cultivating artistry. Inspiring the next generation.&rdquo;
                    </p>
                  </div>
                </div>

              {/* Key Impact Stats */}
              <Reveal delay={0.3}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 p-4 bg-white border border-ivory-200 rounded-sm">
                  <div className="text-center p-2">
                    <p className="font-display text-2xl font-bold text-navy-900">2010</p>
                    <p className="text-[11px] text-navy-700/60 uppercase tracking-wider mt-0.5">Established</p>
                  </div>
                  <div className="text-center p-2 border-l border-ivory-200">
                    <p className="font-display text-2xl font-bold text-gold-600">160+</p>
                    <p className="text-[11px] text-navy-700/60 uppercase tracking-wider mt-0.5">Active Disciples</p>
                  </div>
                  <div className="text-center p-2 border-l border-ivory-200">
                    <p className="font-display text-2xl font-bold text-navy-900">25</p>
                    <p className="text-[11px] text-navy-700/60 uppercase tracking-wider mt-0.5">Salanga Poojas</p>
                  </div>
                  <div className="text-center p-2 border-l border-ivory-200">
                    <p className="font-display text-2xl font-bold text-gold-600">6</p>
                    <p className="text-[11px] text-navy-700/60 uppercase tracking-wider mt-0.5">Arangetrams</p>
                  </div>
                </div>
              </Reveal>

           
            </div>
          </div>
        </div>
      </section>

      {/* 3. Founder Section */}
      <FounderSection />


      {/* 4. Our Journey: From a Humble Beginning to a Growing Artistic Legacy */}
      <section className="relative py-24 md:py-32 bg-paper overflow-hidden">
        <div className="absolute right-0 top-1/4 w-96 h-96 text-gold-500/[0.03] pointer-events-none">
          <MandalaWatermark className="w-full h-full" />
        </div>

        <div className="container-wide section-padding relative z-10">
          <SectionHeader
            number="01"
            eyebrow="Our Journey"
            title="From a Humble Beginning to a Growing Artistic Legacy"
            subtitle="The inspiring evolution of Suha Academy of Fine Arts — founded in 2010 on devotion, family support, and artistic excellence."
          />

          {/* Story Narrative: Inception & Naming */}
          <div className="max-w-4xl mx-auto mt-14">
            <Reveal>
              <div className="p-8 sm:p-10 bg-white border border-ivory-200 rounded-sm shadow-sm space-y-6 text-navy-800/85 text-sm sm:text-base leading-relaxed">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-500/10 text-gold-600 flex items-center justify-center font-bold text-sm">
                    ✦
                  </div>
                  <h3 className="font-display text-xl text-navy-900 font-medium">
                    A Vision Nurtured with Devotion & Family Support
                  </h3>
                </div>

                <p>
                  Founded in 2010 by <strong>Smt. Ranjini Pradeep</strong>, Suha Academy of Fine Arts began
                  with a humble yet purposeful vision—to create a space where the timeless traditions of
                  Indian classical arts could be learnt, experienced and carried forward with discipline,
                  devotion and dignity.
                </p>

                <p>
                  What began with just two enthusiastic students from her neighbourhood gradually blossomed into
                  a growing artistic community. With the steadfast encouragement and support of her mother,{" "}
                  <strong>Mrs. Subhashini Hariharan</strong>, who has remained a constant pillar of strength,
                  Ranjini nurtured the Academy with the belief that artistic education must extend far beyond
                  learning steps, notes and compositions.
                </p>

                <div className="p-4 rounded-sm bg-cream-50 border-l-2 border-gold-500">
                  <p className="text-xs text-navy-800 font-medium">
                    The Academy was named in honour of her parents, acknowledging their unwavering support and encouragement.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Journey Pillars: Experience & Competition */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Reveal delay={0.1} className="h-full">
                <div className="p-8 bg-white border border-ivory-200 rounded-sm h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-gold-600 font-semibold block mb-2">
                      Stage Repertoire & Ensemble
                    </span>
                    <h4 className="font-display text-lg text-navy-900 mb-3">
                      A Journey Rooted in Experience
                    </h4>
                    <p className="text-xs sm:text-sm text-navy-700/80 leading-relaxed">
                      From its early years, Suha Academy’s Annual Day celebrations were envisioned not merely
                      as performances, but as valuable learning experiences. Performing together as an ensemble
                      teaches young artists to adapt to stage dynamics, work as a team, develop meaningful
                      senior-junior relationships and support one another in the pursuit of excellence.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15} className="h-full">
                <div className="p-8 bg-white border border-ivory-200 rounded-sm h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-gold-600 font-semibold block mb-2">
                      Kodai Kaala Kalai Vizha (KKKV)
                    </span>
                    <h4 className="font-display text-lg text-navy-900 mb-3">
                      Healthy Competition & Growth
                    </h4>
                    <p className="text-xs sm:text-sm text-navy-700/80 leading-relaxed">
                      Ranjini’s own formative years, enriched by participation in numerous competitions, inspired
                      another important initiative—<strong>Kodai Kaala Kalai Vizha (KKKV)</strong>. Created to provide
                      young artists with opportunities for healthy competition, KKKV encourages participants to showcase
                      their abilities, learn from experience, identify areas for improvement and appreciate the talents of fellow artists.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-ivory-100">
                    <p className="text-xs italic text-gold-700 font-serif">
                      &ldquo;Competition should inspire growth, performance should build confidence, and tradition should always remain at the heart of artistic expression.&rdquo;
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Timeline of Milestones */}
          <div className="max-w-5xl mx-auto mt-20">
            <div className="text-center mb-14">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold">
                Historical Progression
              </span>
              <h3 className="text-display-sm font-display text-navy-900 mt-1">
                Milestones of Excellence
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((m, idx) => (
                <Reveal key={m.year} delay={idx * 0.08} className="h-full">
                  <div className="p-7 bg-white border border-ivory-200 rounded-sm h-full flex flex-col justify-between hover:border-gold-300 hover:shadow-lg transition-all group">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-display text-xl font-bold text-navy-900 group-hover:text-gold-700 transition-colors">
                          {m.year}
                        </span>
                        <span className="text-[10px] uppercase font-mono font-medium px-2 py-0.5 rounded bg-gold-500/10 text-gold-700 border border-gold-400/20">
                          {m.badge}
                        </span>
                      </div>
                      <h4 className="font-display text-base text-navy-900 mb-2 font-medium">
                        {m.title}
                      </h4>
                      <p className="text-xs text-navy-700/75 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. A Platform for Art and Artists (Dignitaries, Sabhas & Global Outreach) */}
      <section className="relative py-24 md:py-32 bg-navy-950 overflow-hidden text-cream-100">
        <div className="container-wide section-padding relative z-10">
          <SectionHeader
            light
            number="02"
            eyebrow="A Platform for Art and Artists"
            title="Eminent Guests & Cultural Platforms"
            subtitle="Distinguished personalities from music, dance and cinema who have graced Suha Academy’s stages and guided our disciples."
          />

          {/* Guests Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-14 max-w-5xl mx-auto">
            {distinguishedGuests.map((guest, idx) => (
              <Reveal key={guest.name} delay={idx * 0.05} className="h-full">
                <div className="p-5 rounded-sm bg-navy-900/60 border border-gold-500/15 h-full flex flex-col justify-center text-center hover:border-gold-400/40 transition-colors">
                  <p className="font-display text-sm sm:text-base text-cream-50 font-medium mb-1">
                    {guest.name}
                  </p>
                  <p className="text-[11px] text-gold-400/80">
                    {guest.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Narrative Paragraphs from Client Document (Pages 4 & 5) */}
          <div className="max-w-4xl mx-auto mt-12 space-y-5 text-cream-100/85 text-sm sm:text-base leading-relaxed text-center">
            <Reveal delay={0.1}>
              <p>
                Suha Academy’s Annual Day celebrations have welcomed several distinguished personalities
                from the worlds of music, dance and cinema, including playback singer Anand Aravindakshan,
                singers Sriram and Roshini, Smt. Mahathi, Dr. Nithyashree Mahadevan, Dr. Udaykumar,
                dancers Sri Narendra Kumar, Smt. Divyasena, Smt. Srekala Bharath and Sri Shivakumar,
                actor Amit Bhargav, actress MGR Latha, and Sadhagaparavaigal Sankar and Bharanidaran,
                among many other eminent guests and artists.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p>
                Over the years, the Academy’s students have performed at numerous temples, cultural
                institutions and sabhas across Chennai, gaining invaluable exposure to diverse
                performance environments and audiences.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-gold-300 font-serif italic text-base sm:text-lg">
                In 2026, Suha Academy reached another proud milestone as its artistic journey extended
                beyond Indian shores, with its students and programmes reaching Singapore and Malaysia.
              </p>
            </Reveal>
          </div>

        </div>
      </section>

      {/* 6. The Suha Philosophy & Shastric Pedagogy */}
      <section className="relative py-24 md:py-32 bg-cream-50 overflow-hidden">
        <div className="container-wide section-padding">
          <SectionHeader
            number="03"
            eyebrow="The Suha Philosophy"
            title="Tradition, Humility & Inner Expression"
            subtitle="Classical arts regarded not merely as performing disciplines, but as a path to cultivate character, cultural awareness and lifelong joy."
          />

          <div className="max-w-4xl mx-auto mt-12">
            <Reveal>
              <div className="p-8 sm:p-10 bg-white border border-ivory-200 rounded-sm text-center space-y-4">
                <p className="text-base md:text-lg text-navy-800/90 leading-relaxed font-serif italic max-w-2xl mx-auto">
                  &ldquo;At Suha Academy, classical arts are regarded not merely as performing disciplines,
                  but as a means of cultivating discipline, humility, confidence, creativity, cultural awareness
                  and inner expression.&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-navy-700/75 leading-relaxed max-w-2xl mx-auto">
                  The Academy strives to make traditional arts accessible to students from diverse backgrounds
                  while remaining firmly rooted in authenticity and heritage. Every student is encouraged to progress
                  at their own pace, discover their individual strengths and step onto the stage with preparation,
                  dignity and joy.
                </p>
              </div>
            </Reveal>

         
          </div>
        </div>
      </section>

      {/* 7. Our Journey Continues (Closing & CTA) */}
      <section className="relative py-28 md:py-36 bg-navy-950 overflow-hidden text-center text-cream-100">
        <div className="absolute inset-0">
          <img
            src="/suha_media/shared/shared_page_header_banner.jpg"
            alt="Suha Academy of Fine Arts Stage Presence"
            loading="lazy"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/80 to-navy-950/95" />
        </div>

        <div className="container-wide section-padding relative z-10 max-w-3xl mx-auto">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-300 font-semibold block mb-4">
              Our Journey Continues
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-display-md md:text-display-lg font-display font-medium text-cream-50 mb-6 text-shadow-lg">
              From Two Students to Global Stages
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-sm md:text-base text-cream-100/75 leading-relaxed mb-6">
              From two students in 2010 to a thriving community of over 160 students today, Suha Academy’s journey
              stands as a testament to a dream nurtured through dedication and sustained by the unwavering support
              of family, students, parents, teachers and the artistic community.
            </p>
            <p className="text-sm md:text-base text-gold-300/90 font-serif italic leading-relaxed mb-6">
              &ldquo;More than a decade later, the Academy continues to move forward with the same founding vision—to preserve the richness of Indian classical arts, nurture emerging talent, create meaningful opportunities for young artists and carry our cultural heritage to newer generations and wider horizons.&rdquo;
            </p>
            <p className="text-sm md:text-base text-cream-100/85 leading-relaxed mb-10">
              From a humble beginning to stages across the world, Suha’s journey continues—with tradition
              as its foundation, excellence as its aspiration and every student as a cherished part of its legacy.
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
                to="/courses"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream-100/30 text-cream-50 font-medium text-sm tracking-wide rounded-sm transition-all duration-300 hover:border-gold-400 hover:text-gold-300"
              >
                Explore Courses
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
