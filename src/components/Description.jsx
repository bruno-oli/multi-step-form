import React from "react";
import styled from "styled-components";

const Wrapper = styled.p`
  color: ${(props) => props.theme.colors.Coolgray};
  margin-bottom: 2rem;
`;

const Description = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Description;
