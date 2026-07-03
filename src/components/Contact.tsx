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
    <section id="contact" className="px-gutter max-w-container-max mx-auto mb-section-padding relative">
      <div className="glass-card p-8 md:p-16 rounded-[2rem] overflow-hidden relative border border-white/10">
        {/* Soft background light */}
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="grid md:grid-cols-2 gap-16 relative z-10">
          {/* Left Column: Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-6 leading-none tracking-tight">
                Get in <span className="text-secondary text-glow">Touch</span>
              </h2>
              <p className="font-body text-body-lg text-on-surface-variant mb-10 max-w-md">
                Have an interesting project in mind, a job opportunity, or just want to chat? My inbox is always open. Let's build something together!
              </p>

              {/* Info Items */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/45 transition-colors">
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </div>
                  <span className="text-white font-medium hover:text-primary transition-colors cursor-pointer select-all">
                    hello@devcraft.portfolio
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg">location_on</span>
                  </div>
                  <span className="text-white font-medium">Global | Remote</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-12 md:mt-0">
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary hover:text-primary transition-all text-white"
                aria-label="Link to Github"
              >
                <span className="material-symbols-outlined">link</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary hover:text-primary transition-all text-white"
                aria-label="Share Portfolio"
              >
                <span className="material-symbols-outlined">share</span>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-2 font-display font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "sending"}
                  className={`w-full bg-surface-container-lowest border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
                    formErrors.name ? "border-red-400 focus:ring-red-400" : "border-white/10 focus:ring-primary"
                  }`}
                  placeholder="John Doe"
                />
                {formErrors.name && (
                  <p className="text-red-400 text-xs mt-1.5 font-body">{formErrors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-2 font-display font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "sending"}
                  className={`w-full bg-surface-container-lowest border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
                    formErrors.email ? "border-red-400 focus:ring-red-400" : "border-white/10 focus:ring-primary"
                  }`}
                  placeholder="john@example.com"
                />
                {formErrors.email && (
                  <p className="text-red-400 text-xs mt-1.5 font-body">{formErrors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-2 font-display font-semibold">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={status === "sending"}
                className={`w-full bg-surface-container-lowest border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
                  formErrors.subject ? "border-red-400 focus:ring-red-400" : "border-white/10 focus:ring-primary"
                }`}
                placeholder="Project Inquiry"
              />
              {formErrors.subject && (
                <p className="text-red-400 text-xs mt-1.5 font-body">{formErrors.subject}</p>
              )}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-on-surface-variant mb-2 font-display font-semibold">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={status === "sending"}
                rows={4}
                className={`w-full bg-surface-container-lowest border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none ${
                  formErrors.message ? "border-red-400 focus:ring-red-400" : "border-white/10 focus:ring-primary"
                }`}
                placeholder="Tell me about your project..."
              />
              {formErrors.message && (
                <p className="text-red-400 text-xs mt-1.5 font-body">{formErrors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-primary text-on-primary font-display font-bold py-4 rounded-lg hover:bg-primary/95 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "sending" ? (
                <>
                  <span className="w-5 h-5 rounded-full border-2 border-on-primary border-t-transparent animate-spin"></span>
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
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-secondary/15 border border-secondary/40 backdrop-blur-xl text-secondary px-5 py-4 rounded-xl shadow-xl animate-fade-in">
          <span className="material-symbols-outlined text-glow">check_circle</span>
          <div>
            <p className="font-display font-semibold text-white text-sm">Message Sent Successfully!</p>
            <p className="font-body text-xs text-on-surface-variant">I will get back to you shortly.</p>
          </div>
        </div>
      )}
    </section>
  );
}
