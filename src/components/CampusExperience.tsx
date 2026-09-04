import React, { useState } from 'react';
import {
  Building2,
  Maximize2,
  CheckCircle2,
  Users,
  Compass,
  Sparkles,
  Layers,
  MapPin,
} from 'lucide-react';
import { campusFacilities } from '../data/schoolData';
import { CampusFacility } from '../types';
import { useSchoolMedia } from '../hooks/useSchoolMedia';

interface CampusExperienceProps {
  onOpenTour: () => void;
}

export const CampusExperience: React.FC<CampusExperienceProps> = ({ onOpenTour }) => {
  const { getPhotoUrl } = useSchoolMedia();
  const [selectedFacility, setSelectedFacility] = useState<CampusFacility>(
    campusFacilities[0]
  );
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const getFacilityPhoto = (facilityId: string, defaultImg: string) => {
    switch (facilityId) {
      case 'ict-lab':
        return getPhotoUrl('computerLabMain', defaultImg);
      case 'classrooms':
        return getPhotoUrl('classroomReading', defaultImg);
      case 'turf-playground':
        return getPhotoUrl('playgroundTurf', defaultImg);
      case 'early-years-garden':
        return getPhotoUrl('flyerClassesTiers', defaultImg);
      case 'stem-labs':
        return getPhotoUrl('computerLabTeacher', defaultImg);
      case 'main-campus':
        return getPhotoUrl('playgroundTurf', defaultImg);
      default:
        return defaultImg;
    }
  };

  const categories = [
    'All',
    'Academics & STEM',
    'Sports & Athletics',
    'Arts & Performance',
    'Libraries & Commons',
    'Student Dining & Outdoor',
  ];

  const filteredFacilities =
    activeCategory === 'All'
      ? campusFacilities
      : campusFacilities.filter((f) => f.category === activeCategory);

  return (
    <section id="campus" className="py-16 md:py-24 bg-[#0B1E3D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#DFB743] mb-2">
              <span className="w-6 h-[1.5px] bg-[#DFB743]" />
              <span>World-Class Infrastructure</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              The Radiant Campus Experience
            </h2>
            <p className="mt-2 text-slate-300 text-sm max-w-xl">
              Located in the Kololo Area, off Airport Road next to Regency Hotel, our campus features a covered artificial turf play park, modern Dell computer &amp; ICT laboratory, and bright Cambridge classrooms in Juba.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onOpenTour}
              id="campus-book-tour-btn"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#DFB743] to-[#C59B27] hover:from-[#F0CB5E] hover:to-[#D4A735] text-[#0B1E3D] font-bold text-xs sm:text-sm transition-all shadow-lg flex items-center space-x-2"
            >
              <Compass className="w-4 h-4" />
              <span>Book an In-Person Campus Walkthrough</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                const first =
                  cat === 'All'
                    ? campusFacilities[0]
                    : campusFacilities.find((f) => f.category === cat) ||
                      campusFacilities[0];
                setSelectedFacility(first);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#DFB743] text-[#0B1E3D] font-bold shadow-md'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Interactive Facility Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Selected Facility Display */}
          <div className="lg:col-span-8 bg-[#132D58] rounded-3xl overflow-hidden border border-[#C59B27]/30 shadow-2xl flex flex-col justify-between">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-900">
              <img
                src={getFacilityPhoto(selectedFacility.id, selectedFacility.image)}
                alt={selectedFacility.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/radiant-crest.svg';
                  (e.target as HTMLElement).className = 'w-1/3 h-1/3 m-auto object-contain py-12 opacity-80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D] via-transparent to-black/30" />
              
              <div className="absolute top-4 left-4 bg-[#0B1E3D]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#C59B27]/40 text-xs font-bold text-[#DFB743]">
                {selectedFacility.category}
              </div>

              {selectedFacility.capacity && (
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs text-white font-medium flex items-center space-x-1.5">
                  <Users className="w-3.5 h-3.5 text-[#DFB743]" />
                  <span>{selectedFacility.capacity}</span>
                </div>
              )}

              <div className="absolute bottom-4 inset-x-4 sm:inset-x-6 text-white">
                <div className="text-xs text-[#DFB743] uppercase tracking-wider font-semibold">
                  Featured Facility
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mt-0.5">
                  {selectedFacility.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {selectedFacility.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {selectedFacility.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 flex items-center space-x-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#DFB743] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span className="text-[#DFB743] font-medium flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{selectedFacility.highlights}</span>
                </span>
                <button
                  onClick={onOpenTour}
                  className="text-xs text-white underline hover:text-[#DFB743] transition-colors"
                >
                  Schedule in-person tour →
                </button>
              </div>
            </div>
          </div>

          {/* Quick Facility Selector Sidebar List */}
          <div className="lg:col-span-4 space-y-3 flex flex-col justify-between">
            <div className="text-xs font-bold uppercase tracking-wider text-[#DFB743] px-1">
              Select a Facility ({filteredFacilities.length})
            </div>
            
            <div className="space-y-2.5 overflow-y-auto max-h-[600px] pr-1">
              {filteredFacilities.map((fac) => {
                const isSelected = fac.id === selectedFacility.id;
                return (
                  <button
                    key={fac.id}
                    onClick={() => setSelectedFacility(fac)}
                    id={`campus-facility-item-${fac.id}`}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-center space-x-3.5 cursor-pointer ${
                      isSelected
                        ? 'bg-[#1B3D74] border-[#DFB743] shadow-lg ring-1 ring-[#DFB743]'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <img
                      src={getFacilityPhoto(fac.id, fac.image)}
                      alt={fac.name}
                      className="w-14 h-14 rounded-xl object-cover flex-shrink-0 bg-slate-800"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/radiant-crest.svg';
                        (e.target as HTMLElement).className = 'w-14 h-14 p-2 rounded-xl object-contain bg-white/10 flex-shrink-0';
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-white line-clamp-1">
                        {fac.name}
                      </div>
                      <div className="text-[11px] text-[#DFB743] line-clamp-1 mt-0.5">
                        {fac.category}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                        {fac.highlights}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-[#071328] border border-white/10 text-center space-y-2 mt-2">
              <div className="text-xs text-slate-300 font-medium">
                Want a personalized walkthrough of our science labs & sports complex?
              </div>
              <button
                onClick={onOpenTour}
                className="w-full py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg border border-white/20 transition-colors"
              >
                Request Custom Tour
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
