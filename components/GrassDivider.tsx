import React from "react";

export default function GrassDivider({ className = "", color = "#2c3f16", flip = false }: { className?: string; color?: string; flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "transform rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1200 60"
        className="relative block w-full h-[60px]"
        preserveAspectRatio="none"
        style={{ fill: color }}
      >
        {/* Stylized detailed grass silhouette vector path */}
        <path d="M0,60 H1200 V35 C1180,25 1170,45 1150,20 C1135,35 1125,10 1105,30 C1090,15 1080,42 1060,18 C1045,35 1035,5 1015,35 C1000,20 990,45 970,15 C955,30 945,5 925,32 C910,18 900,42 880,12 C865,30 855,2 835,35 C820,20 810,48 790,15 C775,32 765,8 745,35 C730,18 720,44 700,10 C685,28 675,4 655,32 C640,18 630,42 610,15 C595,30 585,8 565,32 C550,18 540,42 520,12 C505,30 495,2 475,35 C460,20 450,48 430,15 C415,32 405,8 385,35 C370,18 360,44 340,10 C325,28 315,4 295,32 C280,18 270,42 250,15 C235,30 225,8 205,32 C190,18 180,42 160,12 C145,30 135,2 115,35 C100,20 90,48 70,15 C55,32 45,8 25,35 C10,18 0,44 0,10 Z" />
      </svg>
    </div>
  );
}
