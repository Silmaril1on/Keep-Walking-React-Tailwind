import React from "react";
import { IoMdClose } from "react-icons/io";
import { fade } from "../motionValues/animationValues";
import { motion } from "framer-motion";

function Modal({ modalBtn }) {
  return (
    <motion.section
      variants={fade}
      initial="hidden"
      animate="visible"
      className="flex justify-center items-center absolute top-0 left-0 w-full h-full bg-transBlack text-cream"
    >
      <div className="relative w-11/12 h-auto max-w-2xl mt-36 py-11 bg-crimson flex flex-col justify-center items-center">
        <div
          onClick={modalBtn}
          className="absolute cursor-pointer right-5 top-5 text-black"
        >
          <IoMdClose />
        </div>
        <h1 className="font-primary color-cream text-6xl"> walk with us</h1>
        <p className="font-secondary italic max-w-lg text-center text-xs py-3">
          We're here whenever you're ready to take the plunge with Johnnie
          Walker and discover cocktail recipes, new product launches and the
          latest from our world of whisky.
        </p>
        <button className="font-primary text-white bg-black px-40 py-5">
          start your journey
        </button>
      </div>
    </motion.section>
  );
}

export default Modal;
