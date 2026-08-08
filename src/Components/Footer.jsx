import React, { useState } from "react";
import { Send, CheckCircle2, MapPin, Mail, Phone, Clock } from "lucide-react";
import Reveal from "./Reveal";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Admissions", href: "#admissions" },
  { name: "Contact", href: "#contact" },
];

const academicPrograms = [
  "Certificate in Biblical Studies",
  "Diploma in Theology",
  "Christian Leadership",
  "Pastoral Ministry",
  "Missions & Evangelism",
  "Worship & Music Ministry",
];

const Footer = ({ onOpenApplyModal, onOpenExploreModal }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <footer className="relative bg-[#0F172A] text-white pt-20 pb-12 border-t border-white/15 rounded-t-[40px] shadow-2xl overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION: 4 COLUMNS */}
        <Reveal direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
            
            {/* COLUMN 1: Brand, Logo, Description & Social Icons */}
            <div className="lg:col-span-4 space-y-5">
              <a href="#home" className="flex items-center gap-2.5 group inline-flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25 transition-transform duration-300 group-hover:scale-105">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-[#D4AF37]">
                    <path d="M12 3V21M7 8H17" stroke="#D4AF37" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold tracking-wider text-white leading-tight">
                    ERIMBE
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase -mt-1">
                    Bible College
                  </span>
                </div>
              </a>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Preparing men and women for Christ-centered leadership through biblical education, spiritual formation, and practical ministry.
              </p>

              {/* Social Media Icons */}
              <div className="pt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  Follow Our Ministry
                </span>
                <div className="flex items-center gap-3">
                  {/* Facebook */}
                  <a
                    href="#"
                    title="Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-slate-950 border border-white/20 hover:border-[#D4AF37] shadow-sm transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    title="Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-slate-950 border border-white/20 hover:border-[#D4AF37] shadow-sm transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    title="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-slate-950 border border-white/20 hover:border-[#D4AF37] shadow-sm transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="#"
                    title="YouTube"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-slate-950 border border-white/20 hover:border-[#D4AF37] shadow-sm transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="#"
                    title="X (Twitter)"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-slate-950 border border-white/20 hover:border-[#D4AF37] shadow-sm transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* COLUMN 2: Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="hover:text-[#D4AF37] transition-colors duration-200 block py-0.5"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3: Academic Programs */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-4">
                Academic Programs
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {academicPrograms.map((prog, idx) => (
                  <li key={idx}>
                    <a
                      href="#programs"
                      className="hover:text-[#D4AF37] transition-colors duration-200 block py-0.5 truncate"
                    >
                      {prog}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 4: Contact Information */}
            <div className="lg:col-span-3 space-y-3 text-xs text-slate-300">
              <h4 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider mb-4">
                Contact Information
              </h4>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Alapako, Lagos-Ibadan Expressway, Opposite Govamit, Ogun State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span>admissions@college.edu</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span>+234 708 737 0199</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Monday - Friday: 8:00 AM - 5:00 PM</span>
              </div>
            </div>

          </div>
        </Reveal>

        {/* NEWSLETTER SUBSCRIPTION SECTION */}
        <Reveal direction="up" delay={150}>
          <div className="py-12 my-10 rounded-[24px] bg-white/5 border border-white/10 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Stay Connected
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Receive updates about admissions, events, seminars, and college news.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              {subscribed ? (
                <div className="px-6 py-3 rounded-full bg-[#D4AF37] text-slate-950 font-bold text-xs flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] text-xs sm:text-sm min-w-[260px]"
                  />
                  <button
                    type="submit"
                    className="px-7 py-3 rounded-full bg-[#D4AF37] hover:bg-[#c49f2c] text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </>
              )}
            </form>
          </div>
        </Reveal>

        {/* BOTTOM SECTION: COPYRIGHT & POLICIES */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} EriMbe Bible College. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#D4AF37] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition">Terms of Use</a>
            <a href="#" className="hover:text-[#D4AF37] transition">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
