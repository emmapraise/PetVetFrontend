import React from "react";
// import PropTypes from "prop-types";
import DarkNavBar from "../../components/common/DarkNavBar";
import styled from "styled-components";
import naira from "../../assets/naira.svg";
import productImg from "../../assets/ankle.png";
import productImg2 from "../../assets/black-dress.png";
import cartEmpty from "../../assets/cart.png";
import back from "../../assets/backOrange.svg";
import DashboardLayout from "../../components/layouts/DashboardLayout";

import { Link } from "react-router-dom";

import markgreen from "../../assets/markgreen.png";



const purcchaseItems = [
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

main{
  background-color: ${(props) => props.theme.color.ui_02};
  }
.pay-text .black{
  color: ${(props) => props.theme.color.black};
  margin-left: 4px;
}
.sub-child.quantity{
  justify-content: center;
}
.pay-text .price-text{
  margin-left: 5px;
}
  .items {
    font-size: 20px;
    line-height: 29px;
    margin-bottom: 14px;
    color: ${(props) => props.theme.color.dark};
  }
  .percent {
    color: ${(props) => props.theme.color.ui_01};
    font-size: 12px;
    padding: 3px;
    background-color: ${(props) => props.theme.color.ui_06};
  }
  .naira {
    width: 14px;
  }
  .rhs {
    display: grid;
    grid-template-columns: max-content 1fr;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      display: block;
    }
  }
  .p-image {
    width: 110px;
  }
  .discount-price {
    flex-direction: column;
    justify-content: center;
   
  }
  .titles{
    display: grid;
    grid-template-columns: 300px 1fr  ;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {

    grid-template-columns: max-content 1fr  ;
    }
  }
  .titles p{

    font-size: 17px;
    font-family: "Poppins";
    color: ${(props) => props.theme.color.gray7};
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
font-size: 13px;
}
  }
  .titles .grid{
    grid-template-columns: 1fr 200px;
    grid-gap: 10px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {

grid-template-columns:1fr max-content   ;
}
  }
  
  .titles .flexy{
    justify-content: space-around;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      justify-content: center;
}
  }
  .titles .flexy p{
    padding: 0 5px;
 
  }
  .titles .first{
    justify-content: center;
  }
  .text-13 {
    font-size: 13px;
  }
  .crossed-price {
    text-decoration: line-through;
  }
  .discount-price .discount {
    margin-top: 20px;
    width: 100%;
    flex-wrap: wrap;
  }
  .outlined {
    border: 1px solid ${(props) => props.theme.color.ui_01} !important;
  }
  .cart-item {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-color: ${(props) => props.theme.color.white};
    padding: 9px 40px;
    grid-template-columns: max-content 1fr;
    width: 100%;
    border: 1px solid ${(props) => props.theme.color.white};
    min-width: 800px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      padding: 10px;
    }
  }
  .cart-item .rhs {
    padding: 20px 0;
    height: 100%;
  }
  .sub-child {
    padding: 0px 10px;
    /* width: 137px; */
    text-align: center;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.lmd}) {
      width: auto;
    }
  }

  .checker-item {
    align-items: center;
    height: auto;
    /* max-height: 182px; */
    margin-bottom: 24px;
  }
  .checker-item .scrolly {
    overflow-x: scroll;
    width: 100%;
    overflow-y: hidden;
  }
  .checker-item .scrolly::-webkit-scrollbar {
    height: 2px;
  }

  .checker-item .scrolly::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .checker-item .scrolly::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.ui_01};
    outline: 0;
  }

 
  .product-details .name {
    font-size: 14px;
    width: 158px;
    line-height: 22px;
    color: ${(props) => props.theme.color.black};
  }
  .mr-20 {
    margin-right: 20px;
  }
  .lhs-card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 217px;
}
  }
  .h-100 {
    height: 100%;
  }
  .makeStyles-icon-2 {
    width: 27px;
    height: 27px;
  }

  .pay-text{
    font-size: 14px;
    color: ${(props) => props.theme.color.ui_01};
  }
  .makeStyles-checkedIcon-3 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bordered {
    border-right: 2px solid ${(props) => props.theme.color.gray6};
  }
  .orange .text {
    font-size: 13px;
    line-height: 22px;
    color: ${(props) => props.theme.color.ui_01};
    margin-left: 8px;
  }
  .orange img {
    width: 20px;
  }
