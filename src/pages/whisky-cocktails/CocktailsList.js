import React from "react";
import cocktails from "../../database/cocktailsData";
import { staggerFade02 } from "../../motionValues/animationValues";
import { motion } from "framer-motion";
import WalkerLogo from "../../components/WalkerLogo";

function CocktailsList() {
  return (
    <section className="w-full">
      <div>
        {cocktails.map((header) => {
          return (
            <main
              key={header.id}
              className="flex flex-col justify-center items-center"
            >
              <div className="relative z-10 w-full">
                <div className="w-full h-600 ">
                  <img
                    className="w-full h-full object-cover"
                    src={header.image}
                    alt="banner"
                  />
                </div>
                <article className="absolute linear-background p-3 md:pl-20 text-cream top-0 left-0 w-full h-full">
                  <h4 className="font-secondary my-10 capitalize">
                    {header.pre}
                  </h4>
                  <h1 className="font-primary text-4xl md:text-8xl">
                    {header.name}
                  </h1>
                  <p className="font-secondary italic text-sm my-10 w-full max-w-lg">
                    {header.info}
                  </p>
                  <button className="bg-black text-lg py-4 font-primary w-60 text-cream">
                    {header.but}
                  </button>
                </article>
              </div>
              <div className="w-full relative flex justify-center items-center">
                <motion.section
                  variants={staggerFade02}
                  className="w-full my-10 md:w-6/12 grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center"
                >
                  {header.cocktail.map((item, index) => {
                    return (
                      <motion.div
                        key={index}
                        variants={staggerFade02}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="cursor-pointer"
                      >
                        <div className="w-60 overflow-hidden">
                          <img
                            className="w-full h-full brightness-90 hover:brightness-100 hover:scale-110 duration-300"
                            src={item.image}
                            alt="cocktail"
                          />
                        </div>
                        <h1 className="py-1 text-lg">{item.name}</h1>
                      </motion.div>
                    );
                  })}
                </motion.section>
                <div className="absolute -left-20 bottom-0">
                  <WalkerLogo />
                </div>
              </div>
            </main>
          );
        })}
      </div>
    </section>
  );
}

export default CocktailsList;
