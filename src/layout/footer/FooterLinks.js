import React from "react";

function FooterLinks() {
  return (
    <section className="text-cream w-full flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-3/12">
        <h5 className="font-secondary py-5">Popular questions</h5>
        <h2 className="font-primary text-3xl my-3 cursor-pointer">
          HOW DO I MAKE A HIGHBALL COCKTAIL?
        </h2>
        <h2 className="font-primary text-3xl my-3 cursor-pointer">
          HOW DO I DRINK WHISKY?
        </h2>
      </div>

      <div className="w-full md:w-3/12">
        <h5 className="font-secondary py-5">Privacy and accessibility</h5>
        <h2 className="font-primary text-3xl my-3 cursor-pointer">
          condition of use
        </h2>
        <h2 className="font-primary text-3xl my-3 cursor-pointer">
          diageo privacy centre
        </h2>
        <h2 className="font-primary text-3xl my-3 cursor-pointer">
          privacy and cookie notice
        </h2>
        <h2 className="font-primary text-3xl my-3 cursor-pointer">
          ugc policy
        </h2>
        <h2 className="font-primary text-3xl my-3 cursor-pointer">
          accessibility
        </h2>
        <h2 className="font-primary text-3xl my-3 cursor-pointer">
          privacy settings
        </h2>
      </div>

      <div className="w-full md:w-3/12">
        <h5 className="font-secondary py-5">Drinking responsibly</h5>
        <h2 className="font-primary text-3xl my-3 cursor-pointer">
          drink aware
        </h2>
        <h2 className="font-primary text-3xl my-3 cursor-pointer">dring iq</h2>
        <h2 className="font-primary text-3xl my-3 cursor-pointer">
          thebar.com
        </h2>
        <h2 className="font-primary text-3xl my-3 cursor-pointer">diageo</h2>
      </div>
    </section>
  );
}

export default FooterLinks;
