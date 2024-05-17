import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";

const Address = () => {
  return (
    <div className="lg:w-[700px] h-[373px]  mx-auto mt-5">
      <div className="flex justify-between font-semibold px-2 lg:px-0">
        <div>
          <h2>My Address</h2>
        </div>

        <div>
          <h3 className="text-[#0074DE] text-sm font-semibold">
            Change Address
          </h3>
        </div>
      </div>

      <div className="lg:w-[700px] lg:h-[300px]   mx-auto bg-[#F6FBFF] rounded-lg mt-5">
        <div className="flex gap-5 ml-7 mt-7">
          <div className="mt-5 text-4xl p-3 rounded-full bg-[#D7ECFF] text-[#0074DE]">
            <MdOutlineLocationOn />
          </div>

          <div className="w-1/2 mt-5">
            <h2 className="text-gray-700">Home</h2>

            <h2 className="text-xs text-gray-500">
              82 No. Majhirghat Road, Gazi Dipo Lane, East Madarbari, Chattogram
              40000
            </h2>
          </div>
        </div>

        <div className="mt-4">
          <hr />
        </div>

        <div className="flex gap-5 ml-7 mt-7">
          <div className="text-4xl p-3 rounded-full bg-[#D7ECFF] text-[#0074DE]">
            <MdOutlineLocationOn />
          </div>

          <div className="w-1/2">
            <h2 className="text-gray-700">Office</h2>

            <h2 className="text-xs text-gray-500">
              82 No. Majhirghat Road, Gazi Dipo Lane, East Madarbari, Chattogram
              40000
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
