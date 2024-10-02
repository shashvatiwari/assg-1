import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
    color: #fff;
  }

  h1, h2, h3, p {
    margin: 0;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
`;
