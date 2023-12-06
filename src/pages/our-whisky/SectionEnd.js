import React from "react";
import top from "../../assets/gifting-top.webp";
import left from "../../assets/left-bottom.webp";
import bottom from "../../assets/gifting-bottom.webp";
import StaggerText from "../../components/StaggerText";
const back =
  "https://www.johnniewalker.com/inc/images/global/keep-walking-stamp-theme-bold-yellow.svg";

function SectionEnd() {
  return (
    <div className="w-full relative flex flex-col justify-center md:justify-start mt-2 items-center md:items-start bg-cream">
      <div className="absolute bottom-0 index-0 left-0">
        <img src={back} alt="banner" />
      </div>
      <div className="w-11/12  flex index-10 relative flex-col md:flex-row  md:justify-between">
        <div className="w-4/12 hidden  md:flex flex-col justify-center items-center">
          <div className="w-60 mb-7 h-auto">
            <img src={top} alt="gift" />
          </div>
          <div className="w-60 mt-16 h-auto">
            <img src={bottom} alt="gift" />
          </div>
        </div>
        <div className="flex w-full md:justify-start md:w-4/12">
          <StaggerText
            text="a memory in-a-bottle"
            className="text-orange font-primary text-6xl md:text-8xl"
          />
        </div>
        <div className="flex w-full flex-col md:w-64 justify-between items-center">
          <p className="indent-12 text-sm font-secondary py-4 md:py-0">
            Life isn’t meant to be sipped. So give a gift that says, let the
            good times begin. Like a bottle of Johnnie Walker with a unique
            photo label. Cheers to reliving memories and making new ones.
          </p>
          <button className="border-2 py-3 border-black w-full font-primary">
            share the moment
          </button>
          <div className="p-5 border-2 w-64 md:p-0">
            <img src={left} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionEnd;
