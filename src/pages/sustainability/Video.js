import React, { useRef, useState } from "react";
import steps from "../../assets/steps-video.mov";
import { IoPlaySharp, IoPauseSharp } from "react-icons/io5";

function Video() {
  const [active, setActive] = useState(false);
  const vidRef = useRef(null);

  const play = () => {
    vidRef.current.play();
    setActive(true);
  };
  const pause = () => {
    md: vidRef.current.pause();
    setActive(false);
  };

  return (
    <div className="h-600 w-full">
      <div className="relative h-full md:h-600 w-full">
        <video className="h-full w-full object-cover" ref={vidRef}>
          <source src={steps} type="video/mp4" />
        </video>
        <div className="absolute left-10 md:left-32 bottom-10 flex flex-row text-cream items-center">
          <div className=" cursor-pointer  w-16 h-16 border-2 flex justify-center items-center border-cream">
            {active ? (
              <IoPauseSharp onClick={pause} className="text-2xl ml-1" />
            ) : (
              <IoPlaySharp onClick={play} className="text-2xl ml-1" />
            )}
          </div>
          <h5 className="ml-5 text-2xl">play video</h5>
        </div>
      </div>
      <h1
        className={
          active
            ? "absolute text-cream top-10 left-0 text-7xl pl-5 md:text-9xl w-full max-w-4xl md:ml-20 opacity-0 duration-1000"
            : "absolute text-cream top-10 left-0 text-7xl pl-5 md:text-9xl w-full max-w-4xl md:ml-20 "
        }
      >
        johnnie walker next steps initiative
      </h1>
    </div>
  );
}

export default Video;
