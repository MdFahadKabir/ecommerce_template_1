import Fb from "@/assets/images/svg/Fb";
import Ig from "@/assets/images/svg/Ig";
import Youtube from "@/assets/images/svg/Youtube";
import React from "react";

const Footer = () => {
  return (
    <div className="max-w-screen-2xl mx-auto mt-20">
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3 py-5">

          <div className="hidden lg:flex">
            <div className="flex justify-center text-blue-500 sm:justify-start">
              <span className="grid font-bold">
                <span className="text-4xl">SD.</span>
                <span className="-mt-2 mb-48">Electronics</span>
              </span>
            </div>
            <p className="pl-2 mt-20 -ml-24 max-w-md text-gray-500 ">
              111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
            </p>

          </div>

          {/* for mobile device  */}
         <div className="flex lg:hidden mx-3">
         <div className="lg:hidden ">
            <div className="flex text-blue-500 sm:justify-start">
              <span className="grid font-bold">
                <span className="text-2xl">SD.</span>
                <span className="-mt-2">Electronics</span>
              </span>
            </div>
            <p className="mt-2 pr-3 text-sm  text-gray-500 s">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>

          </div>

          <div className="lg:hidden">
              <div>
                <ul className="flex justify-center gap-5">
                  <li>
                    <Fb />
                  </li>

                  <li className="mt-2">
                    <Youtube />
                  </li>

                  <li>
                    <Ig />
                  </li>
                </ul>
              </div>
            </div>
         </div>
          {/* for mobile device end */}


          <div className="grid grid-cols-3 gap-4 ml-3 lg:gap-8 md:grid-cols-4 lg:col-span-2">
            <div>
              <div className="">
                <p className="text-lg font-medium text-gray-900">Account</p>
                <ul className="mt-3 lg:mt-8 space-y-4 text-xs lg:text-sm">
                  <li className="text-gray-700 transition hover:text-gray-700/75">
                    My Account
                  </li>
                  <li className="text-gray-700 transition hover:text-gray-700/75">
                    Login / Register
                  </li>
                  <li className="text-gray-700 transition hover:text-gray-700/75">
                    Cart
                  </li>
                  <li className="text-gray-700 transition hover:text-gray-700/75">
                    Wishlist
                  </li>
                  <li className="text-gray-700 transition hover:text-gray-700/75">
                    Shop
                  </li>
                </ul>
              </div>
            </div>

            <div className="">
              <p className="text-lg font-medium text-gray-900">Support</p>
              <ul className="mt-3 lg:mt-8 space-y-4 text-xs lg:text-sm">
                <li className="text-gray-700 transition hover:text-gray-700/75">
                  ex@mail.com
                </li>
                <li className="text-gray-700 transition hover:text-gray-700/75">
                  <a href="tel:+88015-88888-9999">+123456789</a>
                </li>
              </ul>
            </div>

            <div>
              <div className="">
                <p className="text-lg font-medium text-gray-900">Quick Link</p>
                <ul className="mt-3 lg:mt-8 space-y-4 text-xs lg:text-sm">
                  <li className="text-gray-700 transition hover:text-gray-700/75">
                    Privacy Policy
                  </li>
                  <li className="text-gray-700 transition hover:text-gray-700/75">
                    Terms Of Use
                  </li>
                  <li className="text-gray-700 transition hover:text-gray-700/75">
                    FAQ
                  </li>
                  <li className="text-gray-700 transition hover:text-gray-700/75">
                    Contact
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden lg:flex">
              <div>
                <ul className="flex justify-center gap-5">
                  <li>
                    <Fb />
                  </li>

                  <li className="mt-2">
                    <Youtube />
                  </li>

                  <li>
                    <Ig />
                  </li>
                </ul>
              </div>
            </div>


          </div>
        </div>
        <div className="my-6 text-center">
          <div className="text-center sm:flex sm:justify-center gap-10 sm:text-left">
            <p className="text-[12px] lg:text-xs text-gray-500">
              <span className="block sm:inline">All Rights Reserved By SD Electronics</span>
            </p>
            <p className="text-[12px] lg:text-xs text-gray-500">
              <span className="block sm:inline">Privacy Policy</span>
            </p>
            <p className="text-[12px] lg:text-xs text-gray-500">
              <span className="block sm:inline">Terms & Conditions</span>
            </p>
            {/* <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              © {new Date().getFullYear()} SD. Electronics
            </p> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
