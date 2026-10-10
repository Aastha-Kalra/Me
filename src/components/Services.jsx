import React from "react";
import { motion } from "framer-motion";
import { HiSparkles, HiServerStack, HiCommandLine } from "react-icons/hi2";
import { FaShieldHalved } from "react-icons/fa6";
import CardTilt from "./CardTilt";

const capabilities = [
  {
    icon: HiCommandLine,
    title: "Full-Stack Web Architecture",
    description:
      "End-to-end production applications built on Next.js and React. High-performance rendering, responsive interfaces, and type-safe state management.",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: HiServerStack,
    title: "High-Performance APIs & DBs",
    description:
      "Robust RESTful services built with Node.js and Express.js, backed by optimized MongoDB schemas, indexing, and Typesense search engines.",
    tech: ["Node.js", "Express.js", "MongoDB", "Typesense"],
  },
  {
    icon: FaShieldHalved,
    title: "Secure FinTech & Integrations",
    description:
      "Hardened authentication (JWT, 2FA, OAuth) and production integrations with Stripe, Cashfree, SendGrid, Twilio, and Cloudinary.",
    tech: ["Stripe", "Cashfree", "JWT & 2FA", "SendGrid"],
  },
  {
    icon: HiSparkles,
    title: "AI-Native Engineering",
    description:
      "Leveraging Claude, Cursor, and Antigravity to build, test, and ship features 3x faster with OpenAI API integrations in production.",
    tech: ["OpenAI API", "Claude", "Cursor", "Antigravity"],
  },
];

const Services = () => {
  return (
    <section className="py-10 sm:py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <span>What I Deliver</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">
            Engineered For{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
              Speed & Scale
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg font-normal">
            Architecting robust full-stack solutions with production-tested reliability.
          </p>
        </div>

        {/* 4 Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardTilt maxTilt={8} className="h-full">
                  <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full border border-blue-500/20 hover:border-cyan-400/50 hover:shadow-glow-sm transition-all duration-300 group">
                    <div>
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600/30 to-cyan-400/20 border border-blue-500/30 flex items-center justify-center text-cyan-300 mb-5 sm:mb-6 group-hover:scale-110 group-hover:shadow-glow-cyan transition-all duration-300">
                        <Icon size={24} />
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2.5 sm:mb-3 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-200 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                      {item.tech.map((t) => (
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
