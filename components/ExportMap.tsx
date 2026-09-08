"use client";

import React, { useState } from "react";
import { Building2, Anchor, Globe, MapPin } from "lucide-react";

interface Pin {
  id: string;
  name: string;
  type: "setup" | "destination";
  description: string;
  details: string;
  x: number;
  y: number;
}

const pins: Pin[] = [
  {
    id: "pune",
    name: "Pune Setup (HQ)",
    type: "setup",
    description: "Corporate Office & Quality Assurance",
    details: "Central office executing export invoicing, customer inquiries, quality lab reports, and direct farmer-cooperative contracting.",
    x: 540,
    y: 190,
  },
  {
    id: "dubai",
    name: "Dubai Setup",
    type: "setup",
    description: "International Trading Hub",
    details: "Located in the Jumeirah Lake Towers/Jebel Ali corridor, managing direct trading routes to the GCC, Europe, and West African markets.",
    x: 495,
    y: 170,
  },
  {
    id: "ports",
    name: "Nhava Sheva & Mundra",
    type: "setup",
    description: "Port logistics & Warehouses",
    details: "Strict quality verification units, bagging stations, and custom clearance facilities adjacent to India's major shipping gateways.",
    x: 532,
    y: 185,
  },
  {
    id: "usa",
    name: "North America",
    type: "destination",
    description: "Export Target Destination",
    details: "Piping high-grade aromatic 1121 and organic non-basmati rice into major retail, ethnic grocery, and distributor hubs.",
    x: 180,
    y: 140,
  },
  {
    id: "europe",
    name: "Europe",
    type: "destination",
    description: "Export Target Destination",
    details: "Fulfilling EU compliance standards for pesticide residues across Basmati varieties in Germany, UK, and Netherlands.",
    x: 420,
    y: 110,
  },
  {
    id: "africa",
    name: "East Africa",
    type: "destination",
    description: "Export Target Destination",
    details: "Mass shipments of parboiled non-basmati rice to primary ports including Mombasa (Kenya) and Djibouti.",
    x: 460,
    y: 260,
  },
  {
    id: "singapore",
    name: "Southeast Asia",
    type: "destination",
    description: "Export Target Destination",
    details: "Servicing premium culinary kitchens and industrial food processors in Singapore, Malaysia, and Hong Kong.",
    x: 620,
    y: 240,
  },
  {
    id: "saudi",
    name: "Saudi Arabia",
    type: "destination",
    description: "Export Target Destination",
    details: "Timeless demand for classic aged Basmati varieties delivered directly to major distribution centers in Jeddah and Dammam.",
    x: 480,
    y: 185,
  },
];

const routes = [
  { id: "r1", from: "ports", to: "usa" },
  { id: "r2", from: "ports", to: "europe" },
  { id: "r3", from: "ports", to: "africa" },
  { id: "r4", from: "pune", to: "singapore" },
  { id: "r5", from: "dubai", to: "europe" },
  { id: "r6", from: "dubai", to: "saudi" },
  { id: "r7", from: "dubai", to: "africa" },
];

const getCurvePath = (x1: number, y1: number, x2: number, y2: number) => {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const ox = -dy * 0.15;
  const oy = dx * 0.15;
  return `M ${x1} ${y1} Q ${mx + ox} ${my + oy} ${x2} ${y2}`;
};

