import React from "react";
import {
  BookOpen,
  Award,
  ShieldCheck,
  HeartHandshake,
  Users,
  GraduationCap,
  Calendar,
  Compass,
  TrendingUp,
} from "lucide-react";
import aboutImg from "../assets/about_classroom.png";
import provostImg from "../assets/baba.jpg";
import viceProvostImg from "../assets/mama.jpg";
import registrarImg from "../assets/mydad.jpeg";
import Reveal from "./Reveal";
import Card3D from "./Card3D";

const coreValues = [
  {
    icon: BookOpen,
    title: "Faith",
    desc: "Grounded in God's Word.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Committed to academic and spiritual excellence.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Living according to biblical principles.",
  },
  {
    icon: HeartHandshake,
    title: "Service",
    desc: "Preparing students for servant leadership.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Growing together in Christ.",
  },
];

const leaders = [
  {
    name: "Prophet Isreal Ajadi",
    title: "Provost",
    image: provostImg,
    objectPos: "object-top",
    desc: "Providing spiritual leadership, academic direction, and a vision for raising faithful servants of Christ.",
  },
  {
    name: "Prophetess Mary Ajadi",
    title: "Coordinator",
    image: viceProvostImg,
    objectPos: "object-top",
    desc: "Supporting academic excellence, student development, and the overall mission of the Bible College.",
  },
  {
    name: "Pastor G.A Omobalanu",
    title: "Registrar",
    image: registrarImg,
    objectPos: "object-top",
    desc: "Overseeing academic records, student admissions, and administrative operations of the Bible College.",
  },
];

