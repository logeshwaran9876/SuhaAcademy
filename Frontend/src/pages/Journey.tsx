import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Trophy,
  MapPin,
  Music,
  Sparkles,
  ArrowRight,
  Globe,
  Award,
  Users,
  CheckCircle2,
  Maximize2,
  GraduationCap,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { VerticalTimeline } from "@/components/Timeline";
import { OrnamentDivider, MandalaWatermark, GoldFrame } from "@/components/Decorations";
import { timeline, achievements } from "@/data/timeline";
import { workshopArchive } from "@/data/events";
import SourceBadge from "@/components/SourceBadge";
import { Lightbox } from "@/components/Lightbox";
import type { GalleryImage } from "@/components/Gallery";

export default function Journey() {
  const [activePoster, setActivePoster] = useState<GalleryImage | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Chronicle & Milestones"
        title="The Suha Academy Story"
        subtitle="From foundational beginnings in 2010 to acclaimed international stages and South India's premier classical faceoff — a 15-year odyssey of tradition, rhythm, and devotion."
        image="/suha_media/suha_hero_duet_banner.jpg"
        height="lg"
      />

      {/* 1. At a Glance: 4-Column Balanced Luxury Grid */}
      <section className="relative py-20 md:py-28 bg-cream-50 border-b border-ivory-200">
        <div className="container-wide section-padding">
          <SectionHeader
            eyebrow="At a Glance"
            title="A Journey of Learning & Performance"
            subtitle="Fifteen years of unwavering dedication to classical arts education across Chennai and beyond."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 max-w-6xl mx-auto">
            {achievements.map((item, i) => (
              <Reveal
                key={item.label}
                delay={i * 0.1}
                className="h-full"
              >
                <div className="h-full p-8 bg-white border border-ivory-200 rounded-sm text-center flex flex-col justify-between hover:border-gold-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div>
                    {/* Icon Accent */}
                    <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-700 mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {item.icon === "Calendar" && <Calendar className="w-5 h-5" />}
                      {item.icon === "Trophy" && <Trophy className="w-5 h-5" />}
                      {item.icon === "Landmark" && <MapPin className="w-5 h-5" />}
                      {item.icon === "Music" && <Music className="w-5 h-5" />}
                    </div>

                    <p className="text-[11px] uppercase tracking-[0.22em] text-gold-700 font-semibold mb-2">
                      {item.label}
                    </p>
                    <p className="font-display text-lg sm:text-xl font-medium text-navy-950 leading-snug">
                      {item.value}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-ivory-100 flex items-center justify-center gap-1.5 text-[11px] text-navy-600/70 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                    <span>
                      {i === 0 && "15+ Years Legacy"}
                      {i === 1 && "Flagship Festival"}
                      {i === 2 && "Multi-Center Presence"}
                      {i === 3 && "Integrated Pedagogy"}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Interactive Timeline: Key Milestones from 2010 to 2026 */}
      <section className="relative py-24 md:py-32 bg-paper overflow-hidden">
        <div className="absolute left-0 top-1/4 w-80 h-80 text-gold-500/[0.04] pointer-events-none hidden md:block">
          <MandalaWatermark className="w-full h-full" />
        </div>

        <div className="container-wide section-padding relative z-10">
          <SectionHeader
            eyebrow="Milestones"
            title="Through the Years"
            subtitle="Explore our archival milestones, from foundational inaugural recitals to international thematic productions."
          />

          <div className="max-w-4xl mx-auto mt-16">
            <VerticalTimeline items={timeline} />
          </div>
        </div>
      </section>

      {/* 3. Landmark Highlights & Stage Productions */}
      <section className="relative py-24 md:py-32 bg-[#0C0609] text-cream-100 overflow-hidden border-y border-gold-500/20">
        <div className="container-wide section-padding relative z-10">
          <SectionHeader
            light
            eyebrow="Landmark Stages"
            title="Signature Concerts & International Tours"
            subtitle="Moments that define Suha Academy's artistic caliber on national and global stages."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 max-w-6xl mx-auto">
            {/* Landmark 1 */}
            <Reveal delay={0.1} className="h-full">
              <div className="bg-[#140C10] border border-gold-500/25 rounded-sm p-7 flex flex-col justify-between h-full hover:border-gold-400/50 transition-colors group">
                <div>
                  <div className="relative h-48 overflow-hidden rounded-sm mb-5 bg-navy-950">
                    <img
                      src="/suha_media/fb_shivanubhavam_singapore.jpg"
                      alt="SHIVANUBHAVAM Singapore"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase tracking-wider bg-navy-950/90 text-gold-300 font-semibold rounded-xs border border-gold-400/30">
                      Singapore Tour
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-cream-50 mb-2">
                    SHIVANUBHAVAM — Singapore
                  </h3>
                  <p className="text-xs text-gold-300/80 mb-3 font-serif italic">
                    SOTA Drama Theatre, Singapore
                  </p>
                  <p className="text-xs text-cream-100/70 leading-relaxed">
                    Artistic Director Guru Smt. Ranjini Pradeep alongside senior disciple Kum. Kamalika presented an acclaimed international thematic production celebrating the cosmic dance of Lord Shiva before an international audience.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-cream-100/10 flex items-center justify-between text-xs text-gold-400">
                  <span>International Showcase</span>
                  <span>✦ 2025</span>
                </div>
              </div>
            </Reveal>

            {/* Landmark 2 */}
            <Reveal delay={0.2} className="h-full">
              <div className="bg-[#140C10] border border-gold-500/25 rounded-sm p-7 flex flex-col justify-between h-full hover:border-gold-400/50 transition-colors group">
                <div>
                  <div className="relative h-48 overflow-hidden rounded-sm mb-5 bg-navy-950">
                    <img
                      src="/suha_media/fb_nithyasree_aaradhana.jpg"
                      alt="Thyagaraja Aaradhana"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase tracking-wider bg-navy-950/90 text-gold-300 font-semibold rounded-xs border border-gold-400/30">
                      Homage Concert
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-cream-50 mb-2">
                    Thyagaraja Pancharatna Aaradhana
                  </h3>
                  <p className="text-xs text-gold-300/80 mb-3 font-serif italic">
                    With Kalaimamani Dr. Nithyasree Mahadevan
                  </p>
                  <p className="text-xs text-cream-100/70 leading-relaxed">
                    Students of Suha Academy joined the sacred choral homage rendering the revered Pancharatna Krithis, receiving personal accolades and blessings from celebrated Carnatic maestro Kalaimamani Dr. Nithyasree Mahadevan.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-cream-100/10 flex items-center justify-between text-xs text-gold-400">
                  <span>Carnatic Choral Tribute</span>
                  <span>✦ 2024</span>
                </div>
              </div>
            </Reveal>

            {/* Landmark 3 */}
            <Reveal delay={0.3} className="h-full">
              <div className="bg-[#140C10] border border-gold-500/25 rounded-sm p-7 flex flex-col justify-between h-full hover:border-gold-400/50 transition-colors group">
                <div>
                  <div className="relative h-48 overflow-hidden rounded-sm mb-5 bg-navy-950">
                    <img
                      src="/suha_media/yt_thumb_kAhSLsi6SGM.jpg"
                      alt="Annual Day Felicitation"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase tracking-wider bg-navy-950/90 text-gold-300 font-semibold rounded-xs border border-gold-400/30">
                      Grand Felicitation
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-cream-50 mb-2">
                    Annual Day Utsavam & Honors
                  </h3>
                  <p className="text-xs text-gold-300/80 mb-3 font-serif italic">
                    With Dr. Divyasena, Sri Sai Vignesh & Sri Amit Bhargav
                  </p>
                  <p className="text-xs text-cream-100/70 leading-relaxed">
                    Celebrated at Karnataka Sangha Hall with mass student Bharatanatyam Margam recitals, vocal choirs, and merit distributions graced by eminent film & classical playback dignitaries.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-cream-100/10 flex items-center justify-between text-xs text-gold-400">
                  <span>Student Felicitation</span>
                  <span>✦ 2026</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Arangetram & Student Progression Pathway */}
      <section className="relative py-24 md:py-32 bg-cream-50">
        <div className="container-wide section-padding">
          <SectionHeader
            eyebrow="Pedagogical Journey"
            title="From First Steps to Arangetram Debut"
            subtitle="The disciplined trajectory every dedicated disciple undertakes at Suha Academy."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-14 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Vidyarambham & Adavu Foundations",
                desc: "Initiation into the Araimandi stance, basic tat-tai-ta-ha footwork, eye and head coordination, and devotional slokas.",
              },
              {
                step: "02",
                title: "Salangai Pooja & Shiro Bhedas",
                desc: "Auspicious consecration of brass bells, mastering 3 speeds of laya, Asamyuta/Samyuta Hastas, and initial Alaripu items.",
              },
              {
                step: "03",
                title: "Margam Repertoire & Abhinaya",
                desc: "Advancing to Jathiswaram, Shabdam, Swarajathis, Pada Varnams, and profound Navarasa emotional expressions.",
              },
              {
                step: "04",
                title: "Solo Arangetram Stage Debut",
                desc: "Full 2.5-hour solo performance with live Carnatic orchestra (Nattuvangam, Mridangam, Violin, Flute, Vocal) under Guru's guidance.",
              },
            ].map((p, idx) => (
              <Reveal key={p.step} delay={idx * 0.1} className="h-full">
                <div className="p-7 bg-white border border-ivory-200 rounded-sm h-full flex flex-col justify-between hover:border-gold-400 hover:shadow-lg transition-all">
                  <div>
                    <span className="font-display text-3xl font-bold text-gold-500/60 block mb-2">
                      {p.step}
                    </span>
                    <h4 className="font-display text-base font-semibold text-navy-950 mb-3">
                      {p.title}
                    </h4>
                    <p className="text-xs text-navy-700/70 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-ivory-100 flex items-center gap-1.5 text-[11px] text-gold-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />
                    <span>Certified Milestone</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Workshop Archive */}
      <section className="relative py-24 md:py-32 bg-paper overflow-hidden border-t border-ivory-200">
        <div className="container-wide section-padding">
          <SectionHeader
            eyebrow="Creative Exploration"
            title="Workshop & Masterclass Archive"
            subtitle="Historical creative sessions complementing classical performing arts."
          />

          <Reveal delay={0.1}>
            <div className="max-w-4xl mx-auto mt-12 bg-white border border-ivory-200 rounded-sm overflow-hidden shadow-sm hover:border-gold-300 transition-colors">
              <div className="grid md:grid-cols-12 items-center">
                <div className="md:col-span-5 relative h-64 md:h-full overflow-hidden bg-navy-950">
                  <img
                    src={workshopArchive.image}
                    alt="Mandala art workshop poster"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                </div>
                <div className="md:col-span-7 p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-[10px] uppercase tracking-wider bg-gold-500/15 text-gold-700 rounded-xs font-semibold border border-gold-500/25">
                      {workshopArchive.status}
                    </span>
                    <span className="text-xs text-navy-600/60">{workshopArchive.date}</span>
                  </div>
                  <h3 className="font-display text-2xl text-navy-950 font-medium mb-3">
                    {workshopArchive.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-700/80 leading-relaxed mb-5">
                    {workshopArchive.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs text-navy-800 mb-6 p-4 bg-cream-50/70 rounded-sm border border-ivory-200">
                    <div><span className="text-gold-700 font-semibold">Format:</span> {workshopArchive.format}</div>
                    <div><span className="text-gold-700 font-semibold">Age Group:</span> {workshopArchive.ageGroup}</div>
                    <div className="col-span-2"><span className="text-gold-700 font-semibold">Conducted by:</span> {workshopArchive.conductor}</div>
                  </div>
                  <SourceBadge
                    source={workshopArchive.source}
                    sourceLabel={workshopArchive.sourceLabel}
                    url={workshopArchive.source}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Grand Closing CTA */}
      <section className="relative py-24 md:py-32 bg-navy-950 text-center text-cream-100">
        <div className="container-wide section-padding">
          <Reveal>
            <OrnamentDivider light className="mb-8" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display-md font-display text-cream-50 mb-3">
              Be Part of Our Next Chapter
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-cream-100/60 max-w-lg mx-auto mb-8 text-sm">
              Whether you are a young beginner or returning to the classical stage, your artistic journey begins here.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-950 font-medium text-sm rounded-sm hover:bg-gold-400 transition-all duration-300 group shadow-md"
              >
                <span>Explore Training Programs</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cream-100/30 text-cream-50 font-medium text-sm rounded-sm hover:border-gold-400 hover:text-gold-300 transition-all duration-300"
              >
                <span>Visit a Chennai Center</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox for Posters */}
      {activePoster && (
        <Lightbox
          images={[activePoster]}
          index={0}
          onClose={() => setActivePoster(null)}
          onNavigate={() => {}}
        />
      )}
    </>
  );
}
