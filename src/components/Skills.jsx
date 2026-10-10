import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiStripe,
  SiPostman,
  SiGit,
  SiGithub,
  SiOpenai,
} from "react-icons/si";
import {
  FaServer,
  FaShieldHalved,
  FaSearchengin,
  FaWandMagicSparkles,
  FaDatabase,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa6";
import CardTilt from "./CardTilt";

const skillCategories = [
  {
    id: "all",
    label: "All Skills",
  },
  {
    id: "frontend",
    label: "Frontend & Web",
  },
  {
    id: "backend",
    label: "Backend & APIs",
  },
  {
    id: "database",
    label: "Database",
  },
  {
    id: "saas",
    label: "SaaS & Integrations",
  },
  {
    id: "ai",
    label: "AI-Native Stack",
  },
];

const skillsList = [
  // Frontend & Web
  { name: "Website Development", category: "frontend", icon: FaLaptopCode, level: "Advanced", color: "#38BDF8" },
  { name: "Next.js", category: "frontend", icon: SiNextdotjs, level: "Advanced", color: "#F8FAFC" },
  { name: "React.js", category: "frontend", icon: SiReact, level: "Advanced", color: "#38BDF8" },
  { name: "TypeScript", category: "frontend", icon: SiTypescript, level: "Proficient", color: "#3B82F6" },
  { name: "JavaScript (ES6+)", category: "frontend", icon: SiJavascript, level: "Advanced", color: "#FBBF24" },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss, level: "Advanced", color: "#38BDF8" },
  { name: "Redux Toolkit", category: "frontend", icon: SiRedux, level: "Proficient", color: "#A855F7" },

  // Backend & APIs
  { name: "Node.js", category: "backend", icon: SiNodedotjs, level: "Advanced", color: "#22C55E" },
  { name: "Express.js", category: "backend", icon: SiExpress, level: "Advanced", color: "#94A3B8" },
  { name: "RESTful APIs", category: "backend", icon: FaServer, level: "Advanced", color: "#38BDF8" },
  { name: "JWT & 2FA Auth", category: "backend", icon: FaShieldHalved, level: "Production", color: "#38BDF8" },
  { name: "Postman", category: "backend", icon: SiPostman, level: "Proficient", color: "#F97316" },

  // Database
  { name: "MongoDB", category: "database", icon: SiMongodb, level: "Advanced", color: "#10B981" },
  { name: "Database Modeling", category: "database", icon: FaDatabase, level: "Advanced", color: "#34D399" },
  { name: "Firebase", category: "database", icon: SiFirebase, level: "Proficient", color: "#F59E0B" },
  { name: "Typesense Search", category: "database", icon: FaSearchengin, level: "Proficient", color: "#EF4444" },

  // SaaS & Integrations
  { name: "SaaS Product Eng.", category: "saas", icon: FaRocket, level: "Production", color: "#F43F5E" },
  { name: "Stripe Payments", category: "saas", icon: SiStripe, level: "Production", color: "#6366F1" },
  { name: "Git & GitHub", category: "saas", icon: SiGithub, level: "Advanced", color: "#F8FAFC" },

  // AI
  { name: "OpenAI API", category: "ai", icon: SiOpenai, level: "Production", color: "#10B981" },
  { name: "Claude AI", category: "ai", icon: FaWandMagicSparkles, level: "Daily Driver", color: "#D97706" },
  { name: "Cursor IDE", category: "ai", icon: FaWandMagicSparkles, level: "Daily Driver", color: "#3B82F6" },
  { name: "Antigravity", category: "ai", icon: FaWandMagicSparkles, level: "AI Workflows", color: "#38BDF8" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsList
      : skillsList.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-10 sm:py-14 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <span>Tech Arsenal</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
              Technologies
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg font-normal">
            Core mastery across website development, SaaS products, frontend & backend engineering, scalable RESTful APIs, and optimized databases.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 md:mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-sm"
                  : "glass-card text-slate-200 hover:text-white hover:border-blue-500/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid with 3D Tilt */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5"
        >
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
              >
                <CardTilt maxTilt={10} className="h-full">
                  <div className="glass-card rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center justify-between h-full border border-blue-500/20 hover:border-cyan-400/50 hover:shadow-glow-sm group transition-all duration-300">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#0A0F1F] border border-blue-500/30 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-cyan-400/50 transition-transform duration-300">
                      <Icon
                        size={28}
                        style={{ color: skill.color }}
                        className="transition-transform group-hover:rotate-6"
                      />
                    </div>

                    <h4 className="font-display font-semibold text-white text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>

                    <span className="mt-2 text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-300">
                      {skill.level}
                    </span>
                  </div>
                </CardTilt>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
