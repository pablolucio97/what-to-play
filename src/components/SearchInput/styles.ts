import styled from "styled-components";

export const Input = styled.input`
  width: 94%;
  height: 24px;
  padding: 1rem;
  background: ${(props) => props.theme.colors.gray2};
  color: ${(props) => props.theme.colors.gray};
  border: none;
  outline: 1px solid ${(props) => props.theme.colors.gray2};
  font-size: 1rem;
  margin: 2rem auto;
  box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px -2px,
    rgba(10, 10, 10, 0.02) 0px 0px 0px 1px;
  transition: all 0.3s ease-in-out;
  @media (max-width: 1080px) {
    margin-left: 2.24rem;
  }

  @media (max-width: 1080px) {
    margin-left: 1rem;
  }

  @media (max-width: 480px) {
    margin-left: 0;
  }

  @media (max-width: 359px) {
    margin-left: 0.8rem;
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.gray3};
  }
`;
