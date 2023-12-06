import React from "react";
import wg1 from "../../assets/wg-peach.webp";
import wg2 from "../../assets/wg-test.webp";

function SectionFour() {
  return (
    <section className="page-container relative h-full">
      <div className="h-auto md:h-600 flex flex-col w-full relative ">
        <div className="w-full h-80 md:h-full md:absolute top-0 left-0">
          <img className="w-full h-full object-cover" src={wg1} alt="peach" />
        </div>
        <div className="bg-cream relative p-5 md:px-12 z-10 h-full md:w-2/6 md:ml-48 flex flex-col items-center">
          <h1 className="font-secondary font-bold text-4xl md:text-6xl md:py-10 italic w-full text-right">
            How to drink <br /> whisky
          </h1>
          <p className="w-full font-secondary text-sm indent-16 py-10 leading-6">
            Neat, on the rocks, with a mixer or in a Highball cocktail. There's
            no right or wrong way to drink whisky. Discover your whisky serve by
            experimenting with ingredients crafted around your palette. These
            suggestions will help you find out what does and doesn't work for
            you, embracing the highs and lows of the journey until you find your
            whisky, your way.
          </p>
          <button className="border-2 py-4 text-lg w-full mx-14 border-black font-primary">
            more ways to experiment
          </button>
        </div>
      </div>

      <div className="h-auto md:h-600 flex flex-col w-full md:items-end relative">
        <div className="w-full h-80 md:h-full overflow-hidden md:absolute top-0 left-0">
          <img
            className="w-full h-full scale-150 object-left md:object-center md:scale-100 object-cover"
            src={wg2}
            alt="peach"
          />
        </div>
        <div className="bg-cream p-5 relative md:px-12 z-10 h-full md:w-2/6 md:mr-48 flex flex-col items-center">
          <h1 className="font-secondary capitalize font-bold text-3xl md:text-5xl md:py-10 italic w-full text-right">
            Making <br /> blended <br /> scotch <br /> whisky
          </h1>
          <p className="w-full font-secondary text-sm indent-16 py-10 leading-6">
            While they may start life in much the same way, blended whiskies and
            single malt whiskies shouldn’t be compared. Explore the art and
            science of blending whisky to discover why the best blends are
            greater than the sum of their parts. And why it takes much more than
            just knowledge to craft one.
          </p>
          <button className="border-2 py-4 text-lg w-full mx-14 border-black font-primary">
            more ways about blended whisky
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
