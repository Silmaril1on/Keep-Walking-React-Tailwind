import React from "react";
import { CiSearch } from "react-icons/ci";
import { SlEnvolopeLetter } from "react-icons/sl";

function Search() {
  return (
    <div className="flex flex-row justify-center items-center md:hidden">
      <SlEnvolopeLetter className="m-1" />
      <CiSearch className="m-1 text-xl" />
    </div>
  );
}

export default Search;
