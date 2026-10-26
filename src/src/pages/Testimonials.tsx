import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Quote,
  CheckCircle2,
  MessageCircle,
  ExternalLink,
  Sparkles,
  Heart,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { OrnamentDivider, MandalaWatermark } from "@/components/Decorations";
import { academy } from "@/data/academy";

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  category: "parents" | "kkkv" | "events";
  categoryLabel: string;
  topic: string;
  rating: number;
  quote: string;
  badge?: string;
  url?: string;
}

export const communityReviews: ReviewItem[] = [
  // 1. PARENTS (10 Reviews)
  {
    id: "p1",
    name: "Harish Narayanan",
    role: "Parent of Bharathanatyam Disciple",
    category: "parents",
    categoryLabel: "Parents & Families",
    topic: "Character & Confidence",
    rating: 5,
    badge: "Google Verified Review",
    url: "https://www.google.com/maps/contrib/106087498821330410605/reviews?hl=en-IN",
    quote:
      "As a parent, I am delighted with the growth my daughter has experienced at the Suha Academy of fine arts. This is truly the best place for children to learn dance, not only because of the structured training but also because of the nurturing environment that makes every student feel valued. Under the guidance of Ranjani mam, my daughter has blossomed into a confident and graceful dancer. Ranjani mam’s teaching style is patient, inspiring and deeply rooted in tradition, yet she knows how to connect with children in a way that keeps them motivated. The relationship between students and teacher is warm and respectful, creating a positive atmosphere where learning feels joyful. Another highlight of the academy is the bond between younger students and senior dancers. The seniors act as mentors, guiding and encouraging the juniors, which builds confidence and instills discipline. This sense of community makes the academy feel like a family, where everyone grows together. I have seen my daughter become smarter, sharper and more expressive through her training here. The academy not only teaches dance but also shapes character and confidence. For any parent seeking the best for their child, This Academy is the perfect.",
  },
  {
    id: "p2",
    name: "Renu R",
    role: "Parent of Vocal Music Student (1.5 Yrs)",
    category: "parents",
    categoryLabel: "Parents & Families",
    topic: "Stage Exposure (6+ Times a Year)",
    rating: 5,
    badge: "Verified Academy Parent",
    quote:
      "My child had been a part of Suha academy for the past 1.5 yrs. She practices music vocal here. They do a wonderful job. Be it the training or stage presentations, each child is taken individual care and assessed based on their performance. Any child who needs extra support is given proper guidance. They arrange events in and around Chennai and make each child's stage participation mandatory so as to give confidence and exposure for each child. Ranjini Ma'am with a strong musical background plans and organises events for her students atleast 6 times a year which gives a sort of feel that our kids are in the best hands. All the best to Suha academy for their artistic journey. Wishing them many more accolades and accomplishments. 💐👍",
  },
  {
    id: "p3",
    name: "Ashwini Priya",
    role: "Parent of Dance Student",
    category: "parents",
    categoryLabel: "Parents & Families",
    topic: "Inspiring & Dedicated Guru",
    rating: 5,
    badge: "Verified Academy Parent",
    quote:
      "Ranjani mam has done a wonderful job in nurturing young talents and bringing out the best in every student. The dedication, patience and passion shown by our Guru. Ranjani mam truly reflect in the confidence and grace of the performers. Mam’s teaching talent is incredible. The fact that the kids are so eager and passionate to attend every class without missing it says it all about how inspiring she is. Thank you for creating such a positive and inspiring environment for learning dance.",
  },
  {
    id: "p4",
    name: "Soumya Kamath",
    role: "Parent of Carnatic & Bharathanatyam Disciple (3 Yrs)",
    category: "parents",
    categoryLabel: "Parents & Families",
    topic: "Prizes & Navratri Performances",
    rating: 5,
    badge: "3-Year Student Journey",
    quote:
      "My daughter is learning Carnatic and Bharthanatyam in Suha academy from last 3 years. She improved a lot and won many prizes in Bharthanatyam and music. And got many more opportunities to perform at the time of Navarathri and Suha Academy's annual day arranged in a very nice way with excellent performances .We are blessed to get Guru Smt.Ranjini Pradeep. She is an excellent teacher. She is guiding and training students in a kind and friendly way",
  },
  {
    id: "p5",
    name: "Lalitha Rathinam",
    role: "Parent of Student (2 Yrs · Madurai Meenakshi Temple Performer)",
    category: "parents",
    categoryLabel: "Parents & Families",
    topic: "Madurai Meenakshi Temple Recital",
    rating: 5,
    badge: "Temple Recital Performer",
    quote:
      "My daughter has been pursuing singing & dancing for the past 2 years with Guru Ranjini Pradeep maam and I am already seeing a noticeable improvement in my daughter's adavu and she sings quite a lot of devotional songs and theoretical knowledge as well. You are a wonderful mentor and we are absolutely lucky to learn from such a talented teacher. Your voice is amazing and is full of energy. The way you teach and motivate them to sing/dance during festivals ,encourages them. My daughter got an opportunity to perform a dance in the sacred Madurai Meenakshi amman temple for Navarathri'25 and this is really a very big proud and memorable moment for us. Thank you so much for providing the opportunity maam. Its really a great privilege to dance and experience the unforgettable moment. Providing such platforms help children build confidence, discipline and most importantly passion for arts. The most admirable thing is how continuously you provide many stage opportunities for students to showcase their talents. I personally witnessed the last 2 KKKV and annual day events. Organizing such events really requires tremendous effort, well planning and execution. You have executed well and that clearly shows your love towards the art. I am pretty sure Marghazhi utsav, Vasantha Sawaranjali, First international performances have added several feathers to your cap and made proud and hearty wishes to add more. We are so happy to be part of this journey and once again Thank you for nurturing young talents and creating beautiful moments for the students and their family members.",
  },
  {
    id: "p6",
    name: "Shenba Ramesh",
    role: "Parent of Music & Dance Student",
    category: "parents",
    categoryLabel: "Parents & Families",
    topic: "All Age Groups · Technique & Discipline",
    rating: 5,
    badge: "Verified Academy Parent",
    quote:
      "Suha academy of Fine arts, is truly an amazing place to learn and grow music and dance. Ranjini mam is multi talented, very skilled, friendly and dedicated to helping every student reach their full potential. The classes are engaging, well-organized and suitable for all age groups. The academy also focuses on discipline, technique and stage performance, which helps students develop both talent and confidence. I’m very happy to be part of such a wonderful learning environment and would definitely recommend this academy to anyone interested in music or dance.",
  },
  {
    id: "p7",
    name: "Meera Krishnan",
    role: "Parent of Classical Arts Disciple",
    category: "parents",
    categoryLabel: "Parents & Families",
    topic: "Methodical Training & National Stages",
    rating: 5,
    badge: "Verified Academy Parent",
    quote:
      "Suha academy follows an excellent methodical process to teach art forms - both Bharathanatyam and music. Students are encouraged when they find a particular step is difficult for them and special care is taken to make them feel at ease and do it with confidence . Discipline is a must to do for students in the academy .. students are encouraged to perform at various places in India and also places outside of the country.",
  },
  {
    id: "p8",
    name: "Sudarson K",
    role: "Parent of Bharathanatyam & Vocal Student",
    category: "parents",
    categoryLabel: "Parents & Families",
    topic: "Values & Cultural Richness",
    rating: 5,
    badge: "Verified Academy Parent",
    quote:
      "We are extremely happy to be a part of Suha Academy of Fine Arts, guided by the very talented and dedicated Guru Smt. Ranjini Pradeep. Her deep knowledge, patience and passion for both Bharathanatyam and Carnatic music vocal are truly inspiring. Many kids has shown remarkable improvement not just in technique, but also in understanding the values, discipline and cultural richness that come with learning these classical art forms. Ranjini mam’s ability to connect with each student and bring out their best is truly commendable. The academy maintains a warm, nurturing environment, with structured lessons and opportunities for performance, which helps build confidence and stage presence in childrens.We are very grateful to be a part from such a committed guru and highly recommend Suha Academy to anyone seeking authentic training in Bharathanatyam and Carnatic vocal music.",
  },
  {
    id: "p9",
    name: "Deepika Sivakumar",
    role: "Parent of Bharathanatyam Student",
    category: "parents",
    categoryLabel: "Parents & Families",
    topic: "Graceful Teacher & Vocal Purity",
    rating: 5,
    badge: "Verified Academy Parent",
    quote:
      "My daughter is a student of Smt.Ranjini Mam from Suha Academy of fine Arts. Ranjini Mam is multi talented with a very good voice and graceful dancer👏👏. As a teacher she inspires the kids to do better and draws out the best from them👏. She strives to lead them to perfection.. My daughter has learnt a lot from her and as a Mother I can see lots of improvement from my daughter's dance as days pass...Thanks to you Madam for always bringing your best to the table.👏👍 \"Suha Academy of Fine Arts\" is the right place to give wings to your passion for dance and music",
  },
  {
    id: "p10",
    name: "Maheswari Palaniswamy",
    role: "Parent of Classical Dance Student",
    category: "parents",
    categoryLabel: "Parents & Families",
    topic: "Patience, Guidance & Pride",
    rating: 5,
    badge: "Verified Academy Parent",
    quote:
      "Ranjini Mam, Thank you from the bottom of our hearts for your dedication, patience and guidance, Your hard work and passion were reflected in every performance and it was truly a memorable celebration. We are grateful for the love, discipline and confidence you have instilled in the children. Seeing them perform so beautifully on stage was a proud and joyful moment for all of us. Thank you once again for inspiring our children and nurturing their talent. We deeply appreciate everything you do and look forward to many more wonderful performances under your guidance.",
  },

  // 2. KKKV PARTICIPANTS (6 Reviews)
  {
    id: "k1",
    name: "Ranjani Karthik",
    role: "Parent of KKKV Music Contestants",
    category: "kkkv",
    categoryLabel: "KKKV Participants",
    topic: "Outstanding Music Competition",
    rating: 5,
    badge: "KKKV Festival Participant",
    quote:
      "Hats off to the entire team at SUHA Academy for orchestrating an outstanding music competition every year!👏 My kids had an incredible experience participating and showcasing their talents. The planning, coordination and execution were exemplary. 🤩 A huge thank you to SUHA Academy for creating such a powerful platform for young musicians to shine and boost their confidence. Your hard work is genuinely commendable! 🙏💕",
  },
  {
    id: "k2",
    name: "Priyadarshini Mathiazhagan",
    role: "Parent of KKKV Music & Dance Competitors",
    category: "kkkv",
    categoryLabel: "KKKV Participants",
    topic: "Judges' Constructive Guidance",
    rating: 5,
    badge: "KKKV Annual Celebration",
    quote:
      "Thank you Ranjini mam, for organizing \"Kodai Kaala Kalai Vizha\" ,a grand celebration of music and dance every year. And for all your efforts, dedication and passion 🙏😊 towards music and dance and most importantly for transferring your knowledge to the younger minds in a very fruitful manner. Kudos to all the kids for their efforts , dedication and passion. Keep rocking kids 😍😍. Best wishes for all the kids to achieve millions of milestones.💐Judges are really very sweet towards kids and they had given areas of improvements for all the kids boosting them to step up higher and higher. Thank you judges😊🙏",
  },
  {
    id: "k3",
    name: "Jayakumar N",
    role: "Parent of KKKV Participant",
    category: "kkkv",
    categoryLabel: "KKKV Participants",
    topic: "Seamless Coordination & Stage Growth",
    rating: 5,
    badge: "KKKV Platform Review",
    quote:
      "I would like to extend my sincere gratitude to Ranju Madam and the entire volunteering team for organizing such a seamless and well-coordinated event from beginning to end. This competition provided an excellent platform for children to showcase their talents on a prominent stage and in front of a wider audience. It was truly a valuable and enriching experience for all the participants. A heartfelt thank you to the judges for their thoughtful and constructive feedback, which will undoubtedly play a significant role in helping the children grow and evolve into more confident and capable individuals in the field of arts. We look forward with great anticipation to the next edition of KKKV.",
  },
  {
    id: "k4",
    name: "Subhasree Ramjee",
    role: "Parent of KKKV Competitor",
    category: "kkkv",
    categoryLabel: "KKKV Participants",
    topic: "Large Audience & Prominent Stage",
    rating: 5,
    badge: "KKKV Stage Experience",
    quote:
      "Thanks to Suha academy and Smt. Ranjani Pradeep mam and their whole volunteering team for a seamless experience right from beginning to end of the competition. This was surely a wonderful opportunity for kids to showcase their talent in a big stage and in front of larger audience. 🙏 Thanks to judges for their constructive feedback which will definitely help the kids to build them as a better person in their future in arts. Looking forward for next KKKV.",
  },
  {
    id: "k5",
    name: "Sri. Viswapriya Ramanathan",
    role: "Parent of KKKV 2025 Participant",
    category: "kkkv",
    categoryLabel: "KKKV Participants",
    topic: "Overcoming Stage Fear",
    rating: 5,
    badge: "KKKV 2025 Edition",
    quote:
      "Thank you for arranging the KKKV 2025 event and creating great opportunities for kids to showcase and mainly to bring up their confidence to face anyone and avoid stage fear. Very well organized and judges today clearly gave the constructive feedback in a very positive way for the kids to improve.Thank you @Ranjini Pradeep Music Dance mam and team for this wonderful event",
  },
  {
    id: "k6",
    name: "Pavithra Sreeram",
    role: "Parent of Disciples (Padur to Vengaivasal)",
    category: "kkkv",
    categoryLabel: "KKKV Participants",
    topic: "Travel from Padur to Vengaivasal",
    rating: 5,
    badge: "External Contestant & New Student",
    quote:
      "Thank you so much ma'am. kudos to kids and for the great efforts behind Ranjani ma'am . Being from outsiders we are so blessed to get this opportunity. Thank you so much and congratulations 🎉👏👏👏👏 kids . Keep up the good art work 💪. My kids Sadhanaa and Saarashree started going to Suha Academy from Aug month. Mrs. Ranjani is a legendary multi talented art coach for music, dance and also other acting talents too. We are so much impressed by the way she makes the kids get involved in singing. Motivate the kids in such a way they get interested in Music. My elder daughter already learnt the basics from my mom. But Mrs.Ranjani tested her singing level and recognised her as a good singer . Motivating her well. We travel from Padur to Vengai vaasal 2 days in a week, but kids never say I don't go to music class except for some exceptions. We are so happy and thank you so much ma'am .",
  },

  // 3. OTHER EVENTS & ANNUAL DAYS (5 Reviews)
  {
    id: "e1",
    name: "Bhargavi Ramaswamy",
    role: "Parent of Classical Dance Student",
    category: "events",
    categoryLabel: "Other Events & Recitals",
    topic: "Teamwork, Creativity & Discipline",
    rating: 5,
    badge: "Stage Choreography Review",
    quote:
      "“The choreography, discipline and dedication of Ranjani Mam and team are truly impressive. Every session is well-structured and enjoyable. It’s not just about dance here — it’s about building confidence, teamwork and creativity.” The way programs are organised by this academy are speechless and children are learning it 100%",
  },
  {
    id: "e2",
    name: "Meenakshi K",
    role: "Parent of Music & Dance Performer",
    category: "events",
    categoryLabel: "Other Events & Recitals",
    topic: "Public Stage Confidence",
    rating: 5,
    badge: "Public Events & Exposure",
    quote:
      "My daughter is going to both music and dance classes at Ranjini mam , really happy with my daughter's proceedings. She is also giving kids more opportunities to perform in public events , which helps kids to gain more confidence.",
  },
  {
    id: "e3",
    name: "Girisankar Subash",
    role: "Parent of Ishani (Stage Recital Performer)",
    category: "events",
    categoryLabel: "Other Events & Recitals",
    topic: "Revelation of Stage Talent",
    rating: 5,
    badge: "Stage Recital Revelation",
    quote:
      "A heartfelt thank you to Guru Smt. Ranjini Pradeep Ma'am and the entire team of SUHA Fine Arts Academy for organizing such a wonderful and memorable event. Although my daughter, Ishani, joined the academy only towards the end of last year and has been actively learning in recent months, witnessing her performance today was truly a revelation. We were delighted to see another beautiful version of her talent and confidence on stage. I know this is just the beginning and there is still a long way to go, but this performance has given us immense joy and pride. It was equally inspiring to watch all the talented young performers showcase their hard work and dedication. This would not have been possible without the tireless efforts, guidance, patience and encouragement of Ranjini Ma'am and every member of the academy. Our sincere gratitude to the entire SUHA Fine Arts Academy family for making this event so special and unforgettable. Wishing you all many more successful performances and continued excellence.",
  },
  {
    id: "e4",
    name: "Savitha",
    role: "Parent of Bharathanatyam & Vocal Student",
    category: "events",
    categoryLabel: "Other Events & Recitals",
    topic: "17th Annual Day & Swaranjali Seva",
    rating: 5,
    badge: "17th Annual Day & Swaranjali",
    quote:
      "My daughter joined Suha Academy about eight months ago and I have been truly impressed by her progress in both Bharathanatyam and Carnatic music. Under the guidance of Guru Smt. Ranjini Pradeep, she has developed not only in skill but also in discipline, confidence and stage presence. Every event is organized with exceptional dedication. The recently concluded 17th Annual Day was a spectacular celebration of art, reflecting months of sincere practice and meticulous planning. The opportunity given to every student to perform on stage was truly memorable. I also appreciate initiatives like Swarangali, where children perform for senior citizens, creating a meaningful experience for both generations. It beautifully reflects the values nurtured by the academy. Guru Smt. Ranjini Pradeep always encourages her students and parents to attend the prestigious programs she is associated with, providing invaluable exposure to the world of classical arts. It has been a privilege to witness and learn from eminent personalities such as Kalaimamani Smt. Nithyasree Mahadevan, Guru Shri Madurai R. Muralidharan, Smt. Chitra Muralidharan, Dr. Padma Subrahmanyam, Padma Shri P. Unnikrishnan and Shri Sai Vignesh and many more who have graced the academy’s events and inspired the students with their presence and encouragement. Guru Smt. Ranjini Pradeep pays attention to every detail—from choreography and orchestra to lighting, costumes, makeup and overall stage presentation. Regular music and dance examinations, along with small tokens of appreciation, keep the children motivated and eager to learn. Thank you, Ma’am, for your unwavering dedication and for inspiring every child to strive for excellence. Wishing you and all your students continued success as you take Indian classical arts and Carnatic music to even greater heights across the world.",
  },
  {
    id: "e5",
    name: "Annalakshmi Srivatsan",
    role: "Parent of Disciple (17th Annual Day)",
    category: "events",
    categoryLabel: "Other Events & Recitals",
    topic: "Cherished Stage Memories",
    rating: 5,
    badge: "17th Annual Day Celebration",
    quote:
      "What a blissful Saturday evening we had witnessing the 17th Annual Day celebration of Suha Academy. Every performance was a delight to watch and reflected immense dedication, patience and hard work put by Ranjini mam in nurturing each student. Every and everyone performed with such grace, confidence and joy making the evening truly memorable.My heartfelt appreciation also goes to the parent coordinators, volunteers and everyone who worked tirelessly behind the scenes to make the Annual Day such a grand success. Thank you so much, Mam, for giving my daughter the opportunity to perform on such a wonderful stage and create memories she will cherish forever. I feel truly happy to have enrolled her at Suha Academy and look forward to many more years of learning under your guidance.",
  },
];

