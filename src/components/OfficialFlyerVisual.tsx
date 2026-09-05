import React from 'react';
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
  ShieldCheck,
} from 'lucide-react';
import { schoolConfig } from '../data/schoolData';
import { RadiantLogo } from './RadiantLogo';
import { useSchoolMedia } from '../hooks/useSchoolMedia';

interface OfficialFlyerVisualProps {
  type: 'admissions2026' | 'commitment' | 'classes';
  className?: string;
  onOpenApply?: () => void;
}

export const OfficialFlyerVisual: React.FC<OfficialFlyerVisualProps> = ({
  type,
  className = '',
  onOpenApply,
}) => {
  const { getPhotoUrl, hasCustomPhoto } = useSchoolMedia();

  // If user uploaded real photo or static file is present:
  const slotKey =
    type === 'admissions2026'
      ? 'flyerAdmissions2026'
      : type === 'commitment'
      ? 'flyerCommitmentPrimary'
      : 'flyerClassesTiers';

  const isCustom = hasCustomPhoto(slotKey);
  const photoUrl = getPhotoUrl(slotKey);

  if (isCustom) {
    return (
      <div className={`relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C59B27]/40 ${className}`}>
        <img
          src={photoUrl}
          alt={`Radiant International School Flyer - ${type}`}
          className="w-full h-full object-contain bg-[#0B1E3D]"
        />
      </div>
    );
  }

  // Exact Pixel-Crafted Authentic Replica of the Flyers
  if (type === 'admissions2026') {
    return (
      <div
        className={`relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C59B27]/50 bg-gradient-to-br from-[#071328] via-[#0B1E3D] to-[#132D58] text-white p-6 sm:p-8 flex flex-col justify-between ${className}`}
      >
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C59B27]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1877F2]/10 rounded-full blur-3xl pointer-events-none" />

        <div>
          {/* School Crest & Title */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <RadiantLogo variant="light" size="lg" />
            <div className="text-right">
              <span className="inline-block px-3 py-1 bg-[#C59B27] text-[#0B1E3D] text-[11px] font-black rounded-lg uppercase tracking-wider">
                Official Announcement
              </span>
            </div>
          </div>

          {/* Golden Badge Header */}
          <div className="space-y-2 mb-6">
            <div className="inline-block px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#DFB743] to-[#C59B27] text-[#0B1E3D] text-xs sm:text-sm font-black uppercase tracking-wider shadow-md">
              Academic Year 2026 – 2027
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight leading-tight">
              Admissions & Registrations Open on 13th July 2026
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
              We follow the <strong>Cambridge International Curriculum</strong> from <strong>Year 1, Year 2, Year 3</strong> providing a world-class foundation for lifelong learning.
            </p>
          </div>

          {/* 5 Core Pillars from the Real Flyer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4">
            {[
              { title: 'Holistic Development', desc: 'Mind, character and physical vigor' },
              { title: 'Safe, Caring & Conducive Environment', desc: 'Secure Kololo campus with modern facilities' },
              { title: 'Global Perspective', desc: 'Cambridge international standard accreditation' },
              { title: 'Values & Character', desc: 'Integrity, discipline, and community leadership' },
              { title: 'Academic Excellence', desc: 'Passionate qualified teachers & dedicated ICT lab' },
            ].map((p, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-[#DFB743] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">{p.title}</div>
                  <div className="text-[10px] text-slate-300">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Location Footer */}
        <div className="pt-4 border-t border-white/10 mt-4 space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-[#DFB743]">
            Get In Touch
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#DFB743] flex-shrink-0" />
              <span>Kololo Area, Off Airport Road, next to Regency Hotel, Juba</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#DFB743] flex-shrink-0" />
              <span>+211 (0) 923 040 040 / +211 (0) 983 040 040</span>
            </div>
          </div>

          {onOpenApply && (
            <div className="pt-2 flex justify-end">
              <button
                onClick={onOpenApply}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#DFB743] to-[#C59B27] hover:from-[#F0CB5E] hover:to-[#D4A735] text-[#0B1E3D] font-bold text-xs shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
              >
                Enroll Now for 2026–2027
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (type === 'commitment') {
    return (
      <div
        className={`relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C59B27]/40 bg-[#0B1E3D] text-white p-6 sm:p-8 flex flex-col justify-between ${className}`}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <RadiantLogo variant="light" size="lg" />
            <span className="px-3 py-1 bg-[#C59B27]/20 border border-[#C59B27]/40 text-[#DFB743] text-xs font-bold rounded-lg">
              Primary Cambridge Y1, Y2, Y3
            </span>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#DFB743]">
              Our School Commitment
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
              &quot;Enroll your child at Radiant International School and witness his/her potential unfold.&quot;
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
              Our school is renowned for its commitment to excellence. We offer a safe, child-centered environment, sound teachers, and modern classrooms.
            </p>
          </div>

          {/* School Uniform & Feature Highlights */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="text-xs font-bold text-[#DFB743] uppercase tracking-wider">
              Enrolling Primary (Cambridge) Y1, Y2, Y3
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] text-slate-200">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DFB743]" />
                <span>Holistic Education</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DFB743]" />
                <span>Child Centered</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DFB743]" />
                <span>Sound Teachers</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DFB743]" />
                <span>Conducive Environment</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DFB743]" />
                <span>Modern Classrooms</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DFB743]" />
                <span>Dell ICT Workstations</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2 text-slate-300">
            <Clock className="w-4 h-4 text-[#DFB743]" />
            <span>Visit our office for forms: <strong>9:00 AM – 3:00 PM</strong></span>
          </div>
          <div className="text-[#DFB743] font-bold">
            +211 923 040 040
          </div>
        </div>
      </div>
    );
  }

  // Type: Classes (Creche, Baby, Middle, Top Class)
  return (
    <div
      className={`relative rounded-3xl overflow-hidden shadow-2xl border-2 border-stone-200 bg-white text-stone-900 p-6 sm:p-8 flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-4">
          <RadiantLogo variant="dark" size="lg" />
          <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold rounded-lg uppercase">
            Admissions Open
          </span>
        </div>

        <div className="space-y-1 mb-4">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B1E3D]">
            Admission Opens For 2026 – 2027
          </h3>
          <p className="text-xs text-stone-600">
            Early Childhood & Primary Foundation Classes in Kololo, Juba
          </p>
        </div>

        {/* 4 Colored Badges exactly matching the real school flyer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="p-3.5 rounded-2xl bg-emerald-50 border-2 border-emerald-500/40">
            <div className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-600 text-white text-xs font-black uppercase mb-1">
              Creche Class
            </div>
            <div className="text-xs font-bold text-emerald-950">18 Months – 2 Years</div>
            <div className="text-[11px] text-emerald-800 mt-0.5">Gentle sensory care & toddler discovery</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-rose-50 border-2 border-rose-500/40">
            <div className="inline-block px-2.5 py-0.5 rounded-md bg-rose-600 text-white text-xs font-black uppercase mb-1">
              Baby Class
            </div>
            <div className="text-xs font-bold text-rose-950">3 Years – 4 Years</div>
            <div className="text-[11px] text-rose-800 mt-0.5">Phonics sounds, pencil play & social habits</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-sky-50 border-2 border-sky-500/40">
            <div className="inline-block px-2.5 py-0.5 rounded-md bg-sky-600 text-white text-xs font-black uppercase mb-1">
              Middle Class
            </div>
            <div className="text-xs font-bold text-sky-950">4 Years – 5 Years</div>
            <div className="text-[11px] text-sky-800 mt-0.5">Early reading, counting & creative expression</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50 border-2 border-amber-500/40">
            <div className="inline-block px-2.5 py-0.5 rounded-md bg-amber-600 text-white text-xs font-black uppercase mb-1">
              Top Class
            </div>
            <div className="text-xs font-bold text-amber-950">5 Years – 6 Years</div>
            <div className="text-[11px] text-amber-800 mt-0.5">Primary transition & Cambridge readiness</div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-[11px] text-stone-700 flex flex-wrap gap-x-4 gap-y-1 justify-center">
          <span className="font-semibold text-[#0B1E3D]">Holistic Education</span>
          <span>•</span>
          <span className="font-semibold text-[#0B1E3D]">Conducive Environment</span>
          <span>•</span>
          <span className="font-semibold text-[#0B1E3D]">Sound Teachers</span>
          <span>•</span>
          <span className="font-semibold text-[#0B1E3D]">Child Centered</span>
          <span>•</span>
          <span className="font-semibold text-[#0B1E3D]">Modern Classrooms</span>
        </div>
      </div>

      <div className="pt-4 border-t border-stone-200 mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="text-stone-700 font-medium">
          Contact us: <strong>(0) 923 040 040</strong> | <strong>(0) 983 040 040</strong>
        </div>
        {onOpenApply && (
          <button
            onClick={onOpenApply}
            className="px-5 py-2 rounded-xl bg-[#0B1E3D] hover:bg-[#132D58] text-white font-bold text-xs shadow cursor-pointer"
          >
            Enroll Now
          </button>
        )}
      </div>
    </div>
  );
};
