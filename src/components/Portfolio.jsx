import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProjectsData } from "./utils/Helper";
import { FaGithub, FaEye } from "react-icons/fa6";
const Portfolio = () => {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const handleActive1 = () => {
    setActive1(true);
    setActive2(false);
    setActive3(false);
    setActive4(false);
  };

  const handleActive2 = () => {
    setActive1(false);
    setActive2(true);
    setActive3(false);
    setActive4(false);
  };
  const handleActive3 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(true);
    setActive4(false);
  };
  const handleActive4 = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(true);
  };
  const [project, setProject] = useState(ProjectsData);
  const filter = (categorisedItem) => {
    const updatedProjects = ProjectsData.filter((curItem) => {
      return curItem.category === categorisedItem;
    });
    setProject(updatedProjects);
  };
  return (
    <div
      className="text-slate-300 text-4xl flex flex-col gap-24  justify-center items-center my-52 py-14 relative"
      id="portfolio"
    >
      <motion.p className="text-3xl sm:text-5xl font-bold text-center flex  justify-center items-center ">
        <img
          src="https://www.aimeeprovence.com.au/wp-content/uploads/2018/07/gold-leaf.png"
          alt=""
          className="w-14  -scale-x-110 -rotate-45 "
        />
        <span className=" mr-5 text-green-500">My Creative</span>
        <span className="flex justify-center items-center">
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.4 }}
            className="flex justify-around items-center"
          >
            <p className=" text-green-500">Portfolio</p>
          </motion.div>

          <p className="ml-3 text-green-500">Section</p>
          <img
            src="https://www.aimeeprovence.com.au/wp-content/uploads/2018/07/gold-leaf.png"
            alt=""
            className="w-14 rotate-45"
          />
        </span>
      </motion.p>

      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "tween", duration: 0.4 }}
        className="flex gap-10"
      >
        <span onClick={handleActive1}>
          <button
            className={` px-10 py-4 rounded-lg  hover:bg-black hover:outline hover:text-green-500 hover:transition-all hover:duration-500 ${
              active1
                ? "text-green-500  outline bg-black"
                : "text-black bg-slate-400"
            }`}
            onClick={() => setProject(ProjectsData)}
          >
            All
          </button>
        </span>
        <span onClick={handleActive2}>
          <button
            className={` px-10 py-4 rounded-lg  hover:bg-black hover:outline hover:text-green-500 hover:transition-all hover:duration-500 ${
              active2
                ? "text-green-500  outline bg-black"
                : "text-black bg-slate-400"
            }`}
            onClick={() => filter("Frontend")}
          >
            Frontend
          </button>
        </span>
        <span onClick={handleActive3}>
          <button
            className={` px-10 py-4 rounded-lg  hover:bg-black hover:outline hover:text-green-500 hover:transition-all hover:duration-500 ${
              active3
                ? "text-green-500  outline bg-black"
                : "text-black bg-slate-400"
            }`}
            onClick={() => filter("ReactJs")}
          >
            ReactJs
          </button>
        </span>
        <span onClick={handleActive4}>
          <button
            className={` px-10 py-4 rounded-lg  hover:bg-black hover:outline hover:text-green-500 hover:transition-all hover:duration-500 ${
              active4
                ? "text-green-500  outline bg-black"
                : "text-black bg-slate-400"
            }`}
            onClick={() => filter("*featured")}
          >
            * Featured
          </button>
        </span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full px-64 relative">
        {project.map((item, index) => {
          return (
            <div key={index}>
              <motion.div
                key={item.id}
                initial={{ y: 0 }}
                whileInView={{ y: [-10, 10, -10] }}
                transition={{
                  repeatDelay: 0.5,
                  duration: 2,
                  ease: "linear",
                }}
              >
                <div
                  key={item.id}
                  className="bg-slate-300 py-7 px-7 rounded-xl w-full flex flex-col justify-center items-center gap-4 h-full"
                >
                  <img src={item.imgSrc} alt="" className="w-full h-full" />
                  <span
                    className="-mt-10
                   w-14 bg-slate-300 h-7 flex justify-center items-center text-black  "
                  >
                    <span className="bg-slate-300 rounded-t-full p-7">
                      {item.category}
                    </span>
                  </span>
                  <div className="flex text-black  justify-around w-full ">
                    <a target="blank" href={item.gitURL}>
                      <FaGithub />
                    </a>

                    <p className="text-green-600  font-extrabold">
                      {" "}
                      {item.name}
                    </p>

                    <a target="blank" href={item.live}>
                      <FaEye />
                    </a>
                  </div>

                  <span className="text-yellow-800 font-sans text-3xl px-5">
                    {item.about}
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