.total .text{
  font-weight: bold;
  color: ${(props) => props.theme.color.ui_07};
  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    font-size: 14px;
    }
}
  .total .amount {
    color: ${(props) => props.theme.color.ui_01};
    margin-left: 15px;
  }
  .total {
    background: ${(props) => props.theme.color.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 8px 25px;
  }
  .buttons {
    margin-top: 40px;
    display: flex;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      display: grid;
      grid-gap: 15px;
      justify-items: center;
      justify-content: center;
    }
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
  .sub-child .price{
    width: 100%;
    justify-content: center;
  }
  .no-item, .payment {
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
   .payment .m-15{
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
  .no-item{
  background: ${(props) => props.theme.color.ui_02};
  min-height: 100vh;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
function Purchases(props) {



  return (
    <Wrapper>
      {purcchaseItems.length > 0 ? (
        <DashboardLayout navText="My Purchases">
          <>
            <p className="items">Purchase(s) {`(${purcchaseItems.length} Items)`}</p>
            <>
              {" "}
              <div className="titles">
                <div className="flex first">
                  {" "}
                  <p>ITEMS</p>
                </div>
                <div className="grid">
                  <div className="flexy flex">
                    <p>QUANTITY</p>
                    <p>UNIT PRICE</p>
                    <p>SUB TOTAL</p>
                  </div>
                  <p>PAYMENT</p>
                </div>
              </div>
              {purcchaseItems.map(({ name, price, img, paymentType }, index) => (
                <div className="checker-item ">
                  <div className="scrolly">
                    <div className=" grid cart-item ">
                      <div className="rhs bordered">
                        <div className="p-image">
                          <img src={img} alt="item" />
                        </div>
                        <div className="product-details">
                          <p className="name bold">{name}</p>
                        </div>
                      </div>
                      <div className="lhs-card h-100 ">
                        <div className="quantity sub-child flex h-100 bordered">
                         <p className="quantity">1</p>
                        </div>
                        <div className="discount-price  sub-child flex h-100 bordered">
                          <p className=" flex">
                            <img className="naira" src={naira} alt="naira" />{" "}
                            <span className="bold text-13">7,750</span>
                          </p>
                          <div className="discount  flex j-btw">
                            <p className="crossed-price flex">
                              <img className="naira" src={naira} alt="naira" />{" "}
                              <span className="text-13">9,750</span>
                            </p>
                            <p className="percent">-15%</p>
                          </div>
                        </div>
                        <div className="sub-child flex h-100 bordered">
                          <p className="price flex">
                            <img className="naira" src={naira} alt="naira" />{" "}
                            <span className="bold text-13">
                              {price
                                .toString()
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                            </span>
                          </p>
                        </div>
                        <div className="payment flex">
                          <p className="pay-text">{paymentType}</p>
                          {paymentType === "Outright payment" ? (
                            <img className="m-15" src={markgreen} alt="paid" />
                          ) : (
                            <div className="flex m-15">
                              <p className="pay-text flex">
                                Initial payment:{" "}
                                <p className="flex price-text">
                                  <img
                                    className="naira"
                                    src={naira}
                                    alt="naira"
                                  />{" "}
                                  <span className="black">9,750</span>
                                </p>
                              </p>
                            </div>
                          )}
                          {paymentType === "Outright payment" ? (
                            <p className="pay-text">PAID</p>
                          ) : (
                            <div className="flex ">
                              <p className="pay-text flex">
                                Bal:{" "}
                                <p className="flex price-text">
                                  <img
                                    className="naira"
                                    src={naira}
                                    alt="naira"
                                  />{" "}
                                  <span className="black">1,750</span>
                                </p>
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="buttons j-btw">
                <div className="total flex">
                  <p className="text">Amount Paid:</p>
                  <p className="amount">NGN66,250</p>
                </div>
                <div className="total flex">
                  <p className="text">Balance:</p>
                  <p className="amount">NGN66,250</p>
                </div>
                <div className="total flex">
                  <p className="text">Total:</p>
                  <p className="amount">NGN66,250</p>
                </div>
              </div>
            </>
            <Link to="/emptyPurchases">emptyPurchases</Link>
          </>
        </DashboardLayout>
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
