import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Wrapper = styled.div`
  .carousel-inner {
    font-family: "Poppins";
    position: initial;
  }
  .carousel-item {
    background-size: cover;
    position: relative;
    height: 70vh;
    background-repeat: no-repeat;
    background-position: center;
  }
  .carousel4 {
    background-image: url("https://res.cloudinary.com/ddxyjg96x/image/upload/v1665933458/PetVet/vf-issuelanding-vet-checking-heartbeat-of-brown-and-white-cat.jpg");
  }
  .carousel2 {
    background-image: url("https://res.cloudinary.com/ddxyjg96x/image/upload/v1665933456/PetVet/1611694334-GettyImages-914810546.jpg");
  }
  .carousel1 {
    background-image: url("https://res.cloudinary.com/ddxyjg96x/image/upload/v1665700521/PetVet/elena-mozhvilo-UspYqrVBsIo-unsplash.jpg");
  }
  .carousel3 {
    background-image: url("https://res.cloudinary.com/ddxyjg96x/image/upload/v1665933816/PetVet/istockphoto-1303362255-170667a.jpg");
  }
  .hero {
    position: absolute;
    text-align: center;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: 65%;
    }
    @media screen and (max-width: 425px) {
      width: 80%;
    }
  }
  .hero .title1 {
    font-family: poppins;
    color: #fff;
    font-size: 50px;
    text-transform: capitalize;
    font-weight: bolder;
    line-height: 52px;
    margin: 12px 0;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      font-size: 40px;
    }
    @media screen and (max-width: 425px) {
      font-size: 30px;
    }
  }
  .sub-title {
    font-family: Zedaya;
    font-size: 44px;
    color: ${(props) => props.theme.color.ui_01};
  }

  .hero .sub-text {
    font-size: 18px;
    margin-bottom: 20px;
    color: #fff;
  }
  .carousel4 .hero .sub-text {
    color: ${(props) => props.theme.color.ui_01};
  }
  .hero {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  // .carousel3 .hero {
  //   right: 18%;
  //   left: auto;
  //   @media screen and (max-width: ${(props) => props.theme.breakpoint.lsm}) {
  //     left: 50%;
  //     right: auto;
  //   }
  // }
  .hero-btn {
    text-transform: uppercase;
    color: #fff;
    line-height: 40px;
    letter-spacing: 1px;
    font-size: 13px;
    border: 1px solid #fff;
    padding: 13px 25px;
    border-radius: 3px;
    font-family: "Poppins";
  }
  .carousel3 .hero .hero-btn {
    color: ${(props) => props.theme.color.ui_01};
    border: 2px solid ${(props) => props.theme.color.ui_01};
  }
  .carousel4 .hero .hero-btn {
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.ui_01};
    border: 2px solid ${(props) => props.theme.color.ui_01};
  }
  .hero-btn:hover {
    transition: 0.3s;
    background-color: #805949;
    border: 2px solid #805949;
  }
  .carousel3 .hero .hero-btn:hover {
    color: #fff;
    background-color: #d5764c;
    border: 2px solid #d5764c;
  }
  .carousel4 .hero .hero-btn:hover {
    color: #000;
    background-color: ${(props) => props.theme.color.white};
    border: 2px solid ${(props) => props.theme.color.white};
  }
  .carousel1 .hero .hero-btn:hover {
    color: #fff;
    background-color: #1e313f;
    border: 2px solid #1e313f;
  }
`;

export default function HomeCarousel() {
  return (
    <Wrapper>
      <Carousel fade controls={false}>
        <Carousel.Item interval={111111} className="carousel3">
          <div className="hero">
            <p className="sub-title">-Pet Care-</p>
            <h1 className="title1">We love Pet</h1>
            {/* <p className="sub-text">Best Luxury Collections money can buy!</p> */}
            <Link to="/register" className="bold hero-btn">
              Get started
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={111111} className="carousel2">
          <div className="hero">
            <p className="sub-title">-Pet Love-</p>

            <h1 className="title1">We treat Pet with Love</h1>
            <p className="sub-text">Shop on a friendly budget</p>
            <Link to="/register" className="bold hero-btn">
              Get started
            </Link>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={111111} className="carousel1">
          <div className="hero">
          <p className="sub-title">-Pet Treat-</p>
            <h1 className="title1">SAVE AS YOU GO!</h1>
            <p className="sub-text">
              Shop for our discounted and quality products
            </p>
            <Link to="/register" className="bold hero-btn">
              Get started
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={111111} className="carousel4">
          <div className="hero">
            <p className="sub-title">-Pet Care-</p>
            <h1 className="title1">Quality Utensils for less</h1>
            <p className="sub-text">Get the best of Etsea products</p>
            <Link to="/register" className="bold hero-btn">
              Get started
            </Link>
          </div>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
}
