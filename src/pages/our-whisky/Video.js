import React from "react";
import whisky from "../../assets/johnnie-whisky.mp4";

function Video() {
  return (
    <section className="w-full flex flex-col relative z-10 h-full md:h-full mt-5">
      <div className="h-500">
        <video
          className="w-full h-full object-cover"
          autoPlay={true}
          muted
          loop={true}
        >
          <source src={whisky} type="video/mp4" />
        </video>
      </div>
      <div className="hidden absolute text-cream top-0 left-0 w-1/2 md:flex flex-col ml-36 h-full ">
        <h6 className="font-secondary my-10 text-cream text-md capitalize">
          most popular
        </h6>
        <h1 className="text-8xl">
          johnnie walker <br /> black label 12 yars
        </h1>
        <p className="font-secondary text-sm italic my-6 max-w-lg">
          Johnnie Walker Black Label is one of life’s true icons. A masterful
          blend of single malt and grain whiskies from across Scotland, aged for
          at least 12 years. The result is a timeless classic with depth and
          balance of flavor. Drink it with ice, neat or in a Highball.
        </p>
        <h4>see details</h4>
      </div>
      <h1 className="block md:hidden text-6xl text-cream absolute top-0 left-0 py-10 pl-5">
        johnie walker black label 12 years
      </h1>
      <p className="block md:hidden text-black italic p-5 font-secondary text-sm">
        Johnnie Walker Black Label is one of life’s true icons. A masterful
        blend of single malt and grain whiskies from across Scotland, aged for
        at least 12 years. The result is a timeless classic with depth and
        balance of flavor. Drink it with ice, neat or in a Highball.
      </p>
    </section>
  );
}

export default Video;
