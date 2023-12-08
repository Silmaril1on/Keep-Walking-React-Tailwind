import React from "react";
import street1 from "../../assets/street1.jpg";
import Slider from "./Slider";
import Tasting from "./Tasting";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";

function PrinceStreet() {
  return (
    <section className="page-container">
      <h1 className="font-primary p-5 text-orange text-5xl md:text-9xl md:py-5 md:px-20">
        WELCOME TO JOHNNIE WALKER PRINCES STREET
      </h1>
      <img src={street1} alt="street" />
      <p className="font-secondary text-xs md:text-sm p-4 md:px-28 md:mx-10 md:my-10 md:py-5">
        We’re not just here for whisky drinkers, we're here for those looking to
        try something new. Come on in to Johnnie Walker Princes Street for
        five-star tours, immersive tastings, rooftop bars, astonishing views of
        Edinburgh Castle, expertly crafted cocktails, locally sourced cuisine,
        an outstanding store, and amazing spaces you can hire, all in one unique
        building right in the heart of Scotland's capital.
      </p>
      <Slider />
      <Tasting />
      <SectionThree />
      <SectionFour />
    </section>
  );
}

export default PrinceStreet;
