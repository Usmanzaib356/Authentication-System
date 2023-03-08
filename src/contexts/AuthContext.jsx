import React, { createContext, useState,useEffect } from "react";
import { read_cookie } from "sfcookies";
export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {

    
  const [auth, setAuth] = useState("This is coming from Context JS");
  const [islogin,setIsLogin] = useState(false)
   
 const API_URL = `https://comfortable-gold-belt.cyclic.app`

   useEffect(()=>{
    setIsLogin(true)
    read_cookie("islogin")
   },[])


  return (
    <AuthContext.Provider value={{auth, setAuth,API_URL,islogin,setIsLogin}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
 