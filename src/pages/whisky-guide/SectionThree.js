import React from "react";
import aroundWhisky from "../../database/aroundWhisky";
import { motion } from "framer-motion";
const back =
  "https://www.johnniewalker.com/inc/images/global/keep-walking-stamp-theme-bold-yellow.svg";

function SectionThree() {
  return (
    <section className="overflow-hidden bg-orange  flex flex-col justify-center items-center w-full relative z-10">
      <h1 className="font-secondary z-20 italic absolute top-14 left-32 text-cream text-5xl w-64 leading-tight">
        Whiskies around the <br /> world
      </h1>
      <motion.div
        drag="x"
        initial={{ x: 350 }}
        dragConstraints={{ left: 30, right: 500 }}
        className="flex flex-row mt-32 mb-10 justify-end relative z-10 cursor-grab"
      >
        {aroundWhisky.map((world, index) => {
          return (
            <div key={index} className="w-64 m-5">
              <div className="overflow-hidden rounded-full w-52 my-7 pointer-events-none">
                <img
                  className="rounded-full primary-hover"
                  src={world.image}
                  alt="world"
                />
              </div>
              <h1 className="text-2xl my-2">{world.name}</h1>
              <p className="font-secondary text-xs indent-20 italic leading-5">
                {world.info}
              </p>
            </div>
          );
        })}
      </motion.div>
      <div className="absolute bottom-0 index-0 left-0">
        <img src={back} alt="banner" />
      </div>
      <button className="border-2 relative z-10 py-3 mb-5 border-black font-primary w-64">
        learn about the history of whisky
      </button>
    </section>
  );
}

export default SectionThree;
