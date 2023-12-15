import React, { useState } from "react";
import { motion } from "framer-motion";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/config";
import { toast } from "react-toastify";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const sendMessage = () => {
    if (
      (input.email === null || input.email === "") ||
      (input.name === null || input.name === "") ||
      (input.message === null || input.message === "")
    ) {
      toast.error("Please enter your details", {
        position: "top-left",
      });
    } else {
      addDoc(collection(db, "messages"), { ...input })
        .then(
          toast.success("Message Sent Successfully", {
            position: "top-left",
          }),

          setInput({
            name: "",
            email: "",
            message: "",
          })
        )
        .catch((err) => {
          toast.warning(err);
        });
    }
  };
  return (
    <div
      className="w-full h-full text-slate-300 text-5xl pt-64 pb-24 "
      id="contact"
    >
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.4, opacity: 0 }}
        className="flex justify-center items-center text-green-500"
      >
        <img
          src="https://www.aimeeprovence.com.au/wp-content/uploads/2018/07/gold-leaf.png"
          alt=""
          className="w-14  -scale-x-110 -rotate-45 "
        />
        Contact Me
        <img
          src="https://www.aimeeprovence.com.au/wp-content/uploads/2018/07/gold-leaf.png"
          alt=""
          className="w-14  rotate-45 "
        />
      </motion.div>

      <div className="w-full h-full text-3xl my-44 px-8 flex gap-44 ">
        <div className="flex flex-col gap-10 w-full pl-14">
          <div className="flex justify-center items-center gap-10 bg-green-700 py-5 rounded-xl">
            <span className="text-red-800 font-bold ">
              <CgMail size={60} />
            </span>
            <span>aasthakalra2004@gmail.com</span>
          </div>
          <div className="flex justify-center items-center gap-10 bg-green-700 py-5 rounded-xl">
            <span className="text-blue-900 font-bold ">
              <FaLinkedin size={60} />
            </span>
            <span>https://www.linkedin.com/in/aastha-kalra9927/</span>
          </div>
          <div className="flex justify-center items-center gap-10 bg-green-700 py-5 rounded-xl">
            <span className="text-black font-bold ">
              <FaGithub size={60} />
            </span>
            <span>https://github.com/Aastha-Kalra</span>
          </div>
        </div>

        <div className="text-9xl flex  justify-cent ">OR</div>

        <div className="flex flex-col gap-10 w-full ">
          <form action="" className="pr-44 flex flex-col gap-10 w-full">
            <input
              type="text"
              className="bg-transparent border-2 border-green-500 h-20 rounded-2xl w-full p-4 text-slate-300 focus:outline-none"
              value={input.name}
              name="name"
              onChange={handleInput}
              placeholder="Your Name"
            />
            <input
              type="email"
              className="bg-transparent border-2 border-green-500 h-20 rounded-2xl w-full p-4 text-slate-300 focus:outline-none"
              value={input.email}
              name="email"
              onChange={handleInput}
              placeholder="Your Email"
            />
            <textarea
              type="text"
              name="message"
              className="bg-transparent border-2 border-green-500 h-96 rounded-2xl w-full p-4 text-slate-300 focus:outline-none"
              value={input.message}
              onChange={handleInput}
              placeholder="Your Message"
            />
            <div>
              <button
                type="button"
                className="bg-green-800 px-20 py-7 rounded-3xl hover:bg-green-600 shadow-xl shadow-green-500 focus:outline-none"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
