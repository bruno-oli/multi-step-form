import React from "react";

//components
import Description from "../components/Description";
import Form from "../components/Form";
import Title from "../components/Title";
import AddOnContainer from "../components/AddOnContainer";
const StepThree = () => {
  return (
    <Form>
      <Title>Pick add-ons</Title>
      <Description>Add-ons help enhance your gaming experience.</Description>
      <AddOnContainer></AddOnContainer>
    </Form>
  );
};

export default StepThree;
