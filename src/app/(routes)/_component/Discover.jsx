import CustomerService from "@/assets/images/svg/CustomerService";
import Return from "@/assets/images/svg/Return";
import Warranty from "@/assets/images/svg/Warranty";
import React from "react";

const Discover = () => {
  return (
    <div className="min-h-[80vh]  max-w-screen-2xl	mx-auto bg-[#F4F8FB] mt-20">
      <h2 className="text-2xl lg:text-3xl font-medium text-[#3b3939] text-center  pt-20">
        Discover the Benefits of <br />
        Shopping with us
      </h2>

      <p className="text-center px-5 lg:px-0 text-[#464242] lg:w-1/3 mx-auto mt-3">
        Shop now and enjoy exclusive deals, exceptional customer service and
        fast shipping all over Bangladesh
      </p>

      <div className=" lg:flex gap-20 justify-center text-center lg:text-start">
        {/* card  */}
        <div className=" w-80 h-64 mt-10 lg:mt-20  mx-auto">
          <div>
            <div className="flex justify-center lg:justify-start">
              <Return />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#4f4e4e] my-4">
                Easy Return
              </h2>
            </div>

            <div>
              <p className="text-[#464242]">
                Shop now and enjoy exclusive deals, exceptional customer service
                and fast shipping all over Bangladesh
              </p>
            </div>
          </div>
        </div>
        {/* card end */}

        {/* card  */}
        <div className=" w-80 h-64 mt-5 lg:mt-20  mx-auto">
          <div>
            <div className="flex justify-center lg:justify-start">
              <Warranty />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#4f4e4e] my-4">
                Warranty Claim
              </h2>
            </div>

            <div>
              <p className="text-[#464242]">
                Shop now and enjoy exclusive deals, exceptional customer service
                and fast shipping all over Bangladesh
              </p>
            </div>
          </div>
        </div>
        {/* card end */}

        {/* card  */}
        <div className=" w-80 h-64 mt-5 lg:mt-20 mx-auto">
          <div>
            <div className="flex justify-center lg:justify-start">
              <CustomerService />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#4f4e4e] my-4">
                24/7 Customer Service
              </h2>
            </div>

            <div>
              <p className="text-[#464242]">
                Shop now and enjoy exclusive deals, exceptional customer service
                and fast shipping all over Bangladesh
              </p>
            </div>
          </div>
        </div>
        {/* card end */}
      </div>
    </div>
  );
};

export default Discover;
