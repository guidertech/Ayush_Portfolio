"use client";

import { useEffect, useRef, useState } from "react";

export default function MacbookScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile to simplify animation for performance
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const containerTop = rect.top;
      
      const viewportHeight = window.innerHeight;
      // Scroll range: from when container top reaches viewport bottom, to when container bottom reaches viewport bottom
      const totalScrollable = containerHeight - viewportHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -containerTop / totalScrollable;
      const progress = Math.max(0, Math.min(1, scrolled));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Map scroll progress to laptop lid rotation (from -85deg closed to 0deg open)
  const lidRotation = -85 + scrollProgress * 85;
  // Map scroll progress to laptop scale (from 0.85 to 1.0)
  const scale = 0.85 + scrollProgress * 0.15;

  return (
    <div
      ref={containerRef}
      className="relative min-h-[140vh] w-full flex flex-col items-center justify-start pt-16 md:pt-24 overflow-hidden z-10 bg-gradient-to-b from-transparent to-background/50"
    >
      <div className="sticky top-[12vh] md:top-[16vh] w-full max-w-5xl px-4 flex flex-col items-center justify-center [perspective:1200px] md:[perspective:1500px]">
        {/* Helper Badge Indicator */}
        <div className="text-center mb-8 animate-bounce select-none pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-widest">
            <span className="material-symbols-outlined text-xs">keyboard_double_arrow_down</span>
            Scroll to open terminal
          </div>
        </div>

        {/* Laptop Frame Container */}
        <div
          style={{
            transform: isMobile ? "none" : `scale(${scale})`,
            transition: "transform 0.1s ease-out",
          }}
          className="relative w-full aspect-[16/10] max-w-3xl flex flex-col items-center"
        >
          {/* 1. Laptop Screen Lid (Rotates in 3D space) */}
          <div
            style={{
              transform: isMobile ? "none" : `rotateX(${lidRotation}deg)`,
              transformOrigin: "bottom",
              transformStyle: "preserve-3d",
              transition: "transform 0.15s ease-out",
            }}
            className="relative w-[90%] aspect-[16/10] bg-slate-900 border-4 border-slate-700 rounded-t-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] z-20"
          >
            {/* Screen Content - Code Editor Mockup */}
            <div className="w-full h-full bg-slate-950 p-3 md:p-5 font-mono text-[10px] md:text-xs text-slate-300 flex flex-col justify-between select-none">
              {/* Editor Tabs bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="text-[10px] text-slate-500 ml-2 font-display">ayush_profile.tsx</span>
                </div>
                <div className="text-[10px] text-slate-500 font-display">TypeScript (Next.js)</div>
              </div>
              
              {/* Editor Content Code Lines */}
              <div className="flex-1 overflow-hidden space-y-1.5 text-left md:space-y-2">
                <p className="text-slate-500">{"import { Developer } from '@ayush/core';"}</p>
                <p><span className="text-indigo-400">const</span> <span className="text-sky-400">FullStackDeveloper</span> = () =&gt; {"{"}</p>
                <p className="pl-4"><span className="text-indigo-400">const</span> name = <span className="text-emerald-400">&quot;Ayush&quot;</span>;</p>
                <p className="pl-4"><span className="text-indigo-400">const</span> role = <span className="text-emerald-400">&quot;Full Stack MERN & Next.js Developer&quot;</span>;</p>
                <p className="pl-4"><span className="text-indigo-400">const</span> stack = [<span className="text-emerald-400">&quot;React&quot;</span>, <span className="text-emerald-400">&quot;Node.js&quot;</span>, <span className="text-emerald-400">&quot;Express&quot;</span>, <span className="text-emerald-400">&quot;MongoDB&quot;</span>];</p>
                <p className="pl-4 text-slate-500">{"// Rendering high-performance layouts..."}</p>
                <p className="pl-4"><span className="text-indigo-400">return</span> (</p>
                <p className="pl-8 text-sky-400">&lt;<span className="text-rose-400">Portfolio</span>&gt;</p>
                <p className="pl-12 text-primary font-bold animate-pulse">&lt;<span className="text-rose-400">SpotlightBackdropGrid</span> /&gt;</p>
                <p className="pl-12 text-secondary font-bold animate-pulse">&lt;<span className="text-rose-400">CustomInteractiveCursor</span> /&gt;</p>
                <p className="pl-8 text-sky-400">&lt;/<span className="text-rose-400">Portfolio</span>&gt;</p>
                <p className="pl-4">);</p>
                <p>{"};"}</p>
                <p className="text-indigo-400">export default <span className="text-sky-400">FullStackDeveloper</span>;</p>
              </div>

              {/* Terminal Logs Footer */}
              <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg text-[9px] md:text-[10px] text-slate-400 flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-slate-200 font-semibold">dev server running</span>
                  <span className="text-slate-500">|</span>
                  <span className="text-primary">compiled successfully</span>
                </div>
                <div className="hidden sm:block text-slate-500">port: localhost:3000</div>
              </div>
            </div>

            {/* Glass Glare Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none z-30"></div>
          </div>

          {/* 2. Laptop Lower Keyboard Base */}
          <div className="relative w-full h-7 bg-slate-800 border-t-2 border-slate-600 rounded-b-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col items-center justify-start z-10 [transform-style:preserve-3d] [transform:rotateX(15deg)] -mt-2.5">
            {/* Keyboard Rows block */}
            <div className="w-[88%] h-3 bg-slate-950 rounded border border-slate-700/50 mt-1 flex flex-wrap gap-[1px] p-0.5 justify-center">
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={i} className="flex-1 h-full bg-slate-800 rounded-[1px] border border-slate-700/20"></div>
              ))}
            </div>

            {/* Trackpad notch */}
            <div className="w-20 h-2.5 bg-slate-900 rounded-t border-x border-t border-slate-700/40 mt-0.5"></div>
            
            {/* Front lid notch */}
            <div className="absolute bottom-0 w-28 h-1.5 bg-slate-950 rounded-t-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
