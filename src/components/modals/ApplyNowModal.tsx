import React, { useState } from 'react';
import {
  X,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Calendar,
  User,
  Mail,
  Phone,
  FileText,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
} from 'lucide-react';

interface ApplyNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyNowModal: React.FC<ApplyNowModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [appId, setAppId] = useState<string>('');

  const [formData, setFormData] = useState({
    // Step 1: Student info
    studentFirstName: '',
    studentLastName: '',
    dateOfBirth: '',
    gender: 'Prefer not to say',
    gradeApplyingFor: 'Year 1 (Cambridge Primary - Ages 6+)',
    intendedStartTerm: 'August 2026 (Term 1)',
    currentSchool: '',
    primaryLanguage: 'English',
    // Step 2: Parent/Guardian
    parentFirstName: '',
    parentLastName: '',
    relationship: 'Mother',
    email: '',
    phone: '',
    nationality: '',
    residentialAddress: '',
    // Step 3: Specific interests & notes
    specialInterests: [] as string[],
    additionalNotes: '',
    howDidYouHear: 'Word of Mouth / Parent Recommendation',
  });

  if (!isOpen) return null;

  const handleInterestToggle = (interest: string) => {
    if (formData.specialInterests.includes(interest)) {
      setFormData({
        ...formData,
        specialInterests: formData.specialInterests.filter((i) => i !== interest),
      });
    } else {
      setFormData({
        ...formData,
        specialInterests: [...formData.specialInterests, interest],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `RIS-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      setAppId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-stone-200 shadow-2xl overflow-hidden relative my-8">
        
        {/* Modal Header */}
        <div className="bg-[#0B1E3D] text-white p-6 relative">
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#DFB743] mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Admissions Application 2026–2027</span>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl font-bold">
            Radiant International School Online Application
          </h2>

          {/* Progress Indicators */}
          {!isSubmitted && (
            <div className="flex items-center space-x-2 mt-4 pt-3 border-t border-white/10 text-xs">
              <div
                className={`flex-1 py-1 rounded-full text-center font-semibold text-[11px] ${
                  step === 1 ? 'bg-[#DFB743] text-[#0B1E3D]' : 'bg-white/20 text-slate-300'
                }`}
              >
                1. Student Info
              </div>
              <div
                className={`flex-1 py-1 rounded-full text-center font-semibold text-[11px] ${
                  step === 2 ? 'bg-[#DFB743] text-[#0B1E3D]' : 'bg-white/20 text-slate-300'
                }`}
              >
                2. Guardian Info
              </div>
              <div
                className={`flex-1 py-1 rounded-full text-center font-semibold text-[11px] ${
                  step === 3 ? 'bg-[#DFB743] text-[#0B1E3D]' : 'bg-white/20 text-slate-300'
                }`}
              >
                3. Review & Submit
              </div>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-[#0B1E3D]">
                Application Successfully Submitted!
              </h3>

              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200 max-w-md mx-auto text-center space-y-1">
                <div className="text-xs uppercase tracking-wider text-stone-500 font-bold">
                  Application Reference Number
                </div>
                <div className="font-mono text-lg font-bold text-[#0B1E3D]">
                  {appId}
                </div>
                <div className="text-xs text-stone-600">
                  Applicant: {formData.studentFirstName} {formData.studentLastName} ({formData.gradeApplyingFor})
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto leading-relaxed">
                A confirmation email has been dispatched to <strong>{formData.email}</strong>. Our Admissions Registrar will review the application and contact you within 2 business days regarding assessment scheduling.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-[#0B1E3D] hover:bg-[#132D58] text-white text-xs font-bold rounded-xl shadow-md"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              
              {/* STEP 1: Student Details */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="font-serif text-base font-bold text-[#0B1E3D] border-b border-stone-200 pb-2">
                    Student Details
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Child's First Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Leo"
                        value={formData.studentFirstName}
                        onChange={(e) => setFormData({ ...formData, studentFirstName: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Child's Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sterling"
                        value={formData.studentLastName}
                        onChange={(e) => setFormData({ ...formData, studentLastName: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Grade Level Applying For *
                      </label>
                      <select
                        value={formData.gradeApplyingFor}
                        onChange={(e) => setFormData({ ...formData, gradeApplyingFor: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                      >
                        <option value="Creche Class (18 Months – 2 Years)">Creche Class (18 Months – 2 Years)</option>
                        <option value="Baby Class (3 – 4 Years)">Baby Class (3 – 4 Years)</option>
                        <option value="Middle Class (4 – 5 Years)">Middle Class (4 – 5 Years)</option>
                        <option value="Top Class (5 – 6 Years)">Top Class (5 – 6 Years)</option>
                        <option value="Year 1 (Cambridge Primary - Ages 6+)">Year 1 (Cambridge Primary - Ages 6+)</option>
                        <option value="Year 2 (Cambridge Primary - Ages 7+)">Year 2 (Cambridge Primary - Ages 7+)</option>
                        <option value="Year 3 (Cambridge Primary - Ages 8+)">Year 3 (Cambridge Primary - Ages 8+)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Intended Entry Term
                      </label>
                      <select
                        value={formData.intendedStartTerm}
                        onChange={(e) => setFormData({ ...formData, intendedStartTerm: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                      >
                        <option value="August 2026 (Term 1 - Academic Year 2026/27)">August 2026 (Term 1 - Academic Year 2026/27)</option>
                        <option value="January 2027 (Term 2)">January 2027 (Term 2)</option>
                        <option value="April 2027 (Term 3)">April 2027 (Term 3)</option>
                        <option value="Immediate Mid-Year Enrollment (Current Term)">Immediate Mid-Year Enrollment (Current Term)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Current School (if applicable)
                      </label>
                      <input
                        type="text"
                        placeholder="Current nursery or school name"
                        value={formData.currentSchool}
                        onChange={(e) => setFormData({ ...formData, currentSchool: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        if (!formData.studentFirstName || !formData.studentLastName) {
                          alert('Please enter your child’s first and last name.');
                          return;
                        }
                        setStep(2);
                      }}
                      className="px-6 py-2.5 bg-[#0B1E3D] hover:bg-[#132D58] text-white text-xs font-bold rounded-xl flex items-center space-x-2"
                    >
                      <span>Proceed to Guardian Info</span>
                      <ArrowRight className="w-4 h-4 text-[#DFB743]" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Guardian Details */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="font-serif text-base font-bold text-[#0B1E3D] border-b border-stone-200 pb-2">
                    Parent / Guardian Details
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Parent First Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Catherine"
                        value={formData.parentFirstName}
                        onChange={(e) => setFormData({ ...formData, parentFirstName: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Parent Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sterling"
                        value={formData.parentLastName}
                        onChange={(e) => setFormData({ ...formData, parentLastName: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Email Address * (For Admissions Updates)
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="catherine.sterling@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 019-2834"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Residential City / Country
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Metropolis, Oakridge District"
                      value={formData.residentialAddress}
                      onChange={(e) => setFormData({ ...formData, residentialAddress: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                    />
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 border border-stone-300 text-stone-700 text-xs font-bold rounded-xl flex items-center space-x-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (!formData.parentFirstName || !formData.email || !formData.phone) {
                          alert('Please enter your parent name, email and phone number.');
                          return;
                        }
                        setStep(3);
                      }}
                      className="px-6 py-2.5 bg-[#0B1E3D] hover:bg-[#132D58] text-white text-xs font-bold rounded-xl flex items-center space-x-2"
                    >
                      <span>Proceed to Final Step</span>
                      <ArrowRight className="w-4 h-4 text-[#DFB743]" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Learning Interests & Confirmation */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="font-serif text-base font-bold text-[#0B1E3D] border-b border-stone-200 pb-2">
                    Learning Interests & Submission
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-2">
                      Specific Areas of Interest for Your Child (Select all that apply):
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        'Dell ICT & Computer Skills',
                        'Turf Football & Athletics',
                        'Creative Arts & Drawing',
                        'Early Phonics & Storytelling',
                        'Music & Rhythm',
                        'Sensory Play & Building Blocks',
                      ].map((interest) => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => handleInterestToggle(interest)}
                          className={`p-2 rounded-xl text-xs font-medium border text-left flex items-center space-x-2 transition-all ${
                            formData.specialInterests.includes(interest)
                              ? 'bg-amber-50 border-[#C59B27] text-[#0B1E3D] font-bold'
                              : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-white'
                          }`}
                        >
                          <span
                            className={`w-3 h-3 rounded-full border flex items-center justify-center text-[8px] ${
                              formData.specialInterests.includes(interest)
                                ? 'bg-[#C59B27] border-[#C59B27] text-white'
                                : 'border-stone-400'
                            }`}
                          >
                            ✓
                          </span>
                          <span className="text-[11px]">{interest}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Additional Notes or Special Learning Considerations
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any medical notes, language background, or questions for our admissions panel..."
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                    />
                  </div>

                  {/* Summary Box */}
                  <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-stone-200 text-xs space-y-1">
                    <div className="font-bold text-[#0B1E3D]">Summary of Submission:</div>
                    <div className="text-stone-600">
                      Child: <strong>{formData.studentFirstName} {formData.studentLastName}</strong> ({formData.gradeApplyingFor})
                    </div>
                    <div className="text-stone-600">
                      Parent Contact: <strong>{formData.parentFirstName} {formData.parentLastName}</strong> ({formData.email})
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 border border-stone-300 text-stone-700 text-xs font-bold rounded-xl flex items-center space-x-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-7 py-3 bg-gradient-to-r from-[#DFB743] to-[#C59B27] hover:from-[#F0CB5E] hover:to-[#D4A735] text-[#0B1E3D] font-bold text-xs rounded-xl shadow-lg flex items-center space-x-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing Application...</span>
                      ) : (
                        <>
                          <span>Submit Official Application</span>
                          <Sparkles className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
