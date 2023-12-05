import React from "react";
import woman from "../../assets/woman.webp";

function SectionSix() {
  return (
    <div className="w-full md:h-3/4 relative flex flex-col md:justify-start">
      <div className="md:absolute index-0 w-full h-96 md:h-full top-0 left-0">
        <img
          className="w-full h-full object-center object-cover"
          src={woman}
          alt="woman"
        />
      </div>
      <section className="bg-cream flex relative p-10 index-10 md:ml-32 h-full w-full md:w-2/6 flex-col justify-center items-center">
        <h1 className="font-secondary italic text-3xl md:text-5xl text-right font-bold leading-tight">
          Make the difference <br />
          With DRINKiQ
        </h1>
        <p className="indent-14 py-16 font-secondary">
          It's good to think seriously about your relationship with alcohol and
          drinking. If you'd like to change it, whatever that means for you, why
          not start with the difference you want to make? No matter what your
          current circumstances are, DRINKiQ is here to give you the facts,
          tools and support to make informed choices.
        </p>
        <button className="border-2 w-full py-5 text-xl mb-10 mt-2 border-black font-primary">
          explore drinkiq
        </button>
      </section>
    </div>
  );
}

export default SectionSix;
