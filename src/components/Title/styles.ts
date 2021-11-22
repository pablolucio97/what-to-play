import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: .4rem 1.4rem;

  @media (max-width: 1240px) {
    margin: 3rem auto 0;
  }
  @media (max-width: 720px) {
    margin: 3rem auto 0;
  }
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${props => props.theme.colors.text};
  `