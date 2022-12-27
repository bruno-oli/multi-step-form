import React, { useContext } from "react";
import styled from "styled-components";
import { StepContext } from "../contexts/StepContext";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .plan__type {
      text-transform: capitalize;
      color: ${(props) => props.theme.colors.MarineBlue};
      font-weight: 500;
      font-size: 1.2em;
      margin-bottom: 0.2rem;
    }
    button {
      cursor: pointer;
      background: none;
      outline: none;
      border: none;
      text-decoration: underline;
      color: ${(props) => props.theme.colors.Coolgray};
      font-size: 1em;
    }
  }
  .price {
    font-size: 1.2em;
    font-weight: bold;
    color: ${(props) => props.theme.colors.MarineBlue};
  }
`;

const PlanType = () => {
  const { plan, setStep } = useContext(StepContext);
  function handleChange(e) {
    e.preventDefault();
    setStep(2);
  }
  return (
    <Wrapper>
      <div>
        <span className="plan__type">
          {plan.planActive.name} {`(${plan.yearly ? "Yearly" : "Monthly"})`}
        </span>
        <button onClick={handleChange}>Change</button>
      </div>
      <span className="price">
        {plan.yearly
          ? `$${plan.planActive.price.y}/yr`
          : `$${plan.planActive.price.m}/mo`}
      </span>
    </Wrapper>
  );
};

export default PlanType;
