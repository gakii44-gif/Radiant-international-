import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  Award,
  Users,
  Layers,
  ArrowRight,
  ExternalLink,
  Info,
} from 'lucide-react';
import { schoolConfig } from '../data/schoolData';
import { RadiantLogo } from './RadiantLogo';

interface SchoolFlyerShowcaseProps {
  onOpenApply: () => void;
  onOpenTour: () => void;
}

export const SchoolFlyerShowcase: React.FC<SchoolFlyerShowcaseProps> = ({
  onOpenApply,
  onOpenTour,
}) => {
  const [selectedTab, setSelectedTab] = useState<'commitment' | 'classes' | 'facilities'>('commitment');

  const classOfferings = [
    {
      title: 'Creche Class',
      age: '18 Months – 2 Years',
      badgeColor: 'bg-emerald-500 text-white',
      badgeBorder: 'border-emerald-600',
      description: 'Gentle sensory nurturing, motor milestone support, language priming, and safe toddler play.',
      keyPoints: ['Safe soft-play zones', 'Experienced caregivers', 'Potty routine guidance', 'Sensory music & movement'],
    },
    {
      title: 'Baby Class',
      age: '3 Years – 4 Years',
      badgeColor: 'bg-rose-500 text-white',
      badgeBorder: 'border-rose-600',
      description: 'Foundational expressive phonics, fine motor pencil control, counting discovery, and collaborative play.',
      keyPoints: ['Phonics letter sounds', 'Shape & color sorting', 'Story circle time', 'Indoor & outdoor play'],
    },
    {
      title: 'Middle Class',
      age: '4 Years – 5 Years',
      badgeColor: 'bg-sky-500 text-white',
      badgeBorder: 'border-sky-600',
      description: 'Early reading mechanics, numeracy operations, nature inquiry, and social confidence building.',
      keyPoints: ['Guided reading readiness', 'Number writing & counts', 'Creative art & singing', 'Social etiquette'],
    },
    {
      title: 'Top Class',
      age: '5 Years – 6 Years',
      badgeColor: 'bg-amber-500 text-white',
      badgeBorder: 'border-amber-600',
      description: 'Comprehensive school readiness transitioning into the Cambridge International Primary framework.',
      keyPoints: ['Sentence formation & reading', 'Mental math & patterns', 'Science observation', 'Primary transition prep'],
    },
    {
      title: 'Cambridge Primary (Y1, Y2, Y3)',
      age: 'Ages 6 – 9+ Years',
      badgeColor: 'bg-[#0B1E3D] text-[#DFB743]',
      badgeBorder: 'border-[#C59B27]',
      description: 'Rigorous Cambridge International Primary curriculum developing critical thinking, logic, and global outlook.',
      keyPoints: [
        'Cambridge English, Maths & Science',
        'Modern Computer / ICT Lab training',
        'Global Perspectives & Character',
        'Continuous assessment & certificates',
      ],
      isHighlighted: true,
    },
  ];

  return (
    <section id="school-announcements" className="py-20 bg-gradient-to-b from-stone-50 via-white to-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0B1E3D]/5 border border-[#C59B27]/30 text-[#0B1E3D] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Official School Information & Admissions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B1E3D]">
            Admissions & Commitment to Excellence
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            Radiant International School provides a child-centered, conducive learning environment following the world-renowned Cambridge International Curriculum in Juba.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-stone-100 border border-stone-200 shadow-inner">
            <button
              onClick={() => setSelectedTab('commitment')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedTab === 'commitment'
                  ? 'bg-[#0B1E3D] text-white shadow-md'
                  : 'text-stone-600 hover:text-[#0B1E3D]'
              }`}
            >
              Our Commitment & Admissions
            </button>
            <button
              onClick={() => setSelectedTab('classes')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedTab === 'classes'
                  ? 'bg-[#0B1E3D] text-white shadow-md'
                  : 'text-stone-600 hover:text-[#0B1E3D]'
              }`}
            >
              Class Levels (Creche to Y3)
            </button>
            <button
              onClick={() => setSelectedTab('facilities')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedTab === 'facilities'
                  ? 'bg-[#0B1E3D] text-white shadow-md'
                  : 'text-stone-600 hover:text-[#0B1E3D]'
              }`}
            >
              Campus Life & ICT Lab
            </button>
          </div>
        </div>

        {/* Tab 1: Commitment & Admissions Notice */}
        {selectedTab === 'commitment' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Card: Official Poster Breakdown */}
            <div className="lg:col-span-7 bg-[#0B1E3D] text-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#C59B27]/40 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#DFB743]/10 rounded-full filter blur-3xl pointer-events-none" />
              
              <div>
                {/* Header Logo + Motto */}
                <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                  <RadiantLogo variant="light" size="md" />
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-[#C59B27] text-[#0B1E3D] text-xs font-black rounded-lg uppercase tracking-wider">
                      Academic Year 2026–2027
                    </span>
                    <div className="text-[11px] text-slate-300 mt-1">Registrations Open 13th July 2026</div>
                  </div>
                </div>

                {/* Our Commitment Headline */}
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#DFB743]">
                    Our School Commitment
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
                    &quot;Enroll your child at Radiant International School and witness their potential unfold.&quot;
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed font-light">
                    Our school is renowned for its commitment to excellence, providing world-class Cambridge education where every child is nurtured to shine brightly.
                  </p>
                </div>

                {/* 6 Core Pillars from the School Flyer */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
                  {[
                    { label: 'Holistic Education', desc: 'Intellect, heart & body' },
                    { label: 'Child Centered', desc: 'Personalized attention' },
                    { label: 'Sound Teachers', desc: 'Certified & dedicated' },
                    { label: 'Conducive Environment', desc: 'Safe & modern campus' },
                    { label: 'Modern Classrooms', desc: 'Air-conditioned & bright' },
                    { label: 'Cambridge Y1, Y2, Y3', desc: 'Global standards' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 text-left hover:bg-white/10 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#DFB743] mb-1.5" />
                      <div className="text-xs font-bold text-white">{item.label}</div>
                      <div className="text-[10px] text-slate-300">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Visiting Notice & Action */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-3 text-xs text-slate-200">
                  <Clock className="w-4 h-4 text-[#DFB743] flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Office Open for Forms: </span>
                    <span>9:00 AM – 3:00 PM (Mon – Fri)</span>
                  </div>
                </div>
                <button
                  onClick={onOpenApply}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#DFB743] to-[#C59B27] hover:from-[#F0CB5E] hover:to-[#D4A735] text-[#0B1E3D] font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-transform hover:scale-[1.02] cursor-pointer inline-flex items-center space-x-2"
                >
                  <span>Request Enrollment Form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Card: Location, Contact & Quick Tour Guide */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-[#0B1E3D] font-bold text-base border-b border-stone-100 pb-4 mb-5">
                  <MapPin className="w-5 h-5 text-[#C59B27]" />
                  <span>Visiting Our Kololo Campus</span>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                      Campus Address & Landmark
                    </div>
                    <p className="text-stone-800 font-semibold text-sm">
                      {schoolConfig.address.street}
                    </p>
                    <p className="text-xs text-stone-600 mt-1">
                      {schoolConfig.address.city}, {schoolConfig.address.country}
                    </p>
                    <a
                      href={schoolConfig.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0B1E3D] hover:text-[#C59B27] mt-3 underline"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Admissions Hotline & Inquiries
                    </div>
                    <div className="flex items-center space-x-2 text-sm font-semibold text-[#0B1E3D]">
                      <Phone className="w-4 h-4 text-[#C59B27]" />
                      <a href={`tel:${schoolConfig.phone}`} className="hover:underline">
                        {schoolConfig.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-sm font-semibold text-[#0B1E3D]">
                      <Phone className="w-4 h-4 text-[#C59B27]" />
                      <a href={`tel:${schoolConfig.admissionsPhone}`} className="hover:underline">
                        {schoolConfig.admissionsPhone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-stone-600 pt-1">
                      <Mail className="w-3.5 h-3.5 text-[#C59B27]" />
                      <a href={`mailto:${schoolConfig.email}`} className="hover:underline">
                        {schoolConfig.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                <a
                  href={schoolConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-blue-700 hover:text-blue-900 bg-blue-50 px-3 py-2 rounded-lg border border-blue-100 transition-colors"
                >
                  <span>Official Facebook Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={onOpenTour}
                  className="text-xs font-bold text-[#0B1E3D] hover:text-[#C59B27] underline cursor-pointer"
                >
                  Schedule Campus Walkthrough
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Class Levels Breakdown */}
        {selectedTab === 'classes' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classOfferings.map((cls, idx) => (
                <div
                  key={idx}
                  className={`rounded-3xl p-6 transition-all duration-200 ${
                    cls.isHighlighted
                      ? 'bg-[#0B1E3D] text-white border-2 border-[#C59B27] shadow-xl md:col-span-2 lg:col-span-1'
                      : 'bg-white text-stone-800 border border-stone-200 shadow-md hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${cls.badgeColor}`}>
                      {cls.age}
                    </span>
                    <span className="text-xs font-mono font-bold opacity-60">Stage 0{idx + 1}</span>
                  </div>

                  <h3 className={`text-xl font-bold font-serif mb-2 ${cls.isHighlighted ? 'text-white' : 'text-[#0B1E3D]'}`}>
                    {cls.title}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-4 ${cls.isHighlighted ? 'text-slate-200' : 'text-stone-600'}`}>
                    {cls.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-current/10">
                    <div className={`text-[11px] font-bold uppercase tracking-wider ${cls.isHighlighted ? 'text-[#DFB743]' : 'text-[#C59B27]'}`}>
                      Program Focus:
                    </div>
                    {cls.keyPoints.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-2 text-xs">
                        <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${cls.isHighlighted ? 'text-[#DFB743]' : 'text-emerald-600'}`} />
                        <span className={cls.isHighlighted ? 'text-slate-200' : 'text-stone-700'}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Registration Reminder */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0B1E3D] to-[#132D58] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#C59B27]/40 shadow-lg">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-[#DFB743]">
                  Enrolling Creche, Baby, Middle, Top Class & Primary (Y1 – Y3)
                </div>
                <div className="text-base font-bold font-serif">
                  Forms available daily at the school administration office (9:00 AM – 3:00 PM)
                </div>
              </div>
              <button
                onClick={onOpenApply}
                className="px-6 py-2.5 bg-[#C59B27] hover:bg-[#DFB743] text-[#0B1E3D] font-bold text-xs sm:text-sm rounded-xl transition-all flex-shrink-0 cursor-pointer"
              >
                Apply for Admission
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Facilities & ICT Lab */}
        {selectedTab === 'facilities' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* ICT Computer Laboratory */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold mb-4">
                  ICT
                </div>
                <h3 className="text-lg font-bold font-serif text-[#0B1E3D] mb-2">
                  Modern Computer & ICT Lab
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  Equipped with dedicated Dell desktop stations where pupils learn foundational computer literacy, typing skills, digital drawing, and interactive software.
                </p>
                <div className="space-y-1.5 text-xs text-stone-700">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>1-to-1 pupil workstation allocation during ICT periods</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>Filtered educational browsing and software</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>Air-conditioned and ergonomic seating</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 text-xs font-semibold text-[#0B1E3D]">
                Integrated with Cambridge Primary ICT
              </div>
            </div>

            {/* Early Years Classroom & Play Village */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold mb-4">
                  EYFS
                </div>
                <h3 className="text-lg font-bold font-serif text-[#0B1E3D] mb-2">
                  Vibrant Early Years Discovery Rooms
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  Spacious rooms featuring plush carpeting, child-sized ergonomic study tables in bright primary colors, individual storage cubbies, and sensory learning toys.
                </p>
                <div className="space-y-1.5 text-xs text-stone-700">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
                    <span>Phonics and storytelling circles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
                    <span>Building blocks & manipulative math toys</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
                    <span>Child-safe monitored environment</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 text-xs font-semibold text-[#0B1E3D]">
                Creche to Top Class
              </div>
            </div>

            {/* Covered Turf Play Area & Sports Pitch */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
                  PE
                </div>
                <h3 className="text-lg font-bold font-serif text-[#0B1E3D] mb-2">
                  Covered Turf Play Park & Sports Ground
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  Spacious, high-roof covered play park with green artificial turf, slides, play houses, tricycles, and swings designed for safe active play in all weather conditions.
                </p>
                <div className="space-y-1.5 text-xs text-stone-700">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span>Weather-protected artificial grass turf</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span>Playhouses, slide chutes & balance toys</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span>Continuous teacher and caregiver supervision</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100 text-xs font-semibold text-[#0B1E3D]">
                All Grades Physical Health & Recreation
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
