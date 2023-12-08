import React from "react";
import Video from "./Video";
import SectionTwo from "./SectionTwo";
import VerticalLogo from "../../components/VerticalLogo";
import SectionThree from "./SectionThree";
import MobileNews from "./MobileNews";
import SectionFour from "./SectionFour";

function Sustainability() {
  return (
    <main className="page-container">
      <VerticalLogo />
      <Video />
      <SectionTwo />
      <SectionThree />
      <MobileNews />
      <SectionFour />
    </main>
  );
}

export default Sustainability;
