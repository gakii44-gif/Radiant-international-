import React from 'react';
import {
  Heart,
  ShieldCheck,
  Smile,
  Sparkles,
  BookOpen,
  Monitor,
  CheckCircle2,
} from 'lucide-react';

export const StudentLife: React.FC = () => {
  return (
    <section id="student-life" className="py-16 md:py-24 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27] mb-2">
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
            <span>Pastoral Care & Community</span>
            <span className="w-6 h-[1.5px] bg-[#C59B27]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1E3D] tracking-tight">
            A Caring Environment Where Every Child Flourishes
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Student life at Radiant is built on warm relationships, personal attention, and a safe, joyful environment where young children feel secure, respected, and enthusiastic about learning.
          </p>
        </div>

        {/* 3 Pillar Cards: Pastoral Care, Wellbeing, Active Learning */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#C59B27]">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0B1E3D]">
              Loving Care & Dedicated Mentors
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Every child is guided by attentive homeroom teachers and early childhood caregivers who provide individualized attention, positive emotional reinforcement, and reassuring routines.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0B1E3D]">
              Safe Play & Physical Wellbeing
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Our covered artificial turf play park allows children to engage in active play, ball games, slides, and balance exercises every day under shaded, weather-protected supervision.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <Smile className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0B1E3D]">
              Creativity, Phonics & ICT Discovery
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Children participate in storytelling, creative art, music, phonics drills, and hands-on computer literacy in our Dell ICT lab to build confidence and joy in discovery.
            </p>
          </div>

        </div>

        {/* Campus Care & Daily Experience Highlights */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#C59B27]">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Daily Student Experience</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1E3D]">
                Designed Specifically for Early Childhood &amp; Cambridge Primary
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                From morning arrival to afternoon pickup, our daily timetable balances structured academic focus with restful breaks, nutritious snacks, and outdoor movement on our lush turf pitch.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Clean, air-conditioned classrooms with child-sized furniture',
                  'Dedicated Dell desktop computer lab with individual stations',
                  'Covered artificial turf play park protected from sun and rain',
                  'Low student-to-teacher ratio ensuring personal guidance',
                  'Phonics, reading corners & creative drawing in every class',
                  'Gated, secure campus in Kololo Area next to Regency Hotel',
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C59B27] flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0B1E3D] text-white p-6 sm:p-7 rounded-2xl border border-stone-800 space-y-4 shadow-md">
              <div className="text-xs font-bold uppercase tracking-wider text-[#DFB743]">
                Core Campus Values
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-white flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#DFB743]" />
                    <span>Kindness &amp; Respect</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Teaching children to share, listen politely, and respect friends, teachers, and school property.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-white flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#DFB743]" />
                    <span>Curiosity &amp; Confidence</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Encouraging young learners to ask questions, read enthusiastically, and explore technology with guidance.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-bold text-white flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#DFB743]" />
                    <span>Safety &amp; Cleanliness</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Providing a strictly hygienic, safe environment with constant caregiver and teacher presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
