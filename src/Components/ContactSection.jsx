import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Reveal from "./Reveal";

const contactCards = [
  {
    icon: MapPin,
    title: "Campus Location",
    detail: "Alapako, Lagos-Ibadan Expressway, Opposite Govamit, Ogun State, Nigeria",
    badge: "Main Campus",
  },
  {
    icon: Mail,
    title: "Email Address",
    detail: "admissions@college.edu",
    badge: "Official Email",
  },
  {
    icon: Phone,
    title: "Phone Number",
    detail: "+234 708 737 0199",
    badge: "Admissions Office",
  },
  {
    icon: Clock,
    title: "Office Hours",
    detail: "Monday - Friday: 8:00 AM - 5:00 PM",
    badge: "Open Weekdays",
  },
];

const ContactSection = ({ onOpenApplyModal, onOpenExploreModal }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "Admissions Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "Admissions Inquiry",
        message: "",
      });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative bg-white text-slate-900 py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">
              <span>CONTACT US</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
              We'd Love to Hear From You
            </h2>

            <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
              Whether you're interested in admission, academic programs, ministry training, or simply want to learn more about our Bible College, we're here to help.
            </p>
          </div>
        </Reveal>

        {/* TWO-COLUMN LAYOUT: INFO CARDS & FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          
          {/* LEFT SIDE: CONTACT INFO CARDS */}
          <div className="lg:col-span-5 space-y-5">
            <Reveal direction="right">
              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
                  GET IN TOUCH
                </span>
                <h3 className="text-2xl font-extrabold text-[#0F172A]">
                  Admissions & Campus Information
                </h3>
              </div>
            </Reveal>

            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Reveal key={idx} direction="right" delay={idx * 100}>
                  <div
                    className="group rounded-[24px] bg-slate-50 border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-[#D4AF37]/50 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white border border-slate-200 text-[#0F172A] group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-colors shadow-xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-sm font-bold text-[#0F172A] group-hover:text-[#D4AF37] transition-colors">
                          {card.title}
                        </h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200/70 text-slate-700">
                          {card.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed break-words">
                        {card.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}

            {/* Social Links Box */}
            <Reveal direction="right" delay={400}>
              <div className="rounded-[24px] bg-[#0F172A] text-white p-6 shadow-xl border border-white/10 mt-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-3">
                  CONNECT WITH US
                </span>
                <p className="text-xs text-slate-300 mb-4">
                  Follow EriMbe Bible College on social media for updates, devotions, and campus news.
                </p>

                <div className="flex items-center gap-3 flex-wrap">
                  {/* Facebook */}
                  <a
                    href="#"
                    title="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-slate-950 border border-white/20 hover:border-[#D4AF37] shadow-sm transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    title="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-slate-950 border border-white/20 hover:border-[#D4AF37] shadow-sm transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    title="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-slate-950 border border-white/20 hover:border-[#D4AF37] shadow-sm transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="#"
                    title="YouTube"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-slate-950 border border-white/20 hover:border-[#D4AF37] shadow-sm transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="#"
                    title="X (Twitter)"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-slate-950 border border-white/20 hover:border-[#D4AF37] shadow-sm transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT SIDE: PREMIUM CONTACT FORM */}
          <div className="lg:col-span-7">
            <Reveal direction="left" delay={200}>
              <div className="rounded-[32px] bg-slate-50 border border-slate-200/90 p-8 sm:p-10 shadow-sm relative">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
                    SEND A MESSAGE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                    Send Us an Inquiry
                  </h3>
                </div>

                {submitted && (
                  <div className="mb-6 p-4 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#0F172A] font-bold text-sm flex items-center gap-3 animate-in fade-in">
                    <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />
                    <span>Thank you! Your message has been received. Our team will contact you shortly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">First Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Samuel"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Last Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="David"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="samuel@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+234 708 737 0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm transition"
                    >
                      <option value="Admissions Inquiry">Admissions Inquiry</option>
                      <option value="Academic Programs">Academic Programs</option>
                      <option value="Scholarships & Financial Aid">Scholarships & Financial Aid</option>
                      <option value="General Questions">General Questions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Message *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can our admissions team assist you today?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 text-sm transition resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#0F172A] hover:bg-[#D4AF37] text-white hover:text-slate-950 font-bold text-sm shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 border border-[#0F172A] hover:border-[#D4AF37]"
                    >
                      <span>Send Message</span>
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>

        </div>

        {/* EMBEDDED GOOGLE MAP CARD */}
        <Reveal direction="up">
          <div className="mb-24">
            <div className="text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
                VISIT OUR CAMPUS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                Campus Location & Map
              </h3>
            </div>

            <div className="rounded-[32px] overflow-hidden border border-slate-200 shadow-xl bg-slate-100 h-[380px] sm:h-[450px]">
              <iframe
                title="EriMbe Bible College Location Map"
                src="https://maps.google.com/maps?q=Alapako+Lagos+Ibadan+Expressway+Ogun+State&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>

        {/* CALL TO ACTION BANNER */}
        <Reveal direction="up">
          <div className="rounded-[32px] bg-[#0F172A] text-white p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">
                JOIN ERIMBE BIBLE COLLEGE
              </span>

              <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                Ready to Begin Your Calling?
              </h3>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
                Applications are open for students who desire to grow in biblical knowledge, spiritual maturity, and Christian leadership.
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
                  onClick={onOpenExploreModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-8 py-4 text-sm sm:text-base backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Explore Programs</span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default ContactSection;
