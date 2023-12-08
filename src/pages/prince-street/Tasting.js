import React from "react";
import whiskymadeData from "../../database/whiskymadeData";
import { motion } from "framer-motion";
const vertical =
  "https://www.johnniewalker.com/inc/images/global/keep-walking-strip-empty-theme-bold-yellow.svg";

function Tasting() {
  return (
    <section className="page-container z-20 mt-16">
      <h1 className="text-5xl p-1 md:text-9xl text-center">
        more whisky experiences & tastings
      </h1>
      <div className="w-full overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ left: -1600, right: 100 }}
          className=" cursor-grab flex flex-row w-max"
        >
          {whiskymadeData.slice(6, 11).map((item, index) => {
            const { image, green, name, price, info } = item;
            return (
              <div
                className="w-72 m-4 flex flex-col justify-between"
                key={index}
              >
                <div className="w-72 h-72">
                  <img
                    className="w-full h-full object-cover"
                    src={image}
                    alt="walker"
                  />
                </div>
                <div className="mt-6 h-full">
                  <h1 className="border-4 my-2 text-green border-green text-2xl max-w-fit px-3">
                    {green}
                  </h1>
                  <h1 className="text-2xl my-4 leading-5">{name}</h1>
                  <h4>{price}</h4>
                  <p className="font-secondary text-sm">{info}</p>
                </div>
                <button className="border-2 border-black my-3 py-3 text-xl">
                  book now
                </button>
              </div>
            );
          })}
          <div className="relative overflow-hidden z-10 w-72 my-4 flex flex-col justify-between bg-orange ">
            <h1 className="text-white text-6xl p-5">
              explore more experiences
            </h1>
            <p className="text-sm font-secondary p-5 leading-6">
              Discover the best tours, immersive experiences, and more. Perfect
              for locals and visitors alike, our selection has something for
              everyone. Start exploring now and make unforgettable memories in
              Edinburgh.
            </p>
            <button className="bg-black text-cream mx-5 mb-3 py-3 text-lg">
              see all experiences
            </button>
            <img
              className="absolute -z-10 w-auto scale-150 h-full top-0 right-5"
              src={vertical}
              alt="vertica"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Tasting;
