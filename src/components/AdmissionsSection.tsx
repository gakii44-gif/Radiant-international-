import React, { useState } from 'react';
import {
  Sparkles,
  CalendarCheck,
  FileCheck2,
  Users2,
  CheckCircle2,
  ArrowRight,
  Calculator,
  HelpCircle,
  Clock,
  ShieldAlert,
} from 'lucide-react';
import { admissionsSteps, schoolConfig } from '../data/schoolData';

interface AdmissionsSectionProps {
  onOpenApply: () => void;
  onOpenTour: () => void;
  onOpenProspectus: () => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({
  onOpenApply,
  onOpenTour,
  onOpenProspectus,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  // Quick Age Calculator state
  const [calcBirthYear, setCalcBirthYear] = useState<string>('2020');
  const [calcResult, setCalcResult] = useState<string>('Cambridge Primary (Year 1 - Age 6)');

  const handleYearChange = (year: string) => {
    setCalcBirthYear(year);
    const yr = parseInt(year);
    if (yr >= 2024) setCalcResult('Creche Class (Early Childhood - 18m to 2 Years)');
    else if (yr === 2023) setCalcResult('Baby Class (Early Childhood - Ages 3-4)');
    else if (yr === 2022) setCalcResult('Middle Class (Kindergarten - Ages 4-5)');
    else if (yr === 2021) setCalcResult('Top Class (Kindergarten - Ages 5-6)');
    else if (yr === 2020) setCalcResult('Cambridge Primary (Year 1 - Age 6+)');
    else if (yr === 2019) setCalcResult('Cambridge Primary (Year 2 - Age 7+)');
    else if (yr <= 2018) setCalcResult('Cambridge Primary (Year 3 - Ages 8-9+)');
  };

  return (
    <section id="admissions" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27] mb-2">
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
            <span>Admissions & Enrollment</span>
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1E3D] tracking-tight">
            Your Journey to Radiant International School
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            We operate a personalized, transparent 5-step admissions process designed to welcome new families and ensure the ideal educational fit for every child.
          </p>
        </div>

        {/* 5-Step Process Bar on Desktop */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-10">
          {admissionsSteps.map((step) => {
            const isCurrent = step.step === activeStep;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                id={`admissions-step-tab-${step.step}`}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${
                  isCurrent
                    ? 'bg-[#0B1E3D] border-[#C59B27] text-white shadow-lg'
                    : 'bg-[#FCFAF7] border-stone-200 text-stone-700 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      isCurrent ? 'bg-[#C59B27] text-[#0B1E3D]' : 'bg-stone-200 text-stone-700'
                    }`}
                  >
                    {step.step}
                  </span>
                  <span
                    className={`text-[10px] font-semibold ${
                      isCurrent ? 'text-[#DFB743]' : 'text-stone-400'
                    }`}
                  >
                    {step.timeline}
                  </span>
                </div>
                <div className="font-serif font-bold text-sm leading-tight">{step.title}</div>
              </button>
            );
          })}
        </div>

        {/* Mobile / Responsive Step Carousel & Selected Step View */}
        <div className="bg-[#FAF9F6] rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm mb-12">
          {/* Mobile step selector buttons */}
          <div className="flex lg:hidden overflow-x-auto pb-4 mb-6 gap-2">
            {admissionsSteps.map((step) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap ${
                  step.step === activeStep
                    ? 'bg-[#0B1E3D] text-white'
                    : 'bg-white text-stone-700 border border-stone-200'
                }`}
              >
                Step {step.step}: {step.title}
              </button>
            ))}
          </div>

          {(() => {
            const step =
              admissionsSteps.find((s) => s.step === activeStep) || admissionsSteps[0];
            return (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8 space-y-4">
                  <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#C59B27]">
                    <span>Step {step.step} of 5</span>
                    <span>•</span>
                    <span>Typical Timeline: {step.timeline}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1E3D]">
                    {step.title}
                  </h3>
                  <div className="text-sm font-semibold text-stone-700">
                    {step.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="pt-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                      Key Step Elements & Requirements:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.requirements.map((req, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 p-2.5 rounded-lg bg-white border border-stone-200 text-xs text-stone-700 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#C59B27] flex-shrink-0" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4 text-center">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 mx-auto flex items-center justify-center text-[#C59B27]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#0B1E3D]">
                    Ready to Take the Next Step?
                  </h4>
                  <p className="text-xs text-stone-600">
                    Our dedicated admissions counselors are here to guide your family through every phase.
                  </p>
                  <div className="space-y-2 pt-2">
                    <button
                      onClick={onOpenApply}
                      id="admissions-start-app-btn"
                      className="w-full py-3 bg-gradient-to-r from-[#DFB743] to-[#C59B27] hover:from-[#F0CB5E] hover:to-[#D4A735] text-[#0B1E3D] font-bold text-xs rounded-xl transition-all shadow-md cursor-pointer"
                    >
                      Start Your Application
                    </button>
                    <button
                      onClick={onOpenTour}
                      id="admissions-book-tour-btn"
                      className="w-full py-2.5 bg-white hover:bg-stone-50 text-[#0B1E3D] font-semibold text-xs rounded-xl border border-stone-300 transition-colors cursor-pointer"
                    >
                      Book a School Tour
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Quick Age Placement & Eligibility Calculator */}
        <div className="bg-[#0B1E3D] text-white rounded-3xl p-6 sm:p-10 border border-[#C59B27]/30 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#DFB743]">
                <Calculator className="w-4 h-4" />
                <span>Age Placement Guide</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Find Your Child’s Grade Placement for 2026/2027
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Select your child's birth year to determine their standard entry level at Radiant International School according to international age guidelines.
              </p>
            </div>

            <div className="lg:col-span-6 bg-[#132D58] p-6 rounded-2xl border border-white/10 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Child's Year of Birth:
                </label>
                <select
                  value={calcBirthYear}
                  onChange={(e) => handleYearChange(e.target.value)}
                  className="w-full bg-[#071328] border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                >
                  <option value="2024">2024 (18 Months – 2 Years: Creche Class)</option>
                  <option value="2023">2023 (Age 3 – 4: Baby Class)</option>
                  <option value="2022">2022 (Age 4 – 5: Middle Class)</option>
                  <option value="2021">2021 (Age 5 – 6: Top Class)</option>
                  <option value="2020">2020 (Age 6: Cambridge Primary Year 1)</option>
                  <option value="2019">2019 (Age 7: Cambridge Primary Year 2)</option>
                  <option value="2018">2018 (Age 8: Cambridge Primary Year 3)</option>
                </select>
              </div>

              <div className="p-4 rounded-xl bg-[#0B1E3D] border border-[#C59B27]/40">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                  Recommended Academic Division:
                </div>
                <div className="text-base font-serif font-bold text-[#DFB743] mt-0.5">
                  {calcResult}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Direct Admissions Hotline:</span>
                <a
                  href={`tel:${schoolConfig.admissionsPhone}`}
                  className="font-bold text-[#DFB743] hover:underline"
                >
                  {schoolConfig.admissionsPhone}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
