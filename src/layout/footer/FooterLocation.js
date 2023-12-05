import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

function FooterLocation() {
  return (
    <section className="text-cream flex w-full md:w-40 flex-row justify-between items-center">
      <div className="flex flex-row">
        <IoLocationOutline className="text-xl" />
        <h4 className="font-primary ml-1 text-xl">change location</h4>
      </div>
      <IoIosArrowDown className="ml-2 text-xs" />
    </section>
  );
}

export default FooterLocation;
