import React from 'react';
import {
  Quote,
  CheckCircle2,
  FileText,
  ArrowRight,
  ShieldAlert,
  Heart,
  BookOpen,
} from 'lucide-react';
import { schoolConfig, schoolImages } from '../data/schoolData';

interface IntroductionProps {
  onOpenProspectus: () => void;
  onOpenTour: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({
  onOpenProspectus,
  onOpenTour,
}) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FCFAF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27] mb-2">
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
            <span>Welcome to Radiant International School</span>
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1E3D] tracking-tight">
            Where Every Learner is Empowered to Flourish
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Located in Kololo, Juba, Radiant International School combines Cambridge International academic rigor with a warm ethos of character, innovation, and global responsibility.
          </p>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual & Head of School Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-white p-2">
              <div className="rounded-xl overflow-hidden aspect-[4/5] relative bg-stone-100">
                <img
                  src={schoolImages.classroom}
                  alt="Radiant International School students in classroom"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 inset-x-4 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#DFB743]">
                    Excellence in Action
                  </div>
                  <div className="text-base font-bold font-serif">Radiant International School</div>
                  <div className="text-xs text-slate-200">Kololo, off Airport Road, Juba</div>
                </div>
              </div>
            </div>

            {/* Floating Quote Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-[#C59B27]/30 max-w-xs items-start space-x-3">
              <Quote className="w-8 h-8 text-[#C59B27] flex-shrink-0 opacity-80" />
              <p className="text-xs text-stone-700 italic font-serif">
                "Our purpose is to inspire bright minds and shape thoughtful future leaders through high-standard Cambridge international education."
              </p>
            </div>
          </div>

          {/* Right Column: Educational Philosophy & Pillars */}
          <div className="lg:col-span-7 space-y-6 text-stone-700">
            
            <div className="space-y-4 text-sm sm:text-base leading-relaxed">
              <p className="text-stone-800 font-medium">
                At Radiant International School, we recognize that true education is a harmonious blend of intellect, empathy, discipline, and creativity. Our school community thrives in an environment where curiosity is celebrated and individuality is nurtured.
              </p>
              <p className="text-stone-600">
                Our curriculum follows the world-renowned Cambridge International framework from Early Years through Primary Years 1, 2, and 3, providing structured progression in English, Mathematics, Science, Dell ICT, and foundational skills. Our purpose-built computer laboratory, secure artificial turf play park, and dedicated teachers ensure every child reaches their highest potential.
              </p>
            </div>

            {/* Core Philosophy Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm space-y-2">
                <div className="flex items-center space-x-2 text-[#0B1E3D] font-bold text-sm">
                  <BookOpen className="w-4 h-4 text-[#C59B27]" />
                  <span>Cambridge Academic Rigor</span>
                </div>
                <p className="text-xs text-stone-600 leading-normal">
                  World-standard curriculum preparing learners with critical thinking, problem solving, and analytical mastery.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm space-y-2">
                <div className="flex items-center space-x-2 text-[#0B1E3D] font-bold text-sm">
                  <Heart className="w-4 h-4 text-[#C59B27]" />
                  <span>Pastoral Care & Safety</span>
                </div>
                <p className="text-xs text-stone-600 leading-normal">
                  A safe, gated campus environment where dedicated mentors ensure every child feels secure, respected, and encouraged.
                </p>
              </div>

            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenProspectus}
                id="intro-prospectus-btn"
                className="px-5 py-3 rounded-xl bg-[#0B1E3D] hover:bg-[#132D58] text-white text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 cursor-pointer shadow-md"
              >
                <FileText className="w-4 h-4 text-[#DFB743]" />
                <span>Download School Prospectus</span>
              </button>

              <button
                onClick={onOpenTour}
                id="intro-tour-btn"
                className="px-5 py-3 rounded-xl border border-[#0B1E3D]/30 hover:border-[#0B1E3D] text-[#0B1E3D] text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 cursor-pointer"
              >
                <span>Schedule a Campus Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
