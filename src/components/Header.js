import React from "react";

function Header({ children }) {
  return (
    <h1 className="font-primary text-3xl w-full py-3 pl-5 max-w-md">
      {children}
    </h1>
  );
}

export default Header;
