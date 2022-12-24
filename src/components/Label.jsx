import React from "react";
import styled from "styled-components";

const Wrapper = styled.label`
  display: block;
  color: ${(props) => props.theme.colors.MarineBlue};
  margin-bottom: .3rem;
`;

const Label = ({ forProp, children }) => {
  return <Wrapper htmlFor={forProp}>{children}</Wrapper>;
};

export default Label;
