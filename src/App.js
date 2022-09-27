import React from 'react'
import Home from "./components/Home"


import {Routes, Route,useNavigate} from "react-router-dom"
import Signup from './components/Signup'

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Transaction from './components/Transaction'
import Rdashboard from './components/Rdashboard'
import { useState } from 'react'
// import {  } from 'react-router';

import axios from 'axios'
import Mdashboard from './components/Mdashboard'


const App = () => {
  // const [passUser, setpassUser] = useState("")
  const [currentuser, setcurrentuser] = useState("")


  const [userbal, setuserbal] = useState("")


    

  

    let navigate = useNavigate()
    const Logins = (objs)=>{
      // const endpointL = "http://localhost:5005/user/login"
      const endpointL = "https://amosbank.herokuapp.com/user/login"
      axios.post(endpointL, objs).then((result)=>{
        console.log(result.data.message)
        let loggedInuser = result.data;
        console.log(loggedInuser)
        localStorage.token = loggedInuser.result._id
       
        setuserbal(loggedInuser.result.balance)
        setcurrentuser(loggedInuser.result)
        if(result.data.message=="invalid login details"){
          alert('fix up')
  
        } else{
          // console.log(result.data.id)
          navigate("/rdashboard")
  
        }
      })

    }


  

  return (
    
    
    <>
   
    {/* <Navbar/> */}
    <Routes>
      <Route path='/rdashboard' element={<Rdashboard userbal={userbal} user={currentuser}  />}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/login' element={<Login signinUser={Logins}/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/transaction' element={<Transaction/>}/>
      <Route path='/mdashboard' element={<Mdashboard/>}/>
    </Routes>
   

    </>
  )
}



export default App;
