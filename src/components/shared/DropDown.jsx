"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeUpDropDown() {
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const items = ["Apple", "Samsung", "Xiomi"];

  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={dropDownRef} className="relative mx-auto w-fit text-white ">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex rounded-sm  text-[#6B6B6B] px-6 py-2"
      >
        <span>Phone</span>

        <span>
          <svg
            className="mt-1.5 ml-1"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.16815 3.22313L5.24003 6.10501C5.17614 6.16821 5.0899 6.20366 5.00003 6.20366C4.91016 6.20366 4.82392 6.16821 4.76003 6.10501L1.8319 3.22376C1.76762 3.16059 1.68109 3.12519 1.59097 3.12519C1.50084 3.12519 1.41431 3.16059 1.35003 3.22376C1.31837 3.25462 1.29322 3.2915 1.27604 3.33224C1.25886 3.37297 1.25001 3.41674 1.25001 3.46095C1.25001 3.50515 1.25886 3.54892 1.27604 3.58965C1.29322 3.63039 1.31837 3.66727 1.35003 3.69813L4.27753 6.57938C4.47035 6.76871 4.72979 6.87479 5.00003 6.87479C5.27026 6.87479 5.5297 6.76871 5.72253 6.57938L8.65003 3.69813C8.68178 3.66726 8.70702 3.63034 8.72425 3.58955C8.74149 3.54875 8.75037 3.50492 8.75037 3.46063C8.75037 3.41635 8.74149 3.37251 8.72425 3.33172C8.70702 3.29093 8.68178 3.254 8.65003 3.22313C8.58574 3.15996 8.49922 3.12456 8.40909 3.12456C8.31896 3.12456 8.23244 3.15996 8.16815 3.22313Z"
              fill="#6B6B6B"
            />
          </svg>
        </span>
      </button>
      <ul
        className={`${
          open
            ? "visible translate-y-0 duration-300"
            : "invisible translate-y-4"
        } absolute top-12 z-50 w-full ml-5 space-y-1 rounded-sm bg-[#EBF5FF] shadow-md`}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className={`rounded-sm p-2 ${
              open ? "opacity-100 duration-300" : "opacity-0"
            } hover:bg-blue-300 text-gray-800 hover:text-gray-900`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// import React, { useState } from 'react';

// function DropdownMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative inline-block ">
//       <div>
//         <button
//           type="button"
//           className="inline-flex justify-center w-full rounded-md  shadow-sm px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
//           onClick={toggleDropdown}
//         >
//           Phone

//           <svg
//           className='mt-1.5 ml-1'
//         width="10"
//         height="10"
//         viewBox="0 0 10 10"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M8.16815 3.22313L5.24003 6.10501C5.17614 6.16821 5.0899 6.20366 5.00003 6.20366C4.91016 6.20366 4.82392 6.16821 4.76003 6.10501L1.8319 3.22376C1.76762 3.16059 1.68109 3.12519 1.59097 3.12519C1.50084 3.12519 1.41431 3.16059 1.35003 3.22376C1.31837 3.25462 1.29322 3.2915 1.27604 3.33224C1.25886 3.37297 1.25001 3.41674 1.25001 3.46095C1.25001 3.50515 1.25886 3.54892 1.27604 3.58965C1.29322 3.63039 1.31837 3.66727 1.35003 3.69813L4.27753 6.57938C4.47035 6.76871 4.72979 6.87479 5.00003 6.87479C5.27026 6.87479 5.5297 6.76871 5.72253 6.57938L8.65003 3.69813C8.68178 3.66726 8.70702 3.63034 8.72425 3.58955C8.74149 3.54875 8.75037 3.50492 8.75037 3.46063C8.75037 3.41635 8.74149 3.37251 8.72425 3.33172C8.70702 3.29093 8.68178 3.254 8.65003 3.22313C8.58574 3.15996 8.49922 3.12456 8.40909 3.12456C8.31896 3.12456 8.23244 3.15996 8.16815 3.22313Z"
//           fill="#6B6B6B"
//         />
//       </svg>

//         </button>
//       </div>
//       {isOpen && (
//         <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
//           <div className="py-1" role="none">
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="menu-item-0">Action 1</a>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="menu-item-1">Action 2</a>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="menu-item-2">Action 3</a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DropdownMenu;
