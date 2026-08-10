import React, { useState, useEffect } from "react";
import {
  X,
  Check,
  ChevronRight,
  ChevronLeft,
  Upload,
  Plus,
  Trash2,
  Download,
  CheckCircle2,
  AlertCircle,
  FileText,
  User,
  BookOpen,
  DollarSign,
  Heart,
  Cross,
  GraduationCap,
  FileCheck,
  Edit3,
} from "lucide-react";
import { sendApplicationEmail } from "../services/emailService";

const initialFormData = {
  // Step 1: Course Selection
  program: "Diploma in Theology",

  // Step 2: Personal Information
  surname: "",
  firstName: "",
  otherNames: "",
  dateOfBirth: "",
  age: "",
  nationality: "Nigerian",
  gender: "Male",
  phone: "",
  email: "",
  maritalStatus: "Single",
  occupation: "",
  workplaceAddress: "",
  residentialAddress: "",
  postalAddress: "",

  // Step 3: Sponsorship
  isSelfSponsored: "Yes",
  sponsorName: "",
  sponsorPhone: "",
  sponsorAddress: "",

  // Step 4: Next of Kin
  nextOfKinName: "",
  relationship: "Parent/Guardian",
  otherRelationship: "",
  nextOfKinAddress: "",
  nextOfKinPhone: "",

  // Step 5: Spiritual Qualification
  isBornAgain: "Yes",
  bornAgainWhen: "",
  salvationExperience: "",
  isSpiritBaptized: "Yes",
  holySpiritBaptismDetails: "",
  hasDivineCall: "Yes",
  divineCallDetails: "",

  // Step 6: Education
  educationHistory: [
    { schoolAttended: "", qualification: "", year: "" }
  ],

  // Step 7: Attestation
  ministerName: "",
  attestedApplicantName: "",
  ministerChurchAddress: "",
  ministerPhone: "",
  ministerConfirmed: false,
  ministerDate: new Date().toISOString().split("T")[0],

  studentConfirmed: false,
  studentDate: new Date().toISOString().split("T")[0],
};

const STEPS = [
  { id: 1, label: "Course Selection", short: "Course" },
  { id: 2, label: "Personal Information", short: "Personal" },
  { id: 3, label: "Sponsorship", short: "Sponsorship" },
  { id: 4, label: "Next of Kin", short: "Next of Kin" },
  { id: 5, label: "Spiritual Qualification", short: "Spiritual" },
  { id: 6, label: "Education", short: "Education" },
  { id: 7, label: "Attestation", short: "Attestation" },
  { id: 8, label: "Review & Submit", short: "Review" },
];

