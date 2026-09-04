import React, { useState } from 'react';
import {
  GraduationCap,
  Clock,
  BookOpen,
  Award,
  CheckCircle2,
  ArrowRight,
  FileDown,
  Sparkles,
  Layers,
} from 'lucide-react';
import { academicStages } from '../data/schoolData';
import { AcademicStage } from '../types';

interface AcademicsSectionProps {
  onOpenApply: () => void;
  onOpenProspectus: () => void;
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({
  onOpenApply,
  onOpenProspectus,
}) => {
  const [activeStageId, setActiveStageId] = useState<string>(academicStages[0].id);

  const activeStage =
    academicStages.find((s) => s.id === activeStageId) || academicStages[0];

  return (
    <section id="academics" className="py-16 md:py-24 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27] mb-2">
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
            <span>Academic Continuum</span>
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1E3D] tracking-tight">
            World-Class Early Learning & Cambridge Primary
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Dedicated exclusively to foundational excellence: from Creche, Baby, Middle and Top Class through Cambridge International Primary Year 1, Year 2, and Year 3.
          </p>
        </div>

        {/* Academic Stage Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap p-1.5 bg-stone-200/80 rounded-2xl gap-1 max-w-full overflow-x-auto shadow-inner">
            {academicStages.map((stage) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  id={`academic-tab-${stage.id}`}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center space-x-2 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0B1E3D] text-white shadow-md'
                      : 'text-stone-700 hover:text-[#0B1E3D] hover:bg-white/60'
                  }`}
                >
                  <span>{stage.name}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      isActive ? 'bg-[#C59B27] text-[#0B1E3D]' : 'bg-stone-300 text-stone-700'
                    }`}
                  >
                    {stage.ageRange}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Content Card */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Visual & Fast Facts */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-stone-900">
              <img
                src={activeStage.image}
                alt={activeStage.name}
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D] via-[#0B1E3D]/40 to-transparent" />

              <div className="absolute bottom-6 inset-x-6 text-white space-y-3">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#C59B27] text-[#0B1E3D] text-[11px] font-bold">
                  <Award className="w-3.5 h-3.5" />
                  <span>{activeStage.gradeLevels}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold">{activeStage.name}</h3>
                <p className="text-xs text-slate-200 italic">{activeStage.tagline}</p>
                
                <div className="pt-2 border-t border-white/20 flex items-center space-x-2 text-xs text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-[#DFB743]" />
                  <span>Daily Schedule: {activeStage.schedule}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Curriculum, Subjects & Outcomes */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6">
              
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#C59B27] mb-1">
                  Curriculum Framework
                </div>
                <div className="text-base font-bold text-[#0B1E3D]">
                  {activeStage.curriculum}
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-2">
                  {activeStage.description}
                </p>
              </div>

              {/* Key Features Grid */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Program Distinctions</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStage.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#FCFAF7] border border-stone-200 text-xs text-stone-800 flex items-start space-x-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C59B27] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Subjects */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5 flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Core Learning Areas & Disciplines</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeStage.subjects.map((subj, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-medium border border-stone-200"
                    >
                      {subj}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expected Student Outcomes */}
              <div className="p-4 rounded-2xl bg-[#F4F6F9] border border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0B1E3D] mb-1.5">
                  Target Developmental Outcomes
                </div>
                <ul className="space-y-1">
                  {activeStage.outcomes.map((out, idx) => (
                    <li key={idx} className="text-xs text-stone-700 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenApply}
                  id={`academics-apply-${activeStage.id}`}
                  className="px-5 py-2.5 bg-[#0B1E3D] hover:bg-[#132D58] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors flex items-center space-x-2"
                >
                  <span>Apply for {activeStage.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#DFB743]" />
                </button>
                <button
                  onClick={onOpenProspectus}
                  id={`academics-prospectus-${activeStage.id}`}
                  className="px-4 py-2.5 border border-stone-300 hover:border-[#0B1E3D] text-stone-700 hover:text-[#0B1E3D] text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center space-x-2"
                >
                  <FileDown className="w-4 h-4 text-[#C59B27]" />
                  <span>Download Curriculum Guide</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
