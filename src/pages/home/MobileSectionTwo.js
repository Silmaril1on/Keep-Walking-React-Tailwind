import React, { useState } from "react";
import labels from "../../database/homeLabelsData";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const slider = {
  hidden: (direction) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    };
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "ease",
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      transition: {
        type: "ease",
      },
    };
  },
};

function MobileSectionTwo() {
  const data = labels.map((item) => item.whisky[0]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const left = () => {
    setDirection(1);
    if (index === data.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };
  const right = () => {
    setDirection(-1);
    if (index === data.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  return (
    <section className="relative h-700 overflow-hidden flex flex-col justify-center items-center md:hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          variants={slider}
          initial="hidden"
          animate="visible"
          key={data[index].image}
          exit="exit"
          custom={direction}
          className="h-full absolute flex flex-col justify-center items-center m-4"
        >
          <div className="h-full w-full max-w-sm">
            <img
              className="w-full h-full object-cover"
              src={data[index].image}
              alt="label"
            />
          </div>
          <div className="h-300 max-w-sm">
            <h1 className="font-primary my-5 text-3xl">{data[index].name}</h1>
            <p className="font-secondary indent-14 text-xs italic">
              {data[index].info}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-row justify-between px-4 w-full max-w-sm">
        <button
          onClick={left}
          className=" relative z-10 bg-black opacity-30 hover:opacity-100 duration-300  py-2 px-1 rounded-r-2xl text-white"
        >
          <FaChevronLeft className="pr-1" />
        </button>
        <button
          onClick={right}
          className=" relative z-10 bg-black opacity-30 hover:opacity-100 duration-300  py-2 px-1 rounded-l-2xl text-white"
        >
          <FaChevronRight className="pl-1" />
        </button>
      </div>
    </section>
  );
}

export default MobileSectionTwo;
