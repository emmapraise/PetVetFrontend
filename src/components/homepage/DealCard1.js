import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import loveImg from "../../assets/love.svg";
import unlove from "../../assets/unlove.svg";
import cart from "../../assets/cartIcon.svg";
import styled from "styled-components";

const Wrapper = styled.div`
 .linked{
  background-color: ${(props) => props.theme.color.white};
  width: 250px;
  display: flex;
  position: relative;
  flex-direction: column;
  height: 269px;
    border-radius: 6px;
    box-shadow: 0 0 16px #ccc;

  &:hover {
   box-shadow: none;
    transition: 0.3s;
  }
 }
  .name {
    font-family: Roboto;
    font-size: 16px;
    line-height: 19px;
    margin: 11px 0 6px 0;
    color: ${(props) => props.theme.color.gray2};
  }
  .upper {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 9px 20px;
  }
  .lower {
    border-top: 1px solid ${(props) => props.theme.color.gray3};

    padding: 6px 20px 15px 20px;
  }
  .price {
    font-size: 18px;
    line-height: 21px;

    color: ${(props) => props.theme.color.black};
  }
  .tag {
    position: absolute;
    right: 7px;
    top: 7px;
    width: 39.47px;
    height: 27.78px;

    background: rgba(255, 227, 194, 0.56);
    font-family: Roboto;
    font-size: 12px;
    line-height: 14px;
    justify-content: center;
    color: ${(props) => props.theme.color.ui_03};
  }
`;
function DealCard1({ productName, price, to, img, love }) {
  return (
    <Wrapper className="">
      <Link to={`/products/${to}`} className="j-btw linked">
      <p className="tag flex">-18%</p>
      <div className="upper flex">
        {img}
        <p className="name">{productName}</p>
        <p className="price bold">{price}</p>
      </div>
      <div className="lower flex j-btw">
        {love ? (
          <img src={loveImg} alt="love" />
        ) : (
          <img src={unlove} alt="unlove" />
        )}
        <img src={cart} alt="cart" />
      </div>
      </Link>
    </Wrapper>
  );
}

DealCard1.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.object,
  to: PropTypes.number.isRequired,
  love: PropTypes.bool,
};

export default DealCard1;
