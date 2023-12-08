import React from "react";
import shop1 from "../../assets/shop1.webp";
import shop2 from "../../assets/shop2.webp";

function SectionThree() {
  return (
    <section className="w-full flex flex-col items-center mt-16">
      <div className="w-full md:w-10/12 flex flex-col mb-5">
        <img src={shop1} alt="shop" />
        <div className="w-full flex flex-col md:flex-row">
          <h1 className="text-3xl md:text-5xl font-secondary text-center px-10 italic font-bold py-10">
            Shop at Johnnie Walker Princes Street
          </h1>
          <p className="font-secondary px-10 py-10">
            Visit our retail area on the ground floor at Johnnie Walker Princes
            Street to discover limited edition whiskies, clothing and
            merchandise that you won't find anywhere else. You can even bottle
            your own whisky from our seasonal blends and engrave your own
            message. Perfect for a gift or memento of your visit.
          </p>
          <button className="border-2 mt-10  h-16 text-xl px-16 border-black font-primary">
            explore
          </button>
        </div>
      </div>
      <div className="w-full md:w-10/12 flex flex-col">
        <img src={shop2} alt="shop" />
        <div className="w-full flex flex-col md:flex-row">
          <h1 className="text-3xl md:text-5xl font-secondary text-center px-10 italic font-bold py-10">
            Plan Your Visit
          </h1>
          <p className="font-secondary px-10 py-10">
            Check out our opening hours, location, accessibility information and
            FAQs to start planning your visit.
          </p>
          <div className="flex flex-col">
            <button className="border-2 mt-10  h-16 text-xl px-16 border-black font-primary">
              find our more
            </button>
            <button className="border-2 mt-2 mb-10 h-16 text-xl px-16 border-black font-primary">
              view on google my business
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-orange flex flex-col md:flex-row">
        <div className="flex p-5 flex-col items-center w-full md:w-2/4 my-10 py-8">
          <h1 className="text-cream text-6xl">stride into your world</h1>
          <p className="font-secondary text-sm italic max-w-md">
            Join our community of whisky explorers and stride into the world of
            Johnnie Walker Princes Street.
          </p>
        </div>
        <div className="w-auto m-2 my-5 md:w-2/4 flex items-center justify-center">
          <button className="bg-black py-5 text-2xl text-cream font-primary w-full md:max-w-lg">
            sign me up
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
