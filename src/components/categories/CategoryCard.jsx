import React from "react";
import Image from "next/image";

const CategoryCard = ({ product }) => {
  return (
    <div>
      <div className="mx-auto ">
        <Image
          className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 object-cover lg:h-[134px] lg:w-[127px]"
          src={product.image}
          width={100}
          height={100}
          alt="Product image"
        />
        <div className="">
          <p className="text-center text-xs lg:text-sm">{product.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
