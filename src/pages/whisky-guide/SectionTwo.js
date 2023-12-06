import React from "react";
import StaggerText from "../../components/StaggerText";
import whiskymadeData from "../../database/whiskymadeData";
import WalkingLogos from "../../components/WalkingLogos";
import { staggerUp } from "../../motionValues/animationValues";
import { motion } from "framer-motion";

function SectionTwo() {
  return (
    <section className="w-full relative">
      <div className="flex flex-col ml-5 md:ml-32 mt-5 w-auto justify-start items-start">
        <h4 className="font-secondary capitalize my-4">whisky knowledge</h4>
        <StaggerText
          className="text-orange text-6xl md:text-8xl"
          text="explore-the-world of-whisky"
        />
      </div>
      <motion.div
        variants={staggerUp}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col  justify-center relative z-10 items-center md:items-start md:flex-row md:justify-end md:py-10 md:pr-32"
      >
        {whiskymadeData.map((item, index) => {
          return (
            <motion.div key={index} variants={staggerUp} className="m-3 w-60 ">
              <div className="overflow-hidden">
                <img className="primary-hover" src={item.image} alt="grain" />
              </div>
              <h1 className="text-2xl py-2">{item.name}</h1>
              <p className="text-xs pr-5 leading-5 italic font-secondary">
                {item.info}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
      <div className="absolute -bottom-40 left-10">
        <WalkingLogos />
      </div>
    </section>
  );
}

export default SectionTwo;
