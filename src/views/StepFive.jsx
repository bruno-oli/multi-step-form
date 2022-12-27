import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import iconThankYou from "../assets/images/iconThankYou.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 4rem;
  img {
    margin-bottom: 1.5rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    max-width: 28rem;
    color: ${(props) => props.theme.colors.Coolgray};
    line-height: 1.3rem;
  }
`;

const StepFive = () => {
  return (
    <Wrapper>
      <img src={iconThankYou} alt="" />
      <Title>Thank you!</Title>
      <p>
        Thanks for confirming yout subscription! We hope you have fun using our
        platform. If you ever need support, please fell free to email us at
        support@loremgaming.com.
      </p>
    </Wrapper>
  );
};

export default StepFive;
