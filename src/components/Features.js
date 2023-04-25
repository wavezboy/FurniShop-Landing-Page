import React from "react";

// Import data
import { features } from "../data";

const Features = () => {
  // destructuring

  const { buttonText, feature2, image, items, subtitle, title } = features;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-[100px]">
          <div className="flex-1 order-1 lg:order-1">
            {/* image */}
            <img src={image.type} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 flex justify-end flex-col">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>

            {/* items */}
            <div>
              {items.map((item, index) => {
                // destructuring
                const { title, subtitle, icon } = item;
                return (
                  <div key={index} className="flex mb-6 lg:last-mb-0">
                    <div className="text-2xl mr-4 lg:text-4xl">{icon}</div>

                    <div>
                      <h4 className="text-base font-semibold mb-3 lg:text-xl">
                        {title}
                      </h4>
                      <p>{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
