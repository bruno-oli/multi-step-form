import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import { StepContext } from "../contexts/StepContext";

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  div {
    &:first-child {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      font-weight: 500;
      border: solid 1px ${(props) => props.theme.colors.White};
      color: white;
    }
    &:last-child {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      span {
        color: ${(props) => props.theme.colors.White};
        &:first-child {
          font-size: 0.8rem;
          font-weight: 300;
          opacity: 80%;
        }
        &:last-child {
          font-size: 1rem;
          font-weight: 500;
          text-transform: uppercase;
        }
      }
    }
  }
`;

const StepIndicator = ({ stepProp }) => {
  const { step } = useContext(StepContext);
  const { colors } = useContext(ThemeContext);
  function getStepName() {
    switch (stepProp) {
      case 1:
        return "your info";
      case 2:
        return "select plan";
      case 3:
        return "add-ons";
      case 4:
        return "summary";
    }
  }
  const isActive = step === stepProp
  return (
    <Wrapper>
      <div
        style={{
          background: isActive ? colors.LightBlue : "transparent",
          color: isActive ? colors.MarineBlue : colors.White,
          borderColor: isActive ? colors.LightBlue : 'white'
        }}
      >
        {stepProp}
      </div>
      <div>
        <span>STEP {stepProp}</span>
        <span>{getStepName()}</span>
      </div>
    </Wrapper>
  );
};

export default StepIndicator;
