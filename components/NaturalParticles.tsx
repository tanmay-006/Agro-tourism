"use client";

import React, { useEffect, useState } from "react";

type Particle = {
  id: number;
  left: string;
  size: string;
  delay: string;
  duration: string;
  opacity: number;
  color: string;
  rotation: string;
};

export default function NaturalParticles({ 
  count = 22, 
  colorTheme = "mixed" 
}: { 
  count?: number; 
  colorTheme?: "green" | "gold" | "mixed" 
}) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Determine possible color palettes matching the brand (#2c3f16, #a67c1c)
    const colors = {
      green: ["text-[#2c3f16]/20", "text-[#2c3f16]/35"],
      gold: ["text-[#a67c1c]/20", "text-[#a67c1c]/35"],
      mixed: ["text-[#2c3f16]/20", "text-[#2c3f16]/35", "text-[#a67c1c]/15", "text-[#a67c1c]/30"]
    };

    const palette = colors[colorTheme] || colors.mixed;

    const items = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 18 + 8}px`, // Size range 8px to 26px
      delay: `${Math.random() * -20}s`, // Negative delay so they start immediately at different stages
      duration: `${Math.random() * 15 + 15}s`, // Speed variations
      opacity: Math.random() * 0.8 + 0.2, // Base opacity multiplied by class opacity
      color: palette[Math.floor(Math.random() * palette.length)],
      rotation: `${Math.random() * 360}deg`
    }));
    setParticles(items);
  }, [count, colorTheme]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {particles.map((p) => (
        <svg
          key={p.id}
          className={`absolute animate-float-particle ${p.color}`}
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity,
            transform: `rotate(${p.rotation})`,
            top: "-5%",
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          {/* Detailed, fluttering leaf shape */}
          <path d="M17 8C8 10 7 20 7 20S17 19 17 8Z" />
        </svg>
      ))}
    </div>
  );
}
