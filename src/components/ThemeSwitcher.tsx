"use client";

import { useEffect, useState } from "react";

interface ThemeColors {
  name: string;
  label: string;
  dotColor: string; // Color to display in switcher UI
  primary: string;
  secondary: string;
  primaryContainer: string;
  secondaryContainer: string;
  onPrimary: string;
  onSecondary: string;
}

const themes: ThemeColors[] = [
  {
    name: "ocean",
    label: "Slate Ocean (Default)",
    dotColor: "#38bdf8",
    primary: "#38bdf8",
    secondary: "#34d399",
    primaryContainer: "#1e293b",
    secondaryContainer: "#0f172a",
    onPrimary: "#0b1528",
    onSecondary: "#0b1528",
  },
  {
    name: "obsidian",
    label: "Obsidian Silver",
    dotColor: "#ffffff",
    primary: "#ffffff",
    secondary: "#a1a1aa",
    primaryContainer: "#27272a",
    secondaryContainer: "#18181b",
    onPrimary: "#000000",
    onSecondary: "#ffffff",
  },
  {
    name: "indigo",
    label: "Indigo Rose",
    dotColor: "#6366f1",
    primary: "#6366f1",
    secondary: "#f43f5e",
    primaryContainer: "#312e81",
    secondaryContainer: "#881337",
    onPrimary: "#ffffff",
    onSecondary: "#ffffff",
  },
  {
    name: "lavender",
    label: "Lavender Teal",
    dotColor: "#c0c1ff",
    primary: "#c0c1ff",
    secondary: "#4fdbc8",
    primaryContainer: "#8083ff",
    secondaryContainer: "#04b4a2",
    onPrimary: "#1000a9",
    onSecondary: "#003731",
  },
  {
    name: "teal",
    label: "Teal Violet",
    dotColor: "#4fdbc8",
    primary: "#4fdbc8",
    secondary: "#c0c1ff",
    primaryContainer: "#04b4a2",
    secondaryContainer: "#8083ff",
    onPrimary: "#003731",
    onSecondary: "#1000a9",
  },
  {
    name: "emerald",
    label: "Emerald Blue",
    dotColor: "#34d399",
    primary: "#34d399",
    secondary: "#60a5fa",
    primaryContainer: "#064e3b",
    secondaryContainer: "#1e3a8a",
    onPrimary: "#022c22",
    onSecondary: "#ffffff",
  },
  {
    name: "amber",
    label: "Amber Pink",
    dotColor: "#fbbf24",
    primary: "#fbbf24",
    secondary: "#f472b6",
    primaryContainer: "#78350f",
    secondaryContainer: "#831843",
    onPrimary: "#000000",
    onSecondary: "#ffffff",
  },
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("ocean");

  const applyTheme = (theme: ThemeColors) => {
    const root = document.documentElement;
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--secondary", theme.secondary);
    root.style.setProperty("--primary-container", theme.primaryContainer);
    root.style.setProperty("--secondary-container", theme.secondaryContainer);
    root.style.setProperty("--on-primary", theme.onPrimary);
    root.style.setProperty("--on-secondary", theme.onSecondary);
    
    setSelectedTheme(theme.name);
    localStorage.setItem("portfolio-accent", theme.name);
  };

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-accent");
    if (saved) {
      const theme = themes.find((t) => t.name === saved);
      if (theme) {
        applyTheme(theme);
      }
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 animate-fade-in">
      {/* Settings Panel */}
      {isOpen && (
        <div className="glass-card p-4 rounded-2xl border border-white/10 shadow-2xl flex flex-col gap-3 min-w-[160px] bg-surface-container-low/90 backdrop-blur-xl">
          <span className="text-xs uppercase tracking-wider text-on-surface-variant font-bold font-display px-1 border-b border-white/10 pb-1.5">
            Accent Color
          </span>
          <div className="flex flex-col gap-1.5">
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => applyTheme(t)}
                className={`flex items-center gap-3 px-2 py-1.5 rounded-lg text-sm transition-colors text-left w-full cursor-pointer hover:bg-white/5 ${
                  selectedTheme === t.name
                    ? "text-primary font-bold bg-white/5"
                    : "text-on-surface-variant hover:text-white"
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border border-white/10"
                  style={{ backgroundColor: t.dotColor }}
                />
                <span className="font-body text-xs">{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-primary text-on-primary shadow-[0_4px_20px_rgba(192,193,255,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer border border-primary/20"
        aria-label="Customize accent colors"
      >
        <span className="material-symbols-outlined text-2xl animate-spin-slow">
          palette
        </span>
      </button>
    </div>
  );
}
