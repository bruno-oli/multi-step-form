import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
  }
  body {
    background-color: ${(props) => props.theme.colors.Magnolia};
  }
`;

export default GlobalStyle;
