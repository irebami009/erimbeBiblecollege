import React from "react";
import {
  FileText,
  User,
  CreditCard,
  GraduationCap,
  Church,
  Heart,
  CheckCircle2,
  Download,
  ArrowRight,
  BookOpen,
  Award,
  Users,
  Calendar,
  Smile,
  ClipboardList,
} from "lucide-react";
import Reveal from "./Reveal";

const stepsData = [
  {
    step: "01",
    title: "Create an Application",
    desc: "Complete the online admission form with your personal and educational information.",
  },
  {
    step: "02",
    title: "Submit Required Documents",
    desc: "Upload your passport photograph and any required academic or church recommendation documents.",
  },
  {
    step: "03",
    title: "Application Review",
    desc: "Our admissions team carefully reviews every application and communicates the outcome.",
  },
  {
    step: "04",
    title: "Admission Decision",
    desc: "Successful applicants receive an admission offer with enrollment instructions.",
  },
  {
    step: "05",
    title: "Begin Your Journey",
    desc: "Complete registration and start your classes with our Bible College community.",
  },
];

const requirementsData = [
  { icon: FileText, title: "Completed Admission Form" },
  { icon: User, title: "Passport Photograph" },
  { icon: CreditCard, title: "Valid Means of Identification" },
  { icon: GraduationCap, title: "Academic Qualification (if applicable)" },
  { icon: Church, title: "Church Recommendation Letter" },
  { icon: Heart, title: "Personal Testimony of Faith" },
];

const whyApplyFeatures = [
  {
    title: "Christ-Centered Education",
    desc: "Study the Bible with academic excellence and spiritual depth.",
    icon: BookOpen,
  },
  {
    title: "Experienced Faculty",
    desc: "Learn from seasoned pastors, theologians, and ministry leaders.",
    icon: Award,
  },
  {
    title: "Practical Ministry Training",
    desc: "Combine classroom learning with real ministry experience.",
    icon: ClipboardList,
  },
  {
    title: "Supportive Christian Community",
    desc: "Grow alongside fellow believers in faith, character, and leadership.",
    icon: Users,
  },
];

const admissionStats = [
  { value: "500+", label: "Applications Received", icon: FileText },
  { value: "150+", label: "Graduates", icon: GraduationCap },
  { value: "20+", label: "Years of Ministry", icon: Calendar },
  { value: "95%", label: "Student Satisfaction", icon: Smile },
];

const AdmissionsSection = ({ onOpenApplyModal }) => {
  return (
    <section
      id="admissions"
      className="relative bg-[#F8FAFC] text-slate-900 py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">
              <span>ADMISSIONS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
              Start Your Journey in Biblical Education
            </h2>

            <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
              Whether you are called to pastoral ministry, missions, teaching, worship, or Christian leadership, we welcome students who desire to grow spiritually and academically through Christ-centered education.
            </p>
          </div>
        </Reveal>

        {/* STEP-BY-STEP ADMISSION PROCESS TIMELINE */}
        <div className="mb-24">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-2">
                SIMPLE 5-STEP ENROLLMENT
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-[#0F172A]">
                Step-by-Step Admission Process
              </h3>
            </div>
          </Reveal>

          {/* Desktop Horizontal / Mobile Vertical Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {/* Horizontal Line connecting steps on desktop */}
            <div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-slate-200 z-0" />

            {stepsData.map((s, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 100}>
                <div
                  className="relative z-10 rounded-[24px] bg-white border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F172A] text-[#D4AF37] text-sm font-extrabold border-2 border-[#D4AF37] shadow-sm">
                        {s.step}
                      </span>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Step {idx + 1}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#0F172A] mb-2 leading-snug">
                      {s.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ADMISSION REQUIREMENTS & WHY APPLY (TWO-COLUMN GRID) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          
          {/* LEFT: ADMISSION REQUIREMENTS */}
          <div className="lg:col-span-6">
            <Reveal direction="right">
              <div className="rounded-[32px] bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm h-full">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
                    CHECKLIST
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                    Admission Requirements
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2">
                    Everything you need to complete your application for EriMbe Bible College.
                  </p>
                </div>

                <div className="space-y-4">
                  {requirementsData.map((req, idx) => {
                    const Icon = req.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-4 rounded-[20px] bg-slate-50 border border-slate-200/70 hover:border-[#D4AF37]/40 hover:bg-slate-100/50 transition-all duration-200"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 text-[#D4AF37] shadow-xs">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 flex items-center justify-between">
                          <span className="text-sm font-bold text-[#0F172A]">
                            {req.title}
                          </span>
                          <CheckCircle2 className="h-5 w-5 text-[#D4AF37] shrink-0 ml-2" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: WHY APPLY? */}
          <div className="lg:col-span-6">
            <Reveal direction="left" delay={150}>
              <div className="rounded-[32px] bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm h-full">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
                    BENEFITS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                    Why Apply?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2">
                    Discover the distinctive experience of studying at EriMbe Bible College.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whyApplyFeatures.map((feat, idx) => {
                    const Icon = feat.icon;
                    return (
                      <div
                        key={idx}
                        className="p-5 rounded-[20px] bg-slate-50 border border-slate-200/70 hover:border-[#D4AF37]/40 transition duration-200 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-slate-200 text-[#0F172A] mb-3">
                            <Icon className="h-4 w-4 text-[#D4AF37]" />
                          </div>
                          <h4 className="text-sm font-bold text-[#0F172A] mb-1.5">
                            ✔ {feat.title}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

        </div>

        {/* CALL TO ACTION BANNER */}
        <Reveal direction="up">
          <div className="rounded-[32px] bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-2xl border border-white/10 mb-24">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">
                ENROLLMENT OPEN NOW
              </span>

              <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                Applications Are Now Open
              </h3>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
                Take the next step toward your calling. Join a community dedicated to biblical truth, spiritual growth, and servant leadership.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={onOpenApplyModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] text-slate-950 font-bold px-8 py-4 text-sm sm:text-base shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={onOpenApplyModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-8 py-4 text-sm sm:text-base backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Download className="h-4 w-4 text-[#D4AF37]" />
                  <span>Download Admission Guide</span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* APPLICATION STATISTICS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {admissionStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Reveal key={idx} direction="up" delay={idx * 100}>
                <div
                  className="rounded-[24px] bg-white border border-slate-200/80 p-6 sm:p-8 text-center shadow-sm hover:border-[#D4AF37]/50 hover:shadow-md transition-all duration-300 group h-full"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 text-[#0F172A] mx-auto mb-4 group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight block">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-2 block">
                    {stat.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AdmissionsSection;
