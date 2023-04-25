import React from "react";
import { features } from "../data";

const FeaturesSecond = () => {
  // destructuring
  const { image, subtitle, title } = features.feature2;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-[100px]">
          {/* text */}
          <div className="flex-1 flex justify-end flex-col">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
          </div>
          <div className="flex-1">
            {/* image */}
            <img src={image.type} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecond;
