import React, { useState } from 'react';

interface RadiantLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showText?: boolean;
  variant?: 'light' | 'dark' | 'full';
}

export const RadiantLogo: React.FC<RadiantLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  variant = 'dark',
}) => {
  const [imgError, setImgError] = useState(false);

  const dimensionMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14 sm:w-16 sm:h-16',
    lg: 'w-20 h-20 sm:w-24 sm:h-24',
    xl: 'w-28 h-28 sm:w-32 sm:h-32',
    '2xl': 'w-36 h-36 sm:w-44 sm:h-44',
  };

  const currentDimension = dimensionMap[size];

  return (
    <div className={`inline-flex items-center space-x-3 select-none ${className}`}>
      {/* Official School Crest Emblem */}
      <div className={`relative ${currentDimension} flex-shrink-0 flex items-center justify-center`}>
        {!imgError ? (
          <img
            src="/radiant-crest.svg"
            alt="Radiant International School Crest"
            onError={() => setImgError(true)}
            className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-200 group-hover:scale-105"
          />
        ) : (
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-md"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Laurel Garland */}
            <g transform="translate(100, 95)">
              <path
                d="M -60 30 C -85 -10, -75 -60, -35 -85 C -45 -70, -48 -45, -30 -25 C -50 -10, -55 15, -35 35 Z"
                fill="#D4AF37"
              />
              <path
                d="M 60 30 C 85 -10, 75 -60, 35 -85 C 45 -70, 48 -45, 30 -25 C 50 -10, 55 15, 35 35 Z"
                fill="#D4AF37"
              />
            </g>
            <circle cx="100" cy="95" r="70" fill="#0B1E3D" stroke="#D4AF37" strokeWidth="4" />
            <circle cx="100" cy="95" r="54" fill="#071328" stroke="#DFB743" strokeWidth="1.5" />
            <text x="100" y="55" fill="#FFFFFF" fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="0.8">
              RADIANT INTL
            </text>
            <path
              d="M 80 82 C 80 82 100 75 100 75 C 100 75 120 82 120 82 C 120 115 110 135 100 145 C 90 135 80 115 80 82 Z"
              fill="#0B1E3D"
              stroke="#D4AF37"
              strokeWidth="2.5"
            />
            {/* Torch flame */}
            <path
              d="M 100 78 C 96 86 93 91 96 95 C 98 98 102 98 104 95 C 107 91 104 86 100 78 Z"
              fill="#FFB703"
            />
            {/* Book */}
            <rect x="88" y="96" width="24" height="10" fill="#FFFFFF" rx="1" />
            {/* Pillar */}
            <rect x="94" y="108" width="12" height="16" fill="#E2E8F0" />
            <rect x="90" y="124" width="20" height="4" fill="#D4AF37" />
          </svg>
        )}
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <div
            className={`font-serif font-black tracking-tight leading-none ${
              variant === 'light' ? 'text-white' : 'text-[#0B1E3D]'
            } ${size === 'sm' ? 'text-base' : size === 'lg' || size === 'xl' || size === '2xl' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}
          >
            RADIANT
          </div>
          <div
            className={`text-[9px] sm:text-[11px] font-bold tracking-[0.22em] uppercase leading-tight ${
              variant === 'light' ? 'text-[#DFB743]' : 'text-[#C59B27]'
            }`}
          >
            INTERNATIONAL SCHOOL
          </div>
          <div
            className={`text-[8.5px] sm:text-[10px] italic font-serif leading-none mt-0.5 ${
              variant === 'light' ? 'text-slate-300' : 'text-stone-600'
            }`}
          >
            &quot;Where Every Child Shines&quot;
          </div>
        </div>
      )}
    </div>
  );
};
