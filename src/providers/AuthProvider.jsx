"use client"

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
// import { CONST_NEXT_SERVER } from "@/actions/urlAction";

export const UserInfoContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const router = useRouter()
  console.log(process.env.NEXT_PUBLIC_SERVER)
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);
  // const [updateCart, setUpdateCart] = useState(1);

  console.log(userInfo, "==>AUTH");


  const getUserData = () => {
    setLoading(true);
    const data = new FormData();
    data.append("client_id", JSON.parse(localStorage.getItem("token"))?.client_id);
    fetch(`${process.env.NEXT_PUBLIC_SERVER}/client/authClient`, {
      method: "POST",
      body: data,
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))?.token}`
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.client_id !== null) {
          setUserInfo(res);
          // router.push('/') /* FIX */
          setLoading(false);
        } else {
          // localStorage.removeItem("token");
          // router.push('/login')
          setLoading(false);
          return
        }
      })
      .catch((err) => {
        console.log(err)
        // router.push('/login')
        setLoading(false);
      }
      );
  };

  useEffect(() => {
    getUserData();
  }, [auth]);

  return (
    <>
      <UserInfoContext.Provider
        value={{
          userInfo,
          setUserInfo,
          loading,
          setLoading,
          auth,
          setAuth,
          // updateCart, 
          // setUpdateCart 
        }}
      >
        {children}
      </UserInfoContext.Provider>
    </>
  );
};

export function useUserContext() {
  const context = useContext(UserInfoContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}