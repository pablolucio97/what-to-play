import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  main {
    display: flex;
    flex-direction: column;
    margin: 6rem auto 2rem;
    width: 1200px;
    min-height: 72vh;

    div {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.36rem auto;
  span {
    font-size: 2rem;
    margin: 0.4rem auto;
  }
`;

export const GamesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
