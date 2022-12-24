import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  background: none;
  outline: none;
  padding: 0.7rem 1rem;
  border: solid 1px ${(props) => props.theme.colors.Coolgray};
  border-radius: 0.3rem;
  ::placeholder {
    font-weight: 700;
    color: ${(props) => props.theme.colors.Coolgray};
  }
  margin-bottom: 1rem;
  &[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
  :focus {
    border-color: ${(props) => props.theme.colors.PurplishBlue};
  }
  &.error {
    border-color: ${(props) => props.theme.colors.Strawberryred};
  }
`;

export default Input;
