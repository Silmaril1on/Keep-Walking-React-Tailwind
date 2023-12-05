import React from "react";
import selection from "../../database/selection";
import WalkerLogo from "../../components/WalkerLogo";
import { staggerFade02 } from "../../motionValues/animationValues";
import { motion } from "framer-motion";

function WhiskyList() {
  return (
    <div className="relative flex flex-row justify-center w-full my-10">
      <motion.div
        variants={staggerFade02}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto justify-items-center w-auto"
      >
        {selection.map((johnnie) => {
          return (
            <motion.div
              variants={staggerFade02}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-60 cursor-pointer"
              key={johnnie.id}
            >
              <div className="overflow-hidden">
                <img
                  className="brightness-90 hover:brightness-100 hover:scale-110 duration-300"
                  src={johnnie.image}
                  alt="walker"
                />
              </div>
              <h1 className="text-xl h-16 py-2">{johnnie.name}</h1>
              <button className="w-full border-2 border-black py-3 font-primary">
                learn more
              </button>
            </motion.div>
          );
        })}
      </motion.div>
      <div className="hidden md:block absolute top-1/4 -left-16">
        <WalkerLogo />
      </div>
      <div className="hidden md:block absolute bottom-0 -left-16">
        <WalkerLogo />
      </div>
    </div>
  );
}

export default WhiskyList;
