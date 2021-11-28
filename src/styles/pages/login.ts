import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 720px;
  height: 400px;
  margin: 8rem auto 1rem;
  background: ${props => props.theme.colors.gray};
  box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px -2px, rgba(10, 10, 10, 0.02) 0px 0px 0px 1px;

  h2{
    font-size: 1.8rem;
    color: #fff;
    margin-bottom: 1.24rem;
  }
  
  span{
    color: ${props => props.theme.colors.gray2};
    text-align: justify;
    width: 320px;
    margin: 1rem auto 2rem;
    font-size: .80rem;
    font-weight: 300;
  }
`;

export const Img = styled.img`
    margin: 1rem auto;
`

export const DiscordLoginButton = styled.button`
  width: 240px;
  height: 40px;
  font-weight: 500;
  font-size: .8rem;
  margin: .4rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #7289DA;
  color: #fff;
  transition: all 0.2s ease-in-out;
  padding: .4rem;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 720px) {
    margin: 1rem;
  }
`;

export const GitHubLoginButton = styled.button`
  width: 240px;
  height: 40px;
  font-weight: 500;
  font-size: .8rem;
  margin: .4rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
  transition: all 0.2s ease-in-out;
  padding: .4rem;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 720px) {
    margin: 1rem;
  }
`;
export const GoogleLoginButton = styled.button`
  width: 240px;
  height: 40px;
  font-weight: 500;
  font-size: .8rem;
  margin: .4rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ea4535;
  color: #fff;
  transition: all 0.2s ease-in-out;
  padding: .4rem;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 720px) {
    margin: 1rem;
  }
`;