import React from "react";
import Location from "./Location";
import Logo from "../../../components/Logo";
import { NavLink } from "react-router-dom";

function NavBarLogo() {
  return (
    <div className="relative flex flex-row p-6 bg-cream">
      <Location />
      <div className="m-auto">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
    </div>
  );
}

export default NavBarLogo;
