"use client";

import React, { useState, useEffect } from "react";
import TrendyProductCard from "./TrendyProductCard";
import SidebarDrawer from "@/app/(routes)/_component/SidebarDrawer";

const TrendyProductList = () => {
  const [products, setProducts] = useState([]);

  const [openDrawer, setOpenDrawer] = useState(false);

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

  return (
    <div className="mt-16  overflow-x-hidden">
      <div className="text-center my-16">
        <h2 className="text-2xl lg:text-4xl font-semibold text-[#464242]">
          Trendy Products
        </h2>

        <h3 className="mx-5 lg:mx-0 lg:text-xl font-medium mt-1 text-[#464242]">
          Explore the trendy products in the enormous electronic fields
        </h3>
      </div>

      <div className="mx-auto grid grid-cols-3 lg:grid-cols-6 lg:gap-4 lg:mx-10 gap-y-12">
        {products.map((product, index) => (
          <TrendyProductCard key={index} product={product} 
          openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-8 lg:px-20 border-2 border-blue-500 hover:border-transparent">
          View All
        </button>
      </div>

      <SidebarDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />

    </div>
  );
};

export default TrendyProductList;

// import React from "react";
// import ProductCard from "./TrendyProductCard";

// import React from "react";
// import ProductCard from "./ProductCard";

// const ProductList = () => {
//   const products = Array.from({ length: 12 }, (_, index) => index);

//   return (
//     <div className="mt-16">
//       <div className="text-center my-10">
//         <h2 className="text-4xl font-semibold text-[#464242]">Flash Sales</h2>

//         <h3 className="text-xl font-medium mt-1 text-[#464242]">
//           Find the best deals at best price
//         </h3>
//       </div>

//       <div className="mx-auto grid grid-cols-3 lg:grid-cols-6 gap-4 lg:mx-10 gap-y-12">
//         {products.map((index) => (
//           <ProductCard key={index} />
//         ))}
//       </div>

//       <div className="flex justify-center mt-10">
//       <button className="bg-blue-600  hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-20 border-2 border-blue-500 hover:border-transparent">
//               View All
//             </button>
//       </div>

//     </div>
//   );
// };

// export default ProductList;

// const TrendyProductList = () => {
//   const products = Array.from({ length: 12 }, (_, index) => index);

//   return (
//     <div className="mt-16">
//       <div className="text-center my-16">
//         <h2 className="text-2xl lg:text-4xl font-semibold text-[#464242]">Trendy Products</h2>

//         <h3 className="mx-5 lg:mx-0 lg:text-xl font-medium mt-1 text-[#464242]">
//         Explore the trendy products in the enormous electronic fields
//         </h3>
//       </div>

//       <div className="mx-auto grid grid-cols-3 lg:grid-cols-6 gap-4 lg:mx-10 gap-y-12">
//         {products.map((index) => (
//           <ProductCard key={index} />
//         ))}
//       </div>

//       <div className="flex justify-center mt-10">
//       <button className="bg-blue-600  hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-20 border-2 border-blue-500 hover:border-transparent">
//               View All
//             </button>
//       </div>
//     </div>
//   );
// };

// export default TrendyProductList;
