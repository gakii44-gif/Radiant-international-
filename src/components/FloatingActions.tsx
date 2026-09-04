import React, { useState } from 'react';
import {
  CalendarCheck,
  Sparkles,
  Phone,
  MessageCircle,
  X,
  ChevronUp,
  Camera,
} from 'lucide-react';
import { schoolConfig } from '../data/schoolData';

interface FloatingActionsProps {
  onOpenApply: () => void;
  onOpenTour: () => void;
  onOpenUploadModal?: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenApply,
  onOpenTour,
  onOpenUploadModal,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2 pointer-events-auto">
      {/* Expanded Quick Options */}
      {isExpanded && (
        <div className="bg-[#0B1E3D] border border-[#C59B27]/40 rounded-2xl p-3 shadow-2xl space-y-2 text-white text-xs w-60 animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 font-bold text-[#DFB743]">
            <span>Admissions Fast Access</span>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => {
              setIsExpanded(false);
              onOpenTour();
            }}
            className="w-full text-left p-2 rounded-xl hover:bg-white/10 transition-colors flex items-center space-x-2.5 font-semibold"
          >
            <CalendarCheck className="w-4 h-4 text-[#DFB743]" />
            <span>Book School Tour</span>
          </button>

          <button
            onClick={() => {
              setIsExpanded(false);
              onOpenApply();
            }}
            className="w-full text-left p-2 rounded-xl hover:bg-white/10 transition-colors flex items-center space-x-2.5 font-semibold text-[#DFB743]"
          >
            <Sparkles className="w-4 h-4 text-[#DFB743]" />
            <span>Start Online Application</span>
          </button>

          {onOpenUploadModal && (
            <button
              onClick={() => {
                setIsExpanded(false);
                onOpenUploadModal();
              }}
              className="w-full text-left p-2 rounded-xl hover:bg-white/10 transition-colors flex items-center space-x-2.5 font-semibold text-slate-200 hover:text-white"
            >
              <Camera className="w-4 h-4 text-[#DFB743]" />
              <span>School Photos & Uploads</span>
            </button>
          )}

          <a
            href={`tel:${schoolConfig.admissionsPhone}`}
            className="w-full text-left p-2 rounded-xl hover:bg-white/10 transition-colors flex items-center space-x-2.5 text-slate-300 hover:text-white"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call: {schoolConfig.admissionsPhone}</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center space-x-2">
        <button
          onClick={onOpenApply}
          className="hidden md:flex items-center space-x-1.5 px-4 py-3 bg-[#C59B27] hover:bg-[#DFB743] text-[#0B1E3D] font-bold text-xs rounded-full shadow-2xl transition-transform hover:scale-105"
        >
          <Sparkles className="w-4 h-4" />
          <span>Apply for 2026/27</span>
        </button>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          id="floating-help-btn"
          aria-label="Admissions Quick Actions"
          className="p-3.5 bg-[#0B1E3D] hover:bg-[#132D58] text-white rounded-full border border-[#C59B27]/50 shadow-2xl transition-transform hover:scale-105 flex items-center justify-center cursor-pointer"
        >
          {isExpanded ? (
            <X className="w-5 h-5 text-[#DFB743]" />
          ) : (
            <CalendarCheck className="w-5 h-5 text-[#DFB743]" />
          )}
        </button>
      </div>
    </div>
  );
};
