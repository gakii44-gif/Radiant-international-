import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  Calendar,
  Sparkles,
  Search,
  Lock,
  Compass,
  GraduationCap,
  Users,
  Building2,
  BookOpen,
  Camera,
} from 'lucide-react';
import { RadiantLogo } from './RadiantLogo';
import { navLinks, schoolConfig } from '../data/schoolData';
import { NavLinkItem } from '../types';

interface HeaderProps {
  onOpenApply: () => void;
  onOpenTour: () => void;
  onOpenProspectus: () => void;
  onOpenUploadModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenApply,
  onOpenTour,
  onOpenProspectus,
  onOpenUploadModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getMenuIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'about':
        return <Compass className="w-4 h-4 text-[#C59B27]" />;
      case 'academics':
        return <GraduationCap className="w-4 h-4 text-[#C59B27]" />;
      case 'admissions':
        return <Sparkles className="w-4 h-4 text-[#C59B27]" />;
      case 'student life':
        return <Users className="w-4 h-4 text-[#C59B27]" />;
      case 'campus':
        return <Building2 className="w-4 h-4 text-[#C59B27]" />;
      default:
        return <BookOpen className="w-4 h-4 text-[#C59B27]" />;
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1E3D]/95 backdrop-blur-md shadow-lg py-2.5 border-b border-[#C59B27]/20 text-white'
          : 'bg-[#0B1E3D] text-white py-3 md:py-4 border-b border-white/10'
      }`}
    >
      {/* Top utility bar on desktop */}
      {!isScrolled && (
        <div className="hidden lg:block border-b border-white/10 pb-2 mb-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-slate-300">
            <div className="flex items-center space-x-6">
              <a
                href={`tel:${schoolConfig.admissionsPhone}`}
                className="flex items-center space-x-1.5 hover:text-[#C59B27] transition-colors"
                id="header-phone-link"
              >
                <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Admissions: {schoolConfig.admissionsPhone}</span>
              </a>
              <a
                href={`mailto:${schoolConfig.admissionsEmail}`}
                className="flex items-center space-x-1.5 hover:text-[#C59B27] transition-colors"
                id="header-email-link"
              >
                <Mail className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>{schoolConfig.admissionsEmail}</span>
              </a>
              <span className="text-white/40">|</span>
              <span className="text-slate-300 font-medium tracking-wide">
                Kololo, Juba • Cambridge International Registered Centre
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href={schoolConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                id="header-facebook-link"
                className="text-blue-300 hover:text-white transition-colors flex items-center space-x-1 font-semibold"
              >
                <span>Facebook</span>
              </a>
              <span className="text-white/30">•</span>
              <a
                href={schoolConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="header-map-link"
                className="hover:text-[#C59B27] transition-colors flex items-center space-x-1 font-medium"
              >
                <span>Find Us</span>
              </a>
              <span className="text-white/30">•</span>
              <button
                onClick={onOpenProspectus}
                id="header-prospectus-btn"
                className="hover:text-[#C59B27] transition-colors flex items-center space-x-1 cursor-pointer font-medium"
              >
                <span>Prospectus</span>
              </button>
              {onOpenUploadModal && (
                <>
                  <span className="text-white/30">•</span>
                  <button
                    onClick={onOpenUploadModal}
                    id="header-photo-manager-btn"
                    className="text-[#DFB743] hover:text-white transition-colors flex items-center space-x-1 cursor-pointer font-medium"
                  >
                    <Camera className="w-3 h-3 text-[#DFB743]" />
                    <span>School Photos</span>
                  </button>
                </>
              )}
              <span className="text-white/30">•</span>
              <a
                href="#parent-hub"
                id="header-portal-link"
                className="bg-white/10 hover:bg-[#C59B27] hover:text-[#0B1E3D] px-2.5 py-0.5 rounded text-[11px] font-semibold tracking-wide transition-all flex items-center space-x-1"
              >
                <Lock className="w-3 h-3" />
                <span>Parent Portal</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & School Crest */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center group focus:outline-none"
          >
            <RadiantLogo variant="light" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link: NavLinkItem) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-[#C59B27] rounded-md transition-colors inline-flex items-center space-x-1 focus:outline-none"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-[#C59B27] text-[#0B1E3D] rounded-full">
                      {link.badge}
                    </span>
                  )}
                  {link.children && (
                    <ChevronDown className="w-3.5 h-3.5 ml-0.5 opacity-70 group-hover:opacity-100 transition-transform" />
                  )}
                </a>

                {/* Desktop Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div
                    className="absolute left-0 mt-1 w-72 rounded-xl bg-[#0B1E3D] border border-[#C59B27]/30 shadow-2xl p-3 animate-in fade-in slide-in-from-top-2 duration-150"
                    role="menu"
                  >
                    <div className="text-[11px] font-semibold text-[#C59B27] uppercase tracking-wider px-3 pt-1 pb-2 border-b border-white/10 flex items-center space-x-2">
                      {getMenuIcon(link.label)}
                      <span>{link.label} Overview</span>
                    </div>
                    <div className="mt-2 space-y-1">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => {
                            setActiveDropdown(null);
                            if (child.href === '#tour-modal') onOpenTour();
                            if (child.href === '#apply-modal') onOpenApply();
                          }}
                          className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors group/item"
                        >
                          <div className="text-xs font-semibold text-white group-hover/item:text-[#C59B27]">
                            {child.label}
                          </div>
                          {child.description && (
                            <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                              {child.description}
                            </div>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenTour}
              id="header-cta-tour"
              className="px-4 py-2 text-xs md:text-sm font-semibold text-white border border-[#C59B27]/80 hover:bg-[#C59B27]/20 rounded-lg transition-all duration-200 cursor-pointer shadow-sm"
            >
              Book a School Tour
            </button>
            <button
              onClick={onOpenApply}
              id="header-cta-apply"
              className="px-4 md:px-5 py-2 text-xs md:text-sm font-bold text-[#0B1E3D] bg-gradient-to-r from-[#DFB743] to-[#C59B27] hover:from-[#F0CB5E] hover:to-[#D4A735] rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center space-x-1.5"
            >
              <span>Apply Now</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex xl:hidden items-center space-x-2">
            <button
              onClick={onOpenApply}
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-[#0B1E3D] bg-[#C59B27] rounded-md"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-full bg-[#0B1E3D] border-b border-[#C59B27]/30 shadow-2xl max-h-[85vh] overflow-y-auto p-5 text-white animate-in slide-in-from-top duration-200">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                id="mobile-drawer-apply-btn"
                className="w-full py-2.5 px-3 rounded-lg text-xs font-bold text-[#0B1E3D] bg-[#C59B27] text-center"
              >
                Apply Now
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTour();
                }}
                id="mobile-drawer-tour-btn"
                className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-white border border-[#C59B27] text-center"
              >
                Book Tour
              </button>
            </div>

            <div className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-white/5 pb-2">
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold text-slate-100 hover:text-[#C59B27]"
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[10px] bg-[#C59B27] text-[#0B1E3D] px-2 py-0.5 rounded-full font-bold">
                        {link.badge}
                      </span>
                    )}
                  </a>
                  {link.children && (
                    <div className="pl-3 mt-1 space-y-1 border-l-2 border-[#C59B27]/30">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            if (child.href === '#tour-modal') onOpenTour();
                            if (child.href === '#apply-modal') onOpenApply();
                          }}
                          className="block py-1 text-xs text-slate-300 hover:text-[#C59B27]"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 text-xs text-slate-300 space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Admissions: {schoolConfig.admissionsPhone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>{schoolConfig.admissionsEmail}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={schoolConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 text-center text-xs font-semibold text-white bg-[#1877F2]/20 rounded-lg border border-[#1877F2]/40"
                >
                  Facebook Page
                </a>
                <a
                  href={schoolConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 text-center text-xs font-semibold text-[#DFB743] bg-white/5 rounded-lg border border-white/20"
                >
                  Map & Directions
                </a>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProspectus();
                }}
                className="w-full mt-2 py-2 text-center text-xs font-semibold text-[#C59B27] bg-white/5 rounded-lg border border-[#C59B27]/30"
              >
                Download Official Prospectus (PDF)
              </button>
              {onOpenUploadModal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenUploadModal();
                  }}
                  className="w-full mt-1.5 py-2 text-center text-xs font-semibold text-[#DFB743] bg-[#C59B27]/10 hover:bg-[#C59B27]/20 rounded-lg border border-[#C59B27]/40 flex items-center justify-center space-x-1.5"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Manage Real School Photos</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
