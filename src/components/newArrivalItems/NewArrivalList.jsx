"use client";

import React, { useState, useEffect } from "react";
import NewArrivalCard from "./NewArrivalCard";
import SidebarDrawer from "@/app/(routes)/_component/SidebarDrawer";

const NewArrivalList = () => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [selectedValues, setSelectedValues] = useState(["All"]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [openFilterDrawer, setopenFilterDrawer] = useState(false);

  const [openDrawer, setOpenDrawer] = useState(false);

  const options = ["All", "Apple", "Samsung", "Realme", "Xiomi"];

  const toggleOption = (option) => {
    if (selectedValues.includes(option)) {
      setSelectedValues(selectedValues.filter((item) => item !== option));
    } else {
      setSelectedValues([...selectedValues, option]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter((product) => {
    const brandFilter =
      selectedValues.includes("All") || selectedValues.includes(product.brand);

    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);
    const priceFilter =
      isNaN(min) ||
      isNaN(max) ||
      (product.price >= min && product.price <= max);

    return brandFilter && priceFilter;
  });

  const filterHandler = () => {
    setopenFilterDrawer(true);
  };

  return (
    <div className="mt-16 max-w-[1400px] mx-auto">
      <div className="flex justify-center gap-10">
        <div className="w-[20%] hidden lg:block">
          {/* Search by Price Range */}
          <div className=" mb-8 bg-[#F6FBFF] w-64 h-[126px] rounded m-2 text-gray-600">
            <p className="text-gray-600 p-2">Price Range</p>
            <hr />
            <div className="ml-7 mt-5 flex gap-2">
              <input
                className="border-2 border-gray-400 w-20"
                placeholder="&ensp; &ensp; Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <h2 className="">To</h2>
              <input
                className="border-2 border-gray-400 w-20"
                placeholder="&ensp; &ensp; Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
          {/* Search by Price Range end */}

          <div>
            {/* MultiSelectDropdown Start  */}
            <div>
              {/* dropdown - btn */}
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="mx-auto flex w-64 items-center justify-between rounded bg-[#F6FBFF] px-6 py-2 border"
              >
                <h1 className="font-medium text-gray-600">
                  {selectedValues.length === 0 ? "Brand" : "Brand"}
                </h1>
                <svg
                  className={`${
                    isOpen ? "-rotate-180" : "rotate-0"
                  } duration-300`}
                  width={25}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              {/* dropdown - options  */}
              <div
                className={`${
                  isOpen
                    ? "visible -top-4 opacity-100 bg-[#F6FBFF]"
                    : "invisible -top-4 opacity-0"
                } relative mx-auto my-4 w-64 rounded-b py-4 border duration-300`}
              >
                {options.map((option, idx) => (
                  <div key={idx} className="px-6 py-2 flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedValues.includes(option)}
                      onChange={() => toggleOption(option)}
                      className="mr-2"
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            </div>
            {/* MultiSelectDropdown Start end */}
          </div>
        </div>
        <div className="lg:w-[80%] ">
          <h2 className="text-3xl font-semibold text-gray-600 ml-5 mb-5">
            All
          </h2>

          <div className="lg:hidden block absolute right-16 -mt-10">
            <button onClick={filterHandler} className="text-blue-600">
              Filter
            </button>
          </div>


          <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 gap-y-10">
            {filteredProducts.map((product, index) => (
              <NewArrivalCard key={index} product={product} 
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
              />
            ))}
          </div>

          <SidebarDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />


        </div>
      </div>

            {/* SidebarDrawer */}
            <div>
        {/* Overlay */}
        {openFilterDrawer && (
          <div
            className="fixed z-50 top-0 left-0 w-screen h-screen bg-black opacity-25"
            onClick={() => setopenFilterDrawer(false)}
          />
        )}

        <div
          className={`fixed z-[100] flex items-center justify-center ${
            openFilterDrawer ? "translate-x-0" : "translate-x-full"
          } top-0 right-0 w-[80%] lg:w-[30%] h-full bg-slate-100 transition-transform duration-300 ease-in-out`}
        >
          <div className="p-3 w-full max-w-md">
            <svg
              onClick={() => setopenFilterDrawer(false)}
              className="w-6 h-6 cursor-pointer fill-black absolute top-3 right-3"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
            </svg>
          </div>

          <div>
          <div className=" lg:hidden block mr-5 overflow-y-scroll">
          {/* Search by Price Range */}
          <div className="mb-8 bg-[#F6FBFF] w-64 h-[126px] rounded m-2 text-gray-600">
            <p className="text-gray-600 p-2">Price Range</p>
            <hr />
            <div className="ml-7 mt-5 flex gap-2">
              <input
                className="border-2 border-gray-400 w-20"
                placeholder="&ensp; &ensp; Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <h2 className="">To</h2>
              <input
                className="border-2 border-gray-400 w-20"
                placeholder="&ensp; &ensp; Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
          {/* Search by Price Range end */}

          <div>
            {/* MultiSelectDropdown Start  */}
            <div>
              {/* dropdown - btn */}
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="mx-auto flex w-64 items-center justify-between rounded bg-[#F6FBFF] px-6 py-2 border"
              >
                <h1 className="font-medium text-gray-600">
                  {selectedValues.length === 0 ? "Brand" : "Brand"}
                </h1>
                <svg
                  className={`${
                    isOpen ? "-rotate-180" : "rotate-0"
                  } duration-300`}
                  width={25}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              {/* dropdown - options  */}
              <div
                className={`${
                  isOpen
                    ? "visible -top-4 opacity-100 bg-[#F6FBFF]"
                    : "invisible -top-4 opacity-0"
                } relative mx-auto my-4 w-64 rounded-b py-4 border duration-300`}
              >
                {options.map((option, idx) => (
                  <div key={idx} className="px-6 py-2 flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedValues.includes(option)}
                      onChange={() => toggleOption(option)}
                      className="mr-2"
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            </div>
            {/* MultiSelectDropdown Start end */}
          </div>
        </div>
          </div>


        </div>
      </div>
      {/* SidebarDrawer end */}

      {/* <div className="flex justify-center mt-10">
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-8 lg:px-20 border-2 border-blue-500 hover:border-transparent">
          View All
        </button>
      </div> */}
    </div>
  );
};

export default NewArrivalList;
