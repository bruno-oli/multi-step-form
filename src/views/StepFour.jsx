import React, { useContext } from "react";
import Form from "../components/Form";
import Title from "../components/Title";
import Description from "../components/Description";
import DetailsContainer from "../components/DetailsContainer";
import PlanType from "../components/PlanType";
import AddOnsBox from "../components/AddOnsBox";
import Total from "../components/Total";
import Button from "../components/Button";
import ConfirmButton from "../components/ConfirmButton";

const StepFour = () => {
  return (
    <Form>
      <Title>Finishing up</Title>
      <Description>
        Double-check evertyng looks Ok before confirming.
      </Description>
      <DetailsContainer>
        <PlanType />
        <AddOnsBox />
      </DetailsContainer>
      <Total />
      <ConfirmButton />
    </Form>
  );
};

export default StepFour;
