import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Scroll Down</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background: transparent;
  color: white;
  font-family: 'Poppins', sans-serif;
`;

export default Footer;
