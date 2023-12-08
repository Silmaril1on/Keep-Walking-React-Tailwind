import React from "react";
import follow1 from "../../assets/follow1.webp";
import follow2 from "../../assets/follow2.webp";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import WalkerLogos from "../../components/WalkingLogos";

function SectionFour() {
  return (
    <section className="page-container relative flex flex-col pb-32">
      <h1 className="text-orange text-6xl p-4 w-full md:text-8xl md:w-3/6">
        follow for more updates
      </h1>
      <div className="flex-col md:flex-row flex mt-5 p-4 relative z-10 w-full justify-center items-center md:justify-end md:pr-32">
        <div className="flex flex-col w-full md:w-96 m-2">
          <div className="overflow-hidden">
            <img className="primary-hover" src={follow1} alt="fb" />
          </div>
          <div className="flex flex-row items-center justify-start my-3">
            <AiFillInstagram className="text-2xl mr-2" />
            <h1 className="text-2xl">instagram</h1>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-96 m-2">
          <div className="overflow-hidden">
            <img className="primary-hover" src={follow2} alt="fb" />
          </div>
          <div className="flex flex-row items-center justify-start my-3">
            <FaSquareFacebook className="text-2xl mr-2" />
            <h1 className="text-2xl">facebook</h1>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-32 left-0">
        <WalkerLogos />
      </div>
    </section>
  );
}

export default SectionFour;
