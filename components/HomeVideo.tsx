"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomeVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Set to 60% speed
    }
  }, []);

  return (
    <div className="relative w-full">
      <ScrollReveal direction="fade" duration={1.2} className="w-full">
        <div className="relative w-full aspect-video max-h-[85vh] bg-black overflow-hidden shadow-2xl transition-all duration-700">
          <video 
            ref={videoRef}
            src="/neemsai-video.mp4" 
            className="w-full h-full object-cover scale-[1.08]"
            playsInline
            preload="metadata"
            muted
            autoPlay
            loop
          />
        </div>
      </ScrollReveal>
    </div>
  );
}
