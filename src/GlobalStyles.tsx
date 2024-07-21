import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ol, ul {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
