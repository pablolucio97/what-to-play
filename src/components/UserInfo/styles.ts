import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1160px;
  height: 48px;
  padding: 0.4rem;
  margin: 0 auto;
  border-radius: 2px;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin: 0 auto 0;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100%;
  margin: 1rem 1rem 2rem;
  border: 2px solid ${(props) => props.theme.colors.gray2};
`;

export const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  @media (max-width: 720px) {
    margin: -1.24rem auto 0;
    font-size: 0.88rem;
    width: 100%;
    text-align: center;
  }
`;
