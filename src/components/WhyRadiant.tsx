import React, { useState } from 'react';
import {
  GraduationCap,
  ShieldCheck,
  HeartHandshake,
  Lightbulb,
  Globe2,
  Compass,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { valueProps } from '../data/schoolData';
import { ValueProp } from '../types';

interface WhyRadiantProps {
  onOpenApply: () => void;
}

export const WhyRadiant: React.FC<WhyRadiantProps> = ({ onOpenApply }) => {
  const [selectedProp, setSelectedProp] = useState<ValueProp | null>(null);

  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#C59B27]' };
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      case 'Lightbulb':
        return <Lightbulb {...props} />;
      case 'Globe2':
        return <Globe2 {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      default:
        return <GraduationCap {...props} />;
    }
  };

  return (
    <section id="why-radiant" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27] mb-2">
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
            <span>The Radiant Advantage</span>
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1E3D] tracking-tight">
            Why Discerning Families Choose Radiant
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Every aspect of our learning experience is designed to nurture academic brilliance, personal resilience, and genuine global perspective.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {valueProps.map((item) => (
            <div
              key={item.id}
              id={`why-card-${item.id}`}
              className="group bg-[#FCFAF7] hover:bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 hover:border-[#C59B27]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Row: Icon and Title */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B1E3D]/50 bg-stone-100 px-2.5 py-1 rounded-full">
                    Pillar
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0B1E3D] group-hover:text-[#132D58] transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-[#C59B27] mt-0.5 mb-3">
                  {item.tagline}
                </div>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-4 border-t border-stone-200 space-y-2 mt-auto">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-stone-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Strip */}
        <div className="mt-12 bg-[#0B1E3D] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#C59B27]/30">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-serif font-bold text-[#DFB743]">
              Experience the Radiant difference in person
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Private campus walkthroughs are available Monday through Saturday. Join our admissions team for a tailored consultation.
            </p>
          </div>
          <button
            onClick={onOpenApply}
            className="px-6 py-3 bg-[#C59B27] hover:bg-[#DFB743] text-[#0B1E3D] font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex-shrink-0"
          >
            Start an Application
          </button>
        </div>

      </div>
    </section>
  );
};
