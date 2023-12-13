import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "https://i.postimg.cc/QCpkR50c/html.png",
    "https://i.postimg.cc/SNhGcTxd/css.png",
    "https://i.postimg.cc/gj9HS4qY/javascript.png",
    "https://i.postimg.cc/bYQxYx9t/tailwind.png",
    "https://i.postimg.cc/13Y67JsL/react.png",
    "https://i.postimg.cc/d0xBdJhZ/git.png",
    "https://i.postimg.cc/SNffd6Xh/github.png",
    "https://i.postimg.cc/HkTB1ZGn/nextjs.png",
    //    'https://i.postimg.cc/BtWq6p16/redux-toolkit.jpg'
  ];

  return (
    <div id="skills" className=" max-w-[90%] mx-auto px-3 py-16 sm:py-28">
      <motion.p
        className="text-3xl sm:text-5xl font-bold text-center flex  justify-center items-center "

      >
         <img
            src="https://www.aimeeprovence.com.au/wp-content/uploads/2018/07/gold-leaf.png"
            alt=""
            className="w-14  -scale-x-110 -rotate-45 "
          />
        <span className=" mr-5 text-green-500">My</span>
        <span className="flex justify-center items-center">
        <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "tween", duration: 0.4 }}
          className="flex justify-around w-40 items-center"
        >
         
          <p className=" text-green-500">Skills </p>
          <img
            src="https://www.aimeeprovence.com.au/wp-content/uploads/2018/07/gold-leaf.png"
            alt=""
            className="w-14 rotate-45"
          />
        </motion.div>
      </span>
      </motion.p>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 m-8 sm:m-16 md:mx-0 justify-evenly items-center">
        {skills.map((i, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            <motion.img
              src={i}
              alt={"skills"}
              width={300}
              height={300}
              className="w-24 sm:w-36 md:w-96"
              draggable={false}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
