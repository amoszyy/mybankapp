import React from 'react'
import bgS from "../images/bgSignup.jpeg"
import {Routes, Route,useNavigate} from "react-router-dom"

import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'





const Signup = () => {
  
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  // const endpoint = "http://localhost:5005/user/signup"
  const endpoint = "https://amosbank.herokuapp.com/user/signup"
  // const [accountNumber, setaccountNumber] = useState()
  // const [address, setaddress] = useState("")
  const [message, setmessage] = useState("")
  // const endpoint = "http/://localhost:5005/user/signup"
  

  // let userDetails = {firstname,lastname,email,password,accountNumber}
  

  let navigate = useNavigate()
  
  const signup = ()=>{
    let accountNumber=Math.floor(100000000 + Math.random() * 900000000);
    let balance = 0;
    let userDetails = {firstname,lastname,email,password, accountNumber, balance}
    axios.post(endpoint, userDetails).then((result)=>{
      console.log(result.data.message)
      setmessage(result.data.message)
      if(result.data.message=="unable to register"){
        alert('fill all inputs')

      } else{
        // console.log(result.data.id)
        navigate("/login")

      }
      


    })

  }
 
  return (
    <>
    <div className='container bg-light mt-5 d-flex'>
    
   
      <div className='col-md-6 pt-5'>
      <div className='container bg-white shadow  pb-5'>
        <h1>sign up</h1>
        <input type="text"  className='form-control mt-2' placeholder='firstname' onChange={(e)=>setfirstname(e.target.value)}/>
        <input type="text"  className='form-control mt-2' placeholder='lastname' onChange={(e)=>setlastname(e.target.value)}/>
        <input type="text"  className='form-control mt-2' placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
        <input type="text"  className='form-control mt-2' placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
       
        
      
      

        {/* <input type="text"  className='form-control mt-2' placeholder='address' onChange={(e)=>setaddress(e.target.value)}/> */}
       
         <button className='btn btn-dark col-md-12' onClick={signup}>Signup</button>
        
         <Link to={"/login"}  className="nav-link text-dark"><b> <button className='btn btn-light col-md-12 mt-2 btn-outline-dark'>login</button></b></Link>
                
        
        </div>
      </div>
      <div className='col-md-6 pt-5 d-none d-md-block'>
        <img src={bgS} alt="" className='w-100 h-75'/>
     
      </div>
     
      

    </div>
    

    </>
  )
}

export default Signup;