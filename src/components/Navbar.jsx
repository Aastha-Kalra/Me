import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const navItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "portfolio" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-blue-500/15 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer group flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#0A0F1F] rounded-[10px] flex items-center justify-center">
              <span className="font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-lg">
                AK
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-white text-base tracking-wide group-hover:text-cyan-300 transition-colors">
              Aastha Kalra
            </span>
            <span className="text-xs text-slate-300 font-mono -mt-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Full Stack Dev
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-[#0A0F1F]/60 backdrop-blur-md border border-blue-500/20">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="!text-cyan-300 !bg-blue-600/20 !border-blue-500/40 shadow-sm"
              className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-200 hover:text-white border border-transparent transition-all duration-200 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Action & Socials */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://github.com/Aastha-Kalra"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:border-blue-500/40 transition-all"
          >
            <FaGithub size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/aastha-kalra9927/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:border-blue-500/40 transition-all"
          >
            <FaLinkedinIn size={16} />
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer ml-1 px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-sm hover:shadow-glow-md hover:brightness-110 active:scale-95 transition-all"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-200 hover:text-cyan-300 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#0A0F1F]/95 backdrop-blur-2xl border-b border-blue-500/20 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                activeClass="!text-cyan-300 !bg-blue-600/25 !border-blue-500/30"
                className="px-4 py-2.5 rounded-xl text-base font-semibold text-slate-200 hover:text-white border border-transparent transition-all cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 mt-1 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Aastha-Kalra"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-300"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/aastha-kalra9927/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-300"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;