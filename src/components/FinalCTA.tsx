import React from 'react';
import {
  Sparkles,
  CalendarCheck,
  PhoneCall,
  Mail,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { schoolConfig } from '../data/schoolData';

interface FinalCTAProps {
  onOpenApply: () => void;
  onOpenTour: () => void;
  onScrollToContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenApply,
  onOpenTour,
  onScrollToContact,
}) => {
  return (
    <section id="final-cta" className="relative py-20 md:py-28 bg-[#0B1E3D] text-white overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C59B27]/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#1B3D74] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C59B27]/50 text-[#DFB743] text-xs font-semibold tracking-wide">
          <Sparkles className="w-4 h-4 text-[#DFB743]" />
          <span>Academic Year 2026–2027 Admissions Open</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Discover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB743] via-[#FDF9EC] to-[#C59B27]">Radiant Difference</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
          Provide your child with a world-class international education that nurtures intellectual independence, joyful curiosity, and lifelong character.
        </p>

        {/* 3 Prominent CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenApply}
            id="final-cta-apply"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#DFB743] to-[#C59B27] hover:from-[#F0CB5E] hover:to-[#D4A735] text-[#0B1E3D] font-bold text-sm sm:text-base rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>Apply Now</span>
            <Sparkles className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenTour}
            id="final-cta-tour"
            className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base rounded-xl border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 text-[#DFB743]" />
            <span>Book a School Tour</span>
          </button>

          <button
            onClick={onScrollToContact}
            id="final-cta-contact"
            className="w-full sm:w-auto px-7 py-4 bg-transparent hover:bg-white/5 text-slate-200 hover:text-white font-medium text-sm sm:text-base rounded-xl border border-transparent hover:border-white/10 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#DFB743]" />
            <span>Contact Admissions</span>
          </button>
        </div>

        {/* Confidence Indicators */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <span className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#DFB743]" />
            <span>Rolling Year-Round Admissions</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#DFB743]" />
            <span>Personalized 1-on-1 Consultations</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#DFB743]" />
            <span>Transparent Fee Schedule</span>
          </span>
        </div>

      </div>
    </section>
  );
};
