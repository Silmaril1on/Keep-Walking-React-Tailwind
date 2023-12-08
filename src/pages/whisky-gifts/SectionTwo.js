import React from "react";
import selection from "../../database/selection";
import { staggerFade } from "../../motionValues/animationValues";
import { motion } from "framer-motion";

function SectionTwo() {
  return (
    <section className="w-full flex flex-col">
      <div className="flex flex-col w-full pl-20">
        <h4 className="font-secondary capitalize my-5">johnnie walker gifts</h4>
        <h1 className="text-8xl text-orange">more gifts to explore</h1>
      </div>
      <motion.div
        variants={staggerFade}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col items-center md:flex-row md:justify-end md:pr-32 py-10"
      >
        {selection.slice(5, 8).map((item) => {
          return (
            <motion.div
              variants={staggerFade}
              className="w-60 m-2"
              key={item.id}
            >
              <div className="overflow-hidden">
                <img className="primary-hover" src={item.image} alt="whisky" />
              </div>
              <h1 className="mt-1 mb-3 text-md">{item.name}</h1>
              <button className="w-full border-2 border-black py-3">
                learn more
              </button>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default SectionTwo;
