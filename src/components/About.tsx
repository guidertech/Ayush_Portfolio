import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="px-gutter max-w-container-max mx-auto mb-section-padding relative">
      {/* Decorative background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="grid md:grid-cols-2 gap-stack-lg items-center relative z-10">
        {/* Left side: Photo Frame */}
        <div className="relative group max-w-md mx-auto md:mx-0 w-full">
          <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition-all duration-700"></div>
          <div className="glass-card rounded-2xl overflow-hidden relative aspect-square shadow-2xl border border-white/10 group-hover:border-primary/30 transition-all duration-500">
            {/* We use standard img because we want to load the exact design URL without pre-configuring next/image domains, 
                or we can use standard Next.js Image with unoptimized attribute */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbqj4-6Pyy7_HUXeN72UC_mh1qKpqzEWfjjXzFPc7eDvWv1tsGCfI_XYpdDTofvArY1Fi7tMQRi7HJcRBDb3H_B5esA4weJx0OuZcjVSUetI_oOTlxnwzJ8oKf1HYUiKemGKfyeizYn1EngtiCoiEflW8chVm9HJ4VuuhH-he104si9gjRpRKwU9gjRpRKwU9gzAONv7mALWOQZzWQXFNZitU1W5XhCQ8kKPkFvKishctE5QK_Ur95HBi-WXUG_EjhtGsSk0xllLcy3n-1vvAc"
              alt="Professional portrait of a full stack software developer"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              loading="lazy"
            />
            {/* HUD Overlay Line decoration */}
            <div className="absolute inset-0 border-[0.5px] border-white/5 pointer-events-none rounded-xl m-2"></div>
          </div>
        </div>

        {/* Right side: Biography */}
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-4xl font-bold mb-stack-md text-white tracking-tight">
            About Me
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant mb-stack-lg leading-relaxed">
            I am a <strong className="text-white font-semibold">BCA Graduate (Class of 2026)</strong> with a deep-seated passion for architecting end-to-end web applications. My coding journey is fueled by an insatiable curiosity for how data flows seamlessly between the user interface and database servers.
          </p>

          {/* Highlights */}
          <div className="space-y-6">
            {/* Highlight 1 */}
            <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary border border-white/5 shadow-inner">
                <span className="material-symbols-outlined text-2xl">terminal</span>
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-white mb-1">
                  Full-Stack Mastery
                </h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Proficient in building responsive, modern user interfaces alongside robust, scalable APIs and server components.
                </p>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary border border-white/5 shadow-inner">
                <span className="material-symbols-outlined text-2xl">database</span>
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-white mb-1">
                  Data Architecture
                </h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Extensive experience in data modeling with MongoDB and relational logical models for secure, high-integrity transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
