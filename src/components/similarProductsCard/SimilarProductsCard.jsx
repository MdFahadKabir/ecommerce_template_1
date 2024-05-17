

import React from "react";
import flashSaleImg from "../../assets/images/flashSale.png";
import Image from "next/image";
import { PiShoppingCartLight } from "react-icons/pi";

const SimilarProductsCard = () => {
  return (
    <div>
      <div className=" bg-white  rounded-xl w-32 lg:w-64 mx-auto border">
        <Image
          className="object-cover  lg:h-[250px] lg:w-[700px] p-4"
          src={flashSaleImg}
          width={500}
          height={500}
          alt="banner image"
          style={{

            borderRadius: "25px",
          }}
        />
        <div className="p-2 text-center">
          <p className="mb-3 font-normal text-gray-700 ">JBL Flip 4</p>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductsCard;


