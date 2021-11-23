import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;

  main {
    margin: 8rem auto 2rem;
  }
  button {
    margin: 0rem 1.48rem;
  }

`;

export const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 920px;
  height: 640px;
  margin: 2rem auto 1rem;
  background: ${(props) => props.theme.colors.gray4};

  h3 {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.gray2};
    width: 400px;
    text-align: center;
  }

  a {
    color: ${(props) => props.theme.colors.secondary2};
  }


`;
