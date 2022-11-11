import React from "react";
// import PropTypes from "prop-types";
import DarkNavBar from "../components/common/DarkNavBar";
import styled from "styled-components";
import cart from "../assets/cartIcon.svg";
import naira from "../assets/naira.svg";
import cartEmpty from "../assets/cart.png";
import unsave from "../assets/unlove.svg";
import back from "../assets/backOrange.svg";

import { Link } from "react-router-dom";

import CheckboxInput from "../components/common/input/CheckboxInput";
import SelectInput from "../components/common/input/SelectInput";

const optionGender = [
  { value: "1", text: "1" },
  { value: "2", text: "2" },
];

const cartItems = [];
const getFormattedPrice = (price) =>
  `${price
    .toFixed(2)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;

const Wrapper = styled.div`
  background: #e2ebfa;
  min-height: 100vh;
  main {
    padding: 30px;
    width: 80%;
    margin: auto;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.lmd}) {
      width: 100%;
    }
  }
  .items {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 14px;
    color: ${(props) => props.theme.color.ui_01};
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
  .sub-child .price{
    width: 100%;
    justify-content: center;
  }
  .p-image {
    width: 140px;
  }
  .discount-price {
    flex-direction: column;
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
  }
  .outlined {
    border: 1px solid ${(props) => props.theme.color.ui_01} !important;
  }
  .cart-item {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-color: ${(props) => props.theme.color.white};
    padding: 9px 40px;
    grid-template-columns: 1fr max-content;
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
    width: 137px;
    text-align: center;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.lmd}) {
      width: auto;
    }
  }
  .save-remove {
    flex-wrap: wrap;
    justify-content: space-between;
    display: flex;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      justify-content: flex-start;
      display: block;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      display: block;
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

  .product-details {
    margin-left: 10px;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      margin: 0;
      display: block;
    }
  }
  .product-details .name {
    font-size: 14px;
    width: 70%;
    line-height: 22px;
    color: ${(props) => props.theme.color.black};
  }
  .mr-20 {
    margin-right: 20px;
  }
  .lhs {
    align-items: center;
  }
  .h-100 {
    height: 100%;
  }
  .makeStyles-icon-2 {
    width: 27px;
    height: 27px;
  }
  .makeStyles-checkedIcon-3 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tip {
    font-size: 13px;
    font-family: "Poppins";
    margin-bottom: 10px;
    color: ${(props) => props.theme.color.gray7};
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
  .total-card {
    justify-content: flex-end;
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
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
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
  button.btn:hover {
    background-color: #fff;
    border: 1px solid ${(props) => props.theme.color.ui_01};
    transition: 0.3s;
  }
  button.orange {
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.color.ui_01};
  }
  button.orange:hover {
    background-color: ${(props) => props.theme.color.white};
    transition: 0.3s;
    color: ${(props) => props.theme.color.ui_01};
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
  .no-item {
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
function Cart(props) {
  const [checkedState, setCheckedState] = React.useState(
    new Array(cartItems.length).fill(false)
  );

  const [total, setTotal] = React.useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + cartItems[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };
  const [gender, setGender] = React.useState("1");

  return (
    <Wrapper>
      <DarkNavBar
        dropdowns
        backTo={
          <Link to="/">
            <img src={back} alt="back" />
          </Link>
        }
        pageName={
          <>
            <p className="cart-text">Cart</p>
            <div className="cart-no">
              <img src={cart} alt="cart" />
              <p className="tag">{cartItems.length}</p>
            </div>
          </>
        }
      />
      <main>
        <p className="items">
          Cart {cartItems.length > 0 ? `(${cartItems.length} Items)` : ""}{" "}
        </p>
        {cartItems.length > 0 ? (
          <>
            {" "}
            <p className="tip">
              Kindly select an item you would like to pay outrightly or
              installmental before you proceed to payment
            </p>
            {cartItems.map(({ name, price, img }, index) => (
              <div className="checker-item flex">
                <div className="mr-2">
                  <CheckboxInput
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                </div>
                <div className="scrolly">
                  <div
                    className={
                      checkedState[index]
                        ? "outlined cart-item grid"
                        : "cart-item grid"
                    }
                  >
                    <div className="rhs bordered">
                      <div className="p-image">
                        <img src={img} alt="item" />
                      </div>
                      <div className="product-details flex">
                        <p className="name bold">{name}</p>
                        <div className="save-remove ">
                          <div className="flex save orange mr-20">
                            <img src={unsave} alt="unsave" />
                            <p className="text">Move to saved items</p>
                          </div>
                          <div className="flex remove orange">
                            <img src={unsave} alt="unsave" />
                            <p className="text">Remove</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lhs h-100 flex">
                      <div className="select sub-child flex h-100 bordered">
                        <SelectInput
                          label="Gender"
                          options={optionGender}
                          value={gender}
                          onChange={setGender}
                        />
                      </div>
                      <div className="discount-price sub-child flex h-100 bordered">
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
                      <div className="sub-child flex h-100">
                        <p className="price flex">
                          <img className="naira" src={naira} alt="naira" />{" "}
                          <span className="bold text-13">
                            {price
                              .toString()
                              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="total-card flex">
              <div className="total flex">
                <p className="text">TOTAL:</p>
                <p className="amount">NGN {getFormattedPrice(total)}</p>
              </div>
            </div>
            <div className="buttons j-btw">
              <Link to="/">
                <button className=" orange btn">Continue Shopping</button>
              </Link>
              <Link to="/checkout">
                <button
                  className="btn"
                  disabled={checkedState.includes(true) ? "" : "disabled"}
                >
                  Checkout
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className="no-item flex">
            <img src={cartEmpty} alt="cartEmpty" />
            <p className="empty-text">Your cart is empty!</p>
            <p className="already">
              Already have an account? <Link to="/login">Login</Link> to see
              items in your cart.
            </p>
            <Link to="/">
              <button className="blue btn">Continue Shopping</button>
            </Link>
            <Link to="/filledCart">see designed FilledCart</Link>

          </div>
        )}
      </main>
    </Wrapper>
  );
}

Cart.propTypes = {};

export default Cart;
