import React, { useEffect, useState} from "react";
// import PropTypes from "prop-types";
import DarkNavBar from "../../components/common/DarkNavBar";
import styled from "styled-components";
import naira from "../../assets/naira.svg";
import cartEmpty from "../../assets/cart.png";
import calenderBookings from "../../assets/calendar-svgrepo-com.svg";
import PetSVG from "../../assets/PetSVG.png";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import Modal from '../../components/common/Modal';
import AddPet from '../authentication/AddPet';

import { Link } from "react-router-dom";

import markgreen from "../../assets/markgreen.png";
import axios from "axios";
import { faPersonMilitaryToPerson } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`

main{
  background-color: ${(props) => props.theme.color.ui_02};
  }
.pay-text .black{
  color: ${(props) => props.theme.color.black};
  margin-left: 4px;
}
.sub-child.quantity{
  justify-content: center;
}
.pay-text .price-text{
  margin-left: 5px;
}
  .items {
    font-size: 20px;
    line-height: 29px;
    margin-bottom: 14px;
    color: ${(props) => props.theme.color.dark};
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
  .p-image {
    width: 110px;
  }
  .discount-price {
    flex-direction: column;
    justify-content: center;
   
  }
  .titles{
    display: grid;
    grid-template-columns: 300px 1fr  ;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {

    grid-template-columns: max-content 1fr  ;
    }
  }
  .titles p{

    font-size: 17px;
    font-family: "Poppins";
    color: ${(props) => props.theme.color.gray7};
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
font-size: 13px;
}
  }
  .titles .grid{
    grid-template-columns: 1fr 200px;
    grid-gap: 10px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {

grid-template-columns:1fr max-content   ;
}
  }
  
  .titles .flexy{
    justify-content: space-around;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      justify-content: center;
}
  }
  .titles .flexy p{
    padding: 0 5px;
 
  }
  .titles .first{
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
    flex-wrap: wrap;
  }
  .outlined {
    border: 1px solid ${(props) => props.theme.color.ui_01} !important;
  }
  .cart-item {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-color: ${(props) => props.theme.color.white};
    padding: 9px 40px;
    grid-template-columns: max-content 1fr;
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
    /* width: 137px; */
    text-align: center;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.lmd}) {
      width: auto;
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

 
  .product-details .name {
    font-size: 14px;
    width: 158px;
    line-height: 22px;
    color: ${(props) => props.theme.color.black};
  }
  .mr-20 {
    margin-right: 20px;
  }
  .lhs-card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 217px;
}
  }
  .h-100 {
    height: 100%;
  }
  .makeStyles-icon-2 {
    width: 27px;
    height: 27px;
  }

  .pay-text{
    font-size: 14px;
    color: ${(props) => props.theme.color.ui_01};
  }
  .makeStyles-checkedIcon-3 {
    display: flex;
    justify-content: center;
    align-items: center;
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
.total .text{
  font-weight: bold;
  color: ${(props) => props.theme.color.ui_07};
  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    font-size: 14px;
    }
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
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
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
  .sub-child .price{
    width: 100%;
    justify-content: center;
  }
  .no-item, .payment {
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
   .payment .m-15{
    margin: 15px 0;
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
  .no-item{
  background: ${(props) => props.theme.color.ui_02};
  min-height: 100vh;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
function Pets(props) {

const [data, setData] = useState([]);  
const [open, setOpen] = useState(false);
const [isLoading, setIsLoading] = useState(true)

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};  

useEffect(() => {
  setIsLoading(true)
  try {
    const userId = localStorage.getItem("userId")

    const getPetsByUser = async (userId) => {
      const response = await axios.get(`pet/owner/${userId}`)

      setData(response.data)
      setIsLoading(false)
    }
    getPetsByUser(userId)
  } catch (error) {
    console.error(error);
  }
}, []);

  return (
    <Wrapper>
      {data.length > 0 ? (
        <DashboardLayout navText="My Pets">
          <>
            <p className="items"> {`${data.length} Pets`}</p>
            <>
              {" "}
              <Modal
							onClose={handleClose}
							open={open}
							trigger={
								<div>
									<button className=" blue btn" onClick={handleOpen}>
										Add New Pet
									</button>
								</div>
							}
							body={<AddPet layout="block" />}
						/>
					
              <div className="titles">
                <div className="flex first">
                  {" "}
                  <p>Pet Name</p>
                </div>
                <div className="grid">
                  <div className="flexy flex">
                    <p>Birth Day</p>
                    <p>Category</p>
                  </div>
                  
                </div>
              </div>
              {data.map(({ name, birthdate, petType }, index) => (
                <div className="checker-item ">
                  <div className="scrolly">
                    <div className=" grid cart-item ">
                    <div className="rhs bordered">
                        <div className="p-image">
                          <img src={PetSVG} alt="item" />
                        </div>
                        <div className="product-details">
                          <p className="name bold">{name}</p>
                        </div>
                      </div>
                      <div className="lhs-card h-100 ">
                        
                        <div className="discount-price  sub-child flex h-100 bordered">
                          <p className=" flex">
                            
                            <span className="bold text-13">{birthdate[2]}/{birthdate[1]}/{birthdate[0]}</span>
                          </p>
                          
                        </div>
                        <div className="sub-child flex h-100 bordered">
                          <p className="price flex">
                            
                            <span className="bold text-13">
                              {petType.name}
                            </span>
                          </p>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
            </>
            
          </>
        </DashboardLayout>
      ) : (
        
          <DashboardLayout navText="My Pets">
          <>
          <div className="no-item flex">
            <img src={PetSVG} alt="cartEmpty" />
            <p className="empty-text">You have no Pets</p>
            <Modal
							onClose={handleClose}
							open={open}
							trigger={
								<div>
									<button className=" blue btn" onClick={handleOpen}>
										Add New Pet
									</button>
								</div>
							}
							body={<AddPet layout="block" />}
						/>
          </div>
          </>
        </DashboardLayout>
        
      )}
    </Wrapper>
  );
}

Pets.propTypes = {};

export default Pets;
