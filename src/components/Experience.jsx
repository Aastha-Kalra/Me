import React from "react";
import { motion } from "framer-motion";
import { HiBriefcase } from "react-icons/hi2";
import { FaCheckCircle } from "react-icons/fa";
import CardTilt from "./CardTilt";

const experiences = [
  {
    period: "Dec 2024 - Present",
    role: "Software Developer",
    company: "Innovative Code Labs Pvt. Ltd.",
    badge: "Current Role",
    color: "#38BDF8",
    highlights: [
      "Leading full-stack website development and SaaS product engineering using Next.js, React.js, Node.js, and TypeScript.",
      "Architected resilient backend services and high-throughput RESTful APIs, protected with enterprise JWT, 2FA, and OAuth.",
      "Engineered optimized MongoDB database schemas, indexing strategies, and aggregation pipelines for scalable web applications.",
      "Built production-ready automotive and e-commerce platforms (Cardora, GRCars) featuring Typesense search and real-time inventory engines.",
      "Engineered secure payment architectures with Stripe and Cashfree, wallet reward systems, and AI models via OpenAI API.",
    ],
    tech: [
      "Website Development",
      "SaaS Products",
      "Frontend & Backend",
      "RESTful APIs",
      "Database (MongoDB)",
      "Next.js",
      "Node.js",
      "Stripe",
    ],
  },
  {
    period: "Apr 2024 - Nov 2024",
    role: "Associate Software Developer",
    company: "Zestgeek Solutions Pvt. Ltd.",
    badge: "API & Frontend",
    color: "#60A5FA",
    highlights: [
      "Delivered and refined RESTful APIs bridging frontend interfaces and backend business logic using Node.js and Express.js.",
      "Designed and tuned MongoDB database schemas, relational lookups, and query performance for production scalability.",
      "Contributed to responsive website development in React.js with centralized client state management using Redux Toolkit.",
      "Applied API security best practices, structured validation middleware, and automated error-handling pipelines.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB Database", "RESTful APIs", "Redux Toolkit"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-10 sm:py-14 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <HiBriefcase size={14} />
            <span>Career Journey</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">
            Work Experience &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
              Impact
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg font-normal">
            Track record building production architectures and delivering customer-facing features.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent -translate-x-1/2 hidden sm:block opacity-40" />

          <div className="space-y-6 sm:space-y-10 md:space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative flex flex-col sm:flex-row items-start"
                >
                  {/* Timeline Center Node */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0A0F1F] border-2 border-cyan-400 shadow-glow-cyan items-center justify-center z-10 top-6">
                    <div className="w-2 h-2 rounded-full bg-cyan-300 animate-ping" />
                  </div>

                  {/* Card Container */}
                  <div
                    className={`w-full sm:w-[calc(50%-2rem)] ${
                      isEven ? "sm:mr-auto sm:text-right" : "sm:ml-auto"
                    }`}
                  >
                    <CardTilt maxTilt={6}>
                      <div className="glass-card rounded-2xl p-6 sm:p-7 border border-blue-500/25 hover:border-cyan-400/50 shadow-lg hover:shadow-glow-sm transition-all duration-300 group text-left">
                        {/* Period & Role */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-cyan-300">
                            {exp.period}
                          </span>
                          <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-blue-900/50 text-slate-200 border border-blue-500/20">
                            {exp.badge}
                          </span>
                        </div>

                        <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h3>

                        <h4 className="text-sm sm:text-base font-semibold text-cyan-300 mb-4">
                          {exp.company}
                        </h4>

                        {/* Bullet Points */}
                        <ul className="space-y-2.5 mb-5 text-sm sm:text-[15px] text-slate-200 leading-relaxed font-normal">
                          {exp.highlights.map((point, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <FaCheckCircle
                                size={14}
                                className="text-cyan-400 shrink-0 mt-1"
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-blue-950/70 border border-blue-500/30 text-slate-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardTilt>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
