import React, { useState } from "react";
import {
  BookOpen,
  Church,
  Users,
  HeartHandshake,
  Globe,
  Sparkles,
  GraduationCap,
  Calendar,
  Clock,
  CheckCircle2,
  Award,
  BookMarked,
  ScrollText,
  FileCheck,
  Building,
  ArrowRight,
} from "lucide-react";
import Reveal from "./Reveal";
import Card3D from "./Card3D";

const programmesList = [
  {
    icon: BookOpen,
    title: "Certificate in Theology",
    level: "Certificate",
    duration: "1 Year (2 Semesters)",
    desc: "Foundational theological studies perfecting ministers for kingdom service.",
  },
  {
    icon: Sparkles,
    title: "Certificate in Deliverance Studies",
    level: "Certificate",
    duration: "1 Year (2 Semesters)",
    desc: "Specialized biblical training in deliverance ministry and spiritual warfare.",
  },
  {
    icon: Church,
    title: "Diploma in Theology (Church Leadership & Administration)",
    level: "Diploma",
    duration: "2 Years (4 Semesters)",
    desc: "In-depth training for church leaders, administrators, and organizational overseers.",
  },
  {
    icon: BookMarked,
    title: "Diploma in Theology (Teaching Ministry)",
    level: "Diploma",
    duration: "2 Years (4 Semesters)",
    desc: "Sound apostolic teaching and Christian education for seasoned teachers of the Word.",
  },
  {
    icon: Globe,
    title: "Diploma in Theology (Mission)",
    level: "Diploma",
    duration: "2 Years (4 Semesters)",
    desc: "Preparing cross-cultural missionaries, soul winners, and global church planters.",
  },
  {
    icon: HeartHandshake,
    title: "Diploma in Theology (Prophetic Ministry)",
    level: "Diploma",
    duration: "2 Years (4 Semesters)",
    desc: "Developing firebrand witnesses and prophetic leaders with apostolic credibility.",
  },
  {
    icon: Award,
    title: "Diploma in Theology (Deliverance Studies)",
    level: "Diploma",
    duration: "2 Years (4 Semesters)",
    desc: "Advanced study in deliverance ministry, spiritual warfare, and pastoral counseling.",
  },
];

const yearOneCourses = {
  sem1: [
    { code: "THE 101", name: "Discipleship", units: 2 },
    { code: "BIB 101", name: "Allegorical Studies", units: 1 },
    { code: "THE 102", name: "Systematic Theology I", units: 2 },
    { code: "MIN 101", name: "Power of Prayer", units: 2 },
    { code: "BIB 102", name: "Historical Books", units: 2 },
    { code: "THE 103", name: "Pneumatology", units: 2 },
  ],
  sem2: [
    { code: "BIB 103", name: "Pentateuch", units: 1 },
    { code: "BIB 104", name: "Life & Teaching of Christ", units: 2 },
    { code: "HIS 101", name: "Church History", units: 2 },
    { code: "BIB 105", name: "Typology I", units: 1 },
    { code: "HER 101", name: "Hermeneutics", units: 2 },
    { code: "THE 104", name: "Dispensation", units: 1 },
  ],
};

const yearTwoCourses = {
  sem1: [
    { code: "RES 201", name: "Research Methodology", units: 1 },
    { code: "BIB 201", name: "Typology II", units: 1 },
    { code: "THE 201", name: "Systematic Theology II", units: 2 },
    { code: "HOM 201", name: "Homiletics I", units: 2 },
    { code: "MIS 201", name: "Missions", units: 1 },
  ],
  sem2: [
    { code: "BIB 202", name: "Synoptic Gospels", units: 1 },
    { code: "BIB 203", name: "Studies in the Acts of Apostles", units: 1 },
    { code: "BIB 204", name: "Studies in Pauline Epistles", units: 2 },
    { code: "HOM 202", name: "Homiletics II", units: 2 },
  ],
};

