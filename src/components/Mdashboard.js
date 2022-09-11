import React from 'react'
import gtBank from "../images/gtBank.jpg"
import {Link} from "react-router-dom"

const Mdashboard = () => {
  return (
    <>

    <div className='container-fluid topGt'>
    <nav className="navbar navbar-expand-lg navbar-light">
            <Link to={"/"} style={{color:"black", textDecoration:"none"}}><b>Amos Bank</b></Link>
     
        <div>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#my_nav">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div className="collapse navbar-collapse justify-content-around" id="my_nav">
            <ul className="navbar-nav">
                <li className="nav-item">  <Link to={"/"}  className="nav-link text-dark"><b>Home</b></Link></li>
              
                <li className="nav-item">  <Link to={"/fetch"}  className="nav-link text-dark"><b>About Us</b></Link></li>
                <li className="nav-item">  <Link to={"/portal"}  className="nav-link text-dark"><b>Portal</b></Link></li>
                <li className="nav-item">  <Link to={"/counter"}  className="nav-link text-dark" ><b>Counter</b></Link></li>
              
                 
            </ul>
           
        </div>
    </nav>
        <div className='row'>
            <div className='col-4'>
                <button className='btn'>acc 1 of 1</button>
            </div>
            <div className='col-5'></div>
            <div className='col-3'>
                <img src={gtBank} alt="" className='w-100 h-100'/>
            </div>
        </div>
        <div className='row'>
            <div className='col-6'>
                <p className='text-white'>Savings account</p>
                <b></b>
                <b></b>
            </div>
        </div>


    </div>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <input type="text" className='form-control my-2' placeholder='i want to pay ' />
            </div>
        </div>
        <div className='col-md-10 mx-auto '>
        <div className='row pt-5 pb-2'>
            <div className='col-4'>
                <div className='col-12 mx-auto'>
                <i class="fa fa-exchange" aria-hidden="true"></i>
                
                </div>
                <b>Transfers</b>
            
            </div>
            <div className='col-3 '>
                <div className='col-12 mx-auto'>
                <i class="fa-solid fa-money-bill"></i><br />
                </div>
           
            <b>payment</b>
            </div>
            <div className='col-5 '>
                <div className='col-6 mx-auto'>
                <i class="fa-solid fa-coins"></i>
                </div>
           
            <b >buy airtime  data</b>
            </div>
        </div>
        </div>
        <div className='col-md-10 mx-auto my-2'>
        <div className='row pt-5 pb-2'>
            <div className='col-4 '>
                <div className='col-12 mx-auto'>
                <i class="fa fa-exchange" aria-hidden="true"></i>
                
                </div>
                <b>create wallet</b>
            
            </div>
            <div className='col-3'>
                <div className='col-12 mx-auto'>
                <i class="fa-solid fa-money-bill"></i><br />
                </div>
           
            <b>payment</b>
            </div>
            <div className='col-5'>
                <div className='col-6 mx-auto'>
                <i class="fa-solid fa-coins"></i>
                </div>
           
            <b >buy airtime  data</b>
            </div>
        </div>
        </div>
        <div className='col-md-10 mx-auto '>
        <div className='row pt-5 pb-2'>
            <div className='col-4'>
                <div className='col-12 mx-auto'>
                <i class="fa fa-exchange" aria-hidden="true"></i>
                
                </div>
                <b>Transfers</b>
            
            </div>
            <div className='col-3 '>
                <div className='col-12 mx-auto'>
                <i class="fa-solid fa-money-bill"></i><br />
                </div>
           
            <b>payment</b>
            </div>
            <div className='col-5 '>
                <div className='col-6 mx-auto'>
                <i class="fa-solid fa-coins"></i>
                </div>
           
            <b >buy airtime  data</b>
            </div>
        </div>
        </div>
  
    </div>

   
    </>
  )
}

export default Mdashboard;