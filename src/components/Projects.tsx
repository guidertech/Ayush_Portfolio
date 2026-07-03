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

  const projectsList: Project[] = [
    {
      id: "learning-app",
      title: "Learning Web App",
      subtitle: "Featured Project",
      description: "A comprehensive educational platform built with Next.js and MongoDB, featuring real-time progress tracking and interactive course modules.",
      longDescription: "DevCraft Learning is a cloud-based educational system built on Next.js, Express, and MongoDB. It addresses modern learning hurdles by providing real-time data syncs, modular lesson architectures, and customized performance graphs for both students and instructors.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD03-dz8uvrGsS8jIF7jK5Q8kI-B5by9j8hKbVcTMbTIfOcpvRT70zOKile1f7g1AVZG9lvYWoH2Z1CCUay3IEHqxo3iHZst1D6niil2x0m-EwabQWonmrCIbtd-8MRVpV4e5DGUIMkfERY6-zF74-0D3HVq5W-sC1B1iru5h4ua5IsFDwYJfKGsZIo-dyWB7xg_Su7tqnEDFZUYaH-8pnx8VV9OfPiqtL_B73Hz3JxjirYkXMT-rMioEvVoUmF2fmkN5YNl-03Qg",
      tags: ["Next.js", "MongoDB", "React", "Node.js", "Express", "Tailwind CSS"],
      features: [
        "Real-time analytics and student telemetry tracking",
        "Dynamic course modules with nested lessons",
        "Student assessment portal with instant grading",
        "Educator dashboard for grading and user metrics",
        "Full Stripe payment gateway integration for premium courses"
      ],
      demoUrl: "#",
      githubUrl: "#",
      gridClass: "md:col-span-4 md:row-span-1 flex flex-col md:flex-row"
    },
    {
      id: "voting-system",
      title: "Voting System",
      subtitle: "Secure Online Voting Platform",
      description: "A web-based voting system that allows users to participate in digital voting with a simple and responsive interface.",
      longDescription: "Voting System is a full-stack web application designed to manage online voting in a secure, organized, and user-friendly way. The platform allows users to access voting features through a clean interface, making the voting process faster and more manageable. This project demonstrates practical skills in frontend UI development, backend logic, database handling, user interaction, and deployment.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcNf2aeqkkTDOOCqzteN9aVDV53EI7yL2bikxv68LJT5KH7ta1xAyq-RTFAyea8pQtgLiXi3wBbeH_FkHu7jz9XgKhrTPjVuyED_6dNTus5bm2qNUapIZ6MgSpE6nS4cHiePo9KmfwUBDT1Mz6RvjvqUVDDhJhNmohMbID9ZDViMBW8UnznAh-kJQl6e-wpZ8YLwnKfT2iehxWOTfTO-Gw9-DXgws4o9XMuTGB6vMR1-V75n03fC46gMnSRM8OEDKQyqGTCHmLlu0",
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
      gridClass: "md:col-span-2 md:row-span-1 p-6 md:p-8 flex flex-col justify-between"
    },
    {
      id: "course-mgmt",
      title: "Course Management",
      subtitle: "Full Stack App",
      description: "Full CRUD functionality for managing educational content with an admin dashboard.",
      longDescription: "A powerful platform designed for course instructors to manage curriculum schemas. The app handles heavy CRUD workflows, including media uploading, nested item editing, and student feedback loops in a fast, responsive interface.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa2qGDmOT240nViD3-hGWs8k1npPPAi-eEzEgiry-mgiGw6QB1Id4zw3vOcsbI6asJajGTufrNOyOSUxsZ7vlnwG3yVu9HfteGB07Q_KskkU38J6VM4ncqbQAMygbgYkWxByYzXTcoNr6vycNWuy1S7n9AVEX4Dff0tS-N4YuGbBvMiLoBaux1lqhvS2sMvzUgnEtEGw4SVD0sN6p_TgzvfLtIzPb1OSo89xEbSAHczheDjXD-GJOr1cVD3ALYwXn9JnwJQneyhPQ",
      tags: ["React", "Express", "Mongoose", "MongoDB", "Tailwind CSS"],
      features: [
        "Dynamic course builder with drag-and-drop hierarchy capabilities",
        "Media storage support for video stream lectures and file downloads",
        "Advanced searching and indexing algorithms via MongoDB text indexes",
        "Interactive Q&A forum per course for student-instructor engagement",
        "Automated PDF completion certificate generator module"
      ],
      demoUrl: "#",
      githubUrl: "#",
      gridClass: "md:col-span-3 md:row-span-1 p-6 md:p-8 flex flex-col"
    },
    {
      id: "ai-mail-generator",
      title: "AI Mail Generator",
      subtitle: "AI-Powered Email Writing Tool",
      description: "An AI-based mail generation web app that helps users create professional emails quickly based on their requirements.",
      longDescription: "AI Mail Generator is a smart web application designed to generate professional, clear, and well-structured emails using AI. Users can enter their email purpose or message idea, and the app creates a polished email draft that can be used for professional communication, job applications, business emails, or general writing support. The project focuses on clean UI, fast response, responsive design, and practical AI integration.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcNf2aeqkkTDOOCqzteN9aVDV53EI7yL2bikxv68LJT5KH7ta1xAyq-RTFAyea8pQtgLiXi3wBbeH_FkHu7jz9XgKhrTPjVuyED_6dNTus5bm2qNUapIZ6MgSpE6nS4cHiePo9KmfwUBDT1Mz6RvjvqUVDDhJhNmohMbID9ZDViMBW8UnznAh-kJQl6e-wpZ8YLwnKfT2iehxWOTfTO-Gw9-DXgws4o9XMuTGB6vMR1-V75n03fC46gMnSRM8OEDKQyqGTCHmLlu0",
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
      gridClass: "md:col-span-3 md:row-span-1 p-6 md:p-8 flex flex-col"
    }
  ];

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
    <section id="projects" className="px-gutter max-w-container-max mx-auto mb-section-padding relative">
      <h2 className="font-display text-4xl font-bold text-white mb-stack-lg tracking-tight">
        Selected Projects
      </h2>

      {/* Bento Grid */}
      <div className="grid md:grid-cols-6 gap-6 h-auto">
        {projectsList.map((project, index) => {
          if (index === 0) {
            // Featured Project Layout
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`${project.gridClass} glass-card rounded-2xl overflow-hidden group cursor-pointer hover:border-primary/40`}
              >
                <div className="md:w-1/2 overflow-hidden h-64 md:h-full relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface via-surface/40 to-transparent pointer-events-none"></div>
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center relative">
                  <span className="text-secondary font-display text-xs tracking-widest uppercase mb-2 font-semibold">
                    {project.subtitle}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    <span className="text-xs text-primary font-body bg-primary/10 border border-primary/20 px-3 py-1 rounded-lg">
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            );
          }

          // Standard Project Layout
          const isEven = index % 2 === 0;
          const accentTextClass = isEven ? "text-secondary hover:text-secondary" : "text-primary hover:text-primary";
          const accentBorderClass = isEven ? "hover:border-secondary/40" : "hover:border-primary/40";
          const tagBgClass = isEven ? "text-secondary bg-secondary/10 border-secondary/20" : "text-primary bg-primary/10 border-primary/20";
          const buttonHoverColor = isEven ? "group-hover:text-secondary" : "group-hover:text-primary";

          return (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`${project.gridClass} glass-card rounded-2xl group cursor-pointer hover:border-opacity-100 ${accentBorderClass}`}
            >
              <div className="w-full h-48 rounded-lg overflow-hidden mb-6 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-surface/20 pointer-events-none"></div>
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <span className={`font-display text-[10px] tracking-widest uppercase font-semibold block mb-1 ${accentTextClass.split(" ")[0]}`}>
                    {project.subtitle}
                  </span>
                  <h3 className={`font-display text-xl font-bold text-white mb-2 transition-colors ${accentTextClass}`}>
                    {project.title}
                  </h3>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto flex justify-between items-center pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${tagBgClass}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className={`material-symbols-outlined text-white/50 transition-colors text-lg ${buttonHoverColor}`}>
                    open_in_new
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-container-lowest/80 backdrop-blur-md animate-fade-in">
          <div
            onClick={() => setSelectedProject(null)}
            className="absolute inset-0 cursor-zoom-out"
          />

          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface-container-low border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col gap-6 scrollbar-thin scrollbar-thumb-white/10 z-10">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-white bg-white/5 hover:bg-white/10 p-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Header */}
            <div>
              <span className="text-secondary font-display text-xs tracking-widest uppercase font-semibold">
                {selectedProject.subtitle}
              </span>
              <h3 className="font-display text-3xl font-extrabold text-white mt-1">
                {selectedProject.title}
              </h3>
            </div>

            {/* Image mock */}
            <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden relative border border-white/5">
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
                <h4 className="font-display text-lg font-semibold text-white">Project Overview</h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {selectedProject.longDescription}
                </p>
                <div className="space-y-2">
                  <h4 className="font-display text-sm font-semibold text-white">Core Capabilities</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="font-body text-xs text-on-surface-variant leading-relaxed">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right tech metadata */}
              <div className="space-y-4 bg-white/5 p-4 rounded-xl border border-white/5">
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-primary font-medium bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/5 flex flex-col gap-2">
                  <a
                    href={selectedProject.demoUrl}
                    className="w-full text-center bg-primary text-on-primary font-bold py-2.5 rounded-lg text-sm hover:bg-primary/95 transition-colors"
                  >
                    Launch Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    className="w-full text-center border border-white/10 text-white font-bold py-2.5 rounded-lg text-sm hover:bg-white/5 transition-colors"
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
