import React from "react";

// import data

import { stats } from "../data";

const Stats = () => {
  return (
    <div className="bg-accent rounded-[20px] p-12">
      <div className="flex flex-wrap gap-y-9">
        {stats.map((item, index) => {
          return (
            <div
              className="min-h-[70px] w-1/2 flex flex-col odd:border-r lg:flex-1 lg:odd:border-r lg:even:border-r lg:last:border-none"
              key={index}
            >
              <div className="text-2xl lg:text-4xl font-semibold">
                {item.value}
              </div>
              <div className="text-base font-light max-w-[110px mx-auto] lg:text-xl">
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
