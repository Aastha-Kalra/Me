import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-blue-500/20 py-8 sm:py-10 md:py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-slate-800">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px]">
              <div className="w-full h-full bg-[#0A0F1F] rounded-[10px] flex items-center justify-center">
                <span className="font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-sm">
                  AK
                </span>
              </div>
            </div>
            <div>
              <p className="font-display font-bold text-white text-base">Aastha Kalra</p>
              <p className="text-xs sm:text-sm text-slate-300 font-mono">Full Stack Developer • AI-Native</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Aastha-Kalra"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-200 hover:text-cyan-300 hover:border-cyan-400/50 transition-all"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/aastha-kalra9927/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-200 hover:text-cyan-300 hover:border-cyan-400/50 transition-all"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="mailto:aasthakalra2004@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-200 hover:text-cyan-300 hover:border-cyan-400/50 transition-all"
            >
              <FaEnvelope size={17} />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 hover:text-white hover:border-cyan-400/60 hover:shadow-glow-sm transition-all cursor-pointer"
          >
            <span>Back To Top</span>
            <FaArrowUp size={12} className="text-cyan-400" />
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-400 gap-3">
          <p>© {currentYear} Aastha Kalra. Engineered with React, Three.js & Tailwind CSS.</p>
          <p className="font-mono text-cyan-300/90 font-medium">
            Designing Experiences That Feel Different.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
