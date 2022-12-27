import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border: solid 1px ${(props) => props.theme.colors.PurplishBlue};
  border-radius: .5rem;
  & > div {
    display: flex;
    gap: 2rem;
    input {
      width: 1.2rem;
    }
    div {
      display: flex;
      flex-direction: column;
      span {
        &.name {
          font-size: 1.2em;
          color: ${(props) => props.theme.colors.MarineBlue};
          font-weight: bold;
        }
        &.description {
          color: ${(props) => props.theme.colors.Coolgray};
        }
      }
    }
  }
  .price {
    color: ${(props) => props.theme.colors.PurplishBlue};
  }
`;

export default Wrapper;
