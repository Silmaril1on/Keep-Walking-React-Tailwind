import React, { useState, useRef } from "react";
import ginger from "../../assets/ginger.webp";
import gingerVideo from "../../assets/ginger-video.mp4";
import { IoPlaySharp, IoPauseSharp } from "react-icons/io5";

function SectionThree() {
  const [active, setActive] = useState(false);
  const vidRef = useRef(null);

  const play = () => {
    vidRef.current.play();
    setActive(true);
  };
  const pause = () => {
    vidRef.current.pause();
    setActive(false);
  };

  return (
    <div className="w-full flex flex-col justify-center mt-2 items-center bg-cream">
      <div className="w-4/5">
        <h4 className="font-secondary py-3">Whisky cocktails</h4>
        <h1 className="font-primary w-full max-w-3xl text-orange text-5xl md:text-8xl">
          there's a highball in your future
        </h1>
      </div>
      <div className="flex flex-row w-4/5">
        <div className="hidden md:flex flex-col w-1/4">
          <div className="">
            <img className="w-full h-full" src={ginger} alt="ginger" />
          </div>
          <h1 className="font-primary my-10 text-2xl">johnnie & ginger</h1>
        </div>
        <div className="p-2 md:p-10 flex flex-col w-full md:w-3/4">
          <div className="relative ">
            <video ref={vidRef} autoPlay={false}>
              <source src={gingerVideo} type="video/mp4" />
            </video>
            <div
              className={
                active
                  ? "absolute flex justify-start items-start top-0 w-full h-full m-1"
                  : "absolute flex justify-center items-center top-0 w-full h-full"
              }
            >
              {active ? (
                <div
                  onClick={pause}
                  className="border-2 cursor-pointer border-black p-4 opacity-30 hover:opacity-100 duration-500"
                >
                  <IoPauseSharp className="text-2xl ml-1" />
                </div>
              ) : (
                <div
                  onClick={play}
                  className="border-2 cursor-pointer border-black p-4"
                >
                  <IoPlaySharp className="text-2xl ml-1" />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="font-primary md:hidden text-left text-2xl w-full pt-5">
              johnnie & ginger
            </h1>
            <p className="text-sm py-5 font-secondary md:w-2/3 md:px-16 md:py-8">
              The Highball drink is simply one part Johnnie, three parts mixer,
              fresh garnish and lots of ice. It's inviting and easy-going, an
              explosion of flavor you only get from the bold taste of Johnnie
              Walker paired with the sweet, floral, fruity or fiery. Time to
              start mixing.
            </p>
            <button className="border-2 w-full max-w-xs text-xl font-primary h-16 border-black">
              whisky cocktail recipes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
