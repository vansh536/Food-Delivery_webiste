import React from "react";
// import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

import guyImg from "../Components/Assets/hero1.png";
import "../Components/Layout/style.css"


const HeroSection = () => {
  return (
    
      <section>
        <Container className=" bg-white min-w-full">
          <Row>
            <Col lg="6" md="6" className="sm:mt-12">
              <div className="hero__content ">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span>Enjoy</span> your favorite Pizza
                </h1>

                <button className="order__btn">
                  <Link to="/cartPage">
                    Menu <i className=" ri-arrow-right-s-line"></i>
                  </Link>
                </button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    
  );
};

export default HeroSection;