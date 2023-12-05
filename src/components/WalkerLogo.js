import React from "react";
const logo =
  "https://www.johnniewalker.com/inc/images/global/keep-walking-man-filled-theme-bold-yellow.svg";

function WalkerLogo() {
  return (
    <div className="hidden md:block">
      <img src={logo} alt="keep-walking" />
    </div>
  );
}

export default WalkerLogo;
