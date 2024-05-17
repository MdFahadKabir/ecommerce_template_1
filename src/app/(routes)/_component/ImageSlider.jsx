import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const ImageSlider = ({ images, initialImage }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const initialIndex = images.findIndex((image) => image === initialImage);
    if (initialIndex !== -1) {
      setCurrentImageIndex(initialIndex);
    }
  }, [images, initialImage]);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center ">
        <Image
          className=" lg:h-[457px] lg:w-[627px] rounded-lg"
          src={images[currentImageIndex]}
          alt="Slide"
          width={500}
          height={500}
        />
      </div>
      <div className="absolute -bottom-32 gap-2 lg:gap-0 left-0 w-full flex justify-between mb-4">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-24 h-24 cursor-pointer  ${
              currentImageIndex === index ? " border-4 rounded-xl border-double border-blue-500" : ""
            }`}
          >
            <Image
            className="rounded-lg size-[87px]"
              src={image}
              alt={`Thumbnail ${index}`}
              width={300}
              height={300}
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      {/* <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 bg-[#F2F3F4] rounded-full"
        onClick={prevSlide}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4  bg-[#F2F3F4] rounded-full"
        onClick={nextSlide}
      >
        <FaArrowRight />
      </button> */}

    </div>
  );
};

export default ImageSlider;
