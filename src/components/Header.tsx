import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <NavBar>
      <Logo>Pop Rock Crystal</Logo>
      <NavLinks>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About Us</a>
        <a href="#">Help</a>
        <CartIcon style={{marginLeft:'200px'}}>🛒</CartIcon>
      </NavLinks>
    </NavBar>
  );
};

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  background: transparent;
`;

const Logo = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: white;
`;

const NavLinks = styled.div`
  a {
    margin: 0 15px;
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
`;

const CartIcon = styled.span`
  font-size: 20px;
`;

export default Header;
