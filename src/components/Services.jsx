import React from "react";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <motion.div
      initial={{ scale: 0.4, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: "tween", duration: 0.4 }}
      className="text-3xl mt-16 flex lg:flex-row flex-col justify-center items-center h-full py-10 text-slate-300 gap-6 xl:px-32"
    >
      <span className="border-2  border-purple-900 shadow-inner shadow-white px-10 py-20 rounded-xl hover:scale-90 ease-in transition-all duration-500 cursor-pointer hover:shadow-green-500 hover:shadow-xl">
        Technical Design
      </span>
      <span className="border-2 border-purple-900 px-16 py-20 rounded-xl shadow-inner shadow-white hover:scale-90 ease-in transition-all duration-500 cursor-pointer hover:shadow-green-500 hover:shadow-xl">
        Code Review
      </span>
      <span className="border-2 border-purple-900 px-10 py-16 rounded-xl shadow-inner shadow-white  text-center hover:scale-90 ease-in transition-all duration-500 cursor-pointer hover:shadow-green-500 hover:shadow-xl">
        Responsive Web <br /> Design
      </span>
      <span className="border-2 border-purple-900 px-10 py-20 rounded-xl shadow-inner shadow-white hover:scale-90 ease-in transition-all duration-500 cursor-pointer hover:shadow-green-500 hover:shadow-xl">
        Employee Benefits
      </span>
    </motion.div>
  );
};

export default Services;
