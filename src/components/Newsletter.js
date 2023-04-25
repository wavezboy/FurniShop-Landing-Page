import React from "react";
// import data
import { newsletter } from "../data";

const Newsletter = () => {
  // destructure data
  const { buttonText, placeholder, subtitle, title } = newsletter;
  return (
    <section className="section bg-newsletter min-h-[490px]">
      <div className="container mx-auto flex justify-center lg:justify-end">
        <div>
          <div className="w-full max-w-[558px] text-center text-white lg:text-left">
            <h2 className="text-4xl max-w-[350px] font-semibold mx-auto lg:mx-0 mb-5 leading-normal">
              {title}
            </h2>
            <p className="text-xl font-light mb-10">{subtitle}</p>
            <div className="flex flex-col lg:flex-row gap-[22px]">
              <input
                className="h-[60px] outline-none px-6 placeholder:text-gray-400 text-gray-600 rounded-lg lg:flex-1"
                type="text"
                placeholder={placeholder}
              />
              <button className="bg-primary h-[60px] hover:bg-slate-900 px-7 rounded-lg font-medium text-xl transition">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
