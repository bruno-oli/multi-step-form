import React, { useContext } from "react";

//Components
import Form from "../components/Form";
import Title from "../components/Title";
import Description from "../components/Description";
import styled from "styled-components";
import CardPlan from "../components/CardPlan";
import PlanTypeToggle from "../components/PlanTypeToggle";
import Button from "../components/Button";

//contexts
import { StepContext } from "../contexts/StepContext";

const PlansContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const StepTwo = () => {
  const { setStep } = useContext(StepContext);
  function handleSubmit(e) {
    e.preventDefault();
    setStep(3);
  }
  return (
    <Form>
      <Title>Select your plan</Title>
      <Description>
        You have the option of monthly or yearly billing.
      </Description>
      <PlansContainer>
        <CardPlan planProp={"arcade"} />
        <CardPlan planProp={"advanced"} />
        <CardPlan planProp={"pro"} />
      </PlansContainer>
      <PlanTypeToggle />
      <Button onClick={handleSubmit}>Next Step</Button>
    </Form>
  );
};

export default StepTwo;
