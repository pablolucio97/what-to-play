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


  }

  span{
    margin: 1rem 1rem 0;
    a{
      color: ${props => props.theme.colors.primary2};
      margin: 0 .24rem;
      font-weight:  600;
    }
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

export const UserContainer = styled.div`
  display: flex;
  width: 98.5%;
  justify-content: space-between;
  align-items: center;
`;
