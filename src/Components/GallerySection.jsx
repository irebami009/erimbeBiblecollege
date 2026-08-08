import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Sparkles,
  ArrowRight,
  Camera,
  Layers,
} from "lucide-react";
import Reveal from "./Reveal";

// User images from assets folder
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";

import img15 from "../assets/img15.jpeg";
import img16 from "../assets/img16.jpeg";
import img17 from "../assets/img17.jpeg";
import img18 from "../assets/img18.jpeg";
import img19 from "../assets/img19.jpeg";
import img20 from "../assets/img20.jpeg";
import img21 from "../assets/img21.jpeg";
import img22 from "../assets/img22.jpeg";
import img23 from "../assets/img23.jpeg";
import img24 from "../assets/img24.jpeg";
import img25 from "../assets/img25.jpeg";

const galleryItems = [
  {
    id: 20,
    title: "Campus Chapel Gathering",
    category: "Spiritual Life",
    tag: "Gathering",
    description:
      "Vibrant community chapel session featuring worship, prayer, and biblical exposition.",
    imageUrl: img20,
  },
  {
    id: 1,
    title: "Graduation Ceremony",
    category: "Academic",
    tag: "Graduation",
    description:
      "Celebrating academic achievements and spiritual commissioning as our graduates step into global ministry and servant leadership.",
    imageUrl: img1,
  },
  {
    id: 2,
    title: "Bible Study Session",
    category: "Academics",
    tag: "Bible Study",
    description:
      "Interactive group scripture study, exegetical discussion, and deep theological reflection in a collaborative classroom environment.",
    imageUrl: img2,
  },
  {
    id: 3,
    title: "Chapel Worship",
    category: "Spiritual Life",
    tag: "Worship",
    description:
      "Heartfelt praise, worship, and corporate prayer bringing our entire college community together in spiritual unity.",
    imageUrl: img3,
  },
  {
    id: 4,
    title: "Mission Outreach",
    category: "Ministry",
    tag: "Outreach",
    description:
      "Serving local and global communities with Christ's compassion, evangelism, and community development initiatives.",
    imageUrl: img4,
  },
  {
    id: 5,
    title: "Theology Lecture",
    category: "Academics",
    tag: "Lecture",
    description:
      "In-depth lectures delivered by seasoned pastors and biblical scholars, nurturing sound doctrine and critical thinking.",
    imageUrl: img5,
  },
  {
    id: 6,
    title: "Student Fellowship",
    category: "Community",
    tag: "Fellowship",
    description:
      "Building lifelong Christian friendships, peer mentorship, and shared spiritual encouragement on campus.",
    imageUrl: img6,
  },
  {
    id: 7,
    title: "Leadership Conference",
    category: "Events",
    tag: "Conference",
    description:
      "Annual gathering featuring guest ministry leaders, workshops, and strategic visionary sessions for church planting.",
    imageUrl: img7,
  },
  {
    id: 8,
    title: "Faculty Seminar",
    category: "Faculty",
    tag: "Seminar",
    description:
      "Academic panel discussions, faculty research presentations, and ministry innovation forums.",
    imageUrl: img8,
  },
  {
    id: 9,
    title: "Campus Activities",
    category: "Campus Life",
    tag: "Activities",
    description:
      "Vibrant student life, outdoor worship gatherings, sports, and recreational events fostering holistic growth.",
    imageUrl: img9,
  },
  {
    id: 15,
    title: "Discipleship Workshop",
    category: "Spiritual Life",
    tag: "Discipleship",
    description:
      "Practical workshops focusing on spiritual disciplines, personal devotion, and mentoring new believers.",
    imageUrl: img15,
  },
  {
    id: 16,
    title: "Praise & Worship Night",
    category: "Spiritual Life",
    tag: "Worship",
    description:
      "An evening of uninterrupted worship, intercessory prayer, and spiritual renewal for students and faculty.",
    imageUrl: img16,
  },
  {
    id: 17,
    title: "Ministry Practicum",
    category: "Ministry",
    tag: "Training",
    description:
      "Hands-on ministry practicum equipping students with practical skills for pastoring, preaching, and counseling.",
    imageUrl: img17,
  },
  {
    id: 18,
    title: "Youth Outreach Initiative",
    category: "Ministry",
    tag: "Outreach",
    description:
      "Empowering youth through gospel outreach, mentorship programs, and local community service projects.",
    imageUrl: img18,
  },
  {
    id: 19,
    title: "Exegetical Studies Class",
    category: "Academics",
    tag: "Scripture",
    description:
      "Deep linguistic and historical analysis of Old and New Testament biblical manuscripts.",
    imageUrl: img19,
  },
  {
    id: 20,
    title: "Campus Chapel Gathering",
    category: "Spiritual Life",
    tag: "Gathering",
    description:
      "Vibrant community chapel session featuring student testimonies, worship, and biblical exposition.",
    imageUrl: img20,
  },
  {
    id: 21,
    title: "Pastoral Leadership Forum",
    category: "Ministry",
    tag: "Forum",
    description:
      "Interactive forums connecting senior pastors and faculty with aspiring ministry leaders.",
    imageUrl: img21,
  },
  {
    id: 22,
    title: "Global Missions Seminar",
    category: "Missions",
    tag: "Seminar",
    description:
      "Cross-cultural ministry training and missionary preparation for global evangelism.",
    imageUrl: img22,
  },
  {
    id: 23,
    title: "Student Community Life",
    category: "Campus Life",
    tag: "Community",
    description:
      "Encouraging fellowship, group prayer circles, and dynamic campus living.",
    imageUrl: img23,
  },
  {
    id: 24,
    title: "Alumni Leadership Celebration",
    category: "Events",
    tag: "Celebration",
    description:
      "Honoring the impact of our alumni serving in churches, missions, and ministries worldwide.",
    imageUrl: img24,
  },
  {
    id: 25,
    title: "Spiritual Formation & Prayer",
    category: "Spiritual Life",
    tag: "Prayer",
    description:
      "Deep personal devotion, prayer ministry, and spiritual growth opportunities across our Bible College campus.",
    imageUrl: img25,
  },
];

