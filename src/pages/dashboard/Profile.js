import React, {useEffect, useState} from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import InputField from "../../components/common/input/InputField";
import avatar from "../../assets/avatar.png";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import axios from "axios";

const Wrapper = styled.div`
  main {
    background-color: ${(props) => props.theme.color.ui_02};
  }

  .title {
    color: ${(props) => props.theme.color.ui_01};
    font-size: 20px;
    font-family: poppins;
    margin-bottom: 10px;
    margin-left: 10px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      font-size: 15px;
    }
  }
  .action-btns {
    margin: 20px 0 40px 0;
  }

  .with-avatar img {
    border-radius: 50%;
  }
  button.btn {
    color: ${(props) => props.theme.color.black};
    background-color: ${(props) => props.theme.color.white};
    height: 32px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    justify-content: center;
    font-size: 14px;
    line-height: 10px;
    padding: 0 20px;
    font-family: OpenSans;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.color.white};
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px,
      rgb(0 0 0 / 14%) 0px 5px 8px 0px, rgb(0 0 0 / 12%) 0px 1px 14px 0px;
  }
  button.btn:hover {
    border: 1px solid ${(props) => props.theme.color.ui_01};
    transition: 0.3s;
  }
  button.orange {
    color: ${(props) => props.theme.color.ui_01};
    background-color: transparent;
    box-shadow: none;
    margin-left: 15px;
    border: 1px solid ${(props) => props.theme.color.ui_01};
  }
  button.orange:hover {
    background-color: ${(props) => props.theme.color.ui_01};
    color: ${(props) => props.theme.color.white};
    transition: 0.3s;
  }

  .grid-inputs {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    display: grid;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.lsm}) {
      grid-template-columns: 1fr;
    }
  }
  .copier input {
    border: none;
    outline: none;
    padding: 0 10px;
    height: 48px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    color: ${(props) => props.theme.color.gray5};
    background-color: transparent;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    width: 85%;
    font-weight: bold;
  }
  .socials {
    border: none;
    outline: none;
    padding: 0 10px;
    height: 48px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    background-color: transparent;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    width: 85%;
  }
  .copier button {
    border: none;
    outline: none;
    padding: 0 10px;
    width: 15%;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    height: 48px;

    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.ui_01};
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: auto;
    }
  }
  .with-label {
    margin-top: 20px;
  }
  .mt-30 {
    margin-top: 30px;
  }
  img.facebook {
    margin-left: 10px;
  }
`;
function Profile(props) {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  useEffect(async () => {
    try {
      const response = await axios.get(`user/1`)
      console.log(response.data)
      setValues(response.data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Wrapper>
      <DashboardLayout navText="Profile">
        <div className="with-avatar flex">
          <img src={avatar} alt="avatar" />
          <p className="title bold">Welcome! {values.firstName} {values.lastName}</p>
        </div>
        <div className="action-btns">
          <button className="btn">Upload</button>
          <button className="btn orange">Remove</button>
        </div>
        <div className="grid-inputs">
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

          <InputField
            type="email"
            label="Email"
            value={values.email}
            onChange={handleChange("email")}
          />
          <InputField
            label="Phone Number"
            value={values.phone}
            onChange={handleChange("phone")}
          />
          <InputField
            label="Address"
            value={values.address}
            onChange={handleChange("address")}
          />
          <InputField
            label="City"
            value={values.city}
            onChange={handleChange("city")}
          />
        </div>
      </DashboardLayout>
    </Wrapper>
  );
}

Profile.propTypes = {};

export default Profile;
