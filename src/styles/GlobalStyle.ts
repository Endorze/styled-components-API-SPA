import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Manrope', sans-serif;
    background:${({ theme }) => theme.colors.background};
    color:${({ theme }) => theme.colors.primaryColor};
  }
`;
