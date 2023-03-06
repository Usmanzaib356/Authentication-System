import axios from 'axios'
import React, { useRef, useState } from 'react'
import useAuth from "../hooks/useAuth"
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader"
import { bake_cookie } from 'sfcookies';
function Login() {
    // useState //
    const {API_URL,islogin,setIsLogin} = useAuth();
    const [msg,setMsg]=useState("")
    let [loading, setLoading] = useState(false)

    // usenavigate //
        const mavigate =  useNavigate()

    // useRef //
    const inputNumber = useRef()
    const inputPassword = useRef()

    // function //
    function submit (e){
      e.preventDefault()
      setLoading(true)
    console.log(inputNumber.current.value)
    console.log(inputPassword.current.value)

    // variables //   
     const url = API_URL + "/login"
     const json ={ phone: parseInt(inputNumber.current.value),
                   password : inputPassword.current.value} 

        // Axios.post //
        axios.post(url,json).then(
          (res)=>{
            setLoading(false)
            console.log(res)
            setIsLogin(true)
            bake_cookie("islogin",true)
            setMsg("You have login succesfully")
            mavigate("/services")
          }
        ).catch(
          (err)=>{
            setLoading(false)
            console.log(err)
            setMsg("Sorry invalid Phone/Password")
            mavigate("/")
          }
        )


    }


  return (
    <>
     <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-3"> {loading ?  (<BeatLoader
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> ): "Login"}</h2>
        <p className='text-center mt-3'>{msg}</p>

        <div class="card my-5">
          <form class="card-body cardbody-color p-lg-5">
            
            <div class="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>

            <div class="mb-3">
              <input ref={inputNumber} type="number" class="form-control" id="number" aria-describedby="numberHelp"
                placeholder="Enter your number"/>
            </div>
            <div class="mb-3">
              <input ref={inputPassword} type="password" class="form-control" id="password" placeholder="password"/>
            </div>
            <div class="text-center"><button  onClick={(e)=>submit(e)} type="submit" class="btn btn-color px-5 mb-5 w-100">Login</button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
              Registered? <Link to="signup" class="text-dark fw-bold"> Create an
                Account</Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
    </>
  )
}

export default Login