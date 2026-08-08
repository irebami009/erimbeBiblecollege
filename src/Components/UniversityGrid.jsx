import React from "react";

const universities = [
  {
    name: "University of Auckland",
    qsRank: "#68 Worldwide",
    location: "Auckland",
    students: "44,000+",
    popular: "Data Science, Business, Engineering, Law",
    color: "from-blue-600 to-indigo-900",
  },
  {
    name: "University of Otago",
    qsRank: "#206 Worldwide",
    location: "Dunedin",
    students: "21,000+",
    popular: "Medicine, Dentistry, Health Sciences, Life Sciences",
    color: "from-amber-600 to-amber-900",
  },
  {
    name: "Victoria University of Wellington",
    qsRank: "#244 Worldwide",
    location: "Wellington",
    students: "22,000+",
    popular: "Politics, Architecture, Artificial Intelligence",
    color: "from-emerald-600 to-teal-950",
  },
  {
    name: "University of Canterbury",
    qsRank: "#256 Worldwide",
    location: "Christchurch",
    students: "18,000+",
    popular: "Civil Engineering, Forestry, Antarctic Studies",
    color: "from-purple-600 to-slate-900",
  },
  {
    name: "Massey University",
    qsRank: "#239 Worldwide",
    location: "Palmerston North & Auckland",
    students: "30,000+",
    popular: "Aviation, Veterinary Medicine, Agri-Commerce",
    color: "from-cyan-600 to-blue-950",
  },
  {
    name: "University of Waikato",
    qsRank: "#250 Worldwide",
    location: "Hamilton & Tauranga",
    students: "12,000+",
    popular: "Cyber Security, Management, Environmental Science",
    color: "from-rose-600 to-slate-950",
  },
  {
    name: "Lincoln University",
    qsRank: "#362 Worldwide",
    location: "Canterbury",
    students: "4,000+",
    popular: "Agriculture, Viticulture, Supply Chain",
    color: "from-green-600 to-slate-950",
  },
  {
    name: "Auckland University of Technology (AUT)",
    qsRank: "#407 Worldwide",
    location: "Auckland",
    students: "29,000+",
    popular: "Computer Science, Creative Technologies, Design",
    color: "from-sky-600 to-indigo-950",
  },
];

const UniversityGrid = ({ onOpenFindCourses }) => {
  return (
    <section id="courses" className="py-20 bg-slate-950 text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            8 World-Class Universities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 text-white">
            Top New Zealand Universities
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            All 8 New Zealand state-funded universities rank in the top 3% globally in QS World University Rankings.
          </p>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {universities.map((uni, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md hover:bg-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    {uni.qsRank}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    📍 {uni.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition">
                  {uni.name}
                </h3>
                <p className="text-xs text-slate-400 mt-2">
                  👥 {uni.students} Students
                </p>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-xs text-slate-400 block font-medium">Top Majors:</span>
                  <p className="text-xs text-slate-200 mt-1">{uni.popular}</p>
                </div>
              </div>

              <button
                onClick={onOpenFindCourses}
                className="mt-6 w-full py-2.5 rounded-xl bg-white/10 group-hover:bg-amber-400 group-hover:text-slate-950 text-white text-xs font-bold transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>View Courses</span>
                <span>→</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UniversityGrid;
