import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { GoldFrame } from "./Decorations";
import type { Course } from "./types";

type CourseCardProps = {
  course: Course;
  index?: number;
};

export default function CourseCard({ course, index = 0 }: CourseCardProps) {
  return (
    <Reveal delay={index * 0.1} className="h-full">
      <article className="group h-full flex flex-col bg-white border border-ivory-200 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-navy-900/15 hover:border-gold-400">
        {/* Image */}
        <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent" />
          <GoldFrame />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-cream-50 drop-shadow-sm">
              {course.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6 md:p-8">
          <p className="text-sm sm:text-[15px] text-navy-800/80 leading-relaxed mb-6">
            {course.shortDescription}
          </p>

          {course.curriculum.length > 0 && (
            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold-700 font-semibold mb-3">
                {course.isWorkshop ? "Archive Topics" : "Curriculum & Progression"}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {course.curriculum.slice(0, 6).map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs sm:text-sm text-navy-900 font-medium"
                  >
                    <Check className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {course.curriculum.length > 6 && (
                <p className="text-xs text-navy-600/50 italic mt-2">
                  + {course.curriculum.length - 6} additional repertoire items
                </p>
              )}
            </div>
          )}

          <div className="mt-auto pt-4 border-t border-ivory-100 flex items-center justify-between">
            <Link
              to={`/courses/${course.slug}`}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-navy-950 hover:text-gold-700 transition-colors duration-300 group/link"
            >
              <span>{course.cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
