import React from "react";
import atmcard from "../images/atmcard.png";
import Navbar from "../pages/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import homelight from "../images/homelight.jpg";
import homebg from "../images/homebg.jpg";
import Tether from "../images/Tether.jpg"
import travel from "../images/travel.jpg"
import hyundai from "../images/hyundai.jpg"

const Home = () => {
  return (
    <>
      <div className=" mx-auto  mt-5">
        <div className="container-fluid shadow pb-5 bg-light mt-4 mb-4 ">
          <div className="row  ">
            <Navbar />

            <div className="col-md-6   mt-5 pb-5">
              <b className="text-success">Money</b>
              <h4 className="text-dark">Welcome to Amos Bank</h4>
              <p className="text-dark">
                <b>Always at your service</b>
              </p>
              <p className="text-dark text-wrap">
                <b>
                  Make your daily routine easier by managing money with the amos
                  app
                </b>
              </p>
              <div className="h-100 w-75">
                <button className="btn btn-light btn-outline-dark shadow">
                  <Link to={"/signup"} style={{ textDecoration: "none" }}>
                    Join us today
                  </Link>
                </button>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4 d-md-block d-none">
              <img src={homelight} className="atmCard mt-4" alt="" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h4 style={{ color: "orange" }} className="text-center">
                access more banking services{" "}
              </h4>
              <b className="text-center p-3" style={{ fontSize: "0.8em" }}>
                Whether it's your child's first savings account, your personal
                savings account, your first retirement plan or a business loan,
                we offer personal and corporate banking products and services
                tailored to meet your needs.
              </b>
            </div>
          </div>
          <div className="row my-4 justify-content-center">
            <div className="col-md-3 col-9 my-3 card shadow">
              <img src={homebg} className='w-100 card-header' alt="" />
              <b className="card-body">make online payments to anywhere in the world easily</b>

            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 col-9 my-3 card shadow">
              <img src={Tether} className='w-100 card-header' alt="" />
              <b className="card-body">we also deal in and  accept all kinds of crypto-currencies</b>

            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 col-9 my-3 card shadow">
              <img src={travel} className='w-100 card-header' alt="" />
              <b className="card-body">access your account and make transactions from anywhere in the world</b>

            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 mt-5">
            <b  style={{ color: "orange" }}>join us today and stand a chance to win a brand new hyundai car in our on-going promo.</b><br />
            <button className="btn btn-light btn-outline-dark shadow my-3">
                  <Link to={"/signup"} style={{ textDecoration: "none" }}>
                    Join us today
                  </Link>
                </button>
       
            </div>
            <div className="col-md-5">
            <img src={hyundai} className='w-100 ' alt="" />
            </div>
           
        
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
