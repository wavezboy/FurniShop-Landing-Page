import React from "react";
// import logo
import Logo from "../assets/img/logo.svg";

// import data
import { footer } from "../data";

const Footer = () => {
  return (
    <footer className="section bg-primary text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between border-b border-gray-700 border-opacity-75 pb-7 lg:pb-14 mb-14">
          <a className="mb-6 lg:mb-0" href="#">
            <img src={Logo} alt="" />
          </a>
          {/* social */}
          <div className="flex gap-4">
            {footer.social.map((items, index) => {
              return (
                <div
                  className="text-2xl h-12 w-12 bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center
                  transition"
                  key={index}
                >
                  <a href="#">{items.icon}</a>
                </div>
              );
            })}
          </div>
          {/* copyright content */}
        </div>
        <p className="text-center">
          &copy; Furnishop 2022 - all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
