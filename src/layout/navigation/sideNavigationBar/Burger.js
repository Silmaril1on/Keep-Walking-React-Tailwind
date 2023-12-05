import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

function Burger() {
  const [toggle, setToggle] = useState(false);

  const toggleClass = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-10  md:hidden justify-center flex items-center ">
      {toggle ? (
        <MdOutlineClose
          onClick={toggleClass}
          className="text-2xl cursor-pointer"
        />
      ) : (
        <HiOutlineMenuAlt2
          onClick={toggleClass}
          className="text-2xl cursor-pointer"
        />
      )}
    </div>
  );
}

export default Burger;
