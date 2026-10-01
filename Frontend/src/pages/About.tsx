import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import FounderSection from "@/components/FounderSection";
import { Reveal } from "@/components/Reveal";
import { VerticalTimeline } from "@/components/Timeline";
import { OrnamentDivider, GoldFrame } from "@/components/Decorations";
import { academy } from "@/data/academy";
import { timeline } from "@/data/timeline";
import { whySuha } from "@/data/courses";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Suha Academy of Fine Arts"
        subtitle="A Chennai-based classical arts academy dedicated to Bharatanatyam, Mohiniyattam, and Carnatic Music — preserving tradition, nurturing expression."
        image="/suha_media/suha_hero_duet_banner.jpg"
        height="lg"
      />

      {/* Academy Story */}
      <section className="relative py-24 md:py-32 bg-cream-50">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal className="relative">
              <div className="relative max-w-lg mx-auto lg:mx-0">
                <div className="absolute -inset-3 border border-gold-500/15 rounded-sm pointer-events-none" />
                <div className="relative overflow-hidden rounded-sm bg-navy-950">
                  <img
                    src="/suha_media/suha_img_5.jpg"
                    alt="Classical Bharatanatyam standing Natarajar asana discipline"
                    loading="lazy"
                    className="w-full h-[520px] object-cover"
                  />
                  <GoldFrame />
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-gold-500/40" />
                  <span className="eyebrow">Our Story</span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="text-display-md font-display font-medium text-navy-900 mb-6">
                  A Tradition of
                  <br />
                  <span className="italic text-gold-700">Classical Learning</span>
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="space-y-4 text-navy-800/80 leading-relaxed">
                  <p>
                    Suha Academy of Fine Arts was founded in {academy.established}{" "}
                    by {academy.founder} in Chennai, Tamil Nadu. The academy is
                    dedicated to the teaching and promotion of two of India's most
                    revered classical art forms — Bharatanatyam and Carnatic Music.
                  </p>
                  <p>
                    Over the years, the academy has grown into a cultural
                    institution that not only trains students in technique and
                    repertoire but also provides platforms for performance,
                    competition and celebration through events like Kodai Kaala
                    Kalai Vizha.
                  </p>
                  <p>
                    The academy welcomes students of all ages — from young
                    children taking their first steps in classical arts to adults
                    seeking to connect with their cultural heritage.
                  </p>

                  {/* Official Vision Quote */}
                  <div className="p-4 rounded-sm bg-gold-50/60 border-l-2 border-gold-500 mt-4">
                    <p className="text-[10px] uppercase tracking-widest text-gold-700 font-semibold mb-1">
                      Academy Vision
                    </p>
                    <p className="text-sm font-serif italic text-navy-900 leading-relaxed">
                      "{academy.vision}"
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <FounderSection />

      {/* Philosophy */}
      <section className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
        <div className="container-wide section-padding relative z-10">
          <SectionHeader
            light
            eyebrow="Philosophy"
            title="Tradition in Motion"
            subtitle="Learning that honours classical roots while preparing students for the stage."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-14 max-w-4xl mx-auto">
            {[
              {
                title: "Discipline",
                text: "Structured, progressive learning that builds strong foundations in classical technique.",
              },
              {
                title: "Expression",
                text: "Encouraging students to find their voice through abhinaya, melody and performance.",
              },
              {
                title: "Community",
                text: "A shared space where students, families and teachers celebrate classical arts together.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="text-center p-8 border border-cream-100/10 rounded-sm hover:border-gold-400/20 transition-colors">
                  <h3 className="font-display text-xl text-gold-300 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cream-100/60 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* The 4 Shastric Pillars */}
          <div className="mt-20 pt-16 border-t border-cream-100/10 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">Shastric Framework</span>
              <h3 className="text-display-sm font-display text-cream-50 mt-1">The Four Pillars of Our Pedagogy</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  sanskrit: "नृत्त • Nritta",
                  title: "Pure Technique",
                  desc: "Geometric body lines, precise Araimandi, energetic adavu execution, and intricate rhythmic footwork (tala laya).",
                },
                {
                  sanskrit: "नृत्य • Nritya",
                  title: "Bhava & Abhinaya",
                  desc: "Facial expressions, eye movements (drishti bhedas), hand gestures (mudras), and evocative poetic portrayal.",
                },
                {
                  sanskrit: "नाट्य • Natya",
                  title: "Dramatic Repertoire",
                  desc: "Narrative storytelling bringing mythological and devotional themes to life with theatrical grandeur.",
                },
                {
                  sanskrit: "सङ्गीत • Sangeetham",
                  title: "Carnatic Melody",
                  desc: "Purity of shruti, classical ragas, disciplined breath control, and deep spiritual communion through song.",
                },
              ].map((pillar, idx) => (
                <Reveal key={pillar.title} delay={idx * 0.1} className="h-full">
                  <div className="bg-[#120B0E] p-6 rounded-sm border border-gold-500/20 h-full flex flex-col justify-between hover:border-gold-400/40 transition-colors">
                    <div>
                      <p className="text-xs font-serif text-gold-400 font-medium mb-1">{pillar.sanskrit}</p>
                      <h4 className="font-display text-base text-cream-50 mb-3">{pillar.title}</h4>
                      <p className="text-xs text-cream-100/70 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="relative py-24 md:py-32 bg-cream-50">
        <div className="container-wide section-padding">
          <SectionHeader
            eyebrow="Approach"
            title="How We Teach"
            subtitle="A methodology rooted in classical tradition, adapted for every learner."
          />

          <div className="grid md:grid-cols-2 gap-12 mt-14 max-w-4xl mx-auto">
            <Reveal>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Foundations", text: "Students begin with the fundamentals — basic postures, hand gestures, and swara patterns." },
                  { step: "02", title: "Progression", text: "Structured advancement through repertoire items, building complexity and expression." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="font-display text-2xl text-gold-500/60 flex-shrink-0">{item.step}</span>
                    <div>
                      <h3 className="font-display text-lg text-navy-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-navy-700/70">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-6">
                {[
                  { step: "03", title: "Performance", text: "Opportunities to take the stage through events, competitions and annual day celebrations." },
                  { step: "04", title: "Celebration", text: "Recognising growth and achievement through certificates, awards and community gatherings." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="font-display text-2xl text-gold-500/60 flex-shrink-0">{item.step}</span>
                    <div>
                      <h3 className="font-display text-lg text-navy-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-navy-700/70">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Classical Disciplines + Performance */}
      <section className="relative py-24 md:py-32 bg-paper">
        <div className="container-wide section-padding">
          <SectionHeader
            eyebrow="Disciplines"
            title="Two Classical Traditions"
            subtitle="Bharatanatyam and Carnatic Music — the heart of Suha Academy."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {[
              {
                title: "Bharatanatyam",
                text: "One of India's oldest classical dance forms, originating in Tamil Nadu. Students learn from Pushpanjali to Thillana — a complete journey through nritta and abhinaya.",
                image: "/suha_media/suha_img_1.jpg",
                link: "/courses/bharatanatyam",
              },
              {
                title: "Carnatic Vocal",
                text: "South India's classical music tradition. Students develop voice, raga understanding and repertoire spanning devotional pieces to complex compositional forms.",
                image: "/suha_media/suha_img_6.jpg",
                link: "/courses/carnatic-music",
              },
            ].map((disc, i) => (
              <Reveal key={disc.title} delay={i * 0.1}>
                <Link
                  to={disc.link}
                  className="group block relative overflow-hidden rounded-sm"
                >
                  <img
                    src={disc.image}
                    alt={disc.title}
                    loading="lazy"
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 to-navy-950/20" />
                  <GoldFrame />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-display text-2xl text-cream-50 mb-2">{disc.title}</h3>
                    <p className="text-sm text-cream-100/70 mb-3">{disc.text}</p>
                    <span className="inline-flex items-center gap-2 text-sm text-gold-300 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Annual Academy Traditions */}
          <div className="mt-20 pt-16 border-t border-ivory-200">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold">Living Culture</span>
              <h3 className="text-display-sm font-display text-navy-900 mt-1">Sacred Annual Traditions</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Reveal delay={0.1}>
                <div className="p-7 bg-white border border-ivory-200 rounded-sm hover:border-gold-300 transition-all">
                  <span className="text-xs uppercase tracking-wider text-gold-600 font-semibold block mb-1">December – January</span>
                  <h4 className="font-display text-lg text-navy-900 mb-2">Margazhi Utsavam Recitals</h4>
                  <p className="text-xs text-navy-700/70 leading-relaxed">
                    Participation in Chennai's legendary Margazhi music & dance festival across prominent sabhas, instilling real concert discipline in senior disciples.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="p-7 bg-white border border-ivory-200 rounded-sm hover:border-gold-300 transition-all">
                  <span className="text-xs uppercase tracking-wider text-gold-600 font-semibold block mb-1">Maha Shivratri</span>
                  <h4 className="font-display text-lg text-navy-900 mb-2">Temple Natyanjali Offerings</h4>
                  <p className="text-xs text-navy-700/70 leading-relaxed">
                    Spiritual dance pilgrimages offering classical sevas at Chidambaram Natarajar Temple and Brihadeeswarar Temple in Thanjavur.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="p-7 bg-white border border-ivory-200 rounded-sm hover:border-gold-300 transition-all">
                  <span className="text-xs uppercase tracking-wider text-gold-600 font-semibold block mb-1">Vijayadasami</span>
                  <h4 className="font-display text-lg text-navy-900 mb-2">Vidyarambham Ceremonies</h4>
                  <p className="text-xs text-navy-700/70 leading-relaxed">
                    Auspicious initiation day where new students write in rice, receive salangai blessings, and commence their lifelong dedication to classical arts.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 md:py-32 bg-cream-50">
        <div className="container-wide section-padding">
          <SectionHeader
            eyebrow="Journey"
            title="Through the Years"
            subtitle="Key milestones in the academy's story."
          />

          <div className="max-w-4xl mx-auto mt-16">
            <VerticalTimeline items={timeline} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-navy-950 text-center">
        <div className="container-wide section-padding">
          <Reveal>
            <OrnamentDivider light className="mb-8" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display-md font-display text-cream-50 mb-4">
              Where Learning Meets Expression
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-cream-100/60 max-w-lg mx-auto mb-8">
              Join a community dedicated to classical arts and cultural growth.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-950 font-medium text-sm rounded-sm hover:bg-gold-400 transition-all duration-300 group"
            >
              Join the Academy
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
