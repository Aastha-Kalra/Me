import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section
      className="flex justify-center items-center flex-col relative my-12 py-12 text-white text-3xl "
      id="about"
    >
      {/* title */}
      <div className="w-full flex justify-center items-center py-24">
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "tween", duration: 0.4 }}
          className="flex justify-around w-52 items-center"
        >
          <img
            src="https://www.aimeeprovence.com.au/wp-content/uploads/2018/07/gold-leaf.png"
            alt=""
            className="w-14  -scale-x-110 -rotate-45 "
          />
          <p className="text-4xl sm:text-5xl px-4 text-green-500">About </p>
          <img
            src="https://www.aimeeprovence.com.au/wp-content/uploads/2018/07/gold-leaf.png"
            alt=""
            className="w-14 rotate-45"
          />
        </motion.div>
      </div>

      {/* about me */}
      <div className="flex lg:flex-row flex-col gap-4 w-full">
        <div className="w-full flex justify-center items-center px-24 md:px-40 lg:px-14">
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.4 }}
            className="w-full relative rounded-md lg:w-96 p-1 bg-gradient-to-br from-green-500 to-green-600"
          >
            <img
              src="Images/me.jpeg"
              alt=""
              className="w-full rounded-md h-auto object-contain"
            />

            <div className="absolute inset-4 bg-gradient-to-br w-4 -top-4 -left-2 from-green-500 to-green-600 rounded-md"></div>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "tween", duration: 0.4 }}
          className=" md:px-28 px-10 lg:px-4 text-slate-300 lg:pr-32 tracking-widest"
        >
          <p className="text-2xl font-bold text-green-500">
            {" "}
            A Frontend Developer trying to do his best.
          </p>
          <p className="font-sans text-sm md:text-xl ">
            <br />
            Hey 👋, I am a Frontend Developer with a passion for building
            beautiful and functional user interfaces. I am a self-taught
            developer and I love to learn new things. I am a quick learner and I
            am always ready to take up new challenges. I have experience in
            working with HTML-5, CSS-3, VanillaJS, ReactJS, Tailwind CSS,
            Firebase, framer-motion, formik & Yup and exploring new efficient
            technologies.
            <p>
              I like to travel. I believe travelling gives you a new perspective
              to anything . You get to know a lot about the different cultures ,
              the languages , the tradition and the small unique things every
              place has to offer.
            </p>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
