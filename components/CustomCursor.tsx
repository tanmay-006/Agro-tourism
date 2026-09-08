"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Only enable custom cursor if the device supports hovering
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, select, input, textarea, [role='button'], .cursor-pointer, input[type='submit']"
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (hidden) return;

    setTrail(position);
  }, [position, hidden]);

  const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;
  if (hidden || isTouchDevice) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-[width,height,background-color,border-color,transform] duration-300 ease-out will-change-transform"
        style={{
          transform: `translate3d(${trail.x}px, ${trail.y}px, 0) ${
            linkHovered ? "scale(1.5)" : clicked ? "scale(0.85)" : "scale(1)"
          }`,
          backgroundColor: linkHovered ? "rgba(45, 72, 31, 0.15)" : "transparent",
          borderColor: linkHovered ? "#a67c1c" : "#2c3f16",
        }}
      />
      {/* Inner Dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2c3f16] transition-transform duration-150 ease-out will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) ${
            linkHovered ? "scale(0)" : clicked ? "scale(0.7)" : "scale(1)"
          }`,
        }}
      />
    </>
  );
}
