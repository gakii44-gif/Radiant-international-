import React, { useState } from 'react';
import {
  Trophy,
  Palette,
  Cpu,
  Users2,
  Music,
  Clock,
  UserCheck,
  Tag,
  ArrowUpRight,
} from 'lucide-react';
import { coCurricularActivities } from '../data/schoolData';
import { CoCurricularActivity } from '../types';

interface BeyondClassroomProps {
  onOpenTour: () => void;
}

export const BeyondClassroom: React.FC<BeyondClassroomProps> = ({ onOpenTour }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Sports & Athletics',
    'Performing & Visual Arts',
    'STEM & Innovation',
    'Leadership & Service',
    'Music & Media',
  ];

  const filteredActivities =
    activeCategory === 'All'
      ? coCurricularActivities
      : coCurricularActivities.filter((act) => act.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Sports & Athletics':
        return <Trophy className="w-4 h-4" />;
      case 'Performing & Visual Arts':
        return <Palette className="w-4 h-4" />;
      case 'STEM & Innovation':
        return <Cpu className="w-4 h-4" />;
      case 'Leadership & Service':
        return <Users2 className="w-4 h-4" />;
      case 'Music & Media':
        return <Music className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section id="beyond-classroom" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27] mb-2">
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
            <span>Co-Curricular & Holistic Growth</span>
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1E3D] tracking-tight">
            Learning Beyond the Classroom
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            From hands-on Dell ICT computing and artificial turf football to early phonics, arts, and creative movement, education at Radiant inspires every young learner.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1 bg-stone-100 rounded-xl gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                id={`co-curricular-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center space-x-1.5 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#0B1E3D] text-white shadow-sm'
                    : 'text-stone-600 hover:text-[#0B1E3D] hover:bg-stone-200/60'
                }`}
              >
                {getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Visually Rich Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredActivities.map((act) => (
            <div
              key={act.id}
              id={`activity-card-${act.id}`}
              className="group bg-[#FCFAF7] rounded-2xl overflow-hidden border border-stone-200 hover:border-[#C59B27]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-2.5 left-2.5 bg-[#0B1E3D]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-white uppercase tracking-wider">
                    {act.category}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white font-medium">
                    {act.ageGroup}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#0B1E3D] group-hover:text-[#132D58] transition-colors leading-snug">
                    {act.title}
                  </h3>
                  <p className="mt-2 text-stone-600 text-xs leading-relaxed line-clamp-3">
                    {act.description}
                  </p>
                </div>
              </div>

              {/* Bottom Specs */}
              <div className="px-5 pb-5 pt-2 border-t border-stone-200/70 text-[11px] text-stone-500 space-y-2 mt-auto">
                <div className="flex items-center space-x-1.5 text-stone-600 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#C59B27] flex-shrink-0" />
                  <span className="line-clamp-1">{act.schedule}</span>
                </div>
                <div className="flex items-center space-x-1.5 text-stone-600">
                  <UserCheck className="w-3.5 h-3.5 text-[#C59B27] flex-shrink-0" />
                  <span className="line-clamp-1">{act.coachOrLead}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {act.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white text-[10px] font-medium text-stone-600 border border-stone-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenTour}
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#0B1E3D] hover:text-[#C59B27] transition-colors"
          >
            <span>Interested in specific sports or arts programs? Schedule a campus walkthrough to see our facilities</span>
            <ArrowUpRight className="w-4 h-4 text-[#C59B27]" />
          </button>
        </div>

      </div>
    </section>
  );
};
