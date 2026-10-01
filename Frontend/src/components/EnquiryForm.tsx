import { useState } from "react";
import { Check, Send, AlertCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { academy } from "@/data/academy";

const courseOptions = [
  "Bharatanatyam",
  "Carnatic Vocal",
  "Workshop",
  "Event / Competition",
  "Other",
];

const experienceOptions = [
  "Beginner",
  "Some experience",
  "Intermediate",
  "Advanced",
];

const batchOptions = ["Weekday Morning", "Weekday Evening", "Weekend", "Flexible"];

interface FormData {
  name: string;
  phone: string;
  email: string;
  studentAge: string;
  course: string;
  experience: string;
  preferredLocation: string;
  preferredBatch: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  studentAge: "",
  course: "",
  experience: "",
  preferredLocation: "",
  preferredBatch: "",
  message: "",
};

export default function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.phone.trim()) e.phone = "Please enter a phone number.";
    else if (!/^[+\d\s()-]{8,}$/.test(form.phone))
      e.phone = "Please enter a valid phone number.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.course) e.course = "Please select a course.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) {
      // API/service placeholder — no backend submission
      // In production: send form data to academy email or Supabase table
      setSubmitted(true);
    }
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  if (submitted) {
    return (
      <Reveal>
        <div className="bg-white border border-gold-300 rounded-sm p-10 text-center">
          <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-5">
            <Check className="w-8 h-8 text-gold-600" />
          </div>
          <h3 className="text-xl font-display text-navy-900 mb-3">
            Thank You
          </h3>
          <p className="text-sm text-navy-700/70 leading-relaxed max-w-md mx-auto">
            Your enquiry has been received. Suha Academy will get in touch with
            you.
          </p>
          <button
            onClick={() => {
              setForm(initialForm);
              setSubmitted(false);
            }}
            className="mt-6 text-sm text-gold-600 hover:text-gold-700 transition-colors underline"
          >
            Send another enquiry
          </button>
        </div>
      </Reveal>
    );
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 bg-cream-50/50 border rounded-sm text-sm text-navy-900 placeholder:text-navy-400/40 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors ${
      errors[field] ? "border-maroon-400" : "border-ivory-200"
    }`;

  return (
    <Reveal>
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"} gap-5`}>
          {/* Name */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-navy-700 mb-1.5 font-medium">
              Name *
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputClass("name")}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="text-xs text-maroon-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.name}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-navy-700 mb-1.5 font-medium">
              Phone Number *
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={inputClass("phone")}
              placeholder="+91 ..."
            />
            {errors.phone && (
              <p className="text-xs text-maroon-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-navy-700 mb-1.5 font-medium">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputClass("email")}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-xs text-maroon-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>

          {/* Student Age */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-navy-700 mb-1.5 font-medium">
              Student Age
            </label>
            <input
              type="text"
              value={form.studentAge}
              onChange={(e) => update("studentAge", e.target.value)}
              className={inputClass("studentAge")}
              placeholder="e.g. 8, teen, adult"
            />
          </div>

          {/* Course */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-navy-700 mb-1.5 font-medium">
              Course *
            </label>
            <select
              value={form.course}
              onChange={(e) => update("course", e.target.value)}
              className={inputClass("course")}
            >
              <option value="">Select a course</option>
              {courseOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.course && (
              <p className="text-xs text-maroon-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.course}
              </p>
            )}
          </div>

          {/* Experience */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-navy-700 mb-1.5 font-medium">
              Experience Level
            </label>
            <select
              value={form.experience}
              onChange={(e) => update("experience", e.target.value)}
              className={inputClass("experience")}
            >
              <option value="">Select level</option>
              {experienceOptions.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Location */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-navy-700 mb-1.5 font-medium">
              Preferred Location
            </label>
            <input
              type="text"
              value={form.preferredLocation}
              onChange={(e) => update("preferredLocation", e.target.value)}
              className={inputClass("preferredLocation")}
              placeholder="e.g. Old Perungalathur"
            />
          </div>

          {/* Preferred Batch */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-navy-700 mb-1.5 font-medium">
              Preferred Batch
            </label>
            <select
              value={form.preferredBatch}
              onChange={(e) => update("preferredBatch", e.target.value)}
              className={inputClass("preferredBatch")}
            >
              <option value="">Select batch</option>
              {batchOptions.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-navy-700 mb-1.5 font-medium">
            Message
          </label>
          <textarea
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            rows={4}
            className={inputClass("message")}
            placeholder="Tell us about your interest, any questions, or specific requirements."
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-navy-900 text-cream-100 font-medium text-sm rounded-sm hover:bg-navy-800 transition-all duration-300 group"
        >
          Send Enquiry
          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <p className="text-[10px] text-navy-600/40">
          By submitting this form, you agree to be contacted by Suha Academy
          regarding your enquiry. Your information will not be shared with third
          parties.
        </p>
      </form>
    </Reveal>
  );
}
