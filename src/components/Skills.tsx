export default function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      icon: "code",
      color: "border-sky-500/20 hover:border-sky-500/40 bg-gradient-to-br from-sky-950/20 to-slate-950/40",
      textColor: "text-sky-400",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend & Database",
      icon: "dns",
      color: "border-emerald-500/20 hover:border-emerald-500/40 bg-gradient-to-br from-emerald-950/20 to-slate-950/40",
      textColor: "text-emerald-400",
      skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "SQL"],
    },
    {
      title: "DevOps & Tooling",
      icon: "settings_suggest",
      color: "border-purple-500/20 hover:border-purple-500/40 bg-gradient-to-br from-purple-950/20 to-slate-950/40",
      textColor: "text-purple-400",
      skills: ["Git", "GitHub", "Postman", "Vercel", "Docker", "Linux"],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-section-padding px-4 md:px-gutter max-w-container-max mx-auto relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.04),transparent_60%)] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Section Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-semibold text-secondary uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">widgets</span>
            Skills
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white mb-stack-sm tracking-tight">
            Technical <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-black">Arsenal</span>
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            The modern languages, framework systems, database architectures, and development pipelines I utilize.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className={`glass-card p-6 md:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${category.color} hover:scale-[1.01]`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center ${category.textColor}`}>
                    <span className="material-symbols-outlined text-xl">{category.icon}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-base">
                    {category.title}
                  </h3>
                </div>

                {/* Badges Layout */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-slate-950/60 border border-white/5 hover:border-white/10 hover:bg-slate-900 text-xs font-medium text-slate-300 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