function getInitials(name: string) {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function TestimonialCard({ review }: { review: ReviewItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = review.quote.length > 250;

  const displayedQuote = isLong && !isExpanded
    ? review.quote.slice(0, 240) + "…"
    : review.quote;

  const initials = getInitials(review.name);

  return (
    <article className="h-full bg-white border border-ivory-300 rounded-sm p-6 sm:p-7 flex flex-col justify-between hover:border-gold-400 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group shadow-2xs">
      <div>
        {/* Top Header: Monogram Avatar + Rating & Badge */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-navy-950 via-navy-900 to-gold-700 text-gold-300 flex items-center justify-center font-display font-semibold text-xs tracking-wider shrink-0 border border-gold-400/40 shadow-xs">
              {initials}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-display font-bold text-navy-950 leading-tight">
                  {review.name}
                </h3>
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
              </div>
              <p className="text-[11px] text-navy-600/75 leading-tight mt-0.5 line-clamp-1">
                {review.role}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end shrink-0">
            <div className="flex items-center gap-0.5 text-gold-500 mb-1">
              {[...Array(review.rating)].map((_, idx) => (
                <Star key={idx} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
          </div>
        </div>

        {/* Topic Tag */}
        <div className="mb-3.5 flex flex-wrap items-center gap-2">
          <span className="inline-block px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold bg-gold-500/10 text-gold-800 rounded-xs border border-gold-400/25">
            ✦ {review.topic}
          </span>
          {review.badge && (
            <span className="inline-block px-2 py-0.5 text-[10px] uppercase tracking-wider text-navy-600/60 font-medium bg-ivory-100 rounded-xs">
              {review.badge}
            </span>
          )}
        </div>

        {/* Review Quote (Clean, High-Contrast Typography) */}
        <p className="text-navy-900/90 text-sm sm:text-[14.5px] leading-relaxed font-normal mb-3">
          &ldquo;{displayedQuote}&rdquo;
        </p>

        {/* Read More / Show Less Toggle Button */}
        {isLong && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1 text-xs text-gold-700 hover:text-gold-900 font-semibold cursor-pointer mb-2 transition-colors"
          >
            <span>{isExpanded ? "Show less" : "Read full review"}</span>
            {isExpanded ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>
        )}
      </div>

      {/* Bottom Footer Meta */}
      <div className="pt-4 border-t border-ivory-200 mt-3 flex items-center justify-between text-xs text-navy-500">
        <span className="text-[11px] tracking-wide font-medium uppercase text-navy-600/60">
          {review.categoryLabel}
        </span>

        {review.url ? (
          <a
            href={review.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] text-gold-700 hover:text-gold-900 font-semibold transition-colors underline underline-offset-2"
          >
            <span>View on Google</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="text-[11px] text-navy-400">Verified Parent Feedback</span>
        )}
      </div>
    </article>
  );
}

type CategoryFilter = "all" | "parents" | "kkkv" | "events";

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredReviews = useMemo(() => {
    if (activeCategory === "all") return communityReviews;
    return communityReviews.filter((r) => r.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <PageHero pageKey="testimonials" />

      {/* Trust & Accolades Strip */}
      <section className="bg-white border-b border-ivory-200 py-6">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <div className="flex items-center justify-center gap-1 text-gold-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-display text-2xl font-bold text-navy-900">5.0 / 5.0</p>
              <p className="text-[11px] text-navy-600/70 uppercase tracking-wider font-medium">Public Trust & Praise</p>
            </div>

            <div className="p-3 border-l border-ivory-200">
              <p className="font-display text-2xl font-bold text-gold-600">21+</p>
              <p className="text-[11px] text-navy-600/70 uppercase tracking-wider font-medium mt-1">Verified Testimonials</p>
            </div>

            <div className="p-3 border-l border-ivory-200">
              <p className="font-display text-2xl font-bold text-navy-900">15+ Years</p>
              <p className="text-[11px] text-navy-600/70 uppercase tracking-wider font-medium mt-1">Teaching Excellence</p>
            </div>

            <div className="p-3 border-l border-ivory-200">
              <p className="font-display text-2xl font-bold text-gold-600">100%</p>
              <p className="text-[11px] text-navy-600/70 uppercase tracking-wider font-medium mt-1">Stage Exposure Provided</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Executive Spotlight */}
      <section className="relative py-14 bg-paper border-b border-ivory-200 overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 text-gold-500/[0.03] pointer-events-none hidden md:block">
          <MandalaWatermark className="w-full h-full" />
        </div>

        <div className="container-wide section-padding relative z-10">
          <div className="max-w-4xl mx-auto bg-white border border-gold-400/35 rounded-sm p-7 sm:p-9 shadow-sm relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-gold-500/15 border border-gold-400/40 flex items-center justify-center text-gold-700 shrink-0 shadow-inner">
                <Quote className="w-7 h-7" />
              </div>

              <div className="space-y-2 flex-1">
                <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold-700 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Spirit of Suha Academy</span>
                </div>
                <p className="font-serif text-lg sm:text-xl text-navy-950 italic leading-snug font-normal">
                  &ldquo;Under the guidance of Ranjini Mam, our students blossom into confident and graceful artists. The academy not only teaches dance and music but shapes character, discipline and lifelong passion.&rdquo;
                </p>
                <p className="text-xs text-navy-600 font-medium">
                  Reflected in 21+ heartfelt testimonials from parents across Medavakkam, Perumbakkam and Tamil Nadu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs Bar (Clean flex-wrap without horizontal scrollbars) */}
      <section className="bg-paper border-b border-ivory-200 sticky top-[69px] z-30 py-3.5 shadow-xs">
        <div className="container-wide section-padding">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 py-1">
            {[
              { id: "all", label: `All Reviews (${communityReviews.length})` },
              {
                id: "parents",
                label: `Parents (${communityReviews.filter((r) => r.category === "parents").length})`,
              },
              {
                id: "kkkv",
                label: `KKKV Participants (${communityReviews.filter((r) => r.category === "kkkv").length})`,
              },
              {
                id: "events",
                label: `Annual Day & Events (${communityReviews.filter((r) => r.category === "events").length})`,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as CategoryFilter)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-300 cursor-pointer border ${activeCategory === tab.id
                  ? "bg-navy-950 text-gold-300 border-navy-950 shadow-sm"
                  : "bg-white text-navy-800 border-ivory-200 hover:bg-gold-50 hover:text-gold-700 hover:border-gold-300"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section id="reviews" className="relative py-16 md:py-24 bg-cream-50">
        <div className="container-wide section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-start">
            {filteredReviews.map((r, i) => (
              <Reveal key={r.id} delay={(i % 6) * 0.05} className="h-full">
                <TestimonialCard review={r} />
              </Reveal>
            ))}
          </div>

       
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-navy-950 text-center text-cream-100">
        <div className="container-wide section-padding">
          <OrnamentDivider light className="mb-8" />
          <Reveal>
            <h2 className="text-display-md font-display text-cream-50 mb-3">
              Join Our Thriving Classical Arts Family
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-cream-100/60 max-w-lg mx-auto mb-8 text-sm">
              Experience the disciplined joy of Bharathanatyam, Mohiniyattam and Carnatic Vocal under Guru Smt. Ranjini Pradeep.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-7 sm:py-3.5 bg-gradient-to-r from-gold-500 via-gold-400 to-amber-400 hover:from-gold-400 hover:to-amber-300 text-navy-950 font-semibold text-xs sm:text-sm tracking-wide rounded-md shadow-lg shadow-gold-500/25 transition-all duration-300 group hover:translate-y-[-1px] active:scale-[0.99] whitespace-nowrap"
              >
                <span>Enquire About Admissions</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1 text-navy-950" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
