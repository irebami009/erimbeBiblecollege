import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import HomeHero from "../Components/Home/HomeHero";
import AboutSection from "../Components/AboutSection";
import ProgramsSection from "../Components/ProgramsSection";
import AdmissionsSection from "../Components/AdmissionsSection";
import GallerySection from "../Components/GallerySection";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";
import FindCoursesModal from "../Components/FindCoursesModal";
import ApplyModal from "../Components/ApplyModal";

const HompePage = () => {
  const [isCoursesModalOpen, setIsCoursesModalOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    setIsApplyModalOpen(true);
  };

  const handleFormSubmitSuccess = () => {
    setToastMessage(
      "✝ Application submitted! Our Admissions Office will reach out to you with next steps.",
    );
    setTimeout(() => setToastMessage(null), 5000);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#D4AF37] selection:text-slate-950 overflow-x-hidden">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-[#D4AF37] text-slate-950 font-bold text-sm shadow-2xl border border-amber-300 animate-in slide-in-from-bottom-5 duration-300 max-w-md">
          {toastMessage}
        </div>
      )}

      {/* Floating White Glass Navigation Header */}
      <NavBar
        onOpenApplyModal={() => {
          setSelectedCourse(null);
          setIsApplyModalOpen(true);
        }}
      />

      {/* Hero Banner Section */}
      <HomeHero
        onOpenApplyModal={() => {
          setSelectedCourse(null);
          setIsApplyModalOpen(true);
        }}
        onOpenExploreModal={() => setIsCoursesModalOpen(true)}
      />

      {/* About Section (#about) */}
      <AboutSection />

      {/* Programs Section (#programs) */}
      <ProgramsSection
        onOpenApplyModal={() => {
          setSelectedCourse(null);
          setIsApplyModalOpen(true);
        }}
        onSelectProgram={handleSelectCourse}
      />

      {/* Admissions Section (#admissions) */}
      <AdmissionsSection
        onOpenApplyModal={() => {
          setSelectedCourse(null);
          setIsApplyModalOpen(true);
        }}
      />

      {/* Gallery Section (#gallery) */}
      <GallerySection
        onOpenApplyModal={() => {
          setSelectedCourse(null);
          setIsApplyModalOpen(true);
        }}
      />

      {/* Contact Us Section (#contact) */}
      <ContactSection
        onOpenApplyModal={() => {
          setSelectedCourse(null);
          setIsApplyModalOpen(true);
        }}
        onOpenExploreModal={() => setIsCoursesModalOpen(true)}
      />

      {/* Premium Deep Navy Footer */}
      <Footer
        onOpenApplyModal={() => {
          setSelectedCourse(null);
          setIsApplyModalOpen(true);
        }}
        onOpenExploreModal={() => setIsCoursesModalOpen(true)}
      />

      {/* Explore Programs Modal */}
      <FindCoursesModal
        isOpen={isCoursesModalOpen}
        onClose={() => setIsCoursesModalOpen(false)}
        onSelectCourse={handleSelectCourse}
      />

      {/* Admissions Apply Now Modal */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        selectedCourse={selectedCourse}
        onSubmitSuccess={handleFormSubmitSuccess}
      />
    </div>
  );
};

export default HompePage;
