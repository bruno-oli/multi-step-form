import React, { useContext } from "react";
import styled from "styled-components";

import BoxShadow from "../styles/BoxShadow";

//images
import sidebarDesktop from "../assets/images/sidebarDesktop.svg";
import StepIndicator from "./StepIndicator";
import { StepContext } from "../contexts/StepContext";

//pages
import StepOne from "../views/StepOne";
import StepTwo from "../views/StepTwo";
import StepThree from "../views/StepThree";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60rem;
  height: 32rem;
  background-color: white;
  box-shadow: ${BoxShadow};
  padding: 1rem 5rem 1rem 1rem;
  border-radius: 0.5rem;
  .step__infos {
    height: 100%;
    width: 18rem;
    background-image: url(${sidebarDesktop});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0.5rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const Container = () => {
  const { step } = useContext(StepContext);
  function getCurrentPage(page) {
    switch (page) {
      case 1:
        return <StepOne />;
      case 2: 
        return <StepTwo />
      case 3: 
        return <StepThree />
    }
  }
  return (
    <Wrapper>
      <div className="step__infos">
        <StepIndicator stepProp={1} />
        <StepIndicator stepProp={2} />
        <StepIndicator stepProp={3} />
        <StepIndicator stepProp={4} />
      </div>
      {getCurrentPage(step)}
    </Wrapper>
  );
};

export default Container;
