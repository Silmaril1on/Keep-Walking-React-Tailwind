import React, { useState } from "react";
import navigationData from "../../../database/navigationData";
import "../../layout.css";
import { SlEnvolopeLetter } from "react-icons/sl";
import Modal from "../../../components/Modal";
import Sublinks from "./Sublinks";
import { NavLink } from "react-router-dom";

function NavLinks() {
  const sublinksData = navigationData.map((item) => item.sublink);
  const storyData = navigationData.map((item) => item.story);

  const [active, setActive] = useState(0);
  const [modal, setModal] = useState(false);
  const [sublink, setSubLink] = useState(null);
  const [story, setStory] = useState(0);

  const activeLink = (index) => {
    setSubLink(index);
    setActive(index);
    setSubLink(false);
  };

  const modalBtn = () => {
    setModal(!modal);
  };

  const openSublink = (index) => {
    setSubLink(index);
    setStory(index);
  };

  return (
    <nav className="hidden md:block">
      <div
        onMouseLeave={() => setSubLink(false)}
        className="relative flex flex-row flex-wrap justify-center p-2 mb-1"
      >
        {navigationData.map((link, index) => {
          return (
            <div
              onMouseEnter={() => openSublink(index)}
              className="mx-1"
              key={link.id}
            >
              <NavLink to={link.link}>
                <h4
                  onClick={() => activeLink(index)}
                  className={
                    active === index
                      ? "font-primary w-auto px-1 cursor-pointer border-b-2 text-xl border-black"
                      : "font-primary w-auto px-1 cursor-pointer text-hover text-xl"
                  }
                >
                  {link.name}
                </h4>
              </NavLink>
            </div>
          );
        })}
        <div onClick={modalBtn} className="cursor-pointer">
          <SlEnvolopeLetter />
        </div>
        {sublink && (
          <Sublinks
            data={sublinksData[sublink]}
            setSubLink={setSubLink}
            story={storyData[story]}
          />
        )}
      </div>
      {modal && <Modal modalBtn={modalBtn} />}
    </nav>
  );
}

export default NavLinks;
