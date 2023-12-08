import React from "react";
import video from "../../assets/sustain-video.mp4";
import whiskyMadeData from "../../database/whiskymadeData";
import WalkerLogos from "../../components/WalkingLogos";

function SectionFour() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center">
        <video autoPlay={true} loop={true} muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="flex flex-col md:flex-row justify-between my-3 items-center">
          <h1 className="text-2xl">societyy 2030</h1>
          <p className="font-secondary w-full p-4 md:w-2/4 text-xs">
            We're taking big steps towards a world that's more sustainable and
            more inclusive and we've created a ten-year action plan to help get
            us there. We'd love for you to walk with us.
          </p>
          <button className="border-2 border-black w-32 text-xl py-4 font-primary max-w-sm">
            walk with us
          </button>
        </div>
      </div>
      <div className="w-full relative pb-40 overflow-hidden">
        <div className=" flex flex-col md:flex-row justify-center items-center md:justify-end py-10 md:pr-28">
          {whiskyMadeData.slice(3, 6).map((item, index) => {
            return (
              <div className="w-60 m-2 h-64" key={index}>
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    className="primary-hover"
                    alt="whisky"
                  />
                </div>
                <h1 className="py-2 text-lg">{item.name}</h1>
                <p className="text-xs font-secondary">{item.info}</p>
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-0 left-20">
          <WalkerLogos />
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
