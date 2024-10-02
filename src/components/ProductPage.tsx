import React from 'react';
import styled from 'styled-components';

const ProductPage: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <TextSection>
          <BestPriceText>BEST PRICE</BestPriceText>
          <ProductTitle>Agate Phone Grip</ProductTitle>
          <OldPrice>
          <del>44.50$</del>
          </OldPrice>
          <NewPrice>19.50$</NewPrice>
          <Description>
            These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc! Just gently squeeze the sides to remove and swap out with another color or design!
          </Description>
          <BuyButton>BUY NOW</BuyButton>
        </TextSection>
        <CircleContainer>
          <OuterCircle>
            <MiddleCircle>
              <InnerCircle>
                <ProductImage
                  src="https://s3-alpha-sig.figma.com/img/e983/aa18/4f2bd18d1128138bb02546cd5f590b99?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l6Ze6gR2XtCMN0DoKk2OT3wc2nQsTaJNl35PSDhPKWLmsAO7yla3i2NXuF32PV1ia5LAYkEWXk3SBfpJM-ChxE0bVGEarV6bsYu35MGyaeIy755B7~jjxLz6a7y6NsXrKpmBJ43-9X7h4Zu4IN0qjhTdI1tpSwyvfF~Kj9EnyDSLmZA8NncK6rrsef~GSNCjcPH6USEs7i9xY315EhrScET5B7Chp-7hpfj5CqPVjC4xkq~20jLh92tjFFnrYHrjWgRiwy9XyleLDsgLhuu6k3TzioTHa0NNT5Fy6a0xks5uGofG1agohsTszBF75MRFxkY3rGzz~brivJWt7rx0wQ__"
                  alt="Agate Phone Grip"
                />
              </InnerCircle>
            </MiddleCircle>
          </OuterCircle>
        </CircleContainer>
      </ContentWrapper>
      <WaveBackground />
    </Container>
  );
};

// Styling with Styled-Components
const Container = styled.div`
  position: relative;
  padding: 100px 50px;
//   background: #f7f8fc;
  text-align: left;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px; /* Adjusts space between text and circles */
`;

const TextSection = styled.div`
  max-width: 50%;
  text-align: left;
`;

const BestPriceText = styled.h2`
  color: #4d84e2;
  font-size: 24px;
  font-weight: bold;
`;

const ProductTitle = styled.h1`
  font-size: 48px;
  color: #2c3e50;
  margin: 10px 0;
`;

const OldPrice = styled.p`
  font-size: 24px;
  color: #9ca6af;
`;

const NewPrice = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: #ff4d4d;
`;

const Description = styled.p`
  margin-top: 20px;
  color: #6b7a88;
  font-size: 16px;
  max-width: 400px;
`;

const BuyButton = styled.button`
  margin-top: 30px;
  background: linear-gradient(to right, #1e90ff, #00bfff);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: linear-gradient(to right, #00bfff, #1e90ff);
  }
`;

const CircleContainer = styled.div`
  position: relative;
  width: 560px;
  height: 560px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OuterCircle = styled.div`
  width: 550px;
  height: 550px;
  border-radius: 50%;
  background: #FBF9FF; /* Changed to white */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Add shadow */
`;

const MiddleCircle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: white; /* Changed to white */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Add shadow */
`;

const InnerCircle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: white; /* Remains white */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Add shadow */
`;


const ProductImage = styled.img`
  width: 160px;
  height: auto;
  border-radius: 50%;
`;

const WaveBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to bottom right, #1e90ff, #00bfff);
  clip-path: polygon(0 50%, 100% 0%, 100% 100%, 0% 100%);
  z-index: -1;
`;

export default ProductPage;
