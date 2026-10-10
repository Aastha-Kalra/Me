import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectsData } from "./utils/Helper";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import CardTilt from "./CardTilt";
import confetti from "canvas-confetti";

const categories = ["All", "Featured", "Full Stack", "SaaS Products"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? ProjectsData
      : ProjectsData.filter((p) => {
        if (activeCategory === "Featured") return p.category.includes("Featured");
        if (activeCategory === "Full Stack")
          return p.category.includes("Full Stack") || p.tags.includes("Full Stack");
        if (activeCategory === "SaaS Products")
          return (
            p.badge.toLowerCase().includes("saas") ||
            p.tags.some((t) => t.toLowerCase().includes("saas"))
          );
        return p.category.toLowerCase().includes(activeCategory.toLowerCase());
      });

  const handleLaunch = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#2563EB", "#38BDF8", "#60A5FA", "#FFFFFF"],
      });
    } catch (e) {
      // safe fallback
    }
  };

  return (
    <section id="portfolio" className="py-10 sm:py-14 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <HiSparkles size={14} />
            <span>Proven Delivery</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
              Projects & Systems
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg font-normal">
            Live production websites, scalable SaaS products, full-stack architectures, and robust API backends.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${activeCategory === cat
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-sm"
                : "glass-card text-slate-200 hover:text-white hover:border-blue-500/50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with 3D Tilt */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          <AnimatePresence>
            {filteredProjects.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardTilt maxTilt={6} className="h-full">
                  <div className="glass-card rounded-2xl overflow-hidden border border-blue-500/25 hover:border-cyan-400/50 shadow-lg hover:shadow-glow-md flex flex-col justify-between h-full group transition-all duration-300">
                    <div>
                      {/* Image Preview with Overlay */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0A0F1F]">
                        <img
                          src={item.imgSrc}
                          alt={item.name}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "/Images/geogreen.jpg";
                          }}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1F] via-[#0A0F1F]/40 to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-none">
                          <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#0A0F1F]/90 backdrop-blur-md border border-cyan-400/50 text-cyan-300 shadow-sm">
                            {item.badge}
                          </span>
                          <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-blue-900/90 backdrop-blur-md border border-blue-500/40 text-slate-100">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-6 sm:p-8">
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {item.name}
                          </h3>
                        </div>

                        {/* What it solves callout */}
                        {item.problemSolves && (
                          <div className="mb-4 px-3.5 py-2.5 rounded-xl bg-blue-950/60 border border-cyan-500/30 text-xs sm:text-sm flex flex-col md:flex-row items-start gap-2 text-slate-100 font-medium">
                            <span className="font-mono font-bold text-cyan-400 shrink-0">Problem Solved:</span>
                            <span className="leading-relaxed">{item.problemSolves}</span>
                          </div>
                        )}

                        <p className="text-slate-200 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal">
                          {item.about}
                        </p>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-blue-950/70 border border-blue-500/30 text-slate-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="px-6 sm:px-8 pb-6 pt-3 flex items-center justify-between border-t border-slate-800">
                      <a
                        href={item.gitURL}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-white transition-colors"
                      >
                        <FaGithub size={17} />
                        <span>Source Code</span>
                      </a>

                      <a
                        href={item.live}
                        target="_blank"
                        rel="noreferrer"
                        onClick={handleLaunch}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:brightness-110 shadow-glow-sm hover:shadow-glow-md active:scale-95 transition-all"
                      >
                        <span>Live Preview</span>
                        <FaArrowUpRightFromSquare size={12} />
                      </a>
                    </div>
                  </div>
                </CardTilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
