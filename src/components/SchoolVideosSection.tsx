import React, { useState } from 'react';
import {
  Play,
  ExternalLink,
  Video,
  Sparkles,
  CheckCircle2,
  Share2,
  X,
  Compass,
  Monitor,
  GraduationCap,
  Trees,
  Maximize2,
  RefreshCw,
} from 'lucide-react';
import { officialSchoolVideos, schoolConfig } from '../data/schoolData';
import { SchoolVideo } from '../types';
import { useSchoolMedia } from '../hooks/useSchoolMedia';

interface SchoolVideosSectionProps {
  onOpenTour: () => void;
}

export const SchoolVideosSection: React.FC<SchoolVideosSectionProps> = ({ onOpenTour }) => {
  const { getPhotoUrl } = useSchoolMedia();
  const [activeVideoModal, setActiveVideoModal] = useState<SchoolVideo | null>(null);
  const [inlinePlayingId, setInlinePlayingId] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('campus') || category.toLowerCase().includes('play')) {
      return <Trees className="w-4 h-4 text-[#DFB743]" />;
    }
    if (category.toLowerCase().includes('ict') || category.toLowerCase().includes('technology')) {
      return <Monitor className="w-4 h-4 text-[#DFB743]" />;
    }
    return <GraduationCap className="w-4 h-4 text-[#DFB743]" />;
  };

  const handleShare = (video: SchoolVideo) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(video.url);
      setCopiedLink(video.id);
      setTimeout(() => setCopiedLink(null), 2500);
    }
  };

  const getFacebookEmbedUrl = (url: string, autoplay: boolean = true) => {
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&autoplay=${autoplay ? '1' : '0'}`;
  };

  return (
    <section id="school-videos" className="py-16 md:py-24 bg-[#08172E] text-white relative overflow-hidden border-b border-stone-800">
      {/* Subtle background ambient glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#C59B27]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C59B27]/40 text-[#DFB743] text-xs font-semibold uppercase tracking-wider mb-3">
            <Video className="w-3.5 h-3.5 text-[#DFB743]" />
            <span>Official School Videos &amp; Reels</span>
          </div>
          
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Experience Life at Radiant in Motion
          </h2>
          
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Watch authentic video tours and classroom footage from our Kololo campus in Juba. Tap play to view our covered turf play park, modern Dell ICT computer laboratory, and focused Cambridge classrooms directly on the site.
          </p>
        </div>

        {/* 3 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {officialSchoolVideos.map((video, idx) => {
            const displayPhoto = getPhotoUrl(video.slotKey, video.thumbnail);
            const isPlayingInline = inlinePlayingId === video.id;

            return (
              <div
                key={video.id}
                id={`school-video-card-${idx}`}
                className="group bg-[#0D2244] rounded-2xl overflow-hidden border border-white/10 hover:border-[#C59B27]/60 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Video Media Area: Thumbnail OR Live Facebook Video Player */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  {isPlayingInline ? (
                    <div className="relative w-full h-full bg-black">
                      <iframe
                        src={getFacebookEmbedUrl(video.url, true)}
                        title={video.title}
                        className="w-full h-full border-0"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
                        allowFullScreen={true}
                      />
                      <button
                        onClick={() => setInlinePlayingId(null)}
                        aria-label="Stop video"
                        className="absolute top-2 right-2 p-1.5 rounded-full bg-black/80 hover:bg-black text-white text-xs font-bold transition-all shadow-md z-20 cursor-pointer"
                        title="Close Player"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <img
                        src={displayPhoto}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D2244] via-black/30 to-black/40" />

                      {/* Top Badge: Category & Reel / Video Type */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-md bg-[#0B1E3D]/90 backdrop-blur-md border border-[#C59B27]/30 text-[#DFB743] text-[11px] font-semibold flex items-center space-x-1.5">
                          {getCategoryIcon(video.category)}
                          <span>{video.category}</span>
                        </span>

                        <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold shadow-xs ${
                          video.isReel 
                            ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white' 
                            : 'bg-[#1877F2] text-white'
                        }`}>
                          {video.duration}
                        </span>
                      </div>

                      {/* Centered Play Button Trigger */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={() => setInlinePlayingId(video.id)}
                          aria-label={`Play ${video.title}`}
                          className="w-16 h-16 rounded-full bg-[#C59B27] hover:bg-[#DFB743] text-[#0B1E3D] flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300 cursor-pointer ring-4 ring-white/20"
                        >
                          <Play className="w-7 h-7 fill-current translate-x-0.5" />
                        </button>
                      </div>

                      {/* Bottom Strip */}
                      <div className="absolute bottom-2 left-3 right-3 text-[11px] text-slate-300 flex items-center justify-between">
                        <span className="flex items-center space-x-1.5 text-emerald-400 font-medium">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>Click to Play on Site</span>
                        </span>
                        <span className="text-slate-400">Kololo Campus</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#DFB743] transition-colors leading-snug">
                      {video.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          if (isPlayingInline) {
                            setInlinePlayingId(null);
                          } else {
                            setInlinePlayingId(video.id);
                          }
                        }}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center space-x-1.5 cursor-pointer ${
                          isPlayingInline
                            ? 'bg-rose-600 hover:bg-rose-700 text-white'
                            : 'bg-[#C59B27] hover:bg-[#DFB743] text-[#0B1E3D]'
                        }`}
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>{isPlayingInline ? 'Stop Video' : 'Play Video'}</span>
                      </button>

                      <button
                        onClick={() => setActiveVideoModal(video)}
                        className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-[#DFB743]" />
                        <span>Theater Mode</span>
                      </button>
                    </div>

                    <div className="flex items-center space-x-2">
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-xl bg-[#1877F2]/20 hover:bg-[#1877F2]/40 text-blue-200 hover:text-white border border-[#1877F2]/40 text-xs font-medium transition-colors flex items-center justify-center space-x-1.5"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        <span>Open in Facebook</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>

                      <button
                        onClick={() => handleShare(video)}
                        title="Copy video link"
                        className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {copiedLink === video.id && (
                      <p className="text-[11px] text-emerald-400 text-center font-medium">
                        ✓ Facebook link copied to clipboard!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info strip about official Facebook page */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0D2244]/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#1877F2]/20 border border-[#1877F2]/40 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 fill-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center space-x-2">
                <span>Radiant International School - Official Facebook Page</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
              <p className="text-xs text-slate-300">
                Follow our official social page for live class videos, sports highlights, holiday notices, and admissions updates.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <a
              href={schoolConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors flex items-center space-x-2"
            >
              <span>Visit Official Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenTour}
              className="px-4 py-2.5 rounded-xl bg-[#C59B27] hover:bg-[#DFB743] text-[#0B1E3D] text-xs font-bold transition-colors flex items-center space-x-2 cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Book In-Person Tour</span>
            </button>
          </div>
        </div>
      </div>

      {/* Video Preview Modal: Direct Facebook Video Player */}
      {activeVideoModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="bg-[#0B1E3D] border border-[#C59B27]/40 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#08172E]">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#C59B27] text-[#0B1E3D]">
                  {activeVideoModal.duration}
                </span>
                <span className="text-xs text-slate-300">{activeVideoModal.category}</span>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                aria-label="Close preview modal"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Embedded Live Video Player */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
              <iframe
                src={getFacebookEmbedUrl(activeVideoModal.url, true)}
                title={activeVideoModal.title}
                className="w-full h-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
                allowFullScreen={true}
              />
            </div>

            {/* Modal Info & CTA */}
            <div className="p-5 sm:p-6 space-y-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  {activeVideoModal.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {activeVideoModal.description}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1.5">
                <div className="font-bold text-[#DFB743] flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DFB743]" />
                  <span>Campus Location &amp; Admissions Scope</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Kololo Area, off Airport Road next to Regency Hotel, Juba, South Sudan.
                  Radiant International School offers Early Childhood Education (Creche, Baby, Middle, Top Class) and Cambridge Primary (Year 1, Year 2, and Year 3).
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={activeVideoModal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-bold text-center flex items-center justify-center space-x-2 transition-all shadow-lg"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Watch on Facebook Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => {
                    setActiveVideoModal(null);
                    onOpenTour();
                  }}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-gradient-to-r from-[#DFB743] to-[#C59B27] hover:from-[#F0CB5E] hover:to-[#D4A735] text-[#0B1E3D] text-xs font-bold transition-all cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Book In-Person Visit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
