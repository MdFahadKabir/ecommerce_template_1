import React from "react";
import bannerImg from "../../../assets/images/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className=" bg-gradient-to-t from-sky-100 to-white">
      <div className="">
        <h2 className="text-center text-[#464242] text-lg lg:text-4xl pt-10 font-semibold">
          Discover The Best Deals On Electronics
        </h2>
        <h3 className="text-center text-[#757575] my-3 pb-3 lg:pb-0 lg:my-5">
          Shop now and save big on latest electronics
        </h3>
      </div>

      <div className="flex justify-center gap-5">
        <button className="bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">
          View
        </button>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4">
          Shop Now!
        </button>
      </div>

      <div className="flex justify-center mt-7">
        <Image
          className="object-cover  h-[160px] w-[260px] lg:h-[360px] lg:w-[800px] rounded-xl"
          src={bannerImg}
          width={500}
          height={500}
          alt="banner image"
        />
      </div>
    </div>
  );
};

export default Banner;
