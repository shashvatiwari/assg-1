import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductDisplay from './components/ProductDisplay';
import Footer from './components/Footer';
import AllProducts from './components/AllProduct';
import { GlobalStyle, MainContainer } from './styles';
import ProductPage from './components/ProductPage';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <HeroSection />
        <ProductDisplay />
      </MainContainer>
      <Footer />
      <AllProducts />
      <ProductPage/>
    </>
  );
};

export default App;
