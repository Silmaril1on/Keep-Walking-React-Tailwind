import React from "react";
import PageHeader from "../../components/PageHeader";
import Header from "../../components/Header";
import Paragraph from "../../components/Paragraph";
import VerticalLogo from "../../components/VerticalLogo";
import CocktailsList from "./CocktailsList";
import WalkWithUs from "../../components/WalkWithUs";

function WhiskyCocktails() {
  return (
    <main className="page-container">
      <VerticalLogo />
      <PageHeader>
        <Header>discover our whisky cocktails</Header>
        <Paragraph>
          Discover our whisky cocktail recipes to bring Johnnie Walker to life
          in a new way. Try unexpected cocktails with scotch in easy-to-make
          Highball drinks. Explore classic whisky cocktails like the Old
          Fashioned or a Whisky Sour. Experiment with different Johnnie Walker
          Labels to bring unique flavors into your Scotch drinks. However, you
          like your cocktail, whatever the occasion, there’s a Johnnie Walker
          recipe for you. Cheers.
        </Paragraph>
      </PageHeader>
      <CocktailsList />
      <WalkWithUs />
    </main>
  );
}

export default WhiskyCocktails;
