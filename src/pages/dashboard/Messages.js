import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import DashboardLayout from "../../components/layouts/DashboardLayout";

const Wrapper = styled.div`
  .greet {
    color: ${(props) => props.theme.color.dark};
    margin: 10px 0 40px 0;
  }
  main {
    background-color: ${(props) => props.theme.color.ui_02};
  }
  table {
    min-width: 700px;
  }
  .scrolly {
    width: 100%;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      overflow-x: scroll;
      overflow-y: hidden;
    }
  }
  .scrolly::-webkit-scrollbar {
    height: 2px;
  }

  .scrolly::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .scrolly::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.dark};
    outline: 0;
  }
  td {
    padding: 15px 0 0 0;
  }
  .empty {
    background-color: ${(props) => props.theme.color.dark};
    height: 53px;
    width: 100%;
    margin-bottom: 15px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 28%);
  }
  td a {
    color: ${(props) => props.theme.color.ui_01};
  }
  .wine {
    color: #a95835;
  }
`;
function Messages(props) {
  return (
    <Wrapper>
      <DashboardLayout navText="My Messages">
        <p className="greet bold">Hello, James Joe</p>
        <div className="empty"></div>
        <div className="scrolly">
          <table>
            <tr>
              <th>Messages</th>
              <th className="wine">Date</th>
              <th className="wine">Action</th>
            </tr>
            <tr>
              <td>Your Purchase was successful</td>
              <td>12/12/2021</td>
              <td>
                <Link>Download Reciept</Link>
              </td>
            </tr>
            <tr>
              <td>Your Purchase was successful</td>
              <td>12/12/2021</td>
              <td>
                <Link>See More</Link>
              </td>
            </tr>
          </table>
        </div>
      </DashboardLayout>
    </Wrapper>
  );
}

Messages.propTypes = {};

export default Messages;
