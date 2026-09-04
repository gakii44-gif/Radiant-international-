import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
  GraduationCap,
  Globe2,
  CalendarCheck,
  Play,
  Award,
  MapPin,
  Camera,
} from 'lucide-react';
import { schoolConfig, schoolImages } from '../data/schoolData';
import { RadiantLogo } from './RadiantLogo';
import { useSchoolMedia } from '../hooks/useSchoolMedia';

interface HeroProps {
  onOpenApply: () => void;
  onOpenTour: () => void;
  onOpenProspectus: () => void;
  onOpenUploadModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenApply,
  onOpenTour,
  onOpenProspectus,
  onOpenUploadModal,
}) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const { getPhotoUrl } = useSchoolMedia();

  const heroBgPhoto = getPhotoUrl('playgroundTurf', schoolImages.heroCampus);
  const heroCardPhoto = getPhotoUrl('classroomReading', schoolImages.classroom);

  return (
    <section id="hero-section" className="relative pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-[#0B1E3D]">
      {/* Background Photography & Subtle Elegant Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgPhoto}
          alt="Radiant International School Campus"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLElement).style.opacity = '0.15';
          }}
        />
        {/* Subtle radial warmth & navy prestige gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E3D] via-[#0B1E3D]/90 to-[#0B1E3D]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C59B27]/15 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
            
            {/* Official School Crest & Accreditation Badge Tag */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C59B27]/40 text-[#DFB743] text-xs font-semibold tracking-wide">
                <RadiantLogo size="sm" showText={false} variant="light" className="!space-x-0" />
                <span>Admissions Open 2026–2027 | Cambridge Y1–Y3</span>
              </div>
              <a
                href={schoolConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#1877F2]/20 hover:bg-[#1877F2]/30 border border-[#1877F2]/40 text-blue-200 text-xs font-medium transition-all"
              >
                <span>Follow on Facebook</span>
                <ArrowRight className="w-3 h-3" />
              </a>
              {onOpenUploadModal && (
                <button
                  onClick={onOpenUploadModal}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#C59B27]/20 hover:bg-[#C59B27]/30 border border-[#C59B27]/50 text-[#DFB743] text-xs font-semibold transition-all cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Manage School Photos</span>
                </button>
              )}
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.15]">
                Inspiring Bright Minds. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB743] via-[#F3DE91] to-[#C59B27]">
                  Shaping Future Leaders.
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
              Radiant International School provides a premier Cambridge International curriculum in a safe, inspiring environment in Kololo, Juba. Through inquiry, discipline, character development, and academic excellence, we empower every child to flourish.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={onOpenApply}
                id="hero-primary-apply-btn"
                className="px-7 py-3.5 bg-gradient-to-r from-[#DFB743] to-[#C59B27] hover:from-[#F0CB5E] hover:to-[#D4A735] text-[#0B1E3D] font-bold text-sm md:text-base rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 group"
              >
                <span>Apply for Admission</span>
                <Sparkles className="w-4 h-4 text-[#0B1E3D] group-hover:rotate-12 transition-transform" />
              </button>

              <a
                href={schoolConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-map-location-btn"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm md:text-base rounded-xl border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-200 text-center flex items-center justify-center space-x-2"
              >
                <MapPin className="w-4 h-4 text-[#DFB743]" />
                <span>View Campus Location</span>
              </a>

              <button
                onClick={onOpenTour}
                id="hero-tertiary-tour-btn"
                className="px-5 py-3.5 text-slate-300 hover:text-white text-sm font-semibold transition-colors flex items-center justify-center space-x-1.5"
              >
                <CalendarCheck className="w-4 h-4 text-[#DFB743]" />
                <span>Book a Tour</span>
              </button>
            </div>

            {/* Curriculum Continuum Snapshot */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300">
              <span className="text-slate-400 font-medium">Academic Offerings:</span>
              <span className="flex items-center space-x-1 font-semibold text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DFB743]"></span>
                <span>Creche & Baby Class (18m–4y)</span>
              </span>
              <span className="flex items-center space-x-1 font-semibold text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DFB743]"></span>
                <span>Middle & Top Class (4–6y)</span>
              </span>
              <span className="flex items-center space-x-1 font-semibold text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DFB743]"></span>
                <span>Cambridge Primary (Year 1, 2 & 3)</span>
              </span>
            </div>
          </div>

          {/* Right Column: Visual Card / Interactive Campus Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Decorative Frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#C59B27]/40 shadow-2xl bg-[#132D58]/60 p-2">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900">
                  <img
                    src={heroCardPhoto}
                    alt="Students actively learning at Radiant International School"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Graceful fallback to crest if image not on disk
                      (e.target as HTMLImageElement).src = '/radiant-crest.svg';
                      (e.target as HTMLElement).className = 'w-1/2 h-1/2 m-auto object-contain py-8 opacity-80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D] via-transparent to-black/20" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-[#0B1E3D]/90 backdrop-blur-md px-3 py-1 rounded-lg border border-[#C59B27]/30 text-white text-[11px] font-semibold flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Cambridge Learning in Action</span>
                  </div>

                  {/* Bottom Information overlay */}
                  <div className="absolute bottom-3 inset-x-3 bg-[#0B1E3D]/90 backdrop-blur-md rounded-xl p-3 border border-white/10 text-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-xs font-bold text-white">Visit Our Kololo Campus</div>
                        <div className="text-[11px] text-[#DFB743]">Airport Road, next to Regency Hotel, Juba</div>
                      </div>
                      <a
                        href={schoolConfig.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#C59B27] hover:bg-[#DFB743] text-[#0B1E3D] rounded-full transition-transform hover:scale-105"
                        title="Open in Google Maps"
                      >
                        <MapPin className="w-4 h-4 fill-current" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Sub-cards row */}
                <div className="grid grid-cols-3 gap-2 mt-2 pt-1 text-center">
                  <div className="bg-[#0B1E3D]/80 rounded-lg p-2.5 border border-white/5">
                    <div className="text-xs font-bold text-[#DFB743]">Cambridge</div>
                    <div className="text-[10px] text-slate-300">Curriculum</div>
                  </div>
                  <div className="bg-[#0B1E3D]/80 rounded-lg p-2.5 border border-white/5">
                    <div className="text-xs font-bold text-[#DFB743]">Year 1 - 3+</div>
                    <div className="text-[10px] text-slate-300">Reg. Open</div>
                  </div>
                  <div className="bg-[#0B1E3D]/80 rounded-lg p-2.5 border border-white/5">
                    <div className="text-xs font-bold text-[#DFB743]">Kololo, Juba</div>
                    <div className="text-[10px] text-slate-300">Prime Location</div>
                  </div>
                </div>
              </div>

              {/* Decorative gold accent glow */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C59B27]/20 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Trust / Value Strip Beneath Hero */}
      <div className="relative z-10 mt-12 md:mt-16 border-y border-white/10 bg-[#071328]/80 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center text-center">
            
            <div className="flex items-center justify-center space-x-2.5 text-slate-200">
              <GraduationCap className="w-5 h-5 text-[#DFB743] flex-shrink-0" />
              <div className="text-left">
                <span className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-white">Academic Excellence</span>
                <span className="text-[11px] text-slate-400">Cambridge & IB World Continuum</span>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2.5 text-slate-200">
              <ShieldCheck className="w-5 h-5 text-[#DFB743] flex-shrink-0" />
              <div className="text-left">
                <span className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-white">Character & Values</span>
                <span className="text-[11px] text-slate-400">Integrity, Leadership & Empathy</span>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2.5 text-slate-200">
              <Compass className="w-5 h-5 text-[#DFB743] flex-shrink-0" />
              <div className="text-left">
                <span className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-white">Innovation & STEM</span>
                <span className="text-[11px] text-slate-400">Robotics, Arts & Inquiry Labs</span>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2.5 text-slate-200">
              <Globe2 className="w-5 h-5 text-[#DFB743] flex-shrink-0" />
              <div className="text-left">
                <span className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-white">Welcoming Community</span>
                <span className="text-[11px] text-slate-400">Inclusive, Diverse & Supportive</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
