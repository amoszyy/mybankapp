import React from 'react'
import bgS from "../images/bgSignup.jpeg"
import {Link} from "react-router-dom"
// import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from "axios"



const Login = ({signinUser}) => {
  // const endpointL = "http://localhost:5005/user/login"
  const [email, setemail] = useState("")
  const [message, setmessage] = useState("")
  const [password, setpassword] = useState("")
  let loginDetails = {email, password}
  // let navigate = useNavigate()

  // const login = ()=>{
   
    
    // axios.post(endpointL, loginDetails).then((result)=>{
      // console.log(result.data.message)
      // setmessage(result.data.message)
      // if(result.data.message=="invalid login details"){
        // alert('fix up')

      // } else{
        // console.log(result.data.id)
        // navigate("/dashboard")

      // }
      
      
    // })

  // }
  return (
    <>
    <div className='container bg-light mt-5 d-flex'>
   
      <div className='col-md-6 col-12 pt-5'>
      <div className='container bg-white shadow  pb-5'>
        <h1>Login</h1>
 
        <input type="text"  className='form-control mt-2' placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
        <input type="text"  className='form-control mt-2' placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>  
        <button className='btn btn-dark col-md-12' onClick={()=>{signinUser(loginDetails)}}>Login</button>
                
     
        
        </div>
      </div>
      <div className='col-md-6 pt-5'>
        <img src={bgS} alt="" className='w-100 h-75 d-none d-md-block'/>
     
      </div>
     
      

    </div>

    </>
  )
}

export default Login;