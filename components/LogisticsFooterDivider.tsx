"use client";

import React from "react";

export default function LogisticsFooterDivider() {
  // Generate stylized rice grains along the bottom edge of the road
  const grains = Array.from({ length: 50 }).map((_, idx) => {
    const x = idx * 24.5 + 10;
    // Vary rotations between -45 and 45 degrees to match the organic look in the image
    const rotation = ((idx * 37) % 70) - 35;
    return (
      <path
        key={idx}
        d="M -2.5 -7 C -2.5 -7, 0 -11, 2.5 -7 C 2.5 -7, 0 3, -2.5 -7 Z"
        transform={`translate(${x}, 151) rotate(${rotation}) scale(0.95)`}
        fill="#f7f3ec"
      />
    );
  });

  return (
    <div className="w-full overflow-hidden leading-[0] select-none pointer-events-none absolute -top-[158px] left-0 right-0 z-10">
      <style jsx global>{`
        @keyframes driveTruck {
          0% {
            transform: translate(-230px, 58.5px) scale(2.0);
          }
          100% {
            transform: translate(1280px, 58.5px) scale(2.0);
          }
        }
        .animate-truck-1 {
          animation: driveTruck 24s linear infinite;
        }
        .animate-truck-2 {
          animation: driveTruck 24s linear infinite;
          animation-delay: 12s;
        }
      `}</style>
      
      <svg
        viewBox="0 0 1200 160"
        className="w-full h-[160px] min-w-[1000px]"
        preserveAspectRatio="none"
      >
        {/* Background Rice Silos & Mill Buildings */}
        <g fill="#f1eadf" opacity="0.95">
          {/* Silo 1 & 2 */}
          <rect x="70" y="25" width="40" height="80" rx="4" />
          <rect x="115" y="25" width="40" height="80" rx="4" />
          {/* Warehouse roofs & shapes */}
          <polygon points="180,105 215,60 305,60 340,105" />
          <rect x="190" y="60" width="140" height="45" />
          {/* Main Processing Facility */}
          <rect x="440" y="30" width="200" height="75" rx="5" />
          <rect x="540" y="15" width="70" height="90" rx="3" />
          {/* Secondary Silos on Right */}
          <rect x="830" y="40" width="36" height="65" rx="2" />
          <rect x="872" y="40" width="36" height="65" rx="2" />
          <rect x="914" y="40" width="36" height="65" rx="2" />
          {/* Loading dock base */}
          <rect x="70" y="100" width="940" height="10" />
        </g>
        
        {/* Pipe conduits between buildings */}
        <g stroke="#d8d2c4" strokeWidth="3" fill="none">
          <path d="M155,45 L190,45" />
          <path d="M330,75 L440,75" />
          <path d="M640,25 L730,25 L730,105" />
          <path d="M780,55 L830,55" />
        </g>

        {/* Windows / Dock Doors */}
        <g fill="#2c3f16" opacity="0.25">
          <rect x="82" y="103" width="16" height="7" />
          <rect x="127" y="103" width="16" height="7" />
          <rect x="210" y="70" width="15" height="15" rx="1.5" />
          <rect x="240" y="70" width="15" height="15" rx="1.5" />
          <rect x="290" y="70" width="15" height="15" rx="1.5" />
          {/* Big dock bays */}
          <rect x="460" y="55" width="26" height="45" rx="1" />
          <rect x="500" y="55" width="26" height="45" rx="1" />
          <rect x="560" y="55" width="35" height="45" rx="1" />
        </g>

        {/* Road Asphalt */}
        <rect x="0" y="110" width="1200" height="38" fill="#3a3a3c" />
        
        {/* Road Divider Dashes */}
        <g stroke="#ffffff" strokeWidth="2.5" strokeDasharray="20,18" opacity="0.75">
          <line x1="0" y1="129" x2="1200" y2="129" />
        </g>

        {/* NeemSai Global Logistics Cargo Truck 1 (Animated - Premium Gold Cab) */}
        <g className="animate-truck-1">
          {/* Wheels with silver hubcaps */}
          <circle cx="18" cy="30" r="5.5" fill="#1c1c1e" />
          <circle cx="18" cy="30" r="2.5" fill="#d8d2c4" />
          <circle cx="31" cy="30" r="5.5" fill="#1c1c1e" />
          <circle cx="31" cy="30" r="2.5" fill="#d8d2c4" />
          <circle cx="94" cy="30" r="5.5" fill="#1c1c1e" />
          <circle cx="94" cy="30" r="2.5" fill="#d8d2c4" />
          {/* Trailer Body */}
          <rect x="0" y="1" width="80" height="27" fill="#ffffff" rx="1.5" />
          <rect x="2" y="3" width="76" height="23" fill="#fcfbf9" rx="1" />
          {/* Brand Lettering on Truck 1 */}
          <text x="8" y="17" fill="#2c3f16" fontSize="7.5" fontWeight="bold" fontFamily="serif" letterSpacing="0.2">NeemSai</text>
          <text x="46" y="17" fill="#a67c1c" fontSize="5.5" fontWeight="black" letterSpacing="0.5">GLOBAL</text>
          <path d="M71,9 C67,10 66,15 66,15 S71,14 71,9" fill="#2c3f16" />
          {/* Cab in pop Gold color (#a67c1c) */}
          <path d="M80,8 L95,8 C98,8 101,11 101,15 L101,28 L80,28 Z" fill="#a67c1c" />
          {/* Cab Window */}
          <path d="M85,11 L93,11 C95,11 96,12 96,14 L96,19 L85,19 Z" fill="#ffffff" opacity="0.85" />
          {/* Headlight */}
          <circle cx="100" cy="24" r="1.5" fill="#ffe066" />
        </g>

        {/* NeemSai Global Logistics Cargo Truck 2 (Animated - Brand Green Cab) */}
        <g className="animate-truck-2">
          {/* Wheels with silver hubcaps */}
          <circle cx="18" cy="30" r="5.5" fill="#1c1c1e" />
          <circle cx="18" cy="30" r="2.5" fill="#d8d2c4" />
          <circle cx="31" cy="30" r="5.5" fill="#1c1c1e" />
          <circle cx="31" cy="30" r="2.5" fill="#d8d2c4" />
          <circle cx="94" cy="30" r="5.5" fill="#1c1c1e" />
          <circle cx="94" cy="30" r="2.5" fill="#d8d2c4" />
          {/* Trailer Body */}
          <rect x="0" y="1" width="80" height="27" fill="#ffffff" rx="1.5" />
          <rect x="2" y="3" width="76" height="23" fill="#fcfbf9" rx="1" />
          {/* Brand Lettering on Truck 2 */}
          <text x="8" y="17" fill="#2c3f16" fontSize="7.5" fontWeight="bold" fontFamily="serif" letterSpacing="0.2">NeemSai</text>
          <text x="46" y="17" fill="#a67c1c" fontSize="5.5" fontWeight="black" letterSpacing="0.5">GLOBAL</text>
          <path d="M71,9 C67,10 66,15 66,15 S71,14 71,9" fill="#2c3f16" />
          {/* Cab in brand green color (#2c3f16) */}
          <path d="M80,8 L95,8 C98,8 101,11 101,15 L101,28 L80,28 Z" fill="#2c3f16" />
          {/* Cab Window */}
          <path d="M85,11 L93,11 C95,11 96,12 96,14 L96,19 L85,19 Z" fill="#ffffff" opacity="0.85" />
          {/* Headlight */}
          <circle cx="100" cy="24" r="1.5" fill="#ffe066" />
        </g>

        {/* Solid green base matching footer background color (#2c3f16) */}
        <rect x="0" y="148" width="1200" height="12" fill="#2c3f16" />

        {/* Dynamic Stylized Grains Row */}
        <g>{grains}</g>
      </svg>
    </div>
  );
}
