import React from 'react';
import styled from 'styled-components';

const HeroSection: React.FC = () => {
  return (
    <Hero>
      <TextSection>
        <WelcomeText>Welcome to</WelcomeText>
        <ShopTitle>Pop Rock Crystal Shop!</ShopTitle>
        <Description>
          Here you will find unique phone accessories, crystals, jewelry, and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
        </Description>
        <ShopNowButton href="#">SHOP NOW</ShopNowButton>
        <AboutUs>about us</AboutUs>
      </TextSection>
    </Hero>
  );
};

const Hero = styled.section`
  background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
  width: 60%;  
  padding: 50px;
  display: flex;
  align-items: center;
`;


const TextSection = styled.div`
  max-width: 600px;
`;

const WelcomeText = styled.h2`
  font-size: 2rem;
  color: white;
`;

const ShopTitle = styled.h1`
  font-size: 4rem;
  font-family: 'Poppins', sans-serif;
  color: white;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin: 20px 0;
  color: #3C3D37;
`;

const ShopNowButton = styled.a`
  background: white;
  color: #4379F2;
  padding: 15px 30px;
  font-size: 1.1rem;
  border-radius: 15px;
  text-decoration: none;
`;

const AboutUs = styled.a`
    margin: 40px;
    font-size: 1.1rem;
`;

export default HeroSection;
