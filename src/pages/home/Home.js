import React from "react";
import Video from "./Video";
import SectionOne from "./SectionOne";
import VerticalLogo from "../../components/VerticalLogo";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import MobileSectionTwo from "./MobileSectionTwo";
import WalkWithUs from "../../components/WalkWithUs";

function Home() {
  return (
    <main className="flex flex-col">
      <Video />
      <section className="relative flex flex-col bg-cream">
        <VerticalLogo />
        <SectionOne />
        <SectionTwo />
        <MobileSectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <WalkWithUs />
      </section>
    </main>
  );
}

export default Home;
