"use client";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

import DiscoverCard from "./DiscoverCard";

const DiscoverList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./latestProduct.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="mt-16 bg-[#F4F8FB] pb-16 lg:mx-14 lg:rounded-xl cursor-pointer">
      <div className="flex justify-between mx-10">
        <div className="my-16">
          <h2 className="text-xl text-[#3b3939] lg:text-3xl font-semibold">
            Discover the Latest Arrivals
          </h2>

          <h3 className="mt-5 lg:w-3/4 text-[#464242] text-sm lg:text-base">
            Shop now and enjoy exclusive deals, exceptional customer service and
            fast shipping all over Bangladesh
          </h3>
        </div>

        <div className="mt-14 mb-32 hidden lg:flex">
          <button className="bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-20 border-2 border-blue-500 hover:border-transparent">
            View All
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={2}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        spaceBetween={-30}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper "
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <DiscoverCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-14 lg:hidden flex justify-center">
        <button className="bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-10 lg:px-20 border-2 border-blue-500 hover:border-transparent">
          View All
        </button>
      </div>
    </div>
  );
};

export default DiscoverList;

// import React from "react";
// import DiscoverCard from "./DiscoverCard";

// const DiscoverList = () => {
//   const products = Array.from({ length: 5 }, (_, index) => index);

//   return (
//     <div className="mt-16 bg-[#F4F8FB] pb-16 lg:mx-14 lg:rounded-xl cursor-pointer">
//       <div className="flex justify-between mx-10">
//         <div className="my-16">
//           <h2 className="text-xl text-[#3b3939] lg:text-3xl font-semibold">
//             Discover the Latest Arrivals
//           </h2>

//           <h3 className="mt-5 lg:w-3/4 text-[#464242] text-sm lg:text-base">
//             Shop now and enjoy exclusive deals, exceptional customer service and
//             fast shipping all over Bangladesh
//           </h3>
//         </div>

//         <div className="mt-14 mb-32 hidden lg:flex">
//           <button className="bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-20 border-2 border-blue-500 hover:border-transparent">
//             View All
//           </button>
//         </div>
//       </div>

//       <div className="flex gap-5 justify-center ml-20 lg:ml-0">
//         {products.map((index) => (
//           <DiscoverCard key={index} />
//         ))}
//       </div>

//       <div className="mt-14 lg:hidden flex justify-center">
//         <button className="bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-10 lg:px-20 border-2 border-blue-500 hover:border-transparent">
//           View All
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DiscoverList;
