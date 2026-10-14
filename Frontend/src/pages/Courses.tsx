import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  BookOpen,
  Globe,
  MessageCircle,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CourseShowcaseCard, { type CourseShowcaseData } from "@/components/CourseShowcaseCard";
import { Reveal } from "@/components/Reveal";
import { OrnamentDivider, MandalaWatermark } from "@/components/Decorations";
import { courses, studentGroups } from "@/data/courses";
import { academy } from "@/data/academy";

const courseShowcases: CourseShowcaseData[] = [
  {
    slug: "bharatanatyam",
    title: "Bharatanatyam",
    eyebrow: "Classical Dance · Thanjavur Bani",
    shortDescription:
      "Explore the structure, rhythm, expression, and storytelling of one of India's most revered classical dance traditions. From foundational adavus to full margam repertoire and solo Arangetrams.",
    curriculum: [
      "Adavus & Mudras",
      "Pushpanjali",
      "Alarippu",
      "Jathiswaram",
      "Shabdam",
      "Varnam Centerpiece",
      "Padam & Keerthanam",
      "Thillana & Mangalam",
      "Arangetram Guidance",
    ],
    cta: "Explore Bharatanatyam",
    eventBadge: "Annual Day, Singapore Tour & Arangetram",
    eventDesc:
      "Students perform in grand thematic productions (Dasaavatharam), SOTA Singapore, and solo Arangetrams.",
    eventLink: "/events/suha-annual-day",
    features: [
      "Bridge Academy Graded Certification",
      "Medavakkam & Perumbakkam Centers",
      "Stage Repertoire & Salangai Pooja",
    ],
    photos: [
      {
        src: "/suha_media/courses/course_bharatanatyam_slider_01.jpg",
        alt: "Bharatanatyam Stage Margam Solo Recital",
        title: "Margam Repertoire & Solo Precision",
        subtitle: "Classic Araimandi, posture alignment and sculpted hasta mudras",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_bharatanatyam_slider_02.jpg",
        alt: "Bharatanatyam Classical Stage Performance",
        title: "Stage Recitals & Grand Productions",
        subtitle: "Dressed in temple silk costumes and traditional temple jewellery",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_bharatanatyam_slider_03.jpg",
        alt: "Senior Disciple Stage Portrait",
        title: "Arangetram & Solo Stage Grooming",
        subtitle: "Rigorous 1-on-1 mentorship for full solo stage debuts",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_bharatanatyam_slider_04.jpg",
        alt: "Traditional Costume & Shringara Details",
        title: "Sacred Aesthetic & Aharya Abhinaya",
        subtitle: "Traditional temple jewellery, fresh flowers & velvet salangai",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_bharatanatyam_slider_05.jpg",
        alt: "Group Ensemble Classical Presentation",
        title: "Synchronized Ensemble Choreography",
        subtitle: "Group formations, rhythmic coordination and laya control",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_bharatanatyam_slider_06.jpg",
        alt: "Senior Disciple Solo Recital",
        title: "Classical Form & Lineage Nuances",
        subtitle: "Thanjavur Bani aesthetics nurtured across all levels",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/shared/shared_event_thematic_kingini_aada.jpg",
        alt: "Thematic Production Highlights",
        title: "Thematic Stage Productions",
        subtitle: "Dasaavatharam and Geetham Paada – Kingini Aada",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/shared/shared_event_dasaavatharam_production.jpg",
        alt: "Dasaavatharam Classical Production",
        title: "Dasaavatharam Production Highlights",
        subtitle: "Grand auditorium recitals and annual cultural tours",
        objectPosition: "center center",
      },
    ],
  },
  {
    slug: "mohiniyattam",
    title: "Mohiniyattam",
    eyebrow: "The Dance of the Enchantress · Kerala Tradition",
    shortDescription:
      "Embrace the grace, gentle swaying movements, and lyrical abhinaya of Kerala's classical dance tradition. Structured into three progressive levels — Basic, Intermediate, and Advanced — emphasizing Lasya, balance, and fluid wave-like rhythm.",
    curriculum: [
      "Cholkettu Invocation",
      "Jatiswaram Rhythm",
      "Varnam Storytelling",
      "Padam & Abhinaya",
      "Thillana Finale",
      "Slokam & Moksha",
      "Navarasa Expression",
    ],
    cta: "Explore Mohiniyattam",
    eventBadge: "Margazhi Maha Utsav & Sabha Recitals",
    eventDesc:
      "Festive temple presentations, Sopana classical ensembles, and prestigious sabha showcases.",
    eventLink: "/events/suha-utsavam",
    features: [
      "Structured 3-Level Syllabus",
      "Kasavu Costume & Lyrical Lasya",
      "Individualized Feedback & Posture Grooming",
    ],
    photos: [
      {
        src: "/suha_media/courses/course_mohiniyattam_slider_01.jpg",
        alt: "Mohiniyattam Lasya Grace & Mudra by Smt. Swarna Sahasra",
        title: "The Dance of the Enchantress",
        subtitle: "Sculpted Lasya, subtle sway and serene facial expression",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_mohiniyattam_slider_02.jpg",
        alt: "Swati Tirunal Classical Festival Recital",
        title: "Swati Sangeetha Utsav Recitals",
        subtitle: "Sopana sangeetham rhythms and pristine Kerala Kasavu costumes",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_mohiniyattam_slider_03.jpg",
        alt: "Kasavu Costume & Lyrical Wave-like Sway",
        title: "Fluid Wave-Like Andolika Movements",
        subtitle: "Graceful torsos mimicking the gentle sway of Kerala palms",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_mohiniyattam_slider_04.jpg",
        alt: "Mohiniyattam Ensemble Presentation",
        title: "Cholkettu to Moksha Progression",
        subtitle: "Structured traditional margam taught with authentic nuance",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_mohiniyattam_slider_05.jpg",
        alt: "Stage Lighting Classical Performance",
        title: "Solo Sabha Recitals & Temple Offerings",
        subtitle: "Expressive devotional abhinaya in temple sabha environments",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_mohiniyattam_slider_06.jpg",
        alt: "Traditional Temple Mandapam Recital",
        title: "Heritage & Living Tradition",
        subtitle: "Cultivating poise, patience and expressive eyes (Drishti Bheda)",
        objectPosition: "center center",
      },
    ],
  },
  {
    slug: "carnatic-music",
    title: "Carnatic Vocal Music",
    eyebrow: "Carnatic Sangeetham · Sacred Vocal Pedagogy",
    shortDescription:
      "Cultivate pristine Shruti, Tala discipline, Gamaka modulation, and devotion through an authentic, step-by-step classical syllabus — from foundational Sarali Varisais and Geethams to elaborate Krithis and Manodharma improvisation.",
    curriculum: [
      "Sarali, Jantai & Dhatu Varisais",
      "Alankaram & Melakarta Ragas",
      "Geethams & Swarajathis",
      "Adi & Ata Tala Varnams",
      "Trinity Keerthanams",
      "Raga Alapana & Neraval",
      "Kalpanaswaras & Thillanas",
    ],
    cta: "Explore Carnatic Music",
    eventBadge: "Thyagaraja Aradhana & Vasantha Swaranjali",
    eventDesc:
      "Pancharatna homage alongside vidwans, Margazhi concert series, and elders seva recitals.",
    eventLink: "/events/vasantha-swaranjali",
    features: [
      "Acoustic Tanpura & Voice Culture",
      "Dual Dance-Music Rhythmic Harmony",
      "Graded University Exam Certifications",
    ],
    photos: [
      {
        src: "/suha_media/courses/course_carnatic_slider_05.jpg",
        alt: "Senior Disciple Vocal Recital",
        title: "Shruti Discipline & Voice Culture",
        subtitle: "Gamaka modulation, breath regulation and swara clarity",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/shared/shared_event_thyagaraja_homage.jpg",
        alt: "Thyagaraja Aradhana Pancharatna Homage",
        title: "Thyagaraja Aradhana Homage",
        subtitle: "Annual renditions alongside esteemed vidwans in sabhas",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_carnatic_slider_06.jpg",
        alt: "Sabha Vocal Kutcheri Recital",
        title: "Keerthanams & Sahithya Purity",
        subtitle: "Compositions of Trinity: Thyagaraja, Dikshitar & Syama Sastri",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_carnatic_slider_01.jpg",
        alt: "Classical Vocal Kutcheri Presentation",
        title: "Live Concert Stage Presentations",
        subtitle: "Seated classical kutcheri format with acoustic accompaniments",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_carnatic_slider_02.jpg",
        alt: "Raga Alapana & Swara Improvisation",
        title: "Raga Alapana & Neraval",
        subtitle: "Intricate melodic exploration and bhava-rich phrasing",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_carnatic_slider_03.jpg",
        alt: "Trinity Repertoire & Sahitya Articulation",
        title: "Classical Sahitya & Diction",
        subtitle: "Clear pronunciation of Sanskrit, Telugu, and Tamil compositions",
        objectPosition: "center center",
      },

      {
        src: "/suha_media/courses/course_carnatic_slider_04.jpg",
        alt: "Senior Vocal Student Solo Concert",
        title: "Manodharma Sangeetham Roadmap",
        subtitle: "Kalpanaswaras, Korvai calculations and concert readiness",
        objectPosition: "center center",
      },

      {
        src: "/suha_media/courses/course_carnatic_slider_07.jpg",
        alt: "Vasantha Swaranjali Compassionate Seva Recital",
        title: "Vasantha Swaranjali Musical Seva",
        subtitle: "Singing devotional melodies and receiving blessings from elders",
        objectPosition: "center center",
      },
    ],
  },
];

