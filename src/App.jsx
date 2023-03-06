import React from 'react'
import Navbar from './Component/Navbar'
import Login from './Component/Login'
import Products from './Component/Products'
import Services from './Component/Services'
import { Route, Routes } from 'react-router-dom'
import "./index.css"
import useAuth from "./hooks/useAuth"
import Permission from './Component/Permission'
import Signup from './Component/Signup'
import Universal from './Component/Universal'
import Logout from './Component/Logout'
function App() {
  const {islogin} = useAuth()
  return (
    <>
    <Navbar></Navbar>
  
     <div>
       <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='products' element={islogin ? <Products/> : <Permission/>}/>
        <Route path='services' element={ islogin ? <Services/> : <Permission/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path='*' element={<Universal/>}/>

       </Routes>
     </div>
     </>
    )
}

export default App