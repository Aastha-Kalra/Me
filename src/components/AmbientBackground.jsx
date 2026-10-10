import React from "react";

const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Grid subtle overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Top right electric blue glow */}
      <div className="absolute -top-[15%] -right-[10%] w-[650px] h-[650px] rounded-full bg-blue-600/12 blur-[140px]" />

      {/* Hero central deep glow */}
      <div className="absolute top-[20%] left-[10%] w-[550px] h-[550px] rounded-full bg-cyan-500/8 blur-[150px]" />

      {/* Middle section subtle cyan aurora */}
      <div className="absolute top-[55%] -left-[10%] w-[600px] h-[600px] rounded-full bg-blue-700/10 blur-[160px]" />

      {/* Bottom section electric glow */}
      <div className="absolute bottom-[5%] right-[5%] w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[150px]" />

      {/* Radial vignette mask to focus attention */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.7)_100%)]" />
    </div>
  );
};

export default AmbientBackground;
