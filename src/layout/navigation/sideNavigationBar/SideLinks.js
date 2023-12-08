import React, { useState } from "react";
import { motion } from "framer-motion";
import { fade } from "../../../motionValues/animationValues";
import navigationData from "../../../database/navigationData";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";

function SideLinks({ toggle }) {
  const [dropLink, setDropLink] = useState(null);

  const dropDown = (id) => {
    if (id === dropLink) {
      setDropLink(null);
      return;
    }
    setDropLink(id);
  };

  return (
    <motion.aside
      variants={fade}
      initial="hidden"
      animate="visible"
      className=" w-full h-full absolute top-16 mt-1 left-0 z-20 bg-creamMain"
    >
      <div className="px-7 py-5">
        {navigationData.map((item) => {
          return (
            <div key={item.id}>
              <div
                onMouseEnter={() => dropDown(item.sublink)}
                className="my-3 flex flex-row justify-between items-center cursor-pointer border-b-2 border-black"
              >
                <NavLink to={item.link}>
                  <h1 onClick={toggle} className="font-primary text-3xl">
                    {item.name}
                  </h1>
                </NavLink>
                {item.sublink ? <FaAngleDown /> : " "}
              </div>
              {dropLink === item.sublink && (
                <DropDownLink data={item.sublink} />
              )}
            </div>
          );
        })}
      </div>
    </motion.aside>
  );
}

function DropDownLink({ data }) {
  return (
    <>
      {data ? (
        <div>
          {data.map((item) => {
            return (
              <div key={item.id}>
                <h1 className="font-primary cursor-pointer text-lg">
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default SideLinks;
