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

  h2 {
    margin: 2rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.gray};
    font-size: 1.24rem;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  width: 1080px;
  justify-content: space-between;
  align-items: center;
  & button {
    margin-right: 1.88rem;
    width: 80px;
    height: 32px;
  }
`;

export const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h3 {
    font-size: 1.24rem;
    color: ${(props) => props.theme.colors.gray2};
    width: 400px;
    text-align: center;
  }

  button{
    width: 120px;
    height: 32px;
  }
  
`;
