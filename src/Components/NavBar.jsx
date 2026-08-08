import React, { useState, useEffect } from "react";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Admissions", href: "#admissions" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const NavBar = ({ onOpenApplyModal }) => {
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar background density on scroll
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy: Automatically detect active section in viewport
      const sectionIds = ["home", "about", "programs", "admissions", "gallery", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            const capitalizedName = id.charAt(0).toUpperCase() + id.slice(1);
            setActiveLink(capitalizedName);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveLink(item.name);
    setMobileMenuOpen(false);

    const targetElement = document.getElementById(item.href.replace("#", ""));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-5 transition-all duration-300">
      <div className="mx-auto max-w-6xl">
        {/* Deep Navy Glass Pill Container */}
        <div
          className={`relative overflow-hidden rounded-full border transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 backdrop-blur-2xl shadow-2xl ${
            scrolled
              ? "bg-[#0F172A]/95 border-white/25 shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
              : "bg-[#0F172A]/85 border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:border-white/30"
          }`}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Logo Section */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, { name: "Home", href: "#home" })}
              className="flex items-center gap-2 group shrink-0"
            >
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#D4AF37]">
                {/* Gold Cross Logo */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-[#D4AF37] transition-colors"
                >
                  <path
                    d="M12 3V21M7 8H17"
                    stroke="#D4AF37"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg lg:text-xl font-extrabold tracking-wider text-white leading-tight">
                  ERIMBE
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-[#D4AF37] uppercase -mt-0.5 sm:-mt-1">
                  Bible College
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden items-center gap-3 md:gap-5 lg:gap-7 md:flex">
              {menuItems.map((item) => {
                const isActive = activeLink === item.name;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`group relative py-1 text-xs lg:text-sm font-bold tracking-wide transition-colors duration-300 ${
                      isActive ? "text-white" : "text-slate-200 hover:text-[#D4AF37]"
                    }`}
                  >
                    <span>{item.name}</span>
                    
                    {/* Animated Gold Underline effect on hover and active click */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] lg:h-[2.5px] w-full rounded-full bg-[#D4AF37] transition-transform duration-300 origin-left ${
                        isActive
                          ? "scale-x-100 shadow-[0_0_10px_#D4AF37]"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Right Action CTA Button (Apply Now) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                onClick={onOpenApplyModal}
                className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-[#D4AF37] border border-white/30 hover:border-[#D4AF37] px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white hover:text-slate-950 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Apply Now</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1.5 sm:p-2 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20 transition cursor-pointer"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mt-3 rounded-2xl border border-white/20 bg-[#0F172A]/98 p-5 backdrop-blur-2xl shadow-2xl md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-3">
              {menuItems.map((item) => {
                const isActive = activeLink === item.name;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30"
                        : "text-slate-200 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />}
                  </a>
                );
              })}
              <div className="pt-2 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApplyModal();
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#D4AF37] text-center text-sm font-bold text-slate-950 hover:bg-[#c49f2c] transition shadow-md"
                >
                  Apply Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
