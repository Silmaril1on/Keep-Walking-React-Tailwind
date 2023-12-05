import React from "react";
import FooterLocation from "./FooterLocation";
import FooterLinks from "./FooterLinks";
import Socials from "./Socials";
import LogoWhite from "../../components/LogoWhite";

function Footer() {
  return (
    <footer className="flex flex-col relative z-10 justify-center items-center text-cream bg-black ">
      <section className="flex w-4/5 md:border-b-2 pb-2 md:border-cream pt-12 flex-col md:flex-row justify-between">
        <div className="w-full border-b-2 md:border-0 border-cream">
          <FooterLocation />
        </div>
        <div className="flex flex-col md:flex-row justify-start items-start">
          <button className="font-primary color-cream md:ml-5 my-2 border-b-2 w-full text-left md:border-0 md:w-20 border-cream text-xl">
            contact us
          </button>
          <button className="font-primary color-cream md:ml-5 my-2 border-b-2 w-full text-left md:border-0 md:w-20 border-cream text-xl">
            visit us
          </button>
        </div>
      </section>
      <section className="w-4/5 mt-9 flex flex-col-reverse md:flex-row ">
        <FooterLinks />
        <Socials />
      </section>
      <div className="flex flex-col md:flex-row my-10 justify-center items-center md:justify-between w-full md:w-4/5">
        <LogoWhite />
        <div className="font-secondary mt-7 italic text-xs w-72 text-center md:text-right">
          <h6>
            Please do not share with anyone under the legal purchase age for
            alcohol. Drink responsibly.
          </h6>
          <h6 className="py-3">© Diageo 2023</h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
