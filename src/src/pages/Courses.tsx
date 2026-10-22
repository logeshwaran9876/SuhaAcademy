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
import CourseRoadmapModal from "@/components/CourseRoadmapModal";
import { Reveal } from "@/components/Reveal";
import { OrnamentDivider } from "@/components/Decorations";
import { academy } from "@/data/academy";

const courseShowcases: CourseShowcaseData[] = [
  {
    slug: "carnatic-music",
    title: "Carnatic Music",
    eyebrow: "Carnatic Sangeetham · Sacred Vocal Pedagogy",
    introHeading: "Intro",
    introParagraphs: [
      "The classical music of South India is Carnatic Music which comprises of basic elements such as Raga, Tala, Shruthi and Swaras. It is one of the two main genres of classical music ( other being Hindustani ) and has evolved from the ancient Hindu texts and traditions with most of the songs being composed in Telugu, Tamil and Sanskrit. It is important for an aspiring singer to learn Carnatic music in order to understand the fundamentals of Ragas and Talas.",
      "Although improvisation plays an important role, Carnatic music is mainly sung through compositions, especially the kritis (or kirtanams) – a form developed between the 14th and 20th centuries by composers such as Purandara Dasa, and the Trinity of Carnatic music.",
      "Carnatic music is also usually taught and learned through compositions. Telugu language predominates in the evolution of Carnatic music.",
    ],
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
        subtitle: "Mastering Gamakas, breath regulation and devotional diction",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_carnatic_slider_03.jpg",
        alt: "Senior Disciple Vocal Recital with Tanpura",
        title: "Senior Disciple Vocal Recital",
        subtitle: "Intricate raga alapana, swara kalpana and Trinity keerthanams",
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
    title: "Bharathanatyam",
    eyebrow: "Classical Dance · Vazhuvoor Baani",
    introHeading: "Intro",
    introParagraphs: [
      "Bharathanatyam training at Suha Academy follows a systematic learning approach across three stages — Basic, Intermediate, and Advanced — nurturing students into confident dancers with strong technique, rhythmic precision, expressive depth, and a sound understanding of the art form.",
      "The academy follows the Vazhuvoor Baani, celebrated for its fluid movements, graceful body lines, expressive facial expressions, and vibrant stage presentation.",
      "As students advance through each stage, they explore foundational adavus, hand gestures, rhythmic coordination, and body control, gradually progressing to complex dance compositions, nuanced abhinaya, traditional repertoire, and choreographic creativity.",
    ],
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
        subtitle: "Vazhuvoor Baani posture alignment, aramandi and radiant aharya",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_bharatanatyam_slider_03.jpg",
        alt: "Expressive Abhinaya & Fluid Grace",
        title: "Expressive Abhinaya & Fluid Grace",
        subtitle: "Nuanced emotional depth, graceful body lines and rhythmic coordination",
        objectPosition: "center center",
      },
      {
        src: "/suha_media/courses/course_bharatanatyam_slider_04.jpg",
        alt: "Synchronized Ensemble Flower Shower Presentation",
        title: "Synchronized Ensemble Flower Shower",
        subtitle: "Group formations, floral pushpanjali and celebratory stage presentation",
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
    introHeading: "Intro",
    introParagraphs: [
      "The Mohiniyattam curriculum is structured into three progressive levels — **Basic, Intermediate, and Advanced** — designed to develop students’ technical proficiency, expressive abilities, theoretical knowledge, and artistic understanding of this graceful classical dance form of Kerala.",
      "Each level builds upon the foundations of the previous one, enabling students to progress from fundamental movements and gestures to elaborate repertoire, expressive interpretation, and independent choreography.",
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

];

export default function Courses() {
  const [selectedRoadmapSlug, setSelectedRoadmapSlug] = useState<string | null>(null);

  return (
    <>
      <PageHero pageKey="courses" />

      {/* Courses Showcases: Bharathanatyam, Mohiniyattam, Carnatic Music */}
      <section className="relative py-16 md:py-24 bg-cream-50" id="courses-showcase">
        <div className="container-wide section-padding">
          <SectionHeader
            number="01"
            eyebrow="Classical Disciplines"
            title="Our Courses & Progressive Repertoire"
            subtitle="Explore each discipline — review the comprehensive 3-Level Roadmap detailing progression from foundational training to solo stage debut."
          />

          <div className="mt-12 space-y-12 md:space-y-16">
            {courseShowcases.map((course, idx) => (
              <Reveal key={course.slug} delay={idx * 0.1}>
                <CourseShowcaseCard
                  course={course}
                  index={idx}
                  onRoadmap={(slug) => setSelectedRoadmapSlug(slug)}
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 p-6 rounded-sm bg-white border border-gold-500/20 max-w-3xl mx-auto text-center shadow-xs">
            <p className="text-sm text-navy-800 leading-relaxed">
              <strong className="text-gold-700 font-serif">Dual Art Discipline Advantage:</strong> Many disciples
              enroll concurrently in both Bharathanatyam and Carnatic Music for holistic rhythm (Talam) &amp; melodic mastery. Special coordinated
              scheduling is provided across our Medavakkam and Perumbakkam centers.
            </p>
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
              Admissions Open for 2026–2027
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-cream-100/60 max-w-lg mx-auto mb-8 text-sm">
              Enquire about classes and upcoming batches. Reach out to us and our team will guide you through the next steps.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-950 font-medium text-sm rounded-sm hover:bg-gold-400 transition-all duration-300 group shadow-md"
              >
                <span>Enquire About Classes</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      {/* 3-Level Roadmap Modal */}
      <CourseRoadmapModal
        courseSlug={selectedRoadmapSlug}
        onClose={() => setSelectedRoadmapSlug(null)}
      />
    </>
  );
}
