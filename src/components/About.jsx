import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaServer, FaDatabase } from "react-icons/fa6";
import CardTilt from "./CardTilt";

const highlights = [
  {
    icon: FaLaptopCode,
    label: "Website Development",
    detail: "Fast, responsive Next.js & React interfaces with micro-animations and SEO best practices.",
  },
  {
    icon: FaRocket,
    label: "SaaS Products",
    detail: "High-scale platforms: multi-vendor marketplaces, wallet reward engines, and inventory SaaS.",
  },
  {
    icon: FaServer,
    label: "Frontend & Backend",
    detail: "Full-stack synergy from pixel-perfect client code to hardened Node.js/Express architectures.",
  },
  {
    icon: FaDatabase,
    label: "APIs & Database",
    detail: "High-throughput RESTful APIs, secure authentication, and fine-tuned MongoDB database schemas.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-10 sm:py-14 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <span>Behind The Code</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">
            Engineering With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
              Purpose & Precision
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg font-normal">
            Bridging technical depth, modern design, and AI-accelerated execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Photo & Holographic Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <CardTilt maxTilt={10} className="w-full max-w-md">
              <div className="relative p-2.5 rounded-3xl bg-gradient-to-b from-blue-500/30 via-slate-800/40 to-cyan-500/20 border border-blue-500/30 shadow-glow-md">
                <div className="relative rounded-2xl overflow-hidden bg-[#0A0F1F]">
                  <img
                    src="Images/me.jpeg"
                    alt="Aastha Kalra"
                    className="w-full h-auto object-cover max-h-[460px] filter contrast-105 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1F] via-transparent to-transparent opacity-80" />

                  {/* Overlay Name & Tag */}
                  <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                    <div>
                      <p className="text-white font-display font-bold text-xl">Aastha Kalra</p>
                      <p className="text-cyan-300 text-xs font-mono font-medium">Full Stack Engineer</p>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-blue-600/70 border border-cyan-400/50 text-white font-mono font-semibold">
                      2+ Yrs Exp
                    </span>
                  </div>
                </div>
              </div>
            </CardTilt>
          </motion.div>

          {/* Bio Text & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-[2px] w-8 bg-cyan-400"></span>
              <span className="text-cyan-300 font-mono text-xs uppercase tracking-widest font-bold">
                About Me
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-5 leading-snug">
              Full Stack Developer specializing in high-performance web applications & SaaS products.
            </h3>

            <div className="space-y-4 text-slate-100 text-base sm:text-[17px] leading-relaxed mb-6 sm:mb-8 font-normal">
              <p>
                I am a Full Stack Developer (MERN Stack | Next.js & Node.js) with 2+ years of
                hands-on experience building production website development, scalable SaaS products,
                and resilient frontend and backend architectures. I specialize in designing
                high-throughput RESTful APIs, rock-solid security (JWT, 2FA, OAuth), and optimized
                MongoDB databases.
              </p>
              <p>
                I engineer full-stack platforms from the
                ground up — including high-traffic automotive marketplaces (Cardora, GRCars),
                fintech reward engines (GoldCash), and AI-driven platforms. I integrate complex third-party
                ecosystems (Stripe, Cashfree, Twilio, SendGrid, Cloudinary, OpenAI API) while utilizing
                AI-native workflows (Claude, Cursor, Antigravity) for rapid, error-free delivery.
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="glass-card rounded-xl p-4 border border-blue-500/20 hover:border-cyan-400/40 transition-all flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-600/25 border border-blue-500/35 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                      <Icon size={17} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-sm sm:text-base">
                        {item.label}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed font-normal">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
