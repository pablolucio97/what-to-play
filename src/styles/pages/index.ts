import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: -2rem auto 1rem;
  max-width: 1200px;

  div {
    display: flex;
  }

  @media (max-width: 1080px) {
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: -2rem auto 2rem;
    }
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
  margin: 6rem auto 4rem;
  position: relative;
  background-size: cover;
  
  h1{
    position: absolute;
    bottom: 40%;
    left: 32%;
    color: #fff
  };
  }
  span{
    position: absolute;
    bottom: 40%;
    left: 40%;
    color: ${(props) => props.theme.colors.primary1};
  }

  @media (max-width: 1080px){
      width: 700px;
      height: 320px;
      background-position: center;
      h1{
      position: absolute;
      bottom: 42%;
      left: 18%;
      width: 64%;
      font-size: 1.48rem;
      text-align: center;
      color: #fff;
    };
    span{
      position: absolute;
      bottom: 32%;
      left: 14%;
      text-align: center;
      width: 72%;
      a{
        color: #fff;
      }
    }
  }

  @media (max-width: 720px){
      background: none;
      width: 80%;
      height: 240px;
      h1{
      position: absolute;
      bottom: 32%;
      left: 18%;
      width: 64%;
      font-size: 1.64rem;
      text-align: center;
      color: #333;
    };
    span{
      position: absolute;
      bottom: 16%;
      left: 14%;
      text-align: center;
      font-size: .88rem;
      width: 72%;
      color: ${props => props.theme.colors.gray};
      a{
        color: ${props => props.theme.colors.primary1};
      }
    }
  }
`;
export const ButtonsContainer = styled.button`
  display: flex;
  flex-direction: column;
  height: 320px;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  background: transparent;
  cursor: auto;
  h1 {
    font-size: 2.4rem;
    width: 880px;
    margin-bottom: 3.2rem;
  }
  @media (max-width: 1080px) {
    h1 {
      font-size: 1.72rem;
      margin-top: 8rem;
      width: 80%;
    }
  }
  @media (max-width: 720px) {
    h1 {
      font-size: 1.72rem;
      margin-top: 1rem;
      width: 80%;
    }
  }
`;
