import React, { useState } from "react";
import {
  BookOpen,
  GraduationCap,
  Calendar,
  Clock,
  CheckCircle2,
  Award,
  BookMarked,
  ScrollText,
  Sparkles,
  Users,
  Building,
  FileCheck,
} from "lucide-react";
import Reveal from "./Reveal";
import Card3D from "./Card3D";

const programmesList = [
  { title: "Certificate in Theology", level: "Certificate", duration: "1 Year (2 Semesters)" },
  { title: "Certificate in Deliverance Studies", level: "Certificate", duration: "1 Year (2 Semesters)" },
  { title: "Diploma in Theology (Church Leadership & Administration)", level: "Diploma", duration: "2 Years (4 Semesters)" },
  { title: "Diploma in Theology (Teaching Ministry)", level: "Diploma", duration: "2 Years (4 Semesters)" },
  { title: "Diploma in Theology (Mission)", level: "Diploma", duration: "2 Years (4 Semesters)" },
  { title: "Diploma in Theology (Prophetic Ministry)", level: "Diploma", duration: "2 Years (4 Semesters)" },
  { title: "Diploma in Theology (Deliverance Studies)", level: "Diploma", duration: "2 Years (4 Semesters)" },
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

const CoursesSection = ({ onOpenApplyModal }) => {
  const [activeTab, setActiveTab] = useState("curriculum");
  const [selectedYear, setSelectedYear] = useState("1");
  const [selectedSpec, setSelectedSpec] = useState("leadership");

  return (
    <section
      id="courses"
      className="relative bg-[#0F172A] text-white py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-slate-800"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COLLEGE CURRICULUM & PROSPECTUS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Courses & Academic Handbook
            </h2>

            <p className="mt-4 text-xs sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
              Eri Mbe International Bible College is a God-ordained Theological
              center established through the Holy Spirit on May 4, 2024 (an arm
              of Forever In Christ Evangelical Ministry).
            </p>
          </div>
        </Reveal>

        {/* DIVINE MANDATE & TIME OF LECTURES CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Card 1: Divine Purpose */}
          <div className="lg:col-span-7">
            <Reveal direction="right">
              <Card3D maxTilt={6}>
                <div className="rounded-[24px] bg-gradient-to-br from-slate-900 via-slate-950 to-[#0F172A] border border-[#D4AF37]/40 p-6 sm:p-8 shadow-2xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-5 h-5 text-[#D4AF37]" />
                      <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                        DIVINE PURPOSE & INSTITUTIONAL MANDATE
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      Equipping Ministers & Kingdom Virtue Builders
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
                      Direct Correspondences to: The Registrar
                    </div>
                  </div>
                </div>
              </Card3D>
            </Reveal>
          </div>

          {/* Card 2: Lecture Time & Fellowship */}
          <div className="lg:col-span-5">
            <Reveal direction="left">
              <Card3D maxTilt={6}>
                <div className="rounded-[24px] bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-5 h-5 text-[#D4AF37]" />
                      <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                        LECTURE SCHEDULE & FELLOWSHIP
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      Saturday Lecture Format
                    </h3>

                    <div className="space-y-4 my-4">
                      <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                        <Users className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-white block">
                            Student Fellowship (8:30 AM – 9:00 AM)
                          </span>
                          <span className="text-xs text-slate-400 block mt-0.5">
                            Precedes lectures every lecture day. Compulsory for all
                            students.
                          </span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-white block">
                            Main Lectures (9:00 AM – 3:00 PM)
                          </span>
                          <span className="text-xs text-slate-300 block mt-0.5">
                            Held every Saturday across 2 semesters (January to
                            November).
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={onOpenApplyModal}
                    className="w-full py-3 rounded-xl bg-[#D4AF37] text-slate-950 font-extrabold text-sm hover:bg-amber-400 transition shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Apply for Enrollment</span>
                  </button>
                </div>
              </Card3D>
            </Reveal>
          </div>
        </div>

        {/* NAVIGATION TABS FOR ACADEMIC SECTIONS */}
        <Reveal direction="up">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 p-2 rounded-2xl bg-slate-900 border border-slate-800 max-w-4xl mx-auto">
            {[
              { id: "curriculum", label: "3-Year Curriculum", icon: BookMarked },
              { id: "programmes", label: "Programmes & Tracks", icon: ScrollText },
              { id: "specializations", label: "Specializations", icon: Award },
              { id: "calendar", label: "School Calendar", icon: Calendar },
              { id: "grading", label: "Grading & Policies", icon: FileCheck },
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
        </Reveal>

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
                  {/* First Semester */}
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

                  {/* Second Semester */}
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
                  {/* First Semester */}
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

                  {/* Second Semester */}
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
                  {/* First Semester */}
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

                  {/* Second Semester */}
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

        {/* TAB 2: PROGRAMMES & TRACKS */}
        {activeTab === "programmes" && (
          <Reveal direction="up">
            <div className="space-y-10">
              {/* Programmes Offered Grid */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
                  <span>Approved Academic Programmes</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {programmesList.map((prog, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#D4AF37]/50 transition flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded-md border border-[#D4AF37]/20">
                          {prog.level}
                        </span>
                        <h4 className="text-sm font-bold text-white mt-2 leading-snug">
                          {prog.title}
                        </h4>
                      </div>
                      <span className="text-xs text-slate-400 mt-3 block">
                        Duration: {prog.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Admission Tracks: English vs Yoruba */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
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
                        <span>Genuine proof of conversion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>Genuine proof of membership of a Christian Church</span>
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
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>Successful performance in admission interview</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 text-xs text-slate-300 border border-white/10">
                    <span className="font-bold text-[#D4AF37]">Waivers:</span> Any candidate who completed a Certificate Course before is eligible for Diploma Certificate. Duration decided by management.
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
                        <span>Genuine proof of conversion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>Genuine proof of membership of a Christian Church</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>Successful performance in admission interview</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 text-xs text-slate-300 border border-white/10 mt-auto">
                    <span className="font-bold text-[#D4AF37]">Waivers:</span> Any candidate who completed a Certificate Course before in a recognized institution is eligible for Advance Certificate.
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* TAB 3: SPECIALIZATIONS */}
        {activeTab === "specializations" && (
          <Reveal direction="up">
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h3 className="text-xl font-bold text-white">
                  3rd Year 2nd Semester Specialization Tracks
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Students choose their specialization based on calling and interest (Maximum 9 Units).
                </p>
              </div>

              {/* Specialization Pill Buttons */}
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

              {/* Display Selected Specialization */}
              {specializations.map(
                (spec) =>
                  spec.id === selectedSpec && (
                    <div
                      key={spec.id}
                      className="max-w-3xl mx-auto p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl"
                    >
                      <h4 className="text-lg font-bold text-[#D4AF37] mb-4 pb-2 border-b border-slate-800">
                        {spec.title} — Course Options
                      </h4>

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
                  ANNUAL ACADEMIC SESSION: JANUARY TO NOVEMBER
                </span>
                <span className="text-xs text-slate-300 mt-1 block">
                  The session calendar runs based on two semesters.
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Semester */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                  <h4 className="text-base font-bold text-white pb-3 border-b border-slate-800 mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    <span>First Semester Timeline</span>
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
                    <span>Second Semester Timeline</span>
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

        {/* TAB 5: GRADING & POLICIES */}
        {activeTab === "grading" && (
          <Reveal direction="up">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Grading Table */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <h4 className="text-lg font-bold text-white mb-4 pb-2 border-b border-slate-800">
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

              {/* Award of Certificate Rules */}
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
    </section>
  );
};

export default CoursesSection;
