import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Award,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  BookOpen,
  Music,
  Users,
  GraduationCap,
  Globe,
  HelpCircle,
  Phone,
  MessageCircle,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CourseCard from "@/components/CourseCard";
import { Reveal } from "@/components/Reveal";
import { OrnamentDivider, MandalaWatermark, GoldFrame } from "@/components/Decorations";
import { courses, studentGroups } from "@/data/courses";
import { academy } from "@/data/academy";

type FilterTab = "all" | "bharatanatyam" | "carnatic-music" | "mohiniyattam" | "workshops";

export default function Courses() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filteredCourses = useMemo(() => {
    if (activeTab === "all") return courses;
    if (activeTab === "workshops") return courses.filter((c) => c.isWorkshop);
    return courses.filter((c) => c.slug === activeTab);
  }, [activeTab]);

  return (
    <>
      <PageHero
        eyebrow="Courses & Training"
        title="Learn the Classical Arts"
        subtitle="Structured, authentic pedagogy in Bharatanatyam, Carnatic Vocal, Mohiniyattam, and artistic masterclasses — rooted in tradition and groomed for the stage."
        image="/suha_media/suha_hero_theatre_banner.jpg"
        height="lg"
      />

      {/* Filter Tabs Bar */}
      <section className="bg-white border-b border-ivory-200 sticky top-[69px] z-30 py-3   shadow-xs">
        <div className="container-wide section-padding">
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {[
              { id: "all", label: "All Disciplines" },
              { id: "bharatanatyam", label: "Bharatanatyam" },
              { id: "carnatic-music", label: "Carnatic Vocal" },
              { id: "mohiniyattam", label: "Mohiniyattam" },
              { id: "workshops", label: "Workshops & Art" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as FilterTab)}
                className={`px-5 py-2 text-xs uppercase tracking-wider font-medium rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-navy-950 text-gold-300 shadow-sm"
                    : "bg-cream-100/70 text-navy-800 hover:bg-gold-50 hover:text-gold-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Cards Catalog */}
      <section className="relative py-20 md:py-28 bg-cream-50">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {filteredCourses.map((course, i) => (
              <CourseCard key={course.slug} course={course} index={i} />
            ))}
          </div>

          <div className="mt-14 p-6 rounded-sm bg-white border border-gold-500/20 max-w-3xl mx-auto text-center shadow-xs">
            <p className="text-sm text-navy-800 leading-relaxed">
              <strong className="text-gold-700 font-serif">Dual Art Discipline Discount:</strong> Many students enroll in both Bharatanatyam and Carnatic Vocal for holistic rhythm & melodic mastery. Special coordinated scheduling is provided across Medavakkam, Perumbakkam, and Perungalathur centers.
            </p>
          </div>
        </div>
      </section>

      {/* Examination & Certification Pathway */}
      <section className="relative py-24 md:py-32 bg-paper overflow-hidden">
        <div className="absolute right-0 top-1/3 w-80 h-80 text-gold-500/[0.04] pointer-events-none hidden md:block">
          <MandalaWatermark className="w-full h-full" />
        </div>

        <div className="container-wide section-padding relative z-10">
          <SectionHeader
            number="01"
            eyebrow="Accredited Pathway"
            title="Grade Examinations & Certification"
            subtitle="Suha Academy trains students for formal graded examinations conducted in collaboration with Bridge Academy and esteemed Music & Dance Universities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              {
                level: "Stage 01",
                title: "Prathama & Praveshika",
                grades: "Grades 1 & 2",
                target: "Foundational Technique",
                desc: "Basic Adavus (1–8 groups), Mudras (Asamyuta & Samyuta Hastas), Sarali, Jantai & Dhatu Varisais, Geethams in Malahari & Kalyani.",
                badge: "Foundations",
              },
              {
                level: "Stage 02",
                title: "Madhyama Repertoire",
                grades: "Grades 3 & 4",
                target: "Intermediate Artistry",
                desc: "Alaripu, Jathiswaram, Shabdam, Adi Tala Varnams, Navarasa expressions, Swarajathis, and theoretical Natya Shastra terminology.",
                badge: "Intermediate",
              },
              {
                level: "Stage 03",
                title: "Visharad & Vidwath",
                grades: "Grades 5 to Diploma",
                target: "Advanced Mastery",
                desc: "Full Margam execution, Pada Varnams, Keerthanams, Manodharma Sangeetham (Aalapanai, Neraval, Kalpanaswaras), and Tala avarthanams.",
                badge: "Advanced",
              },
              {
                level: "Stage 04",
                title: "Arangetram Guidance",
                grades: "Solo Debut",
                target: "Stage Professionalism",
                desc: "Rigorous 1-on-1 mentorship for full solo stage debut with live classical orchestra (Nattuvangam, Mridangam, Violin, Flute, Vocal).",
                badge: "Solo Debut",
              },
            ].map((step, idx) => (
              <Reveal key={step.level} delay={idx * 0.1} className="h-full">
                <div className="h-full bg-white border border-ivory-200 rounded-sm p-6 flex flex-col justify-between hover:border-gold-400 hover:shadow-xl transition-all duration-300 group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-serif italic text-gold-600 font-semibold">{step.level}</span>
                      <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-gold-50 text-gold-700 font-medium rounded-xs border border-gold-200">
                        {step.badge}
                      </span>
                    </div>
                    <h3 className="font-display text-lg text-navy-900 mb-1 group-hover:text-gold-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gold-600 font-medium mb-3">{step.grades} &middot; {step.target}</p>
                    <p className="text-xs text-navy-700/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-ivory-100 flex items-center gap-1.5 text-[11px] text-navy-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />
                    <span>Annual Certificate Awarded</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Schedules Matrix */}
      <section className="relative py-24 md:py-32 bg-navy-950 text-cream-100 overflow-hidden">
        <div className="container-wide section-padding relative z-10">
          <SectionHeader
            light
            number="02"
            eyebrow="Center Schedules"
            title="Batch Timings by Location"
            subtitle="We conduct regular batches across 3 prime centers in Chennai, plus dedicated 1-on-1 online sessions for global learners."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {/* Center 1: Medavakkam */}
            <Reveal delay={0.1} className="h-full">
              <div className="bg-[#120B0E] border border-gold-500/20 rounded-sm p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-wider font-semibold mb-2">
                    <MapPin className="w-4 h-4" /> Medavakkam Center
                  </div>
                  <h3 className="font-display text-lg text-cream-50 mb-1">Navins Starwood Towers</h3>
                  <p className="text-xs text-cream-100/60 mb-4">Vengaivasal Main Rd, Medavakkam</p>

                  <div className="space-y-3 pt-3 border-t border-cream-100/10 text-xs">
                    <div>
                      <p className="text-gold-300 font-medium">Friday Evenings:</p>
                      <p className="text-cream-100/70">5:00 PM – 7:30 PM (Bharatanatyam)</p>
                    </div>
                    <div>
                      <p className="text-gold-300 font-medium">Saturday Mornings:</p>
                      <p className="text-cream-100/70">9:30 AM – 12:30 PM (Vocal & Dance)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-cream-100/10">
                  <a
                    href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent("Hi Suha Academy, I am inquiring about batch timings at the Medavakkam center.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-gold-300 hover:text-gold-200 font-medium"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Book Medavakkam Trial &rarr;
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Center 2: Perumbakkam */}
            <Reveal delay={0.2} className="h-full">
              <div className="bg-[#120B0E] border border-gold-500/20 rounded-sm p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-wider font-semibold mb-2">
                    <MapPin className="w-4 h-4" /> Perumbakkam Center
                  </div>
                  <h3 className="font-display text-lg text-cream-50 mb-1">Bollineni Hillside Ixora</h3>
                  <p className="text-xs text-cream-100/60 mb-4">BHS Recreational Club, Perumbakkam</p>

                  <div className="space-y-3 pt-3 border-t border-cream-100/10 text-xs">
                    <div>
                      <p className="text-gold-300 font-medium">Saturday Evenings:</p>
                      <p className="text-cream-100/70">4:00 PM – 7:00 PM (Dance & Music)</p>
                    </div>
                    <div>
                      <p className="text-gold-300 font-medium">Sunday Mornings:</p>
                      <p className="text-cream-100/70">9:00 AM – 1:00 PM (All Levels)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-cream-100/10">
                  <a
                    href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent("Hi Suha Academy, I am inquiring about batch timings at the Perumbakkam center.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-gold-300 hover:text-gold-200 font-medium"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Book Perumbakkam Trial &rarr;
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Center 3: Old Perungalathur */}
            <Reveal delay={0.3} className="h-full">
              <div className="bg-[#120B0E] border border-gold-500/20 rounded-sm p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-wider font-semibold mb-2">
                    <MapPin className="w-4 h-4" /> Old Perungalathur
                  </div>
                  <h3 className="font-display text-lg text-cream-50 mb-1">Main Academy Studio</h3>
                  <p className="text-xs text-cream-100/60 mb-4">Near Railway Station, Perungalathur</p>

                  <div className="space-y-3 pt-3 border-t border-cream-100/10 text-xs">
                    <div>
                      <p className="text-gold-300 font-medium">Weekday Batches:</p>
                      <p className="text-cream-100/70">Tuesday & Thursday, 5:30 – 7:30 PM</p>
                    </div>
                    <div>
                      <p className="text-gold-300 font-medium">Sunday Repertoire:</p>
                      <p className="text-cream-100/70">3:00 PM – 6:00 PM (Margam & KKKV)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-cream-100/10">
                  <a
                    href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent("Hi Suha Academy, I am inquiring about batch timings at the Old Perungalathur center.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-gold-300 hover:text-gold-200 font-medium"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Book Perungalathur Trial &rarr;
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Center 4: Global Online */}
            <Reveal delay={0.4} className="h-full">
              <div className="bg-[#120B0E] border border-gold-500/20 rounded-sm p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-wider font-semibold mb-2">
                    <Globe className="w-4 h-4" /> Global Online
                  </div>
                  <h3 className="font-display text-lg text-cream-50 mb-1">Live Interactive Batches</h3>
                  <p className="text-xs text-cream-100/60 mb-4">USA, UK, Singapore, Middle East</p>

                  <div className="space-y-3 pt-3 border-t border-cream-100/10 text-xs">
                    <div>
                      <p className="text-gold-300 font-medium">Timezone Coordinated:</p>
                      <p className="text-cream-100/70">Personalized 1-on-1 & small groups</p>
                    </div>
                    <div>
                      <p className="text-gold-300 font-medium">High-Def Audio / Video:</p>
                      <p className="text-cream-100/70">Talam analysis, posture correction</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-cream-100/10">
                  <a
                    href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent("Hi Suha Academy, I am inquiring about Global Online classes for Bharatanatyam / Carnatic Vocal.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-gold-300 hover:text-gold-200 font-medium"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Enquire Online Batches &rarr;
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Student Groups / Every Stage */}
      <section className="relative py-24 md:py-32 bg-cream-50">
        <div className="container-wide section-padding">
          <SectionHeader
            number="03"
            eyebrow="Every Stage"
            title="A Place to Learn at Every Age"
            subtitle="From four-year-old beginners stepping to rhythmic tat-tai-ta-ha to working professionals and homemakers."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-14">
            {studentGroups.map((group, i) => (
              <Reveal
                key={group.title}
                delay={i * 0.08}
                className="p-6 bg-white border border-ivory-200 rounded-sm text-center transition-all duration-500 hover:border-gold-300 hover:shadow-lg hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-navy-900/5 flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-gold-500/10">
                    {group.icon === "Flower2" && <span className="text-xl">🌸</span>}
                    {group.icon === "BookOpen" && <span className="text-xl">📖</span>}
                    {group.icon === "Star" && <span className="text-xl">✨</span>}
                    {group.icon === "GraduationCap" && <span className="text-xl">🎓</span>}
                    {group.icon === "Users" && <span className="text-xl">👥</span>}
                  </div>
                  <h3 className="text-sm font-display font-semibold text-navy-900 mb-2">
                    {group.title}
                  </h3>
                  <p className="text-xs text-navy-700/70 leading-relaxed">
                    {group.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-ivory-100 text-[11px] text-gold-700 font-medium">
                  {i === 0 && "Age 4–6 Years"}
                  {i === 1 && "Age 7–12 Years"}
                  {i === 2 && "Age 13–18 Years"}
                  {i === 3 && "College & Youth"}
                  {i === 4 && "Adult Learners"}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Classroom Essentials & Pedagogy */}
      <section className="relative py-24 md:py-32 bg-paper overflow-hidden">
        <div className="container-wide section-padding">
          <SectionHeader
            number="04"
            eyebrow="Classroom Traditions"
            title="Practice Essentials & Studio Discipline"
            subtitle="The sacred habits that transform learners into poised classical performers."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <Reveal delay={0.1}>
              <div className="p-7 bg-white border border-ivory-200 rounded-sm hover:border-gold-300 transition-all">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-700 font-semibold mb-4">
                  01
                </div>
                <h3 className="font-display text-base text-navy-900 mb-2">Salangai (Brass Bells)</h3>
                <p className="text-xs text-navy-700/70 leading-relaxed">
                  Consecrated through formal Salangai Pooja under Guru Smt. Ranjini Pradeep once foundational footwork rhythm is perfected. Authentic triple-row brass bells mounted on padded leather/velvet straps.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-7 bg-white border border-ivory-200 rounded-sm hover:border-gold-300 transition-all">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-700 font-semibold mb-4">
                  02
                </div>
                <h3 className="font-display text-base text-navy-900 mb-2">Practice Saree & Uniform</h3>
                <p className="text-xs text-navy-700/70 leading-relaxed">
                  Students learn in traditional cotton dance practice sarees or academy kurti uniforms that facilitate Araimandi (half-sitting posture) and full body symmetry without restriction.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-7 bg-white border border-ivory-200 rounded-sm hover:border-gold-300 transition-all">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-700 font-semibold mb-4">
                  03
                </div>
                <h3 className="font-display text-base text-navy-900 mb-2">Voice & Shruti Culture</h3>
                <p className="text-xs text-navy-700/70 leading-relaxed">
                  Vocal disciples train with acoustic electronic Tanpuras, disciplined breath regulation (Pranayama), Gamaka exercises, and handwritten sloka/keerthanam sahithya notebooks.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Admissions Step-by-Step */}
      <section className="relative py-20 bg-cream-50 border-t border-ivory-200">
        <div className="container-wide section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold">How to Join</span>
              <h2 className="text-display-sm font-display text-navy-900 mt-1">Simple 4-Step Admission Process</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Enquiry", desc: "Submit contact form or WhatsApp us with student age and interest." },
                { step: "2", title: "Consultation", desc: "Speak directly with Guru or senior faculty to assess level." },
                { step: "3", title: "Batch Allocation", desc: "Choose nearest center (Medavakkam, Perumbakkam, Perungalathur)." },
                { step: "4", title: "Vidyarambham", desc: "Begin your artistic journey with auspicious traditional prayer." },
              ].map((s) => (
                <div key={s.step} className="bg-white p-5 rounded-sm border border-ivory-200 text-center">
                  <span className="w-8 h-8 rounded-full bg-gold-500 text-navy-950 font-bold text-xs inline-flex items-center justify-center mb-3">
                    {s.step}
                  </span>
                  <h4 className="font-display text-sm text-navy-900 font-semibold mb-1">{s.title}</h4>
                  <p className="text-xs text-navy-700/60">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 bg-navy-950 text-center">
        <div className="container-wide section-padding">
          <Reveal>
            <OrnamentDivider light className="mb-8" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display-md font-display text-cream-50 mb-4">
              Begin Your Artistic Journey
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-cream-100/60 max-w-lg mx-auto mb-8 text-sm">
              Admissions open for 2026–2027 batches. Connect with us to schedule a trial session or visit your nearest center.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-950 font-medium text-sm rounded-sm hover:bg-gold-400 transition-all duration-300 group shadow-md"
              >
                <span>Enquire About Admissions</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent("Hi Suha Academy, I would like to enquire about new admissions for classical dance / music.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cream-100/30 text-cream-50 font-medium text-sm rounded-sm hover:border-gold-400 hover:text-gold-300 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
