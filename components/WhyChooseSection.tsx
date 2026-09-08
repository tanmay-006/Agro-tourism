"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Sprout, Globe } from "lucide-react";
import ScrollFloat from "@/components/ScrollFloat";
import ScrollReveal from "@/components/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = bgRef.current;
    const section = sectionRef.current;
    if (!bg || !section) return;

    const anim = gsap.fromTo(
      bg,
      { yPercent: -12 },
      {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      anim.kill();
    };
  }, []);

  const items = [
    {
      title: "Uncompromised Quality",
      description: "Achieving 99% purity and optimal moisture standards, ensuring every grain meets export-grade excellence.",
      icon: <Award className="h-6 w-6 text-[#a67c1c]" />,
    },
    {
      title: "Direct-to-Source Heritage",
      description: "Rooted in agricultural heritage through direct partnerships with over 500 farming families across India's fertile plains.",
      icon: <Sprout className="h-6 w-6 text-[#a67c1c]" />,
    },
    {
      title: "Global Logistics Excellence",
      description: "Serving 50+ countries with a streamlined supply chain for active delivery timelines and transport reliability.",
      icon: <Globe className="h-6 w-6 text-[#a67c1c]" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#111111] px-6 py-24 md:px-10 overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[124%] -top-[12%] bg-cover bg-center opacity-100 pointer-events-none scale-105"
        style={{
          backgroundImage: "url('/images/why-choose-bg.jpg')",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl text-center mb-16">
        <ScrollFloat
          animationDuration={0.8}
          ease="back.out(1.5)"
          scrollStart="top bottom-=15%"
          scrollEnd="bottom center"
          stagger={0.015}
          containerClassName="my-0 text-center mx-auto"
          textClassName="font-serif-display text-4xl md:text-5xl text-[#172e13] font-bold"
        >
          Why Choose NeemSai Global?
        </ScrollFloat>
        <div className="mt-4 w-24 h-[2px] bg-[#2c3f16] mx-auto"></div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 text-[#f7f3ec] md:grid-cols-3">
        {items.map((item, i) => (
          <ScrollReveal key={item.title} direction="up" delay={i * 0.15}>
            <div className="rounded-2xl border border-[#2c3f16]/60 p-8 flex flex-col items-center text-center bg-[#19240c]/90 backdrop-blur-sm shadow-xl hover:shadow-[0_10px_30px_rgba(45, 72, 31,0.15)] hover:border-[#2c3f16]/50 transition-all duration-300 h-full group">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-[#2c3f16]/30 group-hover:bg-[#2c3f16]/10 group-hover:border-[#2c3f16] transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-serif-display text-2xl mb-4 group-hover:text-[#2c3f16] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[#98b5a3] text-sm leading-relaxed">{item.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
