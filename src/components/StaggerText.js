import React from "react";
import { motion } from "framer-motion";
import { staggerFade } from "../motionValues/animationValues";

function StaggerText({ text, className }) {
  const words = text.split(" ");

  return (
    <motion.div variants={staggerFade} initial="hidden" whileInView="visible">
      {words.map((word, index) => {
        return (
          <motion.div variants={staggerFade} className={className} key={index}>
            {word}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default StaggerText;
