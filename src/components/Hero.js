import React from "react";

// importing data

import { hero } from "../data";
import Stats from "../components/Stats";

const Hero = () => {
  // destructuring hero
  const { title, buttonText, subtitle } = hero;

  return (
    <section className="h-[850px] bg-hero bg-no-repeat bg-cover bg-right text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28">
      <div className="container mx-auto text-center">
        {/* title */}
        <h1
          className="text-2xl mx-auto font-semibold
        lg:text-[64px] mb-[30px] lg:leading-tight lg:max-w-[888px]"
        >
          {title}
        </h1>
        {/* subtitle */}
        <h2 className="mb-[30px] lg:mb-[65px] lg:text-xl mx-auto max-w-[627px]">
          {subtitle}
        </h2>
        {/* cta button */}
        <button className="bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px] mb-[150px] rounded-md text-xl backdrop-blur-md lg:px-[80px] lg:py-[16px] lg:mb-[195px] transition">
          {buttonText}
        </button>

        {/* stats */}
        <div>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
