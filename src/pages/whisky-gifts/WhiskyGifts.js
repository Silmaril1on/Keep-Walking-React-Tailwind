import React from "react";
import VerticalLogo from "../../components/VerticalLogo";
import PageHeader from "../../components/PageHeader";
import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";
import WalkWithUs from "../../components/WalkWithUs";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

function WhiskyGifts() {
  return (
    <main className="page-container relative">
      <VerticalLogo />
      <PageHeader>
        <Header>our whisky gifts</Header>
        <Paragraph>
          Give the gift of good times spent together with a bottle of Johnnie
          Walker whisky. Our range of whisky gifts has something for everyone
          and every occasion. Discover Johnnie Walker gifts including our core
          range, and limited edition whiskies and gift sets. Add your personal
          touch with a one-of-a-kind label or engraving.
        </Paragraph>
      </PageHeader>
      <SectionOne />
      <SectionTwo />
      <WalkWithUs />
    </main>
  );
}

export default WhiskyGifts;
