import React, { useContext } from "react";

//components
import Description from "../components/Description";
import Form from "../components/Form";
import Title from "../components/Title";
import AddOnContainer from "../components/AddOnContainer";
import OnlineServiceContainer from "../components/OnlineServiceContainer";
import LargerStorageContainer from "../components/LargerStorageContainer";
import CustumizableProfileContainer from "../components/CustumizableProfileContainer";
import Button from "../components/Button";
import { StepContext } from "../contexts/StepContext";

const StepThree = () => {
  const { setStep } = useContext(StepContext);
  return (
    <Form>
      <Title>Pick add-ons</Title>
      <Description>Add-ons help enhance your gaming experience.</Description>
      <AddOnContainer>
        <OnlineServiceContainer />
        <LargerStorageContainer />
        <CustumizableProfileContainer />
      </AddOnContainer>
      <Button
        onClick={(e) => {
          e.preventDefault();
          setStep(4);
        }}
      >
        Next Step
      </Button>
    </Form>
  );
};

export default StepThree;