type FilterTab = "all" | "bharatanatyam" | "mohiniyattam" | "carnatic-music";

export default function Courses() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [selectedCurriculumSlug, setSelectedCurriculumSlug] = useState<string>("bharatanatyam");
  const [selectedLevelIdx, setSelectedLevelIdx] = useState<number>(0);

  const displayedCourses = useMemo(() => {
    if (activeTab === "all") return courseShowcases;
    return courseShowcases.filter((c) => c.slug === activeTab);
  }, [activeTab]);

  const activeCurriculumCourse = useMemo(() => {
    return courses.find((c) => c.slug === selectedCurriculumSlug) || courses[0];
  }, [selectedCurriculumSlug]);

  const heroImage = useMemo(() => {
    if (activeTab === "mohiniyattam") return "/suha_media/Tabs/mohiniyattam.png";
    if (activeTab === "carnatic-music") return "/suha_media/Tabs/Carnatic.png";
    return "/suha_media/Tabs/Courses.png";
  }, [activeTab]);

  return (
    <>
      <PageHero
        pageKey="courses"
        image={heroImage}
        eyebrow={
          activeTab === "mohiniyattam"
            ? "Kerala Classical Lasya Tradition"
            : activeTab === "carnatic-music"
            ? "South Indian Classical Shastric Tradition"
            : activeTab === "bharatanatyam"
            ? "Vazhuvoor Baani • Classical Dance"
            : undefined
        }
        title={
          activeTab === "mohiniyattam"
            ? "Mohiniyattam Classical Arts"
            : activeTab === "carnatic-music"
            ? "Carnatic Vocal Sangeetham"
            : activeTab === "bharatanatyam"
            ? "Bharatanatyam Dance Tradition"
            : undefined
        }
      />

      {/* Filter Tabs Bar */}
      <section id="disciplines" className="bg-white border-b border-ivory-200 sticky top-[69px] z-30 py-3 shadow-xs">
        <div className="container-wide section-padding">
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {[
              { id: "all", label: "All Disciplines" },
              { id: "bharatanatyam", label: "Bharatanatyam" },
              { id: "mohiniyattam", label: "Mohiniyattam" },
              { id: "carnatic-music", label: "Carnatic Music" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  const newTab = tab.id as FilterTab;
                  setActiveTab(newTab);
                  if (newTab !== "all") {
                    setSelectedCurriculumSlug(newTab);
                  }
                }}
                className={`px-5 py-2 text-xs uppercase tracking-wider font-medium rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${activeTab === tab.id
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

      {/* Courses Showcases: Displayed One by One, each with its own multi-photo slider */}
      <section className="relative py-16 md:py-24 bg-cream-50" id="courses-showcase">
        <div className="container-wide section-padding">
          <SectionHeader
            number="01"
            eyebrow="Classical Disciplines"
            title="Our Courses & Progressive Repertoire"
            subtitle="Explore each discipline one by one — each accompanied by its own dedicated gallery of stage recitals, classroom training, and syllabus milestones."
          />

          <div className="mt-12 space-y-12 md:space-y-16">
            {displayedCourses.map((course, idx) => (
              <Reveal key={course.slug} delay={idx * 0.1}>
                <CourseShowcaseCard
                  course={course}
                  index={idx}
                  onExploreCurriculum={(slug) => {
                    setSelectedCurriculumSlug(slug);
                    setSelectedLevelIdx(0);
                    const el = document.getElementById("curriculum-roadmap");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 p-6 rounded-sm bg-white border border-gold-500/20 max-w-3xl mx-auto text-center shadow-xs">
            <p className="text-sm text-navy-800 leading-relaxed">
              <strong className="text-gold-700 font-serif">Dual Art Discipline Advantage:</strong> Many disciples
              enroll concurrently in both Bharatanatyam and Carnatic Music for holistic rhythm (Talam) & melodic mastery. Special coordinated
              scheduling is provided across our Medavakkam and Perumbakkam centers.
            </p>
          </div>
        </div>
      </section>

   
  

      {/* Center Schedules (The 2 Prime Centers) */}
      <section className="relative py-20 md:py-28 bg-[#FAF6EE] border-t border-gold-400/30 overflow-hidden">
        <div className="container-wide section-padding relative z-10 max-w-5xl mx-auto">
          <SectionHeader
            number="02"
            eyebrow="Center Schedules"
            title="Batch Timings by Location"
            subtitle="We conduct regular batches across our prime centers in Chennai, plus dedicated 1-on-1 online sessions for global learners."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12 max-w-4xl mx-auto">
            {/* Center 1: Medavakkam */}
            <Reveal delay={0.1} className="h-full">
              <div className="bg-white border-2 border-gold-400/30 rounded-sm p-6 sm:p-7 flex flex-col justify-between h-full shadow-md hover:border-gold-500 hover:shadow-xl transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 text-[10px] uppercase font-mono tracking-wider bg-gold-500 text-navy-950 font-bold rounded-xs shadow-2xs">
                      Central Studio
                    </span>
                    <div className="flex items-center gap-1.5 text-gold-700 text-xs uppercase tracking-wider font-bold">
                      <MapPin className="w-4 h-4 text-gold-600" /> Medavakkam
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-navy-950 mb-1">
                    Navins Starwood Towers
                  </h3>
                  <p className="text-xs text-navy-700/80 mb-5">
                    Vengaivasal Main Rd, Medavakkam, Chennai - 600100
                  </p>

                  <div className="space-y-3 pt-4 border-t border-ivory-200 text-xs">
                    <div className="p-3 rounded-xs bg-[#FAF7F0] border border-gold-400/20">
                      <p className="text-gold-800 font-bold mb-0.5">Friday Evenings:</p>
                      <p className="text-navy-900 font-medium">5:00 PM – 7:30 PM (Bharatanatyam)</p>
                    </div>
                    <div className="p-3 rounded-xs bg-[#FAF7F0] border border-gold-400/20">
                      <p className="text-gold-800 font-bold mb-0.5">Saturday Mornings:</p>
                      <p className="text-navy-900 font-medium">9:30 AM – 12:30 PM (Vocal & Dance)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-ivory-200">
                  <a
                    href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent("Hi Suha Academy, I am inquiring about batch timings at the Medavakkam center.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-navy-950 hover:text-gold-700 transition-colors group"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Book Medavakkam Trial Session</span>
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Center 2: Perumbakkam */}
            <Reveal delay={0.2} className="h-full">
              <div className="bg-white border-2 border-gold-400/30 rounded-sm p-6 sm:p-7 flex flex-col justify-between h-full shadow-md hover:border-gold-500 hover:shadow-xl transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 text-[10px] uppercase font-mono tracking-wider bg-gold-500 text-navy-950 font-bold rounded-xs shadow-2xs">
                      Bollineni Studio
                    </span>
                    <div className="flex items-center gap-1.5 text-gold-700 text-xs uppercase tracking-wider font-bold">
                      <MapPin className="w-4 h-4 text-gold-600" /> Perumbakkam
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-navy-950 mb-1">
                    Bollineni Hillside Ixora
                  </h3>
                  <p className="text-xs text-navy-700/80 mb-5">
                    BHS Recreational Club, Perumbakkam, Chennai - 600126
                  </p>

                  <div className="space-y-3 pt-4 border-t border-ivory-200 text-xs">
                    <div className="p-3 rounded-xs bg-[#FAF7F0] border border-gold-400/20">
                      <p className="text-gold-800 font-bold mb-0.5">Saturday Evenings:</p>
                      <p className="text-navy-900 font-medium">4:00 PM – 7:00 PM (Dance & Music)</p>
                    </div>
                    <div className="p-3 rounded-xs bg-[#FAF7F0] border border-gold-400/20">
                      <p className="text-gold-800 font-bold mb-0.5">Sunday Mornings:</p>
                      <p className="text-navy-900 font-medium">9:00 AM – 1:00 PM (All Levels)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-ivory-200">
                  <a
                    href={`https://wa.me/${academy.phoneRaw}?text=${encodeURIComponent("Hi Suha Academy, I am inquiring about batch timings at the Perumbakkam center.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-navy-950 hover:text-gold-700 transition-colors group"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Book Perumbakkam Trial Session</span>
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Student Groups / Every Stage
      <section className="relative py-24 md:py-32 bg-cream-50">
        <div className="container-wide section-padding">
          <SectionHeader
            number="05"
            eyebrow="Every Stage"
            title="A Place to Learn at Every Age"
            subtitle="From four-year-old beginners stepping to rhythmic tat-tai-ta-ha to working professionals and adult learners."
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
      </section> */}

      {/* Classroom Essentials & Pedagogy
      <section className="relative py-24 md:py-32 bg-paper overflow-hidden">
        <div className="container-wide section-padding">
          <SectionHeader
            number="06"
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
                  Consecrated through formal Salangai Pooja under Guru Smt. Ranjini Pradeep once foundational footwork
                  rhythm is perfected. Authentic triple-row brass bells mounted on padded velvet straps.
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
                  Students learn in traditional cotton dance practice sarees or academy kurti uniforms that facilitate
                  Araimandi (half-sitting posture) and full body symmetry without restriction.
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
                  Vocal disciples train with acoustic electronic Tanpuras, disciplined breath regulation (Pranayama),
                  Gamaka exercises, and handwritten sloka/keerthanam sahithya notebooks.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section> */}

      {/* Admissions Step-by-Step
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
                { step: "3", title: "Batch Allocation", desc: "Choose nearest center (Medavakkam or Perumbakkam)." },
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
      </section> */}

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
