"use client";

export default function Hero() {
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

  return (
    <section
      id="hero"
      className="min-h-[819px] flex flex-col justify-center px-gutter max-w-container-max mx-auto relative mb-section-padding pt-20"
    >
      {/* Background soft glow elements */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl relative z-10 animate-fade-in">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary mb-stack-md transition-all duration-300 hover:bg-secondary/15">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_#4fdbc8]"></span>
          <span className="font-display font-medium text-sm tracking-wider uppercase">
            Available for opportunities
          </span>
        </div>

        {/* Hero Heading */}
        <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-stack-md text-white tracking-tight leading-[1.1] selection:bg-primary/30">
          Full Stack <span className="text-primary text-glow block md:inline">Web Developer</span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-body-lg text-on-surface-variant mb-stack-lg leading-relaxed max-w-2xl">
          Crafting high-performance digital experiences with the <strong className="text-white">MERN</strong> stack and <strong className="text-white">Next.js</strong>. 
          I transform complex problems into elegant, scalable web solutions with a focus on modern craftsmanship and user-centric design.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-stack-md">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, "projects")}
            className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-primary-container/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_20px_rgba(192,193,255,0.25)]"
          >
            View Projects 
            <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
          </a>
          <button className="border border-secondary/60 text-secondary px-8 py-4 rounded-lg font-bold hover:bg-secondary/10 hover:border-secondary active:scale-[0.98] transition-all duration-300">
            Download Resume
          </button>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="text-on-surface hover:text-primary px-8 py-4 font-medium transition-all duration-300 flex items-center"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
