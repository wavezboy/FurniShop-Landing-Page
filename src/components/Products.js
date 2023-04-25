import React from "react";

// import data
import { products } from "../data";

// import components
import ProductSlider from "../components/ProductSlider";

const Products = () => {
  // destructure product
  const { pages, subtitle, title } = products;

  return (
    <section className="section text-center ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="title">{title}</h2>
          <p className="max-w-[639px] mb-[50px] lg:mb-[70px]">{subtitle}</p>
        </div>
        {/* slider */}
        <ProductSlider />
      </div>
    </section>
  );
};

export default Products;
