import Switch from "react-switch";
import React, { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { StepContext } from "../contexts/StepContext";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
  height: 3rem;
  background-color: ${(props) => props.theme.colors.Magnolia};
  border-radius: 0.5rem;
  gap: 1.5rem;
  span {
    font-weight: 500;
    transition: color 0.2s;
  }
`;

const PlanTypeToggle = () => {
  const { colors } = useContext(ThemeContext);
  const { plan, setPlan } = useContext(StepContext);
  function handleChange() {
    setPlan((prevState) => {
      return { ...prevState, yearly: !plan.yearly };
    });
  }
  return (
    <Wrapper>
      <span
        style={{ color: plan.yearly ? colors.Coolgray : colors.MarineBlue }}
      >
        Monthly
      </span>
      <Switch
        value={plan.yearly}
        checked={plan.yearly}
        onChange={handleChange}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={colors.MarineBlue}
        offColor={colors.MarineBlue}
        height={20}
        width={40}
      />
      <span
        style={{ color: plan.yearly ? colors.MarineBlue : colors.Coolgray }}
      >
        Yearly
      </span>
    </Wrapper>
  );
};

export default PlanTypeToggle;
