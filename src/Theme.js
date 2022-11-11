import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";
import basicFont from "./assets/OpenSans-Regular.ttf";
import secFont from "./assets/Poppins-Light.otf";
import robotoFont from "./assets/Roboto-Regular.ttf";
import zed from "./assets/Zeyada.ttf";

const theme = {
  color: {
    ui_01: "#fe7c00",
    ui_02: "#D1E3FF",
    ui_03: "#FB8000",
    ui_04: "#fffefe",
    ui_05: "#FAF2EE",
    ui_06: "#FFE3C2",
    ui_07: "#CE4910",
    bg_01: "#FF8201",
    bg_02: "#033278",
    bg_03: "#FF0404",
    bg_04: "#34445c",
    white: "#fff",
    gray: " #EBE8E8",
    gray2: " #878787",
    gray3: " #C4C4C4",
    gray4: " #bfbfbf",
    gray5: "#767676",
    gray6: "#e5e5e5",
    gray7: "#999999",
    red: " #FE2E00",
    black: " #000000",
    black2: " #292929",
    black3: " #505050",
    yellow: " #FFAD01",
    dark: " #0F292F",
    blue: "#4A93FF",
  },
  breakpoint: {
    lg: "1058px",
    lmd: "1024px",
    md: "768px",
    lsm: "600px",
    sm: "480px",
  },
};

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: OpenSans;
    src: url(${basicFont}) ;
  }
@font-face {
    font-family: Poppins;
    src: url(${secFont}) ;
  }
@font-face {
    font-family: Roboto;
    src: url(${robotoFont}) ;
  }
@font-face {
    font-family: Zedaya;
    src: url(${zed}) ;
  }
	.flex {
  	display: flex;
  	align-items: center;
	}
	.grid{
		display: grid;
	}
  html,
body,
div,
span,
h5,
h1,h2,h3,h4,h6,
p,
a,
img,
menu,
section {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
}

  body{
    font-family: OpenSans;
  }
	img {
  	vertical-align: middle;
  	max-width: 100%;
  	height: auto;
	}
	a, a:hover {
		text-decoration: none !important;
	}
	.j-btw{
		justify-content: space-between;
	}
	.bold{
		font-weight: bold;
	}
  .fade-btn{
    border: none;
    outline: none;
    background-color: transparent;
  }

	.mobile-nav .MuiDrawer-paper{
	height: auto;
    padding: 15px;

  }
 
  .mb-10{
	margin-bottom: 10px;
  }
  .ml-15{
	  margin-left: 15px;
  }
 .mobile-nav .red-text{
	color: ${(props) => props.theme.color.ui_01};
    margin-right: 5px;
    font-size: 14px;
    line-height: 29px;
	
  }
  .mobile-nav .icon{
    width: 12px;
  }
  .mobile-nav .nav-buttons{
    width: 249px;

	  margin-top: 20px;
    justify-content: space-between;
  }
  .mobile-nav .nav-buttons button {
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
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 5px 8px 0px, rgb(0 0 0 / 12%) 0px 1px 14px 0px;
  }
  .mobile-nav .nav-buttons button:hover {
    background-color: #fff;
    border: 1px solid ${(props) => props.theme.color.ui_01};
    transition: 0.3s;
  }


  .modal-style .body{
	  padding: 20px;
  }

 .modal-style  .cart-text{
   font-size: 20px;
 }
 .payable{
  background-color: ${(props) => props.theme.color.dark};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
margin-bottom: 20px;
padding: 10px;
 }
 .payable p{
  font-size: 16px;
line-height: 43px;
color:  ${(props) => props.theme.color.ui_05};
 }
 .payable .flex{
   justify-content: center;
 }
 .agreement{
    color: #B71D1D;
font-size: 13px;
  }
  .modal-foot{
    margin-top: 20px;
  }
  .select-type {
    flex-direction: column;
    text-align: center;
  }

  .select-type .MuiSelect-select.MuiSelect-select{
    background: #EDF1F8;
    padding: 10px;
    border-bottom: 0;
    width: 198px;
border-radius: 10px;
margin-bottom: 10px;
  }
  .select-type .MuiSelect-icon {
    top: calc(50% - 15px);
  }
  .select-type .MuiInput-underline:before,  .select-type .MuiInput-underline:after{
    content: none;
  }
  .select-type .MuiInputBase-root{
    color: #AB7171;
    font-size: 15px;
    font-family: poppins;
    position: relative;
  }
  .modal-style .make-payment{
    justify-content: flex-end;
    margin-top: 15px;
  }
  .modal-style .make-payment-btn{
    background-color: #E2CFCF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
font-size: 15px;
padding: 5px 26px;
outline: none;
border: 1px solid #E2CFCF;
color: #180801;

  }
  .modal-style .make-payment-btn:hover{
    background-color: ${(props) => props.theme.color.dark};
color: ${(props) => props.theme.color.white};
transition: .3s;
  }

  .upload-success  {
    text-align: center;
    flex-direction: column;
    background: #0B812C;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    padding: 30px;
    align-items: center;
    color: ${(props) => props.theme.color.white};  }
    .upload-success img{
      margin: 20px 0;
    width: 50px;
    }
    .upload-success button.green{
      background-color: transparent;
      border: 1px solid  ${(props) => props.theme.color.white};
      color: ${(props) => props.theme.color.white};
      outline: none;
      width: 190px;
      padding: 0 10px;
      border-radius: 5px;
    }
`;

const Theme = (props) => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      {props.children}
    </div>
  </ThemeProvider>
);
Theme.propTypes = {
  children: PropTypes.any.isRequired,
};

export { theme };
export default Theme;
