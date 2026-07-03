import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-section-padding px-4 md:px-gutter max-w-container-max mx-auto relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
        {/* Left side: Photo Frame */}
        <div className="md:col-span-5 relative group max-w-md mx-auto w-full">
          <div className="absolute -inset-2 md:-inset-4 bg-primary/10 rounded-3xl blur-2xl group-hover:bg-primary/25 transition-all duration-700"></div>
          
          {/* Custom double frame accent border */}
          <div className="relative p-2 rounded-3xl bg-slate-950/40 border border-white/5 backdrop-blur-md shadow-2xl group-hover:border-primary/20 transition-all duration-500">
            <div className="rounded-2xl overflow-hidden aspect-square relative border border-white/10 group-hover:border-primary/30 transition-all duration-500">
              <img
                src="/boy_portrait.png"
                alt="Professional portrait of a full stack software developer"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                loading="lazy"
              />
              {/* Scanline decoration overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/5 to-white/0 pointer-events-none opacity-20 z-10"></div>
            </div>
          </div>
        </div>

        {/* Right side: Biography & Highlights */}
        <div className="md:col-span-7 flex flex-col justify-center text-left">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider w-fit mb-4">
            <span className="material-symbols-outlined text-sm">person</span>
            Developer Bio
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight leading-tight">
            Who is <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-black">Ayush?</span>
          </h2>
          
          <p className="font-body text-body-lg text-slate-300 mb-8 leading-relaxed">
            I am a <strong className="text-white font-semibold">BCA Graduate (Class of 2026)</strong> with a deep passion for architecting end-to-end web systems. My engineering journey is fueled by a curiosity for how data flows between clean user interfaces and high-integrity database backends.
          </p>

          {/* Grid of Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Highlight Card 1 */}
            <div className="glass-card p-5 rounded-2xl border border-white/5 hover:border-primary/20 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-xl">terminal</span>
                </div>
                <h4 className="font-display text-base font-semibold text-white mb-2">
                  Full-Stack Mastery
                </h4>
                <p className="font-body text-xs text-slate-400 leading-relaxed">
                  Proficient in designing beautiful frontend layouts alongside modular RESTful APIs and secure controller actions.
                </p>
              </div>
            </div>

            {/* Highlight Card 2 */}
            <div className="glass-card p-5 rounded-2xl border border-white/5 hover:border-secondary/20 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-secondary mb-4">
                  <span className="material-symbols-outlined text-xl">database</span>
                </div>
                <h4 className="font-display text-base font-semibold text-white mb-2">
                  Data Architecture
                </h4>
                <p className="font-body text-xs text-slate-400 leading-relaxed">
                  Skilled in structured data modeling with MongoDB, designing transaction boundaries, and indexing for high performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
