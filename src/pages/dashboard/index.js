import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import whiteKite from "../../assets/whiteKite.png";
import wallet from "../../assets/wallet.png";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  .greet {
    margin: 10px 0 40px 0;
  }
  main{
  background-color: ${(props) => props.theme.color.ui_02};
  }
  .grid {
    grid-gap: 25px;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.lsm}) {
      grid-template-columns: 1fr;
    }
  }
  .big-cards .big-card.first {
    background-color: ${(props) => props.theme.color.bg_04};
  }

  .big-cards .big-card.second {
    background: #974343;
  }
  .elevate .image.flex {
    justify-content: center;
  }
  .elevate .image img {
    width: 120px;
    height: 89px;
  }
  .amount {
    justify-content: flex-end;
  }
  .elevate {
    padding: 15px 20px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 28%);
  }
  p.text {
    margin: 10px 0;
    color: ${(props) => props.theme.color.white};
  }
  .big-card {
    height: 73%;
  }
  .small-card {
    height: 27%;
  }
  .small-card.first {
    background: rgba(20, 102, 113, 0.86);
  }
  .small-card.second {
  background-color: ${(props) => props.theme.color.dark};
  }
  .purchase-lists {
    margin-top: 30px;
    background-color: ${(props) => props.theme.color.dark};
    padding:  10px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)}
  .purchase-lists .title {
    margin: 0 0 25px 0;
    color: ${(props) => props.theme.color.ui_07};
  }
  .purchase-list {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    
  }
  .purchase-list::-webkit-scrollbar {
    height: 2px;
  }

  .purchase-list::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .purchase-list::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.bg_04};
    outline: 0;
  }
  .purchase-list .scroll {
    grid-gap: 20px;
    min-width: 800px;
  }
  .purchase-list .item {
    min-width: 200px;
    height: 200px;
    background-color: ${(props) => props.theme.color.white};
  }
`;
function index(props) {
  return (
    <Wrapper>
      <DashboardLayout navText="My Dashboard">
        <p className="greet bold">Hello, James Joe</p>
        <div className="grid big-cards">
          <div>
            {" "}
            <Link to="/purchases">
            <div  className="big-card elevate first">
              <div className="image flex">
                <img src={whiteKite} alt="" />
              </div>
              <p className="text bold">Make Purchase</p>
            </div>
            </Link>
            <Link to="/referrals">
            <div className="small-card elevate first j-btw flex j-btw">
              <p className="text bold">My Referrals</p>
              <p className="text ">10</p>
            </div>
            </Link>
         
          </div>
          <div>
          <Link to="/wallet">
          <div className="big-card elevate second">
              <div className="image flex">
                <img src={wallet} alt="" />
              </div>
              <p className="text bold">Wallet Balance</p>
              <div className="flex amount">
                <p className="text">NGN 300,000</p>
              </div>
            </div>
            </Link>
            <Link to="/purchases">
            <div className=" small-card elevate second flex j-btw">
              <p className="text bold">My Purchases</p>
              <p className="text ">10</p>
            </div>
            </Link>
          
          </div>
        </div>

        <div className="purchase-lists">
          <p className="title bold">My Purchases</p>
          <div className="purchase-list">
            <div className="scroll flex">
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </Wrapper>
  );
}

index.propTypes = {};

export default index;
