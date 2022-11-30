import React from "react";
// import PropTypes from "prop-types";
import authbg from "../../assets/authbg.png";
import kite from "../../assets/kite.png";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import padlock from "../../assets/padlock.svg";
import emailIcon from "../../assets/email.svg";
import axios from "axios"

import InputField from "../../components/common/input/InputField";
import CheckboxInput from "../../components/common/input/CheckboxInput";
const Wrapper = styled.div`
  /* min-height: 100vh; */
  padding: 30px 0;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.lsm}) {
    padding: 10px;
  }
  .auth-main {
    box-shadow: 0 0 16px #ccc;
    width: 80%;
    display: grid;
    margin: auto;
    grid-template-columns: 40% 60%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.lsm}) {
      grid-template-columns: 1fr;
      width: 90%;
    }
  }
  .block {
    display: block;
    width: 100%;
  }
  .abs-back {
    position: absolute;
    color: #fff;
    font-size: 12px;
    top: 10px;
    left: 10px;
  }
  .lhs {
    position: relative;
    background-size: cover;
    height: 673px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${authbg});
    @media screen and (max-width: ${(props) => props.theme.breakpoint.lsm}) {
      height: 300px;
    }
  }
  .already {
    color: ${(props) => props.theme.color.white};
    font-family: poppins;
  }
  .already:hover {
    text-decoration: underline;
    transition: 0.3s;
  }
  .lhs-content {
    width: 95%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .lhs-content .log-btn button {
    margin-top: 15px;
    background-color: ${(props) => props.theme.color.dark};
    outline: none;
    padding: 5px 32px;
    color: ${(props) => props.theme.color.white};
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.color.white};
  }
  .button button {
    margin-top: 15px;
    background-color: ${(props) => props.theme.color.dark};
    outline: none;
    width: 100%;
    padding: 10px;
    color: ${(props) => props.theme.color.white};
    border: 1px solid ${(props) => props.theme.color.dark};
  }
  .button button:hover {
    transition: 0.3s;
    background-color: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.ui_01};
    border: 1px solid ${(props) => props.theme.color.ui_01};
  }
  .check-label {
    color: ${(props) => props.theme.color.gray7};
    margin-bottom: 0;
    font-family: "OpenSans";
    font-size: 13px;
  }
  .lhs-content .log-btn button:hover {
    background-color: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.dark};
    transition: 0.3s;
  }
  .lhs-content img {
    width: 100px;
    margin-bottom: 15px;
  }
  .rhs {
    padding: 15px;
  }
  .rhs .log-title {
    font-size: 25px;
  }
  .rhs .msg {
    margin-top: 5px;
    font-size: 14px;
    color: ${(props) => props.theme.color.ui_01};
    font-family: "Poppins";
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
`;
function Register({ layout }) {
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    password: "",
    password2: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    showPassword: false,
  });
  
  const history = useHistory();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
    console.log();
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [state, setState] = React.useState({
    agree: false,
  });

  const handleSubmit = async() => {
    delete values.showPassowrd;
    delete values.password2;
    try{
    const response = await axios.post(`owner`, values, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    console.log(response.data)
    history.push('/sent');

  }catch(error) {
    console.log(error)
  }
  }


  return (
    <Wrapper className="flex">
      <div className={`${layout ? layout : "auth-main"}`}>
        {layout ? (
          ""
        ) : (
          <div className="lhs">
            <Link to="/" className="abs-back">
              ⬅ Back to home
            </Link>
            <div className="lhs-content">
              <Link to="/">
                <img src={kite} alt="kite" />
              </Link>
              <div className="already">Already have an Account?</div>
              <Link to="/login" className="log-btn">
                <button type="button">Login</button>
              </Link>
            </div>
          </div>
        )}

        <div className="rhs">
          <p className="bold log-title">Create Account</p>
          <p className="msg">Signing up is just a click away, Fast and Easy</p>
          <div className="input-container">
            <div className="row-input sub-grid grid">
              <InputField
                label="First Name"
                value={values.firstName}
                onChange={handleChange("firstName")}
              />
              <InputField
                label="Last Name"
                value={values.lastName}
                onChange={handleChange("lastName")}
              />
            </div>
            <div className="row-input sub-grid grid">
              <InputField
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                
              />
              <InputField
                label="Phone Number"
                type="number"
                value={values.phone}
                onChange={handleChange("phone")}
              />
            </div>

            <div className="row-input sub-grid grid">
              <InputField
                label="Address"
                type="text"
                value={values.address}
                onChange={handleChange("address")}
              />
              <InputField
                label="City"
                type="text"
                value={values.city}
                onChange={handleChange("city")}
              />
            </div>
            <div className="row-input sub-grid grid">
              <InputField
                label="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      <img src={padlock} alt="padlock" />{" "}
                    </IconButton>
                  </InputAdornment>
                }
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
              />

                <InputField
                label="Confirm Password"
                type={values.showPassword ? "text": "password"}
                value={values.password2}
                onChange={handleChange("password2")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      <img src={padlock} alt="padlock" />{" "}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
            <div className="button">
              <button type="button" onClick={handleSubmit}>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

Register.propTypes = {};

export default Register;
