import React from 'react'
import atmcard from "../images/atmcard.png"
import Navbar from '../pages/Navbar'
import {Link} from "react-router-dom"
import { useState } from 'react'
// import Signup from './Signup'
const Dashboard = ({firstname}) => {
  const [balance, setbalance] = useState(110)
  const [transactionvalue, settransactionvalue] = useState(0)
  const deposit=()=>{
    let total =Number(transactionvalue) + Number(balance)
    setbalance(total)


  }
  return (
    <>
    
       <div className='col-md-10 mx-auto'>
    <nav className="navbar navbar-expand-lg navbar-light">
            <Link to={"/"} style={{color:"black", textDecoration:"none"}}><b>Amos Bank</b></Link>
     
        <div>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#my_nav">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div className="collapse navbar-collapse justify-content-around" id="my_nav">
            <ul className="navbar-nav">
            <li className="nav-item nav-link text-dark" data-bs-toggle="modal" data-bs-target="#modelId"><a href="#" style={{textDecoration:"none"}} className="text-dark"><b>transfer</b></a></li>
 
                <li className="nav-item nav-link text-dark" data-bs-toggle="modal" data-bs-target="#modelId"><a href="#" style={{textDecoration:"none"}} className="text-dark"><b>withdraw</b></a></li>
 
                <li className="nav-item nav-link text-dark" data-bs-toggle="modal" data-bs-target="#modelId"><a href="#" style={{textDecoration:"none"}} className="text-dark"><b>Deposit</b></a></li>
 
             
                <li className="nav-item nav-link text-dark" data-bs-toggle="modal" data-bs-target="#modelId"><a href="#" style={{textDecoration:"none"}} className="text-dark"><b>create wallet</b></a></li>
 
  
              
                 
            </ul>
           
        </div>
    </nav>

    </div>

     <div className='col-md-10 mx-auto card' id='dashMain'>
    <div className='container shadow bg-light mt-4 mb-4 ' id='dashmains'>
        <div className='row  '>
     
          
            <div className='col-md-4 mt-5'>
                <b className='text-success'>Money</b>
                <h4 className='text-dark'>Welcome to Amos Bank</h4>
                <p className='text-dark'><b>Always at your service</b></p>
                <p className='text-dark text-wrap'><b>what will you like to do today?  </b></p>
               <div className='morphism'>
                <h1 className='text-center pt-3'>{balance}</h1>
            
               
               </div>
             
              


         
                   

              
                
            </div>
            <div className='col-md-4'></div> 
            <div className='col-md-4'>
            <img src={atmcard} className='atmCard mt-4' alt="" />
     
            
            </div>
            <h1>{firstname}</h1>
             
          
        
     
         
            
       
        </div>
 
        

        
    </div>
    </div>
    

  <div className="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
          <div className="modal-header">
              <h5 className="modal-title">proceed to payment portal</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
        <div className="modal-body">
          <div className="container-fluid">
            <input type="text" className='form-control' placeholder='amount' onChange={(e)=>settransactionvalue(e.target.value)}/>
            
            <input type="text" className='form-control' placeholder='pin'/>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" onClick={deposit}>pay</button>
        </div>
      </div>
    </div>
  </div>
 

    </>
  )
}

export default Dashboard