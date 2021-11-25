import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  main {
    display: flex;
    flex-wrap: wrap;
    margin: 6rem auto 2rem;
    width: 1200px;
    min-height: 72vh;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.36rem auto;
  span{
      font-size: 2rem;
      margin: .4rem auto;
  }
`;
