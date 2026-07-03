export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest/60 border-t border-white/5 py-8 mt-12 relative">
      <div className="flex flex-col md:flex-row justify-between items-center py-stack-lg px-gutter max-w-container-max mx-auto gap-6">
        {/* Brand logo/text */}
        <div className="font-display  font-bold text-white tracking-tight text-3xl">
          Ayush
        </div>

        {/* Copyright notice */}
        <div className="text-on-surface-variant font-body text-sm text-center md:order-none order-2">
          &copy; {new Date().getFullYear()} Ayush Portfolio. Built with MERN &amp; Next.js.
        </div>

        {/* Navigation/Social Links */}
        <div className="flex gap-6 md:order-none order-1">
          <a
            href="#"
            className="text-sm font-display text-on-surface-variant hover:text-secondary transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-sm font-display text-on-surface-variant hover:text-secondary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-sm font-display text-on-surface-variant hover:text-secondary transition-colors"
          >
            Email
          </a>
          <a
            href="#"
            className="text-sm font-display text-on-surface-variant hover:text-secondary transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
