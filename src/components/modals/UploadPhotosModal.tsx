import React, { useState, useRef } from 'react';
import {
  X,
  UploadCloud,
  CheckCircle2,
  Image as ImageIcon,
  FolderSync,
  Trash2,
  Sparkles,
  Info,
  Check,
} from 'lucide-react';
import { useSchoolMedia } from '../../hooks/useSchoolMedia';
import { OFFICIAL_SCHOOL_PHOTOS, SchoolPhotoItem } from '../../utils/mediaStore';

interface UploadPhotosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UploadPhotosModal: React.FC<UploadPhotosModalProps> = ({ isOpen, onClose }) => {
  const { photos, getPhotoUrl, hasCustomPhoto, storePhotoFile, matchFileToSlot, customCount, clearAllCustomPhotos } =
    useSchoolMedia();

  const [dragActive, setDragActive] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const singleFileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    let matchedCount = 0;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // Try to match file name to photo slot
      const matched = matchFileToSlot(file.name);
      if (matched) {
        await storePhotoFile(matched.slotKey, file);
        matchedCount++;
      } else if (selectedSlot) {
        // If user explicitly clicked a slot and dropped
        await storePhotoFile(selectedSlot, file);
        matchedCount++;
      }
    }

    if (matchedCount > 0) {
      setUploadStatus(`Successfully loaded ${matchedCount} photo(s)! They are now active across the website.`);
    } else {
      setUploadStatus(
        'Uploaded file name did not match an automatic slot. Click any photo slot below to assign it directly.'
      );
    }
    setTimeout(() => setUploadStatus(null), 5000);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleSlotClick = (slotKey: string) => {
    setSelectedSlot(slotKey);
    singleFileInputRef.current?.click();
  };

  const handleSingleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && selectedSlot) {
      await storePhotoFile(selectedSlot, e.target.files[0]);
      setUploadStatus(`Photo assigned to slot!`);
      setTimeout(() => setUploadStatus(null), 3000);
      setSelectedSlot(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#0B1E3D] text-white px-6 py-5 flex items-center justify-between border-b border-[#C59B27]/30">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-[#C59B27]/20 border border-[#C59B27]/40 text-[#DFB743]">
              <ImageIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span>School Photo & Asset Manager</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#C59B27] text-[#0B1E3D] text-xs font-black">
                  {customCount}/12 Active
                </span>
              </h3>
              <p className="text-xs text-slate-300">
                Load authentic photos for Radiant International School (Playground, Dell ICT Lab, Classrooms, Flyers)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Status Message */}
          {uploadStatus && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-semibold flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>{uploadStatus}</span>
            </div>
          )}

          {/* Quick Drag & Drop Upload Zone */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all ${
              dragActive
                ? 'border-[#C59B27] bg-[#DFB743]/10 scale-[1.01]'
                : 'border-stone-300 hover:border-[#C59B27] bg-stone-50'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />
            <input
              ref={singleFileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleSingleFileChange}
            />

            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#0B1E3D]/5 flex items-center justify-center text-[#0B1E3D]">
                <UploadCloud className="w-6 h-6 text-[#C59B27]" />
              </div>
              <h4 className="font-bold text-sm text-[#0B1E3D]">
                Drag & Drop your 12 school photo files here
              </h4>
              <p className="text-xs text-stone-500 max-w-md">
                Select or drop your files (<code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">FB_IMG_...</code>, <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">Screenshot_...</code>, or <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">20260902_...</code>) to instantly display them across the site.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-5 py-2 rounded-xl bg-[#0B1E3D] hover:bg-[#132D58] text-white text-xs font-bold transition-all shadow cursor-pointer flex items-center space-x-2"
                >
                  <FolderSync className="w-4 h-4 text-[#DFB743]" />
                  <span>Choose Files from Device</span>
                </button>
                {customCount > 0 && (
                  <button
                    type="button"
                    onClick={clearAllCustomPhotos}
                    className="px-4 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold transition-all border border-rose-200 flex items-center space-x-1.5"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Reset to Defaults</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Tips / Info Box */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs space-y-1">
            <div className="flex items-center space-x-2 font-bold text-[#0B1E3D]">
              <Info className="w-4 h-4 text-[#C59B27]" />
              <span>Two Ways to Add Photos:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-stone-700 pl-1">
              <li>
                <strong>Option 1 (Instant in Browser):</strong> Drop or select your photos in this window. They are saved in your browser&apos;s IndexedDB and immediately displayed across all sections.
              </li>
              <li>
                <strong>Option 2 (Permanent in Codebase):</strong> You can also drag the image files into the <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold">public/images/</code> folder in the AI Studio File Explorer on the left sidebar.
              </li>
            </ul>
          </div>

          {/* Grid of 12 Photo Slots */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-serif font-bold text-sm text-[#0B1E3D]">
                12 Official School Photo Slots
              </h4>
              <span className="text-xs text-stone-500">
                Click any slot below to assign a photo directly
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {photos.map((item: SchoolPhotoItem) => {
                const isLoaded = hasCustomPhoto(item.slotKey);
                const currentUrl = getPhotoUrl(item.slotKey);

                return (
                  <div
                    key={item.id}
                    onClick={() => handleSlotClick(item.slotKey)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                      isLoaded
                        ? 'bg-emerald-50/50 border-emerald-300 hover:border-emerald-500'
                        : 'bg-stone-50 border-stone-200 hover:border-[#C59B27] hover:bg-amber-50/30'
                    }`}
                  >
                    <div className="flex items-start space-x-3 mb-2">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-stone-200 flex-shrink-0 border border-stone-300 relative">
                        <img
                          src={currentUrl}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback if file not yet on disk
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-[#0B1E3D]/20 text-white text-[9px] font-bold text-center p-1">
                          {isLoaded ? 'Loaded' : 'Slot'}
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-[#C59B27]">
                            {item.category}
                          </span>
                          {isLoaded ? (
                            <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                              <Check className="w-3 h-3" />
                              <span>Active</span>
                            </span>
                          ) : (
                            <span className="text-[10px] text-stone-400">Ready</span>
                          )}
                        </div>
                        <h5 className="text-xs font-bold text-stone-900 truncate mt-0.5" title={item.title}>
                          {item.title}
                        </h5>
                        <p className="text-[10px] text-stone-500 line-clamp-1 font-mono mt-0.5">
                          {item.originalFileName}
                        </p>
                      </div>
                    </div>

                    <div className="text-[10px] text-stone-600 bg-white/60 p-1.5 rounded-lg border border-stone-200/60 line-clamp-2">
                      {item.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-stone-100 px-6 py-4 border-t border-stone-200 flex items-center justify-between">
          <div className="text-xs text-stone-500">
            Radiant International School • Kololo Area, off Airport Road, Juba
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#0B1E3D] hover:bg-[#132D58] text-white text-xs sm:text-sm font-bold transition-all shadow cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
