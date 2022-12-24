import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Container from "./components/Container";
import GlobalStyle from "./styles/GlobalStyle";

import theme from "./theme/Theme";

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Container />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
