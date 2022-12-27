import styled from "styled-components";

const Button = styled.button`
  float: right;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.colors.MarineBlue};
  margin-top: 3rem;
  padding: 1rem;
  border-radius: 0.6rem;
  color: ${(props) => props.theme.colors.Magnolia};
  font-weight: 600;
  cursor: pointer;
`;

export default Button;
