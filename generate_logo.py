import subprocess

svg_content = '''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <!-- Gradients for Gold Lustre -->
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F9E27D" />
      <stop offset="40%" stop-color="#D4AF37" />
      <stop offset="70%" stop-color="#AA7C11" />
      <stop offset="100%" stop-color="#E5C158" />
    </linearGradient>

    <linearGradient id="torchGrad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#FF5400" />
      <stop offset="45%" stop-color="#FF9E00" />
      <stop offset="85%" stop-color="#FFD000" />
      <stop offset="100%" stop-color="#FFF3B0" />
    </linearGradient>

    <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFE600" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#FF5400" stop-opacity="0"/>
    </radialGradient>

    <!-- Curved Text Paths -->
    <path id="topTextArc" d="M 115 300 A 185 185 0 1 1 485 300" fill="none" />
    <path id="ribbonArc" d="M 130 478 Q 300 520 470 478" fill="none" />
    
    <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
  </defs>

  <g filter="url(#dropShadow)">
    <!-- LEFT LAUREL WREATH BRANCH -->
    <g fill="url(#goldGrad)" stroke="#8C660D" stroke-width="1.2">
      <!-- Stem -->
      <path d="M 180 430 C 120 380 90 280 120 170 C 135 130 165 95 200 70" fill="none" stroke="url(#goldGrad)" stroke-width="7" stroke-linecap="round"/>
      
      <!-- Leaf Pairs Left -->
      <!-- Bottom leaves -->
      <path d="M 175 435 C 150 440 130 425 140 405 C 155 405 170 420 175 435 Z" />
      <path d="M 160 415 C 130 410 115 390 128 375 C 145 380 155 400 160 415 Z" />
      <path d="M 145 385 C 115 375 105 355 120 340 C 135 350 142 370 145 385 Z" />
      <path d="M 135 355 C 105 340  95 320 110 305 C 128 315 132 340 135 355 Z" />
      <path d="M 125 320 C  95 300  90 275 108 265 C 122 280 124 305 125 320 Z" />
      <path d="M 122 280 C  92 260  90 235 110 225 C 122 240 122 265 122 280 Z" />
      <path d="M 125 240 C  98 215 100 190 120 185 C 130 200 128 225 125 240 Z" />
      <path d="M 132 200 C 110 175 118 150 138 150 C 145 168 140 190 132 200 Z" />
      <path d="M 148 160 C 130 135 142 115 162 118 C 166 135 158 152 148 160 Z" />
      <path d="M 170 125 C 155 100 172  85 190  92 C 190 108 180 120 170 125 Z" />
      <path d="M 200  95 C 190  75 210  60 226  72 C 222  88 210  95 200  95 Z" />
      <!-- Top Tip Leaf -->
      <path d="M 226  72 C 235  50 250  55 245  75 C 238  82 230  80 226  72 Z" />
      
      <!-- Inner leaves facing ring -->
      <path d="M 160 395 C 165 375 180 370 188 385 C 182 400 168 402 160 395 Z" />
      <path d="M 148 360 C 155 340 170 338 178 352 C 170 368 156 368 148 360 Z" />
      <path d="M 140 320 C 150 300 165 300 172 315 C 162 330 148 328 140 320 Z" />
      <path d="M 138 275 C 150 255 168 258 172 272 C 162 288 148 285 138 275 Z" />
      <path d="M 142 230 C 156 212 174 218 176 232 C 165 248 150 242 142 230 Z" />
      <path d="M 152 188 C 170 175 186 182 186 198 C 174 210 160 202 152 188 Z" />
      <path d="M 172 150 C 190 140 205 150 202 166 C 190 175 178 165 172 150 Z" />
    </g>

    <!-- RIGHT LAUREL WREATH BRANCH -->
    <g fill="url(#goldGrad)" stroke="#8C660D" stroke-width="1.2">
      <!-- Stem -->
      <path d="M 420 430 C 480 380 510 280 480 170 C 465 130 435 95 400 70" fill="none" stroke="url(#goldGrad)" stroke-width="7" stroke-linecap="round"/>
      
      <!-- Leaf Pairs Right -->
      <path d="M 425 435 C 450 440 470 425 460 405 C 445 405 430 420 425 435 Z" />
      <path d="M 440 415 C 470 410 485 390 472 375 C 455 380 445 400 440 415 Z" />
      <path d="M 455 385 C 485 375 495 355 480 340 C 465 350 458 370 455 385 Z" />
      <path d="M 465 355 C 495 340 505 320 490 305 C 472 315 468 340 465 355 Z" />
      <path d="M 475 320 C 505 300 510 275 492 265 C 478 280 476 305 475 320 Z" />
      <path d="M 478 280 C 508 260 510 235 490 225 C 478 240 478 265 478 280 Z" />
      <path d="M 475 240 C 502 215 500 190 480 185 C 470 200 472 225 475 240 Z" />
      <path d="M 468 200 C 490 175 482 150 462 150 C 455 168 460 190 468 200 Z" />
      <path d="M 452 160 C 470 135 458 115 438 118 C 434 135 442 152 452 160 Z" />
      <path d="M 430 125 C 445 100 428  85 410  92 C 410 108 420 120 430 125 Z" />
      <path d="M 400  95 C 410  75 390  60 374  72 C 378  88 390  95 400  95 Z" />
      <!-- Top Tip Leaf -->
      <path d="M 374  72 C 365  50 350  55 355  75 C 362  82 370  80 374  72 Z" />
      
      <!-- Inner leaves facing ring -->
      <path d="M 440 395 C 435 375 420 370 412 385 C 418 400 432 402 440 395 Z" />
      <path d="M 452 360 C 445 340 430 338 422 352 C 430 368 444 368 452 360 Z" />
      <path d="M 460 320 C 450 300 435 300 428 315 C 438 330 452 328 460 320 Z" />
      <path d="M 462 275 C 450 255 432 258 428 272 C 438 288 452 285 462 275 Z" />
      <path d="M 458 230 C 444 212 426 218 424 232 C 435 248 450 242 458 230 Z" />
      <path d="M 448 188 C 430 175 414 182 414 198 C 426 210 440 202 448 188 Z" />
      <path d="M 428 150 C 410 140 395 150 398 166 C 410 175 422 165 428 150 Z" />
    </g>

    <!-- MAIN CIRCULAR SEAL -->
    <!-- Outer Navy Ring -->
    <circle cx="300" cy="295" r="205" fill="#0C2340" stroke="url(#goldGrad)" stroke-width="9" />
    <!-- Inner Gold Ring -->
    <circle cx="300" cy="295" r="158" fill="#061329" stroke="url(#goldGrad)" stroke-width="4.5" />

    <!-- CIRCULAR TEXT: RADIANT INTERNATIONAL SCHOOL -->
    <!-- Text along top arc -->
    <text fill="#FFFFFF" font-family="'Times New Roman', Georgia, 'Cinzel', serif" font-size="28" font-weight="900" letter-spacing="4.8">
      <textPath href="#topTextArc" startOffset="50%" text-anchor="middle">
        RADIANT INTERNATIONAL SCHOOL
      </textPath>
    </text>

    <!-- SHIELD OUTLINE IN CENTER -->
    <g transform="translate(0, -5)">
      <!-- Outer Shield Gold Border -->
      <path d="M 210 200 C 210 200 300 178 300 178 C 300 178 390 200 390 200 C 390 295 355 365 300 395 C 245 365 210 295 210 200 Z"
            fill="#0C2340" stroke="url(#goldGrad)" stroke-width="6.5" stroke-linejoin="round" />

      <!-- Inner Shield Inset Line -->
      <path d="M 219 208 C 219 208 300 188 300 188 C 300 188 381 208 381 208 C 381 290 350 355 300 382 C 250 355 219 290 219 208 Z"
            fill="#061329" stroke="url(#goldGrad)" stroke-width="2" stroke-linejoin="round" />

      <!-- TORCH FLAME (On top of book) -->
      <!-- Flame Core Glow -->
      <circle cx="300" cy="225" r="28" fill="url(#flameGlow)" />
      <!-- Outer Flame -->
      <path d="M 300 190 C 288 212 280 225 288 238 C 294 246 306 246 312 238 C 320 225 312 212 300 190 Z"
            fill="url(#torchGrad)" stroke="#FFB703" stroke-width="1.5" />
      <!-- Inner Flame Core -->
      <path d="M 300 202 C 293 218 290 226 295 234 C 298 238 302 238 305 234 C 310 226 307 218 300 202 Z"
            fill="#FFF5C0" />
      
      <!-- Torch Bowl / Cup -->
      <path d="M 288 240 L 312 240 L 307 252 L 293 252 Z" fill="url(#goldGrad)" stroke="#FFE17D" stroke-width="1"/>
      <line x1="293" y1="246" x2="307" y2="246" stroke="#AA7C11" stroke-width="1.5" />

      <!-- OPEN BOOK OF KNOWLEDGE (Resting on pillar) -->
      <g transform="translate(300, 266)">
        <!-- Book Pages Left -->
        <path d="M -2 0 C -15 -8, -38 -10, -48 -4 L -48 30 C -38 24, -15 26, -2 33 Z"
              fill="#FFFFFF" stroke="url(#goldGrad)" stroke-width="2.5" />
        <!-- Book Pages Right -->
        <path d="M 2 0 C 15 -8, 38 -10, 48 -4 L 48 30 C 38 24, 15 26, 2 33 Z"
              fill="#FFFFFF" stroke="url(#goldGrad)" stroke-width="2.5" />
        <!-- Book Center Seam / Binding -->
        <path d="M -2 0 L 2 0 L 2 33 L -2 33 Z" fill="url(#goldGrad)" />
        
        <!-- Text Lines in Open Book -->
        <!-- Left page lines -->
        <line x1="-40" y1="5" x2="-10" y2="3" stroke="#0B1E3D" stroke-width="2" stroke-linecap="round" />
        <line x1="-40" y1="12" x2="-10" y2="10" stroke="#0B1E3D" stroke-width="2" stroke-linecap="round" />
        <line x1="-40" y1="19" x2="-10" y2="17" stroke="#0B1E3D" stroke-width="2" stroke-linecap="round" />
        <line x1="-35" y1="26" x2="-12" y2="24" stroke="#0B1E3D" stroke-width="2" stroke-linecap="round" />
        <!-- Right page lines -->
        <line x1="10" y1="3" x2="40" y2="5" stroke="#0B1E3D" stroke-width="2" stroke-linecap="round" />
        <line x1="10" y1="10" x2="40" y2="12" stroke="#0B1E3D" stroke-width="2" stroke-linecap="round" />
        <line x1="10" y1="17" x2="40" y2="19" stroke="#0B1E3D" stroke-width="2" stroke-linecap="round" />
        <line x1="12" y1="24" x2="35" y2="26" stroke="#0B1E3D" stroke-width="2" stroke-linecap="round" />
      </g>

      <!-- CLASSICAL IONIC COLUMN / PILLAR -->
      <g transform="translate(300, 310)">
        <!-- Capital Top Bar -->
        <rect x="-32" y="0" width="64" height="6" fill="url(#goldGrad)" rx="1.5" stroke="#8C660D" stroke-width="1"/>
        <!-- Volutes / Scrolls (Ionic style) -->
        <circle cx="-26" cy="10" r="7" fill="#FFFFFF" stroke="url(#goldGrad)" stroke-width="2.5" />
        <circle cx="-26" cy="10" r="3.5" fill="#0C2340" />
        <circle cx="26" cy="10" r="7" fill="#FFFFFF" stroke="url(#goldGrad)" stroke-width="2.5" />
        <circle cx="26" cy="10" r="3.5" fill="#0C2340" />
        <rect x="-24" y="6" width="48" height="6" fill="#FFFFFF" stroke="url(#goldGrad)" stroke-width="1.5" />

        <!-- Fluted Shaft -->
        <rect x="-20" y="14" width="40" height="34" fill="#FFFFFF" stroke="url(#goldGrad)" stroke-width="2" />
        <line x1="-12" y1="16" x2="-12" y2="46" stroke="#0C2340" stroke-width="2" stroke-linecap="round" />
        <line x1="-4" y1="16" x2="-4" y2="46" stroke="#0C2340" stroke-width="2" stroke-linecap="round" />
        <line x1="4" y1="16" x2="4" y2="46" stroke="#0C2340" stroke-width="2" stroke-linecap="round" />
        <line x1="12" y1="16" x2="12" y2="46" stroke="#0C2340" stroke-width="2" stroke-linecap="round" />

        <!-- Pillar Base / Pedestal -->
        <rect x="-25" y="48" width="50" height="6" fill="url(#goldGrad)" rx="1" stroke="#8C660D" stroke-width="1"/>
        <rect x="-30" y="54" width="60" height="8" fill="#FFFFFF" rx="1.5" stroke="url(#goldGrad)" stroke-width="2"/>
      </g>
    </g>

    <!-- LOWER BANNER RIBBON: "Where Every Child Shines" -->
    <g>
      <!-- Ribbon Left Wing Shadow/Fold -->
      <path d="M 125 450 L 80 440 L 95 490 L 140 480 Z" fill="#050E1A" stroke="url(#goldGrad)" stroke-width="1.5" />
      <!-- Left Ribbon Fishtail Notch -->
      <path d="M 80 440 L 125 450 L 125 500 L 70 495 L 90 467 Z" fill="#0C2340" stroke="url(#goldGrad)" stroke-width="2.5" />

      <!-- Ribbon Right Wing Shadow/Fold -->
      <path d="M 475 450 L 520 440 L 505 490 L 460 480 Z" fill="#050E1A" stroke="url(#goldGrad)" stroke-width="1.5" />
      <!-- Right Ribbon Fishtail Notch -->
      <path d="M 520 440 L 475 450 L 475 500 L 530 495 L 510 467 Z" fill="#0C2340" stroke="url(#goldGrad)" stroke-width="2.5" />

      <!-- Main Ribbon Curved Banner -->
      <path d="M 115 458 Q 300 500 485 458 L 475 515 Q 300 560 125 515 Z"
            fill="#081A32" stroke="url(#goldGrad)" stroke-width="4.5" stroke-linejoin="round" />
      
      <!-- Inner Gold Trim on Ribbon -->
      <path d="M 125 466 Q 300 508 475 466 M 467 507 Q 300 550 133 507"
            fill="none" stroke="#F9E27D" stroke-width="1" stroke-dasharray="4,2" />

      <!-- Ribbon Motto Text -->
      <text fill="#FFFFFF" font-family="'Brush Script MT', 'Palatino', Georgia, cursive, serif" font-size="28" font-style="italic" font-weight="bold" letter-spacing="1">
        <textPath href="#ribbonArc" startOffset="50%" text-anchor="middle">
          &quot;Where Every Child Shines&quot;
        </textPath>
      </text>
    </g>
  </g>
</svg>
'''

with open('public/radiant-crest.svg', 'w') as f:
    f.write(svg_content)

print("Saved public/radiant-crest.svg successfully!")
subprocess.run(['convert', '-background', 'none', '-resize', '600x600', 'public/radiant-crest.svg', 'public/radiant-crest.png'])
subprocess.run(['convert', '-background', 'none', '-resize', '128x128', 'public/radiant-crest.svg', 'public/favicon.png'])
print("Converted to public/radiant-crest.png and favicon.png!")
