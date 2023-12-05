import React from "react";

function Paragraph({ children }) {
  return (
    <p className="font-secondary text-sm py-5 italic text-right pr-5 md:text-left indent-10">
      {children}
    </p>
  );
}

export default Paragraph;
