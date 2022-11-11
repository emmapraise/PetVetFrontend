import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import back from "../../assets/backOrange.svg";
import brand from "../../assets/logow.png";
import MenuIcon from "../../assets/menuicon.png";
// import dpIcon from '@public/assets/dpIcon.png';
// import notifyIcon from '@public/assets/notifyIcon.svg';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { ListItems } from "../dashboard/ListItems";

const Wrapper = styled.div`
  .MuiDrawer-paper {
    top: 70px;
    background-color: ${(props) => props.theme.color.dark};
  }
  #brand {
    width: 50px;
    cursor: pointer;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      width: 39px;
    }
  }
  .cart-text {
    margin-left: 10px;
    font-size: 30px;
    color: ${(props) => props.theme.color.ui_04};
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      font-size: 15px;
    }
  }
  .MuiAppBar-colorPrimary {
    background-color: #34445c;
    height: 70px;
    padding: 0 30px;
    z-index: 2222;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      padding: 0 13px;
    }
  }
  .navbar {
    display: flex;
    justify-content: space-between;
  }
  .MuiToolbar-gutters,
  .MuiIconButton-root {
    padding: 0;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    .MuiToolbar-regular {
      min-height: 64px !important;
    }
  }
  .MuiDrawer-paper-desktop .MuiDrawer-paperAnchorDockedLeft {
    width: 229px;
  }
  .MuiDrawer-paperAnchorDockedLeft {
    /* border-right: 1px solid #d6d8d3; */
    position: fixed;
  }
  main {
    display: block;
    margin-left: 14rem;
    padding: 35px;
    margin-top: 69px;
    background-color: ${(props) => props.theme.color.dark};
    min-height: 100vh;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      padding: 15px;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.lmd}) {
      margin-top: 48px;
      margin-left: 0;
    }
  }

  .menu-icon {
    margin-right: 0;
  }
  .redIcon {
    height: 32px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      height: 27px;
    }
  }
  .desktop {
    @media screen and (max-width: ${(props) => props.theme.breakpoint.lmd}) {
      display: none;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.lmd}) {
    .makeStyles-drawerPaperClose-10 {
      width: 0px;
    }
  }
  .mobile {
    display: none;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.lmd}) {
      display: inline-block;
    }
  }
  .mobile .MuiDrawer-paper {
    width: 210px;
  }
  .backy img {
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      width: 19px;
    }
  }
`;

export default function DashboardLayout({ children, navText }) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <AppBar>
        <Toolbar className="navbar">
          <div className="flex backy">
            <Link to="/">
              <img src={back} alt="back" />
            </Link>
            <p className="cart-text">{navText}</p>
          </div>
          <Link to="/">
            <img id="brand" src={brand} alt="brand" />
          </Link>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className=" mobile menu-icon"
          >
            <img src={MenuIcon} alt="MenuIcon" className="redIcon" />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* {navbar} */}

      <div className="body-grid">
        <Drawer
          variant="permanent"
          className="desktop MuiDrawer-paper-desktop"
          open={open}
        >
          <ListItems />
        </Drawer>
        <Drawer
          variant="persistent"
          anchor="left"
          className="mobile"
          open={open}
        >
          <ListItems />
        </Drawer>
        <main>{children}</main>
      </div>
    </Wrapper>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.any.isRequired,
};
