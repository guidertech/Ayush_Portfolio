"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [showToast, setShowToast] = useState(false);

  const validate = () => {
    const errors = { name: "", email: "", subject: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("sending");

    // Simulate sending API request
    setTimeout(() => {
      setStatus("success");
      setShowToast(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Automatically hide toast after 4 seconds
      setTimeout(() => {
        setShowToast(false);
        setStatus("idle");
      }, 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-section-padding px-4 md:px-gutter max-w-container-max mx-auto relative overflow-hidden">
      {/* Soft background light */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-secondary/5 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="glass-card p-6 sm:p-10 md:p-16 rounded-3xl overflow-hidden relative border border-white/5 z-10 bg-slate-950/40">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 relative z-10 text-left">
          {/* Left Column: Info */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Section Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-6">
                <span className="material-symbols-outlined text-sm">mail</span>
                Contact
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Let's Build <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-black">Something Great</span>
              </h2>

              <p className="font-body text-body-lg text-slate-400 mb-10 max-w-md leading-relaxed">
                Have an exciting project idea, a job opportunity, or simply want to connect? My inbox is always open. Let's collaborate!
              </p>

              {/* Info Items */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-primary group-hover:border-primary/40 group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </div>
                  <span className="text-white font-medium hover:text-primary transition-colors cursor-pointer select-all">
                    guidertech@gmail.com
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg">location_on</span>
                  </div>
                  <span className="text-white font-medium">Global | Remote</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-10 md:mt-0">
              <a
                href="https://github.com/guidertech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-slate-950 hover:border-primary hover:scale-[1.05] transition-all duration-300 text-slate-400"
                aria-label="Link to Github"
              >
                <span className="material-symbols-outlined text-lg">link</span>
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-slate-950 hover:border-primary hover:scale-[1.05] transition-all duration-300 text-slate-400"
                aria-label="Share Portfolio"
              >
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1.5 font-display font-bold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "sending"}
                  className={`w-full bg-slate-950/60 border rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-slate-600 ${formErrors.name ? "border-red-400" : "border-white/5"
                    }`}
                  placeholder="John Doe"
                />
                {formErrors.name && (
                  <p className="text-red-400 text-xs mt-1 font-body text-left">{formErrors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1.5 font-display font-bold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "sending"}
                  className={`w-full bg-slate-950/60 border rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-slate-600 ${formErrors.email ? "border-red-400" : "border-white/5"
                    }`}
                  placeholder="john@example.com"
                />
                {formErrors.email && (
                  <p className="text-red-400 text-xs mt-1 font-body text-left">{formErrors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1.5 font-display font-bold">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={status === "sending"}
                className={`w-full bg-slate-950/60 border rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-slate-600 ${formErrors.subject ? "border-red-400" : "border-white/5"
                  }`}
                placeholder="Project Inquiry"
              />
              {formErrors.subject && (
                <p className="text-red-400 text-xs mt-1 font-body text-left">{formErrors.subject}</p>
              )}
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1.5 font-display font-bold">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={status === "sending"}
                rows={4}
                className={`w-full bg-slate-950/60 border rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all resize-none placeholder-slate-600 ${formErrors.message ? "border-red-400" : "border-white/5"
                  }`}
                placeholder="Tell me about your project..."
              />
              {formErrors.message && (
                <p className="text-red-400 text-xs mt-1 font-body text-left">{formErrors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gradient-to-r from-primary to-secondary text-slate-950 font-display font-extrabold py-3.5 rounded-xl hover:brightness-110 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(56,189,248,0.25)] text-sm"
            >
              {status === "sending" ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin"></span>
                  Sending Message...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Floating Status Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-secondary/15 border border-secondary/40 backdrop-blur-xl text-secondary px-5 py-4 rounded-xl shadow-2xl animate-fade-in text-left">
          <span className="material-symbols-outlined text-glow">check_circle</span>
          <div>
            <p className="font-display font-semibold text-white text-sm">Message Sent Successfully!</p>
            <p className="font-body text-xs text-slate-400">I will get back to you shortly.</p>
          </div>
        </div>
      )}
    </section>
  );
}

