import React from "react";
import logo from "../../assets/logo.png";
import dashboardIcon from "../../assets/dashboardIcon.svg";
import cartIcon from "../../assets/cartIcon.svg";
import calenderBookings from "../../assets/calendar-svgrepo-com.svg";
import menuIcon from "../../assets/menuicon.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px 20px;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
    padding: 10px;
  }
  .pd-10 {
    padding: 0 10px;
  }
  .m-10 {
    margin: 0 10px;
  }
  button.btn {
    color: ${(props) => props.theme.color.ui_01};
    height: 32px;
    border: 0;
    outline: 0;
    border-radius: 10px;
    width: 90px;
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
  .logo {
    height: 40px;
  }
  .mr-7 {
    margin-right: 7px;
  }
  .link-text {
    color: ${(props) => props.theme.color.black};
    font-size: 14px;
  }
  #dashboard-nav img {
    width: 15px;
    height: 15px;
  }
  .search-box-area {
    border-radius: 3px;
    border: 2px solid #fe7c00;
    position: relative;
    background: #fff;
    display: flex;
    height: 40px;
    width: fit-content;
    padding-left: 20px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.lsm}) {
      margin-top: 5px;
    }
  }

  .select-area {
    float: left;
    background: #fff;
    padding-right: 10px;
    border-radius: 25px 0 0 25px;
  }
  select,
  select.form-control {
    -moz-appearance: none;
    -webkit-appearance: none;
    background: rgba(0, 0, 0, 0) url(../img/arow.png) no-repeat scroll 90%
      center;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    cursor: pointer;
    line-height: 100%;
    max-width: 100%;
    outline: 0 none;
    position: relative;
    text-indent: 0.01px;
    text-overflow: "";
    width: 100%;
    color: #7a7a7a;
    height: 50px;
    font-size: 12px;
  }

  option {
    background: #fff;
    border: 0px solid #626262;
    padding-left: 10px;
    font-size: 14px;
  }
  .bottom.flex {
    align-items: baseline;
  }
  .search-box {
    float: left;
    position: relative;
    background: #fff;
    border-radius: 0 30px 30px 0;
  }
  .search-box input {
    border-left: 1px solid #ebebeb;
    padding: 0 41px 0 20px;
    float: left;
    outline: medium none;
    height: 25px;
  }
  input {
    background: #fff;
    border: 0;
    height: 50px;
    box-shadow: none;
    padding-left: 10px;
    font-size: 12px;
    color: #7a7a7a;
    width: 100%;
    border-radius: 0 25px 25px 0;
  }
  input::placeholder {
    font-size: 12px;
    color: #7a7a7a;
  }
  .search-box-area button {
    position: absolute;
    right: 0px;
    border: 0;
    background: transparent;
    outline: none;
    width: 36px;
  }

  .w-19 {
    width: 19px;
  }

  .ml-30 {
    margin-left: 30px;
  }
  .top {
    margin-bottom: 20px;
  }

  .rhs span {
    color: ${(props) => props.theme.color.ui_01};
    font-size: 17px;
    line-height: 29px;
  }
  .rhs img {
    vertical-align: baseline;
    height: 18px;
    width: 18px;
  }
  .ml-55 {
    margin-left: 55px;
  }
  .ml {
    margin-left: 55px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.lsm}) {
      margin-left: 22px;
    }
  }
  .menu {
    width: 31px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoint.lmd}) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoint.lmd}) {
    .desktop {
      display: block;
    }
    .mobile {
      display: none;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.lsm}) {
    .mobile {
      display: none;
    }
    .xmobile {
      display: block;
    }
    .xmobile .search-box-area {
      width: 100%;
    }
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoint.lsm}) {
    .xmobile {
      display: none;
    }
  }
`;

function NavBar({ searchInput, modalRegister, modalLogin }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Wrapper>
      <div className="desktop">
        <div className="flex j-btw ">
          <Link to="/">
            {" "}
            {/* <img className="logo" src={logo} alt="logo" /> */}
            <h2>PET VET</h2>
          </Link>
          {searchInput}
          <div className="bottom flex j-btw" style={{ width: "450px" }}>
            <Link to="/dashboard" id="dashboard-nav" className="pd-10">
              <span className="mr-7 link-text">Dashboard</span>{" "}
              <img src={dashboardIcon} alt="dashboardIcon" className="icon" />
            </Link>
            <Link to="/cart" className="pd-10">
              <span className="link-text">Bookings</span>{" "}
              <img src={calenderBookings} alt="cartIcon" className="icon w-19" />
            </Link>
            {modalRegister ? (
              modalRegister
            ) : (
              <>
                <Link to="/register">
                  <button className="btn m-10">Register Clinic</button>
                </Link>
              </>
            )}
            {modalLogin ? (
              modalLogin
            ) : (
              <>
                <Link to="/login">
                  <button className="btn m-10">Login</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="flex j-btw">
          <Link to="/">
            {/* <img className="logo" src={logo} alt="logo" /> */}
            <h2>PET VET</h2>
          </Link>
          {searchInput}

          <img
            className="menu"
            onClick={handleDrawerToggle}
            src={menuIcon}
            alt="menuIcon"
          />
        </div>
        <Drawer
          className="mobile-nav j-btw"
          variant="temporary"
          anchor="top"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Link to="/dashboard"  className="mb-10">
            <span className="red-text">Dashboard</span>{" "}
            <img src={dashboardIcon} alt="dashboardIcon" className="icon" />
          </Link>
          <Link to="/cart" className="ml-55 mb-10">
            <span className="red-text">Bookings</span>{" "}
            <img src={calenderBookings} alt="cartIcon" className="icon " />
          </Link>
          <div className=" flex nav-buttons">
            {modalRegister ? (
              modalRegister
            ) : (
              <Link to="/register">
                <button className=" orange btn">Register Clinic</button>
              </Link>
            )}
            {modalLogin ? (
              modalLogin
            ) : (
              <Link to="/login">
                <button className=" transparent ml-15 btn">Login</button>
              </Link>
            )}
          </div>
        </Drawer>
      </div>

      <div className="xmobile">
        <div className="flex j-btw ">
          <div className="flex w-100 j-btw">
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
            <img
              className="menu"
              onClick={handleDrawerToggle}
              src={menuIcon}
              alt="menuIcon"
            />
          </div>
          <Drawer
            className="mobile-nav"
            variant="temporary"
            anchor="top"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <Link to="/dashboard"  className="mb-10">
              <span className="red-text">Dashboard</span>{" "}
              <img src={dashboardIcon} alt="dashboardIcon" className="icon" />
            </Link>
            <Link to="/cart" className="ml-55 mb-10">
              <span className="red-text">Bookings</span>{" "}
              <img src={calenderBookings} alt="cartIcon" className="icon " />
            </Link>
            <div className=" flex nav-buttons">
              {modalRegister ? (
                modalRegister
              ) : (
                <Link to="/register">
                  <button className=" orange btn">Register Clinic</button>
                </Link>
              )}
              {modalLogin ? (
                modalLogin
              ) : (
                <Link to="/login">
                  <button className=" transparent ml-15 btn">Login</button>
                </Link>
              )}
            </div>
          </Drawer>
        </div>
        {searchInput}
      </div>
    </Wrapper>
  );
}

NavBar.propTypes = {
  searchInput: PropTypes.object,
};

export default NavBar;
