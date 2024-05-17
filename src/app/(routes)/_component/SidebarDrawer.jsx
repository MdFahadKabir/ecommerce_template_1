import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const SidebarDrawer = ({ openDrawer, setOpenDrawer, product }) => {
  const { cartItems, removeFromCart, addToCart } = useCart();

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

  const increaseQuantity = (productId) => {
    addToCart(product); // Add the same product to the cart again
  };

  const decreaseQuantity = (productId) => {
    removeFromCart(productId); // Remove the product from the cart
  };

  return (
    <div>
      {/* SidebarDrawer */}
      <div>
        {/* Overlay */}
        {openDrawer && (
          <div
            className="fixed z-50 top-0 left-0 w-screen h-screen bg-black opacity-25"
            onClick={() => setOpenDrawer(false)}
          />
        )}

        <div
          className={`fixed z-[100] flex items-center justify-center ${
            openDrawer ? "translate-x-0" : "translate-x-full"
          } top-0 right-0 w-[90%] lg:w-[30%] h-full bg-slate-100 transition-transform duration-300 ease-in-out`}
        >
          <div className="p-3 w-full max-w-md">
            <svg
              onClick={() => setOpenDrawer(false)}
              className="w-6 h-6 cursor-pointer fill-black absolute top-3 right-3"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
            </svg>

            <h2 className="font-semibold mb-2 absolute top-3">
              Shopping Cart ({uniqueCartItems.length})
            </h2>

            {/* cart items */}
            <div className="mt-8 absolute top-5 overflow-y-auto no-scrollbar px-4 h-[66%] lg:h-[75%]">
              <div>
                {/* sidebar drawer cart items */}
                {uniqueCartItems.map((item) => (
                  <div key={item.id}>
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        <li className="flex py-6">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <Image
                              className="object-cover"
                              src={item.imageSrc}
                              width={500}
                              height={500}
                              alt="Product"
                            />
                          </div>
                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3 className="text-sm">{item.title}</h3>
                                <p className="ml-4">
                                  ৳ {calculateTotalPriceSingleItem(item)}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <p className="text-gray-500">
                                Qty: {calculateQuantity(item.id)}
                              </p>

                              {/* quantity increase and decrease button */}
                              <div className="flex items-center">
                                <button
                                  className="border-2 px-2"
                                  onClick={() => decreaseQuantity(item.id)}
                                >
                                  -
                                </button>
                                <span className="border-y-2 px-2">
                                  {calculateQuantity(item.id)}
                                </span>
                                <button
                                  className="border-2 px-2"
                                  onClick={() => increaseQuantity(item.id)}
                                >
                                  +
                                </button>
                              </div>

                              <div className="flex">
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  type="button"
                                  className="font-medium text-blue-500 hover:text-green-600"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                        <br />
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* cart items end */}

            {/* Subtotal and checkout */}
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6 absolute bottom-0">
              <div className="flex justify-center text-base font-medium text-gray-900 mb-2 ml-2">
                <p className="">
                  Subtotal &emsp; &emsp; &emsp;  ৳ {subtotal}
                </p>
              </div>

              <div className="flex text-center text-sm text-gray-500">
                <div className="mt-5">
                  <button
                    type="button"
                    className="ml-2 font-medium text-blue-500 hover:text-blue-600"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </div>

                <div className="ml-20">
                  <Link href="/checkout">
                    <button
                      className=" rounded-md border border-transparent px-6 py-3 text-base font-medium text-white shadow-sm bg-blue-500  hover:bg-blue-600"
                    >
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SidebarDrawer end */}
    </div>
  );
};

export default SidebarDrawer;
