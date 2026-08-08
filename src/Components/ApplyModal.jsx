import React, { useState } from "react";
import { Upload, Camera, FileCheck, X, Image as ImageIcon } from "lucide-react";

const ApplyModal = ({ isOpen, onClose, selectedCourse, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: selectedCourse ? selectedCourse.title : "Diploma in Theology (Church Leadership & Administration)",
    calling: "Pastoral Ministry",
    message: "",
  });

  const [passportPhoto, setPassportPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [churchDoc, setChurchDoc] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPassportPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDocChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setChurchDoc(file);
    }
  };

  const removePhoto = () => {
    setPassportPhoto(null);
    setPhotoPreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onSubmitSuccess();
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-xl my-auto flex flex-col rounded-3xl bg-[#0F172A] border border-white/20 text-white shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span>Apply for Admissions</span>
              <span className="text-[#D4AF37]">✝</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Begin your journey in Christ-centered biblical education and ministry preparation.</p>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {selectedCourse && (
          <div className="px-6 py-3 bg-[#D4AF37]/10 border-b border-[#D4AF37]/20 text-xs text-[#D4AF37] flex justify-between items-center">
            <span>Selected Program: <strong>{selectedCourse.title}</strong></span>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          
          {/* PASSPORT PHOTOGRAPH UPLOAD FIELD */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Camera className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span>Passport Photograph *</span>
              </span>
              <span className="text-[10px] text-slate-400 font-normal">JPEG/PNG, max 5MB</span>
            </label>

            {photoPreview ? (
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-[#D4AF37]/40">
                <img
                  src={photoPreview}
                  alt="Passport Preview"
                  className="w-14 h-14 rounded-xl object-cover border border-[#D4AF37]/50"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-white truncate">{passportPhoto?.name}</p>
                  <p className="text-[11px] text-[#D4AF37] font-medium mt-0.5">✔ Photo Attached Successfully</p>
                </div>
                <button
                  type="button"
                  onClick={removePhoto}
                  className="p-2 rounded-xl bg-white/10 hover:bg-red-500/20 text-slate-300 hover:text-red-400 transition"
                  title="Remove Photo"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <label className="relative flex flex-col items-center justify-center w-full h-28 rounded-2xl border-2 border-dashed border-white/20 hover:border-[#D4AF37]/60 bg-white/5 hover:bg-white/10 transition duration-200 cursor-pointer group">
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={handlePhotoChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center justify-center text-center p-3">
                  <Upload className="h-6 w-6 text-[#D4AF37] mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-white group-hover:text-[#D4AF37] transition">
                    Upload Passport Photograph
                  </span>
                  <span className="text-[10px] text-slate-400 mt-0.5">
                    Click or drag & drop clear passport photo here
                  </span>
                </div>
              </label>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Samuel David"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address *</label>
              <input
                type="email"
                required
                placeholder="samuel@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="+234 708 737 0199"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Primary Ministry Focus</label>
              <select
                value={formData.calling}
                onChange={(e) => setFormData({ ...formData, calling: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0F172A] border border-white/15 text-white focus:outline-none focus:border-[#D4AF37] text-sm"
              >
                <option value="Pastoral Ministry">Pastoral Ministry</option>
                <option value="Global Missions">Global Missions & Evangelism</option>
                <option value="Christian Education">Christian Education & Teaching</option>
                <option value="Youth & Worship Ministry">Youth & Worship Ministry</option>
                <option value="Biblical Studies">Biblical Studies & Research</option>
              </select>
            </div>
          </div>

          {/* CHURCH RECOMMENDATION / ACADEMIC DOC ATTACHMENT (OPTIONAL) */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Church Recommendation or Academic Transcript (Optional)
            </label>
            <div className="relative flex items-center">
              <input
                type="file"
                accept="image/*,.pdf,.doc,.docx"
                onChange={handleDocChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-slate-300 flex items-center justify-between">
                <span className="truncate">
                  {churchDoc ? `📄 ${churchDoc.name}` : "Attach recommendation letter or document..."}
                </span>
                <span className="text-[#D4AF37] font-bold shrink-0 ml-2">
                  {churchDoc ? "Attached ✔" : "Browse..."}
                </span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Personal Faith Statement / Notes (Optional)</label>
            <textarea
              rows={2}
              placeholder="Share a brief statement of your calling or any questions for our admissions board..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] text-sm resize-none"
            />
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="px-7 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#c49f2c] text-slate-950 font-bold text-sm shadow-lg transition cursor-pointer flex items-center gap-2"
            >
              {submitting ? "Submitting Application..." : "Submit Application →"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default ApplyModal;
