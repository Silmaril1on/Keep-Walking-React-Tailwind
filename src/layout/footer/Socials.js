import React from "react";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

function Socials() {
  return (
    <section className="text-cream flex flex-col">
      <div className="flex flex-row justify-end items-center mt-5">
        <FaYoutube className="text-3xl mx-2 cursor-pointer" />
        <FaInstagram className="text-3xl mx-2 cursor-pointer" />
        <FaFacebookF className="text-3xl mx-2 cursor-pointer" />
      </div>
      <h1 className="font-secondary italic w-full md:w-64 text-4xl pr-3 py-10 text-right">
        Keep Walking with us on <br />
        social
      </h1>
    </section>
  );
}

export default Socials;
