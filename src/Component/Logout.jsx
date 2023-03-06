import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import  {delete_cookie } from 'sfcookies'
import useAuth from "../hooks/useAuth" 
function Logout() {
   // useref //
         const  {islogin,setIsLogin}= useAuth()
              let nav = useNavigate();
    useEffect(()=>{
        setIsLogin(false)  
        delete_cookie("islogin")
        setTimeout(()=>{
          nav("/")
        },2000
          

        )
    },[])
  return (
    <div>
        <h1 className='text-center text-warning'>
            you Logout
        </h1>
    </div>
  )
}

export default Logout