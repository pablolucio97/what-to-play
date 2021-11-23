import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 1rem;
  max-width: 1200px;

  div {
    display: flex;
  }
`;

export const H1 = styled.h1`
  margin-left: 1rem;
  color: ${(props) => props.theme.colors.gray1};
`;

export const Banner = styled.div`
  background-image: url("../../banner.jpg");
  width: 1168px;
  height: 400px;
  margin: 2rem auto 4rem;
  background-size: cover;
  position: relative;

  h1{
      position: absolute;
      bottom: 40%;
      left: 32%;
      color: #fff};
      
  }
  span{
      position: absolute;
      bottom: 40%;
      left: 40%;
      color: ${(props) => props.theme.colors.primary1};
  }
`
export const ButtonsContainer = styled.button`
  display: flex;
  flex-direction: column;
  height: 320px;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  background: transparent;
  cursor: auto;
  h1{
    font-size: 2.4rem;
    width: 880px;
    margin-bottom: 3.2rem;
  }
`;
