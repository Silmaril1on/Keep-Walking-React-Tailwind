import React from "react";

function WalkWithUs() {
  return (
    <div className="bg-orange flex flex-col w-full md:flex-row justify-center">
      <div className="w-full md:w-2/4 px-7 md:px-20 py-14">
        <h1 className="font-primary text-left text-cream text-6xl">
          walk with us
        </h1>
        <p className="italic font-secondary text-sm">
          We're here whenever you're ready to take the plunge with Johnnie
          Walker and discover cocktail recipes, new product launches and the
          latest from our world of whisky.
        </p>
      </div>
      <div className="w-full md:w-2/4 flex items-end justify-center">
        <button className="bg-black text-cream font-primary text-2xl w-full max-w-xs md:w-1/2 mb-10 py-5">
          start your journey
        </button>
      </div>
    </div>
  );
}

export default WalkWithUs;