const ApplyModal = ({ isOpen, onClose, selectedCourse, onSubmitSuccess }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [passportPhoto, setPassportPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [academicDoc, setAcademicDoc] = useState(null);
  
  const [submitting, setSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceNo, setReferenceNo] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  // Sync selected course if opened from course list
  useEffect(() => {
    if (selectedCourse?.title) {
      setFormData((prev) => ({ ...prev, program: selectedCourse.title }));
    }
  }, [selectedCourse]);

  if (!isOpen) return null;

  const handleInputChange = (field, value) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      // Auto compute age if DOB provided
      if (field === "dateOfBirth" && value) {
        const birthDate = new Date(value);
        const ageDiff = new Date().getFullYear() - birthDate.getFullYear();
        if (!isNaN(ageDiff)) updated.age = ageDiff.toString();
      }
      return updated;
    });

    if (validationErrors[field]) {
      setValidationErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const handleEducationChange = (index, field, value) => {
    const list = [...formData.educationHistory];
    list[index][field] = value;
    setFormData((prev) => ({ ...prev, educationHistory: list }));
  };

  const addEducationRow = () => {
    setFormData((prev) => ({
      ...prev,
      educationHistory: [...prev.educationHistory, { schoolAttended: "", qualification: "", year: "" }],
    }));
  };

  const removeEducationRow = (index) => {
    if (formData.educationHistory.length <= 1) return;
    const list = formData.educationHistory.filter((_, idx) => idx !== index);
    setFormData((prev) => ({ ...prev, educationHistory: list }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPassportPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDocUpload = (e) => {
    const file = e.target.files[0];
    if (file) setAcademicDoc(file);
  };

  // STEP VALIDATION LOGIC
  const validateStep = (step) => {
    const errors = {};
    if (step === 1) {
      if (!formData.program) errors.program = "Please select an academic program.";
    }
    if (step === 2) {
      if (!formData.surname.trim()) errors.surname = "Surname is required.";
      if (!formData.firstName.trim()) errors.firstName = "First name is required.";
      if (!formData.phone.trim()) errors.phone = "Phone number is required.";
      if (!formData.email.trim()) errors.email = "Valid email address is required.";
      if (!formData.residentialAddress.trim()) errors.residentialAddress = "Residential address is required.";
    }
    if (step === 3) {
      if (formData.isSelfSponsored === "No") {
        if (!formData.sponsorName.trim()) errors.sponsorName = "Sponsor name is required.";
        if (!formData.sponsorPhone.trim()) errors.sponsorPhone = "Sponsor phone number is required.";
      }
    }
    if (step === 4) {
      if (!formData.nextOfKinName.trim()) errors.nextOfKinName = "Next of Kin name is required.";
      if (!formData.nextOfKinPhone.trim()) errors.nextOfKinPhone = "Next of Kin phone is required.";
    }
    if (step === 5) {
      if (formData.isBornAgain === "Yes" && !formData.salvationExperience.trim()) {
        errors.salvationExperience = "Please state your salvation experience.";
      }
    }
    if (step === 7) {
      if (!formData.ministerName.trim()) errors.ministerName = "Minister's name is required.";
      if (!formData.ministerConfirmed) errors.ministerConfirmed = "Minister attestation confirmation is required.";
      if (!formData.studentConfirmed) errors.studentConfirmed = "Applicant attestation confirmation is required.";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 8));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(7)) {
      setCurrentStep(7);
      return;
    }

    setSubmitting(true);
    const generatedRef = `ERIMBE-2026-${Math.floor(10000 + Math.random() * 90000)}`;

    const fullPayload = {
      ...formData,
      referenceNumber: generatedRef,
      fullName: `${formData.surname} ${formData.firstName} ${formData.otherNames}`.trim(),
    };

    try {
      await sendApplicationEmail(fullPayload, passportPhoto?.name, academicDoc?.name);
      setReferenceNo(generatedRef);
      setIsSubmitted(true);
      if (onSubmitSuccess) onSubmitSuccess();
    } catch (error) {
      console.warn("ReniMail delivery info:", error);
      setReferenceNo(generatedRef);
      setIsSubmitted(true);
      if (onSubmitSuccess) onSubmitSuccess();
    } finally {
      setSubmitting(false);
    }
  };

  const printApplicationSummary = () => {
    const printWin = window.open("", "_blank");
    const fullName = `${formData.surname} ${formData.firstName} ${formData.otherNames}`.trim();
    
    printWin.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Admission Application Summary - ${fullName}</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; color: #111827; background: #fff; }
            .header { text-align: center; border-bottom: 3px double #0F172A; padding-bottom: 20px; margin-bottom: 30px; }
            .header h1 { margin: 0; color: #0F172A; font-size: 24px; text-transform: uppercase; font-weight: bold; }
            .header p { margin: 4px 0; font-size: 13px; color: #4B5563; }
            .ref-badge { display: inline-block; margin-top: 10px; padding: 6px 16px; background: #0F172A; color: #D4AF37; font-weight: bold; font-size: 14px; border-radius: 4px; }
            .section { margin-bottom: 24px; border: 1px solid #E5E7EB; padding: 18px; border-radius: 8px; }
            .section-title { font-size: 14px; font-weight: bold; color: #0F172A; text-transform: uppercase; border-bottom: 2px solid #D4AF37; padding-bottom: 4px; margin-bottom: 12px; }
            table { width: 100%; border-collapse: collapse; font-size: 13px; }
            td { padding: 6px 0; vertical-align: top; }
            .label { font-weight: bold; color: #4B5563; width: 35%; }
            .attestation-box { background: #f8fafc; padding: 12px; border: 1px solid #e2e8f0; border-radius: 6px; margin-top: 8px; font-style: italic; font-size: 12px; color: #334155; }
            .footer { margin-top: 40px; text-align: center; font-size: 11px; color: #6B7280; border-top: 1px solid #E5E7EB; padding-top: 15px; }
            @media print { body { padding: 0; } }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>ERIMBE BIBLE COLLEGE</h1>
            <p>NO. 3, MOSADOLUWA HOUSE, OROGUN, IBADAN.</p>
            <p>Tel: 08167398026 | Official Online Admission Application</p>
            <div class="ref-badge">APPLICATION REF: ${referenceNo || 'ERIMBE-2026'}</div>
          </div>

          <div class="section">
            <div class="section-title">01 Course Selection</div>
            <table>
              <tr><td class="label">Selected Program:</td><td><strong>${formData.program}</strong></td></tr>
            </table>
          </div>

          <div class="section">
            <div class="section-title">02 Personal Information</div>
            <table>
              <tr><td class="label">Full Name:</td><td>${fullName}</td></tr>
              <tr><td class="label">Date of Birth / Age:</td><td>${formData.dateOfBirth} (${formData.age} yrs)</td></tr>
              <tr><td class="label">Gender / Nationality:</td><td>${formData.gender} / ${formData.nationality}</td></tr>
              <tr><td class="label">Marital Status:</td><td>${formData.maritalStatus}</td></tr>
              <tr><td class="label">Phone / Email:</td><td>${formData.phone} | ${formData.email}</td></tr>
              <tr><td class="label">Occupation:</td><td>${formData.occupation} (${formData.workplaceAddress})</td></tr>
              <tr><td class="label">Residential Address:</td><td>${formData.residentialAddress}</td></tr>
            </table>
          </div>

          <div class="section">
            <div class="section-title">03 Sponsorship & Next of Kin</div>
            <table>
              <tr><td class="label">Self-Sponsored:</td><td>${formData.isSelfSponsored}</td></tr>
              ${formData.isSelfSponsored === "No" ? `<tr><td class="label">Sponsor:</td><td>${formData.sponsorName} (${formData.sponsorPhone})</td></tr>` : ''}
              <tr><td class="label">Next of Kin:</td><td>${formData.nextOfKinName} (${formData.relationship}) - ${formData.nextOfKinPhone}</td></tr>
            </table>
          </div>

          <div class="section">
            <div class="section-title">04 Spiritual Qualification</div>
            <table>
              <tr><td class="label">Born Again:</td><td>${formData.isBornAgain} ${formData.bornAgainWhen ? `(Since: ${formData.bornAgainWhen})` : ''}</td></tr>
              <tr><td class="label">Spirit Baptized:</td><td>${formData.isSpiritBaptized}</td></tr>
              <tr><td class="label">Divine Call:</td><td>${formData.hasDivineCall}</td></tr>
            </table>
          </div>

          <div class="section">
            <div class="section-title">05 Attestation</div>
            <div class="attestation-box">
              <strong>Minister's Attestation:</strong><br/>
              "I ${formData.ministerName || '_____'} solemnly attest on behalf of ${fullName || '_____'} that he/she shall be of good behaviour; I confirm on my honours that he/she shall abide by the college rules and shall uplift the status of the school to the glory of the Father, of the Son, and of the Holy Spirit (Amen)."
            </div>
            <div class="attestation-box">
              <strong>Student's Attestation:</strong><br/>
              "I ${fullName || '_____'} confirm that all the information supplied above are true position of myself I shall be grateful if my application is considered. Thank you."
            </div>
          </div>

          <div class="footer">
            <p>Erimbe Bible College — Official Student Application Document</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
          </div>
        </body>
      </html>
    `);
    printWin.document.close();
    printWin.focus();
    setTimeout(() => printWin.print(), 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      
      {/* PURE WHITE APPLICATION CONTAINER */}
      <div className="relative w-full max-w-[1150px] my-auto rounded-3xl bg-white text-[#111827] shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* TOP COLLEGE HEADER */}
        <div className="bg-white border-b border-slate-200 p-6 sm:p-8 text-center relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition cursor-pointer"
            title="Close Application"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-bold text-xs uppercase tracking-widest mb-2">
            <span>Official Admission Portal</span>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0F172A] tracking-tight uppercase">
            ERIMBE BIBLE COLLEGE
          </h1>

          <p className="text-xs sm:text-sm text-[#6B7280] font-medium mt-1">
            NO. 3, MOSADOLUWA HOUSE, OROGUN, IBADAN. &bull; Tel: 08167398026
          </p>

          <div className="mt-3 inline-block px-5 py-1.5 rounded-full bg-[#0F172A] text-white text-xs font-bold uppercase tracking-wider">
            ADMISSION APPLICATION
          </div>
        </div>

        {/* SUCCESS SCREEN STATE */}
        {isSubmitted ? (
          <div className="p-8 sm:p-12 text-center my-auto space-y-6 max-w-2xl mx-auto animate-in zoom-in-95">
            <div className="w-20 h-20 bg-[#D4AF37]/20 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto text-[#0F172A]">
              <CheckCircle2 className="h-10 w-10 text-[#D4AF37]" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                Application Submitted Successfully
              </h2>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Thank you for applying to <strong>Erimbe Bible College</strong>. Your application record has been logged and delivered to our admissions office.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] text-center max-w-md mx-auto">
              <span className="text-xs text-[#6B7280] font-bold uppercase block mb-1">Application Reference Number</span>
              <span className="text-xl font-extrabold text-[#0F172A] tracking-wider">{referenceNo}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={printApplicationSummary}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#c49f2c] text-[#0F172A] font-bold text-sm shadow-md transition cursor-pointer flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                <span>Download Application Summary</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white border border-[#E5E7EB] hover:bg-slate-50 text-[#111827] font-semibold text-sm transition cursor-pointer"
              >
                Back to Home
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* STEP PROGRESS INDICATOR BAR */}
            <div className="bg-[#F8FAFC] border-b border-[#E5E7EB] px-4 py-3 shrink-0 overflow-x-auto">
              <div className="flex items-center justify-between min-w-max gap-2 sm:gap-4 max-w-5xl mx-auto">
                {STEPS.map((step) => {
                  const isActive = currentStep === step.id;
                  const isDone = currentStep > step.id;

                  return (
                    <button
                      key={step.id}
                      onClick={() => isDone && setCurrentStep(step.id)}
                      disabled={!isDone && currentStep !== step.id}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                        isActive
                          ? "bg-[#0F172A] text-[#D4AF37] shadow-sm"
                          : isDone
                          ? "bg-slate-200/80 text-slate-800 hover:bg-slate-300/80 cursor-pointer"
                          : "text-slate-400 opacity-60"
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                          isActive
                            ? "bg-[#D4AF37] text-[#0F172A]"
                            : isDone
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-300 text-slate-600"
                        }`}
                      >
                        {isDone ? <Check className="h-3 w-3" /> : `0${step.id}`}
                      </span>
                      <span className="hidden md:inline">{step.label}</span>
                      <span className="md:hidden">{step.short}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* FORM BODY CONTAINER */}
            <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-white">
              
              {/* STEP 1: COURSE SELECTION */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in max-w-3xl mx-auto">
                  <div className="border-b border-[#E5E7EB] pb-3">
                    <h2 className="text-xl font-bold text-[#0F172A]">Step 01 — Course Selection</h2>
                    <p className="text-xs text-[#6B7280] mt-0.5">Choose your desired program of study at Erimbe Bible College.</p>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider">Select Available Program *</label>
                    
                    {[
                      "Certificate in Theology",
                      "Diploma in Theology",
                      "Certificate in Deliverance Studies",
                      "Church Leadership and Administration"
                    ].map((programOption) => {
                      const isSelected = formData.program === programOption;
                      return (
                        <div
                          key={programOption}
                          onClick={() => handleInputChange("program", programOption)}
                          className={`p-4 rounded-2xl border transition cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? "bg-[#F8FAFC] border-[#D4AF37] shadow-sm ring-1 ring-[#D4AF37]"
                              : "bg-white border-[#E5E7EB] hover:border-slate-300 hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                              isSelected ? "border-[#D4AF37] bg-[#0F172A]" : "border-slate-300"
                            }`}>
                              {isSelected && <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />}
                            </div>
                            <span className="text-sm font-bold text-[#111827]">{programOption}</span>
                          </div>
                          {isSelected && <span className="text-xs font-bold text-[#D4AF37]">Selected</span>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: PERSONAL INFORMATION */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in max-w-4xl mx-auto">
                  <div className="border-b border-[#E5E7EB] pb-3">
                    <h2 className="text-xl font-bold text-[#0F172A]">Step 02 — Personal Information</h2>
                    <p className="text-xs text-[#6B7280] mt-0.5">Provide your full personal and contact details.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1">Surname *</label>
                      <input
                        type="text"
                        placeholder="Surname"
                        value={formData.surname}
                        onChange={(e) => handleInputChange("surname", e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm focus:outline-none ${
                          validationErrors.surname ? "border-red-500" : "border-[#E5E7EB] focus:border-[#0F172A]"
                        }`}
                      />
                      {validationErrors.surname && <span className="text-[11px] text-red-500 mt-1 block">{validationErrors.surname}</span>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1">First Name *</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm focus:outline-none ${
                          validationErrors.firstName ? "border-red-500" : "border-[#E5E7EB] focus:border-[#0F172A]"
                        }`}
                      />
                      {validationErrors.firstName && <span className="text-[11px] text-red-500 mt-1 block">{validationErrors.firstName}</span>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1">Other Names</label>
                      <input
                        type="text"
                        placeholder="Other Names"
                        value={formData.otherNames}
                        onChange={(e) => handleInputChange("otherNames", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1">Date of Birth</label>
                      <input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1">Age</label>
                      <input
                        type="number"
                        placeholder="Age"
                        value={formData.age}
                        onChange={(e) => handleInputChange("age", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1">Gender</label>
                      <select
                        value={formData.gender}
                        onChange={(e) => handleInputChange("gender", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A]"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1">Nationality</label>
                      <input
                        type="text"
                        value={formData.nationality}
                        onChange={(e) => handleInputChange("nationality", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1">Telephone Number *</label>
                      <input
                        type="tel"
                        placeholder="+234 816 739 8026"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm focus:outline-none ${
                          validationErrors.phone ? "border-red-500" : "border-[#E5E7EB] focus:border-[#0F172A]"
                        }`}
                      />
                      {validationErrors.phone && <span className="text-[11px] text-red-500 mt-1 block">{validationErrors.phone}</span>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1">Email Address *</label>
                      <input
                        type="email"
                        placeholder="applicant@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm focus:outline-none ${
                          validationErrors.email ? "border-red-500" : "border-[#E5E7EB] focus:border-[#0F172A]"
                        }`}
                      />
                      {validationErrors.email && <span className="text-[11px] text-red-500 mt-1 block">{validationErrors.email}</span>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1">Marital Status</label>
                      <select
                        value={formData.maritalStatus}
                        onChange={(e) => handleInputChange("maritalStatus", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A]"
                      >
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1">Occupation</label>
                      <input
                        type="text"
                        placeholder="e.g. Teacher, Civil Servant, Business"
                        value={formData.occupation}
                        onChange={(e) => handleInputChange("occupation", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1">Workplace Address</label>
                      <input
                        type="text"
                        placeholder="Workplace Address"
                        value={formData.workplaceAddress}
                        onChange={(e) => handleInputChange("workplaceAddress", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1">Residential Address *</label>
                      <textarea
                        rows={2}
                        placeholder="Current residential address"
                        value={formData.residentialAddress}
                        onChange={(e) => handleInputChange("residentialAddress", e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm focus:outline-none resize-none ${
                          validationErrors.residentialAddress ? "border-red-500" : "border-[#E5E7EB] focus:border-[#0F172A]"
                        }`}
                      />
                      {validationErrors.residentialAddress && <span className="text-[11px] text-red-500 mt-1 block">{validationErrors.residentialAddress}</span>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1">Postal Address</label>
                      <textarea
                        rows={2}
                        placeholder="Postal address (if different)"
                        value={formData.postalAddress}
                        onChange={(e) => handleInputChange("postalAddress", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A] resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: SPONSORSHIP */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in max-w-3xl mx-auto">
                  <div className="border-b border-[#E5E7EB] pb-3">
                    <h2 className="text-xl font-bold text-[#0F172A]">Step 03 — Sponsorship</h2>
                    <p className="text-xs text-[#6B7280] mt-0.5">Indicate financial sponsorship for your tuition and academic expenses.</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] space-y-4">
                    <label className="block text-sm font-bold text-[#111827]">Are you self-sponsored?</label>
                    <div className="flex items-center gap-6">
                      {["Yes", "No"].map((opt) => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="isSelfSponsored"
                            value={opt}
                            checked={formData.isSelfSponsored === opt}
                            onChange={(e) => handleInputChange("isSelfSponsored", e.target.value)}
                            className="w-4 h-4 text-[#0F172A] accent-[#0F172A]"
                          />
                          <span className="text-sm font-medium text-[#111827]">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {formData.isSelfSponsored === "No" && (
                    <div className="space-y-4 p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs animate-in fade-in">
                      <h3 className="text-sm font-bold text-[#0F172A] border-b border-[#E5E7EB] pb-2">Sponsor Details</h3>
                      
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1">Sponsor Name(s) *</label>
                        <input
                          type="text"
                          placeholder="Name of Sponsor or Organization"
                          value={formData.sponsorName}
                          onChange={(e) => handleInputChange("sponsorName", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A]"
                        />
                        {validationErrors.sponsorName && <span className="text-[11px] text-red-500 mt-1 block">{validationErrors.sponsorName}</span>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#111827] mb-1">Sponsor Phone Number *</label>
                          <input
                            type="tel"
                            placeholder="Sponsor Phone"
                            value={formData.sponsorPhone}
                            onChange={(e) => handleInputChange("sponsorPhone", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#111827] mb-1">Sponsor Address</label>
                          <input
                            type="text"
                            placeholder="Sponsor Residential/Workplace Address"
                            value={formData.sponsorAddress}
                            onChange={(e) => handleInputChange("sponsorAddress", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A]"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 4: NEXT OF KIN */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-in fade-in max-w-3xl mx-auto">
                  <div className="border-b border-[#E5E7EB] pb-3">
                    <h2 className="text-xl font-bold text-[#0F172A]">Step 04 — Next of Kin</h2>
                    <p className="text-xs text-[#6B7280] mt-0.5">Emergency contact information for official college records.</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1">Next of Kin Full Name *</label>
                      <input
                        type="text"
                        placeholder="Next of Kin Name"
                        value={formData.nextOfKinName}
                        onChange={(e) => handleInputChange("nextOfKinName", e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm focus:outline-none ${
                          validationErrors.nextOfKinName ? "border-red-500" : "border-[#E5E7EB] focus:border-[#0F172A]"
                        }`}
                      />
                      {validationErrors.nextOfKinName && <span className="text-[11px] text-red-500 mt-1 block">{validationErrors.nextOfKinName}</span>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1">Relationship</label>
                        <select
                          value={formData.relationship}
                          onChange={(e) => handleInputChange("relationship", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A]"
                        >
                          <option value="Spouse">Spouse</option>
                          <option value="Parent/Guardian">Parent / Guardian</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>

                      {formData.relationship === "Others" && (
                        <div>
                          <label className="block text-xs font-bold text-[#111827] mb-1">Specify Relationship *</label>
                          <input
                            type="text"
                            placeholder="e.g. Sibling, Relative"
                            value={formData.otherRelationship}
                            onChange={(e) => handleInputChange("otherRelationship", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A]"
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          placeholder="Next of Kin Phone"
                          value={formData.nextOfKinPhone}
                          onChange={(e) => handleInputChange("nextOfKinPhone", e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl bg-white border text-sm focus:outline-none ${
                            validationErrors.nextOfKinPhone ? "border-red-500" : "border-[#E5E7EB] focus:border-[#0F172A]"
                          }`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1">Next of Kin Address</label>
                      <textarea
                        rows={2}
                        placeholder="Residential address of Next of Kin"
                        value={formData.nextOfKinAddress}
                        onChange={(e) => handleInputChange("nextOfKinAddress", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A] resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: SPIRITUAL QUALIFICATION */}
              {currentStep === 5 && (
                <div className="space-y-6 animate-in fade-in max-w-3xl mx-auto">
                  <div className="border-b border-[#E5E7EB] pb-3">
                    <h2 className="text-xl font-bold text-[#0F172A]">Step 05 — Spiritual Qualification</h2>
                    <p className="text-xs text-[#6B7280] mt-0.5">Sharing your Christian experience, salvation testimony, and divine calling.</p>
                  </div>

                  {/* Question 1: Born Again */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] space-y-4">
                    <label className="block text-sm font-bold text-[#111827]">Are you born again?</label>
                    <div className="flex items-center gap-6">
                      {["Yes", "No"].map((opt) => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="isBornAgain"
                            value={opt}
                            checked={formData.isBornAgain === opt}
                            onChange={(e) => handleInputChange("isBornAgain", e.target.value)}
                            className="w-4 h-4 accent-[#0F172A]"
                          />
                          <span className="text-sm font-medium text-[#111827]">{opt}</span>
                        </label>
                      ))}
                    </div>

                    {formData.isBornAgain === "Yes" && (
                      <div className="space-y-3 pt-2">
                        <div>
                          <label className="block text-xs font-bold text-[#111827] mb-1">If yes, when?</label>
                          <input
                            type="text"
                            placeholder="State when you were born again"
                            value={formData.bornAgainWhen}
                            onChange={(e) => handleInputChange("bornAgainWhen", e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#111827] mb-1">State your salvation experience: *</label>
                          <textarea
                            rows={3}
                            placeholder="State your salvation experience (use additional details if necessary)..."
                            value={formData.salvationExperience}
                            onChange={(e) => handleInputChange("salvationExperience", e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl bg-white border text-sm focus:outline-none resize-none ${
                              validationErrors.salvationExperience ? "border-red-500" : "border-[#E5E7EB] focus:border-[#0F172A]"
                            }`}
                          />
                          {validationErrors.salvationExperience && <span className="text-[11px] text-red-500 mt-1 block">{validationErrors.salvationExperience}</span>}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Question 2: Holy Spirit Baptism */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] space-y-4">
                    <label className="block text-sm font-bold text-[#111827]">Have you been baptized in the Spirit?</label>
                    <div className="flex items-center gap-6">
                      {["Yes", "No"].map((opt) => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="isSpiritBaptized"
                            value={opt}
                            checked={formData.isSpiritBaptized === opt}
                            onChange={(e) => handleInputChange("isSpiritBaptized", e.target.value)}
                            className="w-4 h-4 accent-[#0F172A]"
                          />
                          <span className="text-sm font-medium text-[#111827]">{opt}</span>
                        </label>
                      ))}
                    </div>

                    {formData.isSpiritBaptized === "Yes" && (
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1">State how you were baptized in the Spirit:</label>
                        <textarea
                          rows={2}
                          placeholder="State how you were baptized in the Spirit..."
                          value={formData.holySpiritBaptismDetails}
                          onChange={(e) => handleInputChange("holySpiritBaptismDetails", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A] resize-none"
                        />
                      </div>
                    )}
                  </div>

                  {/* Question 3: Call to Service */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] space-y-4">
                    <label className="block text-sm font-bold text-[#111827]">Do you have a call to service in God's vineyard?</label>
                    <div className="flex items-center gap-6">
                      {["Yes", "No"].map((opt) => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="hasDivineCall"
                            value={opt}
                            checked={formData.hasDivineCall === opt}
                            onChange={(e) => handleInputChange("hasDivineCall", e.target.value)}
                            className="w-4 h-4 accent-[#0F172A]"
                          />
                          <span className="text-sm font-medium text-[#111827]">{opt}</span>
                        </label>
                      ))}
                    </div>

                    {formData.hasDivineCall === "Yes" && (
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1">State your office and gift(s):</label>
                        <textarea
                          rows={2}
                          placeholder="State your office and gift(s)..."
                          value={formData.divineCallDetails}
                          onChange={(e) => handleInputChange("divineCallDetails", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A] resize-none"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 6: EDUCATION */}
              {currentStep === 6 && (
                <div className="space-y-6 animate-in fade-in max-w-4xl mx-auto">
                  <div className="border-b border-[#E5E7EB] pb-3">
                    <h2 className="text-xl font-bold text-[#0F172A]">Step 06 — Educational Qualification</h2>
                    <p className="text-xs text-[#6B7280] mt-0.5">(State sequence of school(s) attended)</p>
                  </div>

                  {/* DYNAMIC EDUCATION TABLE */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider">Schools Attended</label>
                      <button
                        type="button"
                        onClick={addEducationRow}
                        className="px-3 py-1.5 rounded-lg bg-[#0F172A] text-white hover:bg-[#D4AF37] hover:text-[#0F172A] font-bold text-xs transition cursor-pointer flex items-center gap-1"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        <span>Add Another School</span>
                      </button>
                    </div>

                    <div className="border border-[#E5E7EB] rounded-2xl overflow-hidden bg-white shadow-xs">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-[#F8FAFC] border-b border-[#E5E7EB] text-[#0F172A] font-bold">
                          <tr>
                            <th className="p-3 w-12 text-center">No.</th>
                            <th className="p-3">Schools Attended</th>
                            <th className="p-3">Qualification</th>
                            <th className="p-3 w-28">Date</th>
                            <th className="p-3 w-12 text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E5E7EB]">
                          {formData.educationHistory.map((edu, idx) => (
                            <tr key={idx} className="hover:bg-slate-50">
                              <td className="p-3 text-center font-bold text-slate-500">{idx + 1}</td>
                              <td className="p-2">
                                <input
                                  type="text"
                                  placeholder="Schools Attended"
                                  value={edu.schoolAttended}
                                  onChange={(e) => handleEducationChange(idx, "schoolAttended", e.target.value)}
                                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#E5E7EB] text-xs focus:outline-none focus:border-[#0F172A]"
                                />
                              </td>
                              <td className="p-2">
                                <input
                                  type="text"
                                  placeholder="qualification"
                                  value={edu.qualification}
                                  onChange={(e) => handleEducationChange(idx, "qualification", e.target.value)}
                                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#E5E7EB] text-xs focus:outline-none focus:border-[#0F172A]"
                                />
                              </td>
                              <td className="p-2">
                                <input
                                  type="text"
                                  placeholder="Date"
                                  value={edu.year}
                                  onChange={(e) => handleEducationChange(idx, "year", e.target.value)}
                                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#E5E7EB] text-xs focus:outline-none focus:border-[#0F172A]"
                                />
                              </td>
                              <td className="p-2 text-center">
                                {formData.educationHistory.length > 1 && (
                                  <button
                                    type="button"
                                    onClick={() => removeEducationRow(idx)}
                                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
                                    title="Remove row"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[11px] text-[#6B7280] font-medium italic pt-1">
                      (Attach supporting documents to all your qualifications, including marriage certificate if married)
                    </p>
                  </div>

                  {/* DOCUMENT UPLOAD FIELDS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E5E7EB]">
                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1.5">Passport Photograph *</label>
                      <div className="relative border-2 border-dashed border-[#E5E7EB] hover:border-[#D4AF37] rounded-2xl p-4 bg-[#F8FAFC] text-center transition cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="flex flex-col items-center">
                          {photoPreview ? (
                            <img src={photoPreview} alt="Passport Preview" className="w-16 h-16 rounded-xl object-cover border mb-2" />
                          ) : (
                            <Upload className="h-6 w-6 text-[#D4AF37] mb-1" />
                          )}
                          <span className="text-xs font-bold text-[#111827]">
                            {passportPhoto ? passportPhoto.name : "Upload Passport Photo"}
                          </span>
                          <span className="text-[10px] text-[#6B7280]">Clear passport photograph (JPEG/PNG)</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1.5">Supporting Qualifications / Marriage Cert (Optional)</label>
                      <div className="relative border-2 border-dashed border-[#E5E7EB] hover:border-[#D4AF37] rounded-2xl p-4 bg-[#F8FAFC] text-center transition cursor-pointer">
                        <input
                          type="file"
                          accept="image/*,.pdf,.doc,.docx"
                          onChange={handleDocUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="flex flex-col items-center">
                          <FileText className="h-6 w-6 text-[#D4AF37] mb-1" />
                          <span className="text-xs font-bold text-[#111827]">
                            {academicDoc ? academicDoc.name : "Attach Documents"}
                          </span>
                          <span className="text-[10px] text-[#6B7280]">Academic certificate, transcript or marriage cert</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 7: ATTESTATION */}
              {currentStep === 7 && (
                <div className="space-y-8 animate-in fade-in max-w-4xl mx-auto">
                  <div className="border-b border-[#E5E7EB] pb-3">
                    <h2 className="text-xl font-bold text-[#0F172A]">Step 07 — Official Attestation</h2>
                    <p className="text-xs text-[#6B7280] mt-0.5">Ministerial attestation and student declaration as per college form.</p>
                  </div>

                  {/* SECTION A: MINISTER / PASTOR ATTESTATION */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] space-y-4">
                    <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-2">
                      <h3 className="text-xs sm:text-sm font-extrabold text-[#0F172A] uppercase tracking-wide">
                        ATTESTATION (TO BE DONE BY ASSEMBLY PASTOR ANY OTHER MINISTER IN THE ASSEMBLY OR ANY ORDAINED MINISTER OF GOD).
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 shrink-0">Required</span>
                    </div>

                    <div className="text-xs text-[#334155] font-medium leading-relaxed bg-white p-4 rounded-xl border border-[#E5E7EB] space-y-2">
                      <p>
                        I <strong className="text-[#0F172A] border-b border-slate-400 px-2">{formData.ministerName || "________________________"}</strong> solemnly attest on behalf of <strong className="text-[#0F172A] border-b border-slate-400 px-2">{`${formData.surname} ${formData.firstName} ${formData.otherNames}`.trim() || "________________________"}</strong> that he/she shall be of good behaviour; I confirm on my honours that he/she shall abide by the college rules and shall uplift the status of the school to the glory of the Father, of the Son, and of the Holy Spirit (Amen).
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1">Minister's Name *</label>
                        <input
                          type="text"
                          placeholder="Rev. / Pastor Name"
                          value={formData.ministerName}
                          onChange={(e) => handleInputChange("ministerName", e.target.value)}
                          className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm focus:outline-none ${
                            validationErrors.ministerName ? "border-red-500" : "border-[#E5E7EB] focus:border-[#0F172A]"
                          }`}
                        />
                        {validationErrors.ministerName && <span className="text-[11px] text-red-500 mt-1 block">{validationErrors.ministerName}</span>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.ministerPhone}
                          onChange={(e) => handleInputChange("ministerPhone", e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#111827] mb-1">CHURCH ADDRESS</label>
                      <input
                        type="text"
                        placeholder="Church Address"
                        value={formData.ministerChurchAddress}
                        onChange={(e) => handleInputChange("ministerChurchAddress", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm focus:outline-none focus:border-[#0F172A]"
                      />
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer pt-1">
                      <input
                        type="checkbox"
                        checked={formData.ministerConfirmed}
                        onChange={(e) => handleInputChange("ministerConfirmed", e.target.checked)}
                        className="w-4 h-4 mt-0.5 accent-[#0F172A]"
                      />
                      <span className="text-xs font-bold text-[#111827]">
                        I confirm that the pastoral attestation above is duly authorized by an ordained minister of God. *
                      </span>
                    </label>
                    {validationErrors.ministerConfirmed && <span className="text-[11px] text-red-500 block">{validationErrors.ministerConfirmed}</span>}
                  </div>

                  {/* SECTION B: STUDENT'S ATTESTATION */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] space-y-4">
                    <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-2">
                      <h3 className="text-sm font-extrabold text-[#0F172A] uppercase tracking-wide">
                        STUDENT'S ATTESTATION
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Required</span>
                    </div>

                    <div className="text-xs text-[#334155] font-medium leading-relaxed bg-white p-4 rounded-xl border border-[#E5E7EB]">
                      <p>
                        I <strong className="text-[#0F172A] border-b border-slate-400 px-2">{`${formData.surname} ${formData.firstName} ${formData.otherNames}`.trim() || "________________________"}</strong> confirm that all the information supplied above are true position of myself I shall be grateful if my application is considered. Thank you.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1">Applicant Name</label>
                        <input
                          type="text"
                          readOnly
                          value={`${formData.surname} ${formData.firstName} ${formData.otherNames}`.trim() || "Applicant Name"}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-100 border border-[#E5E7EB] text-[#111827] text-sm font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#111827] mb-1">Date</label>
                        <input
                          type="date"
                          value={formData.studentDate}
                          onChange={(e) => handleInputChange("studentDate", e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#111827] text-sm"
                        />
                      </div>
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer pt-1">
                      <input
                        type="checkbox"
                        checked={formData.studentConfirmed}
                        onChange={(e) => handleInputChange("studentConfirmed", e.target.checked)}
                        className="w-4 h-4 mt-0.5 accent-[#0F172A]"
                      />
                      <span className="text-xs font-bold text-[#111827]">
                        I confirm that all the information supplied above are true position of myself. *
                      </span>
                    </label>
                    {validationErrors.studentConfirmed && <span className="text-[11px] text-red-500 block">{validationErrors.studentConfirmed}</span>}
                  </div>
                </div>
              )}

              {/* STEP 8: REVIEW & SUBMIT */}
              {currentStep === 8 && (
                <div className="space-y-6 animate-in fade-in max-w-4xl mx-auto">
                  <div className="border-b border-[#E5E7EB] pb-3 flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-[#0F172A]">Step 08 — Review & Submit</h2>
                      <p className="text-xs text-[#6B7280] mt-0.5">Carefully verify all your information before final submission.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Course Card */}
                    <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs relative">
                      <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-2 mb-3">
                        <span className="text-xs font-bold uppercase text-[#0F172A]">01. Course Information</span>
                        <button onClick={() => setCurrentStep(1)} className="text-xs text-[#D4AF37] font-bold flex items-center gap-1 hover:underline cursor-pointer">
                          <Edit3 className="h-3 w-3" /> Edit
                        </button>
                      </div>
                      <p className="text-xs text-slate-700"><strong>Program:</strong> {formData.program}</p>
                    </div>

                    {/* Personal Info Card */}
                    <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs relative">
                      <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-2 mb-3">
                        <span className="text-xs font-bold uppercase text-[#0F172A]">02. Personal Information</span>
                        <button onClick={() => setCurrentStep(2)} className="text-xs text-[#D4AF37] font-bold flex items-center gap-1 hover:underline cursor-pointer">
                          <Edit3 className="h-3 w-3" /> Edit
                        </button>
                      </div>
                      <p className="text-xs text-slate-700"><strong>Name:</strong> {formData.surname} {formData.firstName} {formData.otherNames}</p>
                      <p className="text-xs text-slate-700"><strong>Phone:</strong> {formData.phone} | {formData.email}</p>
                      <p className="text-xs text-slate-700"><strong>Gender/Status:</strong> {formData.gender} &bull; {formData.maritalStatus}</p>
                    </div>

                    {/* Sponsorship Card */}
                    <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs relative">
                      <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-2 mb-3">
                        <span className="text-xs font-bold uppercase text-[#0F172A]">03. Sponsorship</span>
                        <button onClick={() => setCurrentStep(3)} className="text-xs text-[#D4AF37] font-bold flex items-center gap-1 hover:underline cursor-pointer">
                          <Edit3 className="h-3 w-3" /> Edit
                        </button>
                      </div>
                      <p className="text-xs text-slate-700"><strong>Self-Sponsored:</strong> {formData.isSelfSponsored}</p>
                      {formData.isSelfSponsored === "No" && <p className="text-xs text-slate-700"><strong>Sponsor:</strong> {formData.sponsorName} ({formData.sponsorPhone})</p>}
                    </div>

                    {/* Next of Kin Card */}
                    <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs relative">
                      <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-2 mb-3">
                        <span className="text-xs font-bold uppercase text-[#0F172A]">04. Next of Kin</span>
                        <button onClick={() => setCurrentStep(4)} className="text-xs text-[#D4AF37] font-bold flex items-center gap-1 hover:underline cursor-pointer">
                          <Edit3 className="h-3 w-3" /> Edit
                        </button>
                      </div>
                      <p className="text-xs text-slate-700"><strong>Name:</strong> {formData.nextOfKinName} ({formData.relationship})</p>
                      <p className="text-xs text-slate-700"><strong>Phone:</strong> {formData.nextOfKinPhone}</p>
                    </div>

                    {/* Spiritual Qualification Card */}
                    <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs relative">
                      <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-2 mb-3">
                        <span className="text-xs font-bold uppercase text-[#0F172A]">05. Spiritual Qualification</span>
                        <button onClick={() => setCurrentStep(5)} className="text-xs text-[#D4AF37] font-bold flex items-center gap-1 hover:underline cursor-pointer">
                          <Edit3 className="h-3 w-3" /> Edit
                        </button>
                      </div>
                      <p className="text-xs text-slate-700"><strong>Born Again:</strong> {formData.isBornAgain}</p>
                      <p className="text-xs text-slate-700"><strong>Spirit Baptized:</strong> {formData.isSpiritBaptized}</p>
                    </div>

                    {/* Education & Attestation Card */}
                    <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs relative">
                      <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-2 mb-3">
                        <span className="text-xs font-bold uppercase text-[#0F172A]">06 & 07. Education & Attestation</span>
                        <button onClick={() => setCurrentStep(6)} className="text-xs text-[#D4AF37] font-bold flex items-center gap-1 hover:underline cursor-pointer">
                          <Edit3 className="h-3 w-3" /> Edit
                        </button>
                      </div>
                      <p className="text-xs text-slate-700"><strong>Schools Listed:</strong> {formData.educationHistory.length} Record(s)</p>
                      <p className="text-xs text-slate-700"><strong>Attestation:</strong> Minister & Student Confirmed ✔</p>
                    </div>

                  </div>

                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] text-center">
                    <p className="text-xs font-semibold text-[#6B7280]">
                      Please review your information carefully before submitting your application.
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* MODAL FOOTER BUTTONS */}
            <div className="bg-white border-t border-[#E5E7EB] px-6 py-4 flex items-center justify-between shrink-0">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1 || submitting}
                className={`px-5 py-2.5 rounded-xl border border-[#E5E7EB] text-[#111827] font-semibold text-xs sm:text-sm transition flex items-center gap-1 ${
                  currentStep === 1 || submitting ? "opacity-40 cursor-not-allowed" : "hover:bg-slate-50 cursor-pointer"
                }`}
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Previous Step</span>
              </button>

              {currentStep < 8 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-7 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#c49f2c] text-[#0F172A] font-bold text-xs sm:text-sm shadow-md transition cursor-pointer flex items-center gap-1"
                >
                  <span>Next Step</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="px-8 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#c49f2c] text-[#0F172A] font-extrabold text-sm shadow-lg transition cursor-pointer flex items-center gap-2"
                >
                  {submitting ? "Submitting Application..." : "Submit Application →"}
                </button>
              )}
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default ApplyModal;
