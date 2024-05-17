import React from "react";
import Image from "next/image";
import { PiShoppingCartLight } from "react-icons/pi";
import Link from "next/link";

const AllProductCard = ({ product }) => {

  const { id, imageSrc, title, price, discounted_price } = product;

  
  return (
    <div>
      <Link href={`/product/${id}`}>
      <div className=" border border-white bg-white rounded-lg w-[122px] lg:w-48 mx-auto hover:border hover:shadow cursor-pointer">
        <Image
          className="object-cover lg:h-[200px] lg:w-[700px] rounded p-3"
          src={product.imageSrc}
          width={500}
          height={500}
          alt="product image"
          style={{

            borderRadius: "19px",
          }}
        />

        <div className="p-5 text-center">
          {/* <p className="mb-1 text-xs lg:text-base font-normal text-gray-700 ">
            {product.name}
          </p> */}

          <p className="mb-1 text-xs lg:text-base font-normal text-gray-700">
            {product.title.length > 10
              ? `${product.title.slice(0, 10)}..`
              : product.title}
          </p>

          <h5 className="mb-1 text-xs lg:text-xl font-semibold lg:font-bold tracking-tight text-[#464242] ">
            BDT {product.price}TK
          </h5>

          {/* <p className="mb-2 text-xs lg:text-base font-normal text-gray-500 line-through ">
            BDT {product.price}TK
          </p> */}

          <div className="hidden lg:flex">
            <button className="w-full bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 lg:px-4 border-2 border-blue-500 hover:border-transparent">
              <span className="flex  justify-center">
                <span className="text-xs lg:text-2xl mt-[1px] lg:mt-0">
                  <PiShoppingCartLight />
                </span>
                <span className="text-xs lg:text-base">Add to Cart</span>
              </span>
            </button>
          </div>


          <div className="flex lg:hidden">
            <button className=" bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 border-2 border-blue-500 hover:border-transparent">
            <span className="flex justify-center">
                <span className="text-xs ml-[3px] lg:text-2xl mt-[1px] lg:mt-0">
                  <PiShoppingCartLight />
                </span>
                <span className="text-[10px] lg:text-base px-[3px]">Add to Cart</span>
              </span>
            </button>
          </div>


        </div>
      </div>
      </Link>
    </div>
  );
};

export default AllProductCard;

