"use client";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import SidebarDrawer from "@/app/(routes)/_component/SidebarDrawer";

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const [cartProduct, setCartProduct] = useState(
    JSON.parse(localStorage.getItem("cartProduct"))
  );

  const removeFromCart = () => {
    localStorage.removeItem("cartProduct");
    setCartProduct(null);
  };

  return (
    <div className="">
      <nav className="fixed w-full max-w-screen-2xl top-0 z-10 mx-auto flex items-center justify-between bg-[#0074DE] px-4 py-2 text-white">
        <Link href="/">
          <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
            <h2 className="font-bold">SD.</h2>
            <h2 className="text-xs">Electronics</h2>
          </div>
        </Link>

        <ul className="lg:flex items-center justify-between gap-6 text-slate-900 hidden">
          <Link href="/">
            <li className="cursor-pointer  rounded-full  px-6 py-2 text-white hover:text-[17px]">
              Home
            </li>
          </Link>

          <Link href="/flashsale">
            <li className="cursor-pointer  rounded-full px-6 py-2 text-white hover:text-[17px]">
              Flash Sale
            </li>
          </Link>

          <Link href="/newarrival">
            <li className="cursor-pointer  rounded-full px-6 py-2 text-white hover:text-[17px]">
              New Arrival
            </li>
          </Link>

          <li className="cursor-pointer  rounded-full px-6 py-2 text-white hover:text-[17px]">
            Upcoming Products
          </li>
          <li className="cursor-pointer  rounded-full px-6 py-2 text-white hover:text-[17px] flex">
            More
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49235 8H14.5077C14.7846 7.99962 15.056 8.07315 15.2905 8.21207C15.5249 8.351 15.7128 8.54963 15.8324 8.78499C15.9724 9.06425 16.0263 9.37494 15.988 9.68166C15.9497 9.98838 15.8207 10.2788 15.6158 10.5198L12.1081 14.5233C11.9705 14.6729 11.8003 14.7929 11.6091 14.8752C11.4179 14.9574 11.2102 15 11 15C10.7898 15 10.5821 14.9574 10.3909 14.8752C10.1997 14.7929 10.0295 14.6729 9.89188 14.5233L6.38423 10.5198C6.17927 10.2788 6.05028 9.98838 6.01198 9.68166C5.97368 9.37494 6.02761 9.06425 6.16761 8.78499C6.2872 8.54963 6.4751 8.351 6.70954 8.21207C6.94398 8.07315 7.21539 7.99962 7.49235 8Z"
                fill="white"
              />
            </svg>
          </li>
          <li className="cursor-pointer">
            <SearchBar></SearchBar>
          </li>

          <li className="cursor-pointer">
            <button
              onClick={() => setOpenDrawer(true)}
              className="bg-white rounded-full p-2 text-blue-600 text-2xl"
            >
              <BsCart2 />
            </button>
          </li>

          <li className="cursor-pointer">
            <Link href="/login">
              <button className="bg-white rounded-full p-2 text-blue-600 text-2xl">
                <AiOutlineUser />
              </button>
            </Link>
          </li>
        </ul>

        {/* nav items for small devices  */}
        <ul className="flex lg:hidden items-center justify-between gap-2 text-slate-900 ">
          <li className="cursor-pointer">
            <button className=" bg-white rounded-full p-2 text-blue-600 text-2xl">
              <FiSearch />
            </button>
          </li>

          <li className="cursor-pointer">
            <button
              onClick={() => setOpenDrawer(true)}
              className="bg-white rounded-full p-2 text-blue-600 text-2xl"
            >
              <BsCart2 />
            </button>
          </li>

          <li className="cursor-pointer">
            <Link href="/login">
              <button className="bg-white rounded-full p-2 text-blue-600 text-2xl">
                <AiOutlineUser />
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      {/* SidebarDrawer  */}
      <SidebarDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      {/* SidebarDrawer end */}
    </div>
  );
};

export default NavBar;
