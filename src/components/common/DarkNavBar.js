import React from "react";
import PropTypes from "prop-types";
import arrow from "../../assets/arrowDownOrange.svg";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.bg_04};
  height: 70px;
  padding: 0 40px;

  @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
    padding: 0 15px;
  }
  .cart-no {
    position: relative;
  }
  .tag {
    background-color: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.ui_01};
    position: absolute;
    line-height: 18px;
    border-radius: 50%;
    width: 17px;
    text-align: center;
    font-weight: bold;
    left: 13px;
    top: -7px;
    font-size: 14px;
  }

  .cart-text {
    padding: 0 14px;
    font-size: 30px;
    color: ${(props) => props.theme.color.ui_04};
  }
  .lhs img {
    width: 21px;
  }
  .trigger {
    cursor: pointer;
  }
  .trigger .text {
    font-size: 13px;
    line-height: 22px;
    margin-right: 5px;
    color: ${(props) => props.theme.color.ui_05};
  }
  .need-help {
    margin-right: 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    .need-help {
      margin-right: 0;
    }
    .cart-text {
      padding: 0 5px;
      font-size: 19px;
    }
    .trigger .text {
      font-size: 11px;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
    .cart-text {
      font-size: 13px;
    }
    .trigger .text {
      font-size: 10px;
    }
  }
`;
function DarkNavBar({ pageName, dropdowns, backTo }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <Wrapper className="flex j-btw">
      <div className="flex lhs">
        {backTo}

        {pageName}
      </div>
      <div className="rhs-text flex">
        {dropdowns && (
          <>
            {" "}
            <div className="need-help">
              <button
                className="fade-btn trigger flex"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <span className="text">Need Help?</span>{" "}
                <img src={arrow} alt="arrow" />
              </button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{ top: "53px" }}
              >
                <MenuItem
                  style={{ fontSize: "13px", fontFamily: "OpenSans" }}
                  onClick={handleClose}
                >
                  Contact the admin
                </MenuItem>
              </Menu>
            </div>
            <div className="account">
              <button
                className="fade-btn trigger flex"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick2}
              >
                <span className="text">My Account</span>{" "}
                <img src={arrow} alt="arrow" />
              </button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
                style={{ top: "53px" }}
              >
                <MenuItem
                  style={{ fontSize: "13px", fontFamily: "OpenSans" }}
                  onClick={handleClose2}
                >
                  Hi
                </MenuItem>
                <MenuItem
                  style={{ fontSize: "13px", fontFamily: "OpenSans" }}
                  onClick={handleClose2}
                >
                  hello
                </MenuItem>
              </Menu>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
}

DarkNavBar.propTypes = {
  pageName: PropTypes.func,
  dropdowns: PropTypes.func,
};

export default DarkNavBar;
