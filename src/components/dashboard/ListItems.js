import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .MuiTypography-body1 {
    /* font-weight: bold; */
    font-size: 14px;
    line-height: 24px;
    color: ${(props) => props.theme.color.white};
    font-family: "Poppins";
  }

  .MuiListItemIcon-root {
    min-width: 25px;
  }
  .MuiList-padding {
    padding-top: 0;
  }
  .MuiListItem-gutters {
    padding-left: 24px;
  }
  .active {
    background: ${(props) => props.theme.color.bg_04};
    border-left: 2px solid ${(props) => props.theme.color.ui_01};
  }
`;

export function ListItems() {
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
  // const router = useRouter();
  return (
    <Wrapper>
      <List>
        <Link to="/dashboard">
          <ListItemLink
            className={
              window.location.pathname === "/dashboard" ? "active" : ""
            }
          >
            <ListItemText primary="Dashboard" />
          </ListItemLink>
        </Link>

        <Link to="/pets">
          <ListItemLink
            className={
              window.location.pathname === "/pets" ? "active" : ""
            }
          >
            <ListItemText primary="Pets" />
          </ListItemLink>
        </Link>

        <Link to="/appointments">
          <ListItemLink
            className={
              window.location.pathname === "/appointments" ? "active" : ""
            }
          >
            <ListItemText primary="Appointments" />
          </ListItemLink>
        </Link>

        <Link to="/profile">
          <ListItemLink
            className={window.location.pathname === "/profile" ? "active" : ""}
          >
            <ListItemText primary="Profile" />
          </ListItemLink>
        </Link>
      </List>
    </Wrapper>
  );
}