export default function ExportMap() {
  const [selectedPin, setSelectedPin] = useState<Pin>(pins[0]);
  const [hoveredPin, setHoveredPin] = useState<Pin | null>(null);

  return (
    <div className="flex flex-col h-full w-full">
      {/* Map SVG container */}
      <div className="relative w-full aspect-[2/1] rounded-xl border border-[#2c3f16]/40 bg-gradient-to-br from-[#0b1709] via-[#132710] to-[#1d3d19] overflow-hidden shadow-2xl">
        <svg 
          viewBox="0 0 800 400" 
          className="w-full h-full select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stylized continent vectors */}
          {/* North America */}
          <path 
            d="M 50 120 Q 120 70 200 100 T 240 170 Q 210 190 180 190 T 130 230 Q 90 210 50 160 Z" 
            fill="#2c5c24" 
            opacity="0.45" 
            className="transition-all duration-500 hover:opacity-60 cursor-pointer"
          />
          {/* South America */}
          <path 
            d="M 180 230 Q 210 240 220 260 T 210 340 Q 190 380 170 400 T 150 350 Q 140 280 180 230 Z" 
            fill="#2c5c24" 
            opacity="0.4" 
            className="transition-all duration-500 hover:opacity-60 cursor-pointer"
          />
          {/* Greenland */}
          <path 
            d="M 190 60 Q 240 40 250 70 T 220 110 Z" 
            fill="#2c5c24" 
            opacity="0.3" 
            className="transition-all duration-500 hover:opacity-50 cursor-pointer"
          />
          {/* Africa */}
          <path 
            d="M 380 220 Q 460 200 470 240 T 490 300 Q 460 350 430 380 T 400 300 Q 360 260 380 220 Z" 
            fill="#2c5c24" 
            opacity="0.45" 
            className="transition-all duration-500 hover:opacity-60 cursor-pointer"
          />
          {/* Europe & Asia */}
          <path 
            d="M 360 200 Q 380 120 440 100 T 560 90 T 680 80 T 750 110 T 780 170 Q 750 240 700 240 T 620 220 T 580 260 Q 520 260 460 220 Z" 
            fill="#2c5c24" 
            opacity="0.5" 
            className="transition-all duration-500 hover:opacity-70 cursor-pointer"
          />
          {/* Australia */}
          <path 
            d="M 680 310 Q 740 310 750 340 T 720 370 Q 680 370 670 340 Z" 
            fill="#2c5c24" 
            opacity="0.45" 
            className="transition-all duration-500 hover:opacity-60 cursor-pointer"
          />

          {/* Export routes dashed paths */}
          {routes.map((route) => {
            const start = pins.find((p) => p.id === route.from);
            const end = pins.find((p) => p.id === route.to);
            if (!start || !end) return null;

            const pathData = getCurvePath(start.x, start.y, end.x, end.y);
            return (
              <g key={route.id}>
                {/* Static dashed path */}
                <path
                  id={`path-${route.id}`}
                  d={pathData}
                  fill="none"
                  stroke="#ffd54f"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.5"
                  className="transition-all duration-300"
                />
                
                {/* Moving dot along path */}
                <circle r="4" fill="#ffffff" stroke="#ffd54f" strokeWidth="1" opacity="0.9" className="shadow-lg">
                  <animateMotion
                    dur="4s"
                    repeatCount="indefinite"
                    path={pathData}
                  />
                </circle>
              </g>
            );
          })}

          {/* Hotspots / Pins */}
          {pins.map((pin) => {
            const isSetup = pin.type === "setup";
            const isSelected = selectedPin.id === pin.id;
            return (
              <g
                key={pin.id}
                transform={`translate(${pin.x}, ${pin.y})`}
                className="cursor-pointer group"
                onClick={() => setSelectedPin(pin)}
                onMouseEnter={() => setHoveredPin(pin)}
                onMouseLeave={() => setHoveredPin(null)}
              >
                {/* Hover ring */}
                <circle
                  r={isSetup ? 14 : 10}
                  fill="transparent"
                  stroke={isSetup ? "#ffca28" : "#00e676"}
                  strokeWidth="1.5"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Pulsing ring */}
                <circle
                  r={isSetup ? 10 : 7}
                  fill="none"
                  stroke={isSetup ? "#ffca28" : "#00e676"}
                  strokeWidth="1.5"
                  className="animate-ping opacity-60"
                />
                
                {/* Core dot */}
                <circle
                  r={isSetup ? 6 : 4.5}
                  fill={isSetup ? "#ffca28" : "#00e676"}
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  className={`transition-transform duration-300 ${
                    isSelected ? "scale-125 stroke-[#ffffff] shadow-md" : ""
                  }`}
                />
              </g>
            );
          })}
        </svg>

        {/* Floating Tooltip */}
        {hoveredPin && (
          <div 
            className="absolute z-20 pointer-events-none bg-[#0c180a]/95 border border-[#ffca28]/45 shadow-2xl px-3 py-1.5 rounded-lg text-xs text-[#fcf5e5] transition-all duration-200"
            style={{ 
              left: `${(hoveredPin.x / 800) * 100}%`, 
              top: `${(hoveredPin.y / 400) * 100 - 12}%`,
              transform: "translate(-50%, -100%)"
            }}
          >
            <p className="font-semibold text-[#ffca28]">{hoveredPin.name}</p>
            <p className="text-[10px] text-[#a5d6a7] mt-0.5">{hoveredPin.description}</p>
          </div>
        )}
      </div>

      {/* Info Details Display Panel */}
      <div className="mt-4 p-4 rounded-xl border border-[#e2dbc9]/40 bg-[#fbf9f4] flex flex-col justify-between flex-grow">
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#2c3f16]/10 text-[#2c3f16]">
            {selectedPin.type === "setup" ? (
              <Building2 className="h-4 w-4" />
            ) : (
              <Globe className="h-4 w-4" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-serif-display text-base font-semibold text-[#2c3f16]">
                {selectedPin.name}
              </h4>
              <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                selectedPin.type === "setup" 
                  ? "bg-[#a67c1c]/15 text-[#a67c1c]" 
                  : "bg-[#2c3f16]/10 text-[#2c3f16]"
              }`}>
                {selectedPin.type === "setup" ? "Company Setup" : "Export Port"}
              </span>
            </div>
            <p className="text-xs text-[#a67c1c] font-medium mt-0.5">{selectedPin.description}</p>
            <p className="text-xs text-[#48624a] leading-relaxed mt-2">{selectedPin.details}</p>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-[#e2dbc9]/40 flex gap-4 text-[10px] text-[#6b7f6d] font-semibold">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ffca28] animate-pulse" />
            <span>Gold Hotspots: NeemSai Setup Locations</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#00e676] animate-pulse" />
            <span>Green Hotspots: Major Destination Markets</span>
          </div>
        </div>
      </div>
    </div>
  );
}
