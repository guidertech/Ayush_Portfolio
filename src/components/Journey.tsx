export default function Journey() {
  const steps = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      date: "2023 - 2026",
      badge: "Degree Program",
      color: "bg-primary shadow-[0_0_15px_rgba(56,189,248,0.5)]",
      ringColor: "ring-primary/20",
      description:
        "Focusing on Computer Science fundamentals, Software Engineering methodologies, and Database Management Systems. Consistently maintaining top-grade academic standing while designing full-stack projects on the side.",
    },
    {
      title: "Full Stack Immersion",
      date: "2023 - Present",
      badge: "Specialization",
      color: "bg-secondary shadow-[0_0_15px_rgba(52,211,153,0.5)]",
      ringColor: "ring-secondary/20",
      description:
        "Deep-dived into modern frameworks. Mastered Next.js for client environments, Express/Node.js for backend APIs, and structured MongoDB collections. Focused on software design patterns, caching layers, and responsive UI layout styling.",
    },
  ];

  return (
    <section id="journey" className="py-16 md:py-section-padding px-4 md:px-gutter max-w-container-max mx-auto relative overflow-hidden">
      {/* Background glow decorator */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="flex flex-col md:flex-row gap-12 relative z-10 text-left">
        {/* Left Side Sticky Header */}
        <div className="md:w-1/3">
          <div className="md:sticky md:top-32 space-y-4">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">history_edu</span>
              Journey
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Academic &amp; <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-black">Professional Path</span>
            </h2>
            <p className="font-body text-body-lg text-slate-400 leading-relaxed">
              A chronology of my formal undergraduate degree studies and self-directed software engineering specializations.
            </p>
          </div>
        </div>

        {/* Right Side Timeline */}
        <div className="md:w-2/3 space-y-8 border-l border-white/5 pl-8 relative ml-4 md:ml-0">
          {steps.map((step, index) => (
            <div key={index} className="relative group transition-all duration-300">
              {/* Bullet Node */}
              <div
                className={`absolute -left-[40px] top-4 w-4 h-4 rounded-full ring-4 transition-all duration-500 group-hover:scale-125 ${step.color} ${step.ringColor}`}
              />

              {/* Event Card */}
              <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 group-hover:border-primary/20 transition-all duration-300 bg-slate-950/40">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-secondary font-display text-xs font-bold uppercase tracking-wider">
                    {step.date}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    {step.badge}
                  </span>
                </div>
                
                <h3 className="font-display text-xl md:text-2xl font-extrabold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="font-body text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
