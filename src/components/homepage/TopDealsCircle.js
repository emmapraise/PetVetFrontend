import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styled from "styled-components";
const Wrapper = styled.div`
  text-align: center;
  a {
    color: #212529;
  }
   a .flexy:hover{
    transform: scale(1.1);
    transition: .3s;
  }
  .flexy {
    background-color: ${(props) => props.theme.color.ui_01};
    box-shadow: 0px 5px 20px 0px rgb(0 0 0 / 27%);
    border-radius: 50%;
    height: 150px;
    width: 150px;
    justify-content: center;
    overflow: hidden;
  }
  .title {
    font-family: Roboto;
    margin-top: 18px;
    font-size: 18px;
    line-height: 21px;
  }
`;
function TopDealsCircle({ img, title }) {
  return (
    <Wrapper>
      <Link to="/products/topdeals">
        <div className="flexy flex">{img}</div>
        <p className="title">{title}</p>
      </Link>
    </Wrapper>
  );
}

TopDealsCircle.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string,
};

export default TopDealsCircle;
