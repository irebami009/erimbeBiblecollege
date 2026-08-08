import React from "react";
import { ArrowRight, GraduationCap, Calendar, Compass, ChevronDown } from "lucide-react";
import heroBg from "../../assets/img20.jpeg";

const statsData = [
  {
    value: "20+",
    label: "Years of Ministry",
    icon: Calendar,
  },
  {
    value: "150+",
    label: "Graduates",
    icon: GraduationCap,
  },
  {
    value: "15+",
    label: "Academic Programs",
    icon: Compass,
  },
];

const HomeHero = ({ onOpenApplyModal, onOpenExploreModal }) => {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[750px] w-full overflow-hidden bg-[#0F172A] text-white flex flex-col justify-between pt-28 sm:pt-36 pb-6 sm:pb-10"
    >
      {/* Cinematic Full-Screen Background Image with Gentle Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Bible College Community"
          className="h-full w-full object-cover object-center scale-105 filter brightness-[0.9] contrast-[1.05] animate-slow-zoom"
        />

        {/* Multilayered Cinematic Gradients Overlay for Depth & Typography Readability */}
        {/* 1. Left-to-Right Gradient */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(15, 23, 42, 0.30) 100%)",
          }}
        />

        {/* 2. Radial Gold Glow Gradient behind Heading */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 30% 40%, rgba(212, 175, 55, 0.15) 0%, transparent 60%)",
          }}
        />

        {/* 3. Soft Vignette and Edge Shadow */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, transparent 35%, rgba(15, 23, 42, 0.75) 100%)",
          }}
        />

        {/* 4. Top & Bottom Atmospheric Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/70 via-transparent to-[#0F172A] z-10 pointer-events-none" />

        {/* Floating Light Particles & Ambient Flare */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none animate-float-light z-10" />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none animate-float-light z-10"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 mx-auto my-auto w-full max-w-7xl px-4 sm:px-8 text-left animate-fade-up">
        <div className="max-w-3xl lg:max-w-4xl space-y-6 sm:space-y-8">
          {/* Badge: Admissions Open • Christ-Centered Biblical Education */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold text-white/95 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37] animate-pulse" />
            <span>Admissions Open</span>
            <span className="text-white/40">•</span>
            <span className="text-white/90">Christ-Centered Biblical Education</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
            Answer the Call. <br />
            Prepare for{" "}
            <span className="text-[#D4AF37] gold-glow font-black drop-shadow-xl">
              Ministry.
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-sm sm:text-base md:text-lg font-normal text-slate-200/90 leading-relaxed drop-shadow-md">
            Join our Christ-centered Bible College where future pastors, evangelists,
            missionaries, teachers, and Christian leaders receive sound biblical
            education, spiritual formation, and practical ministry training.
          </p>

          {/* Pill Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-2 mb-10 sm:mb-14 lg:mb-16">
            {/* Primary Pill Button */}
            <button
              onClick={onOpenApplyModal}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white hover:bg-[#D4AF37] text-slate-950 font-extrabold px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base shadow-[0_15px_35px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-95 cursor-pointer"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary Glass Pill Button */}
            <button
              onClick={onOpenExploreModal}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base shadow-[0_15px_35px_rgba(0,0,0,0.2)] backdrop-blur-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Explore Programs</span>
            </button>
          </div>
        </div>
      </div>

      {/* FLOATING STATISTICS CARDS & SCROLL INDICATOR */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-8 space-y-4">
        {/* Statistics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 max-w-4xl">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-all duration-300 hover:border-[#D4AF37]/50 hover:scale-[1.02]"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.20)",
                }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Animated Scroll Indicator */}
        <div className="flex justify-center pt-2">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const aboutEl = document.getElementById("about");
              if (aboutEl) aboutEl.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex flex-col items-center gap-1.5 text-xs text-slate-300/80 hover:text-[#D4AF37] transition-colors duration-300 font-semibold tracking-wider uppercase cursor-pointer"
          >
            <span>Scroll to Explore</span>
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-all">
              <ChevronDown className="w-4 h-4 text-[#D4AF37] animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
