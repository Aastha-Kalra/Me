import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const Home = () => {
  return (
    <section
      id="home"
      className="flex justify-center items-center flex-col gap-12 relative pt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full ">
        {/* container */}
        <div></div>
        {/* my image */}
        <div className="w-full h-full flex items-start lg:items-center justify-center">
          <motion.img
          initial={{y:0}}
          animate={{y:[-10,10,-10]}}
          transition={{
            repeat:Infinity,
            duration:2,
            ease:"linear"
          }}
            src="https://media.licdn.com/dms/image/D5603AQH93Rhk9Ahg2g/profile-displayphoto-shrink_200_200/0/1684078799996?e=1707350400&v=beta&t=o1Kp4znizyo4HTiRJ142Xr1VHXW8fST9Hkp9PUl_2jA"
            className="w-1/2 rounded-full object-contain shadow-2xl shadow-green-500"
          ></motion.img>
        </div>
      </div>
    </section>
  );
};

export default Home;
