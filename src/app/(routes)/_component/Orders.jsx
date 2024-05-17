import React from "react";

import order1 from "../../../assets/images/order1.png";
import Image from "next/image";

const Orders = () => {
  return (
    <div>
      <div className="lg:w-[700px] h-[373px]  mx-auto mt-5">
        <div className="flex justify-between font-semibold px-2 lg:px-0">
          <div>
            <h2>My Orders</h2>
          </div>

          <div>
            <h3 className="text-[#0074DE] text-sm font-semibold"></h3>
          </div>
        </div>

        <div className="lg:w-[700px] lg:h-[300px]   mx-auto bg-[#F6FBFF] rounded-lg mt-5 ">
          {/* single order list  */}
          <div className="flex gap-5">
            <div>
              <Image
                className="object-cover h-20 w-20 p-4"
                src={order1}
                width={500}
                height={500}
                alt="banner image"
                style={{
                  
                  borderRadius: "25px",
                }}
              />
            </div>

            <div className="mt-5">
              <h2>Redmi Note 5 Pro</h2>

              <div className="flex gap-2 text-xs text-gray-700">
                <p>12th April, 2024</p>

                <p>11:32 AM</p>
              </div>

              <div className="flex lg:hidden gap-1">
                <h2 className="h-7 mt-1 rounded-lg px-3 bg-[#C4FFC3] text-xs text-[#03AD00] pt-1">
                  Delivered
                </h2>

                <h2 className="h-7 rounded-lg px-3  text-[#FF7E07] bg-[#FFE1C5] text-xs mt-1 pt-1 ">
                  Cash On Delivery
                </h2>

                <h2 className="text-gray-500 font-semibold lg:ml-10 mt-7 absolute top-[40%] right-[2%]">
                ৳ 18,900
              </h2>

              </div>
            </div>

            <div className="lg:flex gap-2 hidden">
              <h2 className="h-7 rounded-lg px-3 bg-[#C4FFC3] text-xs mt-10 text-[#03AD00] pt-1">
                Delivered
              </h2>

              <h2 className="h-7 rounded-lg px-3  text-[#FF7E07] bg-[#FFE1C5] text-xs mt-10 pt-1 ">
                Cash On Delivery
              </h2>

              <h2 className="text-gray-500 font-semibold lg:ml-10 mt-7">
                ৳ 18,900
              </h2>
            </div>
          </div>

          <div>
            <hr />
          </div>
          {/* single order list end */}

          {/* single order list  */}
          <div className="flex gap-5">
            <div>
              <Image
                className="object-cover h-20 w-20 p-4"
                src={order1}
                width={500}
                height={500}
                alt="banner image"
                style={{

                  borderRadius: "25px",
                }}
              />
            </div>

            <div className="mt-5">
              <h2>Redmi Note 5 Pro</h2>

              <div className="flex gap-2 text-xs text-gray-700">
                <p>12th April, 2024</p>

                <p>11:32 AM</p>
              </div>
            </div>

            <div className="flex gap-2">
              <h2 className="h-7 rounded-lg px-3 bg-[#FFC3C3] text-xs mt-10 text-[#FF3A3A] pt-1">
                Cancelled
              </h2>

              <h2 className="text-gray-500 font-semibold lg:ml-[167px] mt-7">
                ৳ 18,900
              </h2>
            </div>
          </div>

          <div>
            <hr />
          </div>
          {/* single order list end */}

          {/* single order list  */}
          <div className="flex gap-5">
            <div>
              <Image
                className="object-cover h-20 w-20 p-4"
                src={order1}
                width={500}
                height={500}
                alt="banner image"
                style={{

                  borderRadius: "25px",
                }}
              />
            </div>

            <div className="mt-5">
              <h2>Redmi Note 5 Pro</h2>

              <div className="flex gap-2 text-xs text-gray-700">
                <p>12th April, 2024</p>

                <p>11:32 AM</p>
              </div>
            </div>

            <div className="flex gap-2">
              <h2 className="h-7 rounded-lg px-3 bg-[#D4DEFF] text-xs mt-10 text-[#7D4FFF] pt-1">
                Shipped
              </h2>

              <h2 className="text-gray-500 font-semibold lg:ml-[180px] mt-7">
                ৳ 18,900
              </h2>
            </div>
          </div>

          <div>
            <hr />
          </div>
          {/* single order list end */}
        </div>
      </div>
    </div>
  );
};

export default Orders;
