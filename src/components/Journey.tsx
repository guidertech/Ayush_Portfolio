export default function Journey() {
  const steps = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      date: "2023 - 2026 ",
      color: "bg-primary shadow-[0_0_10px_#c0c1ff]",
      ringColor: "ring-primary/20",
      description:
        "Focusing on Computer Science fundamentals, Software Engineering, and Advanced Web Technologies. Consistently maintaining top-tier grades while building real-world applications alongside the academic curriculum.",
    },
    {
      title: "Full Stack Immersion",
      date: "2023 - Present",
      color: "bg-secondary shadow-[0_0_10px_#4fdbc8]",
      ringColor: "ring-secondary/20",
      description:
        "Deep-dived into the MERN stack ecosystem. Mastered Next.js for high-performance frontends, Node/Express for resilient, secure backend APIs, and advanced database schema modeling using MongoDB and Mongoose.",
    },
  ];

  return (
    <section id="journey" className="px-4 md:px-gutter max-w-container-max mx-auto mb-16 md:mb-section-padding relative">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side Sticky Header */}
        <div className="md:w-1/3">
          <div className="md:sticky md:top-32 space-y-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
              Academic Path &amp; Journey
            </h2>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              A timeline of my formal academic studies and self-directed engineering training.
            </p>
          </div>
        </div>

        {/* Right Side Timeline */}
        <div className="md:w-2/3 space-y-12 border-l border-white/10 pl-8 relative ml-4 md:ml-0">
          {steps.map((step, index) => (
            <div key={index} className="relative group transition-all duration-300">
              {/* Bullet Node */}
              <div
                className={`absolute -left-[40px] top-1.5 w-4 h-4 rounded-full ring-4 transition-all duration-500 group-hover:scale-110 ${step.color} ${step.ringColor}`}
              />

              {/* Title & Date */}
              <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-secondary font-display text-sm font-semibold mb-4 tracking-wide">
                {step.date}
              </p>

              {/* Description */}
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
