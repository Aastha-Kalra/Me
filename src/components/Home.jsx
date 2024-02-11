import React from "react";
import { motion } from "framer-motion";
import Type from "./Type";
import { Socials } from "./utils/Helper";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <section
      id="home"
      className="flex justify-center items-center flex-col gap-12 relative pt-24"
    >
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "tween", duration: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-2 w-full "
      >
        {/* container */}
        <div className="text-white flex-col flex justify-center items-center w-full py-2">
          <div className="w-full flex flex-col justify-start items-start pl-14 xl:ml-[150px]">
            <h2 className="text-3xl xl:text-3xl text-slate-300">
              Hello, It's me
              <span className="block  lg:text-5xl text-white tracking-wider text-4xl mt-4">
                Aastha Kalra
              </span>
            </h2>
            {/* typewriter */}
            <h2 className="lg:text-4xl my-2 text-2xl font-bold text-slate-300  flex">
              I'm &nbsp;
              <Type
                speed={100}
                words={[
                  "a Frontend developer",
                  "a Freelancer",
                  "a Reactjs developer",
                ]}
              />
            </h2>
          </div>
          {/* about */}
          <p className=" text-slate-200 text-xl px-14 xl:ml-[75px] text-justify">
            A self-taught front-end developer, my passion is to provide well
            tested and maintainable code, pixel-perfect user interfaces and the
            best user experience using the latest technologies.
          </p>

          {/* socials */}
          <div className="flex justify-start items-start gap-14 my-6 w-full px-14 xl:px-32">
            {Socials &&
              Socials.map((i, index) => {
                return (
                  <motion.a href={i.uril} key={index} target="blank">
                    <div
                      key={index}
                      className="w-full flex justify-start items-start "
                    >
                      <span className=" border-2 border-green-500 rounded-full hover:scale-90 ease-in transition-all duration-500 p-5 shadow-lg shadow-green-500 cursor-pointer animate-pulse">
                        {" "}
                        <i.icon size={30} />
                      </span>
                    </div>
                  </motion.a>
                );
              })}
          </div>

          <div className="flex w-full xl:px-32 px-14">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="px-14 py-3 border-2 border-green-500 rounded-3xl  hover:scale-90 ease-in transition-all duration-500 text-4xl shadow-lg shadow-green-500 cursor-pointer"
            >
              Hire Me
            </Link>
          </div>
        </div>
        {/* my image */}
        <div className="w-full h-full flex px-5 items-start lg:items-cente justify-center">
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
            src="Images/me.jpeg"
            className="md:w-1/2 mt-10 rounded-full object-contain shadow-2xl shadow-green-500"
          ></motion.img>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
