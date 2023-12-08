import React from "react";
import green from "../../assets/green.jpg";

function SectionOne() {
  return (
    <section className="relative  z-10 w-full border-2 border-black">
      <div className="w-full h-600">
        <img className="w-full h-full object-cover" src={green} alt="" />
      </div>
      <article className="absolute linear-background p-3 md:pl-20 text-cream top-0 left-0 w-full h-full">
        <h4 className="font-secondary my-10 capitalize">whisky gifts</h4>
        <h1 className="font-primary text-4xl md:text-8xl">
          green lable whisky
        </h1>
        <p className="font-secondary italic text-sm my-10 w-full max-w-lg">
          Our only Scotch blended entirely with single malts. Johnnie Walker
          Green Label Scotch Whisky is a hidden gem. Made with malts from the
          four corners of Scotland, aged for at least 15 years.
        </p>
        <button className="bg-black text-lg py-4 font-primary w-60 text-cream">
          see all whisky gifts
        </button>
      </article>
    </section>
  );
}

export default SectionOne;
