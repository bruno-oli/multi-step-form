import React, { useContext } from "react";
import styled from "styled-components";
import { StepContext } from "../contexts/StepContext";

const Wrapper = styled.button`
  cursor: pointer;
  float: right;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.colors.PurplishBlue};
  margin-top: 4rem;
  color: white;
  padding: 0.6rem 1.2rem;
  font-weight: bold;
`;

const ConfirmButton = () => {
  const { setStep } = useContext(StepContext)
  return <Wrapper onClick={(e) => {
    e.preventDefault()
    setStep(5)
  }}>Confirm</Wrapper>;
};

export default ConfirmButton;
