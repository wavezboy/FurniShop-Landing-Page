import React from "react";
// import componenets
import TestimonialSlider from "./TestimonialSlider";

// import data
import { testimonial } from "../data";
import ProductSlider from "./ProductSlider";

const Testimonial = () => {
  // destructure data

  const { image, persons, title } = testimonial;

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-10">
          <div className="lg:max-w-[50%]">
            {/* title */}
            <h2 className="title mb-9">{title}</h2>
            {/* slider */}
            <TestimonialSlider />
          </div>
          <div>
            {/* image */}
            <img src={image.type} alt="" className="order-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
