"use client"
import Image from "next/image";
import React, { useState } from "react";
import loginBanner from "../../../assets/images/loginBanner.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const page = () => {
  const [number, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  // const { auth, setAuth } = useUserContext();

  function handleLogin(e) {
    e.preventDefault();
    setLoader(true);
    const data = new FormData();
    data.append("number", number);
    data.append("password", password);

    // if (password.length < 6) {
    //   toast.error('Password must be 6 characters long')
    //   return
    // }
    if (number === "" || password === "") {
      toast.error("Please fill all the fields");
      setLoader(false);
      return;
    }
    fetch(`${process.env.NEXT_PUBLIC_SERVER}/client/loginClient`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.client_id) {
          setLoader(false);
          localStorage.setItem("token", JSON.stringify(res));
          setAuth(!auth);
          toast.success("Login Successful");
          router.push("/");
        } else {
          toast.error("Invalid Credentials");
          setLoader(false);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="lg:flex mt-10">
      <div className="lg:min-h-[60vh] lg:w-[50%]">
          <div className="flex justify-center lg:mt-2 ">
            <Image
              className="object-cover  h-[160px]  w-[160px] lg:h-[490px] lg:w-[485px] rounded-xl "
              src={loginBanner}
              width={500}
              height={500}
              alt="banner image"
            />
          </div>
        </div>
        <div className="min-h-[60vh] lg:w-[50%] ">
          <section className=" ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
              <div className="w-full shadow-2xl bg-white rounded-lg   md:mt-0 sm:max-w-md xl:p-0  ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold text-center text-gray-700 md:text-2xl ">
                    Welcome to SD Electronics
                  </h1>

                  <p className="text-gray-700 text-center">
                    Login with your Phone Number
                  </p>

                  <form
                  onSubmit={handleLogin}
                  className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Phone Number
                      </label>
                      <input
                        type="phone"
                        name="phone"
                        id="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="Enter your Phone Number"
                        onChange={(e) => setMobile(e.target.value)}
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        // placeholder="••••••••"
                        placeholder="Enter your Password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        onChange={(e) => setPassword(e.target.value)}
                        required=""
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                            required=""
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="remember" className="text-gray-500 ">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-sm font-medium text-primary-600 hover:underline text-[#0074DE]"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-[#0074DE] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                      Login
                    </button>
                    <p className="text-sm font-light text-gray-500 ">
                      Don’t have an account yet?{" "}
                      <Link
                        href="/register"
                        className="font-medium text-primary-600 hover:underline text-[#0074DE]"
                      >
                        Register Now
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
