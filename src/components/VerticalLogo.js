import React from "react";
const vertical =
  "https://www.johnniewalker.com/inc/images/global/keep-walking-strip-empty-theme-bold-yellow.svg";

function VerticalLogo() {
  return (
    <div className="hidden md:block fixed bg-transparent z-10 right-0 top-0 w-auto">
      <img
        className="w-full h-full"
        src={vertical}
        alt="vertical-walker-logo"
      />
    </div>
  );
}

export default VerticalLogo;
