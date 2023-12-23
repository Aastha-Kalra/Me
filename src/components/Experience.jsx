import React from "react";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <div>
      <div id="experience" className=" max-w-[90%] mx-auto px-3 py-16 sm:py-20">
        <motion.p className="text-3xl sm:text-5xl font-bold text-center flex  justify-center items-center ">
          <img
            src="https://www.aimeeprovence.com.au/wp-content/uploads/2018/07/gold-leaf.png"
            alt=""
            className="w-14  -scale-x-110 -rotate-45 "
          />
          <span className=" md:mr-10 text-green-500">Work</span>
          <span className="flex justify-center items-center">
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "tween", duration: 0.4 }}
              className="flex justify-around w-52 items-center"
            >
              <p className="px- text-green-500">Experience </p>
              <img
                src="https://www.aimeeprovence.com.au/wp-content/uploads/2018/07/gold-leaf.png"
                alt=""
                className="w-14 rotate-45"
              />
            </motion.div>
          </span>
        </motion.p>
        <div className="flex lg:flex-row flex-col gap-5  text-slate-300  w-full mt-24">
          <motion.div className=" xl:w-5/12 hidden lg:flex justify-center items-center">
            <img
              src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png"
              alt=""
              className=" bg-blend-multiply animate-spin  w-full"
            />
          </motion.div>

          <div className="text-2xl font-sans w-full py-20 ">
            <div className="flex md:flex-row flex-col">
              <div className="font-bold md:w-1/2">Oct 2023 - Present</div>

              <div className="font-extrabold w-full">
                Frontend Developer
                <div className="font-normal flex flex-col gap-3 text-xl mt-2">
                  <span className="font-semibold text-green-400">
                    AiSenseLLP
                  </span>
                  <span>
                    Troubleshooting interface software and debugging application
                    codes. Developing and implementing front-end architecture to
                    support user interface concepts. Collaborated with UX/UI
                    designers to translate design concepts into functional
                    components. Learn to balance aesthetics with technical
                    considerations to create seamless user experiences using
                    React.js Tailwind CSS, Formik & Yup .
                  </span>
                </div>
              </div>
            </div>

            <div className="flex md:flex-row flex-col mt-14 w-full">
              <span className="font-bold md:w-1/2">Sep 2023 - Oct 2023</span>

              <div className="font-extrabold w-full ">
                Web Developer
                <span className="font-normal flex flex-col gap-3 text-xl mt-2">
                  <span className="font-semibold text-green-400">
                    Freelancing
                  </span>
                  <span>
                    Reviewing application requirements and interface designs.
                    Identifying web-based user interactions. Developing and
                    implementing highly responsive user interface components
                    using react concepts. Monitoring and improving front-end
                    performance. Documenting application changes and developing
                    updates.
                  </span>
                </span>
              </div>
            </div>

            <div className="flex md:flex-row flex-col mt-14 w-full">
              <div className="font-bold md:w-1/2">May 2023 - Sep 2023</div>
              <div className="font-extrabold w-full ">
                ReactJS Developer
                <div className="font-normal flex flex-col gap-3 text-xl mt-2">
                  <span className="font-semibold text-green-400">
                    Leads4Needs
                  </span>
                  <span>
                    Worked closely with other developers to contribute to
                    ongoing frontend development projects. Take lead in
                    implementing and maintaining responsive and visually
                    appealing user interfaces. Collaborated with the team to
                    implement UI/UX designs and improve user experience. I have
                    employed Tailwind CSS to streamline the styling process and
                    create responsive designs effectively
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
