import React from "react";
const logo =
  "https://www.johnniewalker.com/inc/images/global/JohnnieWalkerNavigation.svg";

function Logo() {
  return (
    <div className="h-auto w-40 md:w-80">
      <img className="w-full h-full" src={logo} alt="johnnie-walker" />
    </div>
  );
}

export default Logo;
