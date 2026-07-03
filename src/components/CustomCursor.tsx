"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Detect touchscreen or pointer capabilities
    const checkPointer = () => {
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      setIsMobile(!hasFinePointer);
    };

    checkPointer();
    window.addEventListener("resize", checkPointer);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Track mouse coordinates
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Track hovering over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkPointer);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Smooth trail effect (using requestAnimationFrame for a perfect spring lag)
  useEffect(() => {
    if (isMobile) return;
    
    let animationFrameId: number;
    
    const updateTrail = () => {
      setTrailPosition((prev) => {
        // Linear interpolation: trail moves 18% closer to target position per frame
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    animationFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      <div
        className={`custom-cursor-dot ${isHovered ? "hovered" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`custom-cursor-ring ${isHovered ? "hovered" : ""}`}
        style={{ left: `${trailPosition.x}px`, top: `${trailPosition.y}px` }}
      />
    </>
  );
}
