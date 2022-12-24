import React, { useContext, useRef, useState } from "react";

//Components
import Button from "../components/Button";
import Description from "../components/Description";
import Form from "../components/Form";
import Input from "../components/Input";
import Label from "../components/Label";
import Title from "../components/Title";

//Contexts
import { StepContext } from "../contexts/StepContext";

const StepOne = () => {
  const { setStep, name, setName, email, setEmail, phone, setPhone } =
    useContext(StepContext);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    nameRef.current.classList.remove("error");
    emailRef.current.classList.remove("error");
    phoneRef.current.classList.remove("error");
    if (name && email && phone) {
      setStep(2);
    } else {
      if (name.length == 0) {
        nameRef.current.classList.add("error");
      }
      if (email.length == 0) {
        emailRef.current.classList.add("error");
      }
      if (phone.length == 0) {
        phoneRef.current.classList.add("error");
      }
    }
  }
  return (
    <Form>
      <Title>Personal info</Title>
      <Description>
        Please provide your name, email address, and phone number.
      </Description>
      <Label forProp={"name"}>Name</Label>
      <Input
        ref={nameRef}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        id="name"
        placeholder="e.g. Stephen King"
      />
      <Label forProp={"email"}>Email Adress</Label>
      <Input
        ref={emailRef}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type={"email"}
        id="email"
        placeholder="e.g stephenking@lorem.com"
      />
      <Label forProp={"phone"}>Phone Number</Label>
      <Input
        ref={phoneRef}
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        type={"number"}
        id="phone"
        placeholder="e.g +1 234 567 890"
      />
      <Button onClick={handleSubmit}>Next Step</Button>
    </Form>
  );
};

export default StepOne;
