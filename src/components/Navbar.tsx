"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Hero", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "journey", "contact"];
      let current = "hero";
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          if (el.offsetTop <= scrollPosition) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 bg-slate-950/60 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-full px-6 py-2.5 transition-all duration-300">
      <div className="flex justify-between items-center w-full">
        {/* Brand Logo */}
        <div className="font-display font-black text-2xl tracking-tight cursor-pointer hover:scale-[1.02] transition-transform duration-300">
          <span className="text-white">Ayush</span>
          <span className="text-primary">.dev</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-1 items-center">
          {navLinks.map((link) => {
            const isLinkActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-sm px-4 py-1.5 rounded-full font-medium transition-all duration-300 ${
                  isLinkActive
                    ? "bg-primary/15 text-primary shadow-[inset_0_0_8px_rgba(56,189,248,0.2)] border border-primary/20"
                    : "text-slate-400 hover:text-white border border-transparent"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          
          <button className="bg-gradient-to-r from-primary to-secondary text-slate-950 px-5 py-1.5 rounded-full font-bold hover:brightness-110 active:scale-95 transition-all cursor-pointer text-sm ml-4 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
            Resume
          </button>
        </div>

        {/* Mobile Menu Action Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-1.5 hover:bg-white/5 rounded-full transition-colors flex items-center justify-center border border-white/5"
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Menu (Capsule Attached) */}
      <div
        className={`md:hidden absolute top-[115%] left-0 w-full bg-slate-950/90 border border-white/10 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-300 overflow-hidden ${
          mobileMenuOpen
            ? "max-h-[380px] py-4 opacity-100"
            : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-4 px-4">
          {navLinks.map((link) => {
            const isLinkActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`w-full text-center py-2 rounded-lg text-sm font-semibold transition-all ${
                  isLinkActive
                    ? "bg-primary/10 text-primary border border-primary/10"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <button className="bg-gradient-to-r from-primary to-secondary text-slate-950 w-full py-2.5 rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all cursor-pointer text-sm mt-2 shadow-[0_4px_12px_rgba(56,189,248,0.25)]">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}
