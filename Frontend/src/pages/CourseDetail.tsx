import { Link } from "react-router-dom";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { GoldFrame, OrnamentDivider } from "@/components/Decorations";
import EnquiryForm from "@/components/EnquiryForm";
import Gallery from "@/components/Gallery";
import { courses } from "@/data/courses";
import { galleryImages } from "@/data/gallery";

export default function CourseDetail({ slug }: { slug: string }) {
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-navy-700/60">Course not found.</p>
        <Link to="/courses" className="text-gold-600 hover:underline mt-4 inline-block">
          Back to Courses
        </Link>
      </div>
    );
  }

  const relatedGallery = galleryImages.filter(
    (img) =>
      img.category === course.title ||
      img.category === "Bharatanatyam" ||
      img.category === "Carnatic Music"
  );

  return (
    <>
      <PageHero
        eyebrow={course.isWorkshop ? "Workshop" : "Course"}
        title={course.title}
        subtitle={course.shortDescription}
        image={course.image}
        height="lg"
      />

      {/* Introduction */}
      <section className="relative py-24 md:py-32 bg-cream-50">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal className="relative">
              <div className="relative max-w-lg mx-auto lg:mx-0">
                <div className="absolute -inset-3 border border-gold-500/15 rounded-sm pointer-events-none" />
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    className="w-full h-[480px] object-cover"
                  />
                  <GoldFrame />
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-4 h-4 text-gold-500" />
                  <span className="eyebrow">Introduction</span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="text-display-md font-display font-medium text-navy-900 mb-6">
                  What Students Learn
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-navy-800/80 leading-relaxed mb-8">
                  {course.longDescription}
                </p>
              </Reveal>

              {/* Highlights */}
              <Reveal delay={0.3}>
                <ul className="space-y-3">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-navy-800">
                      <Check className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum / Repertoire */}
      {course.curriculum.length > 0 && (
        <section className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
          <div className="container-wide section-padding relative z-10">
            <SectionHeader
              light
              eyebrow={course.isWorkshop ? "Archive" : "Repertoire & Structure"}
              title={
                course.isWorkshop
                  ? "Workshop Archive"
                  : `${course.title} Curriculum`
              }
              subtitle="A structured progression through the classical tradition."
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 max-w-4xl mx-auto">
              {course.curriculum.map((item, i) => (
                <Reveal
                  key={item}
                  delay={i * 0.05}
                  className="p-5 border border-cream-100/10 rounded-sm text-center hover:border-gold-400/30 transition-colors group"
                >
                  <span className="text-xs font-serif italic text-gold-400/40 block mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-display text-cream-50">{item}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Performance Opportunities */}
      <section className="relative py-24 md:py-32 bg-cream-50">
        <div className="container-wide section-padding">
          <SectionHeader
            eyebrow="Beyond the Classroom"
            title="Performance Opportunities"
            subtitle="Students are encouraged to take part in events, competitions and stage programmes."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-14 max-w-4xl mx-auto">
            {[
              { title: "KKKV Competitions", text: "Annual classical arts competition — Kodai Kaala Kalai Vizha." },
              { title: "Annual Day", text: "Celebrating student progress with prize distribution and stage performances." },
              { title: "Stage Programmes", text: "Opportunities to perform at cultural events and academy showcases." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="p-7 bg-white border border-ivory-200 rounded-sm hover:shadow-lg hover:shadow-navy-900/5 transition-all">
                  <h3 className="font-display text-lg text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-navy-700/70">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {relatedGallery.length > 0 && (
        <section className="relative py-24 md:py-32 bg-paper">
          <div className="container-wide section-padding">
            <SectionHeader
              eyebrow="Gallery"
              title="Glimpses"
            />
            <div className="mt-12">
              <Gallery images={relatedGallery} showFilters={false} limit={6} />
            </div>
          </div>
        </section>
      )}

      {/* Enquire */}
      <section className="relative py-24 md:py-32 bg-cream-50">
        <div className="container-wide section-padding">
          <div className="max-w-2xl mx-auto">
            <SectionHeader
              eyebrow="Enquire"
              title={`Join ${course.title}`}
              subtitle="Fill in the form below and we'll get in touch with you."
            />
            <div className="mt-10 bg-white border border-ivory-200 rounded-sm p-8">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
