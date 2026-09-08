"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import TextType from "@/components/TextType";
import NaturalParticles from "./NaturalParticles";

const slides = [
  {
    title: "Artisanal Heritage",
    subtitle: "Nurturing the finest grains across generations of expertise.",
    image: "/images/farm.jpeg",
  },
  {
    title: "Global Precision",
    subtitle: "Seamlessly bridging traditional harvests with modern international logistics.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=70&w=1200",
  },
  {
    title: "Harvest Excellence",
    subtitle: "Uncompromising quality standards for the world's most discerning kitchens.",
    image: "/images/truck.jpeg",
  },
  {
    title: "Global Outreach",
    subtitle: "Navigating international waterways to deliver our premium harvests worldwide.",
    image: "/images/Cargo.jpeg",
  },
];

export default function HomeHeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[75vh] overflow-hidden bg-black">
      {/* Slides Container */}
      {slides.map((slide, i) => {
        const isActive = i === index;
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className={`object-cover transition-transform duration-[6000ms] linear ${isActive ? "scale-100" : "scale-110"
                }`}
              priority={i === 0}
            />
            {/* Left-to-right gradient to protect text readability on left while keeping original image colors clear on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent z-10" />

            {isActive && (
              <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-28 text-[#f7f3ec] md:px-10 z-20 font-sans">
                <NaturalParticles count={25} />
                <h1 className="max-w-2xl font-serif-display text-5xl md:text-7xl animate-fade-in-up">
                  {slide.title}
                </h1>
                <TextType
                  text={slide.subtitle}
                  typingSpeed={40}
                  pauseDuration={999999}
                  loop={false}
                  showCursor={true}
                  cursorCharacter="|"
                  className="mt-4 max-w-2xl text-base md:text-lg text-[#d8d2c4] min-h-[3em] font-light leading-relaxed block"
                />
                <Link
                  href="/products"
                  className="mt-8 inline-flex w-fit rounded-full bg-[#2c3f16] px-6 py-3 font-semibold text-[#fcf5e5] transition-all duration-300 hover:bg-[#1d2a0f] hover:shadow-lg animate-fade-in-up-delay-2"
                >
                  Explore Our Work
                </Link>
              </div>
            )}
          </div>
        );
      })}

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 z-30">
        <button
          className="rounded-full bg-white/20 p-2 hover:bg-white/35 transition"
          onClick={() => setIndex((index + slides.length - 1) % slides.length)}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 text-[#fcf5e5]" />
        </button>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`h-2.5 w-2.5 rounded-full transition-all ${i === index ? "bg-[#a67c1c] scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
        <button
          className="rounded-full bg-white/20 p-2 hover:bg-white/35 transition"
          onClick={() => setIndex((index + 1) % slides.length)}
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 text-[#fcf5e5]" />
        </button>
      </div>
    </section>
  );
}
