import React from "react";
import VerticalLogo from "../../components/VerticalLogo";
import PageHeader from "../../components/PageHeader";
import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";
import Video from "./Video";
import WhiskyList from "./WhiskyList";
import SectionEnd from "./SectionEnd";

function OurWhisky() {
  return (
    <main className="page-container">
      <VerticalLogo />
      <PageHeader>
        <Header>discover our whiskies</Header>
        <Paragraph>
          Explore the unparalleled Johnnie Walker whisky range with our
          signature bold flavors. Shop our Limited Editions, the perfect whisky
          gift for any occasion.
        </Paragraph>
      </PageHeader>
      <Video />
      <WhiskyList />
      <SectionEnd />
    </main>
  );
}

export default OurWhisky;
