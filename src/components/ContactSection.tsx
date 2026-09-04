import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  Calendar,
  MessageSquare,
} from 'lucide-react';
import { schoolConfig } from '../data/schoolData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    entryGrade: 'Cambridge Primary (Year 1, 2, or 3)',
    department: 'Admissions Office',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FCFAF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27] mb-2">
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
            <span>Admissions & Inquiries</span>
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1E3D] tracking-tight">
            Connect with Radiant International School
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Whether you are exploring enrollment for the upcoming academic year or seeking specific program information, our admissions team is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Campus Information & Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#0B1E3D]">
                Campus Location & Contacts
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#C59B27] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B1E3D]">School Campus Address:</div>
                    <div className="text-stone-600 mt-0.5">
                      {schoolConfig.address.street}, {schoolConfig.address.district}
                    </div>
                    <div className="text-stone-500">
                      {schoolConfig.address.city}, {schoolConfig.address.country} ({schoolConfig.address.postalCode})
                    </div>
                    <a
                      href={schoolConfig.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-semibold text-[#C59B27] hover:text-[#0B1E3D] mt-2 underline"
                    >
                      <span>Open in Google Maps / Get Directions</span>
                      <MapPin className="w-3.5 h-3.5 ml-0.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#C59B27] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B1E3D]">Direct Lines:</div>
                    <div className="text-stone-600 mt-0.5">
                      Admissions: <a href={`tel:${schoolConfig.admissionsPhone}`} className="text-[#0B1E3D] font-semibold hover:underline">{schoolConfig.admissionsPhone}</a>
                    </div>
                    <div className="text-stone-500">
                      Reception: <a href={`tel:${schoolConfig.phone}`} className="hover:underline">{schoolConfig.phone}</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#C59B27] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B1E3D]">Electronic Mail:</div>
                    <div className="text-stone-600 mt-0.5">
                      Admissions: <a href={`mailto:${schoolConfig.admissionsEmail}`} className="text-[#0B1E3D] font-semibold hover:underline">{schoolConfig.admissionsEmail}</a>
                    </div>
                    <div className="text-stone-500">
                      General: <a href={`mailto:${schoolConfig.email}`} className="hover:underline">{schoolConfig.email}</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#C59B27] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B1E3D]">Office Hours:</div>
                    <div className="text-stone-600 mt-0.5 leading-relaxed">
                      {schoolConfig.officeHours}
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Media Link */}
              <div className="pt-2 border-t border-stone-100">
                <a
                  href={schoolConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-900 hover:bg-blue-100 transition-colors"
                >
                  <div className="flex items-center space-x-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#1877F2] text-white flex items-center justify-center font-bold text-xs">
                      f
                    </div>
                    <div>
                      <div className="text-xs font-bold">Follow us on Facebook</div>
                      <div className="text-[11px] text-blue-700">Official updates, campus events & galleries</div>
                    </div>
                  </div>
                  <MessageSquare className="w-4 h-4 text-[#1877F2]" />
                </a>
              </div>
            </div>

            {/* Campus Security & Visitor Notice */}
            <div className="p-5 rounded-2xl bg-[#0B1E3D] text-white border border-[#C59B27]/30 space-y-2">
              <div className="text-xs font-bold text-[#DFB743] uppercase tracking-wider flex items-center space-x-1.5">
                <Building className="w-3.5 h-3.5" />
                <span>Visitor Campus Protocol</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                For the safety of our students, all campus visitors must pre-register via Admissions and present government photo ID at Security Gate 1 upon arrival.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0B1E3D]">
                  Inquiry Received with Thanks
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Radiant International School. An admissions specialist from our team will review your inquiry and contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      parentName: '',
                      email: '',
                      phone: '',
                      childName: '',
                      childAge: '',
                      entryGrade: 'Primary School (Grades 1-5)',
                      department: 'Admissions Office',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 bg-[#0B1E3D] text-white text-xs font-bold rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#0B1E3D] mb-1">
                  Send an Inquiry to Admissions
                </h3>
                <p className="text-xs text-stone-600 mb-4">
                  Please complete the form below. All fields marked with * are required.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Parent / Guardian Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Eleanor Vance"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. eleanor.vance@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Target Entry Level
                    </label>
                    <select
                      value={formData.entryGrade}
                      onChange={(e) => setFormData({ ...formData, entryGrade: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                    >
                      <option value="Creche Class (18 Months – 2 Years)">Creche Class (18 Months – 2 Years)</option>
                      <option value="Baby Class (3 – 4 Years)">Baby Class (3 – 4 Years)</option>
                      <option value="Middle Class (4 – 5 Years)">Middle Class (4 – 5 Years)</option>
                      <option value="Top Class (5 – 6 Years)">Top Class (5 – 6 Years)</option>
                      <option value="Cambridge Primary (Year 1 - Ages 6+)">Cambridge Primary (Year 1 - Ages 6+)</option>
                      <option value="Cambridge Primary (Year 2 - Ages 7+)">Cambridge Primary (Year 2 - Ages 7+)</option>
                      <option value="Cambridge Primary (Year 3 - Ages 8+)">Cambridge Primary (Year 3 - Ages 8+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Your Questions or Specific Interests *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please let us know your child's age, educational background, any specific learning interests (e.g. STEM, music, sports), or planned relocation date..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gradient-to-r from-[#DFB743] to-[#C59B27] hover:from-[#F0CB5E] hover:to-[#D4A735] text-[#0B1E3D] font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Confidential Admissions Inquiry</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-stone-500 text-center mt-2">
                    Radiant International School respects your privacy. Your information is treated in strict confidence.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
