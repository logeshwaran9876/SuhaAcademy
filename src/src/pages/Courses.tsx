import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  MessageCircle,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CourseShowcaseCard, { type CourseShowcaseData } from "@/components/CourseShowcaseCard";
import CourseModal from "@/components/CourseModal";
import CourseRoadmapModal from "@/components/CourseRoadmapModal";
import { Reveal } from "@/components/Reveal";
import { OrnamentDivider } from "@/components/Decorations";
import { academy } from "@/data/academy";

const courseShowcases: CourseShowcaseData[] = [
  {
    slug: "carnatic-music",
    title: "Carnatic Music",
    eyebrow: "Carnatic Sangeetham · Sacred Vocal Pedagogy",
    shortDescription:
      "Cultivate pristine Shruti, Tala discipline, Gamaka modulation, and devotion through an authentic, step-by-step classical syllabus — from foundational Sarali Varisais and Geethams to elaborate Krithis and Manodharma improvisation.",
    photos: [
      {
        src: "/suha_media/courses/course_carnatic_slider_01.jpg",
        alt: "Shruti Discipline & Sacred Pedagogy with Tambura",
        title: "Shruti Discipline & Sacred Pedagogy",
        subtitle: "Pristine acoustic vocal training with tambura accompaniment",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_carnatic_slider_02.jpg",
        alt: "Bhava-Rich Classical Sahitya Rendition",
        title: "Bhava-Rich Sahitya Rendition",
        subtitle: "Mastering Gamakas, breath regulation, and devotional diction",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_carnatic_slider_03.jpg",
        alt: "Senior Disciple Vocal Recital with Tanpura",
        title: "Senior Disciple Vocal Recital",
        subtitle: "Intricate raga alapana, swara kalpana, and Trinity keerthanams",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_carnatic_slider_04.jpg",
        alt: "Classical Sabha Kutcheri Ensemble with Mridangam",
        title: "Classical Sabha Kutcheri Ensemble",
        subtitle: "Vocal duo accompanied by live mridangam rhythm",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_carnatic_slider_05.jpg",
        alt: "Full Classical Concert Accompaniment with Violin & Mridangam",
        title: "Full Classical Concert Accompaniment",
        subtitle: "Performing alongside distinguished mridangam and violin vidwans",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_carnatic_slider_06.jpg",
        alt: "Laya & Tala Rhythm Discipline on Mridangam",
        title: "Laya & Tala Rhythm Discipline",
        subtitle: "Understanding percussion synchronization, korvais, and rhythmic cycles",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_carnatic_slider_07.jpg",
        alt: "Suha Youth Choral Presentation",
        title: "Suha Youth Choral Presentation",
        subtitle: "Ensemble choir singing classical geethams and bhajans at annual celebrations",
        objectPosition: "center center",
      },
    ],
  },
  {
    slug: "bharatanatyam",
    title: "Bharatanatyam",
    eyebrow: "Classical Dance · Vazhuvoor Baani",
    shortDescription:
      "Explore the structure, rhythm, expression, and storytelling of one of India's most revered classical dance traditions. From foundational adavus to full margam repertoire and solo Arangetrams.",
    photos: [
      {
        src: "/suha_media/courses/course_bharatanatyam_slider_01.jpg",
        alt: "Durga Mahishasuramardini Thematic Production",
        title: "Durga Mahishasuramardini Thematic Production",
        subtitle: "Multi-armed classical pose with sculpted hasta mudras and aramandi",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_bharatanatyam_slider_02.jpg",
        alt: "Margam Repertoire & Solo Precision under Spotlight",
        title: "Margam Repertoire & Solo Precision",
        subtitle: "Vazhuvoor Baani posture alignment, aramandi, and radiant aharya",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_bharatanatyam_slider_03.jpg",
        alt: "Expressive Abhinaya & Fluid Grace",
        title: "Expressive Abhinaya & Fluid Grace",
        subtitle: "Nuanced emotional depth, graceful body lines, and rhythmic coordination",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_bharatanatyam_slider_04.jpg",
        alt: "Synchronized Ensemble Flower Shower Presentation",
        title: "Synchronized Ensemble Flower Shower",
        subtitle: "Group formations, floral pushpanjali, and celebratory stage presentation",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_bharatanatyam_slider_05.jpg",
        alt: "Thematic Stage Productions — Dasaavatharam",
        title: "Thematic Stage Productions — Dasaavatharam",
        subtitle: "Mythological stories brought to life through Guru Smt. Ranjini Pradeep's choreography",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_bharatanatyam_slider_06.jpg",
        alt: "Disciples Stage Debut & Pushpanjali in Seated Namaskaram",
        title: "Disciples Stage Debut & Pushpanjali",
        subtitle: "Young artists presenting traditional namaskaram and introductory margam items",
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
];

export default function Courses() {
  const [selectedCourseSlug, setSelectedCourseSlug] = useState<string | null>(null);
  const [selectedRoadmapSlug, setSelectedRoadmapSlug] = useState<string | null>(null);

  return (
    <>
      <PageHero pageKey="courses" />

      {/* Courses Showcases: Carnatic Music, Bharatanatyam, Mohiniyattam */}
      <section className="relative py-16 md:py-24 bg-cream-50" id="courses-showcase">
        <div className="container-wide section-padding">
          <SectionHeader
            number="01"
            eyebrow="Classical Disciplines"
            title="Our Courses & Progressive Repertoire"
            subtitle="Explore each discipline — click Explore Course for full syllabus details or 3-Level Roadmap for the progression from beginner to solo debut."
          />

          <div className="mt-12 space-y-12 md:space-y-16">
            {courseShowcases.map((course, idx) => (
              <Reveal key={course.slug} delay={idx * 0.1}>
                <CourseShowcaseCard
                  course={course}
                  index={idx}
                  onExplore={(slug) => setSelectedCourseSlug(slug)}
                  onRoadmap={(slug) => setSelectedRoadmapSlug(slug)}
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 p-6 rounded-sm bg-white border border-gold-500/20 max-w-3xl mx-auto text-center shadow-xs">
            <p className="text-sm text-navy-800 leading-relaxed">
              <strong className="text-gold-700 font-serif">Dual Art Discipline Advantage:</strong> Many disciples
              enroll concurrently in both Bharatanatyam and Carnatic Music for holistic rhythm (Talam) &amp; melodic mastery. Special coordinated
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
            subtitle="We conduct regular batches across our prime centers in Chennai."
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
                      <p className="text-gold-800 font-bold mb-0.5">Batch Schedule:</p>
                      <p className="text-navy-900 font-medium">Weekday &amp; Weekend Batches Available (Contact Admissions for Current Schedule)</p>
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
                      <p className="text-gold-800 font-bold mb-0.5">Batch Schedule:</p>
                      <p className="text-navy-900 font-medium">Weekday &amp; Weekend Batches Available (Contact Admissions for Current Schedule)</p>
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
             
            </div>
          </Reveal>
        </div>
      </section>

      {/* Course Content Modal */}
      <CourseModal
        courseSlug={selectedCourseSlug}
        onClose={() => setSelectedCourseSlug(null)}
        onOpenRoadmap={(slug) => {
          setSelectedCourseSlug(null);
          setSelectedRoadmapSlug(slug);
        }}
      />

      {/* 3-Level Roadmap Modal */}
      <CourseRoadmapModal
        courseSlug={selectedRoadmapSlug}
        onClose={() => setSelectedRoadmapSlug(null)}
        onOpenCourseModal={(slug) => {
          setSelectedRoadmapSlug(null);
          setSelectedCourseSlug(slug);
        }}
      />
    </>
  );
}
