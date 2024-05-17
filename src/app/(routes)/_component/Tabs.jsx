"use client";

import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import Orders from "./Orders";
import Address from "./Address";
import Password from "./Password";
import Breadcrumb from "./Breadcrumb";
import ProfileSvg from "@/assets/images/svg/ProfileSvg";
import OrderSvg from "@/assets/images/svg/OrderSvg";
import AddressSvg from "@/assets/images/svg/AddressSvg";
import PasswordSvg from "@/assets/images/svg/PasswordSvg";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const tab = queryParams.get("tab");
    if (tab && ["profile", "orders", "address", "password"].includes(tab)) {
      setActiveTab(tab);
    }
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("tab", tab);
    window.history.replaceState(null, null, "?" + queryParams.toString());
  };

  return (
    <div className="">

      <Breadcrumb></Breadcrumb>


      {/* tabs section  */}
      <div className="text-sm font-medium text-center text-gray-500">
        <ul className="flex flex-wrap justify-center -mb-px">
          <li className="me-2 border-b border-gray-200">
            <button
              className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${
                activeTab === "profile"
                  ? "text-blue-600 border-blue-600"
                  : "hover:text-gray-600 hover:border-gray-300"
              }`}
              onClick={() => handleTabClick("profile")}
            >
              <span>
                <span className="">
                <ProfileSvg />
               </span>
               Profile
               <span>

               </span>
              </span>
            </button>
          </li>
          <li className="me-2 border-b border-gray-200">
            <button

              className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${
                activeTab === "orders"
                  ? "text-blue-600 border-blue-600"
                  : "hover:text-gray-600 hover:border-gray-300"
              }`}
              onClick={() => handleTabClick("orders")}
            >
              <span>
                <span>
                  <OrderSvg />
                </span>
                <span>
                Order
                </span>
              </span>
            </button>
          </li>


          <li className="me-2 border-b border-gray-200">
            <button

              className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${
                activeTab === "address"
                  ? "text-blue-600 border-blue-600"
                  : "hover:text-gray-600 hover:border-gray-300"
              }`}
              onClick={() => handleTabClick("address")}
            >
              <span>
                <span>
                  <AddressSvg />
                </span>
                <span>
                Address
                </span>
              </span>
            </button>
          </li>

          <li className="me-2 border-b border-gray-200">
            <button

              className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${
                activeTab === "password"
                  ? "text-blue-600 border-blue-600"
                  : "hover:text-gray-600 hover:border-gray-300"
              }`}
              onClick={() => handleTabClick("password")}
            >
              <span>

                <span>
                  <PasswordSvg />
                </span>
                <span>Password</span>
              </span>
            </button>
          </li>



        </ul>
      </div>
      {/* tabs section end */}

      {activeTab === "profile" && <Profile />}
      {activeTab === "orders" && <Orders />}
      {activeTab === "address" && <Address />}
      {activeTab === "password" && <Password />}
    </div>
  );
};

export default Tabs;

// import React, { useState } from "react";
// import Profile from "./Profile";
// import Orders from "./Orders";
// import Address from "./Address";

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState("profile");
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="">
//       {/* tabs section  */}
//       <div className="text-sm font-medium text-center text-gray-500">
//         <ul className="flex flex-wrap justify-center -mb-px">
//           <li className="me-2 border-b border-gray-200">
//             <a
//               href="#"
//               className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${
//                 activeTab === "profile" ? "text-blue-600  border-blue-600" : "hover:text-gray-600 hover:border-gray-300"
//               }`}
//               onClick={() => handleTabClick("profile")}
//             >
//               Profile
//             </a>
//           </li>
//           <li className="me-2 border-b border-gray-200">
//             <a
//               href="#"
//               className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${
//                 activeTab === "orders" ? "text-blue-600 border-blue-600" : "hover:text-gray-600 hover:border-gray-300"
//               }`}
//               onClick={() => handleTabClick("orders")}
//             >
//               Orders
//             </a>
//           </li>
//           <li className="me-2 border-b border-gray-200">
//             <a
//               href="#"
//               className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${
//                 activeTab === "address" ? "text-blue-600 border-blue-600" : "hover:text-gray-600 hover:border-gray-300"
//               }`}
//               onClick={() => handleTabClick("address")}
//             >
//               Address
//             </a>
//           </li>
//         </ul>
//       </div>
//       {/* tabs section end */}

//       {activeTab === "profile" && <Profile />}
//       {activeTab === "orders" && <Orders />}
//       {activeTab === "address" && <Address />}
//     </div>
//   );
// };

// export default Tabs;

// --------------------------------------------------------------------------------------

// import React from "react";
// import Profile from "./Profile";
// import Orders from "./Orders";
// import Address from "./Address";

// const Tabs = () => {
//   return (
//     <div className="">

//       {/* tabs section  */}
//       <div className="text-sm font-medium text-center text-gray-500  ">
//         <ul className="flex flex-wrap justify-center -mb-px  ">
//           <li className="me-2 border-b border-gray-200 ">
//             <a
//               href="#"
//               className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
//             >
//               Profile
//             </a>
//           </li>
//           <li className="me-2 border-b border-gray-200 ">
//             <a
//               href="#"
//               className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active  "
//               aria-current="page"
//             >
//               Orders
//             </a>
//           </li>
//           <li className="me-2 border-b border-gray-200 ">
//             <a
//               href="#"
//               className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
//             >
//               Address
//             </a>
//           </li>
//           <li className="me-2 border-b border-gray-200 ">
//             <a
//               href="#"
//               className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
//             >
//               Address
//             </a>
//           </li>

//         </ul>
//       </div>
//       {/* tabs section end */}

//       <Profile></Profile>

//       <Orders></Orders>

//       <Address></Address>

//       <Password></Password>

//     </div>
//   );
// };

// export default Tabs;

// when i click Profile from tabs section it will render the <Profile></Profile> components using serach params..
// also similar for other components
