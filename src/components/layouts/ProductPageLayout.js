import React from "react";
import PropTypes from 'prop-types'

import NavBar from "../common/NavBar"

import styled from "styled-components";

export const Wrapper = styled.div`

  #search-form {
    border: none;
    outline: none;
    background-color: ${(props) => props.theme.color.white};
    border-radius: 10px;
    width: 238px;
    height: 36px;
    padding: 14px 17px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    @media screen and (max-width: 600px) {
      width: auto;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      padding: 10px;
      width: 140px;
    }
  }
  #search-form:focus {
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  }
  #search-form::placeholder {
    font-size: 15px;
    line-height: 19px;
    font-family: OpenSans;
    color: ${(props) => props.theme.color.gray4};
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      font-size: 10px;
    }
  }
  .search .orange-btn {
    font-size: 18px;
    line-height: 22px;
    background-color: ${(props) => props.theme.color.ui_01};
    height: 36px;
    border: none;
    border-radius: 10px;
    font-size: 13px;
    font-weight: bold;
    font-family: OpenSans;
    width: 91px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    outline: none;
    color: ${(props) => props.theme.color.white};
    @media screen and (max-width: 600px) {
      width: auto;
    }
  }
`;
function ProductPageLayout({children, searchInput}) {

	return (
		<Wrapper>
			<NavBar searchInput={searchInput}/>
			{children}
		</Wrapper>
	)
}

ProductPageLayout.propTypes = {
children: PropTypes.object,
searchInput: PropTypes.func,
}

export default ProductPageLayout