const GallerySection = ({ onOpenApplyModal }) => {
  const scrollContainerRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll buttons visibility
  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    updateScrollButtons();
    container.addEventListener("scroll", updateScrollButtons, { passive: true });

    // Enable mouse wheel horizontal scrolling
    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollBy({
          left: e.deltaY * 1.5,
          behavior: "smooth",
        });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Scroll manually via buttons
  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };

    // Lock body scrolling when modal is open
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  const handlePrevImage = () => {
    setSelectedIndex((prev) =>
      prev === null ? null : prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedIndex((prev) =>
      prev === null ? null : prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  const currentItem = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  return (
    <section
      id="gallery"
      className="relative bg-white text-slate-900 py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER & CONTROLS */}
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-3xl">
              {/* Gold Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>GALLERY</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
                Life at Our Bible College
              </h2>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                Explore memorable moments from our Bible College community, including
                graduation ceremonies, classroom sessions, chapel worship, conferences,
                ministry outreach, student life, and special events that reflect our
                commitment to Christ-centered education.
              </p>
            </div>

            {/* Navigation Arrow Controls for Horizontal Scroll */}
            <div className="flex items-center gap-3 self-start md:self-end">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider hidden sm:inline-block mr-1">
                Slide Gallery
              </span>
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll Left"
                className={`px-4 py-3.5 rounded-full border transition-all duration-300 flex items-center justify-center gap-2 text-xs font-bold ${
                  canScrollLeft
                    ? "bg-slate-900 text-white border-slate-900 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-slate-950 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                    : "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll Right"
                className={`px-4 py-3.5 rounded-full border transition-all duration-300 flex items-center justify-center gap-2 text-xs font-bold ${
                  canScrollRight
                    ? "bg-slate-900 text-white border-slate-900 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-slate-950 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                    : "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-50"
                }`}
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* HORIZONTAL GALLERY ROW WITH FLOATING CLICKABLE SLIDE BUTTONS */}
      <Reveal direction="up" delay={150}>
        <div className="relative w-full group/row">
          {/* Floating Left Slide Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              aria-label="Slide Left"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-slate-950/80 hover:bg-[#D4AF37] text-white hover:text-slate-950 border border-white/20 hover:border-[#D4AF37] shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          )}

          {/* Floating Right Slide Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              aria-label="Slide Right"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-slate-950/80 hover:bg-[#D4AF37] text-white hover:text-slate-950 border border-white/20 hover:border-[#D4AF37] shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar px-4 sm:px-8 lg:px-12 py-6 select-none"
          >
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedIndex(index)}
                className="group relative w-[300px] sm:w-[360px] md:w-[400px] shrink-0 snap-start h-[420px] sm:h-[460px] rounded-[24px] overflow-hidden bg-slate-950 border border-slate-200/80 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_22px_45px_rgba(15,23,42,0.18)] transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between p-6"
              >
                {/* Background Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/10 group-hover:from-slate-950/95 transition-opacity duration-300" />

                {/* Top Header Card Info */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="backdrop-blur-md bg-white/20 border border-white/30 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wide shadow-sm">
                    {item.category}
                  </span>

                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:text-slate-950 group-hover:border-[#D4AF37] transition-all duration-300 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content Caption */}
                <div className="relative z-10 space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#D4AF37]">
                    <Camera className="w-3.5 h-3.5" />
                    <span>{item.tag}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      {selectedIndex !== null && currentItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-in fade-in duration-300">
          {/* Top Bar Navigation */}
          <div className="flex items-center justify-between text-white max-w-7xl w-full mx-auto z-20">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-[#D4AF37]">
                {selectedIndex + 1} / {galleryItems.length}
              </span>
              <span className="text-xs sm:text-sm text-slate-300 font-medium hidden sm:inline-block">
                {currentItem.category}
              </span>
            </div>

            <button
              onClick={() => setSelectedIndex(null)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-[#D4AF37] transition-all cursor-pointer shadow-lg"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Stage Large Image & Navigation Arrows */}
          <div className="relative flex-1 flex items-center justify-center my-4 max-w-6xl w-full mx-auto overflow-hidden">
            {/* Left Chevron Button */}
            <button
              onClick={handlePrevImage}
              aria-label="Previous Image"
              className="absolute left-2 sm:left-6 z-30 p-3.5 sm:p-4 rounded-full bg-slate-900/80 hover:bg-[#D4AF37] text-white hover:text-slate-950 border border-white/20 hover:border-[#D4AF37] transition-all shadow-2xl backdrop-blur-md cursor-pointer hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Main Lightbox Display Image */}
            <div className="relative max-h-[70vh] sm:max-h-[75vh] w-full flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain rounded-2xl animate-in zoom-in-95 duration-300"
              />
            </div>

            {/* Right Chevron Button */}
            <button
              onClick={handleNextImage}
              aria-label="Next Image"
              className="absolute right-2 sm:right-6 z-30 p-3.5 sm:p-4 rounded-full bg-slate-900/80 hover:bg-[#D4AF37] text-white hover:text-slate-950 border border-white/20 hover:border-[#D4AF37] transition-all shadow-2xl backdrop-blur-md cursor-pointer hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>

          {/* Bottom Bar Caption & Thumbnail Strip */}
          <div className="max-w-4xl w-full mx-auto text-center space-y-4 z-20">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-1 font-normal leading-relaxed">
                {currentItem.description}
              </p>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 no-scrollbar">
              {galleryItems.map((thumb, idx) => (
                <button
                  key={thumb.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 transition-all border-2 ${
                    idx === selectedIndex
                      ? "border-[#D4AF37] scale-110 shadow-[0_0_15px_#D4AF37]"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={thumb.imageUrl}
                    alt={thumb.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CALL TO ACTION CARD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <Reveal direction="up" delay={200}>
          <div className="relative overflow-hidden rounded-[24px] bg-white border border-slate-200/80 p-8 sm:p-12 lg:p-16 text-center shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
            {/* Ambient Background Blur Accent */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-slate-900/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {/* Badge Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mx-auto shadow-sm">
                <Layers className="w-6 h-6" />
              </div>

              {/* Heading */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                Every Picture Tells a Story
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                Our gallery captures the faith, learning, worship, fellowship, and
                unforgettable moments that make our Bible College community unique.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={onOpenApplyModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] text-slate-950 font-extrabold text-sm sm:text-base shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default GallerySection;
