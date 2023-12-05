import React from "react";
import WalkerLogo from "../../components/WalkerLogo";
import StaggerText from "../../components/StaggerText";
import prince from "../../assets/princes-1.mp4";
import { textColor } from "../../motionValues/animationValues";
import { motion } from "framer-motion";

function SectionFour() {
  return (
    <motion.div
      variants={textColor}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col justify-start mt-2 items-start bg-cream"
    >
      <div className="w-11/12 flex flex-col md:flex-row justify-center items-center md:items-stretch md:justify-between">
        <WalkerLogo />
        <div>
          <StaggerText
            className="font-primary my-1 text-6xl md:text-8xl"
            text="visit johnnie walker princes street in-edinburgh"
          />
        </div>
        <div>
          <video
            autoPlay={true}
            loop
            muted
            className="object-cover w-full h-full"
          >
            <source src={prince} type="video/mp4" />
          </video>
        </div>
      </div>
    </motion.div>
  );
}

export default SectionFour;
