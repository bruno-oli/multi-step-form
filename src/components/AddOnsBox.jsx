import React, { useContext } from "react";
import styled from "styled-components";
import { StepContext } from "../contexts/StepContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    &:first-child {
      border-top: solid 1px #9699ab5c;
      margin-top: 1.5rem;
      padding-top: 1.5rem;
    }
    span {
      color: ${(props) => props.theme.colors.Coolgray};
      font-size: 1.1em;
      &.price {
        font-weight: 500;
      }
    }
  }
`;

const AddOnsBox = () => {
  const { onlineService, largerStorage, customizableProfile, plan } =
    useContext(StepContext);
  function getAddOnPrice(addOn) {
    if (addOn === "online") {
      return plan.yearly ? 10 : 1;
    }
    if (addOn === "larger") {
      return plan.yearly ? 20 : 2;
    }
    if (addOn === "customizable") {
      return plan.yearly ? 20 : 2;
    }
  }
  return (
    <Wrapper>
      {onlineService && (
        <div>
          <span className="name">Online service</span>
          <span className="price">
            +${getAddOnPrice("online")}/${plan.yearly ? "yr" : "mo"}
          </span>
        </div>
      )}
      {largerStorage && (
        <div>
          <span className="name">Larger storage</span>
          <span className="price">
            +${getAddOnPrice("larger")}/${plan.yearly ? "yr" : "mo"}
          </span>
        </div>
      )}
      {customizableProfile && (
        <div>
          <span className="name">Customizable profile</span>
          <span className="price">
            +${getAddOnPrice("customizable")}/${plan.yearly ? "yr" : "mo"}
          </span>
        </div>
      )}
    </Wrapper>
  );
};

export default AddOnsBox;
