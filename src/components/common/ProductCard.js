import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  .product-card {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 10px;
    min-width: 250px;
    width: min-content;
    margin: auto;
    /* height: 270px; */
    // box-shadow: 0 0 16px #ccc;
    border-radius: 6px;
    padding: 10px;
    /* @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      min-width: 215px;
    } */
  }
  .mr-10 {
    margin-right: 10px;
  }
  .product-card:hover {
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 0 10px #ccc;
  }
  .card-content .icons {
    margin: 10px;
    justify-content: flex-end;
  }
  .card-name {
    font-size: 15px;
    line-height: 19px;
    color: ${(props) => props.theme.color.black3};
  }


  .card-price {
    font-size: 18px;
    line-height: 22px;
    color: ${(props) => props.theme.color.black};
    margin-top: 10px;
  }
  .card-content {
    padding-top: 10px;
  }
  .card-sub-price {
    padding-top: 5px;
    color: ${(props) => props.theme.color.gray3}
  }
  .product-image{
    height: 137px;
    margin: auto;
  }
  .icons img{
    width: 20px;
  }
`;
function ProductCard({ bg, pName, price, to, like, addToCart }) {
  return (
    <Wrapper>
      <Link to={`/products/${to}`}>
        <div className="product-card" >
          {/* <div
            className="card-image "
            style={{ backgroundImage: `url(${bg})` }}
          ></div> */}
          <img className="product-image" src={bg} alt="" />
          <div className="card-content">
            <div className="text">
              <h2 className="card-name">{pName}</h2>
              <p className="card-price bold">$ {price} </p>
              <p className="card-sub-price">per session</p>
            </div>
            <div className="icons flex">
              <img src={like} className="mr-10" alt="unlove" />
              {/* <img src={addToCart} alt="cart" /> */}
            </div>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
}

ProductCard.propTypes = {
  addToCart: PropTypes.string,
  to: PropTypes.number,
  like: PropTypes.string,
  price: PropTypes.number,
  pName: PropTypes.string,
  bg: PropTypes.string,
};

export default ProductCard;
