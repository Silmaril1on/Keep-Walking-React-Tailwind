import React from "react";
import NavBarLogo from "./NavBarLogo";
import NavLinks from "./NavLinks";
import Burger from "../sideNavigationBar/Burger";
import Search from "../sideNavigationBar/Search";

function NavigationBar() {
  return (
    <nav className="flex flex-row justify-between md:flex-col bg-cream">
      <Burger />
      <NavBarLogo />
      <NavLinks />
      <Search />
    </nav>
  );
}

export default NavigationBar;