const yearThreeCourses = {
  sem1: [
    { code: "THE 301", name: "Eschatology", units: 2 },
    { code: "THE 302", name: "Systematic Theology III", units: 2 },
    { code: "LAN 301", name: "New Testament Greek", units: 2 },
    { code: "REL 301", name: "Comparative Religion", units: 2 },
    { code: "COU 301", name: "Christian Counseling", units: 1 },
    { code: "PAS 301", name: "Pastoral Ministry", units: 2 },
    { code: "DEL 301", name: "Deliverance Studies", units: 1 },
  ],
  sem2: [
    { code: "MIS 302", name: "Cross-Cultural Mission", units: 1 },
    { code: "PRO 301", name: "Prophetic Ministry", units: 2 },
    { code: "ADM 301", name: "Church Administration", units: 2 },
    { code: "EDU 301", name: "Christian Education", units: 2 },
    { code: "GRO 301", name: "Church Planting & Growth", units: 2 },
    { code: "ETH 301", name: "Christian Ethics", units: 1 },
  ],
};

const specializations = [
  {
    id: "leadership",
    title: "Church Leadership & Administration",
    courses: [
      { name: "Church Administration", units: 2 },
      { name: "Christian Education", units: 2 },
      { name: "Pastoral Ministry", units: 2 },
      { name: "Church Planting & Growth", units: 2 },
      { name: "Christian Ethics", units: 1 },
      { name: "Comparative Religion", units: 2 },
      { name: "Christian Counseling", units: 1 },
    ],
  },
  {
    id: "teaching",
    title: "Teaching Ministry",
    courses: [
      { name: "Church Administration", units: 2 },
      { name: "Christian Education", units: 2 },
      { name: "Pastoral Ministry", units: 2 },
      { name: "Church Planting & Growth", units: 2 },
      { name: "Christian Ethics", units: 1 },
      { name: "Comparative Religion", units: 2 },
      { name: "Christian Counseling", units: 1 },
    ],
  },
  {
    id: "mission",
    title: "Mission",
    courses: [
      { name: "Cross-Cultural Mission", units: 1 },
      { name: "Church Planting & Growth", units: 2 },
      { name: "Christian Ethics", units: 1 },
      { name: "Church Administration", units: 2 },
      { name: "Pastoral Ministry", units: 2 },
      { name: "Deliverance Studies", units: 1 },
      { name: "Comparative Religion", units: 2 },
      { name: "Christian Counseling", units: 1 },
    ],
  },
  {
    id: "prophetic",
    title: "Prophetic Ministry",
    courses: [
      { name: "Prophetic Ministry", units: 2 },
      { name: "Church Planting & Growth", units: 2 },
      { name: "Christian Ethics", units: 1 },
      { name: "Church Administration", units: 2 },
      { name: "Pastoral Ministry", units: 2 },
      { name: "Comparative Religion", units: 2 },
      { name: "Christian Counseling", units: 1 },
    ],
  },
  {
    id: "deliverance",
    title: "Deliverance Ministry",
    courses: [
      { name: "Deliverance Studies", units: 1 },
      { name: "Church Administration", units: 2 },
      { name: "Pastoral Ministry", units: 2 },
      { name: "Christian Education", units: 2 },
      { name: "Church Planting & Growth", units: 2 },
      { name: "Comparative Religion", units: 2 },
      { name: "Christian Counseling", units: 1 },
    ],
  },
];

const gradingScale = [
  { grade: "A", points: "5", range: "70 - 100", remark: "Excellent" },
  { grade: "B", points: "4", range: "60 - 69", remark: "Very Good" },
  { grade: "C", points: "3", range: "50 - 59", remark: "Good" },
  { grade: "D", points: "2", range: "45 - 49", remark: "Pass" },
  { grade: "E", points: "1", range: "40 - 44", remark: "Fair" },
  { grade: "F", points: "0", range: "0 - 39", remark: "Fail" },
];

const whyStudyFeatures = [
  {
    title: "Experienced Faculty",
    desc: "Learn from seasoned pastors, theologians, and ministry leaders.",
  },
  {
    title: "Practical Ministry Training",
    desc: "Gain real-life ministry experience alongside classroom learning.",
  },
  {
    title: "Christ-Centered Curriculum",
    desc: "Every course is rooted in biblical truth and spiritual formation.",
  },
  {
    title: "Flexible Learning",
    desc: "Saturday lectures designed for working adults and active ministers.",
  },
];

