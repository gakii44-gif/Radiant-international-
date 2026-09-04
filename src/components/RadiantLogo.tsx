import React from 'react';

interface RadiantLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'light' | 'dark' | 'full';
}

export const RadiantLogo: React.FC<RadiantLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  variant = 'dark',
}) => {
  const dimensionMap = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const currentDimension = dimensionMap[size];

  return (
    <div className={`inline-flex items-center space-x-3 select-none ${className}`}>
      {/* Official School Crest Emblem */}
      <div className={`relative ${currentDimension} flex-shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Laurel Wreath / Golden Wheat Garland */}
          <g transform="translate(100, 95)">
            {/* Left Laurel Branch */}
            <path
              d="M -60 30 C -85 -10, -75 -60, -35 -85 C -45 -70, -48 -45, -30 -25 C -50 -10, -55 15, -35 35 Z"
              fill="#D4AF37"
              opacity="0.95"
            />
            <path
              d="M -72 5 C -90 -20, -75 -55, -45 -75 C -55 -55, -50 -30, -38 -15 Z"
              fill="#F5D061"
            />
            {/* Right Laurel Branch */}
            <path
              d="M 60 30 C 85 -10, 75 -60, 35 -85 C 45 -70, 48 -45, 30 -25 C 50 -10, 55 15, 35 35 Z"
              fill="#D4AF37"
              opacity="0.95"
            />
            <path
              d="M 72 5 C 90 -20, 75 -55, 45 -75 C 55 -55, 50 -30, 38 -15 Z"
              fill="#F5D061"
            />
          </g>

          {/* Outer Circular Navy Medallion Ring */}
          <circle cx="100" cy="95" r="72" fill="#0B1E3D" stroke="#D4AF37" strokeWidth="4" />
          <circle cx="100" cy="95" r="66" fill="none" stroke="#F5D061" strokeWidth="1" strokeDasharray="2,2" />

          {/* Curved Text along Outer Ring: RADIANT INTERNATIONAL SCHOOL */}
          <path
            id="textPathTop"
            d="M 36 95 A 64 64 0 0 1 164 95"
            fill="none"
          />
          <text fill="#FFFFFF" fontSize="10.5" fontWeight="800" letterSpacing="2.2" textAnchor="middle">
            <textPath href="#textPathTop" startOffset="50%">
              RADIANT INTERNATIONAL SCHOOL
            </textPath>
          </text>

          {/* Central Shield with Gold Border */}
          <path
            d="M 68 62 C 68 62, 100 52, 100 52 C 100 52, 132 62, 132 62 C 132 100, 118 126, 100 138 C 82 126, 68 100, 68 62 Z"
            fill="#061226"
            stroke="#D4AF37"
            strokeWidth="3.5"
          />
          <path
            d="M 72 66 C 72 66, 100 57, 100 57 C 100 57, 128 66, 128 66 C 128 98, 115 121, 100 132 C 85 121, 72 98, 72 66 Z"
            fill="none"
            stroke="#F5D061"
            strokeWidth="1.2"
          />

          {/* Emblem 1: Golden Flame & Torch of Enlightenment */}
          {/* Torch Flame */}
          <path
            d="M 100 63 C 96 70, 93 74, 96 78 C 98 81, 102 81, 104 78 C 107 74, 104 70, 100 63 Z"
            fill="#FFAE1A"
          />
          <path
            d="M 100 66 C 98 71, 96 73, 98 76 C 99 78, 101 78, 102 76 C 104 73, 102 71, 100 66 Z"
            fill="#FFE17D"
          />
          {/* Torch Bowl */}
          <path
            d="M 94 78 L 106 78 L 103 84 L 97 84 Z"
            fill="#D4AF37"
            stroke="#FFE17D"
            strokeWidth="0.8"
          />

          {/* Emblem 2: Open Book of Knowledge */}
          <g transform="translate(100, 96)">
            {/* Left Page */}
            <path
              d="M -1 0 C -6 -3, -16 -4, -20 -1 L -20 16 C -16 13, -6 14, -1 17 Z"
              fill="#FFFFFF"
              stroke="#D4AF37"
              strokeWidth="1.2"
            />
            {/* Right Page */}
            <path
              d="M 1 0 C 6 -3, 16 -4, 20 -1 L 20 16 C 16 13, 6 14, 1 17 Z"
              fill="#FFFFFF"
              stroke="#D4AF37"
              strokeWidth="1.2"
            />
            {/* Book Spine / Page Lines */}
            <line x1="-16" y1="4" x2="-4" y2="3" stroke="#0B1E3D" strokeWidth="1" strokeLinecap="round" />
            <line x1="-16" y1="8" x2="-4" y2="7" stroke="#0B1E3D" strokeWidth="1" strokeLinecap="round" />
            <line x1="-16" y1="12" x2="-4" y2="11" stroke="#0B1E3D" strokeWidth="1" strokeLinecap="round" />
            <line x1="4" y1="3" x2="16" y2="4" stroke="#0B1E3D" strokeWidth="1" strokeLinecap="round" />
            <line x1="4" y1="7" x2="16" y2="8" stroke="#0B1E3D" strokeWidth="1" strokeLinecap="round" />
            <line x1="4" y1="11" x2="16" y2="12" stroke="#0B1E3D" strokeWidth="1" strokeLinecap="round" />
          </g>

          {/* Emblem 3: Classical Pillar / Greek Column of Integrity */}
          <g transform="translate(100, 120)">
            {/* Column Capital */}
            <path d="M -14 -4 C -14 -7, -10 -7, -8 -4 L 8 -4 C 10 -7, 14 -7, 14 -4 L -14 -4 Z" fill="#D4AF37" />
            <rect x="-12" y="-4" width="24" height="2" fill="#FFE17D" />
            {/* Column Fluted Shaft */}
            <rect x="-9" y="-2" width="18" height="7" fill="#E2E8F0" />
            <line x1="-5" y1="-2" x2="-5" y2="5" stroke="#0B1E3D" strokeWidth="1" />
            <line x1="0" y1="-2" x2="0" y2="5" stroke="#0B1E3D" strokeWidth="1" />
            <line x1="5" y1="-2" x2="5" y2="5" stroke="#0B1E3D" strokeWidth="1" />
            {/* Column Base / Plinth */}
            <rect x="-13" y="5" width="26" height="3" fill="#D4AF37" rx="0.5" />
          </g>

          {/* Lower Ribbon Banner: "Where Every Child Shines" */}
          <g transform="translate(100, 160)">
            {/* Ribbon Tails */}
            <path d="M -70 -5 L -84 10 L -66 12 L -68 0 Z" fill="#071328" stroke="#D4AF37" strokeWidth="1" />
            <path d="M 70 -5 L 84 10 L 66 12 L 68 0 Z" fill="#071328" stroke="#D4AF37" strokeWidth="1" />
            {/* Ribbon Center Body */}
            <path
              d="M -68 -6 Q 0 -12 68 -6 L 62 14 Q 0 8 -62 14 Z"
              fill="#0B1E3D"
              stroke="#D4AF37"
              strokeWidth="2"
            />
            {/* Ribbon Slogan Text */}
            <path id="ribbonPath" d="M -58 7 Q 0 1 58 7" fill="none" />
            <text fill="#FFFFFF" fontSize="8.5" fontWeight="700" fontStyle="italic" textAnchor="middle">
              <textPath href="#ribbonPath" startOffset="50%">
                &quot;Where Every Child Shines&quot;
              </textPath>
            </text>
          </g>
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <div
            className={`font-serif font-black tracking-tight leading-none ${
              variant === 'light' ? 'text-white' : 'text-[#0B1E3D]'
            } ${size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl'}`}
          >
            RADIANT
          </div>
          <div
            className={`text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase leading-tight ${
              variant === 'light' ? 'text-[#DFB743]' : 'text-[#C59B27]'
            }`}
          >
            INTERNATIONAL SCHOOL
          </div>
          <div
            className={`text-[8px] sm:text-[9px] italic font-serif leading-none mt-0.5 ${
              variant === 'light' ? 'text-slate-300' : 'text-stone-500'
            }`}
          >
            &quot;Where Every Child Shines&quot;
          </div>
        </div>
      )}
    </div>
  );
};
