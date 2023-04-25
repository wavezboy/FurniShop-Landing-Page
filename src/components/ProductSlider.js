import React from "react";

// import swiper from react component

import { Swiper, SwiperSlide } from "swiper/react";

// swiper css

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";

// impot required module
import { Navigation, Pagination } from "swiper";

// import data
import { navigation, products } from "../data";

// import icons
import { HiPlus } from "react-icons/hi";

const ProductSlider = () => {
  // destructure
  const { pages } = products;
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      navigation={true}
      className="productSlider min-h-[130px]"
    >
      {pages.map((page, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]">
              {page.productList.map((product, index) => {
                // destructure product
                const { icon, image, name, oldPrice, price } = product;
                return (
                  <div
                    className="w-full max-w-[290px] h-[380px] text-left"
                    key={index}
                  >
                    <div className="border hover:border-accent w-full max-w-[285px] h-full max-h-[292px] flex items-center justify-center relative transition rounded-[18px]">
                      <img src={image.type} alt="" />
                      <div className="absolute bottom-4 right-[22px] bg-gray-200 h-8 w-8 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-300 transition">
                        <HiPlus className="text-xl text-primary" />
                      </div>
                    </div>
                    <div className="font-semibold lg:text-xl">{name}</div>
                    <div className="flex gap-x-3 items-center">
                      <div>$ {price}</div>
                      <div className="text-grey text-[15px] line-through">
                        $ {oldPrice}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSlider;
