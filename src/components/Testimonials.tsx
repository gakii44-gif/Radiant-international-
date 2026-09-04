import React, { useState } from 'react';
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Info,
  CheckCircle2,
} from 'lucide-react';
import { testimonials } from '../data/schoolData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#FCFAF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27] mb-2">
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
            <span>Community Voices</span>
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1E3D] tracking-tight">
            Reflections from Our School Families
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Discover the experiences of parents, alumni, and students who form the heart of Radiant International School.
          </p>
          
          {/* Transparent Editorial Note */}
          <div className="inline-flex items-center space-x-1.5 mt-3 px-3 py-1 rounded-full bg-stone-200/80 text-[11px] text-stone-600 font-medium">
            <Info className="w-3.5 h-3.5 text-stone-500" />
            <span>Representative parent & alumni testimonials during official portal transition</span>
          </div>
        </div>

        {/* Carousel / Grid of Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-[#C59B27]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-stone-200" />
                </div>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic font-serif mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-stone-100 flex items-center space-x-3.5 mt-auto">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C59B27]/40 shadow-xs"
                />
                <div>
                  <div className="font-serif font-bold text-sm text-[#0B1E3D]">
                    {t.name}
                  </div>
                  <div className="text-xs text-stone-600 font-medium">
                    {t.role}
                  </div>
                  {t.subRole && (
                    <div className="text-[11px] text-[#C59B27] mt-0.5">
                      {t.subRole}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
