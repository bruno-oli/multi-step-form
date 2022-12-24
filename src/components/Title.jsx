import React from "react";
import styled from "styled-components";

const Wrapper = styled.h1`
  color: ${(props) => props.theme.colors.MarineBlue};
  font-size: 2em;
  margin-bottom: .3rem;
`;

const Title = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Title;
