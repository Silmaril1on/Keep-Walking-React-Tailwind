import React, { useState } from "react";
import street1 from "../../assets/street1.jpg";
import street2 from "../../assets/street2.jpg";
import street3 from "../../assets/street3.jpg";
import street4 from "../../assets/street4.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const imageData = [
  {
    id: 0,
    image: street2,
  },
  {
    id: 1,
    image: street1,
  },
  {
    id: 2,
    image: street3,
  },
  {
    id: 3,
    image: street4,
  },
];
const sliderImage = {
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

function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const left = () => {
    setDirection(1);
    if (index === imageData.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };
  const right = () => {
    setDirection(-1);
    if (index === imageData.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="w-full overflow-hidden relative h-500 flex justifyy-center items-center flex-col">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            variants={sliderImage}
            initial="hidden"
            animate="visible"
            key={imageData[index].image}
            exit="exit"
            custom={direction}
            className="absolute h-500 w-4/5"
          >
            <img
              className="w-full h-full object-cover"
              src={imageData[index].image}
              alt="street"
            />
          </motion.div>
        </AnimatePresence>
        <div className="w-11/12 md:w-5/6 relative z-10 h-full flex flex-row justify-between items-center">
          <button
            className="w-10 h-10 md:w-16 md:h-16 rounded-full text-cream bg-orange"
            onClick={left}
          >
            <FaChevronLeft className="pr-1 md:p-0 text-3xl m-auto" />
          </button>
          <button
            className=" w-10 h-10 md:w-16 md:h-16 rounded-full text-cream bg-orange"
            onClick={right}
          >
            <FaChevronRight className="pl-1 md:p-0 text-3xl m-auto " />
          </button>
        </div>
      </div>
      <div className="w-60 h-12 flex flex-row justify-center items-center">
        {imageData.map((item) => {
          return (
            <div
              className={
                index === item.id
                  ? "w-8 h-1 bg-orange m-2 cursor-pointer duration-1000"
                  : "w-8 h-1 bg-chino m-2 cursor-pointer duration-1000"
              }
              key={item.id}
              onClick={() => goToSlide(item.id)}
            ></div>
          );
        })}
      </div>
      <Content />
    </section>
  );
}

function Content() {
  return (
    <div className="flex flex-col w-full md:flex-row md:w-4/5 py-6">
      <div className="flex flex-col w-full px-10 md:w-2/4">
        <h1 className="border-4 text-green border-green text-2xl max-w-fit px-3">
          our signature tour
        </h1>
        <h3 className="my-2 text-xl">$30 per person</h3>
        <p className="font-secondary text-sm w-full max-w-md">
          Whether you’re a whisky fan or not, this five-star experience will go
          beyond expectations with interactive projections, live performances
          and three cocktails specially made to match your flavour profile.
          Non-alcoholic drinks are also available.
        </p>
      </div>
      <div className=" w-full justify-center md:justify-end flex">
        <button className="border-2 my-10 h-16 border-black w-5/6 md:w-56 text-xl py-4">
          book now
        </button>
      </div>
    </div>
  );
}

export default Slider;
