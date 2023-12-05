import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import LocationRegions from "./LocationRegions";

function Location() {
  const [regions, setRegions] = useState(false);

  return (
    <div className="hidden md:block text-black">
      <div
        onClick={() => setRegions(!regions)}
        className="absolute top-10 left-24 flex flex-row items-center justify-around w-32"
      >
        <h1 className="font-primary text-hover cursor-pointer">
          change locatioon
        </h1>
        <IoLocationOutline />
      </div>
      {regions && <LocationRegions />}
    </div>
  );
}

export default Location;
