import React from "react";
import newArrivalBanner from "../../../assets/images/newArrivalBanner.jpg";
import Image from "next/image";
import NewArrivalList from "@/components/newArrivalItems/NewArrivalList";

const page = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div>
        <h2 className="text-gray-500 mt-10 ml-3">New Arrival</h2>
      </div>

      <div className="flex justify-center mt-7">
        <Image
          className="object-cover  w-full"
          src={newArrivalBanner}
          width={500}
          height={500}
          alt="banner image"
        />
      </div>

      <NewArrivalList></NewArrivalList>
    </div>
  );
};

export default page;
