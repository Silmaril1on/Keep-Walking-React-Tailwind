import React from "react";
import casks from "../../assets/casks.jpg";

function SectionOne() {
  return (
    <section className="h-600 w-full relative z-10">
      <div className="w-full h-full">
        <img className="w-full h-full object-cover" src={casks} alt="casks" />
      </div>
      <div className="absolute w-full md:w-2/4 md:pl-20 flex flex-col justify-evenly h-full top-0 left-0 text-cream pl-5">
        <h1 className="font-primary text-7xl md:text-8xl w-full">
          whisky knowledge
        </h1>
        <p className="font-secondary italic text-xs md:text-sm w-full pr-10 md:max-w-lg">
          Expand your Whisky knowledge by uncovering the Johnnie Walker story
          from Kilmarnock grocery to the four corners of the world. And
          unlocking how the legendary Striding Man revolutionised the Scotch
          Whisky world
        </p>
        <button className="bg-black font-primary text-lg w-full max-w-xs py-4">
          leaereh about the johnnie walker story
        </button>
      </div>
    </section>
  );
}

export default SectionOne;
