import React from "react";
// import PropTypes from "prop-types";
import DarkNavBar from "../../components/common/DarkNavBar";
import styled from "styled-components";
import productImg from "../../assets/ankle.png";
import productImg2 from "../../assets/black-dress.png";
import cartEmpty from "../../assets/cart.png";
import back from "../../assets/backOrange.svg";
import { Link } from "react-router-dom";


const cartItems = [
  {
    name: "Portable Power Bank External Battery Charger",
    price: 7750,
    img: productImg,
    paymentType: "Outright payment",
  },
  {
    name: " ASUS 10.1” 4GB+64GB Android 10.0 HD IPS Tablet PC - Black ",
    price: 15600,
    img: productImg2,
    paymentType: "Installment payment",
  },
];

const Wrapper = styled.div`
  .no-item {
    background: ${(props) => props.theme.color.ui_02};
    min-height: 100vh;
  }

  button.btn {
    color: ${(props) => props.theme.color.ui_01};
    height: 32px;
    border: 0;
    outline: 0;
    border-radius: 10px;
    width: 190px;
    justify-content: center;
    font-size: 14px;
    line-height: 10px;
    font-family: OpenSans;
    cursor: pointer;
    background-color: #fff;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px,
      rgb(0 0 0 / 14%) 0px 5px 8px 0px, rgb(0 0 0 / 12%) 0px 1px 14px 0px;
  }

  button.blue {
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.blue};
    border: 1px solid ${(props) => props.theme.color.blue};
  }
  button.blue:hover {
    background-color: #fff;
    color: ${(props) => props.theme.color.blue};
    border: 1px solid ${(props) => props.theme.color.blue};

    transition: 0.3s;
  }
  .no-item .already {
    font-size: 15px;
    color: ${(props) => props.theme.color.black2};
    margin: 10px 0 30px 0;
  }
  .no-item .empty-text {
    font-size: 15px;
    margin-top: 35px;
    color: ${(props) => props.theme.color.gray7};
  }
  .no-item .already a {
    color: ${(props) => props.theme.color.ui_01};
  }
  .no-item .already a:hover {
    text-decoration: underline !important;
    transition: 0.3s;
  }
  .no-item img {
    width: 149px;
  }
  .sub-child .price {
    width: 100%;
    justify-content: center;
  }
  .no-item,
  .payment {
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .payment .m-15 {
    margin: 15px 0;
  }
  .no-item .empty-text {
    font-size: 15px;
    margin-top: 35px;
    color: ${(props) => props.theme.color.gray7};
  }
  .no-item .already a {
    color: ${(props) => props.theme.color.ui_01};
  }
  .no-item .already a:hover {
    text-decoration: underline !important;
    transition: 0.3s;
  }
  .no-item img {
    width: 149px;
  }
  .no-item {
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
function Purchases(props) {
  return (
    <Wrapper>
      {cartItems.length < 0 ? (
        <p>filled</p>
      ) : (
        <>
          <DarkNavBar
            dropdowns
            backTo={
              <Link to="/">
                <img src={back} alt="back" />
              </Link>
            }
            pageName={
              <>
                <p className="cart-text">My Purchases</p>
              </>
            }
          />
          <div className="no-item flex">
            <img src={cartEmpty} alt="cartEmpty" />
            <p className="empty-text">Your Purchase is empty!</p>
            <p className="already">
              Already have an account? <Link to="/login">Login</Link> to see
              items in your Purchase bag.
            </p>
            <Link to="/">
              <button className="blue btn">Go Shopping</button>
            </Link>
          </div>
        </>
      )}
    </Wrapper>
  );
}

Purchases.propTypes = {};

export default Purchases;
