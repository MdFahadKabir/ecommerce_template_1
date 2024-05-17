"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductDetail from "../../../assets/images/productDetail.png";
import productDetail2 from "../../../assets/images/productDetail2.png";
import { PiShoppingCartLight } from "react-icons/pi";
import SimilarProducts from "./SimilarProducts";
import Specifications from "./Specifications";
import BuyNow from "@/assets/images/svg/BuyNow";
import Warrant from "@/assets/images/svg/Warrant";
import axios from "axios";
import Link from "next/link";
import ImageSlider from "./ImageSlider";
import { useCart } from "@/context/CartContext";
import SidebarDrawer from "./SidebarDrawer";

const ProductDetails = ({ product_id }) => {
  const { addToCart } = useCart();

  const { cartItems, removeFromCart } = useCart();

  const [product, setProduct] = useState(null);
  console.log(product_id);

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:7000/product");
        // console.log("API Response:", response.data);
        const productList = response.data;

        if (productList && productList.length > 0) {
          const productData = productList.find(
            (item) => parseInt(item.id) === parseInt(product_id)
          );
          if (productData) {
            setProduct(productData);
            console.log(productData);
          } else {
            console.error("Product not found with id:", product_id);
          }
        } else {
          console.error("No products found in the response");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();

    return () => {};
  }, [product_id]);

  console.log(product);

  const [cartProduct, setCartProduct] = useState(
    JSON.parse(localStorage.getItem("cartProduct"))
  );

  const addToCartHandler = () => {
    addToCart(product);
    localStorage.setItem("cartProduct", JSON.stringify(product));
    setOpenDrawer(true);
    setCartProduct(product);
  };

  const removeFromCartHandler = () => {
    localStorage.removeItem("cartProduct");
    setCartProduct(null);
  };

  // https://i.ibb.co/rpsGXW7/watch.png
  // https://i.ibb.co/W3zz9PN/iphone.png
  // https://i.ibb.co/SxxqxwV/mac.png
  // https://i.ibb.co/FW671yj/ipad.png
  // https://i.ibb.co/4SXZP5T/headset.png

  const images = [
    "https://i.ibb.co/rpsGXW7/watch.png",
    "https://i.ibb.co/W3zz9PN/iphone.png",
    "https://i.ibb.co/SxxqxwV/mac.png",
    "https://i.ibb.co/FW671yj/ipad.png",
    "https://i.ibb.co/4SXZP5T/headset.png",
  ];

  return (
    <div className="max-w-screen-xl mx-auto">
      {product ? (
        <div className="lg:flex gap-16 max-w-[1405px] mx-auto mt-10">
          <div className="min-h-[65vh] lg:w-[50%]  m-3 lg:m-0">
            <div className="">
              <ImageSlider images={images} initialImage={product?.imageSrc} />
            </div>
          </div>

          <div className="mt-24 lg:mt-0 min-h-[60vh] lg:w-[50%]  bg-[#F3F7FB] rounded-lg">
            {/* title  */}
            <h2 className="pt-5 lg:pt-0 m-5 text-xl font-semibold">
              {/* Nuts / বাদাম (Medium Size - 1 KG) */}
              {product?.title}
            </h2>
            <p className="ml-5 text-sm mb-2">Regular Price</p>
            <div className="flex">
              <h2 className="ml-5 text-xl font-semibold text-[#464242]">
                {/* ৳ 1,600.00 */}৳ {product?.price}
              </h2>

              <p className="line-through ml-5 text-lg font-normal text-gray-500 ">
                {product?.discountedPrice}
              </p>
            </div>
            <div className="pb-5 lg:pb-0  gap-2 lg:gap-5 mt-5">
              {/* my cart or add to cart button */}
              <button
                onClick={addToCartHandler}
                className="ml-5 mr-5 mt-3 h-12 rounded-md bg-transparent hover:bg-blue-600 text-blue-700 lg:font-semibold hover:text-white py-2 lg:px-4 border-2 border-blue-500 hover:border-transparent"
              >
                <div className="flex lg:gap-3 justify-center px-2 ">
                  <span className="text-lg lg:text-2xl mt-[3px] lg:mt-0">
                    <PiShoppingCartLight />
                  </span>
                  <span className="text-base">Add to Cart</span>
                </div>
              </button>
              {/* my cart or add to cart button end  */}

              {/* <SidebarDrawer/> */}

              <button className="mt-3 bg-blue-600 rounded-md w-32 h-12 hover:bg-blue-700 text-white lg:font-semibold py-2 px-4 text-sm lg:text-base">
                <div className="flex">
                  <span className="mt-1.5 mr-2">
                    <BuyNow />
                  </span>
                  <span>Buy Now</span>
                </div>
              </button>
            </div>
            <div>
              <h2 className="w-[90%] mx-auto font-semibold text-justify mt-10">
                {product?.description}
              </h2>
            </div>
            <div className="flex">
              <div className="m-5 text-sm text-white bg-[#fc9f35] p-2 rounded-md">
                <div className="flex items-center">
                  <Warrant />
                  <span className="ml-1">1 Year Apple Warranty</span>
                </div>
              </div>
              <div className="m-5 text-sm  bg-[#7cf45e] p-2  rounded-md text-[#187700]">
                Stock Available
              </div>
            </div>
            <hr /> <br />
            {/* Render storage options, color options, and region */}
            <div className="flex ml-5 gap-6 ">
              <p className="text-[#464242]">Storage</p>
              <p className="cursor-pointer text-blue-700 font-semibold text-sm bg-[#D6EBFF] p-2 rounded-lg">
                256GB
              </p>
              <p className="cursor-pointer text-blue-700 font-semibold text-sm border-2 border-blue-500 p-1 rounded-lg pt-2">
                512GB
              </p>
              <p className="cursor-pointer text-blue-700 font-semibold text-sm border-2 border-blue-500 p-1 rounded-lg pt-2">
                1TB
              </p>
            </div>
            <div className="flex ">
              <p className="m-5  text-[#464242]">Color</p>
              <div className="cursor-pointer m-5 size-6 bg-gray-300 rounded-full lg:size-10 border-2 border-blue-600"></div>
              <div className="cursor-pointer m-5 size-6 bg-[#464D5D] rounded-full lg:size-10"></div>
              <div className="cursor-pointer m-5 size-6 bg-[#D94AA0] rounded-full lg:size-10"></div>
              <div className="cursor-pointer m-5 size-6 bg-[#AA5151] rounded-full lg:size-10"></div>
            </div>
            <div className="ml-5 flex gap-6 mb-3">
              <p className="text-[#464242]">Region</p>
              <p className="cursor-pointer text-blue-700 font-semibold text-sm bg-[#D6EBFF] p-2 rounded-lg">
                International
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center font-semibold text-2xl mt-36">Loading...</p>
      )}

      {/* SidebarDrawer  */}
      <SidebarDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} product={product} />
      {/* SidebarDrawer end */}

      <div className="mt-40">
        {/* <SimilarProducts /> */}

        <Specifications />
      </div>
    </div>
  );
};

export default ProductDetails;
