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
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center px-gutter py-stack-md max-w-container-max mx-auto w-full">
        {/* Brand */}
        <div className="font-display text-headline-lg font-extrabold text-primary text-glow cursor-pointer text-3xl">
          Ayush
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-stack-lg items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`transition-all duration-300 ${activeSection === link.href.replace("#", "")
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
                }`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-primary text-on-primary px-stack-md py-2 rounded-lg font-bold hover:bg-primary/95 transition-all cursor-pointer active:scale-95 ml-4">
            Resume
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-on-surface p-1 hover:bg-white/5 rounded-md transition-colors"
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-surface-container/95 border-b border-white/10 backdrop-blur-2xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-screen py-6 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center gap-6 px-gutter">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`text-lg transition-colors ${activeSection === link.href.replace("#", "")
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
                }`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold hover:bg-primary/95 transition-all cursor-pointer w-full max-w-xs mt-2">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}
