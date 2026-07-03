"use client";

import { useState, useEffect } from "react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  demoUrl: string;
  githubUrl: string;
  gridClass: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Next.js", "MERN Stack", "AI Integration"];

  const projectsList: Project[] = [
    {
      id: "voting-system",
      title: "Voting System",
      subtitle: "Secure Online Voting Platform",
      description: "A web-based voting system that allows users to participate in digital voting with a simple and responsive interface.",
      longDescription: "Voting System is a full-stack web application designed to manage online voting in a secure, organized, and user-friendly way. The platform allows users to access voting features through a clean interface, making the voting process faster and more manageable. This project demonstrates practical skills in frontend UI development, backend logic, database handling, user interaction, and deployment.",
      image: "/voting_system_preview.png",
      tags: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Render"],
      features: [
        "Online voting interface with a clean and responsive design",
        "User-friendly voting flow for selecting and submitting votes",
        "Backend logic for managing voting data and application workflow",
        "Database integration for storing voting-related records",
        "Deployed on Render for live project access"
      ],
      demoUrl: "https://voting-app-1-7qja.onrender.com/",
      githubUrl: "#",
      gridClass: "md:col-span-3 md:row-span-1"
    },
    {
      id: "ai-mail-generator",
      title: "AI Mail Generator",
      subtitle: "AI-Powered Email Writing Tool",
      description: "An AI-based mail generation web app that helps users create professional emails quickly based on their requirements.",
      longDescription: "AI Mail Generator is a smart web application designed to generate professional, clear, and well-structured emails using AI. Users can enter their email purpose or message idea, and the app creates a polished email draft that can be used for professional communication, job applications, business emails, or general writing support. The project focuses on clean UI, fast response, responsive design, and practical AI integration.",
      image: "/ai_mail_preview.png",
      tags: ["Next.js", "React.js", "Tailwind CSS", "AI Integration", "Vercel"],
      features: [
        "AI-powered email generation based on user input",
        "Professional email drafts for different communication needs",
        "Clean and responsive user interface for all devices",
        "Fast generation workflow with simple input and output experience",
        "Deployed on Vercel for smooth and reliable access"
      ],
      demoUrl: "https://ai-mail-generator-phi.vercel.app/",
      githubUrl: "https://github.com/Ayushaxel/ai-mail-generator",
      gridClass: "md:col-span-3 md:row-span-1"
    }
  ];

  const filteredProjects = projectsList.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Next.js") return project.tags.includes("Next.js");
    if (filter === "MERN Stack") {
      return (
        project.tags.includes("MERN Stack") ||
        (project.tags.includes("MongoDB") && project.tags.includes("Express")) ||
        (project.tags.includes("MongoDB") && project.tags.includes("Express.js"))
      );
    }
    if (filter === "AI Integration") return project.tags.includes("AI Integration");
    return true;
  });

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  // Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projects" className="py-16 md:py-section-padding px-4 md:px-gutter max-w-container-max mx-auto relative overflow-hidden">
      {/* Decorative Background Blur */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="relative z-10">
        {/* Section Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">folder_open</span>
            Projects
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white mb-stack-sm tracking-tight">
            Selected <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-black">Creations</span>
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            A curated showcase of full-stack systems, dynamic web applications, and integrated AI systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-xs font-bold border transition-all duration-300 cursor-pointer ${
                filter === category
                  ? "bg-primary text-slate-950 border-primary shadow-[0_0_15px_rgba(56,189,248,0.4)] hover:brightness-110"
                  : "bg-slate-950/40 text-slate-400 border-white/5 hover:border-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div key={filter} className="grid grid-cols-1 md:grid-cols-6 gap-6 h-auto animate-fade-in">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const accentTextClass = isEven ? "text-secondary" : "text-primary";
            const accentBorderClass = isEven ? "hover:border-secondary/30" : "hover:border-primary/30";
            const buttonHoverColor = isEven ? "group-hover:text-secondary" : "group-hover:text-primary";

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`col-span-1 ${project.gridClass} glass-card p-6 md:p-8 rounded-2xl group cursor-pointer border border-white/5 transition-all duration-500 hover:scale-[1.01] ${accentBorderClass} text-left bg-slate-950/40 flex flex-col justify-between min-h-[460px]`}
              >
                <div>
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative border border-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 pointer-events-none"></div>
                  </div>
                  <span className={`font-display text-[10px] tracking-widest uppercase font-bold block mb-2 ${accentTextClass}`}>
                    {project.subtitle}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-extrabold text-white mb-2 transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="font-body text-xs text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/5 w-full">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-white/5 text-slate-300 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${isEven ? 'group-hover:bg-secondary/20 group-hover:border-secondary/30' : 'group-hover:bg-primary/20 group-hover:border-primary/30'}`}>
                    <span className={`material-symbols-outlined text-sm transition-colors ${buttonHoverColor}`}>
                      arrow_outward
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div
            onClick={() => setSelectedProject(null)}
            className="absolute inset-0 cursor-zoom-out"
          />

          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-950 border border-white/10 rounded-2xl shadow-2xl p-6 md:p-10 flex flex-col gap-6 scrollbar-thin scrollbar-thumb-white/10 z-10 text-left">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors cursor-pointer border border-white/5"
            >
              <span className="material-symbols-outlined text-xl flex items-center justify-center">close</span>
            </button>

            {/* Header */}
            <div>
              <span className="text-secondary font-display text-xs tracking-widest uppercase font-bold block mb-1">
                {selectedProject.subtitle}
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white">
                {selectedProject.title}
              </h3>
            </div>

            {/* Image Preview */}
            <div className="w-full h-56 md:h-96 rounded-xl overflow-hidden relative border border-white/5">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Descriptions & Tags Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Left description */}
              <div className="md:col-span-2 space-y-4">
                <h4 className="font-display text-lg font-bold text-white">Project Overview</h4>
                <p className="font-body text-sm text-slate-300 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
                <div className="space-y-3 pt-2">
                  <h4 className="font-display text-sm font-bold text-white">Key Capabilities</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="font-body text-xs text-slate-400 flex items-start gap-2.5 leading-relaxed">
                        <span className="text-secondary font-bold text-xs mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right tech metadata */}
              <div className="space-y-4 bg-slate-900/60 p-5 rounded-2xl border border-white/5 flex flex-col justify-between">
                <div>
                  <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-4">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-primary font-bold bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/5 flex flex-col gap-2.5">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-gradient-to-r from-primary to-secondary text-slate-950 font-bold py-2.5 rounded-lg text-xs hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_12px_rgba(56,189,248,0.2)]"
                  >
                    Launch Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center border border-white/10 text-white font-bold py-2.5 rounded-lg text-xs hover:bg-white/5 active:scale-95 transition-all"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
