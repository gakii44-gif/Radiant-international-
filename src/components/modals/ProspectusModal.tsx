import React, { useState } from 'react';
import {
  X,
  FileDown,
  CheckCircle2,
  BookOpen,
  Award,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({ isOpen, onClose }) => {
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [stage, setStage] = useState('Whole School Prospectus (All Divisions)');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  const handleReset = () => {
    setDownloaded(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-stone-200 shadow-2xl overflow-hidden relative my-8">
        
        {/* Header */}
        <div className="bg-[#0B1E3D] text-white p-6 relative">
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#DFB743] mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Official Publications</span>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl font-bold">
            Radiant School Prospectus (2026/2027)
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Download our guide covering curriculum, Dell ICT lab, covered turf play park, and admissions process.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {downloaded ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#0B1E3D]">
                Prospectus Ready!
              </h3>

              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200 text-xs text-stone-700 max-w-md mx-auto space-y-1">
                <div className="font-bold text-[#0B1E3D]">
                  Radiant_International_School_Prospectus_2026.pdf (14.2 MB)
                </div>
                <div className="text-stone-500">
                  A digital copy has also been sent to <strong>{email}</strong>.
                </div>
              </div>

              <div className="pt-2 flex justify-center space-x-3">
                <button
                  onClick={() => {
                    alert('Simulated PDF download started for Radiant International School Prospectus.');
                  }}
                  className="px-5 py-2.5 bg-[#C59B27] hover:bg-[#DFB743] text-[#0B1E3D] font-bold text-xs rounded-xl shadow-sm flex items-center space-x-1.5"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download PDF Again</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs rounded-xl"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleDownload} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Parent / Guardian Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Email Address * (For PDF Delivery)
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah.jenkins@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Division Guide Preferred:
                </label>
                <select
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                >
                  <option value="Complete School Prospectus (Creche – Top Class & Year 1-3)">Complete School Prospectus (Creche – Top Class & Year 1-3)</option>
                  <option value="Early Childhood Discovery Guide (Creche, Baby, Middle, Top Class)">Early Childhood Discovery Guide (Creche, Baby, Middle, Top Class)</option>
                  <option value="Cambridge Primary Prospectus (Year 1, Year 2 & Year 3)">Cambridge Primary Prospectus (Year 1, Year 2 & Year 3)</option>
                  <option value="Dell ICT Computer Lab & Digital Foundations Guide">Dell ICT Computer Lab & Digital Foundations Guide</option>
                </select>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-stone-700 space-y-1">
                <div className="font-bold text-[#0B1E3D] flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>What's inside the 2026/27 Edition:</span>
                </div>
                <div className="text-stone-600 text-[11px] leading-relaxed">
                  • Cambridge Primary Curriculum (English, Math, Science) • Dell ICT Computer Lab syllabus • Early Years developmental milestones • Admissions calendar (opens 13th July 2026) • Campus facilities guide
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#DFB743] to-[#C59B27] hover:from-[#F0CB5E] hover:to-[#D4A735] text-[#0B1E3D] font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Digital Prospectus (Instant PDF)</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
