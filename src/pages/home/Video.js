import React from "react";
import video from "../../assets/johnnie.mp4";
import { motion } from "framer-motion";
import { slideUp } from "../../motionValues/animationValues";

function Video() {
  return (
    <div className=" bg-cream z-11">
      <div className="w-auto overflow-hidden relative h-96 md:h-600">
        <video
          className="w-full h-full object-cover"
          autoPlay={true}
          loop={true}
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
        <motion.button
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          className="absolute font-primary text-xl bottom-0 right-0 bg-black text-cream w-full max-w-md md:right-20 md:py-8 py-5"
        >
          discover keep walking
        </motion.button>
      </div>
      <h1 className="text-orange w-full pl-5 py-9 text-left font-primary text-7xl md:text-8xl md:pl-32">
        johnnie walker blue label <br />
        elusive umami
      </h1>
    </div>
  );
}

export default Video;
