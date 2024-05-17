import React from "react";
import SimilarProductsCard from "./SimilarProductsCard";
// import Marquee from "react-fast-marquee";

const SimilarProductsCardList = () => {
  const products = Array.from({ length: 5 }, (_, index) => index);

  return (
    <div className="mt-16 bg-[#F4F8FB] pb-16 lg:mx-14 lg:rounded-xl cursor-pointer max-w-screen-2xl mx-auto">
      <div className="flex justify-between mx-10">
        <div className="my-16">
          <h2 className="text-xl text-[#3b3939] lg:text-3xl font-semibold">
          Similar Products
          </h2>

          <h3 className="mt-5 lg:w-3/4 text-[#464242] text-sm lg:text-base">
            Shop now and enjoy exclusive deals, exceptional customer service and
            fast shipping all over Bangladesh
          </h3>
        </div>

        <div className="mt-14 mb-32 hidden lg:flex">
          <button className="bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-20 border-2 border-blue-500 hover:border-transparent">
            View All
          </button>
        </div>
      </div>

      {/* <Marquee>  */}
      <div className="flex gap-5 justify-center ml-20 lg:ml-0">
        {products.map((index) => (
          <SimilarProductsCard key={index} />
        ))}
      </div>

      {/* </Marquee>  */}

      <div className="mt-14 lg:hidden flex justify-center">
        <button className="bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-10 lg:px-20 border-2 border-blue-500 hover:border-transparent">
          View All
        </button>
      </div>
    </div>
  );
};

export default SimilarProductsCardList;
