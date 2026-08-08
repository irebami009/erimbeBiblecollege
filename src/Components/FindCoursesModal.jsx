import React, { useState } from "react";

const initialPrograms = [
  {
    id: 1,
    title: "Diploma in Theology Dip. Th. (Church Leadership & Administration)",
    department: "Church Leadership & Administration",
    duration: "2 Years (4 Semesters)",
    level: "Diploma",
    tuition: "English & Yoruba Tracks",
    badge: "Specialization Track",
  },
  {
    id: 2,
    title: "Diploma in Theology Dip. Th. (Teaching Ministry)",
    department: "Teaching Ministry & Education",
    duration: "2 Years (4 Semesters)",
    level: "Diploma",
    tuition: "English & Yoruba Tracks",
    badge: "Specialization Track",
  },
  {
    id: 3,
    title: "Diploma in Theology Dip. Th. (Mission)",
    department: "Missions & Evangelism",
    duration: "2 Years (4 Semesters)",
    level: "Diploma",
    tuition: "English & Yoruba Tracks",
    badge: "Specialization Track",
  },
  {
    id: 4,
    title: "Diploma in Theology Dip. Th. (Prophetic Ministry)",
    department: "Prophetic & Apostolic Studies",
    duration: "2 Years (4 Semesters)",
    level: "Diploma",
    tuition: "English & Yoruba Tracks",
    badge: "Specialization Track",
  },
  {
    id: 5,
    title: "Diploma in Theology Dip. Th. (Deliverance Studies)",
    department: "Deliverance & Spiritual Warfare",
    duration: "2 Years (4 Semesters)",
    level: "Diploma",
    tuition: "English & Yoruba Tracks",
    badge: "Specialization Track",
  },
  {
    id: 6,
    title: "Certificate in Theology",
    department: "Foundational Biblical Studies",
    duration: "1 Year (2 Semesters)",
    level: "Certificate",
    tuition: "English & Yoruba Tracks",
    badge: "Foundational",
  },
  {
    id: 7,
    title: "Certificate in Deliverance Studies",
    department: "Deliverance Studies",
    duration: "1 Year (2 Semesters)",
    level: "Certificate",
    tuition: "English & Yoruba Tracks",
    badge: "Foundational",
  },
];

const FindCoursesModal = ({ isOpen, onClose, onSelectCourse }) => {
  const [searchTerm, setSearchTerm] = useState("");

  if (!isOpen) return null;

  const filtered = initialPrograms.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-[#0F172A] border border-white/20 text-white shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span>Explore Academic & Ministry Programs</span>
              <span className="text-[#D4AF37]">✝</span>
            </h2>
            <p className="text-sm text-slate-300 mt-1">Sound biblical scholarship, spiritual formation, and practical ministry training.</p>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-6 border-b border-white/10 bg-black/20">
          <input
            type="text"
            placeholder="Search programs (e.g., Theology, Divinity, Pastoral, Missions)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] transition"
          />
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {filtered.map((program) => (
            <div
              key={program.id}
              className="group flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#D4AF37]/50 transition duration-200 gap-4"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30">
                    {program.badge}
                  </span>
                  <span className="text-xs text-slate-400">{program.level}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition">
                  {program.title}
                </h3>
                <p className="text-sm text-slate-300 mt-0.5">{program.department}</p>
                <div className="flex items-center gap-4 mt-2 text-xs text-slate-400">
                  <span>⏱ {program.duration}</span>
                  <span>📜 {program.tuition}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onSelectCourse(program);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#c49f2c] text-slate-950 font-bold text-sm transition-all cursor-pointer whitespace-nowrap"
              >
                Apply for Program →
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FindCoursesModal;
