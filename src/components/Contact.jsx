import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedinIn, FaGithub, FaCopy, FaCheck, FaPaperPlane } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/config";
import { toast } from "react-toastify";
import CardTilt from "./CardTilt";
import confetti from "canvas-confetti";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("aasthakalra2004@gmail.com");
    setCopied(true);
    toast.info("Email copied to clipboard!", { position: "bottom-right", theme: "dark" });
    setTimeout(() => setCopied(false), 2500);
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!input.name.trim() || !input.email.trim() || !input.message.trim()) {
      toast.error("Please fill in your name, email, and message.", {
        position: "bottom-right",
        theme: "dark",
      });
      return;
    }

    setLoading(true);

    try {
      // Check if Firebase is properly configured
      const isFirebaseConfigured = !!import.meta.env.VITE_APP_FIREBASE_PROJECT_ID;

      if (isFirebaseConfigured) {
        await addDoc(collection(db, "messages"), {
          ...input,
          createdAt: new Date().toISOString(),
        });
        toast.success("Message sent successfully! I'll get back to you soon.", {
          position: "bottom-right",
          theme: "dark",
        });
      } else {
        // Fallback gracefully opening mailto client if backend keys aren't loaded
        const mailtoUrl = `mailto:aasthakalra2004@gmail.com?subject=${encodeURIComponent(
          input.subject || `Message from ${input.name}`
        )}&body=${encodeURIComponent(
          `Name: ${input.name}\nEmail: ${input.email}\n\nMessage:\n${input.message}`
        )}`;
        window.open(mailtoUrl, "_blank");
        toast.success("Opening your email client to send message...", {
          position: "bottom-right",
          theme: "dark",
        });
      }

      // Celebrate
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ["#2563EB", "#38BDF8", "#60A5FA", "#FFFFFF"],
        });
      } catch (err) {}

      setInput({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Could not send directly. Opening your default email client...", {
        position: "bottom-right",
        theme: "dark",
      });
      window.location.href = `mailto:aasthakalra2004@gmail.com?subject=Contact%20from%20Portfolio&body=${encodeURIComponent(
        input.message
      )}`;
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-14 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <HiSparkles size={14} />
            <span>Start A Conversation</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">
            Let's Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
              Exceptional Together
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg font-normal">
            Have a project in mind, an engineering role open, or want to discuss full-stack & AI architecture? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
          {/* Direct Channels Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-4 sm:space-y-6"
          >
            {/* Primary Email Card with Copy Button */}
            <CardTilt maxTilt={8}>
              <div className="glass-card rounded-2xl p-6 sm:p-7 border border-blue-500/25 hover:border-cyan-400/50 shadow-lg hover:shadow-glow-sm transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/25 border border-blue-500/35 flex items-center justify-center text-cyan-300">
                    <FaEnvelope size={20} />
                  </div>
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-blue-950/80 border border-blue-500/40 text-slate-200 hover:text-white hover:border-cyan-400/60 transition-all cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <FaCheck size={12} className="text-cyan-400" />
                        <span className="text-cyan-400 font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <FaCopy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-1">Direct Email</h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-3 font-normal">Response usually within 24 hours</p>
                <a
                  href="mailto:aasthakalra2004@gmail.com"
                  className="text-base sm:text-lg font-mono font-semibold text-cyan-300 hover:text-white break-all transition-colors"
                >
                  aasthakalra2004@gmail.com
                </a>
              </div>
            </CardTilt>

            {/* LinkedIn Card */}
            <CardTilt maxTilt={8}>
              <a
                href="https://www.linkedin.com/in/aastha-kalra9927/"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div className="glass-card rounded-2xl p-6 sm:p-7 border border-blue-500/20 hover:border-cyan-400/50 shadow-lg hover:shadow-glow-sm transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/25 border border-blue-500/35 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                      <FaLinkedinIn size={22} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        LinkedIn Profile
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 font-normal">Connect for career opportunities</p>
                    </div>
                  </div>
                </div>
              </a>
            </CardTilt>

            {/* GitHub Card */}
            <CardTilt maxTilt={8}>
              <a
                href="https://github.com/Aastha-Kalra"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div className="glass-card rounded-2xl p-6 sm:p-7 border border-blue-500/20 hover:border-cyan-400/50 shadow-lg hover:shadow-glow-sm transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/25 border border-blue-500/35 flex items-center justify-center text-slate-100 group-hover:scale-110 transition-transform">
                      <FaGithub size={22} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        GitHub Repositories
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 font-normal">Explore open source code & commits</p>
                    </div>
                  </div>
                </div>
              </a>
            </CardTilt>
          </motion.div>

          {/* Interactive Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-9 border border-blue-500/25 shadow-xl">
              <h3 className="font-display text-2xl font-bold text-white mb-2">Send A Message</h3>
              <p className="text-slate-300 text-sm sm:text-base mb-6 sm:mb-8 font-normal">
                Fill out the form below and it will be delivered directly to my inbox.
              </p>

              <form onSubmit={sendMessage} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={input.name}
                      onChange={handleInput}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0A0F1F]/90 border border-blue-500/30 text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={input.email}
                      onChange={handleInput}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0A0F1F]/90 border border-blue-500/30 text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={input.subject}
                    onChange={handleInput}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0A0F1F]/90 border border-blue-500/30 text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={input.message}
                    onChange={handleInput}
                    placeholder="Tell me about your project, timeline, or position..."
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0A0F1F]/90 border border-blue-500/30 text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:brightness-110 shadow-glow-md disabled:opacity-50 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <FaPaperPlane size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
