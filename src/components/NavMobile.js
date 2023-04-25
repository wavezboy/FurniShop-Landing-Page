import React from "react";
import { navigation } from "../data";
const NavMobile = () => {
  return (
    <div className="bg-white w-full h-full shadow-2xl">
      <ul className="flex flex-col items-center justify-center text-center h-full gap-y-6 ">
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a className="text-xl capitalize" href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMobile;
