import React, { useContext } from "react";
import styled from "styled-components";
import { StepContext } from "../contexts/StepContext";

const Wrapper = styled.div`
  margin-top: 2rem;
  padding: 0 1.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  span {
    &.total__label {
      color: ${(props) => props.theme.colors.Coolgray};
    }
    &.total__value {
      font-size: 1.4em;
      color: ${(props) => props.theme.colors.PurplishBlue};
      font-weight: bold;
    }
  }
`;

const Total = () => {
  const { onlineService, largerStorage, customizableProfile, plan } =
    useContext(StepContext);
  function getTotal() {
    let total = 0;
    if (onlineService) {
      total += plan.yearly ? 10 : 1;
    }
    if (largerStorage) {
      total += plan.yearly ? 20 : 2;
    }
    if (customizableProfile) {
      total += plan.yearly ? 20 : 2;
    }
    switch (plan.planActive.name) {
      case "arcade":
        return (total += plan.yearly ? 90 : 9);
      case "advanced":
        return (total += plan.yearly ? 120 : 12);
      case "pro":
        return (total += plan.yearly ? 150 : 15);
    }
    return total;
  }
  return (
    <Wrapper>
      <span className="total__label">
        Total {plan.yearly ? `(per year)` : `(per month)`}
      </span>
      <span className="total__value">
        +${getTotal()}/{plan.yearly ? "yr" : "mo"}
      </span>
    </Wrapper>
  );
};

export default Total;
