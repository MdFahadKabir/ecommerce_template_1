"use client";
import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import AllProductList from "../allProducts/AllProductList";

const CategoryList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./category.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // https://i.ibb.co/NNPvZPN/Smart-TV.png
  // https://i.ibb.co/TWjf97S/Smartphone.png
  // https://i.ibb.co/dLTB1y1/Tab.png
  // https://i.ibb.co/02ZzXk1/Laptop.png
  // https://i.ibb.co/J3D5Q0m/Smartwatch.png
  // https://i.ibb.co/bLPfxN2/Gadgets.png
  // https://i.ibb.co/pnMgBny/Sound-Applicance.png
  // https://i.ibb.co/ZLw0gXp/Household-Device.png

  return (
    <div className="mt-2 pb-16 lg:mx-14 lg:rounded-xl cursor-pointer">
      <div className="flex justify-between mx-10">
        <div className="">
          <h2 className="my-6 lg:ml-2 text-gray-500 font-semibold">
            All Category
          </h2>
        </div>
      </div>

      <div className="mx-10  grid grid-cols-4 lg:flex gap-10 flex-wrap justify-center">
        {products.map((product) => (
          <CategoryCard key={product.id} product={product} />
        ))}
      </div>

      <AllProductList></AllProductList>
    </div>
  );
};

export default CategoryList;
