import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import InputField from "../../components/common/input/InputField";
import wallet from "../../assets/wallet.png";
import OtpInput from 'react-otp-input';

import DashboardLayout from "../../components/layouts/DashboardLayout";

const Wrapper = styled.div`
  main {
    background-color: ${(props) => props.theme.color.ui_02};
  }
  .MuiFormControl-root{
	margin-bottom: 20px;
  }
  .MuiInputBase-input{
	background-color: ${(props) => props.theme.color.white};

  }
  .lhs .title,
  .rhs .title {
    color: ${(props) => props.theme.color.ui_01};
    font-size: 20px;
    font-family: poppins;
    margin-bottom: 10px;
  }
  .flex-btn{
	justify-content: center;
  }
  .enter{
	color: ${(props) => props.theme.color.ui_01};
    font-size: 16px;
    font-family: poppins;
    margin: 20px 0;
  }
  .big-card.second {
    background: #974343;
    padding: 15px 20px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 28%);
  }
  .big-card.second p.text {
    margin: 10px 0;
    color: ${(props) => props.theme.color.white};
    font-family: poppins;
    font-size: 20px;
  }
  .elevate .image img {
    width: 120px;
    height: 89px;
    margin: auto;
  }
  .flex.amount {
    justify-content: flex-end;
  }
  .grid.gridy {
    grid-gap: 35px;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      grid-template-columns: 1fr;
    }
  }
  .buttons {
    margin-top: 40px;
    grid-gap: 15px;
    grid-template-columns: 1fr 1fr;
    display: grid;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }
  button.btn {
    color: ${(props) => props.theme.color.white};
    height: 32px;
    border: 0;
    outline: 0;
    border-radius: 7px;
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
    color: ${(props) => props.theme.color.ui_01};
    border: 1px solid ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.white};
  }
  button.orange:hover {
    border: 1px solid ${(props) => props.theme.color.ui_01};
    transition: 0.3s;
  }
  .otp-container{
    background-color: ${(props) => props.theme.color.white};
padding: 10px;
border: 1px solid ${(props) => props.theme.color.gray5};
justify-content: center;
border-radius: 7px;
margin-bottom: 20px;
  }


`;
function Wallet(props) {
  const [values, setValues] = React.useState({
    bankName: "",
    accountName: "",
    accountNumber: "",
  });
  const [otp, setOtp] = React.useState('');

  const handleOtp= (otp) => setOtp(otp);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Wrapper>
      <DashboardLayout navText="Wallet">
        <div className="grid gridy">
          <div className="lhs">
            <p className="title bold">Your Wallet</p>
            <div className="big-card elevate second">
              <div className="image flex">
                <img src={wallet} alt="" />
              </div>
              <p className="text">Wallet Balance</p>
              <div className="flex amount">
                <p className="text">NGN 300,000</p>
              </div>
            </div>
            <div className="button buttons">
              <button className="blue  btn">FUND WALLET</button>
              <button className="orange  btn">WITHDRAW</button>
            </div>
          </div>

          <div className="rhs">
            <p className="title">ADD BANK ACCOUNT</p>
            <InputField
              label="Bank Name"
              value={values.bankName}
              onChange={handleChange("bankName")}
            />

            <InputField
              label="Account Name"
              value={values.accountName}
              onChange={handleChange("accountName")}
            />

            <InputField
			type='number'
              label="Account Number"
              value={values.accountNumber}
              onChange={handleChange("accountNumber")}
            />

<div className="flex flex-btn">
<button className="blue  btn">Request OTP</button>

</div>

<p className="enter">Enter OTP</p>
<div className="otp-container flex">
<OtpInput
className="otp-input"
        value={otp}
		inputStyle={{margin: "0 10px",
			width: "30px",height: "30px",border: "1px solid #767676"}}
        onChange={handleOtp}
        numInputs={4}
        // separator={<span>-</span>}
      />
</div>
<div className="flex flex-btn">
<button className="blue  btn">Submit</button>

</div>
          </div>
        </div>
      </DashboardLayout>
    </Wrapper>
  );
}

Wallet.propTypes = {};

export default Wallet;
