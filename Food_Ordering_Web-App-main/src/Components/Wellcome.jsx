import React from "react";
import { Link } from "react-router-dom";
import MenuCarousel from "./MenuCarousel";
import HeroSection from "./HeroSection";


function Welcome() {
  const styleHero = {
    height: "50rem",
    width: "100%",
  };
  return (
    <>
    <HeroSection />
    {/*
    <div className="bg-white pb-5">
       <div className=" m-2 z-3 position-absolute ">
        <Link className="btn btn-outline-primary mx-3" to={"/signUp"}>
          Sign Up
        </Link>
        <Link className="btn btn-outline-primary" to={"/logIn"}>
          Log In
        </Link>
  </div> 
      <div className="container-fluid">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner rounded  " style={styleHero}>
            <div className="carousel-item active ">
              <img
                src="https://assets.materialup.com/uploads/f3ac51e6-2a2e-42f7-86f6-3f2ed66eedbe/preview.jpg"
                className="d-block w-100 "
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://assets.materialup.com/uploads/e5d158cd-274e-4438-b4ab-375ef0598cfd/preview.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.freepik.com/free-vector/flat-design-food-banner-template_23-2149076251.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      </div>
      */}
      <MenuCarousel/>
    
    </>
  );
}

export default Welcome;
