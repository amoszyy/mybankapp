import React from 'react'
import atmcard from "../images/atmcard.png"
import Navbar from '../pages/Navbar'
import {Link} from "react-router-dom"
import { useState } from 'react'

const Home = () => {

   
  return (
    <>
    <div className='col-md-12 mx-auto card mt-5'>
    <div className='container  bg-light mt-4 mb-4 '>
        <div className='row  shadow'>
        <Navbar/>
          
            <div className='col-md-6   mt-5 pb-5'>
                <b className='text-success'>Money</b>
                <h4 className='text-dark'>Welcome to Amos Bank</h4>
                <p className='text-dark'><b>Always at your service</b></p>
                <p className='text-dark text-wrap'><b>Make your daily routine easier by managing money with the amos app</b></p>
               <div className='h-100 w-75'>
                <button className='btn btn-light btn-outline-dark shadow'><Link to={"/signup"} style={{textDecoration:"none"}}>Join us today</Link></button>
                
               </div>
              


         
                   

              
                
            </div>
            <div className='col-md-2'></div> 
            <div className='col-md-4 d-md-block d-none'>
            <img src={atmcard} className='atmCard mt-4' alt="" />
     
            
            </div>
             
          
        
     
         
            
       
        </div>
 
        

        
    </div>
    </div>

    </>
   
  )
}

export default Home;