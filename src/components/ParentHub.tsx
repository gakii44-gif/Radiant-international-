import React, { useState } from 'react';
import {
  Calendar,
  Shirt,
  Bus,
  Utensils,
  Lock,
  Shield,
  FileText,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Download,
  PhoneCall,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { parentResources, faqs, schoolConfig } from '../data/schoolData';
import { ParentResource } from '../types';

interface ParentHubProps {
  onOpenProspectus: () => void;
}

export const ParentHub: React.FC<ParentHubProps> = ({ onOpenProspectus }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedResourceModal, setSelectedResourceModal] = useState<ParentResource | null>(null);

  const getResourceIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-[#C59B27]' };
    switch (iconName) {
      case 'Calendar':
        return <Calendar {...props} />;
      case 'Shirt':
        return <Shirt {...props} />;
      case 'Bus':
        return <Bus {...props} />;
      case 'Utensils':
        return <Utensils {...props} />;
      case 'Lock':
        return <Lock {...props} />;
      case 'Shield':
        return <Shield {...props} />;
      default:
        return <FileText {...props} />;
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="parent-hub" className="py-16 md:py-24 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27] mb-2">
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
            <span>Family Partnership & Resources</span>
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1E3D] tracking-tight">
            Parent & Guardian Hub
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            We value active, transparent communication with our school families. Access all daily essentials, calendars, transportation updates, and student services in one central location.
          </p>
        </div>

        {/* 6 Parent Resource Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {parentResources.map((res, idx) => (
            <div
              key={idx}
              id={`parent-resource-card-${idx}`}
              className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-[#C59B27]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#FCFAF7] border border-stone-200 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
                    {getResourceIcon(res.icon)}
                  </div>
                  {res.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
                      {res.badge}
                    </span>
                  )}
                </div>

                <div className="text-[11px] font-semibold text-[#C59B27] uppercase tracking-wider">
                  {res.category}
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#0B1E3D] mt-0.5 mb-2 group-hover:text-[#132D58]">
                  {res.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {res.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 mt-5">
                <button
                  onClick={() => setSelectedResourceModal(res)}
                  id={`resource-btn-${idx}`}
                  className="w-full py-2.5 px-3 rounded-xl bg-stone-50 hover:bg-[#0B1E3D] hover:text-white text-[#0B1E3D] text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>{res.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Resource Details Modal (If clicked) */}
        {selectedResourceModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-stone-200 shadow-2xl relative animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                    {getResourceIcon(selectedResourceModal.icon)}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#0B1E3D]">
                      {selectedResourceModal.title}
                    </h4>
                    <span className="text-xs text-[#C59B27] font-semibold">
                      {selectedResourceModal.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedResourceModal(null)}
                  className="text-stone-400 hover:text-stone-700 p-1.5 rounded-lg text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
                <p>{selectedResourceModal.description}</p>
                <div className="p-4 rounded-xl bg-[#FAF9F6] border border-stone-200 space-y-2">
                  <div className="font-bold text-[#0B1E3D]">Verified Resource Access:</div>
                  <div className="text-xs text-stone-600">
                    Parent accounts can access live updates, real-time GPS tracking for bus routes, cafeteria allergy filters, and download printable PDF terms via the official school mobile app or desktop portal.
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedResourceModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedResourceModal(null);
                    onOpenProspectus();
                  }}
                  className="px-5 py-2 bg-[#0B1E3D] hover:bg-[#132D58] text-white text-xs font-bold rounded-xl shadow-sm"
                >
                  Download Info Sheet (PDF)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FAQs Accordion */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C59B27] mb-1">
              Common Questions
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1E3D]">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Answers to the key questions parents ask regarding our admissions, curriculum, and student support.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-stone-200">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => toggleFaq(idx)}
                    id={`faq-toggle-${idx}`}
                    className="w-full flex items-center justify-between text-left py-2 focus:outline-none group"
                  >
                    <span className="font-serif text-sm sm:text-base font-bold text-[#0B1E3D] group-hover:text-[#C59B27] transition-colors pr-4">
                      {faq.q}
                    </span>
                    <span className="p-1 rounded-full bg-stone-100 group-hover:bg-amber-50 text-[#0B1E3D] flex-shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-2 pb-3 text-xs sm:text-sm text-stone-600 leading-relaxed animate-in fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Help Strip */}
          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="text-xs text-stone-600">
              Have a specific question not covered here? Our admissions specialists are on hand to assist.
            </div>
            <a
              href={`mailto:${schoolConfig.admissionsEmail}`}
              className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-[#0B1E3D] hover:text-white text-[#0B1E3D] text-xs font-bold transition-all flex items-center space-x-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Email Admissions Team</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
