import React from "react";
// import PropTypes from "prop-types";
import DarkNavBar from "../../components/common/DarkNavBar";
import styled from "styled-components";

import { Link } from "react-router-dom";
import InputField from "../../components/common/input/InputField";
import Modal from "../../components/common/Modal";
import back from "../../assets/backOrange.svg";
import SelectInput from "../../components/common/input/SelectInput";
import CheckboxInput from "../../components/common/input/CheckboxInput";

const pType = [
  {
    value: "Select Payment Type",
    text: "Select Payment Type",
    disabled: "disabled",
  },
  { value: "Outright Payment", text: "Outright Payment" },
  { value: "Installmental Payment", text: "Installmental Payment" },
];
const outType = [
  {
    value: "Pay with Wallet",
    text: "Pay with Wallet",
  },
  { value: " Pay with Card ", text: " Pay with Card " },
  { value: "Direct Bank Deposit", text: "Direct Bank Deposit" },
];
const installType = [
  {
    value: "6Months ",
    text: "6Months ",
  },
  { value: " 5Months  ", text: " 5Months  " },
  { value: " 4Months  ", text: " 4Months  " },
  { value: " 3Months  ", text: " 3Months  " },
  { value: " 2Months  ", text: " 2Months  " },
  { value: " 1Months  ", text: " 1Months  " },
];

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
    color: ${(props) => props.theme.color.white};
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
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px,
      rgb(0 0 0 / 14%) 0px 5px 8px 0px, rgb(0 0 0 / 12%) 0px 1px 14px 0px;
  }
  button.blue {
    background-color: ${(props) => props.theme.color.blue};
    border: 1px solid ${(props) => props.theme.color.blue};
  }
  button.blue:hover {
    background-color: #fff;
    color: ${(props) => props.theme.color.blue};

    transition: 0.3s;
  }
  button.orange {
    background-color: ${(props) => props.theme.color.ui_01};
    border: 1px solid ${(props) => props.theme.color.ui_01};
    color: ${(props) => props.theme.color.white};
  }
  button.orange:hover {
    background-color: ${(props) => props.theme.color.white};
    transition: 0.3s;
    color: ${(props) => props.theme.color.ui_01};
  }

  .input-container {
    margin: 20px 0;
  }
  .row-input {
    margin-bottom: 30px;
  }
  .sub-grid {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.lmd}) {
      grid-template-columns: 1fr;
    }
  }
  textarea {
    border-radius: 4px;
    outline: none;
    width: 100%;
    background-color: transparent;
  }
  textarea::placeholder {
    font-size: 15px;
    font-family: "Poppins";
    color: ${(props) => props.theme.color.gray7};
  }
  .textarea-label {
    color: ${(props) => props.theme.color.black2};
  }

`;
function Cart(props) {
  const [paymentType, setPaymentType] = React.useState("Select Payment Type");
  const [outrightPaymentType, setOutrightPaymentType] =
    React.useState("Pay with Wallet");
  const [installmentalPaymentType, setInstallmentalPaymentType] =
    React.useState("6Months ");

  const [values, setValues] = React.useState({
    recipientName: "",
    phoneNumber: "",
    country: "",
    state: "",
    streetAddress: "",
    emailAddress: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
    agree: false,
  });
  const { agree } = state;

  const handleCheckbox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Wrapper>
      <DarkNavBar
        backTo={
          <Link to="/cart">
            <img src={back} alt="back" />
          </Link>
        }
        pageName={<p className="cart-text">Billing Address</p>}
      />
      <main>
        <div className="input-container">
          <div className="row-input sub-grid grid">
            <InputField
              label="Recipient Name"
              value={values.recipientName}
              onChange={handleChange("recipientName")}
            />
            <InputField
              label="Phone Number"
              type="number"
              value={values.phoneNumber}
              onChange={handleChange("phoneNumber")}
            />
          </div>
          <div className="row-input sub-grid grid">
            <InputField
              label="Country "
              value={values.country}
              onChange={handleChange("country")}
            />
            <InputField
              label="State"
              value={values.state}
              onChange={handleChange("state")}
            />
          </div>
          <div className="row-input sub-grid grid">
            <InputField
              label="Street Address "
              value={values.streetAddress}
              onChange={handleChange("streetAddress")}
            />
            <InputField
              label="Email Address"
              value={values.emailAddress}
              onChange={handleChange("emailAddress")}
            />
          </div>
          <label className="textarea-label bold" htmlFor="info">
            Additional Info
          </label>

          <div className="row-input">
            <textarea
              name="info"
              id="info"
              rows="10"
              placeholder="Optional"
            ></textarea>
          </div>
        </div>

        <div className="buttons j-btw">
          <Link to="/">
            <button className="blue  btn">Continue Shopping</button>
          </Link>
          <Modal
            onClose={handleClose}
            open={open}
            trigger={
              <button className="orange btn" onClick={handleOpen}>
                Make Payment
              </button>
            }
            body={
              <div className="modal-style">
                <DarkNavBar
                  backTo={<img onClick={handleClose} src={back} alt="back" />}
                  pageName={<p className="cart-text">Payment Details</p>}
                />

                <div className="body">
                  <div className="payable">
                    <p className="bold text">Amount Payable</p>
                    <div className="flex amount">
                      <p className="bold">NGN 200,000.00</p>
                    </div>
                  </div>

                  <div className="select-type flex">
                    <SelectInput
                      options={pType}
                      value={paymentType}
                      onChange={setPaymentType}
                      disabled
                    />
                    {paymentType === "Outright Payment" ? (
                      <SelectInput
                        options={outType}
                        value={outrightPaymentType}
                        onChange={setOutrightPaymentType}
                        disabled
                      />
                    ) : paymentType === "Installmental Payment" ? (
                      <SelectInput
                        options={installType}
                        value={installmentalPaymentType}
                        onChange={setInstallmentalPaymentType}
                      />
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="modal-foot flex">
                    <p className="agreement bold">
                    By clicking, I agree to Etsea’s Terms And Conditions
                    </p>
                  <CheckboxInput
                  checked={agree}
                  onChange={handleCheckbox}
                  name="agree"
                  required={true}
                />
                
                  </div>

                  <Link to="/direct-deposit" className="flex make-payment">
                    <button  className="bold make-payment-btn" type="button">Make Payment</button>
                  </Link>
                </div>
              </div>
            }
          />
        </div>
      </main>
    </Wrapper>
  );
}

Cart.propTypes = {};

export default Cart;
