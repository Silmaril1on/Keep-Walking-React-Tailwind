import React from "react";
import WalkerLogo from "../../components/WalkerLogo";
import { staggerFade02 } from "../../motionValues/animationValues";
import { motion } from "framer-motion";

function SectionTwo() {
  return (
    <section className="flex flex-col justify-end items-end w-full">
      <p className="font-secondary indent-20 text-sm w-full p-6 md:max-w-3xl py-5 md:mr-28">
        At Johnnie Walker, we understand the need to protect and restore the
        planet’s resources. If 200+ years of perfecting our craft has taught us
        anything, it’s the vital role that balance plays. We understand how
        essential the harmonious interplay between wood, water, earth and living
        creatures is to the world around us. That’s why we’re committed to
        reducing our footprint ‘from grain to glass’. Our ambitious plans will
        see us reduce our impact globally, reinvent how we do things, and
        restore and protect natural landscapes in Scotland and beyond.
      </p>
      <div className="flex flex-row w-full bg-orange">
        <div>
          <WalkerLogo />
        </div>
        <motion.div
          variants={staggerFade02}
          initial="hidden"
          animate="visible"
          className="w-full pl-5 py-5 md:w-2/4 md:pl-10"
        >
          <motion.h1
            variants={staggerFade02}
            className="text-5xl md:text-8xl text-cream"
          >
            keep walking
          </motion.h1>
          <motion.h1
            variants={staggerFade02}
            className="text-5xl md:text-8xl text-cream"
          >
            with us toward
          </motion.h1>
          <motion.h1
            variants={staggerFade02}
            className="text-5xl md:text-8xl text-cream"
          >
            a brighter,{" "}
          </motion.h1>
          <motion.h1
            variants={staggerFade02}
            className="text-5xl md:text-8xl text-cream"
          >
            more sustainable
          </motion.h1>
          <motion.h1
            variants={staggerFade02}
            className="text-5xl md:text-8xl text-cream"
          >
            future.
          </motion.h1>
          <motion.h1
            variants={staggerFade02}
            className="text-5xl md:text-8xl text-cream"
          >
            for everyone.
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}

export default SectionTwo;
