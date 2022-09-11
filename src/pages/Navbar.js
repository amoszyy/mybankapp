import React from 'react'

import {Link} from "react-router-dom"

const Navbar = () => {
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
                <li className="nav-item">  <Link to={"/"}  className="nav-link text-dark"><b>Home</b></Link></li>
              
                <li className="nav-item">  <Link to={"/fetch"}  className="nav-link text-dark"><b>About Us</b></Link></li>
                <li className="nav-item">  <Link to={"/portal"}  className="nav-link text-dark"><b>Portal</b></Link></li>
                <li className="nav-item">  <Link to={"/counter"}  className="nav-link text-dark" ><b>Counter</b></Link></li>
              
                 
            </ul>
           
        </div>
    </nav>

    </div>

      
    </>
  )
}

export default Navbar;