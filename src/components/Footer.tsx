export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/20 py-8 relative">
      <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-gutter max-w-container-max mx-auto gap-6">
        {/* Brand logo/text */}
        <div className="font-display font-black text-white tracking-tight text-2xl">
          <span>Ayush</span>
          <span className="text-primary">.dev</span>
        </div>

        {/* Copyright notice */}
        <div className="text-slate-500 font-body text-sm text-center md:order-none order-2">
          &copy; {new Date().getFullYear()} Ayush. All rights reserved.
        </div>

        {/* Navigation/Social Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 md:order-none order-1">
          <a
            href="https://github.com/guidertech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wider font-semibold text-slate-400 hover:text-primary transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-xs uppercase tracking-wider font-semibold text-slate-400 hover:text-primary transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:guidertech@gmail.com"
            className="text-xs uppercase tracking-wider font-semibold text-slate-400 hover:text-primary transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
