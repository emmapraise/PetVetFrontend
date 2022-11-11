import React from "react";
// import PropTypes from "prop-types";
import authbg from "../../assets/authbg.png";
import kite from "../../assets/kite.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import padlock from "../../assets/padlock.svg";
import emailIcon from "../../assets/email.svg";

import InputField from "../../components/common/input/InputField";
import CheckboxInput from "../../components/common/input/CheckboxInput";
const Wrapper = styled.div`
  min-height: 100vh;
  padding: 50px 0;
  .auth-main {
    box-shadow: 0 0 16px #ccc;
    width: 80%;
    margin: auto;
    grid-template-columns: 40% 60%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.lsm}) {
      grid-template-columns: 1fr;
      width: 90%;
    }
  }
  .abs-back{
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
    padding: 30px;
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
`;
function ForgotPassword(props) {
  const [values, setValues] = React.useState({
    
    password2: "",
    password: "",
    email: "",
    showPassword: false,
  });

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
  const { agree } = state;

  const handleCheckbox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Wrapper className="flex">
      <div className="auth-main grid">
        <div className="lhs">
        <Link to="/" className="abs-back">⬅ Back to home</Link>
          <div className="lhs-content">
            <Link to="/">
              <img src={kite} alt="kite" />
            </Link>
            <div className="already">Don't have an Account?</div>
            <Link to="/register" className="log-btn">
              <button type="button">Sign up</button>
            </Link>
          </div>
        </div>
        <div className="rhs">
          <p className="bold log-title">Forgot Password</p>
          <p className="msg">Kindly click to reset password</p>
          <div className="input-container">
                    <div className="row-input ">
					<InputField
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      <img src={emailIcon} alt="emailIcon" />{" "}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
                    <div className="row-input ">
              <InputField
                label="Enter new Password"
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
            </div>
            <div className="row-input ">
              <InputField
                label="Confirm Password"
                type="password"
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
            <div className="row-input flex">
            <CheckboxInput checked={agree} onChange={handleCheckbox} name="agree"  />

              <p className="check-label">Remember Me </p>
            </div>
            <div className="button">
              <button type="button">Reset Password</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

ForgotPassword.propTypes = {};

export default ForgotPassword;
