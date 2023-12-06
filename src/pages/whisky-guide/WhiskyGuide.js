import React from "react";
import VerticalLogo from "../../components/VerticalLogo";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";

function WhiskyGuide() {
  return (
    <main className="page-container">
      <VerticalLogo />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </main>
  );
}

export default WhiskyGuide;
