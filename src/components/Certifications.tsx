"use client";

import { useState } from "react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  credentialId: string;
  icon: string;
  color: string; // Tailored glow color theme
}

const certificationsList: Certificate[] = [
  {
    title: "Full Stack Web Development (MERN)",
    issuer: "Udemy Academy",
    date: "May 2025",
    credentialUrl: "https://udemy.com",
    credentialId: "UC-MERN-DEV-9921",
    icon: "code_blocks",
    color: "from-sky-500 to-indigo-500",
  },
  {
    title: "Next.js Advanced Framework Design",
    issuer: "Vercel Partner Certification",
    date: "July 2025",
    credentialUrl: "https://vercel.com",
    credentialId: "CERT-NEXTJS-7738",
    icon: "deployed_code",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Node.js Backend & API Architectures",
    issuer: "Coursera / Meta",
    date: "Oct 2025",
    credentialUrl: "https://coursera.org",
    credentialId: "META-BACKEND-5542",
    icon: "database",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Advanced React & State Workflows",
    issuer: "FrontEnd Masters",
    date: "Dec 2025",
    credentialUrl: "https://frontendmasters.com",
    credentialId: "FEM-REACT-3398",
    icon: "javascript",
    color: "from-amber-500 to-orange-500",
  },
];

export default function Certifications() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="certifications" className="py-16 md:py-section-padding px-4 md:px-gutter max-w-container-max mx-auto relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Header */}
      <div className="text-center mb-12 md:mb-16 relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white mb-stack-sm tracking-tight">
          Verified <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Certifications</span>
        </h2>
        <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Academic validations and professional credentials verifying expertise in modern full-stack systems.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {certificationsList.map((cert, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden transition-all duration-500 flex flex-col justify-between group border border-white/5 hover:border-primary/20 hover:scale-[1.01]"
          >
            {/* Active Glow Accent Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}
            ></div>

            {/* Left/Top border gradient line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-primary/0 via-primary to-secondary/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

            <div className="flex items-start gap-4">
              {/* Icon Frame */}
              <div className={`p-3 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-primary group-hover:text-white group-hover:border-primary/30 transition-all duration-300`}>
                <span className="material-symbols-outlined text-2xl">{cert.icon}</span>
              </div>

              {/* Title & Info */}
              <div className="flex-1 text-left">
                <h3 className="text-white font-display font-semibold text-lg md:text-xl group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-on-surface-variant text-sm mt-1 flex items-center gap-2">
                  <span className="font-medium text-slate-300">{cert.issuer}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                  <span className="text-slate-400">{cert.date}</span>
                </p>
              </div>
            </div>

            {/* Credential ID and Link Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-white/5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                ID: <span className="text-slate-400">{cert.credentialId}</span>
              </span>
              
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-secondary hover:text-primary transition-colors font-semibold group/link"
              >
                Verify Credential
                <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-0.5">open_in_new</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
