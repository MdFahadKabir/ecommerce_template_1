import FlashSaleList from "@/components/flashSaleItems/FlashSaleList";
import React from "react";
import flashSaleBanner from "../../../assets/images/flashSaleBanner.jpg";
import Image from "next/image";

const page = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div>
        <h2 className="text-gray-500 mt-10 ml-3">Flash Sale</h2>
      </div>

      <div className="flex justify-center mt-7">
        <Image
          className="object-cover  w-full"
          src={flashSaleBanner}
          width={500}
          height={500}
          alt="banner image"
        />
      </div>

      <FlashSaleList></FlashSaleList>
    </div>
  );
};

export default page;
