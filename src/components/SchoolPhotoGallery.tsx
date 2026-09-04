import React, { useState } from 'react';
import {
  Sparkles,
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  UploadCloud,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { useSchoolMedia } from '../hooks/useSchoolMedia';
import { OFFICIAL_SCHOOL_PHOTOS, SchoolPhotoItem } from '../utils/mediaStore';

interface SchoolPhotoGalleryProps {
  onOpenUploadModal: () => void;
}

export const SchoolPhotoGallery: React.FC<SchoolPhotoGalleryProps> = ({
  onOpenUploadModal,
}) => {
  const { photos, getPhotoUrl, hasCustomPhoto, customCount } = useSchoolMedia();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos (12)' },
    { id: 'facilities', label: 'Turf Playground & Campus' },
    { id: 'ict', label: 'Dell ICT Computer Lab (5)' },
    { id: 'academics', label: 'Cambridge Classrooms' },
    { id: 'flyers', label: 'Official Flyers & Notices (5)' },
  ];

  const filteredPhotos =
    activeCategory === 'all'
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const currentLightboxPhoto =
    activeLightboxIndex !== null ? photos[activeLightboxIndex] : null;

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % photos.length);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0B1E3D]/5 border border-[#C59B27]/40 text-[#0B1E3D] text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Authentic Campus Photography</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B1E3D]">
              Life at Radiant International School
            </h2>
            <p className="mt-2 text-stone-600 text-sm max-w-2xl">
              Authentic glimpses of our pupils in uniform, the modern Dell computer laboratory, covered turf play park, and official Cambridge admissions publications in Kololo, Juba.
            </p>
          </div>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <button
              onClick={onOpenUploadModal}
              id="gallery-manage-photos-btn"
              className="px-5 py-2.5 rounded-xl bg-[#0B1E3D] hover:bg-[#132D58] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center space-x-2 cursor-pointer border border-[#C59B27]/40"
            >
              <UploadCloud className="w-4 h-4 text-[#DFB743]" />
              <span>Photo Manager ({customCount}/12 Loaded)</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0B1E3D] text-white shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((item) => {
            const isCustom = hasCustomPhoto(item.slotKey);
            const photoUrl = getPhotoUrl(item.slotKey);
            const globalIndex = photos.findIndex((p) => p.id === item.id);

            return (
              <div
                key={item.id}
                onClick={() => setActiveLightboxIndex(globalIndex)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0B1E3D]/5">
                  <img
                    src={photoUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // If local image not yet loaded, hide image and show branded fallback card
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  {/* Top Badge */}
                  <div className="absolute top-2.5 left-2.5 flex items-center space-x-1.5">
                    <span className="px-2 py-0.5 rounded-md bg-[#0B1E3D]/80 backdrop-blur-md text-[#DFB743] text-[10px] font-bold uppercase tracking-wider border border-white/10">
                      {item.category}
                    </span>
                    {isCustom && (
                      <span className="px-2 py-0.5 rounded-md bg-emerald-600 text-white text-[10px] font-bold flex items-center space-x-1">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        <span>Uploaded</span>
                      </span>
                    )}
                  </div>

                  {/* Zoom Overlay Icon on Hover */}
                  <div className="absolute inset-0 bg-[#0B1E3D]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-2.5 rounded-full bg-white/90 text-[#0B1E3D] shadow-lg transform group-hover:scale-110 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Details Footer */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#0B1E3D] leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-500 font-mono">
                    <span className="truncate max-w-[160px]">{item.originalFileName}</span>
                    <span className="text-[#C59B27] font-semibold font-sans">View &rarr;</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {currentLightboxPhoto && activeLightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content Container */}
            <div className="relative max-w-4xl w-full bg-[#0B1E3D] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]">
              
              <div className="relative flex-1 min-h-0 bg-black/40 flex items-center justify-center p-4 overflow-hidden">
                <img
                  src={getPhotoUrl(currentLightboxPhoto.slotKey)}
                  alt={currentLightboxPhoto.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Caption details */}
              <div className="p-6 bg-[#0B1E3D] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#C59B27] text-[#0B1E3D] text-[10px] font-black uppercase">
                      {currentLightboxPhoto.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {currentLightboxPhoto.originalFileName} ({activeLightboxIndex + 1} of {photos.length})
                    </span>
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-white">
                    {currentLightboxPhoto.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                    {currentLightboxPhoto.description}
                  </p>
                </div>

                <button
                  onClick={onOpenUploadModal}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all flex items-center space-x-1.5 flex-shrink-0"
                >
                  <UploadCloud className="w-3.5 h-3.5 text-[#DFB743]" />
                  <span>Replace This Photo</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
