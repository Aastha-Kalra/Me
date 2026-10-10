import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowRight, FaCode } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import Type from "./Type";
import ThreeHeroScene from "./ThreeHeroScene";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 md:pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-4 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left z-10"
          >
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/35 backdrop-blur-md mb-5 sm:mb-6 w-fit shadow-glow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Available for Full-Time Roles & Impactful Projects
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white leading-[1.15] mb-4 sm:mb-5">
              Building Digital Experiences That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 glow-text">
                Feel Different.
              </span>
            </h1>

            {/* Intro & Name */}
            <div className="flex flex-col gap-1 mb-4">
              <p className="text-lg sm:text-xl text-slate-300 font-medium">
                Hey, I'm{" "}
                <span className="text-white font-bold underline decoration-blue-500/70 decoration-2 underline-offset-4">
                  Aastha Kalra
                </span>
                —
              </p>
              <div className="text-lg sm:text-2xl font-bold text-white flex items-center flex-wrap">
                <span className="text-slate-300 mr-2 font-medium">Specializing as</span>
                <Type
                  speed={80}
                  words={[
                    "a Website Development & UI Engineer",
                    "a Production SaaS Products Builder",
                    "a Full-Stack Frontend & Backend Dev",
                    "an APIs & Database Architect",
                    "a Next.js & MERN Specialist",
                  ]}
                />
              </div>
            </div>

            {/* Value Proposition Description */}
            <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed mb-6 sm:mb-8 font-normal">
              Full Stack Developer (2+ yrs) engineering responsive{" "}
              <span className="text-cyan-300 font-semibold">website development</span>, high-scale{" "}
              <span className="text-cyan-300 font-semibold">SaaS products</span>, and seamless{" "}
              <span className="text-cyan-300 font-semibold">frontend and backend</span> architectures powered by
              secure <span className="text-cyan-300 font-semibold">RESTful APIs and optimized databases</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-9">
              <Link
                to="portfolio"
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer group px-6 sm:px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:brightness-110 shadow-glow-md transition-all flex items-center gap-2 active:scale-95 text-sm sm:text-base"
              >
                <span>Explore My Work</span>
                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer px-6 sm:px-8 py-3.5 rounded-xl font-semibold text-slate-100 bg-[#0A0F1F]/80 hover:bg-[#0A0F1F] border border-blue-500/40 hover:border-cyan-400 transition-all flex items-center gap-2 hover:text-white text-sm sm:text-base"
              >
                <span>Let's Connect</span>
              </Link>

              <a
                href="https://github.com/Aastha-Kalra"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3.5 rounded-xl text-slate-200 hover:text-white glass-card flex items-center gap-2 text-sm font-semibold hover:border-blue-500/50 transition-all"
              >
                <FaGithub size={18} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>

            {/* Social Links & Quick Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-4 border-t border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Core Stack:
              </span>
              {["Next.js", "React.js", "Node.js", "TypeScript", "MongoDB", "AI-Assisted"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#0A0F1F] border border-blue-500/30 text-slate-200 font-mono font-medium"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right 3D Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center mt-2 lg:mt-0"
          >
            {/* Interactive 3D Canvas */}
            <div className="w-full relative">
              <ThreeHeroScene />

              {/* Floating Stat Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute top-4 sm:top-6 -left-2 sm:left-4 glass-card px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-blue-500/35 shadow-lg backdrop-blur-xl pointer-events-none"
              >
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/25 border border-blue-500/40 flex items-center justify-center text-cyan-300">
                    <HiSparkles size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">AI-Native Developer</p>
                    <p className="text-[11px] text-slate-300 font-medium">High Velocity Delivery</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stat Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-4 sm:bottom-6 -right-2 sm:right-4 glass-card px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-blue-500/35 shadow-lg backdrop-blur-xl pointer-events-none"
              >
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-600/25 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                    <FaCode size={14} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">2+ Years Exp</p>
                    <p className="text-[11px] text-slate-300 font-medium">Full-Stack Production</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer flex flex-col items-center gap-1"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-blue-500/40 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Home;
