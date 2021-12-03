import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  main {
    margin: 8rem auto 2rem;
    span {
      button {
        margin: 0 2.08rem 6rem;
      }
    }
  }

  h2 {
    margin: 6rem 2rem 0;
    font-weight: 500;
    color: ${(props) => props.theme.colors.gray};
    font-size: 1.24rem;
  }

  h3 {
    margin: 2rem;
    font-size: 1rem;
  }

  a {
    color: ${(props) => props.theme.colors.primary1};
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
  min-height: 32vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem auto;

  h3 {
    font-size: 1.08rem;
    color: ${(props) => props.theme.colors.secondary1};
    width: 400px;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  p{
    color: ${(props) => props.theme.colors.gray2};
    font-size: .8rem;
    font-weight: 300;
  }
  
  button {
    width: 120px;
    height: 32px;
  }
`;
