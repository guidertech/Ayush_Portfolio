export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      accentClass: "text-secondary border-secondary/20 bg-secondary/5 hover:border-secondary/40",
      badgeClass: "bg-secondary/10 border-secondary/20 text-secondary hover:bg-secondary/20",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend & DB",
      accentClass: "text-primary border-primary/20 bg-primary/5 hover:border-primary/40",
      badgeClass: "bg-primary/10 border-primary/20 text-primary hover:bg-primary/20",
      skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
    },
    {
      title: "Workflow",
      accentClass: "text-on-surface border-white/10 bg-white/5 hover:border-white/20",
      badgeClass: "bg-white/5 border-white/10 text-on-surface hover:bg-white/10",
      skills: ["Git", "GitHub", "Postman", "Vercel", "Docker"],
    },
  ];

  return (
    <section
      id="skills"
      className="px-4 md:px-gutter max-w-container-max mx-auto mb-16 md:mb-section-padding bg-surface-container-low/30 py-12 md:py-16 px-4 sm:px-6 md:px-12 rounded-2xl sm:rounded-[2rem] border border-white/5 relative overflow-hidden"
    >
      {/* Background glow decorator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial from-primary/5 to-transparent blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Technical Arsenal
          </h2>
          <p className="font-body text-body-md text-on-surface-variant max-w-lg mx-auto">
            The programming languages, frameworks, databases, and development workflows I use to bring products to life.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className={`glass-card p-6 md:p-8 rounded-2xl flex flex-col hover:scale-[1.01] hover:bg-surface-container/50 border transition-all duration-300`}
            >
              <h3 className={`font-display text-xs tracking-widest uppercase mb-6 font-bold pb-2 border-b border-white/10 ${category.accentClass.split(" ")[0]}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg border text-sm font-medium font-body transition-all duration-300 cursor-default ${category.badgeClass}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
