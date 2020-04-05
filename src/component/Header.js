import React from "react";
import styled from "styled-components";
import {withRouter, Link} from "react-router-dom"

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  background-color: rgba(34, 44, 53, 0.9);
  z-index: 10;
`;

const TabItem = styled(Link)`
  width: 80px;
  height: 30px;
  margin-left: 30px;
  margin-top: 15px;
  color: rgba(224, 226, 219);
  font-weight: bold;
  font-family: "times";
  box-shadow: 2px 0px 0px 0px #999;
  align-items: center;
`;

const Header = () => (
  <Container>
    <TabItem to="/">Movie</TabItem>
    <TabItem to="/tv">TV</TabItem>
    <TabItem to="/search">Search</TabItem>
  </Container>
);

export default withRouter(Header);
