import React from "react";
import Image from "next/image";

const DiscoverCard = ({ product }) => {
  return (
    <div>
      <div className="max-w-xs bg-white rounded-xl w-32 lg:w-64 mx-auto border">
        <Image
          className="object-cover lg:h-[250px] lg:w-[700px] p-4"
          src={product.image}
          width={500}
          height={500}
          alt="Product image"
          style={{

            borderRadius: "25px",
          }}
        />
        <div className="p-2 text-center">
          <p className="mb-3 font-normal text-gray-700 ">{product.name}</p>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;

// import React from "react";
// import flashSaleImg from "../../assets/images/flashSale.png";
// import Image from "next/image";
// import { PiShoppingCartLight } from "react-icons/pi";

// const DiscoverCard = () => {
//   return (
//     <div>
//       <div className="max-w-xs bg-white  rounded-xl w-32 lg:w-64 mx-auto border">
//         <Image
//           className="object-cover  lg:h-[250px] lg:w-[700px] p-4"
//           src={flashSaleImg}
//           width={500}
//           height={500}
//           alt="banner image"
//           style={{
//             objectFit: "cover",
//             borderRadius: "25px",
//           }}
//         />
//         <div className="p-2 text-center">
//           <p className="mb-3 font-normal text-gray-700 ">JBL Flip 4</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DiscoverCard;
