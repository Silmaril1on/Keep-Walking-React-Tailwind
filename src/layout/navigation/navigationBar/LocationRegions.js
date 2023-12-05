import React from "react";
import regions from "../../../database/regios";
import { motion } from "framer-motion";
import { fade } from "../../../motionValues/animationValues";

function LocationRegions() {
  return (
    <div className="absolute top-32 z-20 -left-0 mt-2 w-full">
      <motion.div
        variants={fade}
        initial="hidden"
        animate="visible"
        className="w-2/4 mx-auto bg-transCream"
      >
        <div className="grid grid-cols-3">
          {regions.map((region, index) => {
            return (
              <h1 key={index} className="font-primary text-center m-2">
                {region}
              </h1>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default LocationRegions;