const ProgramsSection = ({ onOpenApplyModal, onSelectProgram }) => {
  const [activeTab, setActiveTab] = useState("curriculum");
  const [selectedYear, setSelectedYear] = useState("1");
  const [selectedSpec, setSelectedSpec] = useState("leadership");

  return (
    <section
      id="programs"
      className="relative bg-white text-slate-900 py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>ACADEMIC PROGRAMS & HANDBOOK</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
              Programs Designed for Kingdom Impact
            </h2>

            <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
              Eri Mbe International Bible College is a God-ordained Theological
              center established through the Holy Spirit on May 4, 2024 (an arm of
              Forever In Christ Evangelical Ministry) to equip ministers, leaders,
              and saints for effective ministry.
            </p>
          </div>
        </Reveal>

        {/* DIVINE PURPOSE & LECTURE SCHEDULE HIGHLIGHT CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Card 1: Divine Mandate */}
          <div className="lg:col-span-7">
            <Reveal direction="right">
              <Card3D maxTilt={6}>
                <div className="rounded-[24px] bg-[#0F172A] text-white border border-white/10 p-6 sm:p-8 shadow-2xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-5 h-5 text-[#D4AF37]" />
                      <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                        DIVINE PURPOSE & INSTITUTIONAL MANDATE
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      Perfecting Saints for Kingdom Ministry
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      "The College is not just a Bible College. It is a unique
                      institution designed for excellence in the knowledge of God
                      and His kingdom. Established to perfect the children of God
                      for the work of the Ministry, to develop soul winners, church
                      planters, kingdom virtue builders, full-time and part-time
                      seasoned preachers, and firebrand witnesses of Christ with
                      apostolic credibility."
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#D4AF37]" />
                      <span>An arm of Forever In Christ Evangelical Ministry</span>
                    </div>
                    <div className="text-[#D4AF37] font-semibold">
                      Correspondences to: The Registrar
                    </div>
                  </div>
                </div>
              </Card3D>
            </Reveal>
          </div>

          {/* Card 2: Lecture Schedule & Fellowship */}
          <div className="lg:col-span-5">
            <Reveal direction="left">
              <Card3D maxTilt={6}>
                <div className="rounded-[24px] bg-slate-50 border border-slate-200/90 p-6 sm:p-8 shadow-xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-5 h-5 text-[#D4AF37]" />
                      <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                        LECTURE SCHEDULE & FELLOWSHIP
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                      Saturday Lecture Format
                    </h3>

                    <div className="space-y-3.5 my-4">
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                        <Users className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-[#0F172A] block">
                            Student Fellowship (8:30 AM – 9:00 AM)
                          </span>
                          <span className="text-xs text-slate-500 block mt-0.5">
                            Precedes lectures every lecture day. Compulsory for all
                            students.
                          </span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-[#0F172A] block">
                            Main Lectures (9:00 AM – 3:00 PM)
                          </span>
                          <span className="text-xs text-slate-600 block mt-0.5">
                            Every Saturday across 2 semesters (January to
                            November).
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={onOpenApplyModal}
                    className="w-full py-3 rounded-xl bg-[#0F172A] hover:bg-[#D4AF37] text-white hover:text-slate-950 font-extrabold text-sm transition shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Apply for Enrollment</span>
                  </button>
                </div>
              </Card3D>
            </Reveal>
          </div>
        </div>

        {/* 7 APPROVED PROGRAMMES CARDS */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-[#0F172A] mb-8 text-center flex items-center justify-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
            <span>Approved Academic & Ministry Programmes</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmesList.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <Reveal key={idx} direction="up" delay={idx * 80}>
                  <Card3D maxTilt={10}>
                    <div className="group relative rounded-[24px] bg-white border border-slate-200/80 p-7 shadow-sm hover:shadow-2xl hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between h-full">
                      <div>
                        {/* Top Icon & Level Badge */}
                        <div className="flex items-center justify-between mb-5">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-slate-950 group-hover:border-[#D4AF37] transition-colors duration-300 shadow-xs">
                            <Icon className="h-6 w-6" />
                          </div>

                          <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-[#0F172A]">
                            ⏱ {prog.duration}
                          </span>
                        </div>

                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-md border border-[#D4AF37]/20 inline-block mb-2">
                          {prog.level}
                        </span>

                        <h4 className="text-lg font-extrabold text-[#0F172A] mb-2 group-hover:text-[#D4AF37] transition-colors duration-200 leading-snug">
                          {prog.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                          {prog.desc}
                        </p>
                      </div>

                      <button
                        onClick={() => onSelectProgram && onSelectProgram(prog)}
                        className="w-full pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0F172A] group-hover:text-[#D4AF37] transition-colors cursor-pointer"
                      >
                        <span>View Curriculum & Details</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </Card3D>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* EMBEDDED HANDBOOK TABS CONTAINER */}
        <div className="rounded-[32px] bg-[#0F172A] text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-slate-800 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2">
              <BookMarked className="h-3.5 w-3.5" />
              <span>COLLEGE ACADEMIC HANDBOOK & PROSPECTUS</span>
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white">
              Course Details, Requirements & Calendar
            </h3>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 p-2 rounded-2xl bg-slate-900 border border-slate-800 max-w-4xl mx-auto">
            {[
              { id: "curriculum", label: "3-Year Curriculum", icon: BookMarked },
              { id: "requirements", label: "Admission Tracks", icon: ScrollText },
              { id: "specializations", label: "Specialization Tracks", icon: Award },
              { id: "calendar", label: "School Calendar", icon: Calendar },
              { id: "grading", label: "Grading & Regulations", icon: FileCheck },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#D4AF37] text-slate-950 shadow-lg scale-105"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: 3-YEAR CURRICULUM */}
          {activeTab === "curriculum" && (
            <Reveal direction="up">
              <div className="space-y-8">
                {/* Year Selector */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Select Academic Year:
                  </span>
                  {["1", "2", "3"].map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-4 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                        selectedYear === year
                          ? "bg-[#D4AF37] text-slate-950 border border-amber-300 shadow-md"
                          : "bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800"
                      }`}
                    >
                      Year {year} {year === "3" ? "(Final & Specialization)" : ""}
                    </button>
                  ))}
                </div>

                {/* Year Course Table Display */}
                {selectedYear === "1" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
                      <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                        <h4 className="text-base font-bold text-white flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#D4AF37]"></span>
                          <span>Year 1 — First Semester</span>
                        </h4>
                        <span className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                          11 Total Units
                        </span>
                      </div>

                      <div className="space-y-3">
                        {yearOneCourses.sem1.map((c, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/40 transition"
                          >
                            <div>
                              <span className="text-[10px] font-bold text-[#D4AF37] block">
                                {c.code}
                              </span>
                              <span className="text-xs font-semibold text-white block">
                                {c.name}
                              </span>
                            </div>
                            <span className="text-xs font-bold text-slate-300 bg-slate-800 px-2 py-1 rounded-lg">
                              {c.units} {c.units === 1 ? "Unit" : "Units"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
                      <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                        <h4 className="text-base font-bold text-white flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#D4AF37]"></span>
                          <span>Year 1 — Second Semester</span>
                        </h4>
                        <span className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                          9 Total Units
                        </span>
                      </div>

                      <div className="space-y-3">
                        {yearOneCourses.sem2.map((c, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/40 transition"
                          >
                            <div>
                              <span className="text-[10px] font-bold text-[#D4AF37] block">
                                {c.code}
                              </span>
                              <span className="text-xs font-semibold text-white block">
                                {c.name}
                              </span>
                            </div>
                            <span className="text-xs font-bold text-slate-300 bg-slate-800 px-2 py-1 rounded-lg">
                              {c.units} {c.units === 1 ? "Unit" : "Units"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {selectedYear === "2" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
                      <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                        <h4 className="text-base font-bold text-white flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#D4AF37]"></span>
                          <span>Year 2 — First Semester</span>
                        </h4>
                        <span className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                          7 Total Units
                        </span>
                      </div>

                      <div className="space-y-3">
                        {yearTwoCourses.sem1.map((c, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/40 transition"
                          >
                            <div>
                              <span className="text-[10px] font-bold text-[#D4AF37] block">
                                {c.code}
                              </span>
                              <span className="text-xs font-semibold text-white block">
                                {c.name}
                              </span>
                            </div>
                            <span className="text-xs font-bold text-slate-300 bg-slate-800 px-2 py-1 rounded-lg">
                              {c.units} {c.units === 1 ? "Unit" : "Units"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
                      <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                        <h4 className="text-base font-bold text-white flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#D4AF37]"></span>
                          <span>Year 2 — Second Semester</span>
                        </h4>
                        <span className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                          6 Total Units
                        </span>
                      </div>

                      <div className="space-y-3">
                        {yearTwoCourses.sem2.map((c, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/40 transition"
                          >
                            <div>
                              <span className="text-[10px] font-bold text-[#D4AF37] block">
                                {c.code}
                              </span>
                              <span className="text-xs font-semibold text-white block">
                                {c.name}
                              </span>
                            </div>
                            <span className="text-xs font-bold text-slate-300 bg-slate-800 px-2 py-1 rounded-lg">
                              {c.units} {c.units === 1 ? "Unit" : "Units"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {selectedYear === "3" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
                      <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                        <h4 className="text-base font-bold text-white flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#D4AF37]"></span>
                          <span>Year 3 — First Semester</span>
                        </h4>
                        <span className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                          12 Total Units
                        </span>
                      </div>

                      <div className="space-y-3">
                        {yearThreeCourses.sem1.map((c, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/40 transition"
                          >
                            <div>
                              <span className="text-[10px] font-bold text-[#D4AF37] block">
                                {c.code}
                              </span>
                              <span className="text-xs font-semibold text-white block">
                                {c.name}
                              </span>
                            </div>
                            <span className="text-xs font-bold text-slate-300 bg-slate-800 px-2 py-1 rounded-lg">
                              {c.units} {c.units === 1 ? "Unit" : "Units"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl">
                      <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                        <h4 className="text-base font-bold text-white flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#D4AF37]"></span>
                          <span>Year 3 — Second Semester (Specialization)</span>
                        </h4>
                        <span className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                          Max 9 Units
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-3 text-xs text-slate-300">
                        N.B: The 2nd semester of the 3rd year is for specialization in
                        which every student registers courses of interest & calling.
                      </div>

                      <div className="space-y-3">
                        {yearThreeCourses.sem2.map((c, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/40 transition"
                          >
                            <div>
                              <span className="text-[10px] font-bold text-[#D4AF37] block">
                                {c.code}
                              </span>
                              <span className="text-xs font-semibold text-white block">
                                {c.name}
                              </span>
                            </div>
                            <span className="text-xs font-bold text-slate-300 bg-slate-800 px-2 py-1 rounded-lg">
                              {c.units} {c.units === 1 ? "Unit" : "Units"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Practicum & Research Banner */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 to-slate-900 border border-[#D4AF37]/40">
                    <h5 className="text-sm font-bold text-[#D4AF37] mb-1 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>Practicum (Students' Field Experience) — 4 Units</span>
                    </h5>
                    <p className="text-xs text-slate-300">
                      Takes place during the inter-semester breaks of 200 Level and 300 Level respectively (without hours of lectures).
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-amber-500/10 border border-[#D4AF37]/40">
                    <h5 className="text-sm font-bold text-[#D4AF37] mb-1 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>Students' Research Work — 4 Units</span>
                    </h5>
                    <p className="text-xs text-slate-300">
                      Evaluated via: Seminar Presentation (30%) + Supervisor's Grade (70%).
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* TAB 2: ADMISSION TRACKS & REQUIREMENTS */}
          {activeTab === "requirements" && (
            <Reveal direction="up">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* English Track */}
                  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <h4 className="text-lg font-bold text-white">
                        English Language Track
                      </h4>
                      <span className="text-xs font-bold text-[#D4AF37]">
                        Certificate (1 Yr) | Diploma (2 Yrs)
                      </span>
                    </div>

                    <div>
                      <h5 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2">
                        Certificate Entry Requirements:
                      </h5>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>Minimum of Secondary School Certificate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>Ability to read & write in English and Yoruba</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>Genuine proof of conversion & church membership</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>Successful performance in admission interview</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2">
                        Diploma Entry Requirements:
                      </h5>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>Minimum of 5 credits in SSCE including English Language</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>Genuine proof of conversion & church membership</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 text-xs text-slate-300 border border-white/10">
                      <span className="font-bold text-[#D4AF37]">Waivers:</span> Any candidate who completed a Certificate Course before is eligible for Diploma Certificate.
                    </div>
                  </div>

                  {/* Yoruba Track */}
                  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <h4 className="text-lg font-bold text-white">
                        Yoruba Language Track
                      </h4>
                      <span className="text-xs font-bold text-[#D4AF37]">
                        Certificate (1 Yr) | Diploma (2 Yrs)
                      </span>
                    </div>

                    <div>
                      <h5 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2">
                        General Entry Requirements:
                      </h5>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>Minimum of Primary School Leaving Certificate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>Ability to read & write in Yoruba</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>Genuine proof of conversion & church membership</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>Successful performance in admission interview</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 text-xs text-slate-300 border border-white/10 mt-auto">
                      <span className="font-bold text-[#D4AF37]">Waivers:</span> Candidates who completed a Certificate Course in a recognized institution are eligible for Advance Certificate.
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* TAB 3: SPECIALIZATION TRACKS */}
          {activeTab === "specializations" && (
            <Reveal direction="up">
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto mb-6">
                  <h4 className="text-lg font-bold text-white">
                    3rd Year 2nd Semester Specialization Tracks
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Select a track to view suggested courses (Maximum 9 Units).
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                  {specializations.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSpec(s.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                        selectedSpec === s.id
                          ? "bg-[#D4AF37] text-slate-950 border border-amber-300"
                          : "bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800"
                      }`}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>

                {specializations.map(
                  (spec) =>
                    spec.id === selectedSpec && (
                      <div
                        key={spec.id}
                        className="max-w-3xl mx-auto p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl"
                      >
                        <h5 className="text-base font-bold text-[#D4AF37] mb-4 pb-2 border-b border-slate-800">
                          {spec.title} — Suggested Specialization Courses
                        </h5>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {spec.courses.map((c, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5"
                            >
                              <span className="text-xs font-semibold text-white">
                                {c.name}
                              </span>
                              <span className="text-xs font-bold text-[#D4AF37] bg-slate-800 px-2 py-0.5 rounded">
                                {c.units} {c.units === 1 ? "Unit" : "Units"}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                )}
              </div>
            </Reveal>
          )}

          {/* TAB 4: SCHOOL CALENDAR */}
          {activeTab === "calendar" && (
            <Reveal direction="up">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="p-4 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-center">
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">
                    SESSION CALENDAR: JANUARY TO NOVEMBER (TWO SEMESTERS)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* First Semester */}
                  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                    <h4 className="text-base font-bold text-white pb-3 border-b border-slate-800 mb-4 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#D4AF37]" />
                      <span>First Semester Schedule</span>
                    </h4>

                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between items-center p-3 rounded-xl bg-white/5">
                        <span className="text-slate-300">Lectures</span>
                        <span className="font-bold text-[#D4AF37]">16 Weeks</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-white/5">
                        <span className="text-slate-300">Lectures-Free Week</span>
                        <span className="font-bold text-slate-200">1 Week</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-white/5">
                        <span className="text-slate-300">Examinations</span>
                        <span className="font-bold text-slate-200">1 Week</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-white/5">
                        <span className="text-slate-300">Break Before Practicum</span>
                        <span className="font-bold text-slate-200">1 Week</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                        <span className="text-[#D4AF37] font-semibold">Practicums</span>
                        <span className="font-bold text-[#D4AF37]">6 Weeks</span>
                      </div>
                    </div>
                  </div>

                  {/* Second Semester */}
                  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                    <h4 className="text-base font-bold text-white pb-3 border-b border-slate-800 mb-4 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#D4AF37]" />
                      <span>Second Semester Schedule</span>
                    </h4>

                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between items-center p-3 rounded-xl bg-white/5">
                        <span className="text-slate-300">Lectures</span>
                        <span className="font-bold text-[#D4AF37]">16 Weeks</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-white/5">
                        <span className="text-slate-300">Lectures-Free Week</span>
                        <span className="font-bold text-slate-200">1 Week</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-white/5">
                        <span className="text-slate-300">Examinations</span>
                        <span className="font-bold text-slate-200">1 Week</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                        <span className="text-[#D4AF37] font-semibold">Graduation Preparation</span>
                        <span className="font-bold text-[#D4AF37]">3 Weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* TAB 5: GRADING & REGULATIONS */}
          {activeTab === "grading" && (
            <Reveal direction="up">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                  <h4 className="text-base font-bold text-white mb-4 pb-2 border-b border-slate-800">
                    Courses Grading System
                  </h4>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-white/5 text-[#D4AF37] uppercase tracking-wider">
                        <tr>
                          <th className="p-3">Grade</th>
                          <th className="p-3">Grade Points</th>
                          <th className="p-3">Marks Range</th>
                          <th className="p-3">Remark</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-slate-300">
                        {gradingScale.map((g, i) => (
                          <tr key={i} className="hover:bg-white/5">
                            <td className="p-3 font-extrabold text-white">{g.grade}</td>
                            <td className="p-3 font-bold text-[#D4AF37]">{g.points}</td>
                            <td className="p-3">{g.range}%</td>
                            <td className="p-3 font-medium">{g.remark}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-white/5 text-xs text-slate-300">
                    <span className="font-bold text-[#D4AF37]">GPA Formula:</span> Cumulative Grade Points / Cumulative Course Units = Grade Point Average (GPA)
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <h4 className="text-base font-bold text-[#D4AF37] flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span>Award of Certificate & Graduation Regulations</span>
                  </h4>

                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">95% Attendance Requirement:</strong> Candidate must attain 95% class attendance to qualify for examinations.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Course Completion:</strong> Must successfully complete all prescribed courses, assignments, seminars, and project works.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Character & Suitability Screening:</strong> Candidates undergo screening at the end of the program to ascertain suitability in character and learning.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          )}
        </div>

        {/* FEATURE HIGHLIGHT BANNER: Why Study With Us? */}
        <Reveal direction="up">
          <div className="rounded-[32px] bg-slate-50/80 border border-slate-200/90 p-8 sm:p-12 shadow-sm mb-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                <span>THE ERIMBE DIFFERENCE</span>
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
                Why Study With Us?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyStudyFeatures.map((feat, idx) => (
                <Card3D key={idx} maxTilt={8} glare={false}>
                  <div className="rounded-[20px] bg-white border border-slate-200/80 p-6 shadow-sm hover:border-[#D4AF37]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-start h-full">
                    <div className="flex items-center gap-2.5 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-[#D4AF37] shrink-0" />
                      <h4 className="text-base font-bold text-[#0F172A]">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CALL TO ACTION BANNER */}
        <Reveal direction="up">
          <div className="rounded-[32px] bg-[#0F172A] text-white p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">
                TAKE THE NEXT STEP
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 leading-tight">
                Ready to Begin Your Ministry Journey?
              </h3>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-6 max-w-2xl mx-auto">
                Applications are now open. Join a community committed to biblical excellence, spiritual growth, and servant leadership.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={onOpenApplyModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] text-slate-950 font-bold px-8 py-4 text-sm sm:text-base shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Apply Now</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProgramsSection;
