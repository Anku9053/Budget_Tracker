// Navbar.js
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: #fff;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

const HomePageNavBar = () => {
  return (
    <Nav>
      <Logo>Budget Tracker</Logo>
      <NavLinks>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Transactions</NavLink>
        <NavLink href="#">Categories</NavLink>
        
      </NavLinks>
    </Nav>
  );
};

export default HomePageNavBar;
