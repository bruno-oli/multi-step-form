import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

//images
import iconArcade from "../assets/images/iconArcade.svg";
import iconAdvanced from "../assets/images/iconAdvanced.svg";
import iconPro from "../assets/images/iconPro.svg";
import { StepContext } from "../contexts/StepContext";

const Wrapper = styled.div`
  cursor: pointer;
  width: 12rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border: solid 2px ${(props) => props.theme.colors.Coolgray};
  padding: 1rem;
  border-radius: 0.5rem;
  img {
    margin-bottom: 3rem;
  }
  h2 {
    color: ${(props) => props.theme.colors.MarineBlue};
    text-transform: capitalize;
    font-size: 1.2em;
    margin-bottom: 0.5rem;
  }
  span {
    font-weight: 500;
    display: block;
    &.plan {
      color: ${(props) => props.theme.colors.Coolgray};
    }
    &.months__free {
      color: ${(props) => props.theme.colors.MarineBlue};
      margin-top: 0.5rem;
    }
  }
`;

const CardPlan = ({ planProp }) => {
  const { plan, setPlan } = useContext(StepContext);
  const { colors } = useContext(ThemeContext);
  function getPlanInfos(plan) {
    switch (plan) {
      case "arcade":
        return {
          image: iconArcade,
          price: {
            m: 9,
          },
        };
      case "advanced":
        return {
          image: iconAdvanced,
          price: {
            m: 12,
          },
        };
      case "pro":
        return {
          image: iconPro,
          price: {
            m: 15,
          },
        };
    }
  }

  return (
    <Wrapper
      onClick={() =>
        setPlan((prevState) => {
          return {
            ...prevState,
            planActive: {
              name: planProp,
              price: {
                m: getPlanInfos(planProp).price.m,
                y: getPlanInfos(planProp).price.m * 10,
              },
            },
          };
        })
      }
      style={{
        borderColor: plan.planActive.name == planProp && colors.MarineBlue,
        background: plan.planActive.name == planProp && "#adbdff21",
      }}
    >
      <img src={getPlanInfos(planProp).image} alt="" />
      <div>
        <h2>{planProp}</h2>
        <span className="plan">
          {plan.yearly
            ? `${getPlanInfos(planProp).price.m * 10}/yr`
            : `${getPlanInfos(planProp).price.m}/mo`}
        </span>
        {plan.yearly && <span className="months__free">2 months free</span>}
      </div>
    </Wrapper>
  );
};

export default CardPlan;
