import React from "react";
import flashSaleImg from "../../../assets/images/flashSale.png";
import trendyProductsImg from "../../../assets/images/trendyProducts.png";
import pixelImg from "../../../assets/images/pixel.png";
import Image from "next/image";

const ExclusiveDeals = () => {
  return (
    <div className="max-w-screen-xl min-h-[70vh]	mx-auto mt-32 px-5 lg:px-0">
      <div className="lg:flex mt-10 ">
        {/* 55% */}
        <div className="w-full lg:w-[55%] min-h-[60vh] ">
          <h2 className="text-[#3b3939] text-xl lg:text-4xl font-semibold">
            Exclusive Deals and Fast Shipping
          </h2>

          <p className="my-6 lg:w-3/4 text-sm lg:text-lg text-[#464242] ">
            Shop now and enjoy exclusive deals, exceptional customer service and
            fast shipping all over Bangladesh
          </p>

          <div className="my-5 lg:my-0 lg:flex justify-center lg:mt-10 gap-8">
            <div className="relative">
              <Image
                className="object-cover h-[270px] w-[700px] rounded"
                src={flashSaleImg}
                width={500}
                height={500}
                alt="banner image"
              />

              <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>
              <div className="absolute left-7 bottom-4 grid items-center ">
                <h2 className="text-white text-2xl font-semibold">
                Flash Sale
                </h2>
                <h2 className="text-white text-lg font-semibold">Shop Now</h2>
              </div>
            </div>
            <div className="relative mt-5 lg:mt-0">
              <Image
                className="object-cover h-[270px] w-[700px] rounded"
                src={trendyProductsImg}
                width={500}
                height={500}
                alt="banner image"
              />
              <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>
              <div className="absolute left-7 bottom-4 grid items-center ">
                <h2 className="text-white text-2xl font-semibold">
                Trendy Products
                </h2>
                <h2 className="text-white text-lg font-semibold">Shop Now</h2>
              </div>
            </div>
          </div>

          {/* <div className="flex mt-14 gap-5">
            <button className="bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">
              View
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4">
              Shop Now!
            </button>
          </div> */}


        </div>

        {/* 45% */}
        <div className="w-full lg:w-[45%] ">
          <div className=" relative lg:w-[430px] mx-auto">
            <Image
              className="object-cover h-[280px] lg:h-[430px] lg:w-[430px] rounded-2xl"
              src={pixelImg}
              width={500}
              height={500}
              alt="banner image"
            />

            <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>
            <div className="absolute left-7 bottom-4 grid items-center ">
              <h2 className="text-white text-2xl font-semibold">
                Save Big On PIXEL
              </h2>
              <h2 className="text-white text-lg font-semibold">Shop Now</h2>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ExclusiveDeals;


