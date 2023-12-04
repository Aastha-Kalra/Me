import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const MenuItem = ({ menu }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="hover:bg-green-500 rounded-full p-4 flex justify-center items-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <menu.Icon className="text-gray-200 hover:text-black text-3xl  " />
      <AnimatePresence>
        {isHovered ? (
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            className="absolute rounded-md px-4 py-2 -left-[140px] bg-white after:bg-white after:w-3 after:h-3 after:absolute after:-right-1 after:top-4 after:rotate-45 text-2xl font-semibold"
          >
            <p>{menu?.name}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default MenuItem;
