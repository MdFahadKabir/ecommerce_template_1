"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import React, { useState } from "react";

const CheckOut = () => {
  const { cartItems, removeFromCart } = useCart();

  // const [cartProduct, setCartProduct] = useState(
  //   JSON.parse(localStorage.getItem("cartProduct"))
  // );

  // const removeFromCartHandler = () => {
  //   localStorage.removeItem("cartProduct");
  //   setCartProduct(null);
  // };

  // Function to calculate total quantity of a specific product in the cart
  const calculateQuantity = (productId) => {
    return cartItems.reduce((total, item) => {
      if (item.id === productId) {
        return total + 1;
      }
      return total;
    }, 0);
  };

  const calculateTotalPrice = (item) => {
    return item.price * calculateQuantity(item.id);
  };

  const calculateTotalPriceSingleItem = (item) => {
    const quantity = calculateQuantity(item.id);
    return item.price * quantity;
  };

  const uniqueCartItems = Array.from(
    new Set(cartItems.map((item) => item.id))
  ).map((id) => {
    return cartItems.find((item) => item.id === id);
  });

  const subtotal = uniqueCartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  return (
    <div>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32"></div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          {uniqueCartItems.map((item) => (
            <div key={item.id}>
              {/* <p>{item.title}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button> */}

              <div className="">
                <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                  <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        className="object-cover"
                        src={item.imageSrc}
                        width={500}
                        height={500}
                        alt="Product"
                      />
                    </div>
                    <div className="flex w-full flex-col px-4 py-4">
                      <span className="font-semibold">
                        {/* Nike Air Max Pro 8888 - Super Light */}
                        {item.title}
                      </span>
                      <span className="float-right text-gray-400">
                        Qty: {calculateQuantity(item.id)}
                      </span>

                      <div className="flex">
                        <p className="text-lg font-bold">
                          {/* $138.99 */}
                          {calculateTotalPriceSingleItem(item)}
                        </p>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          type="button"
                          className="ml-16 font-medium text-blue-500 hover:text-blue-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">
                    Nike Air Max Pro 8888 - Super Light
                  </span>
                  <span className="float-right text-gray-400">
                    42EU - 8.5US
                  </span>
                  <p className="mt-auto text-lg font-bold">$238.99</p>
                </div>
              </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div className="">
            <label
              htmlFor="email"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none  focus:border-blue-500 focus:ring-blue-500"
                placeholder="your.email@gmail.com"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor="card-holder"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Card Holder
            </label>
            <div className="relative">
              <input
                type="text"
                id="card-holder"
                name="card-holder"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none  focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your full name here"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor="card-no"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Card Details
            </label>
            <div className="flex">
              <div className="relative w-7/12 flex-shrink-0">
                <input
                  type="text"
                  id="card-no"
                  name="card-no"
                  className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                name="credit-expiry"
                className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="MM/YY"
              />
              <input
                type="text"
                name="credit-cvc"
                className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="CVC"
              />
            </div>
            <label
              htmlFor="billing-address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Billing Address
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-7/12">
                <input
                  type="text"
                  id="billing-address"
                  name="billing-address"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Street Address"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  {/* <img className="h-4 w-4 object-contain" src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="" /> */}
                </div>
              </div>
              <select
                type="text"
                name="billing-state"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="State">State</option>
              </select>
              <input
                type="text"
                name="billing-zip"
                className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="ZIP"
              />
            </div>

            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">৳ {subtotal}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900"> ৳ 80</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">
                ৳ {subtotal + 80}
              </p>
            </div>
          </div>
          <button className="mt-4 mb-8 w-full rounded-md bg-blue-500 hover:bg-blue-600 px-6 py-3 font-medium text-white">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
