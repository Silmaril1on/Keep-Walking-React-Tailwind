import React, { useState } from "react";
import updates from "../../database/latestupdates";
import { staggerFade } from "../../motionValues/animationValues";
import { motion } from "framer-motion";

function SectionThree() {
  const updateData = updates.map((item) => item.child);
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(0);

  const renderUpdate = (index) => {
    setIndex(index);
    setActive(index);
  };

  return (
    <section className="w-full hidden md:flex flex-row justify-center ">
      <div className="w-full max-w-xs flex justify-center flex-col">
        <h5 className="font-secondary pb-16 pl-6">Latest Updates</h5>
        {updates.map((item, index) => {
          return (
            <h1
              onClick={() => renderUpdate(index)}
              className={
                active === index
                  ? "text-8xl text-orange cursor-pointer  "
                  : "text-8xl cursor-pointer "
              }
              key={item.id}
            >
              {item.name}
            </h1>
          );
        })}
      </div>
      <UpdatedList data={updateData[index]} />
    </section>
  );
}

function UpdatedList({ data }) {
  return (
    <div className=" w-full max-w-4xl">
      {data.map((item) => {
        return (
          <motion.article
            key={item.id}
            variants={staggerFade}
            initial="hidden"
            whileInView="visible"
            className="flex flex-row"
          >
            <motion.div
              variants={staggerFade}
              className="h-600 m-3 w-full max-w-md"
            >
              <img src={item.image} alt="update" />
            </motion.div>
            <motion.div
              variants={staggerFade}
              className="px-5 flex flex-col pb-16 justify-end w-full md:max-w-md"
            >
              <h1 className="text-3xl ">{item.name}</h1>
              <p className="font-secondary py-5 text-xs indent-10">
                {item.info}
              </p>
              <h4 className="cursor-pointer my-2 text-xl">{item.btn}</h4>
            </motion.div>
          </motion.article>
        );
      })}
    </div>
  );
}

export default SectionThree;
