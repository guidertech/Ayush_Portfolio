"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const titles = [
    "Web Developer",
    "MERN Stack Expert",
    "Next.js Craftsman",
    "Creative Problem Solver",
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setIsFading(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    currentTarget.style.setProperty("--x", `${x}px`);
    currentTarget.style.setProperty("--y", `${y}px`);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="w-full relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden group"
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-mask pointer-events-none z-0"></div>

      {/* Dynamic Cursor Spotlight */}
      <div className="absolute inset-0 spotlight-glow pointer-events-none z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>

      {/* Drifting Ambient Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0 animate-drift"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none z-0 animate-drift-reverse"></div>

      {/* Centered Content Wrapper */}
      <div className="max-w-container-max mx-auto w-full px-4 md:px-gutter relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center animate-fade-in">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary mb-stack-md transition-all duration-300 hover:bg-secondary/15 w-fit">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_#4fdbc8]"></span>
            <span className="font-display font-medium text-sm tracking-wider uppercase">
              Available for opportunities
            </span>
          </div>

          {/* Hero Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-stack-md text-white tracking-tight leading-[1.1] selection:bg-primary/30">
            Full Stack{" "}
            <span
              className={`text-primary text-glow inline-block transition-all duration-300 transform ${
                isFading ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
              }`}
            >
              {titles[titleIndex]}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-body-lg text-slate-400 mb-stack-lg leading-relaxed max-w-2xl">
            Crafting high-performance digital experiences with the <strong className="text-white">MERN</strong> stack and <strong className="text-white">Next.js</strong>. 
            I transform complex problems into elegant, scalable web solutions with a focus on modern craftsmanship and user-centric design.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full sm:w-auto mt-4">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, "projects")}
              className="bg-gradient-to-r from-primary to-secondary text-slate-950 px-6 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_20px_rgba(56,189,248,0.25)] w-full sm:w-auto"
            >
              View Projects 
              <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
            <button className="border border-white/10 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-white/5 active:scale-[0.98] transition-all duration-300 w-full sm:w-auto">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
