import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Type from './type'
const Home = () => {
  return (
    <section
      id="home"
      className="flex justify-center items-center flex-col gap-12 relative pt-44"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full ">
        {/* container */}
        <div className="text-white flex-col flex justify-center items-center w-full gap-4">
          <h2 className="text-3xl lg:text-8xl text-slate-300">
            Hello, It's me
            <span className="block  lg:text-9xl text-white tracking-wider text-4xl mt-4">
              Aastha Kalra
            </span>
          </h2>
          {/* typewriter */}
          <h2 className="lg:text-5xl mt-4 text-2xl text-slate-300  flex w-[57%]">
            And I'm &nbsp;
            <Type 
            speed={100}
            words={["a Frontend developer", "a Freelancer", "a Reactjs developer"]}/>
          </h2>
        </div>
        {/* my image */}
        <div className="w-full h-full flex items-start lg:items-center justify-center">
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
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
