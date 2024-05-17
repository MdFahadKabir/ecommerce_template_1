import Computers from "@/assets/images/svg/Computers";
import Gaming from "@/assets/images/svg/Gaming";
import HeadPhones from "@/assets/images/svg/HeadPhones";
import Phones from "@/assets/images/svg/Phones";
import SmartWatch from "@/assets/images/svg/SmartWatch";
import Link from "next/link";
import React from "react";
import { PiCameraThin } from "react-icons/pi";

const Category = () => {
  return (
    <div className="">
      <div className=" min-h-[60vh]">
        {/* <div className="bg-gradient-to-b from-sky-100 to-white"> */}
        <div className="bg-gradient-to-b from-sky-100 to-white">
          {/* <h2 className="text-4xl font-semibold pt-20 px-36">Browse By Category</h2> */}
          <h2 className="text-4xl font-semibold pt-20 px-36"></h2>
        </div>

        <div className="flex lg:justify-between max-w-screen-2xl  lg:px-36">
          <div>
            <h2 className="text-xl lg:text-4xl font-semibold pt-5">
              Browse By Category
            </h2>
          </div>

          <div className=" hidden lg:block pt-5 ">
            <Link href="/category">
              <button className=" bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-20 border-2 border-blue-500 hover:border-transparent">
                View All
              </button>
            </Link>
          </div>
        </div>

        <div className="ml-3 lg:ml-0 mt-5 lg:mt-10 grid grid-cols-3 lg:flex gap-4 lg:px-36 ">
          <div className="cursor-pointer border-2 border-gray-400 rounded w-[100px] h-[100px] lg:w-48 lg:h-40  hover:bg-blue-600 svg-hover hover:border-0">
            <span className="flex justify-center mt-2 lg:mt-9">
              <Phones />
            </span>
            <h2 className="text-center ">Phones</h2>
          </div>

          <div className="cursor-pointer  border-2 border-gray-400 rounded   w-[100px] h-[100px] lg:w-48 lg:h-40   hover:bg-blue-600 svg-hover hover:border-0">
            <span className="flex justify-center mt-2 lg:mt-9">
              <Computers />
            </span>
            <h2 className="text-center">Computers</h2>
          </div>

          <div className="cursor-pointer  border-2 border-gray-400 rounded   w-[100px] h-[100px] lg:w-48 lg:h-40   hover:bg-blue-600 svg-hover hover:border-0">
            <span className="flex justify-center mt-2 lg:mt-9">
              <SmartWatch />
            </span>
            <h2 className="text-center">SmartWatch</h2>
          </div>

          <div className="cursor-pointer  border-2 border-gray-400 rounded   w-[100px] h-[100px] lg:w-48 lg:h-40   hover:bg-blue-600 svg-hover hover:border-0">
            <span className="flex justify-center mt-2 lg:mt-9 text-5xl">
              <PiCameraThin />
            </span>
            <h2 className="text-center">Camera</h2>
          </div>

          <div className="cursor-pointer  border-2 border-gray-400 rounded   w-[100px] h-[100px] lg:w-48 lg:h-40   hover:bg-blue-600 svg-hover hover:border-0">
            <span className="flex justify-center mt-2 lg:mt-9">
              <HeadPhones />
            </span>
            <h2 className="text-center">HeadPhones</h2>
          </div>

          <div className="cursor-pointer  border-2 border-gray-400 rounded   w-[100px] h-[100px] lg:w-48 lg:h-40   hover:bg-blue-600 svg-hover hover:border-0">
            <span className="flex justify-center mt-2 lg:mt-9">
              <Gaming />
            </span>
            <h2 className="text-center">Gaming</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
