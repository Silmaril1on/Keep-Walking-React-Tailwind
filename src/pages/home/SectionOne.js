import React from "react";
import blue from "../../assets/blue-label.jpg";

function SectionOne() {
  return (
    <div className="flex bg-cream z-10 md:z-0 flex-col items-center justify-center w-full">
      <div className="w-4/5 ">
        <img className="w-full h-full" src={blue} alt="blue-label" />
      </div>
      <div className="flex flex-col items-center md:flex-row justify-between w-4/5 my-8">
        <h2 className="font-primary text-2xl">umami</h2>
        <p className="font-secondary text-sm w-full max-w-lg py-4">
          Johnnie Walker reveals a new Johnnie Walker Blue Label limited
          release, capturing the elusive taste of umami in partnership with
          world renowned chef Kei Kobayashi.
        </p>
        <button className="w-32 border-2 py-3 font-primary border-black">
          learn more
        </button>
      </div>
    </div>
  );
}

export default SectionOne;
