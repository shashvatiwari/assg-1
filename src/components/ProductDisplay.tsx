import React, { useState } from 'react';
import styled from 'styled-components';

const ProductDisplay: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'CRYSTAL AGATE PHONE GRIP - 18.99$',
      image: 'https://s3-alpha-sig.figma.com/img/e983/aa18/4f2bd18d1128138bb02546cd5f590b99?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l6Ze6gR2XtCMN0DoKk2OT3wc2nQsTaJNl35PSDhPKWLmsAO7yla3i2NXuF32PV1ia5LAYkEWXk3SBfpJM-ChxE0bVGEarV6bsYu35MGyaeIy755B7~jjxLz6a7y6NsXrKpmBJ43-9X7h4Zu4IN0qjhTdI1tpSwyvfF~Kj9EnyDSLmZA8NncK6rrsef~GSNCjcPH6USEs7i9xY315EhrScET5B7Chp-7hpfj5CqPVjC4xkq~20jLh92tjFFnrYHrjWgRiwy9XyleLDsgLhuu6k3TzioTHa0NNT5Fy6a0xks5uGofG1agohsTszBF75MRFxkY3rGzz~brivJWt7rx0wQ__',
    },
    {
      id: 2,
      name: 'CRYSTAL AGATE PHONE GRIP - 19.99$',
      image: 'https://s3-alpha-sig.figma.com/img/e983/aa18/4f2bd18d1128138bb02546cd5f590b99?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l6Ze6gR2XtCMN0DoKk2OT3wc2nQsTaJNl35PSDhPKWLmsAO7yla3i2NXuF32PV1ia5LAYkEWXk3SBfpJM-ChxE0bVGEarV6bsYu35MGyaeIy755B7~jjxLz6a7y6NsXrKpmBJ43-9X7h4Zu4IN0qjhTdI1tpSwyvfF~Kj9EnyDSLmZA8NncK6rrsef~GSNCjcPH6USEs7i9xY315EhrScET5B7Chp-7hpfj5CqPVjC4xkq~20jLh92tjFFnrYHrjWgRiwy9XyleLDsgLhuu6k3TzioTHa0NNT5Fy6a0xks5uGofG1agohsTszBF75MRFxkY3rGzz~brivJWt7rx0wQ__',
    },
    {
      id: 3,
      name: 'CRYSTAL AGATE PHONE GRIP - 17.99$',
      image: 'https://s3-alpha-sig.figma.com/img/e983/aa18/4f2bd18d1128138bb02546cd5f590b99?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l6Ze6gR2XtCMN0DoKk2OT3wc2nQsTaJNl35PSDhPKWLmsAO7yla3i2NXuF32PV1ia5LAYkEWXk3SBfpJM-ChxE0bVGEarV6bsYu35MGyaeIy755B7~jjxLz6a7y6NsXrKpmBJ43-9X7h4Zu4IN0qjhTdI1tpSwyvfF~Kj9EnyDSLmZA8NncK6rrsef~GSNCjcPH6USEs7i9xY315EhrScET5B7Chp-7hpfj5CqPVjC4xkq~20jLh92tjFFnrYHrjWgRiwy9XyleLDsgLhuu6k3TzioTHa0NNT5Fy6a0xks5uGofG1agohsTszBF75MRFxkY3rGzz~brivJWt7rx0wQ__',
    },
  ];

  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const handleNext = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const currentProduct = products[currentProductIndex];

  return (
    <ProductSection>
      <SliderContainer>
        <ProductCard>
          <NewLotBadge>New Lot</NewLotBadge>
          <ProductImage src={currentProduct.image} alt={currentProduct.name} />
          <ProductName>{currentProduct.name}</ProductName>
        </ProductCard>
        <ButtonContainer>
          <Button onClick={handlePrev}>&larr;</Button>
          <Button onClick={handleNext}>&rarr;</Button>
        </ButtonContainer>
      </SliderContainer>
    </ProductSection>
  );
};

const ProductSection = styled.section`
  width: 50%;
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SliderContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const ProductCard = styled.div`
  position: relative;
  border-radius: 10px;
  background: white;
  padding: 20px;
  text-align: center;
`;

const NewLotBadge = styled.div`
  position: absolute;
  top: 25px;
  left: 0px;
  background: #87A2FF;
  color: white;
  padding: 5px 10px;
  border-radius: 0 8px 8px 0;
`;

const ProductImage = styled.img`
  width: 80%;
  border-radius: 10px;
`;

const ProductName = styled.h3`
  margin-top: 15px;
  font-size: 1rem;
  color: grey;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #87A2FF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background-color: #87A2FF;
  }
`;

export default ProductDisplay;
