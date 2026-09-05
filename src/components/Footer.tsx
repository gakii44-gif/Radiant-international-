import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Award,
  Globe2,
  ChevronRight,
  ArrowUp,
} from 'lucide-react';
import { schoolConfig, navLinks } from '../data/schoolData';
import { RadiantLogo } from './RadiantLogo';

interface FooterProps {
  onOpenApply: () => void;
  onOpenTour: () => void;
  onOpenProspectus: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenApply,
  onOpenTour,
  onOpenProspectus,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#050E1C] text-slate-300 border-t border-[#C59B27]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Accreditation & Quality Standards Ribbon */}
        <div className="pb-12 mb-12 border-b border-white/10">
          <div className="text-center mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFB743]">
              Accreditations & Global Affiliations
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {schoolConfig.accreditation.map((acc, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white flex items-center justify-center space-x-2"
              >
                <Award className="w-4 h-4 text-[#DFB743] flex-shrink-0" />
                <span className="text-left text-[11px] sm:text-xs">{acc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: School Identity & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center">
              <RadiantLogo variant="light" size="lg" />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              An internationally accredited day school committed to academic excellence, character development, student wellbeing, and fostering compassionate global leadership.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-1">
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#DFB743]" />
                <span>Admissions: {schoolConfig.admissionsPhone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#DFB743]" />
                <span>{schoolConfig.admissionsEmail}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#DFB743] mt-0.5" />
                <a
                  href={schoolConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-tight hover:text-[#DFB743] transition-colors"
                >
                  {schoolConfig.address.street}, {schoolConfig.address.district}, {schoolConfig.address.city}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <button
                onClick={onOpenApply}
                className="px-4 py-2 bg-[#C59B27] hover:bg-[#DFB743] text-[#0B1E3D] font-bold rounded-lg transition-colors text-xs"
              >
                Apply Online
              </button>
              <a
                href={schoolConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-[#1877F2]/20 hover:bg-[#1877F2]/40 text-white rounded-lg border border-[#1877F2]/50 transition-colors text-xs inline-flex items-center space-x-1.5"
              >
                <span>Facebook Page</span>
              </a>
              <a
                href={schoolConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-xs inline-flex items-center space-x-1"
              >
                <MapPin className="w-3 h-3 text-[#DFB743]" />
                <span>Map Location</span>
              </a>
            </div>
          </div>

          {/* Col 2: Academics (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Academic Levels
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#academics" className="hover:text-[#DFB743] transition-colors">Creche Class (18m–2y)</a>
              </li>
              <li>
                <a href="#academics" className="hover:text-[#DFB743] transition-colors">Baby Class (3–4y)</a>
              </li>
              <li>
                <a href="#academics" className="hover:text-[#DFB743] transition-colors">Middle Class (4–5y)</a>
              </li>
              <li>
                <a href="#academics" className="hover:text-[#DFB743] transition-colors">Top Class (5–6y)</a>
              </li>
              <li>
                <a href="#academics" className="hover:text-[#DFB743] transition-colors">Cambridge Year 1</a>
              </li>
              <li>
                <a href="#academics" className="hover:text-[#DFB743] transition-colors">Cambridge Year 2</a>
              </li>
              <li>
                <a href="#academics" className="hover:text-[#DFB743] transition-colors">Cambridge Year 3</a>
              </li>
              <li>
                <a href="#academics" className="hover:text-[#DFB743] transition-colors">Dell ICT Computer Lab</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Admissions & Life (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Admissions & Student Life
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#admissions" className="hover:text-[#DFB743] transition-colors">5-Step Admissions Process</a>
              </li>
              <li>
                <button onClick={onOpenTour} className="hover:text-[#DFB743] transition-colors text-left">
                  Book a School Tour
                </button>
              </li>
              <li>
                <a href="#admissions" className="hover:text-[#DFB743] transition-colors">Admissions Guidelines (July 13, 2026)</a>
              </li>
              <li>
                <a href="#student-life" className="hover:text-[#DFB743] transition-colors">Pastoral Care &amp; Wellbeing</a>
              </li>
              <li>
                <a href="#beyond-classroom" className="hover:text-[#DFB743] transition-colors">Co-Curricular Sports & Arts</a>
              </li>
              <li>
                <a href="#campus" className="hover:text-[#DFB743] transition-colors">Campus Facilities & STEM Labs</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Parents & Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Parent Resources
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#parent-hub" className="hover:text-[#DFB743] transition-colors">Academic Term Calendar</a>
              </li>
              <li>
                <a href="#parent-hub" className="hover:text-[#DFB743] transition-colors">School Uniform Guidelines</a>
              </li>
              <li>
                <a href="#parent-hub" className="hover:text-[#DFB743] transition-colors">Bus Routes & GPS Safety</a>
              </li>
              <li>
                <a href="#parent-hub" className="hover:text-[#DFB743] transition-colors">Dining & Cafeteria Menu</a>
              </li>
              <li>
                <a href="#parent-hub" className="hover:text-[#DFB743] transition-colors">Safeguarding & Policies</a>
              </li>
              <li>
                <a href="#news-events" className="hover:text-[#DFB743] transition-colors">News, Stories & Events</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Radiant International School. All Rights Reserved. Est. {schoolConfig.founded}.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#parent-hub" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#parent-hub" className="hover:text-white transition-colors">Safeguarding Policy</a>
            <span>•</span>
            <a href="#parent-hub" className="hover:text-white transition-colors">Terms of Enrollment</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Accessibility</a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-lg bg-white/10 hover:bg-[#C59B27] hover:text-[#0B1E3D] text-white transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