const stats = [
  { value: "150+", label: "Graduates", icon: GraduationCap },
  { value: "20+", label: "Years of Ministry", icon: Calendar },
  { value: "15+", label: "Biblical Programs", icon: Compass },
  { value: "95%", label: "Student Completion Rate", icon: TrendingUp },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-white text-slate-900 py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">
              <span>ABOUT OUR COLLEGE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
              Equipping Believers for Lifelong Ministry
            </h2>

            <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
              Our mission is to provide Christ-centered biblical education that
              develops spiritual maturity, theological excellence, servant
              leadership, and practical ministry skills.
            </p>
          </div>
        </Reveal>

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 lg:mb-32">
          {/* LEFT COLUMN: Image & Overlay Stats */}
          <div className="lg:col-span-6 relative mb-10 lg:mb-0">
            <Reveal direction="right">
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl border border-slate-100 group">
                <img
                  src={aboutImg}
                  alt="Bible College Students Studying in Classroom"
                  className="w-full h-[360px] sm:h-[480px] lg:h-[540px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Statistics Card */}
              <div className="relative sm:absolute -mt-8 sm:mt-0 sm:-bottom-8 left-4 right-4 sm:left-8 sm:right-auto sm:max-w-sm rounded-[20px] bg-white/95 backdrop-blur-xl border border-slate-200/80 p-5 sm:p-6 shadow-2xl transition-transform duration-300 hover:-translate-y-1 z-20">
                <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center divide-x divide-slate-100">
                  <div className="px-1">
                    <span className="text-lg sm:text-2xl font-extrabold text-[#0F172A] block">
                      20+
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 block leading-tight mt-0.5">
                      Years of Ministry
                    </span>
                  </div>
                  <div className="px-1">
                    <span className="text-lg sm:text-2xl font-extrabold text-[#D4AF37] block">
                      150+
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 block leading-tight mt-0.5">
                      Graduates
                    </span>
                  </div>
                  <div className="px-1">
                    <span className="text-lg sm:text-2xl font-extrabold text-[#0F172A] block">
                      15+
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 block leading-tight mt-0.5">
                      Academic Programs
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: Statement of Purpose, Mission, Vision & Core Values */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 pt-4 lg:pt-0">
            {/* Statement of Purpose Card */}
            <Reveal direction="left" delay={100}>
              <Card3D maxTilt={6}>
                <div className="rounded-[24px] bg-gradient-to-br from-slate-900 via-slate-950 to-[#0F172A] text-white p-6 sm:p-7 shadow-xl border border-[#D4AF37]/30 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37]">
                      COLLEGE STATEMENT OF PURPOSE
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    Eri Mbe International Bible College is an arm of Forever In Christ
                    Evangelical Ministry established in May, 2024. Eri Mbe
                    International Bible College is a higher institution established to
                    offer an in-depth biblical studies to Ministers, Church Leaders,
                    Laymen & women of the word of God. To provide sound apostolic
                    teaching, and CHRISTIAN Education for those who have the call of
                    God upon their lives.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal mt-3">
                    Hence to be approved to God through training & effective work of
                    the ministry for Saints who love to study the Bible and grow in
                    grace.
                  </p>
                </div>
              </Card3D>
            </Reveal>

            {/* Mission & Vision Cards */}
            <Reveal direction="left" delay={150}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Mission Card */}
                <Card3D maxTilt={8}>
                  <div className="rounded-[24px] bg-slate-50 border border-slate-200/70 p-6 shadow-sm hover:border-[#D4AF37]/40 transition-all duration-300 h-full">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] block mb-2">
                      OUR MISSION
                    </span>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                      Mission
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      "Our mission is to train pastors, evangelists,
                      missionaries, teachers, and Christian leaders through
                      sound biblical education and spiritual formation."
                    </p>
                  </div>
                </Card3D>

                {/* Vision Card */}
                <Card3D maxTilt={8}>
                  <div className="rounded-[24px] bg-slate-50 border border-slate-200/70 p-6 shadow-sm hover:border-[#D4AF37]/40 transition-all duration-300 h-full">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] block mb-2">
                      OUR VISION
                    </span>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                      Vision
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      "To become a leading Bible College raising Christ-centered
                      leaders who impact churches, communities, and nations."
                    </p>
                  </div>
                </Card3D>
              </div>
            </Reveal>

            {/* Core Values Grid */}
            <Reveal direction="up" delay={300}>
              <div className="pt-2">
                <h3 className="text-xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                  <span>Core Values</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {coreValues.map((val, idx) => {
                    const Icon = val.icon;
                    return (
                      <div
                        key={idx}
                        className="group flex items-start gap-3.5 p-4 rounded-[20px] bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#D4AF37]/50 transition-all duration-300"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[#0F172A] group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-colors duration-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#0F172A] group-hover:text-[#D4AF37] transition-colors">
                            {val.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                            {val.desc}
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

        {/* LEADERSHIP SUBSECTION */}
        <div className="mt-20 pt-16 border-t border-slate-200/80">
          <Reveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#0F172A] text-xs font-bold uppercase tracking-widest mb-3">
                <span>College Leadership</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                Meet Our Leadership
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Guiding EriMbe Bible College with spiritual wisdom, academic
                integrity, and a shared passion for raising faithful servants of
                Christ.
              </p>
            </div>
          </Reveal>

          {/* Leadership Cards Layout: Provost & Coordinator top row, Registrar centered below */}
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Top Row: Provost & Coordinator */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leaders.slice(0, 2).map((leader, index) => (
                <Reveal key={index} direction="up" delay={index * 150}>
                  <Card3D maxTilt={12}>
                    <div className="group rounded-[24px] bg-slate-50 border border-slate-200/80 p-8 shadow-sm hover:shadow-2xl hover:border-[#D4AF37]/50 transition-all duration-300 text-center flex flex-col items-center justify-between h-full">
                      <div>
                        <div className="relative mb-6">
                          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#D4AF37] via-slate-200 to-[#D4AF37] shadow-lg mx-auto group-hover:scale-105 transition-transform duration-300">
                            <img
                              src={leader.image}
                              alt={leader.name}
                              className={`w-full h-full rounded-full object-cover ${
                                leader.objectPos || "object-top"
                              }`}
                            />
                          </div>
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#0F172A] text-[#D4AF37] text-[10px] font-bold tracking-wider uppercase border border-[#D4AF37]/40 shadow-md">
                            {leader.title}
                          </div>
                        </div>

                        <h4 className="text-xl font-extrabold text-[#0F172A] mt-2">
                          {leader.name}
                        </h4>
                        <p className="text-xs font-semibold text-[#D4AF37] tracking-wider uppercase mt-1 mb-4">
                          {leader.title}
                        </p>

                        <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                          "{leader.desc}"
                        </p>
                      </div>
                    </div>
                  </Card3D>
                </Reveal>
              ))}
            </div>

            {/* Bottom Row: Registrar centered below Provost & Coordinator */}
            {leaders[2] && (
              <div className="flex justify-center">
                <div className="w-full md:w-[calc(50%-1rem)]">
                  <Reveal direction="up" delay={300}>
                    <Card3D maxTilt={12}>
                      <div className="group rounded-[24px] bg-slate-50 border border-slate-200/80 p-8 shadow-sm hover:shadow-2xl hover:border-[#D4AF37]/50 transition-all duration-300 text-center flex flex-col items-center justify-between h-full">
                        <div>
                          <div className="relative mb-6">
                            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#D4AF37] via-slate-200 to-[#D4AF37] shadow-lg mx-auto group-hover:scale-105 transition-transform duration-300">
                              <img
                                src={leaders[2].image}
                                alt={leaders[2].name}
                                className={`w-full h-full rounded-full object-cover ${
                                  leaders[2].objectPos || "object-top"
                                }`}
                              />
                            </div>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#0F172A] text-[#D4AF37] text-[10px] font-bold tracking-wider uppercase border border-[#D4AF37]/40 shadow-md">
                              {leaders[2].title}
                            </div>
                          </div>

                          <h4 className="text-xl font-extrabold text-[#0F172A] mt-2">
                            {leaders[2].name}
                          </h4>
                          <p className="text-xs font-semibold text-[#D4AF37] tracking-wider uppercase mt-1 mb-4">
                            {leaders[2].title}
                          </p>

                          <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                            "{leaders[2].desc}"
                          </p>
                        </div>
                      </div>
                    </Card3D>
                  </Reveal>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* STATISTICS GRID */}
        <div className="mt-20 pt-16 border-t border-slate-200/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={idx} direction="up" delay={idx * 100}>
                  <Card3D maxTilt={8} glare={false}>
                    <div className="rounded-[24px] bg-slate-50 border border-slate-200/80 p-6 sm:p-8 text-center shadow-sm hover:border-[#D4AF37]/50 hover:shadow-md transition-all duration-300 group h-full">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-slate-200 text-[#0F172A] mx-auto mb-4 group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight block">
                        {item.value}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-2 block">
                        {item.label}
                      </span>
                    </div>
                  </Card3D>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
