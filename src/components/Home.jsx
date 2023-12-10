import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Type from "./type";
import { Socials } from "./utils/Helper";
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
          <h2 className="lg:text-5xl my-5 text-2xl font-bold text-slate-300  flex w-[57%]">
            And I'm &nbsp;
            <Type
              speed={100}
              words={[
                "a Frontend developer",
                "a Freelancer",
                "a Reactjs developer",
              ]}
            />
          </h2>
          {/* about */}
          {/* <p className="lg:text-4xl text-slate-200   text-2xl block w-[62%] text-center">
            A self-taught front-end developer, my passion is to provide well
            tested and maintainable code, pixel-perfect user interfaces and the
            best user experience using the latest technologies.
          </p> */}

          {/* socials */}
          <div className="flex justify-center items-center gap-14 my-10">
            {Socials &&
              Socials.map((i, index) => {
                return (
                  <motion.a href={i.uril} target="blank">
                    <div
                      key={index}
                      className="w-full flex justify-center items-center "
                    >
                      <span className=" border-2 border-green-500 rounded-full hover:scale-90 ease-in transition-all duration-500 p-5 shadow-lg shadow-green-500 cursor-pointer animate-pulse">
                        {" "}
                        <i.icon size={45} />
                      </span>
                    </div>
                  </motion.a>
                );
              })}
          </div>

          {/* <div className="flex justify-star items-star w-full px-64">
            <button className="px-14 py-4 border-2 border-green-500 rounded-md hover:scale-90 ease-in transition-all duration-500 text-4xl w-ful shadow-lg shadow-green-500">Hire Me</button>
          </div> */}
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
