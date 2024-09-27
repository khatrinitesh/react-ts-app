import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth; /* This can be removed since we're using react-scroll */
  }
`;

export default GlobalStyles;
