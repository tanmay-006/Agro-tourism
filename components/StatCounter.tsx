"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StatCounter({ value, label }: { value: string; label: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    // Parse numeric value and suffix
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const rawNum = parseFloat(match[1].replace(/,/g, ''));
    const suffix = match[2] || "";
    const isInteger = !match[1].includes('.');

    const obj = { count: 0 };
    const anim = gsap.to(obj, {
      count: rawNum,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom-=10%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        let current = obj.count;
        let formatted = isInteger 
          ? Math.floor(current).toString() 
          : current.toFixed(1);
        
        // Add thousands separators if original value had them
        if (value.includes(',')) {
          formatted = Math.floor(current).toLocaleString();
        }
        setDisplayValue(formatted + suffix);
      }
    });

    return () => {
      anim.kill();
    };
  }, [value]);

  return (
    <div ref={containerRef} className="rounded-xl bg-white/10 p-5 text-center text-[#f7f3ec] border border-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-lg">
      <p className="font-serif-display text-4xl">{displayValue}</p>
      <p className="mt-1 text-sm uppercase tracking-wider text-[#d8d2c4]">{label}</p>
    </div>
  );
}
