import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;

  main {
    display: flex;
    flex-direction: column;
    margin: 6rem auto 2rem;
    width: 1200px;
    min-height: 72vh;
    @media (max-width: 1080px) {
      width: 100%;
    }
  }

  span {
    margin: 1rem 1rem 0;
    a {
      color: ${(props) => props.theme.colors.primary2};
      margin: 0 0.24rem;
      font-weight: 600;
    }
  }

  @media (max-width: 720px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4rem auto;
  span {
    font-size: 1.24rem;
    margin: 1.4rem auto -1rem;
  }

  @media (max-width: 720px) {
    img {
      width: 240px;
      height: 320px;
    }
  }
`;

export const GamesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  @media (max-width: 1080px) {
    width: 100vw;
    flex-direction: column;
    align-items: center;
    align-self: flex-start;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 1080px) {
    width: 72vw;
    margin-left: 6.4rem;
    flex-direction: column;
  }
  @media (max-width: 720px) {
    width: 72vw;
    font-size: 0.8rem;
    margin: 0 auto;
    margin-right: 6rem;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 480px) {
    width: 72vw;
    font-size: 0.8rem;
    margin: 0 auto;
    margin-right: 3.6rem;
    flex-direction: column;
    align-items: center;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  width: 98.5%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 720px) {
    width: 296px;
    margin-left: 1rem;
    flex-direction: column;
    align-items: center;
    button {
      margin-top: 3.2rem;
      margin-left: -6.4rem;
    }
  }
`;
