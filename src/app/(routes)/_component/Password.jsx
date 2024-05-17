"use client";
import React, { useState } from "react";

const Password = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  return (
    <div className="lg:w-[700px] h-[373px]  mx-auto mt-5">
      <div className=" flex justify-between font-semibold px-2 lg:px-0">
        <div>
          <h2>Change Password</h2>
        </div>

        <div>
          <h3 className="text-[#0074DE] text-sm font-semibold"></h3>
        </div>
      </div>

      <div className="lg:w-[700px] lg:h-[300px]   mx-auto bg-[#F6FBFF] rounded-lg mt-5">

      {/* single input field  */}
      <div className=" relative w-[85%] lg:w-2/3   mx-auto my-4">
          <label
            htmlFor="currentPassword"
            className="pt-5 block mb-1 text-gray-600 text-sm font-medium"
          >
            Current Password
          </label>
          <input
            type={passwordShow ? "text" : "password"}
            id="currentPassword"
            className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input 
                                    `}
            placeholder="Enter your current password here"
          />
          <span
            onClick={() => setPasswordShow(!passwordShow)}
            className="absolute top-[55px] text-gray-500 right-3 cursor-pointer select-none"
          >
            {passwordShow ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            )}
          </span>
        </div>
      {/* single input field end */}

      {/* single input field  */}
      <div className="relative w-[85%] lg:w-2/3   mx-auto my-4">
          <label
            htmlFor="newPassword"
            className="block mb-1 text-gray-600 text-sm font-medium"
          >
            New Password
          </label>
          <input
            type={passwordShow ? "text" : "password"}
            id="newPassword"
            className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input 
                                    `}
            placeholder="Enter your new password here"
          />
          <span
            onClick={() => setPasswordShow(!passwordShow)}
            className="absolute top-[38px] text-gray-500 right-3 cursor-pointer select-none"
          >
            {passwordShow ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            )}
          </span>
        </div>
      {/* single input field end */}

      {/* single input field  */}
      <div className="relative w-[85%] lg:w-2/3   mx-auto my-4">
          <label
            htmlFor="password"
            className="block mb-1 text-gray-600 text-sm font-medium"
          >
            Confirm new Password
          </label>
          <input
            type={passwordShow ? "text" : "password"}
            id="confirmPassword"
            className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input 
                                    `}
            placeholder="Confirm your new password here"
          />
          <span
            onClick={() => setPasswordShow(!passwordShow)}
            className="absolute top-[38px] text-gray-500 right-3 cursor-pointer select-none"
          >
            {passwordShow ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            )}
          </span>
        </div>
      {/* single input field end */}


      </div>
    </div>
  );
};

export default Password;
